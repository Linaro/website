---
author: fathi.boudra
categories:
- blog
date: 2013-12-02 16:34:05
description: Linaro 13.11 release information and links to downloads
keywords: linaro, ARM, Linux, Linux on ARM, opensource, releases, 13.11 release, Android,
  LAVA, ARMv8
layout: post
link: /blog/releases-blog/linaro-13-11-released/
slug: linaro-13-11-released
tags:
- Releases
- android
- arm
- embedded
- Evaluation builds
- kernel
- lava
- Linaro
- Linux
- Linux on ARM
- Opensource
- release
- release cycle
- toolchain
- tools
title: Linaro 13.11 Released
wordpress_id: 3206
---

> I like Kit-Kat, unless I'm with four or more people. - Mitch Hedberg


## The Linaro 13.11 release is now available for download!


This month's cycle includes significant developments from Linaro Connect USA 2013 (LCU13). All the Linaro engineering groups got together in Santa Clara at the end of October to discuss work for the next engineering cycle and progress critical projects face to face and this has benefited the releases from each of the groups. In this cycle, three items stand out as particularly significant:

  * The long-awaited Android 4.4 "Kit-Kat" was released and this is now included in Linaro Android. As with previous cycles, the team had this up and running on member devices very soon after the official release and there are several videos showing this work, for example:  [http://www.youtube.com/watch?v=bYQK1hT9iTk](http://www.youtube.com/watch?v=bYQK1hT9iTk)


  * LAVA documentation took a giant leap forward following a week of concentrated effort at LCU13. The latest version of the source code for this is included in the repository, with a navigable version regularly updated at [http://validation.linaro.org/static/docs/](http://validation.linaro.org/static/docs/).


  * Linaro GDB, including improved ARMv8 AArch64 support, has now been added to Linaro's layer and is available in the Linaro OpenEmbedded baseline.


We encourage everybody to use the 13.11 release. This post includes links to more information and instructions for using the images. The download links for all images and components are available on our downloads page:


  * [/downloads/](/downloads/)


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:


  * [http://wiki.linaro.org/Cycles/1311/Release#Release_Information](http://wiki.linaro.org/Cycles/1311/Release#Release_Information)


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




  * [http://wiki.linaro.org/Cycles/1311/Release#Known_Issues](http://wiki.linaro.org/Cycles/1311/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)