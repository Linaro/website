---
author: bernhard.rosenkranzer
categories:
- blog
date: 2012-08-26 23:45:10
description: Linaro Android 12.08 is not just the first Linaro Android release based
  on JellyBean (android-4.1.1_r4, to be more precise) - it also introduces support
  for JellyBean running on the Galaxy Nexus.
keywords: Linaro, Linux on ARM, JellyBean, Galaxy Nexus, Android, Linaro Android Build,
  Benchmarking, Acceleration, phones, mobile devices, improved speeds.
layout: post
link: /blog/hardware-update/linaro-android-jellybean-on-galaxy-nexus-gsm-speeding-up-phones/
slug: linaro-android-jellybean-on-galaxy-nexus-gsm-speeding-up-phones
tags:
- Android
- Hardware
title: Linaro Android JellyBean on Galaxy Nexus (GSM) - Accelerating Mobile Devices
wordpress_id: 1830
---

Linaro Android 12.08 is not just the first Linaro Android release based on JellyBean (android-4.1.1_r4, to be more precise) - it also introduces support for JellyBean running on the Galaxy Nexus.

We've brought back all the optimizations made for earlier Linaro Android releases - supporting the Linaro compilers, supporting building without -fno-strict-aliasing, replacing string routines in Bionic, and adding a proper sincos() implementation to Bionic.

The result is [a build](https://releases.linaro.org/archive/12.08/android/images/galaxynexus-jb-gcc47-aosp-blob/) that works well enough for every day use (I've upgraded my phone - so far, I haven't run into any serious problems), and that does quite a bit better in benchmarks than the original JellyBean firmware.

SunSpider shows a speed increase of 13% on average, with speedups of up to 30% on some tests, and slowdowns of less than 3% in the worst cases. Improvements here can be attributed to the string routines, newer compiler, and better compiler flags used in Linaro Android.
0xBench 2D tests show a significant performance increase in particular in the DrawArc tests - likely for the most part due to sincos().

Unlike the [earlier port](/blog/linaro-android-running-on-galaxy-nexus/), this is an official build that will be updated every month.

Of course, the source for all improvements is[ publicly available](https://releases.linaro.org/archive/12.08/android/images/galaxynexus-jb-gcc47-aosp-blob/), and will be submitted to AOSP after getting some more testing.