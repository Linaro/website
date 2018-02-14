---
author: fathi.boudra
categories:
- blog
date: 2013-12-19 20:51:20
description: Information and links for the Linaro 13.12 release
keywords: Linaro, linux, open source, ARM, linux on ARM, Android, Ubuntu, kernel,
  linux kernel, ARMv8, Linaro Connect,
layout: post
link: /blog/releases-blog/linaro-13-12-release-is-now-available-for-download/
slug: linaro-13-12-release-is-now-available-for-download
tags:
- Releases
- android
- arm
- connect
- embedded
- kernel
- Landing teams
- Linaro
- Linaro Connect
- Linux
- Linux on ARM
- Open Source
- Opensource
- release
- release cycle
- software
- ubuntu
title: Linaro 13.12 release is now available for download!
wordpress_id: 3230
---

>
> After climbing a great hill, one only finds that there are many more hills to climb.
>
> **~Nelson Mandela**

To avoid clashing with the holidays in many parts of the world, this month's release - the last for 2013 - is a week early, but contains some key Linaro Android and Ubuntu baselines developments.

  *  For Android,  the ARMv8 LSK and Nexus7_2013-AOSP builds have been setup and Android can be now built using llvm-clang toolchain with the related patches submitted to upstream.


  * For Ubuntu, this release includes the Linaro Ubuntu baseline updated to Saucy Salamander (Ubuntu release 13.10) and the initial Ubuntu arm64 rootfs.


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the Details column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1312/Release#Release_Information](http://wiki.linaro.org/Cycles/1311/Release#Release_Information)


### We encourage everybody to use the 13.12 release.


This post includes links to more information and instructions for using the images. The download links for all images and components are available on our downloads page:

  * [/downloads/](/downloads/)

### USING THE ANDROID-BASED IMAGES


The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

  * [http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)


If you are interested in getting the source and building these images yourself please see the following pages:


  * [http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


  * [http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

### USING THE UBUNTU-BASED IMAGES


The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

  * [http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

### USING THE OPEN EMBEDDED-BASED IMAGES


With the Linaro provided downloads and with ARM’s Fast Models virtual platform, you may boot a virtual ARMv8 system and run 64-bit binaries.  For more information please see:


  * [/engineering/armv8](/initiatives/armv8/)

### GETTING INVOLVED


More information on Linaro can be found on our websites:

  * Homepage: [](/)


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


  * IRC:


    * #linaro on [irc.linaro.org](/contact/irc/) or [irc.freenode.net](/contact/irc/)


    * #linaro-android [irc.linaro.org](/contact/irc/) or [irc.freenode.net](/contact/irc/)

### KNOWN ISSUES WITH THIS RELEASE


For any errata issues, please see:

  * [http://wiki.linaro.org/Cycles/1312/Release#Known_Issues](http://wiki.linaro.org/Cycles/1311/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)


### UPCOMING LINARO CONNECT EVENTS: LINARO CONNECT Asia (LCA14)


Registration for Linaro Connect Asia 2014 (LCA14), which will be in Macau, China from March 3 - 7, 2014 is now open.  More information on this event can be found at: [http://connect.linaro.org/lca14/](http://connect.linaro.org/lca14/)