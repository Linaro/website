---
layout: post
title: Tracking code size variations between LLVM releases
description: In this blog post, we talk about tracking the size of LLVM
  generated code and look at the results on the latest releases.
date: 2023-10-18 12:13:54 +02:00
image: /assets/images/content/Code_Upstream_72.jpg
tags:
  - LLVM
  - Toolchain
  - Code Size
category: blog
author: linaro
---
## INTRODUCTION

Code size is critical for a wide range of software.

First, memory components can be a significant part of the overall cost of embedded devices. Reducing needed embedded memory, or being able to fit more features into it, can be very valuable on such systems.

Also, smaller code size can be beneficial on larger non-embedded systems. And it can sometimes lead to performance improvements [[1](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.joolgy5r17da)], possibly due to a resulting increase in instruction cache efficiency.

In addition, increased memory usage often leads to negative effects. As an example, mobile applications are likely less downloaded if too big, because of limited storage space, application stores rules or carrier data limits. Companies like Meta, Uber and ByteDance have observed this correlation between mobile application size and user engagement, and are working on compiler optimizations to keep that size down [[2](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.7asemjrds1pb)] [[3](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.5pii12p80gdb)] [[4](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.h2fnjtbdz5zw)].

While this code size metric is important, it also has many reasons to grow, like the integration of new features or performance optimizations. Let's note that the code size (machine instructions) is only one part of an application's size, which can also include data (included in binary size) and other resources such as images. It has been shown that the code can be the largest part of the total size [[2](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.7asemjrds1pb)].

Linaro Toolchain Working Group (TCWG) started working on several activities related to this topic, first aiming at helping to reduce code size of the Android Open Source Project (AOSP) [[5](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.fipg69g4k8pz)] on behalf of Google.

This blog post will be about one of these activities: the automated tracking of code size. We'll compare between the latest LLVM releases [[6](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.iytzetzdrla7)], and take a quick look at the largest variations.<br><br>

## **CODE SIZE TRACKING USING LNT**

Measuring code size on a regular basis has several benefits. It allows detection of significant regressions and improvements. It can also provide interesting feedback on specific developments, and when looking at a higher level, interesting information such as variations between releases.

For now, we have only looked at the code size generated using the -Oz optimization level. Since this level aims to find the best code size at all costs, performances do not really matter here and are not measured for now. This makes the task much easier and faster, as running the compiled binaries is not needed. Code size could also be tracked for other optimization levels in the future, after enablement of performance measurement. These other levels aim at finding tradeoffs between size and performance (-Os, -O2) or at achieving the best possible performances (-O3). 

Code size is measured on SPEC (Standard Performance Evaluation Corporation) benchmarks (SPEC CPU 2006 & SPEC CPU 2017 [[7](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.9hm05gt8ow2w)] for the AArch64 target, and results are submitted to an internal LNT dashboard [[8](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.y9ques5gqdta)]. This is automated in a Jenkins job that runs daily [[9](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.3xuv9uqiebil)]. This work is still ongoing. It may be productized and shared more widely in the future.

LNT (LLVM Nightly Test) is an infrastructure for performance testing. It consists of two main parts: "a web application for accessing and visualising performance data, and command line utilities to allow users to generate and submit test results to the server".

Note that an official LLVM LNT dashboard has been available for a long time, and already provides code size figures for other benchmarks and targets [[10](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.25e64264n7q8)].

There are also several TCWG Jenkins jobs that measure code size on different benchmarks, targets and optimization levels, aiming at detecting significant regressions and improvements, identifying exact responsible commits and notifying developers [[11](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.6akgup371zc2)].<br><br>

## EVOLUTION OF THE CODE SIZE ON SPEC BENCHMARK (AT -Oz OPTIMIZATION LEVEL)

| {% include image.html path="/assets/images/content/figure-1-evolution-of-code-size-aarch64-.png" alt="Figure 1: Evolution of code size (AArch64)" %} | {% include image.html path="/assets/images/content/figure-2-evolution-of-code-size-x86_64-.png" alt="Figure 2: Evolution of code size (X86_64)" %} |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p style="text-align: center;">Figure 1: Evolution of code size (AArch64)</p>                                                                        | <p style="text-align: center;">Figure 2: Evolution of code size (X86_64)</p>                                                                       |

Code size was measured on SPEC with the 8 last LLVM major releases (from 10.0 to 17.0) \[Figure 1] \[Figure 2]. The 100 most important variations on average on SPEC (from llvmorg-13-init to current main branch, only looking at AArch64 target) were then bisected to identify exact commits \[Figure 4]. This is approximately 1200 runs for now (on a 160-cpu AArch64 machine, that's about 5 days of elapsed time, or 200 days of user time). It continues to grow as new measurements are added daily.

Several observations can be made by looking at code size evolution (AArch64 / -Oz) through the last LLVM releases (Figure 1 & Figure 3):

* On average, code size is smaller from release to release since LLVM 10.0. It seems this is not the case on x86_64, maybe because size is less important there (size variations on target x86_64 were not specifically analysed).
* This decrease is constant (since LLVM 12.0), but slight. Only 1% decrease on average on SPEC benchmarks since LLVM 12.0. Less if we compare with LLVM 10.0.

Note that the apparent increase between LLVM 14.0 and LLVM 15.0 is misleading. It actually corresponds to the enablement by default on linux of Position Independent Executable (PIE) generation by clang (Figure 4 V7). A decrease between LLVM 13.0 and LLVM 14.0 also corresponds to a change of default (about FP contraction, Figure 4 V5). Using -fPIE/-pie and -ffp-contract=on for fairer comparison change the variations as shown in Figure 3. Results obtained on X86_64 (Figure 2) would surely also be different doing this. 

* It's mainly something about small variations. Only a few commits stand out for both increase and decrease. Less than 10 commits lead to a code size variation (increase or decrease) of more than 0.1% on average on Smber PEC benchmarks. The biggest variations are listed in the next section.

While the variations caused by these 15 commits look small (from 0.06% to 0.6%), they all contain larger variations on individual benchmarks (ranging from 0.8% to 5.2%). Also, when looking at individual benchmarks, about 40 commits result in a variation of more than 1.0% (not ignoring reverts and relands).

| {% include image.html path="/assets/images/content/figure-3-evolution-of-code-size-fixed-aarch64-.png" alt="Figure 3: Evolution of code size - fixed (AArch64)" %} |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <p style="text-align: center;">Figure 3: Evolution of code size - fixed (AArch64)</p>                                                                              |



## COMMITS IMPACTING -Oz CODE SIZE



![](/assets/images/content/figure-4-commits-impacting-code-size-aarch64-.png)

|     |
| --- |
|     |
|     |