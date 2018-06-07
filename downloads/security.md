---
layout: container-breadcrumb
title: Linaro Security Downloads
permalink: /downloads/security/
image:
  featured: true
  path: /assets/images/blog/meltdown-spectre-download-linaro.jpg
  name: meltdown-spectre-download-linaro.jpg  
---

This page offers brief descriptions and links to security related downloads from across Linaro.

# Downloads and help for Meltdown and Spectre
## Open Source Projects
#### Arm
* General Spectre & Meltdown information from Arm, please see: https://developer.arm.com/support/security-update
* Trusted Firmware has a separate security advisories page, please see here: https://github.com/Arm-software/arm-trusted-firmware/wiki/Arm-Trusted-Firmware-Security-Advisory-TFV-6

#### Kernel
The current status for LTS otherwise is that aarch64 backport exists and have
been accepted for kernel v4.9 and v4.14. For arm32 we are waiting for the
changes to be developed and then we will do the backporting.

* Kernel Page Table Isolation: https://en.wikipedia.org/wiki/Kernel_page-table_isolation
* Linaro tree with work in progress: https://git.linaro.org/kernel/speculation-fixes-staging.git
* For more information about the upstream status, please follow the link above in the "Arm" section that takes you to their security-update page.

#### OP-TEE
* OP-TEE has a separate security advisories page, please see here: https://www.op-tee.org/security-advisories/

Page updated: 2018-04-25
