---
amazon_s3_presentation_url: None
amazon_s3_video_url: None
author: connect
categories:
- blog
comments: false
date: 2017-03-17 15:40:19
featured_image_name: PowerManagementsessionsfromBUD17.jpg
image:
  featured: true
  name: PowerManagementsessionsfromBUD17.jpg
  path: /assets/images/blog/PowerManagementsessionsfromBUD17.jpg
layout: post
link: http://connect.linaro.org/blog/power-management-sessions-bud17/
session_id: None
session_track: None
slideshare_presentation_url: None
slug: power-management-sessions-bud17
speakers: None
title: Power Management sessions from BUD17
video_length: 00:00
video_thumbnail: None
wordpress_id: 5572
youtube_video_url: None
permalink: /blog/:title/
---

https://www.youtube.com/playlist?list=PLKZSArYQptsMbk293t64TnZmxzLp-bRib

**Session Name:**
Update on CPU cluster Idling – BUD17-102

**Abstract**
Even if the CPU-Idle framework has improved significantly over the last years, with important consolidation efforts, the framework doesn’t scale for multi-cluster SMP systems and heterogeneous systems like big.LITTLE. Therefore Linaro have been working on a solution that unifies idle management for all kind of devices, including CPUs. This sessions provides the audience an update of this work

**Speakers:** Ulf Hansson
**Track:** Power Management
**Session ID:** BUD17-102
**Resource page:** [http://connect.linaro.org/resource/bud17/bud17-102/](/resources/bud17/bud17-102/)

* * *

**Session Name:**
Bus scaling QoS update – BUD17-214

**Abstract**
This session is a sequel of the “Bus scaling QoS” session from LAS16. During LAS16 we have discussed the challenges of the SoC architecture, the on-chip interconnects and the Network On Chip concept. Now we are trying to add support for interconnect management in the Linux kernel, which involves extending some frameworks and introducing a new API. This session will give an update about the current status and the next steps.

**Speakers:** Georgi Djakov
**Track:** Power Management
**Session ID:** BUD17-214
**Resource page:** [http://connect.linaro.org/resource/bud17/bud17-214/](/resources/bud17/bud17-214/)


* * *

**Session Name:**
Scheduler Load tracking update and improvement – BUD17-218

**Abstract**
The Per Entity Load Tracking (PELT) is a key stone in tasks placement of the scheduler but suffers of some weakness when it’s not just bugs. During the last LPC, it has been decided to fix all pending issues of PELT before starting to consider another load tracking mechanism for scheduler and/or EAS. This session will show the improvement reached since the last connect and the LPC as well as the next ones. We will also looks at the RT class which lacks a good load tracking.

**Speakers:** Vincent Guittot
**Track:** Power Management
**Session ID:** BUD17-218
**Resource page:** [http://connect.linaro.org/resource/bud17/bud17-218/](/resources/bud17/bud17-218/)


* * *


**Session Name:**
SCHED_DEADLINE: ongoing development and new features – BUD17-307

**Abstract**
After deadline scheduling for processes (SCHED_DEADLINE scheduling policy) has been merged in the Linux kernel in Mar-2014 (version 3.14) a considerable effort has been put into actively maintaining it, but no further development really happened after that date, until recently.

In this presentation, Juri Lelli, after giving a (very briefly) review of the current set of features, will deep dive into the details of all the new features currently under development: CPU capacity and clock frequency scaling, bandwidth reclaiming, coupling with clock frequency selection and cgroups support.

**Speakers:** Juri Lelli
**Track:** Power Management
**Session ID:** BUD17-307
**Resource page:** [http://connect.linaro.org/resource/bud17/bud17-307/](/resources/bud17/bud17-307/)

* * *


**Session Name:**
IRQ prediction – BUD17-309

**Abstract**
The CPUidle is one component of the power management framework. It behaves in an opportunistic way when there is nothing to do on the system, by trying to predict the next CPU wake up and select an idle state. But the current design has some weaknesses as it mixes the different sources of wakeup, resulting in an already non-deterministic situation getting worse. This presentation will describe the issues faced with the current approach and will show another approach to predict the next wake up event with a better accuracy, leading, under some circumstances, to 100% right predictions.

**Speakers:** Daniel Lezcano
**Track:** Power Management
**Session ID:** BUD17-309
**Resource page:** [http://connect.linaro.org/resource/bud17/bud17-309/](/resources/bud17/bud17-309/)