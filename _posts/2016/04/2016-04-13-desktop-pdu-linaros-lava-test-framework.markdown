---
author: Linarocompany
comments: false
date: 2016-04-13 10:19:47+00:00
layout: post
link: https://www.linaro.org/blog/desktop-pdu-linaros-lava-test-framework/
slug: desktop-pdu-linaros-lava-test-framework
title: A desktop PDU for Linaro's LAVA test framework
wordpress_id: 10503
categories:
- Linaro Blog
---

[vc_row][vc_column][vc_video link="https://www.youtube.com/watch?v=ScPxjLY5h3I"][vc_column_text disable_pattern="true" align="left" margin_bottom="0"]In the run up to the last Linaro Connect, I put together a small system to illustrate Linaro's open source LAVA test deployment tool. LAVA is the Linaro Automated Validation Architecture, an automation system for deploying kernel, dtb and rootfs onto physical and virtual hardware for running tests. This video shows an example of LAVA deploying kernel builds from a laptop on to two targets - one a 32-bit Beaglebone and one 64-bit 96Boards Hikey. It then confirms that the images boot correctly.

The missing link in such a compact setup was some kind of small automated power controller (PDU) to reboot the targets under LAVA control. Normally PDUs are the large network-addressable rack power strips in server farms. They're not very desktop or wallet-friendly. Also in this video is a simple solution to get you going with off-the-shelf low-voltage switching parts and some pre-existing code for the embedded microcontroller.

By: Bill Fletcher[/vc_column_text][/vc_column][/vc_row]
