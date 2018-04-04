---
author: joakim.bech
comments: true
date: 2014-09-03 17:06:05+00:00
layout: post
link: /blog/core-dump/op-tee-open-source-security-mass-market/
slug: op-tee-open-source-security-mass-market
title: OP-TEE, open-source security for the mass-market
wordpress_id: 6500
categories:
- blog
tags:
- Core Dump
- android
- Android L
- emulator
- qemu
---

{% include image.html name="thumb_STMicroTransparent.png" alt="thumb_STMicroTransparent" class="small-inline" %}

TEE. Behind this acronym hides the Trusted Execution Environment, a small OS-like environment that sits aside a rich operating system – for instance Android. The purpose of the TEE is to keep all secret credentials and data manipulation in the small TEE rather than in a larger rich OS that is often the vulnerable target of malware and hackers in general. In order to reach this goal, application software is architected in a way such that sensitive functions are precisely defined and offloaded to the TEE in the form of Trusted Applications.

The concept was formalized around 2007 by the [**OMTP standardization forum**](http://en.wikipedia.org/wiki/Open_Mobile_Terminal_Platform), which issued a set of [**security requirements**](https://www.gsma.com/newsroom/all-documents/omtp-documents/omtp-documents-1-1-omtp-advanced-trusted-environment-omtp-tr1-v1-1/) on functionality a TEE should support. The GlobalPlatform organization went a step further by defining standard APIs: on the one hand, the TEE internal APIs that a Trusted Application can rely on, and on the other hand, the communication interfaces that rich OS software can use to interact with its Trusted Applications. It is worth noting that, because the TEE threat model assumes that nothing coming from the rich OS is trustworthy, the designer of a TA (Trusted Application) must assume that the rich-OS-side client of the TA may not be legitimate. Beyond the APIs, GlobalPlatform also introduced a [**compliance-testing process**](https://www.globalplatform.org/compliance.asp) to guarantee functional interoperability, and issued a Protection Profile to allow certifying that a TEE meets [**the necessary security level**](https://www.globalplatform.org/specificationform.asp?fid=7781).

Back in 2009, ST began its work on TEE as part of the ST-Ericsson mobile joint-venture and decided to promote the TEE together with its customers, among which was Nokia, [**who first introduced the concept in the mobile industry**](https://se-sy.org/projects/obc/). To this end, a TEE relying on the ARM TrustZone® technology to provide isolation from the rich OS was implemented. The TEE had to fit into a very constrained environment, and TrustZone was key to making it possible as it provides isolation in hardware. Another design choice was made to keep the TEE small and simple: rely on the rich OS to schedule the TEE. This amounts to seeing TAs as extensions of rich OS threads. In other word, the TEE does nothing else than what the rich OS is asking.

Already at that time, the long-term goal was to make the implementation available industry-wide, in order to defragment security implementations in mobile platforms. One key requirement to avoid fragmentation is the support of standards. In 2013, ST-Ericsson obtained **GlobalPlatform’s compliance qualification** with this implementation, proving that the APIs were behaving as expected in the GlobalPlatform specifications.

At the same time, Linaro was investigating security and especially leverage and promotion of ARM TrustZone. Linaro’s core mandate is to build and maintain the Linux baseport on ARM, integrating the features of ARM cores in Linux. It was therefore quite natural for Linaro to extend its focus by supporting an open-source TEE port on ARM TrustZone, and building security features on it. This provided a clear opportunity to defragment the security ecosystem on ARM-based chipsets. Linaro and ST therefore agreed to collaborate to open-source the TEE.

It has been almost a year since STMicroelectronics, with the full support from Ericsson, and Linaro, have joined forces to succeed in making the TEE, now called OP-TEE, available to the community. Ever since the Linaro Security Working Group was formed in September 2013, Linaro and ST engineers have worked together to revamp the code base, to make it portable, and to remove any legacy or ST-specific code.

OP-TEE is now available on GitHub, at [https://github.com/OP-TEE](https://github.com/OP-TEE). It consists of three components in separate gits: the normal world user space client APIs (optee_client), a Linux kernel TEE device driver (optee_linuxdriver) and the Trusted OS (optee_os). OP-TEE currently adheres to GlobalPlatform APIs, namely the GlobalPlatform TEE Client API 1.0 and GlobalPlatform TEE Internal API 1.0 specifications, available freely on the GlobalPlatform website. The Trusted OS part is under a BSD license, so that SoC vendors and device manufacturers may modify it without any obligation to disclose the modifications. This choice was key to make OP-TEE usable in commercial products, and thus to build an industry community around OP-TEE. The other major task was the abstraction of platform-specific parts in such a way that it should be fairly easy to port and incorporate OP-TEE in products from different vendors.

{% include image.html name="op-tee_diagram.png" alt="OP-TEE architecture with the scope of its three gits" %}

OP-TEE targets ARM cores and therefore includes a secure monitor code for TrustZone – which is the code executed when the core switches between TrustZone and non-TrustZone modes. We expect that it should still be fairly easy to use OP-TEE on architectures other than ARM TrustZone – for instance on the Cortex-M and Cortex-R range of ARM cores, and therefore further defragment security in embedded electronics, in areas such as Internet of Things or automotive.
By releasing OP-TEE to the public, ST and Linaro have provided a seed that will grow from contributions coming from the ARM ecosystem, and especially from Linaro members. An open-source TEE supporting standard interfaces and bringing a community will reduce fragmentation in the way ARM TrustZone is used to everyone’s benefit. We also anticipate that it will foster private and public applied research in security, by giving access to the technology to universities, researchers and governments around the world.


* * *


**Hervé Sibert**  / System Security Architect, Director / STMicroelectronics

Hervé is Security architect, Director, at STMicroelectronics. After 3 years as an engineer and researcher in cryptography and network security at France Telecom, he joined the Mobile and Personal Division of NXP in 2006, which was merged into ST-Ericsson. He is now driving integration of TEE in the architecture of ST products. He works closely with Linaro and is also active in standards organizations such as the Trusted Computing Group (TCG) and GlobalPlatform, where he coordinates the TEE Security Working Group.



**Joakim Bech** / Security Working Group, Tech Lead / Linaro

Joakim has been a Linux user for about 15 years and for the 8 years prior to joining Linaro he was working in the telecom industry for companies such as Sony Ericsson, EMP and ST-Ericsson. Roles there included architect, team leader and development engineer. Most of his time has been spent in embedded security where he was a major contributor to the GlobalPlatform certified TEE / TrustZone solution created by ST-Ericsson.
