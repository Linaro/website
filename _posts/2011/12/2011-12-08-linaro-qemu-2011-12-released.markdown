---
author: fathi.boudra
categories:
- blog
date: 2011-12-08 12:26:19
description: Announcement of the Linaro QEMU 2011.12 release. New features and known
  issues.
layout: post
link: /blog/releases-blog/linaro-qemu-2011-12-released/
slug: linaro-qemu-2011-12-released
tags:
- Releases
title: Linaro QEMU 2011.12 released
wordpress_id: 1031
---

The Linaro Toolchain Working Group is pleased to announce the release of Linaro QEMU 2011.12.

Linaro QEMU 2011.12 is the latest monthly release of qemu-linaro. Based off upstream (trunk) QEMU, it includes a number of ARM-focused bug fixes and enhancements.

New in this month's release:
- There are no Linaro-specific changes of note in this release
- This release is based on the upstream QEMU 1.0 release.
(Note that future qemu-linaro releases will continue to track
upstream trunk; the release dates for upstream and our
release just happened to be conveniently aligned in this case.)

Known issues:
- Graphics do not work for OMAP3 based models (beagle, overo)
with 11.10 Linaro images.
- This release of qemu-linaro is known not to work on ARM hosts.
(See bugs [#883133](http://launchpad.net/bugs/883133), [#883136](http://launchpad.net/bugs/883136))

The source tarball is available at:
[http://launchpad.net/qemu-linaro/+milestone/2011.12](http://launchpad.net/qemu-linaro/+milestone/2011.12)

More information on Linaro QEMU is available at:
[http://launchpad.net/qemu-linaro](http://launchpad.net/qemu-linaro)