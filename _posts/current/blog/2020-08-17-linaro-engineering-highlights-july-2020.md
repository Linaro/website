---
layout: post
title: Linaro Engineering Highlights - July 2020
description: The July 2020 Engineering Highlights feature the introduction of TuxMake,
  articles on a new certification for the Linaro Developer Cloud and the evolution
  of QEMU.
date: 2020-08-17 10:55:50+00:00
image: /assets/images/content/abstract-small.jpg
tags:
- Linaro
- Engineering Highlights
- Linaro Connect
- Virtual Connect 2020
- Tuxsuite
- Qemu
- LDCG
- Kubernetes
- Cloud
- Linux Kernel
- Toolchain
- Kernel Development
category: blog
author: jon.burcham@linaro.org
related_projects:
- AI
---

## Introducing TuxMake

By Dan Rue, Principal Technical Lead, Kernel Validation Team (KVT)

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}TuxMake is a new project to provide portable and repeatable Linux kernel builds across a variety of architectures, toolchains, kernel configurations, and make targets.

We have learned from the Linux Kernel Functional Test (LKFT) project that reproducing a Linux kernel build error is often a non-trivial task. Perhaps the developer that caused a build problem does not have the toolchain where the problem occurs, or perhaps their build environment isn’t set up to build a certain architecture. Quite often, it takes several round trip emails to properly communicate how to reproduce a build problem.

While the Linux source code is well versioned - build environments are not!

Providing versioned build environments is possible using Docker but most kernel developers do not bother with it due to the added complexity of orchestrating builds inside of docker containers.

TuxMake seeks to make it trivial to perform an arbitrary Linux kernel build inside a well maintained and versioned Linux kernel build environment container. Critically, such a build is reproducible with a single TuxMake command, which can be provided on a mailing list.

The other common problem that we notice is that developers usually don’t build test Linux kernels for very many architectures or with many different toolchains, because it’s a hassle to set up and maintain the environments. TuxMake solves this problem too, making it trivial for developers to perform builds against any supported combination of architectures and with any of the curated toolchains.

TuxMake can be found [here](https://gitlab.com/Linaro/tuxmake). To get started with tuxmake, run ‘_pip install tuxmake_’, cd to a linux source tree, and run ‘_tuxmake_’.

We are hopeful that TuxMake can solve a real problem that all Linux kernel developers experience. It will allow them to more easily build for more architectures, more targets, and in a more repeatable way, which in turn may directly improve the quality of the Linux kernel.

## Linaro Virtual Connect 2020 (LVC20) Schedule Posted

By Vicky Janicki

{% include image.html path="/assets/images/content/connect-2020-virtual-1-.jpg" class="small-inline left" alt="Linaro Connect Event 2020 logo" %} The [schedule](https://lvc20.sched.com/?iframe=no) for Linaro Virtual Connect 2020 (LVC20) is now available. The event starts on Tuesday September 22 and continues on Wednesday Sep 23 and Thursday Sep 24. Each day will be kicked off with industry keynote speakers including Peter Robinson (Red Hat) “Why standardisation on the Edge is critical for success”.

Carlo Piana (Array) will bring his experience as an IT lawyer to his talk “Respect! (R-E-S-P-E-C-T!)”. Jose Manrique López de la Fuente, CEO of Bitergia, will deliver the provocatively titled keynote “Let’s Butcher Software Development Analytics together: So you don’t have to when it really counts”.

After the success of Linaro Tech Days in April, we are expanding to 3 tracks of sessions per day. We have also staggered the start times so that on at least one day, the sessions will be running during the typical work day of a region. But have no fear, the sessions will be recorded and posted to the resource page so you can catch any you may have missed. We are also experimenting with some non-technical content slots - stay tuned for those announcements. So mark your calendars!

[Registration](https://www.eventbrite.co.uk/e/linaro-virtual-connect-2020-tickets-112995398278) is free and currently open.

## [Linaro Developer Cloud Kubernetes has been certified by CNCF](https://www.linaro.org/blog/linaro-developer-cloud-kubernetes-as-a-service/)

By Kevin Zhao, Technical Lead, DevOps, LDCG

{% include image.html path="/assets/images/content/ldcg.jpg" class="small-inline left" alt="Linaro Data Center and Cloud Group logo" %} The Cloud Infrastructure team in Linaro sits inside a group known as the Linaro Data Center and Cloud Group (LDCG). The Cloud Infrastructure focuses on open-source cloud IAAS, PAAS, and storage projects such as OpenStack, Kubernetes, and Ceph. The rest of the LDCG team spends their time working with Arm Server Architecture, Big Data, and HPC (High-Performance Computing).

**About Linaro Developer Cloud** Linaro Developer Cloud is designed to broaden the availability of the latest hardware to developers globally and to enable commercial and private cloud providers to utilize the implementation to accelerate deployment of their own offerings.

Read the rest of the article [here](https://www.linaro.org/blog/linaro-developer-cloud-kubernetes-as-a-service/).

## [The Evolution Of The QEMU Translator](https://www.linaro.org/blog/the-evolution-of-the-qemu-translator/)

By Alex Bennée, Senior Engineer, Toolchain Working Group

**Introduction**

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %} The QEMU team in Linaro sits inside a group known as the Toolchain Working Group (TCWG). The rest of the team spend their time working with compilers and other code generators such as GCC and LLVM. When dealing with emulation, QEMU has its own module known as the Tiny Code Generator (TCG). It shares many similarities with a compiler albeit one that works with different constraints than your typical compiler. As the code generator works on a just-in-time (JIT) basis, it can’t afford to spend large amounts of time (or memory!) that a typical compiler does when optimising its output. This is especially true for code that only gets executed once or twice before being flushed out of the cache.

**History**

The TCG is actually the second code generator that QEMU has used. Originally QEMU worked as a “template” translator where each individual instruction has a snippet of C code associated with it. The translation was a case of stitching these templates together into larger blocks of code. This meant porting QEMU to a new system was relatively easy because if GCC supported it, you could generate code to run under it. However, eventually the limits of this approach necessitated moving to a new code generator and TCG was born.

Read the rest of the article [here](https://www.linaro.org/blog/the-evolution-of-the-qemu-translator/).