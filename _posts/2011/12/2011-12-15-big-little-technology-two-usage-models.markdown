---
author: david.rusling
categories:
- blog
date: 2011-12-15 23:26:18
description: Discussion on the big.LITTLE technology announced by ARM in October and
  the two usage models.
keywords: Linaro, linux kernel, ARM Linux, Linux, tools, kernel, linux on ARM, open
  source, software, distribution, philosophy, ARM, kernel linux, linux software, ARM
  Cortex-A9, Cortex, Android, Ubuntu, big.LITTLE
layout: post
link: /blog/hardware-update/big-little-technology-two-usage-models/
slug: big-little-technology-two-usage-models
tags:
- Hardware
title: big.LITTLE Technology - Two Usage Models
wordpress_id: 1077
---

ARM announced its big.LITTLE technology on 19th October and Linaro were invited to participate in both the London and San Francisco launches. It is interesting technology, with two clusters of Cortex ARMv7 architecture cores (Cortex-A15 and Cortex-A7) joined together via a coherent interconnect. ARM has proposed two usage models, task migration and MP.

In the task migration model, either the cluster of Cortex-A15 cores or the cluster of Cortex-A7 cores is executing the system and its tasks at any given time. Both clusters have the same instruction set and view of the system and the caches are coherent. Migrating the system and its applications means moving the processor state between clusters. The amount of state is relatively small and scales with the number of cores in the cluster. This transfer of tasks is achieved via the switcher software which resides in hypervisor mode. The switcher also has the job of hiding the small number of programmer’s model differences between the Cortex-A15 and Cortex-A7. The task migration model makes sense where there is the same number of cores in each cluster. Having a different number of cores would complicate the switcher software, essentially adding virtualization functionality into it. One way of thinking of the task migration model is to consider it as an overlapping set of power states, with the Cortex-A7 providing the lower power set and the Cortex-A15 providing the higher power set. The standard Linux power management framework can be used to initiate task migration via a device driver that transfers control to the switcher software. The software to implement this model does not require significant OS changes, and is relatively self-contained and testable. Time to market considerations lead us to expect that early products are likely to use this model.

In the big.LITTLE MP model, all of the big.LITTLE cores, Cortex-A15 and Cortex-A7, are operating as part of a single instance of the Linux kernel. In this case, Linux is scheduling tasks on the most appropriate cores. This presents a challenge as, whilst Linux supports SMP, the kernel does not have the concept of clusters of CPUs with different power and performance characteristics. The requirements include flexibly migrating tasks and powering off cores. This mode could be further complicated by using a virtualization layer supporting several VMs of possibly varying CPU topologies. The kernel side of this work fits with the Power Management working group’s mandate and will be investigated within that team. Making this scale of change to the kernel’s scheduler will take a lot of effort, particularly in the areas of validation and benchmarking. It will also require coordinated influence from the ARM Linux community.

In both cases the boot architecture needs to ensure that appropriate software is loaded into the hypervisor at boot time, be it switcher code or virtualisation software such as KVM, before control is passed to the Linux kernel. Coordinating several layers of software is difficult and time consuming and any fragmentation here will only cause bugs and delay products. Getting big.LITTLE right is a challenge for Linaro and its members. Linaro will work with all interested members, including with ARM themselves, to support open source software on big.LITTLE as quickly as possible, to enable member products to get to market in the earliest possible timeframe.