---
author: linaro
categories:
- blog
date: 2011-08-05 15:04:54
description: Linaro Matt Waddel shares his experience running desktop distributions
  with Linaro software on development boards, for extended durations, and at a public
  event
layout: post
link: /blog/hardware-update/low-cost-boards-displays/
slug: low-cost-boards-displays
tags:
- Hardware
- board
- desktop
- Linaro
title: Using ARM low cost boards for displays
---

{% include image.html name="disp.jpg" alt="DISP" class="small-inline right" %}

During the Linaro Connect Q3.11 event in Cambridge, UK, I was asked to put together a system to display the schedule/conference info and IRC discussions on screens throughout the venue.

For the hardware portion of this project I bought thick Plexiglas at Home Depot and cut it fit the board. Then mounted the hardware between 2 sheets of Plexiglas. The sheets were cut big enough to include an HDMI->VGA converter since the projectors only allowed VGA input.

I used 2 Freescale Quickstart boards, 2 Panda Boards and 1 BeagleXM.

For the software I used Linaro releases of ALIP and Ubuntu Desktop.

Here are the lessons that I learned:

  1. It's difficult to support the different hardware and software. Now that I know which board and which release
works best I would just support that one system and put all my effort into making that system work really well. A
particularly vexing problem I encountered was Firefox would lock up without any user input. So I had to reset the
Firefox systems on a regular basis.


  2. Try to test on actual hardware. There are a lot of things that can go wrong between the hardware you have at home
and the hardware you actually use, in particular in a public event!


  3. Be ready for last minute requests.