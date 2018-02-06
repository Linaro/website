---
author: fathi.boudra
categories:
- blog
date: 2011-10-13 11:52:56
description: Announcement of the Linaro QEMU 2011.10 release. New features and known
  issues.
layout: post
link: /blog/releases-blog/linaro-qemu-2011-10-released/
slug: linaro-qemu-2011-10-released
tags:
- Releases
title: Linaro QEMU 2011.10 released
wordpress_id: 658
---

The Linaro Toolchain Working Group is pleased to announce the release of Linaro QEMU 2011.10.

Linaro QEMU 2011.10 is the latest monthly release of qemu-linaro. Based off upstream (trunk) QEMU, it includes a number of ARM-focused bug fixes and enhancements.

New in this month's release:
* Instructions introduced with the Cortex-A15 (ARM mode SDIV and UDIV, and the VFPv4 fused multiply-accumulate instructions VFMA, VFMS, VFNMA, VFNMS) are now supported in linux-user mode
* Beagle models now support USB networking (run the model with "-usb -device usb-net,netdev=mynet -netdev user,id=mynet")

Known issues:
* There may be some problems with running multithreaded programs in linux-user mode (LP: [#823902]())

The source tarball is available at:
[http://launchpad.net/qemu-linaro/+milestone/2011.10](http://launchpad.net/qemu-linaro/+milestone/2011.10)

Binary builds of this qemu-linaro release are being prepared and will be available shortly for users of Ubuntu. Packages will be from the linaro-maintainers tools PPA:
[http://launchpad.net/~linaro-maintainers/+archive/tools/](http://launchpad.net/~linaro-maintainers/+archive/tools/)

More information on Linaro QEMU is available at:
[http://launchpad.net/qemu-linaro](http://launchpad.net/qemu-linaro)