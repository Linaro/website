---
layout: post
title: Passing information across bootloader components
description: When a device boots nowadays multiple firmware components need to
  pass information around. This is usually done in a platform-specific way,
  leading to confusion and increased maintenance costs. Linaro and Arm started
  an effort to standardize that which led to a standard. Let’s look at the
  details and the code upstreamed to various components
date: 2024-04-29 01:00:25 +01:00
image: /assets/images/content/Banner_Virtualization.jpg
tags:
  - U-Boot
  - firmware
  - security
category: blog
author: raymond_mao
---
# Introduction

When booting devices nowadays, a series of bootloader components work together before launching the OS. 

During platform initialization, any firmware boot stage can produce information that will be consumed by a later-stage component, and the traditional mechanisms for handing off such information are platform-specific and potentially incur significant burdens for code maintenance.

The Firmware Handoff [project](https://github.com/FirmwareHandoff/firmware_handoff) and the Firmware Handoff specification [v0.9](https://github.com/FirmwareHandoff/firmware_handoff/releases/tag/v0.9) aim to standardize how information is propagated across different firmware boot stages in an architectural-agnostic manner.

They were designed as an alternative data handoff structure and aimed to be lighter. DeviceTrees are sometimes used for the same purpose. The DeviceTree is backed by a specification though, and it originally aimed to describe non-discoverable hardware. Hijacking it with project-defined values and creating ABIs across different bootloaders wasn’t ideal.

To address this issue, the Firmware Handoff specification defines a universal and lightweight data handoff structure by introducing Transfer List (TL) and Transfer Entries (TE), enabling simple C structures within a tagged data list.

# Transfer-List definition

TL defines a header followed by a sequence of TEs, all of which are contiguous in physical address space. Each TE represents the information produced by a bootloader and is intended to be consumed by a component running later, which needs to consume this information.

{% include image.html path="/assets/images/content/transfer-list-layout.png" alt="Transfer list layout" %}

**F﻿igure 1: Transfer list layout**

Furthermore, the Firmware Handoff specification outlines a straightforward, extensible, and easily accessible registration mechanism by defining multiple TE types and TE ID ranges, enabling communities to register new TEs for various use cases without barriers.

{% include image.html path="/assets/images/content/transfer-entry-types-and-id-ranges.png" alt="Transfer entry types and ID ranges" %}

**Table 1: Transfer Entry types and ID ranges**

# Enabling Transfer-List

The *Linaro* Edge Computing group (LEDGE) has added this unified API in a variety of firmware components. Functionality includes

* Creating and initializing a TL from memory
* Populating a TL from boot arguments
* Relocating a TL to a specific memory address
* Checking the validity of a TL header
* Verifying the checksum of a TL
* Retrieving the payload data from a TE
* Adding a TE into a TL
* Looking up a TE from a TL with a specified tag ID

TL compliant with the Firmware Handoff specification v0.9 is now supported in TF-A, OP-TEE, and U-Boot and the patches below are merged upstream.

TF-A patches (included in release v2.10):

* [feat(handoff): introduce firmware handoff library](https://review.trustedfirmware.org/c/TF-A/trusted-firmware-a/+/22215)
* [feat(qemu): implement firmware handoff on qemu](https://review.trustedfirmware.org/c/TF-A/trusted-firmware-a/+/22178)
* [feat(handoff): enhance transfer list library](https://review.trustedfirmware.org/c/TF-A/trusted-firmware-a/+/23776)
* [feat(optee): enable transfer list in opted](https://review.trustedfirmware.org/c/TF-A/trusted-firmware-a/+/23777)
* [feat(qemu): enable transfer list to BL31/32](https://review.trustedfirmware.org/c/TF-A/trusted-firmware-a/+/23778)

OP-TEE patches (Included in release v4.1.0):

* [core: add memory area for transfer list](https://github.com/OP-TEE/optee_os/commit/486e6cfb2709e749165845693b8b783aa4051a93)
* [core: add transfer list API](https://github.com/OP-TEE/optee_os/commit/a12225022bd5297d7dec6ee0157df7bd0ed51f95)
* [core: add support for transfer list](https://github.com/OP-TEE/optee_os/commit/66763721fe35b96b3b694e16b80240d9b015fa41)

U-Boot (merged after 2024.04)

* [Support Firmware Handoff spec via bloblist \[v5]](https://patchwork.ozlabs.org/project/uboot/list/?series=388375&state=*)
* [Handoff bloblist from previous boot stage \[v8]](https://patchwork.ozlabs.org/project/uboot/list/?series=393473&state=*)

To turn it on you have to

* Build TF-A with `TRANSFER_LIST=1` and `SPD=opteed`.
* Enable the config options in U-Boot building U-Boot

```
Unset
CONFIG_BLOBLIST=y
CONFIG_BLOBLIST_ADDR=<bloblist_address> (e.g. 0x40004000)
CONFIG_BLOBLIST_SIZE=<bloblist_max_size> (e.g. 0x4000)
```

Build OP-TEE (with OPTEED) with 

```
Unset
CFG_TRANSFER_LIST=y 
CFG_MAP_EXT_DT_SECURE=y
```

# How the handoff works

The diagram below illustrates how a TL, containing two entries (TEs) (FDT and OPTEE pageable part), is generated, handed off, and consumed between different firmware components.

{% include image.html path="/assets/images/content/transfer-handoff-between-boot-stages.png" alt="Transfer list handoff between boot stages" %} 

**Figure 2: Transfer List handoff between boot stages** 

* BL2 creates the TL and adds FDT as a TE then hands it off to BL31
* BL31 verifies the TL and adds OP-TEE pageable part address as a TE, then hands it off to OP-TEE (BL32)
* OP-TEE verifies the TL and loads the OP-TEE pageable part by exacting the address from the TE, then appends the FDT TE by adding reserved memory nodes and finally hands the TL off to BL31
* BL31 verifies the TL and relocates it to the Non-Secure memory region.
* U-Boot (BL33) verifies the TL, relocates it to the reserved Bloblist memory, and extracts the FDT that contains all the information the platform needs

# Platform support

All of the platforms running U-Boot can make use of the transfer list. TF-A support is only available in QEMU though. If you have questions and want to enable this in your platform,  contact us at support@linaro.org.

T﻿o find out more about this topic, make sure to check out the session *[Recent implementations/refactoring in TF-A](https://www.kitefor.events/events/linaro-connect-24/submissions/76)* at the upcoming Linaro Connect Madrid 2024.