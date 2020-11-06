---
layout: post
title: Accelerating libcamera Qcam format conversion using OpenGL shaders
description: TBC
date: 2020-11-06 10:26:43
image: /assets/images/content/code_highway-2-.jpg
tags:
  - libcamera
related_projects:
  - ASA
category: blog
author: jon.burcham@linaro.org
---
# libcamera

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
If the capture frame size is set to 640 x 480, the frame rate is around 13.4x fps.
If the capture frame size is set to 1280 x 720, the frame rate is around 4.5x fps.
If the capture frame size is set to 1920 x 1080, the frame rate is even down to around 2.0x fps

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