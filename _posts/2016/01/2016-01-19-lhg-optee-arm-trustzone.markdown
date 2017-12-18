---
author: shovan
date: 2016-01-19 14:37:54+00:00
layout: post
link: /blog/lhg-optee-arm-trustzone/
slug: lhg-optee-arm-trustzone
title: LHG takes another step forward in Enhanced Content Protection with OPTEE on
  ARM® TrustZone®
wordpress_id: 9924
categories:
- blog
---

## LHG takes another step forward in Enhanced Content Protection with OPTEE on ARM® TrustZone®


Mark Gregotski and Zoltan Kuscsik

As studios begin creating ultra-high definition (UHD) content and delivering it to customer devices, a higher level of content protection is required. As a consequence of these more stringent requirements, the digital rights management (DRM) solutions that protect the content, as well as the keys used to decrypt the content, are moving from software to hardware based solutions. Hardware-based security systems allow the security and robustness rules for premium content to be satisfied.

A secure Trusted Execution Environment (TEE) allows the security processes related to key management, content decryption, and content decoding to be executed in a secure environment, not accessible from user space. An example implementation of a TEE, is the Linaro OPTEE that runs on ARM-based CPU TrustZone® architecture.

In addition, commercial DRM porting kits are now available that interface to a TEE to take advantage of this secure hardware functionality. An example, is the latest Microsoft PlayReady® DRM porting kit designed to interface to a generic TEE. The PlayReady interface for Trusted Execution Environments (PRiTEE) is implemented in the PlayReady PK 3.0 release.

{% include image.html name="PRiTEE-Slides-1.png" alt="PRiTEE Slides"%}

**PlayReady Device Based Content Protection Improvements [1]**

In September of 2015, the Linaro Digital Home Group (LHG) provided the first integration of PlayReady PK3.0 with OPTEE [2]. In that implementation, the PlayReady PK interfaced with OPTEE and the content decryption was performed by a Trusted Application (TA) running in OPTEE using the OPTEE decryption functions.

In the recent implementation, LHG has completed the entire integration of the PlayReady DRM libraries with OPTEE. LHG created a GlobalPlatform compliant TA running on OPTEE that can fully encapsulate the PlayReady DRM as a static library.

The GlobalPlatform (GP) based trusted applications have multiple parts:
API for the normal (non-secure) world. This is the GP TEE Client API (v1.0).
API for the secure world. This is the GP TEE Internal Core API (v1.1). See [3] for both API specifications.

For the non-secure world we pass the PlayReady data using GP to the TA, and we are using various GP secure functions to implement the OEM specific specific requirements for the PlayReady TA (such as, memory allocation using GP memory allocation functionality).

In this solution, the license parsing, key management and the content decryption is performed inside the secure context. This architecture ensures that the TA is aligned with the PlayReady architecture requirements for hardware level DRM protection.

The Open CDMI [4] is an open interface that enables the integration of the DRM/CDM into a browser or media application. The OpenCDM module communicates with the TA using the Microsoft PRiTEE interface and exposes the Open CDMI interface for decrypting PlayReady protected content using the Encrypted Media Extensions in Chromium

{% include image.html name="PRiTEE-Slides-2.png" alt="PRiTEE Slides 2" %}


**High level overview of Media and Security Components**

There is a demo running on the STMicroelectronics B2120 reference platform and we are in the process of porting this build to the HiKey 96Boards platform.

The latest solution is accessible now to our members who are PlayReady Licensees; so we look forward to see it running on multiple ARM-based hardware platforms in the upcoming months on both Android and Linux.

The next stage that LHG is working on is the implementation of a secure video path that uses a secure buffer memory allocation framework in TrustZone for the media pipeline. Stay tuned for the latest updates in the LHG security solution development.
	
  1. [https://www.microsoft.com/playready/features/EnhancedContentProtection.aspx](https://www.microsoft.com/playready/features/EnhancedContentProtection.aspx)
  2. [/news/linaro-and-microsoft-collaborate-on-secure-media-solutions-for-arm-based-socs/](/news/linaro-and-microsoft-collaborate-on-secure-media-solutions-for-arm-based-socs/)
  3. [http://globalplatform.org/specificationsdevice.asp](http://globalplatform.org/specificationsdevice.asp)
  4. [https://github.com/kuscsik/linaro-cdmi](https://github.com/kuscsik/linaro-cdmi)


