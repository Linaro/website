---
author: george.grey
categories:
- blog
date: 2011-11-01 14:45:07
description: Discussion on the latest developments within Linaro
keywords: Linaro, Arm, Linux kernel, Linux, kernel, Arm SOCs, opensource, Arm Cortex,
  big.LITTLE
layout: post
link: /blog/october-ceo-report/
slug: october-ceo-report
title: October CEO Report
wordpress_id: 756
---

With the advent of the Cortex-A15, Arm CPU cores have become considerably more powerful, and despite Arm’s flagship SoC MIPS/watt ratings, the increasing number of MIPs inevitably also requires an increasing amount of Watts. Despite remaining the low power industry leaders, the next generation of Arm processors will literally be hotter than the last.

This has a number of implications. In order to maintain battery life in smartphones and other portable devices both software and hardware will need to be further tuned and optimized for power management. In addition a thermal management framework is required to enable on SoC monitoring of core temperature, in order to provide the OS the ability to take action when the device temperature rises. Action could involve lowering clock frequency, or idling one or more cores in a multicore SoC.

Linaro’s Power Management Working Group is focused on exactly these issues. This is a good example of the benefit of Linaro – not only do our members share the development cost of creating the thermal framework for power management in Arm SoC Linux implementations through working in Linaro, but also a single upstreamed framework emerges, eliminating fragmentation, simplifying distribution’s work, and minimizing future porting and maintenance costs.

Recently, Linaro was part of [the San Francisco launch panel](http://www.arm.com/about/newsroom/arm-unveils-its-most-energy-efficient-application-processor-ever-with-biglittle-processing.php) as Arm announced the new Cortex-A7 core, which is not only the basis of a powerful single or multi-core SoC in its own right, but can also be paired with Cortex-A15 cores in a scheme Arm have dubbed big.LITTLE. When system load is beneath a certain threshold the A7 cores can be used for power efficiency, but when performance is required the load can be switched to A15 cores on the same SoC. This can happen transparently to the OS in as little as 20uS.

It is likely that switcher software provided by Arm to handle the A7/A15 switch transparent to the OS will be used by many applications; in others we believe that SoC users will want to implement big.LITTLE functionality in the OS itself. Linaro plans to work with Arm and our SoC partner members on both scenarios to ensure that our members have a choice of open source solutions on which to base their products.

As Arm introduces these innovative new cores Linaro’s mission is to enable our members to develop common frameworks to take advantage of the new architectural features in the core Arm platform including the upstream Linux kernel, and to avoid the fragmentation that has historically delayed product time to market. We look forward to helping our members derive the maximum value from their investment into these new products.