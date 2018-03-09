---
author: linaro
categories:
- blog
date: 2013-05-09 18:20:58
description: Renato Golin explains the significance of the EuroLLVM event, discusses
  the importance of LLVM and his role at Linaro.
keywords: Linaro, Linux on ARM, Open Source, Renato Golin, LLVM, EuroLLVM, events,
  Linaro Connect Europe
layout: post
link: /blog/community-blog/renato-golin-on-eurollvm-linaro-toolchain-team-and-more/
slug: renato-golin-on-eurollvm-linaro-toolchain-team-and-more
tags:
- community
title: Renato Golin on EuroLLVM, Linaro Toolchain Team and More
wordpress_id: 2709
---

{% include image.html name="Renato-Small.jpg" alt="Renato Golin, Linaro Toolchain Engineer" class="small-inline" %}

Linaro developers and engineers can be found at various events across the globe.  This week we catch up with [Renato Golin](/about/) of the Linaro Toolchain Team who recently attended the [3rd Annual EuroLLVM event](http://llvm.org/devmtg/2013-04/) which took place in Paris, France on April 29th and 30th, 2013.  Curious about [EuroLLVM](http://blog.llvm.org/2013/05/eurollvm-2013-paris-france.html), I asked Golin for a few more details about this event and more.

**Question: What is EuroLLVM and what was your role in this event?**

EuroLLVM is the European version of the LLVM Developers Meeting, in US, where we gather to exchange ideas, present the progress of our projects and discuss the future of the toolchain. This time we had many people from the US, including in the speaker list, which is a good indication that this event is making its mark on the LLVM world.

Back in 2011, I organized the first EuroLLVM in London and, following the success we had a 2012 version was organized by ARM. This year, a team of volunteers in Paris got the lead. I was more on the sidelines than organizing the event, helping with lessons learned, getting the badges, taking the pictures, running around solving last minute problems, etc. The credit this year goes to the core team in Paris, they've done an amazing job.

**Question: For those who may not know why this event is important can you tell people a little bit about LLVM?**

LLVM is an open source toolchain, much like GCC, but with a permissive license, a modern C++ codebase and the possibility of using JIT compilation, which seems to be getting a lot of traction in the graphics community. Another crucial feature, in comparison to GCC, is the ease to add new functionality, even if you keep them private, which makes it very desirable for prototyping or commercializing products on top of it. LLVM has support for a number of architectures, from ARM to SystemZ, and can produce pretty decent code when compared to most modern compilers.

Most people, when talking about why they have chosen LLVM for their personal project, commercial product or academic research, mention how easier it is to get along with the LLVM community. LLVM is young, but it's moving at a faster pace than possibly any other compiler and part of that comes from how the community works. There is very little protectionism on legacy code, and people are generally welcome to submit patches, which get reviewed quickly and constructive reviews are done. I've been following the list since 2009 and don't remember any major flame or aggressive emails through the list, even when people had horribly messed up the code.

**Question: Can you tell readers a little about your role at Linaro?**

My current role is to understand how LLVM fits around the ARM ecosystem and what we can do about it. For now, we're mainly interested in understanding what LLVM can and cannot do, so that we can create a TODO list and present to the community. It's only when we know that the issues are, how easy it is to implement them and how important it is for the community that we can correctly prioritize and work on it.

Our main focus will be around the Cortex-A* platform, mainly A9 and A15, paying special attention to automatic vectorization (NEON), ABI and cross-compilation issues, as well finding relevant benchmarks for ARM platforms. We want LLVM to perform well where people will use it, not just to look good in the paper.

**Question: With [Linaro Connect Europe](http://connect.linaro.org) happening in July what can attendees expect to see on the LLVM front?**

The Linaro LLVM team has just started, so I can't promise much. I'm working on the 3.3 release now and will run some benchmarks after that, hopefully before LCE, so that we can get at least some numbers out to share with the other Linaro teams, members and the general ARM community, so that we can focus on the right things up from the start.

The only thing I can promise now is that we'll listen very carefully to all suggestions, so if anyone has any special requests, please make sure you get them to us, or we'll never know how important it is for you.

**Question: What else would you like people to know about you, EuroLLVM, or your work at Linaro?**

That's about it. ;)

More information about the **Linaro Toolchain Team** can be found at: [https://wiki.linaro.org/WorkingGroups/ToolChain](https://wiki.linaro.org/WorkingGroups/ToolChain)

More information about **LLVM** can be found at: [http://llvm.org/](http://llvm.org/)

More information on **Linaro Connect Europe 2013** can be found at: [Connect](http://connect.linaro.org)