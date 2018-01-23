---
author: vishal.bhoj
categories:
- blog
date: 2012-03-20 15:21:41
description: Vishal Bhoj of the Linaro Android team explains how he recently "androidized"
  the 3.2 Linux Kernel for Vexpress-rtsm.
keywords: Linaro, Linux on ARM, ARM, ARM SoC, Android, 3.3 Linux Kernel, Androidization
layout: post
link: /blog/android-blog/androidization-of-linux-kernel/
slug: androidization-of-linux-kernel
tags:
- Android
- android
- linaro
- patch
title: Androidization of linux kernel
wordpress_id: 1392
---

I have always wondered how one should be applying the Android patches onto any Linux kernel. Recently I had to do the same stuff. Here is a short description on how I androidized the 3.2 Linux kernel. I have added the Android patches to 3.2 Linux kernel for Vexpress-rtsm. Since the kernel was close to the upstream kernel there were no merge conflicts luckily.

Here is the vanilla Linux kernel to which Android patches were added:

[http://git.linaro.org/gitweb?p=people/dmart/linux-3-arm.git;a=shortlog;h=refs/heads/arm/vexpressdt-rtsm]()http://git.linaro.org/gitweb?p=people/dmart/linux-3-arm.git;a=shortlog;h=refs/heads/arm/vexpressdt-rtsm

Andy Green from the Landing team has provided a topic(linaro-androidization-tracking) branch for 3.2 Linux kernel:

[http://git.linaro.org/gitweb?p=landing-teams/working/ti/kernel.git;a=shortlog;h=refs/heads/linaro-androidization-tracking]()http://git.linaro.org/gitweb?p=landing-teams/working/ti/kernel.git;a=shortlog;h=refs/heads/linaro-androidization-tracking

Androidization process was just 4 step process:

1. Clone the Linux kernel and create a branch for androidization :

    git clone http://git.linaro.org/git/people/dmart/linux-3-arm.git  -b arm/vexpressdt-rtsm

    git checkout -b android


2. Add the remote topic branch:


    git remote add androidization git://git.linaro.org/landing-teams/working/ti/kernel.git


3. Fetch and rebase the kernel:


    git fetch androidization

    git rebase remotes/androidization/linaro-androidization-tracking


4. Add the necessary configs to the board-defconfig file to enable Android components in the kernel:


    CONFIG_ASHMEM=y
    CONFIG_STAGING=y
    CONFIG_ANDROID=y
    CONFIG_ANDROID_BINDER_IPC=y
    CONFIG_ANDROID_LOGGER=y
    CONFIG_ANDROID_RAM_CONSOLE=y
    CONFIG_ANDROID_LOW_MEMORY_KILLER=y


Additionally I had to set "CONFIG_VMSPLIT_3G=y" for Android to boot on [vexpress RTSM/Fastmodel](http://www.arm.com/products/tools/models/fast-models.php).

The androidization patches are usually provided by Google but was not available for 3.2 kernel. For people working on 3.3 kernel, androidization patches are available from Google at:
[ https://android.googlesource.com/kernel/common.git](https://android.googlesource.com/kernel/common.git) for the Android-3.3 branch.