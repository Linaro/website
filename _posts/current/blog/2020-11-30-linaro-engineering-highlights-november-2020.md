---
layout: post
title: Linaro Engineering Highlights - November 2020
description: TBC
date: 2020-12-14 11:54:02
image: /assets/images/content/electricity-1288717_1920.jpg
tags:
  - Engineering Highlights
  - Lite
  - Device Tree
  - Kernel Working Group
  - Ledge
related_projects:
  - DTE
category: blog
author: jon.burcham@linaro.org
---
# LITE Updates

**By Vicky Janicki, Engineering Director LITE**
{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="LITE Icon" %}The LITE team is busy contributing to the next Zephyr 1.5 release due at the end of January 2021, the TF-M 1.2 release (due by the end of month) and MCUboot 1.7 (also due at the end of the month. Four LITE engineers were ranked in the top 10 contributors for the MCUboot release.

## MCUboot - A New Linaro Community Project

{% include image.html path="/assets/images/content/mcuboot-logo.png" class="small-inline left" alt="MCUboot logo" %}We are very pleased and delighted to give an update on the MCUboot project's move to open governance. MCUboot originated with the company runtime.io which was acquired by JuulLabs in November 2018. 

The MCUboot github repo was formally and properly migrated from JuulLabs to the [mcu-tools github project](https://github.com/mcu-tools/mcuboot). We avoided having to fork the project and will retain the history by migrating. A website, [mcuboot.com](http://mcuboot.com/), already exists outside of JuulLabs and points to the correct github.

Thanks to David Brown (Maintainer), Reed Hinkle (Arm), Fabio Utzig (Maintainer), Aditi Hilbert (JuulLabs), and Andy Gross (JuulLabs) for giving the migration the final push to completion. Many people have been involved in this effort since January and it has taken many hands to move MCUboot to be under the Linaro Community Project umbrella.

The pledge is to keep the MCUboot project governance and administration minimal to allow the contributors to continue to build the best little bootloader in RTOS's. 

Next Steps: We are now recruiting Founding Members for MCUboot. The membership fee will cover administrative and hosting costs along with some potential funding to promote MCUboot. Once we have 4 Founding Members, a board meeting will be scheduled to begin a project charter review and approval process. In the meantime, the technical meetings and leadership will continue under David Brown’s  and Fabio's guidance. Again, the goal is to not disturb what is already working. 

We have drafted a membership presentation and have a draft charter (based on the OpenAMP project) available. Please contact [Vicky Janicki](mailto:vicky.janicki@linaro.org), [Reed Hinkel](mailto:reed.hinkel@arm.com) or [David Brown](mailto:david.brown@linaro.org) for the files.

## [Security and Zephyr Project](https://www.zephyrproject.org/security-and-the-zephyr-project/)

{% include image.html path="/assets/images/content/zephyr_project-logo.png" class="small-inline left" alt="Zephyr Project icon" %} Part of the charter for the Zephyr Project specifies that there shall be a security subcommittee. This committee consists of an individual from each Platinum member company, along with two elected positions, a Security Architect (currently me),and a Chair. The Chair is responsible for running the regular security meetings (every two weeks), and the Architect is responsible for the overall security of the project. **[Continue Reading here..](https://www.zephyrproject.org/security-and-the-zephyr-project/)**

## [Device Tree - Future Improvements](https://www.linaro.org/blog/device-tree-future-improvements/)

**By Joakim Bech, Distinguished Engineer**

{% include image.html path="/assets/images/content/devicetree-logo_vertical-devicetree.png" class="small-inline left" alt="Device Tree icon" %} Device Tree has been around for a long time and is a well known technology for engineers working with embedded devices. One of the key goals with Device Tree was to separate specific settings related to a specific SoC into separate configurations, in a way that would make it possible to run a generic kernel (Linux kernel) and provide different Device Tree Blobs (the name that refers to the compiled form of a Device Tree configuration, DTB for short) for different hardware configurations. Originating from Open Firmware, Device Tree was picked up by the Linux kernel roughly fifteen years ago, as an effort to try and sort out what at the time was a rather messy configuration of Arm devices. Today, you will find hundreds of DTS-files in the Linux kernel tree for all sorts of devices coming from a plethora of SoC manufacturers. In Linux kernel v5.8 there are 1833 *.dts files, which shows the Device Tree approach of doing device configuration in Linux kernel has been pretty successful.

**[Continue reading](https://www.linaro.org/blog/device-tree-future-improvements/)….**

# Kernel Working Group News

## Arm 32bit startup sequence

Linus Walleij of the Kernel Working Group has posted some additional information on how the ARM32 startup sequence works.
{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}

To understand the paging setup, we need to repeat and extend some Linux paging lingo. Some good background is to read [Mel Gormans description of the Linux page tables](https://www.kernel.org/doc/gorman/html/understand/understand006.html) from his book “Understanding the Linux Virtual Memory Manager”. This book was published in 2007 and is based on Mel’s PhD thesis from 2003. Some stuff has happened in the 13 years since then, but the basics still hold. It is necessary to understand the new layers in the page tables such as the [five layers of page tables](https://lwn.net/Articles/717293/) currently used in the Linux kernel.”

## [Setting Up the ARM32 Architecture, part 1](https://people.kernel.org/linusw/setting-up-the-arm32-architecture-part-1)

“After we have considered [how the ARM32 kernel uncompressed](https://people.kernel.org/linusw/how-the-arm32-linux-kernel-decompresses) and [the early start-up when the kernel jumps from executing in physical memory to executing in virtual memory](https://people.kernel.org/linusw/how-the-arm32-kernel-starts) we now want to see what happens next all the way until the kernel sets up the proper page tables and starts executing from properly paged virtual memory.

To provide a specific piece of the story that does not fit into this linear explanation of things, i have also posted a separate article on [how the ARM32 page tables work](https://people.kernel.org/linusw/arm32-page-tables). This will be referenced in the text where you might need to recapture that part.

## [Setting Up the ARM32 Architecture, part 2](https://people.kernel.org/linusw/setting-up-the-arm32-architecture-part-2)

“We now return to the list of memory available for the Linux kernel.

arm_memblock_init() in arch/arm/mm/init.c is called, resulting in a number of memory reservations of physical memory the Linux memory allocator can NOT use, given as physical start address and size. So we saw earlier that memblock stores a list of available blocks of memory, and in addition to that it can set aside reserved memory.”

## Kernel Validation Team (KVT) finds the first issues with the KASAN support for Armv7 - 32 bit

{% include image.html path="/assets/images/content/lkft-icon.png" class="small-inline left" alt="LKFT icon" %}