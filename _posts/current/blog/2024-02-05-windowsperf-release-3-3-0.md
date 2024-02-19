---
layout: post
title: WindowsPerf Release 3.3.0
description: In this blog, we announce the WindowsPerf 3.3.0 release, marking
  another major milestone in our development efforts. This update introduces
  disassembly analysis, allowing developers to thoroughly examine their Windows
  on Arm (WOA) code at the assembly leve
date: 2024-02-05 10:46:15 +08:00
image: /assets/images/content/screenshot-2023-08-11-at-11.37.28-485-980828-2.webp
tags:
  - Windows On Arm
category: blog
author: " Przemyslaw_Wirkus"
---
We are happy to announce the latest WindowsPerf release version [3.3.0](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/3.3.0). This major release is a continuation of WindowsPerf development effort. For previous release information check [this content](https://www.linaro.org/blog/windowsperf-release-3-0-0) out.

What’s new? Addition of disassembly analysis to WindowsPerf allows developers to dive deep into the assembly-level details of their WOA aka Windows on Arm code. By examining the disassembled instructions, they can identify bottlenecks, inefficient loops, and potential optimizations.

# High-lights from 3.3.0 release

## Disassemble support for sampling 

The disassemble feature in wperf allows you to view the disassembly of a program’s code. This can be useful for understanding how the program works, identifying performance bottlenecks, and optimising the code. New feature has been added for sampling / record. Users can now with help of llvm-objdump emit disassembler for [annotate](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#using-the-annotate-option). To use the disassemble feature, you can run the wperf command with the --disassemble option. Disassemble also implies annotate (--annotate).  See [Using the disassemble option](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#using-the-disassemble-option) documentation for more details.

## Support for double-dash -- to wperf command line parser. 

Double-dash marks the end of the wperf command line option list. After double-dash, the sampled process name and its verbatim command line options should be placed. From this release we’ve added support for double-dash -- to wperf.exe command line parser. Note: This change breaks the current wperf command line format! See [wperf "--" (double-dash) support](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#wperf-double-dash-support) documentation for more details.

## Driver improvements

* We’ve made significant improvements to WindowsPerf Kernel Driver stability:

  * Fixed issues with IOCTL input/output buffer misuse.
  * Improvements to hardware resource allocation.
* Timeline feature can now output JSON, in addition to CSV output file.
* We’ve [fixed a memory leak](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/merge_requests/461) inside our PDB / PE file APIs. Users who run e.g. \`wperf-lib\` based sampling experienced significant memory leaks.
* We’ve improved how we detect PMU and SPE with the wperf test command. Users can now see in more detail which PMU / SPE hardware is on their ARM64 host.\
  Note: we do not support SPE yet!

# WindowsPerf: what’s next 

Linaro is planning to have a major release every three months with the next release 4.0.0 coming in late July-August 2024. During the time between the releases, we will be able to implement 2-3 new major features (derived from our [requirements](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/requirements_management/requirements)), improve documentation, extend regression testing and fix issues.

## What to expect in the next releases?

* Lock/unlock feature where WindowsPerf will exclusively use PMU resources and gracefully handle (and reject) concurrent \`wperf\` requests to the driver. This simple improvement will benefit those who run e.g. long lasting timelines and do not want their work to be interrupted by concurrent \`wperf\` calls.
* We are working on adding support for Event Tracing for Windows (ETW) to WidnowsPerf. The integration of ETW into WindowsPerf will significantly enhance performance analysis capabilities for ARM64-based systems. WindowsPerf’s ETW integration will align with existing Windows performance analysis tools such as WPR/WPA.

# Where to find us?

For source code and binary releases please visit our [WindowsPerf webpage at GitLab](https://gitlab.com/Linaro/WindowsPerf/windowsperf). Additional project resources include [WindowsPerf Wiki](https://linaro.atlassian.net/wiki/spaces/WPERF/overview) and [WindowsPerf JIRA](https://linaro.atlassian.net/jira/software/c/projects/WPERF/boards/169) project board.

If you have any questions, issues you would like to raise please visit our [WindowsPerf GitLab issue page](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/issues) and create a new issue with a clear description of the problem you’re facing or issue you want help with.