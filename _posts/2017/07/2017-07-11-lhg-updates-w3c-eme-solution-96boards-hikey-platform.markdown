---
author: linaro
date: 2017-07-11 10:59:13+00:00
layout: post
link: /blog/lhg-updates-w3c-eme-solution-96boards-hikey-platform/
slug: lhg-updates-w3c-eme-solution-96boards-hikey-platform
title: LHG updates W3C EME solution for 96Boards HiKey platform
wordpress_id: 12583
categories:
- blog
---

**_Authors: Mark Gregotski and Peter Griffin_**

{% include image.html name="hikey-960-hd-front.png" alt="Hikey960 Front Board Image" %}


The Linaro Digital Home Group (LHG) is pleased to announce an updated reference build of W3C EME Clear Key on the 96Boards HiKey platform. The build uses open source components to implement an HTML5 browser-based playback of encrypted content using Linaros open source ‘Open Portable Trusted Execution Environment’ (OP-TEE) running on ARM TrustZone. The reference build uses the widely used OpenEmbedded build system for this Linux based implementation.

The Chromium browser-based implementation is an end-to-end solution that retrieves encrypted video from a server and locally provides secure decryption via OP-TEE [1]. 64-bit execution mode is being used for both Secure (including Trusted Applications) and Non-secure environments, and the build uses a pre-built binary (fip.bin) for the ARM Trusted Firmware and OP-TEE build. Using a Firmware Image Package (FIP) allows for packing bootloader images (and potentially other payloads) into a single archive that can be loaded by the ARM Trusted Firmware from nonvolatile platform storage.

Support for Secure Data Path extensions (included in [OP-TEE v2.4.0](https://github.com/OP-TEE/optee_os/releases/tag/2.4.0) release, but not enabled for HiKey) has also been enabled for the HiKey platform in this release. The SDP extensions aren’t currently being leveraged by the OpenCDM and Chromium components, but can be tested using the ‘xtest --sdp-basic’ test suite, making this reference build a good starting point on which to base future SDP development.


### **The Clear Key build is comprised of the following components:**

  * Chromium v53.0.2785.143
  * Wayland (v1.11)-Weston
  * Mali 450MP4 GPU r6p0 release with graphics drivers (supporting drm/kms, dma-buf)
  * OpenCDM
  * OP-TEE v 2.4.0
  * Sample Trusted Application (AES Decryption)
  * Linux kernel v. 4.9

### **Build & Flashing Instructions**


The consolidated build and flashing instructions for the HiKey board on which this reference build is based are provided below. Pre-built images to enable quick evaluation of the EME solution are also provided here [https://releases.linaro.org/openembedded/images/lhg/hikey/17.06/](https://releases.linaro.org/openembedded/images/lhg/hikey/17.06/).

**Build from source**

```
repo init -u https://github.com/linaro-home/lhg-oe-manifests.git -b refs/tags/LHG-2017.06
repo sync
. setup-environment
bitbake rpb-westonchromium-image
cd build-rpb-wayland/tmp-rpb_wayland-glibc/deploy/images/hikey/
gunzip rpb-westonchromium-image-hikey.ext4.gz
ext2simg rpb-westonchromium-image-hikey.ext4 rpb-westonchromium-image-hikey.ext4.img
```

**Flashing**
More info about jumpers and flashing available here [https://github.com/96boards/documentation/wiki/HiKeyUEFI](https://github.com/96boards/documentation/wiki/HiKeyUEFI). The commands below assume a 8Gb eMMC LeMaker HiKey board, if using an earlier HiKey board please flash the ptable-linux-8g.img partition table.

```
sudo fastboot flash ptable ptable-linux-8g.img
sudo fastboot flash fastboot fip.bin
sudo fastboot flash nvme nvme.img
sudo fastboot flash boot boot-hikey.uefi.img
sudo fastboot flash system rpb-westonchromium-image-hikey.ext4.img
```

**Running Chromium with EME**
Note: Due to a bug with the binary Mali driver [3], Chromium currently has to be run as root user. We are working with ARM to resolve this issue.

```
su
cdmiservice &
/usr/bin/chromium/chrome --no-sandbox --use-gl=egl --ozone-platform=wayland --no-sandbox --composite-to-mailbox --in-process-gpu --enable-low-end-device-mode --start-maximized --user-data-dir=data_dir --blink-platform-log-channels=Media --register-pepper-plugins="/usr/lib/chromium/libopencdmadapter.so#ClearKey CDM#ClearKey CDM0.1.0.0#0.1.0.0;application/x-ppapi-open-cdm" http://people.linaro.org/~peter.griffin/chrome/eme_player.html
```

Select "External Clearkey" key system and hit Play.

**Testing OP-TEE Secure Data Path HiKey extensions**
This build also enables SDP extensions for the HiKey platform. These can be exercised with the ‘xtest --sdp-basic’ test.

See example output below.

```
     hikey:/home/linaro# xtest --sdp-basic
    
    Secure Data Path basic accesses: NS invokes SDP TA
     Allocate in ION heap 'unmapped'
     sdp_basic_test: success
    
    Secure Data Path basic accesses: SDP TA invokes SDP TA
     Allocate in ION heap 'unmapped'
     sdp_basic_test: success
    
    Secure Data Path basic accesses: SDP TA invokes SDP pTA
     Allocate in ION heap 'unmapped'
     sdp_basic_test: success
    
    Secure Data Path basic accesses: NS invokes SDP pTA (shall fail)
     Allocate in ION heap 'unmapped'
     Error: invoke SDP test TA (inject) failed ffff0006 3
     test failed
     -> false negative: pTAs refuse SDP memref from NS clients.
```

For a more detailed description of the Linaro Clear Key solution, please see this document: [https://wiki.linaro.org/LHG/LHGPublicDocuments?action=AttachFile&do=view&target=KeySystems.pdf ](https://wiki.linaro.org/LHG/LHGPublicDocuments?action=AttachFile&do=view&target=KeySystems.pdf)
The W3C EME specification [2] details the messaging flow between elements that support encrypted media recognition and support for obtaining keys to decrypt the video. The EME Clear Key solution is required for any compliant EME solution.


{% include image.html name="html5-eme-application.png" alt="HTML5 EME Application Image" %}

The content is decrypted using an AES Decryption Trusted Application that resides in Secure World running on the secure OP-TEE OS in ARM TrustZone.


{% include image.html name="linaro-clearkey-implementation.png" alt="Linaro ClearKey Implementation Image" %}

Linaro ClearKey Implementation

So go ahead and give this a try.

Pre-built HiKey images to enable quick evaluation of this solution are available at [https://releases.linaro.org/openembedded/images/lhg/hikey/17.06/](https://releases.linaro.org/openembedded/images/lhg/hikey/17.06/). The engineers in LHG have also created full W3C EME OP-TEE integrations with commercial DRMs such as Microsoft’s PlayReady and Google’s Widevine on both Linux- and Android-based solutions. You will be able to see and hear more about LHG’s work in this area in our upcoming Connect event in San Francisco in September.

**Some additional interesting links:**
[1] [https://www.op-tee.org/](https://www.op-tee.org/)
[2] [https://www.w3.org/TR/encrypted-media/](https://www.w3.org/TR/encrypted-media/)
[3] [Bug 2917](https://bugs.linaro.org/show_bug.cgi?id=2917) - HiKey: Weston: EGL is not available for non-root user
