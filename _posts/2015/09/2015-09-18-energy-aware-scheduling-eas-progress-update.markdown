---
author: linaro
categories:
- blog
date: 2015-09-18 19:01:52
description: ARM and Linaro are jointly developing "Energy Aware Scheduling", a technique
  that improves power management on Linux by making it more central and easier to
  tune. See the latest update.
excerpt: ARM and Linaro are jointly developing "Energy Aware Scheduling", a technique
  that improves power management on Linux by making it more central and easier to
  tune. See the latest update.
layout: post
link: /blog/core-dump/energy-aware-scheduling-eas-progress-update/
slug: energy-aware-scheduling-eas-progress-update
tags:
- Core Dump
- arm
- Linux
- Linux on ARM
title: Energy Aware Scheduling (EAS) progress update
wordpress_id: 9319
---

_Authors:  Ian Rickards (ARM),  Amit Kucheria (Linaro)_

**Today, power management on Linux is implemented by different subsystems that work in a largely un-coordinated manner. This makes platform adaptation difficult and tuning complex. ARM and Linaro are jointly developing "Energy Aware Scheduling", a technique that improves power management on Linux by making it more central and easier to tune.  This will improve mainline Linux support for advanced multicore SoC’s that power current and future mobile devices and other consumer products.**

The existing Linux ‘Completely Fair Scheduler’ has a throughput based policy.  For example, if you have a new task and an idle cpu, then the scheduler will always put the new task on the idle cpu. However, this may not be the best decision for lowest energy usage.  EAS is designed to implement energy saving without affecting performance.

The Energy Aware Scheduling project consists of a number of component tasks:

{% include image.html name="EAS-task-image.jpg" alt="EAS task image"%}

The goal is to introduce generic energy-awareness in upstream Linux:

  1. Using a clean, generic design to support a broad range of CPU topologies.
  2. Based on scientific, measured energy model data rather than magic tunables.
  3. Providing a high-quality baseline solution that can be used as-is, or extended as needed.
  4. Designed-for-mainline => reducing software maintenance costs.

EAS will unify 3 separate frameworks in the Linux kernel that are currently only loosely connected:

  * Linux scheduler (Completely Fair Scheduler - CFS)
  * Linux cpuidle
  * Linux cpufreq

These existing frameworks have their own policy mechanisms that make decisions independently. Our [previous blog post](/blog/energy-aware-scheduling-eas-project/) covered the limitations of this approach.

The optimal solution is to fully integrate these functions into the Linux scheduler itself, with sufficient information to enable the most energy-efficient scheduling decisions to be made.

A typical ARM multi-core SoC would have the following voltage and frequency domains:

{% include image.html name="ARM-voltage-EAS-blog.jpg" alt="ARM voltage EAS blog" %}

Ideally, each cluster will operate at its own separate independent frequency and voltage.  By lowering the voltage and frequency, there is a substantial power saving.  This allows the per-cluster power/performance to be accurately controlled, and tailored to the workload being executed.

A generic energy model based approach is expected to support a broad range of current and future CPU topologies, including SMP, multi-cluster SMP (e.g. 8-core Cortex-A53 products), as well as traditional ARM big.LITTLE.

Since the original discussions started on the Linux Kernel Mailing List in 2013, there has been significant progress recently:

{% include image.html name="AES-blog-image-3.jpg" alt="AES blog image 3" %}

## **Scheduler idle-state awareness**

_Engineer:  Nicolas Pitre, Linaro [Merged Sep-2014, in Linux 3.18 and later]_

The sched-idle enhancement makes the scheduler aware of the idle state of the CPU’s.  When waking up a cpu it will now always pick the CPU in shallowest idle-state, minimizing wake-up time and energy.

In the example below, a new task needs to wake up, but it will not fit on CPU#0 because the current operating point is almost fully utilized.  With sched-idle integrated, the new task always gets placed on CPU #1 since it is in the shallowest idle state (WFI), and the other cluster remains in C2 shutdown.  This is the lowest energy and fastest response option.

{% include image.html name="EAS-blog-4.jpg" alt="AES blog image 4" %}

## **DVFS (cpufreq) improvements**

_Current situation with DVFS support in Linux_

The existing cpufreq implementation is an extension to the Linux kernel, which uses a sampling-based approach to consider cpu time in idle along with some heuristics to control the CPU Operating Performance Point (OPP).  There are a number of disadvantages to this approach:

  1. Sampling based governors are slow to respond and hard to tune.


  2. Sampling too fast: OPP changes for small utilization spikes.


  3. Sampling too slow: Sudden burst of utilization might not get the necessary OPP change in time - reaction time might be poor.


  4. Only aware of the overall CPU loading and is not aware of task migration.

{% include image.html name="EAS-blog-5.jpg" alt="AES blog image 5" %}

## **New scheduler-driven DVFS (sched-DVFS)**

_Engineers:  Mike Turquette, Linaro/Baylibre [latest PATCH v3, June-2015]_

With scheduler task utilization tracking, a feature that the mainline kernel already supports, any OPP transition required will happen immediately based on the stored tracked load of the task.

{% include image.html name="EAS-blog-6.jpg" alt="AES blog image 6" %}


With sched-cpufreq, when the new task is placed on CPU#1, the cpu capacity for the little cluster changes immediately.  This uses the history of the task, which is stored internally as part of the CFS scheduler in the kernel.  This is a good approximation for many tasks which have consistent cpu load behavior.


## **Foundations - Frequency and capacity invariant load tracking**

_Engineers:  Morten Rasmussen/Dietmar Eggemann, ARM_

The “Per-Entity Load Tracking” (PELT) framework in the Linux kernel determines the load of a task by looking at the utilization of cpus.  The existing design of PELT tracks the CPU utilization but does not accurately track the load on different CPUs at different frequencies or with different performance per MHz.  ARM has built on the recent July-2015 rewrite of PELT from Yuyang Du to add frequency and microarchitecture support:

[https://lkml.org/lkml/2015/7/15/159](https://lkml.org/lkml/2015/7/15/159) - PELT rewrite (Yuyang Du, Intel corp.)
[https://lkml.org/lkml/2015/8/14/296](https://lkml.org/lkml/2015/8/14/296) - Frequency and microarchitecture invariance for PELT  (ARM)

**Capacity**
This is a measure of the processing capability of a cpu.  ARM patches include enhancements for capacity to be extended with additional scaling for microarchitecture and current operating frequency. The cpu capacity at different operating points is based on measuring some standard benchmark metric ,e.g. “sysbench”

**Utilization**
Traditionally the utilization has been related to the running time.  ARM foundational patches extend this to accommodate the frequency & performance of the cpu.

_Existing utilization calculation_

{% include image.html name="EAS-8.jpg" alt="AES blog image 8" %}

_New utilization calculation takes into account frequency and microarchitecture_

{% include image.html name="EAS-image-9.jpg" alt="AES blog image 9" %}

## **Energy model**

_Engineer:  Morten Rasmussen, ARM [latest RFCv5, July-2015]_

The EAS energy model is the final piece which enables the CFS with energy-aware task scheduling.  It allows the kernel to decide at run-time which scheduling decisions are the best ones for lowest energy usage. The Energy-Aware policy is to always pick the CPU with sufficient spare capacity and smallest energy impact.

This also removes the magic tunables in some of the power management frameworks at present - you actually have to look into the code to understand what these magic tunables do.  For example, consider the big.LITTLE HMP thresholds, the scheduler tunables, and even the interactive governor tunables (used in product but didn’t make it to mainline)

{% include image.html name="EAS-image-10.jpg" alt="AES blog image 10" %}

The platform energy model is an accurate baseline model of the dynamic and static power used by the CPUs in the system.

_Typical big.LITTLE CPU power/performance curves_

{% include image.html name="EAS-image-11.jpg" alt="AES blog image 11" %}

For each CPU, the energy model contains the following information

{% include image.html name="EAS-blog-image-12.jpg" alt="AES blog image 12" %}

We are discussing the best ways to express this energy model with the open source community. One option that is being considered is using a Device Tree

#### _Options for placing a waking task_

As seen in the diagram below, a newly waking task can sensibly be placed on either of the two CPUs - CPU#1 or CPU#3.   With the current mainline scheduler, either CPU#1 or CPU#3 could be chosen. 

{% include image.html name="EAS-image-14.jpg" alt="AES blog image 14" %}

EAS considers the energy costs of the two options:

**CPU#1**: operating point must be moved up for both CPU#0 and CPU#1

**CPU#3**: no operating point change, but higher power used as per Power/Performance graph below

{% include image.html name="EAS-image-15.jpg" alt="AES blog image 15" %}

Based on the above, EAS will probably choose CPU#1 because the small additional energy cost of increasing the OPP of CPU#0 (and CPU#1 by implication - since both CPUs are in the same frequency domain in this example) is not significant compared with the better power efficiency of running the task on CPU#1 instead of CPU#3.  The key foundational pieces are understanding the intensity of the task (done by PELT with frequency & microarchitecture invariance).

EAS doesn’t evaluate all the possible options. That can introduce performance hits in key scheduler pathways. Instead,  EAS narrows down the search space to:

  * CPU the task ran on last time.
  * CPU chosen by a simple heuristic which works out where the task fits best.

Based on the energy model, EAS evaluates which of these two options is the most energy efficient.


## **SchedTune**

_Engineer:  Patrick Bellasi, ARM [posted August-2015]_

The ‘interactive governor’ appeared on Android in 2010, and it has proved to be a very popular solution for maximizing battery life whilst providing a high operating point suitable for interactive tasks. However, the interactive governor was not merged into the mainline Linux kernel. There is considerable interest in having a frequency boost capability available in mainline Linux as part of cpufreq (and potentially EAS in future).

There has been a repeated demand to have a single, simple tunable ‘knob’ that permits the selection of energy efficient operation at one end and high performance operation at the other end. With sched-DVFS and EAS in place, the stage is set for implementing such a central tunable. ARM’s proposal for this tunable is called SchedTune.

SchedTune adds an additional ‘margin’ into the tracked load from PELT. Sched-DVFS and EAS then use this ‘boosted’ tracked load when selecting operating points as usual. The magnitude of the margin is controlled by a single user-space facing tunable.

{% include image.html name="EAS-image-16.jpg" alt="AES blog image 16" %}

If the task appears to be bigger, the allocated MHz from cpufreq/sched-cpufreq will be higher.  Also, on a big.LITTLE system, it is more likely to be placed onto a big cpu. This simple technique permits the selection of a suitable power/performance point that provides the best interactive response for the system.

## **Tooling & Analysis**

ARM & Linaro have been working on implementing opensource test and analysis tools, most of which needed to be newly developed for the EAS project.

### rt-app/ WorkloadGen  (Linaro)

[https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/WorkloadGen](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/WorkloadGen)

Most existing benchmarks run flat-out, and there are few good existing tools to run lower-intensity use cases.

rt-app is a linux command-line tool that creates light intensity workloads, using json files to describe different simulated use-cases. rt-app is already used by the scheduler community.

### workload-automation (ARM)

[https://github.com/ARM-software/workload-automation](https://github.com/ARM-software/workload-automation)

This is a python framework for running standard tests and benchmarks on a target system. It supports:

  * Linux
  * Android (browser and standard benchmarks)
  * ChromeOS (telemetry benchmarks etc)

Kernel ftrace logs are captured from the Linux kernel, and workload-automation integrates with various power measurement tools, e.g. NI DAQ for measuring device power, and ChromeOS servo boards.

### TRAPpy (ARM)

[https://github.com/ARM-software/trappy](https://github.com/ARM-software/trappy)
[https://github.com/ARM-software/bart](https://github.com/ARM-software/bart)

trappy is a python-based visualization tool to help analyze ftrace data generated on a device. It depends on ipython notebook and pandas (python data analysis library), and can be used from a browser to zoom in to analyse scheduler behaviors.

One important feature is it contains an API used for tracking behaviors for thread residency, which allows it to be used as the framework for regression testing for EAS.  ARM has a tool called “BART” - Behavior Analysis Regression Testing which uses this API.

### idlestat (Linaro)

[https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/Idlestat](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools/Idlestat)

Idlestat uses kernel frace to monitor and capture C-state and P-state transitions of CPUs over a time interval. Idlestat can also use an energy model for a given platform to help estimate the energy consumption of a given workload.

Idlestat can be used with sample workloads to capture and compare C-state and P-state behaviours in a reproducible manner across kernel versions.

### kernelshark (existing)

[https://www.redhat.com/](https://www.redhat.com/)

X11/GTK tool used for analysis of ftrace data, useful for detailed scheduler analysis but does not offer the API capability of ‘trappy’ above.

## **Getting involved with EAS**

All the work on EAS is done in the open on mailing lists:

  1. Linux Kernel Mailing List (LKML) for patches and EAS architecture discussions
(postings on LKML prefixed with “sched:”)
This is the preferred option as the Linux kernel maintainers will see the questions.
  2. eas-dev mailing lists ([http://lists.linaro.org](http://lists.linaro.org/) )
This mailing list is to discuss experimental aspects of EAS developments that are too premature for discussion on LKML


ARM provides a [git repo](http://www.linux-arm.org/git?p=linux-power.git) containing the latest EAS patched into a recent Linux kernel

ARM/Linaro are planning an LSK 3.18 backport of EAS (on a separate experimental branch) for availability soon, this will be the best route to Android testing.

ARM and Linaro appreciate any participation in shaping the future direction of EAS, and we particularly welcome testing on a range of platforms including ‘tested-by’ comments on LKML.

### Current patchsets for review

<table width="100%" class="table responsive-table">

<tr >
<td>
Description
</td>
<td>
URL
</td>
</tr>

<tbody >
<tr >

<td style="text-align: center;" markdown="1">
Scheduler driven DVFS PATCH v3
</td>

<td markdown="1">
[https://lkml.org/lkml/2015/6/26/620](https://lkml.org/lkml/2015/6/26/620)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
EAS RFCv5
</td>

<td style="text-align: left;" >[https://lkml.org/lkml/2015/7/7/754](https://lkml.org/lkml/2015/7/7/754)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
SchedTune proposal
</td>

<td style="text-align: left;" >[https://lkml.org/lkml/2015/8/19/419](https://lkml.org/lkml/2015/8/19/419)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
Foundational Patches
(frequency and microarchitecture contribution to capacity/utilization, split out from RFCv5)
</td>

<td style="text-align: left;" >[https://lkml.org/lkml/2015/8/14/296](https://lkml.org/lkml/2015/8/14/296)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
Yuyang Du PELT rewrite v10 containing ARM enhancements to utilization calculation  (already queued for merging)
</td>

<td style="text-align: left;" >[https://lkml.org/lkml/2015/7/15/159](https://lkml.org/lkml/2015/7/15/159)
</td>
</tr>
</tbody>
</table>


### Future patches under development

<table width="100%" class="table responsive-table">

<tr >
Proposed Patch
</tr>

<tbody >
<tr >

<td style="text-align: center;" markdown="1">
big.LITTLE awareness on wakeup path
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
Further Scheduler driven DVFS  enhancements
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
SchedTune extension for EAS
</td>
</tr>
</tbody>
</table>
[/mk_table][vc_row_inner attached="false" padding="0" visibility=""][vc_column_inner el_class="" width="1/1"][vc_empty_space height="16px"][/vc_column_inner][/vc_row_inner][mk_table title="List of Source Code Repositories" style="style1"]
<table width="100%" >

<tr >
Topic
URL
</tr>

<tbody >
<tr >

<td style="text-align: center;" markdown="1">
EAS
</td>

<td style="text-align: center;" markdown="1">
[http://www.linux-arm.org/git?p=linux-power.git](http://www.linux-arm.org/git?p=linux-power.git)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
Idlestat
</td>

<td style="text-align: center;" markdown="1">
[http://git.linaro.org/power/idlestat.git](http://git.linaro.org/power/idlestat.git)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
rt-app/workloadgen
</td>

<td style="text-align: center;" markdown="1">
[https://git.linaro.org/power/rt-app.git](https://git.linaro.org/power/rt-app.git)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
TRAPpy
</td>

<td style="text-align: center;" markdown="1">
[https://github.com/ARM-software/trappy](https://github.com/ARM-software/trappy)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
BART
</td>

<td style="text-align: center;" markdown="1">
[https://github.com/ARM-software/bart](https://github.com/ARM-software/bart)
</td>
</tr>
<tr >

<td style="text-align: center;" markdown="1">
Workload Automation
</td>

<td style="text-align: center;" markdown="1">
[https://github.com/ARM-software/workload-automation](https://github.com/ARM-software/workload-automation)
</td>
</tr>
</tbody>
</table>


### Further reading


LWN Article: “Steps toward Power Aware Scheduling”  (25-August-2015)
[http://lwn.net/Articles/655479/](http://lwn.net/Articles/655479/)

LWN article: “Teaching the scheduler about power management” (18-June-2014)
[http://lwn.net/Articles/602479/](http://lwn.net/Articles/602479/)

LWN article: “Power-aware scheduling meets a line in the sand” (5-June-2013)
[http://lwn.net/Articles/552885/](http://lwn.net/Articles/552885/)