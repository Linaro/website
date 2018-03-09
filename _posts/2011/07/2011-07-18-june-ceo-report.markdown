---
author: george.grey
date: 2011-07-18 23:56:08+00:00
layout: post
link: /blog/june-ceo-report/
slug: june-ceo-report
title: June CEO Report
wordpress_id: 3394
categories:
- blog
---
Linaro exists because our members understood that working together on common non-differentiating problems was far more cost effective than each working to solve those problems again and again.

This month I describe how the"engine" of Linaro, our Working Groups and Landing Teams, deliver results, and how those results end up in customer products. Next month I want to cover some additional ways that Linaro is generating value specifically for members, including through the Linaro Evaluation Builds (LEBs) for key distributions, and the LAVA test & validation suite.

Linaro's Working Groups team consists of 50 full time engineers (this does not include Linaro's Platform team working on Android, Ubuntu and Linux kernel packaging, the test & validation team, the office of the CTO or the member landing teams). The Working Groups’ mission is to focus on core Linux consolidation and optimization for all of our members. The requirements are collected and prioritized by the Technical Steering Committee, which consists of one person from each member company, Kiko Reis, Linaro's VP Engineering, and David Rusling, Linaro's CTO. They are then worked on by the Toolchain, Kernel, Power Management, Multimedia & Graphics Working Groups. With the exception of the toolchain group, most (but not all) of the working groups output ends up in the form of patches and improvements to the Linux kernel which are pushed "upstream" as submissions to the mainline Linux tree at [http://kernel.org/](http://kernel.org/). In some cases work is delivered into other open source projects (including Android by submitting  directly to Google's Android Open Source Project - AOSP). In addition, the Landing Teams focus on partnering with each member to provide member SoC-specific support into the upstream kernel.

The patches and improvements can take several months to be accepted upstream. Once they have been accepted, Linux distributions such as Android, Fedora, Montavista, WebOS, Ubuntu and others will automatically obtain Linaro's work when they build new releases of their distributions from the latest kernel.org builds.  Thus the work items from the TSC, and support and consolidation for the latest member ARM SoCs are delivered into the mainstream Linux distributions. This support accelerates customer time to market, due to less porting work and validation being required in the product development phase.

{% include image.html name="How-Android-releases-work2.jpg" alt="How Android releases work 2"%}

As an example the picture shows how Android 2.3 Gingerbread and subsequent Android releases including Honeycomb and the forthcoming Ice Cream Sandwich release all include work from Linaro. With each distribution release more of Linaro's work is incorporated.
