---
title: Highlights from Lund Linux Con 2019
author: niklas.cassel
layout: post
date: 2019-06-13 00:00:00
description:
  A few weeks ago, Linaro attended Lund Linux Con 2019, the largest conference
  in Scandinavia focused on the Linux Kernel. Here are some of the highlights.
category: blog
tags:
  - Linaro
  - Open Source
  - Arm
  - Linux Kernel
  - Software
image: /assets/images/blog/uncompressed_crowd4.JPG
---

A couple of weeks ago, the annual Lund Linux Con (LLC) [https://lundlc.org](https://lundlc.org)&nbsp;was held in Lund, Sweden.&nbsp;<br>&nbsp;&nbsp;<br>This was the sixth iteration of the Linux conference and this time Linaro was one of the main sponsors for the event. See below picture of the t-shirt Linaro sponsored.

{% include image.html path="/assets/images/blog/linaro-tshirt.jpg" alt="Linaro t-shirt" %}

According to the organizers, it is the largest conference, focused specifically on the Linux kernel, in all of Scandinavia. &nbsp;<br>&nbsp;&nbsp;<br>LLC is a "half open" conference, which means that it is formally by invitation only, but as long as you have any relationship with the Linux kernel, you simply have to ask for an invite. &nbsp;<br>&nbsp;&nbsp;<br>The conference tries to bring people together from the "greater Lund area", which is a comical definition, since a lot of the attendees come from Copenhagen, the capital of Denmark, which is only 40 minutes away with train. &nbsp;<br>&nbsp;&nbsp;<br>Even though the conference claims to focus on the local region, it has previously hosted well known kernel developers such as Thomas Gleixner, Julia Lawall, and Christoph Hellwig, from outside the local region. &nbsp;<br>&nbsp;&nbsp;<br>However, the local kernel developers such as Linus Walleij, Ulf Hansson, Matias Bj&oslash;rling and Jesper Dangaard Brouer should be familiar to those who follow the linux kernel mailing list. &nbsp;<br>&nbsp;&nbsp;<br>The attendees come from a number of different companies, including Linaro, Red Hat, Axis, Western Digital, Samsung, Sony, Volvo, Bosch, Ericsson, etc. &nbsp;<br>It's quite rare to see so many local companies, from widely different areas, come together at a single event.

{% include image.html path="/assets/images/blog/uncompressed-companies.JPG" alt="Comapnies" %}

<br>The discussions this year were focused on performance, RISC-V, and also included a follow up discussion on Linux in cars from previous years. &nbsp;<br>&nbsp;&nbsp;<br>Presentations this year included, but are not limited to: &nbsp;

"Reworking of KVA allocator in Linux kernel" by Uladzislau Rezki (Sony), a reimplementation that improves the speed of the vmalloc allocator by more than 50%. This major rework has since been merged into the v5.2-rc1 kernel. &nbsp;<br>&nbsp;&nbsp;<br>"It's all speculative" by former OpenSSL core maintainer Andy Polyakov (Chalmers University of Technology), who gave an interactive presentation explaining how issues such as Spectre and Meltdown are possible. People from the audience were brought up on stage to represent different instructions in a CPU instruction &nbsp;<br>pipeline, in order to better visualize how speculative execution works. &nbsp;<br>&nbsp;&nbsp;<br>"Mopping up kernel messes one at a time, this time: licensing" by Thomas Glexiner (Linutronix), who explained the issues with unclear licenses, especially for small and medium size businesses. Turns out that there have been more than one hundred different variations of the GPLv2 text alone. They have even found and fixed GPL-incompatible source files. &nbsp;<br>&nbsp;&nbsp;<br>"RISC-V and Linux State of the HART" by Damien Le Moal (Western Digital), who explained how far the RISC-V port of Linux has come, and the current &nbsp;<br>state of the ISA base and its extensions. He also gave us a live demo of a single board computer that lacked an MMU, and which only had 8 MB of on-chip SRAM, running Linux with a busybox user space. &nbsp;<br>&nbsp;&nbsp;<br>"Bufferbloat mitigation in the Linux WiFi stack" by Toke H&oslash;iland-J&oslash;rgensen (Red Hat), who explained what bufferbloat is, and how to mitigate it. Bufferbloat has basically been fixed for Ethernet, but for WiFi, there are still some things left to &nbsp;<br>be done. The problem is a bit different for WiFi, since there is a lot of overhead for each frame transmitted, so frames are usually aggregated. Another problem is that there is usually an internal queue in the WiFi firmware, which adds additional latency/buffering. &nbsp;<br>&nbsp;<br>Linaro has a small office in Lund, where you can find the following developers:&nbsp;

- Joakim Bech - Security Working Group &nbsp;
- Jens Wiklander - Security Working Group &nbsp;
- Niklas Cassel - Landing Team - Qualcomm &nbsp;
- Ulf Hansson - Power Management Working Group &nbsp;
- Linus Walleij (Assignee - Arm) - Kernel Working Group
