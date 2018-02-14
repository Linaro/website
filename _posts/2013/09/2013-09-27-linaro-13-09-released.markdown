---
author: steve.taylor
categories:
- blog
date: 2013-09-27 20:18:13
description: Linaro 13.09 release notes and highlights. Links to relevant downloads
  for the release.
keywords: Linaro, Linux on ARM, Linux, ARM, Open Source, Linaro stable kernel, LSK,
  Linaro Connect US 2013, LCU13,  Linaro 13.08, Release, Announcement, Ubuntu, Android,
  OpenEmbedded, big.LITTLE, LAVA,  KVM on ARM
layout: post
link: /blog/releases-blog/linaro-13-09-released/
slug: linaro-13-09-released
tags:
- Releases
- Linaro
- Linaro Connect
- Linux on ARM
- Open Source
- Opensource
- release
- release cycle
title: Linaro 13.09 Released
wordpress_id: 3055
---

> No endeavor that is worthwhile is simple in prospect;  if it is right, it will be simple in retrospect.
>
> ~Edward Teller

## Linaro 13.09 is now ready for download

The 13.09 release includes the first formal release of the Linaro Stable Kernel (LSK). The LSK will provide access to new Linaro features integrated with the most recent kernel.org Long Term Stable (LTS) release. For more details, please refer to the [LSK web site.](https://wiki.linaro.org/LSK)

Here are some of the other highlights, by group:

  * LAVA has seen significant new hardware additions, with more expected over the next couple of months. In the hardware area, the Calxeda Midway server is now available to Linaro developers and the Linaro Networking Group (LNG) rack has been deployed. Software support is available for the LAVA Multi-purpose Probe (LMP) in lava-test-shell and the SD-MUX is in staging. The LAVA team has also completed the migration from Bazaar (bzr) to Git with this release.


  * As required, the QA group has completed the full test of Linaro supported targets for this release. Testing for Grub on UEFI with the ARM Versatile Express Cortex-A9 tile and Linux Linaro Ubuntu has begun, an open accessory test case for Android has been created with results of the Systemtap test suite full execution on the Snowball target shared with developers. On top of this, the QA team has been working on documentation, dashboards, examining open source benchmarking tools for the Linaro Android and Ubuntu builds, and a pilot installation of [qa-reports](https://github.com/leonidas/qa-reports) for better reporting of engineering build testing results.


  * The Graphics working group has included a mix of essential updates and new work for future solutions including dma-buf changes for 3.12, Common Display Framework (CDFv3) prototyping and implementation on member hardware, an update of libjpeg-turbo including a refresh for Android plus new ARMv8 support, and an initial libpng port of NEON acceleration to intrinsics.


  * Also leading the way on developments for the future, the Virtualization team has completed upstreaming of AArch64 preparation support for QEMU and the first patches for Xen bring up on APM ARMv8 hardware. Many items are also in the upstream pipe, including ARMV7-A Guest Migration functionality, Xen device tree editing, mach-virt and the ARMv8-A port of libvirt. This last item, libvirt, is now functional on ARMv7-A and functional testing has started.


  * If youre interesting in an approach for converting older code that uses wake locks to code using wakeup sources, Zoran Markovic from the Power Management working group has posted a blog discussing this here: /linaro-blog/2013/08/26/converting-code-implementing-suspend-blockers/. The group has also released Linaro Powerdebug 0.7.1-2013.09 and Linaro PM QA 0.4.4-2013.09.


  * In the 13.09 release, in addition to the Linaro Stable Kernel (LSK) 3.10.12-2013.09, the Builds and Baselines team have released Linux Linaro 3.11-2013.09, Linaro Toolchain Binaries 2013.09 and various improvements on the baselines. In collaboration with the ARM Landing team, the AArch64 OpenEmbedded Engineering Build for ARM Fast Models for ARMv8 is produced, validated and released, based on the latest AArch64 open source software from Tianocore EDK2 (UEFI), the Linux kernel, ARM Trusted Firmware and OpenEmbedded. This release includes Linaro OpenEmbedded images for Foundation, Versatile Express and FVP Base fast models from ARM.


  * The Linaro Enterprise and Networking Groups (LEG and LNG) have continued building on their work from previous months and this release sees new developments in Big Endian (BE) KVM and more.


  * Not to be left out, the Kernel Working Group has been doing a lot of prep work that will show up in future releases plus investigation and bug fixing, and the Toolchain group are offering their usual run of high-performing releases, including Linaro GCC 4.8-2013.09, Linaro GCC 4.7-2013.09, Linaro eglibc 2.18-2013.09 and Linaro GDB 7.6.1-2013.09-1.


This months release not only includes many line items from each group within Linaro, but it also shows the progress of our developing infrastructure. Last month, status.linaro.org was relaunched with status information being read from JIRA cards. This month, more cards have been migrated from Launchpad to JIRA, with the power management group making significant progress towards having everything migrated by the time of the next Linaro Connect at the end of October ([www.linaro.org/connect](http://connect.linaro.org)).


### Upcoming LINARO CONNECT EVENTS: LINARO CONNECT US 2013 (LCU13)


Registration for [Linaro Connect US 2013 (LCU13)](http://connect.linaro.org/lcu13/), which will be co-located with ARM’s TechCon in Santa Rosa, CA from October 28 through 1 November 2013 is now open.  More information on this event can be found at: [/connect-lcu13](http://connect.linaro.org/lcu13/)


### USING THIS RELEASE:


We encourage everybody to use the 13.09 release. The download links for all images and components are available on our downloads page:


  * [/downloads/](/downloads/)


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:


  * [https://wiki.linaro.org/Cycles/1309/Release#Release_Information](https://wiki.linaro.org/Cycles/1309/Release#Release_Information)


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




  * [http://wiki.linaro.org/Cycles/1309/Release#Known_Issues](http://wiki.linaro.org/Cycles/1309/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)