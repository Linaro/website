---
author: linaro
categories:
- blog
date: 2011-08-06 02:19:30
description: Listing of the links to all the downloads for the release
layout: post
link: /blog/releases-blog/release-of-linaro-11-07/
slug: release-of-linaro-11-07
tags:
- Releases
title: Release of Linaro 11.07
wordpress_id: 3399
---

11.07 is the Linaro’s second release delivered on the new monthly cadence. This release includes components from all Working Groups and Landing Teams as well as set of Android and Ubuntu based images that come with integrated Linaro updates to provide a fastpath to Linaro technology. The 11.07 Linaro release moved all main kernel efforts to Linux 3.0. It features a 3.0 linux-linaro, linux-linaro-android kernel and comes with Linaro Evaluation Builds (LEBs)of Ubuntu and Android based on linux-linaro-3.0 TI Landing Team's kernel.

Additionaly, 11.07 saw the Linaro Android move to gcc-linaro 4.6 as the default compiler; this means that all main Linaro efforts are now focussed on the GCC 4.6 series as their baseline.

We encourage everybody to use the 11.07 release. The download links for all images and components are available on our release page:

[http://wiki.linaro.org/Cycles/1107/Release](http://wiki.linaro.org/Cycles/1107/Release)

**Highlights of this release:**

* Linaro Evaluation Build (LEB) for Android on PandaBoard is built on Linux 3.0 kernel with gcc-linaro 4.6 as the default compiler which is used for all official Linaro Android Platform builds. This Linaro Android monthly Release exhibits the first official Linaro Android Toolchain release based on the most recent gcc-linaro 4.6, and the first Linaro Android release for ST-Ericsson Snowball using Landing Team kernel based on linux-linaro-android. On top, Linaro Android 11.07 comes with the more advanced more visually appealing Launcher2 by default.

* Android GCC benchmark results for 11.07 release can be found on [http://wiki.linaro.org/Platform/Android/AndroidToolchainBenchmarking/2011-07](http://wiki.linaro.org/Platform/Android/AndroidToolchainBenchmarking/2011-07)

* Linaro Evaluation Build (LEB) for Ubuntu also uses the most recent linux-linaro kernel based on Linux 3.0 and includes the latest Linaro Cross Toolchain available for Ubuntu Lucid and Natty. ARM DS-5 packages are now available and enabled by default for the developer image. They are packaged and can be easily installed on Ubuntu host and target by simply enabling a "linaro" hosted PPA. The Developer Platform Team continued to improve the developer experience for Ubuntu and Linux based ARM by adding support for cross buildable images to Live-build 3 which makes it easier to produce Ubuntu images in a cross build environment.
Additional highlights for our Ubuntu efforts include working hwpacks for all Landing Team low cost boards - a first, libjpeg-turbo integrated and set as the default for Ubuntu/LEB images, and packages delivered by the Graphics Working Group like glcompbench, glmark2 and unity.

* Linaro kernel current release is based on the 3.0 stable kernel with a number of changes developed by Linaro and integrated from the 3.1-rc cycle. In addition to the changes already in 3.0, this release of the Linaro kernel includes: the comprehensive ARM kprobes work which extend kprobes to support Thumb-2 kernels, the new processor struct macros, the ARM cpu topology definition, basic Cortex A15 support, DMA infrastructure cleanups, a kernel helper to perform 64-bit atomic operations and multiple enhancements for DT support.

* Initial release of Linaro-Android Common tree based on Linaro-kernel 3.0 with addition of ADB functionality to linaro-android tree for OMAP3.

* U-boot provides an incremental release with multiple improvements: a better PXE support based on feedback from the Ubuntu ARM server team, generated unique ethernet address based on SOC die id on OMAP4, ability to customize boot command via boot.scr script file or uEnv.txt plain text file, new fdt_high environment variable as part of a fix to allow using all 1G of memory on PandaBoard.

* Power Management Team enabled sched_mc for ARM, added topology detection for ARM thus allowing scheduler to be tweaked to save power.

* From the Graphics Working Group, this release adds support for OpenGL ES and EGL in GLEW library for ARM Linux, glewinfo and visualinfo utilities support for OpenGL ES, new versions of compiz and plugins-main with updates to the 0.9.5.2 upstream branches, and multiple enhancements to the glmark2 and glcompbench benchmarks for OpenGL ES 2.0.

* Toolchain Working Group has released Linaro GCC 4.6 and 4.5. The 4.6 Series has new optimisations including improved vectoriser support for shifts,widening multiplies, and peeling; improvements to the swing-modulo scheduler; and fixes multiple bugs found in the last month.

* With 11.07 release, the Infrastructure Team have improved creation, testing and usage of the Linaro images. Linaro-fetch-image-ui is a wizard style graphical tool that guides the user through the process of creating a fully functional operating system for Linaro supported hardware, along with a command line that does the same. Pre-built images will be available, the ground work has finished that will allow the production of pre-built images that can simply be copied to a SD card and run without the need to learn about Linaro tools when just trying out a standard image.

* This month LAVA main changes is the UI for the dashboard got an overhaul with new features added. Basic UI is added to the sheduler to see the status of boards and jobs. The ability to schedule jobs by device type is also added to the scheduler. The dispatcher has better error handling and preliminary support for Snowball boards and lava-test now streams results while the test is running.

* Office of the CTO (OCTO) has produced its first ARM hard-float images (alpha stage). More information on the usage and the work related to those images can be found on [https://blueprints.launchpad.net/linaro/+spec/engr-octo-armhf-images](https://blueprints.launchpad.net/linaro/+spec/engr-octo-armhf-images)

* And much more... The release details are linked from the "Details" column for each release artifact on the 11.07 release page.