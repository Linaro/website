---
layout: post
title: Upstream Linux support now available for the Snapdragon 8 Gen 2 Mobile Platform
description: "In this blog, we look at what features Linaro has upstreamed for
  the Snapdragon 8 Gen 2 Mobile Platform and how to run an AOSP image using
  Mainline. "
date: 2022-11-22 10:29:17 +00:00
image: /assets/images/content/Tech_Background.jpg
tags:
  - Snapdragon 8 Gen 2 Mobile Platform
  - Android
  - AOSP
  - Qualcomm
  - Upstream
category: blog
author: Neil.Armstrong
---
Linaro Engineers Abel Vesa and Neil Armstrong enabled upstream Linux on the [recently announced](https://www.qualcomm.com/news/releases/2022/11/snapdragon-8-gen-2-defines-a-new-standard-for-premium-smartphone) Snapdragon 8 Gen 2 Mobile Platform, the newest Snapdragon processor. The initial support was posted on November 16th on the Linux kernel mailing lists for review by the Linux developers community. With the set of patches released by Linaro engineers, it is also possible to boot an AOSP mini image. Since 2014, Linaro Engineers have been working closely with Qualcomm Engineers to enable Snapdragon platforms to work with Mainline Linux.

This is a significant achievement to be able to run such a recent upstream Linux kernel right after the announcement of a new SoC, and a testimony to the close working partnership between Qualcomm and Linaro.

# What has been upstreamed for the Snapdragon 8 Gen 2 Mobile Platform?

With the recent series of patches released by Linaro, the following features are enabled for the Snapdragon 8 Gen 2 Mobile Platform:

* Qualcomm® Kryo™ CPUs, including DVFS and Power Control
* System foundation: Clocks, Power controllers, PMICs
* Low-Speed I/O: I2C, SPI
* High-Density Storage: UFS, SDXC
* High-Speed Peripherals: PCIe Gen3 and Gen4, USB SuperSpeed
* Qualcomm® Hexagon™ Processor SubSystems: Audio, Sensors, Compute and Modem

All patches sent for review are also integrated and available in the following [development branch on CodeLinaro.org](https://git.codelinaro.org/linaro/qcomlt/linux/-/tree/topic/sm8550/next-20221115-aosp).

{% include image.html path="/assets/images/content/snapdragon-development-kit.png" alt="Snapdragon Development Kit" %}

## How do I run AOSP using Mainline?

One might think it is quite hard to run AOSP with mainline on such a new platform, but in reality, not at all! Thanks to the long term effort of Linaro and Google engineers making it possible to run AOSP with vanilla Linux releases.
To generate an AOSP image for the Snapdragon 8 Gen 2 development kit using the current set of patches available on the mailing list, use the following instructions, which  are derived from here [https://source.android.com/docs/setup/build/devices](https://source.android.com/docs/setup/create/devices) with some small changes.

Download the Android source tree:

```
$ mkdir AOSP
$ cd AOSP
$ AOSP=$PWD
$ repo init -u https://android.googlesource.com/platform/manifest -b master
$ repo sync -j`nproc`
```

Prepare SM8550 device config by simply re-using the SM8450 one and disabling MMC inline encryption:

```
$ cd device/linaro/dragonboard
$ find . \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i 's/sm8450/sm8550/g'
$ sed -i "s/,inlinecrypt//" fstab.common
$ sed -i "s/fileencryption.*_encryption,//" fstab.common
$ mv sm8450_mini.mk sm8550_mini.mk
$ mv sm8450/ sm8550/
$ sed -i 's/sm8550-qrd/sm8550-mtp/g' sm8550/device.mk
```

Build the Linaro SM8550 tree containing the patches sent for review:

```
$ cd $AOSP
$ git clone https://git.codelinaro.org/linaro/qcomlt/linux.git \
	 -b topic/sm8550/next-20221115-aosp sm8550-kernel
$ cd sm8550-kernel
$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- \
       sm8550_aosp_defconfig
$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- -j`nproc`
$ mkdir $AOSP/device/linaro/dragonboard-kernel/android-sm8550/
$ cp arch/arm64/boot/Image.gz arch/arm64/boot/dts/qcom/sm8550-mtp.dtb \
	 $AOSP/device/linaro/dragonboard-kernel/android-sm8550/
```

Build AOSP

```
$ cd $AOSP
$ . build/envsetup.sh
$ lunch sm8550_mini-userdebug
$ make TARGET_KERNEL_USE=sm8550 -j`nproc`
```

Flash AOSP Images

```
$ cd out/target/product/sm8550/
$ fastboot flash super ./super.img flash boot ./boot.img \ 
           flash userdata ./userdata.img reboot
```

## Next steps

In the coming weeks, Linaro engineers will continue to work with the Linux kernel community to ensure all the patch series are merged in a timely manner. Additional patches are expected soon to enable display, audio and modem use cases.

## Want to learn more?

To find out more information on the ongoing work, check  <https://lore.kernel.org/all/?q=SM8550>.

The Snapdragon 8 Gen 2 Specification & features can be found here [https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Snapdragon-8-Gen-2-Product-Brief.pdf ](https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Snapdragon-8-Gen-2-Product-Brief.pdf).

For more information about what Qualcomm platform services Linaro offers and how we can help develop, maintain and optimize products using Qualcomm technologies, go to <https://www.linaro.org/services/qualcomm-platforms-services/>.