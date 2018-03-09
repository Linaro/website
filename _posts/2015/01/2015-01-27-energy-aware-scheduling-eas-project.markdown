---
author: amit.kucheria
categories:
- blog
comments: true
date: 2015-01-27 17:40:39
description: "The energy-aware scheduling (EAS) project is trying to solve a long-standing
  design limitation of two key power-management subsystems (CPUFreq and CPUIdle) -
  they don\xE2\x80\x99t coordinate their decisions with task scheduling decisions."
excerpt: "The energy-aware scheduling (EAS) project is trying to solve a long-standing
  design limitation of two key power-management subsystems (CPUFreq and CPUIdle) -
  they don\u2019t coordinate their decisions with task scheduling decisions."
layout: post
slug: energy-aware-scheduling-eas-project
tags:
- Core Dump
- EAS
- Energy-Aware
- Scheduling
title: Energy-Aware Scheduling (EAS) Project
wordpress_id: 7809
---

# **Energy-Aware** Scheduling **(EAS) Project**

{% include image.html name="1.jpg" alt="1" %}

The energy-aware scheduling (EAS) project is trying to solve a long-standing design limitation of two key power-management subsystems (CPUFreq and CPUIdle) - they don’t coordinate their decisions with task scheduling decisions.

As shown in the figure below, the scheduler, cpufreq and cpuidle subsystems work in isolation, at different time scales and often at cross-purposes with each other. The scheduler tries to balance the load across all CPUs (without any regards to the power costs) while the CPUFreq and CPUIdle subsystems are trying to save power by scaling down the frequency of the CPUs or idling them, respectively.

{% include image.html name="2.jpg" alt="2" %}

The Power Management (PM) subsystems have heuristics (in their governors) to try to predict the best time to save power on the CPU without affecting performance. These heuristics use their own means to try to gauge the current utilisation of the cpu and have to be run several times a second to react to any changes in the system - it is _reactive_ by design. Moreover, the scheduler is constantly breaking their predictions by task scheduling because it has no knowledge of the power topology of the SoC.

A key observation here is that the scheduler is the best place to know about past, current and immediate-future utilisation of the CPU since it controls where to place various tasks. So we could, in theory, scale the frequency of the source and destination CPUs (decrease and increase them respectively) during a task migration from one CPU to another. Similarly, the scheduler could arrange for tasks to be scheduled on fewer CPUs, thereby allowing the remaining CPUs to be shut-off to save power. Developers could become more _proactive_ in their ability to take advantage of smarter task scheduling to save energy.

“Sounds pretty straightforward and simple change - consolidate the heuristics into the scheduler for tighter integration with power management. Then why is it taking ages to get the changes merged?!” - you ask.

There are several obstacles that make this a complex undertaking. It is like peeling onions - removing one layer reveals more underneath. The key issues being addressed currently are:


  1. The scheduler does not have any notion of power topology of the SoC. Simply moving the heuristics wouldn’t allow it to become smarter about task placement. We’ve fixed this problem[ upstream](https://lkml.org/lkml/2014/5/8/189) with the addition of the SD_SHARE_POWERDOMAIN scheduler flag and fixing several problems related to configuration of sched_domain topology along the way.


  2. While working on tighter integration between the scheduler and PM frameworks, we’re also trying to make the scheduler work better with big.LITTLE systems in a generic way. This requires breaking the scheduler’s (and the Linux kernel’s) assumption that all CPUs are equal. Not surprisingly, this assumption is hardwired all over the kernel and takes some work to undo. We’ve started fixing this problem[ upstream](https://lkml.org/lkml/2014/7/28/730) by revamping how CPU capacity is handled by the scheduler but the work is not done yet. Several patches have been merged and some are[ under review](https://lkml.org/lkml/2014/10/7/278).


  3. On the CPUIdle-scheduler integration front, there are two ongoing lines of work:


    1. Tighter integration of the idle task in the scheduler with CPUIdle, simplification of CPUIdle core, improve traceability of the idle path (Already merged:[ Patchset 1](https://lkml.org/lkml/2014/1/29/305),[ Patchset 2](https://lkml.org/lkml/2014/2/6/492),[ Patchset 3](https://lkml.org/lkml/2014/7/18/25); Under review:[ Patchset 4](https://lkml.org/lkml/2014/10/23/134))


    2. Replacement of menu governor: Some heuristics used in the menu governor to predict the next wakeup event, like the performance multiplier, are just magic numbers calculated on x86 systems that don’t work well on other systems. Analysis of the heuristic has lead to the creation of a new framework, the[ IO latency tracking framework](https://lkml.org/lkml/2014/10/22/355), that is currently being reviewed upstream. In disk IO testing, the framework gives much better predictions of the next IO event than the menu governor which translates to better idling of CPUs. The framework was[ presented](http://www.linuxplumbersconf.org/2014/ocw/sessions/2397) at the Linux Plumbers Conference (LPC) where the design was considered good, but changes were sought in the implementation to make the latency tracking device-specific instead of task-specific. Refactoring of the implementation is on-going at this point.





  4. In order to better integrate CPUFreq and the scheduler we first need to fix the problem that the same load _looks_ different on the same CPU at different frequencies or on different CPU types (such as big and LITTLE). For example, a 20% load at 500MHz becomes a 10% load at 1GHz, even though the actual work done is the same. These artificial changes to a task’s load lead to sub-optimal load balancing. There are now[ patches](https://lkml.org/lkml/2014/9/22/412) being discussed on the list to bring scale invariance to load tracking. Based on this scale invariance work, there is also a[ draft patchset](https://lkml.org/lkml/2014/10/22/21) being reviewed that will drive CPUFreq directly from the scheduler. Scheduler-driven DVFS was[ discussed](http://www.linuxplumbersconf.com/2014/ocw/sessions/2427) at LPC and the view of the maintainers was to simplify the patchset for review by _not_ handling the group scheduling initially.


  5. Refactoring long-standing code generally takes longer than merging a new feature because we _cannot_ regress existing users of the scheduler, CPUFreq and CPUIdle subsystems. So we’ve had to ensure two things: we don’t regress power management on all existing machines and that the new code doesn’t regress scheduling performance. To top that, there is no single person that understands completely how the scheduler and HW power management work - it is a collaborative effort among several domain experts working for different companies who have other tasks too as part of their jobs. So all the changes need to be broken down into small improvements that are easy to review for everyone concerned and to debug, once merged.


* * *


I classify all of this work as EAS infrastructure work. Once done, the picture might look a bit like the one below (greatly simplified).

{% include image.html name="3.jpg" alt="3" %}

All these changes will allow sophisticated load balancing heuristics to be developed that allow all of the following:

  1. Tune the scheduler to optimise for energy savings and performance

  2. Schedule correctly on big.LITTLE systems

  3. Improve PM behavior on SMP systems
  
  4. Provide mechanisms for thermal management

ARM’s energy model[ patchset](https://lkml.org/lkml/2014/7/3/884) is one example of such a possibility that is currently being reviewed. Other Linaro Members have ideas for other such heuristics that would take advantage of this tight integration between the scheduler and power management subsystems. The Power Management team is collaborating and coordinating with Linaro Members to ensure that the best possible set of solutions is available upstream.

In order to make this useful to Members shipping products in 2016, we’ll also be backporting all this work to the Linaro Stable Kernel (LSK). Stay tuned for announcements on that front.

If you are interested in more details, perhaps you’ll like the[ LWN article](http://lwn.net/Articles/602479/) that covers some historical background and more technical details and a recent[ report](/blog/summary-energy-aware-scheduling-workshop-linux-kernel-summit-2014/) on the Linaro Core Dump blog summarizing the results of the EAS Workshop at the 2014 Linux Kernel Summit.

**Note: _this article was originally published in Linaro Monthly Engineer Status Update 2014.10 and updated with the latest news to be published in this blog._**