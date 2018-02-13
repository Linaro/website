---
author: nicolas.pitre
categories:
- blog
comments: true
date: 2015-01-27 17:26:36
description: Hardware became much less energy hungry while providing increased performance
  of many orders of magnitude.
excerpt: 'The computing industry has gone through multiple "power" phases since its
  infancy.  The first computers consumed quite a lot of power. However they weren''t
  very powerful in the computational sense. With the large technological advancements
  that followed, the hardware became much less energy hungry while providing increased
  performance of many orders of magnitude. '
layout: post
link: /blog/core-dump/road-energy-aware-scheduling/
slug: road-energy-aware-scheduling
tags:
- Core Dump
- Energy-Aware
- Scheduling
title: The Road to Energy-Aware Scheduling
wordpress_id: 7806
---

# **The Road to Energy-Aware Scheduling**


The computing industry has gone through multiple "power" phases since its infancy. The first computers consumed quite a lot of power. However they weren't very powerful in the computational sense. With the large technological advancements that followed, the hardware became much less energy hungry while providing increased performance of many orders of magnitude.

Hardware has reduced in size too, giving rise to the dominant mobile computing industry we enjoy today. But mobility implies portable battery power where energy efficiency is the subject of many innovations like never before. And comes a point where hardware based innovations alone can't suffice. Hardware may provide mechanisms for saving power, like automatically lowering the processor clock frequency when waiting for a memory transaction to complete. But more "intelligent" management of energy consumption requires comprehensive software to complement hardware mechanisms.

Traditionally, the hardware has provided two mechanisms for software to reduce power usage. The first is termed DVFS, for Dynamic Voltage and Frequency Scaling. Basically, this lets the software scale down the CPU clock and voltage when the work to be performed doesn't require the full computational power of the processor, as it is the case most of the time in a mobile system. The second mechanism lets the software suspend the processor execution completely when there is simply no work to perform, providing even greater energy savings in exchange for a cost in resume latency. The Linux software modules controlling those mechanisms are called "cpufreq" and "cpuidle" respectively.

This worked quite well and was relatively easy to manage... until the arrival of multi-core processors in the mobile world. The introduction of additional cores serves the need for increased computing performance, but also causes many problems for power management as the task scheduler and DVFS goals are often conflicting. For example:

  * The task scheduler needs to move some work to another processor when one of them becomes overloaded. On the other hand, the cpufreq infrastructure does increase the clock frequency of an overloaded processor to cope better with the amount of work. The combined effect may well be a processor that becomes under-utilized compared to the others and consumes more power than strictly necessary.


  * In the presence of multiple processors, the task scheduler tries to spread the work across all the available resources to increase performance. This, however, prevents some of those processors from becoming idle and saving power by suspending them.


The introduction of the big.LITTLE architecture by ARM Ltd is a hardware mechanism providing more avenues for reduced energy consumption. However this requires changes at the task scheduler level to fully take advantage of this architecture, since up to now the scheduler always assumed that all processors are symmetric in their processing abilities.

These shortcomings are purely software related and therefore it is the software that needs fixing. Linaro developed an interim solution for big.LITTLE called IKS (In-Kernel Switcher)[1] which is now part of the mainline Linux kernel and used into products like the second generation of ARM-based Chromebooks. IKS preserved system symmetry by creating virtual cores from the combination of a "big" and a "little" physical core where only one physical core in each pairing would run depending on the virtual clock frequency of the virtualized core. However, a more complete solution that can efficiently take advantage of all cores simultaneously in a big.LITTLE system was still needed.

ARM Ltd created GTS (Global Task Scheduling)[2] to address this issue. GTS consists of modifications to the task scheduler to characterize running tasks between high and low intensity tasks, allowing the scheduler to select the best fit amongst all "big" and "little" cores to run those tasks. However the GTS implementation was too big.LITTLE centric to meet acceptance criteria for integration into the mainline kernel source tree. It did not reconcile the conflicting goals from the task scheduler and power management mechanisms mentioned previously either.

Ingo Molnar, one of the upstream Linux scheduler maintainers, significantly raised the bar for patch acceptance with his famous "line in the sand" statement.[3] Having power management decisions taken by three independent components (cpufreq, cpuidle, and the scheduler) with no integrated policy is no longer acceptable. Power management decisions need to be consolidated and the scheduler is the best place to do it. Time to go back to the drawing board.

Then, Morten Rasmussen from ARM Ltd proposed a new design encompassing cpufreq decisions, cpuidle awareness and big.LITTLE task placement in a completely generic way. This solution was dubbed EAS for Energy Aware Scheduling. In a nutshell, this means the task scheduler has to optimize the energy cost corresponding to all task placement decisions by taking all possible processor clock frequencies and sleep states into account, and then not only triggering task migrations between processors but also controlling processor clock frequencies directly. To achieve this, a table of relative processor computing capability and energy consumption for every possible clock frequency is created for different systems and provided to the scheduler. Needless to say that implementing this solution is a very complex endeavor as it touches several parts of the Linux kernel with many moving pieces that need to be put together before actual results may be obtained.

Linaro took an important role by participating in many collaboration events about this topic over the last few years. The latest such event was the Energy-Aware Scheduling workshop at Linux Kernel Summit in August in Chicago. This event gathered most people currently working on EAS related topics, the top kernel maintainers with an interest in the scheduler, as well as representatives from the semiconductor industry. Summaries of the meeting can be found here[4] and here[5]. The various moving pieces were looked at separately and general agreement on the proposed approaches was reached.

During last year's Kernel Summit, the lack of test tools to evaluate the effectiveness of proposed kernel changes was identified by the upstream maintainers to be a major issue. Since then, Linaro has worked on two different tools. The first one is a work load simulator allowing reproducible application behaviors exercising the interaction with the task scheduler without the need to set up a full runtime environment such as Android. Any kind of synthetic workloads can be created, tested, measured, and shared with other developers to ensure testing uniformity and avoid discrepancies induced by different levels of accelerated graphics for example. Two workload profiles have been created so far: one simulating Android MP3 playback and another simulating standard web browsing.

The second tool gathers statistics on the various processor sleep states like their actual duration, their wake-up source, allowing us to measure their effectiveness (was the appropriate state selected?, was the sleep duration correctly predicted?, etc.). This tool also keeps track of processor clock frequency changes which, once paired with a simple power model, will provide energy consumption estimations for a given system without having to perform measurements on the actual hardware. By combining those two tools, developers will be able to see the impact their changes to the task scheduler have on the actual energy consumption. This will also enable automated regression tests in LAVA to ensure other changes going into the mainline kernel negatively affecting power consumption are identified quickly.

Other EAS contributions from Linaro include the remodeling of Linux's cpuidle and cpufreq subsystems with various changes to bring those subsystems under the control of the task scheduler. Extensions to the scheduler proper are also submitted to improve its handling of non uniform processor topologies as found in big.LITTLE systems, etc. Many patches have been discussed on the kernel developers' public mailing list and they are slowly but steadily being merged in the mainline kernel source tree.

Discussions around those changes are deeply technical and require a constant dialog with the upstream maintainers and other stakeholders to clear out potential misunderstanding of the code and avoid potential performance regressions for other users of the kernel. An article on LWN.net[6] was published to raise the EAS awareness amongst the wider Linux community. It is very important for this communication to be public and it is indeed going strong on the public kernel mailing lists right now.

Last but not least, Linaro is playing a role in preventing fragmentation of the ARM ecosystem by gathering EAS related requirements, and in some cases the implementation, that its members have produced internally and making a coherent proposal to the Linux community. Many EAS concepts are generally simple to understand but very complex to implement in a generic way in a kernel that serves the need of portable devices as well as big supercomputers, with various system types in between. Making sure that everyone's interest is well served is a challenge for sure, but future savings in maintenance costs are well worth it.

Note: _This article was first published at Linaro’s Executive Member Update Q3’2014 and reproduced here. That was before Linux Plumbers 2014. Amit’s article, posted in this blog ([link](/blog/energy-aware-scheduling-eas-project/)) represent an update of this article._

References:

[1][ http://lwn.net/Articles/481055/](http://lwn.net/Articles/481055/)

[2][ http://www.arm.com/files/pdf/big_LITTLE_technology_moves_towards_fully_heterogeneous_Global_Task_Scheduling.pdf](http://www.arm.com/files/pdf/big_LITTLE_technology_moves_towards_fully_heterogeneous_Global_Task_Scheduling.pdf)

[3][ http://lwn.net/Articles/552885/](http://lwn.net/Articles/552885/)

[4][/blog/summary-energy-aware-scheduling-workshop-linux-kernel-summit-2014/](/blog/summary-energy-aware-scheduling-workshop-linux-kernel-summit-2014/)

[5][ http://lwn.net/Articles/609969/](http://lwn.net/Articles/609969/)

**[6][ http://lwn.net/Articles/602479/](http://lwn.net/Articles/602479/)**