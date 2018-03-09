---
author: george.grey
categories:
- blog
date: 2011-10-04 16:15:16
description: Differentiation and a Single ARM Linux Kernel- discussion on consolidating
  and optimizing Linux on ARM.
keywords: ARM Linux, Linux ARM, kernel, Linaro, ARM fragmentation, SOCs, ARM SOCs,
layout: post
link: /blog/industry-blog/september-ceo-report/
slug: september-ceo-report
tags:
- arm
- Industry
- embedded
- kernel
- Linaro
- Linux
title: September CEO Report
wordpress_id: 594
---

**Differentiation and a Single ARM Linux Kernel**

This note was inspired by our current roadmap discussions within Linaro. A view was offered that a single ARM binary kernel wasn't that important in the embedded world. This led to thinking more about our key technical objectives of consolidating and optimizing Linux on ARM. Is a long term goal of a single ARM kernel across vendors a good objective, or simply a waste of engineering effort?

The key to the success of the ARM architecture lies in the ability of ARM licensees to differentiate. Rather than a set of commodity devices, the ARM vendors together offer hundreds of available high end Cortex A-series SoCs for a wide variety of market segments, each with different price points, performance metrics and feature sets. This ability to differentiate allows ARM licensees to create value by tailoring their SoC products to exact OEM/ODM customer or market segment requirements.

At present each ARM vendor builds and maintains their own Linux tree, typically starting with the upstreamed ARM support in the mainline or stable kernel.org trees. There is no single kernel with a framework for adding interfaces for each SoC, but rather one or more kernel implementation(s) from each vendor. The result has been unintended fragmentation, and, as SoCs have become more complex, an increasing workload in maintaining each vendors software platform. Linaro was formed to consolidate and optimize Linux on ARM, helping members to share the investment required to develop and support core Linux software, thereby reducing engineering and maintenance costs for every member. Good progress is being made - examples include new support for Device Tree, work in consolidating frameworks for power management and multimedia, and ongoing work in kernel memory and buffer management.

Without taking action, the result of increasing differentiation and complexity is that new products take longer to get to market. As an example, Google choose a "reference" ARM device for each Android product delivery - everyone else then has to port their own SoC architecture post release. The result is delayed time to market, risk to software quality through rapid change to kernel code, and fragmentation of implementations. Linaro is working to improve this situation by helping to identify and upstream common non-value adding feature sets, reducing the porting load as key distributions pull generic and member specific improvements by Linaro directly from kernel.org and other projects.

However, differentiation remains a core value proposition for ARM vendors. Today, for mobile applications, ARM devices enjoy considerable low power advantages over competing architectures. This may not always be the case. If that advantage is one day largely eliminated and software fragmentation continues, customers may decide that the faster and lower cost route to market is with a commodity one size-fits-all device with external differentiation, rather than a more differentiated SoC. As hardware complexity grows, this risk increases. Ultimately the commodity architecture wins because it becomes less costly to build products on top of a high volume platform, than to deal with the software differences between "differentiated" products.

In our industry "explosive" innovation happens around "platforms" - the ISA bus and PC software led to thousands of peripherals working on a single platform; the iPhone SDK resulted in hundreds of thousands of applications built in a few short years on another single platform. Paradoxically, to make it possible for SoC vendors to innovate and differentiate, a better single platform is becoming critical. The ARM instruction set is not enough; a core and extendable hardware and software platform is required so that SoC differentiation can be achieved, without compromising time to market. In a perfect world the core of a software OS should not need extensive "porting" to every new vendors ARM SoC.

As ARM vendors and partners we need to do everything we can to foster the development of that platform, keeping in mind the key value proposition of enabling differentiation. This involves agreeing aspects of hardware and software architecture across competitors to enable the creation of an engine that drives the next wave of SoC differentiation and value-add. The ability to differentiate is key to the success of all ARM vendors - but if that differentiation is in areas that do not add value, the result is at least one of higher costs, longer time to market, and at worst, actual value destruction. In hardware terms differentiation in bit I/O ports, interrupts, timers, USB ports doesnt add value - it just makes the software task more complicated. In software terms having every vendors BSP use a differentiated scheme for achieving memory and buffer management does not add value. The same problems apply.

A common binary kernel is not in itself a required outcome, but a common platform is. Looking at the single ARM kernel as a long term objective helps us at Linaro think about where consolidation between member implementations can reduce code duplication and fragmentation in the Linux kernel, and moves us closer towards the goal of creating an improved platform for innovation for all of our members, to help them leverage the opportunity for value creation that the ARM licensing model offers. And that is a good thing.