---
author: alan.bennett
categories:
- blog
date: 2013-08-31 16:00:09
description: Recap of the weekly LAVA team meeting and summary of the LIVE demos
keywords: Linaro, Linux, LAVA, opensource, multi-node, kvm
layout: post
link: /blog/lava-blog/29-aug-2013-lava-team-meeting-live-demos/
slug: 29-aug-2013-lava-team-meeting-live-demos
tags:
- LAVA
- arm
- lava
- Linaro
- Linux
- Opensource
title: 29 Aug 2013 - LAVA Team meeting - LIVE Demos
wordpress_id: 2985
---

In this week's LAVA meeting, the LAVA team demonstrates how new lava tool improvements simplify test creation, a new PDU daemon that can prepare our LAB PDUs for the simultaneous demands multi-node introduces, boot-testing tip x86_64 kernels in LAVA multinode and finishes with a full team demo that spawns 13 interactive hack sessions for the LAVA team during the meeting.

Review the summary below and check it out on Youtube:
http://www.youtube.com/watch?v=LSBWDuBUP0I


## New Features in lava-tool by Antonio Terceiro

  1. lava testdef new demo.yaml
    1. Will create a basic test definition in demo.yaml. User can edit it to add the specifics of his/her test suite.

  2. lava testdef run demo.yaml
  
    1. Will run the test definifion on demo.yaml agains a locally configured device. After entering the desired parameters, such as device type and image, the user can choose one of the local devices, and have that test definition run on the device. The job will start and the user can watch the run directly in the shell session.

  3. lava testdef submit demo.yaml
  
    1. Will submit the test definition in demo.yaml to a chosen LAVA server.

## LAVA PDU Daemon by Matt Hart

In LAVA, we use standard Power Distribution Units (PDUs) to remotely apply power to a target device.  The problem is that multi-node can fire off many simultaneous PDU requests (turn all machines on (or off) at the same time.)  However, not all PDUs function well in this type of an environment.  Perhaps they are expected to be used much less frequently.

Matt describes a new LAVA utility, the PDU Daemon, that provides a simple socket-daemon that is used to combine accesses to the PDUs within the LAVA lab to make sure the messages are processed sequentially in to ease the burden placed on the PDU.

- The code can be retrieved from [https://git.linaro.org/gitweb?p=people/matthew.hart/lavapdu.git;a=summary]()https://git.linaro.org/gitweb?p=people/matthew.hart/lavapdu.git;a=summary

## Boot testing tip kernels on x86_64 KVMs


In addition to demonstrating the TIP kernel booting on a KVM x86_64 device, Tyler setup a great demo that combined many of the best recent features of LAVA.  The demo consisted of a single multi-node job that was written to run a set of tests across 13 devices, (using beaglebone black and KVM instances in the LAVA lab).  The test that these devices ran was to boot a tip kernel, launch an SSH service on the target, and allow the users to automatically connect into the test devices via standard SSH connections.


## Section numbers added to Complete Log view, Milosz Wasilewski


Though there was no demo of this last feature in today's meeting, we wanted to highlight an upstream improvement from Linaro’s QA Test Lead, Milosz Wasilewski.  We added this contribution and now the “Complete Log” view contains Section & Line Numbers that can help a user navigate a LAVA log file, during and after a job executes.  With this feature, it is easier to navigate through long multi-part LAVA test logs, identify a specific location and share that location using a direct URL.


## Multi-node testing in LAVA


LAVA multi-node has almost completed the final verification and we are looking forward to releasing the  also in the final production verification testing to complete ulti-node in the production instance manifest in the very near future.  Make sure to look out for the release announcement in the near future.