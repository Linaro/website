---
layout: post
title: Supporting Multiple Devices with the same AOSP Images
description: In this blog Amit Pundir and John Stultz discuss the benefits of
  having a framework for a shared vendor image which supports multiple devices.
date: 2022-03-08 09:23:59 +00:00
image: /assets/images/content/technology-3389917_1920-1-.jpg
tags:
  - AOSP
  - Dragonboard
  - Qualcomm
  - Robotics
  - Google
  - Android
  - GKI
  - DB845c
  - RB5
category: blog
author: amit.pundir@linaro.org
---
Co-authored-by: John Stultz

# Introduction

Creating an Android device has always required and allowed for lots of custom per-device logic and features. While this has been a great benefit, allowing vendors to quickly bring new features to market, it has also caused trouble with fragmentation and lagging updates.

Google’s recent Treble and GKI efforts to cleanly separate device specific logic from generic system logic has greatly improved the situation, especially around updates, reducing the amount of work a vendor needs to do in order to update their device to the latest Android release.

But even these efforts have side effects, as while vendors don’t need to redevelop their device specific changes against every Android update, they do need to manage updating and testing and releasing their vendor-specific HALs, for [each device they support](https://android-developers.googleblog.com/2020/12/treble-plus-one-equals-four.html).

We think this can be further improved upon. By developing a framework for a shared vendor image to support multiple devices, we think vendors can reduce both development effort and the amount of management needed for updating their devices. In this blog we talk about the work involved in creating this framework and the benefits in doing so. 

# The challenge of building AOSP images for each target device

At the [last virtual Linaro Connect](https://connect.linaro.org/resources/lvc21f/lvc21f-307/), we discussed the new Qualcomm Robotics RB5 development board (RB5), and how by using iterative upstream development, the RB5 was able to leverage the device support present for the Qualcomm Robotics RB3 Platform Development Kit (also known as Dragonboard 845c or DB845c) already in AOSP. This made the RB5 the easiest Linaro supported development board yet to be added to AOSP.

But when both developing and testing with these devices, we still had to build AOSP for each target device. It seemed clear it would be a lot nicer if we could save both time and storage and have a single target image which could be used for testing on both boards.

# Creating a single target image for testing on multiple boards

The RB5 shares a lot of common IP blocks with prior gen SoCs like SDM845 (used in DB845c) and SM8150 (Qualcomm’s flagship SoC for 2019). That, along with the iterative upstream efforts, make it well supported already by the upstream Linux kernel, mesa and linux-firmware projects. This upstream support is important, because this allows the kernel to abstract most of the SoC differences away, and allows us to re-use the same upstream focused HALs (drm_hwcomposer, mesa, etc), minimizing changes needed for the AOSP build device configuration.

For the very few differences between the devices that are not abstracted away, we added a new service which probes /proc/device-tree/compatible for device details at run time to set a vendor property, which then is used to run device specific services, or set device specific configs: e.g. set correct Alsa mixer path or establishing a unique ethernet MAC address on DB845c etc.

# Booting multiple devices correctly with a single kernel

The next issue we needed to solve was getting a single kernel that booted properly on both devices. Android's GKI effort has made this much easier as the core kernel is the same on all the devices, but we still need kernel driver modules in place to support both boards. So we added RB5 support in DB845c build and config fragment files in [the android-mainline tree](https://android-review.googlesource.com/c/kernel/common/+/1791854/). It made sure that build.config.db845c artifacts from android-mainline and android13-5.15 trees can boot on RB5 as well.

The major blocker we ran into was with the bootloader.  Specifically, Qualcomm's ABL (edk2/uefi secondary bootloader), which is responsible for loading the kernel and platform specific Device Tree. The primary purpose of a Device Tree (or Device Tree Blob) in Linux is to provide a way to describe non-discoverable hardware ([more on Device Tree here](https://elinux.org/Device_Tree_Reference)). And even though RB5 and DB845c share a lot of common blocks, we are still talking about two different SoCs with enough hardware differences that are not discoverable at run time. So we have to depend on DTB to provide that platform specific information to ABL.

Now, ideally, the DTB is supposed to be kept and provided by the bootloader, as it is supposed to be tied to the hardware. If that were the case, this would be even easier. However, in practice that is not particularly common, as often DTBs are in flux while drivers are upstreamed, and thus the DTBs end up being managed together with the kernel.  With AOSP, the boot image can provide a single DTB as dtb.img or a list of concatenated DTBs as dtb.img. So the first step towards a single AOSP boot image was to concatenate and pass DB845c and RB5 DTBs as the dtb.img, and let the ABL select and load the platform specific DTB from dtb.img. This DTB selection or matching is done based on DTB properties like qcom,{msm-id/board-id/pmic-id}, and since these properties were not supported on DB845c and RB5 initially, we put a hook in the ABL to pick the first and the only DTB it can find in dtb.img.

# The end result

So for a concatenated dtb.img to work, we upstreamed these DTB properties for DB845c and RB5 in Linux v5.16-rc1 and also backported them to android13-5.15 GKI common kernel branch. We also updated the ABL to [re-enable the multiple appended DTB support](https://git.linaro.org/landing-teams/working/qualcomm/abl.git/commit/?id=08d45c5), while maintaining backward compatibility to boot these devices with older kernel versions.

As of today, AOSP’s db845c-userdebug lunch build target will boot on both DB845c and RB5 devboards. Follow the build instructions from <https://wiki.linaro.org/AOSP/db845c> or download prebuilt binaries from <http://snapshots.linaro.org/96boards/dragonboard845c/linaro/aosp-master/> to boot AOSP on DB845c and RB5.

# Simplified testing and development with a generic vendor image

So while having generic vendor images to support multiple development boards has been a clear win for us, we also think this method of using has the potential to simplify vendor update logistics as well.

Currently vendors have custom vendor images for each device, usually built out of a per-device source tree. Even if, as is frequently common, some of the IP-blocks are shared between devices, each device usually has their own fork of the IP-block HAL support. So as bugs or security issues are found and updates are needed, these per-device images must be created, validated and deployed each on their own timeline. 

{% include image.html path="/assets/images/content/generic-vendor-image-1.png" alt="Generic vendor image" %}

And for those HALs derived from the same code base, this may mean repeatedly fixing the same issue separately for each device.

If vendors utilized a generic image approach, there would be only one codebase that needs to be managed. Fixes to shared HALs would be made only once. Testing and development focus becomes more simplified as there’s only one series of images to track and maintain.

{% include image.html path="/assets/images/content/generic-vendor-image-2.png" alt="Generic vendor image 2" %}

Testing still has to be done across all devices for each image update, but this is a much simplified story compared with the complexity of keeping track of, and validating, various bug fixes with per-device image versions.

Now this doesn’t come without costs. Obviously supporting multiple devices in the same vendor image requires more code and thus more space than just supporting a single device. And it’s always easier to just focus on a single device when trying to make short-term deadlines, instead of considering impacts of any changes to other devices. So the trade offs have to be weighed, but we would suggest vendors think about how they can use iterative development and standard upstream interfaces to consolidate the amount of per-device logic they manage, and consider the longer term cost savings they may find when trying to support and maintain the array of devices that they release each year.

For more information on the work we do on Software Device Enablement for Android, check out our project page [here](https://linaro.atlassian.net/wiki/spaces/SDEFAU/overview).