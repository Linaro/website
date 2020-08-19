---
layout: post
title: Force Idle When a CPU Is Overheating
description: Some intensive tasks can necesitate the Linux kernel to cope with
  high temperatures. On embedded systems, passive cooling is mandatory to
  provide a way to cool down the CPUs if the Dynamic Voltage Frequency Scaling
  (DVFS) is not available. In this article Daniel Lezcano focuses on a new
  technique to cool down the CPUs.
date: 2020-08-19 01:01:31
image: /assets/images/content/chip_background_under_2mb.jpg
tags:
  - Linaro
  - Arm
  - CPU
  - Linux Kernel
  - dynamic voltage frequency scaling
  - DVFS
  - embedded
category: Blog
author: daniel.lezcano
---
### **Introduction**

The CPUs are more and more powerful. More powerful in terms of compute capacity but also in terms of heating power.

In the embedded world, especially in the ARM ecosystem for the mobile platform, the Linux kernel has to cope with the high temperatures some intensive tasks can lead a CPU to.

The thermal framework is the Linux kernel subsystem in charge of handling these too high temperatures.

A precedent article introduced on the main lines the thermal framework with the new netlink notifications where three actors handling the mitigation have been described. One of them, acting as a passive cooling device, is responsible for reducing the performance state.

That implies, the hardware is Dynamic Voltage Frequency Scaling (DVFS) capable and has a cpufreq driver built on top of it.

But what if the system does not have such a feature? Is there an alternative to passively cool down the CPU?