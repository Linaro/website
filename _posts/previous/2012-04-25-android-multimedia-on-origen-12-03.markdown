---
author: linaro
categories:
- blog
date: 2012-04-25 03:47:12
description: The 12.03 release of Android on Origen has fully enabled HW acceleration
  ranging from 3D, HDMI and Video Playback support
keywords: Multimedia, OMX, Android, Origen, Binary Blob
layout: post
link: /blog/community-blog/android-multimedia-on-origen-12-03/
slug: android-multimedia-on-origen-12-03
tags:
- Android
- Community
- Hardware
- Releases
title: Android Multimedia on Origen, 12.03
wordpress_id: 1592
---

**Multimedia HW Acceleration from Origen**

In 12.03 release, Origen has a fully enabled Multimedia components with HW acceleration, this includes: 3D HW, Multimedia Video Playback and HDMI for Graphics and Video. This gives an invigorating user experience. The kernel version used is Linaro Kernel 3.0, and Linaro Android 4.0.3. All the multimedia components are released as a stand-alone binary components which need to be installed by install-binaries.sh shell script, this is well explained in flashing procedure page, so not explained here.

**Video Acceleration**

The following codecs are supported: H.264, and MPEG4. Video of all resolution upto 1080p works with a stunning user experience in 30 fps.

**HDMI**

The HDMI supports 2 components: Graphics and Video. The graphics layer provides the Android composition contents, the video layer provides video rendered by StageFright/OMX. There is also Hot Plug detection support for HDMI enabled

**3D HW acceleration**

MALI 400 gives a stunning 3D HW acceleration for system-wide graphics management, benchmark scores show a significant differences from using a defaults SW acceleration from using a hardware accelerated graphics components.

**Performance Tuning Tricks**

For Video processing it is required that the buffer sharing between multiple components happen at very good speed, here are few scenarios.

1) OMX Codec gives Y and UV buffers to the Video Post Processor for color conversion and Video Scaling. It is required therefore to pass the contents between the 2 components, a Zero-Copy solution is this achieved by directly tunnelling the physical address between the 2 driver components from the HAL layer

2) In the HDMI video playback scenario it is required that the Y and UV contents be passed from the Media Process (OMX and StageFright) to the System Process (Surface Flinger), this involves passing of buffers through IPC, thus Signals and Properties are currently being used to pass the Y and UV physical Address. HDMI is currently working in the context of Surface Flinger. HDMI has a powerful in-built Video Processing capabilities for color conversion and scaling.

Thus Stunning video experience is achieved even when video is being streamed both to HDMI and LCD at the same time, there is no delay or Frame drop or AV-Sync problems

**Further Enhancements:**

The Linaro kernel is being migrated to 3.4 rc-3 for Origen, this has all the latest and greatest Main Line drivers for all components ranging from: HDMI, Codec, post processor, etc..

It will be quite interesting and there will be lot of changes coming in the Android HAL in terms of following:

1) Having a very standard Android HAL in terms of V4L2 interface

2)Having a very common and standard interfaces for buffer sharing and IPC mechanism like UMM, DMA-BUF.

3)Migration of Graphics framework, UMM support, DRM framework support, gralloc support for ION/UMP etc..

All the above work are being in progress for Android, stay tuned for more in the next blog.