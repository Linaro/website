---
title: Linux Plumbers
event: Linux-Plumbers
event_url: https://lpc.events/event/16/
description: >+
  The Linux Plumbers Conference is the premier event for developers working at
  all levels of the plumbing layer and beyond.

location: Dublin, Ireland
date: 2022-07-21 10:04:27 +01:00
event_date: 2022-09-12 10:05:10 +01:00
event_end_date: 2022-09-14 10:04:27 +01:00
image: /assets/images/content/linux-plumbers-2022.jpg
event_type: sponsor
---
Linaro is proud to be a Silver Sponsor of the Linux Plumbers Event. We will also be running several micro conferences, including:

## linux/arch Micro Conference

Micro Conference Leads: Arnd Bergmann (Linaro),  Mike Rapoport (IBM)

Historically, the code in arch/ was developed for one architecture and then copied and adjusted by others. This created a lot of duplicated or almost duplicated code with subtle differences which prevents easy refactoring and consolidation.

The linux/arch microconference aims to bring architecture maintainers in one room to discuss how the code in arch/ can be improved, consolidated and generalized, at least where it makes sense.

The discussion at the previous linux/arch microconfernece in 2020 lead to updates in RISC-V kprobes implementation \[1], removal of DISCOTIGMEM memory model \[2] and enablement of generic entry on s390 \[3].

\[1] https://git.kernel.org/torvalds/c/c22b0bcb1dd0
\[2] https://git.kernel.org/torvalds/c/bb1c50d3967f
\[3] https://git.kernel.org/torvalds/c/56e62a737028

The possible topics could be:

* reducing code duplication and generalizing the common code in arch/
* making headers in include/asm consistent
* on-boarding more architectures to use common entry code
* devicetree (unless they have their own microconf)
* identifying old machine support that may be either still in active use vs only in hobbyist/retro-computing vs completely obsolete and broken

For more information on this Micro Conference, click [here](https://lpc.events/event/16/contributions/1142/).

## Real-time and Scheduling Micro Conference

Micro Conference Leads: Vincent Guittot (Linaro), Daniel Bristot de Oliveira (Red Hat, Inc.), Juri Lelli (Red Hat), Steven Rostedt, Kate Stewart (Linux Foundation)

The real-time and scheduling micro-conference joins these two intrinsically connected communities to discuss the next steps together.

Over the past decade, many parts of PREEMPT_RT have been included in the official Linux codebase. Examples include real-time mutexes, high-resolution timers, lockdep, ftrace, RCU_PREEMPT, threaded interrupt handlers and more. The number of patches that need integration has been significantly reduced, and the rest is mature enough to make their way into mainline Linux.

The scheduler is the core of Linux performance. With different topologies and workloads, it is not an easy task to give the user the best experience possible, from low latency to high throughput, and from small power-constrained devices to HPC.

The following accomplishments have been made as a result of last year’s microconference:

* The Real-time Linux Analysis tool was merged in 5.17 \[1]
  Progress on tools to facilitate maintenance of the stable RT releases.
* Progress on the full mainline merge, but some challenges were raised and more is to be done.
* Core scheduling has been merged. \[2]
* Progress in the latency nice scheduling feature \[3]

This year’s topics to be discussed include:

* How to scale PREEMPT_RT for very-large systems
* Improve overall system partitioning for real-time HPC workloads
* New tools for PREEMPT_RT analysis.
* How do we teach the rest of the kernel developers how not to break PREEMPT_RT?
* The usage of PREEMPT_RT on safety-critical systems: what do we need to do?
* The merge's status, and how can we resolve the last issues that block the merge.
* Latency nice scheduling feature
* Better support for new processors
* What’s next?

\[1] https://www.kernel.org/doc/html/latest/tools/rtla/rtla.html
\[2] https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/core-scheduling.html
\[3] https://lore.kernel.org/lkml/20220311161406.23497-1-vincent.guittot@linaro.org/

For more information on this Micro Conference click[ here](https://lpc.events/event/16/contributions/1151/).

## Power Management and Thermal Control Micro Conference

### **A generic energy model description:**

Daniel Lezcano (Linaro)

The energy model is dispatched through implicit values in the device
tree and the power values are deduced from the formula P=CxFxV² by the
energy model in the kernel.
Unfortunately, the description is a bit fuzzy if the device is using the
Adaptative Voltage Scaling or not performance based, as a battery or a
back light.
On the other side, complex energy models exist on out of tree kernels
like Android, meaning there is a need for such a description.
A generic energy model description will help to have a clear of view of
the power contributors for thermal, power consumers for accounting and
performance

### Combining DTPM with the thermal control framework

Daniel Lezcano (Linaro)

The DTPM framework and the thermal control framework are using the same
algorithm and mechanism when the power numbers are involved. That
results in duplicated code. The DTPM framework interacts with the user space but nothing prevent to
provide an in-kernel API where the power based cooling devices can
directly act on. That will result in a simpler code and very explicit
power value usage. In addition, if the SCMI is supported by DTPM, no
changes will be needed in the thermal cooling devices. The result will
be one generic power based cooling device supporting any device
(devfreq, cpufreq, ...) with an energy model (DT or SCMI based).

For more information on this Micro Conference, click [here](https://lpc.events/event/16/contributions/1158/).