---
layout: post
title: "Building GLIBC with LLVM: The How and Why"
description: In this blog we talk about how to build GLIBC with LLVM and why we
  think you should. Read more here!
date: 2023-04-12 10:23:21 +01:00
image: /assets/images/content/30921188158_953bca1c9f_k.jpg
tags:
  - LLVM
  - GLIBC
  - GNU
  - Toolchain
  - Arm
  - Clang
category: blog
author: adhemerval.zanella
---
The GNU C Library (GLIBC) is the GNU project implementation of the C runtime library, and being a GNU project, it is developed and deployed with the GCC toolchain. Due to the strong ties to GCC, the majority of development and testing is done only with it. New features are also often tied to newer GCC features. 

The internal C dialect used for development is even a “GNU C”, which is basically the standard C plus GNU extensions. So even if you are using a compiler that aims to be compatible with GCC, some features used by GLIBC might be missing. And the LLVM project currently can not build glibc. With LLVM being more and more used in different scenarios, what really prevents it from building GLIBC? 

Clang (the LLVM C compiler) does support most if not all of GNU C extensions, and the generated code shows very similar performance and conformance. The issues are a mix of subtle semantic differences between GCC and Clang GNU on extension support, symbol alias definition (used on ABI enforcement), floating point support, and compiler flag support. Fangrui Song from Google wrote a well-detailed [summary of the issues](http://maskray.me/blog/2021-10-10-when-can-glibc-be-built-with-clang). 

In this post we will explore the extra work required to have a functional GLIBC build, and the required additional work on both GLIBC and LLVM projects to be on par with GCC. Linaro has been working in both communities to further upstream all the required work to bootstrap and implement any missing support. We currently have one GLIBC maintainer, with more than a decade of experience with the community, working on the enablement on both GLIBC and LLVM.

But why support another compiler on the GLIBC project? Besides allowing the users to provide an LLVM-only environment, it also improves code portability, [leverages the compiler warnings for multiple compiler implementations](https://sourceware.org/git/?p=glibc.git;a=commit;h=c353689e49e72f3aafa1a9e68d4f7a4f33a79cbe), and adds extra test coverage and possible performance improvements.

## The Journey so Far

Most of the initial work was to make GLIBC build with LLVM LLD linker, which required changes mostly on [the build system](https://sourceware.org/git/?p=glibc.git;a=commit;h=eb06601bb4187d8f5a9f55c2d212747869f63fe1). The GLIBC is usually built and tested with GNU binutils linker (ld.bfd) and using a different linker showed that was possible to clean up a lot of [old code](https://sourceware.org/git/?p=glibc.git;a=commit;h=bca0f5cbc9257c13322b99e55235c4f21ba0bd82) and [remove unused build checks](https://sourceware.org/git/?p=glibc.git;a=commit;h=3ee318c9233ce77dee099f2830e8e29a0c572ca7). There is [still some work to do](https://patchwork.sourceware.org/project/glibc/list/?series=15551), especially because glibc still requires a linker script to support some internal security hardening, which is only supported by recent LLD versions. 

Another front was to remove the usage of unsupported C extensions by Clang, such as [nested functions](https://gcc.gnu.org/onlinedocs/gcc/Nested-Functions.html), and to adapt the external header to be [fully compatible with Clang](https://sourceware.org/git/?p=glibc.git;a=commit;h=d0fa09a7701956036ff36f8ca188e9fff81553d8). The latter is a Clang limitation in the way it handles asm labels. This meant that the header could not be compatible with both the GLIBC build, and Clang itself.

A trick that glibc uses internally to avoid creating external calls is to create internal aliases where the internal header will route the function call to the internal implementation. It is not an error to do so. However, Clang emits a warning that the alias will always resolve to the symbol definition (which is exactly what the code intends). In such cases, where compile warnings are thrown even for correct code, the best approach is just to [silence the compile warnings](https://sourceware.org/git/?p=glibc.git;a=commit;h=8d98c7c00f3f06545de9e5ce5cf778d2ab2450a4).

The Clang integrated assembler also triggered some issues with some assembly implementations.  While most of them can be fixed by using different [assembly directives](https://sourceware.org/git/?p=glibc.git;a=commit;h=114e299ca66353fa7be1ee45bb4e1307d3de1fa2), others, like the usage of GCC specific compiler flags to enable arch-specific support (such as -msse2avx) will need to either be disabled with Clang or have proper support added in LLVM.

GCC-specific compile flags might be used to work around bugs in the linker or associated tools, and removing its dependency [requires refactoring a lot of code](https://sourceware.org/git/?p=glibc.git;a=commit;h=900fa2573671d692ed245f76aa3f05cec462be0c). Fortunately, such cases are rare and new code tries to avoid them.

The latest glibc 2.37 also contains multiple minor fixes, most to avoid compiler warnings (since glibc enables warnings as error as default).

## Current Status

Even though glibc 2.35 to glibc 2.37 added a lot of internal refactoring, it still does not support building with a compiler other than GCC. The glibc and all of the tests can be built with **LLVM LLD**; and, although it is not constantly tested, there is no known issue using it for 32 and 64 bits  ARM and x86.

There is a [work in progress branch that does build with Clang](https://sourceware.org/git/?p=glibc.git;a=shortlog;h=refs/heads/azanella/clang), most of the patches were still not reviewed and the tree not reviewed and subject to change.

## Build Requirements

Using the latest LLVM release 15 and the [work-in-progress branch](https://sourceware.org/git/?p=glibc.git;a=shortlog;h=refs/heads/azanella/clang), it requires 53 patches to just build all glibc for ARM and x86. While most of them are to handle differences in warning flags between Clang and GCC, some are:

1. [Clang specific fixes](https://sourceware.org/git/?p=glibc.git;a=commit;h=085824a254e0caf2b7e38747497a935f2c58adb8) 
2. [Additional LLVM lld fixes](https://sourceware.org/git/?p=glibc.git;a=commit;h=75d48c5c0ad258b2d6e256bada6b29feef7161be) to support some security hardening.
3. [Some Clang issues that shows only at runtime](https://sourceware.org/git/?p=glibc.git;a=commit;h=97f4d30cdc9fc2f9ae5414f884fa1e89f8e913fd), due extra instrumentation not possible due the restricted runtime environment.
4. Missing LLVM support for GCC extensions (for instance -[fexcess-precision=standard](https://sourceware.org/git/?p=glibc.git;a=commit;h=7e5a4ee294e03f42bc3ce1f460f74e7a049a9fa2)). Although the warning issues can be workaround by using suppression them (by configuring with –disable-werror), they have been proved useful to show potential issues on multiple occasions. 


Building the testcase requires about 53 patches.Like the build, the tests requires fixes for:

1. A lot of warnings not present in GCC which in most cases needed to be suppressed.
2. There are also some cases where the tests use GCC-specific compiler flags, and in such cases, the test [needs to be disabled](https://sourceware.org/git/?p=glibc.git;a=commit;h=b4c53ea5eefc7235800b5f6f4445f88a367ed807) (especially if the [tests the flag code generation itself](https://sourceware.org/git/?p=glibc.git;a=commit;h=ecb1339a4e13daf9bffb6517e0e84fde81db8741)).
3. Some test also required to be disabled due missing Clang openmp support ([the x86 libmvec ones](https://sourceware.org/git/?p=glibc.git;a=commit;h=53cd3f2774693cd822315b9142b92ba13e322bad)).
4. Other [fixes also improve code portability](https://sourceware.org/git/?p=glibc.git;a=commit;h=99b4a2da1cfc4b159922ecde3e30a8a96ebfec5a) by not relying specific ‘GNU C’ semantics.
5. Some tests use compiler pragmas to disable optimizations, and it is a matter to use [the Clang-specific ones](https://sourceware.org/git/?p=glibc.git;a=commit;h=69dc737af2ebfac83238374fc871fff0e93e5cf3).
6. Some are just legacy features that [support due to compatibility reason](https://sourceware.org/git/?p=glibc.git;a=commit;h=c99051a7015c4ed96fdd8eb9c83bc54ee0e3d52b) and are required to just be ignored when testing with Clang. Some tests also check for some specific ABI extensions that are not fully supported by Clang ([for instance _Complex with __int128](https://sourceware.org/git/?p=glibc.git;a=commit;h=1556fe207039f625fa438457b31458fc45ed8827) or [libmvec calls through fopenmp](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/x86_64/fpu/configure.ac;h=1bc5af4ebe7c5e6b992674085fa96d2afe73e99c;hb=53cd3f2774693cd822315b9142b92ba13e322bad)) while some are compiler [bugs that need to be investigated](https://sourceware.org/git/?p=glibc.git;a=commit;h=15e3784fd3d53f37e36b567f6eea23d907baaea9). So even though the testsuite builds, the coverage is still not on par compared to GCC.

Finally, some configuration options (for instance –enable-profile=yes) or ABI variant (for instance ARM thumb) are still not fully supported.

## Test Results

Building the test suite is just the first step, We also need to make sure that it does not show any regressions on hardware, real or simulated. 

Compared to the [reference results from 2.37 release](https://sourceware.org/glibc/wiki/Release/2.37) built with GCC, Clang currently shows:

{% include image.html path="/assets/images/content/test-results-gcc-and-clang.png" alt="Test results for GCC and Clang" %}

However with a failure analysis and breakdown, it shows most of the issues as concentrated on specific areas:

1. 21 failures are due Clang stdarg.h wrongly exporting some definitions on some standard modes (for instance if you compiler for POSIX 2001 or POSIX 2008). It will require some [additional fixes](https://reviews.llvm.org/D137268) in LLVM.
2. 18 failures are from fortify support. Fortify uses a mix of glibc headers to provide inline checks for common functions that operate on memory (for instance memcpy or poll), along with compiler builtins to call specific glibc functions that will either trigger an asserst at runtime or call the expected symbol. The LLVM generated code does not match GCC for all required support.
3. From 160 to 331 failures(it varies per architecture) are from math library. The failures are due to two main issues:

a ) _Float128 support (i686): a lot of failures on 32 bits come from wrong results while using the float extensions.

b) Missing expected floating-point exceptions (ARM): a lot of symbols require by standard to issue specific exceptions (for instance overflow or underflow) for some inputs. Internally glibc uses a GCC extension to force the creation of such exceptions, however Clang optimizes it away in most cases. 

 4﻿.  x86 32 bits and ARM show some [iFUNC failures](https://sourceware.org/glibc/wiki/GNU_IFUNC).

 All of them will require work on both LLVM and glibc to narrow them down.

## Future work

Besides fixing all the testsuite regressions with Clang, there are also some specific bits that will need to be fixed to fully use the LLVM toolchain:

1. Provide a way to either select or automatically detect that glibc is being built with Clang to avoid using the GCC runtime (for static build and the GCC provided initiation routines).
2. Add support for compiler-rt within glibc, for both unwinding (used on pthread cancellation and backtrace) and for compiler generated soft floating-point and/or builtin support..
3. Add support to build a complete LLVM only toolchain, along with sysroot, for the supported target (as it is provided for GNU).
4. Add Continous Integration to build and test to avoid regression on both Clang and glibc changes.

We are planning to have build support for the next GLIBC 2.39 release mid-year, and have GCC parity testsuite results by GLIBC 2.40. To find out more about the work we are doing to enable Glibc to be built using LLVM, go to [our project page](https://linaro.atlassian.net/wiki/spaces/LLVM/overview).