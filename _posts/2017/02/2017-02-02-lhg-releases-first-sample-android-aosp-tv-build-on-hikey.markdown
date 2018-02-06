---
author: linaro
categories:
- blog
date: 2017-02-02 21:36:03
description: "Linaro Home Digital Home Group (LHG) has released an initial implementation
  of Android \xE2\x80\x9CAOSP TV\xE2\x80\x9D for the 96Boards HiKey platform. See
  the blog for more."
layout: post
link: /blog/lhg-releases-first-sample-android-aosp-tv-build-on-hikey/
slug: lhg-releases-first-sample-android-aosp-tv-build-on-hikey
tags:
- 96Boards
- android
- AOSP
- Linaro
- Linaro Connect
- Linux
- Linux on ARM
- Open Source
- Opensource
title: "LHG Releases First Sample Android \u201CAOSP TV\u201D build on HiKey"
wordpress_id: 12154
---

_Authors: Khasim Syed Mohammed and Mark Gregotski_

The [Linaro Digital Home Group](/groups/lhg/) (LHG) has released an initial implementation of Android “AOSP TV” for the [96Boards HiKey platform](http://www.96boards.org/product/hikey/). This build is just the start of things to come on Android TV in LHG. 

You will be able to see a demonstration of the Android TV work and much more of the LHG activities at the upcoming [Linaro Connect event](http://connect.linaro.org/) taking place March 6-10 in Budapest.

* * *

# Android TV Overview


The Android Open Source Project (AOSP) is used in a variety of device types and form factors.  The most commonly known form factor is the Android Handheld device for mobile phones and tablets. However, for the TV form factor there are certain specific components such as the TV Input Framework and the Lean Back APIs that are unique to TV. This is Android targeted to the entertainment interface for consuming media, movies, live TV, games and apps for the “10-foot user experience”.

{% include image.html name="lhg-android-tv-blog-image-1.jpg" alt="LHG Android TV Blog Image 1" %}

The core of the Android TV device software is the TV Input Framework (TIF) which provides the framework for the delivery of live TV content. The framework consists of many components including the TV Input Manager, TV App, and TV Input HAL. TIF permits viewers to watch content from a variety of input sources such as cable, satellite, terrestrial, along with IP-based media delivery. The input source is abstracted away from the viewer who is presented with a guide containing all available services.

Android TV contains Google Mobile Services (GMS) that are licensed by Google to the vendors (SoC, OEM/ODM, operator) who are deploying solutions. The AOSP sources for the TV form factor do not contain GMS.

An Android TV solution must be verified by Google and are subject to requirements such as the Android Compatibility Test Suite (CTS), the Compatibility Definition Document (CDD) and stringent audio/video performance criteria. See: [https://source.android.com/compatibility/cdd
](https://source.android.com/compatibility/cdd)



* * *





# LHG and Android TV


In LHG, one of the goals is to create implement AOSP TV as the open source subset that Android TV is built upon. Among our members, there is value derived in working from a common AOSP TV starting point. The target platforms for the Android work in LHG are the ARM-based Linaro 96Boards platforms.   The work will start on Consumer Edition boards and then migrate to the 96Boards targeted for TV and media, the TV Platform specification. http://www.96boards.org/specifications/.

The initial build is on the HiKey CE platform which is an approved Android reference board ([https://source.android.com/source/devices.html](https://source.android.com/source/devices.html)). The preferred configuration is the 2GB RAM HiKey LeMaker version. Since HiKey affords a stable AOSP baseline target, it serves as a good starting point for initial development efforts until TV platform boards get firmly established in open source and mainline software projects.


* * *


# Development Steps to Build Android TV


{% include image.html name="lhg-blog-image-2-android-tv.jpg" alt="LHG Android TV Blog Image 2" %}


_Setup : LeMaker HiKey connected with HDMI output and USB Keyboard_

  1. **HiKey sources to be built for the TV form factor:**
    1. By default HiKey AOSP sources are built for Android mobile, we enable the necessary flags in the device and HiKey make files to enable TV characteristics.
  2. **Integrating the Live TV App**
    1. A TV application that presents live TV content to the viewer is required for Android TV devices
    2. A reference TV application (Live TV) is provided in the Android Open Source Project
    3. This free application allows users to watch favorite live content from various sources (built in tuners - Satellite, Cable, Terrestrial) and IP-based tuners and have them all shown on Android TV
    4. The Live TV app depends on Android APIs. It is a component of TIF and cannot be used independently of the other components.
    5. This application is built separately and integrated into the HiKey Android filesystem.
  3. **Integrating the sample Android TV Channel Service**
    1. There should be a service running in the background that works with Live TV app to a) display the channel list to user. b) To play the content when user selects a channel. As we don’t have this service implemented yet, we used a sample [channel service from open source](https://github.com/googlesamples/androidtv-sample-inputs).
    2. Android TV channel service is installed to simulate and show the list of channels on Live TV app using TV Input Framework (TIF). 
    3. The sample app displays a single TV input with 4 channels consisting of MP4 videos, HLS stream and MPEG-DASH stream, organized into various genres. The video files are served from Google Cloud Storage.
  4. **Support for Adaptive Bit Rate Streaming**
    1. The delivery of IP video services via Adaptive Bit Rate (ABR) streaming protocols is prevalent when delivering IP-based video variable bandwidth links
    2. There are several protocols for delivering ABR video including MPEG DASH (Dynamic Adaptive Streaming over HTTP), SmoothStreaming, HTTP Live Streaming (HLS)
    3. These protocols are used in Common Encryption solutions where content is encrypted once and can be decrypted by multiple key systems.
    4. An open source ABR media player called ExoPlayer is provided by Google ([https://developer.android.com/guide/topics/media/exoplayer.html](https://developer.android.com/guide/topics/media/exoplayer.html))
    5. The ExoPlayer app is downloaded separately and then built.


* * *

# Putting It All Together


Once the filesystem is built and flashed on the HiKey, the next step is to connect via WiFi to the internet. The Live TV app is launched and searches for channels over available input sources. The Sample Android TV app acts a service that can simulate a few IP-based TV channels that are streamed over the network. The user can make their content selection via an USB mouse or USB keyboard. Implementations on 96Boards TV Platform boards will support IR remote controls for navigating through content choices.

{% include image.html name="screenshot-android-tv.jpg" alt="LHG Android TV Blog Image 3" %}


_Source : [https://github.com/googlesamples/androidtv-sample-inputs/raw/master/screenshots/guide.png](https://github.com/googlesamples/androidtv-sample-inputs/raw/master/screenshots/guide.png)_

* * *





# Instructions to Build and Evaluate Android TV on HiKey




The instructions to download the source, build all the components and prepare the filesystem images are available here: [https://wiki.linaro.org/LHG/Build-AndroidTV-For-Hikey](https://wiki.linaro.org/LHG/Build-AndroidTV-For-Hikey)




Have fun playing with this and look for future releases from LHG!




Remember to attend the [Linaro Connect event](http://connect.linaro.org/) in Budapest for a full week of interesting keynotes, presentations and demos from all the groups focusing on the exciting evolution of open source software for the ARM ecosystem. Be sure to drop by the LHG hacking room and say hello. See all the technologies and demos we are working on!