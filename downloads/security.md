---
layout: default-no-sub-nav
title: Downloads and help for Meltdown and Spectre
permalink: /downloads/security/
description: |-
  The Linaro Kernel Working Group is backporting fixes for the Meltdown and Spectre speculation-related security advisories to the v4.4, v4.9 and v4.14 LTS kernels. Read more about security issues with Meltdown and Spectre
keywords: Meltdown, Spectre, Arm, OP-TEE, Trustzone, Speculative execution, branch
  predictor, CPU cache, Set-Associative-Cache, side channel attack, Simple Power
  Analysis, Differential Power Analysis, crypto
image:
  featured: true
  path: /assets/images/blog/meltdown-spectre-download-linaro.jpg
  name: meltdown-spectre-download-linaro.jpg  
---
The work of Linaro’s Security Working Group is described under [Work: Core Engineering: Security](https://www.linaro.org/core/security/). This page offers brief descriptions and links to security related downloads from across Linaro, ordered with latest first.

## Downloads and help for Meltdown and Spectre

The Linaro [Kernel Working Group](https://www.linaro.org/core/kernel/) is backporting fixes for the Meltdown/Spectre speculation-related security advisories to the v4.4, v4.9 and v4.14 LTS kernels. Since each fix is in a different stage of development Linaro is maintaining separate branches for each feature on each kernel version, named "v4.X-FEATURE". These will be updated and rebased as needed, and once the features are merged into upstream they will be submitted for inclusion in the relevant LTS kernel. For convenience Linaro is also maintaining a branch v4.X-all-branches for each kernel version which has all the fix branches for that kernel merged into it. These branches are available on the Linaro git repository at [git.linaro.org/kernel/speculation-fixes-staging](https://git.linaro.org/kernel/speculation-fixes-staging).  

The original security update from Arm, including links to their original kernel and firmware patches, is available on [developer.arm.com](https://developer.arm.com/support/security-update).

Companies requiring help with other or earlier version kernels, 2.x or 3.x, are invited to contact [Linaro Developer Services](https://www.linaro.org/services/#developer-services-contact-us). Linaro Developer Services has significant experience in kernel backports and in securing Arm systems; including secure boot, working with TrustZone, porting OP-TEE and working with Trusted Applications.

In addition to the above kernel work, the Linaro [Security Working Group](https://www.linaro.org/core/security/) has put together both a [blog post and webcast](https://www.linaro.org/blog/meltdown-spectre/) on Meltdown and Spectre from the perspective of the OP-TEE community. They go over the CPU features one by one to get a better understanding of the essence of these attacks. There is additional information for OP-TEE available on the project’s [Security Advisories page](https://www.op-tee.org/security-advisories/).

Additional blogs will be published at [www.linaro.org/blog/](https://www.linaro.org/blog/) to update the status of backports and explain any additional developments.

## W3C EME Clear Key reference build on the 96Boards HiKey platform

The [Linaro Digital Home Group (LHG)](https://www.linaro.org/groups/lhg/) has made available a reference Linux build of W3C EME Clear Key on the 96Boards HiKey platform. The build uses open source components to implement an HTML5 browser-based playback of encrypted content using OP-TEE running on ARM TrustZone. The OpenEmbedded build system is employed in this Linux-based implementation. This Chromium browser-based implementation is an end-to-end solution that retrieves encrypted video from a server and locally provide secure decryption via OP-TEE. The build instructions are provided here:  [https://www.linaro.org/blog/lhg-updates-w3c-eme-solution-96boards-hikey-platform/](https://www.linaro.org/blog/lhg-updates-w3c-eme-solution-96boards-hikey-platform/); however now to build from source, use repo init -u [https://github.com/linaro-home/lhg-oe-manifests.git](https://github.com/linaro-home/lhg-oe-manifests.git) -b morty

## OP-TEE

OP-TEE is an open source project which contains a full implementation to make a complete Trusted Execution Environment. Links to downloads for OP-TEE are available on [www.op-tee.org/projects/](https://www.op-tee.org/projects/).
