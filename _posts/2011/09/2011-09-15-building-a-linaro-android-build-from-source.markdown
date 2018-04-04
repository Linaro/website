---
author: zach.pfeffer
date: 2011-09-15 21:54:56+00:00
layout: post
link: /blog/building-a-linaro-android-build-from-source/
slug: building-a-linaro-android-build-from-source
title: "Building a Linaro Android Build from Source"
categories:
- blog
---

Building a Linaro Android build from scratch is a great way to learn more about Android and work more efficently with the Android team. I recently ran through these steps and produced a build that could be programmed on a Panda. These steps should work for the other boards.

If you run into problems please file bugs at [https://bugs.launchpad.net/linaro-android](https://bugs.launchpad.net/linaro-android).

We track the tips of the technology we integrate including the toolchain, kernels and various libraries so issues are common and expected. Our goal at Linaro is to maintain complete enablement while tracking the bleeding edge.

I'm using [https://android-build.linaro.org/builds/~linaro-android/panda/]()https://android-build.linaro.org/builds/~linaro-android/panda/.

Commands are prefixed with $.


## Grab the Source Code

```bash

$mkdir android
$cd android/
$repo init -u git://android.git.linaro.org/platform/manifest.git -b linaro_android_2.3.5

```

Until git://android.git.kernel.org comes back online feel free to use ours:

```bash

$repo init -u git://android.git.linaro.org/platform/manifest.git -b linaro_android_2.3.5 --repo-url=git://android.git.linaro.org/tools/repo.git

$repo sync

```

## Get the Toolchain


The toolchain listed on the build page.

```bash
$wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_toolchain-4.6-linaro-master-with-generic-target/18/artifact/build/out/android-toolchain-eabi-linaro-4.6-2011.08-18-2011-09-12_08-38-17-linux-x86.tar.bz2

$tar -jxvf android-toolchain-eabi-linaro-4.6-2011.08-18-2011-09-12_08-38-17-linux-x86.tar.bz2
```


## Build

```bash

$PATH=$PWD/android-toolchain-eabi/bin/:$PATH make -j4 TARGET_PRODUCT=pandaboard TARGET_TOOLS_PREFIX=./android-toolchain-eabi/bin/arm-eabi- boottarball systemtarball userdatatarball
Get linaro-image-tools to program the images on an SD card

```


## Program the Image


The linaro-image-tools package allows you to easily program the compressed tar balls onto an SD card.

```bash
$bzr branch lp:linaro-image-tools
```

Insert an SD card

```bash

$./linaro-image-tools/linaro-android-media-create --mmc /dev/sdc --dev panda --system out/target/product/pandaboard/system.tar.bz2 --userdata out/target/product/pandaboard/userdata.tar.bz2 --boot out/target/product/pandaboard/boot.tar.bz2
```

## Examine the Serial Port

```bash
$minicom -D /dev/ttyUSB0 -w -C minicom.txt
```


## Try It!


Insert the card in Panda and your booting your custom built Android!
