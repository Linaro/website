---
layout: post
title: Network Latency with TSN on Virtual Machine
description: In this blog we talk about network latency with TSN on Virtual
  Machine. Click here to read more!
date: 2023-05-10 01:45:50 +01:00
image: /assets/images/content/Banner_Virtualization.jpg
tags:
  - TSN
  - latency
category: blog
author: takahiro.akashi@linaro.org
---
Time Sensitive Networking (TSN) is a collection of standards defined by IEEE801.2 which address issues like network latency and robustness.  In [my last blog article](https://www.linaro.org/blog/network-latency-with-tsn-on-virtual-machine/) , I described the goal of the research Linaro is conducting on the network latency in TSN environment and illustrated the overview of the evaluation method I have adopted along with various virtual network configurations. In this second article of the series, I would like to present more details about necessary setups in the measurement process, and give you the result and analysis based on my experiments against different network bridge technologies.

Please also see [my presentation in Linaro Connect](https://resources.linaro.org/en/resource/jfTURCDTat6faXFK8PwqwK).

# T﻿est Scenario

## S﻿ystem Overview

A real automotive system is likely much more complicated, consisting of a lot of devices, gateways with a few central servers which are connected with each other via ethernet routers. In my experiments, however, a much simpler system configuration is adopted: Two evaluation boards are directly connected by a cable without using any intermediate switch as our aim here is to evaluate activities at the VM (Virtual Machine) host side.

{% include image.html path="/assets/images/content/system-overview-evaluation-boards-.png" alt="System overview-evaluation boards" %} 

We use two applications:

A) sample-app-taprio as a time-sensitive application
B) netperf (UDP_STREAM test) as network stress workload

The program A comes from Intel developers as a reference code to demonstrate TSN features on their (and possibly other vendor's TSN-capable) NIC (Network Interface Controller) products and can work as a benchmark test for measuring network latency.

It originally supported only the txtime-assist mode of taprio qdisc combined with hardware-based ETF (Earliest TxTime First) qdisc and, in my experiments, was customised to utilise the full-offload mode.
The sender(TX) side simply wakes up at a given interval within a given time slot (see TSN configuration below) and sends out a small test packet. The receiver(RX) side is to poll for incoming packets and calculate a latency based on the difference between the TX timestamp in a packet and the RX timestamp captured by the NIC. Please note that most of the time consumed in a guest OS (Operating System) will be excluded from the definition of latency here because we want to focus on the overhead which comes from the VM host OS (In this sense, the guest OS need not be PREEMPT_RT kernel in the test.)

{% include image.html path="/assets/images/content/tsn-set-up-image.png" alt="TSN Set Up" %} 

The sender and the receiver belong to and communicate via a dedicated VLAN (Virtual Local Area Network). While the use of VLAN will expectedly make sense to satisfy QoS (Quality of Service) requirements against multiple applications in a more realistic network, it will have little impact on the behaviors in a simple system configuration like here.

{% include image.html path="/assets/images/content/tsn-system-overview.png" alt="TSN System Overview" %}  

## PTP (Precision Time Protocol) Setup

Clock synchronization among the devices and servers over the network is one of key technologies in TSN and the base for all the other features to coordinate activities across nodes in a time-sensitive manner. You need to install a PTP package from the distro (I use linuxptp) and start the daemon before the tests.

While there are many parameters to define PTP's behavior, I start by using a predefined profile (for automotive use) from the repository. The daemon is assigned to a real-time scheduling class to help improve the responsiveness.

{% include image.html path="/assets/images/content/ptp-set-up-.png" alt="PTP Set up" %}  

## T﻿SN Set up

TSN standard defines a couple of shapers and schedulers; Qav (or Credit-Based Scheduler, CBS) and Qbv (or Time-aware Shaper, TAS) are well known ones. In my experiments, I chose Qbv since the focus here is to ensure that prioritised packets are timely and predictably delivered with some sort of network latency guaranteed over the less prioritised traffic.

Qbv provides a mechanism of time-multiplexing traffic flows from various applications. More specifically, the network bandwidth is divided into several time slots with constant intervals while all the traffic coming from different applications are set to be classified into different queues or traffic classes. NIC is scheduled to open the gate for allowed TX queues at any time slot so that packets will be allowed to transmit only for the assigned period within a cycle. So the mechanism theoretically assures that the transmission of prioritised packets are not interfered by other (and even excessive) traffic.

{% include image.html path="/assets/images/content/time-aware-shaper-.png" alt="Time-aware shaper" %}  

The definition of gate list can vary from system to system depending on applications and their requirements. Here I adopt the configuration in the table below to make streams from the benchmark program and netperf bound to different TX queues, #0 and #3, respectively, while PTP packets are allowed at any slot. So the traffic from the benchmark and the traffic from netperf are not mixed in any single slot and fully isolated from each other to theoretically preclude, at least at hardware level, any traffic collision or congestion at any time.

The duration times (interval) of each time slot may be arbitrary, but these odd (and prime) numbers are chosen not to easily resonate with the kernel tick (4 msec by default).

{% include image.html path="/assets/images/content/duration-times-.png" alt="Duration times" %}