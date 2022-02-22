---
layout: post
title: Force Idle When a CPU Is Overheating
description: In this article we focus on a new technique to cool down the CPUs
  to help avoid overheating.
date: 2020-09-18 11:22:11+00:00
image: /assets/images/content/chip_background_under_2mb.jpg
tags:
  - Linaro
  - Arm
  - CPU
  - Linux Kernel
  - Embedded
  - PELT
related_projects:
  - PERF
category: blog
author: daniel.lezcano
---
## About the Kernel Working Group

The Kernel Working Group’s (KWG) primary focus is to be an active contributor to the upstream community and facilitate acceptance of our code into the Linux mainline kernel. Our goal is kernel consolidation - a single source tree with integrated support for multiple Arm SoCs and Arm-based platforms.

## Introduction

Today’s CPUs are more and more powerful. More powerful in terms of compute capacity, but also in terms of heat creation.

In the embedded world, especially in the ARM ecosystem for the mobile platform, the Linux kernel has to cope with the high temperatures created by processor intensive tasks that can lead a CPU to overheat. The thermal framework is the Linux kernel subsystem in charge of handling these use cases.

The thermal framework and its components were briefly presented in a previous [blog.](https://www.linaro.org/blog/thermal-notifications-with-netlink/) One of the components leveraged to provide improved performance in processor intensive tasks is a passive cooling device, a software component, based on performance state changes. That implies the hardware is [DVFS](https://en.wikipedia.org/wiki/Power_management#DVFS) capable and has a cpufreq driver built on top of it. But what if the system does not have such a feature? Is there an alternative to passively cool down the CPU?

### DVFS cooling consideration

The Dynamic Voltage Frequency Scaling hardware is a power management technique to adapt the performance of a CPU given its usage. The performance states are discrete values called “Operating Performance Point” or OPP. OPPs represent a t-uple <frequency, voltage>, and usually provide platforms with less than ten states because the stability must be validated for each OPP on each device. Validation is time consuming and can become costly.

Additional power savings is found by undervolting the CPU. The frequency selected in this case is the maximum speed at the given voltage. Frequency scaling without dynamic voltage does not bring any power savings because in the end the cost in energy is the same: only the duration changes for the same amount of operations.

With DVFS, a kernel governor is in charge of changing the states. Today the schedutil governor prevails because it is directly tied to the [“per entity load tracking” (PELT)](https://lwn.net/Articles/531853/) signal, a polynomial decay on the CPU usage.

The transition states are very fast (less than 1ms) so the scheduler can accommodate the performance state changes in the PELT signal update.

Each performance states power consumption is based on the formula:

{% include image.html path="/assets/images/content/formula.png" alt="Power = C x freq x V squared" %}

The symbol C is the capacitance, a constant depending on the technology, freq is the frequency in Hertz and V is the voltage. To ensure the stability of the system, when the frequency is increased the voltage must also increase, and since voltage is squared, the resulting power consumption is quadratic as shown in the figure below for an ARM64 dev board:

{% include image.html path="/assets/images/content/power-consumption.png" alt="Power Consumption chart" %}

The first plot shows that power consumption is exponentially increasing with frequency, while the second plot in the first row shows that the compute capacity is linear. The ratio of the power vs the compute capacity is shown in the third plot where we can see that the efficiency is getting worse with the higher frequencies. The fourth plot shows the temperature behavior regarding a run of dhrystone at each OPP, and the highest OPP triggers the mitigation resulting in a longer compute duration because thousands of transitions per seconds reduce the compute capacity.

As a consequence, the heating effect is the highest when the last OPP is used and, as stated above, that is when the CPU is 100% in use for a long period of time.

Mitigation begins when the thermal framework reduces the OPP while the cpufreq governor requests for a higher OPP. These two decisions are aggregated through the frequency Quality of Service (QoS) and the thermal framework always wins.

The cooling effect is immediate when the OPP is reduced from the highest to the next highest level and as the transitions are very fast, that supports the use of an efficient passive cooling device.

By showing two Hisilicon development boards with very different thermal profiles, the next figure illustrates how the mitigation controls the temperature to keep it close to the 75°C threshold. The ‘dhrystone’ benchmark was used to make the boards warm and then ended its execution close to the 40th second for the hi3660 and to the 55th for the hi6220. Please note that the profile is based on the development boards and does not reflect the end-user packaging with the form factor which can behave very differently.

{% include image.html path="/assets/images/content/development-board-thermal-profile.png" alt="development board thermal profile graph" %}

The noticeable behavior is the sawtooth aspect of the temperature curves when the mitigation is activated, confirming the immediate impact of the OPP change on the heat.

It is important to understand how the mitigation has an impact on the performance, so if the cooling effect is high when reducing one OPP, additional power capacity is attained for the next quantum of time to run at a higher OPP.

Unfortunately some platforms do not have DVFS, or the voltage domain can be shared across different devices, so if one of these devices is in use it will prevent the DVFS to undervolt the performance domain. Thus the cooling effect won’t be as efficient as described above and in the end the mitigation will fail. This leads to a hard system reboot, instability or crash; in other words a non functioning device.

### Power down the CPU when it does nothing

If the DVFS technique allows power saving dynamically when the CPU is in use, what happens when the CPU is idle?

At boot time, the system spawns per CPU permanent tasks at the lowest priority with a dedicated infinite loop entering and exiting a CPU idle routine. As the task is the last one to be executed due to its low priority, it will result in the CPU going to an idle routine to save energy.

During this pause, the CPU can cool down.

When an interrupt occurs on the CPU, this CPU exits the idle routine and schedules itself out. The wakeup process resulting from the interrupt is handled by the hardware.

There can be different idle routines classified by their power consumption:

* Clock gating: the CPU voltage is untouched but the clock is stopped, that is the fastest idle routine to sleep and wake up, requiring less than 1us for each. But this routine has the highest power consumption. That is what the WFI instruction does on the ARM systems
* CPU retention: the clock is stopped while the voltage is the minimum viable voltage to keep the CPU logic consistent. The power saving is better than the Clock Gating scenario above, but the wakeup is a bit longer. This idle routine does not work as effectively with recent boards having a lot of cores because the CPU is woken up by the cache coherency hardware which decreases the power saving
* CPU power down: the clock is stopped, the voltage is zero, the cache is flushed, it is out of cache coherency and the context is saved. It takes a longer time to enter this state and wake up, the kernel literally boots the CPU, but the power saving is at its maximum as the consumption is close to zero
* Power domain down: if all the CPUs belonging to the same power domain are powered down, then the rest of the logic used by those CPUs can be shut down as well. Even more power is saved on the system at the cost of a higher latency for the wakeup.

The idle routine selection is determined by an idle governor which does some statistics on the previous events to try to predict when the next wakeup will occur and choose the most convenient idle state.

The idle task is the last one to be run and it will just enter an idle routine, but there is an exception where the CPU is forced to enter this idle routine. The [suspend-to-idle](https://www.linaro.org/blog/suspend-to-idle/) is a feature allowing the framework to put the entire system into a retention state providing a high power saving but, compared to the hibernate, taking much less time to wake up.

In order to put the CPU in a power down state, a specific routine has been implemented to force the current CPU to enter an idle state.

### Idle injection to cool down the CPUs

On embedded systems, passive cooling is mandatory and it’s critical to provide a way to cool down the CPUs if the DVFS is not available.

We described the DVFS cooling device and the idle routines, now we have enough material to understand idle injection.

A new technique to cool down the CPUs has been introduced which resulted in an idle cooling device. The principle is to inject a constant idle period during runtime in order to create duty cycles. This allows power to be reduced linearly.

The duty cycle is based on the period forced by the fixed idle duration. That means, for a 10ms idle duration, a 50% duty cycle will result in 10ms of runtime, 33% of duty cycle will result in 20ms of runtime.

Assuming the idle transitions are free, if the CPU is consuming 1000mW, 50% duty cycle will result in half of the power consumption, 500mw. The reality is a bit different as the idle transitions have a cost in terms of energy, so powering down the CPU requires energy. Thus a power consumption of 650mW for a 50% duty cycle is closer to what is actually happening. Strictly speaking, the idle injection cooling device may be considered as an active cooling device rather than a passive one, but that is a subject of debate which is out of the scope of this article.

Please note that the duty cycle logic is inverted in our case as it is based on the idle duration, not the runtime.

{% include image.html path="/assets/images/content/duty-cycle.png" alt="Duty Cycle chart" %}

The advantage of a duty cycle approach is that we have clear boundaries for the cooling device minimal and maximal states. Obviously, the minimal is zero meaning there is no mitigation and the maximal is 100, which means the CPU is always idle. Semantically, it makes sense as if the mitigation has to increase the cooling effect by incrementing the state, reaching 100 means the system is trying to do its best to cool down the CPU. Actually, we never observed a value above 55 in the worst case scenario.

The following figure shows a capture of the kernel traces over a short time frame:

{% include image.html path="/assets/images/content/kernel-traces.png" alt="Kernel Traces graph" %}

Even if the CPUs are independently managed by the idle injection, in this case the thermal framework grouped them for the same cooling device,it results in synchronously going idle increasing the chances for a power domain shut down.

The idle injection framework allows a latency constraint, so the idle routine having a wakeup latency greater than the latency constraint will be ignored, that is a way to prevent an inefficient idle routine.

The following graphs show a comparison between the DVFS and the idle injection techniques as cooling devices with dhrystone workloads running on 10 seconds burst. The first row shows the temperature on a half second sampling, the second row shows the cooling device state. For the DVFS, it represents how many states we decrease from the highest OPP while the idle injection states show the duty cycle percentage.

{% include image.html path="/assets/images/content/dvfs-idle-injection-comparision.png" alt="comparison between the DVFS and the idle injection charts" %}

The cooling states on the left of the figures represent the index values of the different steps the cooling device, a software component, is using for the cooling effect. For example, a on/off fan will have 1 state while a 7 OPPs capable CPU will have 7 states. The cooling states number is an arbitrary value to choose the level of the cooling effect and depends on the implementation.

We can observe that the shape of the figures are similar with a more stable temperature resulting from the idle injection, thus proving the mitigation is effective. However the latency introduced by the idle injection will impact the performances much more than the OPP changes would have.

### Conclusion

The DVFS based cooling device technique is accurate and efficient. Unfortunately it is not available on all platforms or can fail if the voltage domain is shared with other devices.

The idle injection based cooling device is a bit more accurate than the DVFS technique but at the cost of introducing additional latency.

If the platform is using a shared voltage domain, the idle injection and the DVFS cooling devices can be used together. When the voltage domain can be changed, the DVFS cooling device will act as expected, but when the voltage domain is locked, the cooling will fail and the temperature will continue to increase, in this case another threshold can be connected to the idle injection cooling device and this one will act as a backup.

The thermal framework has a new software based cooling device doing idle injection for the ARM systems. The embedded devices, mobile and automotive, can now rely on it to make the most convenient setup for their system.

For more information on the work Linaro does, get intouch through [our contact page](https://www.linaro.org/contact/).