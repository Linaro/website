---
layout: post
title: WindowsPerf Release 2.5.1
description: >
  In this blog we talk about the highlights from the WindowsPerf 2.5.1 release
  and show how this release continues the development of WindowsPerf and is sure
  to please users of this popular performance monitoring tool.
date: 2023-08-31 12:44:56 +02:00
image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
tags:
  - Windows on Arm
  - WindowsPerf
category: blog
author: everton.constantino
---
# Introduction

WindowsPerf is a (Linux perf inspired) lightweight Windows on Arm performance profiling tool. Profiling is based on ARM64 PMU (Performance Monitor Unit) and its hardware counters. Currently, WindowsPerf is in the early stages of development, but it already supports the counting model for obtaining aggregate counts of occurrences of special events, and sampling model for determining the frequencies of event occurrences produced by program locations at the function, basic block, and/or instruction levels.

# Release 2.5.1

We are happy to announce the latest [WindowsPerf](https://gitlab.com/Linaro/WindowsPerf/windowsperf) release version [2.5.1](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/2.5.1). This major release is a continuation of WindowsPerf development. It combines updates from release [2.5.0](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/2.5.0) and adds new features that were missed previously.

This release introduces improvements to `wperf-driver` stability, experimental sampling `--annotate` command (see [!231](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/231) for more details) and various bug-fixes. In this release we've also focused on a new sub-project `wperf-lib` which is a C API library wrapper for `wperf` user-space application.  Users now can develop their own C/C++ programs taking full advantage of counting and sampling features. `wperf-lib` for now on will be a part of WindowsPerf binary release.

We are also introducing basic export to `perf.data`. Right now it only outputs simple COMM and SAMPLE events. It will be extended in future releases and will include support for: counting, sampling, recording, annotate, reporting. And more! Note: this can be limited by what host OS supports.

# Highlights from the 2.5.1 Release

You can find a full list of improvements [here](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/2.5.1#changelog). Below is a summary of the release highlights

* Add support for JSON output with `--annotate`, see [!310](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/310),
* Improve timeline feature, see [!308](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/308),
* Provide up to date `wperf-lib` support for WindowsPerf features and
* Add experimental support for `perf.data` output format.
* Specify raw events with `-e`, e.g. `-e r1b` (raw event `0x001b`). See [!184](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/184).
* Specify event names in caps. See [!186](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/186).
* Specify raw events in event groups. See [!187](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/187).
* New `wperf-lib` project was added, See [WPerf lib service](https://linaro.atlassian.net/browse/WPERF-189).
* New events and metrics for CPUs specified by the TS team. See [Pull in data from Telemetry Solution](https://linaro.atlassian.net/browse/WPERF-245).
* New `--timeout` command line option replaces deprecated -d. See [!277](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/277).
* Support for `--timeout` in sampling. See [!278](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/278).
* Command `wperf list` now supports extended view with `-v` (verbose) option.
* Users can now control `wperf-driver` counting timer periods (between 10ms and 100ms) with the new command line option `--config` (e.g. `--config count.period=30`). See [!301](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/301).

## Annotate example while sampling CPython

First make sure you have CPython compiled along with its PDB files. You can see detailed instructions here [CPython cross-build on x64 machine targeting ARM64](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#cpython-cross-build-on-x64-machine-targeting-arm64). Now start the python_d.exe executable and make sure it is pinned to a single core, here we assume it is on core 1. You can pin the application through the task manager or using the command: 

```powershell
> cmd /c “start /affinity 2 python_d.exe”
```

notice that the argument to affinity is an affinity mask not the core number itself. This will open up a window with a python console. Type the following command

```python
>> 10**10**1000 
```

Now go back to the command line and start `wperf` with:

```powershell
> wperf sample -e ld_spec:100000 --pe_file python_d.exe  --pdb_file python_d.pdb --image_name python_d.exe -c 1  --annotate
```

Here follows part of the output you should see:

```powershell
x_mul:python313_d.dll
        Source file                                               Line number  Hits
        ===========                                               ===========  ====
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3559         98
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3560         48
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3562         22
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3558         17
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3561         15
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3563         6
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3542         2
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3540         1
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3557         1
        C:\Users\$USER\source\repos\cpython\Objects\longobject.c  3571         1
```

\
The first information is the function symbol, here is the `x_mul` function of the `python313_d.dll` so all information down below pertains to that function, you will see sections like this for all functions that have at least a single sample. The details that follow come from the `python313_d.pdb` PDB file, the first column represents the file the function is defined. The second column contains the line number within the file and the third column the number of samples for that particular line number. Notice that the driver generates just a set of program counters when a particular event overflows the PMU counters so we have to map that memory address to a particular line number inside the source code that might actually contain a range of memory locations.

Sampling output is available also as JSON. Please use `--json` command line flag. Please note that in the future JSON format will have richer content depending on the `-v` (verbose) flag used with `--json`.

## Changes to command line options

We are in the process of aligning command line options. We've moved with [!305](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/305) towards normalised command line options. We want all command line options with one hyphen (like `-option`) to be replaced with `--option`. Single letter command line options like `-v` will not change. With the upcoming release 3.0 we will migrate to this model. From release 2.5.1 onward we support both `-option` and `--option` to give users time to transition to the new command line style.

# WindowsPerf releases update

We’re planning to have a major release every three months with the next release 3.0.0 coming in September/October 2023. During the time between the releases, we will be able to implement 2-3 new major features (derived from our [requirements](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/requirements_management/requirements)), improve documentation and fix issues. 

You can read more about previous releases [here](https://www.linaro.org/blog/windowsperf-release-2-4-0-introduces-the-first-stable-version-of-sampling-model-support/).

# Where to find us?

For source code and binary releases please visit our [WindowsPerf webpage at GitLab](https://gitlab.com/Linaro/WindowsPerf/windowsperf). Additional project resources include [WindowsPerf Wiki](https://linaro.atlassian.net/wiki/spaces/WPERF/overview) and [WindowsPerf JIRA](https://linaro.atlassian.net/jira/software/c/projects/WPERF/boards/169) project board.

If you have any questions, issues you would like to raise please visit our [WindowsPerf GitLab issue page](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/issues) and create a new issue with a clear description of the problem you’re facing or issue you want help with.