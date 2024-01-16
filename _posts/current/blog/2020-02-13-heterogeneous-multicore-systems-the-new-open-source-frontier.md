---
layout: post
title: Heterogeneous Multicore Systems
description: Heterogeneous multicore computing is now all-pervasive with a
  flexible co-processor architecture making it the new open source frontier.
  Read more here.
date: 2020-02-13 04:23:39
image: /assets/images/content/IoT.jpg
tags:
  - DeviceTree
  - OpenAMP
  - Zephyr
  - 96Boards
  - IoT and Embedded
category: blog
author: bill.fletcher
---

Heterogeneous multicore computing is now all-pervasive. Complex application processors in the mobile and other consumer segments have long featured many cores for various kinds of processing offload. This has typically included modem and wifi functions, DSP, real-time and power control. The presence of the many co-processor cores and engines gives a processing offload capability which frees up the main CPU (or CPU cluster) to run the host OS and application code.

Configuring, building and maintaining multicore systems has historically been a hard problem. The good news is that there are an increasing number of multicore devices with a flexible co-processor architecture and good support for running non-proprietary software. This flexibility is helping to build a collaborative engineering effort around open source tools and software components to help develop and maintain products supporting a multicore system approach.

The tasks that are being addressed by this collaboration include:

A master configuration across multiple cores that are sharing a common set of memory and peripherals. A lifecycle management and communication framework to allow multiprocessing applications to leverage parallelism offered by the multicore configuration.
Standard interfaces for power, performance and system management.

Linaro and its members are active in all of these areas and are developing a set of software components to help with the System approach to multiprocessing such as Device Tree, SCMI, RemoteProc, RPmsg.

The Linaro Device Tree Evolution project \[1] is working towards a system view providing a unique system description that contains all peripherals and memories, with an associated view per processor which could be (real or virtualized) Cortex-A, Cortex-M or DSP cores.

The OpenAMP Linaro Community Project \[2] and Linaro work on underlying RemoteProc, RPMsg provides Life Cycle Management, and Inter Processor Communication capabilities for management of remote compute resources and their associated software contexts.

The System Control and Management Interface (SCMI) \[3] is extensible and provides standard interfaces to access functions which are often implemented in firmware in the System Control Processor (SCP).

Linaro will be demonstrating these technologies at Embedded World - showing communication between Zephyr RTOS \[4] and Linux on an Avenger96. Avenger96 is a community development board based on the STM32MP1 \[5]. You can meet us at the Zephyr booth (4-170).

{% include image.html path="/assets/images/content/96BoardsAvenger.png" alt="96Boards Avenger Board" %}

References

\[1] Device Tree Evolution Project - <https://www.linaro.org/assets/pdf/Linaro-White-Paper--Device-Tree-Evolution.pdf> \[2] OpenAMP - [https://www.openampproject.org/ ](https://www.openampproject.org/)\[3] System Control and Management Interface <https://developer.arm.com/architectures/system-architectures/software-standards/scmi> \[4] Zephyr RTOS <https://www.zephyrproject.org/> \[5] STM32MP1 <https://www.st.com/en/microcontrollers-microprocessors/stm32mp1-series.html>
