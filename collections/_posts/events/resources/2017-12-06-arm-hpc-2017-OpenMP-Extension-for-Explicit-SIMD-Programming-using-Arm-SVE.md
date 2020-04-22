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
title: OpenMP Extension for Explicit SIMD Programming using Arm SVE
speakers:
 - name: Jinpil Lee
   job_title: RIKEN AICS
   image: ""
   email: ""
   bio: >
      Jinpil Lee received his PhD degree in computer science from University of Tsukuba in 2013, under the supervision of Prof. Mitsuhisa Sato. From 2013 to 2015, he was working in KISTI, the national supercomputing center in Korea. Currently he is working at Riken AICS in Japan, doing research about directive-based parallel programming models.
slideshare: ""
s3_video: ""
s3_presentation: ""
youtube_video: ""
---
Recent trends in processor design accommodate wide vector extensions. SIMD vectorization is more important than before to exploit the potential performance of the target architecture. The latest OpenMP specification provides new directives which help compilers produce better code for SIMD auto-vectorization. However, it is hard to optimize the SIMD code performance in OpenMP since the target SIMD code generation mostly relies on the compiler implementation. In this research, we propose a new directive that specifies user-defined SIMD variants of functions used in SIMD loops. The compiler can then use the user-defined SIMD variants when it encounters OpenMP loops instead of auto-vectorized SIMD variants. The user can optimize the SIMD performance by implementing highly-optimized SIMD code with intrinsic functions.
