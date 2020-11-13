---
layout: post
title: Linaro Engineering Highlights - October 2020
description: TBC
date: 2020-11-13 01:15:35
image: /assets/images/content/iot_planet_under_2mb.jpg
tags:
  - TBC
category: blog
author: jon.burcham@linaro.org
---
# 2020 Arm DevSummit

{% include image.html path="/assets/images/content/simon-segars.jpg" class="small-inline left" alt="Simon Segars - Arm CEO image" %} For 2020, Arm retooled its fall conference to be more developer oriented as Arm DevSummit. With the recent news that Nvidia is acquiring Arm, the keynote by Arm CEO Simon Segars and fireside chat with both Simon Segars and Nvidia CEO Jensen Huang provided an opportunity to comment on the potential benefits of an Arm - Nvidia partnership. Both CEO’s endorsed Linaro as partners in Open Source work now and in the future. Mark Hambleton, Arm Vice President of Open Source Software, reinforced this view in his keynote titled “The Software Side of Arm”. 
{% include image.html path="/assets/images/content/jenson-haung.jpg" class="small-inline left" alt="Jenson Huang - Nvidia CEO image" %} 

Linaro engineers and collaborators [contributed 15 sessions](https://devsummit.arm.com/agenda/?search=Linaro#/) including:

* Paul Isaacs’ , Director LDCG, HPC-SIG “Beyond ML – A Neuromorphic Approach to AI”
* Ilias Apalodimas, LEDGE Tech Lead “LEDGE Reference Platform: Architecture and Generic Kernel Image”
* François-Frédéric Ozog, Director LEDGE, “Linux as Firmware: LinuxBoot on Arm”
* Kevin Townsend, LITE Engineer “Secure Devices With TF-M and Zephyr”
* Tom Gall, Director LCG and AI/ML “uTVM, an AI Compiler for Arm Microcontrollers”
* David Koenen, Sr. Product Manager, Arm “Network, DC and HPC Development with Scalable Development and CXL
* Neil Trevett, VP Developer Ecosystems and Khronos President, NVIDIA “Khronos Open Standards for Accelerating Interactive Experiences
* Dong Wei, Arm Fellow, Arm “Making Arm Devices “Just Work!”
* Lloyd Watts, CEO, Neocortix, Inc.”Distributed Computing COVID-19 Vaccine Research on Arm Devices”
* Ilias Apalodimas, LEDGE Tech Lead “Securing an EBBR Compliant Arm Platform”
* Kevin Zhao, Tech Lead, LDCG and Xinliang Liu, Senior Engineer, LDCG “Kubernetes as a Service – Open Source Cloud on Arm64”

Videos of the session are available through November 23, 2020 to registered attendees.

## Linaro Top Contributor To Linux Test Project (LTP)

{% include image.html path="/assets/images/content/linux-kernel-security.pngg" class="small-inline left" alt="linux-kernel-security image" %}Viresh Kumar from the Kernel Working Group (KWG) has been addressing missing syscalls in the Linux Test Project activity since October 2019, contributing 108 commits to date.
Major areas of work during the previous year have included:

* Support added for following (12+) syscalls: pidfd_open, io_pgetevents, fsmount, fsopen, fsconfig, fsmount, move_mount, fspick, open_tree, openat2, pidfd_send_signal, clone3.
* 64bit timespec support added for following (25+) syscalls: clock_gettime64, clock_settime64, clock_adjtime64, clock_getres_time64, clock_nanosleep_time64, timer_gettime64, timer_settime64, timerfd_gettime64, timerfd_settime64, utimensat_time64, pselect6_time64, ppoll_time64, io_pgetevents_time64, recvmmsg_time64, mq_timedsend_time64, mq_timedreceive_time64, semtimedop_time64, rt_sigtimedwait_time64, futex_time64, sched_rr_get_interval_time64, ppoll_time64 and more.

During this work, a lot of cleanup was requested by maintainers. These additional tasks were combined with the tests that were being extended to improve the overall test suite. All this work resulted in Linaro again featuring in the top contributors list.

* 3rd position in May release: <https://lwn.net/Articles/820636/>
* 2nd position in September release: <https://lwn.net/Articles/833136/>

## Linaro Retains Top Ten position for Linux Kernel 5.9 contributions

Linaro ranked as the 5th largest contributor by changesets in Linux 5.9  \[1]: 


**By Changesets**

| (None)       | 1377 | 9.3% |
| ------------ | ---- | ---- |
| Intel        | 1336 | 9.0% |
| Red Hat      | 1006 | 6.8% |
| (Unknown)    | 895  | 6.0% |
| AMD          | 848  | 5.7% |
| Linaro       | 842  | 5.7% |
| Google       | 662  | 4.5% |
| SUSE         | 554  | 3.7% |
| (Consultant) | 504  | 3.4% |
| IBM          | 478  | 3.2% |

Linaro’s position was driven by a prodigious 520 changesets from Lee Jones (Developer Services) who was the most prolific contributor to 5.9.

| Lee Jones            | 520 | 3.5% |
|----------------------|-----|------|
| Christoph Hellwig    | 292 | 2.0% |
| Randy Dunlap         | 261 | 1.8% |
| Alexander A. Klimov  | 187 | 1.3% |
| Ben Skeggs           | 137 | 0.9% |
| Chris Wilson         | 135 | 0.9% |
| Laurent Pinchart     | 135 | 0.9% |
| Evan Quan            | 113 | 0.8% |
| Pierre-Louis Bossart | 113 | 0.8% |
| Gustavo A. R. Silva  | 110 | 0.7% |
