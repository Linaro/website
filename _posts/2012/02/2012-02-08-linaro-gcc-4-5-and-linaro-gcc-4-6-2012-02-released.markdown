---
author: fathi.boudra
date: 2012-02-08 23:32:36+00:00
layout: post
link: /blog/linaro-gcc-4-5-and-linaro-gcc-4-6-2012-02-released/
slug: linaro-gcc-4-5-and-linaro-gcc-4-6-2012-02-released
title: Linaro GCC 4.5 and Linaro GCC 4.6 2012.02 released
wordpress_id: 1239
categories:
- blog
---

The Linaro Toolchain Working Group is pleased to announce the 2012.02
release of Linaro GCC 4.6 and Linaro GCC 4.5.

Linaro GCC 4.6 2012.02 is the twelfth release in the 4.6 series. Based
off the latest GCC 4.6.2+svn183786, it contains a few bug
fixes and backports Cortex-A7 and Cortex-A15 support from FSF trunk.

Interesting changes include:

  * Updates to 4.6.2+svn183786.


  * Add initial Cortex-A7 support.


  * Backport Cortex-A15 tuning improvements from upstream.


  * Backport improvements to 64 bit unsigned comparisons.

Fixes:


  * LP: [#917967](http://bugs.launchpad.net/bugs/917967) Backport the fix for PR51799.


  * LP: [#836588](http://bugs.launchpad.net/bugs/836588) armel FTBFS with gcc 4.5 org 4.6 O2 and fPIC.


  * LP: [#879725](http://bugs.launchpad.net/bugs/879725) ICE in int_mode_for_mode, at stor-layout.c:490.



Linaro GCC 4.5 2012.02 is the eighteenth release in the 4.5 series. Based
off the latest GCC 4.5.3+svn183785, it is a maintenance only release.

Interesting changes include:


  * Updates to 4.5.3+svn183785.

The source tarballs are available from:
[https://launchpad.net/gcc-linaro/+milestone/4.6-2012.02](https://launchpad.net/gcc-linaro/+milestone/4.6-2012.02)
[https://launchpad.net/gcc-linaro/+milestone/4.5-2012.02](https://launchpad.net/gcc-linaro/+milestone/4.5-2012.02)

Downloads are available from the Linaro GCC page on Launchpad:
[https://launchpad.net/gcc-linaro](https://launchpad.net/gcc-linaro)

More information on the features and issues are available from the
release page:
[https://launchpad.net/gcc-linaro/4.6/4.6-2012.02](https://launchpad.net/gcc-linaro/4.6/4.6-2012.02)
[https://launchpad.net/gcc-linaro/4.5/4.5-2012.02](https://launchpad.net/gcc-linaro/4.5/4.5-2012.02)

Mailing list: [http://lists.linaro.org/mailman/listinfo/linaro-toolchain](http://lists.linaro.org/mailman/listinfo/linaro-toolchain)

Bugs: [https://bugs.launchpad.net/gcc-linaro/](https://bugs.launchpad.net/gcc-linaro/)

Questions? [https://ask.linaro.org/](https://ask.linaro.org/)

Interested in commercial support? inquire at support at linaro.org
