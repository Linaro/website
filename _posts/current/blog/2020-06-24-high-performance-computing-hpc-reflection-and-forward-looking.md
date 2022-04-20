---
layout: post
title: " High Performance Computing (HPC), Reflection and Forward-looking."
description: In 2018 we discussed the first step for ARM into High Performance
  Computing (HPC). Since then, Linaro has been working to increase awareness of
  the successes within the High Performance Computing ARM ecosystem. HPC now
  forms a key part of our activities, plus an association with Fugaku - the No.1
  Supercomputer in the world (according to the Top500 bi-annual review).
date: 2020-06-26 04:22:14+00:00
image: /assets/images/content/hpc-bg.jpg
tags:
  - HPC
  - TOFU
  - Opensource Toolchains
  - High Performance Computing
  - Arm
  - Linaro
  - Fugaku
  - Supercomputers
  - Supercomputing
  - Linaro Developer Cloud
  - Open Hpc
related_projects:
  - HPCAI
category: blog
author: paul.isaacs
---
We have previously reflected on the first step for ARM into HPC. Since then, Linaro has been working to increase awareness of the successes within the [High Performance Computing ARM ecosystem](https://static.linaro.org/assets/HighPerformanceComputingARMecosystem-small.pdf). High Performance Computing now forms a key part of our Linaro Connect activities ([Connect Resources](/cloud-computing-and-servers/)) and more recently our virtual conferences, due to Covid-19, ([LTD20-106 State of ARM-based HPC](https://resources.linaro.org/en/resource/Qte2Z3ajBHienZ3ZbmoWjy)) for 2020.

At Supercomputing 2019 we saw the public viewing of Fujitsu’s A64FX ([SC’19](https://www.fujitsu.com/global/solutions/business-technology/tc/events/sc19/)) and some of the first sales outside of Japan, in 2020, including another one of Linaro’s members, Sandia National Labs ([FX700](https://share-ng.sandia.gov/news/resources/news_releases/green_processor/)). Sandia, is the notable home of [Astra, the first Arm supercomputer](https://en.wikichip.org/wiki/supercomputers/astra) to join the Top500 list in 2018 and exceed 1 Petaflops (2.332 Petaflops using over 5000 [Marvell ThunderX2](https://www.marvell.com/products/server-processors/thunderx2-arm-processors.html) processors). Marvell continues to be another highly valued member of Linaro.

The A64FX is the first processor to support a 512-bit hardware implementation of Arm’s Scalable Vector Extension ([SVE](https://developer.arm.com/docs/100891/latest/sve-overview/introducing-sve)). Fujitsu gave a talk in early 2019 to introduce the components that would make up their next Supercomputer (*[A64FX](https://static.linaro.org/assets/A64FXTheFirstSVE.pdf)*). That next Supercomputer is now here, today June 22nd 2020, Riken’s Fugaku is the No.1 Supercomputer in the world according to the [Top500 bi-annual review](https://www.top500.org/news/japan-captures-top500-crown-arm-powered-supercomputer/). In just 2 years since Arm based systems entered the Top500 Fugaku can compute 415.53 Petaflops. This is a 200x increase in processing while only a 20x increase in power consumption from Astra.

A key component of SVE for the software developer is to code once and be bit-length agnostic from 128 bits up to 2048 bits in 128 bit increments for vector processing. A detailed look was provided by Fujitsu at Linaro's March [Tech Days](https://www.youtube.com/watch?v=OL_ZiXuZXyk). A developer’s application can auto-configure for respective hardware implementation. This has enabled developers to code in [256-bit software emulated environments](https://hub.docker.com/r/linaro/gem5-riken-open) and have the code automatically run optimised on and for the 512-bit hardware unchanged.

**Overview of Single-Instruction-Multiple-Data (SIMD)**

Scalable Vector Extension (*[SVE](https://static.linaro.org/assets/SVE-a-sneak-peek.pdf))* is an implementation of single-instruction-multiple-data ([SIMD](https://developer.arm.com/architectures/instruction-sets/simd-isas)). A simple explanation would be to apply the same instruction across data loaded into multiple registers. For example it could be that values are increased by a fixed amount, or a bitwise operation performed in parallel.

The single-instruction-multiple-data process benefits large volumes of similar data such as that found in graphics calculations and machine learning networks.

For example:

[Vector addition](https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction): a = b + c;

[Fuse multiply and accumulate (saxpy](https://developer.arm.com/docs/ddi0596/e/simd-and-floating-point-instructions-alphabetic-order/fmlal-fmlal2-vector-floating-point-fused-multiply-add-long-to-accumulator-vector)) y = a*x + y;*

*Dot products a*{ij} = x*{ik}y_{kj} (in tensor notation) as required in [gemm (matrix-matrix) operations](https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/neon-programmers-guide-for-armv8-a/optimizing-c-code-with-neon-intrinsics/optimizing-matrix-multiplication).

*“Typically, whole SIMD operations form the inner-most of loops and the registers are assigned to light weight threads, say Open MP, on the next outer layer. A further coarse grained parallelism is then supplied by the outer ‘administrative’ loop layers such as Open MPI which typically allocate heavier blocks, e.g. domain or logical decomposition of work to packages.” (quote: Roger Philp, Linaro HPC Senior Engineer)*

In the hierarchy of packages, cores, threads, vectors:

{% include image.html path="/assets/images/content/hpc-hierarchy.png" alt="hierarchy of packages, cores, threads, vector" %}

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

Aarch64 may have a workaround to [enable/disable flushing](https://developer.arm.com/docs/ddi0595/e/aarch64-system-registers/fpcr). However, we welcome your thoughts on this topic. Email: [hpc-sig@linaro.org](mailto:hpc-sig@linaro.org)

Linaro’s HPC-SIG are working towards [profiling HPC](https://resources.linaro.org/en/resource/Ld2UGAdVvcTZRs89kSJsbr) vector dependent applications for code hotspots, bottlenecks and cache misses in the Neoverse platform.

**Background on Scalable Vector Extension (SVE)**

Prior to SVE, single-instruction-multiple-data was implemented using Arm’s Neon technology. Neon has been used predominantly in accelerating audio and video encoding/decoding as well as 2D/3D graphics. The[ Neon intrinsics](https://developer.arm.com/architectures/instruction-sets/simd-isas/neon/intrinsics?page=1) are function calls that the compiler replaces with Neon instruction(s). [SVE intrinsics](https://developer.arm.com/docs/100891/latest/coding-considerations/using-sve-intrinsics-directly-in-your-c-code) are a different set of function calls to make use of scalable vector extension hardware. This was the first pass at agnostic vector lengths. A further development for SVE2 (to be utilised by silicon vendors in the future) will enable a common set of intrinsics which can make use of both SVE and NEON hardware optimisations, as described in the Arm presentation at Linaro’s Connect conference ([SAN19](https://resources.linaro.org/en/resource/dURtYSHjBaT7kcCpWXcXcG)).

**Related applications - [SVE in QEMU's linux-user mode](/blog/sve-in-qemu-linux-user/)**

Having a standards-based server booting a Linux kernel is the infrastructure. What makes the infrastructure relevant is the application that utilises it. Within Linaro’s HPC-SIG we understand that the infrastructure is becoming more heterogeneous. There are a variety of Instruction Set Architectures, SoCs, ASICs, FPGAs that sit within the modern data center. Applications are being tweaked to make use of new server hardware features. However, the more the application is tuned to given hardware the more complex the maintenance becomes across the hundreds of applications in the ecosystem.

In the scalable vector extension and NEON examples, compiler intrinsics are included in the code as functions to be converted to optimised hardware instructions. A further development could provide instead for the same intrinsics to be hidden in a backend solution whilst the frontend application is converted to cloud-native calls in an abstraction that is hardware agnostic. Linaro's HPC-SIG is collaboratively exploring how Cloud-Native computing could benefit the high performance computing community and provide public-facing easy-to-use solutions.

The balance to be struck of differing workloads is to identify how many everyday applications vs mathematically intensive applications might benefit from SIMD. For example, how many 10,000 core rack of systems like the low-power microservices aimed B1000N, based on Linaro member [NXP’s 16-core LX2160A](https://www.nxp.com/products/processors-and-microcontrollers/arm-processors/layerscape-multicore-processor-/layerscape-lx2160a-multicore-communications-processor:LX2160A), versus a high-power system kitted with Marvell’s upcoming 96-core ThunderX3? The question is not either/or, but how many of both.

**Continuous integration**

Linaro is well known for its [CI infrastructure](https://ci.linaro.org/). The HPC-SIG will be extending its internal CI testing to have the results publicly available. Linaro already hosts on ThunderX2s the global CI testing for the [Arm variant of OpenHPC](https://developer.arm.com/solutions/hpc/hpc-software/openhpc). Additions to CI will include ML Frameworks such as Arm server builds of [TensorFlow](https://github.com/tensorflow/tensorflow) and [PyTorch](https://github.com/pytorch/pytorch) that benefit from the resources high performance computing can provide. These complement the work carried out by our Edge/Mobile computing groups at <https://www.mlplatform.org/>

**CPU v GPU v SVE**

Off loading with a CPU+GPU model can be expensive. Small matrices (<1024x1024) have a high transmission overhead compared to the actual compute time within a GPU, such that a conventional non-vector CPU can complete the process surrounding the whole computation in comparable time. Later this year we could hope to see benchmarks verify the optimism that vector-enabled CPUs could match or even exceed GPU-based performance for significantly larger matrices used in the likes of RESNET-50 and others with 100s of millions of parameters.

**Infrastructure**

The method of interconnection used to link compute nodes can have a significant impact on the performance of the system as a whole. What will be interesting to see is how different the Fugaku Supercomputer styled on Fujitsu’s FX1000 with its TOFU interconnect [compares](https://www.fujitsu.com/global/products/computing/servers/supercomputer/specifications/) to the PCIe/InfiniBand enabled Fujitsu FX700 for real workloads. Keep watching and Linaro’s HPC-SIG could create future blogs on performance tuning vector-enabled CPUs.

High performance computing demands significant investment in skills and budget. If you’re [budget constrained](https://store.avantek.co.uk/arm-servers.html) then it’s still possible to scale up node by node and perhaps forego [commercial licenses](https://developer.arm.com/solutions/hpc/hpc-software) for comparable opensource [toolchains](/core-technologies/toolchain/) and toolkits such as [OpenHPC](https://openhpc.community/).

However your system is built, you can be sure ARM-based solutions can be your equal partner in HPCand Linaro is here to complement the open source ecosystem. Congratulations once again **Fugaku simultaneously #1 in the Graph500, HPCG, and HPL-AI lists.**

**Background on Sandia:** Sandia National Laboratories is operated and managed by National Technology and Engineering Solutions of Sandia, LLC., a wholly owned subsidiary of Honeywell International, Inc. National Technology and Engineering Solutions of Sandia operates Sandia National Laboratories as a contractor for the U.S. Department of Energy’s National Nuclear Security Administration (NNSA) and supports numerous federal, state, and local government agencies, companies, and organizations.

A strong science, technology, and engineering foundation enables Sandia's mission through capable research staff working at the forefront of innovation, collaborative research with universities and companies, and discretionary research projects with significant potential impact. Sandia works with other government agencies, industry and academic institutions to accomplish their missions in the strategic areas of nuclear weapons, national security programs, energy and global security.

**Background on Fujitsu:** Fujitsu has operations across Europe, the Middle East, India and Africa with more than 25,000 employees across the region. The Fujitsu Group has established a global service structure with operations in more than 180 countries around the world. The largest business area is technology solutions. Fujitsu provides corporate customers around the globe with IT-driven business solutions based on cutting-edge digital transformation technologies, services and high-quality digital business platforms. Fujitsu’s portfolio of solutions are focused on addressing specific business and IT challenges within industry; adapted to retailers, financial services, automotive or manufacturing organizations as well as central and local governmental departments.

As well as the provision of IT services and solutions, Fujitsu also develop and manufacture a range of electronic products and devices for use across a wide range of applications such as imaging, wireless communications and security.

**Background on Linaro:** Linaro was founded in 2010 and since its inception Linaro has driven open source software development on Arm. Linaro provides the tools, Linux kernel quality and security needed for a solid foundation to innovate on. The company is made up of engineers across a breadth of specialisms and collaboration is at the heart of the company. Linaro is member driven, with the member engineers working with Linaro engineers to solve shared ecosystem software problems. The membership base at Linaro is diverse and includes some of the most prominent names within the industry. Through this process, Linaro’s principles of eliminating duplication of effort, reducing fragmentation and aiding speed to market are just some of the benefits that Linaro provides to its members and the open source community.