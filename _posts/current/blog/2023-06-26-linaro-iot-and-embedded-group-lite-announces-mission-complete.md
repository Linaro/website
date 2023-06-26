---
layout: post
title: " Linaro IoT and Embedded Group (LITE) announces “Mission Complete”"
description: This blog  highlight the achievements of Linaro's IoT & Embedded
  Group in the realm of supporting Arm-based MCUs in the IoT space. Their open
  source projects have successfully implemented architecture support, security
  integration, and end-to-end best practices. Discover more about their
  accomplishments.
date: 2023-06-27 08:00:27 +02:00
image: /assets/images/content/IoT_Planet_UNDER_2MB.jpg
strap_image: ""
tags:
  - IoT and Embedded
category: blog
author: bill.fletcher
---
## Rich vs Constrained Operating Systems

Linaro’s mission is to work with businesses and open source communities to develop software on Arm-based technology. We create solutions that drive forward the Arm software ecosystem, enhance standardisation, promote collaboration across industries and contribute to real-world applications. Linaro is well known in the open source community for its work on the Linux kernel and other open source projects.

Linux is what is often called a “rich operating system” in that it has lots of useful software features built-in, including ways to handle files, networks, peripherals, graphics adaptors, etc. All these very useful built-in features unfortunately come with a cost in terms of the size of the system and in many cases how quickly it can react to some external event. For the  connected physical objects in the Internet of Things, the tiny Arm systems need a different approach to software. They are small in size (we often use the term constrained) and are often expected to react quickly (in what is called real-time).

The operating systems often used in small systems are called real-time operating systems - almost always abbreviated to RTOS. We don’t always care about reaction time in small systems, but we always care about the constraints, and RTOS-based software fits within the constraints of some of the smallest Arm systems. These are almost always a single system-on-chip microcontroller (MCU) with memory, CPU and peripherals on the same piece of silicon. 

## Enabling Arm Security Features in Open Source RTOSes

Most RTOSes are commercial closed source software, but the Zephyr project was founded to make an open source RTOS available to the community. Around the same time, Arm announced its next generation of architecture for MCUs - Armv8-M. The Armv8-M architecture adds hardware mechanisms to securely isolate and execute some software functions which is useful for cryptography and generally making sure that any software updates transmitted to a device during its lifetime are trustworthy. These hardware mechanisms are called TrustZone and the associated software framework is called the Secure Processing Environment (SPE). 

To work alongside the availability of Armv8-M and Zephyr RTOS, Linaro formed the Linaro IoT and Embedded Group (LITE) to work with the open source community on RTOS support for Arm architecture MCUs. Soon after, Arm released the TrustedFirmware-M (TF-M) open source project which is an open source reference implementation of SPE. Linaro maintains the integration between TF-M and Zephyr RTOS.

The engineering team has carried out much of its work as upstream contributions to open source projects like Zephyr. That is to say, the development work adds features to the project which persist in the upstream repository for the benefit of the ecosystem. The resulting codebases have been ported on our latest members’ hardware and in advance of hardware on virtual and FPGA platforms.

## The Linaro IoT & Embedded Group’s Achievements 

The highlights of the group’s engineering leadership and contributions to ecosystem projects are:

* The first port of the TF-M project to dual Armv7-M in order to bring the benefits of TrustZone security to a wider range of existing MCUs
* Enabling AWS FreeRTOS over-the-air updates using Arm’s standardised Platform Security Architecture (PSA) APIs. In this implementation, the process of image write, image verification and image activation are protected by the PSA secure service
* A TF-M secured port of Microsoft’s Azure RTOS system on an Armv8-M device with secure boot and a test application from the Azure RTOS subsystem able to request a secure service execution to the TF-M subsystem
* The Confidential AI project which demonstrates end-to-end security best practices making use of the security features on modern Armv8-M hardware. The project uses open standards with AI/ML workloads as the use case
* The Zephyr project, where LITE engineers contribute to Zephyr RTOS as Arm architecture maintainer and as TF-M integration maintainer. They are also active in Zephyr security reviews.
* The MCUBoot project as maintainer.
* Trusted Firmware-M, MbedTLS and Open-CMSIS-Pack as contributors

You can find the LITE contributions in the upstream repositories of Zephyr, MCUBoot, TF-M and other projects. If you would like to find out more about the code assets developed by LITE, please get in touch.

As well as contributions to individual projects, it’s important to have a vision for the overall functionality of a system that solves a useful and challenging problem. The Linaro IoT and Embedded group identified end-to-end security as such a problem. MCUs are connected to sensors which may collect valuable and confidential data such as biometrics. The MCU code may contain proprietary processing or inference algorithms. The output data and associated cloud connectivity represent a potential risk if not secured, and any updates to the MCUs code during its lifetime should be authenticated. The Confidential AI project within LITE implemented a solution to this end-to-end system use case. This project demonstrates security best practices and is fully based on open source software and open standards. Using AI/ML workloads as a test case, it makes use of the security features on modern Armv8-M hardware. Details of the Confidential AI project can be found in the Linaro white paper “[Confidential AI for MCUs](https://static.linaro.org/assets/ConfidentialAI-LinaroWhitePaper.pdf)”.

## “Mission Complete” for the Linaro IoT & Embedded Group

For the moment, in agreement with Linaro members, the The Linaro IoT and Embedded group is announcing “Mission Complete” for achieving maturity of open source projects supporting Arm-based MCUs in the IoT space. We thank all the engineers involved for this milestone. The group’s activities will be put into maintenance mode. Active work will, however, continue in Linaro on the maintainership activities for the key open source projects above. 

Linaro will also continue to host the Trusted Firmware project which includes TF-M, MCUBoot and MbedTLS. Linaro is also a Board Member of Trusted Firmware and a Silver Member of the Zephyr Project.

If you have any questions or thoughts on the status of open source support for Arm microcontrollers, please contact Linaro via [contact@linaro.org](mailto:contact@linaro.org)