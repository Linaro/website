---
layout: post
title: "32-bit Linux: Bright Future Or End Of Life?"
description: In this article, Arnd Bergmann provides an overview into the past,
  present & possible future of 32-bit Linux technology. Read more here.
date: 2020-12-07 11:27:17
image: /assets/images/content/road-timelapse.jpg
tags:
  - Linux
  - 32 bit
  - 64 bit
  - Arm
  - open source
category: blog
author: arnd.bergmann
---
It is easy to be misled into thinking that all 32-bit technology is obsolete given the news cycle for processors and system-on-chip (SoC) products these days is all about 64-bit cores powering the latest computers and smartphones. In many ways it would make life much easier for Kernel Developers if support for 32-bit hardware was removed entirely. However, a large portion of embedded systems today still use 32-bit processors which raises the question - will this ever change? Or will 32-bit continue to be the best option for devices that do not require significant resources?

In this [LWN article](https://lwn.net/Articles/838807/), Arnd Bergmann rakes a look at the different types of systems supported in Linux today, examining how they have evolved over time with the introduction of 64-bit processors, why they remain popular, and what challenges these face today and in the future.