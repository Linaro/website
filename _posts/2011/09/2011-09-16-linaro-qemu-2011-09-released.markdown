---
author: fathi.boudra
categories:
- blog
date: 2011-09-16 11:05:37
description: Announcement of the Linaro QEMU 2011.09 release. New features and known
  issues.
layout: post
link: /blog/releases-blog/linaro-qemu-2011-09-released/
slug: linaro-qemu-2011-09-released
tags:
- Releases
title: Linaro QEMU 2011.09 released
wordpress_id: 505
---

The Linaro Toolchain Working Group is pleased to announce the release of Linaro QEMU 2011.09.

Linaro QEMU 2011.09 is the latest monthly release of qemu-linaro. Based off upstream (trunk) QEMU, it includes a number of ARM-focused bug fixes and enhancements.

New in this month's release:
- linux-user mode now supports the 64 bit cmpxchg kernel helpers  (only needed for applications compiled for ARMv6 or lower)
- PL111 display controller now supported; this fixes a problem where BGR was interpreted as RGB on recent versatilepb kernels

Plus a few other minor bug fixes and the usual round of upstream fixes and improvements.

Known issues:
- The beagle and beaglexm models still do not support USB networking; we intend to fix this for the 2011.10 release
- There may be some problems with running multithreaded programs in linux-user mode ([LP:823902](http://bugs.launchpad.net/bugs/823902))

The source tarball is available at:
[https://launchpad.net/qemu-linaro/+milestone/2011.09](https://launchpad.net/qemu-linaro/+milestone/2011.09)

Binary builds of this qemu-linaro release are being prepared and will be available shortly for users of Ubuntu. Packages will be in the linaro-maintainers tools PPA:
[https://launchpad.net/~linaro-maintainers/+archive/tools/](https://launchpad.net/~linaro-maintainers/+archive/tools/)

More information on Linaro QEMU is available at:
[https://launchpad.net/qemu-linaro](https://launchpad.net/qemu-linaro)