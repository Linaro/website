---
author: fathi.boudra
categories:
- blog
date: 2014-01-31 01:23:11
description: Information and links for the Linaro 14.01 release
keywords: Linaro, linux, open source, ARM, linux on ARM, Android, Ubuntu, kernel,
  linux kernel, ARMv8, Linaro Connect,
layout: post
link: /blog/releases-blog/linaro-14-01-release-is-now-available-for-download/
slug: linaro-14-01-release-is-now-available-for-download
tags:
- Releases
- android
- arm
- big.little
- connect
- embedded
- Engineering cycle
- Evaluation builds
- kernel
- Landing teams
- Linaro
- Linaro Connect
- Linux on ARM
- Open Source
- Opensource
- release
- release cycle
- software
- toolchain
title: Linaro 14.01 release is now available for download!
wordpress_id: 3319
---

> It is not only for what we do that we are held responsible, but also for what we do not do.   ~ Moliere

The first release of this year contains several improvements and additions over the last 2013 release. Most significantly, various components have gained support for the Arndale Octa board, which makes big.LITTLE support available to a much wider audience, and Android has now been fully migrated to 4.4.x with no regressions compared to 4.3.

As announced at Linaro Connect USA 2013 Linaro GCC is moving to a pattern of quarterly stable releases, with engineering releases in the intervening months.  This is the first stable release, and contains no known regressions compared to the 2013.12 release. The next release of GCC 4.7 will be the 2014.04 stable release.  There will be no engineering releases of GCC 4.7 in 2013.02 or 2013.03.


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the Details column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1401/Release#Release_Information](http://wiki.linaro.org/Cycles/1401/Release#Release_Information)

We encourage everybody to use the 14.01 release.

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




  * http://wiki.linaro.org/Cycles/1401/Release#Known_Issues


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)




### UPCOMING LINARO CONNECT EVENTS: LINARO CONNECT Asia (LCA14)


Registration for Linaro Connect Asia 2014 (LCA14), which will be in Macau, China from March 3 - 7, 2014 is now open.  More information on this event can be found at: [http://connect.linaro.org/lca14/](http://connect.linaro.org/lca14/)