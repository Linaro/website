---
author: khasim.mohammed
categories:
- blog
date: 2014-12-17 01:05:59
description: "Linaro's experiences in successfully running Android on ARMv8 platforms
  and the lessons learned. Michael Scott, one of Linaro\xE2\x80\x99s engineers focusing
  on Android work has written a useful blog about his experience of getting it building
  on his machines."
layout: post
link: /blog/android-l-release-building-tips/
slug: android-l-release-building-tips
tags:
- Android
- android
- ARMv8
- Linaro
- Linux
- Linux on ARM
title: Android L release - building tips
wordpress_id: 7725
---

{% include image.html name="android.png" alt="android" class="medium-inline right" %}

Linaro has been working for the past several months to enable the full Android experience on the ARM 64-bit architecture and we are now able to test this on the commercially available Nexus 9 ARMv8 AArch64 based platform.

Android L has been the most significant release from Google for Linaro since the Android Ice Cream Sandwich (ICS) release. With Android L, Google has introduced many new features including material design for UI, project volta for power management, ART for Android run time, sensor control interfaces etc. plus support for the all new 64-bit ARM architecture. This has definitely not been an easy task to support both new features and architectures together in one single release and on multiple different platforms.

I don’t need to list the features in Android L or the components changed because they are very neatly captured by Google [here](http://developer.android.com/about/versions/lollipop.html). However, I think it is useful to share our experiences in successfully running Android on ARMv8 platforms and the lessons learned. Michael Scott, one of Linaro’s engineers focusing on Android work has written a useful blog about his experience of getting it building on his machines.