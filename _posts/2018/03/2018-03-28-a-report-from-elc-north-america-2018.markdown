---
author: paolo.valente
date: 2018-03-26 14:50:00.000
title: A report from ELC North America 2018
description: >-
    Participating in ELC North America 2018 has been productive and interesting, both for the main goal of my presentation and for hallway discussions.
categories:
  - blog
published: true
tags: 'HKG18, Arm, Linux, Kernel, Linaro, Open Source,Qualcomm, Datacentre, Mobile, Servers, Art, Computation, ELC, North America, HiKey, 96Boards, Pixel 2, ACRN'
keywords: 'HKG18, Arm, Linux, Kernel, Linaro, Open Source,Qualcomm, Datacentre, Mobile, Servers, Art, Computation, ELC, North America, HiKey, 96Boards, Pixel 2, ACRN'
image:
    featured: true
    path: /assets/images/blog/elc-image.jpg 
    name: elc-image.jpg 
layout: post
---
Participating in ELC North America 2018 has been productive and interesting, both for the main goal of my presentation and for hallway discussions.

## What I presented
My presentation was about the very high latencies that common tasks may suffer from, in embedded systems. Examples of the affected tasks are starting an application or reading the frames of a video. In the presentation I showed how severely these tasks can be impacted, in terms of latency, if, when they are executed, some other application or service happens to be doing I/O too. After this nasty problem, I showed a possible cure, the BFQ I/O scheduler. 

To show both the problems and the cure in a more practical and hopefully engaging way, I showed some short, recorded demos. These demos concerned two popular devices, a HiKey board and a Pixel 2, and some common tasks: starting the Facebook app or an X terminal, or playing a video.
<div class="col-sm-8 no-padding" markdown="1">
If you are curious, you can find these demos here:

Or, if you want to have an idea of the problem and of the solution even more quickly, here is a graph:

{% include image.html name="workload_elc.gif" alt="Workload Graph - ELC North America 2018"%}

</div>
<div class="col-sm-4" markdown="1">
{% include media.html media_url="https://youtu.be/ANfqNiJVoVE" %}
{% include media.html media_url="https://youtu.be/Ai3EPDpdsvY" %}
{% include media.html media_url="https://youtu.be/gyM_JJtIvP0" %}
</div>



The graph reports the start-up time of the xterm application (or an X in case of failure of the test, i.e., in case xterm did not start at ll within a 120-second timeout), on a HiKey running Debian, and as a function of:
The I/O workload that the board happens to be serving when xterm is started: the two workloads considered are, first, 10 files being read sequentially and, secondly, 5 files being read sequentially plus 5 files being written sequentially. This type of workloads is the nastiest one for latencies (for reasons that I do not report here, for brevity).
The I/O scheduler currently set to control the I/O with the storage device. All the four I/O schedulers currently available in the new blk-mq block layer are considered.

As can be seen ,with all schedulers but BFQ, the start-up time of xterm is strikingly high. With BFQ, the start-up time is close to the lowest possible value, namely the start-up time in case there is no other I/O.

## Presentation outcome
BFQ is much appreciated by the expert and average users that have discovered its benefits. But is still little known or completely unknown to many people in the kernel community. So, the main goal of this presentation was to make more people aware of BFQ and the problems BFQ solves. And it seems to have been successful: more than 50 people in the ballroom, and good questions both during and after the presentation (with also a short tail of offline questions). As an example, people asked about the coverage of the tests run so far, in terms of classes of storage device considered, and were glad to hear that virtually all types of storage has been tested. Someone even asked whether it would be possible to extend the latency benefits of BFQ to packet networks.

## Hallway discussions
The conference has been an occasion for interesting hallway discussions too. One of the most interesting discussions occurred with people of the Intel team that is working on ACRN, the just-launched, new open-source Intel hypervisor for embedded systems. ACRN is intended to sport, on one side, safety and real-time capabilities, and, on the other side, a much higher flexibility than current hypervisors with these capabilities. In particular, ACRN should enable guest OSes to share common hardware resources, expctedly with real-time guarantees on the latency of these shared accesses. Yet, after deepening a little bit the discussion with the Intel guys presenting ACRN, it came out that, at this very early stage, they did not even consider the issue of choosing appropriate schedulers for shared resources. Even worse, they seemed not to be aware that it is impossible even to just avoid starvation with shared resources without a good scheduler (consider the latency issues shown in my graph above). After pointing out these issues, ACRN team replied that they would of course be glad to receive contributions in this respect, on the public channels they have already setup.
