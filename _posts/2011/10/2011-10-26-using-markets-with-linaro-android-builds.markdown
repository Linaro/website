---
author: frans.gifford
categories:
- blog
date: 2011-10-26 12:52:11
description: Using app markets with Linaro Android builds
keywords: linaro, app, market, android, f-droid, cyanogenmod, android market
layout: post
link: /blog/android-blog/using-markets-with-linaro-android-builds/
slug: using-markets-with-linaro-android-builds
tags:
- Android
- android
- app
- Linaro
- market
title: Using App Markets with Linaro Android builds
wordpress_id: 748
---

Software distribution on modern smartphones tends to be centralised in markets. Just as iPhone has iTunes, Android has the Android Market, but also allows other markets such as F-Droid.

The Android Market application is not Free Software, and is only available for hardware that passes compatibility testing and whose manufacturer agrees a licence with Google[1]. Since Linaro has done neither, Linaro builds are in the same boat as Cyanogenmod[2] when it comes to installing Google apps.

One app market we can use though is F-Droid[3], but installing it revealed an interesting bug[4]: Google's latest hardware requirements require devices to have a touchscreen and Android causes all apps to implicitly require it. There's a reasonable argument for doing so, but since development boards don't have any built-in screen, it means most apps are marked as incompatible. Fortunately, Linaro images are typically installed to an µSD card, and it's simple enough to edit the permissions files on the device

`cp frameworks/base/data/etc/* /media/system/etc/permissions`

On next boot the device reports up all permissions to F-Droid and we're able to install everything.

[1] Android Market licensing [http://source.android.com/faqs.html#if-i-am-not-a-manufacturer-how-can-i-get-android-market](https://source.android.com/)
[2] Cyanogenmod [http://wiki.cyanogenmod.com/wiki/Latest_Version](http://wiki.cyanogenmod.com/wiki/Latest_Version)
[3] F-Droid [http://f-droid.org/](http://f-droid.org/)
[4] Bug #881469: "Declare android hardware features" https://bugs.launchpad.net/linaro-android/+bug/881469