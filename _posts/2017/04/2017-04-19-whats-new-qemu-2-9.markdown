---
author: alex.bennee
date: 2017-04-19 16:46:38+00:00
layout: post
link: /blog/core-dump/whats-new-qemu-2-9/
slug: whats-new-qemu-2-9
title: What's new in QEMU 2.9
wordpress_id: 12315
categories:
- blog
tags:
- Core Dump
- qemu
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" %}

QEMU is an interesting multi-faceted open source project. It is a standard component for the Linux virtualisation stack, used by both the KVM and Xen hypervisors for device emulation. Thanks to its dynamic just-in-time recompilation engine known as the Tiny Code Generator (TCG) it is also capable of emulating other architectures on a number of hosts. This takes the form of either a full system emulation or the lighter weight user-mode emulation that allows foreign user-space binaries to be run alongside the rest of the host system.

Started in 2003 by [Fabrice Bellard](https://en.wikipedia.org/wiki/Fabrice_Bellard) QEMU is now maintained by a community of mostly corporate sponsored engineers, although unaffiliated individuals are still the second largest set of contributors. The projects [codebase has continued to grow](https://www.openhub.net/p/qemu) over the years and it now has reached the point of making around 3 stable releases a year, typically one in April, August and December.

Linaro engineers takes an active part in development and maintenance of the project and we thought it would be useful provide an update on ARM related features in the up-coming [2.9 release](http://wiki.qemu-project.org/index.php/ChangeLog/2.9).

## 1 AArch64 EL2 Support for TCG

Building on previous work to enable EL3 (the secure CPU mode provided by the security extensions as part of TrustZone) we now fully support the hypervisor CPU exception level EL2. As most ARM hypervisors require support for virtualization in the interrupt controller as well, and since we only support the virtualization extensions in our emulated GICv3 (not GICv2), users who want to run hypervisors in the emulated AArch64 machine using EL2 must so far select a GICv3 interrupt controller for the emulated machine.


```bash
    qemu-system-aarch64 ${QEMU_OPTS} \
      -machine gic-version=3 \
      -machine virtualization=true
```

This is especially useful if you want to debug 64-bit ARM hypervisor and often developers don't have access to AArch64 hardware while traveling or attending conference.

While it is still slow compared to running KVM on real hardware, it is convenient for testing EL2 code on a developers desktop with the power of the GDB stub. QEMU is often used extensively for automated testing and CI, and supporting hypervisors inside emulated environments is crucial for supporting CI on ARM using commodity x86 hardware. With the introduction of MTTCG (see next section), this even scales for multi-core and can be used to discover SMP-related race conditions.


## 2 Multi-threaded TCG for System Emulation

Previously system emulation in QEMU has been single-threaded - with a single host thread emulating all the guest’s vCPUs. As many-core SMP-systems are more and more commonplace, this has slowly become more of a bottleneck in QEMU's performance. The multi-threaded TCG project (also known as MTTCG) is the culmination of several years of shared effort between commercial, community and academic contributors. Linaro is proud to be heavily involved in coding, reviewing, and helping get this feature accepted upstream.

While the work has focused on system emulation a number of the updates have also had benefits for the rest of TCG emulation including the efficient QHT translation-cache lookup algorithm and completely overhauling how TCG deals with emulating atomic operations. If you are interested in a more detailed write-up of the technical choices made we wrote an [article for LWN last year.](https://lwn.net/Articles/697265/)

This work finally removes the single-threaded bottlenecks from system emulation, but it is not a performance panacea. As long as you have unused CPU cores on your host machine you should see performance improvement for each new vCPU you add to your guest up until around 8 cores. At that point the cost of keeping the system behaviour coherent will eventually catch-up with you.

The core technology on which MTTCG relies is target agnostic and designed so all the various architectures QEMU emulates can take advantage of it. However each front-end needs to make changes to their emulation to ensure they take advantage of the new TCG facilities for modelling atomic and barrier operations.

Currently MTTCG is enabled by default for both 32 and 64 bit ARM chips as well as the Alpha architecture when running on an x8664 host. This is by far the most common use case for ARM emulation.

## 3 Cortex M fixes


In the last few years Linaro has been mostly concentrating on the A-profile (Application profile) ARM processors. These are the ones designed to run full-stack operating systems like Linux. With the growing interest in Internet of Things (IoT), we are starting to turn our attention to the M-profile (Microcontroller). The Microcontroller profile processors are targeted at much more constrained low-latency, and low-power deeply embedded applications. Their memory is usually measured in kilobytes (kB) rather than megabytes (MB) so they tend to run custom run-loops or highly constrained real-time operating systems (RTOS) like [Zephyr](https://www.zephyrproject.org/).

While QEMU nominally supports the Cortex-M3 processor, support for boards using it has been sporadic and the result is a situation where there have been long standing un-fixed bugs and important features missing. As the architecture has progressed support for the newer M-profile CPUs has also lagged.
The 2.9 release sees a number of fixes to the Cortex-M series emulation as we ramp up our efforts to improve QEMU's microcontroller support. The fixes have so far been aimed at architectural aspects which were known to be broken, such as the NVIC emulation. However part of the discussion at our recent [BUD17 session](https://connect.linaro.org/resource/bud17/bud17-221/) was looking at what features we should prioritise for future QEMU releases. And we are currently focusing on getting MPU support upstream and supporting v8m.

This summary is not intended to be exhaustive and has concentrated on ARM specific features. For example we have not covered updates to the common sub-systems shared by all architectures. For those interested in all the details, the [full changelog](http://wiki.qemu.org/ChangeLog/2.9) is worth a read.

{% include media.html media_url="https://youtu.be/4MKXWM0koGw" %}

* * *

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/vAVCMSPoB3KzS7" %}


