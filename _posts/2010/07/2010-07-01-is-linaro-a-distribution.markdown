---
author: david.rusling
date: 2010-07-01 16:50:00+00:00
layout: post
link: /blog/community-blog/is-linaro-a-distribution/
slug: is-linaro-a-distribution
title: Is Linaro a Distribution?
wordpress_id: 4111
categories:
- blog
tags:
- Community
- arm
- distributions
- gnu
- kernel
- Linux
- release cycle
- software
- tools
---

As I talk to people about Linaro, I'm often asked if Linaro is a distribution.   This is, in some ways, an easy mistake to make as we talk about 'releases' and 'test heads'.   Not only that, pretty much all of the Linux® based organizations set up recently seem to be Linux distributions, vertical solutions for particular market segments.   Linaro is trying to achieve three things.   Firstly, Linaro wants to make sure that embedded Linux runs really well on ARM based systems, taking advantage of all of their hardware.   Secondly, it wants to ensure that ARM based platforms are fully supported in the latest, up to date, Linux kernel tree at kernel.org.    These first two aims are, in themselves, highly useful and you can see how that maps onto the various working groups that have been set up and their blueprints, bug fixes and so on.   The third, and final aim, is that any and all Linux distributions make use of Linaro's outputs.  In other words, Linaro is not a distribution; instead it is attempting to add value and support many distributions.   Think of Linaro as horizontal, not vertical.

In order for distributions to take Linaro's outputs, we need some collaboration and alignment and this is where Kiko and I have been spending a lot of our time.   Both before Linaro was launched and now as it is becoming the engineering organization that we dreamed of.    Based on many industry discussions we are creating deliverables such as GCC 4.4.4 and 4.5 that will be useful to distributions this autumn and next spring.    We're aiming to be ahead of the distributions, creating stable components that can be pulled into a distribution early in its development cycle.

<!-- more -->

Distributions can choose to take the outputs of Linaro in many ways.  They could take the results of Linaro's engineering from the stable releases of the upstream open source projects.   It may, however, take a long while for support to find its way into a stable upstream release.   As an example, any improvements to GCC will not be released by the FSF until spring 2011 as part of the GCC 4.6 release.    Many distributions will wait for 4.6 to stabilize before taking it.   In other words, they'll stick with 4.5 until around 4.5.3 before taking 4.6.1 or 4.6.2.   This is one of the reasons that Linaro is creating local stable releases of software (the other is so that we can test the software and tools).  Distributions may take these code bases as built binaries or as source trees; whatever mechanism suits them.

So, how do we test the Linaro components?     This is where the notion of 'test heads' comes in.   Our initial test head is a small test image known as AEL (ARM Embedded Linux).   This style of test platform is commonly used within silicon providers and is usually ported and run before mainstream distributions are ported to a platform.    Think of it as the core components needed by a distribution.   Within Linaro we will use AEL to make sure that the toolchain, kernel and middleware are stable and functional but may also choose to test against larger distributions to continuously improve the quality of our engineering output.    The level of testing will be sufficient for device manufacturers and distributions to take Linaro components and base their developments on it.
