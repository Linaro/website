---
author: fathi.boudra
categories:
- blog
date: 2011-08-31 21:15:16
description: Information about the Linaro 11.08 release. Feature highlights, ready
  to use binary images for Android and Ubuntu.
keywords: Linaro, Android, Ubuntu, Linux,
layout: post
link: /blog/releases-blog/linaro-11-08-released/
slug: linaro-11-08-released
tags:
- Releases
- Linaro
- release
title: Linaro 11.08 Released
---

The Linaro Team is pleased to announce the release of Linaro 11.08.

11.08 is the Linaro’s third release delivered on the new monthly cadence. Once again, this release includes components delivered by all Working Groups, Landing Teams and Platform Teams, bringing the best of Linaro Technology integrated on top of Android and Ubuntu based images.

In total this makes an impressive thirty components and two platform builds from all Linaro engineering teams in one shot. And again, most of this comes nicely integrated into Android and Ubuntu platform builds. This release made it again hard to select a handful of highlights from a list of roughly 80 deliverables that went into this release.

However, if we had to choose we would like to emphasize the update of linux-linaro to the 3.0.3 stable kernel including the merge of 3.1-rc1 core ARM updates, Linaro GCC 4.6 2011.08 release based on latest upstream version, and Linaro Cross Toolchain 2011.07 builds. In addition, the Android Team delivers the enablement of all of our primary boards, compiled with the Linaro 11.08 toolchain release based on GCC 4.6 and running Android 2.3.5.

We encourage everybody to use the 11.08 release. The download links for all images and components are available on our release page:
[http://wiki.linaro.org/Cycles/1108/Release](http://wiki.linaro.org/Cycles/1108/Release)

See the detailed highlights of this release to get a better overview of what was done by the individual teams. The release details are linked from the "Details" column for each release artifact on the release information:
[http://wiki.linaro.org/Cycles/1108/Release#Release_Information](http://wiki.linaro.org/Cycles/1108/Release#Release_Information)


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




  * Homepage: [](/)


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


  * Announcements:
[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development:
[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


  * IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android on irc.linaro.org or irc.freenode.net




## Known issues with this release


For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1108/Release#Known_Issues](http://wiki.linaro.org/Cycles/1108/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:
[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)