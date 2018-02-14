---
author: linaro
categories:
- blog
date: 2012-12-20 21:50:26
description: We are pleased to announce that Linaro 12.12 is now available and ready
  for download.
keywords: Linaro, Linux on ARM, Linux, Open Source, ARM, Android, Ubuntu, Linaro Enterprise
  Group, LEG, Toolchain, big.LITTLE, Kernel, UMM, ARMv8, Release, 12.12, Announcement
layout: post
link: /blog/releases-blog/linaro-12-12-release-now-available/
slug: linaro-12-12-release-now-available
tags:
- Releases
title: Linaro 12.12 Release Now Available
wordpress_id: 2159
---

> Identify your problems but give your power and energy to solutions. ~ Tony Robbins


**We are pleased to announce that Linaro 12.12 is now available and ready for download.**

The Linaro 12.12 release highlights energy and work of all the Linaro Teams – [Working Groups](https://wiki.linaro.org/WorkingGroups), [Landing Teams](https://wiki.linaro.org/LandingTeams) and [Platform Teams](https://wiki.linaro.org/Platform) – who have provided all the updates and new features that are integrated on top of Android and Ubuntu during this release cycle. The 12.12 release rounds out a great year of successes that prove how the collaborative efforts of Linaro, together with its members, partners and community continue to build upon the future of Linux on ARM.

"Just look at the engineering that Linaro has been involved with. [big.LITTLE](/blog/big-little-technology-two-usage-models/), [kernel consolidation](https://wiki.linaro.org/WorkingGroups/Kernel), [UMM](/blog/linaros-emphasis-on-dma_buf-in-the-3-3-linux-kernel/), [ARMv8](/initiatives/armv8/) and the list goes on.  It’s not just hacking code though, Linaro is thinking carefully about itself, re-engineering itself for the next phase in its evolution.  “Start up” was 2010, “Establishment” was 2011 and 2012 has been “Growth”.  What’s 2013 going to be all about?  Just wait and see," said [David Rusling, Linaro CTO](/about/) in his 2012 year end summary.

The 12.12 release highlights include the [Linaro Android team](https://wiki.linaro.org/Platform/Android) has upgraded its builds to to 4.2.1, enabled WiFi on PandaBoard for 4.2.1 and audio on the Origen 4210. Additionally the team released its 12.12 toolchain this cycle. Earlier this month, the 3.7 Linux Kernel was released and the Linaro Android team rebased the perf patches.

As we look at the achievements of the[ Linaro Developer Platform](https://wiki.linaro.org/Platform/DevPlatform), we note that the Linaro baseline images for Ubuntu are now based on Quantal Quetzal otherwise known as Ubuntu 12.10 and inititiate the transition from Evaluation Builds to Engineering Builds. The Linaro U-Boot 2012.12 which is based on U-Boot v2013.01-rc1 was released and includes support for Origen quad (4412) and Arndale (5250) boards.

The [Linaro Power Management team](https://wiki.linaro.org/WorkingGroups/PowerManagement) had a very busy cycle: optimizing big.LITTLE IKS(In Kernel Switcher) for release to members, integrating the big.LITTLE MP via the Intergration tree, adding improvements to help solve tasking packing around the power-aware scheduler, IKS and MP benchmarking for power and performance, adding thermal framework enhancements for non-ACPI platforms, updating Powertop for ARM platforms and adding cpuidle support for multi-cluster SoCs.

The [Linaro Toolchain Team](https://wiki.linaro.org/WorkingGroups/ToolChain) announced updates: [Linaro GCC 4.7 2012.12 was released](http://lists.linaro.org/pipermail/linaro-toolchain/2012-December/003034.html) and is based off GCC 4.7.2+svn194184 which gives better 64 bit shifts in NEON, updates the arm/aarch64-4.7-branch up to svn revision 194154. [Linaro Toolchain Binaries for 2012.12 was released](http://lists.linaro.org/pipermail/linaro-toolchain/2012-December/003042.html) and updated to latest Linaro GCC 4.7 2012.12 and Linaro GDB 7.5 2012.12.

[LAVA](https://wiki.linaro.org/Platform/LAVA) has seen updates and improvements this cycle as well as support for the 4.2.1 Linaro Android images were added, Other improvements on the LAVA front include increases IP address space from 255 to 65k in the lab, image reports for the automated testing of OpenEmbedded builds is now available, a new server was added tothe validation lab for audio, power measurement, and SD-mux capable devices. LAVA can now execute Versatile Express jobs using the test images DTB and VExpress-tc2 boards have been converted to use IKS. A 64-bit virtual machine was added to lava-cloud for the Linaro Toolchain team's use as well. The user interface for finding, viewing and downloading attachments in the LAVA dashboard was improved and signal handlers can be written in shell and bundled with the tests themselves.

Even as the physical year comes to a close Linaro continues to identify problems, obstacles, and opportunites to put its power and energy into and end 2012 on a high note and start 2013 off with solutions and goals for the future.

The [Linaro Enterprise Group (LEG)](/groups/leg/) which was announced in November at TechCon set some very agressive goals and is pleased to announce its 12.12 engineering preview release which includes completed investigation of CRC32 for HDFS optimisation, ported and submitted Non-Uniform Memory Access  patches to upstream, enabled GRUB on U-boot and UEFI on the Samsung Arndale board. More information on LEG release preview can be found at: [https://wiki.linaro.org/LEG/Engineering/Releases/12.12](https://wiki.linaro.org/LEG/Engineering/Releases/12.12)

Other Highlights and items of interest for this release cycle are that we have announced the dates and opened registration for[ Linaro Connect Asia 2013 (LCA13)](http://connect.linaro.org) which will be held at the Gold Coast Hotel in Hong Kong on 4-8 March. Register early as the registration window for this event will close prior to the start of the event. More information about LCA13 can be found [here](/blog/registration-opens-for-linaro-connect-asia-2013-book-early/) and on [the Linaro website](http://connect.linaro.org).

Between development cycles you can stay up to date with all the latest news in an around Linaro by following us on [Twitter](https://twitter.com/LinaroOrg), [Google+](https://plus.google.com/+LinaroOnAir) and[ Facebook](https://www.facebook.com/LinaroOrg).


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

  * [http://wiki.linaro.org/Cycles/1212/Release#Known_Issues](http://wiki.linaro.org/Cycles/1212/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)

#### **About Linaro**


_Linaro is the place where engineers from the world’s leading technology companies define the future of Linux on ARM. The company is a not-for-profit engineering organization with over 120 engineers working on consolidating and optimizing open source software for the ARM architecture, including developer tools, the Linux kernel, ARM power management, and other software infrastructure._

_To find out more, please visit[ ](/)._


#### **About Linaro Connect**


_Over 300 participants, ranging from kernel hackers to integration engineers to ARM SoC industry executives gather during this week long to present, discuss and develop features,  infrastructure and optimizations for the Linux kernel, Android, Ubuntu and beyond._

_To find out more, please visit [Linaro Connect Website](http://connect.linaro.org)._