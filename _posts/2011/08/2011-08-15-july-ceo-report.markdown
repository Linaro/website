---
author: george.grey
categories:
- blog
date: 2011-08-15 15:38:40
description: Update on Linaro activities for July 2011
keywords: Linux Kernel, ARM, SoCs, evaluation builds, ARM toolchain, Test, Validation,
  Android
layout: post
link: /blog/july-ceo-report/
slug: july-ceo-report
title: July CEO Report
wordpress_id: 4119
---

Last month I discussed how Linaro's working groups deliver technology to kernel.org and other upstreams.   Over time, open source distributions including Google's Android utilize this work in their latest releases, benefiting Linaro's ARM SoC members by accelerating their time to market, and reducing their engineering costs. This is the core strategic value generated from membership of Linaro. This month I explore some of the additional benefits and value of Linaro membership.

**SoC Support Reloaded - the linux-linaro Kernel**

Traditionally SoC vendors provide a Linux Board Support Package (BSP) which provides SoC specific source code as patches to the Linux kernel to support each vendor’s unique SoC features. Customers have worked closely with the SoC vendor to integrate these patches into a particular (often more recent) Linux distribution and then go through the product development process. Over time SoC vendors have needed to devote increasing time and resources to maintaining SoC BSPs and supporting customer product development, as the number of deltas between the SoC specific code and the mainline Linux kernel increase.

Linaro members benefit from the linux-linaro kernel, which is a stable kernel derived directly from the kernel.org tree. This kernel includes selected, stable, product-ready Linaro technology being upstreamed from the working groups. The Landing Team, consisting of both Member and Linaro engineers, builds support for latest SoCs into the Linaro kernel and works with the member to help upstream the customizations to kernel.org and other projects. The linux-linaro kernel is maintained and continuously tested by Linaro on member SoCs and is always up to date with the latest mainline kernel.org release (Linux 3.0 at the time of writing). This reduces maintenance costs and time for our member’s latest products.

**Linaro Evaluation Builds**

The Linaro platform team utilizes the linux-linaro kernel, together with member-specific non-upstreamable code such as graphics accelerator binaries, to create Linaro Evaluation Builds (LEBs) for member development boards. These builds can be used by member customer product engineering teams. Linaro maintains LEBs for Android and Ubuntu and makes monthly releases against the latest kernel.org derived linux-linaro kernel.

**The ARM Toolchain**

The shared investment in Linaro enables the resources to support continued development and support of the gcc-based toolchain for ARM Cortex A-series SoCs. The toolchain working group within Linaro delivers all patches to the gcc.gnu.org upstream, and to enable the fastest possible access to its work, produces monthly releases of the full toolchain (currently gcc 4.5 and 4.6). Members derive value from Linaro's support for their use of the Linaro gcc toolchain, which we aim to make the highest performance tool set for ARM Open Source software development.

**Test & Validation Framework**

The Linaro Automated Validation Architecture (LAVA) is an open source test and validation framework designed to provide continuous testing for kernel and complete image (Linux or Android) builds. Member SoC boards populate a hardware farm that is used to ensure quality of Linaro deliverables including kernel trees and LEBs. Linaro has a team working on LAVA development and deployment and can also work with members who wish to replicate the framework in their own organizations.

**Office of the CTO**

The CTO office within Linaro works with members on new technology relevant to ARM SoCs. Current work topics include hard-float optimizations, kernel memory management, investigations into ARM Server and Java requirements, as well as making recommendations related to ARM-based UEFI and LLVM and capturing requirements for ARM related work in the IVI and STB/home market segments. The CTO office and our Member Services team have access to key open source architects who can advise members on how to address emerging open-source technologies, and can initiate work within Linaro to bring these technologies into real world products on member SoCs at the right time.

Finally, Linaro is a place where all ARM vendors can work together on issues that are difficult for a particular member to address on their own. For example, the current Unified Memory Management project is being coordinated by Linaro, and is being worked on by a variety of resources from Linaro members and nonmembers in the community. Members of Linaro can identify and work together to help address such issues where fragmentation has historically caused duplication of engineering effort or difficulty in upstreaming, increasing engineering costs and ultimately delaying end product time to market.

In conclusion, Linaro is working to deliver both strategic and tactical value, and most importantly a substantial return on the shared investment being made into Linaro by its members.