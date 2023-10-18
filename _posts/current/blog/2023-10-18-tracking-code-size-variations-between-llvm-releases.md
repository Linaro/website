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
| Figure 1: Evolution of code size                                                                                                                     | Figure 2: Evolution of code size (X86_64)                                                                                                          |

<br> <br>