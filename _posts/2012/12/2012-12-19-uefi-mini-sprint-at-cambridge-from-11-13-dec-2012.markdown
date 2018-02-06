---
author: rony.nandy
categories:
- blog
date: 2012-12-19 14:51:24
description: Summary of the UEFI Mini-Summit held in Cambridge, UK on 11-13 December
  2012. Discussed were fixes, updates and UEFI bootloader for LEG and more.
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, UEFI, Mini-Summit, Cambridge
  UK, LEG, Toolchain, Bootloader
layout: post
link: /blog/connect-update/uefi-mini-sprint-at-cambridge-from-11-13-dec-2012/
slug: uefi-mini-sprint-at-cambridge-from-11-13-dec-2012
tags:
- Connect Events
- LEG
- Linaro
- UEFI
title: UEFI mini-sprint at Cambridge from 11-13 Dec 2012
wordpress_id: 2136
---

We had a wonderful Linaro UEFI mini-sprint at Cambridge from 11-13 Dec and fixed a lot of lingering problems like a home for all the board support for edk2(UEFI) on ARM. [Ryan](/about/) has set up a common tree for all the boards _git://git.linaro.org/arm/uefi/uefi-next.git_ This is going to be the de-facto upstream for UEFI on ARM. [Grant](/about/), Oliver with Ryan reflected on the maintainership structure for UEFI on ARM. Leif worked hard to natively build the UEFI on ARM to get rid of x86 from his life, which he has almost done using his hacked chromebook running Debian—a loyal ARM and Linaro employee!

[ I](/about/) worked to build it for the latest tool chain as I always end up using old tool chains resulting code breaking in latest tool chains. There was a lot of planning and discussions related to UEFI on ARM led by [Andrea](/about/).

The UEFI boot loader [LEG](/groups/leg/) has ported to Arnadle is capable for microSD boot now. We are working to add SATA and network boot support on it now. The binary and setup for the Arndale is available here [https://wiki.linaro.org/Boards/Arndale/Setup/UEFI](https://wiki.linaro.org/Boards/Arndale/Setup/UEFI).