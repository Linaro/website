---
layout: post
title: Linaro Engineering Highlights - December 2020
description: This edition of the monthly Engineering Highlights is feature
  packed with several updates. together with  roundups on the year of some of
  the key projects.
date: 2021-01-08 12:08:24
image: /assets/images/content/code.jpg
tags:
  - Linaro
  - Linux
  - Zephyr
  - AI
  - LCG
  - IoT
  - LKFT
category: blog
author: jon.burcham@linaro.org
---
# The Future of 32-bit Linux

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}
The news cycle for processors and system-on-chip (SoC) products these days is all about 64-bit cores powering the latest computers and smartphones, so it’s easy to be misled into thinking that all 32-bit technology is obsolete. That quickly leads to the idea of removing support for 32-bit hardware, which would clearly make life easier for kernel developers in a number of ways. At the same time, a majority of embedded systems used today do use 32-bit processors , so a valid question is if this will ever 
change, or if 32-bit will continue to be the best choice for devices that do not require significant resources.

To find an answer, it is worth taking a look at different types of systems supported in Linux today, how they have evolved over time with the introduction of 64-bit processors, why they remain popular, and what challenges these face today and in the future. [Continue reading](https://lwn.net/Articles/838807/)

## Zephyr Security Update on Amnesia:33

**By David Brown, Linaro Security Working Group and Zephyr Security Architect**
{% include image.html path="/assets/images/content/zephyr-iot.png" class="small-inline left" alt="Zephyr Project icon" %}
On December 8, 2020, Forescout released a report containing numerous vulnerabilities found in various embedded TCP/IP stacks, known as [AMNESIA:33](https://www.forescout.com/company/blog/amnesia33-forescout-research-labs-finds-33-new-vulnerabilities-in-open-source-tcp-ip-stacks/). These vulnerabilities, across multiple network implementations, concern various memory and overflow errors, some of which are readily exploitable. [Continue reading](https://www.zephyrproject.org/zephyr-security-update-on-amnesia33/)