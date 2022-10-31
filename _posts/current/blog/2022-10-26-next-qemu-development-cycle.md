---
layout: post
title: Linaro’s Future Development Plans for QEMU
description: In this article, Alex Bennée gives a summary of Linaro's
  engineering plans for QEMU. Read more here!
date: 2022-10-26 09:00:00
image: /assets/images/content/code-background_1.jpg
tags:
  - QEMU
  - emulation
  - CCA
  - Realms
  - RME
  - SBSA
  - open source
  - software
  - arm
  - linux
category: blog
author: alex.bennee
---
# Introduction

QEMU is an open source machine emulator and virtualiser that Linaro has been involved with since its creation. It provides a way of running Arm code on developer machines without access to actual Arm hardware. This makes it very useful for writing software before silicon is available. We have worked on improving the Arm emulation since the introduction of the original 64 bit v8 architecture. We have also been involved in improving support for the Arm platforms when running Virtual Machines (VMs) using technologies like the Kernel Virtual Machine (KVM).

Last week during the Linaro members’ operational meeting I laid out our development plans for QEMU over the next 6-12 months. Before I launch into the details I want to give an overview about how we prioritise our work given the mission statement of the project to [enable the Arm architecture in QEMU](https://linaro.atlassian.net/wiki/spaces/QEMU/overview).

## Ensure a well maintained upstream

It should be no secret that Linaro heavily invests in its maintainers. We believe it is important to our success to have engineers who are familiar with the code bases they work on. While [kernel work](https://www.linaro.org/blog/linaro-in-top-five-for-most-active-contributors-to-the-6-0-linux-kernel-release/) often grabs the headlines, our involvement in QEMU is also deep and sustained.

| Red Hat                         | 2066 | (28.0%) |
| Linaro                          | 1601 | (21.7%) |
| (None)                          |  824 | (11.2%) |
| IBM                             |  593 | (8.0%)  |
| Instituto de Pesquisas Eldorado |  265 | (3.6%)  |


However we are not simply proxies for our members - most of our members with an interest in QEMU also contribute directly. To show this I added up their contributions (not including RedHat) for the last year and regenerated the stats.

| Red Hat                   | 105250 | (27.8%) |
| Linaro                    |  64337 | (17.0%) |
| (None)                    |  38457 | (10.2%) |
| Linaro Members (combined) |  30541 | (8.0%)  |
| IBM                       |  28616 | (7.6%)  |


As you can see everyone benefits from having a well maintained upstream that you can reliably develop your features on.

## Upstream useful architectural features

The main reason users want to use Arm on QEMU is so they can develop code for new architectural features before hardware becomes available. We have a long history of enabling features from our early [TrustZone](https://www.linaro.org/blog/arm-trustzone-qemu/) work to innovations like [Scalable Vector Extensions](https://www.linaro.org/blog/sve-in-qemu-linux-user/). While hardware is only just coming onto the market that supports SVE, most of the software enablement was done with the help of QEMU.

In the last year we have been busy filling in a number of the smaller features required for higher baseline CPUs. This included support for various addressing modes for large virtual and physical address spaces (FEAT_LPA, FEAT_LPA2, FEAT_LVA). Perhaps the biggest set of new instructions was for Arm's [Scalable Matrix Extensions](https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/scalable-matrix-extension-armv9-a-architecture)
(SME) which provide for efficient matrix operations which are important for modern Machine Learning (ML) and Artificial Intelligence (AI) applications.

All of these are available when you use `-cpu max` in your QEMU invocation. You can see the ever growing list of Arm features we support in the [QEMU manual](https://qemu.readthedocs.io/en/latest/system/arm/emulation.html).

## Support QEMU as a software reference platform

I've mentioned before in [previous blogs](https://www.linaro.org/blog/many-uses-of-qemu/) how many projects use QEMU as a reference platform. I find new projects every year that target a QEMU as an easy to access platform for those who wish to experiment with something without the outlay of finding the right reference board.

This year we achieved our first certification for the
[sbsa-ref](https://qemu.readthedocs.io/en/latest/system/arm/sbsa.html)
machine which provides a well defined testing base for firmware
development. The [SystemReady VE v0.5 (ES) (Level 1)](https://www.arm.com/architecture/system-architectures/systemready-certification-program/ve)
certificate can be downloaded from Arm's website. As we continue to add newer "concrete" CPUs alongside `-cpu max` we will be able to aim for higher levels of certification.

## Improving the developer experience

Finally, as QEMU is a tool used by developers, improving their
experience is our final primary goal. We do this by helping maintain
essential tools like the
[gdbstub](https://qemu.readthedocs.io/en/latest/system/gdb.html) for
debugging and semihosting which aids early stage bare metal
development. We are also developing [TCG
plugins](https://qemu.readthedocs.io/en/latest/devel/tcg-plugins.html)
which allow for dynamic analysis of running code as well as continuing to improve QEMU's above-the-OS user mode emulation. Someone also reminded me that QEMU's open source nature is a plus in itself because the humble `printf` can be deployed to dump deep state information about a system when a program is behaving strangely.

# The next cycle

With our work over the last year outlined, let's talk about what we are working on in the coming months.

## v9.0 Baseline CPU

The next generation of the Arm architecture was [announced last
March](https://www.arm.com/company/news/2021/03/arms-answer-to-the-future-of-ai-armv9-architecture)
and continues to add new features enhancing security and performance for a number of workloads. To reach the point of emulating an architecturally correct v9.0 baseline CPU we need to fill in some holes of previously optional features. You can track the work towards that goal on our JIRA by following the [main EPIC for v9.0](https://linaro.atlassian.net/browse/QEMU-471).

## Confidential Computing and Realms

One of the biggest parts of the v9.0 announcement was the introduction of Arm's [Confidential Compute Architecture](https://www.arm.com/architecture/security-features/arm-confidential-compute-architecture). This is a big shift in the security architecture of computing which allows secure workloads to be run on cloud systems while guaranteeing the cloud provider cannot look inside the confidential workload. As you can imagine this involves a lot of individual components from the base firmware to the hypervisor and kernel as well as the rest of the cloud software stack. We want to enable the underlying Realm Management Engine (FEAT_RME) to support the development of software on this new and innovative stack.

There are a number of challenges for us to solve on the way to this
including the Large System Extensions (FEAT_LSE2) which will require
careful modification to QEMU's core translation code to properly model
the new atomicity and alignment requirements of these systems. We've
already [started posting
patches](https://patchew.org/QEMU/20221021071549.2398137-1-richard.henderson@linaro.org/)
towards that goal but we expect it to be a significant chunk of work. You can follow the work [here](https://linaro.atlassian.net/browse/QEMU-300).

We expect it will take us most of the next year to implement and test all the bits and pieces for a full working system but that time can be shortened by collaborating with us on the mailing lists. You can track the main work for [FEAT_RME here](https://linaro.atlassian.net/browse/QEMU-466).

## Single Emulation Binary

While our principal focus will be on implementing v9.0 and Realms we are also going to start looking at a long term goal of a single emulation binary. This aims to make QEMU modular enough that instead of building a binary for every target architecture we can build a single one capable of emulating any hardware QEMU supports. While this will be useful for the upstream project by reducing build times and reducing inadvertent technical debt we have longer term ambitions. We hope this [work](https://linaro.atlassian.net/browse/QEMU-487) will allow us to explore more complex modelling opportunities in future.

# Conclusion

I hope this blog has given you an idea of the sort of things we work on and our vision for the future of emulating Arm systems in QEMU. We look forward to collaborating with our members and the wider community to realise this vision on the mailing lists over the next year.

For more information on the work we do on QEMU and how to get involved, go to our [Enable Arm Architecture in QEMU project page](https://linaro.atlassian.net/wiki/spaces/QEMU/overview).
