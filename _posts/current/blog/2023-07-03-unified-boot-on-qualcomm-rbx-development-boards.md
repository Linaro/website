---
layout: post
title: Unified Boot on Qualcomm RBx development boards
description: "This blog talks about benefits of Linaro Core and Club memberships
  with the optional Landing Team. Dedicated Linaro engineers contribute to
  private and public projects while partnering with the open-source community.
  The Linaro Qualcomm Landing Team has been actively involved since 2014,
  building stable releases for the 96Boards Dragonboard program and supporting
  next-gen Qualcomm mobile platforms. #Linaro #LandingTeam #OpenSource"
date: 2023-07-06 10:48:17 +02:00
image: /assets/images/content/96boards-specification-consumer-edition-v2.jpg
tags:
  - Android
  - Linux Kernel
  - Open Source
  - Qualcomm
category: blog
author: vinod.koul
---
One of the benefits of Linaro Core and Club memberships is the optional Landing Team. A Landing Team is a group of Linaro engineers dedicated to one Linaro member, and whose work contributes to both private and public projects. Beginning in 2014, the Linaro Qualcomm Landing Team has been an active contributor to upstream Qualcomm platforms, building stable releases for the 96Boards Dragonboard program and adding support to the next generation Qualcomm mobile platforms. Fostering and partnering with the open source community is a primary goal of this Landing Team, often in the role of maintainers for Qualcomm sub-systems.

In addition, Linaro Developer Services has a dedicated team which helps companies build, deploy and maintain Arm products. The team offers a wide range of services, including Linux Board Support Package (BSP) development, maintenance and optimization for Qualcomm platforms such as Qualcomm Snapdragon, to companies building products based on Qualcomm processors. Check out the [Linaro Developer Services](https://www.linaro.org/services/qualcomm-platforms-services/) for additional information on how Linaro Developer services can help.

As an example,in this blog, Senior Tech Lead Vinod Koul from the Linaro Qualcomm Landing Team shares details on how his team achieved unified boot on multiple Qualcomm Snapdragon devices.

For the context of this blog, unified boot refers to the ability of multiple platforms being able to boot from the same boot image. For example, a single boot image on a USB stick can be placed into more than one target platform and successfully boot. An advantage to this feature is lowering the maintenance costs of supporting multiple separate builds and boot images.

## Qualcomm Boot Flow

The existing boot flow on Qualcomm devices has various stages in the bootloader, eventually loading Android Bootloader (ABL) which then loads the appended device-tree (DT) and kernel image and can then boot. The steps to boot upstream Linux kernel using appended DT method can be found in this [blog.](https://www.linaro.org/blog/let-s-boot-the-mainline-linux-kernel-on-qualcomm-devices/)

{% include image.html path="/assets/images/content/existing-boot-flow-on-qualcomm-devices.png" alt="Existing boot flow on Qualcomm devices" %}

The problem with this method is that the device tree is appended to the kernel image, making it board specific. As a result, getting a generic kernel image to load on any Qualcomm platform is virtually impossible.

## Unified Boot using U-boot

This limitation can be overcome by using U-boot to perform the task of loading the DT from device storage and then loading the kernel from either USB/SD-Card/storage.

{% include image.html path="/assets/images/content/unified-boot-using-u-boot.png" alt="Unified Boot using U-boot" %}

In this mechanism, the existing bootloader chain on the Qualcomm Snapdragon device can be utilised “as-is”. Here the u-boot is chainloaded as an Android boot image by Qualcomm’s  ABL bootloader. Then, using the U-boot, we can load a generic arm64 Linux kernel image.

## U-Boot

The choice of U-boot as a medium for chain loading is due to a variety of factors in support of u-boot, primarily

* U-boot is an open source boot loader
* It already supports a few Qualcomm Snapdragon platforms like Dragonboard 410c, RB3 etc
* It is compliant with System Ready IR and one can [enable](https://developer.arm.com/documentation/DUI1101/1-1/Configure-U-Boot-for-SystemReady?lang=en) it

The ABL would chain load the U-boot FIT image. We use an android boot image with u-boot.bin instead of linux kernel, and FIT image instead of initramfs. Android bootloader expects gzipped kernel with appended dtb, so we mimic linux to satisfy the stock bootloader requirement.

```
gzip u-boot
$ gzip u-boot.bin

append dtb to gzipped u-boot
$ cat u-boot.bin.gz "$mock_dtb" > u-boot.bin.gz-dtb

Create image

$mkbootimg --kernel u-boot.bin.gz-dtb \
    --ramdisk qrb4210-rb2.itb --pagesize 4096 \
    --base 0x80000000 --output boot.img
```

## Chainloading

The u-boot then searches for DT on the local storage partition and then loads the kernel from a USB disk, SD Card or local storage. This would be a generic arm64 linux kernel image. This way one can use the same USB disk to boot on different devices.

The devicetree is always loaded from local storage and provisioned along with the firmware of the board. The devicetree contains the description of the boards so it should always be provisioned as part of the board firmware.

## Demo

Linaro Qualcomm Landing Team Sr. Engineer Bhupesh Sharma demoed this work using newly introduced Qualcomm Snapdragon [Robotics RB1 Platform](https://www.qualcomm.com/products/internet-of-things/industrial/industrial-automation/qualcomm-robotics-rb1-platform) and [Robotics RB2 Platform](https://www.qualcomm.com/products/internet-of-things/industrial/industrial-automation/qualcomm-robotics-rb2-platform) using u-boot to chain load the load the device tree and kernel from the local storage

The video of the demo can be found on [Linaro’s youtube channel](https://www.youtube.com/watch?v=jH3Eea1rHgA).

<iframe width="560" height="315" src="https://www.youtube.com/embed/jH3Eea1rHgA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

## Future work

In future, Linaro is looking forward to supporting more platforms using this method and being able to support Unified boot image across multiple platforms.

Also, ABL is a component which performs the task of loading an appended Kernel which now is performed by U-boot, so we might be able to drop ABL and load u-boot directly.

For more information on the work Linaro does on Qualcomm platforms and how we can help you build, deploy and maintain products based on Qualcomm processors, go to our [Qualcomm platform services page](https://www.linaro.org/services/qualcomm-platforms-services/).