---
author: bernhard.rosenkranzer
categories:
- blog
date: 2012-05-21 20:57:40
description: Announcement of the availability of Linaro Android toolchain nightly
  builds, including a script to download and update toolchains.
keywords: Linaro,Android,Linaro-Android,toolchain,gcc,gcc-4.6,gcc-4.7,gcc-4.8,gcc
  4.6,gcc 4.7,gcc 4.8,nightly,nightly build,daily,daily build,binary
layout: post
link: /blog/releases-blog/linaro-android-toolchain-nightly-builds-available/
slug: linaro-android-toolchain-nightly-builds-available
tags:
- Android
- Releases
title: Linaro Android toolchain nightly builds available
wordpress_id: 1638
---

Those have been up and running for a while, but we never announced it, so it may well be news ;-)
Nightly builds of the Linaro Android toolchain are now available at a constant URL. Builds of 3 branches are available:
[gcc 4.6]()http://https://android-build.linaro.org/jenkins/view/Toolchain/job/linaro-android_toolchain-4.6-bzr/lastSuccessfulBuild/artifact/build/out/android-toolchain-eabi-4.6-daily-linux-x86.tar.bz2, [gcc 4.7]()https://android-build.linaro.org/jenkins/view/Toolchain/job/linaro-android_toolchain-4.7-bzr/lastSuccessfulBuild/artifact/build/out/android-toolchain-eabi-4.7-daily-linux-x86.tar.bz2 and [gcc trunk (what will eventually become 4.8)]()https://android-build.linaro.org/jenkins/view/Toolchain/job/linaro-android_toolchain-trunk/lastSuccessfulBuild/artifact/build/out/android-toolchain-eabi-trunk-daily-linux-x86.tar.bz2.

At this time, we recommend using the 4.7 branch for production work (that's also the branch we're using for most official builds).

If you want to always have the latest and greatest for testing, simply add this (or something similar) as a cron job:

```bash

#!/bin/sh
D=`mktemp -d /tmp/TCXXXXXX`
[ -z "$D" ] && exit 1
cd "$D"
wget --no-check-certificate https://android-build.linaro.org/jenkins/view/Toolchain/job/linaro-android_toolchain-4.6-bzr/lastSuccessfulBuild/artifact/build/out/android-toolchain-eabi-4.6-daily-linux-x86.tar.bz2
wget --no-check-certificate https://android-build.linaro.org/jenkins/view/Toolchain/job/linaro-android_toolchain-4.7-bzr/lastSuccessfulBuild/artifact/build/out/android-toolchain-eabi-4.7-daily-linux-x86.tar.bz2
wget --no-check-certificate https://android-build.linaro.org/jenkins/view/Toolchain/job/linaro-android_toolchain-trunk/lastSuccessfulBuild/artifact/build/out/android-toolchain-eabi-trunk-daily-linux-x86.tar.bz2
cd /opt
rm -rf android-toolchain-eabi
tar xf "$D"/android-toolchain-eabi-4.6-daily-linux-x86.tar.bz2
rm -rf android-toolchain-4.6
mv android-toolchain-eabi android-toolchain-4.6
rm -rf android-toolchain-eabi android-toolchain-4.7
tar xf "$D"/android-toolchain-eabi-4.7-daily-linux-x86.tar.bz2
mv android-toolchain-eabi android-toolchain-4.7
rm -rf android-toolchain-eabi android-toolchain-trunk
tar xf "$D"/android-toolchain-eabi-trunk-daily-linux-x86.tar.bz2
mv android-toolchain-eabi android-toolchain-trunk
rm -rf "$D"

```