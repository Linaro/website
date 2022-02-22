---
layout: post
title: Thermal Notifications With Netlink
description: This blog introduces thermal framework design & where the
  notification takes place to allow the userspace to be aware of the overall
  thermal profile of the system.
date: 2020-07-30 12:19:31+00:00
image: /assets/images/content/electricity-1288717_1920-1-.jpg
tags:
  - Thermal Framework
  - Thermal Zone
  - Thermal Notifications
  - Netlink
related_projects:
  - PERF
category: blog
author: daniel.lezcano
---

# Introduction

The goal of the thermal framework is to monitor the temperature of some system components and take immediate action if they are too hot. But how can the userspace know the events occurring in the kernel or what the actions are?

Recently introduced with expectations to evolve over time, netlink notification is the answer.

This blog introduces the thermal framework design and shows where the notification takes place to allow the userspace to be aware of the overall thermal profile of the system.

## The thermal framework - a nice design

The framework provides a level of abstraction where all the actors are clearly identified:

- The thermal zone is the abstraction where the hardware sensor implementation provides the backend driver to return the temperature via unified callbacks.
- The cooling device is the abstraction of the device in charge of reducing the temperature. It could be a passive cooling device by reducing the performance of the monitored device like changing the operating point of a CPU, or an active cooling device like a fan. The former does not need extra energy to cool down, while the latter does.
- The thermal governor is the logic which acts on the cooling device to mitigate the temperature.

The way a thermal zone is monitored will depend on the sensor capabilities:

- Some sensors can only give the temperature when requested, in this case the thermal zone temperature will be monitored by a periodic timer. That means the idle system will be wake up to check the temperature even if there is nothing to do.
- Some more modern sensors can be programmed to send an interrupt when a specific threshold is reached. In this case, the system can stay fully idle, no wake up is necessary. Please note that the polling mode also introduces a latency in the temperature threshold detection; statistically speaking it is the half of the timer period. For instance, for a one second polling time, the average latency for detection will be 500ms, a duration that is far too large for modern boards which can experience thermal variance at a rate of up to 0.5°C / ms. In this case, the interrupt mode is the guarantee of a synchronous action via the interrupt handling when a temperature threshold is reached.

The following figure illustrates the different components of the thermal framework and how they interact with each other on a big.LITTLE system.

{% include image.html path="/assets/images/content/components-thermal-framework.png" alt="Components Of The Thermal Framework" %}

## Tracking the temperature and mitigating

The SoC vendors must define what the safe temperature ranges are for a component, when to begin the mitigation process and finally when to give up by shutting down the system if the mitigation fails. This is managed by the use of temperature thresholds called “trip points”. In order to take the corresponding action (mitigation or shut down), they are classified by type as PASSIVE, ACTIVE, HOT and CRITICAL. Note the HOT trip is a userspace notification as a last resort to do an action to recover like killing a process or hot plugging CPUs.

Let’s summarize the dynamic of the thermal framework on modern hardware with an example:

1. A compute intensive application runs and causes a constant temperature increase.
2. The temperature reaches the PASSIVE trip point and an interrupt is fired to the thermal zone.
3. The thermal zone reads the temperature and finds out what is the corresponding trip point. If it is an ACTIVE or PASSIVE trip point, then the governor logic is invoked to set a state to the cooling device associated with the thermal zone (the higher the state, the greater the cooling effect). If it is a CRITICAL trip point, the system is shut down.
4. If the trend of the temperature is dropping, then the governor will decrease the cooling effect, if it is raising, then the cooling effect is increased.
5. The application ends, no more hardware intensive usage.
6. The temperature drops back down below the PASSIVE trip point and the governor stops the mitigation.

The effect on mobile devices can be observed with gaming where we can feel how hot the device is and see the game showing unexpected latencies.

During this mitigation process, the userspace had no clue at all on what was going on and what the thermal situation was. Usually being thermal agnostic is acceptable for desktops or servers as the cooling devices are active and the power consumption is not a problem, tolerable for laptops with a small fan, but unacceptable for fanless battery-powered mobile devices. The userspace, especially in Android systems, have daemons which monitor applications and temperatures to set the correct profile on the system for a better user experience.

But how can the userspace get information about the current overall thermal profile?

Actually, it can’t, unless the userspace registers itself as a governor, takes over the kernel logic and handles the mitigation itself. So the userspace can be informed by the thermal framework only if it is the governor. This is a limitation that forces the SoC vendors to implement their own custom solution leading to code fragmentation in the Linux kernel.

## Thermal notifications

In response to the lack of thermal communication between the kernel and the userspace, a solution based on the netlink has been implemented for Linux v5.9.

[Netlink](https://en.wikipedia.org/wiki/Netlink) is a socket-based protocol used for communication between the Linux kernel and userspace. It additionally supports kernel to kernel communication as well as processes to processes.

With netlink being a socket-based protocol, we get the benefit of the socket framework, so using the well documented socket option allows the userspace to set up the connection to the kernel as needed.

Another interesting aspect of netlink is its ability to create a communication bus with a multicast channel the processes can subscribe to. Consequently, the notifications can be delivered to multiple processes at the same time.

Netlink includes a protocol version, so the processes can deal with the supported version and fallback to a previous version if the kernel is older than expected. Thus the thermal notifications can evolve without breaking compatibility by incrementing the protocol version.

The thermal netlink notification solution has three channels:

- **Temperature sampling:** every thermal zone update sends a temperature message. If the thermal zone is in interrupt mode and the temperature is below the threshold, then no sampling will be sent until the mitigation happens. In case of polling mode, the temperature sampling will be sent at each update to all processes that are subscribed to the sampling channel.
- **Events:** A thermal zone creation, destruction, a trip point crossed, etc… will emit an event to all processes that are subscribed to the event channel. The list of the events will be defined at the end of this blog.
- **Commands:** The userspace can send discovery commands to get the list of the thermal zones, the trip points and the cooling devices.

By splitting the channels, the traffic is reduced by preventing the userspace processes to filter out the sampling or the events that aren’t of interest.

## Nomenclature

### Sampling

{% include image.html path="/assets/images/content/sampling.png" alt="Sample Table" %}

### Events

{% include image.html path="/assets/images/content/events.png" alt="Events Table" %}

### Commands

{% include image.html path="/assets/images/content/commands.png" alt="Commands Table" %}

The userspace implementation will be merged into the generic netlink library when the protocol is considered stable. Meanwhile sampling code \[07-22-2020] is available [here](https://git.linaro.org/people/daniel.lezcano/thermal-genl.git/).

**[About the author](https://www.linkedin.com/in/daniel-lezcano-8481435a/)**

Daniel worked in 1998 in the Space Industry and Air traffic management for distributed system projects in life safety constraints. He acquired for this project a system programming expertise.

He joined IBM in 2004 and since this date he does kernel hacking and pushed upstream the resource virtualization with the namespaces. He was the author and maintainer of the Linux Container (LXC).

In 2012, he joined Linaro to work in the power management team. Deeply involved in the power management improvements for the different members of Linaro, he continues to contribute and maintain some parts of the Linux kernel in the power management area.

Currently, he is maintaining CPUidle for the ARM architecture, the timer drivers and the thermal framework.

## About Linaro

Linaro is a Member-based company focused on the de-fragmentation of the Arm software Open Source ecosystem. Linaro also supports the Arm ecosystem through customized services, training, and support. We would love to hear from you and see how we can help you with any Arm-based support, so please feel free to reach out to set up a sync at [linaro.org/contact](https://www.linaro.org/contact/)

## [About the Kernel Working Group](/core-technologies/toolchain/)

The Kernel Working Group’s (KWG) primary focus is to be an active contributor to the upstream community and facilitate acceptance of our code into the Linux mainline kernel. Our goal is kernel consolidation - a single source tree with integrated support for multiple Arm SoCs and Arm-based platforms.
