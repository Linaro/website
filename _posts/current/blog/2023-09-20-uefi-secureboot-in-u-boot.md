---
layout: post
title: UEFI SecureBoot in U-Boot
description: >
  UEFI SecureBoot is a verification mechanism ensuring that code launched by a
  computer's firmware is cryptographically verified. It is designed to protect a
  system against malicious code being loaded and executed early in the boot
  process before the operating system has been loaded.  Let’s investigate the
  available U-Boot options and hardware limitations.
date: 2023-09-20 01:39:53 +02:00
image: /assets/images/content/Tech_Background.jpg
tags:
  - embedded
  - U-Boot
  - SystemReady_SIE
  - UEFI
  - Security
  - UEFI_SecureBoot
category: blog
author: ilias.apalodimas@linaro.org
---
## Why UEFI SecureBoot

In recent years, there has been a push from Arm and distro vendors toward standardization. Arms’ [SystemReady](https://www.arm.com/architecture/system-architectures/systemready-certification-program) program, a certification program based on a set of hardware and firmware standards, is trying to encourage vendors to use and benefit from them. 

Typically when we boot a device, the first stage bootloader tries to set up some kind of chain of trust between the components used to boot a system.  

In Arm specifically, 

* BL1 is responsible for authenticating BL2
* BL2 is responsible for authenticating all the subsequent BL3x stages until eventually execution is transferred to BL33

Since SystemReady requires UEFI, we need some kind of verification mechanism to ensure the OS we are loading hasn’t been tampered with.  Luckily the UEFI spec defines such a mechanism named UEFI SecureBoot.  It ensures only immutable and signed PE/COFF (Portable Executable and Common Object File Format) binaries are executed by the UEFI-compatible firmware. SecureBoot leverages digital signatures to validate the authenticity and integrity of the code about to be executed and as such extends our chain of trust up to the loaded binary.

## Importance of the UEFI keyring 

Linaro and its members, understanding the importance of UEFI SecureBoot collaborated and added the feature a few years [ago](https://source.denx.de/u-boot/u-boot/-/commit/4540dabdcacaea50bf874115f28adc103966d25a).  It has since then received several improvements and bug fixes.  

As we mentioned the UEFI spec cryptographically verifies the binaries that are about to be executed.  To do so it relies on a set of keys 

* Platform Key (PK)
* Key Exchange Key (KEK)
* Signature Database (DB)
* Forbidden Signature Database (DBX)

Since the keys are used to authenticate executables storing and managing those keys properly, directly affects the overall device security.  For example, think of an attacker who could replace the Signature Database (DB), which is used to authenticate the binaries we launch.  If he can replace that he will gain the ability to run arbitrary binaries ‘securely’.  It’s important to understand how we can protect them against various attacks (e.g. tampering rollback etc.).  In this blog instead of focusing on how the keys are used during SecureBoot, we will focus on how the keys are stored and protected during the device lifecycle. 

## UEFI and U-Boot intricacies

For the reasons mentioned above, the UEFI [spec](https://uefi.org/specs/UEFI/2.10/32_Secure_Boot_and_Driver_Signing.html#platform-firmware-key-storage-requirements) mandates that UEFI variables related to the UEFI keyring must be stored in a non-volatile storage that is tamper and delete resistant. 

U-Boot can store EFI variables

* In a file located in the ESP (EFI System Partition)
* In an RPMB (Replay Protected Memory Block) partition of an eMMC

### Variables stored in a file

Files stored in a filesystem are difficult to protect against attacks.  Even if we sign and authenticate the file, one could replace the file with an older version leading to a rollback attack, or delete it completely for a denial of service attack.  Due to wider security considerations, the U-Boot community decided not to [support](https://source.denx.de/u-boot/custodians/u-boot-tpm/-/commit/7dda16343d2577a52116148540ad7d17c6f19e55#8e819bd79641cba70ef9eb5a476ed0afbb501080_372_376) UEFI SecureBoot if the relevant variables are stored in a file unless the UEFI keys are preseeded during the [build](https://source.denx.de/u-boot/custodians/u-boot-tpm/-/commit/7dda16343d2577a52116148540ad7d17c6f19e55).  

Doing so embeds the aforementioned keys in the U-Boot binary.  In that case, the user depends on the platform chain of trust.  The bootloader component that loads U-Boot must authenticate it before launching it.  This ensures that whatever UEFI variables were embedded during the build haven’t been tampered with and allows you to enable UEFI SecureBoot.  However, this has a few limitations of its own.  The most notable ones are 

* UEFI SecureBoot is always enabled and cannot be disabled
* To update any of the DB, DBX, PK, and KEK the U-Boot binary must be updated

### Variables stored in an RPMB

Storing the UEFI variables in an RPMB partition lifts all the limitations mentioned above and adheres to the UEFI spec requirements since RPMB devices are designed to store data in an authenticated and replay-protected manner.  A user can use the usual UEFI APIs to read, write delete, and update the UEFI keyring. He can also enable and disable UEFI SecureBoot at will. 

Storing variables on the RPMB requires OP-TEE support along with some open-source components to be properly combined and compiled.  You can read the technical details [here](https://www.linaro.org/blog/protected-uefi-variables-with-u-boot/).

## Platform support

All of the platforms running U-Boot can store UEFI variables on a file in the ESP.  As far as RPMB support is concerned, all of the code needed is merged upstream.  However, due to the complexity of the solution, there might be minor per-platform quirks.  Contact us at [support@linaro.org](mailto:support@linaro.org) if you have any questions.