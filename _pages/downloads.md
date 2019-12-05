---
title: Builds & Downloads
description: >-
  Linaro maintains various development repositories and makes regular releases
  of many builds including Android, LAVA Test Framework, Key Toolchains and
  builds for specific member products. This page provides links to many of the
  more popular downloads produced by Linaro’s engineering teams.
permalink: /downloads/
layout: flow
jumbotron:
  background-image: /assets/images/content/downloads-bg.jpg
  title: Builds & Downloads
  description: ""
  title-class: big-title
flow:
  - row: main_content_row
  - row: container_row
    sections:
      - block_section_content:
          blocks:
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Releases
                  url: 'https://releases.linaro.org/'
              text_content:
                text: >
                  Releases is the main repository for Linaro code that has been
                  tested and released. It is possible to navigate down through
                  this site to find code if you know what you are looking for,
                  but we recommend you use the links below for our most popular
                  downloads.
              title:
                size: h3
                text: Releases
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Snapshots
                  url: 'https://snapshots.linaro.org/'
              text_content:
                text: >
                  Snapshots code shows Linaro work in progress. Often created on
                  a daily basis, these are literally snapshots of work in
                  progress that are used for testing and development. The code
                  on this site may not work and should only be used by
                  experienced engineers who know exactly what they are doing.
              title:
                size: h3
                text: Snapshots
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Downloads
                  url: 'https://releases.linaro.org/components/lava/latest/'
                - icon: fa fa-arrow-right
                  title: Get Started with LAVA
                  url: 'https://validation.linaro.org/static/docs/v2/index.html'
              text_content:
                text: >
                  The Linaro Automated Validation Architecture (LAVA) is a test
                  and continuous integration framework that Linaro uses to
                  validate its releases. The source is open so that members and
                  others can create their own instantiations and run proprietary
                  tests within this standard framework. Click here for the
                  latest downloads.
              title:
                size: h3
                text: LAVA
          item_width: 4
        format: block
        style: text-center text-white
  - row: container_row
    sections:
      - block_section_content:
          blocks:
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Security Downloads
                  url: /downloads/security/
              text_content:
                text: >
                  Linaro security downloads are available from several of
                  Linaro’s engineering groups. The most recent work includes
                  collaboration on Meltdown/Spectre fixes backported in to the
                  4.4, 4.9 and 4.14 kernels.
              title:
                size: h3
                text: Security Downloads
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Patches
                  url: 'https://patches.linaro.org/'
              text_content:
                text: >
                  Working upstream means that the ultimate goal for most code is
                  to be accepted and incorporated into something like the Linux
                  kernel or GCC tool chain. The Patches website presents this
                  work by team and by upstream project.
              title:
                size: h3
                text: Patches
            - buttons:
                - icon: fa fa-arrow-right
                  title: View LKFT
                  url: 'https://lkft.linaro.org/'
              text_content:
                text: >
                  LKFT is Linaro’s Linux Kernel Functional Test framework. The
                  mission of LKFT is to perform functional regression testing on
                  select Linux kernel branches in real time (as they’re updated)
                  and report any regressions as quickly as possible. This is
                  performed by executing a variety of functional-tests on a
                  selection of user-space operating systems.
              title:
                size: h3
                text: LKFT
          item_width: 4
        format: block
        style: text-center text-white
  - row: container_row
    sections:
      - block_section_content:
          blocks:
            - buttons:
                - icon: fa fa-arrow-right
                  title: View Wiki
                  url: 'https://wiki.linaro.org/AOSP'
              text_content:
                text: >-
                  Linaro Confectionary Release (LCR) is a reference build of the
                  Android Open Source Project (AOSP) for supported development
                  boards that blends board support, latest kernels, AOSP and
                  other Linaro technologies like OPTEE in one place. LCR is
                  provided as is however we are interested in bug reports and
                  will fix them on a best effort basis.  Downloads can be found
                  on both snapshots.linaro.org and releases.linaro.org.
              title:
                size: h3
                text: LCR
          item_width: 4
        format: block
        style: text-center text-white
---
## Linaro Developer Cloud

**Deploy to Arm-based clouds in minutes and build your project today**

Linaro Developer Cloud is a heterogeneous cluster managed by Linaro to provide developers with access to the latest Arm enterprise class cloud instances. The cluster is managed with the Openstack-Powered Rocky release with deployment by Kolla-ansible. It runs all your favorite distributions such as Debian, CentOS, Ubuntu and RHEL. The Linaro Developer Cloud is available for development, test, CI and cloud deployments for VM and containers.


To sign up for access and build your project today, click [here](https://servicedesk.linaro.org/servicedesk/customer/portal/19/create/265).

## Linaro Toolchain

The flatest Arm release of the pre-built GNU cross-toolchain for Cortex-A GCC 8.3-2019.03 is now available on the [Arm Developer website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-a).

Linaro provides monthly [GCC source archive](https://snapshots.linaro.org/components/toolchain/gcc-linaro/) snapshots of the current Linaro GCC release branch, as well as quarterly releases of pre-built Linaro [GNU cross-toolchain binary archives](https://releases.linaro.org/components/toolchain/binaries/).

The following tables provide direct access to the most common Linux and bare-metal ABI variants of the Linaro binary cross-toolchain quarterly releases.  Both x86_64 Linux and Mingw32 (MS Windows compatible) host binaries are provided:

#### Latest Linux Targeted Binary Toolchain Releases

{:.table.responsive-table}
|--- |--- |--- |--- |--- |
|**arm-linux-gnueabihf**|_32-bit Armv7 Cortex-A, hard-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest-7/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest-7/arm-linux-gnueabihf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest-7/)|
|**armv8l-linux-gnueabihf**|_32-bit Armv8 Cortex-A, hard-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest-7/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest-7/armv8l-linux-gnueabihf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest-7/)|
|**aarch64-linux-gnu**|_64-bit Armv8 Cortex-A, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest-7/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest-7/aarch64-linux-gnu/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest-7/)|

#### Latest Bare-Metal Targeted Binary Toolchain Releases

{:.table.responsive-table}
|:---|:---|:---|:---|:---|
|**arm-eabi**|_32-bit Armv7 Cortex-A, soft-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest-7/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest-7/arm-eabi/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest-7/)|
|**aarch64-elf**|_64-bit Armv8 Cortex-A, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest-7/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest-7/aarch64-elf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest-7/)|

- - -

Interested in other target ABIs such as big-endian or soft-float little-endian? All toolchain target ABI and host variants can be seen [here](https://releases.linaro.org/components/toolchain/binaries/latest-7/). _Note: Not all ABI and host variants are supported to the same degree. See the [release-notes](https://releases.linaro.org/components/toolchain/binaries/latest-7/) for more information._

- - -

Interested in Cortex-R and Cortex-M bare-metal targeted toolchains for Arm embedded processors? We’re working with Arm to also supply a new release every year (with quarterly updates). Releases are maintained for two years. Get these [directly from the Arm website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm)

- - -

Linaro code exists in many states and is found in many places. Working upstream means that the ultimate goal for most code is to be accepted and incorporated into something like the Linux kernel or GCC tool chain. The [Patches website](https://patches.linaro.org/) presents this work by team and by upstream project.

Before the code gets accepted upstream, Linaro maintains various development repositories and Linaro's groups make regular releases of various builds including Android, the LAVA test framework, key toolchains and builds for specific member products.

This page provides links to many of the more popular downloads produced by Linaro's [engineering teams](/engineering/).

## Linaro Member Builds

LMBs are full system builds of popular open-source products set up at the request of a Linaro Core/Club [Member](/membership/) company.

{:.table.responsive-table}
|:---|:---|:---|:---|:---|
|Arm | <img src="/assets/images/content/aarch-64-logo-thumb.jpg" width="32px" height="auto" alt="AARCH 64 Logo" /> | Juno, Fixed Virtual Platforms (FVP), Versatile Express | [Platform release notes](http://community.arm.com/groups/arm-development-platforms)|
|Qualcomm | <img src="/assets/images/content/qualcomm-snapdragon-thumb.jpg" width="32px" height="auto" alt="Snapdragon Logo" /> | Download for Snapdragon 600 processor | [Snapdragon 600 Linux Platform](https://releases.linaro.org/debian/boards/snapdragon/latest/)|

- - -
