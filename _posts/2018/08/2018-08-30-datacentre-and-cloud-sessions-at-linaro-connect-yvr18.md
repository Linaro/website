---
title: Datacentre and cloud sessions at Linaro Connect YVR18
author: linaro
layout: post
date: 2018-08-30 09:00:00+00:00
description: >-
  Linaro has got lots of technical sessions on Datacentre and Cloud at Linaro Connect Vancouver (YVR18) 17-21 September 2018. 
categories: blog
tags: Arm, Linaro, Data Centre, Datacentre, Cloud, Cloud Computing, Developer Cloud, Servers, Enterprise, Arm46, HPC, High Performance Computing Vancouver, Linaro Connect, YVR18
image:
  featured: true
  name: HKG18Session.jpg
  path: /assets/images/blog/HKG18Session.jpg
---
Three weeks to go until Linaro Connect Vancouver 2018!

We have got lots of great technical sessions lined up around Datacenter and Cloud, covering a range of topics from high-core-count systems to OpenJDK and HPC. To help you decide what to attend, we’ve listed all the abstracts below with links to the sessions. To sign up for a session, you will need to register.

Haven’t yet registered for Linaro Connect? To register, click [here](https://connect.linaro.org/register/)!

**[Reliability, Availability, and Serviceability (RAS) on ARM64 status](https://yvr18.pathable.com/meetings/740358)**
14:00 - 14:25, 17 September 2018, Regency E (Session 3)

This presentation gives an updated RAS Software architecture on ARM64 base on RAS extension, SDEI, APEI, UEFI PI-MM. First of all, give a general introduction of all the software components of the ARM64 RAS architecture, then focus on the current status（upstream or development） of APEI protocol and CperLib development, and the error record mechanism for BERT in firmware. At the end, we will discuss the next step of the RAS development.

**[RAS Error Injection and Error Handling on Arm64 based platforms](https://yvr18.pathable.com/meetings/740362)**
14:30 - 14:55, 17 September 2018, Regency E (Session 3)

Significant progress has been made in various software components such are SDEI, SPM, StandaloneMM and APEI driver that are required to put together support for RAS error injection and error handling on enterprise platforms. This proposal for presentation takes a deep dive on the technical details of integrating these components to create an end-to-end RAS solution with emphasis on details about error injection, firmware-first error handling methodology, CPER record creation and notifying linux using SDEI interface about the RAS events for further processing. Arm’s SGI-575 FVP platform is the first to create this solution and audience can gain insights into the technical details and challenges of enabling this solution for other platforms.

**[Scaling Applications on High Core Count Servers](https://yvr18.pathable.com/meetings/740367)**
15:30 - 15:55, 17 September 2018, Regency E (Session 3)

High-core-count systems present some come significant opportunities and challenges for scaling, compared to traditional servers. ARM servers have taken a lead position in this space with some of the highest per-system core counts currently available (and other architectures are poised to follow this lead). This talk is a detailed look at our recent experience scaling up a heavy multimedia conferencing and training system on high-core-count ARM servers, contrasting this with the same scale-up on more traditional legacy systems.

**[Auto-deployment of Ceph cluster with Rook on top of Kubernetes](https://yvr18.pathable.com/meetings/740369)**
16:00 - 16:25, 17 September 2018, Regency C/D (Keynote)

Rook is an open source project hosted by CNCF to orchestrate the distributed storage system such as Ceph with cloud native primitives. In this presentation, Dennis will first introduce the overall design idea of the Rook and how it works, after that he will talk about how to deploy a Ceph cluster automatically with help of Rook and take use of it, including the volume provisioning and attachment, against a real workload on AArch64 server. At last, some new features(eg. CSI support), challenges and issues of this project will also be discussed.

**[The HPC Lab](https://yvr18.pathable.com/meetings/740378)**
10:00 - 10:25, 18 September 2018, Regency B (Session 2)
Discussion on the design decisions of the HPC lab: goals, implementation, automation.
Current and future plans to grow in size and scope: more different hardware, supporting more communities (OpenMPI, etc).

**[Hardware Trace on Linux - tools, techniques and future directions.](https://yvr18.pathable.com/meetings/740400)**
16:30 - 16:55, 18 September 2018, Regency A (Session 1)

The presentation will cover recent developments in hardware trace support on ARM linux platforms to include:-
1) AutoFDO - Optimising production code using trace sampling as feedback. A description of the methods and the developments needed to use this tool.
2) Trace capture techniques using CTI and ETM - Using CTIs to halt trace on software events. Using ETMs to inject events into the trace streams.
3) CoreSight Base System Architecture - an introduction to ARM’s effort to introduce a standardised trace platform, to allow better tool compatibility across devices.

**[BOF: The Works on Arm Cluster project](https://yvr18.pathable.com/meetings/740417)**
15:00 - 15:25, 19 September 2018, Regency E (Session 3)

The Works on Arm cluster is run by Packet for Arm to provide test, development, and data center CI/CD resources for community projects to build on arm64. The project also includes a weekly video office hours, a weekly newsletter, and a channel on the Packet Community Slack and Freenode IRC (#worksonarm) for community discussion. This BOF session will provide current and future users of the cluster an opportunity to discuss technical issues regarding integration, testing, Cloud Native and network workloads, and generally provide a forum for helping set the direction of the effort in the coming year. The BOF leader, Ed Vielmetti, is director of the Works on Arm project.

**[OpenJDK Optimizations for AARCH64](https://yvr18.pathable.com/meetings/740420)**
16:30 - 16:55, 19 September 2018, Regency E (Session 3)

Over the past several months, we have been working with OpenJDK and SpecJBB for profiling on AARCH64. The purpose of this BoF session is to share common ideas and approaches on working to improve support for ARM. Topics include but are not limited to working with Operf, analyzing contention by profiling locks, and measuring memory.

**[To JDK 11 and Beyond!](https://yvr18.pathable.com/meetings/740425)**
11:00 - 11:25, 20 September 2018, Regency A (Session 1)

OpenJDK has been changing at an accelerate rate in the past year. In this presentation I will take the audience through the changes since JDK9 and look forward to the JDK 11 release just after Linaro Connect. I will also talk about the work that has been done on AArch64 in particular.

**[SBSA QEMU](https://yvr18.pathable.com/meetings/740450)**
12:00 - 12:25, 21 September 2018, Regency B (Session 2)

There is a QEMU machine type ‘virt’ for Arm, but it has some constrains, so a new machine type ‘enterprise’ is created. This session introduces features of QEMU ‘enterprise’ machine, Arm Trusted Firmware and edk2 porting work on it, and the potential work on it in future.

**Linaro Data Centre & Cloud**
The purpose of the Linaro Datacenter & Cloud Group (LDCG) is to collaborate and accelerate the development of foundational open source software for Arm Server. LDCG benefits have broad industry implications, including time to market acceleration, lower development costs, and access to innovative and differentiated systems, fundamental to the Arm ecosystem.  Originally established in November 2012 as the Linaro Enterprise Group (LEG) it has evolved with the introduction of new technologies and hardware.

To find out how to get involved iwth Linaro Data Centre & Cloud, click [here](https://www.linaro.org/engineering/groups/ldcg/).
