---
author: zach.pfeffer
comments: false
date: 2012-08-10 21:52:32+00:00
layout: post
link: https://www.linaro.org/blog/android-blog/trying-the-jellybean-on-samsungs-origen-board/
slug: trying-the-jellybean-on-samsungs-origen-board
title: Trying Linaro Jellybean Android on Samsung's Origen board
wordpress_id: 1769
categories:
- Android
---

**

## Overview

****

This post takes you through trying a prebuilt build on a Samsung Origen and then reproducing that exact build.

**

## Try the Prebuilt Build

****

Go to [Jellybean Origen build 22 ](https://android-build.linaro.org/builds/~linaro-android/origen-jb-gcc47-samsunglt-stable-blob/#build=22) and go through the instructions on the page to try the prebuilt build.
**

## Now Build

**

Download and make executable linaro_android_build_cmds.sh from the "Downloads" section of the [Jellybean Origen build 22 ](https://android-build.linaro.org/builds/~linaro-android/origen-jb-gcc47-samsunglt-stable-blob/#build=22) with the following commands:**`
wget http://snapshots.linaro.org/android/~linaro-android/origen-jb-gcc47-samsunglt-stable-blob/22/linaro_android_build_cmds.sh
chmod +x linaro_android_build_cmds.sh
`
**Now get the pinned-manifest.xml with:**`
wget http://snapshots.linaro.org/android/~linaro-android/origen-jb-gcc47-samsunglt-stable-blob/22/pinned-manifest.xml
`
**Get the current vendor tarball by pasting this link in a browser:**

http://snapshots.linaro.org/android/binaries/origen/20120517/vendor.tar.bz2 
and saving the file.
**
Then run linaro_android_build_cmd.sh to build:**`
./linaro_android_build_cmds.sh -m /full/path/to/pinned-manifest.xml -o /full/path/to/vendor.tar.bz2 
`**

## To Rebuild

**To rebuild things, you can look in the script to see how things got built. In it you'll see that you can do this to rebuild:`
export TARGET_PRODUCT=origen
export TARGET_SIMULATOR=false
export CPUS=`grep -c processor /proc/cpuinfo`
export TARGET_TOOLS_PREFIX=android-toolchain-eabi/bin/arm-linux-androideabi-
. build/envsetup.sh
make -j${CPUS} boottarball systemtarball userdatatarball
`
Enjoy!
