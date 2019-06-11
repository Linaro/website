---
title: Linaro at Lund Linux Con 2019
author: linaro
layout: post
date: 2019-06-11 00:00:00
description: >-
  Here is a report from one of Linaro's engineers that was at Lund Linux Con
  2019 an event that Linaro sponsored.
categories:
  - Blog
tags:
  - Linaro
  - Open Source
  - Arm
  - Linux
  - Lund Linux Con
  - Kernel
  - Software
  - Engineering
image: /assets/images/blog/uncompressed_crowd4.JPG
---

&nbsp;A couple of weeks ago, the annual Lund Linux Con (LLC) &nbsp;<br>[https://lundlc.org](https://lundlc.org)&nbsp;was held in Lund, Sweden. &nbsp;<br>&nbsp;&nbsp;<br>This was the sixth iteration of the Linux conference, &nbsp;<br>and this time Linaro was one of the main sponsors for the &nbsp;<br>event. See below picture of the t-shirt Linaro sponsored.

![](/assets/images/content/peng-cheng-laboratory-pcl-joins-linaro-as-associate-member-copy/linaro-tshirt.jpg){: width="4831" height="3221"}<br>According to the organizers, it is the largest conference, &nbsp;<br>focused specifically on the Linux kernel, in all of Scandinavia. &nbsp;<br>&nbsp;&nbsp;<br>LLC is a "half open" conference, which means that it is formally &nbsp;<br>by invitation only, but as long as you have any relationship with &nbsp;<br>the Linux kernel, you simply have to ask for an invite. &nbsp;<br>&nbsp;&nbsp;<br>The conference tries to bring people together from the &nbsp;<br>"greater Lund area", which is a comical definition, since &nbsp;<br>a lot of the attendees come from Copenhagen, the capital of &nbsp;<br>Denmark, which is only 40 minutes away with train. &nbsp;<br>&nbsp;&nbsp;<br>Even though the conference claims to focus on the local &nbsp;<br>region, it has previously hosted well known kernel developers &nbsp;<br>such as Thomas Gleixner, Julia Lawall, and Christoph Hellwig, &nbsp;<br>from outside the local region. &nbsp;<br>&nbsp;&nbsp;<br>However, the local kernel developers such as Linus Walleij, &nbsp;<br>Ulf Hansson, Matias Bj&oslash;rling and Jesper Dangaard Brouer should &nbsp;<br>be familiar to those who follows the linux kernel mailing list. &nbsp;<br>&nbsp;&nbsp;<br>The attendees come from a number of different companies, &nbsp;<br>including Linaro, Red Hat, Axis, Western Digital, Samsung, &nbsp;<br>Sony, Volvo, Bosch, Ericsson, etc. &nbsp;<br>It's quite rare to see so many local companies, from widely &nbsp;<br>different areas, come together at a single event.

![](/assets/images/content/peng-cheng-laboratory-pcl-joins-linaro-as-associate-member-copy/uncompressed-companies.JPG){: width="2560" height="1706"}&nbsp;&nbsp;<br>The discussions this year were focused on performance, &nbsp;<br>RISC-V, and also included a follow up discussion on Linux in &nbsp;<br>cars from previous years. &nbsp;<br>&nbsp;&nbsp;<br>Presentations this year included, but are not limited to: &nbsp;<br>&nbsp;&nbsp;<br>"Reworking of KVA allocator in Linux kernel" &nbsp;<br>by Uladzislau Rezki (Sony), a reimplementation that &nbsp;<br>improves the speed of the vmalloc allocator by more than 50%. &nbsp;<br>This major rework has since been merged into the &nbsp;<br>v5.2-rc1 kernel. &nbsp;<br>&nbsp;&nbsp;<br>"It's all speculative" by former OpenSSL core maintainer &nbsp;<br>Andy Polyakov (Chalmers University of Technology), &nbsp;<br>which gave an interactive presentation &nbsp;<br>explaining how issues such as Spectre and Meltdown are &nbsp;<br>possible. People from audience were brought up on stage &nbsp;<br>to represent different instructions in a CPU instruction &nbsp;<br>pipeline, in order to better visualize how speculative &nbsp;<br>execution works. &nbsp;<br>&nbsp;&nbsp;<br>"Mopping up kernel messes one at a time, this time: licensing" &nbsp;<br>by Thomas Glexiner (Linutronix), who explained the issues &nbsp;<br>with unclear &nbsp;<br>licenses, especially for small and medium businesses. &nbsp;<br>Turns out that there have been more then hundred different &nbsp;<br>variations of the GPLv2 text alone. They have even found and &nbsp;<br>fixed GPL-incompatible source files. &nbsp;<br>&nbsp;&nbsp;<br>"RISC-V and Linux State of the HART" by Damien Le Moal &nbsp;<br>(Western Digital), which explained &nbsp;<br>how far the RISC-V port of Linux has come, and the current &nbsp;<br>state of the ISA base and its extensions. He also gave us a &nbsp;<br>live demo of a single board computer that lacked an MMU, and &nbsp;<br>which only had 8 MB of on-chip SRAM, running Linux with &nbsp;<br>a busybox user space. &nbsp;<br>&nbsp;&nbsp;<br>"Bufferbloat mitigation in the Linux WiFi stack" by Toke &nbsp;<br>H&oslash;iland-J&oslash;rgensen (Red Hat), which explained what bufferbloat &nbsp;<br>is, and how to mitigate it. Bufferbloat has basically been fixed &nbsp;<br>for Ethernet, but for WiFi, there are still some things left to &nbsp;<br>be done. The problem is a bit different for WiFi, since there is &nbsp;<br>a lot of overhead for each frame transmitted, so frames are &nbsp;<br>usually aggregated. Another problem is that there is usually an &nbsp;<br>internal queue in the WiFi firmware, which adds additional &nbsp;<br>latency/buffering. &nbsp;<br>&nbsp;<br>Linaro has a small office in Lund, where you can find the &nbsp;<br>following developers: &nbsp;

* Joakim Bech - Security Working Group &nbsp;
* Jens Wiklander - Security Working Group &nbsp;
* Niklas Cassel - Landing Team - Qualcomm &nbsp;
* Ulf Hansson - Power Management Working Group &nbsp;
* Linus Walleij (Assignee - Arm) - Kernel Working Group