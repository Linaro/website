---
layout: post
title: Open On-Chip Debugger (OpenOCD) at Linaro
description: Linaro has been actively involved in the OpenOCD project since
  2016. In this article Omair Javaid takes a closer look at the software
  development tool.
date: 2020-09-30 12:34:17
image: /assets/images/content/electricity-1288717_1920-1-.jpg
tags:
  - Linaro
  - Open on chip Debugger
  - OpenOCD
  - Arm v8 AArch64
  - toolchain
  - Arm
category: Blog
author: Omair.Javaid@linaro.org
---
# Open on Chip Debugger

The [Open On-Chip Debugger (OpenOCD)](http://www.openocd.org/) is an open source software development tool which allows on-chip debugging and programming of applications via JTAG/SWD hardware interface. OpenOCD runs on a host computer along with a debugger like GDB. GDB communicates with OpenOCD over RSP protocol similar to debugging an application running on hardware.

{% include image.html path="/assets/images/content/open-ocd-flow-diagram.png" alt="OpenOCD-flow diagram" %}

Linaro has been actively involved in the OpenOCD project since 2016 where we initially started to help the community with upstreaming of Arm v8 AArch64 support in OpenOCD. More information on where we started with Arm v8 upstreaming work can be found [here](https://collaborate.linaro.org/display/TCWGPUB/OpenOCD+for+AArch64).

In the last few years Linaro toolchain team has actively participated in development, upstreaming and validation of various Arm architecture specific features in OpenOCD. We have also served as liaison between OpenOCD and GDB/LLDB debugger projects.

Linaro toolchain working group maintains [a wiki area for OpenOCD](https://collaborate.linaro.org/display/TCWGPUB/OpenOCD+@+Linaro) containing how-to documents enabling developers to quickly get started with OpenOCD development. In absence of an active testing infrastructure for OpenOCD we have developed instructions for developers to quickly test and validate OpenOCD on Arm architecture.

Following pages provide quick start for validation and testing of OpenOCD on Arm:

* [Getting started with OpenOCD Development](https://collaborate.linaro.org/display/TCWGPUB/Getting+started+with+OpenOCD+Development)
* [Raspberry Pi Linux kernel debugging with OpenOCD](https://collaborate.linaro.org/display/TCWGPUB/Raspberry+Pi+Linux+kernel+debugging+with+OpenOCD)
* [Debug Zephyr app on Nitrogen board with OpenOCD](https://collaborate.linaro.org/display/TCWGPUB/Debug+Zephyr+app+on+Nitrogen+board+with+OpenOCD)