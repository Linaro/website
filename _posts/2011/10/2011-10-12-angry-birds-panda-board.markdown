---
author: zach.pfeffer
categories:
- blog
date: 2011-10-12 05:02:19
description: Instructions to test the Angry Birds game on the Linaro Android Evaluation
  Build for the Panda board.
keywords: android, linaro,panda
layout: post
link: /blog/releases-blog/angry-birds-panda-board/
slug: angry-birds-panda-board
tags:
- Releases
- android
- release
title: Bored? Try Angry Birds Rio on the Panda board!
wordpress_id: 601
---

## Angry Birds Rio runs on the first 11.10 Panda staging build!

For these instructions, you need a PC running Ubuntu 11.04 or later. You also need to get the Android SDK from [http://developer.android.com/sdk/](http://developer.android.com/sdk/) and install it. Also download the apk package file for the Angry Birds game (`Angry_Birds_1.3.2.apk`).


  * Insert an SD card in a reader connected to your PC running Ubuntu 11.04 or later.

  * In a console type `dmesg` and note which `/dev` node the SD card was installed at. Let's assume that this is `/dev/sdc`

  * Install a few Ubuntu packages if needed:
[code]sudo apt-get install linaro-image-tools bzr[/code]


  * Run these commands:
  
```bash 
wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_staging-panda-11.10-release/1/artifact/build/out/target/product/pandaboard/boot.tar.bz2
wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_staging-panda-11.10-release/1/artifact/build/out/target/product/pandaboard/system.tar.bz2
wget --no-check-certificate https://android-build.linaro.org/jenkins/job/linaro-android_staging-panda-11.10-release/1/artifact/build/out/target/product/pandaboard/userdata.tar.bz2
bzr branch lp:linaro-image-tools
./linaro-image-tools/linaro-android-media-create --mmc /dev/sdc --dev beagle --system system.tar.bz2 --userdata  userdata.tar.bz2 --boot boot.tar.bz2

```

    * Install the file over ADB:
    
```bash    
adb install -r Angry_Birds_1.3.2.apk
```

    * Save the birds!