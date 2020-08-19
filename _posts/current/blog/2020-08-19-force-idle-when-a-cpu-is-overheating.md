---
layout: post
title: Force Idle When a CPU Is Overheating
description: Some intensive tasks can necesitate the Linux kernel to cope with
  high temperatures. On embedded systems, passive cooling is mandatory to
  provide a way to cool down the CPUs if the Dynamic Voltage Frequency Scaling
  (DVFS) is not available. In this article Daniel Lezcano focuses on a new
  technique to cool down the CPUs.
date: 2020-08-19T01:01:31.000Z
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
## **Introduction**

The CPUs are more and more powerful. More powerful in terms of compute capacity but also in terms of heating power.

In the embedded world, especially in the ARM ecosystem for the mobile platform, the Linux kernel has to cope with the high temperatures some intensive tasks can lead a CPU to.

The thermal framework is the Linux kernel subsystem in charge of handling these too high temperatures.

A precedent article introduced on the main lines the thermal framework with the new netlink notifications where three actors handling the mitigation have been described. One of them, acting as a passive cooling device, is responsible for reducing the performance state.

That implies, the hardware is [Dynamic Voltage Frequency Scaling](https://en.wikipedia.org/wiki/Power_management#DVFS) (DVFS) capable and has a cpufreq driver built on top of it.

But what if the system does not have such a feature? Is there an alternative to passively cool down the CPU?

## DVFS cooling consideration

The Dynamic Voltage Frequency Scaling hardware is a power management technique to adapt the performance of a CPU given its usage. The performance states are discrete values called “Operating Performance Point” or OPP representing a t-uple <frequency, voltage>, usually platforms provide less than ten states because the stability must be validated for each OPP on each device, it is time consuming and time is money.

The power saving is done by undervolting the CPU, the frequency is the maximum speed at the given voltage. A frequency scaling without dynamic voltage does not bring any power saving as at the end the cost in energy is the same: only the duration changes for the same amount of operations.

A kernel governor is in charge of changing the states, today the schedutil governor prevails because it is directly tied to the [“per entity load tracking” (PELT)](https://lwn.net/Articles/531853/) signal, a polynomial decay on the CPU usage.

The transition states are very fast, less than 1ms, so the scheduler can accommodate the performance state changes in the PELT signal update.

The performance states power consumption are based on the formula:

{% include image.html path="/assets/images/content/formula.png" alt="Formula; Power - C x freq x V2" %}

The symbol C is the capacitance, a constant depending on the technology,freqis the frequency in Hertz andVis the voltage. To ensure the stability of the system, when the frequency is increased, the voltage must follow and as this one is squared, the resulting power consumption is quadratic as shown in the figure below for a ARM64 dev board:

{% include image.html path="/assets/images/content/power-consumption.png" alt="Power Consumption charts"

The first plot shows the power consumption is exponentially increasing with the frequency, while on the second plot in the first row shows the compute capacity is linear, the ratio of the power vs the compute capacity is shown in the third plot and we can see that the efficiency is getting worse with the higher frequencies. The fourth plot shows the temperature behavior regarding a run of dhrystone at each OPPs, and the highest OPP triggers the mitigation resulting in a longer compute duration because of thousands of transitions per seconds reducing the compute capacity.

As a consequence, the heating effect is the highest when the last OPP is used and, as stated above, that is when the CPU is 100% in use for a long period of time.

The mitigation happens when the thermal framework reduces the OPP while the cpufreq governor requests for a higher OPP. These two decisions are aggregated through the frequency QoS and the thermal framework always wins.

The cooling effect is immediate when the OPP is reduced from the highest to the one below and as the transitions are very fast, that makes an efficient passive cooling device. 

The next figure illustrates that by showing two Hisilicon development boards with a very different thermal profile and how the mitigation acts on the temperature to keep it close to the 75°C threshold. The ‘dhrystone’ benchmark was used to make the boards warm and then ended its execution close to the 40th second for the hi3660 and to the 55th for the hi6220. Please note that the profile is based on the development boards and does not reflect the end-user packaging with the form factor which can behave very differently.
