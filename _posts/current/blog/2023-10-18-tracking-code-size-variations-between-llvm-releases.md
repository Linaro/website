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
# INTRODUCTION

Code size is critical for a wide range of software.

First, memory components can be a significant part of the overall cost of embedded devices. Reducing needed embedded memory, or being able to fit more features into it, can be very valuable on such systems.

Also, smaller code size can be beneficial on larger non-embedded systems. And it can sometimes lead to performance improvements [[1](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.joolgy5r17da)], possibly due to a resulting increase in instruction cache efficiency.

In addition, increased memory usage often leads to negative effects. As an example, mobile applications are likely less downloaded if too big, because of limited storage space, application stores rules or carrier data limits. Companies like Meta, Uber and ByteDance have observed this correlation between mobile application size and user engagement, and are working on compiler optimizations to keep that size down [[2](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.7asemjrds1pb)] [[3](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.5pii12p80gdb)] [[4](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.h2fnjtbdz5zw)].

While this code size metric is important, it also has many reasons to grow, like the integration of new features or performance optimizations. Let's note that the code size (machine instructions) is only one part of an application's size, which can also include data (included in binary size) and other resources such as images. It has been shown that the code can be the largest part of the total size [[2](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.7asemjrds1pb)].

Linaro Toolchain Working Group (TCWG) started working on several activities related to this topic, first aiming at helping to reduce code size of the Android Open Source Project (AOSP) [[5](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.fipg69g4k8pz)] on behalf of Google.

This blog post will be about one of these activities: the automated tracking of code size. We'll compare between the latest LLVM releases [[6](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.iytzetzdrla7)], and take a quick look at the largest variations.