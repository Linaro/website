---
author: mark.gregotski
date: 2017-05-31 17:27:29+00:00
layout: post
link: /blog/linaro-digital-home-group-celebrates-three-years/
slug: linaro-digital-home-group-celebrates-three-years
title: The Linaro Digital Home Group celebrates three years
wordpress_id: 12408
categories:
- blog
tags:
- 96Boards
- android
- androidtv
- AOSP
- LHG
- Linaro
- multimedia
- RDK
---

By Mark Gregotski, Director of the Linaro Digital Home Group (LHG)

[The Linaro Digital Home Group ](/groups/lhg/)(LHG) is celebrating its third year anniversary![![](/assets/blog/blog-2.png)](/groups/lhg/)

{% include image.html name="blog-1.jpg" alt="Blog Image 1" class="small-inline" %}

Officially launched in May 2014 with eight founding members, LHG has delivered a succession of secure media frameworks on ARM to its members. I would like to extend a big thank you to our member companies for their continued support and encouragement over the years. I would also like to thank members of the larger community who have shown an interest in our work by attending Linaro Connect and giving presentation/keynotes on behalf of LHG.

{% include image.html name="lhg-mission-1.png" alt="LHG mission 1" class="small-inline right"%}

The mission of LHG has remained consistent over the last three years. However, the end applications for secure media frameworks have extended beyond TV and even the home itself, even reaching automotive In-Vehicle Infotainment (IVI) systems. Video is becoming ubiquitous in many facets of our day-to-day lives.

**LHG: In the beginning**

{% include image.html name="blog-3.jpg" alt="Blog Image 3" class="small-inline" %}

The early work of LHG targeted the migration of the Comcast Reference Design Kit (RDK) to ARMv8 processors. LHG employed open source features of the Linux kernel, and used open source projects related to media, graphics, security and web browsers, to create a reference implementation, named by Comcast as the ‘Linaro RDK’.

At the heart of the Linaro RDK was the OpenSDK which had its origins in a media framework put forward by STMicroelectronics. The OpenSDK continues to serve as the reference LHG OE/Yocto media framework, comprised of ‘best of breed’ open source components, including Chromium, GStreamer, V4L2, Wayland/Weston, W3C EME, OP-TEE, and kernel features, dmabuf, drm/kms.

The OP-TEE integration with W3C EME DRMs is one of the prominent features of the OpenSDK that has consistently earned LHG very positive feedback from the open source community and industry. Starting initially with an EME Clear Key implementation with Chromium, OpenCDM, OP-TEE and software based decryption TAs, we progressed to implementing PlayReady Porting Kit for Trusted Execution Environments (TEEs) and encapsulated the PlayReady libraries into a Trusted Application (TA). The security work extended to support the PlayReady Porting Kit for Android, which reused the same PlayReady TA. The security solutions based around OP-TEE integrated with commercial DRMs continue to evolve as the component parts of the solution are updated.

**LHG: What’s Happening Now**

LHG has been working with Linux-based multimedia on ARM since inception and that effort is reflected in the [Linux Multimedia on ARM](https://collaborate.linaro.org/display/EP/Linux+Multimedia+on+ARM) Lead Project. In this Lead Project, LHG continues to evolve the OpenSDK and OP-TEE/DRM integrations on Linux-based set-top solutions, and provide innovation in the RDK. The latest implementation of the LHG OpenEmbedded builds can be found [here](https://github.com/linaro-home/lhg-oe-manifests).

{% include media.html media_url="https://www.youtube.com/watch?v=zmOTyKFeyCs" %}

_Demo from Linaro Connect Budapest 2017 of Linaro RDK running on the DragonBoard410C_

{% include image.html name="blog-4.png" alt="Blog Image 4" class="small-inline" %}

In the last half of 2016, LHG formally started working with Android Open Source Project (AOSP) TV. This activity has lead to the creation of the [AOSP TV](https://collaborate.linaro.org/display/EP/AOSP+TV) Lead Project in LHG. The AOSP TV Lead Project has the mandate to integrate, develop, distribute and maintain AOSP based on the TV form factor as the basis for Android TV work by our members. LHG recently completed a Widevine DRM Level 1 playback on Android N with OP-TEE v2.4.0 with secure media buffers.


{% include media.html media_url="https://www.youtube.com/watch?v=lkAERtIry4w" %}

_Demo from Linaro Connect Budapest 2017 of Linaro Android AOSP TV_

**LHG & 96Boards**

One of the latest exciting developments for LHG was the creation of the 96Boards TV Platform Specification in January 2016. This specification has given our members and the larger community access to low-cost, readily available development platforms tailored to the set-top/Smart TV market segment. Currently one board is available and we expect several to follow. To find out more about the Poplar board, click [here](http://www.96boards.org/product/poplar/).

**LHG: What’s to come**

The past three years have passed quickly. Now moving forward with ten member companies, we set our sights on an exciting fourth year. There are many opportunities ahead which include expanding into the Android TV ecosystem with a Linaro reference design, continuing work on Linux/RDK, and providing complete set-top reference solutions based on fully featured TV Platform boards that permit access to hardware acceleration and low level security and key provisioning.  

We will continue to innovate and develop compelling media solutions with the aim of them becoming commonplace in the ARM ecosystem. I am certain that with the dedication from the LHG engineers, steering committee and our member companies, this will indeed continue to be the case.

For more information on LHG, click [here.](/groups/lhg/)

**Recent LHG Achievements**


  * LHG OE/Yocto OpenSDK media framework
    * GStreamer, Wayland/Weston, Chromium, V4L2,OP-TEE, OpenCDM, DRM/KMS, dma-buf

  * Integration of OpenCDM into the Linaro RDK
  * Integration of Wayland into RDK across all SoC platforms
  * Migration of Linaro RDK to LTS 4.9 kernel
  * Incorporate latest GStreamer v1.10 into RDK
  * Investigation of Chromium-GStreamer integrations
    * PPAPI, Mojo project, Samsung Chr/GSt backend

  * Implementation of Wayland and DRM/KMS on WebKit for Wayland browser with Westeros Compositor for RDK
  * LHG OpenSDK OE builds on HiKey and DB410C [Chromium, Wayland/Weston]
  * Port of RDK to 96Boards DB410C with V4L video acceleration
  * Implementation of RDK Bootloader in UEFI/EDK2 environment
  * Microsoft PlayReady DRM integrated with OPTEE (updates with PR porting kit v3.24 & PRiTEE)
  * W3C EME Clear Key implementation on HiKey
    * Chromium v53 - OpenCDM - OP-TEE v2.4.0


  * PlayReady and Widevine DRM integrations on HiKey with OP-TEE on Android
  * Reference OE platform builds for 32-bit user space on 64-bit platform (multilib)
  * Published 96Boards TV Platform specification in Jan 2016
  * Release of first TV Platform Board by HiSilicon - Poplar
  * Sample AOSP TV build for HiKey 96Boards platform
  * AOSP build with OP-TEE Secure Data Path extensions on HiKey 
  * Upstream OP-TEE to AOSP HiKey branch

**LHG Making News!**

  * [LHG Releases FIrst Sample Android “AOSP TV” build on HiKey](/blog/lhg-releases-first-sample-android-aosp-tv-build-on-hikey/)
  * [Linaro RDK GStreamer-V4L2 video acceleration on DB410C](https://www.youtube.com/watch?v=zmOTyKFeyCs&t=100s)
  * [LHG Android “AOSP TV” Demonstration](https://www.youtube.com/watch?v=lkAERtIry4w&t=10s)
  * [Hisilicon creates Poplar First 96Boards TV Platform](/blog/hisilicon-creates-poplar-the-first-96boards-tv-platform-development-board/)
  * [Poplar Press Release](/news/linaro-announces-first-development-board-compliant-96boards-tv-platform-specification/)
  * [LHG Sprint Report](/blog/lhg-sprint-report/)
  * [LHG takes another step forward in Enhanced Content Protection with OPTEE on ARM® TrustZone®](/blog/lhg-optee-arm-trustzone/)
  * [First open source W3C EME solution provided on the 96Boards HiKey platform](/blog/engineering-update-16-04/)
  * [Linaro Digital Home Group at SFO15](/blog/linaro-digital-home-group-at-sfo15/)
  * [LHG One-Year Anniversary](/blog/lhg-one-year-anniversary/)
  * [LHG at the 2015 RDK Users Conference](/blog/linaro-2015-rdk-users-conference/)
  * [Linaro Home Group Update](/blog/linaro-home-group-update-since-launching/)



