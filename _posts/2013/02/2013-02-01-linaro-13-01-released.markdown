---
author: fathi.boudra
categories:
- blog
date: 2013-02-01 13:12:29
description: Linaro announces the release of Linaro 13.01.
keywords: Linaro, Linux on ARM, Linux, Open Source, ARM, Android, Ubuntu, Linaro Enterprise
  Group, LEG, Toolchain, big.LITTLE, Kernel, UMM, ARMv8, Release, 13.01, Announcement
layout: post
link: /blog/releases-blog/linaro-13-01-released/
slug: linaro-13-01-released
title: Linaro 13.01 released
wordpress_id: 2266
---

> All things are created twice; first mentally; then physically. The key to creativity is to begin with the end in mind, with a vision and a blue > print of the desired result.
>
> ~ **Stephen Covey**

We are pleased to announce the release of Linaro 13.01.

With the first release of the calendar year, Linaro is happy to highlight the ingredients that make up the deliverables, again produced by Linaro Teams  Working Groups, Enterprise Group, Landing Teams and Platform Teams . Linaro anticipates another great year of Linux on ARM development celebrating new members and producing some cutting edge advances.

The Developer Platform Team has enabled 64bit HipHop VM development in OpenEmbedded, continued to merge ARMv8 support into the OpenEmbedded platform and upstream, engaged initial support for the [Arndale board](http://www.arndaleboard.org/) and released Linux Linaro 3.8-rc4 2013.01.

For the Android team, it was a busy cycle. The initial changes to android-build page for the new build program have been done. They are finally moving towards consolidation of manifests: Origen and Versatile Express can now be synced and built from the same manifest. The Team is happy to announce linaro-android-tools which is directed towards kernel developers. The tool can be used to update kernel and initrd in Android without having to remove the SDcard. They have also updated the third party benchmarks to use the [uiatomator testing framework](http://developer.android.com/tools/help/uiautomator/index.html) introduced in Jelly Bean. Android hardware pack support has been added.

The Linaro Enterprise Group (LEG) has released Linaro UEFI 2013.01. The highlights include fixes for native building of UEFI on ARM platforms and improvements to flashing images on Arndale board and enable native building for PandaBoard.

The Power Management Group hosted a big.LITTLE sprint in Cambridge led by Amit Kucheria. A meeting of minds between ARM, Linaro and the community succeeded in achieving enhanced focus and a more defined roadmap for the big.LITTLE story. Topics included clearly defined benchmarking to determine the effectiveness of the platform, enhanced verification to augment the traditional kernel power/performance testing, and a well defined roadmap for big.LITTLE on Android. In related big.LITTLE MP development, version 14 of the big.LITTLE MP tree has been released [http://lists.linaro.org/pipermail/linaro-dev/2013-January/015037.html].

On the social front Linaro is looking forward to [Linaro Connect Asia 2013](/initiatives/connect/) in Hong Kong. Once again a [Demo Friday event](/blog/demo-friday-at-linaro-connect-q1-12-to-show-the-latest-linux-developments-on-arm/) will showcase the latest Linux developments on ARM. Linaro members, partners and community will offer interactive demonstrations which showcase the combination of ARM based processor boards and Linaro builds of Android, Ubuntu and more.

We encourage everybody to use the 13.01 release. The download links for all images and components are available on our downloads page:
[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:
[http://wiki.linaro.org/Cycles/1301/Release#Release_Information](http://wiki.linaro.org/Cycles/1301/Release#Release_Information)

Using the Android-based images

* * *

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:
[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:
[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

Using the Ubuntu-based images

* * *

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:
[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

Getting involved

* * *

More information on Linaro can be found on our websites:
* Homepage: []()
* Wiki: [http://wiki.linaro.org](http://wiki.linaro.org)

Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:
* Announcements:
[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)

* Development:
[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

* IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android irc.linaro.org or irc.freenode.net

Known issues with this release

* * *

For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1301/Release#Known_Issues](http://wiki.linaro.org/Cycles/1301/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:
[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)