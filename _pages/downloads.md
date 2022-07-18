---
title: Builds & Downloads
description: >
  This page provides links to popular downloads produced by Linaro’s engineering
  teams. We maintain development repositories & make regular releases of builds!
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
  - Linaro Member Builds
  - Openstack-Powered Rocky
  - Binary Toolchain Releases
layout: flow
jumbotron:
  class: text-center about_header
  title-class: font-weight-bold my-5
  image: /assets/images/content/IMAGE_HOMEPAGE.jpg
  title: Builds & Downloads
  description: ""
flow:
  - row: container_row
    sections:
      - format: text
        text_content:
          text: >-
            Since 2010, Linaro has played a key role in upstreaming Arm
            software, with many of its engineers actively maintaining open
            source projects. This page provides links to downloads currently
            produced by Linaro’s engineering teams. 


            If you have any technical queries, go to [Linaro's support page](https://www.linaro.org/support/) to log a ticket with the Linaro Developer Technical Support team. For any other queries [click here](https://www.linaro.org/contact/).
  - row: container_row
    style: bg-secondary
    sections:
      - format: block
        item_width: auto
        block_section_content:
          blocks:
            - title: Linaro's GNU and LLVM Toolchains
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#gnu_and_llvm"
            - title: Linaro's Continuous Integration & Validation Tools
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#ci_and_validation"
            - title: Linaro's Linux releases for Qualcomm™ Snapdragon® processors
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#releases_for_snapdragon"
            - title: LEDGE Reference Platform
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#ledge_rp"
  - row: container_row
    style: text_blocks_1
    sections:
      - format: title
        style: block_bg_header
        title_content:
          style: font-weight-bold
          id: gnu_and_llvm
          text: Linaro’s GNU and LLVM Toolchains
          size: h2
      - format: title
        style: icon_heading
        title_content:
          text: gnu gcc compiler download
          size: h2
          icon: /assets/images/projects/gnu.png
      - format: text
        text_content:
          text: >-
            GNU Toolchain plays an essential role in the development of Linux.
            Created by the GNU Project, it is a group of programming tools used
            for developing software applications and operating systems. 


            The official Arm releases of the pre-built GNU cross-toolchain for AArch64 and ARM 32-bit A-Profile cores are available on the [Arm Developer website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-a/downloads).


            Linaro also provides monthly [GNU Toolchain Integration Builds](https://snapshots.linaro.org/gnu-toolchain/) which offer users a snapshot of the upstream build. These builds allow developers to test features from a pre-built binary as soon as it is upstream.
      - format: title
        style: icon_heading
        title_content:
          text: LLVM Toolchain
          size: h2
          icon: /assets/images/projects/llvm-icon.PNG
      - format: text
        text_content:
          text: >-
            LLVM is a group of toolchain and compiler technologies. 


            The official community releases of the pre-built LLVM native toolchain for AArch64 and ARM 32-bit A-Profile cores are built and tested by Linaro and are now available on [LLVM’s GitHub](https://github.com/llvm/llvm-project/releases/).


            In addition to the usual Linux-hosted LLVM toolchain, Linaro is now providing [official LLVM Toolchain for Windows on Arm](https://github.com/llvm/llvm-project/releases/download/llvmorg-12.0.0/LLVM-12.0.0-woa64.exe) starting with LLVM 12.0.0 release.


            Interested in Cortex-R and Cortex-M bare-metal targeted toolchains for Arm embedded processors? We’re working with Arm to supply a new release every year (with quarterly updates). Releases are maintained for two years. You can get these directly from [the Arm website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm).
      - format: title
        style: block_bg_header
        title_content:
          style: font-weight-bold
          text: Linaro’s Continuous Integration & Validation Tools
          id: ci_and_validation
          size: h2
      - format: title
        style: icon_heading
        title_content:
          text: LAVA - Linaro’s Automated Validation Architecture
          size: h2
          icon: /assets/images/projects/lava-icon.PNG
      - format: text
        text_content:
          text: >
            The Linaro Automated Validation Architecture (LAVA) is a test and
            continuous integration framework that Linaro uses to validate its
            releases. The source is open so that Linaro member companies and
            others can create their own instantiations and run proprietary tests
            within this standard framework.


            The two recommended ways to install Lava is either via DEB or Docker:


            - [Recommended Debian Architectures](https://docs.lavasoftware.org/lava/installing_on_debian.html#recommended-debian-architectures)

            - [Administering LAVA using Docker — LAVA 2021.05 documentation](https://docs.lavasoftware.org/lava/docker-admin.html?#official-lava-software-docker-images)

            - [Click here to find out more about LAVA.](https://validation.linaro.org/)
      - format: title
        style: icon_heading
        title_content:
          text: Squad - Linaro’s Reporting Tool
          size: h2
          icon: /assets/images/projects/squad-icon.PNG
      - format: text
        text_content:
          text: >
            SQUAD is a web based reporting tool. It was created by Linaro to
            cover basic test result reporting for Linaro teams. It can collect
            pass/fail results and benchmarks from direct submissions or from
            testing tools like LAVA.


            - [Click here to download SQUAD](https://pypi.org/project/squad-client/)

            - [Click here to find out more about SQUAD](https://squad.readthedocs.io/en/latest/)
      - format: title
        style: icon_heading
        title_content:
          text: Tuxsuite
          size: h2
          icon: /assets/images/projects/tuxsuite-icon.PNG
      - format: text
        text_content:
          text: >-
            [TuxSuite™](https://tuxsuite.com/) delivers on-demand APIs and tools
            for building and testing Linux kernels in parallel. Created by
            Linaro, Tuxsuite is the backbone of our testing efforts and is
            available to anyone interested in doing Linux kernel testing faster
            and on a wider scale.


            You can either [download the TuxSuite client](https://docs.tuxsuite.com/#install-and-configure) to use Linaro’s TuxSuite service, or you can download the backend tools to run on your own.


            Tuxmake automates Linux builds across different architectures, configurations, targets, and toolchains. Specify your choices, and TuxMake drives the build for you, doing the same steps in the same way every time. [Download Tuxmake here](https://tuxmake.org/#installing-tuxmake).


            Tuxrun automates booting and testing Linux under QEMU. It supports almost all architectures supported by TuxMake. [Download Tuxrun here](https://tuxrun.org/install-pypi/).
      - format: title
        style: block_bg_header
        title_content:
          style: font-weight-bold
          text: Linaro Linux releases for Qualcomm™  Snapdragon® processors
          id: releases_for_snapdragon
          size: h2
      - format: text
        text_content:
          text: >
            Linaro releases a set of Linux software builds for platforms based
            on Qualcomm Snapdragon processors, such as Dragonboard 410c,
            Qualcomm Robotics RB3 or RB5. The releases from Linaro are based on
            the Linux mainline kernel and rely upon open-source user space
            packages exclusively. Linaro provides Yocto Project and Debian based
            reference implementations. More information on the supported
            platforms can be found on the [96boards.org
            website](https://www.96boards.org/documentation/consumer/dragonboard/).


            <table class="table table-bordered">
              <thead>
                <td>Qualcomm Platform</td>
                <td>Linux OS</td>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2">Dragonboard 410c</td>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard410c/linaro/debian/latest/">Debian</a></td>
                </tr>
                <tr>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard410c/linaro/openembedded/latest/">OpenEmbedded</a></td>
                </tr>
                <tr>
                  <td rowspan="2">Dragonboard 845c / RB3</td>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard845c/linaro/debian/latest/">Debian</a></td>
                </tr>
                <tr>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard845c/linaro/openembedded/latest/">OpenEmbedded</a></td>
                </tr>
                <tr>
                  <td rowspan="2">Robotics RB5 / QRB5165</td>
                  <td><a href="http://releases.linaro.org/96boards/rb5/linaro/debian/latest/">Debian</a></td>
                </tr>
                <tr>
                  <td><a href="http://releases.linaro.org/96boards/rb5/linaro/openembedded/latest/">OpenEmbedded</a></td>
                </tr>
              </tbody>
            </table>


            [Click here for more information on how Linaro helps companies upstream to Qualcomm platforms.](https://www.linaro.org/services/qualcomm-platforms-services/)
      - format: title
        style: block_bg_header
        title_content:
          id: ledge_rp
          style: font-weight-bold
          text: LEDGE RP - A secure and robust container runtime environment
          size: h2
      - format: text
        text_content:
          text: >-
            The LEDGE Reference Platform (RP) is a lightweight highly secure and
            robust container runtime environment that has dependable boot and
            update capabilities. It comes with a full set of security policies
            with SELinux, IMA (Linux Kernel Integrity Measurement Architecture)
            and other technologies and builds on SystemReady-IR and EBBR
            specifications.The complete Ledge Reference Platform v0.3 Release
            can be accessed here:


            [LEDGE Reference Platform 0.3 Release](http://releases.linaro.org/components/ledge/rp-0.3/)


            Additional information relating to the LEDGE Reference Platform can be found [here](https://github.com/Linaro/meta-ledge)
---
