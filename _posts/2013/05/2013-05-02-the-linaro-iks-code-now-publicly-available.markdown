---
author: fathi.boudra
date: 2013-05-02 05:51:27+00:00
layout: post
link: /blog/releases-blog/the-linaro-iks-code-now-publicly-available/
slug: the-linaro-iks-code-now-publicly-available
title: The Linaro IKS code now publicly available
wordpress_id: 2674
categories:
- blog
tags:
- Releases
---

We're delighted to announce that the Linaro Technical Steering Committee
has approved the release of the big.LITTLE in-kernel switcher (IKS) code
to the public.

So here it is:

Branch big.LITTLE-IKS-snapshot of
git://[git.linaro.org/landing-teams/working/arm/kernel.git](http://git.linaro.org/landing-teams/working/arm/kernel.git)

Although this is a snapshot of our latest IKS code, it still needs some
minor tidying before it is submitted upstream.  So please consider the
above as a temporary branch for people to look and play with, and not a
branch that we'll keep stable and maintain.

This code was also developed for and tested on the VExpress TC2
development platform.  An MCPM backend and possibly a special cpufreq
clock driver are required for this code to be usable on other platforms.

The switcher concept is discussed here:
[http://lwn.net/Articles/481055/](http://lwn.net/Articles/481055/)

Porting documentation is available here:
[https://wiki.linaro.org/projects/big.LITTLE.MP/Big.Little.Switcher/Docs/porting-guide](https://wiki.linaro.org/projects/big.LITTLE.MP/Big.Little.Switcher/Docs/porting-guide)

The switcher code description is available here (slightly out of date):
[https://wiki.linaro.org/projects/big.LITTLE.MP/Big.Little.Switcher/Docs/in-kernel-code](https://wiki.linaro.org/projects/big.LITTLE.MP/Big.Little.Switcher/Docs/in-kernel-code)

And a review of the MCPM layer upon which IKS and HMP rely:
[http://lwn.net/Articles/539082/](http://lwn.net/Articles/539082/)

The core MCPM patches are queued for inclusion into the v3.10 mainline
kernel.  The MCPM backend for TC2 and the IKS patches will tentatively
be submitted for v3.11.

_Originally posted to the [linaro-dev mailing list](http://lists.linaro.org/pipermail/linaro-dev/2013-May/015882.html) by [Nicolas Pitre](/about/) on Wed May 1 18:33:38 UTC 2013_
