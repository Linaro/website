---
layout: post
title: Linaro Engineering Highlights for August 2020
description: This blog covers the many developments the teams at Linaro have
  been working on during August including the initial TVM AI compiler
  performance numbers on ARM64, using energy model to stay in TDP budget,
  thermal notifications with Netlink, how the ARM32 Linux kernel decompresses
  and the history of the Linux kernel and Linaro at one million commits.
date: 2020-09-14T04:19:30.000Z
image: /assets/images/content/10-year-graphic-horizonal1.png
tags:
  - XYZ
category: Blog
author: jon.burcham@linaro.org
---
# Initial TVM AI Compiler Performance Numbers on ARM64

**By Tom Gall, Engineering Director, AI/ML**

{% include image.html path="/assets/images/content/ai.png" class="small-inline left" alt="Artificial Intelligence (AI) icon" %} Within the Linaro AI Project, the TVM AI compiler is one of our main areas of focus. This compiler is able to produce optimized binaries for a variety of targets that include the universe of ARM processors Cortex-A (64bit& 32bit) to Cortex-M as well as a variety of offload engines. Besides targets, one of TVM’s most important features is the ability to consume models from numerous strategic frameworks such as Tensorflow, Tensorflow Lite, ONNX, PyTorch, and MXNet, to name a few.

An early question to answer in the lifetime of Linaro involvement with the project is what is current performance like?  What are expectations for improvements going forward?

In the case of TVM, the framework with its layered architecture gives the Arm ecosystem the benefits of an AI compiler which performs its own optimization steps that are separate from those which are dependent on processor architecture. Gains can be achieved in both layers.

How do we measure and compare TVM across the various AI frameworks? A reasonable way is to utilize reference models that are available for download such as those from the Tensorflow project [tensorflow.org/lite/guide/hosted_models](https://www.tensorflow.org/lite/guide/hosted_models) and then compare the performance of those models within the original project as well as with TVM. 

In this article we’ll compare image classification models which is one type of inference to perform. There are certainly other types such as Natural Language Processing models that will be added to the comparison in time.

{% include image.html path="/assets/images/content/relative-inference-performance-on-arm64.png" alt="relative inference performance on ARM64 chart" %}

What is shown is relative performance where the time to performance inference using a set of reference images is used. Multiple runs were used to obtain an average result and standard deviation. A shorter bar is better, while a longer bar is worse. A bar which is double the length means that the time to perform inference on a reference image took twice as long. All operations were performed on the CPU. It’s important to remember that not all SoCs have GPUs or other offload hardware available to them. 

All measurements in this article were using quantized models. 

While this gives you an early peak as far as performance trends, there are two very important data points to keep in mind. 

One of the major features of TVM is AutoTVM, which is a compiler which, through successive runs, utilizes feedback to further tune a model to improve performance. AutoTVM was not  used in this analysis. We’ll explore what AutoTVM can do in future articles.

On the TFLite side, the framework does not automatically take advantage of multiple cores. Using a multi-core setting is left as an exercise to the user. 

As a result, both frameworks have further performance improvements they can realize from their existing code bases. 

There is work ahead. This past month, the Arm Compute Library is starting to land within TVM, which will give TVM access to highly optimized subroutines for the Arm architecture. We’ll explore these and other Arm targeted improvements within TVM in future articles.

The goal of the Linaro AI project is to enable superior inference performance within the Arm ecosystem. Coupled with the Linaro lab, with the now assembled range of Member devices, we have the capability to monitor performance as AI development occurs.  We look forward to sharing future news in this area.

## Using Energy Model To Stay In TDP Budge

**By Daniel Lezcano, Senior Engineer, Kernel Working Group**

**\*Introduction**

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %} An ever-increasing number of embedded devices need fine grain control on their performance in order to limit the power consumption. There are three primary reasons for this: to increase the battery life, to protect the components and to control the temperature.

Due to the increasing complexity of SoCs, we’re now seeing lots of thermal sensors on the die to quickly detect hot spots and allow the OS to take steps to mitigate these events - either through better scheduling, frequency throttling, idle injection or other similar techniques.

The performance states of a device usually follow a quadratic curve in terms of SoC power consumption which explains why it can have a very significant impact on the system.

The power management is done from the kernel side with different frameworks: the cpufreq automatically adapts to the performance state via the operating points, depending on the system load, the thermal framework which monitors the components temperature and caps their performances in case of a hotspot detection. There are more techniques but, for the sake of simplicity, we won’t mention them in this blog. 

Continue with this article [here](https://www.linaro.org/blog/using-energy-model-to-stay-in-tdp-budget/).

## Thermal Notifications With Netlink

**By Daniel Lezcano, Senior Engineer, Kernel Working Group**


1m Commits
(By Steven J. Vaughan-Nichols for Linux and Open Source) 
