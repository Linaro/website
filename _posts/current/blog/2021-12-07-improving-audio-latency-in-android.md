---
layout: post
title: Improving Audio Latency in Android
description: How do you save power on a power-constrained system while always
  being responsive? In this blog, Paolo Valente, Biagio Ferri and Davide Zini
  talk about the work they have done to achieve this while improving audio
  latency in Android.
date: 2021-12-07 01:43:00 +00:00
image: /assets/images/content/code.jpg
tags:
  - Android
  - CPU
related_projects: []
category: blog
author: paolo.valente
---
## Introduction

It is not easy for a power-constrained system to save power and, at the same time, always be responsive. In fact, the most efficient way to save power is to keep components off as much as possible. For CPUs, this means keeping frequency as low as possible, and idle states as deep as possible. This power-saving policy leads to high latencies if CPU workloads happen to increase suddenly (then latency gets back under control as the system performance gets raised to a level compatible with the new load).

With audio workloads, this issue can cause perceivable glitches and silence gaps. We have reproduced these problems deterministically with the [SynthMark audio emulator](https://github.com/google/synthmark), on a Qualcomm 845c Dragonboard, with a 5.10 kernel and the [Android Open Source Project](https://www.google.com/url?q=https://source.android.com/docs&sa=D&source=docs&ust=1638889331613000&usg=AOvVaw0rjd4u8LELLhmN-PycSn39) (AOSP) master.

More importantly, we have also devised a solution to this problem. It proved remarkably effective with SynthMark workloads. Details follow.

## Spotting the problem

by Biagio Ferri and Davide Zini

SynthMark is a benchmarking emulator that generates audio tracks and collects relevant parameters, including audio latency. We focused on a specific test: switch mode, a case where the workload switches repeatedly from low to high. This is the most stressful and unfriendly pattern for audio latency. Using the board's default CPUfreq Governor, schedutil, we got a latency around 12ms. On the opposite end, with the performance CPUfreq Governor (all CPUs at maximum frequency) and deepest idleState disabled, latency drops to 2ms (until thermal mitigation does not come into play). The high latency in default mode is evidently caused by the performance level being too low.


## Adding utilClamp controller

by Biagio Ferri

Starting from SynthMark, after several consultations on possible hypotheses, it was decided to deal with the problem by implementing a jump-to-max and slowly-decrease policy, to choose the right value of frequency for handling a load increase as quickly as possible. This mechanism was implemented by modifying the utilClamp parameter, a parameter that allows a single process not to fall below a certain frequency threshold. In more detail, when an underrun for audio buffers is detected, utilClamp is pushed immediately to its maximum possible value. Then, as a load decrease is detected, utilClamp is decreased linearly in small steps, until the CPU frequency complies with the current load.

With this solution in place, latency falls from 12ms to 6ms, which essentially eliminates glitches and silence gaps. And the system remains in the default power-saving mode.

For more information on the work we are doing in audio latency in Android, have a look at [our contribution for SynthMark](https://github.com/google/synthmark/commit/0e0ce58bd04808970f1a4186ce3241e9035aca74), or, more in general, at [Linaro’s Power and Performance project](https://linaro.atlassian.net/wiki/spaces/PERF/overview).