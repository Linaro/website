---
layout: post
title: Linaro donates OP-TEE into the Trusted Firmware Project
date: "2019-09-23 01:00:00"
image:
  path: /assets/images/content/PR_Trusted_Firmware_banner_pic.jpg
tags:
  - Linaro
  - OP-TEE
  - Trusted Firmware
category: News
author: linaro
---
[San Diego, 23 September 2019] Linaro Ltd, the open source collaborative engineering organization developing software for the Arm ® ecosystem, today announced that OP-TEE (Open Portable TEE, an open source Arm TrustZone® solution) is moving to become part of the Trusted Firmware open project managed by Linaro.

OP-TEE is a Trusted Execution Environment (TEE) designed as a companion to a non-secure Linux kernel running on Arm Cortex®-A cores using the Arm TrustZone technology. OP-TEE implements TEE Internal Core API v1.1.x which is the API exposed to Trusted Applications and the TEE Client API v1.0, which is the API describing how to communicate with a TEE. Those APIs are defined in the GlobalPlatform API specifications. OP-TEE is designed primarily to rely on the Arm TrustZone technology as the underlying hardware isolation mechanism. However, it has been structured to be compatible with any isolation technology suitable for the TEE concept and goals, such as running as a virtual machine or on a dedicated CPU.

The main design goals for OP-TEE are:

- Isolation - the TEE provides isolation from the non-secure OS and protects the loaded Trusted Applications (TAs) from each other using underlying hardware support,
- Small footprint - the TEE should remain small enough to reside in a reasonable amount of on-chip memory as found on Arm-based systems,
- Portability - the TEE aims at being easily pluggable to different architectures and available HW and has to support various setups such as multiple client OSes or multiple TEEs.

Trusted Firmware provides a reference implementation of secure world software for Armv8-A and Armv8-M. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. This forms the foundations of a TEE on application processors, or the Secure Processing Environment (SPE) of microcontrollers. It includes a Secure Monitor executing at Exception Level 3 (EL3). It implements various Arm interface standards including the Power State Coordination Interface (PSCI), Trusted Board Boot Requirements (TBBR), SMC Calling Convention, and System Control and Management Interface.

Linaro’s transfer of the OP-TEE project to be hosted by Linaro’s Community Projects Division within the Trusted Firmware project is effective as of 3 July 2019. The Trusted Firmware project is designed to reduce porting and integration work across the ecosystem by creating reusable reference implementations for SoC and Trusted OS developers at [trustedfirmware.org](https://www.trustedfirmware.org/).
