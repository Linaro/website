---
author: john.stultz
categories:
- blog
comments: true
date: 2015-07-13 22:24:39
description: On Jan 19th 2038, the number of seconds since the Unix Epoc (Jan 1st
  1970) will be larger than can be held in a signed 32-bit value. This means on 32-bit
  systems time will overflow and jump back to 1901.
excerpt: 'On Jan 19th 2038, the number of seconds since the Unix Epoc (Jan 1st 1970)
  will be larger than can be held in a signed 32-bit value. This means on 32-bit systems
  time will overflow and jump back to 1901.  Read about this issue and what is being
  done to get ready.  '
layout: post
link: /blog/core-dump/twenty-three-years-and-counting-down/
slug: twenty-three-years-and-counting-down
tags:
- Core Dump
- 32-bit systems
- epoc
- Linux
- unix
- y2038
title: Twenty three years and counting down
wordpress_id: 8971
---

For most of us, life keeps us busy enough that just planning for the weekend can be difficult, and plotting plans for anything past six months out is rarely more detailed than a hand wave.

If fact, much of our work is focused on the ever changing. Product lifecycles have shortened. Where one might keep using a telephone for a decade (or more) before, now waiting for a two year contract to expire so one can upgrade seems like far too long for many. So investing lots time on detailed plans for the uncertain future is foolish endeavor for those without a time machine.

But some far out events can be expected and responsibly planned for. Weather will wear on our houses, and roofs will need to be replaced. Children will grow and (with luck) will need money for college. We will get too old to work and will have to retire. It is all mostly mundane: life will likely continue on much as it has, but some day there will be an urgent need, and if we plan, those needs can hopefully be met.

**The [y2038 issue](https://en.wikipedia.org/wiki/Year_2038_problem) is one of those items. On Jan 19th 2038*, the number of seconds since the Unix Epoc (Jan 1st 1970) will be larger than can be held in a signed 32-bit value. This means on 32-bit systems time will overflow and jump back to 1901. This is very similar to “Y2K” for 32-bit Unix/Posix systems.**

To most, twenty three years in the future is an unimaginably long way out. More than half of most of our careers, and longer than some kernel developers have been alive! Why fret now? Surely the world will have moved to 64-bit systems by then! Twenty three years is plenty of time to fix things!

This may be true, but it is not a matter of just getting a solution in place on the eve of Jan 19th 2038*.

As processing power and RAM gets cheaper and physically smaller, many use cases that conventionally used specialized tiny microcontrollers, are using more general purpose 32-bit SoCs, and using Linux for their OS.

So there are devices that are being built today, and used for things like industrial control, infrastructure monitoring, security and fire systems, or even satellites, which will likely have 20-some year lifespans. These embedded systems (potentially literally embedded in walls) may not have networking infrastructure for automated updates, making it particularly difficult to audit or even locate problematic systems.

Additionally, for many of these use cases, the hardware and software are quite old before they’re even deployed. I’ve heard of a case recently where natural gas pipeline sensors are being deployed today on tried-and-true hardware with 32 megs of RAM running 2.4 based kernels. So any solution created today, may very well take a decade to be rolled out in production. So there is an urgency to having a solution soon, so that devices that are developed in the near (or even not so near) future can avoid premature (and possibly catastrophic) failure.

For the last year a number of folks, lead mostly by Arnd Bergmann, both inside Linaro and in the external community have been working on addressing y2038 limitations in the Linux kernel.

Unfortunately it is not as easy as just re-defining time_t as a 64-bit value and rebuilding everything. A key tenet of Linux development is that we do not break existing userspace applications. We cannot help that existing 32-bit applications will be terminally broken in 2038, but we will try to keep them working until that point. In the meantime we need to create a path so that 32-bit applications can be rebuilt to support 64-bit time on 32-bit architectures.

Initial work has been to create new internal 64-bit time types, which can be used to replace 32-bit representations in the kernel. And new internal time interfaces have been created to allow drivers and other kernel internal users of time to transition to the 64-bit types. The kernel timekeeping core has been reworked, so now the kernel doesn’t crash immediately after y2038. And now most of the work is focused on iterating through the kernel’s 19.5 million lines of code, subsystem by subsystem, driver by driver and converting time usage to address the issue.

Fixing kernel internal usage is just part of the solution. Userspace needs to make a transition too. Arnd has also started efforts on how we will expose these 64-bit time types to userspace. The current plan is to introduce a minimal set of new syscalls which libcs can use to provide expected syscall behavior. Then applications can be recompiled with a build flag to specify if the userspace time type is 32-bit or 64-bit. If folks are interested, his git tree is:

[http://git.kernel.org/cgit/linux/kernel/git/arnd/playground.git/log/?h=y2038-syscalls](http://git.kernel.org/cgit/linux/kernel/git/arnd/playground.git/log/?h=y2038-syscalls)

There are also a number of non-syscall interfaces to userspace that will need to be address. IOCTLs being one of the more complex. For most cases, we can provide new ioctl numbers to support the new 64-bit types, applications that are recompiled will get the new ioctl number, while legacy applications will still use the old 32-bit type. In some cases, where the ioctl numbers weren’t exposed in a way that supports compat ioctls, it will get more complex, but those are hopefully rare, as they’d already be problematic for 32-bit compatibility on 64-bit systems.

Further we have issues with things like filesystems which use 32-bit on-disk representations for time, or network protocols that also use 32-bit time representations on the wire. These problems aren’t just limited to 32-bit systems, as these same problematic protocols and formats are used on 64-bit systems as well. So the oft suggested “just move to 64-bits” solution won’t address all issues. In these cases, those protocols and formats will likely have to be deprecated and new ones implemented or extensions or hacks created to allow time representations past y2038.

Additionally, when all this work is done, and the kernel has no more y2038 issues, there will still be tons of problems in how userspace applications handle time that will need to be addressed. Thus in order for those cases to be resolved, application developers will need a stable kernel and system environment to test against to validate their applications. This is another reason why twenty three years really isn’t very long.

The y2038 issue is a big problem, which must be chipped away little by little. While much of the needed changes are somewhat mundane, the process is not something that can be automated, since we have to carefully preserve existing userspace ABI, and use an iterative approach so dependencies can be resolved one at a time, and we don’t have patches that require changes to 3 different subsystems at once (allowing for proper review from each subsystem maintainer). Additionally time usage by drivers is often non-optimally done, so this is a good chance to clean up and improve drivers along the way.

With so much work to be done, in very small steps, across every subsystem and driver in the kernel, the y2038 effort makes for a particularly good ramp-up task for folks who are new to the kernel community and are wanting to grow as contributors. It allows them to be exposed to and become familiar with a variety of different drivers and subsystems. Submitting patches to a number of different maintainers (who may be more or less receptive and helpful) helps familiarize them with key names and personalities. It also introduces them to the social aspect the kernel community (and may inform decisions about which subsystems the developers will want to work on in the future). And since it covers so much area in the kernel, many people can be working on the effort independently without stepping on each-others toes.

If you’re interested in helping out with the effort, mailing list info and archives can be found here: [https://lists.linaro.org/mailman/listinfo/y2038](https://lists.linaro.org/mailman/listinfo/y2038)

And the wiki page for the effort is here: [http://kernelnewbies.org/y2038](http://kernelnewbies.org/y2038)

_*Please excuse our typo in the original version. The correct date should be January 19, 2038._