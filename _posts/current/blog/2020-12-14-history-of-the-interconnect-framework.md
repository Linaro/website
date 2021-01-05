---
layout: post
title: History Of The Interconnect Framework
description: The Interconnect API is a framework for configuring the on-chip
  interconnects in the system. The framework tunes the system for the best power
  and performance while taking into account the aggregated traffic between the
  different endpoints. It was merged in January 2019 and is available in the
  Linux kernel since v5.1. In this article I’ll share more about the history
  behind it.
date: 2020-12-22 04:28:00
image: /assets/images/content/city.jpg
tags:
  - Power & Performance
  - BUS scaling
related_projects:
  - PERF
category: blog
author: georgi.djakov@linaro.org
---
# Saving Power & Improving Performance With Dynamic Interconnect Scaling

{% include image.html path="/assets/images/content/interconnect-framework-timeline.png" alt="Interconnect Framework Timeline" %}

The Interconnect API is a framework for configuring the on-chip interconnects in the system. It provides an API for drivers to express their bandwidth needs when transferring data and interacting with the different hardware blocks in the system. The framework tunes the system for the best power and performance while taking into account the aggregated traffic between the different endpoints. It was merged in January 2019 and is available in the Linux kernel since v5.1. In this article I’ll share more about the history behind it.

In March 2016, at the Linaro Connect in Bangkok, Stephen Boyd did a presentation titled “[Dissecting the 2M LoC QC fork](https://www.slideshare.net/linaroorg/bkk16500-dissecting-the-2m-loc-qc-fork)”. He gave an overview of how different a SoC vendor kernel is from the mainline Linux. The SoC vendors usually fork the mainline kernel and add support for their hardware. The changes added on top are generally not just drivers, but also significant changes all over the place, including changes into core frameworks and tons of code to support new features and standards, various optimizations and tuning for specific use-cases.

At that time I also remember seeing this picture, which was later used in the “[The Upstream Bubble](https://connect.linaro.org/resources/san19/san19-300k2/)”. It’s a functional dependency graph showing what kind of dependencies each individual driver has on one of the Qualcomm SoCs at that time. The Bus Scaling node, in the center of the graph is colored in dark blue, which means that many drivers are not able to function without it. It was also circled in red, to denote that this particular feature is not supported upstream.

{% include image.html path="/assets/images/content/upstream-bubble.png" alt="Functional Dependency Graph" %}

## Bus Scaling

The Bus Scaling node represents a piece of code known in the downstream Qualcomm kernels as msm-bus. The task of this driver was to configure the bus performance across the entire SoC. This happens based on the requests from clients and involves configuring clock frequency, latency and QoS parameters for each bus. This driver also takes care of enabling access to resources on the bus (which very likely could be disabled by default in order to save power). So without it, many other drivers would not be able to function.

Linaro’s spirit is all about open-source collaboration, so we started brainstorming with engineers from Linaro, Qualcomm and the Linux community, wondering how such a feature could be supported in the mainline Linux and whether it could be useful for others too. The existing downstream code was vendor-specific and written with different requirements in mind, keeping it away from meeting the upstream standards. This was expected, as the SoC vendors are mainly focusing on their products and upstreaming drivers takes more time and discussion. For a completely new framework, it could be much more. The code had to be completely rewritten and I decided to get familiar with the theory and start from scratch.

At Linaro Connect September 2016 in Las Vegas, I made a presentation about the evolution of the SoCs and the Network-On-Chip concept, explaining the problem that we wanted to solve. There were many ideas about expanding the current frameworks like PM QoS and the Generic PM domains. Many discussions followed - about topologies, governors, links between devices, device-tree bindings etc.

## Power Consumption

In 2017, I started posting RFC patches on the mailing lists. The initial feedback was very minimal, so in September, I undertook a demo and made a presentation about it at Linaro Connect in San Francisco. The demo setup was with two Dragonboard 410c boards, wired with ARM energy probes to measure their power consumption in real-time, while running different use-cases (video playback, idle, etc). One of the boards was scaling the interconnects dynamically and the other one did not. The board with the scaling was showing a lower power consumption by up to 26% in some use-cases. People were interested and we had a nice discussion with kernel developers from different companies. It turned out that some SoC vendors were also working in this area, although they were far behind - compared with what Qualcomm already had. I was getting more confident that we should find a common solution. But on the other side, many people expressed concerns that supporting such functionality would be very difficult to implement as it would require significant changes to many existing kernel frameworks. After discussing with the Linux community at the Linaro Connect conference about the pros and cons of reusing and extending the existing infrastructure, considering a completely new framework seemed to be the best option.

## Scaling Interconnect Bus

Then in April 2018, Vincent Guittot and I made a presentation (Scaling Interconnect bus) at the [OSPM Summit](https://lwn.net/Articles/754923/). Explaining the idea to other kernel experts and maintainers with more details and example use-cases helped considerably to get a clearer picture. This was a common problem, which was solved differently in the SoC vendor kernels - often by introducing hacks and abusing existing frameworks. There was definitely a need for a common solution. I proposed a new API and the feedback was very positive with people agreeing that such functionality deserves a new framework. However, we had other problems to soon tackle. The first one was adding bandwidth support to OPP for consumers that can’t determine their own bandwidth needs. The second one was to allow shared paths to be used by CPUs and DSPs coexisting in the same SoC.

During the next few months, I just continued updating the patches and in September I made  another presentation at Linaro Connect (On-chip interconnect API). Then in November, Vincent Guittot kindly offered to make the same presentation at the Linux Plumbers Conference.

As the patches continued to mature, I contacted a few developers from different SoC vendors to make them aware of this work and gain some confirmation that the framework will work for them too. The patches have been included in some of the CI builds at Linaro and also in linux-next to get a wider test coverage. Alexandre Bailon posted on the mailing list a driver for the i.MX 7ULP platform, and now we had provider drivers for not just Qualcomm platforms. In parallel, I posted a few examples of how the new API should be used by consumers. This helped people to start using it in the Qualcomm drivers they post upstream.

## Kernel v5.1

After a few more iterations, finally, v13 of the framework was merged in January 2019 for kernel v5.1 including the support for some of the Qualcomm platforms. Then more and more features were added like the bandwidth support in OPP tables. A big problem was also keeping the initial interconnect configuration (done by bootloaders), that we didn’t want to change until all drivers have probed and expressed their bandwidth needs. Otherwise a path might get disabled before the user had a chance to request the amount of bandwidth it requires. We solved it by extending the sync_state support that was added in the driver core by Saravana Kannan. Meanwhile, patches to add initial support for Exynos and Tegra have been posted and drivers from different subsystems started to use the framework - CPU, GPU, display, I2C, UART, SPI, USB, MMC, hardware accelerators, video decoders etc.

## Platform Support

Linux v5.11 will support multiple platforms by four different vendors. There are 7 Qualcomm platforms supported upstream and the company is switching to the upstream interconnect framework for their new products that will be based on the recently announced Snapdragon 888 platform. The i.MX8 series application processors by NXP are supported since Linux v5.8 and now Samsung’s Exynos and Nvidia’s Tegra are gaining initial support. Drivers for Mediatek platforms are under review on the mailing lists. I am very happy to see that more companies are joining the party and making use of the Interconnect framework to solve their problems and benefit. And that’s what Linaro is all about - leading hardware and software companies collaborating on open-source software for ARM platforms.

Many thanks to the people who participated in the initial discussions or provided feedback during the development:
Vincent Guittot, Saravana Kannan, Sean Sweeney, David Dai, Mike Turquette, Kevin Hilman, Alexandre Bailon, Bjorn Andersson, Daniel Lezcano, Ulf Hansson, Rob Herring, Rafael Wysocki, Evan Green, Viresh Kumar, Greg Kroah-Hartman and others.