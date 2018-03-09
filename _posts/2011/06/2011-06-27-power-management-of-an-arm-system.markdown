---
author: vincent.guittot
date: 2011-06-27 17:40:36+00:00
layout: post
link: /blog/power-management-of-an-arm-system/
slug: power-management-of-an-arm-system
title: Power Management of an ARM system
wordpress_id: 3392
categories:
- blog
---

When we look at power management of an ARM system, cpuidle and cpufreq are the 1st power-saving functions that are used on the ARM core.  The cpu hotpug is another one which has been introduced on ARM smp system but its use is a bit more sensitive because of the heaviness and the duration of the sequence. Even if this latter can offer some great power saving results for aggressive low-power use cases, it suffers from its slowness for being used on a high frequency basis. One feature that hasn't been used and tested yet for improving power management on ARM core, is the scheduler and more precisely sched_mc. This feature of the scheduler tries to improve power saving by filling first one core or package. This behavior is not so far from the cpu hotplug one because it aims to reduce the number of used cores but with the advantage of being able to use the other thread, core package almost immediately if necessary.

The default behavior of sched_mc is similar to the normal scheduler. You can modify this behavior through the sched_mc_power_savings entry.  Each time you set a new mode, the  scheduler domains' properties are updated and a new domain hierarchy is built.  It also adds an additional step in the computation of the statistic of the load balancer when the power saving balance is enable. This step searches the non-idle cpu group which has got the minimum load and a busy group which can still get some loads. If the domain is almost balanced, the load_balancer tries to pull task from the nearly idle group in order to make it idle.

The 1st step for ARM platform is to describe its cpu topology. Then, we shall start to study how ARM platforms can take advantage of shed_mc.

**To learn more visit:**
* Wiki:  [wiki.linaro.org/WorkingGroups/PowerManagement/Specs/sched_mc](https://wiki.linaro.org/WorkingGroups/PowerManagement/Specs/sched_mc)

* Blueprint: [blueprints.edge.launchpad.net/+spec/tr-power-smp-sched-mc]()https://blueprints.edge.launchpad.net/+spec/tr-power-smp-sched-mc

_**Vincent Guittot is a Power Management Specialist for Linaro**_
