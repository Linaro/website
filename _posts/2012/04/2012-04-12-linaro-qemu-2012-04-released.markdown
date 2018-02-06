---
author: fathi.boudra
categories:
- blog
date: 2012-04-12 12:45:50
description: Announcement of the Linaro QEMU 2012.04 release. New features and known
  issues.
layout: post
link: /blog/releases-blog/linaro-qemu-2012-04-released/
slug: linaro-qemu-2012-04-released
tags:
- Releases
title: Linaro QEMU 2012.04 released
wordpress_id: 1546
---

The Linaro Toolchain Working Group is pleased to announce the release of Linaro QEMU 2012.04.

Linaro QEMU 2012.04 is the latest monthly release of qemu-linaro. Based off upstream (trunk) QEMU, it includes a number of ARM-focused bug fixes and enhancements.

New in this month's release:

  * ppoll syscall now supported in ARM linux-user mode

  * the SETEND instruction in the Thumb encoding now UNDEFs to match behaviour for the ARM encoding

  * the OMAP36xx UART FIFO status registers are now implemented (thanks to Jan Vesely)

Known issues:

  * Graphics do not work for OMAP3 based models (beagle, overo) with 11.10 Linaro images.

  * Audio may not work on Versatile Express models with the latest Linaro kernel/hardware packs ([LP: #977610](http://bugs.launchpad.net/bugs/977610)).

The source tarball is available at:
[https://launchpad.net/qemu-linaro/+milestone/2012.04](https://launchpad.net/qemu-linaro/+milestone/2012.04)

More information on Linaro QEMU is available at:
[https://launchpad.net/qemu-linaro](https://launchpad.net/qemu-linaro)