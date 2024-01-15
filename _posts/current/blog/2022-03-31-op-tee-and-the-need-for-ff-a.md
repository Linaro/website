---
layout: post
title: "OP-TEE and the need for FF-A "
description: In this blog, we take a look at how OP-TEE and FF-A have evolved
  and why you need FF-A to enhance security.
date: 2022-03-31 12:53:22 +01:00
image: /assets/images/content/Linaro-and-Riscure-release-banner.jpg
tags:
  - Security
  - OP-TEE
  - Trustzone
  - FF-A
  - Arm
  - TEE
  - Trusted Execution Environment
  - Trusted Firmware
category: blog
author: jens.wiklander
---
# Introduction

For everyone not up to date with FF-A and OP-TEE here's a quick recap.

OP-TEE was released in 2014 as an open source Trusted Execution Environment (TEE) which implements the Arm TrustZone technology. Arm Firmware Framework for Arm A-profile (FF-A) is a new way of communicating between the normal world and the secure world. OP-TEE has support for this in configurations where this is enabled. In other configurations without FF-A, OP-TEE still supports the old communication protocol.

In this blog we will discuss the need for FF-A and what we have planned for the future. 

# **Why do we need FF-A?**

With Arm v8.4, a secure counterpart to EL2 (Exception Level 2, hypervisor mode) is added, called S-EL2, as a way of isolating the trusted OS at S-EL1. Until Arm v8.4, S-EL1 had access to the entire system. This is usually much more than needed, since the Trusted OS doesn't need to poke into the internals of Trusted Firmware at EL3 or into random places in the non-secure world. Adding S-EL2 is a way of eliminating the Trusted OS from the TCB (Trusted Computing Base). For more information on exception levels, take a look at the Arm document [Learn the architecture: TrustZone for AArch64](https://developer.arm.com/documentation/102418/0101/?lang=en), specifically the section “Secure virtualization” under the “TrustZone in the processor” heading. The Arm document [Learn the architecture: AArch64 Exception model](https://developer.arm.com/documentation/102412/0100) also gives an introduction to exception levels.

When switching from EL1 (typically Linux kernel) to S-EL1 (Trusted OS) the CPU needs to transition through the levels as follows: EL1 -> EL2 -> EL3 -> S-EL2 -> S-EL1. Each exception level has a separate binary so when transitioning between two exception levels, both binaries must agree on the ABI (Application Binary Interface), which results in quite a few ABIs to keep track of, especially considering multiple trusted OSs. That’s one of the objectives with FF-A, to have the same ABI even if a different trusted OS or hypervisor is chosen. Unchanged ABIs at EL3 means that a certified Trusted Firmware can be reused unchanged in other configurations, the same applies for the hypervisor and SPMC.

FF-A can also be implemented for Arm v7, but the gains are fewer. When switching from EL1 (non-secure SVC mode) to S-EL1 (secure SVC mode) the CPU needs to transition through these levels: EL1 -> EL2 (non-secure HYP mode) -> MON mode -> S-EL1. The entire secure side is normally controlled by the trusted OS, but it should be possible to have a trusted OS agnostic hypervisor at EL2. Since there are fewer exception levels and separate firmwares involved on Arm v7 we don’t improve as much. Some effort can be saved with the hypervisor in case it can be reused from an earlier port to Arm v8 already using FF-A. This might even be the biggest reason to use FF-A on Arm v7, to be able to use software configured in a similar way as on Arm v8.

# Current status

We have upstream support in the Linux kernel for OP-TEE and FF-A version 1.0. FF-A abstracts the rest of the configuration from the kernel so with this in place we should be done in this domain.

We have upstream support in OP-TEE OS for FF-A with SPMC (Secure Partition Manager Core) at S-EL2, in a secure hypervisor, or at S-EL1 as part of OP-TEE. A small amount of platform specific code or configuration is needed so we are limited to plat-vexpress and plat-totalcompute.

{% include image.html path="/assets/images/content/example-configuration-with-spmc-at-s-el1.png" alt="Example of configuration with SPMC at S-EL1" %}

We have upstream support in TF-A for FF-A with SPMC at S-EL2 and S-EL1. Again a small amount of platform specific code or configuration is needed. Plat/arm and plat/qemu/qemu have the most support. Plat/qemu/qemu can for instance be configured for FF-A with SPMC at S-EL1.

Hafnium is the reference SPMC at S-EL2, for more information see [Hafnium in the secure world at Trusted Firmware](https://trustedfirmware-a.readthedocs.io/en/latest/components/secure-partition-manager.html#hafnium-in-the-secure-world).

{% include image.html path="/assets/images/content/example-configuration-with-spmc-at-s-el2.png" alt="Example of configuration with SPMC at S-EL2" %}

# Future directions

While the basic support is in place for FF-A 1.0, there are still a few things left to do, either to catch up with FF-A 1.1 or to broaden the 1.0 support. The following areas have been identified:

* SPMC at EL3
* FF-A support in Xen mediator
* OP-TEE as S-EL1 SPMC for S-EL0 Secure Partitions
* FF-A version 1.1

  * Secure and non-secure interrupt handling
  * Asynchronous notifications

SPMC at EL3 and OP-TEE and S-EL1 SPMC are two features to help deploy FF-A on hardware before Arm v8.4. FF-A support will be needed in Xen eventually, starting with just what is needed by OP-TEE is a step in that direction.

The areas above are tied closely to FF-A. There are other areas where OP-TEE will be extended, but those are not centred around FF-A.

# Secure Partition Manager Core (SPMC) at EL3

The SPMC is integrated with the SPMD (Secure Partition Manager Dispatcher) in the firmware when located at EL3.

In configurations without S-EL2, typically before Arm v8.4, S-EL1 and EL3 share the secure physical address space. S-EL1 may try to avoid mapping the physical memory used in EL3 but the CPU architecture cannot enforce this.

This configuration enables running SPs (Secure Partitions) designed to be used with an SPMC at S-EL2 in architectures without S-EL2. There are two significant differences in this configuration, the SMC (Secure monitor call) instruction must be used instead of the HVC (Hypervisor call) instruction and all memory addresses are physical instead of IPA. The latter should be transparent to the SP in practice.

This configuration enables using an almost standard S-EL1 SP instead of using a hybrid with an SPMC together with a logical partition when S-EL2 is not available.

{% include image.html path="/assets/images/content/example-configuration-with-spmc-at-el3.png" alt="Example of configuration with SPMC at S-EL3" %}

Comparing this configuration with “SPMC at S-EL1” from OP-TEE, or any other S-EL1 SP, point of view will be very similar.

There is work ongoing with the [SPMC](https://review.trustedfirmware.org/q/topic:%2522ffa_el3_spmc%2522+(status:open+OR+status:merged)) at Trusted Firmware. Based on this we have also made a prototype on QEMU ARMv8-A. This can be tested with:

```
repo init -u https://github.com/jenswi-linaro/manifest.git \
          -m qemu_v8.xml -b poc/qemu_v8_el3_spmc
repo sync -j8
cd build
make toolchains -j8
make SPMC_AT_EL=3 all -j8
make run-only
```

This prototype will be available until everything is upstream.

# FF-A support in Xen mediator

OP-TEE and Xen can already coexist in a configuration without FF-A using the older OP-TEE specific communication protocol. With FF-A there is an opportunity to make a generic implementation in Xen. With that it should in principle be possible to replace OP-TEE at S-EL1 with any other SP if desired. Or one could also consider the advantage of consolidating the mediators needed for other secure world entities.

{% include image.html path="/assets/images/content/example-configuration-with-xen-mediator.png" alt="Example of configuration with Xen Mediator" %}

OP-TEE is in this example providing one virtual instance for each guest. From a guest point of view it looks like the partition is only OP-TEE without interference from other guests. The nexus is a part of OP-TEE which does the switching for different partitions.

This was prototyped during Q3 2021 which resulted in a few hooks in FF-A for SPs to subscribe to events from the hypervisor.

Next step is to wait for FF-A 1.1 and then update the prototype with the new events on VM creation and destruction.

# OP-TEE as S-EL1 SPMC for S-EL0 Secure Partitions

In a configuration without S-EL2 OP-TEE can act as SPMC for SPs at S-EL0.

{% include image.html path="/assets/images/content/example-configuration-with-op-tee-as-spcm-for-s-el0-sps.png" alt="Example of configuration with OP-TEE as SPMC for S-EL0 SPs" %}

Trusted Applications are coexisting with SPs at S-EL0 in this configuration. This work is progressing steadily with a trusted firmware [roadmap](https://developer.trustedfirmware.org/w/trusted-services/roadmap/). This configuration is useful on architectures before Arm v8.4.

## FF-A version 1.1 - secure and non-secure interrupt handling

FF-A 1.1 brings updated guidance on interrupt management. This is expected to have minimal impact on upstream code when updating for 1.1. For work in progress especially where OP-TEE is acting as SPMC for S-EL0 SPs may need a bit more.

## FF-A version 1.1 - asynchronous notifications

Asynchronous notifications is a new feature in FF-A. Some work has already been done to prepare for this with a corresponding feature in the old OP-TEE specific communication protocol.

For OP-TEE this is used to enable top-half and bottom-half types of drivers. The pattern is as follows. A minimal interrupt routine records that a device requires attention and sends a notification to the normal world driver. The driver then does a yielding call “do bottom half” allowing this part of the driver to synchronise with other threads using mutex or even do RPC. This is also nice for the scheduler as yielding calls are scheduled by normal world while a secure interrupt steals CPU cycles.

# Stay tuned

* [Subscribe](https://lists.trustedfirmware.org/mailman3/lists/op-tee.lists.trustedfirmware.org/) to the OP-TEE mailing list op-tee@lists.trustedfirmware.org
* Join the [Linaro OP-TEE Contributions (LOC) monthly meeting](https://www.trustedfirmware.org/meetings/) or check out the project page [Linaro's OP-TEE Contributions - Confluence](https://linaro.atlassian.net/wiki/spaces/LOC/overview)
* Visit  the [OP-TEE page at trusted firmware](https://www.trustedfirmware.org/projects/op-tee/).

Thank you for reading this far. If you have any questions or thoughts feel free to 
create an issue at <https://github.com/OP-TEE/optee_os/issues> or to reach out at the mailing list. You’re also welcome to join the LOC meetings. You can also find out more on this topic by watching [the session](https://resources.linaro.org/en/resource/2aHhsEXr7LVcdwH62LrTQ6) we presented at Linaro’s Core Technologies Tech Day earlier this week.