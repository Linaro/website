---
author: fathi.boudra
categories:
- blog
date: 2012-04-12 06:11:57
description: Announcement and release notes for Linaro GCC 4.7 and 4.6 2012.04
layout: post
link: /blog/releases-blog/linaro-gcc-4-7-and-4-6-2012-04-released/
slug: linaro-gcc-4-7-and-4-6-2012-04-released
tags:
- Releases
title: Linaro GCC 4.7 and 4.6 2012.04 released
wordpress_id: 1534
---

The Linaro Toolchain Working Group is pleased to announce the 2012.04 release of both Linaro GCC 4.7 and Linaro GCC 4.6.

Linaro GCC 4.7 2012.04 is the first release in the 4.7 series. Based off the latest GCC 4.7.0+svn186061 release, it includes performance improvements especially around 64 bit operations.

Interesting changes include:

  * Our first 4.7 based release


  * Updates to GCC 4.7.0+svn186061


  * Better use of 16 bit Thumb-2 instructions for smaller code size


  * Implements 64 bit ones complement in NEON


  * Adds support for the ARMv6 saturation instructions


  * Backports the NEON lexer improvements for faster compilation


  * Backports the 64 bit multiply, divide, and mod improvements


Fixes:


  * [LP: #960283](http://bugs.launchpad.net/bugs/960283) slp pass assert when compiler configure with --enable-checking


Linaro GCC 4.6 2012.04 is the fourteenth release in the 4.6 series. Based off the latest GCC 4.6.3+svn186060 release, this is the first release after entering maintenance.

Interesting changes include:


  * Updates to 4.6.3+svn186060


Fixes:


  * [LP: #960283](http://bugs.launchpad.net/bugs/960283) slp pass assert when compiler configure with --enable-checking


The source tarballs are available from:
[https://launchpad.net/gcc-linaro/+milestone/4.7-2012.04](https://launchpad.net/gcc-linaro/+milestone/4.7-2012.04)
[https://launchpad.net/gcc-linaro/+milestone/4.6-2012.04](https://launchpad.net/gcc-linaro/+milestone/4.6-2012.04)

Downloads are available from the Linaro GCC page on Launchpad:
[https://launchpad.net/gcc-linaro](https://launchpad.net/gcc-linaro)

More information on the features and issues are available from the release page:
[https://launchpad.net/gcc-linaro/4.7/4.7-2012.04](https://launchpad.net/gcc-linaro/4.7/4.7-2012.04)

Mailing list: [http://lists.linaro.org/mailman/listinfo/linaro-toolchain](http://lists.linaro.org/mailman/listinfo/linaro-toolchain)

Bugs: [https://bugs.launchpad.net/gcc-linaro/](https://bugs.launchpad.net/gcc-linaro/)

Questions? [https://ask.linaro.org/](https://ask.linaro.org/)

Interested in commercial support? Inquire at support@linaro.org