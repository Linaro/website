---
author: bernhard.rosenkranzer
categories:
- blog
date: 2012-04-30 18:11:42
description: Instructions for building Linaro Android for the Galaxy Nexus target
keywords: Linaro Android,Linaro,Android,ICS,Galaxy Nexus,Galaxy,Nexus
layout: post
link: /blog/community-blog/linaro-android-running-on-galaxy-nexus/
slug: linaro-android-running-on-galaxy-nexus
tags:
- Android
- Community
title: Linaro Android running on Galaxy Nexus
wordpress_id: 1618
---

No, I promise, it's not a Last-day-of-April-Fools joke. ;)
Linaro Android, built with the Linaro toolchain (my test build was done with the gcc 4.7 based 2012.04 Android toolchain release), can run on a Galaxy Nexus phones (GSM version tested, CDMA version may or may not work).
There are a couple of limitations (GPS didn't work, the camera didn't work, and turning off Bluetooth caused the phone app to crash), but all the basics work fine, even 3D games could run.

If you want to check it out:

```bash

repo init -u git://android.git.linaro.org/platform/manifest.git -b linaro-playground -m maguro.xml
repo sync
export TARGET_TOOLS_PREFIX=/where/you/installed/the/linaro-android-toolchain/bin/arm-linux-androideabi-
source build/envsetup.sh
lunch full_maguro-userdebug
make -j8 otapackage

```

The file to flash to the Galaxy Nexus will be out/target/product/maguro/full_maguro-ota-eng.\*.zip - you can flash it using e.g. the ClockworkMod Recovery.

As the branch name implies, this is not an official release, and we don't expect to make any official releases of this in the future. However, we will accept patches. ;)