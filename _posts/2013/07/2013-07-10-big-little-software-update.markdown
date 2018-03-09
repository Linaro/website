---
author: george.grey
categories:
- blog
date: 2013-07-10 15:19:12
description: "Progress report on Linaro\xE2\x80\x99s activities and plans for support
  of ARM\xE2\x80\x99s big.LITTLE SoCs with Linux and Android software."
keywords: Linaro, Linux on ARM, Linux, ARM, Open Source, big.LITTLE, Android, Cortex-A7,
  Cortex-A15, Kernel
layout: post
link: /blog/hardware-update/big-little-software-update/
slug: big-little-software-update
tags:
- Hardware
title: big.LITTLE Software Update
wordpress_id: 2821
---

With much going on in the big.LITTLE world, this is a progress report on Linaro’s activities and plans for support of ARM’s big.LITTLE SoCs with Linux and Android software. With recent industry announcements, we are expecting many big.LITTLE SoCs to appear from ARM licensees over the coming quarters.


## Current Status as at end of H1 2013

There are at least two member products shipping with SoC implementations of big.LITTLE to date:

  * ARM’s reference Test Chip 2 (TC2) tile for the Versatile Express development platform, configured as an SoC with 2 Cortex-A15 cores and 3 Cortex-A7 cores

  * Samsung-LSI’s 8 core SoC found in some versions of the Galaxy S4 phone, configured with 4 Cortex-A15 cores and 4 Cortex-A7 cores 

There are also two software models now available, that ARM and Linaro have developed to enable control of workloads, performance, and power management on big.LITTLE SoCs.

## IKS - In Kernel Switcher (also known as CPU Migration)

The first is the IKS software, developed by Linaro, that treats each pair of Cortex-A7 and Cortex-A15 cores as a single ‘virtual’ core. On a multicore SoC each pair is treated as 1 of n virtual symmetric cores by the Linux kernel.

**Core Software Configuration for IKS (4+4)**

{% include image.html name="Pic1.jpg" alt="Core Software Configuration Pic 1"%}

Using existing mechanisms in the Linux kernel for each pair the cpufreq driver controls whether the Cortex-A7 is active (for low power) or the Cortex-A15 is active (for maximum performance). Overall maximum performance and throughput on a 4+4 core SoC is from 4 Cortex-A15s. The key attribute of IKS is that it relies on existing well-understood mechanisms in the Linux kernel and it is easy to implement, test and characterize in a production environment.

## Global Task Scheduling (also known as big.LITTLE MP)

The second is the Global Task Scheduling (GTS) software developed (and now named) by ARM. This is known in Linaro as big.LITTLE MP. Using GTS all of the big and LITTLE cores are available to the Linux kernel for scheduling tasks. We are very proud that Linaro has contributed to ARM’s development of the GTS software, and that it is now publicly available in Linaro builds. ARM and Linaro recommend GTS for new products, and Linaro members are actively planning product deployments using this solution.

**Core Software Configuration for GTS (4+4)**

{% include image.html name="Pic2.jpg" alt="Pic2" %}

The key benefits of GTS over IKS are:

  * Finer grained control of workloads that are migrated between cores. Because the scheduler is directly migrating tasks between cores, kernel overhead is reduced and power savings can be correspondingly increased.

  * Implementation in the scheduler also makes switching decisions faster than in the cpufreq framework, and ARM have reported around 10% improvements in performance/watt over IKS on a range of benchmarks.
  
  * The ability to easily support non-symmetrical SoCs (e.g. with 2 Cortex-A15 cores and 4 Cortex-A7 cores)
  
  * The ability to use all cores simultaneously to provide improved peak performance throughput of the SoC compared to IKS.

The big.LITTLE MP patch set creates a list of Cortex-A15 and Cortex-A7 cores that is used to pick the target core for a particular task. Then, using runnable load average statistics, the Linux scheduler is modified to track the average load of each task, and to migrate tasks to the best core. High intensity tasks are migrated to the Cortex-A15 core(s) and are also marked as high intensity tasks for more efficient future allocations.  Low intensity tasks remain resident on the Cortex-A7 core(s).

## Availability

IKS and GTS are now publicly available in Linaro monthly engineering releases for the ARM TC2 Versatile Express hardware, and in Linaro’s interim Long Term Supported Kernel (LSK) build. Both will also be incorporated into the first full Linaro LSK, which will be based on the next Linux Foundation, Greg Kroah-Hartman designated, Long Term Supported (LTS) kernel.

## Upstreaming

The IKS solution and the principles of GTS are being actively reviewed by kernel maintainers for delivery upstream. We expect that the IKS functionality will be available in the upstream kernel within the next few kernel release cycles. For GTS, ARM and Linaro’s goal is to have support in the upstream kernel as soon as possible. Because this code affects the scheduler, many kernel maintainers outside the ARM community are involved. This is a positive sign, as Greg Kroah-Hartman and Jon Corbet discussed at the last Linaro Connect. It means that ARM (and Linaro where we can help) need to make sure that the changes meet with acceptance from the wider kernel community.

Recent postings on the Linux Kernel Mailing List (LKML) are encouraging and suggest that a possible path forward has been agreed. It is not yet possible to determine exactly how long this will take, but we at Linaro are hopeful that there will be a fully upstreamed GTS implementation within the next few quarters. This is not a unique challenge. Linaro faced a similar situation two years ago when we were introducing DeviceTree for the ARM architecture – we maintained the functionality as a patch set until such time as it was ready for acceptance by the upstream community.

Until GTS functionality is fully upstream, ARM is supporting the big.LITTLE MP patch set for its licensees, leveraging Linaro’s public monthly and Linaro LSK builds, so that it is available to all ARM licensees for product integration and deployment. Linaro also expect to provide a topic branch for the latest work available on the upstream GTS implementation for interested developers.

## Comparison Between IKS and GTS

The following table shows a simple feature comparison between IKS and MP

{% include image.html name="IKS_GTS_q212_es.jpg" alt="IKS_GTS_q212_es" %}

As stated above, ARM and Linaro now recommend product development and deployment to be based on the GTS solution. However, there are some cases where hardware limitations or a requirement for the traditional Linux scheduler (for example in some embedded applications) may lead to IKS still being required.

## Future Work

Power management software in Linaro is worked on by the Power Management Working Group. Other activities within the Group will enable additional power savings on ARM multi-core devices. One current project worth highlighting is the work being done by Vincent Guittot on small-task packing. Normally the Linux kernel will spread running tasks over all the available CPU cores. On a handset in standby, or even when being used with low activity, there may be a number of housekeeping and other small tasks that run in the background or relatively infrequently and therefore keep cores active unnecessarily. If “small” tasks can be migrated to one core, then the other cores could be made idle or even turned off completely, potentially resulting in significant power savings. This feature is expected to offer improved power management to systems based on symmetric multi-core SoCs (for example dual or quad-core Cortex-A7 or Cortex-A15 parts), as well as big.LITTLE SoCs.

While the current big.LITTLE efforts are focused on Cortex-A15 and Cortex-A7, the techniques being implemented today for 32-bit systems are already being run on 64-bit models. We therefore expect to see the GTS software running on 64-bit Cortex-A57 and Cortex-A53 based big.LITTLE SoCs as soon as they become available.

## Real Life Results

ARM has published further information on big.LITTLE configurations and performance in a blog entry [here](http://blogs.arm.com/soc-design/1009-ten-things-to-know-about-biglittle)

The first commercial products based on big.LITTLE are certain international versions of the latest Galaxy S4 phone from Linaro member, Samsung. Samsung-LSI provide an ‘Octa-core’ 4+4 big.LITTLE chip for this phone. As has been publicly noted, the current generation of hardware cannot yet take full advantage of the IKS or the GTS designs because the hardware power-saving core switching feature is implemented on a cluster basis rather than on a per-core or a per-pair basis. Even so, the first big.LITTLE implementation produces performance and power consumption on a par with the latest Qualcomm multi-core Snapdragon processor according to reviews from Engadget, PocketNow and others. Often first implementations of new technology never see the light of day – it is a tribute to Samsung’s engineers that the Exynos 5 is already seeing the Cortex-A15 level of performance with the power saving of the Cortex-A7s in a mass market handset in the very first big.LITTLE iteration.

We look forward to seeing what improvements full use of GTS will bring when used on future production devices from Samsung and others.