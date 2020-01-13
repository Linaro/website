---
author: tony.mansson
categories:
- blog
date: 2012-01-05 14:37:14
description: The Linaro Android Platform Team, Period Dec. 28 to Jan. 03
keywords: Android Linaro
layout: post
link: /blog/android-blog/the-linaro-android-platform-team-period-dec-28-to-jan-03/
slug: the-linaro-android-platform-team-period-dec-28-to-jan-03
tags:
- android
- arm
- Android
- board
- embedded
- Linaro
title: The Linaro Android Platform Team, Period Dec. 28 to Jan. 03
wordpress_id: 1135
---

Hello!
This week's excitement is that we are moving all Android integration and daily builds to Android version 4.0.3. This is going very well. We have found that there are far too many old bug reports that are no longer relevant, so we are busy cleaning up the bug list. Ne next big thing we will be looking at is multimedia acceleration. This is a huge area that involves great variation i technical solutions. Nevertheless it's important that our evaluation builds are running with realistic configurations, only then can we see and measure the improvements made by the various Linaro working groups. Here's what happened last week in the Android team:

### Key Points for wider discussion

  * We are switching to Android version 4.0.3 this week.

### Team Highlights

  * A massive bug cleanup is ongoing. Bugs not re-confirmed on 4.0.3. will not be fixed.


  * Pandaboard graphics (SGX) have been uppdated to version 1.8v55175 and works on ICS 4.0.3.


  * Work on Snowball multimedia acceleration has been started.


  * Continued progress on strict-aliasing cleanup for ICS and 4.6 toolchain.


  * Continued progress on WiFi integration for Snowball. wpa_supplicant integrated.

### Bugs fixed

  * 907153	[ landing-panda's graphics enablement is broken on 4.0.3.](https://bugs.launchpad.net/linaro-android/+bug/907153)


  * 859995	[ ADB over USB doesn't work on i.MX53.](https://bugs.launchpad.net/linaro-android/+bug/859995)


  * 894389	[ SGX driver failing on ICS on tracking-panda.](https://bugs.launchpad.net/linaro-android/+bug/894389)


  * 861413	[ Origen Android sd doen't get mounted on to gallery.](https://bugs.launchpad.net/linaro-android/+bug/861413)

### Miscellaneous

  * nothing.

### Issues

  * none
  
### Blueprints

  * [12.01 Milestone](https://launchpad.net/linaro-android/+milestone/12.01)