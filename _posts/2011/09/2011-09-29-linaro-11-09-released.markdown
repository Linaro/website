---
author: fathi.boudra
categories:
- blog
date: 2011-09-29 19:31:40
description: Links to all the downloads for the Linaro 11.09 release
layout: post
link: /blog/releases-blog/linaro-11-09-released/
slug: linaro-11-09-released
tags:
- Releases
title: Linaro 11.09 released
---

The Linaro Team is pleased to announce the release of Linaro 11.09, the Linaro’s fourth release delivered on a monthly cadence.

This release includes components delivered by all Linaro Teams: Working Groups, Landing Teams and Platform Teams. As usual, it brings a lot of updates and new features, integrated on top of Android and Ubuntu.

Among the improvements brought by this release and delivered by Linaro engineers, it worths mentioning:

  * Beta release of our Continuous Integration (CI) Build Service focused on continuous large scale kernel tracking. This is a first step in support of the new Kernel Working Group developement model based on a stable tree and continuous integration of the Working Groups and Landing Teams Kernel.


  * Ubuntu based image distribution format has seen a big improvement through the arrival of hardware packs v2. This new format will allow more flexibility in shipping our growing board support alongside our hardware independent Ubuntu based images.


  * On the hardware enablement front, both Android and Ubuntu images have seen good improvements on most of our primary target boards. This includes the availability of Wi-Fi and Bluetooth for Android PandaBoard builds and audio (ALSA UCM) on our Ubuntu builds with proper kernel support.


  * Android image builds are first to incorporate the whole userspace and kernel using the Toolchain Working Group proposed -O3 option.


  * The Graphics Working Group added a xrender based compositing test to GLCompBench and merged a 2D convolution benchmarking scene and 3D screensaver inspired benchmarking scene to GLMark2. With these improvements, our set of graphics tests grows again by tests designed with real user experience use cases. In addition, GLMark2 is now integrated on all our Android builds and is automatically run in Linaro Validation Farm.


  * The Kernel Working Group continued their outstanding work to always make the very latest available ARM bits included as part of our linux-linaro 3.0.4  based release. We include the ARM merged code of 3.1-rc1 from Russell King's tree, stable and ready for consumption.


  * LAVA saw various plumbing improvements. The number of PandaBoards deployed got a significant boost with roughly 15 boards now being active 24/7.


  * Last but not least, we have the usual updates of our core components from  the Toolchain Working Group, including a fresh code drop for gcc-linaro,  gdb-linaro and qemu-linaro. All those of course come pre-integrated for direct use on Ubuntu host as well as Android or Ubuntu targets.


We encourage everybody to use the 11.09 release. The download links for all images and components are available on our downloads page:
[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams.
The release details are linked from the "Details" column for each released artifact on the release information:
[http://wiki.linaro.org/Cycles/1109/Release#Release_Information](http://wiki.linaro.org/Cycles/1109/Release#Release_Information)


## Using the Android-based images


The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:
[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:
[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)


## Using the Ubuntu-based images


The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:
[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

## Getting involved


More information on Linaro can be found on our websites:

* Homepage: 
    [](/)

* Wiki: 
    [http://wiki.linaro.org](http://wiki.linaro.org/)

Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

* Announcements:
    [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)

* Development:
    [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

* IRC:
    # linaro on irc.linaro.org or irc.freenode.net
    # linaro-android on irc.linaro.org or irc.freenode.net

## Known issues with this release

For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1109/Release#Known_Issues](http://wiki.linaro.org/Cycles/1109/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:
[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)