---
title: Builds & Downloads
description: Linaro maintains various development repositories and makes regular
  releases of builds such as Android, LAVA Test Framework and GNU and LLVM
  toolchains. This page provides links to many of the more popular downloads
  produced by Linaro’s engineering teams.
permalink: /downloads/
keywords:
  - GNU
  - LLVM
  - Windows on Arm
  - GCC
  - Cortex-A GCC 8.3-2019.03
  - Arm
  - Ledge
  - Linaro Toolchain
  - Toolchain
  - Linaro Developer Cloud
  - Linaro Member Builds
  - Openstack-Powered Rocky
  - Binary Toolchain Releases
layout: flow
jumbotron:
  class: header_2021 text-center
  image: /assets/images/content/IMAGE_HOMEPAGE.jpg
  title: Builds & Downloads
  title-class: font-weight-bold
  description: ""
flow:
  - row: container_row
    sections:
      - format: text
        text_content:
          text: |
            Since 2010, Linaro has played a key role in upstreaming Arm software, with many of its engineers actively maintaining open source projects. This page provides links to downloads currently produced by Linaro’s engineering teams
  - row: container_row
    style: bg-secondary
    sections:
      - format: block
        item_width: auto
        block_section_content:
          blocks:
            - title: Linaro's GNU and LLVM Toolchains
              style: text-center
              content_style: d-flex align-items-center
            - title: Linaro's Continuous Integration & Validation Tools
              style: text-center
              content_style: d-flex align-items-center
            - title: Linaro's Linux releases for Qualcomm™ Snapdragon® processors
              style: text-center
              content_style: d-flex align-items-center
            - title: Linaro Developer Cloud
              style: text-center
              content_style: d-flex align-items-center
            - title: LEDGE Reference Platform
              style: text-center
              content_style: d-flex align-items-center
---
Linaro code exists in many states and is found in many places. Working upstream means that the ultimate goal for most code is to be accepted and incorporated into something like the Linux kernel or GCC (the GNU Compiler) toolchain. The [Patches website](https://patches.linaro.org/) presents this work by team and by upstream project.

This page provides links to many of the more popular downloads produced by Linaro's engineering teams. 



# Linaro GNU and LLVM Toolchains

The official Arm releases of the pre-built GNU cross-toolchain for AArch64 and ARM 32-bit A-Profile cores are now available on the [Arm Developer website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-a/downloads).

The official community releases of the pre-built LLVM native toolchain for AArch64 and ARM 32-bit A-Profile cores are built and tested by Linaro and are available on [LLVM’s GitHub](https://github.com/llvm/llvm-project/releases/).

In addition to the usual Linux-hosted LLVM (low level virtual machine) toolchain, Linaro also provides [official LLVM Toolchain for Windows on Arm](https://github.com/llvm/llvm-project/releases/download/llvmorg-12.0.0/LLVM-12.0.0-woa64.exe) starting with LLVM 12.0.0 release.

Every month, Linaro releases [GNU Toolchain Integration Builds](https://snapshots.linaro.org/gnu-toolchain/) which offer users a snapshot of the upstream build. These builds allow developers to test features from a pre-built binary as soon as it is upstream. 

- - -

Interested in Cortex-R and Cortex-M bare-metal targeted toolchains for Arm embedded processors? We’re working with Arm to supply a new release every year (with quarterly updates). Releases are maintained for two years. You can access these directly from [the Arm website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm).

- - -

# [](/engineering/)Linaro Member Builds

Linaro Member Builds are full system builds of popular open-source products set up at the request of a Linaro Core or Club [Member](/membership/) company.

{:.table.responsive-table}
|:---|:---|:---|:---|:---|
|Arm | <img src="/assets/images/content/aarch-64-logo-thumb.jpg" width="32px" height="auto" alt="AARCH 64 Logo" /> | Juno, Fixed Virtual Platforms (FVP), Versatile Express | [Platform release notes](http://community.arm.com/groups/arm-development-platforms)|
|Qualcomm | <img src="/assets/images/content/qualcomm-snapdragon-thumb.jpg" width="32px" height="auto" alt="Snapdragon Logo" /> | Download for Snapdragon 600 processor | [Snapdragon 600 Linux Platform](https://releases.linaro.org/debian/boards/snapdragon/latest/)|

- - -

# LEDGE downloads:

The LEDGE Reference Platform (RP) is a lightweight highly secure and robust container runtime environment that has dependable boot and update capabilities. It comes with a full set of security policies with SELinux, IMA (Linux Kernel Integrity Measurement Architecture) and other technologies and builds on SystemReady-IR and EBBR specifications. 

The complete Ledge Reference Platform v0.2 Release can be accessed here: 

[LEDGE RP 0.2 ledge-multi-armv7](http://snapshots.linaro.org/components/ledge/oe/ledge-rp-0.2/ledge-multi-armv7/17/)

[LEDGE RP 0.2 ledge-multi-armv8](http://snapshots.linaro.org/components/ledge/oe/ledge-rp-0.2/ledge-multi-armv8/17/)

[LEDGE RP 0.2 ledge-qemux86-64](http://snapshots.linaro.org/components/ledge/oe/ledge-rp-0.2/ledge-qemux86-64/17/)

[LEDGE RP 0.2 ledge-synquacer](http://snapshots.linaro.org/components/ledge/oe/ledge-rp-0.2/ledge-synquacer/17/)

[LEDGE RP 0.2 ledge-ti-am572x](http://snapshots.linaro.org/components/ledge/oe/ledge-rp-0.2/ledge-ti-am572x/17/)

Additional information relating to the LEDGE Reference Platform can be found here:

* firmware.uefi.uboot.bin: U-Boot based firmware with TF-A and OP-TEE support
* firmware.uefi-edk2.bin: EDK2 based firmware
* ledge-iot-ledge-xxxxxxx-0.1.rootfs.wic.gz: Zipped imaged of IoT reference platform
* ledge-gateway-ledge-xxxxxxx-0.1.rootfs.wic.gz: zipped image of the gateway reference platform
* ledge-kernel-uefi-certs.ext4.img: Signatures used on EFI secureboot
* ledge-dev-howto.pdf - Developer Howto Documentation
* ledge-user-guide.pdf - User Guide Documentation

- - -

# Linaro Developer Cloud

**Deploy to Arm-based clouds in minutes and build your project today**

Linaro Developer Cloud is a heterogeneous cluster managed by Linaro to provide developers with access to the latest Arm enterprise class cloud instances. The cluster is managed with the Openstack-Powered Rocky release with deployment by Kolla-ansible. It runs all your favorite distributions such as Debian, CentOS, Ubuntu and RHEL. The Linaro Developer Cloud is available for development, test, CI and cloud deployments for VM and containers.

To sign up for access and build your project today, click [here](https://servicedesk.linaro.org/servicedesk/customer/portal/19/create/265).