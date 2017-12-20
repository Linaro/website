---
author: david.rusling
categories:
- blog
date: 2012-12-03 17:28:35
description: A look at how Linaro's Technical Steering Committee (TSC) works and how
  this has evolved over time.
keywords: Linaro, TSC, Committee, missions, roadmap, working groups
layout: post
link: /blog/how-linaros-technical-steering-committee-works/
slug: how-linaros-technical-steering-committee-works
title: How Linaro's Technical Steering Committee Works
wordpress_id: 2064
---

I often get asked about the role of the Linaro Technical Steering Committee (TSC), what it is and how it operates. As an aside, I don’t even like the word ‘committee’, it smacks of inefficiency; of a room full of people churning out specifications and standards. Maybe this is because, I was, in the dim and distant past, involved with an ISO standards body (for the ISO Transport protocol). It pontificated for years and was overtaken by TCP/IP. Why? TCP/IP standards were driven by implementations that were proven to work. This has left me with a bit of distrust of Committees, but back to the topic in hand.

The primary role of the TSC is to identify the engineering problems, prioritise them and track their completion. In the early days, we had simple (if big) problems to solve - fix fragmentation in the ARM kernel and ensure that the best possible GNU toolchain existed. We would regularly ask members for input on the work for the teams. The members would create slides and, as a team, we collated and prioritised the work items and gave them to teams to execute. Unfortunately, as the engineering teams grew, we failed to scale. There was just too much going on in Linaro for the TSC to be able to work at a fine grained detail. It was overwhelming and we got bogged down. In any case, as the teams got bigger and more technically able, the teams, more and more, generated their own future work items.

So, history has taught us that you cannot run an complex engineering organisation via a committee, no matter how well intentioned. I set up OPSCOM (the Operational Sub-Committee of the TSC) to handle the detail and moved the TSC to defining and driving Linaro’s missions and its roadmap. This does not mean that the TSC avoids detail. The TSC has oversight into engineering and can choose to review engineering plans and progress. One of the sessions at Connect is engineering management discussing the teams, directions and plans with the TSC. As an example of the TSC delving into engineering, we discussed the big.LITTLE plans at last week’s TSC meeting. The need for oversight is a driver for openness but also for simplicity. Speaking of openness, all of the TSC meeting minutes and so on can be found on the Linaro wiki ([https://wiki.linaro.org/TSC](https://wiki.linaro.org/TSC)) and the main web site contains who is on the committee ([/about/tsc/](/about/tsc/)).

One (important) side effect of setting up OPSCOM is that we realized that we need tools and we settled on Jira, which we currently use to handle Linaro’s requirements. Engineering work is described in blueprints, but we’re experimenting with using Jira for those too as it is a bit of a pain to use two different tools for planning. The project managers are experimenting with generating spreadsheets of deliverables (date started, date finished, date upstreamed etc) automatically. That should simplify things and make it easier for our members to see what we’re doing (without the need for delving into wikis, code bases, Jira and launchpad) and to align their activities with ours.

This is a good time to make these changes as we have just launched the Linaro Enterprise Group (LEG). This has brought many new members into Linaro and having a simple and straightforward way to interact with Linaro planning and engineering teams is not just a ‘nice to have’ but essential.  You can find the LEG web pages at [/groups/leg/](/groups/leg/).

Speaking of LEG, the LEG steering committee will elect a representative into the main TSC.

To be clear, setting up OPSCOM and getting a roadmap in place was the result of a lot of hard work by many people, but I'll single a couple of folks out. One is Loic Minier, who created the role of Linaro Product Manager and another is Ilias Biris, an a program manager and expert with Jira.  One thing that I like about Linaro is that it is not only engineering code, it is engineering how it works, tuning it to the size of the organisation and our membership.

Another role of the TSC is the creation and removal of working groups. As Linaro grew, we realized that we needed specialist groups working on power management, graphics and multimedia. Creating these groups all required a vote from the TSC. Later, as we realised that the graphics and multimedia teams were mostly driving efficiency work in the Linux kernel, we merged those two groups.

The final responsibility of the TSC is to agree the usage of various open source licenses. We are fairly liberal in our use of licenses. Linaro is a separate legal entity dedicated to working in open source code bases. Most licenses can be used by the teams with no need for the TSC to discuss them. Some, however, cause concern, including GPL 3.0 (which is probably worth a blog entry on its own). Speaking of voting, we rarely vote as we get to consensus fairly often. When we do vote, it's a simple majority vote.