---
author: kumar.gala
date: 2016-09-22 14:32:26+00:00
layout: post
link: /blog/microcontroller-software-summit-linaro-connect-las16/
slug: microcontroller-software-summit-linaro-connect-las16
title: Microcontroller Software Summit at Linaro Connect LAS16
wordpress_id: 11590
categories:
- blog
tags:
- Cortex-M
- IoT
- Linaro
- Linaro Connect
- Linux
- Linux on ARM
- LITE
- Open Source
---

Next week at Linaro Connect LAS16 there will be a Microcontroller Software Summit on Wednesday September 28, 2016 from 10:10am-1:00pm (PST).  The summit looks to focus on few of the topics that the microcontroller and Cortex-M based SoC and systems are facing.  There are numerous software solutions in the microcontroller space and we look to bring together developers from the various RTOSes (Zephyr, Apache Newt, ARM mbed) to discuss solutions to common problems faced by everyone. The summit will focus on Device Configuration, Build Systems, and Security.

As the time to market continues to short the need the be able to get a board port going faster is increasingly important.  In addition, multiple software components now need to be aware of various board specific details and thus each software component has to be ported specifically to a given board/platform.  We are looking at solutions for describing the board, platform, system, SoC, pins, clocks, etc in a vendor neutral way that multiple software components can utilize as a source of configuration information.  The Device Configuration session will focus on a proposed solution to this problem, some of the issues we need to address, and some of the tooling areas that we need to work on to see this solution be a success.

Microcontroller systems in a connected world are doing more and more and thus we are pulling in software stacks from more and more places.  How we source, build and compose these software packages together to provide images for a production system is becoming extremely complicated.  In addition, we have unique requirements in the microcontroller space as there may not be a separation of OS from user space or a filesystem present.  The Build System session will focus on looking at what the unique requirements and solutions there are for how we compose all this software together.  We will look at some existing solutions from Apache MyNewt, to Open Embedded, as well as previous attempts by ARM mbed with yotta to address this problem.

Finally, as we connect devices to the internet, security is of paramount concern.  In the Cortex-A world we are use to technologies like TrustZone, encryption, public key authentication, signed software image, however these are new to the microcontroller world.  In addition the microcontroller systems are far more resourced constrained.  The session will look at some of the differences between the two classes of system and what type of unique requirement exist in the microcontroller world.  We hope to capture some of the unique requirements and discuss areas that need software standardization to ensure security throughout the system.

In addition to the Summit there are several IOT and embedded sessions that will go into more depth on particular RTOSes, software environments, and security topics relevant to the microcontroller space.

* LAS16-100: Zephyr Technical Overview

* LAS16-112 mbed OS Technical Overview

* LAS16-104: Apache MyNewt technical overview

* LAS16-108: JerryScript and other scripting languages for IoT

* LAS16-203: Platform security architecture for embedded devices

* LAS16-300K2: Geoff Thorpe - IoT Zephyr

* LAS16-407: Internet of Tiny Linux (IoTL): the sequel.

To Learn more about these sessions and Linaro Connect visit:  [http://connect.linaro.org/las16/](http://connect.linaro.org/las16/)
