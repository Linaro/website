---
layout: post
title: Android 13 now available on Qualcomm Reference Boards RB5 and RB3
description: This blog talks about the Android 13 release and how it boots
  straight out of the box on the Linaro supported Reference Boards RB5 and RB3.
date: 2022-08-18 06:05:29 +01:00
image: /assets/images/content/Client_Devices_banner_pic.jpg
tags:
  - Android13
  - Qualcomm RB3
  - Qualcomm RB5
  - Qualcomm Robotics Kit
  - AOSP
category: blog
author: amit.pundir@linaro.org
---
The source code for the latest Android release - Android 13 - is out!  The Android 13 release tag (android13.0.0_r3) and AOSP/master branch boot straight out of the box on both the Linaro supported Qualcomm [Reference Boards in AOSP](https://source.android.com/docs/setup/build/devices) - Qualcomm Robotics Board RB5 and Dragonboard 845c (DB845c), also known as RB3. 

{% include image.html path="/assets/images/content/qualcomm-rb5-running-android-13-easter-egg.jpg" alt="An image of a Qualcomm RB5 running Android 13 Easter Egg" %}

This is a significant step forward if we look back in time. A few years ago, on many development boards,  it could have taken weeks to get a new Android release to work. Issues would usually need to be fixed and features would not always immediately work. The latest release boots to UI seamlessly, saving developers a lot of bring-up time and hassle.

# How has this been made possible?

Over the years Linaro has worked together with Google to constantly keep 96Boards development boards working and in-sync with the upstream Kernel versions and AOSP. Hardware with good software support is essential for testing and validation of the latest AOSP and latest stable and upstream kernels. The collaboration with Google and the upstream community, combined with the upstreaming efforts of Linaro’s Android team and Linaro’s landing team for Qualcomm have brought us to where we are today. And while there is always more work to do, being able to boot the latest Android release on a development board straight out of the box is a great satisfaction! 

A perspective on the history of our efforts with development boards, and why these efforts are essential, is available in one of our previous [Virtual Linaro Connect sessions](https://www.google.com/url?q=https://resources.linaro.org/en/resource/8sjfJfUNX3qitL5MW6Tbfz&sa=D&source=docs&ust=1660846392972003&usg=AOvVaw3TEWa1FpakA8ohEZoIW_pa).

# How do I get Android 13 to boot on my Dragonboard?

We support booting DB845c and RB5 with the same set of AOSP images (db845c-userdebug), thanks to our [previous efforts to support unified boot images](https://www.linaro.org/blog/supporting-multiple-devices-with-the-same-aosp-images/) on these devices. Interested developers can download the db845c-userdebug prebuilt images that we used for smoke testing Android 13 and AOSP from these locations:

* For android13.0.0_r3 based images: <https://people.linaro.org/~amit.pundir/db845c-userdebug-android13/>
* For aosp-master-android13 images: <https://people.linaro.org/~sumit.semwal/db845c-userdebug-aosp-master-android13/>

In our limited smoke testing so far, we noticed a WiFi regression which is being fixed [here](https://android-review.googlesource.com/c/device/linaro/dragonboard/+/2188025/), and a Bluetooth regression on the android13.0.0_r3 tag because of a [missing patch](https://android-review.googlesource.com/c/device/linaro/dragonboard/+/2103025/) from AOSP/master branch, which did not make it to the release tag.

One can also download AOSP db845c-userdebug prebuilts from our daily build page  <https://snapshots.linaro.org/96boards/dragonboard845c/linaro/aosp-master/>

For advanced users who want to build the AOSP images from source, please follow the instructions from here <https://source.android.com/docs/setup/build/devices>

# Want to learn more? 

Join us on Tuesday 6 September for our virtual Linaro and Qualcomm Tech Day to know more about Linaro's Android team efforts to support these reference boards in AOSP - you can register for free[ here](https://www.linaro.org/events/linaro-and-qualcomm-present-qualcomm-tech-day/). 

For more information on the work we do to keep these devices in sync with AOSP, go to our [Software Device Enablement for Android project page](https://linaro.atlassian.net/wiki/spaces/SDEFAU/overview).