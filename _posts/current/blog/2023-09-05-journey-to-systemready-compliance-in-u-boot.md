---
layout: post
title: Journey to SystemReady compliance in U-Boot
description: >
  Back in 2016, rudimentary EFI support was merged into U-Boot.  Basic EFI
  interfaces were added, but that was inadequate for Arms’ SystemReady-IR
  vision.  Linaros’ Edge and Fog Computing group (LEDGE) led the roadmap and
  development turning U-Boot into the first SystemReady-IR compliant bootloader.
date: 2023-09-05 12:48:35 +02:00
image: /assets/images/content/tech_background__under_2mb.jpg
tags:
  - embedded
  - U-Boot
  - SystemReady
  - UEFI
  - Security
  - Bootloaders
category: blog
author: ilias.apalodimas@linaro.org
---
## Where it all started

In 2019, [LEDGE](https://www.linaro.org/membership/groups/#ledge) and its members gathered in Bangkok for a Linaro Connect. We discussed an evolving standard called Embedded Base Boot Requirements, or in short EBBR.  

EBBR was written as a response to the lack of boot sequence standardization in the embedded system ecosystem and is focusing on specific UEFI interfaces, that should exist for the device firmware to be compliant. By doing so, it tries to reduce the amount of custom engineering required and make it possible for standard off-the-shelf and embedded distributions to just work. 

As we mentioned EBBR only focuses on UEFI interfaces and not specific implementations.  You are free to use or write any firmware that adheres to the specification.  Since LEDGE was mostly focused on embedded devices, we chose to work with U-Boot, the prevalent bootloader for embedded systems.

At the time U-Boot had several shortcomings yet to be addressed

* Rudimentary UEFI support
* Ability to read/store UEFI variables to/from the U-Boot environment
* No UEFI secure boot
* No UEFI measured boot
* No capsule update support, even without authentication
* UEFI Boot Manager was just merged with only basic features

In the meantime, Arm introduced the SystemReady-IR certification [program](https://www.arm.com/architecture/system-architectures/systemready-certification-program/ir) (which used EBBR as its basis). That program offered an Architecture Compliance Suite ([ACS](https://github.com/ARM-software/arm-systemready)), as well as Security Interface Extension ([SIE](https://github.com/ARM-software/arm-systemready#systemready-security-interface-extension)) tests and the bootable prebuilt images which could be used to verify the proposed changes. 

## Engaging hands-on work

In collaboration with Linaro members, maintainers from U-Boot, Linux, EDK2, and OP-TEE, we started enhancing open-source projects and driving the addition of new features ensuring compatibility with EBBR.  Apart from that, LEDGE started developing standards and documentation for features we believe are indispensable for secure and robust products and contributing those back to the community. The most notable features are the A/B firmware update [support](https://gitlab.com/Linaro/trustedsubstrate/mbfw/uploads/3d0d7d11ca9874dc9115616b418aa330/mbfw.pdf),  the [Platform Security Firmware Update for the A-profile](https://documentation-service.arm.com/static/60af72bae022752339b44aa8?token=) and the firmware handoff [protocol](https://github.com/FirmwareHandoff/firmware_handoff).

\
In the past few years LEDGE has

* Turned U-Boot into a SystemReady-IR [compliant](https://www.arm.com/architecture/system-architectures/systemready-certification-program/ir) bootloader and since 2021.04 it’s also 2.0 compliant for the majority of the platforms it supports
* Depending on the hardware characteristics, systems running U-Boot can also pass the SystemReady SIE ACS since 2021.10
* UEFI [Secure Boot](https://source.denx.de/u-boot/u-boot/-/commit/4540dabdcacaea50bf874115f28adc103966d25a)
* UEFI [measured boot](https://source.denx.de/u-boot/u-boot/-/commit/c8d0fd582576ff7cc67d0053282430476201fd33)

  * Measured boot led to a wide TPM subsystem [refactoring](https://source.denx.de/u-boot/u-boot/-/commit/2c9626c463151f1c178b5855bc763978e3878954)
* UEFI variables are [stored](https://source.denx.de/u-boot/u-boot/-/commit/f042e47e8fb433a7a1f8a25d997ba0fe74e2db53) in a secure, rollback-protected device (e.g. RPMB) instead of the insecure U-Boot environment variables.  This was a complex set of patches that required coordination between U-Boot, EDK2 and OP-TEE

  * EDK2 [patches](https://github.com/tianocore/edk2-platforms/commit/daefcaae9128444f0659af91c41e495854777af9)
  * OP-TEE [patches](https://github.com/OP-TEE/optee_os/pull/3973)
* Authenticated [Capsule Update ](https://source.denx.de/u-boot/u-boot/-/commit/8d99026f06978ddf2ed72ccaed6cd3ad0887e4e5)

  * Supports seamless integration with [fwupd](https://github.com/fwupd/fwupd/commit/3747e245e5a5402eca272b7c45088e03ba965f1e) and LVFS
* UEFI [HTTP](https://source.denx.de/u-boot/u-boot/-/commit/cfbae48219fd81f6c9e1a7b5ee160cdd3005f958) Boot (HTTPs in work in progress)
* Replaced U-Boots’ default TCP/IP stack with [LWIP](https://lore.kernel.org/u-boot/20230822093614.4717-1-maxim.uvarov@linaro.org/) (lightweight TCP/IP protocol, patches under review)
* Dual A/B [update](https://source.denx.de/u-boot/u-boot/-/commit/86794052418b7aa15d94025add3082cd357a0b12) support ([SynQuacer](https://source.denx.de/u-boot/u-boot/-/commit/6b403ca4dcf4c68e2792c4e8b28e03b3cfe5db45) and [stm32mp1](https://source.denx.de/u-boot/u-boot/-/commit/a402adc664d4330b10089d81d377efaad0da3148) supported upstream)
* U-Boot console [lockdown](https://source.denx.de/u-boot/u-boot/-/commit/f076c994bfec77c9a784d15f0c6956e0132d7f90).  Users can [configure](https://source.denx.de/u-boot/u-boot/-/commit/87d791423ac69affec43dfb834965adcb0aa02e6) UEFI keys and the booted OS only
* Rich UEFI BootManager with grub-like [capabilities](https://source.denx.de/u-boot/u-boot/-/commit/cbea241e935ec754df44d5de0ad20b801f2d3f90)
* [initramfs](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=566331696329c) and [DTB](https://source.denx.de/u-boot/u-boot/-/commit/aa2d3945ce6df43903d76cadde1c0669d6d5d43b) measurements on a TPM
* SetVariable at [runtime](https://lore.kernel.org/linux-efi/20230807025343.1939-2-masahisa.kojima@linaro.org/) support (patches are under review)
* UEFI random number generator [support](https://source.denx.de/u-boot/u-boot/-/commit/f552fa496c9e7) (mandatory for enabling [KASLR](https://en.wikipedia.org/wiki/Address_space_layout_randomization) in Arm systems)

## Concluding our work

LEDGE has accomplished its initial mission of turning U-Boot into a SystemReady-IR compliant bootloader. Aside from that, we were able to coordinate and head the U-Boot development and add security-related features that were not originally planned.

The need for SystemReady-IR compliant firmware, along with the security enhancements proposed by LEDGE led to [TrustedSubstrate](https://www.linaro.org/projects#automotive-iot-edge-devices_TS), an OE [layer](https://gitlab.com/Linaro/trustedsubstrate/meta-ts.git) geared toward security. It’s built from various open source projects, has an ‘upstream first’ mentality, is tested daily in our internal [LAVA](https://ledge.validation.linaro.org/) labs, and provides a SystemReady-IR compliant firmware with UEFI Secure boot and Measured boot enabled by default for all member hardware.  

Its aim is to guarantee that your device will run the software it was intended to run starting from powering up your device up to launching its OS.  You can find the documentation [here](https://trs.readthedocs.io/en/latest/firmware/index.html).

## Get involved

There are a few things we are still working on in order to complete our work

* Replace the default U-Boot network stack with LWIP.  As we mentioned earlier, patches are under review 
* Enable UEFI HTTPs using [mbedTLS](https://github.com/Mbed-TLS/mbedtls)
* Make sure U-Boot is compliant with SystemReady-IR 2.0

Contact us [support@linaro.org](mailto:support@linaro.org)