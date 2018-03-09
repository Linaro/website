---
author: alan.bennett
categories:
- blog
date: 2011-11-07 20:52:50
description: Discussion on Linaro's LAVA efforts including Android testing, visualization
  and reporting as well as links to project updates and source code.
keywords: Linaro, linux, linux on ARM, ARM SOCs, opensource software, LAVA, Validation,
  Android
layout: post
slug: automated-validation-with-lava
tags:
- Community
- Hardware
- LAVA
title: Automated Validation with LAVA
wordpress_id: 842
---

LAVA is at the heart of the value Linaro brings:  its aims are improving automated testing of the open source components that are used in the major Linux-based software platforms, and increasing confidence in the quality of enablement for our members' platforms.

LAVA has evolved as Linaro's development and release process has changed. For instance, over the past 6 months, the Linaro Platform team has transitioned to monthly releases of all Ubuntu and Android-based Linaro evaluation builds. Test builds of these images happen daily, sometimes with multiple builds a day. With the increased release frequency, automated validation is crucial, and LAVA is therefore a central component in this change. As a consequence, LAVA itself is improved and released at an increased rate to handle the continuous demands of rapid platform development.

**The Validation Lab**

{% include image.html name="Linaro-Validation-Lab.jpg" alt="Linaro Validation Lab" class="small-inline" %}

Over the past few months, the Linaro validation lab has been expanded to cover testing on MX53, Snowball, Pandaboard, and Beagle XM. Support for Origen boards is in progress and boards have now arrived in volume in the lab. Capacity has increased considerably through the addition of dozens of boards and additional infrastructure to handle this increased capacity; for instance, LAVA added a scheduler component to facilitate management of jobs across all these different boards and board types. Since the scheduler came online, which was just a few months ago, about 3000 jobs have been executed. Jobs can be monitored from the web interface while they are running, with live output streaming.

**Continuous Integration Testing**

Working with other teams in Linaro, LAVA is now a cornerstone in our continuous integration testing for both Android images and various Linaro and upstream kernel trees. When new Android images or kernel trees are built successfully, a job is automatically submitted to the LAVA scheduler to perform testing on the new image or kernel, and results are stored in the LAVA Dashboard. Raw results are reflected back to the Android build page showing the pass/fail matrix with links to details. LAVA also now contains a view that shows all the kernel trees tested with results for not only the tests run by lava, but for the build process itself. This view can be dynamically filtered based on kernel tree, configuration, or board type. Toolchain tests are now being executed in the validation lab too, with the next steps being complete integration of this testing into Lava.

**Android Testing Improvements**

To improve testing on Android, LAVA has also added the LAVA Android Test Framework. There are many test suites available for Android already, and many more in development. Like testing on other platforms, these test suites run in different ways, require different parameters, and produce results in different ways. The lavaandroid-test component doesn’t try to replace or change these existing test suites; instead, it facilitates their use by acting as a uniform front-end for running them and parsing their results into a format easily consumed by LAVA.

**Visualization and Reporting**

Automated testing produces volumes of test data and results. One of the most challenging aspects of automated testing is distilling all that data down to form that can be easily consumed by developers. LAVA has added various tweaks to the UI to make it easier to understand and find the test results you are looking for;  test results, result bundles (sets of results from a job), jobs in the scheduler, and even the list of test systems themselves can be sorted and filtered right from the web UI. Reports and graphs have been added for things like boot speed, image status, and kernel continuous integration testing results. However, we are still missing a coherent interface that provides at-a-glance information for the most important use cases, and drilling down to the detail is still not intuitive.

**Bringing it All Together**

Usability, scalability and stability of LAVA will be the focus areas in the coming months, as LAVA evolves to become an essential tool in delivering high quality images and components. More boards, and more types of boards will be supported, while also adding testing for more images, kernels, and other components.

Additionally, bringing together results in a more readily consumable form, with focus on specific areas of interest will also be looked at. Ultimately, the goal of automated testing is to help developers quickly find out when things are broken, or see when changes they make affect performance. Armed with this information, developers can focus on the task of making Linaro better from one monthly release to the next. For the LAVA source code and the site itself, follow the links below:

* LAVA Project Page on Launchpad - http://launchpad.net/lava

* LAVA Server - http://validation.linaro.org/lava-server