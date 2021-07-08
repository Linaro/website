---
layout: post
title: "Arm Transfers CMSIS-Pack Technology to Linaro "
description: "To address the challenges facing software combability for IoT and
  embedded microcontroller devices, Arm is transferring [CMSIS-Pack
  technology](https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis\
  -packs) to the Linaro IoT and Embedded Group under a new project named
  Open-CMSIS-Pack. This blog talks about the goals of the project and upcoming
  work. "
date: 2021-06-02 01:13:31
image: /assets/images/content/IoT-bg.jpg
tags:
  - Open-CMSIS-Pack
  - CMSIS Technology
  - Arm
  - IoT and Embedded
category: blog
author: francois.ozog
---
The IoT is on the verge of incredible growth – arguably, it has been for years but what has changed is the intersection in maturity and availability of several key catalysts. These include devices providing more compute capabilities, improved connectivity and increased security threats as well as the rapid evolution of machine learning. 

For the software ecosystem to capitalise on the opportunities for IoT innovation at scale, there is a need to improve the compatibility of software for component re-use, which has long been a challenge in the IoT landscape.

To address the challenges facing software combability for IoT and embedded microcontroller devices, Arm is transferring [CMSIS-Pack technology](https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis-packs) to the Linaro IoT and Embedded Group under a new project named Open-CMSIS-Pack. CMSIS-Pack technology already provides device support for close to 9,000 different microcontrollers, making project integration of drivers, middleware and other software components across multiple Arm-based devices much easier. 

# Introducing the Open-CMSIS-Pack Project

The Open-CMSIS-Pack project will deliver a standard for software component packaging and related foundation tools for validation, distribution, integration, management, and maintenance.

The initial focus of the Open-CMSIS-Pack project will be command-line tools and CMake workflows that enable the broader ecosystem to integrate CMSIS-Pack-based development flows. This project is the starting point for evolving the CMSIS-Pack technology into a true open standard for MCU software component packaging, targeting key interfaces for major IoT platforms and producing a framework that can be embraced across the ecosystem.

# Timeline

The Open-CMSIS-Pack project was established in April 2021. Linaro and project members will be working on several releases over the coming months, which will be focussed on the following:

* Create command-line tools for project builds based on software packs
* Create workflows and utilities for the verification of software packs
* Extend the pack description format for better usability across the complete workflow
* Define processes that simplify the creation of software packs from other sources, such as CMake based projects
* Develop the concept of a software layer that defines a collection of pre-configured software components
* Organize the taxonomies of standard APIs that are essential for re-useable software stacks

STMicroelectronics, NXP Semiconductors and Arm are the founding members of the Open-CMSIS-Pack project. If you would like to support and contribute to the Open-CMSIS-Pack project, please contact contact@linaro.org.

For further information about the Open-CMSIS-Pack project, visit [open-cmsis-pack.org](https://www.open-cmsis-pack.org/).