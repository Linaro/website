---
author: fathi.boudra
categories:
- blog
date: 2012-04-26 21:03:25
description: Links to all the downloads for the Linaro 12.04 release
layout: post
link: /blog/releases-blog/linaro-12-04-released/
slug: linaro-12-04-released
tags:
- Releases
title: Linaro 12.04 released
wordpress_id: 1609
---

"Your talent determines what you can do. Your motivation determines how much you are willing to do. Your attitude determines how well you do it." ~Lou Holtz


We are pleased to announce the release of Linaro 12.04.


The Linaro 12.04 release highlights the precision, expertise and talent which all of the Linaro Teams – Working Groups, Landing Teams and Platform Teams – use to deliver influential updates and stimulating new features that are integrated on top of Android and Ubuntu. We, together with our members, partners and community continue to build upon the future of Linux on ARM and the 12.04 release is one more step in the excellent execution of those plans.


"This release integrates the ARM Fast Models. Using Fast Models enables us to engineer and test architectural features well before production silicon chips are available from our members. The most recent major project that is seeing the benefit of this is our work with big.LITTLE integrated kernel switching and KVM (using the Cortex-A15's virtualization mode)" said Linaro CTO David A Rusling, "and these Fast Models are proving to be essential in our mission to avoid fragmentation and accelerate our member's time to market."


During the Linaro 12.04 release cycle the Developer Platform Team migrated the Linaro Evaluation Builds (LEB) to the Ubuntu 12.04 LTS (Precise Pangolin) based images. These new images are built for the ARM hard float (armhf) images and Linaro U-Boot is now based on the latest upstream release – v2012.04.1. Additionally, the Developer Platform images now provide support for the big.LITTLE integrated switcher and A15 Fast Models with KVM kernel, as well as testing coverage of the big.LITTLE project for both the reference and integrated switcher.


The Linaro Android team delivered the multimedia enablement for the Snowball and have updated all builds to AOSP ICS 4.0.4_r1.1. Also included as of this cycle are updated base toolchain components – MPFR and GMP. The Linaro Android Team ported stressapptest to Android for big.LITTLE testing and like the Developer Platform team implemented and ran weekly big.LITTLE tests.


The Infrastructure, Graphics, Kernel, Multimedia, Toolchain, and Validation teams all had updates and new features added into this release which are covered in more detail on the release wiki.


We encourage everybody to use the 12.04 release. The download links for all images and components are available on our downloads page:
[/downloads/](/downloads/)


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:
[http://wiki.linaro.org/Cycles/1204/Release#Release_Information](http://wiki.linaro.org/Cycles/1204/Release#Release_Information)


Using the Android-based images
=======================


The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:
[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)


If you are interested in getting the source and building these images yourself please see the following pages:
[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)


Using the Ubuntu-based images
=======================


The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:
[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)


Getting involved
============


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
=====================


For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1204/Release#Known_Issues](http://wiki.linaro.org/Cycles/1204/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:
[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)