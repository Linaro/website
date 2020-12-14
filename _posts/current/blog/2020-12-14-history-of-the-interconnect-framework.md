---
layout: post
title: History of the Interconnect framework
description: |-
  HEADING TBC

  TBC
date: 2020-12-14 03:08:37
image: /assets/images/content/city.jpg
tags:
  - TBC
category: blog
author: jon.burcham@linaro.org
---
# HEADING

{% include image.html path="/assets/images/content/interconnect-framework-timeline.png" alt="Interconnect Framework Timeline" %}

The Interconnect API is a framework for configuring the on-chip interconnects in the system. It provides an API for drivers to express their bandwidth needs when transferring data and interacting with the different hardware blocks in the system. The framework tunes the system for the best power and performance while taking into account the aggregated traffic between the different endpoints. It was merged in January 2019 and is available in the Linux kernel since v5.1. In this article I’ll share more about the history behind it.

In March 2016, at the Linaro Connect in Bangkok, Stephen Boyd did a presentation titled “Dissecting the 2M LoC QC fork” [1]. He gave an overview of how different a SoC vendor kernel is from the mainline Linux. The SoC vendors usually fork the mainline kernel and add support for their hardware. The changes added on top are generally not just drivers, but also significant changes all over the place, including changes into core frameworks and tons of code to support new features and standards, various optimizations and tuning for specific use-cases.

At that time I also remember seeing this picture, which was later used in the “The Upstream Bubble” [2]. It’s a functional dependency graph showing what kind of dependencies each individual driver has on one of the Qualcomm SoCs at that time. The Bus Scaling node, in the center of the graph is colored in dark blue, which means that many drivers are not able to function without it. It was also circled in red, to denote that this particular feature is not supported upstream.

{% include image.html path="/assets/images/content/upstream-bubble.png" alt="Functional Dependency Graph" %}