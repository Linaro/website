---
layout: post
title: Linaro reference devboards boot Android 14 on the day of its release
description: |
  Android14 boots on Linaro reference devboards on the day of its release
date: 2023-10-05 11:03:05 +01:00
image: /assets/images/content/screenshot-2023-10-05-at-11.34.24.png
tags:
  - android14
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
The source code for the latest Android release - Android 14 - is out! The android14-release branch in the Android Open Source Project (AOSP) boots straight out of the box on the Linaro supported reference Boards - Qualcomm Robotics Board RB5, Qualcomm Dragonboard 845c (DB845c, aka RB3) and HiSilicon Hikey960.

This day-0 boot of Android 14 release has been made possible due to Linaro's long-standing collaboration with Google, the upstream community, as well as the upstream efforts of Linaro's Android team and Linaro’s landing team for Qualcomm. While there is always something more to do, this is a highly satisfying demonstration of the work done to keep these devboards in sync with AOSP. 

{% include image.html path="/assets/images/content/image-of-rb5-running-android-14.png" alt="Easter-egg Image of Android 14 running on RB5" %}  

{% include image.html path="/assets/images/content/image-of-hikey960-running-android-14.png" alt="Easter-egg Image of Android 14 running on Hikey960" %}

## How to get Android 14 to boot on Linaro reference devboards?

Since Android 13, we have enabled booting the same set of AOSP images (db845c-userdebug) on both DB845c and RB5. Interested developers can download the db845c-userdebug prebuilt images that we used for smoke testing Android 14 from here: <https://releases.devboardsforandroid.linaro.org/android14-release/db845c-userdebug/>

For Hikey960, users can download the hikey960-userdebug prebuilt images for Android 14 from here: <https://releases.devboardsforandroid.linaro.org/android14-release/hikey960-userdebug/>

For advanced users who want to build the AOSP images from source, please follow the build instructions from here <https://source.android.com/docs/setup/build/devices>.

\* Note: There is a Hikey960 build breakage which was [fixed](https://android.googlesource.com/device/linaro/hikey/+/743f509b2c692c67076d7a1ff7c2e297a06ff5d5) in the main branch but it did not make it to the release branch in time, and an outstanding Bluetooth regression ([fixes](https://android-review.googlesource.com/c/platform/packages/modules/Bluetooth/+/2765386) already posted on AOSP Gerrit for review).

## Benefits of Linaro Reference Devboards

Linaro supports a variety of development boards to ensure that the AOSP operating system runs smoothly and efficiently on those devices, across versions. Using a Linaro reference devboard for AOSP development offers a number of benefits. These boards are tested and supported by a team of experts, ensuring that developers have access to the latest software updates and bug fixes. In addition, using a Linaro supported devboard can help reduce development time and costs, as developers can be confident that the software they are developing will run smoothly on the chosen hardware.

## Want to learn more and collaborate?

For more information on the work we do to keep these devices running well with AOSP, go to our [Linaro Collaboration Advancing Android project page](https://linaro.atlassian.net/wiki/spaces/LCAA/overview).

Linaro is also working towards enabling a “Dev-boards for Android” community to provide a collaborative space for developers desirous of keeping AOSP running with relevant kernels on various devices. Stay tuned for more details on this soon!