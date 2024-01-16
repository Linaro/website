---
layout: post
title: Recent developments in the Open-CMSIS-Pack Project
description: >
  In June 2021, Arm transferred the CMSIS-Pack technology to Linaro under a new
  project named Open-CMSIS-Pack. The project is delivering a standard for
  software component packaging and related foundation tools for validation,
  distribution, integration, management, and maintenance of microcontroller
  software. In this blog we talk about the work that has been achieved so far
  and what the project has planned in the future.
date: 2021-12-09 09:21:57 +00:00
image: /assets/images/content/96b-nitrogen-relays-resize.jpg
tags:
  - Open-CMSIS-Pack
  - IoT and Embedded
  - CMSIS Technology
category: blog
author: bill.fletcher
---
It’s been six months since [Arm transferred the CMSIS-Pack technology to the Linaro IoT and Embedded Group ](https://www.linaro.org/blog/arm-transfers-cmsis-pack-technology-to-linaro/)under a new project named Open-CMSIS-Pack.  The project is delivering a standard for software component packaging and related foundation tools for validation, distribution, integration, management, and maintenance of microcontroller software. It aims to create a flexible and easy to use end to end development flow - from project creation to execution of the software on real or virtual hardware - for embedded software.

## What has the Open-CMSIS-Pack project achieved so far?

* Project Manager -  essentially uses Project Files and CMSIS-Packs to create self-contained CMSIS-Build input files
* Directory organisation - workspaces, pack inventory and root directories
* Taxonomy and multi-context terminology
* Component identifier syntax

## Open-CMSIS-Pack project milestones for December 2021:

* Provide an updated version of [CMSIS-Build v0.10.4 incorporating the new ‘cpackget’ utility](https://github.com/Open-CMSIS-Pack/cpackget) for installing missing public packs
* Share a first development snapshot of the ‘Project Manager’  command line tool for review and use case exploration

## The Open-CMSIS-Pack project's longer-term goals:

* Evolution of the CMSIS-Pack standard and enable adoption by wider software industry to deploy frameworks, for example for Cloud connectivity or machine learning
* Deliver foundation technology and base tools that can be integrated into toolchains from Open-CMSIS-Pack partners and the wider eco-system
* Improve the inter-operability of various software projects by providing a common way to describe components, interfaces, and other attributes

CMSIS-Pack technology already provides device support for close to 9,000 different microcontrollers, making project integration of drivers, middleware and other software components across multiple Arm-based devices much easier. [AWS recently made an announcement to deliver FreeRTOS LTS libraries in CMSIS Pack format](https://www.freertos.org/2021/10/freertos-lts-libraries-are-now-part-of-our-partner-toolchains.html). 

STMicroelectronics, NXP Semiconductors and Arm are the founding members of the Open-CMSIS-Pack project which is hosted in the Linaro IoT and Embedded Group. 

Visit [Open-CMSIS-Pack Project](https://www.open-cmsis-pack.org/index.html) and check out the associated repositories to learn more. You can also follow the links to find notes and recordings of our weekly meetings which you are welcome to join.

For more details please contact contact@linaro.org.