---
author: kanta.vekaria
date: 2018-03-01 09:00:00.000
title: High Performance Computing and Linaro
description: >-
    Supercomputing has been around for decades and hardware for High Performance Computing (HPC) has traditionally been provided by Intel. Well, things are changing and changing fast they are.
categories:
  - blog
published: true
tags: 'High Performance Computing, HPC, Linaro, Open Source, Arm, SVE, HKG18'
keywords: High Performance Computing, HPC, Linaro, Open Source, Arm, SVE, HKG18
image:
    featured: true
    path: /assets/images/blog/hpc-and-linaro-blog-image.png 
    name: hpc-and-linaro-blog-image.png 
layout: post
---
Supercomputing has been around for decades and hardware for High Performance Computing (HPC) has traditionally been provided by Intel. Well, things are changing and changing fast they are.

In 2011 Arm made its first step into HPC via the Mont Blanc Project. This project tackled the initial work of building test systems and porting software for Arm HPC test systems. Since then, and from work involving the Department of Energy’s Fast Forward-2 project, this has demonstrated the competitiveness of AArch64 on a per core per socket basis. [Results published at SC17 are further proof.][1]

The HPC community want choice and flexibility across the entire software stack, from bare metal to applications. With choice comes the need for standardisation and platform compatibility. The Arm ecosystem provides this and the opportunity to co-design and co-develop from architecture design through to software. Both of which are very attractive to the HPC community.

With the formation of the [HPC Special Interest Group (SIG)](https://www.linaro.org/sig/hpc/), Linaro has contributed to this growing Arm HPC ecosystem with recent work on openHPC, GCC and LLVM. Linaro recognised early on the need for an emulator that supports Arm’s SVE instruction set to allow for early development without the need for HW access. With this recognition, Linaro’s virtualisation team have made excellent progress on SVE support for QEMU. For those interested, this significant work effort will be highlighted next month at Linaro Connect HKG18 in Hong Kong, session titled [“HKG18-TR08: Upstreaming SVE in QEMU”](https://hkg18.pathable.com/meetings/640450).

Compilers and compiler optimisation are a critical part of maximizing performance for desired workloads. Knowing this, Linaro has developed a HPC Compiler Quality Checker that examines compiler code generation. The development of this tool and its features continues. Masaki Arai will be presenting this work in the session titled [“HKG18-506 HCQC : HPC Compiler Quality Checker”](https://hkg18.pathable.com/meetings/640469). Do look out for it!

Finally, an ecosystem is not an ecosystem without community involvement. Linaro’s Technical Lead, Renato Golin, is the Test Coordinator on the openHPC community project. Furthermore, we can proudly say that openHPC 1.3.3 is formally supported on AArch64. It’s no longer a Tech Preview Release. This has only been achievable through collaboration with our members Arm, Fujitsu, HiSilicon, Cavium, Qualcomm, HXT and Red Hat.

Please join in the conversation. We are running a HPC BoF on Wednesday at the Arm Ecosystem Day. What are the topics I hear you say? We want this to be an open forum and thus all topics related to supercomputing/HPC are welcome but, of course, we have pencilled in Ansible, MPI, benchmarking, Spack and downstream testing.

If you have not registered for Linaro Connect HKG18 already, you can [register here](http://connect.linaro.org/attend/).

On that note, I look forward to meeting you all at HKG18!

Dr Kanta Vekaria,
Head of High Performance Computing, Linaro

[1]: https://www.nextplatform.com/2017/11/13/arm-benchmarks-show-hpc-ripe-processor-shakeup/

