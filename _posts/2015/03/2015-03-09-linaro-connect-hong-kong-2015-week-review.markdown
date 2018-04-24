---
author: linaro
categories:
- blog
date: 2015-03-09 19:14:22
description: Overview of the week of Linaro Connect Hong Kong 2015 including keynotes,
  theme days, demos and awards that took place during the week.
excerpt: Linaro Connect Hong Kong 2015 (HKG15), which took place February 9-13, 2015
  in Hong Kong, China was an amazing week with over 400 attendees and many keynotes,
  sessions and demos for attendees to enjoy.
layout: post
link: /blog/linaro-connect-hong-kong-2015-week-review/
slug: linaro-connect-hong-kong-2015-week-review
tags:
- connect
- Connect Events
- Linaro
- Linaro Connect
- Linux
- Linux on ARM
- Open Source
title: Linaro Connect Hong Kong 2015- week in review
wordpress_id: 8250
---

{% include image.html name="hkg15-group-photo.jpg" alt="Hong Kong Group Photo 2015" %}

Linaro Connect Hong Kong 2015 (HKG15), which took place February 9-13, 2015 in Hong Kong, China was an amazing week with over 400 attendees and many keynotes, sessions and demos for attendees to enjoy. To see a list of all the available materials from all the sessions held during the week please [click here](/blog/linaro-connect-hong-kong-2015-content-now-available/).

The show kicked off Monday February 9th in Hong Kong to many announcements by Linaro. George Grey, Linaro’s CEO, gave the opening keynote and welcomed attendees to the event. He then announced the [96Boards initiative ](/news/linaro-announces-96boards-initiative-accelerate-arm-software-development/)to accelerate ARM software development. [96Boards](https://www.96boards.org/) is an open hardware specification for ARM 32-bit and 64-bit developer boards, and a Community Program for software delivery to developers, makers and OEMs. Linaro also announced on Monday two founding members of the newly formed Linaro Community Boards Group (LCG), which are [Actions Technology](/news/linaro-announces-actions-technology-founding-member-linaro-community-boards-group/) and [Marvell](/news/linaro-announces-marvell-founding-member-linaro-community-boards-group/). George, then went on to give an overview of that status of Linaro and it’s many projects, including a quick hands on demo with a Project Ara phone. Check out the [keynote video](https://www.youtube.com/watch?v=6aAFNCUUVj4) and to download the keynote slides [click here](http://www.slideshare.net/linaroorg/hkg15-george-grey-keynote).

**The rest of the week included:**

  * Dejan Milojicic, Senior Researcher and Manager, HP Labs. Dejan gave a keynote titled: “The Machine: A new kind of computer”
  * A hands-on lightning talk on ARM Servers that gave attendees information on the latest updates. Jon Masters, Chief ARM Architect at Red Hat conducted the talks. [Watch video](https://www.youtube.com/watch?feature=player_embedded&v=GCVcJWqoX2A)
  * Bob Monkman, Enterprise Segment Marketing Manager at ARM. Bob’s keynote topic was “The impact of ARM in the next generation cloud and communication network infrastructure”. [Watch video](https://www.youtube.com/watch?v=U5GQ_9jCOZ8)
  * Greg Kroah-Hartman, Fellow at Linux Foundation. Greg’s keynote topic was “An introduction to the Greybus Project”. [Watch video](http://youtu.be/U5GQ_9jCOZ8?t=25m49s)
  * Warren Rehman, Android Partner Engineering Manager at Google. Warren gave an overview of what Android TV is in context of Android. [Watch video](https://www.youtube.com/watch?v=DJfiibQBWlI)
  * Greg Kroah-Hartman, Fellow at Linux Foundation. Greg’s keynote topic was “How is Linaro doing” a follow-up from his talk at Linaro Connect Asia in 2013. [Watch video](https://www.youtube.com/watch?v=tE3804cOtXA)

We continued the Linaro Theme days that we had introduced at Linaro Connect USA 2014. Theme days are keynotes and sessions focused around the Linaro Segment Groups: LEG – Enterprise Server, LNG – Networking, LHG – Digital Home and LMG – Mobile. For Linaro Connect Hong Kong we added a new Theme day for the Engineering Community that took place on Monday.

### **Monday - Community**

There were many great sessions held on Monday that focused on the Linaro Community, including two sessions that were focused on the new 96Boards initiative where both hardware and software were discussed.

### **Tuesday - Linaro Enterprise Group (LEG)**

The Linaro Enterprise Group (LEG) held many sessions throughout the week with several held on the Tuesday of the event. Below is a summary of each of the LEG sessions during Linaro Connect.

**Sessions Summaries:**

**Title: HKG15-107: ACPI Power Management on ARM64 Servers**
This session was to discuss the status of CPPC with runtime PM and discussion on idle PM with ACPI. Utilization on servers depends on season, time of the day, etc. not always at 100% maybe often at 25-30%. This is different from mobile phones where it is in idle most of the time. CPPC collaborative processor performance control is described in ACPI 5.1. It is the preferred method for aarch64 over PSS, which stands for performance supported states. CPPC has feedback regs which provide the value of the attained performance level for the kernel to read back. The kernel can then compare the desired performance level and the attained one and evaluate the status of the CPU, etc.

**Title: HKG15-200: OpenJDK under the hood** 
This session was very detailed and served actually as a training course on OpenJDK. The presenter described the secret command line options to start java. Demonstrated how java code is compiled into byte codes and how these make it into assembler with the template interpreter. He also described optimisations for ARMv8-A


**Title: HKG15-204: OpenStack: 3rd party testing and performance benchmarking**
This session described OpenStack on ARMv8, with a focus on Tempest and Rally. Tempest is used to validate each and every commit submitted to the OpenStack project, currently being ran on x86 only by the OpenStack maintainers. They have created the 3rd party CI testing approach to start commit regression testing on other architectures, monitor the stability and pass/fail rate on those and eventually accept them as official platforms later. Described the status, pass/failures and next steps to build the 3rd party testing on ARM based on an HP Moonshot chassis with about 20 APM X-Gene cartridges. Rally is a flexible framework to run VM-related scenarii with OpenStack, basically creating, booting and then shutting down VM's via OpenStack API's thousands of times in a row and with tens/hundreds of VM's in parallel all while benchmarking the min/avg/max time for each operation. Rally reports the results with nice statistics and charts. The presenter then explained the difference between Rally and Tempest and how they complement.

**Title: HKG15-208: ACPI: State of the Server**
ACPI Core discussion on the state of the server. This was a working session that reviewed the status of several areas.


**Title: HKG15-401 Ceph and Software Defined Storage on ARM servers**
The session discussed running Ceph in the colocation, ongoing optimizations. Ceph is a distributed storage solution which can scale to a very large number of nodes. It is characterised by the lack of a single point of failure. The presentation covered a lightning introduction on the Ceph architecture and then described the set up in the Linaro colocation based on multiple APM X-Gene and AMD Seattle platforms.

### **Wednesday – Linaro Networking Group (LNG) and Linaro Mobile Group (LMG)**

Wednesday was a very busy day at Linaro Connect with both the LNG and LMG groups holding many sessions focused on their segments. Below is a summary of each group’s sessions held during the week.

**Linaro Networking Group (LNG)**

**Title: HKG15-110: ODP Project Update**
OpenDataPlane is an open source project sponsored by LNG that provides a common API framework across multiple implementations, allowing data plane applications to be easily portable across SoC platforms while still taking automatic advantage of vendor-optimized hardware acceleration and offload. Bill Fischofer presented an overview of the OpenDataPlane project and its evolution leading to the delivery of ODP v1.0 this quarter. The various API groups and concepts supported by ODP were illustrated and the implementations of these APIs on various platforms and architectures was discussed. Also discussed was the testing and validation tools used to ensure that multiple implementations of the ODP APIs all present equivalent functionality to ODP applications.

**Title: HKG15-301: OVS on ODP: Implementation Overview**
A Comparison of OVS implemented via ODP & vendor SDKs was discussed. Contrasting ODP linux-generic with the native Intel DPDK SDK and ODP implemented using the DPDK SDK on X86. Additionally comparing ODP linux-generic with ODP implemented using the Texas Instruments SDK on A15 ARM


**Title: HKG15-305: Real Time processing comparing the RT patch vs Core isolation**
The RT patchset has come to EoL and an alternative to meet the determinism and latency requirements for networking workloads is required. This session compared the two solutions and the impacts migrating to Core isolation may impose. Discussion was focused on comparing RT Linux vs Core isolation. Many kernel experts took part in the discussion. It was confirmed that once in ‘full tickless’ mode on a given CPU core, any system call will break the core out of ‘full tickless’ -but- scheduler domain and cpuset configuration will still prevent other tasks from being migrated to that core, and once the number of runnable tasks on the core decreases to a single runnable task, the core will automatically re-enter ‘full tickless’ operation. This means an application running on a ‘full tickless’ core could make system calls when needed if the application requirements will tolerate the resulting scheduling latency. Thermal management is normally handled through core migration, it is disabled for isolated CPUs, so only frequency manipulation or sleep states are applicable. So careful consideration of the thermal management capabilities of the underlying hardware platform is advisable before full tickless operation.


**Title: HKG15-209: ODP User experience** 
This session held an open discussion covering the various aspects of ODP development. Users as well as providers participated the discussion.

**Linaro Mobile Group (LMG)**

**Title: HKG15-102: LMG Lightning Talks** 
The session covered the current status and performance measurements for building AOSP with Clang 3.6. 32 bit built with clang lags as compared the same code built with gcc. 64 bit seems to be better built with clang as compared to gcc. Overall results are fairly close unless you look at the time it takes to actually build the code in which case clang is substantially better. Also discussed was an initial analysis of Android memory use. Why can iOS run in 1 gig but Android can’t? As well as the teams current efforts involving the Android kernel upstreaming project.

**Title: Introducing Aster - a tool for remote GUI testing on Android** 
The session discussed how there are many tools that can be used to do remote GUI control for Android platform, but they have limitations like needing device at hand, or needing to install extras into the device, or not providing sufficient authentication methods for remote access, etc. The presentation showed how to use Aster to work around these problems, how to add your own features into it, and how to use it as a record/replay tools and do GUI smoke/stability tests for the Android platform. A demo was also given.

**Title: Build system modifications to ease working with other Android projects**
Bero presented his build system improvements that makes it substantially easier to pull in changes, cherry pick and with local manifests make it a lot easier to put together a “test” image. It makes it much easier to interact and collaborate from various projects working on AOSP.


**Title: Kick-start your 64-bit AOSP build engines**
The session covered starting Lollipop, Android supports building binaries for two target CPU architectures, 64bit and 32bit, in the same build (known as Multilib). For Multilib builds Lollipop introduced a new set of build variables which Android platform developers should be aware of. A brief introduction of Multilib builds, supported build configurations, and how to do a Multilib build was presented.

### **Thursday - Linaro Digital Home Group (LHG)**

Thursday Linaro Digital Home Group took center stage starting with the keynote in the morning and continuing throughout the day with many sessions. Also on Thursday the Linaro Networking Group (LNG) once again had an open demonstration day that was available to both the public and attendees of the event. LNG showed many demos of things they have been working on in [Open Data Plane (ODP)](http://www.opendataplane.org/), featuring 4 demos from Cisco and Huawei. To learn more about each demo that was shown you can go to the [news section of the ODP website](http://www.opendataplane.org/blog/) and there is a post for each demo giving all the details.

**Title: HKG15-403: Chromium Blink on Wayland with HW accelerated video playback using Gstreamer**
The session discussed the Linaro and STM implementation of an integration layer between Chromium and Wayland/Gstreamer. The solution allows HW accelerated video playback, high performance GPU accelerated HTML5 rendering. The approach uses hole punching mechanism to compose the UI layer on the top of the video content. The Gstreamer Chromium plugin is implemented trough the Pepper API. The presentation provided implementation details on the Wayland/Chromium/Gstreamer integration.

**Title: HKG15-407: EME implementation in Chromium: Linaro Clear Key**
An example of a key system from a Clear Key point of view was presented. Linaro implemented a sample CDM plugin for Chromium capable to exercise the EME implementation of the browser. The presentation gave an insight to the EME/CDM implementation in Chromium and the guidelines to integrating various DRM systems. The team presented call flows with example classes, experiences learned, and example of things to watch out for.

**Title: HKG15-411: Browser Testing Framework for LHG**
The purpose of this talk was to provide the audience with an introduction to the testing framework used in Web browser performance testing as implemented by LHG. The browser test suite is used to compare browser performance and compliance by using a series of benchmarks in key test categories. Sample browser results for both Android and RDK were presented.

**Title: HKG15-103: OpenEmbedded BoF**
In this BoF (birds of a feather) session the team welcomed general questions about OE in general and the meta-linaro layer. The discussion focused on Linaro’s community involvement and asked if Linaro should be doing more to be a better participant in supporting its layer (e.g. a dedicated meta-linaro mailing list, perhaps a wiki, etc)? Are we doing enough? [Compare with: meta-intel, meta-mentor, meta-gumstix/meta-gumstix-community, meta-xilinx/meta-xlinux-community.]

**HKG15-506: Comcast - Lessons learned from migrating the RDK code base to the OpenEmbedded/Yocto build framework**
This session covered Comcast’s experience of migrating RDK to the OpenEmbedded build framework. It covered the porting of Comcast specific devices and the impact on the software design, as well as what was involved in porting efforts - both good and bad. Attendees were able to gather a list of best practices for OE and a concrete list of steps for RDK when porting to new devices or doing development with the RDK platform. In addition it discussed some of the more pressing issues and challenges and how Comcast solved some of the problems e.g. developer workflow, continuous integration and delivery.

### **Linaro Awards Dinner**

On Thursday night Linaro held the Linaro Awards Dinner to honor those that have made significant impact at Linaro. It was a great evening of food, drinks and celebrating our colleagues. Below are the list of winners for the night:

  *        Outstanding Open Source Citizen- _winner: Matt Porter_
  *        Upstreaming stamina award - _winner: Ard Biesheuvel_
  *        New starter with biggest influence in Linaro- _winner: Zoltan Kuscisk & Bill Fletcher_
  *        Person most likely to deliver on-time whatever is asked of him/her - _winner: Luca Sokoll_
  *        Best cross team worker - _winner: Vee Chong_
  *        Most patient and effective leader - _winner: Amit Kucheria_
  *        Member Services Landing Team Member with Most Impact - _winners: Haojian Zhang, Zhangfei Gao, Guodong Xu_
  *        Quality champion (person who has resolved most bugs in a period, has reported issues diligently and has the focus to finish work with no regressions) - _winner: Milosz Wasilewski_
  *        Innovation (who has provided a creative win-win solution to a technical, process or people problem in the past year) - _winners: Glen Valante and Anmar Oueja_
  *        Notable Assignee (Core Engineering) - _winners: Remi Durrafort, Takahiro Akashi and Daniel Thompson_
  *        Notable Assignee (Segment Groups) - _winners: Christophe Priouzeau and Clarke Laughlin_
  *        Outstanding Committee Member - _winner: Linda Knippers - HP_
  *        Outstanding Member Support - _winner: Ryan Harkin_

### **Demo Friday**

Linaro Connect Hong Kong 2015 ended once again with a rich assortment of demonstrations, including much of Linaro’s latest ARMv8-A 64-bit software developments. The Demo Friday was a great success with many different demos featured including:

  * Linaro Clear Key CDM
  * Chromium on Wayland with Gstreamer
  * Linaro Web Browser Test Framework
  * Demo of VLANd
  * RT with core isolation
  * ODP – OVS – x86 – ARM
  * OpenJDK running on all ARMv8 hardware
  * OpenStack running on ARMv8 hardware
  * Android support for clang 3.6 and gcc 5.0
  * Ceph on remote server cluster
  * UEFI on BeagleBone Black

You can register now to attend our next event, Linaro Connect San Francicso 2015 (SFO15) September 21-25, 2015. [Learn more](http://connect.linaro.org/sfo15/)