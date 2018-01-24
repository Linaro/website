---
author: linaro
categories:
- blog
date: 2011-08-05 06:54:35
description: Demonstration of the Linux framework to keep the temperature of an ARM
  cpu under control by automatically reducing frequency. Using hot coffee and cold
  water!
layout: post
link: /blog/hardware-update/thermal-management/
slug: thermal-management
tags:
- Hardware
- arm
- frequency
- kernel
- Linaro
- Linux
- management
- power
- ST-Ericsson
- thermal
title: 'Video: thermal management - automatic cpu frequency control with hot coffee
  and cold water'
---

Linaro Connect Q3.11, Cambridge, UK, August 2011

In this video, the Linaro Power Management Working Group (Steve Jahnke and Vincent Guittot) demonstrate their Linux framework to keep the temperature of an ARM cpu under control by automatically reducing cpu frequency. A temperature increase is simulated by placing a hot coffee cup on top of the cpu chip (and not the opposite... don't ever expect to ever manage to heat up coffee with an ARM cpu). Temperature is then reduced with a cup of icy water.

The video can also be downloaded in WebM format:

  * [WebM / VP8 codec, 800x450 resolution](https://free-electrons.com/pub/video/2011/linaro/aug/linaro-2011-q3-jahnke-guittot-thermal-management-450p.webm)


  * [WebM / VP8 codec, full HD resolution](https://free-electrons.com/pub/video/2011/linaro/aug/linaro-2011-q3-jahnke-guittot-thermal-management.webm)

According to Steve and Vincent, the thermal management framework that they propose is SoC agnostic (it will support all the different ARM chips), and kept the spirit of the framework currently available on the x86 platform.

To reproduce this demo, you will need a cpu with a thermal sensor. This is why they use a development board from ST Ericsson, and wouldn't have been able to do it with the current versions of the Panda or Snowball boards, for example.

Thermal management is a "hot" issue today, in all senses. The most advanced ARM chips today can operate at more than 1 GHz and offer an impressive processing power capacity. However, with great power comes great responsibility. Though they don't consume more than 1 or 2 watts, these chips still generate some heat when fully loaded. Dissipating this heat is not a problem with development boards like the one we see on the video, and that's why hot coffee was needed to bring the chip to a hot temperature. However, it is a real issue when these chips are used inside mobile devices like a phone or a tablet,  with no fans and grids to let the heat go out. If the system overheats, this is not only unpleasant for the user, but heat can also reduce the longevity of the chip.

This is why a thermal management solution was needed. As soon as the chip gets too hot, the cpu frequency should be reduced, until the temperature gets back to a safe range. In this demo, frequency is displayed through the [PowerTop]() tool, which displays the amount of time spent in the various frequency ranges (or operating modes in general) that Linux supports for the cpu.