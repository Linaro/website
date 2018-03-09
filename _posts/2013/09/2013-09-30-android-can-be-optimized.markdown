---
author: khasim.mohammed
categories:
- blog
date: 2013-09-30 19:16:47
description: Blog on how Linaro is analyzing and working on ways to optimize Android.
keywords: Linaro, Android, Linaro Connect, LCU13, Linux, opensource, Google, Linux
  on ARM, Android community, opensource software
layout: post
slug: android-can-be-optimized
tags:
- Community
- android
- arm
- community
- connect
- Linaro
- Linaro Connect
- Open Source
- software
title: Android Can Be Optimized
wordpress_id: 3082
---

Instead of posting this as a question “can or should Android be optimized?” and trying to find and justify the answer it’s good to begin with a conclusion, this shows that we are quite confident that it’s important to optimize Android and there is definitely enough room or scope for optimizations.

At Linaro, we started analyzing the areas of optimizations, initially it was a bit confusing as we had to understand many independent projects, software layers, hardware architectures and so on, but as we continued analyzing the Android software components by doing  code walk through, talking to few Android application developers to understand the optimization techniques they follow,  reviewing materials available online from various Android conferences, communities & presentations and by talking to few domain experts - we got stormed with amazing ideas & thoughts on optimizing Android.

We would like to share all our learnings through a series of blog posts and involve interested members from different Android communities & organizations in executing these ideas.


To begin with, let’s introduce you to the actual problem. Traditionally every Android pastry (version) release has been associated with a particular product and its processor. Google works with a processor & product vendor to develop software features for a particular hardware and then a device (phone or tablet) will be launched. The fully integrated sources are made public only after the launch of the product. It’s quite obvious that software released is tuned for a particular hardware, and by default similar performance on a different hardware is not guaranteed. Generally, processor vendors mainly focus on enabling the low level drivers and HALs to get the Android stack running on their processor, OEMs/ODMs are always busy in getting to market faster with the latest version, software developers from community projects (Kernel, SQL, browser engine, parsers, etc) hardly get a chance to work on a complete system and hence there is not enough time really spent to bring the best out of hardware in Android.

Though the problem introduced is not very new, due to the complexity of the problem, not much progress can be shown in community or individual efforts. Optimizing Android is always a challenge, because the Android stack is spread across tools, domain specific frameworks from community projects (SQL, OpenSSL, etc), frameworks developed by Google, Linux Operating System, protocol stacks, etc. To overcome the challenge we simplified this activity by limiting the scope to Android middleware components (not going into Linux kernel), compilers & tools and focusing on a top few important use cases. Let me give you a quick summary on the goal, objective and approach we consider.

**Goal:** The main goal of this activity is to “quickly” identify the right areas that result in significant improvements and move onto implementation & execution as soon as possible. In order to focus on execution (instead of just documenting and presentations) we thought it’s good to consider & begin with the concepts that are already proven & explored to an extent.

**Objective :** The overall objective of this analysis is to focus on the following key areas that impacts the performance of any Android powered device & product :


  * Improving Effective Data Throughput

  * Leveraging Multi-Core Computing Efficiently
  
  * Creating a Better Responsive User Interface

  * Extending Battery Life

  * Optimize Boot Process

**Approach:** There is already enough time spent in community, individual organizations and groups in identifying the bottlenecks that impact the performance, and providing solutions or approaches to address these in the best possible way.

  * We first analyze such community projects, the papers & presentations from various conferences that can be leveraged directly and can be implemented or integrated (if already implemented) to improve the overall   performance.
  
  * The second area is to look into the community projects that Google has directly pulled into Android, some of these were developed for PCs, they can be optimized for multi-core or by using NEON & VFP instructions.

  * And finally, looking into a few top Android user space applications from the market that are proven to improve performance when installed on any device. These apps are capable of controlling the hardware usage through software APIs, ideally these concepts can be implemented and integrated by default in Android.

In our next post we will provide you with:

  * A list of community projects that Google has pulled into Android

  * We will explore what projects need updating
  
  * Why some projects were kept at old versions (e.g. there may have been license changes),

  * What projects may even need replacing

  * How much of that we can we do without breaking compatibility too badly.

**Related Links:**  [Linaro Android Team page](/groups/lmg/)

If you are attending [Linaro Connect USA 2013 ](http://connect.linaro.org/lcu13/)in Santa Clara, CA October 28th-November 1st  -- please join us for our Android sessions on:

October 28th 2013 : Android not in sync with upstream & external projects

October 31st 2013 : Collaborating with other Android communities

It is not too late to register to attend if you have a not already done so:  [Register Here](http://linaroconnect-lcu13.eventbrite.co.uk/)

If you are interested in working with us on these projects, feel free to join us by sending a mail to: khasim dot mohammed at linaro dot org or to:  jakub dot pavelek at linaro dot org