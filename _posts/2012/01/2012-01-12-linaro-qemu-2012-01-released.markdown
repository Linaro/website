---
author: linaro
categories:
- blog
date: 2012-01-12 17:41:24
description: Announcement of the Linaro QEMU 2012.01 release. New features and known
  issues.
keywords: Linaro, Linux on ARM, Toolchain, QEMU, Open Source
layout: post
link: /blog/releases-blog/linaro-qemu-2012-01-released/
slug: linaro-qemu-2012-01-released
tags:
- Releases
- Linaro
- qemu
- release
title: Linaro QEMU 2012.01 released
wordpress_id: 1173
---

The Linaro Toolchain Working Group is pleased to announce the release of Linaro QEMU 2012.01.

Linaro QEMU 2012.01 is the latest monthly release of qemu-linaro. Based off upstream (trunk) QEMU, it includes a number of ARM-focused bug fixes and enhancements.

New in this month's release:

  * Several bug fixes which reinstate support for running on ARM hosts


  * Support for previously missing \*xattr syscalls in usermode emulation


  * A (dummy) model of the L2x0/PL310 L2 cache contrnoller (thanks to Rob Herring and Mark Langsdorf of Calxeda)

Known issues:


  * Graphics do not work for OMAP3 based models (beagle, overo) with 11.10 Linaro images.

The source tarball is available at:
[https://launchpad.net/qemu-linaro/+milestone/2012.01](https://launchpad.net/qemu-linaro/+milestone/2012.01)

More information on Linaro QEMU is available at:
[https://launchpad.net/qemu-linaro](https://launchpad.net/qemu-linaro)

Originally posted to the [linaro-announce](http://lists.linaro.org/pipermail/linaro-toolchain/2012-January/002017.html) mailing list by** Peter Maydell** on Thursday, January 12, 2012.