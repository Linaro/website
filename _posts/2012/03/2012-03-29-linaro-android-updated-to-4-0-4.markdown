---
author: bernhard.rosenkranzer
comments: false
date: 2012-03-29 19:31:31+00:00
layout: post
link: https://www.linaro.org/blog/community-blog/linaro-android-updated-to-4-0-4/
slug: linaro-android-updated-to-4-0-4
title: Linaro Android updated to 4.0.4
wordpress_id: 1457
categories:
- Android
- Community
- Patch-Highlights
- Releases
---

Less than 24 hours after Android 4.0.4 appeared on Google's servers, we're pleased to announce the availability of a Linaro-ified Android 4.0.4. (This is not an official release - it's the beginning of the 12.04 builds.)

The complete source is available in our [git repository](http://android.git.linaro.org/gitweb) - in linaro_android_4.0.4 branches in subprojects containing modifications by Linaro, or using the android-4.0.4_r1.1 tag in subprojects using unmodified code from AOSP.

To get a complete Linaro Android 4.0.4 build, run

    
    repo init -u git://android.git.linaro.org/platform/manifest.git -b linaro_android_4.0.4 -m BUILDTYPE.xml
    repo sync


Where BUILDTYPE is the build type you want to use (which build type you want to use depends primarily on your target hardware) - one of landing-panda, landing-snowball, staging-iMX53, staging-iMX6, staging-origen, staging-panda, staging-vexpress-a9, staging-vexpress-rtsm, tracking-origen, tracking-panda or tracking-snowball.

Binary builds will appear shortly on [android-build](http://android-build.linaro.org/).

Of course, another, even faster, way to get 404 is just going [here](https://android-build.linaro.org/you-did-ask-for-a-404--right?). ;-)
