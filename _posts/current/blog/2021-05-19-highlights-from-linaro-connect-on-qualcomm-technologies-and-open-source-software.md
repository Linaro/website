---
layout: post
title: Qualcomm Technologies & Open Source Software at Linaro Connect
description: In this blog we list the sessions presented at Linaro Virtual
  Connect to highlight achievements related to Qualcomm technologies and open
  source software.
date: 2021-05-19 04:20:25
image: /assets/images/content/tech_background.jpg
tags:
  - Qualcomm
  - open source software
  - upstream
  - Linux Kernel
  - Robotics RB5
  - Dragonboard
  - Robotics RB3
  - Snapdragon
category: blog
author: nicolas.dechesne
---
Linaro plays a key role in the Qualcomm ecosystem,  [employing several developers and maintainers of key Qualcomm subsystems and drivers](https://www.linaro.org/services/qualcomm-platforms-services/). With more than 2500 Qualcomm related contributions in the upstream Linux kernel, Linaro is continuously improving the support for Qualcomm Snapdragon processors. In addition, we deliver and maintain Linux and Android reference BSP for the DragonBoard 410c, the DragonBoard 820c, the Qualcomm® Robotics RB3 and Qualcomm Robotics RB5 platforms.

In this blog we list the sessions presented at the most recent Linaro Virtual Connect by Linaro engineers to highlight achievements related to Qualcomm technologies and open source software. To view a session video or download the presentation, click on the relevant session heading below. 

# [Qualcomm Upstream Update](https://resources.linaro.org/en/resource/fByWApNzZYHAAsdR2mSXZi)

In this session, Bjorn Andersson (Principal Tech Lead, Linaro) provided a general status update on the upstream support currently happening for a growing number of Qualcomm platforms. 

# [The Qualcomm IPA Driver ](https://resources.linaro.org/en/resource/P9mzGkAzt5cJZHe2zAGtUp)

In this talk, Alex Elder (Senior Engineer, Linaro) presented "the story" of the IPA upstream driver, an overall status update and roadmap. The Qualcomm IPA (IP Accelerator) is a component in Qualcomm Snapdragon processors that provides wireless internet access to an application processor using a modem. Qualcomm has a "downstream" IPA driver for Linux, but for certain upstream-based environments, downstream code is not acceptable. There is now a driver for the IPA in the upstream Linux kernel, derived from, but now very different from, the downstream code. What started as about 45,000 lines of code was simplified, cleaned, refactored, and evolved into the 14,000 line driver that eventually was accepted upstream. The driver continues to undergo additional development, now supporting multiple generations of IPA hardware on three distinct SoCs. This session provided an overview of the role IPA plays in this system, followed by some discussion of the evolution of the code from its "simplified" starting point to its upstream implementation. 

# [Modern Modem Support in Linux](https://resources.linaro.org/en/resource/WGZmwEwLFyYm2Yo2SNjR6k)

The arrival of the fifth-generation mobile network, known as 5G, promises an even more connected world, featuring billions of devices, from smartphones to connected vehicles, including network gateways, always-connected laptops, telemedicine machines, IoT gadgets and more. With Linux being the major OS in the embedded world, Linux support for WWAN modems is crucial and will certainly impact industries over this decade. During this presentation, Loic Poulain (Senior Engineer, Linaro) gave a brief update on cellular modem support in Linux, the software stack and its components, and how Linaro, with its partners, contributes to cutting-edge upstream modem support in Linux.

# [Arm Laptops](https://resources.linaro.org/en/resource/VBsmUgK9iExiqSt5hf7jgw)

Only recently have AArch64 laptops arrived on the market that are suitable for Linux developers. In this session, Richard Henwood (Server Software Ecosystem Manager, Arm), Bjorn Andersson (Principal Tech Lead, Linaro) and Shawn Guo (Tech Lead, Linaro) reviewed the options and support for upstream Linux kernels, GNU user space and associated tooling that make up a modern GNU/Linux distribution. In particular they focused on laptops that provide UEFI boot process and reviewed specific platforms for their current status.

# [Supporting Qualcomm wcn3680 WiFi on Android and upstream](https://resources.linaro.org/en/resource/ndC3Y3r5WfpozRyzsCnRzN)

In this session, Bryan O-Donoghue (Senior Engineer, Linaro) talked about adding support for the wcn3680 WiFi chipset to upstream and Android kernels. This session included a brief overview of wcn3620, wcn3660 and wcn3680, the initial state of hardware support upstream, lessons learned and more.

In addition to the sessions presented by Linaro engineers, we were pleased to invite Dev Singh (Senior director, Business development and GM of autonomous robotics, drones and intelligent machines, Qualcomm Technologies, Inc.) to present a keynote:

# [Qualcomm keynote on AI & 5G Enabling the Next Generation of Robotics](https://resources.linaro.org/en/resource/cjBGD2tBQ2Mykhn5WwZHru)

In his keynote, Dev Singh talked about the transformative power of 5G and AI technologies in creating the next generation of high-compute, low-power robots and drones for the consumer, enterprise, defense, industrial, and professional service sectors. He also spoke about scaling 5G and AI and how doing this will help solve a wide range of robotics challenges - from enabling enhanced security and connectivity to high-accuracy AI inferencing and superior power-efficiency. 

# What is to come?

We will shortly be announcing the dates for the upcoming Linaro Virtual Connect Fall 2021 where we expect to have plenty more sessions related to Qualcomm technologies. Make sure to follow Linaro’s social media channels for updates and for more information on the work Linaro does on Qualcomm platforms and how we can help, [click here](https://www.linaro.org/services/qualcomm-platforms-services/).