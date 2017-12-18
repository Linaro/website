---
author: mark.gregotski
categories:
- blog
date: 2014-12-03 23:51:32
description: Overview of the activities and projects the Linaro Home Group has been
  working on since the group announcement in May 2014
layout: post
link: /blog/linaro-home-group-update-since-launching/
slug: linaro-home-group-update-since-launching
tags:
- android
- ARMv8
- Linaro
- Linaro Connect
- Linux
- Linux on ARM
- Open Source
- Opensource
title: Linaro Home Group Update Since Launching
wordpress_id: 7602
---

Linaro’s Home Group (LHG) was announced on May 29, 2014 and is the newest group within Linaro.  LHG works on solutions for members in reference to open source software for ARM-based set-top boxes, smart TVs, media boxes, TV dongles and home gateway products.  LHG was tasked by its’ members to work on several key initiatives including:

  * A common core Linux platform. The Linaro Stable Kernel (LSK) is based on the kernel.org long-term supported (LTS) kernel. LHG will leverage this with a Group-focused baseline and add features such as DRM (digital rights management). LHG will provide a core Linux platform build with versions to support the base layer of the RDK (Reference Design Kit), Android-based products, and manufacturer-specific Linux-based products. The LHG platform will support different vendor applications and user interfaces.

  * Development of improved media framework APIs. LHG will work to establish standardized APIs to different media hardware, codecs, accelerators, and other peripheral functions across multiple members’ SoCs to improve middleware portability and provide an optimized media pipeline.

  * Development of a standard media security platform based on ARM Trustzone® technology. This will deliver an open source implementation of the W3C Encrypted Media Extensions (EME) standard for TrustZone-based ARM SoCs.

  * Integration of key open source standards-based software. The LHG steering committee will identify key open sourced standards to be integrated by the group’s engineering team. Items already under discussion include optimized HTML5 support for web-based delivery of media.


At LCU14, the LHG team put on display some of their initial achievements.  This included the Chromium/Blink implementation as part of the Chromium Embedded Framework on ARM using the Aura windowing system with an Ozone plugin.  This embedded browser implementation was running on two member boards as part of the demos.

LHG also continues to innovate on the RDK project and is evaluating architectures for the migration of RDK to use the Wayland windowing system on ARM.  The solutions under investigation include the Wayland-Ozone plugin and a Linaro reference EGL Ozone plugin.  Early implementations of Wayland on the ARM Mali GPU have shown good performance improvements.

Another highlight of LCU14 for LHG was the playback of 4k video on a member board with a dual Cortex-A9 ARM processor running GStreamer media pipeline with a Wayland implementation on Mali GPU that only used a fraction of one core to process and render.**** ****

* * *

### **Linaro Home Group's Director, Mark Gregotski  discusses the team's current status**

* * *

This group has been very busy and during the recent Linaro Connect event they took time to demonstrate and discuss some of the work the team  has been doing.  They held several sessions, keynotes and demonstrations during the week.  Below is a recap of those activities:

**Session Videos/Presentations during Linaro Connect USA 2014**

  * Opening Keynote - LHG Demo: STB RDK on ST 4K hardware

  * LHG Keynote - Enabling Internet Speed for Service Providers, Ken Morse, Cisco.

  * LCU14-200: Delivering Pay TV Content Throughout the Connected Home, Richard Bardini, DLNA Ambassador.

  * LCU14-208: Chromium-Blink migration for RDK, Zoltan Kuscsik, Haifeng Yan
  
      * slides:  [http://www.slideshare.net/linaroorg/lcu14-208-chromiumblink-migration-for-rdk-39155555](http://www.slideshare.net/linaroorg/lcu14-208-chromiumblink-migration-for-rdk-39155555)

  * LCU14-508 BOF: OpenEmbedded, Trevor Woerner, Koen Kooi, Khem Raj

To learn more about the Linaro Home Group (LHG) please visit:  [https://wiki.linaro.org/LHG](https://wiki.linaro.org/LHG)


**UPCOMING LINARO CONNECT EVENTS: LINARO CONNECT HONG KONG 2015**

Registration for Linaro Connect Hong Kong 2015 from February 9-13, 2015 is now open.  More information on this event can be found at: [http://connect.linaro.org/hkg15/ ](http://connect.linaro.org/hkg15/%20)