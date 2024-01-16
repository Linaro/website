---
layout: post
title: Linaro Engineering Highlights | October 2020
description: October's Engineering highlights include an overview of the new Arm
  Devsummit and Linaro's contributions for the Linux Kernel 5.9. Read more here.
date: 2020-11-13 01:15:35
image: /assets/images/content/iot_planet_under_2mb.jpg
tags:
  - Linaro
  - Engineering Highlights
  - Linux Kernel
category: blog
author: jon.burcham@linaro.org
---

## 2020 Arm DevSummit

{% include image.html path="/assets/images/content/simon-segars.jpg" class="small-inline left" alt="Simon Segars - Arm CEO image" %}

For 2020, Arm retooled its fall conference to be more developer oriented as Arm DevSummit. With the recent news that Nvidia is acquiring Arm, the keynote by Arm CEO Simon Segars and fireside chat with both Simon Segars and Nvidia CEO Jensen Huang provided an opportunity to comment on the potential benefits of an Arm - Nvidia partnership.

{% include image.html path="/assets/images/content/jenson-haung.jpg" class="small-inline right" alt="Jenson Huang - Nvidia CEO image" %}

Both CEO’s endorsed Linaro as partners in Open Source work now and in the future. Mark Hambleton, Arm Vice President of Open Source Software, reinforced this view in his keynote titled “The Software Side of Arm”.

Linaro engineers and collaborators contributed 15 sessions (https://devsummit.arm.com/agenda/?search=Linaro#/) including:

- Paul Isaacs’ , Director LDCG, HPC-SIG “Beyond ML – A Neuromorphic Approach to AI”
- Ilias Apalodimas, LEDGE Tech Lead “LEDGE Reference Platform: Architecture and Generic Kernel Image”
- François-Frédéric Ozog, Director LEDGE, “Linux as Firmware: LinuxBoot on Arm”
- Kevin Townsend, LITE Engineer “Secure Devices With TF-M and Zephyr”
- Tom Gall, Director LCG and AI/ML “uTVM, an AI Compiler for Arm Microcontrollers”
- David Koenen, Sr. Product Manager, Arm “Network, DC and HPC Development with Scalable Development and CXL
- Neil Trevett, VP Developer Ecosystems and Khronos President, NVIDIA “Khronos Open Standards for Accelerating Interactive Experiences
- Dong Wei, Arm Fellow, Arm “Making Arm Devices “Just Work!”
- Lloyd Watts, CEO, Neocortix, Inc.”Distributed Computing COVID-19 Vaccine Research on Arm Devices”
- Ilias Apalodimas, LEDGE Tech Lead “Securing an EBBR Compliant Arm Platform”
- Kevin Zhao, Tech Lead, LDCG and Xinliang Liu, Senior Engineer, LDCG “Kubernetes as a Service – Open Source Cloud on Arm64”

Videos of the session are available through November 23, 2020 to registered attendees.

## Linaro Top Contributor To Linux Test Project (LTP)

{% include image.html path="/assets/images/content/linux-kernel-security.png" class="small-inline left" alt="linux-kernel-security image" %}

Viresh Kumar from the Kernel Working Group (KWG) has been addressing missing syscalls in the Linux Test Project activity since October 2019, contributing 108 commits to date.
Major areas of work during the previous year have included:

- Support added for following (12+) syscalls: pidfd_open, io_pgetevents, fsmount, fsopen, fsconfig, fsmount, move_mount, fspick, open_tree, openat2, pidfd_send_signal, clone3.
- 64bit timespec support added for following (25+) syscalls: clock_gettime64, clock_settime64, clock_adjtime64, clock_getres_time64, clock_nanosleep_time64, timer_gettime64, timer_settime64, timerfd_gettime64, timerfd_settime64, utimensat_time64, pselect6_time64, ppoll_time64, io_pgetevents_time64, recvmmsg_time64, mq_timedsend_time64, mq_timedreceive_time64, semtimedop_time64, rt_sigtimedwait_time64, futex_time64, sched_rr_get_interval_time64, ppoll_time64 and more.

During this work, a lot of cleanup was requested by maintainers. These additional tasks were combined with the tests that were being extended to improve the overall test suite. All this work resulted in Linaro again featuring in the top contributors list.

- 3rd position in May release: <https://lwn.net/Articles/820636/>
- 2nd position in September release: <https://lwn.net/Articles/833136/>

## Linaro Retains Top Ten position for Linux Kernel 5.9 contributions

Linaro ranked as the 5th largest contributor by changesets in Linux 5.9 \[1]:

**By Changesets**

| (None)       | 1377    | 9.3%     |
| ------------ | ------- | -------- |
| Intel        | 1336    | 9.0%     |
| Red Hat      | 1006    | 6.8%     |
| (Unknown)    | 895     | 6.0%     |
| AMD          | 848     | 5.7%     |
| **Linaro**   | **842** | **5.7%** |
| Google       | 662     | 4.5%     |
| SUSE         | 554     | 3.7%     |
| (Consultant) | 504     | 3.4%     |
| IBM          | 478     | 3.2%     |

Linaro’s position was driven by a prodigious 520 changesets from Lee Jones (Developer Services) who was the most prolific contributor to 5.9.

**By Changesets**

| **Lee Jones**        | **520** | **3.5%** |
| -------------------- | ------- | -------- |
| Christoph Hellwig    | 292     | 2.0%     |
| Randy Dunlap         | 261     | 1.8%     |
| Alexander A. Klimov  | 187     | 1.3%     |
| Ben Skeggs           | 137     | 0.9%     |
| Chris Wilson         | 135     | 0.9%     |
| Laurent Pinchart     | 135     | 0.9%     |
| Evan Quan            | 113     | 0.8%     |
| Pierre-Louis Bossart | 113     | 0.8%     |
| Gustavo A. R. Silva  | 110     | 0.7%     |

Even by lines changed, which is a less useful metric, Linaro was 10th

**By Lines Changes**

| AMD        | 243874    | 29.4%    |
| ---------- | --------- | -------- |
| Intel      | 56635     | 6.8%     |
| Red Hat    | 39347     | 4.8%     |
| IBM        | 35658     | 4.3%     |
| (None)     | 30232     | 3.7%     |
| Google     | 29715     | 3.6%     |
| (Unknown)  | 29421     | 3.6%     |
| Mellanox   | 24149     | 2.9%     |
| Facebook   | 22410     | 2.7%     |
| **Linaro** | **19271** | **2.3%** |

Increasingly, Linaro’s involvement in testing is also reaching the spotlight. Naresh Kamboju from the Kernel Validation team (KV) achieved the 6th spot as a reporter of issues. It has to be pointed out that the top three spots are taken by bots that can churn out impressive numbers of reports. LKFT has aspirations to reach into this bot territory.

**Reported By**

| kernel test robot  | 169 | 17.1% |
| ------------------ | --- | ----- |
| Syzbot             | 91  | 9.2%  |
| Hulk Robot         | 67  | 6.8%  |
| Dan Carpenter      | 23  | 2.3%  |
| Stephen Rothwell   | 17  | 1.7%  |
| Naresh Kamboju     | 16  | 1.6%  |
| Randy Dunlap       | 16  | 1.6%  |
| Lars-Peter Clausen | 13  | 1.3%  |
| Qian Cai           | 12  | 1.2%  |
| Colin Ian King     | 8   | 0.8%  |

\[1] <https://lwn.net/Articles/834085/> Jonathan Corbet

## Accelerating libcamera Qcam format conversion using OpenGL shaders

**By Show Liu, MultiMedia Working Group (MMWG), Socionext**

{% include image.html path="/assets/images/content/pi-lib-camera.png" class="small-inline left" alt="libcamera image" %}

[Libcamera](https://libcamera.org/) is an open source friendly camera stack and userspace library. It provides an intuitive API and methods to control the complexity of camera hardware for multiple platforms. The “qcam” application is one of the builtin example programs in libcamera to demonstrate how to handle the cameras using the libcamera APIs. It is a Qt based GUI application that provides camera preview and capture functions. Qcam builds the pipeline using the libcamera pipeline handler. The pipeline handler will generate the configuration for the camera and also set the pixel format and the resolution for the camera stream. In the case of the Rock Pi 4B(Rockchip RK3399) platform with Sony imx219 sensor, the pixel format will be set to YUV “NV12” format before starting the capture. After starting the capture, qcam grabs the frames from the camera sensor according to the configuration.

To display the “NV12” format frames in Qt framework, it needs to be converted to RGBA pixel format which is then rendered by the Qpainter component. However the default CPU software conversion is not very efficient. For example when doing the conversion on the CPU of a RockPi4B which has a RK3399 SoC, we get the following framerates in QCam:

Capture frame size set to **640 x 480**, the frame rate is around **13.4x** fps.

Capture frame size set to **1280 x 720**, the frame rate is around **4.5x** fps.

Capture frame size set to **1920 x 1080**, the frame rate is even down to around **2.0x fps**.

As libcamera is helping to solve a longstanding pain point in the Linux ecosystem (the management of complex cameras), Linaro decided to contribute to accelerating Qcam so we can have a much more performant demo of libcamera based stack on some of the platforms Linaro cares most about. Moving these heavy loading tasks to the GPU would be more efficient and there are already lots of examples about sharing the loading with the GPU that can be referenced.

It also has the nice property of resulting in a demo that combines the great advances made in libcamera with the progress that has also happened in [Mesa](https://gitlab.freedesktop.org/mesa/mesa/) project on the Gallium Panfrost driver.

To enable the OpenGL support for “qcam”, the QOpenGLWidget, QOpenGLFunctions and QOpenGLShaderProgram 3 main Qt OpenGL components would be added to handle the OpenGL format convert and frame rendering. The new class is inherited from QOpenGLWidget and QOpenGLFunctions.

And in this new class, reimplement the initializeGL(), resizeGL() and paintGL() 3 virtual functions that provided by QOpenGLWidget.

**initializeGL()** : Sets up the OpenGL resources and state.

**resizeGL()** : Sets up the OpenGL viewport, projection, etc.

**paintGL()** : Renders the OpenGL scene.

See our upcoming blog post for more detail on what was implemented in these apis, but the code has already been merged into libcamera git tree. Interested readers can refer to the following commits in libcamera repo

- <https://git.linuxtv.org/libcamera.git/commit/?id=4a4a3e715b8314c56a2a32788d92fdec464af7b7>
- <https://git.linuxtv.org/libcamera.git/commit/?id=2daa704c968c8aa7a4b209450f228b41e9d42d85>
- <https://git.linuxtv.org/libcamera.git/commit/?id=9db6ce0ba499eba53db236558d783a4ff7aa3896>
- <https://git.linuxtv.org/libcamera.git/commit/?id=219cbfe76b5a7d9d8206c71aa6115ff8befcff9b>

The result of moving the format conversion onto the GPU, is that the qcam frame rate improved a lot. On RockPi4b platform the frame rate now reaches **30.0x** fps with the capture resolution set to **1920x1080**.

## Linaro Linux Plumbers reports

{% include image.html path="/assets/images/content/linux-plumbers-conference.png" class="small-inline left" alt="Linux Plumbers Conference icon" %}Ten engineers from Linaro participated in LPC, hosting micro conferences or presenting topics for discussion.

#### Scheduler Fairness Micro Conference

Vincent presented an update about the fairness problem of the cfs load balancer.

There are cases which can't be statically balanced and need dynamic and smarter tasks migration to ensure same running time for all tasks (according to their nice priority). After describing a typical problem where the unfairness can reach more than 40%, Vincent described multiple root cause of the unfairness: [Watch recording](https://youtu.be/UQNOT20aCEg)

## Android Micro Conference

The summary of the Android Micro Conference was published in the [September 2020 Engineering Highlights.](https://www.linaro.org/blog/linaro-engineering-highlights-september-2020/)

## DMA BUF Heap Transition in AOSP

**By John Stultz, LCG**

{% include image.html path="/assets/images/content/LCG.png" class="small-inline left" alt="LCG icon" %}

With the DMA BUF Heaps interface (designed to replace ION) now upstream, work is quickly happening to migrate both AOSP and vendor ION usage and heap implementations to DMA BUF Heaps. The ION framework, originally written by Rebecca Schultz Zavin, was one of the early-ish (~2010) components of the Android patchset and it provided a way for userspace to allocate memory buffers that would be efficiently shared between multiple devices. The primary benefit of this overother DRM device allocators was the idea that userspace best understands the path of a buffer through the system. For example one buffer might be used for a camera pipeline:

Camera->ISP->GPU->Display

Whereas another might simply be an image displayed by an application:

CPU->GPU->Display

The trouble is each of the devices in the pipeline may have different constraints: A display may only be able to use contiguous memory buffers, or an ISP may only be able to address 32bits of memory directly. No single device driver understands the possible paths a buffer might take, so the drivers also cannot understand the constraints that devices in the path may have. But if one wants to share a single buffer between all the devices in the pipeline, one needs to make sure it satisfies all the constraints of that pipeline. The ION approach left it up to userland (using the device specific gralloc library) to understand the constraints of various pipelines on a device that a buffer may be used for, and thus it could allocate from a specific ION heap that satisfied those constraints.

Rebecca was also involved in the early discussions around creating DMA BUF, a generic fd-based handle to a memory buffer, and ION was one of the first users of DMA BUFs when they landed upstream. ION was later added to staging in 2013, and in the years following Laura Abbott maintained it and worked to address issues that the community had with its design. Unfortunately vendors using ION were not very active in working with the community on ION, so it was difficult as upstream changes were made by the community for vendors to keep in sync. Some upstream changes caused ABI breaks (which is allowable in staging as part of upstreaming), which later caused vendor pain. But instead of participating in finding a good upstream solution, often vendors just reverted upstream changes and shipped older versions of ION in their products.

Then in early 2019, Andrew Davis started a push to clean up some of the outstanding issues, and I joined in. Rather than changing the ION interface, and causing another ABI break, we introduced a new interface: DMA BUF Heaps.

The implementation was very minimal. Part of the problem with ION was that it did a lot of things in core infrastructure, and getting the community to agree on all of it was difficult. So we just focused on the allocation interface. This meant, rather than having a lot of common heap logic implemented in the ION core, the DMA BUF heap drivers were fully responsible for their implementations, only sharing the allocation interface.

Also, instead of having one chardev and specifying which heap to allocate via a heap-mask or heap-id, we instead went with the idea of simplifying it further and having one chardev per heap. This allows for better access-control using sepolicy(instead of having to provide a blanket permission to /dev/ion), avoids any limitations in the number of possible heaps (originally ION was limited to 32 heaps), and allows for more descriptive naming then simple enumeration. This also is helpful as with ION many vendors used the same heap-id number for very different heaps, making userland implementations incompatible. Further we avoid having to create a heap querying interface, and can simply use the directory file names for discovery.

Andrew also implemented two initial heap drivers: the system heap and a CMA (contiguous memory area) heap. This mapped very closely to the ION heaps in staging, but were greatly simplified to help with community review. This did mean some of the optimizations done in both the ION infrastructure as well as in the ION system heap driver were dropped. This included uncached buffers, large page allocation, page pooling and deferred freeing. The CMA heap was closer, but only added the default CMA region rather than adding all CMA regions (as some drivers expect exclusive management of their region, so exporting it to userland might break those assumptions).

After many cycles of submission and rework the patches were finally merged in Linux v5.6. At that point, we started efforts to migrate ION users to DMA BUF Heaps. The HiKey and HiKey960 gralloc implementations in AOSP were first to switch over from the ION implementation to DMA BUF Heaps. Then Hridya Valsaraju at Google implemented a helper library called [libdmabufheap](https://android.googlesource.com/platform/system/memory/libdmabufheap/) which provides helper functions for userland to allocate from DMA BUF Heaps as well as supporting compatibility mappings to ION Heaps, so the same code can work on both newer kernels with DMA BUF Heaps as well as older kernels with ION.

However, one area that was blocking immediately getting rid of ION upstream was that the codec2 media framework in AOSP was directly using ION, and without it the system could not even boot. With Hridya’s help, we implemented a new DMA BUF Heap allocator backend for codec2, along with further changes to libdmabufheap as well as other parts of the Android system, and after a number of review and rework cycles, the patches were merged, breaking AOSP from its hard dependency on ION.

AOSP being able to boot and function properly without ION is a big milestone! And with patches to remove ION from the staging directory in the upstream kernel are already queued to land in v5.11, the migration from ION to DMA BUF Heaps is in full swing, and vendors are already starting to port their ION heaps over to DMA BUF Heaps. However, as the upstreamed DMA BUF Heaps was in many ways simpler then ION, there are still some outstanding features that are missing that we’re working to address.

Patches to provide an uncached-system heap, along with large-page allocation, and other cleanups have already been [submitted upstream for review](https://lore.kernel.org/lkml/20201017013255.43568-1-john.stultz@linaro.org/). Deferred-freeing and page-pooling are still TODOs for the system heap, with the key benefit of the deferred freeing and page pooling being pushing the work of zeroing buffers off into a non performance critical codepath.

Related to that, there has been some interest in heaps that completely avoid zeroing buffers. Now it would be a very bad idea to pass a buffer to userland that hasn’t been initialized, but zeroing buffers that userland immediately passes to a device to fill is quite wasteful. This is a major tradeoff with the DMA BUF Heaps design, as drivers that allocate their own memory can quickly allocate an uninitialized buffer and have the device fill it before passing it to userspace. Whereas if userland allocates the memory, we must clear the buffer so they don’t accidentally get access to stale kernel or other process data. Thus having some way to allocate buffers which may never be userland accessible(similar to some secure heap implementations) or finding some way to lazily zero uninitialized buffers only when userland tries to first access it would be very useful.

Hridya Valsaraju has also been working on patches to enable better DMA BUF tracking and accounting statistics. This will help vendors to better be able to debug issues, as when sharing lots of buffers it is easy to lose track of things and waste memory.

Additionally functionality like [exposing multiple CMA heaps](https://lore.kernel.org/lkml/1594948208-4739-1-git-send-email-hayashi.kunihiko@socionext.com/) have been submitted upstream by Kunihiko Hayashi. Additional changes to enable [heaps as modules](https://lore.kernel.org/lkml/20191025234834.28214-1-john.stultz@linaro.org/) have also been submitted upstream. But with both of these changes, we don’t yet have any upstream users of such functionality, so for now these must stay out of tree, and are likely to be carried in the Android kernel until vendors can submit their heaps upstream.

Additional changes to provide in-kernel allocator accessors have been included in the Android tree to match ION’s functionality. However there is still some question as to if this is really a valid use case. This is because if a driver is using an in-kernel interface to allocate a DMA BUF, it is inherently constraining the use of that buffer, as it is not aware of where that buffer may go next. At the same time, it seems silly to have every driver re-implement a DMA BUF exporter in order to provide DMA BUFs to userland, so being able to share existing heap implementations may be reasonable. But again, we need to see the driver implementations using those interfaces being pushed upstream before any such functionality could be included into mainline.

ION is quickly fading into the sunset, but there is still a fair amount of work to do on DMA BUF Heaps. A common theme here is that we need more participation upstream from vendors on DMA BUF Heaps. Without active input and code submissions upstream from vendors using the interfaces, we do not have a sense of what changes are important for this new subsystem. There is a risk that changes made on a theoretical basis could result in practical performance issues on devices, causing additional work for vendors adapting to the new functionality. I’d like to avoid that, but we need to hear from vendors upstream on what is working and what isn’t. Further, we are limited to what we can push upstream by what upstream users we enable. For this reason we very much need to have active vendor participation upstream, directly submitting changes, new heaps, and users of such code to the list.
