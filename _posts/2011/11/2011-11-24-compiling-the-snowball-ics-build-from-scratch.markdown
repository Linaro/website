---
author: zach.pfeffer
date: 2011-11-24 04:24:45+00:00
layout: post
link: /blog/compiling-the-snowball-ics-build-from-scratch/
slug: compiling-the-snowball-ics-build-from-scratch
title: Compiling the Snowball ICS Build from Scratch
wordpress_id: 913
categories:
- blog
---

## What's better than flashy videos of Snowball running ICS?

##### [Snowball Running ICS from http://android-build.linaro.org](http://www.youtube.com/watch?v=MQOKPLg3ARE)

## ...or trying a prebuilt ICS out for yourself on Snowball?

##### [Instructions and Binaries]()https://android-build.linaro.org/builds/~linaro-android/staging-snowball/#build=84

## Getting the source and compiling it yourself!

```bash

mkdir bin
export PATH=$PWD/bin:$PATH
curl https://dl-ssl.google.com/dl/googlesource/git-repo/repo > bin/repo
chmod a+x bin/repo
mkdir snowball_ics
cd snowball_ics
repo init -u git://android.git.linaro.org/platform/manifest.git -b linaro_android_4.0.1 -m staging-snowball.xml
repo sync
make TARGET_PRODUCT=snowball TARGET_TOOLS_PREFIX=./prebuilt/linux-x86/toolchain/arm-linux-androideabi-4.4.x/bin/arm-linux-androideabi- -j8 systemtarball userdatatarball boottarball
bzr branch lp:linaro-image-tools
./linaro-image-tools/linaro-android-media-create --mmc /dev/sdc --dev snowball_sd --system /mnt/user/0_pfefferz/ics/snowball_ics/system.tar.bz2 --userdata /mnt/user/0_pfefferz/ics/snowball_ics/userdata.tar.bz2 --boot /mnt/user/0_pfefferz/ics/snowball_ics/boot.tar.bz2
    
```
