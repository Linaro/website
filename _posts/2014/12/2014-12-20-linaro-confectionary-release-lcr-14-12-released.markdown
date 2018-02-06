---
author: fathi.boudra
date: 2014-12-20 11:09:53+00:00
layout: post
link: /blog/linaro-confectionary-release-lcr-14-12-released/
slug: linaro-confectionary-release-lcr-14-12-released
title: Linaro Confectionary Release (LCR) 14.12 released
wordpress_id: 7753
categories:
- blog
tags:
- Releases
---

> "Any technology that does not appear magical is insufficiently advanced." ~ Gregory Benford

Linaro is pleased to announce the first Linaro Confectionery Release (LCR). LCR is a reference build of the Android-5.0.1_r1 branch for ARM’s Juno and Versatile Express TC2 hardware, and Fixed Virtual Platform (FVP) models.

The goal of LCR is to provides a foundation for tested Linaro engineering efforts integrated with Android point releases. Only engineering efforts which have an established validation record are allowed to be added to LCR.

LCR is conceptually similar to the Linaro Stable Kernel (LSK) project which uses Greg Kroah-Hartman’s Long Term Stable (LTS) source tree with Linaro members features added. LCR charts a comparable course that starts with Android point releases and includes Linaro member directed engineering to fix, optimize and enhance LCR.

For 14.12, LCR uses the Android AOSP 4.9 GCC toolchain for building 64bit ARM binaries and the Android AOSP 4.8 GCC toolchain for building 32bit ARM binaries.

LCR includes the 3.10 Android flavour of LSK for all 3 currently supported configurations. This means that the LSK includes Android kernel patches from the AOSP project. The Juno kernel includes ARM Mali drivers for accelerated 3D graphics support.

LCR includes support for both single-arch 32bit ARMv7-A and multi-arch 32bit ARMv7-A, 64bit ARMv8-A Android systems.

LCR is tested. CTS version 5.0, Android BIONIC tests, Android Monkey and other tests are used to validate the system. Testing performed should not be considered to exhaustive or necessarily product quality. Test results are available to Linaro member companies.

The release can be found respectively at:

  * [Juno](/downloads/)


  * [FVP](/downloads/)


  * [Versatile Express TC2](/downloads/)

If you should find a issue or have a question about the release, we invite you to use one of the following mechanisms:

  * IRC: irc.freenode.net - #linaro-android
  * email: linaro-android at lists.linaro.org
  * [Bug Tracking System: Linaro Android project / Linaro Confectionary release component](https://bugs.linaro.org/enter_bug.cgi?product=Linaro%20Android)


Support is on a “best effort” basis.
