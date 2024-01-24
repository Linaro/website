---
layout: post
title: Python and Go in the Arm World
description: In this article, Siddhesh Poyarekar takes a detailed look at Python
  and Go in the Arm World. Read about his findings here!
date: 2019-12-17 03:46:40
image: /assets/images/content/code_banner.jpg
tags:
  - Arm
  - Python
  - Server
category: blog
author: siddhesh.poyarekar
---

Siddhesh Poyarekar is Linaro Developer Services' Toolchain expert, having worked on glibc upstream since 2012 and a number of different projects before that. Recently, Linaro Developer Services completed work which involved studying and fixing packages in Python and Go ecosystem. In this blog, Siddhesh summarises his findings, including the most common problems encountered on the way.

Over the past few months we have studied a number of packages in the Python and Go ecosystem to verify that they work on Arm64 servers. Being high level languages, the general assumption is that things should just work and this was true for the majority of packages we looked at. There were a few however that had to be fixed in a variety of ways to make them work correctly on Arm. Over time we realized that there were a few recurring issues across packages.

The common thread binding packages with issues on aarch64 was that they had some native C/C++ code; a few had embedded assembly. This may have been for a number of reasons, ranging from simply having to interface with a library that is written C/C++, to tweaking specific sensitive parts of the code to get the optimal performance. Interestingly, the ones with embedded assembly often had aarch64 variants already included or at least a sane C fallback. It was the ones with C/C++ code - something that ought to work out of the box - that broke. Here are three of the most interesting, and frequent problems we encountered on our journey.

## Floating point comparisons

This was by far the most common problem we encountered across packages. A number of packages had test cases that compared results of floating point computations with predetermined values. The test would fail if the comparison failed. The problem with this kind of testing is that floating point computations can have small differences in results due to minor differences in the computation sequence that may mathematically mean the same thing.

To their credit, many of the mature packages like scipy and numpy had floating point test cases with tolerances built in, i.e. they only required their results to be accurate within a tolerance threshold and that’s the right way to do this kind of testing. Even so, these thresholds need to be adjusted for architectural differences.

A key architectural difference in floating point computations is the floating point Multiply+Add operation, i.e. an operation of the form M\*A+B. This operation can either be executed on a machine as two instructions, i.e. an add followed by a multiply or as a single FMA (Fused Multiply Add) instruction. The rounding semantics (and hence the result) of both these variants of operations are different and hence depending on what instruction sequence is selected, the output may vary. The two multiply and add instructions for example, have a rounding step in between that may change the input that goes into the add instruction. The fused multiply-add instruction on the other hand, may not necessarily have that rounding step in between and hence the input into its add step may be different by 0 or more bits compared to the two separate instructions.

This difference becomes evident when compiling for aarch64 as opposed to x86_64. The default build options on x86_64 are conservative so that the resultant binaries execute on all target machines ranging from the Atom to the very latest Intel or AMD offering. The downside of this is that the resultant code always uses the two instruction variant of multiply-add for floating point since the FMA extension is not available on older x86_64 processors. Compilers for aarch64 on the other hand emit the fmadd instruction by default and as a result, a floating point computation involving multiply and add operations will end up with different results on aarch64 as opposed to x86.

The easiest way to work around this is to adjust tolerance of floating point comparisons wherever possible. In cases where adjustment is not possible, users should prefer the fused version of multiply add since it is typically faster and is the way forward for all architectures. This means that on x86, one should move towards building with FMA by default and falling back to old code only if FMA is not present.

## Converting floats

A relatively more hazardous and yet surprisingly ubiquitous issue was the conversion of floating point numbers to integers. The ISO C standard defines conversions from floating point to integer types as follows:

\ _6.3.1.4 Real floating and integer_

\ _1 When a finite value of real floating type is converted to an integer type other than \_Bool,_

\ _the fractional part is discarded (i.e., the value is truncated toward zero). If the value of_

\ _the integral part cannot be represented by the integer type, the behavior is undefined. 50)_

The first part of the statement does say that the fractional part is discarded but the second part is key. If the integral part cannot be represented by the integer type, the behaviour is undefined. This means that if a negative floating point number is cast to an unsigned integer, the result is undefined. The same holds when a floating point value cast to an integer type is larger than the largest value the type can accommodate; the result is undefined.

In both of these cases, the x86_64 instruction cvtsd2si happens to set the result to a value that approximates the integer value, either by truncating the bit pattern or emulating an overflow. Due to this, a cast of -2.7 to unsigned integer would give -2 on x86_64. On aarch64 though, the corresponding fcvtzu instruction (or fcvtzs for signed conversion), if the result does not fit into the range of the target, the result is simply set to zero.

This undefined behaviour is non-trivial to detect and trap and it is recommended that developers audit their code to find such cases. Using the Undefined Behaviour Sanitizer in the libsanitizer library is a useful tool as well; this can be enabled with the -fsanitize=float-cast-overflow instrumentation flag in gcc or llvm.

This behaviour need not turn up in plain old C/C++ either, even high level statically typed languages such as Go inherit these undefined behaviour semantics. Dynamically typed languages may do the right thing since it is their responsibility to do these conversions; python for example sets results that are consistent across aarch64 and x86_64 for corner cases.

## Using Multiple Cores

The x86_64 world is dominated by CPUs with few cores, each with high clock speeds. As a result, the incentive to parallelize jobs is not that great. The situation changes greatly when one moves to Arm64 servers. In this world high core counts (32+) are common with each core having relatively low clock speeds for superior power management. Porting a typical python program to this world can breach hard coded assumptions of performance when in reality, the program is just not using all of the resources at its disposal.

One key improvement area is in builds. Builds managed using makefiles have long been capable of being parallelized and as a result builds of traditional software, such as the Linux kernel or gcc, scale quite well on Arm64 servers. The Python world however is dominated by setup.py build, which is single-threaded. Changing this would require a significant effort in getting components such as Cython to recognize dependencies so that they can build source files in parallel.

The Go ecosystem doesn’t do much better either since even if projects have Makefiles, they’re typically just wrappers for sequential go build & go test and there’s little in there to ensure that independent targets are built in parallel.

## Conclusion

Arm64 servers are gradually making their way into data centres due to their superior power management capabilities and improved performance/watt. Ecosystems around high level languages such as Python and Go make it incredibly easy for developers to build and deploy their applications and with some work, we can make sure that these applications can make the most out of the resources they have, and in a safe manner, on Arm64 servers. We shared some gotchas to look out for in applications which ought to be useful for porting applications to aarch64. These are just some common problems we saw and we’re sure there may be more related to undefined behaviours that x86 characteristics may mask. Hopefully this serves as a starting point for developers to embark on their Arm64 server journey.