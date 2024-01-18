---
layout: post
title: Using LLDB to Debug SVE Enabled Applications
description: In this blog, Linaro Engineer Omair Javaid talks us through how to
  debug SVE enabled applications using LLDB. Read more here.
date: 2021-05-04 10:08:31
image: /assets/images/content/tech_background_1.jpg
tags:
  - LLVM
  - SVE
  - AArch64
  - HPC
  - LLDB
  - Debugging
  - Linux Kernel
related_projects:
  - LLVM
category: blog
author: Omair.Javaid@linaro.org
---

Scalable Vector Extension (SVE) is an extension of the Arm v8-A AArch64 instruction set developed to target HPC workloads. The SVE extension introduces a new instruction set which operates on a set of vector and predicate registers. The main striking feature of SVE is its Vector Length Agnosticism (VLA) which practically means that it has 32 size-configurable vector registers called Z registers with a minimum length of 128 bits (16 bytes). The size of each of these Z registers can be increased in multiples of 128 bits upto a maximum of 2048 bits. Unlike traditional SIMD architectures which have a fixed vector register length, SVE only specifies a maximum vector length. This allows for use-case specific vector length configurations on the same hardware as well as on different architecture versions designed for target specific workloads. SVE VLA programming strives to use the same program binary to be run on any implementation of the architecture with different vector length configurations.

SVE’s variable length vector registers have significant implications on how we implement target support in debuggers. Register access of variable sized registers requiring dynamic size update at run-time has never been supported for any targets in the past. After the introduction of SVE extension, Arm contributed debugger support in GDB debugger. Now Linaro has developed complete LLDB debugger support for SVE vector register access with dynamically changing vector lengths for different threads of the same binary.

In the past year Linaro completed development and upstreaming of SVE support in LLDB debugger which is now available in the LLVM 12 release downloadable from [releases.llvm.org](https://releases.llvm.org/). This article describes how to use LLDB to debug SVE enabled applications with dynamically changing vector register size.

Click [here](https://resources.linaro.org/en/resource/nG2VAJVkXiGRCjbDiVW3GX) for a talk on LLDB support in SVE from Linaro Connect SAN19 that provides detailed information on the SVE extension features and our initial plan for supporting SVE in LLDB. Linaro has also been involved in various other Arm architecture enablement projects in LLDB and GDB. You can get an insight on all these projects by watching [our presentation from Linaro Virtual Connect LVC21](https://www.youtube.com/watch?v=5xv5CMHiG2k).

## QEMU virtual environment for LLDB SVE testing

In the absence of real SVE hardware, QEMU AArch64 system mode emulation environment can be used for testing LLDB SVE support. For the purpose of this article we'll be using Ubuntu Linux 18.04 virtual machine. In order to facilitate LLDB testing using QEMU system mode emulation, we have upstreamed helper scripts under [llvm-project/lldb/scripts/lldb-test-qemu](https://github.com/llvm/llvm-project/tree/82f0e3d3ea6bf927e3397b2fb423abbc5821a30f/lldb/scripts/lldb-test-qemu). These scripts enable users to quickly set up a test environment. Click [here](https://lldb.llvm.org/use/qemu-testing.html) for detailed instructions on how to use these helper scripts for setting up an AArch64 SVE virtual machine.

QEMU also has SVE support for Linux user-mode emulation. The Linaro blog [SVE in QEMU's linux-user mode](https://www.linaro.org/blog/sve-in-qemu-linux-user/) has details on how to utilize this feature for SVE debugging using GDB.

## SVE compiler support

[SVE example code](https://developer.arm.com/documentation/101726/0210/Coding-for-Scalable-Vector-Extension--SVE-/SVE-Vector-Length-Agnostic--VLA--programming/For-and-While-loop-vectorization) below adds two integer arrays using function add_int_arrays_acle written using Arm C language extension (ACLE) for SVE. Compiler’s supporting SVE auto vectorization will auto generate similar SVE code without making use of ACLE intrinsics.

LLVM clang compiler does not have auto vectorization in LLVM-12 release but can compile ACLE for SVE code. We may use any of the GCC 9.0 and onwards releases to generate SVE auto vectorization code. Click [here](https://www.google.com/url?q=https://developer.arm.com/tools-and-software/open-source-software/developer-tools/llvm-toolchain/architecture-support&sa=D&source=editors&ust=1620130218065000&usg=AOvVaw2ExP224MQGrxisgoXOr7bZ) for the release timeline of various SVE features in LLVM.

```
#include <arm_sve.h>

#define ARRAYSIZE 2048

int a[ARRAYSIZE];
int b[ARRAYSIZE];
int out[ARRAYSIZE];

void add_int_arrays_acle(int *out, int *a, int *b) {160
  uint64_t i = 0;
  uint64_t vl = svcntw();
  svbool_t pred;
  svint32_t sva, svb, svres;

  pred = svwhilelt_b32(i, (uint64_t)ARRAYSIZE);

  while (svptest_first(svptrue_b32(), pred)) {
    sva = svld1(pred, &a[i]);
    svb = svld1(pred, &b[i]);
    svres = svadd_m(pred, sva, svb);
    svst1(pred, &out[i], svres);
    i += vl;
    pred = svwhilelt_b32(i, (uint64_t)ARRAYSIZE);
  }
}

int main() {
  add_int_arrays_acle(out, a, b);
  return 0;
}
```

## LLVM Compiler options

```
clang -g -O3 -target aarch64-linux-gnu -march=armv8-a+sve
-I//usr/aarch64-linux-gnu/include
-I//usr/aarch64-linux-gnu/include/c++/8/aarch64-linux-gnu sve_add.c
```

## Debugging SVE add integer demo in LLDB

### Step 1: Launch debug session of SVE executable and stop at breakpoint

{% include image.html path="/assets/images/content/image-of-debug-session-of-sve-executable-being-launched-and-stopping-at-breakpoint.png" alt="Image of debug session of SVE executable being launched and stopping at breakpoint" %}

### Step 2: LLDB is able to disassemble SVE specific instructions

LLDB is able to disassemble instructions belonging to Arm v8.7a including SVE specific instructions. SVE specific code can be seen in the disassembly instructions below from address 0x4005e0 to 0x4005f8.

{% include image.html path="/assets/images/content/image-of-disassembly-instructions-sve.png" alt="Image of disassembly instructions for SVE specific instructions" %}

## How to use LLDB to debug multi-threaded SVE application

LLDB can debug multi-threaded linux user applications where each thread has different size configured for Z, P and FFR registers. The following instructions will provide a step by step guide to compile and debug a multi-threaded application containing SVE code.

### Step 1: Download and compile [this sample code](https://raw.githubusercontent.com/llvm/llvm-project/43ded90094f761a4763497773e722c196c69d17e/lldb/test/API/commands/register/register/aarch64_sve_registers/rw_access_dynamic_resize/main.c) from LLDB testsuite.

{% include image.html path="/assets/images/content/sample-code-for-lldb-test-suite.png" alt="Sample code for LLDB test suite" %}

### Step 2: Start LLDB for debugging application compiled above

We can use the linux prctl interface with PR_SVE_SET_VL flag to configure SVE vector length for a particular thread. The demo code in main.c configures SVE vector length 8 x 8 for main thread. It also creates two child threads and configures their vector length to 8 x 4 and 8 x 2 respectively. Let's start a debug session of our demo application using LLDB and examine configured vector lengths for each thread.

Note: If running QEMU to debug SVE code QEMU “-cpu max,sve-max-vq=8” command line option will be needed to configure maximum vector length for the current cpu emulation.

We spawn our QEMU system mode virtual environment and start lldb-server in platform mode.

{% include image.html path="/assets/images/content/image-of-qemu-system-mode-virtual-environment-being-spawned-and-lldb-server-starting-in-platform-mode.png" alt="Image of QEMU system mode virtual environment being spawned and LLDB server starting in platform mode" %}

Now that LLDB is running we will start a LLDB debug session with the executable compiled in step 1. We will set three breakpoints to stop each of the three threads after they have configured SVE vector length and written SVE registers.

{% include image.html path="/assets/images/content/image-of-lldb-debug-session-with-the-executable-compiled-in-step-1.png" alt="Image of LLDB debug session with the executable compiled in step 1" %}

Next we issue a run, ideally all three breakpoints will be hit and we will see execution stopped at all three breakpoints in three separate threads. In case any of the threads have not hit the breakpoints we can issue “(lldb) thread select <thread #>” followed by “(lldb) thread continue” to stop it at the intended breakpoint location. In the picture below all three threads have stopped at the intended breakpoint locations.

{% include image.html path="/assets/images/content/image-of-all-three-threads-having-stopped-at-the-intended-breakpoint-locations.png" alt="Image of all three threads having stopped at the intended breakpoint locations" %}

Now we can select individual threads and read sve registers to verify that each thread has its separate vector length configured and SVE Z and P registers are sized accordingly to their configured vector size.

#### Select thread 1 vector length 8

{% include image.html path="/assets/images/content/thread-1-vector-length-8.png" alt="Image of thread 1 vector length 8" %}

#### Select thread 2 with vector length 4

{% include image.html path="/assets/images/content/thread-2-vector-length-4.png" alt="Image of thread 2 vector length 4" %}

#### Select thread 2 with vector length 2

{% include image.html path="/assets/images/content/thread-2-vector-length-2.png" alt="Image of thread 2 vector length 2" %}

## Future plans

### Hardware Testing

SVE support in LLDB debugger has been tested under QEMU virtual environment. We will have access to SVE hardware in coming weeks and any bugs found during hardware testing will be fixed in future LLVM releases.

### Platform Support

SVE is currently supported on the AArch64/Linux platform, however in future support for Windows and other operating systems needs to be added. We are currently working on improving LLDB for Windows on Arm and will test/fix SVE support in Windows host - Linux target configuration.

For more information on Linaro and the work we do, reach out to us on [our contact page](https://www.linaro.org/contact/).
