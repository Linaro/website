---
date: 2017-12-06 12:00:00+00:00
categories:
- event_resources
tags:
- Arm
- HPC
- Workshop
- Japan
keywords: Arm, HPC, Workshop, Japan
event: arm-hpc-2017
image: /assets/images/blog/arm-hpc-bg.png
title: Compilation of COSMO for GPU using LLVM
speakers:
 - name: Tobias Grosser
   job_title: Scalable Parallel Computing Laboratory (SPCL)
   image: ""
   email: "t-ogura@riken.jp"
   bio: >
      Tobias Grosser is a senior researcher in the Scalable Parallel Computing Laboratory (SPCL) of Torsten Hoefler at the Computer Science Department of ETH Zürich. Supported by a Google PhD Fellowship he received his doctoral degree from Universite Pierre et Marie Curie under the supervision of Albert Cohen. Tobias' research is taking place at the border of low-level compilers and high-level program transformations with the goal of enabling complex - but highly-beneficial - program transformations in a production compiler environment. He develops with the Polly loop optimizer a loop transformation framework which today is a community project supported throught the Polly Labs research laboratory. Tobias also developed advanced tiling schemes for the efficient execution of iterated stencils. Today Tobias leads the heterogeneous compute efforts in the Swiss University funded ComPASC project and is about to start a three year NSF Ambizione project on advancing automatic compilation and heterogenization techniques at ETH Zurich.
slideshare: https://www.slideshare.net/slideshow/embed_code/key/ye93RqO7aue73Y
s3_video: ""
s3_presentation: ""
youtube_video: ""
---
The COSMO climate and weather model delivers daily forecasts for Switzerland and many other nations. As a traditional HPC application it was developed with SIMD-CPUs in mind and large manual efforts were required to enable the 2016 move to GPU acceleration. As today's high-performance computer systems increasingly rely on accelerators to reach peak performance and manual translation to accelerators is both costly and difficult to maintain, we propose a fully automatic accelerator compiler for the automatic translation of scientific Fortran codes to CUDA GPU accelerated systems. Several challenges had to be overcome to make this reality: 1) improved scalability, 2) automatic data placement using unified memory, 3) loop rescheduling to expose coarse-grained parallelism, 4) inter-procedural loop optimization, and 5) plenty of performance tuning. Our evaluation shows that end-to-end automatic accelerator compilation is possible for non-trivial portions of the COSMO climate model, despite the lack of complete static information. Non-trivial loop optimizations previously implemented manually are performed fully automatically and memory management happens fully transparently using unified memory. Our preliminary results show notable performance improvements over sequential CPU code (40s to 8s reduction in execution time) and we are currently working on closing the remaining gap to hand-tuned GPU code. This talk is a status update on our most recent efforts and also intended to gather feedback on future research plans towards automatically mapping COSMO to FPGAs.
