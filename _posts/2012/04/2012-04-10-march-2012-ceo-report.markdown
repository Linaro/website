---
author: george.grey
categories:
- blog
date: 2012-04-10 18:06:29
description: "George Grey, our CEO, details the new Member-first strategy with Linaro\xE2\x80\x99s
  in-kernel big.LITTLE Switcher functionality"
keywords: Linux, ARM, Linaro, big.LITTLE, kernel, ARM v8 architecture
layout: post
link: /blog/industry-blog/march-2012-ceo-report/
slug: march-2012-ceo-report
tags:
- Industry
title: March 2012 CEO Report
wordpress_id: 1528
---

Linaro has made substantial progress in its goal of consolidating and optimizing Linux on the ARM architecture. As an open source-focused organization this work has been carried out completely in the open, and has benefited from the active participation of the Linux community. Part of our key focus for 2012 is to work closely with ARM on new technology with the goal of upstreaming early, and preventing fragmentation around new core technology before it starts. Linaro's members together represent a substantial part of the ARM ecosystem. Linaro projects including Unified Memory Management (UMM) have already proved that we can make significant contributions to architectural infrastructure improvements for ARM.

We have looked at two ways of working on new ARM technology, using big.LITTLE as the starting point. Over time this work will become even more significant with the advent of the new ARM v8 architecture.

The first way is to continue to keep everything in the open, working on available platforms for early access such as ARM's Fast Model technology. Then, when initial member hardware is available to Linaro we would carry out SoC specific bring-up in the landing teams, under NDA until the member is ready to announce/release their new product. The second model is to tell the community what we are doing, but to carry out the initial work within Linaro behind closed doors, giving members early access advantage to the technology. The work is designed throughout with upstream in mind, and would be made public and completely open at a later date, perhaps with the initial member shipments of the new technology.

The open access to all strategy benefits from complete community participation from day one, fits in with Linaro's open source engineering process and culture, and carries the lowest risk of fragmentation. However, development can be slowed by the open source upstreaming process. Furthermore, despite members paying for the Linaro resources and engineering effort, it is very simple for non-members to track and use the work as it happens without bearing any of the costs.

Therefore we have decided to use the Linaro big.LITTLE in-kernel switcher as a trial project where we keep the code within Linaro for a time until we lift the embargo and fully upstream the solution. We believe that this will deliver substantial additional value to Linaro members. We are mitigating the risk of fragmentation and a non-upstreamable solution by working closely with the kernel maintainers already inside Linaro, and by sharing early access to the work with key other maintainers and third parties under NDA. We expect to deliver a product-ready, tested, validated and instrumented implementation to our members in May. This has substantial additional functionality and performance when compared to the ARM reference task migration solution.

If this structure is a success for our members, then we will look at extending it to other pieces of new technology work including some aspects of big.LITTLE MP. big.LITTLE MP will present some additional challenges, as it affects much more of the core Linux kernel infrastructure, including the scheduler itself. This will REQUIRE open community participation and work in order to start to build consensus around the right approach for the required infrastructure changes. Linaro started this at the Linaro Connect meeting in San Francisco in February. For big.LITTLE MP we envisage a combination of open work on upstreaming infrastructure, and a possible Linaro members-only effort in building complete product ready solutions prior to upstreaming. Given the nature of the big.LITTLE MP project we expect to deliver this in phases with additional product functionality available at each phase. Therefore big.LITTLE MP discussions will be held both in the open, and in members/invite-only sessions at the next Linaro Connect in Hong Kong.

I would welcome your feedback on these steps.