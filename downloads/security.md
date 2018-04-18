---
layout: default-no-sub-nav
title: Linaro Security Downloads
permalink: /downloads/security/
image:
  featured: true
  path: /assets/images/blog/meltdown-spectre-download-linaro.jpg
  name: meltdown-spectre-download-linaro.jpg  
---

This page offers brief descriptions and links to security related downloads from across Linaro.

# Downloads and help for Meltdown and Spectre
## Blogs
* [Implications of Meltdown and Spectre : Part 1](https://www.linaro.org/blog/meltdown-spectre/)
* [Implications of Meltdown and Spectre : Part 2](https://www.linaro.org/blog/meltdown-spectre-2/)

## Connect Sessions
* [HKG18-507 – Preparing for future security exploit mitigations](http://connect.linaro.org/resource/hkg18/hkg18-507/)

## 96Boards, webcasts etc
* [Addressing Meltdown and Spectre with Joakim Bech | OpenHours #86](https://youtu.be/FiINvzyO5R8)
* [Meltdown, Spectre and OP TEE Webcast](https://youtu.be/rGwgOOSwXBY)


## Services
* Companies needing help with other or earlier version kernels, 2.x or 3.x, should contact [Linaro Developer Services](https://www.linaro.org/services/#developer-services-contact-us) (services@linaro.org). Linaro Developer Services has significant experience in kernel backports and in securing Arm systems; including secure boot, working with TrustZone, porting OP-TEE and working with Trusted Applications.

## Open Source Projects
#### Arm
* General Spectre & Meltdown information from Arm, please see: https://developer.arm.com/support/security-update
* News:
  * 2018-02-19: SpectrePrime and MeltdownPrime use a different cache effect as side channel (eviction due to SMP cache snooping) but this is not expected to have any impact on software mitigations for existing micro-architectures. 

#### Dalvik
* No Linaro involvement.

#### Kernel
* Kernel Page Table Isolation: https://en.wikipedia.org/wiki/Kernel_page-table_isolation
* Linaro tree with mitigation patches: https://git.linaro.org/kernel/speculation-fixes-staging.git/
* Upstream status at https://developer.arm.com/support/security-update

##### LTS --> LSK
* Backport status is at LSK-43 - Speculative execution security fixes IN PROGRESS
* There is also a duplicate card LEG-680 - Meltdown/Spectre Mitigations Backport OPEN covers 4.14.
* LSK Wiki backport table updated to list Spectre / Meltdown
* The latest on the timelines for Linaro-patch release for various kernels v4.9, 4.14 is that the aarch64 backport exists and have been accepted in LTS.
* v4.4 is currently in discussion and review, the backport is very risky due to very substantial changes in the surrounding kernel which mean we may be best to limit the scope of the backport.
* The status on arm(32) patches is still in discussion with the upstream community.

#### OpenJDK
* No Linaro involvement.

#### OP-TEE
* OP-TEE has a separate security advisories page, please see here: https://www.op-tee.org/security-advisories/

#### Toolchain
* Current patches (not merged as of 2018-02-16):
  * GCC trunk (v2): https://gcc.gnu.org/ml/gcc-patches/2018-01/msg01546.html
  * Patches are generally OK.  Maintainers have asked for additional testcases.
  * LLVM/Clang: https://reviews.llvm.org/D41760 and https://reviews.llvm.org/D41761
* Older patches:
  * GCC trunk (v1): https://gcc.gnu.org/ml/gcc-patches/2018-01/msg00205.html
  * GCC 7 (v1): https://gcc.gnu.org/ml/gcc-patches/2018-01/msg00211.html
* Patches for each compiler implement __builtin_speculation_safe_load() which allows applications to more portably implement Spectre variant 1 mitigations. The builtin is implemented for both AArch64 and AArch32.
* "Arm has investigated the use of retpoline and has concluded that it doesn't provide effective mitigation on Arm-based systems" (for more info see  https://developer.arm.com/support/security-update/frequently-asked-questions).

#### Trusted Firmware
* Trusted Firmware has a separate security advisories page, please see here: https://github.com/ARM-software/arm-trusted-firmware/wiki/Arm-Trusted-Firmware-Security-Advisory-TFV-6

#### U-Boot
* No Linaro involvement.

#### UEFI
* There is some more information about UEFI in [blog post#2](https://www.linaro.org/blog/meltdown-spectre-2/).
* Current patches:
  * [PATCH 0/4] efi/arm64: unmap the kernel during runtime service calls: https://www.spinics.net/lists/arm-kernel/msg630851.html


#### WebKit
* No Linaro involvement.

#### Zephyr
* Per ARM's security update page, the Cortex M CPU's supported by Zephyr are not impacted.
* Working with project to have status page on Zephyr project
