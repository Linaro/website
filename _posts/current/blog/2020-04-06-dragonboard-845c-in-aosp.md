---
layout: post
title: DragonBoard 845c in AOSP
date: '2020-04-06 01:48:45'
image:
  path: /assets/images/content/48806078402_a2756594c6_k.jpg
tags:
  - Dragonboard 845c
  - DB845c
  - Android
  - AOSP
  - Linux Kernel
  - VIRT20
category: Blog
author: john.stultz
---
Over the last year, the Linaro Consumer Group (LCG) has been actively working with the Qualcomm Landing Team and the Google Android Systems Team to get the DragonBoard 845c added as one of the AOSP supported devboards (similar to HiKey, HiKey960 and the Beagle X15). 

One of the most exciting parts of the DragonBoard 845c is that it supports the freedreno graphics driver and mesa, which means the board has a fully open source graphics stack! This avoids the proprietary blob drivers, which while very common in the Android ecosystem, are a constant pain point for adapting to newer kernels and Android revisions. This also means that the board functionality can be completely upstreamed into the mainline kernel, which makes the board a very interesting test target for validating the mainline kernel and stable updates.

{% include image.html name="DB845cblog1.png" class="medium-inline" alt="The Alt text for your image" %}

Test