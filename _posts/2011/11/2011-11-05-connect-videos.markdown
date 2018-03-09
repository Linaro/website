---
author: linaro
categories:
- blog
date: 2011-11-05 13:38:43
description: A first set of HD videos from Linaro Connect Q4.11 in Orlando, Florida.
  Technical discussions and interviews with Linaro and community engineers.
keywords: linaro,connect,videos,arm,linux
layout: post
link: /blog/connect-update/connect-videos/
slug: connect-videos
tags:
- Connect Events
- arm
- connect
- Linaro
- Linux
- video
title: First videos from Linaro Connect Q4.11
wordpress_id: 812
---

[Linaro Connect Q4.11](http://connect.linaro.org/) was a great place to learn about Linaro projects and to contribute to them, as well as to build tighter ties with the Linaro engineers and community.

For those who couldn't participate to this event, here are all the videos that I shot. Note that I mostly didn't cover plenaries, because they were either filmed by [Novacut](http://novacut.com/) or by the Ubuntu video crew, with better equipment. As soon as their videos are available, we will let you know through a comment to this article.

### Day 1 - Welcome speech and practical details - Stephen Doel

Stephen Doel, Linaro's Chief Operating Officer, opened the Linaro Connect Q4.11 event. In particular, he gave practical details to participants.

This video should also interest Linaro community members who could be interested in joining a future Linaro Connect event. It gives you an overview of what Connect events bring in terms of technical and human experience.

### Day 1 - Technical goals - Christian Reis

Christian Reis, Linaro's Engineering VP, opened Linaro Connect Q4.11 by setting technical goals for the week. He was then followed by the leaders of each of the working groups ("tech leads"), which shared their team's goals for this intense working and networking week!

For people who followed Connect remotely, this video was useful to know what current Linaro plans are, and what sessions they could be interested in joining. For people interested in joining future Connect events, it also gives details about how work gets done during such events.

### Day 1 - Toolchain support for kernel debugging - Ulrich Weigand

In this session, Linaro toolchain developers asked kernel developers about their potential needs for kernel debugging. The session was lead by Ulrich Weigand.

Several options to improve the kernel debugging experience were discussed. In particular, the toolchain group will make sure that OpenOCD works at least on one of the member boards, to allow for easy debugging through JTAG.

This session was an opportunity to review debugging techniques used by kernel developers. It also allowed most participants to discover the GDB Text User Interface (GDB TUI), a very convenient way to interact with GDB, without having to go through heavyweight environments like Eclipse.

Don't miss this video if you are interested in kernel debugging!

### Day 2 - Interview with Marcin Juszkiewicz

I had the opportunity to interview Marcin Juszkiewicz, a Linaro Engineer and long time member of the embedded Linux community.

Marcin started by explaining his role in Linaro and his contributions. In particular, Marcin took care of packaging cross-compiling toolchains in Ubuntu.

We went on by talking about what Marcin did before joining Linaro. Marcin first started hacking with ARM Linux in the early 2000's, using a Sharp Zaurus PDA.

We talked about the amazing projects that originated from this Linux PDA, and that Sharp probably never anticipated. The embedded Linux community would be very different today if it hadn't happened.

### Day 2 - Panda cloud cluster - Noritsuna Imamura

Noritsuna Imamura showed a cool cluster built with Panda boards. Noritsuna is a member of the Open Embedded Software Foundation (OESF), a Japanse organization that support Open Source embedded software. Noritsuna already presented a fancy robotic turtle chasing human faces at our event in Budapest earlier this year.

The cluster is made of 6 panda boards, that means 12 cores with 6 GB of RAM. We could see that it consumed about 35 W in low activity mode.

Noritsuna explained how his cluster runs the Google App Engine (http://code.google.com/appengine/),  and allows to dispatch a Google app on a selected board.

Details can be found [here](http://www.siprop.org/ja/2.0/index.php?product/pandacloud).

### Day 2 - Enabling low cost power measurement - Dave Anders

David Anders (Tin Can Tools) and the Linaro Power Management working group met to discuss options for low cost hardware solutions to measure power consumption. Options to request members to add probe points to the next revisions of their boards were also discussed.

### Day 2 - JTAG (Flyswatter 2) and Beacon board demo with Panda - Dave Anders

Tin Can Tools David Anders demonstrated two new devices his company makes.

First, he showed Flyswatter 2, a cheap but fast JTAG interface compatible with the Beagle and Panda boards. With a little bit of extra wiring, this interface can also be used for debugging with other boards that Linaro supports.

What he showed was how to copy a Linux kernel to RAM on a Panda board, and directly boot this new kernel. This  is much faster than manually copying the kernel to an SD card and booting it through U-boot. Of course, JTAG is mostly used for kernel debugging, in situations when a hardware debugger is often the only solution.

David went on by showing the new Beacon board, a small add-on for the Panda and Beagle boards, featuring a 7 segment LED display and a tri-colored LED, which can be controlled through GPIOs. I guess this add-on is mainly meant for educational purposes.

David Anders is one of the engineers that contributed most to the design of the Panda board.

### Day 2 - Toolchain Working Group practices - Michael Hope

Michael Hope, the leader of the Toolchain Working Group, explained how his teams handles bugs, makes releases and works with upstream.

Slides are available on http://people.linaro.org/~michaelh/presentations/2011.11%20Toolchain%20Process.pdf


### Day 3 - Freescale Landing team interview

I took the opportunity of Linaro Connect to meet with 3 members of the Freescale Landing team at Linaro: Paul Liu (middleware and graphics acceleration), Haitao Zhang (kernel) and Eric Miao (tech lead, a long time contributor to the ARM Linux community).

In Linaro, a landing team is a engineering team that works on making a hardware platform supported in the upstream open-source projects such as the Linux kernel and distributions like Ubuntu and Android.

Eric, Paul and Haitao explained how they work with the Freescale engineers (they actually are employed by Canonical), and gave details about the technical challenges they face. It was also an opportunity to speak about the Freescale i.MX53 QuickStart board they work on, a low cost yet very powerful board for the community.

This board, together with the kernel and distribution releases made by Linaro, allows community contributors to work always with the latest versions. This is essential to allow the community to contribute.

They also explained how they work together. In particular, they organized a code sprint in Shanghai 1 month before, and had a very productive week together.

### Day 4 - Ubuntu LEB tutorial - Ricardo Salveti

Ricardo Salveti, tech lead of the Developer Platform working group, gave a tutorial on the Ubuntu Linaro Evaluation Builds (LEBs) provided by Linaro.

He first explained how these builds are developed, and their relationship with Ubuntu. He then showed how to download one of these builds and prepare a bootable SD card image with them.  He also gave details useful for people interested in contributing to our Ubuntu LEBs.

### Day 4 - Using and contributing to Linaro Android

Here is a very interesting tutorial by Zach Pfeffer, the tech lead of the Linaro Android working group.

During this tutorial, Zach showed how to download a recent build for a Linaro supported board (the Panda board in this case), how to build an SD card image using the linaro-android-media-create command, and eventually how to boot the board with it.

Zach went on by showing how he compiled and ran an Android application on his board, using the Eclipse SDK for Android.

The last part was getting the `repo` script, and using it to retrieve Linaro and AOSP sources, before compiling an Android image from source.

This is a great tutorial to get started with Android on the boards supported by Linaro. I strongly recommend it.

### Day 5 - Participating in the Linaro Community - Andy Doan

Andy Doan, my colleague in the Engineering Resources team, presented a tutorial targeting both new Linaro engineers and new community contributors. He started with tips on how to say "Hi" to an impressive number of people, and how communication is different from what happens in the proprietary world.

He then addressed the problem of getting started with complex projects such as the Linux kernel, and give useful tips for finding relevant resources on the Linux wiki and mailing lists.

Last but not least, he gave advise on contributing code to Linaro projects, in particular for code contributions.

The session ended by an interesting Q&A; session with several Ubuntu community members who were in the room and were just curious about Linaro. This gave me the idea to organize a "Linaro for Ubuntu community members" talk at the next UDS.