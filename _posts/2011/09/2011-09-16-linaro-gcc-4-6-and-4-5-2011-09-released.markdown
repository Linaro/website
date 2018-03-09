---
author: fathi.boudra
categories:
- blog
date: 2011-09-16 11:13:13
description: Announcement and release notes for the 2011.09 release of Linaro gcc
  4.6 and 4.5
layout: post
link: /blog/releases-blog/linaro-gcc-4-6-and-4-5-2011-09-released/
slug: linaro-gcc-4-6-and-4-5-2011-09-released
tags:
- Releases
title: Linaro GCC 4.6 and 4.5 2011.09 released
wordpress_id: 510
---

The Linaro Toolchain Working Group is pleased to announce the 2011.09 release of both Linaro GCC 4.6 and Linaro GCC 4.5.

Linaro GCC 4.6 2011.09-1 is the seventh release in the 4.6 series.  Based off the latest GCC 4.6.1+svn178681, it contains a range of vectoriser and core performance improvements as well as fixing a number of bugs.

Interesting changes include:
* Updates to 4.6.1+svn178681
* Improves performance by making better use of conditional compares
* Improves performance by properly scheduling widening multiplies
* Improves size and speed by improving constant generation in Thumb-2
* Implements support for widening multiples in toe core
* Improves vectorised code by reducing the over-promotion of intermediates
* Improves performance by reducing redundant moves between VFP and ARM
* Finishes off supporting the Android team in integrating Linaro GCC

Fixes:
* LP: [#823548](http://bugs.launchpad.net/bugs/823548) Can't use -flto with skia
* LP: [#823711](http://bugs.launchpad.net/bugs/823711) libvirt version 0.9.2-4ubuntu8 failed to build on armel
* LP: [#827990](http://bugs.launchpad.net/bugs/827990) internal compiler error: in decode_addr_const, at varasm.c:2632
* LP: [#836401](http://bugs.launchpad.net/bugs/836401) ICE on a | (b << negative-constant)
* LP: [#838994](http://bugs.launchpad.net/bugs/838994) ICE building perl w/ -marm
* LP: [#843775](http://bugs.launchpad.net/bugs/843775) ICE optimizing widening multiply-and-accumulate

Linaro GCC 4.5 2011.09 is the fourteenth release in the 4.5 series. Based off the latest GCC 4.5.3+svn178560, this is a maintenance focused release.

Interesting changes in 4.5 include:
* Updates to 4.5.3+svn178560

Fixes:
* LP: [#823711]() libvirt version 0.9.2-4ubuntu8 failed to build on armel

The source tarballs are available from:
[https://launchpad.net/gcc-linaro/+milestone/4.6-2011.09](https://launchpad.net/gcc-linaro/+milestone/4.6-2011.09)
[https://launchpad.net/gcc-linaro/+milestone/4.5-2011.09](https://launchpad.net/gcc-linaro/+milestone/4.5-2011.09)

Downloads are available from the Linaro GCC page on Launchpad:
[https://launchpad.net/gcc-linaro](https://launchpad.net/gcc-linaro)

More information on the features and issues are available from the release page:
[https://launchpad.net/gcc-linaro/4.6/4.6-2011.09](https://launchpad.net/gcc-linaro/4.6/4.6-2011.09)
[https://launchpad.net/gcc-linaro/4.5/4.5-2011.09](https://launchpad.net/gcc-linaro/4.5/4.5-2011.09)

Mailing list:  [http://lists.linaro.org/mailman/listinfo/linaro-toolchain](http://lists.linaro.org/mailman/listinfo/linaro-toolchain)

Bugs:  [https://bugs.launchpad.net/gcc-linaro/](https://bugs.launchpad.net/gcc-linaro/)

Questions?  [https://ask.linaro.org/](https://ask.linaro.org/)

Interested in commercial support?  inquire at support@linaro.org