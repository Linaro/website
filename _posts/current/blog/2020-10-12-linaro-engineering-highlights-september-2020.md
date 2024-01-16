---
layout: post
title: Linaro Engineering Highlights - September 2020
description: September's Engineering Highlights include a brief summary of our
  recent Virtual Connect 2020 (LVC20) event. There is also a synopsis of the
  Android Micro Conference at Linux Plumbers. Our blog channel continues to be
  populated with the latest topics and this month we highlight four of the
  latest articles that have been published including OpenOCD at Linaro, Enabling
  UEFI Secure Boot on U-Boot, Force Idle When a CPU Is Overheating and BFQ saved
  me from thrashing.
date: 2020-10-12 12:29:25+00:00
image: /assets/images/content/binary-2910663_1920.jpg
tags:
  - Linaro Connect
  - Engineering Highlights
  - Linaro
  - Arm
  - Linux Kernel
  - Trusted Substrate
  - UEFI
  - CPU
  - Android
  - Open Source
  - HPC
category: blog
author: jon.burcham@linaro.org
---
## LVC20 Wrap Up

{% include image.html path="/assets/images/content/connect-2020-virtual-1-.jpg" class="small-inline left" alt="Linaro Virtual Connect 2020 logo" %}

In early 2020 we were looking forward to our twice annual Linaro Connect event and to welcoming the 400+ Linaro employees, assignees, members, partners and others in the open source community. Well, as you all know things in 2020 haven’t quite gone as planned but we are happy to be able to host Linaro Virtual Connect as a way to preserve some of the things we love most about Linaro Connect.

The shift to a virtual event has been a learning experience for everyone - events team, speakers, and attendees and we thank you for your patience and willingness to try something new. One benefit of a virtual event is that attendees and speakers who have not been able to attend Linaro Connect in the past have had the chance to participate. We are very happy to have so many of you invested in Linaro Connect and pleased that we are still able to deliver the important technical content.

With all the changes 2020 has brought, Linaro Connect continued to the tradition of quality sessions at the forefront of Arm ecosystem development. The three days were staggered at different start times to accommodate as many time zones as feasible. With a large percentage of sessions prerecorded, we were able to feature speakers from around the world.

There were an astounding 1,476 individual registrations, three times the in person Connect average. Live conversations started during the sessions and continued in the Slack channels afterwards. For a change of pace, Kassidy Holmes led participants through a 1 hour foundational yoga flow on Wednesday. On Thursday, Martin Jackson wrapped up the week with a lively acoustic set.

The most popular sessions (by registration counts) were.

* [Arm64 Linux Kernel Architecture Update](https://lvc20.sched.com/event-goers/adfde6a151331482f8037ffcb2440e56)
* [Trusted Firmware Project Update](https://lvc20.sched.com/event-goers/06e61cea5736945a61870dbdae81512a)
* [Arm Architecture 2020 Extensions](https://lvc20.sched.com/event-goers/fcda9a5f34400338debca060c1dd2032)
* [PSA Secure Partitions in OP-TEE](https://lvc20.sched.com/event-goers/12ccff0741601ae997bf4057c56ccec3)
* [Enable UEFI Secure Boot Using OP-TEE as a Secure Partition](https://lvc20.sched.com/event-goers/ee38e4c30840e698eb7d34578f1d5633)

## Tuesday September 22 Highlights

[LVC20-100K1 Opening Keynote by Li Gong](https://resources.linaro.org/en/resource/cCMFrV55UD3TydmKVGLkAK)

Li noted that Linaro ranked #5 in patches committed in the Linux kernel between 2007-2019, even though Linaro is only 10 years old. Li noted that new companies are starting up at a brisk pace. Companies are making their own chips, carrying differentiation from the system level to the chip level. The cost of chip design has significantly declined making custom chip design more affordable. This is a way to secure access to IP and supplies particularly in the face of on-going shortages and trade wars (see China/US). This of course has a direct impact on SoC vendors. In Li’s view, the Arm ecosystem is composed not only of hardware vendors but now major software vendors are playing a role. Linaro is enlarging its scope for these new companies and the software vendors with the idea of a franchise company. A franchise, in this context, is a sub ecosystem within the Arm ecosystem. An example is Google and Android. Linaro also has simplified its membership model to four tiers - Core, Club, Group and Project while continuing to focus on delivering value through its corps of maintainers and skilled developers. Finally, Linaro is opening up its projects and processing to a worldwide audience.

[LVC20-100K2 Why Standardisation on the Edge is Critical for Success by Peter Robinson](https://resources.linaro.org/en/resource/PTTosUJCmmdpRj3aCCWRUV)

While “Edge” means many things to many people, in order for Edge solutions to be a success, the key is using the Open Standards Data Center model.. Edge platforms face several challenges including environmental, scale and cost. Which will vary depending on which Edge “tier” that platform plays in. Open standards,as with the IBM PC and various networking standards (TCP, HTTP), lower barriers to entry and protect investments in time, money and knowledge. Enterprise standards are useful. In addition to knowledge reuse, you are not locked into a single platform. You can use the right hardware with the same base software stack using the same or similar security models and processes. Provisioning and on-boarding end devices need to be deployed with general knowledge at large scale (10 of thousands) across geographic regions. Using OCI container solutions provides consistency and scalability. Standardisation in edge computing giving manufacturers and consumers more, not less, choice.

[LVC20-113 Trusted Firmware Project Update](https://resources.linaro.org/en/resource/n68pJGdpXDBxkQwTj83vwk) by Matteo Carlini and Shebu Varghese Kuriakose

The Trusted Firmware (TF) project’s mission is to collaboratively build a secure reference software implementation for Arm processors. Highlights from the past year include the addition of Mbed TLS (donated by Arm) and Hafnium (donated by Google) to TF. TF for Cortex-A (TF-A) v2.3 and TF- Cortex-M (TF-M) v1.1 were both released. Renesas and NXP joined as members. Also a new Security center was set up to provide consistency on handing security vulnerabilities and incidents. A new maintainer process was put in place including how code reviews and the patch lifecycle are managed. Half of the TF maintainers are now from outside of Arm. The project also announced that Don Harbin (Linaro) will be the TF Community manager and that the [TF website](https://www.trustedfirmware.org/) has been significantly updated. Looking ahead, TF is expanding CI/Testing efforts with more platforms, static analysis and updated user guides. The community project will also be sponsoring workshops on TF-M and Mbed TLS.

A don’t miss session is [LVC20-104 On the Edge of the Real World. An Introduction](https://resources.linaro.org/en/resource/8nB5VYQHPqWWi6L7irAero) by Bruno Verachten. A lively talk from Bruno on how to build home IoT systems. The bottom line? There’s a lot of choice!

## Wednesday September 23 Highlights

<https://lvc20.sched.com/event/eVtb/lvc20-200k1-keynote-part-1-epi-the-european-approach-for-exascale-ages-the-road-toward-sovereignty> by Jean Marc Denis

The goal of the European Processor Initiative (EPI) is to become one of the leaders in High Performance Computing (HPC). EPI is a European backed initiative to develop a complete European designed high end microprocessor addressing the Super Computer and edge-HPC segments. This week, the EU committed €8 billion for this effort. Europe wants sovereign access to high performance, low power microprocessors from initial IP to delivered products and reduce the dependence on non-EU suppliers. SiPearl is the industrial partner of EPI operating as a commercial entity to benefit the EPI project and its members. The plan is to have a unified environment based on Arm Zeus cores by 2023. Different classes of accelerators will be used as part of the workflow engines. The main strength of Arm is IP going from device to the super computer. The presenter's view is that the NVidia/Arm alliance is a unique, fantastic combination of AI and GPU capabilities.

<https://lvc20.sched.com/event/eVtL/lvc20-200k2-keynote-part-2-developing-rhea-the-sipearl-european-high-performance-processor> by Craig Prunty

SiPearl's first target market for Rhea chips is HPC. Then in order Cloud, Edge (which is similar to Cloud requirements) then Automotive/Industrial Edge. Arm is attractive as it has a fully fledged ecosystem. Good hardware needs good software. The Arm ecosystem is self-sustaining. “Arm wins because it has an ecosystem”. Rhea is a hyperscale processor using the Arm Zeus core with coherent on chip network; There is a need to scale from chip to HPC to Edge applications. It is important to include high bandwidth memory with low power, low latency links using state of the art design and architecture. The plan is to make the EPI Common platform open standard in the future. Rhea is intended to be a General Purpose Processor balanced between performance and memory bandwidth. You will also need accelerators to provide optimization.

<https://lvc20.sched.com/event/dU7C/lvc20-200k-keynote-respect-r-e-s-p-e-c-t> by Carlo Piana

Carlo muses on the cultural basis for license compliance in the Open Source community. The pillar is respect, not fear of litigation or fines. Enforcement does not happen that often and companies are getting better at compliance. Carlo posits that compliance comes from social norms - the right thing to do. If rules are simple and straightforward as well as reasonable and self-evident, compliance will be nearly uniform. The standard Open Source licenses are reasonable and straightforward so it is easy to comply. In order to receive respect, you must give respect. People can pledge to a higher standard using such as Open Chain and SPDX in headers. One way to show respect is to take a bit of effort to ensure users of your code can easily find the licensing and restrictions in your code.

## Thursday September 24 Highlights

<https://lvc20.sched.com/event/dU87/lvc20-300k-lets-butcher-software-development-analytics-together-so-you-dont-have-to-when-it-really-counts> by Jose Manrique López de la Fuente

Jose started quoting William Edwards Deming “Without data, you are just a person with an opinion”. So what to do with data - “Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.” - Sun Tzu

Data must be matched with context knowledge. Looking at the Linaro Use Case, there is a huge amount of contributors affiliated to “Unknown” organizations. Why? Is data wrong?

Jose notes that every company is becoming a software company. And how a company interacts with the software ecosystem can help or hurt them. Success is understanding the (1) Legal aspects (2) People and (3) Engineering and the give and take between them. Jose recommends that you check out howtogroup.org and chaoss.community for wisdom. The best approach is to combine strategy, tactics and context knowledge to approach open source and generated analytics.

<https://lvc20.sched.com/event/dU8A/lvc20-301-in-conversation-with-todd-kjos-gki-v2>

This session was an Interview (by John Stultz) with Todd Kjos, Google, about the reason for, and challenges with, Generic Kernel Image (GKI) project. Fragmentation is in the way of keeping Android devices up-to-date with latest kernel patches (bugs, **security**, h/w, etc) - based on LTS kernel. Google is keeping Pixel devices up-to-date but few others are doing the same. A module kernel approach to allow Google to keep the kernel up-to-date and allow vendors to maintain their customizations. Tools keep track of ABI stable symbols (KMI - Kernel Module Interface - subset of the full kernel ABI). Google strongly recommends vendors to send their changes into the upstream kernel. Benefit of common use and less fragmentation (when differentiation isn’t actually required but has happened in the past). Therefore helping vendors to eliminate unnecessary technical debt.

- - -

With distinguished presenters from around the world and from some world class leading businesses, our Virtual Connect delivered 65 sessions. This content covers some of the groundbreaking topics of the moment and will be added to our already vast amount of resources that has been compiled over the last 10 years ago, when Linaro was first founded.

Although the current climate has curbed our celebrations for our anniversary, it has not curbed our achievements and we are proud of our successes in working together with our members and the community alike.

All videos and slides from presentations are available on our [Resource page](https://resources.linaro.org/en/tags/3599c8da-2a90-4dc9-964f-d69a5cf15379).

We look forward to our next in person event when we can enjoy some of our favorite aspects of Linaro Connect- team hacking time, Joe Bates’ morning fun facts, the “Ask Arm Anything” session, socializing after hours with colleagues and friends, Demo Friday, and everyone’s favorite: Dave Pigott’s puzzle.

Thank you for attending Linaro Virtual Connect 2020.

Until next time!

## Android Micro Conference at Linux Plumbers

By John Stultz, Senior Engineer, Linaro Consumer Group (LCG)

{% include image.html path="/assets/images/content/LCG.png" class="small-inline left" alt="Linaro Consumer Group logo" %} This year's Linux Plumbers conference, which is traditionally one of the most productive community conferences each year, was virtually held this year August 24th-28th. While different from previous years in format, it was still very productive and the Android Microconference was a highlight of the event for the Linaro Consumer Group

Once again this year, Linaro was involved in the planning and organizing of the Android Microconference, as well as participating by giving multiple talks and contributing to discussions.

Specifically:

* John Stultz along with the other panelists, Lina Iyer (a past Linaro assignee) from Qualcomm as well as Pete Zhang from NXP, provided some details on each of their experiences with the Generic Kernel Image (GKI) effort as part of the [GKI ecosystem experience panel](https://linuxplumbersconf.org/event/7/contributions/791/).
* Sumit Semwall gave a [summary of the upstreaming work both in progress, and todo that has come out of the GKI effort](https://linuxplumbersconf.org/event/7/contributions/793/), as well as a [summary of the state of running mainline kernels on AOSP](https://lpc.events/event/7/contributions/785/).
* John Stultz also gave a talk on both [the ION to DMA BUF Heaps transition, as well as potential optimizations to DMA BUF cache handling](https://linuxplumbersconf.org/event/7/contributions/788/).
* Sam Protsenko gave a talk on potential ways to [consolidate AOSP bootloader implementations](https://linuxplumbersconf.org/event/7/contributions/782/) to reduce effort required by vendors.

Outside of Linaro driven sessions, there were also a number of other very interesting talks and discussions.

The biggest theme to this year’s sessions was Google’s Generic Kernel Image efforts. Todd Kjos discussed Google’s [GKI efforts so far as well as details on their future plans](https://linuxplumbersconf.org/event/7/contributions/790/). Matthias Männich provided a talk on [GKI kABI enforcement tools](https://linuxplumbersconf.org/event/7/contributions/792/), which ensures future updates to the GKI doesn’t break existing vendor modules. Saravana Kannan covered his work on the [fw_devlink](https://lpc.events/event/7/contributions/787/) implementation which resolves issues around kernel module dependencies and load ordering. And of course, the aforementioned [GKI ecosystem panel](https://linuxplumbersconf.org/event/7/contributions/791/) and [GKI upstreaming](https://linuxplumbersconf.org/event/7/contributions/793/) talks.

There were also some very interesting talks covering virtualization in Android. Quentin Perret discussed some of Google’s plans for using [virtualization of secure environments](https://lpc.events/event/7/contributions/780/), in order to reduce the security risk of code running in the classic secure world to the larger system. And Enrico Granata and Alistair Delva also gave a talk about [efforts to extend the “Cuttlefish” virtualized reference Android device to be used with Android Auto](https://linuxplumbersconf.org/event/7/contributions/778/).

There were some interesting talks on recent work at Google on storage technologies, with Paul Lawrence’s talk in the new [incremental filesystem](https://lpc.events/event/7/contributions/784/). This is used to allow for run-time fetching of application resources, so that apps can be run immediately rather than having to wait for everything to be downloaded and installed first. Then Palmer Dabbelt discussed the forward looking [dm-user driver](https://linuxplumbersconf.org/event/7/contributions/783/), which basically provides a userspace controlled block device (similar to FUSE, but provides block device instead of a filesystem), which they hope to use as part of the Android Over-The-Air (OTA) update process, allowing them to have a android-specific copy-on-write format. This would allow them to have safe compressed snapshots that can be rolled back to should an update fail without taking up a ton of storage.

There was even a very interesting talk by Nagaravind Challakere from Microsoft on [improvements to SELinux sepolicy tooling](https://lpc.events/event/7/contributions/781/) so that it's easier for developers to create and analyze sepolicy rules to avoid unintentionally granting overly permissive rules to applications.

In the realm of graphics, in addition to the DMA BUF talk mentioned earlier, Hridya Valsaraju from Google discussed the [partial cache flushing feature for DMA BUFs](https://linuxplumbersconf.org/event/7/contributions/789/) found in the Android common tree, and what might be needed to get it upstream. Then Laurent Pinchart from Ideas on Board provided updates on integrating [libcamera into AOSP](https://lpc.events/event/7/contributions/786/). The libcamera camera HAL for Android has so far only been used in the context of ChromeOS, but the plan is to start integrating it further into AOSP as more vendors are interested in using it.

Connected to the libcamera discussion, Laurent Pinchart also led a discussion outlining the difficulties of [integrating external open source packages into AOSP](https://linuxplumbersconf.org/event/7/contributions/779/) both due to its restricted hermetic build environment, as well as attributes of the Soong build system like blueprint syntax which prevent backwards and forward compatibility between releases. This can put a burden on open source project maintainers.

With 16 sessions in four and a half hours, the Android Microconference covered a lot of ground. But there was still more details to discuss so two days later, and twelve hours offset to allow for folks in other timezones to attend, the [Android “Birds of a Feather” session](https://www.youtube.com/watch?v=8xHOBZrQLMQ) was held, where all the topics were revisited and the discussion carried on for another three and a half hours.

## OpenOCD at Linaro

By Omair Javaid, Linaro

{% include image.html path="/assets/images/content/micro-board.png" class="small-inline left" alt="Image of a micro board" %}

The [Open On-Chip Debugger (OpenOCD)](http://www.openocd.org/) is an open source software development tool which allows on-chip debugging and programming of applications via JTAG/SWD hardware interface. OpenOCD runs on a host computer along with a debugger like GDB. GDB communicates with OpenOCD over RSP protocol similar to debugging an application running on hardware. Read more [here](https://www.linaro.org/blog/open-on-chip-debugger-ocd-at-linaro/).

## Enabling UEFI Secure Boot on U-Boot

By Takahiro Akashi, Socionext {% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core engineering icon" %} U-Boot is a favorite boot loader for embedded devices, supporting a variety of architectures and platforms. In the last few years, a number of new UEFI interfaces have been brought into U-Boot, and the latest element added is Secure Boot. How does it work and what is it designed to protect you against?

**UEFI U-Boot**

UEFI (Unified Extensible Firmware Interface)\[1] is the specification developed by UEFI Forum to standardize interfaces between firmware and the OS’s, aiming to replace legacy BIOS on PC architecture.

Read more [here](https://www.linaro.org/blog/enabling-uefi-secure-boot-on-u-boot/).

## **Force Idle When a CPU Is Overheating**

By Daniel Lezcano, Linaro

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline right" alt="Core engineering icon" %}

Today’s CPUs are more and more powerful. More powerful in terms of compute capacity, but also in terms of heat creation.

In the embedded world, especially in the ARM ecosystem for the mobile platform, the Linux kernel has to cope with the high temperatures created by processor intensive tasks that can lead a CPU to overheat. The thermal framework is the Linux kernel subsystem in charge of handling these use cases.

The thermal framework and its components were briefly presented in a previous blog.

Read more [here](https://www.linaro.org/blog/force-idle-when-a-cpu-is-overheating/).

## BFQ saved me from thrashing

By Linus Walleij, Arm

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core engineering icon" %} Recently my less-used desktop computer became sluggish, and would randomly crash. It seemed to be fully occupied with disk activity and quickly became uninteractive to the point that not even ssh login would work. This is easily identified as thrashing: constantly swapping to disk because of short core memory.
When Linux runs out of memory, processes will of course be killed by the OOM (out of memory) killer, but if you have ample swap space, instead you will get thrashing. In this case the OOM killer would have been better: the system was so uninteractive that there is no point in trying to use swap. This was on a flash drive but still would just thrash. Read more [here](https://www.linaro.org/blog/bfq-saved-me-from-thrashing/).