---
author: linaro
categories:
- blog
date: 2012-01-12 00:03:27
description: "UMM (Unified Memory Management) is a key part of Linaro\xE2\x80\x99s
  work and acceptance of this dma-buf patchset upstream is the latest recognition
  of Linaro\xE2\x80\x99s contributions to the Linux kernel."
keywords: Linaro, Linux on ARM, Linaro Connect, 3.3 Linux Kernel,  dma_buf, Open Source
layout: post
link: /blog/patch-highlights/linaros-emphasis-on-dma_buf-in-the-3-3-linux-kernel/
slug: linaros-emphasis-on-dma_buf-in-the-3-3-linux-kernel
tags:
- dma_buf
- Patch-Highlights
- kernel
- Linaro
- Linaro Connect
- Linux on ARM
- Open Source
title: Linaro's Emphasis on dma_buf in the 3.3 Linux Kernel
wordpress_id: 1162
---

[Jesse Barker](https://launchpad.net/~jesse-barker), [Graphics WG (Working Group)](https://wiki.linaro.org/WorkingGroups/Middleware/Graphics) Tech Lead for Linaro shares with readers the importance and challenges in getting dma_buf inclusion for 3.3 Linux Kernel.

Back in April, as we—a collective group of hardware vendors, software vendors, kernel developers and maintainers from across many areas of the Linux community—were preparing for the memory management mini-summit at Linaro Connect (still called Linaro Developer Summit at the time), and later during the event itself, identified three main areas within the kernel that would need explicit attention, if our "holy grail" use case of a zero-copy video to graphics to display pipeline were to be realized. There were user-space API considerations as well; however, we needed to focus on the kernel first.

First, we needed to address the requirement of devices that lack an [IOMMU](http://en.wikipedia.org/wiki/IOMMU) (input/output memory management unit) for large physically contiguous memory allocations for [DMA](http://en.wikipedia.org/wiki/Direct_memory_access) (direct memory management) operations.  Primarily, but not exclusively, these are video devices like cameras.  The result of the [Budapest summit](https://wiki.linaro.org/Events/2011-05-LDS) was to move forward with Samsung's [Contiguous Memory Allocator,](http://lwn.net/Articles/447405/) (CMA). At present, CMA is at version 18 with one more technical hurdle to overcome (an issue identified in recent testing).  We hope to see this merged into the kernel for 3.4.

Next, we needed for the ARM architecture to achieve parity with the other CPU architectures supported by Linux with respect to the [DMA-mapping API](https://www.kernel.org/doc/Documentation/DMA-API-HOWTO.txt).  These are the Linux kernel's internal interfaces that enable device drivers to control DMA operations and ARM hardware has some uncommon pathologies in this area due to cache coherency and issues with IOMMUs.  Version 5 of this work is currently out for review.

Last, but not least, we needed a way for device drivers within the kernel to "share" buffers, that is to have the same buffer mapped for access by multiple devices.  This is the crux of the zero-copy pipeline.  The core piece of this mechanism is a kernel data structure called "struct dma_buf" which gives device drivers the interfaces they need to negotiate this sharing.  Version 3 of the initial proposal for the basic plumbing (much more functionality is needed to fully support something like a modern GPU driver) was recently integrated into [Dave Airlie's DRM tree](http://lists.freedesktop.org/archives/dri-devel/2012-January/017984.html) and pulled into [Linus Torvalds' kernel tree](http://lists.freedesktop.org/archives/dri-devel/2012-January/018029.html) for 3.3 of the Linux kernel.  As Airlie’s pull request suggests, the key here is to enable in-tree development for the device driver developers to make sure that as dma_buf grows to support all of the bells and whistles of various devices, it does so in a sane and coherent fashion.

[UMM](https://blueprints.launchpad.net/linaro-mm-sig) (Unified Memory Management) is a key part of Linaro’s work and acceptance of this dma-buf patchset upstream is the latest recognition of Linaro’s contributions to the Linux kernel.

Engineers interested in finding out more about this work or how you can get involved with Linaro may want to join the [linaro-mm-sig](http://lists.linaro.org/mailman/listinfo/linaro-mm-sig) and[ linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev) mailing lists and the #linaro-mm-sig and #linaro IRC Channels on freenode. In addition to these resources please visit the [Linaro Wiki](https://wiki.linaro.org/OfficeofCTO/MemoryManagement/ReleaseInfo) and [blueprints](https://blueprints.launchpad.net/linaro-mm-sig). **You are also invited to join us at our next [Linaro Connect](http://connect.linaro.org/resources/), 6-10 February at the Sofitel Hotel, Redwood City, California.**