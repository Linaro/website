---
layout: post
title: Using Energy Model To Stay In TDP Budget
description: In this intriguing article, Daniel Lezcano looks into the power
  consumption complexities and the challenges this creates.
date: 2020-07-29 10:41:16+00:00
image: /assets/images/content/code-background_1.jpg
tags:
  - SoC Power Consumption
  - Power Management
  - Thermal Framework
  - GPU
  - RAPL
  - Powercap
  - Device Tree
related_projects:
  - PERF
category: blog
author: daniel.lezcano
---
# Introduction

An ever-increasing number of embedded devices need fine grain control on their performance in order to limit the power consumption. There are three primary reasons for this: to increase the battery life, to protect the components and to control the temperature.

Due to the increasing complexity of SoCs, we're now seeing lots of thermal sensors on the die to quickly detect hot spots and allow the OS to take steps to mitigate these events - either through better scheduling, frequency throttling, idle injection or other similar techniques.

The performance states of a device usually follow a quadratic curve in terms of SoC power consumption which explains why it can have a very significant impact on the system.

The power management is done from the kernel side with different frameworks: the cpufreq automatically adapts to the performance state via the operating points, depending on the system load, the thermal framework which monitors the components temperature and caps their performances in case of a hotspot detection. There are more techniques but, for the sake of simplicity, we won't mention them in this blog.

Mobile devices are even more interested in managing power consumption because, depending upon the situation or the workload, the performance places higher or lower priority on certain components in regards to others. One example is virtual reality where a hotspot on the graphics can lead to a performance throttling on the GPU resulting in frame drops and a dizziness feeling for the user. Another example is the ratio between the cost in energy for a specific performance state vs a benefit not noticeable for the user, like saving milliseconds when rendering a web page. And last but not least, a battery low situation where we want to guarantee a longer duration before shutdown can create a unique prioritization scheme.

This non-exhaustive list of examples shows there is a need to act dynamically on the devices' power from the userspace who has full knowledge of the running application. In order to catch unique scenarios and tune the system at runtime, the solution today leverages a thermal daemon monitoring the temperature of different devices and trying to anticipate where to reduce the power consumption, given the application is running. The thermal daemon turns the different “knobs” here and there, in every place where it is possible to act on the power. One of these places is the thermal framework which exports an API via sysfs to manually set the level of the performance state for a given device declared as a passive cooling device.

Unfortunately, the thermal framework was not designed for that, as its primary goal is to protect the component at the limits. Thus the thermal daemon and the in-kernel governor will compete in their decisions. Moreover, some governors are open loop regulation systems where they make a connection between the state they choose and the cooling effect. If thermal daemons changes the decision, the connection is broken and the governor's logic can enter unknown states.

This quick overview shows there is no unified framework to deal with power constraints on the system other than experimentation within the kernel and being opportunistic with the thermal framework cracks.

## Related work

The Intel processors perform power limitations on their CPUs via a specific register called Running Average Power Limit (RAPL). Over the years, the RAPL evolved to support more power zones such as the memory and the Psys (graphics, PCH, L3 cache). The latter controls the entire SoC power system.

The Linux kernel provides a generic framework called 'powercap' which was introduced in 2013 and where it defines a set of sysfs APIs to limit the power on a specific device and to read the current power consumption levels. It is up to a subsystem to provide the backend driver to implement the different callbacks of this framework.

Given the nature of the powercap architecture which describes the powercap zones in the sysfs directories, it is possible to model a hierarchy of power constraints.

The Intel RAPL backend driver was introduced right after the powercap framework and allows the userspace to limit the power on the devices as well as reading their current consumption.

The RAPL driver is the only backend making use of the powercap.

In parallel with the introduction of the ARM big.LITTLE architecture, the scheduler needed the CPUs power information in order to make power aware decisions. This is when the energy model originated, providing the CPU's power information for each performance state.

In addition, the Intelligent Power Allocator, a power aware thermal governor, used the power number of the CPUs and the GPUs introduced differently from the device tree file.

A consolidation of the power aware cooling devices has been made to use the energy model instead of duplicating the code and that led to the generalization of the energy model to the devices. So it is potentially available on all the devices handled by the Linux kernel if their driver implements the callbacks to return the performance states and their power consumption.

## A new powercap backend - energy model based

As described previously, the mobile devices want to balance the power along with the components on the SoC depending on the kind of load or situation the system is facing: managing the power as a whole keeps the system inside its thermal envelope.

This is where the energy model based powercap fits perfectly:

* The sysfs hierarchy allows to model the constraints of the different devices on the SoC
* The energy model gives the power information of each device
* The performance state callbacks allow an application to limit the power
* The hierarchy allows an application to propagate the constraints on the different tree nodes and rebalance the free power along the child nodes
* The powercap framework offers a single place to act on the device power, allowing a consistent and unified API

The hierarchy of the constraints is represented by a tree via the sysfs filesystem. The nodes of the tree are virtual and their purpose is to aggregate the power information from the child nodes: the power consumption is the sum of the child nodes power consumption. This also applies to the max and min power. The leaves of the tree are the real devices grouped per performance domain. If a power limit is set on a node, then the power limit is split proportionally to the children regarding their max power consumption. This power limit distribution to the child nodes is considered fair enough for most of the system using this approach like electricity grid in data centers.

The powercap energy model can be under full userspace control where all the devices are power limited manually and individually by the userspace or, alternatively, the in-kernel logic can balance the power along the children nodes if there is free power remaining from devices with a power usage lesser than the limit. A mix of both is also possible, by setting power limits at different levels.

As per choice, if a SoC vendor wants to manage individually the power of the devices on its system without having the kernel being involved in the power decisions, they can create a flat hierarchy where all nodes are leaves.

If the SoC vendor wants to let the kernel manage all the power, it can set a power limit constraint at the root of the hierarchy.

Finally, if the SoC vendor wants to manage a group of devices they can create subtrees where the power limit constraints at the intermediate node are set and let the kernel manage the power of the children nodes from there.

## Status

At the time of this writing, a first prototype was submitted for comments and review. This first draft puts a simple hierarchy with the CPU's performance domains. It shows how the powercap can be used to act on its performance states without conflicting with the kernel decisions. The performance state selection is done through the frequency QoS which is used by the other kernel subsystems and guarantees the aggregation of the requests in a sane way.

<https://lkml.org/lkml/2020/7/7/1220>

The in-kernel logic has been implemented in userspace to validate the automatic power balancing along the nodes and showed it works accurately even if there are tricky aspects regarding the integer precision, but nothing unsolvable.

The code is available at <https://git.linaro.org/people/daniel.lezcano/powerem.git> (22 July 2020)

The algorithm has been presented at ELC 2020. See [here](https://ossna2020.sched.com/event/c3Wf/ideas-for-finer-grained-control-over-your-heat-budget-amit-kucheria-daniel-lezcano-linaro)

## Future work

Work remains to update the energy model to be generalized to support more devices: for instance the LCD brightness, battery charging mode, memory frequencies, GPU, DSP must be mapped to power numbers via the energy model. Usually the SoC vendors are reluctant to share this information but the algorithm can work if the power numbers are normalized.

Another area of additional work is the power meter where we can genuinely estimate the power consumption given the device usage and its performance state. Obviously, a 50% loaded CPU will consume half of the power than a 100% loaded CPU at the same performance level. That will involve some mathematical and signal tracking.

## Conclusion

The powercap energy model based framework will need a lot of development where some efforts are technically challenging. As we are in the kernel we are restricted in terms of resources and the algorithm for the power allocation and distribution must be efficient and optimized to maintain consistent power consumption regarding the power limits.

It is reasonable to say the in-kernel logic will greatly increase the efficiency of the power distribution as it can synchronously get the performance changes of the devices and adapt the allocated power budget. An operation where the userspace has to constantly poll the temperature to adapt the performances, a laggy implementation prone to more power consumption as it becomes a source of wakeup but an inevitable solution as no framework is available.

The powercap energy model based framework will be a very powerful framework, flexible for userspace, unified for AOSP, consistent and safe to coexist with the existing frameworks.

## [About the Kernel Working Group](/core-technologies/toolchain/)

The Kernel Working Group’s (KWG) primary focus is to be an active contributor to the upstream community and facilitate acceptance of our code into the Linux mainline kernel. Our goal is kernel consolidation - a single source tree with integrated support for multiple Arm SoCs and Arm-based platforms.

## About Linaro

Linaro is a Member-based company focused on the de-fragmentation of the Arm software Open Source ecosystem. Linaro also supports the Arm ecosystem through customized services, training, and support. We would love to hear from you and see how we can help you with any Arm-based support, so please feel free to reach out to set up a sync at <https://www.linaro.org/contact/>.