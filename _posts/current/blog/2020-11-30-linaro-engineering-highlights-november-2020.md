---
layout: post
title: Linaro Engineering Highlights - November 2020
description: The November highlights are full of the latest updates and news
  from Linaro. Topics include; LITE updates, MCUboot & a new Linaro Community
  Project, Security and Zephyr updates. Plus, future improvements for Device
  Tree, Kernel Working Group news, setting up ARM32 architecture, Kernel
  validation team updates, LEDGE team news, Arm 32bit startup sequence and a
  major eBPF fix on Aarch64 to name but a few.
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
{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="LITE Icon" %}The LITE team is busy contributing to the next Zephyr 2.5 release due at the end of January 2021, the TF-M 1.2 release (due by the end of month) and MCUboot 1.7 (also due at the end of the month). Four LITE engineers were ranked in the top 10 contributors for the MCUboot release.

## MCUboot - A New Linaro Community Project

{% include image.html path="/assets/images/content/mcuboot-logo.png" class="small-inline left" alt="MCUboot logo" %}We are very pleased and delighted to give an update on the MCUboot project's move to open governance. MCUboot originated with the company runtime.io which was acquired by JuulLabs in November 2018. 

The MCUboot github repo was formally and properly migrated from JuulLabs to the [mcu-tools github project](https://github.com/mcu-tools/mcuboot). We avoided having to fork the project and will retain the history by migrating. A website, [mcuboot.com](http://mcuboot.com/), already exists outside of JuulLabs and points to the correct github.

Thanks to David Brown (Maintainer), Reed Hinkle (Arm), Fabio Utzig (Maintainer), Aditi Hilbert (JuulLabs), and Andy Gross (JuulLabs) for giving the migration the final push to completion. Many people have been involved in this effort since January and it has taken many hands to move MCUboot to be under the Linaro Community Project umbrella.

The pledge is to keep the MCUboot project governance and administration minimal to allow the contributors to continue to build the best little bootloader in RTOS's. 

Next Steps: We are now recruiting Founding Members for MCUboot. The membership fee will cover administrative and hosting costs along with some potential funding to promote MCUboot. Once we have 4 Founding Members, a board meeting will be scheduled to begin a project charter review and approval process. In the meantime, the technical meetings and leadership will continue under David Brown’s  and Fabio's guidance. Again, the goal is to not disturb what is already working. 

We have drafted a membership presentation and have a draft charter (based on the OpenAMP project) available. Please contact [Vicky Janicki](mailto:vicky.janicki@linaro.org), [Reed Hinkel](mailto:reed.hinkel@arm.com) or [David Brown](mailto:david.brown@linaro.org) for the files.

## [Security and Zephyr Project](https://www.zephyrproject.org/security-and-the-zephyr-project/)

{% include image.html path="/assets/images/content/zephyr_project-logo.png" class="small-inline left" alt="Zephyr Project icon" %} Part of the charter for the Zephyr Project specifies that there shall be a security subcommittee. This committee consists of an individual from each Platinum member company, along with two elected positions, a Security Architect (currently me), and a Chair. The Chair is responsible for running the regular security meetings (every two weeks), and the Architect is responsible for the overall security of the project. **[Continue Reading here..](https://www.zephyrproject.org/security-and-the-zephyr-project/)**

## [Device Tree - Future Improvements](https://www.linaro.org/blog/device-tree-future-improvements/)

**By Joakim Bech, Distinguished Engineer**

{% include image.html path="/assets/images/content/devicetree-logo_vertical-devicetree.png" class="small-inline left" alt="Device Tree icon" %} Device Tree has been around for a long time and is a well known technology for engineers working with embedded devices. One of the key goals with Device Tree was to separate specific settings related to a specific SoC into separate configurations, in a way that would make it possible to run a generic kernel (Linux kernel) and provide different Device Tree Blobs (the name that refers to the compiled form of a Device Tree configuration, DTB for short) for different hardware configurations. Originating from Open Firmware, Device Tree was picked up by the Linux kernel roughly fifteen years ago, as an effort to try and sort out what at the time was a rather messy configuration of Arm devices. Today, you will find hundreds of DTS-files in the Linux kernel tree for all sorts of devices coming from a plethora of SoC manufacturers. In Linux kernel v5.8 there are 1833 *.dts files, which shows the Device Tree approach of doing device configuration in Linux kernel has been pretty successful.

**[Continue reading](https://www.linaro.org/blog/device-tree-future-improvements/)….**

# Kernel Working Group News

## Arm 32bit startup sequence

Linus Walleij of the Kernel Working Group has posted some additional information on how the ARM32 startup sequence works.
{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}

## [ARM32 Page Tables](https://people.kernel.org/linusw/arm32-page-tables)

“As I continue to describe in different postings how the ARM32 start-up sequence works, it becomes necessary to explain in-depth the basic kernel concepts around page tables and how it is implemented on ARM32 platforms.

To understand the paging setup, we need to repeat and extend some Linux paging lingo. Some good background is to read [Mel Gormans description of the Linux page tables](https://www.kernel.org/doc/gorman/html/understand/understand006.html) from his book “Understanding the Linux Virtual Memory Manager”. This book was published in 2007 and is based on Mel’s PhD thesis from 2003. Some stuff has happened in the 13 years since then, but the basics still hold. It is necessary to understand the new layers in the page tables such as the [five layers of page tables](https://lwn.net/Articles/717293/) currently used in the Linux kernel.”

## [Setting Up the ARM32 Architecture, part 1](https://people.kernel.org/linusw/setting-up-the-arm32-architecture-part-1)

“After we have considered [how the ARM32 kernel uncompressed](https://people.kernel.org/linusw/how-the-arm32-linux-kernel-decompresses) and [the early start-up when the kernel jumps from executing in physical memory to executing in virtual memory](https://people.kernel.org/linusw/how-the-arm32-kernel-starts) we now want to see what happens next, all the way until the kernel sets up the proper page tables and starts executing from properly paged virtual memory.

To provide a specific piece of the story that does not fit into this linear explanation of things, I have also posted a separate article on [how the ARM32 page tables work](https://people.kernel.org/linusw/arm32-page-tables). This will be referenced in the text where you might need to recapture that part.

## [Setting Up the ARM32 Architecture, part 2](https://people.kernel.org/linusw/setting-up-the-arm32-architecture-part-2)

“We now return to the list of memory available for the Linux kernel.

arm_memblock_init() in arch/arm/mm/init.c is called, resulting in a number of memory reservations of physical memory the Linux memory allocator can NOT use, given as physical start address and size. So we saw earlier that memblock stores a list of available blocks of memory, and in addition to that it can set aside reserved memory.”

## Kernel Validation Team (KVT) finds the first issues with the KASAN support for Armv7 - 32 bit

{% include image.html path="/assets/images/content/lkft-icon.png" class="small-inline left" alt="LKFT icon" %} Linus Walleji from the KWG has worked on the ARMv7 enablement of KASAN which was delivered in the recent 5.11 release.

KASAN is the Linux kernel support for a kernel address sanitization. (KASAN, <http://lwn.net/Articles/612153/>) uses compiler instrumentation present in GCC 4.9 and above based releases to identify invalid memory accesses as they occur with low-performance overhead. KASAN can be used to both improve testing of code and help developers diagnose problems. This feature requires per architecture implementation in the kernel that was available for x86-64 systems but previously not for ARMv7 systems. 

The first issue \[1] KASAN for Armv7 uncovered quickly followed the merge. Naresh Kamboju reported the first bug revealed two hours after discovery on a Beaglebone X15, six hours later, Vignesh\[2] posted a fix.

A quote from Naresh "Since the LKFT project is running 40,000 test cases on each build we had a great chance to find early regressions. Our team is actively reporting regressions, and testing debug patches and proposed fix patches. This way LKFT is playing a major role in Linux kernel validation."

All this and the test loop is not yet complete! Arm KASAN enabled testing is happening on qemu_arm and TI x15 boards, but both currently fail to boot \[3].
Failure to boot is a blocker for running a full LKFT test plan. When we solve this boot problem, we will have ample opportunity to find regressions on arm KASAN builds.

1. BUG: KASAN: global-out-of-bounds in soc_device_match on arm. <https://lore.kernel.org/linux-next/CA+G9fYvQ9R2i8FsQcvb7f8aYv1v1+vq_OsOtg9YEtHGRvx+zxQ@mail.gmail.com/>
2. serial: 8250: 8250_omap: Fix possible array out of bounds access. <https://lore.kernel.org/linux-serial/20201111112653.2710-1-vigneshr@ti.com/>
3. arm: kasan: WARNING: CPU: 0 PID: 0 at arch/arm/kernel/insn.c:47 __arm_gen_branch. <https://lore.kernel.org/linux-next/CA+G9fYtrOq66zz8ux=G+SDH7ZUJevv-L0W+xvtERHAJCuCmj_g@mail.gmail.com/>

# LEDGE Team News

## Linux EFI Stub as a minimal EFI OS Loader

 **By lias Apalodimas, LEDGE Technical Lead**

{% include image.html path="/assets/images/content/ledge.jpg" class="small-inline left" alt="Ledge icon" %} 

UEFI booting process (as in EDK2 and U-Boot) assumes the operating system provides an EFI application that stages memory with all necessary artifacts before transferring execution to the OS kernel. In that context, Linux can be booted directly if configured without an initial ram disk (or it is embedded in the kernel) and the device tree or ACPI tables passed as EFI tables. If there is an initial ram disk (initrd), the standard solution is to have grub.efi stage memory and chain-boot to linux kernel.

The Linux EFI stub has been extended to behave as a Linux loader, avoiding the need of grub. The EFI Stub calls the EFI boot tile service to locate and possibly measure (in the measured boot / Trusted Computing Group terms) the initrd.

As a result of this change, the initrd can be located in a different filesystem from the kernel and there is no need to maintain Linux logic in grub that has to be aware of the internal kernel structures and memory limitations of the initrd placement. With this new approach the file is loaded into memory only when requested, into a kernel provided memory area, limiting the area of [Time-of-Check Time-of-Use](https://cwe.mitre.org/data/definitions/367.html) (TOCTOU) attacks. Users will be allowed to place the initrd file on any firmware accessible partition instead of just the ESP one. The necessary patches for this were also upstreamed in U-Boot’s EFI implementation.

## Major eBPF fix on Aarch64

**By lias Apalodimas, LEDGE Technical Lead**

eBPF is the in-kernel bytecode interpreter that was introduced to deal with packet filtering and that ended up being a key technology for overall debugging and other kernel observability tooling. It is also used to build fast userland data planes that can compete with DPDK on a performance basis but has the elegance to keep natural Linux networking stack connectivity for non accelerated traffic.

Aarch64 eBPF used to work properly up until eBPF bounded loops were introduced. After that introduction several test cases were [failing](https://lkml.org/lkml/2020/9/17/262) in arm64 on the BPF verifier. This prohibited arm64 platforms running BPF programs that would jump back on the 1st instruction. The patch to fix this is now upstream.