---
layout: post
title: DMA BUF Heap Transition in AOSP
description: >
  In this article, John Stultz takes a detailed look at the DMA BUF Heaps interface that is designed to replace ION. Read about his findings here!
date: 2020-11-17 03:44:32
image: /assets/images/content/tech_background__under_2mb.jpg
tags:
  - Android
  - DMA BUF Heaps
  - ION
related_projects: []
category: blog
author: john.stultz
---

## DMA BUF Heaps to replace ION

With the DMA BUF Heaps interface (designed to replace ION) now upstream, work is quickly happening to migrate both AOSP and vendor ION usage and heap implementations to DMA BUF Heaps.

The ION framework, originally written by Rebecca Schultz Zavin, was one of the early (~2010) components of the Android patchset and it provided a way for userspace to allocate memory buffers that would be efficiently shared between multiple devices. The primary benefit of this over other DRM device allocators was the idea that userspace best understands the path of a buffer through the system. For example one buffer might be used for a camera pipeline:

Camera->ISP->GPU->Display

Whereas another might simply be an image displayed by an application:

CPU->GPU->Display

The trouble is each of the devices in the pipeline may have different constraints: A display may only be able to use contiguous memory buffers, or an ISP may only be able to address 32bits of memory directly. No single device driver understands the possible paths a buffer might take, so the drivers also cannot understand the constraints that devices in the path may have. But if one wants to share a single buffer between all the devices in the pipeline, one needs to make sure it satisfies all the constraints of that pipeline. The ION approach left it up to userland (using the device specific gralloc library) to understand the constraints of various pipelines on a device that a buffer may be used for, and thus it could allocate from a specific ION heap that satisfied those constraints.

Rebecca was also involved in the early discussions around creating DMA BUF, a generic fd-based handle to a memory buffer, and ION was one of the first users of DMA BUFs when they landed upstream. ION was later added to staging in 2013, and in the following years Laura Abbott maintained it and worked to address issues that the community had with its design. Unfortunately, vendors using ION were not very active in working with the community on ION, so it was difficult as upstream changes were made by the community for vendors to keep in sync. Some upstream changes caused ABI breaks (which is allowable in staging as part of upstreaming), which later caused vendor pain. But instead of participating in finding a good upstream solution, often vendors just reverted upstream changes and shipped older versions of ION in their products.

## New Interface - DMA BUF Heaps

Then in early 2019, Andrew Davis started a push to clean up some of the outstanding issues, and I joined in. Rather than changing the ION interface, and causing another ABI break, we introduced a new interface: DMA BUF Heaps.

The implementation was very minimal. Part of the problem with ION was that it did a lot of things in core infrastructure, and getting the community to agree on all of it was difficult. So we just focused on the allocation interface. This meant, rather than having a lot of common heap logic implemented in the ION core, the DMA BUF heap drivers were fully responsible for their implementations, only sharing the allocation interface.

Also, instead of having one chardev and specifying which heap to allocate via a heap-mask or heap-id, we instead went with the idea of simplifying it further and having one chardev per heap. This allows for better access-control using sepolicy (instead of having to provide a blanket permission to /dev/ion), avoids any limitations in the number of possible heaps (originally ION was limited to 32 heaps), and allows for more descriptive naming than simple enumeration. This also is helpful as with ION many vendors used the same heap-id number for very different heaps, making userland implementations incompatible. Further we avoid having to create a heap querying interface, and can simply use the directory file names for discovery.

Andrew also implemented two initial heap drivers: the system heap and a CMA (contiguous memory area) heap. This mapped very closely to the ION heaps in staging, but were greatly simplified to help with community review. This did mean some of the optimizations done in both the ION infrastructure as well as in the ION system heap driver were dropped. This included uncached buffers, large page allocation, page pooling and deferred freeing. The CMA heap was closer, but only added the default CMA region rather than adding all CMA regions (as some drivers expect exclusive management of their region, so exporting it to userland might break those assumptions).

## Migrating ION users to DMA BUF Heaps

After many cycles of submission and rework the patches were finally merged in Linux v5.6. At that point, we started efforts to migrate ION users to DMA BUF Heaps. The HiKey and HiKey960 gralloc implementations in AOSP were first to switch over from the ION implementation to DMA BUF Heaps. Then Hridya Valsaraju at Google implemented a helper library called [libdmabufheap](https://android.googlesource.com/platform/system/memory/libdmabufheap/) which provides helper functions for userland to allocate from DMA BUF Heaps as well as supporting compatibility mappings to ION Heaps, so the same code can work on both newer kernels with DMA BUF Heaps as well as older kernels with ION.

However, one area that was blocking the immediate removal of ION upstream was that the codec2 media framework in AOSP was directly using ION, and without it the system could not even boot. With Hridya’s help, we implemented a new DMA BUF Heap allocator backend for codec2, along with further changes to libdmabufheap as well as other parts of the Android system, and after a number of review and rework cycles, the patches were merged, breaking AOSP from its hard dependency on ION.

AOSP being able to boot and function properly without ION is a big milestone! And with patches to remove ION from the staging directory in the upstream kernel are already queued to land in v5.11, the migration from ION to DMA BUF Heaps is in full swing, and vendors are already starting to port their ION heaps over to DMA BUF Heaps. However, as the upstreamed DMA BUF Heaps was in many ways simpler then ION, there are still some outstanding features that are missing that we’re working to address.

Patches by Linaro to provide an uncached-system heap, along with large-page allocation, and other cleanups have already been [submitted upstream for review](https://lore.kernel.org/lkml/20201017013255.43568-1-john.stultz@linaro.org/). Deferred-freeing and page-pooling are still TODOs for the system heap, with the key benefit of the deferred freeing and page pooling being pushing the work of zeroing buffers off into a non performance critical codepath.

## Zeroing buffers

Related to that, there has been some interest in heaps that completely avoid zeroing buffers. Now it would be a very bad idea to pass a buffer to userland that hasn’t been initialized, but zeroing buffers that userland immediately passes to a device to fill is quite wasteful. This is a major tradeoff with the DMA BUF Heaps design, as drivers that allocate their own memory can quickly allocate an uninitialized buffer and have the device fill it before passing it to userspace. Whereas, if userland allocates the memory, we must clear the buffer so they don’t accidentally get access to stale kernel or other process data. Thus having some way to allocate buffers which may never be userland accessible (similar to some secure heap implementations) or finding some way to lazily zero uninitialized buffers only when userland tries to first access it would be very useful.

Hridya Valsaraju has also been working on patches to enable better DMA BUF tracking and accounting statistics. This will help vendors to better be able to debug issues, as when sharing lots of buffers it is easy to lose track of things and waste memory.

Additionally functionality like [exposing multiple CMA heaps](https://lore.kernel.org/lkml/1594948208-4739-1-git-send-email-hayashi.kunihiko@socionext.com/) have been submitted upstream by Kunihiko Hayashi. Additional changes to enable [heaps as modules](https://lore.kernel.org/lkml/20191025234834.28214-1-john.stultz@linaro.org/) have also been submitted upstream. But with both of these changes, we don’t yet have any upstream users of such functionality, so for now these must stay out of tree, and are likely to be carried in the Android kernel until vendors can submit their heaps upstream.

Additional changes to provide in-kernel allocator accessors have been included in the Android tree to match ION’s functionality. However, there is still some question as to if this is really a valid use case. This is because if a driver is using an in-kernel interface to allocate a DMA BUF, it is inherently constraining the use of that buffer, as it is not aware of where that buffer may go next. At the same time, it seems silly to have every driver re-implement a DMA BUF exporter in order to provide DMA BUFs to userland, so being able to share existing heap implementations may be reasonable. But again, we need to see the driver implementations using those interfaces being pushed upstream before any such functionality could be included into mainline.

## Participation from vendors on DMA BUF Heaps

ION is quickly fading into the sunset, but there is still a fair amount of work to do on DMA BUF Heaps. A common theme here is that we need more participation upstream from vendors on DMA BUF Heaps. Without active input and code submissions upstream from vendors using the interfaces, we do not have a sense of what changes are important for this new subsystem. There is a risk that changes made on a theoretical basis could result in practical performance issues on devices, causing additional work for vendors adapting to the new functionality. I’d like to avoid that, but we need to hear from vendors upstream on what is working and what isn’t. Further, we are limited to what we can push upstream by what upstream users we enable. For this reason, we very much need to have active vendor participation upstream, directly submitting changes, new heaps, and users of such code to the list.

## About the Author

John is a developer in the Linaro Consumer Group, focusing on getting Android functionality upstream into the mainline Linux Kernel. He has also been working to support devboards like the HiKey960 and Dragonboard 845c in AOSP.
