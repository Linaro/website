---
layout: post
title: 'Linaro Engineering Highlights: June 2020'
description: "The June 2020 Engineering Highlights this month features the Linux Kernel
  5.7 release statistics where Linaro and its engineers continue to rank in the top
  for multiple categories. We are also excited to announce a free webinar on July
  21 reviewing Arm server profiling and debugging tools. We have a review of additional
  training available from Member Services. \n\nConference reports this month are a
  detailed summary of the OSPM (Power Management) Summit and EEMBC MCUboot benchmarking
  presentation. Additional topics include a summary of the LITE Engineering Sprint,
  an introduction to VirtIO, the Micro TVM project and news on dma-buf heaps."
date: 2020-07-13 12:00:00+00:00
image: /assets/images/content/chip_background_under_2mb.jpg
tags:
- Engineering Highlights
- Linaro
- Arm
- Linux Kernel
- OSPM
- Power Management
- VirtIO
category: blog
author: jon.burcham@linaro.org
---

#### **Linux Kernel v5.7 Development Statistics**

By Joe Bates and Mark Orvek

The latest Linux kernel release - version 5.7 - has once again seen a leadership contribution of upstreaming from across Linaro and as part of that,{% include image.html path="/assets/images/content/10-year-graphic-horizonal1.png" class="small-inline left" alt="Linaro 10th Anniversary logo" %} a number of great Linaro contributors stand out at the top of the [LWN](https://lwn.net/Articles/821813/) lists.

Alex Elder (Qualcomm Landing Team) is the #2 most active contributing engineer to 5.7 measured “by Lines Changed” and Manni Sadhasivam (Developer Services) is #10 on that list. Linus Wallej (Arm Assignee in KWG) and Ard Biesheuvel (Arm Member Engineer) are on the top 20 list “by Changesets”.

{% include image.html path="/assets/images/content/most-active-5.7-developers.png" alt="most active 5.7 developers" %} As a company, Linaro is the #3 contributor by lines changed and #8 by changesets.

{% include image.html path="/assets/images/content/most-active-5.7-employers.png" alt="most active 5.7 employers" %} Shawn Guo (Developer Services) is the tenth (#10) busiest kernel maintainer followed by Vinod Koul (Qualcomm Landing Team) at #16 based on the number accepted upstream submissions.

{% include image.html path="/assets/images/content/non-author-signoffs-in-5.7.png" alt="non-author signoffs in 5.7" %} Also based on the above list, Linaro is the #2 employer of maintainers based on the number of accepted 5.7 kernel upstream submissions.

As noted in LWN, there are over 200 companies that contributed to this kernel release but half of all the patches go through maintainers from just 5 companies: Red Hat, Linaro, Intel, Linux Foundation and Google. We are in a list of prominent companies thanks to the hard work of the maintainers working in, and with, Linaro.

On behalf of the executive team we congratulate and sincerely thank Alex, Manni, Shawn, Vinod, Linus, Ard and all the Linaro engineers who are 5.7 upstream contributors - Linaro may be small in size but collectively we are very significant contributors to the Linux Kernel community. Well done!

#### **Upcoming Webinar: “Performance Profiling and Debugging Tools for Server-class Applications”**

By Kristine Dill, Linaro Events Manager {% include image.html path="/assets/images/content/event-banner.jpg" class="small-inline left" alt="Performance Profiling and Debugging tools webinar" %}

During this webinar, we will introduce Arm Forge, a professional toolkit for debugging and profiling on Linux Arm servers. We will give an overview of the tools' features and demonstrate their capabilities for sequential and parallel programming."

This free webinar is open to all. The July 21 session will be held at 16:00 CEST in English and will be presented by speaker Florent Leabeau from Arm. The August 4 session will be held at 10:00 CST in Mandarin and will be presented by speaker Leo Yan from Linaro.

[Registration](https://www.eventbrite.co.uk/e/performance-profiling-and-debugging-tools-for-server-class-applications-tickets-110120419138) is free. Future Linaro sponsored events can be found on the [Linaro Events](https://www.linaro.org/events/) page.

#### **Power Management and Scheduling in the Linux Kernel (OSPM) Summit**

Vincent Guittot (KWG) {% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}

##### **Introduction**

The OSPM summit is a significant event for the Linux kernel world. Significant to be covered by Jonathan Corbet publisher of [LWN](https://lwn.net/). Jonathan wrote an article “[Imbalance Detection and Fairness in CPU Scheduler](https://lwn.net/Articles/821123/)” for the May 22, 2020 issue highlighting the work Vincent Guittot is driving within the KWG and the Linux community. “The kernel's CPU scheduler is good at distributing tasks across a multiprocessor system, but does it do so fairly?If some tasks get a lot more CPU time than others, the result is likely to be unhappy users. Vincent Guittot ran a session at the 2020 [Power Management and Scheduling in the Linux Kernel summit](http://retis.sssup.it/ospm-summit/) (OSPM) looking into this issue, with a focus on detecting load imbalances between CPUs and what to do with a workload that cannot be balanced.”

Below, Vincent summarizes the rest of the sessions at the OSPM summit.

{% include image.html path="/assets/images/content/linux-kernel-security.png" class="small-inline left" alt="Linux Kernel icon" %}

##### **Core scheduling**

The 1st half day was dedicated to the core scheduling feature and how to make it merged. The core scheduling aims to ensure that only threads belonging to the same group will run on the core with hyperthreading at the same time. There are several use cases for this feature like security and isolation between VMs running on the same host, reducing cache pressure on a core or minimizing disturbance to RT threads. Several problems like the fairness and selecting the running tasks for the CPU of a core still needs to be solved.

##### **Latency nice**

This is another big feature that is under discussion on the mailing list for more than a year now. The goal is to set a responsiveness level to a task. This latency nice value can then be used, mainly during the wake up but not only, to select a CPU, idle or not, and decide how fast it should preempt the current running one. Lots of features want to be added under this new task priority but they are sometimes contradictory; Whereas some want to skip the search of idle CPU for latency sensitive tasks on large systems, others want to select an idle CPU for latency sensitive tasks on embedded systems. Discussion still needs to happen to list the different use cases that want to be included in the feature and what the task and cgroup interface should look like.

##### **Overloaded System and Fairness**

This session started to discuss the detection of overloaded groups of CPUs and how to improve this detection, which is used to migrate tasks across the system. The other topic was the problem of fairness between tasks when the system can't be balanced. There are some situations where tasks with the same priority will not have the same amount of running time in a significant ratio: unitary tests have shown up to 40% difference. This unfairness is a problem for the task which gets less running time and is delayed in its completion. During the talk, Peter Z raised that this unfairness problem can impact on the performance of HPC systems. A HPC system tries to split jobs into small chunks of work that run simultaneously on all CPUs and it waits for the last job to finish before starting the next step. When the system is fully dedicated to one application, there is no problem but HPC systems are usually a bit overcommitted to optimize its usage and to make sure to use all resources all the time. In the latter case, we can face the unfairness problem and one chunk might have less running time than others which results in more time to complete and which finally decreases the overall performance.

#### **Working on VirtIO**

By Alex Bennée {% include image.html path="/assets/images/content/virtio.png" alt="Virtio diagram" %}

Linaro recently published an [overview of VirtIO work](https://www.linaro.org/blog/virtio-work/) written by Alex Bennée. Alex reviews the early history of virtualization, discusses the different types of virtualization and what the active collaborative work is. Standardization and upstreaming are key parts of this effort.

#### **June LITE Sprint**

By Kumar Gala, LITE Technical Lead and Vicky Janicki, LITE Engineering Director

{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="Lite icon" %}Utilizing conferencing capabilities, the LITE team met the week of June 15th to focus on CI/Testing and automation. The goals included updating to the latest version of tools including LAVA, running a basic series of tests on their development systems and discussing and planning the next steps. The LITE team has been working closely with the LAVA and Lab teams over the past year to solve the problem of consistently running tests for MCUs (Cortex-M devices). Using the LAVA framework, the LAVA and Lab teams invented a Docker solution to cope with the many boards and environments that the LITE team is using. The vision is to have a framework or environment that is reliable and consistent while providing easy paths to test new software projects and tools in the future.

Under the CI umbrella, David Brown (Linaro) worked to update MCUboot to use Github’s CI in place of Travis CI and then add to the Zephyr integration testing. Ed Mooring (Xilinx) worked on extracting the toolflow from Xilinx internal build system for building a test environment for OpenAMP on Cortex-R5 and QEMU. Future plans include completing the MCUboot CI, successfully building and running OpenAMP using tools based outside Xilinx and starting a TF-M CI for LITE.

{% include image.html path="/assets/images/content/lite-zephyr-upstream.png" alt="Zephyr build information" %} The team also took a deep look into how they are using LAVA and the reporting application SQUAD. Dan Rue and Daniel Diaz from the LKFT team and Remi Duraffort from the LAVA project reviewed how LKFT uses LAVA and SQUAD and walked through some of the design decisions. They then met with the Mbed Green Tea team from Arm, the LAVA team and the Zephyr Testing Working Group Team. The result of the meeting was to start prototyping the LAVA Docker Test Action as a means to encapsulate outside testing tools such as Zephyr sanitycheck or Mbed’s GreenTea. A key requirement is that the testing flow and tools should be the same for a developer at their desk as for the LAB CI/Test environment.

The team also looked at incorporating Trusted Firmware for Cortex-M (TF-M) and uTVM (microTVM compiler) testing in the future.

#### **EEMBC MCUboot Benchmark Presentation**

By David Brown, Senior Engineer, LITE/SWG

{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="Lite icon" %} The Embedded Microprocessor Benchmark Consortium ([EEMBC](https://www.eembc.org/)) "develops performance benchmarks for the hardware and software used in autonomous driving, mobile imaging, the Internet of Things, mobile devices, and many other applications.” They reached out to David and requested a brief presentation on any benchmarking results for cryptographic operations used within MCUboot. David developed a small benchmarking framework to enable performance measurement of Zephyr applications, and used this to produce the numbers in this presentation. The presentation covered an overview of MCUboot, the cryptographic operations and algorithms available, the benchmark results, and some conclusions of the various trade-offs. There were some questions concerning hardware acceleration. As MCUboot does not support hardware acceleration on most platforms, this would be a task for future work.

#### **Dma-buf heaps - empowering the move away from ION**

By Tom Gall, Engineering Director LCG and AI/ML and John Stultz, Senior Engineer

{% include image.html path="/assets/images/content/LCG.png" class="small-inline left" alt="LCG icon" %}This month two articles were published on LWN about DMA-BUF heaps. The interface was added to the 5.6 kernel officially which culminates a long effort to upstream the ION functionality found in Android kernels. The upstream DMA-BUF Heaps interface is strongly influenced by ION, but to go upstream, it needs to be more clearly defined, so transitioning vendor heaps from ION may take some effort. Further outside of the interface, we need to ensure vendor heaps behave consistently, while still providing the performance required.

If you have used ION in the past or even make use of it now, you’re going to want to read these two articles

- <https://lwn.net/Articles/822521/>
- [https://lwn.net/Articles/822052/](https://lwn.net/Articles/822521/)

The first looks at the background of ION and DMA-BUF as well as a number of important concepts in their respective designs, particularly around cache handling and performance. The second article completes the discussion clarifying some of the existing problems and the need for consistent cache handling behavior for DMA-BUFs and DMA-BUF exporters (without sacrificing performance). The article ends with a discussion on potential improvements, hoping to stir further collaboration in the community.

#### **Micro TVM - a new addition to the AI Project**

By Tom Gall, Engineering Director LCG and AI/ML

{% include image.html path="/assets/images/content/ai.png" class="small-inline left" alt="Artificial Intelligence icon" %}This month the LITE-SC officially added Micro TVM as part of LITE. What is MicroTVM and why is this something Linaro and its Members should be interested in?

{% include image.html path="/assets/images/content/tvm-explanation.png" alt="TVM explanation chart" %} [TVM](https://tvm.apache.org/) is an open source (Apache v2 licensed) machine learning (ML) agnostic compiler framework. It consumes a model, converting into one of several intermediate representations (IRs) (Relay IR being the current state of the art), performs optimization passes and results in a targeted binary for the resources you might have on your hardware. On Arm hardware, CPU, GPU and even NPUs are appropriate targets. In addition the compiler framework has a feature called AutoTVM which is able to take snippets of your model, run on your hardware and test various performance driven approaches in order to optimize the output.

Last year a proof of concept targeting microcontroller hardware was started called Micro TVM (or written as uTVM). Through a series of discussions at the AI project engineering sync meetings, it was decided to recommend an effort to the membership to evolve this proof of concept to a solid foundation on which Linaro members would be able to base their products.

The membership put together a list of features and suggestions for how Micro TVM needs to evolve in order to be effective. From this material, it’s been used to influence discussion out in the community to set the direction of the project.

One of the most positive aspects of the project is that it isn’t dominated by a single company. By banding together, we essentially become the majority of the community pushing MicroTVM along in the strategic direction we need to go.

#### **Education at Linaro: Advanced Kernel Debugging and the Linaro Summer 2020 Training Catalogue - Daniel Thompson**

By Daniel Thompson, Linaro Support and Solutions Engineering

{% include image.html path="/assets/images/content/training-graphic.png" alt="Artificial Intelligence icon" %}

> _“Kernel developers have way more tools at their disposal than I anticipated.” - Survey comment_

Every Tuesday and Thursday in May, Linaro ran Advanced Kernel Debug training for our core, club and group members. This course is fast paced and technical, covering a wide range of kernel-specific debug tools and techniques that can be used to debug complex system level problems on Linux systems.

At Linaro, we work very hard to ensure our training is unrelentingly pragmatic and, when we cover important background material, I expect our trainers to be able to explain why we are doing so. As a result, we strongly favour practical experience over theory and we want to make it easy for our trainees to be able to integrate what they learn from our courses into their regular workflow.

> _"Very practical, good focus on practical tools and the different level of expertise needed to use different tools. I was immediately able to use the ply tool on a real problem, so the time investment in the course paid off within hours!"_ (ply is a lightweight dynamic tracing tool based on BPF)

Given the goals and standards we have set for our training, I was especially delighted by this comment, found among the overwhelmingly positive feedback from the course, which sums up why I got into training in the first place.

For those who missed this course, and for trainees who want to revisit specific points, links to the slides and videos are still available.

Actually, whilst we are talking about the videos...

Recorded training, whilst useful, is no substitute for live training where trainees can interact with the presenter. Linaro courses are available for private delivery to all Members and, for core and club members, there is no additional charge. In normal times, the courses can be delivered face-to-face, but currently the face-to-face programme is suspended. Thankfully the vast majority of our training catalogue was designed with remote delivery in mind allowing us to keep our training programme running during the current world situation.

We recently published the Linaro Summer 2020 Training Catalogue which, in addition to some specialized seminars, includes full courses covering: Kernel Development, Debugging and Upstreaming, Trusted Firmware-A, OpenEmbedded/Yocto, LAVA, Energy Aware Scheduling, OP-TEE and KVM internals.

If you would like a copy of the Summer 2020 Linaro training catalogue or access to the Advanced Kernel Debugging videos then just ask your Linaro Technical Liaison or, if you prefer, e-mail me directly at [support@linaro.org](mailto:support@linaro.org).