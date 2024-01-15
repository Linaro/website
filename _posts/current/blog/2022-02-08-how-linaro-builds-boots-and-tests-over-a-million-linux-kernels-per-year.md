---
layout: post
title: How and why Linaro builds, boots and tests over a million Linux kernels
  per year
description: >
  In 2021, Linaro addressed an increase in Linux kernel release candidates
  whilst also detecting and reporting more than double the amount of
  regressions, compared to the previous year. In this blog, Engineering Manager
  Benjamin Copeland talks about why we are building over a million kernels and
  why this matters for overall Linux Kernel Quality. 
date: 2022-02-08 02:14:57 +00:00
image: /assets/images/content/code_banner.jpg
tags:
  - Linux Kernel
  - Kernel Development
  - testing
  - CI
  - Tuxsuite
  - LKFT
category: blog
author: ben.copeland@linaro.org
---
## Introduction

In the past year, Linaro has addressed an increase in Linux kernel release candidates whilst also detecting and reporting more than double the amount of regressions, compared to the previous year. 

Linaro’s Linux Kernel Functional Testing ([LKFT](https://lkft.linaro.org/)) has dealt with these Release Candidates (RC’s) within a 48hour [SLA](https://en.wikipedia.org/wiki/Service-level_agreement) (Service Level Agreement). This is no small feat given we have been able to build, boot and test more than a million kernels. These numbers are even more impressive when you take into account that LKFT has achieved all this without extra staffing.

## What is LKFT (Linux Kernel Functional Testing)?

Our goal is to “Improve the Linux kernel quality on the Arm architecture by performing regression testing and reporting on selected Linux kernel branches and the Android Common Kernel (ACK) in real time.” 
To achieve this, LKFT provides a testing framework which builds, boots and tests the Linux kernel. This is the core of LKFT, and we have built it into a framework, which allows us and users to easily plugin into a testing framework, namely on the Arm architecture.

{% include image.html path="/assets/images/content/linux-kernel-functional-test-image.png" class="medium-inline left" alt="Linux Kernel Functional Test Image" %}

What does real time mean in this context? It means we are committed to the Linux community (through an SLA) to report regressions to kernel maintainers within 48 hours of changes being pushed to linux kernel branches. Our core mission is to report back regressions on Long-term support (LTS), but also stable, and upstream development branches (next/mainline) where we can. We have five full time engineers working across multiple time zones, 24/7, 365 days a year to make sure we reach our SLA target, and due to the effort of our team we have not missed an SLA. We do this across multiple hardware platforms, however we focus mainly on Arm. You can see [the list of boards tested on the LKFT website](https://lkft.linaro.org/boards/).

## Looking into the numbers…

2021 was by no means a quiet year! We worked on 524 [LTS](https://www.kernel.org/category/releases.html) Release candidates (RC’s). This was an increase of 33% over 2020, where we saw 393 RC’s released. This increase didn't just emerge from thin air. It is partly because LKFT has been reporting problems back to stable maintainer Greg Kroah-Hartman, which in turn helps Greg to iterate faster. Of that increase, we reported 94 regressions, which is a 113% increase from 44 regressions reported in 2020.

{% include image.html path="/assets/images/content/regressions-detected-by-lkft-in-2021.png" class="medium-inline right" alt="Regressions detected by LKFT in 2021" %}

“While Google is a great help to me in the LTS effort, providing huge amounts of resources to make my life easier with this (i.e. funding Linaro's testing efforts), their promise to their customers/users does not depend on me keeping LTS kernels alive, if I stopped tomorrow their contracts are still in place and they know how to do this work themselves (as is proof with 3.18).” [Greg K H](https://lore.kernel.org/lkml/YBBkplRxzzmPYKC+@kroah.com/)

The LKFT workload increased by 33%, while our regressions reported increased by 113%.

{% include image.html path="/assets/images/content/tests-executed-by-lkft-in-2021.png" class="medium-inline left" alt="Tests executed by LKFT in 2021" %}

We built 1,203,113 kernels configurations by the end of 2021. This is up 760% from 139k in 2020. Additionally, we almost doubled our test execution count to 144,355,862. This is a 91% increase from 75,622,248 in 2020.
These numbers are impressive, and we will go into more detail further down the blog post explaining the increase.

What is interesting here is we built slightly more LTS kernels (3187 in 2020 over 3558 in 2021) however from those 3558 Git pushes we ran 90% (68,733,614) more tests.

## Android Common Kernel (ACK)

In the Android space we cover all Android userspace and kernel versions of interest. In 2021, these stood as Android 8-mr1, Q, R, S, T and aosp/master for the userspace; and the kernels were various android branches for 4.4 / 4.9 / 4.14 / 4.19 / 5.4 / 5.10 / 5.15 and mainline. We run these kernel builds on Devices-Under-Test ([DUT’s](https://en.wikipedia.org/wiki/Device_under_test)); these include DB845c, Hikey, Hikey960 and X15.

We run a wide range of test suites including the main Android test suites, Compatibility Test Suite ([CTS](https://source.android.com/compatibility/cts)) and Vendor Test Suite ([VTS](https://source.android.com/compatibility/vts)). We also do testing beyond the scope of CTS/VTS including  benchmark tests like boottime, antutu, benchmarkpi, quadrantpro, vellamo3 in order to cover regressions as much as possible. 

We have a total of 69 kernel + userspace + DUT combinations (e.g. android12-5.4/Android12/HiKey960) that we test. We have added 19 (33% increase) additional combinations in 2021.

Also in 2021, we ran about 747 Million tests across these 4 DUTs, sending out > 400 test reports for ~600 kernels across 1200+ combinations.  Compared to 500M tests in 2020, this is approximately a 50% increase in test cases run.

## Why are we building over a million kernels?

In 2021 we added GCC-11 as well as Clang-12, 13 and Clang-nightly. We now build with GCC 8, 9, 10 and 11 plus Clang 10, 11, 12, 13 and clang-nightly. 

We have added 64K pages, KASAN, Debug, Kunit and armv8-features, compat, allmodconfig as additional kernel configs.

## Why does this matter?

The more toolchains and kernel configurations we can build, boot and test, the better chance we have at reporting regressions back to upstream communities. 

We run a series of [test suites ](https://lkft.linaro.org/tests/)(e.g. LTP, kselftest, perf, Libhugetlbfs, KVM unit tests, S Suite and kunit) to name a few. We run these test suites with our built kernels, under our [DUT’s](https://lkft.linaro.org/boards/) and then report back. This directly improves the quality of kernels before it hits in-field devices. 

## How has LKFT been able to build more Linux kernels?

LKFT uses [TuxSuite](https://tuxsuite.com/) as the engine for enabling expansive Linux kernel builds..

TuxSuite provides a cloud-based Linux kernel build and testing services. The mission of TuxSuite is to provide “on-demand APIs and tools for building Linux kernels in parallel and at scale.” Hence we are able to build an unlimited number of kernel configurations in a parallel manner. How have we been able to do this though?

In the past we built kernels on our Linaro [Jenkins](https://ci.linaro.org/) using bare metal servers, however as you can imagine this has limiting factors. It has proven difficult to build-in parallel (or provide enough builders on demand to meet our needs without paying for idle servers). So, in LKFT we migrated from Jenkins to GitLab pipelines (kernel source mirrors), this mixed with the parallel building of tuxsuite, is the reason we have been able to increase our kernels with additional configurations and toolchains by 760%.

We use Gitlab kernel source mirrors to trigger our pipelines, which coordinates the testing process between all of our services in LKFT. A quick overview of our system is that we use GitLab pipelines to trigger our LKFT framework (building/booting/testing/reporting). 

We do this using our own autoscaling infrastructure, much like how TuxSuite builds out its parallel system, ours uses GitLab autoscaling with self-hosted runners to trigger Tuxbuild jobs. So when we have a large push, between our own infrastructure and Tuxbuilds it gives us the ability to build an `unlimited` amount of kernels. This has been paramount to being able to achieve our increase.

## What else has improved?

We are always working with our test-suite communities, like LTP. We have recently started testing LTP development branches against the most recent stable kernel, and reporting back. 

We have also added automated build bisection, which allows us to identify which commit has caused the build regression. This is done inside the LKFT framework, alongside using git-bisect. This has proven very useful for the team, since this was a manual process. We have many more improvements we want to do in bisection, but that is a blog post in itself! However, this is a great start and has proven useful for our team.

## What are we focusing on in 2022?

{% include image.html path="/assets/images/content/lkft-roadmap-2022.png" alt="LKFT Roadmap for 2022" %}

We will continue working on our core mission (reporting regressions to Linux stable RC) but we strive to build, test and improve the Linux Testing on the Arm architecture as much as possible. A key aspect of our roadmap is to increase the throughput of our engineers through improvements in tooling (for example TuxSuite and GitLab pipelines). We also work closely with the LTP/kselftest communities to improve testing and reporting to the Linux kernel community.

## Testing and Emulation

Hardware is expensive to purchase and maintain. We are always looking at ways of increasing our testing capacity, but this is not always possible when you have limited hardware. Over the years, [QEMU](https://www.qemu.org/) has proven a very useful technology for LKFT. QEMU allows us to virtualise our hardware testing environment in a reliable way which means we can leverage QEMU to improve test coverage.

Currently we are running QEMU on baremetal from our LAVA LAB, but we are limited to how many QEMU targets we can run. This is due to the fact that physical machines running QEMU can only run so many instances in parallel. This is a similar problem we had at the start of the blog post with regards to the kernel building. 

Tuxsuite have an open source tool, [tuxrun](https://tuxrun.org/). This tool works similarly to [tuxmake](https://tuxmake.org/). By using 'tuxsuite test' this allows the user to scale to an `unlimited` amount of QEMU devices in the cloud. 

The roadmap for LKFT here is to integrate tuxrun into the LKFT framework. Both projects have alignment to do to get the full LKFT test-suite working and we are already working on that. Throughout the year we have wanted to improve our QEMU testing, like supporting [FVP](https://developer.arm.com/tools-and-software/simulation-models/fixed-virtual-platforms) (Fixed Virtual Platforms), running different QEMU versions, booting different architectures (not just X86/Arm). 

This will benefit us greatly, as it will allow us to increase our testing throughput and to test on multiple platforms. 

## Benchmark performance regression

Performance testing will allow us to identify performance regressions in the Linux kernel. These types of regressions are currently not identified, and we have set about making them identified, especially for Arm. 

Paolo Valente has worked closely with LKFT to get a benchmarking framework in place. Paolo has posted a couple of blog posts [here](https://www.linaro.org/blog/automatic-detection-and-reporting-of-performance-regressions/), and [here](https://www.linaro.org/blog/ensuring-optimal-performance-through-enhanced-kernel-testing/). He describes some of the areas and decisions that were made to use mmtests as a benchmark testing framework.

Paolo and his students have done fantastic work providing us with the building blocks of getting mmtests working on Arm and decoupling the framework into a workable test-suite. 

The work set out on our roadmap is to continue the work that Paolo and his students did and implement it into our LKFT framework. We have many moving components to get this working. Namely we need to build a rootfs, add more benchmark tests, integrate into a pipeline and test how it runs on hardware. This will allow us to produce a baseline and which then will allow us to report benchmarking regressions. Of course in this there will be many issues, especially finding the hardware but we will endeavour to make this a goal of 2022.

## Closing notes

This is by no means a complete list of 2022 work (more can be seen in our roadmap), but these are some of the focus areas we will be working on in 2022. Of course the team will be focusing on the core mission of real-time reporting of Release Candidates. We will, as always, work closely with the upstream linux kernel and test suite communities and keep on reporting those pesky regressions.

I would like to thank everyone in LKFT for the hard work and dedication that has gone into allowing us to achieve these numbers and achieve more each year.

For more information on the work we do on Linux Kernel Functional Testing, check out our [Linux Kernel Quality Project Page](https://linaro.atlassian.net/wiki/spaces/LKQ/overview).