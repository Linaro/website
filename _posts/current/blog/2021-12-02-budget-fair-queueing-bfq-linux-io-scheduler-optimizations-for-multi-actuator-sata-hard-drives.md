---
layout: post
title: Budget Fair Queueing (BFQ) Linux IO Scheduler Optimizations for
  Multi-Actuator SATA Hard Drives
description: In this blog, we cover the extra logic applied in BFQ I/O scheduler
  to support multi-actuator drives. Paving the way to exploiting potential
  multi-actuator drives.
date: 2021-12-02 06:49:56 +00:00
image: /assets/images/content/road-timelapse.jpg
tags:
  - BFQ
  - I/OScheduler
  - Budget Fair Queueing
  - Linux IO Optimizations
  - Multi-Actuator SATA HardDrives
related_projects:
  - PERF
category: blog
author: paolo.valente
---
Computer operating systems use Input/output (I/O) scheduling to determine in which order operations should take place. BFQ is a proportional-share I/O scheduler which associates each process with a weight. Based on the weight, it then decides how much of the I/O bandwidth to allocate to a process.

In this article, Linaro Interns Gabriele Felici and Davide Zini (followed by Paolo Valente) talk about the extra logic they have implemented in the BFQ I/O scheduler, to support multi-actuator drives.

## The challenge of managing the load balance among actuators

New recording technology is driving HDD capacity to 60TB+ per spindle. Yet servo-mechanical capability does not increase with areal density. As a consequence, the speed of high-capacity drives is becoming too low for reading/writing all the data that the drive can store. More formally, drives suffer more and more of low Input/Output Operations Per Second (IOPS) per TB. Therefore, reaching higher IOPS becomes increasingly important as drive capacities grow.

Multi-actuator drives are an effective response to this need. Multi-actuator drives appear as a single device to the I/O subsystem. Yet they address commands to different actuators internally, as a function of Logical Block Addressing (LBAs). A given sector is reachable by only one actuator - none of the address space is shared.

For example, Seagate’s Serial Advanced Technology Attachment (SATA) version contains two actuators and maps the lower half of the SATA LBA space to the lower actuator and the upper half to the upper. There are no changes to the IO protocol, except for a log page to report the LBA-actuator mapping.

Yet, this new architecture poses the following important challenge: information on the destination actuator of each command must be used cleverly by the I/O subsystem. Otherwise the system has little or no control over the load balance among actuators; some actuators may be underutilized or remain totally idle. Seagate asked Linaro to address this important issue, in the first place for their drives, but in general for any multi-actuator drive. In particular, they asked for an open-source solution, within the Linux kernel.

## The solution: Enriching the BFQ/IO scheduler with extra logic

I/O schedulers are the ideal kernel components for tackling this problem, as their role is to decide the order in which to dispatch commands. In this respect, Budget Fair Queueing (BFQ) is the most feature-rich and accurate I/O scheduler in Linux. It provides strong service guarantees on bandwidth and latency. In addition, BFQ has a rich infrastructure, which allows for accurate control over I/O. This makes BFQ a good ground for implanting extra logic that also controls per-actuator load. 

In collaboration with Seagate Technology, we have enriched the BFQ I/O scheduler with such extra logic. The resulting extended version of BFQ provides dramatic performance improvements, over a wide range of workloads. At the same time, it preserves the original bandwidth and latency guarantees of BFQ. As a more general contribution, the concepts and strategies used in BFQ show effective ways to take advantage of the IOPS gains of multi-actuator drives.

### Adding initial support for multi-actuator drive inside BFQ

by Gabriele Felici

If a standard I/O scheduler, including an unimproved BFQ scheduler, is used over a multi-actuator drive, some actuators may remain idle, while other actuators may take care of all the requests. This is a performance waste if we think about the potential that the drive has. What we need is a mechanism to control each actuator load.

Since BFQ exploits a queue of I/O requests for each process, we started with the following simple but powerful idea: we split each per-process queue into one queue for each actuator, to guarantee that each actuator is taken care of by the scheduler.

### Boosting performance using injection

by Davide Zini

BFQ dispatches to the drive as many I/O as the I/O subsystem deems appropriate. In particular, new I/O may be dispatched even while there is already some other I/O in service in the drive. So the drive’s internal parallelism or pipelining can be fully exploited. In particular, actuators can run in parallel. 

Yet, even after the above split, there are situations where one or more actuators are underutilized. A first simple case is with just two queues, Q1 and Q2, for a dual-actuator drive. Q1 and Q2 only contain requests for, respectively, the lower and the upper actuator. BFQ serves one queue at a time, for a while. If we represent requests for the lower/upper actuator as blue/red rectangles, then the service is as depicted in next figure:

{% include image.html path="/assets/images/content/boosting-performance-using-injection-image-1.png" alt="Boosting performance using injection image 1" %}

While BFQ serves only Q1 , the upper actuator gets idle, and vice versa.

To describe a much worse situation, consider now a scenario where several queues, all with the same weight, have pending I/O. In this case, BFQ schedules queues in such a way that each queue gets the same number of I/O per second served, on average. Trouble occurs if many of these queues have I/O for some lucky actuators, while only few for some unlucky actuators. Unlucky actuators get a low number of I/O per second, and tend to be idle or little utilized most of the time.

To address this underutilization, we added a new scheduling action. While serving a queue that contains I/O for a given actuator, inject (dispatch) some I/O requests for other actuators, if the latter are underutilized.

In this respect, BFQ already has an injection mechanism, to boost throughput in the presence of synchronous I/O. While a synchronous queue is temporarily idle (but is in service), BFQ may inject extra I/O taken from other non-in-service queues.

The idea is to extend this feature to an additional system state. The new state is: there are requests for one actuator in the drive queue, but there is no request, or too few requests for the other actuators. So, the idle state now does not concern a queue (which happens to be empty), but one or more actuators (which happen to have no request, or too few requests to serve).

In this case, BFQ may choose not to dispatch the next-to-serve request of the in-service queue, but to instead inject a request of another non-in-service queue, if this allows the (too) idle actuator to be fed. For example, given the simple scenario above with just two queues, the service scheme becomes as follows:

{% include image.html path="/assets/images/content/boosting-performance-using-injection-image-2.png" alt="Boosting performance using injection image 2" %}

That is, while Q1 is being served, some requests from Q2 are however injected, if the upper actuator is too idle, and vice versa.

A last, important piece of information for implementing this mechanism is when we consider an actuator underutilized. To this goal, we defined a load threshold: if the number of I/O requests queued (inside the drive) for a given actuator is below this threshold, then we deem that actuator underutilized. Injection occurs if one actuator is below this threshold. Empirical and technical information hinted at four as an optimal threshold, for keeping all actuators busy enough.

The following plot shows an example of the throughput boost provided by this mechanism, on a Seagate Exos 2X14 dual-actuator drive, and for a workload made of two parallel flows of small, sequential reads. BFQ with injection, outperforms all other I/O schedulers.

{% include image.html path="/assets/images/content/example-of-throughput-boost-provided-by-injection-mechanism.png" alt="Example of throughput boost provided by injection mechanism" %}

Rather importantly, BFQ’s performance is stable across workloads, while that of the other schedulers is essentially a matter of luck.

## Conclusion

The above contributions pave the way to fully exploiting the potential of multi-actuator drives.
Yet these are still preliminary contributions. Our current results only cover a few (yet relevant) workloads. Another issue is what is the best choice of value for the injection threshold? It most certainly depends on the workload so the best choice may be dynamic depending on the workload. Yet a good, static value such as currently provided could provide acceptable performance.

For more information, have a look at the last two presentations on this topic: at [Storage Developer Conference 2021](https://www.snia.org/educational-library/bfq-linux-io-scheduler-optimizations-multi-actuator-sata-hard-drives-2021), and at [Linaro Virtual Connect 2021](https://resources.linaro.org/en/resource/9xXCrNtX3WNTQr3nAtzNuk).