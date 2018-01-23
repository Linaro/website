---
author: linaro
categories:
- blog
date: 2013-09-20 17:12:11
description: Impressions of Campus Party Europe 2013 by Matthew Gretton-Dann who presented
  "Introduction to Porting And Optimising Code".  Overview on porting code from 32-bit
  ARM to 64-bit ARM and upgrading your compiler.
keywords: Campus Party Europe, Linaro, ARM, Toolchain, Linux, Linux on ARM, Opensource,
  32-bit ARM, 64-bit ARM
layout: post
link: /blog/toolchain-blog/introduction-to-porting-and-optimising-code/
slug: introduction-to-porting-and-optimising-code
tags:
- Toolchain
- Linaro
- Linux
- Linux on ARM
- Open Source
- toolchain
title: Introduction to Porting And Optimising Code
wordpress_id: 3016
---

{% include image.html name="campus-party-image-1.jpg" alt="Picture of Campus Party Europe 2013" class="small-inline right"%}


Recently I was asked to go and present on porting from 32-bit ARM to 64-bit ARM at [Campus Party Europe](http://www.campus-party.org/) at the [O2 Arena](http://www.theo2.co.uk/) in London.  This occurred early in September and it can be watched on [YouTube](http://www.youtube.com/watch?v=epzYErIIx0Y)* and the slides are also [available here](/assets/downloads/campus-party-presentation-Sept_2013.pdf).

Campus Party is organised by Telefonica/O2 and is aimed at students and recent graduates.  They had several thousand people at the event.  And on the day I went as well as my presentation there were presentations ranging from e-Sports, through [IPv4 address starvation and how to deal with it](http://www.youtube.com/watch?v=IYlbRY0JHdg), via [Optimizing 3D Graphics on Mobile](http://www.youtube.com/watch?v=9DLxGwDWUWs), and through to a [keynote](http://www.youtube.com/watch?v=Lw2kC3L6Yu0) touching on the history of Mozilla.  There was also a large area devoted to hacking and coding, with gaming areas as well.  All-in-all it felt like a Linaro Connect - just ten times larger…

As I said above, my part in this was to spend an [hour or so talking about porting code from 32-bit ARM to 64-bit ARM](http://www.youtube.com/watch?v=epzYErIIx0Y)\*.  As I prepared the talk I realised that the message of my presentation was to upgrade your compiler, and to trust it.

The recent updates to the C and C++ standards updated the languages so that they understand the concept of multi-threaded code, and different memory models.  This enables you to write code that makes use of atomic operations and different consistency rules in a way that works across every platform without you having to do any work porting the code.  One change means you don’t have to touch this code again when porting!

Although you may want to review the code to make use of some of the more relaxed memory models to improve the performance of your code.  Again the compiler will do the work of choosing the correct code to generate - and if your processor doesn’t support the memory model selected then the compiler will choose the right alternative.

Another feature in many compilers is auto-vectorisation, which is a class of optimisations performed by a compiler which changes loops from performing one iteration at a time to being performing multiple iterations at once.  (Of course its more complicated than that).  Many computer architectures have instructions designed to enable this - generally called SIMD (Single Instruction Multiple Data).  GCC 4.8 understands how to auto-vectorise code for both 32-bit and 64-bit on ARM.  It does require you to ensure your code is properly written, and the presentation gives an example of this.

Auto-vectorisation is great, but there are algorithms that it can’t work for.  In this case most compilers targetting ARM provide a set of “Neon intrinsics”.  These look like function calls and enable you to explicitly say what SIMD operations you want to operate on the data you have.  The same intrinsics work for both 32-bit and 64-bit ARM code, which saves effort.  Again the presentation gives an example of this.

I hope that the presentation does make my point - compilers should be trusted - and when they get it wrong the reason should be investigated.  They can’t get it right all the time, but they do a very good job in the most part.

View the my presentation on "[Introduction to Porting And Optimising Code](http://www.youtube.com/watch?v=epzYErIIx0Y)"  and [download the slides ](/assets/downloads/campus-party-presentation-Sept_2013.pdf)for the presentation.

Learn about all the exciting developments happening in [Linaro's Toolchain Group](https://wiki.linaro.org/WorkingGroups/ToolChain).


###### \*Please note there was a technical issue with the video showing the slides about 4 minutes into the video, the problem gets corrected about 18 minutes into the presentation.  You can still follow along with the slides linked above.