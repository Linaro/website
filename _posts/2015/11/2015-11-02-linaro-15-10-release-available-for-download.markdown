---
author: linaro
categories:
- blog
date: 2015-11-02 19:23:25
description: Linaro's 15.10 release is now available for download. See the detailed
  highlights of this release and an overview of what has been accomplished by each
  team along with all available software downloads.
excerpt: Linaro's 15.10 release is now available for download. See the detailed highlights
  of this release and an overview of what has been accomplished by each team along
  with all available software downloads.
layout: post
link: /blog/linaro-15-10-release-available-for-download/
slug: linaro-15-10-release-available-for-download
tags:
- Releases
- android
- ARMv8
- Evaluation builds
- kernel
- Linaro
- Linux
- Linux on ARM
- Open Source
- release
- release cycle
title: Linaro 15.10 Release Available for Download
wordpress_id: 9641
---

> “Once a word has been allowed to escape, it cannot be recalled." _**~ Horace, Epistles**_

Linaro 15.10  release is now available for download.  See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. We encourage everybody to use the 15.10 release.

This post includes links to more information and instructions for using the images. The download links for all images and components are available on our downloads page:

  * [/downloads/](/downloads/)

**USING THE ANDROID-BASED IMAGES**

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

  * [http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

  * [http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
  * [http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

**USING THE UBUNTU-BASED IMAGES**

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

  * [http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

**USING THE OPEN EMBEDDED-BASED IMAGES**

With the Linaro provided downloads and with ARM’s Fast Models virtual platform, you may boot a virtual ARMv8 system and run 64-bit binaries.  For more information please see:

  * [/initiatives/armv8/](/initiatives/armv8/)

**GETTING INVOLVED**

More information on Linaro can be found on our websites:

  * Homepage: [](/)
  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)

Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)
  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)
  * IRC:
    * #linaro on irc.linaro.org or irc.freenode.net
    * #linaro-android irc.linaro.org or irc.freenode.net


**KNOWN ISSUES WITH THIS RELEASE**

  * Bug reports for this release should be filed in Bugzilla ([http://bugs.linaro.org](http://bugs.linaro.org/)) against the individual packages or projects that are affected.