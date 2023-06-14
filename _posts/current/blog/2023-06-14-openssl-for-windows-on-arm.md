---
layout: post
title: OpenSSL for Windows on Arm
description: In this blog we talk about how to enable OpenSSL for Windows on
  Arm. Read more here!
date: 2023-06-14 01:14:59 +01:00
image: /assets/images/content/Code_Image_Core_tech.jpg
tags:
  - Windows on Arm
category: blog
author: everton.constantino
---
[OpenSSL](https://github.com/openssl/openssl) is one of the most well known open source cryptographic libraries. It is widely used by several different projects and as such is a cornerstone of the open source and enterprise ecosystem as a whole. It has supported Windows for quite some time and as Linaro pushes forward with Windows on Arm enablement, it was a crucial but natural move to enable OpenSSL as well. Here we describe some challenges regarding this enablement and some optimizations we have made.

# Native versus emulation: The results

Currently, Windows on Arm machines have support for two different modes of execution. One can either run x86/x64 code via emulation or native Arm64 instructions. While this is a great way to allow users the possibility to run applications compiled for x86, there is a performance hit, that might be pretty significant in some cases. Another complication of emulation, particularly for libraries, is that you can’t mix native and emulated so your whole set of dependencies needs to be either fully native or fully emulated.

After initial enablement of OpenSSL, running some benchmarks revealed some interesting results. The following shows the execution of MD5 using both OpenSSL compiled for x86 and native Microsoft Visual C++ (MSVC).

{% include image.html path="/assets/images/content/openssl-native-results.png" alt="Openssl native results" %}

Here ci is the native Arm64 version, compared against the emulated one. The graph shows the number of MD5s executed in 3s. This shows that although we were compiling OpenSSL natively, the performance on some algorithms was still quite bad compared to the emulated version. So this poses the question, why wasn’t OpenSSL performing better natively?

# The problem: No tool for Arm which handles assembly code

The problem here is borne out of the fact that MSVC does not have a seamless way to handle assembly code. The OpenSSL team, for x86, uses Netwide Assembler ([NASM](https://nasm.us/)) along with Visual Studio to compile. Unfortunately, the Arm ecosystem has no tool like NASM for Windows.

# Linaro’s proposed solution:

[Linaro’s proposed solution ](https://www.google.com/url?q=https://github.com/openssl/openssl/pull/19523&sa=D&source=docs&ust=1686750347163993&usg=AOvVaw00a4HiffYWpHVIFxmPLAlW)explores the fact that the [LLVM](https://llvm.org/) project’s clang-cl tool, unlike MSVC, can handle the assembly code written using GAS syntax, with a relatively small amount of code change. We have added two new build targets, one still uses MSVC for all the non-assembly code generation and the other uses clang-cl fulfilling both roles as compiler and assembler. 

The above benchmark now with all available configurations can be seen below.

{% include image.html path="/assets/images/content/openssl-proposed-linaro-solution.png" alt="openssl proposed linaro solution" %}

Notice that in this particular case OpenSSL was compiled on hardware that lacks the crypto extension. Also, using clang-cl as just an assembler is just slightly better than full MSVC however using LLVM as both compiler and assembler is considerably better. Benchmarks for SHA512 show a different behaviour.

# Linaro’s solution: Using clang-cl as the assembler

{% include image.html path="/assets/images/content/clang-cl-as-the-assembler-openssl.png" alt="clang cl as the assembler openssl" %}

Here the improvements gained from using clang-cl as the assembler are quite obvious. Further analysis on the full benchmark needs to be done, evaluating all the points where performance is still not as expected along with possible causes and solutions. One drawback from our measurements right now is that we are not building for targets with the crypto extension. Because of that we are using the generic implementation even when compiling with assembly support as there is no alternative when the extension is not available. The results obtained are usually equivalent to or just slightly better than the emulated version. 

Linaro continues to drive forward the Windows on Arm ecosystem and results like this prove our commitment to keep it in good shape. We are aware that further investigations and improvements are still required and we will stay committed to improving and enhancing the open source environment for the platform. 

For more information on the Linaro Windows Project, go to <https://www.linaro.org/windows-on-arm/>