---
author: linaro
categories:
- blog
date: 2013-03-28 20:20:04
description: The 13.03 Linaro release highlights the focused efforts of all the Linaro
  Teams who have provided all the updates and new features that are integrated on
  top of Android, Ubuntu and OpenEmbedded during this release cycle.
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, Linaro Connect, LCE-Dublin,
  Linaro 13.03 release. release, announcement
layout: post
link: /blog/releases-blog/linaro-13-03-released/
slug: linaro-13-03-released
tags:
- Releases
title: Linaro 13.03 Released!
wordpress_id: 2612
---

> "Vision is not enough, it must be combined with venture. It is not enough to stare up the steps, we must step up the stairs."
>
> ~ Vaclav Havel


**The Linaro 13.03 release is now available for download!**

The 13.03 Linaro release highlights the focused efforts of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams who have provided all the updates and new features that are integrated on top of Android, Ubuntu and OpenEmbedded during this release cycle. The vision of the future of Linux on ARM is brought into focus through the collaborative efforts of those dedicated to making the vision a reality one step and one release at a time. The 13.03 cycle contributions are numerous and continues to venture into new areas of the ARM ecosystem with each release.


## **About this release:**


13.03 was a exceptional cycle for the** Linaro Android Team**. There was a lot of planning done during the most recent Linaro Connect event in Hong Kong and some of those plans have already been put into action during this cycle. The initial bring up of Android for Arndale as an engineering platform is now complete and we now have a Tiny Android build for Arndale. Engineers should see an Android with GUI released for the 13.04 Linaro release cycle. The Origen-Quad build is now updated with the new bootloaders and the needed changes for linaro-image-tools have been completed. Bernhard Rosenkränzer, Android Engineer at Linaro did an exceptional job in making the current toolchain available natively inside Linaro Android builds. The builds now include gcc, g++, vim, make, a terminal emulator and a vi-friendly keyboard; however, compiling the kernel on the board itself has yet to be tried. The team encourages interested individuals to give a try and report any bugs. Axel Fagerstedt, Android Engineer at Linaro, did an excellent job in unifying all the different manifests with the groups feature. The team started with 17 manifests and have now come to 1 manifest supporting 8 different builds and one additional manifest for a member build. The released toolchains are now being checked into a prebuilts/ git repository and pulled in by the manifest as opposed to being downloaded as separate tarballs. This is the approach used by AOSP to distribute the toolchain. The Linaro Android Team have also enabled CTS in LAVA for 4.2. The support for CTS in lava-android-test was reworked for stability during the upgrade and as a result more than 99% of CTS tests are now passing for Galaxy Nexus with linaro-android build when tested manually with lava-android-test. CTS was enabled for the engineering builds; however, more investigation need to be done on CTS tests that are not getting executed in LAVA for these engineering builds.


The **Linaro Kernel Working Group** work for the 13.03 cycle includes depopulate the Exynos <mach-exynos/include-mach> directory, convert UX500 to common clk, refactor EHCI controller code, depopulate the UX500 and plat-nomadik <mach/*> and <plat/*>,  Android alarm-dev compat_ioctl support updates, improvements to eMMC Power Management support.

On the **Automation and Validation** front, LAVA now supports Arndale booting with UEFI and the bootloader configuration is being done "on the fly".

The **Linaro Graphics Working Group** posted the following patches for acceptance upstream during the 13.03 release cycle. Version 10 of CMA-ION patches were posted by Benjamin Gaignard. Tom Gall updated and posted the Android piglit enablement patches for OpenGL ES 2 as well as Version 1 of variable-index-* shader-tests extended for Android and Linux. Version 1 of debugfs support for dma-buf was posted by Sumit Semwal and Version 9 of DRM FIMD DT support for Exynos4 DT machine was posted by Vikas Sajjan.

The **Linaro Power Management Working Group** has upstreamed the dynamic timer irq affinity--set up the timer irq affinity to the CPU concerned by the first timer expiration. The cpufreq driver for IKS is now optimized and analysis of HMP scheduler optimizations using bbench and their applicability to A15 SMP systems is now complete. Updates to sched include a modified timer and workqueue framework to allow migration to non-idle CPUs. Powerdebug was ported and now available on the Android platform.

The **Linaro Toolchain Working Group** had a busy 13.03 release cycle as well. Changes to the Toolchain binaries release include Linaro GCC being updated to GCC 4.7.2+svn196272, includes arm/aarch64-4.7-branch up to svn revision 196225. Linaro QEMU 2013.03 was also released earlier this cycle and is based off upstream (trunk) QEMU --1.4.0 release-- and includes a number of ARM-focused bug fixes and enhancements. Updates for this release include ARM KVM support patches which are in sync with the ABI as committed to the upstream Linux kernel for 3.9--note: this feature is still under development, but will no longer be subject to kernel-vs-userspace ABI breaks.

The **Linaro Enterprise Group** (LEG) announced that the initial GRUB port on ARM UEFI is now available and the tree can be found on [https://code.launchpad.net/~leif-lindholm/linaro-grub/arm-uefi](https://code.launchpad.net/~leif-lindholm/linaro-grub/arm-uefi)


## **Announcements:**

During the 13.03 release cycle, Linaro was pleased to announce that Mark Orvek, formerly the Director for the Kernel Working Groups at Linaro, has now taken on the role of VP of Engineering. More information on this appointment can be found in the press release at: [/news/linaro-appoints-mark-orvek-post-vp-engineering/](/news/linaro-appoints-mark-orvek-post-vp-engineering/)


## **Linaro Connect:**




Linaro Connect Europe 2013 will take place at the Burlington Hotel on 8 - 12 July in Dublin, Ireland.  Registration for this event is now open. More information about this event can be found at [connect.linaro.org](http://connect.linaro.org).


For those who may have missed Linaro Connect Asia 2013 a summary of the event can be found at: [https://wiki.linaro.org/Events/LCA13/](https://wiki.linaro.org/Events/LCA13/)


## **Using this Release:**




We encourage everybody to use the 13.03 release. The download links for all images and components are available on our downloads page:




[/downloads/](/downloads/)


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1303/Release#Release_Information](http://wiki.linaro.org/Cycles/1303/Release#Release_Information)


### **Using the Android-based images**




The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:


[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)





### **Using the Ubuntu-based images**






The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:


[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)




### **Getting involved**




More information on Linaro can be found on our websites:


* Homepage: [](/)


* Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

* Announcements:


[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


* Development:


[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


* IRC:


#linaro on irc.linaro.org or irc.freenode.net




#linaro-android irc.linaro.org or irc.freenode.net





### **Known issues with this release**




For any errata issues, please see:




[http://wiki.linaro.org/Cycles/1303/Release#Known_Issues](http://wiki.linaro.org/Cycles/1303/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)