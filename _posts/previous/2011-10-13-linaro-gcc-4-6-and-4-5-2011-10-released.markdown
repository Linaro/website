---
author: fathi.boudra
categories:
- blog
date: 2011-10-13 11:57:08
description: Announcement and release notes for Linaro GCC 4.6 and 4.5 2011.10
layout: post
link: /blog/releases-blog/linaro-gcc-4-6-and-4-5-2011-10-released/
slug: linaro-gcc-4-6-and-4-5-2011-10-released
tags:
- Releases
title: Linaro GCC 4.6 and 4.5 2011.10 released
wordpress_id: 662
---

The Linaro Toolchain Working Group is pleased to announce the 2011.10 release of both Linaro GCC 4.6 and Linaro GCC 4.5.

Linaro GCC 4.6 2011.10 is the eighth release in the 4.6 series.  Based off the latest GCC 4.6.1+svn179483, it contains a range of vectoriser performance improvements and general bug fixes.

Interesting changes include:
* Updates to 4.6.1+svn179483
* Vectorises more straight-line code with data dependencies
* Now picks the best vector width when vectorising straight line code
* Better handles handling auto increment addresses in SMS
* Changes the default vector width from double word to quad word
* Better handling extracting the top or bottom half of a quad word vector
* Now supports the NEON absolute difference instruction

Fixes:
* LP: [#689887](http://bugs.launchpad.net/bugs/689887) ICE in get_arm_condition_code
* LP: [#809761](http://bugs.launchpad.net/bugs/809761) oss4 version 4.2-build2004-1ubuntu1 failed to build on armel

Linaro GCC 4.5 2011.10 is the fifteenth release in the 4.5 series. Based off the latest GCC 4.5.3+svn179438, this is a maintenance focused release.

Interesting changes in 4.5 include:
* Updates to 4.5.3+svn179438

Fixes:
* LP: [#689887](http://bugs.launchpad.net/bugs/689887) ICE in get_arm_condition_code

The source tarballs are available from:
[http://launchpad.net/gcc-linaro/+milestone/4.6-2011.10](http://launchpad.net/gcc-linaro/+milestone/4.6-2011.10)
[http://launchpad.net/gcc-linaro/+milestone/4.5-2011.10](http://launchpad.net/gcc-linaro/+milestone/4.5-2011.10)

Downloads are available from the Linaro GCC page on Launchpad:
[http://launchpad.net/gcc-linaro](http://launchpad.net/gcc-linaro)

More information on the features and issues are available from the release page:
[http://launchpad.net/gcc-linaro/4.6/4.6-2011.10](http://launchpad.net/gcc-linaro/4.6/4.6-2011.10)
[http://launchpad.net/gcc-linaro/4.5/4.5-2011.10](http://launchpad.net/gcc-linaro/4.5/4.5-2011.10)

Mailing list:  [http://lists.linaro.org/mailman/listinfo/linaro-toolchain](http://lists.linaro.org/mailman/listinfo/linaro-toolchain)

Bugs:  [https://bugs.launchpad.net/gcc-linaro/](https://bugs.launchpad.net/gcc-linaro/)

Questions?  [https://ask.linaro.org/](https://ask.linaro.org/)

Interested in commercial support?  inquire at support@linaro.org