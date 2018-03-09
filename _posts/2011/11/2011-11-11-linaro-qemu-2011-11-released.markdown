---
author: fathi.boudra
categories:
- blog
date: 2011-11-11 16:42:23
description: Announcement of the Linaro QEMU 2011.11 release. New features and known
  issues.
layout: post
link: /blog/releases-blog/linaro-qemu-2011-11-released/
slug: linaro-qemu-2011-11-released
tags:
- Releases
title: Linaro QEMU 2011.11 released
wordpress_id: 866
---

The Linaro Toolchain Working Group is pleased to announce the
release of Linaro QEMU 2011.11.

Linaro QEMU 2011.11 is the latest monthly release of
qemu-linaro. Based off upstream (trunk) QEMU, it includes a
number of ARM-focused bug fixes and enhancements.

New in this month's release:

- The ARM vexpress-a9, versatilepb, versatileab and realview-*
boards now have audio support (thanks to Mathieu Sonet who
contributed a PL041 implementation upstream)
- Support for multiple instances of the "-sd" option on the
command line has been dropped; this was never present in
upstream QEMU and has been removed for consistency. Use
"-drive,if=sd,index=N,file=file.img" for N=0,1,2... instead
- Fixes LP: [#886980](http://launchpad.net/bugs/886980): 8 and 16 bit reads from the OMAP GPIO module
would crash due to an infinite recursion
- Fixes LP: [#823902](http://launchpad.net/bugs/823902): problems running multithreaded programs in
linux-user mode

Known issues:
- Graphics do not work for OMAP3 based models (beagle, overo)
with 11.10 Linaro images.
- This release of qemu-linaro is known not to work on ARM hosts.
(See LP: [#883133](http://launchpad.net/bugs/883133), [#883136](http://launchpad.net/bugs/883136))

NB: if you run QEMU on a host system without properly configured
audio you might find that QEMU now hangs at some point; you can
fix this by fixing your host system, or work around it by setting
the environment variable QEMU_AUDIO_DRV=none.
If you build from source you may now want to pass configure
a suitable --audio-drv-list=LIST option.

The source tarball is available at:
[http://launchpad.net/qemu-linaro/+milestone/2011.11](http://launchpad.net/qemu-linaro/+milestone/2011.11)

Binary builds of this qemu-linaro release are being prepared and
will be available shortly for users of Ubuntu. Packages will be in
the linaro-maintainers tools ppa:
[http://launchpad.net/~linaro-maintainers/+archive/tools/](http://launchpad.net/~linaro-maintainers/+archive/tools/)

More information on Linaro QEMU is available at:
[http://launchpad.net/qemu-linaro](http://launchpad.net/qemu-linaro)