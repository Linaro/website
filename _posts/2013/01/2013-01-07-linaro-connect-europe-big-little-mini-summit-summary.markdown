---
author: linaro
categories:
- blog
date: 2013-01-07 15:04:31
description: Take a look at the key take-away message for the big.LITTLE Mini-Summit
  as you find out how you can get involved with the Linaro Power Management team at
  LCA13.
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, Linaro Connect, LCE12-Copenhagen,
  LCA13-Hong Kong, big.LITTLE Mini-Summit, Power Management, b.L, IKS, TC2
layout: post
link: /blog/community-blog/linaro-connect-europe-big-little-mini-summit-summary/
slug: linaro-connect-europe-big-little-mini-summit-summary
tags:
- Community
- Connect Events
- Hardware
title: Linaro big.LITTLE Mini-Summit Summary
wordpress_id: 2207
---

The [Linaro big.LITTLE Mini-Summit](http://connect.linaro.org/resources/) that was held on Thursday, 1 November, 2012 as part of [Linaro Connect Europe (LCE) 2012](http://connect.linaro.org/resources/) at the Bella Center in Copenhagen, Denmark.

## big.LITTLE Mini-Summit information


The big.LITTLE mini-summit followed the same format as both the [Android](/blog/summary-of-the-android-mini-summit-at-connect-copenhagen-2012/) and [ARMv8(64-bit)](/blog/armv8-64-bit-mini-summit-at-lce12-copenhagen/) mini-summits with opening plenary and a lightning talk followed by four planning and discussion sessions.

Those four sessions included topics focused on the following:


  * A big.LITTLE status update and Making Linux work with asymmetric systems


  * The Bluesky session: What would the ideal power-aware kernel do?


  * Back to reality: What do we have today and the sequence of steps to get to where we want to be


  * Workloads and Test Automation and General Discussions on further work and Wrap-Up


{% include image.html name="ARMs_Test_Chip_2TC2_An_Overview.png" alt="ARMs Test Chip 2(TC#2): An Overview Slide Used during Mini-Summit" %}


During the two plenary sessions, Amit Kucheria (PMWG Tech Lead at Linaro) and Robin Randhawa (Power Management Architect at ARM) highlighted some of the interesting experimental results coming out of the research being done around power management and big.LITTLE inside Linaro and ARM.

They touched upon the two big.LITTLE (b.L) modes - IKS and MP, current implementation status, performance and power numbers being observed with ARM’s TC2 boards and further work required.

The key take-away message from these talks was that initial power and performance numbers on the ARM TC2 hardware (2 A15 + 3 A7) prove the efficacy of the b.L hardware concept and establish a baseline to improve upon. For example, a web-browsing + mp3 usecase in b.L IKS mode ran at 90% of the performance while consuming only 60% of the power compared to the same use case running purely on an A15 system. The b.L MP case was showed similar numbers in measurements inside Linaro (ARM’s results were missing some A15 quiescing patches at the time of the summit, thus yielding much higher power numbers. This has been fixed since then).

The highly technical sessions were dedicated to finding solutions to known problems in Linux that will allow it to work more efficiently on b.L hardware. These problems included:

  1. IKS optimisations


    1. To minimise interrupt blackout


    2. To profile and optimise the cpufreq driver

  2. Speeding up Hotplug


  3. CPU quiescence


    1. RCU callbacks on A15s are expensive


    2. Adaptive NOHZ patchset


  4. Scheduler optimisations


    1. Scheduler-driven optimal C-state and P-state selection


    2. Scale invariance of load


    3. Ways to differentiate processes to


      1. Improve response times e.g. application launch


      2. Constrain a process to LITTLE cores





    4. Consolidate load calculation heuristics required by various governors into the scheduler





  5. Automation of power/performance testing on real hardware


While the b.L IKS solution is members-only at this point, the b.L MP development can be tracked through a [public git tree](http://git.linaro.org/gitweb?p=people/vireshk/linux-linaro-big-LITTLE-MP.git;a=summary) and through announcements on the linaro-dev mailing list.

For more information about each of these sessions and how you can get involved, see the links below for the full session notes. Where available, links to slides (pdf) and videos of the sessions are listed.




  * big.LITTLE Mini-Summit Overview - [Slides](https://www.slideshare.net/linaroorg/biglittle-mini-summit) (Plenary 1 and 2 are also included in this slide deck) [Video](https://www.youtube.com/watch?v=1oVGid3K89g) (includes Plenary 1 and 2)




  * big.LITTLE Mini-Summit  Session 1 (A big.LITTLE status update and Making Linux work with asymmetric systems)  -  [Video](http://youtu.be/hyQFWAuFMRI), [Notes](https://www.linaro.org/blog/linaro-connect-europe-big-little-mini-summit-summary/)


  * big.LITTLE Mini-Summit Session 2 (The Bluesky session: What would the ideal power-aware kernel do?)  - [Slides](https://www.slideshare.net/linaroorg/bl-session-bluesky), [Video](http://youtu.be/D-ykH4orHds), [Notes](https://www.linaro.org/blog/linaro-connect-europe-big-little-mini-summit-summary/)


  * big.LITTLE Mini-Summit Session 3 (Back to reality: What do we have today and the sequence of steps to get to where we want to be) - [Video](http://youtu.be/D-ykH4orHds), [Notes](https://www.linaro.org/blog/linaro-connect-europe-big-little-mini-summit-summary/)


  * big.LITTLE Mini-Summit Session 4 (Workloads and Test Automation and General Discussions on further work and Wrap-Up) - [Video](http://youtu.be/D-ykH4orHds), [Notes](https://www.linaro.org/blog/linaro-connect-europe-big-little-mini-summit-summary/)




## What is big.Little Processing?


According to ARM’s big.LITTLE webpage it is described as, “big.LITTLE processing addresses one of today’s industry challenges: how to create a System on Chip (SoC) that provides both high performance as well as extreme power efficiency to extend battery life. big.LITTLE connects the performance of the [ARM Cortex-A15](http://www.arm.com/products/processors/cortex-a/cortex-a15.php) or [Cortex-A57](http://www.arm.com/products/processors/cortex-a50/cortex-a57-processor.php) processor with the energy efficiency of the [Cortex-A7](http://www.arm.com/products/processors/cortex-a/cortex-a7.php) or [Cortex-A53](http://www.arm.com/products/processors/cortex-a50/cortex-a53-processor.php) processors respectively, enabling the same application software to switch seamlessly between them. By selecting the optimum processor for each task, big.LITTLE can extend battery life by up to 70%.”  - From the [ARM website on big.LITTLE Processing](http://www.arm.com/products/processors/technologies/biglittleprocessing.php)

More about big.LITTLE and Linaro can be found at: [https://wiki.linaro.org/WorkingGroups/Kernel/](https://wiki.linaro.org/WorkingGroups/Kernel/)


## LCE12 - Resources


Additional presentations and videos from LCE12-Copenhagen can be found on the resources page of the Linaro Connect website at: [/blog/summary-of-the-android-mini-summit-at-connect-copenhagen-2012/](/blog/summary-of-the-android-mini-summit-at-connect-copenhagen-2012/)


## Downloads


Information and links to all Linaro builds can be found on the [Linaro website](/) on the [downloads page](/downloads/).


## Linaro Connect


More information on the upcoming Linaro Connect event ([Linaro Connect Asia (LCA) 2013](/blog/registration-opens-for-linaro-connect-asia-2013-book-early/)) can be found on the the [Linaro Connect Website](http://connect.linaro.org/).


## Staying Connected


You can also stay in touch with what is happening in around Linaro by following us on [Twitter](https://twitter.com/LinaroOrg), [Google+](https://plus.google.com/+LinaroOnAir) and [Facebook](https://www.facebook.com/LinaroOrg).


### About:




#### **_The Linaro Power Management Team_**






  * _The Power Management WG will look at the entire software stack (kernel, middleware, applications and tools) to help optimize power consumption. The WG is responsible for creating infrastructure, guidelines and tools to enable top-notch power management on multiple ARM SoCs._




  * _[Meeting](https://wiki.linaro.org/WorkingGroups/PowerManagement/Meetings): Weekly IRC meeting_


  * _Mailing List: Upstream Discussions – LKML, linux-arm-kernel, linux-pm@lists.linux-foundation.organd Announcements - mailto:linaro-dev@lists.linaro.org ([subscribe](http://lists.linaro.org/mailman/listinfo/linaro-dev))_


  * _IRC Channel: #linaro on irc.linaro.org or irc.freenode.net_


  * _[Team Members](/about/)_


_More information about the Linaro Power Management Team can be found at: [https://wiki.linaro.org/WorkingGroups/PowerManagement](https://wiki.linaro.org/WorkingGroups/PowerManagement)_


#### _**Linaro**_


_****_To find out more, please visit: [ ](/).