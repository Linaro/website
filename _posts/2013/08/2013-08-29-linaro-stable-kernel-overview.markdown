---
author: mark.brown
categories:
- blog
date: 2013-08-29 22:48:04
description: Overview about the Linaro Stable Kernel. Includes updates from the team
  and information about the beta release.
keywords: Linaro, Kernel, Linux, ARM, opensource, opensource software, LSK, big.little,
  android, reelase, 13.08
layout: post
link: /blog/android-blog/linaro-stable-kernel-overview/
slug: linaro-stable-kernel-overview
tags:
- Android
- '13.08'
- android
- AOSP
- big.little
- kernel
- LSK
- LTS
- release
- stable
title: Linaro Stable Kernel overview
wordpress_id: 2899
---

One of the challenges often faced by system integrators is balancing the desire to adopt and benefit from the most current technology with the need to stabilize the system for release, especially around the kernel. The kernel community provides [stable releases](https://git.kernel.org/cgit/linux/kernel/git/stable/linux-stable.git/) which add bug fixes to the base kernel releases, including long term stable (LTS) releases which are maintained for extended periods, but these do not integrate new features so system integrators often need to backport some features from newer kernel versions

Starting with the 13.09 release Linaro will be producing the [Linaro Stable Kernel](http://wiki.linaro.org/LSK) to help address this problem. These will take key features relevant to Linaro members and integrate them with the kernel.org LTS releases, starting with the newly announced v3.10, providing providing support for these releases for a two year period. This will include features developed by Linaro and as well as some developed within the wider community.  During the first year of release new features will continue to be integrated into the LSK, after that only bug fixes will be accepted.

Preview releases of the LSK have been included in the last few monthly Linaro releases including the current [13.08 release](http://releases.linaro.org/) with the additional features focused on providing the features needed to get the best performance out of systems based on the big.LITTLE architecture. Currently the preview LSK is provided in two editions, the core LSK with the main LSK features and a separate Android edition which combines this with the [AOSP](http://source.android.com) kernel code and additional Android-specific Linaro enhancements.

The LSK will enable users to benefit from the latest Linaro developments with the stability and quality assurance of a supported release. Since the focus is on shared engineering rather than specific device enablement it is expected that the LSK will be merged into an existing development kernel or board support package rather than used by itself.

For more details please refer to the [LSK](http://wiki.linaro.org/LSK) web site.