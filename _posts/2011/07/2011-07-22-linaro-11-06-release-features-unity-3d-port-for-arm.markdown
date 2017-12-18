---
author: linaro
date: 2011-07-22 00:54:49+00:00
layout: post
link: /blog/releases-blog/linaro-11-06-release-features-unity-3d-port-for-arm/
slug: linaro-11-06-release-features-unity-3d-port-for-arm
title: Linaro 11.06 release features Unity 3D port for ARM
categories:
- blog
tags:
- Releases
- Linaro
- Linux
- release
- ubuntu
---
**The Linaro Team is pleased to announce the release of Linaro 11.06.**

11.06 is the Linaro’s first release delivered on the new monthly cadence. Since we started focusing on monthly component releases, activity in the engineering teams has been channeled into producing a coherent set of packages; This allows anyone to witness development of new features and fixes as the team progresses towards its goals. This month’s release highlights the results: a host of new components are now available, including LAVA packages from the Platform Validation Team, a collection of SoC-specific kernels provided by the Landing Teams, and preview releases of Graphics and Multimedia Working Groups work ranging from Unity 3D to a NEON-optimized libjpeg-turbo. In addition, another solid set of toolchain components, topped by a Linaro GCC 4.6 release that should start making a very good impressions on benchmarks near you.

We encourage everybody to use the 11.06 release. The download links for all images and components are available on our release page:
[http://wiki.linaro.org/Cycles/1106/Release](http://wiki.linaro.org/Cycles/1106/Release)

**Highlights of this release:**

* Linaro Evaluation Builds (LEBs) for Ubuntu comes with the full 3D Unity desktop experience enabled on PandaBoard. It's powered by Compiz and relies on the Nux toolkit for its rendering.

* Linaro Evaluation Build (LEBs) for Android on Pandaboard comes with latest stable 2.6.38 kernel from Linaro's TI Landing Team and is built using Linaro's GCC 4.5 2011.06 release; Also, latest Linaro toolchain have been packaged for Android and benchmark results showing noticeable performance gains compared to the Google AOSP gingerbread toolchain have been included as part of the release documentation: [](http://bit.ly/jTAhWa)[http://bit.ly/jTAhWa](http://bit.ly/jTAhWa)

* Initial preview releases of Ubuntu Hardware Packs for Snowball, Origen and Quickstart boards featuring the latest Linaro Landing Team components are available as part of this release.

* Linaro GCC 4.6 2011.06 and GCC 4.5 2011.06 come with bugfixes and various performance optimizations with focus on vectoriser improvements. With this release Linaro GCC 4.5 series enters maintenance mode and will ensure that development can be focused on making the "future" better.

* Linaro QEMU 2011.06, based on upstream (trunk) QEMU. This version includes a number of ARM-focused bug fixes and enhancements like the support of a model of the Gumstix Overo board and the USB keyboard/mouse support on BeagleBoard.

* Linaro Kernel 2.6.39 2011.06, based on the 2.6.39.1 stable kernel with a number of changes developed by Linaro and integrated from the 3.0-rc. It includes the ability to append Device Tree to zImage at build time, support for parallel async MMC requests and more...

* Linaro U-Boot 2011.06.1, based on upstream version 2011.06-rc3 features USB, Network and TFTP boot for PandaBoard as well as initial PXE support.

* First full release of LAVA components, Linaro's automated validation solution, has been made available as part of our monthly releases.

* QEMU with OpenGL ES acceleration - technology preview. For more details, please visit [https://wiki.linaro.org/Platform/DevPlatform/QemuOpenGLES](https://wiki.linaro.org/Platform/DevPlatform/QemuOpenGLES)

* The Unity, NUX and Compiz port for EGL/OpenGL ES v2 that are part of our Ubuntu LEB for this month are also made available as components maintained by Linaro's Graphics Working Group.

* Linaro Image Tools 2011.06-1 features the support for the --image_file option in linaro-android-media-create and support the new upstream name of the smdkv310 SPL.

* Powerdebug 0.5-2011.06 is a major rewrite of the code to put in place a generic framework to integrate more easily new components like the thermal sensors. It's more modular and decrease the dependency between the display and the power management blocks.

* And much more... The release details are linked from the "Details" column for each release artifact on the 11.06 release page.
