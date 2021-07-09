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
  image: /assets/images/content/downloads-bg.jpg
  title: Builds & Downloads
  description: ""
  inner_class: dotted
flow:
  - row: main_content_row
  - row: container_row
    style: bg-secondary
    sections:
      - format: block
        item_width: 4
        block_section_content:
          blocks:
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Releases
                  url: https://releases.linaro.org/
              description: |
                Releases is the main repository for Linaro code that has been
                tested and released. It is possible to navigate down through
                this site to find code if you know what you are looking for,
                but we recommend you use the links below for our most popular
                downloads.
              title: Releases
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Snapshots
                  url: https://snapshots.linaro.org/
              description: |
                Snapshots code shows Linaro work in progress. Often created on
                a daily basis, these are literally snapshots of work in
                progress that are used for testing and development. The code
                on this site may not work and should only be used by
                experienced engineers who know exactly what they are doing.
              title: Snapshots
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Downloads
                  url: https://releases.linaro.org/components/lava/latest/
                - icon: fa fa-arrow-right
                  title: Get Started with LAVA
                  url: https://validation.linaro.org/static/docs/v2/index.html
              description: |
                The Linaro Automated Validation Architecture (LAVA) is a test
                and continuous integration framework that Linaro uses to
                validate its releases. The source is open so that members and
                others can create their own instantiations and run proprietary
                tests within this standard framework. Click here for the
                latest downloads.
              title: LAVA
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Security Downloads
                  url: /downloads/security/
              description: |
                Linaro security downloads are available from several of
                Linaro’s engineering groups. The most recent work includes
                collaboration on Meltdown/Spectre fixes backported in to the
                4.4, 4.9 and 4.14 kernels.
              title: Security Downloads
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Patches
                  url: https://patches.linaro.org/
              description: |
                Working upstream means that the ultimate goal for most code is
                to be accepted and incorporated into something like the Linux
                kernel or GCC tool chain. The Patches website presents this
                work by team and by upstream project.
              title: Patches
            - buttons:
                - icon: fa fa-arrow-right
                  title: View LKFT
                  url: https://lkft.linaro.org/
              description: |
                LKFT is Linaro’s Linux Kernel Functional Test framework. The
                mission of LKFT is to perform functional regression testing on
                select Linux kernel branches in real time (as they’re updated)
                and report any regressions as quickly as possible. This is
                performed by executing a variety of functional-tests on a
                selection of user-space operating systems.
              title: LKFT
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Wiki
                  url: https://wiki.linaro.org/AOSP
              description: |
                Linaro Confectionary Release (LCR) is a reference build of the
                Android Open Source Project (AOSP) for supported development
                boards that blends board support, latest kernels, AOSP and
                other Linaro technologies like OPTEE in one place. LCR is
                provided as is however we are interested in bug reports and
                will fix them on a best effort basis.  Downloads can be found
                on both snapshots.linaro.org and releases.linaro.org.
              title: LCR
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