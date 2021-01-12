---
layout: post
title: Linaro Engineering Highlights for August 2020
description: This blog covers the many developments the teams at Linaro have been
  working on during August including the initial TVM AI compiler performance numbers
  on ARM64, using energy model to stay in TDP budget, thermal notifications with Netlink,
  how the ARM32 Linux kernel decompresses and the history of the Linux kernel and
  Linaro at one million commits.
date: 2020-09-14 04:19:30+00:00
image: /assets/images/content/10-year-graphic-horizonal1.png
tags:
- Linaro
- Arm
- AI
- Arm64
- Linux
- Kernel
- Arm Ecosystem
- LKFT
category: blog
author: jon.burcham@linaro.org
---

# Initial TVM AI Compiler Performance Numbers on ARM64

**By Tom Gall, Engineering Director, AI/ML**

{% include image.html path="/assets/images/content/ai.png" class="small-inline left" alt="Artificial Intelligence (AI) icon" %}

Within the Linaro AI Project, the TVM AI compiler is one of our main areas of focus. This compiler is able to produce optimized binaries for a variety of targets that include the universe of ARM processors Cortex-A (64bit& 32bit) to Cortex-M as well as a variety of offload engines. Besides targets, one of TVM’s most important features is the ability to consume models from numerous strategic frameworks such as Tensorflow, Tensorflow Lite, ONNX, PyTorch, and MXNet, to name a few.

An early question to answer in the lifetime of Linaro involvement with the project is what is current performance like? What are expectations for improvements going forward?

In the case of TVM, the framework with its layered architecture gives the Arm ecosystem the benefits of an AI compiler which performs its own optimization steps that are separate from those which are dependent on processor architecture. Gains can be achieved in both layers.

How do we measure and compare TVM across the various AI frameworks? A reasonable way is to utilize reference models that are available for download such as those from the Tensorflow project [tensorflow.org/lite/guide/hosted_models](https://www.tensorflow.org/lite/guide/hosted_models) and then compare the performance of those models within the original project as well as with TVM.

In this article we’ll compare image classification models which is one type of inference to perform. There are certainly other types such as Natural Language Processing models that will be added to the comparison in time.

{% include image.html path="/assets/images/content/relative-inference-performance-on-arm64.png" alt="relative inference performance on ARM64 chart" %}

What is shown is relative performance where the time to performance inference using a set of reference images is used. Multiple runs were used to obtain an average result and standard deviation. A shorter bar is better, while a longer bar is worse. A bar which is double the length means that the time to perform inference on a reference image took twice as long. All operations were performed on the CPU. It’s important to remember that not all SoCs have GPUs or other offload hardware available to them.

All measurements in this article were using quantized models.

While this gives you an early peak as far as performance trends, there are two very important data points to keep in mind.

One of the major features of TVM is AutoTVM, which is a compiler which, through successive runs, utilizes feedback to further tune a model to improve performance. AutoTVM was not used in this analysis. We’ll explore what AutoTVM can do in future articles.

On the TFLite side, the framework does not automatically take advantage of multiple cores. Using a multi-core setting is left as an exercise to the user.

As a result, both frameworks have further performance improvements they can realize from their existing code bases.

There is work ahead. This past month, the Arm Compute Library is starting to land within TVM, which will give TVM access to highly optimized subroutines for the Arm architecture. We’ll explore these and other Arm targeted improvements within TVM in future articles.

The goal of the Linaro AI project is to enable superior inference performance within the Arm ecosystem. Coupled with the Linaro lab, with the now assembled range of Member devices, we have the capability to monitor performance as AI development occurs. We look forward to sharing future news in this area.

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

**Introduction**

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}The goal of the thermal framework is to monitor the temperature of some system components and take immediate action if they are too hot. But how can the userspace know the events occurring in the kernel or what the actions are? Recently introduced with expectations to evolve over time, netlink notification is the answer. This blog introduces the thermal framework design and shows where the notification takes place to allow the userspace to be aware of the overall thermal profile of the system.

**The thermal framework - a nice design**

- The thermal zone is the abstraction where the hardware sensor implementation provides the backend driver to return the temperature via unified callbacks.
- The cooling device is the abstraction of the device in charge of reducing the temperature. It could be a passive cooling device by reducing the performance of the monitored device like changing the operating point of a CPU, or an active cooling device like a fan. The former does not need extra energy to cool down, while the latter does.
- The thermal governor is the logic which acts on the cooling device to mitigate the temperature.

The way a thermal zone is monitored will depend on the sensor capabilities:

- Some sensors can only give the temperature when requested, in this case the thermal zone temperature will be monitored by a periodic timer. That means the idle system will wake up to check the temperature even if there is nothing to do.
- Some more modern sensors can be programmed to send an interrupt when a specific threshold is reached. In this case, the system can stay fully idle, no wake up is necessary. Please note that the polling mode also introduces a latency in the temperature threshold detection; statistically speaking it is the half of the timer period. For instance, for a one second polling time, the average latency for detection will be 500ms, a duration that is far too large for modern boards which can experience thermal variance at a rate of up to 0.5°C / ms. In this case, the interrupt mode is the guarantee of a synchronous action via the interrupt handling when a temperature threshold is reached.

Continue with this article [here](https://www.linaro.org/blog/thermal-notifications-with-netlink/).

## How the ARM32 Linux kernel decompresses

**By Linux Walleij, Senior Engineer, Arm Assignee**

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}

ARM traditionally uses compressed kernels. This is done for two major reasons:

- It saves space on the flash memory or other storage media holding the kernel, and memory is money. For example for the Gemini platform that I work on, the vmlinux uncompressed kernel is 11.8 MB while the compressed zImage is a mere 4.8 MB, we save more than 50%.
- It is faster to load because the time it takes for the decompression to run is shorter than the time that it takes to transfer an uncompressed image from the storage media, such as flash. For NAND flash controllers this can easily be the case.

  This is intended as a comprehensive rundown of how the Linux kernel self-decompresses on ARM 32-bit legacy systems. All machines under arch/arm/\* uses this method if they are booted using a compressed kernel, and most of them are using compressed kernels.

Continue with this article [here](https://people.kernel.org/linusw/how-the-arm32-linux-kernel-decompresses).

## The history of the Linux kernel and Linaro at One million commits

**By Mike Holmes, Engineering Director, Foundational Technologies**

### One MIllion Commits

{% include image.html path="/assets/images/content/linux-kernel-security.png" class="small-inline left" alt="Linux Kernel Penguin icon" %} This summer Linaro celebrated [10 years](https://www.linaro.org/blog/linaro-a-decade-of-development/) of collaboration in the Arm ecosystem with a blog post by David Rusling. Now at the end of the summer of 2020, the Linux kernel, which has been a large part of that collaboration, has also celebrated its 1 Millionth commit after 29 years of effort with a write up in [ZDNet](https://www.zdnet.com/google-amp/article/commit-1-million-the-history-of-the-linux-kernel/). \[1]

That means that Linaro has been contributing to the Linux kernel for about a third of the kernel’s existence and in that time it has had a tremendous impact, driven initially by efforts to address fragmentation, and later to add or enhance capabilities that expose Arm SoC strengths, a task which continues to this day.

In the most recent 5.8 kernel, we find that over half the code was written in the last seven years \[2], and that ranking contributions between 2007 and 2019 which includes the three years before Linaro’s inception, we still find that Linaro is ranked as the 5th largest organisation contributor! \[2]

**In perspective, over half of the kernel is written by organisations or consultants in the last seven years and Linaro is right in the thick of it.**

#### It's not just the commits any longer

The release model has evolved with much greater emphasis on automated tooling since 2010. Looking at the history of automated testing of the kernel, we see that the first recorded entrant into the game was Coocicheck in 2010 when Linaro started, followed by 0-day in 2012 and many more entrants since then. This year's Linux Foundation Kernel history report lists one of the latest entrants to the automated test regime, Linaros Linux Kernel Functional Testing (LKFT) which is a much more recent testing effort from Linaro along with KernelCI, Buildbot etc.

With the considerable effort being put in to the LKFT and its supporting Tux suite of build and regression tools, it is quite possible that Linaro will rank in the top 5 contributors to Kernel testing as well as the top five contributors to the kernel itself, currently the top six contributing tools \[1] in order of bugs reported as tracked by the tag “Reported-by” are:

1. Hulk Robot
2. Syzbot
3. 0-day
4. Coccicheck
5. Kernel CI
6. Coverity

Ref: \[1] Author: Steven J. Vaughan-Nichols for Linux and Open Source.

\[2] [2020_kernel_history_report_082720.pdf](https://www.linuxfoundation.org/wp-content/uploads/2020_kernel_history_report_082720.pdf)
