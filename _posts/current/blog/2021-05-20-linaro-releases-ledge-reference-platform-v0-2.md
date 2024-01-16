---
layout: post
title: "Linaro releases LEDGE Reference Platform v0.2 "
description: " This blog talks about the LEDGE Reference Platform v0.2 release
  and what new features users can expect to see. "
date: 2021-05-20 10:03:26
image: /assets/images/content/IoT_Planet_UNDER_2MB.jpg
tags:
  - LEDGE Reference Platform
  - SystemReady
  - LEDGE
  - UEFI
  - U-Boot
  - Linux Kernel
category: blog
author: ilias.apalodimas@linaro.org
---
The majority of consumer electronics now consist of an abandoned firmware paired with an old kernel version. To make matters worse, those devices rarely support updates of either their firmware or software. There is a need for best practises for Firmware-OS interaction and its security extensions, to increase the security and maintainability of those devices.

# Introducing LEDGE Reference Platform

In an effort to empower any organization to easily create a Linux distribution for vertical markets, focusing on the high level features of the operating system, Linaro has created the LEDGE Reference Platform. LEDGE Reference Platform (RP) is a lightweight highly secure and robust container runtime environment that has dependable boot and update capabilities. It comes with a full set of security policies with SELinux, IMA (Linux Kernel Integrity Measurement Architecture) and other technologies and builds on [SystemReady-IR](https://developer.arm.com/architectures/system-architectures/arm-systemready/ir) and [EBBR](https://arm-software.github.io/ebbr/) specifications. Consumers of LEDGE-RP complement it with market specific components to make vertically integrated solutions.

To see LEDGE RP in action, [check out this demo](https://www.youtube.com/watch?v=otciKqA0hdQ) from Linaro Virtual Connect Spring 2021 where Linaro’s Maxim Uvarov demoed LEDGE RP on ST32MP1 to showcase UEFI keys provisioning and direct booting of Linux.

# What is new in LEDGE RP v0.2 release?

Earlier this week we released LEDGE Reference Platform v0.2 which you can [download here](http://releases.linaro.org/components/ledge/rp-0.2/). The release contains many new features. The majority of the new features are enhancing the overall platform security, adding authentication and attestation mechanisms based on established standards:

* UEFI SecureBoot enabled on all platforms
* UEFI variable management in secure world via OP-TEE (Aarch64 only for now), which provides secure rollback protected storage for critical system variables
* PARSEC support for TPMv2 (tested with fTPM), allowing mapping security APIs, in the language of choice, to security primitives found in various hardware.
* Arch agnostic UEFI protocol for loading initrd, allowing users to boot multiple kernels without GRUB.
* Updated OpenEmbedded to the latest Dunfell release
* U-Boot update to 2021.01
* Linux kernel updated to 5.8
* OP-TEE updated to 3.12

# Supported Platforms

Although by design LEDGE-RP will run on any EBBR compliant platform, there are a number of devices that are officially supported. For these platforms Linaro provides Trusted Substrate firmware binaries that adhere to [SystemReady-IR](https://developer.arm.com/architectures/system-architectures/arm-systemready/ir) and [EBBR ](https://arm-software.github.io/ebbr/)specifications. [Trusted Substrate](/automotive-iot-and-edge-devices/) is a collaborative project for the integrated, tested and packaged foundation of open source secure boot and trusted execution elements.

* QEMU Aarch64 (U-Boot and EDK2 support)
* QEMU Armv7 (U-Boot and EDK2 support)
* QEMU X86 (EDK2 Only)
* [STM32MP157C](https://www.st.com/en/evaluation-tools/stm32mp157c-dk2.html) (U-Boot only)
* [SynQuacer DeveloperBox](https://www.96boards.org/product/developerbox/) (EDK2, U-Boot support is WIP)
* BeagleBoard X15 (U-Boot only)

Linaro has a track record of bringing Arm vendors together on the Linux kernel and is currently extending this to firmware with Trusted Substrate.

# Future plans

The next LEDGE Reference Platform release will be available in six months time. By the upcoming release we expect to see the following features realised:

* Fully integrated A/B partition support for reference, providing anti-bricking and rollback protections
* Standardize firmware upgrades using open source tools (fwupd)
* UEFI Measured Boot support combined with Disk encryption based on TPMv2 with LUKS encryption by an authorized PCR policy for increased security
* Product quality Low power networking with normal tools rather than through debug file system controlf
* TPM for devices with RPMB support. This will provide platforms without a discrete TPM with a viable alternative

For more information on the LEDGE Reference Platform click [here](https://github.com/Linaro/ledge-oe-manifest). To find out more about Linaro and the work we do, make sure to [contact us](https://www.linaro.org/contact/).