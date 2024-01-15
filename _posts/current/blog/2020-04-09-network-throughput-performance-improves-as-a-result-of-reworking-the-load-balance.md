---
layout: post
title: Network throughput performance improves as a result of reworking the load
  balance.
description: "The scheduler has seen a lot of change over the past couple of
  years with the introduction of Per Entity Load Tracking (PELT). This blog
  talks about how it has been improved over time, including when wrong task
  placement occurred and how this was fixed. "
date: 2020-04-06 04:10:19
image: /assets/images/content/37319206961_0b863ab87d_k.jpg
tags:
  - PELT
  - CPU
  - Linux Kernel
category: blog
author: vincent.guittot
---

The scheduler has seen a lot of change over the past couple of years with the introduction of Per Entity Load Tracking (PELT); PELT provides more fine grained statistics per task and group of tasks like the average CPU cycles used per a task and its impact on the load of the system. I started working on the scheduler a while back: improving PELT first and then studying wrong task placement and how to fix it.

Fixing task placement was becoming increasingly difficult as the last remaining problems were more and more specific. The fixes involved more hacking, biasing the load balance algorithm with meaningless value rather than ensuring correct behavior. A typical example of this was the use of an average load per task which didn’t have any real meaning but was used to try to move at least one task instead of explicitly setting that we wanted to move a task.

It became obvious in the community that a full rework of the load balancer was the best solution to move forward on the load balance.

From this observation, the idea of a full rework of the load balance began to emerge. The aim of reworking the load balance has been to:

- Clean up the code and remove old heuristics which are meaningless.
- Simplify the policy of task placement.
- Define more precisely the state of a group of CPUs, i.e.the group has spare capacity, is fully busy or is imbalanced because of pinned tasks, the running task doesn’t fit on local group, or the CPU with higher capacity is available.
- Describe exactly what the scheduler has to do to fix the imbalance: migrate some load, tasks or utilization of the CPU, or misfit task.
- Associate simple action to each state.

These changes have been possible thanks to PELT and its various enhancements that provide a good understanding of the state of a group of CPUs.

As explained above, the primary goal was to clean up and rework the load balance to ease the maintenance without introducing performance regressions, especially for systems like servers which are monitoring closely their throughput. The first test results, which have been run on an Arm system (embedded 8 cores and server 224cores/2 nodes), have not shown performance regression but the opposite. Results have shown improvements for low and medium load use cases where it’s more efficient to use the number of running tasks and the utilization of CPU to place tasks efficiently.

- small arm64 dual quad cores system

```
           tip/sched/core        w/ this patchset    improvement

hackbench -l (2560/#grp) -g #grp
 1 groups      1.579 +/-29.16%       1.410 +/-13.46% (+10.70%)
 4 groups      1.269 +/-9.69%        1.205 +/-3.27%   (+5.00%)
 8 groups      1.117 +/-1.51%        1.123 +/-1.27%   (+4.57%)
16 groups      1.176 +/-1.76%        1.164 +/-2.42%   (+1.07%)

```

- large arm64 2 nodes / 224 cores system

```
           tip/sched/core        w/ this patchset    improvement

hackbench -l (256000/#grp) -g #grp
  1 groups    15.305 +/-1.50%       14.001 +/-1.99%   (+8.52%)
  4 groups     5.959 +/-0.70%        5.542 +/-3.76%   (+6.99%)
 16 groups     3.120 +/-1.72%        3.253 +/-0.61%   (-4.92%)
 32 groups     2.911 +/-0.88%        2.837 +/-1.16%   (+2.54%)
 64 groups     2.805 +/-1.90%        2.716 +/-1.18%   (+3.17%)
128 groups     3.166 +/-7.71%        3.891 +/-6.77%   (+5.82%)
256 groups     3.655 +/-10.09%       3.185 +/-6.65%  (+12.87%)

dbench
  1 groups   328.176 +/-0.29%      330.217 +/-0.32%   (+0.62%)
  4 groups   930.739 +/-0.50%      957.173 +/-0.66%   (+2.84%)
 16 groups  1928.292 +/-0.36%     1978.234 +/-0.88%   (+0.92%)
 32 groups  2369.348 +/-1.72%     2454.020 +/-0.90%   (+3.57%)
 64 groups  2583.880 +/-3.39%     2618.860 +/-0.84%   (+1.35%)
128 groups  2256.406 +/-10.67%    2392.498 +/-2.13%   (+6.03%)
256 groups  1257.546 +/-3.81%     1674.684 +/-4.97%  (+33.17%)

```

Other people from the community started to raise interest in the rework and wanted to also fix old problems like the suboptimal use of cores on NUMA systems : [The Linux Scheduler: a Decade of Wasted Cores](https://people.ece.ubc.ca/sasha/papers/eurosys16-final29.pdf). Some regressions have been raised during the review but thanks to the cleanup work, it has often been straightforward to fix them because the culprit piece of code was self contained, we therefore didn’t have to worry about the side effects to unrelated configurations.

Although we tried to cover a wide range of behavior during the development and review phases, it was impossible to cover all use cases. Nevertheless, the patchset was considered to be mature enough to be queued for v5.5 with the constraint that we will have to be reactive to fix every regression reported, and that the patchset would be reverted if we were not able to fix it.

The main perf regression raised after merging the patchset and before the release of v5.5, has been the one related to kexec and fork perf regression. No other regression has been raised and the rework is now part of the v5.5. This is probably just the beginning because the rework will be used more and more with distro moving to a more recent kernel and we can expect more test results. In fact, this has already happened with the Vmware perf team reporting around +20-25% of network throughput for one of their performance tests[ https://lkml.org/lkml/2020/2/25/38](https://lkml.org/lkml/2020/2/25/38) . It’s a bit unusual to receive performance improvements feedback on a mailing list as we are more used to getting regression notifications but such good feedback is always encouraging and confirms that the rework was a good thing to do.