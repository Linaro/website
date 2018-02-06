---
author: tony.mansson
categories:
- blog
date: 2012-03-16 00:06:07
description: The Linaro Android Platform Team. big.LITTLE on Fast Model.
layout: post
link: /blog/hardware-update/the-linaro-android-platform-team-period-march-7-to-march-13/
slug: the-linaro-android-platform-team-period-march-7-to-march-13
tags:
- Android
- Hardware
- '12.03'
- android
- arm
- big.little
- board
- fast model
- Linaro
- Linux on ARM
title: The Linaro Android Platform Team, Period March 7 to March 13.
wordpress_id: 1383
---

Hello Linaro fans.

Something big is happening in Linaro. And something LITTLE too. Behind the cute moniker "[big.LITTLE](http://www.arm.com/products/processors/technologies/bigLITTLEprocessing.php)" hides a chip architecture that may improve the user experience of mobile devices dramatically. Up to now the device manufacturers have had trouble combining stunning performance with a long battery life. Imagine you drive around with a large engine in your car because you like to race it on the drag strip a few times a year. You would have to pay for that while commuting on all other days, because a large engine consumes excessive fuel even when you don't use the power. That's bad economy.

Enter the hybrid. By combining two sets of software compatible but different ARM CPUs in the same SoC, these conflicting demands on power and economy can be met. The big.LITTLE switcher in software ensures that your device has supercharged hot rod performance when you need it, but is ecological the rest of the time.

Linaro is adapting this technology to Android. Amazingly, without using any real life big.LITTLE boards. It all simulated on [Fast Models](http://www.arm.com/products/tools/models/fast-models.php).

Here's a list of this weeks major achievements.


### Key Points for wider discussion

  * The 12.03 toolchains, 4.6 and 4.7, is ready and being tested.


  * Android runs on A15, A7 and A15/A7 Fast Models.

### Team Highlights

  * Verified that DS-5 5.9 works on Pandaboard with new gator.


  * An extensive TSC card revision has been done.


  * Progress on porting Iozone and Memtester to Android.

### Bugs fixed

  * 942307	[ 'asm' operand requires impossible reload](https://bugs.launchpad.net/linaro-android/+bug/942307)


  * 887961	[ Tethering over Bluetooth/WiFi/USB missing in ICS](https://bugs.launchpad.net/linaro-android/+bug/887961)


  * 897176	[ SD card not accessible(checked via Gallery app)](https://bugs.launchpad.net/linaro-android/+bug/897176)


  * 906297	[ Live wallpaper crashing on ICS -panda](https://bugs.launchpad.net/linaro-android/+bug/906297)

### Miscellaneous

  * mansson will be leaving the Android team. Last day April 5.

### Blueprints


  * [12.03 Milestone](https://launchpad.net/linaro-android/+milestone/12.03)