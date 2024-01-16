---
layout: post
title: Linaro Engineering Highlights | January 2021
description: >
  Our January edition of the Engineering Highlights is feature packed with several updates, together with a roundup on the year of some of the key projects.
date: 2021-02-10 11:00:00
image: /assets/images/content/the_world.jpg
tags:
  - Engineering Highlights
  - Tuxsuite
  - Open Source Security Foundation
  - LLVM
category: blog
author: jon.burcham@linaro.org
---

## Introduction

In this edition of Engineering Highlights we have included articles on Saving Power & Improving Performance With Dynamic Interconnect Scaling, Creating Portable and Reproducible Kernel Builds with TuxMake, plus information on a new tool called the Open Source Project Criticality Score. Furthermore, there are articles on the LLVM Code-Size Optimization: Machine Outliner and SVE/SVE2 support in LLVM Debugger (LLDB).

## [Saving Power & Improving Performance With Dynamic Interconnect Scaling](/blog/history-of-the-interconnect-framework/)

**By Georgi Djakov, Linaro engineer, Kernel Working Group**

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering Icon" %}

The Interconnect API is a framework for configuring the on-chip interconnects in the system. It provides an API for drivers to express their bandwidth needs when transferring data and interacting with the different hardware blocks in the system. The framework tunes the system for the best power and performance while taking into account the aggregated traffic between the different endpoints. It was merged in January 2019 and is available in the Linux kernel since v5.1. In this article I’ll share more about the history behind it. [Continued here.](/blog/history-of-the-interconnect-framework/)

## Portable and Reproducible Kernel Builds with TuxMake

**By Dan Rue, Linaro Principal Technical Lead**
{% include image.html path="/assets/images/content/tuxmake.png" class="small-inline left" alt="TuxMake Logo" %}

[TuxMake](https://gitlab.com/Linaro/tuxmake) is an open-source project from Linaro that began in May 2020 and is designed to make building Linux kernels easier. It provides a command-line interface and a Python library, along with a full set of curated portable build environments distributed as container images. With TuxMake, a developer can build any supported combination of target architecture, toolchain, kernel configuration, and make targets.

Building a Linux kernel is not difficult. Follow the documentation, install the dependencies, and run a couple of make commands. However, if a developer wants to build for multiple architectures, with multiple toolchains, things get complicated quickly. Most developers and maintainers have a set of custom scripts that they have written and maintained to perform their required set of builds. TuxMake provides a common layer of abstraction to reduce the need for every developer to write their own build scripts. [Continue reading at Linux World News (LWN)](https://lwn.net/Articles/841624/).

## Open Source Project Criticality Score

**By Joakim Bech and Vicky Janicki**
{% include image.html path="/assets/images/content/open-source-security-foundation-icon.png" class="small-inline left" alt="Open Source Security Foundation icon.png" %}

The [Open Source Security Foundation](https://openssf.org/) (OSSF) recently published a new tool called the [Open Source Project Criticality Score](https://github.com/ossf/criticality_score) (in Beta). The goals are to generate a criticality score for every open source project, create a list of critical projects that the open source community depends on, and use this data to proactively improve the security posture of these critical projects. A project's criticality score defines the influence and importance of a project. It is a number between 0 (least-critical) and 1 (most-critical). The criticality score is calculated from 10 project usage metrics such as number of contributors, closed issues count and how recently the project was updated. Currently only github hosted projects are analyzed. The results are captured in a CSV such as [this one](https://www.googleapis.com/download/storage/v1/b/ossf-criticality-score/o/c_top_200.csv?generation=1608792512994781&alt=media).

In the list of 200 critical projects, some of the projects in which Linaro is active were Linux (ranked 1st), Zephyr (ranked 11th), u-boot (13th), QEMU (14th) and OP-TEE (39th).

## Community News

Linaro’s contributions to LTP are again in the [top 5 of contributors](https://lore.kernel.org/lkml/YAlzTaWcKTGurolF@yuki.lan/) thanks to the efforts of Viresh Kumar from KWG.

## LLVM Code-Size Optimization: Machine Outliner

**By Yvan Roux, ST assignee, Toolchain WG**

{% include image.html path="/assets/images/content/llvm-compiler-infrastructure-icon.png" class="small-inline left" alt="LLVM Compiler Infrastructure- con.png" %}
Our final Machine Outliner patches, enabling this optimization for 32-bit ARM targets, were integrated this month into LLVM mainline.

Machine Outlining is a code-size optimization initially developed for AArch64. It runs just before code emission and works by identifying repeated sequences of instructions, and replaces them with a call to a new function made of these instructions. In a nutshell, it can be seen as the reverse of a well known inlining optimization.

The typical code size reduction is around 5% for ARM and 4% for Thumb2 mode -- and that’s on top of the aggressive code-size optimizations enabled by -Oz compiler flag. In several cases the new optimization provided more than 25% code-size reduction -- on large C++ applications or when combined with link-time optimizations (LTO).

The optimization will be available in the upcoming LLVM 12 release, and it is enabled by default for M-profile cores at -Oz optimization level. It can also be turned on with -_moutline_ compiler flag.

## SVE/SVE2 support in LLVM Debugger (LLDB)

**By Omair Javaid, Senior Engineer, Toolchain WG**

The Scalable Vector Extension (SVE) adds extra SIMD capabilities and larger variable-length vector registers. SVE is different from standard vector architectures because its vector registers can change size at run-time and may have different sizes for each thread.

Linaro has successfully developed and upstreamed SVE/SVE2 support in LLDB debugger. Upcoming LLVM 12 release will host full-featured SVE support, including support for dynamically changing vector registers in both native and remote configurations.

In the coming weeks Linaro toolchain team will publish a blog post describing SVE features in LLDB and how to debug a demo SVE application using LLDB debugger.

To find out more about Linaro and the work we do, feel free to [contact us](https://www.linaro.org/contact/).
