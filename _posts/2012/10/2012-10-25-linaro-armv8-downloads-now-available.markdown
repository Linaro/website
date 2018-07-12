---
author: loic.minier
categories:
- blog
date: 2012-10-25 11:48:00
description: New Armv8 downloads are now available from Linaro!
keywords: Linaro, Linux on Arm, Open Source, Release, ArmV8, AArch64, Downloads,  Arm
layout: post
link: /blog/releases-blog/linaro-armv8-downloads-now-available/
slug: linaro-armv8-downloads-now-available
tags:
- Releases
title: Linaro Armv8 Downloads Now Available
wordpress_id: 1947
---

## New Armv8 downloads are now available from Linaro!

The Armv8 architecture offers 64-bit computing for Arm SoCs.  Arm and Linaro have been hard at work to enable opensource software for the new AArch64 execution state and for the new A64 instruction set and Linaro is making early Armv8 images available to interested developers.

While hardware isn't available for purchase, Arm offers a free of charge Armv8 virtual platform called "Foundation model" which allows booting Linaro's GNU/Linux images.

The filesystem images are based on OpenEmbedded and come in three flavors:

  * minimal -- just to get you to a shell prompt

  * SDK -- includes developer tools such as a native GNU toolchain

  * LAMP -- includes MySQL, Apache, and PHP!

Linaro is also offering cross-toolchains for Linux and Windows hosts in two flavors: a bare-metal cross-toolchain and a GNU/Linux one (targeting glibc).

Detailed instructions on downloading, running, and rebuilding the images and on using the toolchains are at:

[/initiatives/armv8/](/engineering/initiatives/armv8/)

## Bugs

Bug reports for the filesystem images should be filed in Launchpad against the Linaro OpenEmbedded project:

[https://launchpad.net/linaro-oe](https://launchpad.net/linaro-oe)

If in doubt, feel free to file them against the Linaro project:

[https://launchpad.net/linaro](https://launchpad.net/linaro)