---
author: bill.fletcher
categories:
- blog
date: 2016-11-18 14:46:19
description: Overview of the Zephyr demo shown at ELC last month. Demo showed how
  open the source code, tooling, and configuration could be, and how transparent collaboration
  could flow from the engineering behind the deeply embedded RTOS code.
layout: post
link: /blog/open-source-continuous-integration-ci-for-zephyr-at-elc/
slug: open-source-continuous-integration-ci-for-zephyr-at-elc
tags:
- IoT
- Linaro
- Linux on ARM
- LITE
- Open Source
- Opensource
- Zephyr
title: Open source continuous integration (CI) for Zephyr at ELC
wordpress_id: 11886
---

**Cloud-based continuous integration** /klaʊd beɪst kənˈtɪnjʊəs ɪntɪˈɡreɪʃ(ə)n/

_a software development practice that pretty much nobody would associate with microcontrollers …_

{% include image.html name="blog-pic-1.jpg" alt="blog-pic-1" %}

I found myself last month representing Linaro at the Zephyr booth on the demo area floor in the Maritim Hotel in Berlin for ELC-E. I had a rather unusual microcontroller demo.

{% include image.html name="blog-pic-2.png" alt="blog-pic-2" %}

Microcontroller demos often tend to be a product prototype running an RTOS, often extended to sending data to a cloud-based application and/or to a mobile device. There were certainly some very cool microcontroller demos on the Zephyr booth at ELC. In our Zephyr demo we wanted to show how open the source code, tooling, and configuration could be, and how transparent collaboration could flow from the engineering behind the deeply embedded RTOS code.

Starting with some industry-standard open source tools which have been instrumental in enabling collaboration, e.g.

  * git for source code management and collaboration
  * standard c and make based build infrastructure
  * qemu as a virtual test platform


we added some of Linaro’s existing and emerging contributions to the community in the form of


  * Linaro’s open source test infrastructure - LAVA
  * Continuous Integration tools, previously manifested in the Linux kernelci infrastructure
  * 96Boards IoT Edition Cortex-M microcontroller-based development boards
  * LITE team innovations in platform and bootloader support.


With these elements we demonstrated a continuous integration loop with testing on both virtual (cloud-hosted) targets and a local test farm of IoT-edition Cortex-M4 Carbon boards. The aim was to show how an open source RTOS like Zephyr could be complemented with best-practise open source development tools, to promote a transparent continuous collaboration environment.

In the demo, I made my modifications to the Zephyr project source code https://github.com/linaro/zephyr. In this case, the only development tool that I’m running locally is git. After I’ve made a change to the code in my local git instance, I do a push (I’ve added our CI infrastructure Zephyr repository as a remote).

That single git push command kicks off the entire test process that includes remotely building over 100 test applications, executing all of them on virtual Cortex-M devices (QEMU) and returning the results in real time to the developer.  

After the results from the virtual machine tests are executed, key target applications are subsequently built and deployed from the cloud to the small test farm of boards running in the booth and tested on multiple devices, i.e. testing on real hardware, in real-time.

{% include image.html name="blog-pic3.png" alt="blog-pic-3" %}

Incidentally, the entire build and test infrastructure was built with scalability as as the driving factor using containers and orchestration. Even the local test farm in the booth was driven by a laptop running a container instance of the test dispatcher.

For more information on Linaro LITE please check out: 

[www.linaro.org/groups/lite/](/groups/lite/)


* * *

# Linaro and Zephyr


If you know Linaro, you’ll most likely know us as leading open source collaboration in the ARM ecosystem, and that our initial formation in 2010 saw us tackling fragmentation in the ARM Linux kernel and being the reference point for gcc toolchain support for ARM. Since then we’ve evolved to be a significant force in open source with more than 30 member companies. As well as kernel and toolchain, work includes software stacks and tools in mobile, networking, servers, the digital home and IoT.

Since I was presenting a demo that was based on Zephyr, which is a real-time operating system (RTOS), rather than on Linaro’s home turf of the Linux kernel, it’s worth explaining that earlier this year, Linaro launched its IoT and Embedded (LITE) Segment Group with a mission in the IoT and embedded space which included  


  * reducing fragmentation in operating systems, middleware and cloud connectivity solutions
  * providing end-to-end open source reference software for more secure connected products 
  * via open source solutions - enabling faster time to market, improved security and lower maintenance costs for connected products. 


As a result of the decision to create this group, Linaro joined the Linux Foundation Zephyr Project as a Platinum member. The LITE group within Linaro will use Zephyr as a neutral industry RTOS platform as a place to land its collaborative engineering output.

For more information on Linaro please see [www.linaro.org](), and for the Zephyr project, go to [www.zephyrproject.org/](http://www.zephyrproject.org/)


More photos at: [https://drive.google.com/open?id=0B1ntKia_78FZRWhNMjRzcUpTWHM](https://drive.google.com/open?id=0B1ntKia_78FZRWhNMjRzcUpTWHM)