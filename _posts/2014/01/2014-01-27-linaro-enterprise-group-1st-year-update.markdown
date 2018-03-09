---
author: andrea.gallo
categories:
- blog
date: 2014-01-27 20:29:16
description: Overview of the Linaro Enterprise Groups one year update. Details on
  what has been accomplished in the first year and what the team will be focused on
  going forward.
keywords: LEG, Linaro, ARM, open source software, Linux, ARMv7, 64-bit, LAVA
layout: post
link: /blog/linaro-enterprise-group-1st-year-update/
slug: linaro-enterprise-group-1st-year-update
tags:
- embedded
- Linaro
- Open Source
- Opensource
- software
title: Linaro Enterprise Group 1st Year update
wordpress_id: 3269
---

Linaro Enterprise Group (LEG) was officially announced at Linaro Connect Europe in Copenhagen, November 2012, and founded by fourteen companies and about thirty engineers. The LEG team first focused on identifying the high priority technical areas and building a roadmap. After organizing into sub-teams, LEG has been allocating and completing work based on that roadmap.

LEG engineering work status is now fully documented in the monthly [roadmap](https://wiki.linaro.org/LEG#LEG_Roadmap) updates, in the [card structure]()https://cards.linaro.org/secure/StructureBoard.jspa?s=105 and recently in the newly added [dashboard](https://cards.linaro.org/secure/Dashboard.jspa?selectPageId=11405). The Steering Committee members use the [dashboard](https://cards.linaro.org/secure/Dashboard.jspa?selectPageId=11405) to monitor the status of the high priority roadmap cards including a card’s break down into use cases, functional views, and dependencies between multiple departments. These high priority cards are updated on a weekly basis.

The LEG engineering team is now focusing on several technical areas: UEFI, ACPI, OpenJDK, optimizations and workloads.

The UEFI team is cooperating extensively with ARM in reusing the Tianocore EDK II code port and adding new important features for enterprise use cases. These include GRUB and network boot, passing ACPI and SMBIOS tables, runtime services and booting a Linux kernel image as a native EFI application. Over the past year, the team first prototyped using ARMv7-A platforms (ARM Versatile Express and RTSM models, Samsung Arndale, Calxeda’s Highbank and Midway boards) and then began using the ARMv8-A Foundation model, Fast model and now the Fixed Virtual Platform base models. Patches for AArch64 for the SMBIOS, runtime services and EFI stub were submitted to the appropriate maintainers and the related mailing lists at the end of November.

The ACPI team began by porting the native ACPICA support in Linux to the ARM v7 and v8 architectures in parallel, which included a significant effort in enabling the new ACPI hw-reduced profile mode as introduced in [ACPI 5.0 specification](http://acpi.info/spec.htm). At the same time, the team ported and integrated the key validation test suites - ABAT, FWTS, ASLTS, etc. - in LAVA and then created specific ACPI tables for ARM platforms and enabled ARM device drivers with ACPI probing. The team made sure that ACPI probing was added without breaking the pre-existing FDT node probing. All code is available from our [LEG integration branch]()http://git.linaro.org/gitweb?p=arm/acpi/acpi.git on the Linaro GIT tree. There is also a separate [ACPI table git tree]()http://git.linaro.org/gitweb?p=arm/acpi/acpi-asl.git, which contains all tables stored in ASL source code under the BSD license. Patches for the hw-reduced support were posted on the Linux kernel mailing list mid-November with more being submitted everyday.

The OpenJDK LEG team collaborated with the Red Hat experts, who had already started the AArch64 porting project, and helped in porting and testing on the Foundation and Fast models and the first APM 64-bit hardware platform. The cooperation now includes continuous alignment with the latest OpenJDK builds, investigations on bug reports, performance optimization as well as the automation in LAVA and daily execution of the test suites for both Java language compliance and performance evaluation. The Hotspot C1 client JIT compiler was released at LCU13 along with a demonstration. The team also previewed the C2 server compiler running Hadoop Terasort.

The LEG optimization engineers ensured that the LAMP stack (PHP, Python, memcached, httpproxy, etc.) runs on the ARM platforms as well as on other architectures. The engineers then optimized the core libraries underneath the LAMP stack itself, (e.g. CRC computation, AES and RSA signing in openSSL, Hugepages) and even enabled VFP/NEON support in the kernel. Those patches have already been merged upstream. The team is also working on adding backtrace support with libunwind to the perf tool for both 32-bit and 64-bit ARM architectures.

The LEG Steering Committee recommended that the Workload team investigate Open Stack first as the most practical test case for virtualization. LEG is cooperating with the core Virtualization team in enabling OpenStack on top of KVM/QEMU and XEN. The initial proof of concept phase was completed before LCU13 when OpenStack was able to provision a virtual machine (VM) on both the Calxeda Midway and APM Mustang platforms with KVM support. Cooperation with Calxeda and Canonical engineers (32-bit platforms) and with APM experts (64-bit platforms) proved to be key for this achievement. The team is now planning the strategy to clean up the patches and build an official solution to support OpenStack on ARM with both KVM and XEN.

 Overall, it has been a really exciting and productive first year with LEG!