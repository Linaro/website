---
author: linaro
categories:
- blog
date: 2012-11-26 21:05:13
description: Find out more about LAVA as Dave Pigott, Lava Lab Lead explains how he
  created an animated version of LAVA from its go live date of 27 July 2011 to 6 Nov
  2012.
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, Linaro Connect, LAVA, Dave
  Pigott, Testing, Gource, FFmpeg, Python
layout: post
link: /blog/community-blog/watch-lava-erupt-with-growth-as-new-tests-are-added/
slug: watch-lava-erupt-with-growth-as-new-tests-are-added
tags:
- Community
- Hardware
- LAVA
title: Watch LAVA Erupt with Growth as New Tests are Added
wordpress_id: 2028
---

> Open Source software has rarely, if ever, been tested to the extent that LAVA has enabled. ~Dave Pigott, LAVA Lab Lead 

[Dave Pigott, ](/about/)Lava Lab Lead at Linaro recently gave a presentation about [LAVA—](https://wiki.linaro.org/Platform/LAVA)Linaro Automated Validation Architecture—and as part of this showed [an animated version of LAVA](http://youtu.be/_m1nbcRba5w) from its go live date of 27 July 2011 through 6 November 2012.

I was curious as to how he created this video presentation, so I asked him about the process, the software he used and more.

**Question:** What software did you use to create this LAVA animation?

**Dave Pigott:** Well, first of all I ran a little Python script devised by Paul Larson and amended by me to extract the data from the LAVA database and put it in a file in a usable form. Then I used a tool called “gource”, which is actually a tool for visualising source code control (SCC) system usage over time. As long as the data in the file is in the right format, it just works. It doesn’t care that the data isn’t from an SCC. The output of this is a (rather large - 15GB) uncompressed series of bitmaps, so I then used ffmpeg to generate an mpeg compressed video - a mere 500MB.

**Question:** Where can people get it? Is it free?

**Dave Pigott:** Gource and FFmpeg are open source. Of course. :)

More information about Gource can be found at: [http://code.google.com/p/gource/](http://code.google.com/p/gource/)
More information about FFmpeg can be found at: [http://ffmpeg.org/](http://ffmpeg.org/)

**Question:** When people look at the video what are they seeing represented?

**Dave Pigott:** Going from the centre, each “arm” represents a platform type (beagle, panda, snowball, fastModel, origen etc), each arm off the end of those arms represents a specific instance of that platform (panda01, panda02...), and then (finally) off each of those spurs is a job id - just a number, representing the LAVA runs being executed on that board.

Outside of that, the little avatars represent people or processes submitting jobs. You see one or two notable engineers identified a lot of the time as they test specific things.

**Question:** When you see this video of LAVA tests over time, what excites you most about it?

**Dave Pigott: **Seeing how much LAVA has grown, both in terms of the number of platforms supported and the number of users.

**Question:** How has LAVA testing grown over the last year to 18 months?

**Dave Pigott:** As you can see from the video, usage is now phenomenal, and we’re now adding [LEG hardware](/groups/leg/) to the mix, so it’s just going to get bigger.

**Question:** What do you want people to know about LAVA?

**Dave Pigott:** That LAVA is an enabler. We don’t dictate what you test, we just give you the tools to do it and record the results.

**Question:** How can other projects benefit from LAVA?

**Dave Pigott:** By submitting tests on a regular basis, people can benchmark their work over time. Has it improved in performance? Have we introduced a regression? Does it use less power? That sort of thing. Open Source software has rarely, if ever, been tested to the extent that LAVA has enabled.


### About LAVA


_[LAVA ](http://lava.readthedocs.org/en/latest/)is an automated testing framework developed by Linaro. It includes a web framework with extensions for scheduling jobs and storing results. The web framework can be extended with custom extensions for storing new types of data, or presenting custom result views. LAVA has a dispatcher component for processing test jobs that can deploy Ubuntu based and Android based Linaro images on supported development boards. Custom extensions can be written to support additional client types, or operations to perform. LAVA has test runners that can provide a consistent interface to various Linux and Android test suites with additional test suites added easily._

_More information about [LAVA](https://wiki.linaro.org/Platform/LAVA), its use, or getting involved with the team can be found on the [Linaro Wiki](https://wiki.linaro.org/Platform/LAVA). The LAVA Team has a [weekly meeting](https://wiki.linaro.org/Platform/LAB), a [mailing list](http://lists.linaro.org/mailman/listinfo/linaro-validation) and members of the team can be found in the #linaro IRC channel on irc.freenode.net._


### About Linaro


_Linaro is the place where engineers from the world’s leading technology companies define the future of Linux on ARM. The company is a not-for-profit engineering organization with over 120 engineers working on consolidating and optimizing open source software for the ARM architecture, including developer tools, the Linux kernel, ARM power management, and other software infrastructure. Linaro is distribution neutral: it wants to provide the best software foundations to everyone, and to reduce non-differentiating and costly low level fragmentation._

_To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro’s engineering work is open to all online. To find out more, please visit [](/)._


### About Linaro Connect


_Over 300 participants, ranging from kernel hackers to integration engineers to ARM SoC industry executives gather during this week long to present, discuss and develop features,  infrastructure and optimizations for the Linux kernel, Android, Ubuntu and beyond._

_More information on upcoming Linaro Connect events can be found on the the[ Linaro Connect Website](http://connect.linaro.org/).  You can also stay in touch with what is happening in and around Linaro by following us on[ Twitter](https://twitter.com/LinaroOrg),[ Google+](https://plus.google.com/+LinaroOnAir) and[ Facebook](https://www.facebook.com/LinaroOrg)._