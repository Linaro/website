---
title: Power Management EAS
description: >-
  The Power Management Working Group is tasked with creating infrastructure,
  guidelines and tools to enable superior power management on multiple Arm SoCs.
permalink: /engineering/core/arm-power-management/eas/
layout: flow
related_resources_tracks: https://connect.linaro.org/assets/json/power.json
js-package: engineering
image: /assets/images/content/engineering/png/core_engineering.png
jumbotron:
  background-image: /assets/images/content/engineering/context/stewardship.jpg
  title: Power Management EAS
  description: ""
  inner_class: dotted
  image: /assets/images/content/engineering/context/stewardship.jpg
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: related_members.html
    style: members_row light_gray_row
  - row: main_content_row
    style: large_type introduction_row py-0
  - row: custom_include_row
    source: engineering_related_resources.html
---

## Energy Aware Scheduling \[EAS]

### Introduction

EAS is a set of extensions to the Linux kernel that introduce energy model based decision making for task scheduling and power-performance control. EAS aims to make power-performance control more centralised with the scheduler being the primary driver for power-performance decisions. This contrasts with the current situation where the scheduler, cpufreq and cpuidle tend to step on each other's toes. The goal is to simplify power-performance management with a scheduler-driven policy and a small set of well-defined tunables. EAS aims to provide tools that assist with energy model creation, qualification, the quantification of energy usage per workload and power-performance tuning.

EAS is the culmination of a lot of discussion in the past years on LKML and in various conferences and resulting work. The following URLs should help understand the route that has been taken to get this far \[ordered most recent first]:

#### Energy Aware Scheduling workshop @ Kernel Summit 2014

[LWN summary on the EAS workshop](http://lwn.net/Articles/609969/)

[Another LWN article on the EAS workshop](http://lwn.net/Articles/609561/)

#### Energy-aware Scheduling and CPU Power Management micro-conference @ LPC 2014

[Notes from the LPC miniconference on EAS](http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_EnergyAwareSched.txt)

#### Power-aware Scheduling workshop @ Kernel Summit 2013

[LWN article on the power-aware scheduling workshop](http://lwn.net/Articles/571414/)

### Work on EAS is divided into the following broad tracks:

#### sched-core

- Introduction of a CPU energy model.
- Application of the energy model for load balance decisions.
- Application of the energy model for power-performance control.
- Essential miscellaneous modifications to the CFS scheduler to accommodate the above.

#### sched-cpufreq

- Modifications to cpufreq to enable direct DVFS OPP transitions under scheduler control.
- A simple scheduler driven policy for DVFS with a clean set of tunables that enable a range of power/performance options.

#### sched-cpuidle

- Modifications to make the scheduler aware of all the idle states supported by CPUs in the system including the cost implications of entering and exiting those states as well as current idle state tracking.
- Modify cpuidle and/or the scheduler to remove any unnecessary redundant idle state specific data.

#### sched-tools

The idlestat tool - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/Idlestat

The rtapp based workload generator - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/WorkloadGen

### Resources

#### EAS repository

The EAS kernel work is contained in the following git repository:

[eas-backports.git](https://git.linaro.org/kernel/eas-backports.git)

This is a publically available Linux Stable Kernel v3.10 based repository with all key EAS patches back-ported to it. This repository will be the focal point for all development aiming to evidence any new features and qualify them properly with Android on available silicon implementations before those features are deemed adequate for publishing to LKML.

**_TODO: Explanation of topic branch structure and working methodology_**

#### EAS mailing list

Relevant discussions for EAS development will be on the following publicly accessible mailing list:

[eas-dev](http://lists.linaro.org/mailman/listinfo/eas-dev)

This list is for developers for sharing information, asking questions, providing updates, getting inspiration. Anyone working on EAS or wanting to know what is going on should subscribe.

#### EAS optimizations

Patches https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/EAS/Patches : List of submitted patches

[Tests and scenario](https://docs.google.com/spreadsheets/d/1WPQQff-3uGsZ2Q4JtJVuzExfNGbm_ziWTFwBqW1M8No) (restricted)

[Minutes of meetings](https://drive.google.com/open?id=0B8Ctg1Ef1e6PclhtdDJCMFRiN0k) (restricted)
