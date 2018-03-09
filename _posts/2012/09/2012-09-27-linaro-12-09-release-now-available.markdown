---
author: linaro
categories:
- blog
date: 2012-09-27 14:57:38
description: The Linaro 12.09 release cycle highlights the combined work and enthusiasm
  of all the Linaro Teams and is now available for download.
keywords: Linaro, Linux on ARM, Open Source, Releases, Working Group, Landing Teams,
  Community, Ubuntu, Android, 12.09. Linaro 12.09, Linaro Connect, Bella Center, Copenhagen,
  Demo Friday
layout: post
link: /blog/industry-blog/linaro-12-09-release-now-available/
slug: linaro-12-09-release-now-available
tags:
- Android
- Community
- Connect Events
- Industry
- Releases
title: Linaro 12.09 Release Now Available
wordpress_id: 1920
---

>
> There is a real magic in enthusiasm. It spells the difference between mediocrity and accomplishment.
>
>
>
> **Norman Vincent Peale**
>

* * *

## The Linaro 12.09 release is now available!

The Linaro 12.09 release cycle highlights the combined work and enthusiasm of all the [Linaro Teams](/about/) – Working Groups, Landing Teams andPlatform Teams – who have provided all the updates and new features that are integrated on top of Android and Ubuntu during this development cycle. The 12.09 release is another example of how Linaro succesfully–together with its members, partners and community–continue to build the future of Linux on ARM.

* * *

[Zach Pfeffer](/about/), the [Linaro Android Team](/about/), Tech Lead, explains to the Linaro Release team what he and his team have accomplished during this cycle.  Linaro’s patches to AOSP are now available on Jelly Bean and Linaro Android users should now see a 15% performance bump in their Android builds when combined with the Linaro toolchain.  Developers now have another MALI based accelerated platform to work with as the Snowball graphics enablement is now available on the Linaro Jelly Bean build.  The team also analyzed 10 of the most popular Android benchmarking tools: AndEBench, AndEBench Java,  Linpack, CaffeineMark, Antutu 2D and 3D, NBench, Quadrant, I/O Benchmark and Vellamo.  Additionally, the team has put together the NI PXIe-4154 based power measurement system with a VI which will allow the instrument to be easily integrated into [LAVA](https://wiki.linaro.org/Platform/LAVA). Also there is now an AOSP test automation framework that is able to automatically read and execute in-tree AOSP tests.


* * *

"During the 12.09 cycle the team started early work on a minimal ARMv8 bootstrap, and we already have a very minimal rootfs with some parts to help other developers that want to get involved with the porting," says [Ricardo Salveti](/about/), [Developer Platform Team](/developers/) Tech Lead. "This work will be critical for the future of Linux on ARMv8, as the major GNU/Linux distributions can use it as base to bootstrap and support this new architechture." In addition to the work highlighted by Salveti, the Developer Platform team also updated the kernel and test components for the big.LITTLE project, made substantial progress on the Debian/Ubuntu Perl and Python multi-arch/cross-build support, and noted that Hwpacks for Vexpress, Origen and PandaBoard now include the support for UEFI and can be selected while flashing the image with linaro-media-tools.

* * * 

[Linaro](/) would also like to to remind everyone that Linaro Connect ([LCE 12 Copenhagen](http://connect.linaro.org/resources/#welcome)) is less than 5 weeks away and [registration is open](http://connect.linaro.org/wp-login.php?redirect_to=/register-connect/).  LCE 12 Copenhagen will be held from 29 Oct to 2 Nov at the [Bella Center](http://connect.linaro.org/resources/#travel) in Copenhagen, Demark. In addition to the [regular track sessions](http://connect.linaro.org/resources/#schedule), LCE 12 will host [three mini summits](/blog/linaro-android-armv864bit-and-big-little-mini-summits-to-be-held-at-lce-12-copenhagen/): an ARMv8 (64-bit) mini-summit on the Tuesday, an [Android mini-summit](/blog/linaro-android-mini-summit-to-be-held-at-lce-12-in-copenhagen/) on the Wednesday and a big.LITTLE mini-summit on the Thursday. For those who are attending already and would like to or are planning on providing a demo for our Demo Friday the '[Call for Participation](/blog/lce-12-copenhagen-demo-friday-call-for-participation/)' is now open. More information about this and other Linaro events can be found on the [Linaro Connect website](http://connect.linaro.org/resources/#welcome). What are you waiting for join Linaro in Copenhagen for LCE 12. Dont forget; [register today](http://connect.linaro.org/wp-login.php?redirect_to=/register-connect/)!


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


#linaro on irc.linaro.org or irc.freenode.net

#linaro-android irc.linaro.org or irc.freenode.net

### KNOWN ISSUES WITH THIS RELEASE

For any errata issues, please see:

  * [http://wiki.linaro.org/Cycles/1209/Release#Known_Issues](http://wiki.linaro.org/Cycles/1209/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)