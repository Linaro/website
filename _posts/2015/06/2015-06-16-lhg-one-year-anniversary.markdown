---
author: mark.gregotski
categories:
- blog
date: 2015-06-16 13:28:03
description: Linaro Home Group celebrates it's one year anniversary. Read an update
  on what the team is working on as well as a recap from the first year.
layout: post
link: /blog/lhg-one-year-anniversary/
slug: lhg-one-year-anniversary
tags:
- android
- LHG
- Linaro
- Linaro Digital Home Group
- RDK
title: LHG One-Year Anniversary
wordpress_id: 8668
---

#### **In the beginning...**

The Linaro Digital Home Group (LHG) was officially launched on May 29th 2014 and it was a year ago this week the inaugural sprint was held with participation from LHG’s eight founding member companies in Nashua, New Hampshire (June 10-12, 2014). Engineers from Linaro and member companies discussed media frameworks targeted at the Comcast RDK and Android, focusing on GStreamer and OpenMAX, and brought demos on company boards showing the performance of their optimized solutions. The group collaborated to define the first version of the LHG Way-of-Working (WoW) guidelines and using JIRA cards and associated engineering blueprints to define the work that is targeted for our sprints. In addition, the group devised a plan to build up the infrastructure to support development activities which included creation of code repositories, the LHG Wiki site developer document repository, and CI loops to support development builds on member hardware, etc.


The mission of LHG is to accelerate adoption of the ARM architecture in the digital home (entertainment) segment by working collaboratively on core Linux-based software platforms, delivering media via optimized and secure video frameworks.

**LHG Resources (Public)**

  * [LHG Wiki](https://wiki.linaro.org/LHG)
  * [LHG Public Documentation](https://wiki.linaro.org/LHG/LHGPublicDocuments)

At the time the group was launched, the LHG steering committee also got to work defining the key technical topics the group will execute and developing the roadmap.

**The key areas identified:**

  * Definition of Common media frameworks and components such as GStreamer, OpenMax, Wayland, V4L2
  * Migration to Chromium/Blink: migrate from Webkit and Qt-Webkit solutions to Blink and Chromium Embedded Framework
  * W3C EME Secure Media playback
  * Standardization on LSK for STB/IPTV and OpenEmbedded/Yocto build framework

The target platforms of interest to LHG members were the RDK and Android (and later Android TV).

{% include image.html name="RDK.jpg" alt="RDK" class="small-inline" %}
{% include image.html name="androidTV2.jpg" alt="androidTV2" class="small-inline" %}
{% include image.html name="Android.jpg" alt="Android" class="small-inline" %}

#### **Looking back…**

Key technical topics of interest:

Deliver key open source technologies into reference platforms on member SoCs/Platforms

  * Standardized media framework on OpenMAX, integrated with GStreamer v1.4 (non-tunneled, dma-buf, zero-copy buffer model)
  * Development of ‘best of breed’ media framework based on open source components
  * Migration from Qt-Webkit to Chromium/Blink on the RDK
  * Adoption of the Wayland Display Server Protocol
  * V4L2 driver framework


Standardized media security platform using ARM TrustZone:
  * Delivery of open source reference implementation of W3C EME for secure media playback on RDK and Android
  * Provide reference implementation technologies, such as the Open Portable TEE (link) with Global Platform compliant interface
  * Secure CDM for various key systems, Google WideVine, Microsoft PlayReady, Adobe PrimeTime
    * Investigate commonality in interfaces via [OpenCDM](https://github.com/fraunhoferfokus/open-content-decryption-module)
  * Crypto APIs interface to OP-TEE
    * W3C, Comcast Sec Crypto APIs


#### Key LHG Activities and Milestones at a glance

{% include image.html name="LHG-milestones.jpg" alt="LHG milestones" %}

#### LHG Headlines

**Linaro RDK**

LHG advancements in the RDK architecture include a series of implementation ‘firsts’:

  * Chromium/Blink implementation with CEF3
  * Aura/Ozone cross-platform graphics/windowing system
  * GStreamer implementation as a Chromium PPAPI
  * Wayland display server protocol with Weston-based compositor
  * V4L2 driver framework
  * Qt-Wayland plugin for Qt applications


Linaro RDK on ARM leads the way for other SoCs used in RDK in migration to Wayland, DRM/KMS


**W3C EME with OP-TEE**

LHG integration of OP-TEE on member hardware:

  * Created a Chromium ‘clear key’ solution using reference CDM
  * Integrated OpenCDM and OpenCDMi with OP-TEE in secure world
  * Investigating latest Microsoft PlayReady porting kit 3.0 for OP-TEE integration
  * Interoperable DRM support investigation via OpenCDM interface
  * Integration of RDK Security APIs with OP-TEE



**LHG Upstreaming**

  * RDK project, OpenEmbedded, CEF project
  * GitHub projects: OP-TEE, OpenCDM

{% include image.html name="gstreamer.jpg" alt="gstreamer" class="small-inline" %}

{% include image.html name="trustzone.jpg" alt="Trust Zone" class="small-inline" %}

{% include image.html name="HTML5.jpg" alt="HTML5" class="small-inline" %}


#### Collaboration with other teams in Linaro

LHG collaborates with many teams in Linaro to leverage shared engineering, especially in areas of security for OP-TEE, media & graphics, kernel, builds & baselines, LAVA, toolchain and QA.

In addition, LHG works in conjunction with member companies to involve additional engineering resource for activities of mutual benefit, such as the porting of the Linaro RDK to the Cisco Xi4 set-top platform for Comcast.

#### Looking forward...

As we look forward to the next year, there are some familiar themes and some new ones. LHG is focused to get all the features that we have brought to the Linaro RDK upstreamed to the RDK main branch.

The security work will target the integration of W3C EME with commercial DRMs to promote CDM interoperability integrated with OP-TEE running on ARM TrustZone. LHG will work with the security working group on the implementation of secure video buffers for the optimized media pipeline. This is an important step to solidify the OP-TEE in the set-top space.

For AndroidTV there is renewed focus on media frameworks to provide glitch-free video playback of 4K content with enhanced A/V sync. The team will also investigate video latency in the AndroidTV Input Framework.

The evolution of the secure boot architecture effort, being led by the Linaro Office of the CTO, will have an impact on secure boot for set-top boxes in both 32- and 64-bit solutions.

LHG will also branch out to develop open-source solutions on home broadband devices that will bring entertainment to the home, but will also be control points for a variety of other applications relating to home monitoring and automation.


#### **Summary**

It’s hard to believe the first year has gone by so quickly. Thank you to all the LHG member companies, engineers, and steering committee members for all of your efforts.

We look forward to an exciting second year in LHG as we continue our major work in RDK and AndroidTV, and also look to branch out with more involvement in community boards (96Boards) and supplying LHG reference solutions.

**[Current LHG Members](/members/)**

{% include image.html name="LHG-members-5.jpg" alt="LHG Members Image"%}