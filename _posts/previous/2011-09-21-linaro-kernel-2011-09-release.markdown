---
author: fathi.boudra
categories:
- blog
date: 2011-09-21 05:30:28
description: Announcement and release notes for Linaro Kernel 2011.09 release
layout: post
link: /blog/releases-blog/linaro-kernel-2011-09-release/
slug: linaro-kernel-2011-09-release
tags:
- Releases
title: Linaro Kernel 2011.09 release
wordpress_id: 541
---

The Linaro Kernel Working Group (KWG) is excited to announce the availability of our September 2011 development snapshot:
linux-linaro-3.0-2011.09-0

As the word "snapshot" implies, these are meant as development kernels and have not been fully validated. You should expect issues and to help us deliver a better kernel in the future, please file bugs in Launchpad at [https://bugs.launchpad.net/linux-linaro](https://bugs.launchpad.net/linux-linaro).

The source tarball is available at:
[http://launchpad.net/linux-linaro/3.0/3.0-2011.09/+download/linux-linaro-3.0-2011.09-0.tar.bz2](http://launchpad.net/linux-linaro/3.0/3.0-2011.09/+download/linux-linaro-3.0-2011.09-0.tar.bz2)

The kernel sources can also be accessed using git at:
git://git.linaro.org/kernel/linux-linaro-3.0.git
tag: linux-linaro-3.0-2011.09-0

The changes since our 11.08 release include:
- Update to 3.0.4 stable tree
- Fix for [https://bugs.launchpad.net/bugs/709245](https://bugs.launchpad.net/bugs/709245), a USB performance issue on Cortex A9 dual core systems.

This release is light on changes as we don't feel that the 3.1-rc tree is ready to move to and we are moving towards a policy of no backporting except for critical bugs.

A full changelog against linux-linaro-3.0-2011.09 is available at:
[http://launchpad.net/linux-linaro/3.0/3.0-2011.09/+download/CHANGELOG-linux-linaro-3.0-2011.09-0](http://launchpad.net/linux-linaro/3.0/3.0-2011.09/+download/CHANGELOG-linux-linaro-3.0-2011.09-0)

High Priority Known Issues:
- None at this time!

Mailing list: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

Questions? [https://ask.linaro.org/](https://ask.linaro.org/)