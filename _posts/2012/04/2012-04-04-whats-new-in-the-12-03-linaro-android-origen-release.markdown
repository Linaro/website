---
author: linaro
categories:
- blog
date: 2012-04-04 13:21:28
description: Amit Pundir, Android Engineer at Linaro, tells readers about some of
  the new features being offered in the 12.03 Linaro Android Origen release.
keywords: Linaro, Linux on ARM, Android, 12.03, Release, Origen, Samsung
layout: post
link: /blog/community-blog/whats-new-in-the-12-03-linaro-android-origen-release/
slug: whats-new-in-the-12-03-linaro-android-origen-release
tags:
- Android
- Community
- Hardware
- Releases
title: What's new in the 12.03 Linaro Android Origen release?
wordpress_id: 1488
---

_** [Amit Pundir](/about/), Android Engineer at Linaro takes a moment to tell readers about what's new in the Linaro 12.03 Android Origen release.**_

Its been almost a week since [Linaro 12.03 was released](/blog/linaro-12-03-release/) and I wanted to tell you about some of the new features being offered in the 12.03 Linaro Android Origen release.

**What's new in the 12.03 Linaro Android Origen release?**

One of the major features we pushed in this cycle was hardware accelerated Multimedia support. The 12.03 release now supports 1080p video (H264, MPEG4) playback at ~25fps. If you have an LCD module, you are just one step from getting an Android Tablet experience with Wlan/BT already on board. Just follow the instructions [on the release page]()https://android-build.linaro.org/builds/~linaro-android/origen-ics-gcc46-samsunglt-stable-blob-12.03-release/ to flash the Linaro Android images on Origen.

Also, in this cycle is Mali accelerated HDMI display (which is a scaled-up version of 1024x600) and HDMI audio support. Now you can enjoy 1080p movies/youtube videos on an HDMI display connected to Origen board.

**Binary blobs attack**

There is no escape from binary blobs; is there? Not just yet in case of MM, HDMI, and Mali support on Origen, but we are working in that direction as well :)

In the current setup, we offer a tar package(or overlay) of binaries (MM, HDMI, Mali, Audio etc) which can be obtained from our [image hosting server](https://releases.linaro.org/archive/12.03/android/leb-origen/) after [accepting an EULA](http://snapshots.linaro.org/licenses/samsung-v2.html) of course. Once you create the SD card images, you will need to run an installation script which is the part of this vendor tar package, and will install the necessary binaries on your SD card.

Detailed instructions are given on [the release page]()https://android-build.linaro.org/builds/~linaro-android/origen-ics-gcc46-samsunglt-stable-blob-12.03-release/.

**Getting Involved**
Checkout the 12.03 Linaro Android Origen release and fire up a bug report if you come across any or ask for support/queries on our [linaro-android mailing list](mailto:linaro-android@lists.linaro.org). We also hang out on the _#linaro-android_ IRC channel on Freenode.

Users can also download sample video files from [http://samplemedia.linaro.org/H264/](http://samplemedia.linaro.org/H264/) to validate/test video on their Origen board.

Before winding this up, I would sincerely like to thank the Samsung Landing team and Android team for their round the clock support.