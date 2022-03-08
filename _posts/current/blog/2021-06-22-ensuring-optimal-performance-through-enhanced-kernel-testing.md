---
layout: post
title: Ensuring optimal performance through enhanced kernel testing
description: In this blog, Linaro Interns Mirco Romagnoli and Federico Gelmetti
  talk about the functionality they have enabled to support performance testing.
date: 2021-06-22 02:15:39
image: /assets/images/content/code.jpg
tags:
  - LKFT
  - Linaro's Kernel Functional Test Framework
  - Linux Kernel
  - LAVA
  - Linaro Automation and Validation Architecture
  - MMTests
related_projects:
  - LKQ
category: blog
author: linaro
---
## Introduction

As part of Linaro’s mission to improve the Arm architecture ecosystem, Linaro created LKFT - Linaro’s Kernel Functional Test framework. The mission of Linaro’s Kernel Functional Test Framework is to improve the quality of the Linux kernel by performing functional testing on Arm hardware. 

While functional testing plays a critical role in ensuring the quality of the kernel, it does not cover another aspect of paramount importance: performance. Linaro therefore decided to extend LKFT to also perform performance analysis, and, in particular automatic detection and reporting of performance regressions. We started this effort a few years ago and today we have contributed to the mmtests benchmark suite. This allows us to run mmtests benchmarks in LAVA (Linaro Automation and Validation Architecture), publish the result to squad (Software Quality Dashboard) and then do post processing to find out if we have regressed between the different kernel versions.

In this blog, Linaro Interns Mirco Romagnoli and Federico Gelmetti talk about the functionality they have enabled to support performance testing. 

## Adding MMTests support to LAVA

by Mirco Romagnoli 

Thanks to a recent series of patches, LAVA now supports the execution of tests from the MMTests benchmark suite.

MMTests is a well-proven configurable test suite that runs performance tests against arbitrary workloads and allows you to compare the results of these tests to detect regressions or improvements of different kernel revisions. Up until now, the comparison script required the raw data of the different runs to be on the filesystem, no other loading method was supported. Every time the test boards were used by LAVA, the memory would be wiped, resulting in the raw data used for comparisons being lost at each execution. 

With this patch however, it is now possible to save results and retrieve them to make comparisons. The results of these tests can be exported to JSON, this file can then be used to make the comparisons without the need to have the raw metrics on the filesystem. This allows us to run a MMTests' test, export the results to JSON and then save the results as metrics on LAVA. By giving a specific name to each metric the JSON file can eventually be rebuilt and used with the compare script.

To find out more, click on the links below to see what has been done: 

**MMTests patchset**
This is the patchset that enables the JSON export and load of the test results.

<https://github.com/gormanm/mmtests/commit/a4e7a9e19eadb8e75f2be3321ba8cef119becd33>

<https://github.com/gormanm/mmtests/commit/27d5d2f1dde49f8d2a782893d6e06ac9f1897340>

<https://github.com/gormanm/mmtests/commit/c964294e9b11a934a59c5ed4df4768a0d79a94a9>

<https://github.com/gormanm/mmtests/commit/95a39b0750c16da8aadff617ca46011828b96513>

[](https://github.com/gormanm/mmtests/commit/95a39b0750c16da8aadff617ca46011828b96513)**Test definition for LAVA**
Here you can see the workflow for LAVA and the python script that formats the metrics that will be sent to LAVA.

<https://github.com/Linaro/test-definitions/commit/de4c57c2b8d3d877001b898a601b7753d23d2cfc>

[](https://github.com/Linaro/test-definitions/commit/de4c57c2b8d3d877001b898a601b7753d23d2cfc)Successful run of a test
This is an example of a successful run of the sysbenchcpu test that shows how the metrics are defined: 

<https://lkft.validation.linaro.org/scheduler/job/2627776>

## [](https://lkft.validation.linaro.org/scheduler/job/2627776)Adding a new testcase to lkp-tests

by Federico Gelmetti

[lkp-tests](https://01.org/lkp) \[1] is a framework aimed at testing various parts of a kernel, to track its performance and robustness.
It runs a large set of benchmarks which cover core components of the Linux kernel: virtual memory management, I/O subsystem, process scheduler, file system, network, device drivers, and more. The interest towards lkp-tests was born with the intent of adding the test cases already configured in the suite into Linaro’s [test-definitions](https://github.com/Linaro/test-definitions) \[2] suite.

After a bit of digging, we came to the conclusion that the best route would be to call lkp-tests from test-definitions directly, to avoid exporting all the individual test cases from lkp-tests to test-definitions.
The first step in this plan is to better understand how lkp-tests works, to see if it can be integrated into test-definitions. The patch I created does exactly that.

The commit message describes in detail all the steps and components required to add a new test case from the ground up in lkp-tests, in order to provide useful basic information for the subsequent phases of the integration.
The patch is by no means a full implementation of a new test for lkp-tests, but rather a writeup with a practical example of how the framework works and what it needs to operate correctly, that can be referred to later in the development to speed up the integration project.

**Resources:**

\[1] <https://01.org/lkp>

\[2] <https://github.com/Linaro/test-definitions>

## Conclusion

The contributions highlighted in this post are the first steps towards making a complete framework for automatic performance analysis. Linaro is already working on next practical steps: adding a general template for automatic email reports on performance and regressions, adding the mmtests suite in LKFT's rootfilesystem, and running multiple benchmarks from mmtests. The next important step will be to add these benchmarks into LKFT's daily runs, and report back to the community.

For more information on Linaro and the work we do, reach out to us through our [contact page](https://www.linaro.org/contact/).