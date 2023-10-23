---
layout: post
title: WindowsPerf Release 3.0.0
description: >
  We are happy to announce the latest WindowsPerf release version 3.0.0. This
  major release is a continuation of WindowsPerf development. It combines
  updates from release 2.5.1 and adds new features that were missed previously.
date: 2023-10-23 11:43:39 +02:00
image: /assets/images/content/istock-1220974008_sm.jpg
tags:
  - WindowsPerf
  - Windows On Arm
category: blog
author: everton.constantino
---
# Introduction

WindowsPerf is a (Linux perf inspired) lightweight Windows on Arm performance profiling tool. Profiling is based on ARM64 PMU (Performance Monitor Unit) and its hardware counters. Currently, WindowsPerf is in the early stages of development, but it already supports the counting model for obtaining aggregate counts of occurrences of special events, and sampling model for determining the frequencies of event occurrences produced by program locations at the function, basic block, and/or instruction levels.

# Release 3.0.0

We are happy to announce the latest [WindowsPerf](https://gitlab.com/Linaro/WindowsPerf/windowsperf) release version [3.0.0](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/3.0.0). This major release is a continuation of WindowsPerf development. It combines updates from release [2.5.1](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/2.5.1) and adds new features that were missed previously.

# Highlights from the 3.0.0 Release

We've focused our efforts and brought you `wperf record` command, stability improvements to `wperf-driver`, fixes and improvements for timeline feature, [ustress](https://gitlab.arm.com/telemetry-solution/telemetry-solution/-/tree/main/tools/ustress) micro-benchmark test bench support, improved sampling JSON output format and more.

* We've introduced process spawn (for given core use `-c <N>` command line option) feature. Users can, when they count with `wperf stat`or sample with `wperf record`, spawn a process (and pass its command line parameters) on a given core.\
  Use `wperf [stat|record] [options] [PROCESS] [ARGS]` command line option syntax to spawn `PROCESS` with command line `ARGS`. Read [using the record command](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/blob/main/wperf/README.md?ref_type=heads#using-the-record-command) article for more details.
* We've finalised aligning command line options. From this release all command line options `-option` are replaced with `--option`. wperf will let you know you are missing one `-` when invoking command line options old style.
* Basic export to `perf.data` will be extended in the future releases and will include support for counting, sampling, recording, annotation, reporting. And more! Note: this can be limited by what host OS can provide and support.

## WindowsPerf 3.0.0-beta release package

You can find the beta [wperf-driver](https://gitlab.com/api/v4/projects/40381146/packages/generic/windowsperf/3.0.0/windowsperf-bin-3.0.0-beta.zip) package based on version 3.0.0. Its driver mitigates pre-allocated GPCs (General Purpose Counters). [Beta release sources](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/3.0.0-beta?ref_type=tags) are available as an archive here: [windowsperf-src-3.0.0-beta.zip](https://gitlab.com/api/v4/projects/40381146/packages/generic/windowsperf/3.0.0/windowsperf-src-3.0.0-beta.zip).

# WindowsPerf releases update

We’re planning to have a major release every three months with the next release 4.0.0 coming in calendar Q1 2024. During the time between the releases, we will be able to implement 2-3 new major features (derived from our [requirements](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/requirements_management/requirements)), improve documentation, regression testing and fix issues.

In order to further improve the Kernel driver dependability and reliability we will focus our efforts on the `wperf-driver` component.

You can read more about previous releases [here](https://www.linaro.org/blog/windowsperf-release-2-4-0-introduces-the-first-stable-version-of-sampling-model-support/).

# Where to find us?

For source code and binary releases please visit our [WindowsPerf webpage at GitLab](https://gitlab.com/Linaro/WindowsPerf/windowsperf). Additional project resources include [WindowsPerf Wiki](https://linaro.atlassian.net/wiki/spaces/WPERF/overview) and [WindowsPerf JIRA](https://linaro.atlassian.net/jira/software/c/projects/WPERF/boards/169) project board.

If you have any questions, issues you would like to raise please visit our [WindowsPerf GitLab issue page](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/issues) and create a new issue with a clear description of the problem you’re facing or issue you want help with.