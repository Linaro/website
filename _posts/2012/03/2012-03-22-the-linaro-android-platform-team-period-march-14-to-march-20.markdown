---
author: tony.mansson
categories:
- blog
date: 2012-03-22 22:53:18
description: The Linaro Android Platform Team
keywords: Linaro Android Platform Team, DS-5, MALI400, MALI
layout: post
link: /blog/community-blog/the-linaro-android-platform-team-period-march-14-to-march-20/
slug: the-linaro-android-platform-team-period-march-14-to-march-20
tags:
- Android
- Community
- LAVA
- android
- arm
- board
- community
- CortexA9
- Evaluation builds
- Linaro
- Linux
- Linux on ARM
- Open Source
- software
title: The Linaro Android Platform Team, Period March 14 to March 20.
wordpress_id: 1415
---

Hello Linaro fans.

How is your board coping with the load when run in different use cases? Would you like to see graphs of the resource usage?

This is entirely possible with the ARM DS-5 Eclipse plugin. Android developers can use DS-5 to debug native C/C++ code built with the Android Native Development Kit, but the DS-5 plugin also features a built in profiler. Linaros Evaluation Builds have built-in support for both debugging and profiling with DS-5. The upcoming 12.03 release of the Linaro Ubuntu and Android platforms will add profiling support for the MALI 400 GPU in Snowball.

The MALI 400 has one Vertex processor and up to four fragment (pixel) processors. Using DS-5 you will soon be able to trace these processors along with the application processors in colorful graphics.

The Community Edition of DS-5 is [available](http://www.arm.com/products/tools/software-tools/ds-5/ds-5-downloads.php) under licence but free of charge for individuals and small companies.

Next week is release week at Linaro and this is just one of the really interesting features to look forward to. The 12.03 will be a release to remember!

Here’s a list of this weeks major achievements.


### Key Points for wider discussion


  * Hardware accelerated multimedia is now integrated on Origen.

  * The 12.03 pre RC#2 have been created and tested.

### Team Highlights

  * A dual-port SD-card for automated testing in LAVA has been designed. The first samples are expected in 2 weeks.


  * DS-5 v. 5.9 has been verified on Snowball. MALI 400 GPU usage is now also traced.


  * Core tests (iozone, memtester, stress) have been ported to Android and integrated in all platforms.


  * Good progress on accellerated Multimedia for Snowball.


  * Progress on implementing "lava-android-test run custom" sub command in LAVA. This will add a whole new dimension of flexibility to LAVA testing.


  * ConnectivityManager unit tests have been integrated in Android.


### Bugs fixed


  * 880423	[ Suspend does not work on Samsung Origen.](https://bugs.launchpad.net/linaro-android/+bug/880423)


  * 921585	[ We need to switch to one init.rc.](https://bugs.launchpad.net/linaro-android/+bug/921585)


  * 954982	[ android build for A15x4-A7x4 fails to boot.](https://bugs.launchpad.net/linaro-android/+bug/954982)


  * 953056	[ Testcase names don't match between the testcase wiki and testcase spreadsheet.](https://bugs.launchpad.net/linaro-android/+bug/953056)


### Miscellaneous

  * Nothing


### Blueprints


  * [12.03 Milestone](https://launchpad.net/linaro-android/+milestone/12.03)