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

```