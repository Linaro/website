---
author: alan.bennett
categories:
- blog
date: 2011-08-10 14:43:24
description: Introduction to the concept of LAVA by one of the Linaro Validation developers
keywords: lava, quality, automation, tools, introduction,
layout: post
link: /blog/lava-blog/lava-introduction/
slug: lava-introduction
tags:
- lava
- LAVA
title: LAVA Introduction
wordpress_id: 4116
---

Hi there.

This is my first blog post for a long while and my very first post wearing my Linaro LAVA hat. Over the next several weeks I will introduce various topics related to LAVA, describe the overall architecture and design, listing all the participating components and finally drilling down to some practical examples.

TL;DR: LAVA-the-stack aims to make systematic, automatic and manual quality control more approachable for projects of all sizes.

Some people say I talk to much so I believe I may also write too much at times, I will gladly welcome all feeeback, please comment on what you find curious, interesting, lacking or inaccurate.

Currently LAVA is a brand. People use it to address topics ranging from test wrappers, data formats, the [validation lab test farm in Cambridge UK](http://voices.canonical.com/michael.hudson/2011/07/25/what-the-linaro-validation-team-is-up-to/), the official [validation website](http://validation.linaro.org), one of the [dozen lava modules/projects](https://launchpad.net/lava) on Launchpad and everything in between. This is all good as it makes the brand stronger but it sometimes makes it hard to communicate successfully and unambiguously with others.

For me LAVA is a collection of participating components, the overall idea and evolving architecture that allows us to make testing, quality control and automation a little bit better than it is currently, that is... nowhere.

We, the free and open source community, have traditionally neglected quality. The perceived quality has improved over time, partially due to experience and improving awareness and partially to indirect tool support. Try to remember back before we had reliable build systems, distributed version control systems, sensible and widely deployed bug trackers. Times were fun indeed.

Good software feels good. It can have lots of bugs but as long as it feels good people are going to be happy using it. Bugs get fixed over time but that may not improve quality in any way. Quality is elusive. The distinctive properties vary with context and recipient. End user applications, system tools, developer tools, libraries, kernel drivers, packaging, documentation, artwork and design, community, translations, compatibility, migration path, feature set, web infrastructure, ...even project name. All that, together, determines how we think of a particular piece of software.

To think that one can automate "quality" is naive. Quality is pretty much impossible to automate. It can be regarded as a process, much like some people look at security. Having said that, we are at the very early stages of working towards good quality. Usually a combination of excellence in development skills, taste and intuition coupled with hitting the right target audience/feature set combination is responsible for the most successful, "high quality" free software projects out there. There are some best practices (usually oscillating around libraries and tool kits, less frequently around programming languages), several libraries, few tools and virtually no automation.

Automation is hard to do, it takes time, it has a steep learning curve and almost always requires infrastructure, deployment plans, tinkering and even writing custom tools. This is where we fail. We need the git or bzr for quality, the launchpad, bugzilla for automation, the facebook for social benchmarking and feedback system. The desire to pursue quality should to be as natural as using a modern version control system, build system, documentation system, bug control system.

Our goal at the Linaro Validation team is to build a stack of tools and components that make automated testing and benchmarking, manual testing, continuous integration, reporting, analysis and data mining as useful, easy to deploy and extend as we can.

We may never get there but at least we're trying and **doing it in the open**.

In the next post I will describe what components of LAVA exist today and how they relate to one another. Stay tuned.