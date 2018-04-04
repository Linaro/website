---
author: zach.pfeffer
date: 2011-09-15 21:35:28+00:00
layout: post
link: /blog/switching-out-a-pre-built-android-images-kernel/
slug: switching-out-a-pre-built-android-images-kernel
title: Switching out a Pre-Built Android Image's Kernel
wordpress_id: 4129
categories:
- blog
tags:
- Android
- kernel
- rebuild
---
Many people just want to update the kernel of a pre-built Android build.


## Find the Kernel

The first step is to find the kernel that was used in your build. For this post I'll be using [https://android-build.linaro.org/builds/~linaro-android/panda/]()https://android-build.linaro.org/builds/~linaro-android/panda/.

To find the kernel, click on the [source-manifest.xml]()https://android-build.linaro.org/jenkins/job/linaro-android_panda/285/artifact/build/out/source-manifest.xml link from the build. In this case the kernel is:

git://git.linaro.org/people/jstultz/android.git
branch: linaro-android-3.0

(put together by John Stultz)

## Get the Source

Cloning the repo:

```bash

$git clone git://git.linaro.org/people/jstultz/android.git
$cd android
$git checkout linaro-android-3.0

```

## Grab the Toolchain


```bash
$wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_toolchain-4.6-linaro-master-with-generic-target/18/artifact/build/out/android-toolchain-eabi-linaro-4.6-2011.08-18-2011-09-12_08-38-17-linux-x86.tar.bz2

$tar -jxvf android-toolchain-eabi-linaro-4.6-2011.08-18-2011-09-12_08-38-17-linux-x86.tar.bz2

```


## Find the defconfig


The defconfig can be found in the "complete output" link. You can get a copy with:

```bash
$wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_panda/285/consoleText
$cat consoleText | grep ARCH=arm
```


## Rebuild the Kernel


From the consoleText output you can extract the make line and build with the toolchain listed on the build page:

```bash
$make ARCH=arm CROSS_COMPILE=$PWD/android-toolchain-eabi/bin/arm-eabi- defconfig android_omap4_defconfig && make ARCH=arm CROSS_COMPILE=$PWD/android-toolchain-eabi/bin/arm-eabi- uImage
```

## Get the Images

Download the images and program them:

```bash
$wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_panda/285/artifact/build/out/target/product/pandaboard/boot.tar.bz2

$wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_panda/285/artifact/build/out/target/product/pandaboard/system.tar.bz2

$wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_panda/285/artifact/build/out/target/product/pandaboard/userdata.tar.bz2

```

## Program the Images


The linaro-image-tools package allows you to easily program the compressed tar balls onto an SD card.

`$bzr branch lp:linaro-image-tools`

Insert an SD card:

```bash
$./linaro-image-tools/linaro-android-media-create --mmc /dev/sdc --dev panda --system system.tar.bz2 --userdata userdata.tar.bz2 --boot boot.tar.bz2
```


## Update the Kernel


Mount the first partition:

```bash
$mkdir mnt
$sudo mount /dev/sdc1 mnt
```

If you do a

`$ls mnt`

You'll see a uImage among the files. Copy the uImage that was built over.

`$sudo cp arch/arm/boot/uImage mnt`

Unmount and sync:

```bash

$sudo umount mnt
$sync

```



## Examine the Serial Port



`$minicom -D /dev/ttyUSB0 -w -C minicom.txt`



## Try It!



Insert the card in Panda and boot your custom kernel!
