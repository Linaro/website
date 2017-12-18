---
author: fathi.boudra
categories:
- blog
date: 2011-11-11 16:28:12
description: Announcement and release notes for the 2011.11 release of Linaro gcc
  4.6
layout: post
link: /blog/releases-blog/linaro-gcc-4-6-2011-11-released/
slug: linaro-gcc-4-6-2011-11-released
tags:
- Releases
- gcc
- Linaro
- release
- toolchain
title: Linaro GCC 4.6 2011.11 released
wordpress_id: 862
---

The Linaro Toolchain Working Group is pleased to announce the 2011.11 release of Linaro GCC 4.6.

No changes were made in Linaro GCC 4.5 or Linaro GDB this month and, as such, no release has been made.

Linaro GCC 4.6 2011.11 is the ninth release in the 4.6 series.  Based off the latest GCC 4.6.2 release, it contains a range of vectorizer performance improvements and general bug fixes.

Interesting changes include:

  * Updates to 4.6.2


  * A new -mtune=native flag to auto-detect the CPU of the build machine


  * A new -mtune=generic-* flag to tune for a blend of processors


  * Use of the ARMv7 unaligned access support for unaligned variables


  * Vectorization of widening shifts


  * Support for different load offsets and swap operands in SLP


  * Support for multiple types in SLP


  * Support for scheduling register moves in SMS

Fixes:

  * LP: [#836401](http://launchpad.net/bugs/836401) ICE on a | (b << negative-constant)

The source tarballs are available from:
[https://launchpad.net/gcc-linaro/+milestone/4.6-2011.11](https://launchpad.net/gcc-linaro/+milestone/4.6-2011.11)

Downloads are available from the Linaro GCC page on Launchpad:
[https://launchpad.net/gcc-linaro](https://launchpad.net/gcc-linaro)

More information on the features and issues are available from the release page:
[https://launchpad.net/gcc-linaro/4.6/4.6-2011.11](https://launchpad.net/gcc-linaro/4.6/4.6-2011.11)

Mailing list:  [http://lists.linaro.org/mailman/listinfo/linaro-toolchain](http://lists.linaro.org/mailman/listinfo/linaro-toolchain)

Bugs:  [https://bugs.launchpad.net/gcc-linaro/](https://bugs.launchpad.net/gcc-linaro/)

Questions?  [https://ask.linaro.org/](https://ask.linaro.org/)

Interested in commercial support?  Inquire at support@linaro.org