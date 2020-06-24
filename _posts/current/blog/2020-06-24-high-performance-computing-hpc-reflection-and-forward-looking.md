---
layout: post
title: " High Performance Computing (HPC), Reflection and Forward-looking."
description: In 2018 we discussed the first step for ARM into High Performance
  Computing (HPC). Since then, Linaro has been working to increase awareness of
  the successes within the High Performance Computing ARM ecosystem. HPC now
  forms a key part of our activities, plus an association with Fugaku - the No.1
  Supercomputer in the world (according to the Top500 bi-annual review).
date: 2020-06-26 04:22:14
image: /assets/images/content/hpc-bg.jpg
tags:
  - high performance computing
  - HPC
  - Arm
  - Linaro
  - Fugaku
  - supercomputers
  - supercomputing
  - Linaro developer cloud
  - Sandia
  - Fujitsu
category: Blog
author: paul.isaacs
---
We have previously reflected on the first step for ARM into HPC ([High Performance Computing and Linaro - Mar.2018](https://www.linaro.org/blog/high-performance-computing-and-linaro/)). Since then, Linaro has been working to increase awareness of the successes within the ***High Performance Computing ARM ecosystem (LINK)***. High Performance Computing now forms a key part of our Linaro Connect activities ([Connect Resources](https://www.linaro.org/engineering/high-performance-computing/)) and more recently our virtual conferences, due to Covid-19, ([Linaro Tech Days](https://connect.linaro.org/resources/ltd20/ltd20-106/)) for 2020.

At Supercomputing 2019 we saw the public viewing of Fujitsu’s A64FX ([SC’19](https://www.fujitsu.com/global/solutions/business-technology/tc/events/sc19/)) and some of the first sales outside of Japan, in 2020, including another one of Linaro’s members, Sandia National Labs ([FX700](https://share-ng.sandia.gov/news/resources/news_releases/green_processor/)).

**The** A64FX is the first processor to support a 512-bit hardware implementation of Arm’s Scalable Vector Extension ( SVE ). Fujitsu gave a talk in early 2019 to introduce the components that would make up their next Supercomputer ( A64FX ). That next Supercomputer is now here, today June 22nd 2020, Riken’s Fugaku is the No.1 Supercomputer in the world according to the Top500 bi-annual review. A key component of SVE for the software developer is to code once and be bit-length agnostic from 128 bits up to 2048 bits in 128 bit increments for vector processing. A detailed look was provided by Fujitsu at our March Tech Days. The developer’s application can auto-configure for respective hardware implementation. This has enabled developers to code in 256-bit software emulated environments and have the code automatically run optimised on and for the 512-bit hardware unchanged.