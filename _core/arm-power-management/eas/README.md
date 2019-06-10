---
core_id: "3"
title: Power Management EAS
description: |-
    The Power Management Working Group is tasked with creating infrastructure, guidelines and tools to enable superior power management on multiple Arm SoCs.
keywords: EAS, DynamIQ, Arm, tools, power, energy, thermal, scheduler, big.LITTLE
permalink: /engineering/core/arm-power-management/eas/
director: Vincent Guittot
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMbk293t64TnZmxzLp-bRib
---
## Energy Aware Scheduling [EAS]

### Introduction

EAS is a set of extensions to the Linux kernel that introduce energy model based decision making for task scheduling and power-performancecontrol. EAS aims to make power-performance control more centralised with the scheduler being the primary driver for power-performance decisions. This contrasts with the current situation where the scheduler, cpufreq and cpuidle tend to step on each other's toes. The goal is to simplify power-performance management with a scheduler-driven policy and a small set of well-defined tunables. EAS aims to provide tools that assist with energy model creation, qualification, the quantification of energy usage per workload and power-performance tuning.

EAS is the culmination of a lot of discussion in the past years on LKML and in various conferences and resulting work. The following URLs should help understand the route that has been taken to get this far [ordered most recent first]:

#### ENERGY AWARE SCHEDULING WORKSHOP @ KERNEL SUMMIT 2014

[A summary of the EAS workshop](https://www.linaro.org/blog/summary-energy-aware-scheduling-workshop-linux-kernel-summit-2014/)

[LWN summary on the EAS workshop](http://lwn.net/Articles/609969/)

[Another LWN article on the EAS workshop](http://lwn.net/Articles/609561/)

#### ENERGY-AWARE SCHEDULING AND CPU POWER MANAGEMENT MICRO-CONFERENCE @ LPC 2014

[Notes from the LPC miniconference on EAS](http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_EnergyAwareSched.txt)

[LPC conference entry for EAS](http://www.linuxplumbersconf.org/2014/ocw/events/LPC2014/tracks/297)

#### POWER-AWARE SCHEDULING WORKSHOP @ KERNEL SUMMIT 2013

[LWN article on the power-aware scheduling workshop](http://lwn.net/Articles/571414/)

#### POWER-EFFICIENT SCHEDULING MICRO-CONFERENCE @ LPC 2013

[LPC conference entry for the power efficient scheduling micro-conference](http://www.linuxplumbersconf.org/2013/ocw/events/LPC2013/tracks/207)

### Work on EAS is divided into the following broad tracks:

#### SCHED-CORE

- Introduction of a CPU energy model.
- Application of the energy model for load balance decisions.
- Application of the energy model for power-performance control.
- Essential miscellaneous modifications to the CFS scheduler to accommodate the above.

#### SCHED-CPUFREQ

- Modifications to cpufreq to enable direct DVFS OPP transitions under scheduler control.
- A simple scheduler driven policy for DVFS with a clean set of tunables that enable a range of power/performance options.

#### SCHED-CPUIDLE

- Modifications to make the scheduler aware of all the idle states supported by CPUs in the system including the cost implications of entering and exiting those states as well as current idle state tracking.
- Modify cpuidle and/or the scheduler to remove any unnecessary redundant idle state specific data.

#### SCHED-TOOLS

[The idlestat tool](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/Idlestat)

[The rtapp based workload generator](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/WorkloadGen)

### Resources

#### EAS REPOSITORY

The EAS kernel work is contained in the following git repository:

[eas-backports.git](https://git.linaro.org/kernel/eas-backports.git)

This is a publically available Linux Stable Kernel v3.10 based repository with all key EAS patches back-ported to it. This repository will be the focal point for all development aiming to evidence any new features and qualify them properly with Android on available silicon implementations before those features are deemed adequate for publishing to LKML.

_TODO: Explanation of topic branch structure and working methodology_

#### EAS MAILING LIST

Relevant discussions for EAS development will be on the following publicly accessible mailing list:

[eas-dev](http://lists.linaro.org/mailman/listinfo/eas-dev)

This list is for developers for sharing information, asking questions, providing updates, getting inspiration. Anyone working on EAS or wanting to know what is going on should subscribe.

#### EAS OPTIMIZATIONS

[Patches](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/EAS/Patches) : List of submitted patches

[Tests and scenario](https://docs.google.com/spreadsheets/d/1WPQQff-3uGsZ2Q4JtJVuzExfNGbm_ziWTFwBqW1M8No) (restricted)

[Minutes of meetings](https://drive.google.com/open?id=0B8Ctg1Ef1e6PclhtdDJCMFRiN0k) (restricted)