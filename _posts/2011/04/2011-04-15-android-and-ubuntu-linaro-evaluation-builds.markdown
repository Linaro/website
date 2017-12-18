---
author: steve.taylor
categories:
- blog
date: 2011-04-15 18:21:03
description: Overview of the Android and Ubuntu Linaro evaluation builds and the progress
  made so far and what is planned for the future.
keywords: Linaro, evaluation builds, Android, Ubuntu, LEBS
layout: post
link: /blog/android-and-ubuntu-linaro-evaluation-builds/
slug: android-and-ubuntu-linaro-evaluation-builds
tags:
- Evaluation builds
- Landing teams
- LEBs
- OSS
- test heads
- validation
- working groups
title: Android and Ubuntu Linaro Evaluation Builds
wordpress_id: 3381
---

Linaro will be one year old when Computex comes around again at the end of May. When we launched we stated we would help device makers get products based on open source software (OSS) to market more quickly and with improved levels of performance. One of Linaro’s main activities this year has been the expansion of the platforms group to deliver fully enabled and validated “Linaro Evaluation Builds” (LEBs) that can be consumed by ODMs and OEMs as a baseline for building products using the latest ARM SoCs.

In 2010, the initial focus for Linaro was on identifying initial upstream topics and bootstrapping the Working Group teams: toolchain, kernel, power management, graphics and multimedia. From the beginning Linaro concentrated on making sure that Linaro provided a platform and engineering infrastructure that would support and strengthen the open and distributed engineering model used by Linaro.

One initial platform focus was on creating a fully-functional development platform to support Working Groups and Landing Teams on their daily tasks. One part of this was to provide full software stacks as integration targets that mimic the setup found in production environments. In that way teams could run a continuous integration against a close to production software stack and stay on track on topics that really matter in production deployments. This concept was initially called “test head” and was mainly directed to serve internal Working Group and Landing Team needs.

After the start of 2011, Linaro began looking for new ways to achieve a faster time to market for the OEM/ODM partners. This resulted in the creation of the Linaro Evaluation Builds (LEBs). On top to the elements of Test Heads, the new LEBs aimed to be directed towards external consumption. The main added value here is that a LEB maintains a higher guarantee of quality that would give OEM/ODMs a head start over what they would usually get from a BSP delivery. One reason why Linaro Evaluation Builds are superior to “old fashion” BSPs is that they are available for multiple member SoCs and are available in a standardized and easy to consume form, with all bits being readily available in the open. They are characterized by 2 key attributes:

1. They are clones of relevant target distributions combined with the best ARM improvements and hardware enablement available on the open market
2. High emphasis on testing and benchmarks to meet quality expected by external consumers like product builders and OEMs

Within the Linaro organization, the need for more advanced validation led to the creation of Linaro’s platform validation engineering unit. The Platform Validation team’s job is to consider what is needed to ensure that the validated software stacks are at a level that can be used in a professional ODM/OEM environment. There is of course a need to keep the testing effort scalable however, there are parts of testing and validation, especially those that are highly dependent on human senses (like audio and graphics and video on screen) that are hard to replicate in a completely automated fashion. To address this Linaro's Testing and Validation will continue to optimize the manual testing of areas not covered in our automated setup. Additionally, the team is working with the Linaro partners to provide full professional support across the whole software stack released as Linaro Evaluation Builds (LEBs).

The LEBs are released alongside the distribution releases with the initial evaluation builds being released for Ubuntu 11.04 and Android Gingerbread. Linaro’s aim is to do more thorough validation on even more boards, with a wider set of tests and parameters. To make this new evaluation build approach successful, Linaro’s Validation and Android efforts will continue to grow, look for more details about these in upcoming posts.