---
author: mathieu.poirier
date: 2017-05-04 17:52:20+00:00
layout: post
slug: day-2-ospm-summit-pisa-italy
title: Day 2 at the OSPM Summit Pisa, Italy
wordpress_id: 12384
categories:
- blog
tags:
- arm
- Core Dump
- CPU
- idle cluster
- IO Scheduler
- Linux
- linux kernel
- PELT
- power management
- SCHED_DEADLINE
- scheduling disciplines
- schedutil governor
---

[The first summit on power management and scheduling disciplines](http://retis.sssup.it/ospm-summit/) in the Linux kernel was held at Scuola Superiore S. Anna in Pisa Italy on Monday 3 April and Tuesday 4 April 2017.  The event was organised by ARM and members of the ReTis lab.  It attracted a wide audience that spanned both the industry and academic realm. Linaro attended the conference and offers the following summary from day 2 (to read about what took place on day 1, [click here](/blog/day-1-ospm-summit-pisa-italy/)). To view the presentations listed below, click on the headings.

{% include media.html media_url="https://www.youtube.com/watch?v=JEIvZBh5Ou8" %}

[**Possible improvements in the schedutil governor** ](https://www.youtube.com/watch?v=JEIvZBh5Ou8&index=9&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB&t=22s)
By Rafael Wysocki

Rafael had no slides and invited people to have an open discussion on how the schedutil governor can be improved. He gave a general overview of the current CPUfreq governors along with schedutil that uses metrics from the scheduler to drive frequency scaling. The problem that emerges after a year since inception is that updating an OPP or P state is a slow operation and scaling requests happen much faster than the HW can handle. As such we are limited by the number of events to choose from. But that is also sub-optimal because events carrying meaningful information can be discarded. Rafael is of the opinion that something needs to be done with the events received between updates, some sort of aggregation but specifics are still not defined. This triggered a conversation about where to do the aggregation, i.e in the core or push it down to the drivers. The issue of the frequency update window was also breached but no clear conclusion came out of it. At that point another participant noted that many updates do not represent what is really going on in the system. Injecting events when they don't correspond to something important can lead to an aggregation that may not be useful. One option would be to identify specific events in the core scheduler and choose those as decision points. Someone else suggested introducing policies that would dictate how events are considered. Regardless of the solution, people agree that the governor is much slower than the scheduler, hence the need to somehow aggregate events. It was also agreed that the problem should be fixed rather than masked.

{% include media.html media_url="https://www.youtube.com/watch?v=UB-VGNmt6Nw" %}

[**Schedutil for SCHED_DEADLINE** ](https://www.youtube.com/watch?v=UB-VGNmt6Nw&index=10&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Juri Lelli and Claudio Scordino ([slides](http://retis.santannapisa.it/~luca/ospm-summit/2017/Downloads/Schedutil_and_SCHED_DEADLINE.pdf))

The idea behind this presentation is to set CPU frequencies based on runqueues’ active bandwidth, a metric that comes directly from Luca Abeni’s bandwidth reclaiming patchset (see above). Doing so, careful considerations about the runtime reservation of tasks need to be taken into account, i.e tasks still need to meet their requirements when the clock is scaled. From there a graph showing the effect of frequency scaling on the execution time of a task in the context of deadline scheduling was presented. Abeni’s patch on bandwidth reclaiming introduces the per-runqueue “running_bw” variable, a CPU specific utilization contribution metric. Using that operation, points are modified when running_bw is updated. The main design decisions made have been listed, including which bandwidth information to use for frequency scaling (i.e. the more conservative this_bw or the more aggressive running_bw) and how the scheduling class should be informed of frequency changes. The classic problem often raised in scheduler context is that clock scaling is very slow compared to the execution windows allocated to tasks, leaving not enough time to react. Also raised was the issue of current HW design where PMIC hang off an I2C/SPI bus shared with other devices, making contention a big problem. Different approaches about how to raise the priority of the processes responsible for OPP management were discussed without identifying an exact solution. A lot of SW would have to be reworked and even then results are not guaranteed.


{% include media.html media_url="https://www.youtube.com/watch?v=JyA5MpVpAAM" %}

[**Parameterizing CFS load balancing: nr_running/utilization/load**](https://www.youtube.com/watch?v=JyA5MpVpAAM&index=11&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Dietmar Eggemann ([slides](http://retis.santannapisa.it/~luca/ospm-summit/2017/Downloads/Parameterizing_cfs_load_balancing.odp))

This was a discussion about changing the existing completely fair scheduler (CFS) load balancer to use either nr_running, utilization or load as a central metric. At this time, tipping points are used to trigger load balancing but is there a way to change things so that system characteristics are taken into account? Is this feasible? If so what needs to be changed? Today the load balance code supports a lot of specific code for corner cases, resulting in many condition statements and poor readability. The presentation continued with a short breakdown of the current CFS scheduler along with the input signals currently available to the load balancer code, more specifically the load for each entity, the runnable load for CFS runqueues, the number of runnable tasks, utilization (running/blocked) and CPU capacity. Then followed the main heuristics involved in the load balance process, namely finding the busiest group, calculating the imbalance and fixing small imbalance corner cases. All that led to the question of parameterized approach, i.e can we use load balance input signal to simplify the code and if so, what order should be followed (nr_running --> utilization --> load) ? That triggered some discussion on the best way to proceed, one being that all statistics be taken into account before dealing with special cases.

{% include media.html media_url="https://www.youtube.com/watch?v=tyoFqxviXOY" %}

[**Tracepoints for PELT** ](https://www.youtube.com/watch?v=tyoFqxviXOY&index=12&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Dietmar Eggemann ([slides](http://retis.santannapisa.it/~luca/ospm-summit/2017/Downloads/Tracepoints_for_PELT.odp))

Dietmar started his second presentation by saying that it would be nice to standardize mainline kernel scheduler tracepoints in order to have a better understanding of what is going on. Several problems in PELT have been fixed over the last few years and having a set of standard tracepoints would have likely helped tracking those quicker. The question is, what should those tracepoints be for PELT? One requirement is that they be found in all the combination of kernel configuration switches, introduce minimal overhead on the CPU and don’t export information to the outside world. The presentation continued with examples of how metrics related to CFS runqueues, scheduling entities and task groups could be mapped to currently available tracepoints along with the best place to add them. The advantage of such approach would be that load tracking events are standardized, traces can be shared without losing their meaning and that generic post processing tools (for example LISA) can be used on them.


{% include media.html media_url="https://www.youtube.com/watch?v=7TBrcPMGrtI" %}

[**A unified solution for SoC idling - how far have we come?**](https://www.youtube.com/watch?v=7TBrcPMGrtI&index=13&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Ulf Hansson ([slides](http://retis.santannapisa.it/~luca/ospm-summit/2017/Downloads/OSPM-A_unified_solution_for_SoC_idling.pdf))

Ulf started his presentation by going over the power management oriented subsystems in the Linux kernel, more specifically system PM, runtime PM, PM domains, device PM QoS and device wakeup/wakeupirqs. He then continued with a short list of things he would like to see addressed with emphasis on a better collaboration between system and runtime PM along with making it easier for people who write drivers to add PM awareness to their design. Then the concept of a runtime PM centric approach was presented with a parallel between the low power state of devices in both system and runtime PM. The idea is to re-use the runtime PM API from system PM when low power states are the same. This is implemented with two API: SET_SYTEM_SLEEP_PM_OPS(), SET_RUNTIME_PM_OPS(). The approach has been promoted at Linaro and the community for a while and acceptance is growing (46 instances as of 4.11). New ideas about the API respecting device links and drivers using “direct complete” being able to convert to the centric approach are being considered. Ulf followed with an update on the acceptance of genPDs and highlights in the area of reduced latencies in the power off sequence, IRQ save domain support and multiple domain idle states support. He also introduced the idea of a genPD governor to look at the constraints of all devices in the domain and make decisions on the common denominator. As topologies are getting very complex CPUidle doesn’t scale well for multi-cluster SMP and heterogeneous systems like big.LITTLE. The idea is to use runtime PM to decide when clusters can be switched off, treating CPUs the same way as any other element of the domain. So far the infrastructure needed in the generic PM domain is done with other topics such as CPU PM domain and PSCI changes for OS-initiated take down of cluster domains being under discussion.

{% include media.html media_url="https://www.youtube.com/watch?v=I1GKEDHtqsY" %}

**[Scheduler decisions regarding idle](https://www.youtube.com/watch?v=I1GKEDHtqsY&index=14&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)**
By Daniel Lezcano

Daniel’s work concentrates on predicting wake up interrupts in a system, something that will help make better power related decisions. The main interrupts he is interested in are timer, hardware and inter-process. Other interrupt sources do exist but are either impossible to predict or their occurrence rare enough to worry about them. Wake up sources can be further classified in three groups i.e, fully predictable, partially predictable and unpredictable. The current CPUidle implementation tries to predict the next idle time by accumulating statistics on past events, and assumes that no correlation exists between those event. Daniel is under the opinion that we can do better by keeping track of interrupts that matter and discarding irrelevant ones. For timer events, idle times can be predicted with the help of the time framework while hardware interrupt events (for the same source) can be anticipated using statistical analysis and standard deviation. As a rule of thumb IPI events should be ignored with the exception of remote wake ups for device interrupts. The presentation continued with a list of four strategies aimed at improving how clusters are selected when tasks wake up. The first one is about not waking up a CPU or cluster if it hasn’t reached its target residency. The second one is concerned with choosing to pack a waking task on other CPUs if the waking task’s load is below a specific threshold and the CPU that was selected is part of an idle cluster. The third is the idea of favouring idle clusters over performance, meaning that if a CPU is the last in a cluster, simply pack a load balanced task on other CPUs and idle the whole cluster. Last but not least introducing hysteresis when tracking interrupt timing, much like the geometric series used in the per-entity load tracking metric. That way idle states can be made shallower on busy systems, something that would result in faster wake up times.

Implementing the above concept brings its fair share of challenges. The algorithm to predict the next event must be highly optimized as it happens periodically in critical sections and should not consume more energy than the savings it aims to achieve. Also of prime concern is the amount of kernel subsystems that need to be modified, hence the need to be as self contained as possible.

{% include media.html media_url="https://www.youtube.com/watch?v=fGGQIJ3Lg0k" %}


[**I/O scheduling and power management with storage devices**](https://www.youtube.com/watch?v=fGGQIJ3Lg0k&index=15&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Luca Miccio and Paolo Valente

The goal of this presentation was to explore the ways to bridge the IO scheduler and system power management. The IO scheduler is a block layer component deciding the order in which IO requests are to be served with the chosen order needing to satisfy many constraints. However Luca showed the current stock schedulers are quite ineffective. To highlight his point he gave a [demonstration](https://www.youtube.com/watch?v=ANfqNiJVoVE&feature=youtu.be) of a video being played back while other concurrent block layer IO requests are being served. The same video is played back using stock schedulers and, as a comparison, the new BFQ scheduler, which is not yet available in Linux (queued however for 4.12). With stock kernels the playback starts only after minutes and, after starting, freezes several times. With BFQ, there is no issue. Luca went on saying that these problems are likely to get worse, because of increasing queue depths and parallelism within storage devices. He then proceeded to show the two main components of the BFQ solution, i.e., the accurate proportional share scheduling engine and the set of low latency heuristics. Issues with the current version of BFQ reside in the area of high queue depths and minimal possible overhead. At this time the approach is also completely power-management agnostic, so questions are pending about where to start bridging that gap. One participant suggested to do the same as we currently do for the CPU scheduler, that is collect relevant statistics from the scheduler to control parameters that affect power consumption. Possible strategies for power management also included idling during IO transfers, something that would be effective for some periodic IO tasks.

{% include media.html media_url="https://www.youtube.com/watch?v=tweSBjUka4A" %}


[**SCHED_DEADLINE group scheduling** ](https://www.youtube.com/watch?v=tweSBjUka4A&index=16&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Tommaso Cucinotta and Luca Abeni ([slides](http://retis.santannapisa.it/~luca/ospm-summit/2017/Downloads/OSPM-hierarchical.pdf))

This talk was focused on presenting a patchset to replace the current RT throttling mechanism with another one based on SCHED_DEADLINE. The goal of such an approach is to provide deadline-based scheduling and associated guarantees to groups of RT tasks. As an added bonus it would simply replace the current RT throttling code and exploit its cgroups-based interface to the user-space. More specifically, a 2-level scheduling hierarchy based on EDF + CBS/FP is proposed to support group scheduling with an RT cgroup viewed as a special DL entity. In such a case the period and runtime parameters are assigned to the cgroup, with the deadline implicitly set to match the period. The case where DL entities are connected to single tasks doesn’t change from the current way of working. DL entities representing RT cgroups would be connected to RT runqueues instead, and as such bound to a single CPU. However, a RT cgroup is associated a DL entity for each core in the cpuset, where RT tasks in the group are free to migrate across the per-CPU DL entities. Admission control still needs to be sorted out and the current patchset only guarantees there is no overload on the system. Preliminary work has been posted for review, with the first patch entailing a lot of cleanup in the RT code. The second patch introduces the hierarchical DL scheduling of RT groups and the third allows RT tasks to migrate between RT runqueues of the control group. The code is currently in its early stages but works relatively well with a few areas still under discussion. The presentation ended with a discussion on how to handle cases where there are less tasks than available CPUs.

{% include media.html media_url="https://www.youtube.com/watch?v=_Xe_k_knF-4" %}


[**A Hierarchical Scheduling Model for Dynamic Soft Real-Time Systems**](https://www.youtube.com/watch?v=_Xe_k_knF-4&index=17&list=PLohWCZQwiEVqYSyggG141vUeUOTLr1cHB)
By Vladimir Nikolov

Vladimir Nikolov from the Ulm University presented a new hierarchical approximation and scheduling approach for application and tasks with multiple modes on a single processor. The model allows for a temporal and spatial distribution of the feasibility problem for a variable set of tasks with non-deterministic and fluctuating costs during runtime. In case of overload, an optimal degradation strategy selects one of several application modes or even temporarily deactivates applications. Hence transient and permanent bottlenecks can be overcome with an optimal system quality that is decided dynamically. The presentation gave a comprehensive overview on several aspects, including an automated monitoring and cost approximation strategy for application and tasks, a novel concept to confine entire applications in single Constant Bandwidth Servers and a knapsack based algorithm for selection of optimal quality level for runtime applications. Furthermore, examples of extension for several resource dimensions like energy and network were also presented. Capacity reservations are established and updated at well-defined instants under the premise that applications and their internal tasks remain feasible with their actual measured costs. The system’s ability to handle cyclically occurring load and to suppress recurring reconfiguration of application quality levels has also been discussed. A prototype implementation based on RTSJ and JamaicaVM was integrated into a middleware for Java-based real-time applications on top of Linux. Experimental evaluations for the system have been based on artificial applications with custom load profiles. The results validate the correct functionality of the scheduler and shows how it adapts to varying and cyclically occurring computational loads. The overall quality benefit of the model was assessed for a video-on-demand application scenario, something that triggered an interesting discussion about the suitability of such a solution in user-space. In future, an extension of the model for distributed parallel applications and interactive HPC scenarios is planned.
