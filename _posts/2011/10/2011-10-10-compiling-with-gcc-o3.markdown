---
author: linaro
categories:
- blog
date: 2011-10-10 22:18:34
description: Discussion of Linaro toolchain working group focus, and the enablement
  of -O3 flag
keywords: Linaro, ARM, Linux on ARM, ARM Linux, gcc-o3, ARM SOCs, Linux, Kernel
layout: post
link: /blog/community-blog/compiling-with-gcc-o3/
slug: compiling-with-gcc-o3
tags:
- Community
title: Compiling with gcc -O3
wordpress_id: 598
---

Since its inception, the Toolchain Working Group's focus has been on performance, particularly on improving the speed of compiled code. For each tool, we've decided to pick a theme per quarter and use this to focus the many, small improvements we do, while also giving better visibility into their results.

The compiler theme for next quarter is enabling the -O3 flag. GCC has a range of optimization levels that can be turned on while compiling code from the basic -O1 (basic optimization, best debugging), to -O2 (good optimization, always improves performance), and through to -O3 (best performance, may regress in some areas). The -O3 flag enables many of the advanced features that we've been contributing to, such as the vectorizer, but following historical correctness and size issues, distributions normally build at the -O2 level. This theme covers investigating, improving, and documenting the results to help distributions justify turning on -O3 to get up to 10% speed improvement.

Some of the advantages of gcc -O3 are:

  * It enables existing features, giving a significant speed up for little development


  * It turns on the vectorizer and NEON unit by default, giving improvements across a variety of workloads


  * It activates new features in areas that we've more recently been working on


Two such areas the Toolchain WG has been focusing on are the vectorizer and Swing Modulo Scheduling (SMS). The GCC vectoriser recognises code that has data parallellism, re-writes it to perform the same operation on many values at once, and then transforms it into the equivalent NEON instructions. The best cases are where the code transforms eight independent single-byte operations into one, eight-byte wide operation, which has been seen to make hot loops up to 550% faster!

Swing Modulo Scheduling (SMS) recognises loops containing instructions with high latency, especially memory loads, and re-writes them into a prologue, body, and epilogue. The prologue makes the very first value available, the first half of the body loads the n+1 value, the second half uses the n value, and the epilogue finishes the final value. This helps particularly on the A9 with its high load latency; some loops run 30% faster.

SMS currently needs to be explicitly turned on. We plan to justify turning it on at -O3 and preferably at -O2 as well. Overall, -O3 work has been broken down into three phases: initial investigation, improvements, and documenting. The relevant areas of work are:


  * Decide on suite of benchmarks and packages to test against


  * Benchmark the size and speed change


  * Fix any correctness regressions found through the suite


  * Fix any speed regressions such that 90 % of the workload is faster at -O3


  * If needed, fix any significant size regressions


  * Document the change in size both on disk and in memory


  * Document when to use -Ofast


  * Enable -O3 on one or more LEBs such as Android


  * Document the gains and publish a white paper on why you should use -O3


The documentation should have enough information on the gains to be had and the impact, for a distribution to make an informed decision. Possible concerns are the speed boost, any speed regressions, change in size, and correctness. In particular, size is interesting as there are many levels to it; building at -O3 generally increases the size of the code, but usually has a lesser effect on the size in RAM, on-disk, and the overall size of a distribution: each step mixes in overhead such as as constant data, resources, and documentation.  Android is a useful test as, being completely cross-built, it's straightforward to enable the feature, run the existing test plans, and measure the changes.

The main area of risk in this work is the sheer number of improvements and fidelity needed such that the vast majority of code runs faster at -O3. It is straight forward to pick a certain routine and tune an optimization to do well on that, but more difficult to add and tune rules so that an optimization doesn't slow down other code. For example, with SMS, a loop changes from operating on just the n'th loop to both the n'th and n+1. This increases the number of variables that are live at any one time, which increases the number of registers needed, which may cause the rest of GCC to shuffle values back and forth to memory. One of the first steps with SMS is to add a cost model that recognises this case and backs off on using SMS when it occurs.

As you can see, the upcoming months should offer a number of exciting changes on the compilation front. If you use linaro-gcc internally and are interested in following this work more closely, please contact Michael Hope, tech lead for the Toolchain WG, at michael.hope@linaro.org.