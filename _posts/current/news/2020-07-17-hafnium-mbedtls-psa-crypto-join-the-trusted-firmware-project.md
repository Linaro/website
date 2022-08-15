---
layout: post
title: New Members Join the Trusted Firmware Project
description:
  "Trusted Firmware today announced that Hafnium, MbedTLS and the PSA Crypto
  Project transitioned into its project scope. This is a huge step forward towards
  collaborative development of secure software solutions. "
date: 2020-07-17 12:40:55+00:00
image: /assets/images/content/trusted-firmware.jpg
tags:
  - Trusted Firmware
  - Hafnium
  - MbedTLS
  - PSA Crypto Project
  - Open Governance
  - Linaro
  - Arm
  - Google
  - NXP
  - ST Microelectronics
category: news
author: jon.burcham@linaro.org
---

Trusted Firmware today announced that Hafnium, MbedTLS and the PSA Crypto Project transitioned into its project scope. This is a huge step forward towards collaborative development of secure software solutions. Members of Trusted Firmware, the open governance community project hosted by Linaro Community Projects Division, to date include Arm, Cypress, Data IO, Futurewei, Google, Linaro, NXP® Semiconductors N.V., Renesas Electronics Corporation, ST Microelectronics and Texas Instruments.

Hafnium, MbedTLS and the PSA Crypto Project join Trusted Firmware-A (TF-A), Trusted Firmware-M (TF-M) and OP-TEE as the list of projects hosted by Trusted Firmware, to foster the collaboration around the development of a reference Trusted Execution Environment and Secure Processing Environment on the Arm® A-Profile and M-Profile architectures respectively.

Hafnium comes as the reference Secure Partition Manager for the Arm Secure EL2 virtualization extension introduced in the Armv8.4-A architecture and implemented on modern Arm A-Profile processors. Hafnium has been transferred by Google into the Trusted Firmware project and it recently finalised its transition, including relicensing to the BSD 3-clause license.

MbedTLS is an extensively used SSL and TLS library deployed in a wide variety of applications to establish secure, encrypted and authenticated links over untrusted networks like the internet. It aims to hide most of the complexities of cryptographic operations, certificates and authentication associated with SSL/TLS protocol from the application.

The PSA Crypto Project, a relatively new project, is the reference implementation of [PSA Functional Crypto APIs](https://developer.arm.com/-/media/Files/pdf/PlatformSecurityArchitecture/Implement/IHI0086-PSA_Cryptography_API-1.0.0.pdf?revision=d1f1c364-ec79-4fd0-aac4-65923a0b9a0e&la=en&hash=9419687186081634B15A839434367DE293F4AF09). The PSA Crypto Project makes it possible for developers to easily secure data at rest, on the fly and perform secure updates of platform software. The MbedTLS project is evolving to utilize PSA Crypto APIs provided by the PSA Crypto Project.

> “Ecosystem collaboration is essential to ensure the successful development of secure software solutions,” said Matteo Carlini, director, software technology management at Arm and chairman of the board for Trusted Firmware. “We are very pleased to welcome Hafnium, MbedTLS and PSA Crypto to the Trusted Firmware Project, and their involvement will enable us to focus closely on defragmentation and standard interfaces, for both secure virtualization and crypto operations across all market segments.”
>
> “The Trusted Firmware project is a key security building block for modern Android devices. By transferring Hafnium, we hope to build on the strengths of the Trusted Firmware community of experts and to develop a trustworthy and transparent reference firmware stack for our ecosystem and beyond. We expect that Trusted Firmware and Hafnium will form the reference software for all EL3 and sEL2 exception levels on future Android devices.” said Dave Kleidermacher, VP, Android Security and Privacy.

The Trusted Firmware Project is designed to reduce porting and integration work across the ecosystem by creating reusable reference implementations for SoC and Trusted OS developers. The set of projects part of Trusted Firmware provides a reference trusted code base complying with the relevant Arm specifications and standards. The collaborative design, development and validation amongst the project members allows SoC developers and OEMs faster and cost-effective deployment of secure devices.

For further information on the Trusted Firmware Project, visit [trustedfirmware.org](https://www.trustedfirmware.org/).

**About Linaro Community Projects Division**

Linaro Community Projects Division is the division of Linaro managing open source community projects with open governance. Linaro is leading collaboration on open source development in the Arm ecosystem. The company has over 250 engineers working on consolidating and optimizing open source software for the Arm architecture, including developer tools, the Linux kernel, Arm power management, and other software infrastructure. Linaro is distribution neutral: it wants to provide the best software foundations to everyone by working upstream, and to reduce non-differentiating and costly low level fragmentation. The effectiveness of the Linaro approach has been demonstrated by Linaro’s growing membership, and by Linaro consistently being listed as one of the top ten company contributors, worldwide, to Linux kernels since 3.10. To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro engineering work is open to all online. To find out more, please visit [Linaro](https://www.linaro.org/) and [96Boards](https://www.96boards.org/).
