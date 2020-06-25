---
layout: post
title: " High Performance Computing (HPC), Reflection and Forward-looking."
description: In 2018 we discussed the first step for ARM into High Performance
  Computing (HPC). Since then, Linaro has been working to increase awareness of
  the successes within the High Performance Computing ARM ecosystem. HPC now
  forms a key part of our activities, plus an association with Fugaku - the No.1
  Supercomputer in the world (according to the Top500 bi-annual review).
date: 2020-06-26T04:22:14.000Z
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
We have previously reflected on the first step for ARM into HPC ([High Performance Computing and Linaro - Mar.2018](https://www.linaro.org/blog/high-performance-computing-and-linaro/)). Since then, Linaro has been working to increase awareness of the successes within the ***High Performance Computing ARM ecosystem* (LINK)**. High Performance Computing now forms a key part of our Linaro Connect activities ([Connect Resources](https://www.linaro.org/engineering/high-performance-computing/)) and more recently our virtual conferences, due to Covid-19, ([Linaro Tech Days](https://connect.linaro.org/resources/ltd20/ltd20-106/)) for 2020.

At Supercomputing 2019 we saw the public viewing of Fujitsu’s A64FX ([SC’19](https://www.fujitsu.com/global/solutions/business-technology/tc/events/sc19/)) and some of the first sales outside of Japan, in 2020, including another one of Linaro’s members, Sandia National Labs ([FX700](https://share-ng.sandia.gov/news/resources/news_releases/green_processor/)). Sandia, is the notable home of [Astra, the first Arm supercomputer](https://en.wikichip.org/wiki/supercomputers/astra) to join the Top500 list in 2018 and exceed 1 Petaflops (2.332 Petaflops using over 5000 [Marvell ThunderX2](https://www.marvell.com/products/server-processors/thunderx2-arm-processors.html) processors). Marvell continues to be another highly valued member of Linaro.

The A64FX is the first processor to support a 512-bit hardware implementation of Arm’s Scalable Vector Extension ([SVE](https://developer.arm.com/docs/100891/latest/sve-overview/introducing-sve)). Fujitsu gave a talk in early 2019 to introduce the components that would make up their next Supercomputer (***A64FX***) **(LINK)**. That next Supercomputer is now here, today June 22nd 2020, Riken’s Fugaku is the No.1 Supercomputer in the world according to the [Top500 bi-annual review](https://www.top500.org/news/japan-captures-top500-crown-arm-powered-supercomputer/). In just 2 years since Arm based systems entered the Top500 Fugaku can compute 415.53 Petaflops. A 200x increase in processing yet only a 20x increase in power consumption from Astra.

A key component of SVE for the software developer is to code once and be bit-length agnostic from 128 bits up to 2048 bits in 128 bit increments for vector processing. A detailed look was provided by Fujitsu at our March [Tech Days](https://www.youtube.com/watch?v=OL_ZiXuZXyk). The developer’s application can auto-configure for respective hardware implementation. This has enabled developers to code in 256-bit software emulated environments and have the code automatically run optimised on and for the 512-bit hardware unchanged.

**Overview of Single-Instruction-Multiple-Data (SIMD)**

Scalable Vector Extension (***SVE*)(LINK)** is an implementation of single-instruction-multiple-data ([SIMD](https://developer.arm.com/architectures/instruction-sets/simd-isas)). A simple explanation would be to apply the same instruction across data loaded into multiple registers. For example it could be that values are increased by a fixed amount, or a bitwise operation performed in parallel.

The single-instruction-multiple-data process benefits large volumes of similar data such as that found in graphics calculations and machine learning networks.

For example:

[Vector addition](https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction): a = b + c;

[Fuse multiply and accumulate (saxpy](https://developer.arm.com/docs/ddi0596/e/simd-and-floating-point-instructions-alphabetic-order/fmlal-fmlal2-vector-floating-point-fused-multiply-add-long-to-accumulator-vector)) y =  a*x + y;* 

*Dot products a*{ij} = x*{ik}y_{kj} (in tensor notation) as required in [gemm (matrix-matrix) operations](https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/neon-programmers-guide-for-armv8-a/optimizing-c-code-with-neon-intrinsics/optimizing-matrix-multiplication).

*“Typically, whole SIMD operations form the inner-most of loops and the registers are assigned to light weight threads, say Open MP, on the next outer layer. A further coarse grained parallelism is then supplied by the outer  ‘administrative’ loop layers such as Open MPI which typically allocate heavier blocks, e.g.  domain or logical decomposition of work to packages.” (quote: Roger Philp, Linaro HPC Senior Engineer)*

In the hierarchy of packages, cores, threads, vectors:

{% include image.html path="/assets/images/content/hpc-hierarchy.png" alt="Hierarchy of packages, cores, threads, vector" %}

A typical and recurrent problem encountered with the vector models however is the inability to lock data in registers without automatic flushing, until that data can be completely retired. For example:

```
Minimize main memory and cache access 
Maximise reuse of array content in say block matrix multiply for instance or convolutions
a[0] = a0
a[1] = a1
...
a[n] = an
load a[] -> R  <--- c/c++ user control command
               <--- loads a[] into cpu register R  
lock R         <--- c/c++ user control command
               <--- R is now read only and not flushable
do lots of other stuff, but register R remains static
unlock R       <--- c/c++ user control command
               <--- Register R is now rewritable and flushable
```

Aarch64 may have a workaround to [enable/disable flushing](https://developer.arm.com/docs/ddi0595/e/aarch64-system-registers/fpcr). However, we welcome your thoughts on this topic. Email: [hpc-sig@linaro.org ](hpc-sig@linaro.org)

Linaro’s HPC-SIG are working towards [profiling HPC](https://connect.linaro.org/resources/san19/san19-417/) vector dependent applications for code hotspots, bottlenecks and cache misses in the Neoverse platform.