---
author: linaro
date: 2016-06-14 21:43:43+00:00
excerpt: The Linaro Digital Home Group (LHG) is pleased to announce a reference build
  of W3C EME Clear Key on the 96Boards HiKey platform.  The build uses open source
  components to implement an HTML5 browser-based playback of encrypted content using
  OP-TEE running on ARM TrustZone.  The OpenEmbedded build system is employed in this
  Linux-based implementation.
layout: post
link: /blog/engineering-update-16-04/
slug: engineering-update-16-04
title: First open source W3C EME solution provided on the 96Boards HiKey platform
wordpress_id: 10695
categories:
- blog
tags:
- 96Boards
- hardware
- LHG
- Linaro
- Linux
- Linux on ARM
- Opensource
---

_**Authors:  Mark Gregotski and Zoltan Kuscsik**_

The Linaro Digital Home Group (LHG) is pleased to announce a reference build of W3C EME Clear Key on the 96Boards HiKey platform.  The build uses open source components to implement an HTML5 browser-based playback of encrypted content using OP-TEE running on ARM TrustZone.  The OpenEmbedded build system is employed in this Linux-based implementation.

This Chromium browser-based implementation is an end-to-end solution that retrieves encrypted video from a server and locally provide secure decryption via OP-TEE.

The build instructions are provided here:  [https://github.com/kuscsik/96boards-manifest](https://github.com/kuscsik/96boards-manifest)


### **The Clear Key build is comprised of the following components:**

  * Chromium v45
  * Wayland (v1.9)-Weston
  * Mali 450MP4 GPU r6p0 release with graphics drivers (supporting drm/kms, dma-buf)
  * OpenCDM
  * OP-TEE v. 2.0
  * Sample Trusted Application (AES Decryption)
  * Linux kernel v. 4.5


A link to real encrypted video content to playback!

All 64-bit execution mode in both Secure (including Trusted Applications) and Non-secure environments.

The build uses a pre-built binary (fip.bin) for the ARM Trusted Firmware and OP-TEE build.  Using a Firmware Image Package (FIP) allows for packing bootloader images (and potentially other payloads) into a single archive that can be loaded by the ARM Trusted Firmware from nonvolatile platform storage. A driver to load images from a FIP has been added to the storage layer and allows a package to be read from supported platform storage.

Link to player (part of the readme instructions): [http://people.linaro.org/~peter.griffin/chrome/eme_player.html](http://people.linaro.org/~peter.griffin/chrome/eme_player.html)

For a more detailed description of the Linaro Clear Key solution, please see this document:   [https://wiki.linaro.org/LHG/LHGPublicDocuments?action=AttachFile&do=view&target=KeySystems.pdf](https://wiki.linaro.org/LHG/LHGPublicDocuments?action=AttachFile&do=view&target=KeySystems.pdf)

The W3C EME specification details the messaging flow between elements that support encrypted media recognition and support for obtaining keys to decrypt the video.  The EME Clear Key solution is required for any compliant EME solution.

{% include image.html name="ClearKey1.png" alt="ClearKey1" %}

The content is decrypted using an AES Decryption Trusted Application that resides in Secure World running on the secure OP-TEE OS in ARM TrustZone.


{% include image.html name="ClearKey2.png" alt="ClearKey2" %}

_Linaro ClearKey Implementation_


So go ahead and give this a try.  The engineers in LHG have also created full W3C EME OP-TEE integrations with commercial DRMs such as Microsoft’s PlayReady and Google’s Widevine on both Linux- and Android-based solutions.  You will be able to see and hear more about LHG’s work in this area in our upcoming Connect event in Las Vegas in September ([LAS16](http://connect.linaro.org/las16/)).


### **Some additional interesting links:**


W3C Encrypted Media Extensions

[https://www.w3.org/TR/encrypted-media/](https://www.w3.org/TR/encrypted-media/)

OpenCDM

[https://github.com/kuscsik/linaro-cdm](https://github.com/kuscsik/linaro-cdm)

[https://github.com/kuscsik/linaro-cdmi](https://github.com/kuscsik/linaro-cdmi)

[https://github.com/fraunhoferfokus/open-content-decryption-module](https://github.com/fraunhoferfokus/open-content-decryption-module)
