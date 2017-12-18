---
author: mark.gregotski
date: 2015-02-12 09:46:09+00:00
excerpt: Linaro is proud to announce that it is a gold sponsor of the 2015 RDK User's
  Conference (http://rdkcentral.com/rdk-users-conference-2015/). Linaro is a not-for-profit
  engineering organization with over 200 engineers working on consolidating and optimizing
  open source software for the ARM architecture, including developer tools, the Linux
  kernel, ARM power management, and other software infrastructure.
layout: post
link: /blog/linaro-2015-rdk-users-conference/
slug: linaro-2015-rdk-users-conference
title: Linaro at the 2015 RDK Users Conference
wordpress_id: 7990
categories:
- blog
---
Linaro is proud to announce that it is a gold sponsor of the 2015 [RDK Users Conference](http://rdkcentral.com/rdk-users-conference-2015/). Linaro is a not-for-profit engineering organization with over 200 engineers working on consolidating and optimizing open source software for the ARM architecture, including developer tools, the Linux kernel, ARM power management, and other software infrastructure.

The 2015 RDK Users Conference provides members of the RDK community the opportunity to get together and discuss key trends and technology directions for the RDK. At the conference, Linaro will be presenting on the “Linaro Perspective” of the RDK and give the attendees an update of the Linaro Digital Home Group’s (LHG) activities over the past year and what LHG will be delivering in 2015. Linaro will also have a booth where the latest advancements in the RDK will be demonstrated on RDK compliant member hardware.

LHG is in a unique position to harness the disruptive technologies that are sweeping the PayTV industry, namely the movement towards open-source software, the continuing adoption of ARM SoCs to take advantage of high performance and low-power requirements, as well as security requirements to protect high value content.

LHG members span the media ecosystem consisting of operators, OEMs, and SoC vendors who are committed to open source development and innovation in the RDK. Linaro is growing and it’s members are reaping the benefits of being first to market with key open-source innovations.

Currently, LHG has the following members, several of which are actively focused on RDK development and deployment opportunities.

{% include image.html name="rdk-1.jpg" alt="Current LHG Members" %}

**Current LHG Members**

## Linaro's Contributions to the RDK


Linaro was instrumental in aiding Comcast migrate the RDK code build system to OpenEmbedded/Yocto build framework. Linaro worked with three SoC vendors to demonstrate the OE/Yocto build process of the RDK and the portability advantages of the layered approach to building a RDK distribution.


 [LCA14: LCA14-113:Linaro Comcast RDK project from Linaro](//www.slideshare.net/linaroorg/lca14-113-linarocomcastrdkproject)


Linaro was also responsible for contributing the key enabling technology for the RDK Emulator which is widely used throughout the RDK community.

## LHG's Current Work on the RDK

The LHG membership is currently focused on the release of the Linaro RDK, which is the RDK optimized for the ARM architecture. One of the first activities where LHG was instrumental was in contributing to the migration of the RDK Browser from Qt/Webkit to Chromium/Blink. The solution uses Chromium and the Chromium Embedded Framework (CEF) as the foundation for the RDK Browser and media framework.

LHG has been successful in prototyping a graphics windowing solution using the Wayland protocol to replace X11. The Wayland protocol provides many advantages for compositing layers from different sources. In addition, LHG has implemented Wayland support on the ARM Mali GPU which provides accelerated graphics performance improvements.

LHG implemented a GStreamer plugin on the top of the Video-for-Linux (V4L2) driver framework, utilizing the new Linux Kernel standard for memory buffer sharing: DMA-Buf. V4L2 is utilized for the integration of the SoC hardware video decoder. All of these innovations are built using a Chromium – Ozone/Wayland – GStreamer PPAPI architecture that is running on member Xi4-compatible hardware.

LHG has submitted patches upstream to the CEF project and Open Embedded (meta-browser; meta-rdk) for ARM targets.

LHG is evolving an open source software stack introduced by one of the LHG members. This media stack is the OpenSDK which implements the best of breed open-source components to continue innovation in the RDK.


{% include image.html name="rdk-2.jpg" alt="LHG RDK Build and Development Activities" %}
**LHG RDK Build and Development Activities**

**Security**

LHG is working towards the W3C EME solution to support media playback and DRM in the browser without the need for special plug-ins. In particular, Linaro is working to develop a Content Decryption Module (CDM) to support multiple DRM solutions. In addition, Linaro has provided the Open Portable [Trusted Execution Environment (OP-TEE)](https://github.com/OP-TEE) as an open-source TEE which is compatible with the Global Platform TEE standard. The LHG security solution will use the features of the ARM TrustZone(R) architecture to provide a secure video path.

Currently the OP-TEE has been integrated into one member board with the OpenSDK and work is underway to implement a protected video path using ARM TrustZone.

## LHG Infrastructure


Members of LHG benefit from our private Gerrit/CI loops for the RDK. The Gerrit/Git configuration is setup for storing the RDK recipes and individual projects that may change during the development. All other code is retrieved from the RDK repositories or public open-source repositories (such as Chromium).

Jenkins is used for our CI loops, which will do verification of every Gerrit patch. We target builds and test runs for each of our member hardware targets, as well as the RDK emulator. Approximately 30 builds are run daily for all build/hardware configurations.


{% include image.html name="rdk3.jpg" alt="LHG RDK Build Infrastructure established for Members" %}

**LHG RDK Build Infrastructure established for Members**

**Tools/ LSK**

The members of LHG utilize the [Linaro Stable Kernel (LSK)](https://wiki.linaro.org/LSK) to baseline development efforts on a uniform and stable kernel. In addition, the team also takes advantage of the Linaro developer tools optimized for the ARM architecture.

## Linaro at RDK UC

Linaro will be represented at the RDK User's Conference by the Linaro Digital Home Group (LHG) members. Linaro will be presenting at the conference with a talk entitled “The Linaro Perspective on the RDK”. At the Linaro booth, there will be demos on LHG member boards showing the latest innovations on the RDK.

{% include image.html name="rdk4.jpg" alt="rdk4" %}


