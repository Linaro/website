---
author: fathi.boudra
date: 2012-04-26 20:54:50+00:00
layout: post
link: /blog/releases-blog/linaro-toolchain-binaries-2012-04-released/
slug: linaro-toolchain-binaries-2012-04-released
title: Linaro Toolchain Binaries 2012.04 released
wordpress_id: 1604
categories:
- blog
tags:
- Releases
---

The Linaro Toolchain Working Group is pleased to announce the 2012.04 release of the Linaro Toolchain Binaries, a pre-built version of Linaro GCC and Linaro GDB that runs on generic Linux or Windows and targets the glibc Linaro Evaluation Build.

Uses include:

  * Cross compiling ARM applications from your laptop


  * Remote debugging


  * Build the Linux kernel for your board


What's included:

Linaro GCC 4.7 2012.04


  * Linaro GDB 7.4 2012.04


  * A statically linked gdbserver


  * A system root


  * Manuals under share/doc/


The system root contains the basic header files and libraries to link your programs against.

Interesting changes include:


  * Switches to the new GCC 4.7 based Linaro GCC


  * Adds native language support to most of the programs


  * Adds the mudflap, ssp, and gomp runtime libraries


  * Enables gnu_unique_object support in GCC


Please see the README about running 4.7 based programs on a system with 4.6 based runtime libraries.

The Linux version is supported on Ubuntu 10.04.3 and 11.10, Debian 6.0.2, Fedora 16, openSUSE 12.1, Red Hat Enterprise Linux Workstation 5.7 and later, and should run on any Linux Standard Base 3.0 compatible distribution.  Please see the README about running on x86_64 hosts.

The Windows version is supported on Windows XP Pro SP3, Windows Vista Business SP2, and Windows 7 Pro SP1.

The binaries and build scripts are available from:
[https://launchpad.net/linaro-toolchain-binaries/trunk/2012.04](https://launchpad.net/linaro-toolchain-binaries/trunk/2012.04)

Need help?  Ask a question on [https://ask.linaro.org/](https://ask.linaro.org/)

Already on Launchpad?  Submit a bug at
[https://bugs.launchpad.net/linaro-toolchain-binaries](https://bugs.launchpad.net/linaro-toolchain-binaries)

On IRC?  See us on #linaro on Freenode.
