---
author: george.grey
categories:
- blog
date: 2015-02-24 16:50:15
description: Linaro CEO discusses the new 96Boards initiative and Open Source Hardware.
  The goal of 96Boards is to provide an option for standardization of SoC boards for
  software developers, the maker community and embedded product manufacturers.
layout: post
link: /blog/96boards-open-source-hardware/
slug: 96boards-open-source-hardware
tags:
- 96Boards
- arm
- Linaro
- Linux on ARM
- Open Source Hardware
title: 96Boards and Open Source Hardware
wordpress_id: 8125
---

Linaro announced the [96Boards initiative](https://www.96boards.org/) at the recent [Linaro Connect](http://connect.linaro.org/sfo15/) conference in Hong Kong on February 9th. Linaro is a software company, and the goal of 96Boards is to provide an option for standardization of SoC boards for software developers, the maker community and embedded product manufacturers. By reducing design time and defining common hardware interfaces, the goal is to create a platform that can enable the delivery of boards for software developers from a range of SoC vendors.

Reactions in the community have been broadly positive with questions raised about the specified functionality, as well as some interesting comments on what constitutes open source hardware.

**Open Source & Hardware**

As a company that is member-funded to invest in software for the ARM ecosystem, the majority of Linaro’s efforts are focused on open source software - ranging from the Linux kernel itself, to toolchains, languages, power management, security and segment specific software for mobile, digital home, networking and server. Linaro is home to an exceptionally talented group of employee and member engineers working on open source software engineering across a range of collaborative projects, including the Linux kernel itself.

The 96Boards initiative is intended to help SoC vendors and their partners to more easily create low cost development boards for software developers and other community users. The idea is that by providing specifications that are publicly or “openly” available, anyone can design and build a board that is compatible with the 96Boards specifications without payment of license or royalty. As such we call the specification an “Open Platform specification”. The 96Boards brand is owned by Linaro and may be used on compliant boards by companies who choose to enter an agreement with Linaro. Linaro itself does not design or build any boards.

“Open Source” as a term generally applies to software, as shorthand for “open source code”. More recently it has also been applied to hardware under a variety of licenses including from OCP, TAPR, CERN and OSHWA.

Generally “open source hardware” is taken to mean hardware designs for which full manufacturing information (schematics, CAD files, gerbers, BOM etc.) are made freely available under “open source-like” licenses.

**For many applications this makes perfect sense. As examples:**

Arduino® deliver full manufacturing files and information for the Arduino Uno in the form of Eagle CAD files. This enables the maker community to easily create Arduino-compatible or derivative boards. Hobbyists and startups alike can experiment using easy to make PCBs with only soldering iron skills required. For more advanced surface mount designs, readily available low cost laser cut stencils and SMT prototyping equipment (or even a kitchen toaster oven) can be used to create prototype boards.

At the other end of the scale, OCP is delivering standardized open hardware designs for server components. A goal is to enable third party ODMs to easily build 100% compatible products. To make this as easy as possible full design information is freely available for several OCP reference hardware designs.

However, electronics design for many products has changed hugely over the past decade. As SoC clock speeds have increased past the 1GHz barrier and power management has become increasingly important, it is not uncommon to see multiple ultra-high speed buses on a single SoC and the use of a power management IC (PMIC) providing 20 or more power rails at various voltages, noise and power levels. Printed Circuit Board design has become a highly specialized skill requiring knowledge of analog signal behavior, impedance matching and designer-level knowledge of the characteristics of the SoC/PMIC combination. As a simple example, standard 1.6mm thickness PCBs can present significant problems for mobile SoCs which have been designed for very thin PCBs in mobile phones - the increased distance between decoupling components and copper traces on inner layers can make the difference between a reliable design and one that may exhibit failures running at full speed. The PCB designer will often carry out full SPICE simulations of high speed signals and power supply routing in order to determine whether the trace routing and impedance matching meets specifications. The PCB board stackup and thickness are also critical in achieving the optimum design.

There is a considerable investment in tools and specialist engineering effort required in designing with a modern high speed SoC which can have over 600 pins in a 0.4mm pitch BGA package - board design and layout costs can easily exceed $25K even before an initial prototype can be built. Furthermore, designs for new SoCs often require the direct involvement of the SoC vendor’s engineers to ensure that design rules for the SoC and PMIC have been fully met.

For the 96Boards initiative a key goal was to enable multiple vendors to create compatible low cost boards using different SoCs. To reach this goal we understand that the SoC and board vendors need to be free to deliver boards using different business models. For example, an SoC vendor might fund a board development and make all manufacturing information available to the community. Alternatively a board vendor may fund the board development and recoup its investment through board sales. In this latter case it is not fair to expect the board vendor to fund the board development and then be required to make the costly design package free to anyone to manufacture a direct copy.

Therefore, the 96Boards initiative currently allows vendors to make their own decisions on the release of manufacturing information. To obtain 96Boards certification from Linaro a board schematic must be published. However, the board vendor is then free to choose whether they make the manufacturing information “open source” or keep it proprietary.

We hope that some vendors will choose the fully open path, but we also recognize that to achieve our goal of getting low cost access to new SoC devices for software and product developers we need to enable those that invest in this initiative to make a return. As a not for profit company Linaro’s goal is to enable the ecosystem, and our own efforts are funded by those companies who choose to participate in the 96Boards Community Program.

At $129, the first [96Boards product](https://www.96boards.org/products/), the HiKey board using the HiSilicon octa-core ARM 64-bit Hi6220 SoC represents a price breakthrough, reducing the cost of ARM 64-bit boards available to software developers by at least an order of magnitude. As we set out on this exciting journey we look forward to seeing further 96Boards products from others in the near future, and we welcome the participation of the entire community as we move forward with this initiative.

George Grey

CEO, Linaro