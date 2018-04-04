---
author: linaro
categories:
- blog
date: 2012-10-25 16:35:47
description: Find out how you can get the latest Linaro release--12.10, what the highlights
  are for this release and how you can participate in LCE 12-Copenhagen remotely.
keywords: Linaro, Linux on ARM, Open Source, Releases, Working Group, Landing Teams,
  Community, Ubuntu, Android, 12.10. Linaro 12.10, Linaro Connect, Bella Center, Copenhagen,
  Demo Friday
layout: post
link: /blog/community-blog/linaro-12-10-release-is-now-available/
slug: linaro-12-10-release-is-now-available
tags:
- Android
- Community
- Connect Events
- Hardware
- Releases
title: Linaro 12.10 Release is Now Available
wordpress_id: 1959
---

> A dream doesn't become reality through magic; it takes sweat, determination and hard work ~ Colin Powell

* * *

## The Linaro 12.10 release is now available!




The Linaro 12.10 release cycle highlights the determination and hard work of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams – who have provided all the updates and new features that are integrated on top of Android and Ubuntu during this development cycle. The 12.10 release is another example of how Linaro works together with its members, partners and community to continue to build the future of Linux on ARM.

* * *

In addition to the successful release of Linaro 12.10, [the plans](http://connect.linaro.org/resources/#schedule) for the upcoming Linaro Connect (LCE 12 -Copenhagen) have been finalized as well. Added to the Connect schedule will be three mini-summits which focus on Android, ARMv8 (64 bit) and big.LITTLE. The summits showcase the exciting work that is now being seen in the 12.10 release cycle.


* * *


"The Linaro 12.10 release was a foundational cycle for the Linaro Android Team and included Connect preparations, target refinement and test and benchmark automation work, " said Zach Pfeffer, Android Team Tech Lead. He added, "All of these areas will prepare the team for a strong Connect, better target support and our upcoming push to more actively improve AOSP."


* * *


On the ARMv8 front, Linaro is now making early ARMv8 images available to interested developers. For a primer on the ARMv8 architecture, the AArch64 execution state and the A64 instruction set, please visit[ the ARM portal](http://www.arm.com/products/processors/instruction-set-architectures/armv8-architecture.php).


* * *


While there is currently no ARMv8 hardware available, ARM and Linaro have developed support for AArch64/A64 against virtual platforms and started sending the resulting patches to various open source projects. With the [Linaro provided downloads](/blog/linaro-armv8-downloads-now-available/) and with ARM’s Fast Models virtual platform, you may boot a virtual ARMv8 system and run 64-bit binaries. These downloads are currently in beta, but they should just work and we are looking towards including them as part of our monthly releases. For more information on these ARMv8 images please take a look at the Linaro Engineer pages on the [Linaro website](/initiatives/armv8/).


* * *


Work on big.LITTLE continues as the Linaro Kernel Working Group highlights its completion of TC2 support; noting that TC2 now boots with the latest IKS tree. Five new test cases have been added to handle simultaneous thread switching, important bugs such as Switcher Thumb-2 bug and Switcher deadlock issue when working on the memblock_steal(), vlock remaining locked under certain conditions were fixed along with and updated focus to run benchmarks with the latest IKS on TC2 to find optimization opportunities.


* * *


While some wondered if the idea of a consolidated kernel in the ARM ecosystem would remain a dream and something developers only longed for, the Linaro Kernel Working Group continues to work toward making that dream a reality and during the 12.10 Linaro development cycle announced that they will demo their work on their continued efforts on the single zImage kernel. Mark Orvek, Director for the Kernel Working Group at Linaro in a Google+ Hangout on Air discussion hinted to what attendees could expect to see at the LCE 12 -Copenhagen Demo Friday event. Orvek indicated that Deepak Saxena would be demo'ing a single kernel across several member boards. The full recorded Hangout is available [on youtube](http://youtu.be/t71JNNO6IDo).



* * *


For those who will be at [LCE 12 - Copenhagen](http://connect.linaro.org/resources/) next week (29 Oct - 2 Nov) we look forward to seeing you there; however, if you are unable to attend, but would like to participate we are offering remote participation. Visit the [Linaro Connect Website](http://connect.linaro.org/) to find out how you or someone you know can participate remotely.



* * *


### USING THE ANDROID-BASED IMAGES

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:


  * [http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)
  
If you are interested in getting the source and building these images yourself please see the following pages:


  * [http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


  * [http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

### USING THE UBUNTU-BASED IMAGES

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

  * [http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

### GETTING INVOLVED

More information on Linaro can be found on our websites:

  * Homepage: [](/)


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)

Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


  * IRC:


    * #linaro on irc.linaro.org or irc.freenode.net


    * #linaro-android irc.linaro.org or irc.freenode.net

### KNOWN ISSUES WITH THIS RELEASE

For any errata issues, please see:

  * [http://wiki.linaro.org/Cycles/1210/Release#Known_Issues](http://wiki.linaro.org/Cycles/1210/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)