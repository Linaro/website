---
amazon_s3_presentation_url: None
amazon_s3_video_url: None
author: connect
comments: false
date: 2017-03-20 13:44:13+00:00
layout: post
link: http://connect.linaro.org/blog/security-op-tee-sessions-bud17/
session_id: None
session_track: None
slideshare_presentation_url: None
slug: security-op-tee-sessions-bud17
speakers: None
title: Security and OP-TEE sessions from BUD17
video_length: 00:00
video_thumbnail: None
wordpress_id: 5605
youtube_video_url: None
categories:
- blog
permalink: /blog/:title/
---

https://www.youtube.com/playlist?list=PLKZSArYQptsM311TZC_fVQRDEUuE6anPo

**Session Name:** Universal Keyring – The Time has Come – BUD17-203

**Abstract:**
The SKS/KeyGen2 project is about establishing an security architecture, provisioning and management scheme for cryptographic keys targeting a wide variety of applications including on-line banking, payments, e-government access, and enterprise login. A TEE (possibly aided by a local security processor) is a core component of the envisioned architecture. In order to enable easy enrollment, a browser-based provisioning protocol is another core component. Since a cryptographic key (unlike a file), usually represents a relationship to a remote party which also typically imply a policy for “their” keys, the system supports key ACLs which through an OS/TEE layer governs which applications a key may be used with. A consequence of this arrangement is that cryptographic keys become first-class OS objects like files. The protocol and basic key store is already running as an application which is used for testing and evaluation. What’s missing is the OS/TEE/Browser integration, something which requires a set of rather different

**Speakers:** Anders Rundgren
**Track:** Security
**Session ID:** BUD17-203
**Resource page:** [http://connect.linaro.org/resource/bud17/bud17-203/](/resources/bud17/bud17-203/)



* * *



**Session Name: **BoF – Device Tree and Secure Firmware – BUD17-313

**Abstract:**
Device Tree is well established in the Linux kernel. But since there could be other bootloader(s) and firmware components involved that needs to configure the hardware and thereby also needs to update the Device Tree blobs before passing it to Linux kernel. Therefore we are looking for a well established way for firmware to also make use and modify the Device Tree blobs before handing them over to Linux kernel. With this BoF session we would like to get started a gather ideas etc.

**Speakers:** Joakim Bech, Jens Wiklander
**Track:** Security
**Session ID:** BUD17-313
**Resource page: **[http://connect.linaro.org/resource/bud17/bud17-313/](/resources/bud17/bud17-313/)



* * *



**Session Name: **Benchmark and profiling in OP-TEE – BUD17-416

**Abstract:**
Benchmark and profiling are two newly developed features in OP-TEE. In this session we will cover what has been done and what is left to do and a bit about how it has been implemented.

**Speakers:** Jerome Forissier, Igor Opaniuk
**Track:** Security
**Session ID:** BUD17-416
**Resource page: **[http://connect.linaro.org/resource/bud17/bud17-416/](/resources/bud17/bud17-416/)



* * *



**Session Name: **Power management in Linux together with secure firmware – BUD17-510

**Abstract:**
On a device it’s not uncommon to share power domains between secure and non-secure side, for example between a TEE and Linux kernel. With that comes some challenges that needs to be taken care of and that is the theme for this presentation. We’ve identified a couple of challenges when it comes to power management and security. One case is when sharing power resources (clock, power domains, …) between secure and non-secure devices. Another is to make a proper shutdown and boot-up sequence (CPU on/off etc) and finally there has been some concerns regarding the latency when communicating with PSCI. In this session we would like to highlight those and discuss what the short and long term plans are.

**Speakers:** Vincent Guittot, Joakim Bech
**Track:** Security
**Session ID:** BUD17-510
**Resource page: **[http://connect.linaro.org/resource/bud17/bud17-510/](/resources/bud17/bud17-510/)
