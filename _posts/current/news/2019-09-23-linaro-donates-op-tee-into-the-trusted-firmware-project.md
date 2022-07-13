---
layout: post
title: Linaro donates OP-TEE into the Trusted Firmware Project
description: "Linaro announces that OP-TEE is moving to become part of the
  Trusted Firmware open project managed by Linaro. Read more here. "
date: 2019-09-23 01:00:00
image: /assets/images/content/PR_Trusted_Firmware_banner_pic.jpg
tags:
  - Linaro
  - Trusted Firmware
category: news
author: linaro
---

[San Diego, 23 September 2019] Linaro Ltd, the open source collaborative engineering organization developing software for the Arm ® ecosystem, today announced that OP-TEE (Open Portable TEE, an open source Arm TrustZone® solution) is moving to become part of the Trusted Firmware open project managed by Linaro.

OP-TEE is a Trusted Execution Environment (TEE) designed as a companion to a non-secure Linux kernel running on Arm Cortex®-A cores using the Arm TrustZone technology. OP-TEE implements TEE Internal Core API v1.1.x which is the API exposed to Trusted Applications and the TEE Client API v1.0, which is the API describing how to communicate with a TEE. Those APIs are defined in the GlobalPlatform API specifications. OP-TEE is designed primarily to rely on the Arm TrustZone technology as the underlying hardware isolation mechanism. However, it has been structured to be compatible with any isolation technology suitable for the TEE concept and goals, such as running as a virtual machine or on a dedicated CPU.

The main design goals for OP-TEE are:

- Isolation - the TEE provides isolation from the non-secure OS and protects the loaded Trusted Applications (TAs) from each other using underlying hardware support,
- Small footprint - the TEE should remain small enough to reside in a reasonable amount of on-chip memory as found on Arm-based systems,
- Portability - the TEE aims at being easily pluggable to different architectures and available HW and has to support various setups such as multiple client OSes or multiple TEEs.

Trusted Firmware provides a reference implementation of secure world software for Armv8-A and Armv8-M. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. This forms the foundations of a TEE on application processors, or the Secure Processing Environment (SPE) of microcontrollers. It includes a Secure Monitor executing at Exception Level 3 (EL3). It implements various Arm interface standards including the Power State Coordination Interface (PSCI), Trusted Board Boot Requirements (TBBR), SMC Calling Convention, and System Control and Management Interface.

Linaro’s transfer of the OP-TEE project to be hosted by Linaro’s Community Projects Division within the Trusted Firmware project is effective as of 3 July 2019. The Trusted Firmware project is designed to reduce porting and integration work across the ecosystem by creating reusable reference implementations for SoC and Trusted OS developers at [trustedfirmware.org](https://www.trustedfirmware.org/). Membership of the Trusted Firmware project is open to all and governance is overseen by a board of member representatives.

> “Collaboration is critical as we continue to define secure software and services for Arm-based systems across all market segments”, said Matteo Carlini, Chairman of the Board for the Trusted Firmware project and Director of Software Technology Management at Arm. “With the OP-TEE reference implementation of a Trusted Execution Environment, contributors and adopters can continue to work together in an open governance project, with architected solutions which can then be easily ported to many other trusted software implementations.”

> “OP-TEE and Trusted-Firmware-A are both secure firmware and there are many aspects where these two components need to cooperate”, said Joakim Bech, Principal Engineer of the Security Working Group at Linaro. “If we look at newer Arm architectures we see even more interaction taking place between various firmware components. Having OP-TEE under the same umbrella as Trusted-Firmware-A gives a coherent secure side implementation for future Arm devices, both as part of the boot story as well as on full running systems. This is not only beneficial for OP-TEE and Trusted Firmware, but also for companies and users who are looking for complete secure side reference implementations and want to be part of developing state of the art software that can be found in all sorts of devices today."

**About Linaro**

Linaro leads collaboration in the Arm ecosystem and helps companies work with the latest open source technology. The company has over 250 engineers working on more than 70 open source projects, developing and optimizing software and tools, ensuring smooth product roll outs, and reducing maintenance costs. Work happens across segments including datacenter & cloud, edge & fog, IoT & embedded, consumer, machine intelligence, telecom & networking, autonomous vehicles, and high performance computing. Linaro is distribution neutral: it wants to provide the best software foundations to everyone by working upstream, and to reduce non-differentiating and costly low-level fragmentation. The effectiveness of the Linaro approach has been demonstrated by Linaro consistently being listed as one of the top ten company contributors, worldwide, to Linux kernels since 3.10.

To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro engineering work is open to all online. To find out more, please visit [https://www.linaro.org](/) and [https://www.96Boards.org](https://www.96boards.org/).