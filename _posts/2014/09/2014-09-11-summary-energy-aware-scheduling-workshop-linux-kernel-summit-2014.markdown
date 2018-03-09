---
author: mike.turquette
categories:
- blog
comments: true
date: 2014-09-11 13:03:28
description: State of the art of energy-aware scheduling with a brief overview of
  the discussions and outcomes of the EAS workshop at Linux Kernel Summit 2014
excerpt: State of the art of energy-aware scheduling with a brief overview of the
  discussions and outcomes of the EAS workshop at Linux Kernel Summit 2014
layout: post
slug: summary-energy-aware-scheduling-workshop-linux-kernel-summit-2014
tags:
- Core Dump
- EAS
- kernel
- Kernel Summit
- lflks
- Linux
- LinuxCon
- power management
- Summit
- workshop
title: Summary of Energy-Aware Scheduling workshop, Linux Kernel Summit 2014
wordpress_id: 6674
---

# Summary of Energy-Aware Scheduling workshop, Linux Kernel Summit 2014

## **What is energy-aware scheduling?**

{% include image.html name="Linux-Kernel-Summit.png" alt="Linux-Kernel-Summit" %}


A topic of increasing interest is the push for energy awareness in the Linux kernel scheduler. While the topic is broad and deep, the general goal is to adapt the Linux kernel scheduler to take into account the energy cost of the decisions it makes and, with knowledge of the underlying hardware platform, make more intelligent decisions that can save power whilst maintaining existing performance levels. This general goal will be achieved through many efforts including new tools to help test changes and validate assumptions, as well as the integration of existing power management subsystems such as CPUfreq and CPUidle with the scheduler. The end result will be Linux-powered devices that consume less energy, manage thermal events with panache and perhaps are even more performant. This is a boon for battery-powered mobile devices, big iron data centers and everything in between and the backgrounds of the workshop attendees reflect that.

The 2014 edition of the Linux Kernel Summit hosted a single day workshop focused on the topic. The original agenda can be found [here](https://docs.google.com/document/d/1YV44gufokmuKbeNG8vjOJirEY_GdsJymxP2ayHG4FAM/edit).



**Tooling up**

[Morten Rasmussen](http://uk.linkedin.com/in/mortensrasmussen) from ARM organized and ran the session, and started things off with a look at the current state of tooling around energy-aware scheduling. [Daniel Lezcano](http://fr.linkedin.com/pub/daniel-lezcano/5a/143/848) and myself, both from Linaro, discussed the recently [announced](http://marc.info/?l=linux-kernel&m=140847191425149&w=2) [idlestat](https://git.linaro.org/power/idlestat.git) and [rt-app](https://git.linaro.org/power/rt-app.git) tools. The former is a trace analyzer based on a per-platform energy model to help estimate the energy consumption of a measured workload. Using this tool one can validate changes to the Linux scheduler and get a good idea of whether the change brings a net gain or loss in terms of energy consumption without having to set up actual power measurement hardware in a laboratory setting. Linaro has created a workload generator based on rt-app that allows for simple and complex workloads to be specified in a JSON format and executed on a target to see how the scheduler reacts. One of the key benefits of the tool is that it has lightweight dependencies and does not require an Android stack, a requirement of other synthetic workload tools. Standardization around these tools brings a strong benefit to Linaro members, who can use them internally to tune products for optimal power and performance while receiving the benefits of an open source tool that will hopefully receive wide adoption.

A quick survey to see what tools the attendees were using yielded many answers. Common choices were ebizzy and Geekbench. For those shipping Android devices the workload generation and benchmarks were typically Android-specific, such as Quadrant, and thus not helpful to anyone not using Android. Similarly some attendees had access to internal tools that estimated power or energy consumption of a target, but they were mostly platform- and machine-specific and likely proprietary. The response to idlestat and rt-app was thus positive, as they impose few requirements on the user and hopefully will scale to various types of machines, workloads and power models.

There was discussion of Fengguan Wu’s 0-day test infrastructure at Intel, which has recently gained some automated power measurement capabilities. Additionally Chromium’s [power_LoadTest](http://www.chromium.org/chromium-os/testing/power-testing) was mentioned and I look forward to trying that tool out.



**Statistically significant**

The next topic concerned some of the scheduler’s statistics: task & cpu utilization, compute capacity and load tracking. Much of the early discussion centered around renaming variables, which first required everyone in the room to get on the same page as to their meaning and then to agree on how to use them. Not a small task.

It seemed that various attendees have [out-of-tree code that](https://www.codeaurora.org/cgit/quic/la/kernel/msm-3.10/tree/?h=msm-3.10) used some of the scheduler’s statistics in different and conflicting ways. Some of these may in time be proposed for upstream acceptance on the mailing list while others will remain out of tree forever.

A recurring theme was the difficulty in knowing what to do once a cpu is fully utilized. The statistics often cannot help you as much here, since you do not know know how over-utilized the cpu is. You only know that it is indeed fully utilized.

A strong agreement from the room was that the documentation needed to be updated to clarify what the metrics mean and how they should be used.



**An energetic discussion**

The energy model discussion took place after the CPUfreq integration discussion at the workshop (see below section), but makes for better reading if introduced early on.

The short idea behind the energy model is a table-based method for platforms to express the energy consumption at a given configuration. This information is very useful to the scheduler. For instance when periodically balancing the load, task placement may have an impact on power consumption. Such a model is needed to make an informed choice between migrating a task from a source cpu to a destination cpu versus leaving the task on the source cpu and scaling the frequency of that cpu instead. In addition, other scheduler policies such as whether to pack small tasks or not is something best left decided by a platform-specific energy model. Happily there was no objection to the general concept of introducing an energy model to the scheduler, a significant milestone for the workshop. This energy model approach is exciting for anyone shipping a power-sensitive device, but especially so for those shipping heterogeneous systems such as the ARM big.LITTLE solution.

The energy model itself is not unfamiliar to those acquainted with P-state and C-state tables from the CPUfreq and CPUidle subsystems. The data exists hierarchically based on the sched_domain layout and decisions tend to be made starting at the innermost domain and moving up to the next, higher domain as needed.

Also in this proposal is the energy_diff function that allows the scheduler to query the energy model for the cost of an action, such as migrating a task from one cpu to another. I pointed out that this query-the-cost method might not be a scalable interface once cpu frequency scaling is added to the mix. While that point was debated briefly it was agreed that we cannot know the final interface design this early on in the process.

While some time was spent on the mechanism to get the per-platform and per-machine data into the model (ACPI, Device Tree, platform data), mostly that is a problem for another day.



**Frequent flyers**

{% include image.html name="tux-eas.jpg" alt="tux-eas" %}

The workshop moved on to discuss the integration of the Linux CPUfreq subsystem with the scheduler. Happily much of the discussion aligned nicely with the experiments being conducted within Linaro. [Paul Turner](http://www.linkedin.com/pub/paul-turner/23/0/586) and [Peter Zijlstra](http://nl.linkedin.com/pub/peter-zijlstra/0/568/797) both referred to the scheduler-facing interface as an “oracle”, meaning that the scheduler queries the platform energy model about such topics and task placement and cpu frequency scaling. The main benefit here is to unify the cpu frequency selection with task placement selection, something that is sorely lacking in products today.

Those shipping power sensitive devices have no doubt felt the pain of tuning a CPUfreq governor and seen it scale the cpu frequency in a way that is at odds with the scheduler’s task placement, especially for high value use cases such as low power MP3 playback or web browsing. Integrating CPUfreq with the scheduler hopes to resolve these issues.

It was pointed out that some CPUfreq drivers might sleep or block in the course of adjusting cpu frequency it is necessary to partition support for these drivers into non-blocking and blocking categories. The non-blocking drivers will execute their cpu frequency transition in the scheduler context (e.g. with a few register writes), but the blocking driver will need to wake a thread to handle their transition (e.g. calls to the clock and regulator frameworks which hold mutexes and often require slow I2c transactions).

Additionally there was some discussion of the dependencies for this work. The ultimate goal would be to select cpu frequency based on the energy model mentioned above, but it was decided to not depend on the energy model to get the first RFC on the list. The attendees agreed that a naive and simple solution which uses cpu utilization as the cpu scaling heuristic would be a reasonable first step. Energy model integration can come later.

Finally there was a good amount of discussion around where this development leaves legacy CPUfreq governors and their corresponding tunable parameters. Especially for those shipping power-sensitive mobile devices there is a strong desire to retain knobs and switches by which a vendor can tune their cpu scaling algorithm on a per-product basis. There was mostly consensus in the room that much of the existing knobs in the CPUfreq governors today are indicative of an outdated design. Instead the energy model itself can be tuned in downstream kernels on a per-product and per-platform basis. Doubtless it will be tuned _to death_ by those shipping devices with small batteries, and the hope is that better energy savings _and_ better system responsiveness can be achieved by combining the per-platform energy model with scheduler-driven decision making. Some in the workshop remained skeptical and as always this topic will be sorted out on the mailing list in time.

**Idle minds**

Nearing the end of the day the workshop attendees consumed another cup of coffee and then  turned their attention to the integration of Linux’s CPUidle subsystem with the scheduler. Daniel Lezcano and [Nicolas Pitre](http://ca.linkedin.com/in/nicolaspitre) discussed removal of the CPUidle governors and introducing idle state knowledge into the scheduler.

This work hopes to improve selection of idle states on systems with complex topology, including big.LITTLE systems. This work will lead to fewer wrong choices in idle state selection and improved energy savings.

[Preeti U Murthy](http://in.linkedin.com/pub/preeti-murthy/16/24a/270) from IBM was quick to point out that the scheduler has nothing resembling the coupled C-state infrastructure used by some ARM SoCs and it was concluded that the energy model would be the best place to handle this case.

In addition Daniel has recently posted an RFC series to the linux-kernel mailing list that tracks per-tasks wake-ups as a way to have a more accurate prediction of wake-up behavior. This departs from the old way of predicting wake-ups, which did not take the individual tasks into account for a more fine-grained estimate.

The feeling in the room was positive towards this progress and it seems the work will continue forward without a major shift in direction.

**Virtually done**

At the end of the day the workshop attendees briefly touched on energy-aware scheduling as it pertains to a virtualized environment. It was generally concluded that guests should not be managing hardware resources and that the host would be the right place to make the final, energy-aware decision.

There is a case where a strictly partitioned system with cpus in isolation might be a good candidate for having a guest os manage the power state of the partitioned cpus, but even in that case the majority of attendees favored letting the host manage the hardware resources.

In conclusion, the Energy-Aware Scheduling workshop was a success for all involved. While this particular meeting focused more on aligning the interested parties on the way forward, no doubt future face-to-face discussions will delve even deeper into technical topics.

In the near term, Linaro Connect USA 2014 will continue the discussion and development around these topics in mid-September. A two-day energy-aware scheduling workshop promises an intense focus moving the design forward and getting patches merged upstream in addition to the usual hacking sessions and meetings with members, many whom have expressed great interest in this area.