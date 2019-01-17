---
project_id: "2"
title: Armv8
description: |-
    Arm announced its 64-bit Armv8 architecture, associated Arm compiler and Fast Models in October 2011.
keywords: Linaro, Armv8, Arm, Engineering, technology, Linux, compiler, architecture, Cortex-M, hardware, 64-bit
permalink: /engineering/projects/armv8/
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsNtgGmA-yNyqzKyc0b3lE2g&playnext=1
type: linaro
---
Arm announced its [64-bit Armv8](http://www.arm.com/about/newsroom/arm-discloses-technical-details-of-the-next-version-of-the-arm-architecture.php) architecture and associated Arm compiler and Fast Models in October 2011. As licensees have developed their Armv8 solutions, Linaro has expanded its focus to include servers and networking and Armv8 development work has become a major priority at Linaro, enabled by the Arm Fast Models and availability of silicon. Since 2011, Arm has announced a number of Armv8 licensees and a majority of these are members of Linaro. In November 2015, the [Armv8-M](http://www.arm.com/about/newsroom/armv8-m-architecture-simplifies-security-for-smart-embedded-devices.php) architecture was announced and, in September 2016, Linaro announced the new [Linaro IoT and Embedded (LITE)](/news/linaro-announces-lite-collaborative-software-engineering-internet-things-iot/) group that has begun extending Linaro's work into the Cortex-M space.

When Armv8 hardware began to appear in 2014, availability to software developers was limited by the types of systems available and their cost. To enable its own developers and the ecosystem to gain access to low-cost Armv8 hardware suitable for software development, Linaro created the [96Boards](http://www.96Boards.org) specification in February 2015. This initiative has expanded to now include consumer, enterprise, IoT and TV platform specifications with mutliple boards and accessories available through third-party suppliers. A list of available hardware is included at the bottom of this page.

Linaro's focus is collaborative software development and working in the upstream to ensure good support for the latest Arm technology - Armv8 is obviously a key part of that and Linaro, with its members, has enabled support in many upstream projects. An idea of the scale of this work can be gained from the [Linaro Patchwork](https://patches.linaro.org/) website. This website shows contributions across a wide range of projects, although it is not specific to Armv8. Linaro also makes toolchains and software images for AArch64 (the 64-bit execution state of Armv8) available to interested developers. These range from full access to the open source code for individual components up to complete Reference Platform tarballs. Basic access to these files is available through the [Downloads page](/downloads/) on this website. Advanced developers who want to access individual components, snapshots of ongoing development work and historical files can visit the [Linaro releases website](http://releases.linaro.org/), but we would encourage everyone to begin with the Downloads page unless they are very familiar with how Linaro operates.

With the availability of low-cost Armv8 hardware through 96Boards, there is now a quick and easy way to start development, but if you are looking for access to a generic software model, also called a virtual platform, or you need access to expensive, enterprise-class hardware, then there are a few options. Arm provides its own [Fast Models](http://www.arm.com/fastmodels) virtual platform that enables you to boot a virtual Armv8 system, run 64-bit binaries and start developing code for Armv8. Models are also available from other companies. To help developers who do not yet have access to Armv8 hardware, Linaro has worked with its members to provide the Linaro Developer Cloud Armv8 server cluster to provide virtual access to enterprise-class hardware. More information about this is available on the [Linaro Developer Cloud](https://www.linaro.cloud/) website. A few commercial Internet Service Providers also provide access to enterprise-class Arm server hardware and you can find these by searching.

## Available Armv8 Hardware

* [96Boards DragonBoard 410c](http://www.96boards.org/product/dragonboard410c/)
* [96Boards HiKey (LeMaker version)](http://www.96boards.org/product/hikey/)
* [96Boards Bubblegum-96](http://www.96boards.org/product/bubblegum-96/)
* [96Boards Mediatek X20](http://www.96boards.org/product/mediatek-x20/)
* Arm [Juno development platform](http://www.arm.com/products/tools/development-boards/versatile-express/juno-arm-development-platform.php)
* [Cavium Project Thunder](http://www.cavium.com/thundersdk_access_application.html)
* [AMD 64-bit Arm Opteron Developer Kit](http://www.amd.com/en-us/press-releases/Pages/64-bit-developer-kit-2014jul30.aspx)
* Applied Micro (APM) [X-Gene](https://www.apm.com/products/data-center/x-gene-family/x-gene/)

For more information about Armv8, Arm provides an overview of the architecture, the AArch64 execution state and the A64 instruction set: [http://www.arm.com/products/processors/instruction-set-architectures/armv8-architecture.php](http://www.arm.com/products/processors/instruction-set-architectures/armv8-architecture.php) For a deep dive into Armv8, the Armv8-A Architecture Reference Manual is publicly available from Arm: [http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.ddi0487a.a_errata1/index.html](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.ddi0487a.a_errata1/index.html) (Please note that free registration is required to be able to download)
