---
layout: post
title: Linaro Reference devboards boot Android 14 on the day of release
description: >
  The source code for the latest Android release - Android 14 - is out! The
  android14-release branch boots straight out of the box on the Linaro supported
  reference Boards in AOSP - Hisilicon Hikey960, Qualcomm Robotics Board RB5 and
  Dragonboard 845c (DB845c, aka RB3).
date: 2023-10-05 11:03:05 +01:00
image: /assets/images/content/screenshot-2023-10-05-at-11.34.24.png
tags:
  - ": android14"
  - AOSP
  - devboards
  - HiSilicon Hikey960
  - Qualcomm RB5
  - Qualcomm RB3
  - Android
  - Qualcomm Robotics Kit
category: blog
author: amit.pundir@linaro.org
---
The source code for the latest Android release - Android 14 - is out! The android14-release branch boots straight out of the box on the Linaro supported reference Boards in AOSP - Hisilicon Hikey960, Qualcomm Robotics Board RB5 and Dragonboard 845c (DB845c, aka RB3).

This day-0 boot of Android 14 release has been made possible due to Linaro's long-standing collaboration with Google, the upstream community, as well as the upstream efforts of Linaro's Android and landing teams. While there is always more work to do, this is a highly satisfying demonstration of the work of all the teams involved.

{% include image.html path="/assets/images/content/image-of-rb5-running-android-14.png" alt="Easter-egg Image of Android 14 running on RB5" %}  {% include image.html path="/assets/images/content/image-of-hikey960-running-android-14.png" alt="Easter-egg Image of Android 14 running on Hikey960" %}

### How to get Android 14 to boot on Linaro supported devboards?

We support booting DB845c and RB5 with the same set of AOSP images (db845c-userdebug), thanks to our previous efforts to support unified boot images on these devices. Interested developers can download the db845c-userdebug prebuilt images that we used for smoke testing Android 14 from here: <https://people.linaro.org/~amit.pundir/db845c-userdebug-android14/>

For Hikey960, users can download the hikey960-userdebug prebuilt images for Android 14 from here: <https://people.linaro.org/~amit.pundir/hikey960-userdebug-android14/>.

For advanced users who want to build the AOSP images from source, please follow the build instructions from here <https://source.android.com/docs/setup/build/devices>.

Note: There is a Hikey960 build breakage which was [fixed](https://android.googlesource.com/device/linaro/hikey/+/743f509b2c692c67076d7a1ff7c2e297a06ff5d5) in the main branch but it did not make it to the release branch in time, and an outstanding Bluetooth regression ([fixes](https://android-review.googlesource.com/c/platform/packages/modules/Bluetooth/+/2765386) already posted on AOSP Gerrit for review).