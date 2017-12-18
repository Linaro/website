---
author: david.rusling
date: 2010-08-18 19:11:00+00:00
layout: post
link: /blog/linaro-deliverables/
slug: linaro-deliverables
title: Linaro deliverables
wordpress_id: 4109
categories:
- blog
tags:
- '10.11'
- release
- release cycle
- software
- tools
---
Talking about the six monthly Linaro releases is, perhaps, a little misleading. It may create the impression that there are no Linaro deliverables between the six monthly release dates. The truth is that there are many deliverables from Linaro; a mixture of code donated to open source projects, staging code and baseline releases. The goal of the six monthly development cycle is to refine the set of engineering problems to be solved at the start of the cycle and then to manage the delivery of that engineering effort cleanly during that cycle. The set of problems is divided between existing and newly created working groups at a developer summit that occurs at the start of the cycle. This set of requirements is owned and refined by the Technical Steering Committee (TSC). Working groups have a scope and, within that scope, a set of work items encoded as blueprints.

Each working group implements blueprints, each describing aspects of the engineering being delivered within the scope of a working group. Linaro's working groups work within the open source projects, donating code and tracking them as they move. These open source projects are described as upstream as code flows downstream into distributions and products. This effort creates the upstream code deliverables for functionality that will, over time, flow into distributions via upstream releases. As an example, the toolchain working group has been creating patches that are being donated into the GCC 4.6 release due out in spring 2011. Along the way, staging trees may be produced. These contain code that has been accepted, or is likely to be accepted, in the upstream. These are used to validate the release and use within Linaro's engineering. The staging trees are regularly built and often have monthly releases (indeed, it may be more accurate to refer to these as release trees). These staging releases could be taken by organizations, such as distributions, in much the same way as they would treat releases from the original open source projects. This is starting to happen with the toolchain releases, with Ubuntu taking the GCC 4.4.4 work directly from the toolchain working group.

<!-- more -->

The deliverables at the end of each six month cycle is a baseline release of all of the engineering components that Linaro has been working on. Aside from the engineering discipline needed when adhering to a six monthly cycle, the aim here is to test that all of the components work correctly with each other. The main deliverable is the so-called 'headless' image. This is a minimal system used when bringing up new hardware (often on RTL simulators or early FPGA integration systems); which is how the Linaro members intend to use this.

To find out more about the releases or to download tools or code visit

[/developers/](/developers/)
