---
layout: post
title: Accelerating libcamera Qcam format conversion using OpenGL shaders
description: "Within this article, we decided to contribute to accelerating Qcam
  so we can have a much more performant demo of libcamera on some of the
  platforms we care about. "
date: 2020-11-06 10:26:43
image: /assets/images/content/code_highway-2-.jpg
tags:
  - libcamera
  - RockPi4B
  - Rockchip RK3399
related_projects: []
category: blog
author: show.liu@linaro.org
---
## libcamera

[libcamera](https://libcamera.org/) is an open source friendly camera stack and userspace library. It provides an intuitive API and methods to control the complexity of camera hardware for multiple platforms. The “qcam” application is one of the built-in example programs in libcamera to demonstrate how to handle the cameras using the libcamera APIs. It is a Qt based GUI application that provides camera preview and capture functions.\*\*

## The pixel format

Qcam builds the pipeline using the libcamera pipeline handler. The pipeline handler will generate the configuration for the camera and also set the pixel format and the resolution for the camera stream, in case of the Rock Pi 4B(Rockchip RK3399) platform with imx219, the pixel format will be set to YUV “NV12” format before starting the capture. After starting the capture, qcam grabs the frames from the camera sensor according to the configuration.

```
$ v4l2-ctl --list-formats-ext
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'NV12' (Y/CbCr 4:2:0)
$
```

To display the “NV12” format frames in Qt framework, it needs to convert it to RGBA format pixel by pixel and then it is rendered by the Qpainter component. The conversion algorithm is shown below:

```
| R |       | 1    0                1.28033 |     | Y |
| G |    =  | 1   -0.21482         -0.38059 |   X | U |
| B |       | 1    2.12798          0       |     | V |
```

*The formulas for BT.601(*1)*

However, the default CPU software conversion is not very efficient. For example when doing the conversion on the CPU of a RockPi4B which has a RKI3399 SoC, we get the following framerates in QCam:
If the capture frame size is set to **640 x 480**, the frame rate is around **13.4x** fps.
If the capture frame size is set to **1280 x 720**, the frame rate is around **4.5x** fps.
If the capture frame size is set to **1920 x 1080**, the frame rate is even down to around **2.0x** fps

As libcamera is helping to solve a longstanding pain point in the Linux ecosystem (the management of complex cameras), we decided to contribute to accelerating Qcam so we can have a much more performant demo of libcamera on some of the platforms Linaro cares about. Moving these heavy loading tasks to the GPU would be more efficient \[2] and there are already lots of examples about sharing the loading with the GPU \[3] that can be referenced. Also this would make a demo that nicely combines libcamera with some of the great work that has happened recently in [Mesa](https://gitlab.freedesktop.org/mesa/mesa/) on the Panfrost GPU driver.

## Requirement

The Panfrost driver requires the Linux kernel version to be higher than v5.2. Also we ensure the GPU driver is enabled in the kernel. 

```
$ make menuconfig
    Device Drivers  --->
        Graphics support  --->
            <M> Panfrost (DRM support for ARM Mali Midgard/Bifrost GPUs)    
```

The Panfrost driver initially debuted at mesa 19.1 release, but I recommend to use the latest mesa version to get the more complete OpenGL support. In my case on the RockPi4B platform, the kernel version is v5.8.11 and the mesa version is 20.2.

```
$ uname -a
Linux manjaro 5.8.11-00001-g9a8f115558ca #2 SMP PREEMPT Thu Sep 24 11:12:31 CST
2020 aarch64 GNU/Linux

$ glxinfo -B
name of display: :0.0
display: :0  screen: 0
direct rendering: Yes
Extended renderer info (GLX_MESA_query_renderer):
    Vendor: Panfrost (0xffffffff)
    Device: Mali T860 (Panfrost) (0xffffffff)
    Version: 20.2.0
    Accelerated: yes
    Video memory: 3806MB
    Unified memory: yes
    Preferred profile: compat (0x2)
    Max core profile version: 0.0
    Max compat profile version: 2.1
    Max GLES1 profile version: 1.1
    Max GLES[23] profile version: 3.0
OpenGL vendor string: Panfrost
OpenGL renderer string: Mali T860 (Panfrost)
OpenGL version string: 2.1 Mesa 20.2.0-devel (git-14a12b771d)
OpenGL shading language version string: 1.20

OpenGL ES profile version string: OpenGL ES 3.0 Mesa 20.2.0-devel (git-14a12b771d)
OpenGL ES profile shading language version string: OpenGL ES GLSL ES 3.00
```

## OpenGL components

To enable the OpenGL support for “qcam”, the QOpenGLWidget, QOpenGLFunctions and QOpenGLShaderProgram 3 main Qt OpenGL components would be added to handle the OpenGL format convert and frame rendering. 
The new class is inherited from QOpenGLWidget and QOpenGLFunctions.

```
class ViewFinderGL : public QOpenGLWidget,
		             public ViewFinder,
		             protected QOpenGLFunctions
```

And in this new class reimplement the initializeGL(), resizeGL() and paintGL() 3 virtual functions that provided by QOpenGLWidget.
**initializeGL()** : Sets up the OpenGL resources and state.
**resizeGL()** : Sets up the OpenGL viewport, projection, etc.
**paintGL()** : Renders the OpenGL scene. 

In **initializeGL()** function, we initialize OpenGL function resolution for the current context. 

```
oid ViewFinderGL::initializeGL()
{
initializeOpenGLFunctions();
```

And create and allocate the vertex buffer for this 2D image.

```
static const GLfloat coordinates[2][4][2]{
		{
			/* Vertex coordinates */
			{ -1.0f, -1.0f },
			{ -1.0f, +1.0f },
			{ +1.0f, +1.0f },
			{ +1.0f, -1.0f },
		},
		{
			/* Texture coordinates */
			{ 0.0f, 1.0f },
			{ 0.0f, 0.0f },
			{ 1.0f, 0.0f },
			{ 1.0f, 1.0f },
		},
	};

	vertexBuffer_.create();
	vertexBuffer_.bind();
	vertexBuffer_.allocate(coordinates, sizeof(coordinates));
```

The vertex and the texture coordinates mapping is like: -

```
(-1.0f, 1.0f)  +----------------+ (1.0f,1.0f)
               |                |
               |                |
               |                |
               |                |
(-1.0f, -1.0f) +----------------+ (1.0f, -1.0f)
```

*The vertex coordinates(*4)*

```
(0.0f, 0.0f)  +----------------+ (1.0f, 0.0f)
              |                |
              |                |
              |                |
              |                |
(0.0f, 1.0f)  +----------------+ (1.0f, 1.0f)
```

*The texture coordinates(*5)*

I.e. The vertex and texture coordinates mapping is like below
vertex coordinates           <-->            texture coordinates
        (-1.0f, -1.0f)              <-->              (0.0f, 1.0f) \[lower left]
        ( 1.0f, -1.0f)              <-->              (1.0f, 1.0f) \[lower right]
        ( 1.0f,  1.0f)               <-->              (1.0f, 0.0f) \[top right]
        (-1.0f,  1.0f)              <-->              (0.0f, 0.0f) \[top left]

And create the vertex shader, and set the clip-space output position of the current vertex.

```
attribute vec4 vertexIn;
attribute vec2 textureIn;
varying vec2 textureOut;

void main(void)
{
	gl_Position = vertexIn;
	textureOut = textureIn;
}
```

In **resizeGL()**, will resize the OpenGL viewport whenever the widget has been resized.

```
void ViewFinderGL::resizeGL(int w, int h)
{
	glViewport(0, 0, w, h);
}
```

In **paintGL()**, we have 2 parts. One continues the initialization of the fragment shader and the other is actually doing the rendering. I postponed the fragment shader initialization until here as initializeGL() and resizeGL() are called when the ViewFinderGL has been constructed and the camera configuration is not generated at that stage.  After the camera device has been opened the camera configuration is generated and the pixel format is set, we can select and create the specific fragment shader accordingly.

```
bool ViewFinderGL::selectFormat(const libcamera::PixelFormat &format)
{
	bool ret = true;
	switch (format) {
	case libcamera::formats::NV12:
	horzSubSample_ = 2;
		vertSubSample_ = 2;
		vertexShaderSrc_ = ":NV_vertex_shader.glsl";
		fragmentShaderSrc_ = ":NV_2_planes_UV_f.glsl";
		break;
	case libcamera::formats::NV21:
		horzSubSample_ = 2;
		vertSubSample_ = 2;
		vertexShaderSrc_ = ":NV_vertex_shader.glsl";
		fragmentShaderSrc_ = ":NV_2_planes_VU_f.glsl";
		Break;
```

The fragment shader only has been initialized once at first time updateGL() being called. 

```
void ViewFinderGL::paintGL()
{
	if (!fragmentShader_)
		if (!createFragmentShader()) {
			qWarning() << "[ViewFinderGL]:"
				   << "create fragment shader failed.";
		}
```

Another part of updateGL(), is actually doing the format conversion and rendering according to the format.
For example, NV12/NV21 these kinds of 2 planes YUV frames.

```
         Width
+----------------------------------------+
|                                        |
|                                        |
|                                        |
|                      Y                 |  Height
|                                        |
|                                        |
|                                        |
|                                        |
+----------------------------------------+
|                                        |
|                                        |
|                UV/VU                   |  Height / 2
|                                        |
+----------------------------------------+
```

*NV12/NV21 YUV frame memory map*

The color format convert and frame rendering is done by the fragment shader.

```
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 textureOut;
uniform sampler2D tex_y;
uniform sampler2D tex_u;

void main(void)
{
	vec3 yuv;
	vec3 rgb;
	mat3 yuv2rgb_bt601_mat = mat3(
		vec3(1.164,  1.164, 1.164),
		vec3(0.000, -0.392, 2.017),
		vec3(1.596, -0.813, 0.000)
	);

	yuv.x = texture2D(tex_y, textureOut).r - 0.063;
	yuv.y = texture2D(tex_u, textureOut).r - 0.500;
	yuv.z = texture2D(tex_u, textureOut).g - 0.500;

	rgb = yuv2rgb_bt601_mat * yuv;
	gl_FragColor = vec4(rgb, 1.0);
}
```

*The fragment shader for 2 planes YUV frame*

```
oid ViewFinderGL::doRender()
{
	switch (format_) {
	case libcamera::formats::NV12:
	case libcamera::formats::NV21:
	case libcamera::formats::NV16:
	case libcamera::formats::NV61:
	case libcamera::formats::NV24:
	case libcamera::formats::NV42:
		/* Activate texture Y */
		glActiveTexture(GL_TEXTURE0);
        configureTexture(id_y_);
		glTexImage2D(GL_TEXTURE_2D,
			     0,
			     GL_RED,
			     size_.width(),
			     size_.height(),
			     0,
			     GL_RED,
			     GL_UNSIGNED_BYTE,
			     yuvData_);
		shaderProgram_.setUniformValue(textureUniformY_, 0);

		/* Activate texture UV/VU */
		glActiveTexture(GL_TEXTURE1);
		configureTexture(id_u_);
		glTexImage2D(GL_TEXTURE_2D,
			     0,
			     GL_RG,
			     size_.width() / horzSubSample_,
			     size_.height() / vertSubSample_,
			     0,
			     GL_RG,
			     GL_UNSIGNED_BYTE,
			     (char *)yuvData_ + size_.width() * size_.height());
		shaderProgram_.setUniformValue(textureUniformU_, 1);
		break;
```

The code has already been merged into the libcamera git tree \[6], but if you’re interested in the specific patches that implement what we’ve talked about in this post then please take a look at the following commits

* <https://git.linuxtv.org/libcamera.git/commit/?id=4a4a3e715b8314c56a2a32788d92fdec464af7b7>
* <https://git.linuxtv.org/libcamera.git/commit/?id=2daa704c968c8aa7a4b209450f228b41e9d42d85>
* <https://git.linuxtv.org/libcamera.git/commit/?id=9db6ce0ba499eba53db236558d783a4ff7aa3896>
* <https://git.linuxtv.org/libcamera.git/commit/?id=219cbfe76b5a7d9d8206c71aa6115ff8befcff9b>

## Conclusion

After moving the format conversion to the GPU, the qcam frame rate improved a lot. On the RockPi4b platform the frame rate reached **30.0x** fps with the capture resolution set to **1920x1080**.

### References

1. <https://en.wikipedia.org/wiki/YUV>
2. <https://www.linuxjournal.com/content/image-processing-opengl-and-shaders>
3. <https://github.com/gjasny/v4l-utils/blob/master/utils/qv4l2/capture-win-gl.cpp#L1547>
4. <https://learnopengl.com/Getting-started/Hello-Triangle>
5. <https://learnopengl.com/Getting-started/Textures>
6. <https://git.linuxtv.org/libcamera.git/tree/src/qcam>

## About the Author

Show is an engineer within the Multimedia Working Group. For further information on this group, click [here](https://www.linaro.org/client-devices/).