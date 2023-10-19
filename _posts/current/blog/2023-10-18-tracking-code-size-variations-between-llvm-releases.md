---
layout: post
title: Tracking code size variations between LLVM releases
description: In this blog post, we talk about tracking the size of LLVM
  generated code and look at the results on the latest releases.
date: 2023-10-18 12:13:54 +02:00
image: /assets/images/content/Code_Upstream_72.jpg
tags:
  - LLVM
  - Toolchain
  - Code Size
category: blog
author: Antoine Moynault
---
### INTRODUCTION

Code size is critical for a wide range of software.

First, memory components can be a significant part of the overall cost of embedded devices. Reducing needed embedded memory, or being able to fit more features into it, can be very valuable on such systems.

Also, smaller code size can be beneficial on larger non-embedded systems. And it can sometimes lead to performance improvements [[1](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.joolgy5r17da)], possibly due to a resulting increase in instruction cache efficiency.

In addition, increased memory usage often leads to negative effects. As an example, mobile applications are likely less downloaded if too big, because of limited storage space, application stores rules or carrier data limits. Companies like Meta, Uber and ByteDance have observed this correlation between mobile application size and user engagement, and are working on compiler optimizations to keep that size down [[2](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.7asemjrds1pb)] [[3](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.5pii12p80gdb)] [[4](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.h2fnjtbdz5zw)].

While this code size metric is important, it also has many reasons to grow, like the integration of new features or performance optimizations. Let's note that the code size (machine instructions) is only one part of an application's size, which can also include data (included in binary size) and other resources such as images. It has been shown that the code can be the largest part of the total size [[2](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=kix.7asemjrds1pb)].

Linaro Toolchain Working Group (TCWG) started working on several activities related to this topic, first aiming at helping to reduce code size of the Android Open Source Project (AOSP) [[5](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.fipg69g4k8pz)] on behalf of Google.

This blog post will be about one of these activities: the automated tracking of code size. We'll compare between the latest LLVM releases [[6](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.iytzetzdrla7)], and take a quick look at the largest variations.<br><br>

### CODE SIZE TRACKING USING LNT

Measuring code size on a regular basis has several benefits. It allows detection of significant regressions and improvements. It can also provide interesting feedback on specific developments, and when looking at a higher level, interesting information such as variations between releases.

For now, we have only looked at the code size generated using the -Oz optimization level. Since this level aims to find the best code size at all costs, performances do not really matter here and are not measured for now. This makes the task much easier and faster, as running the compiled binaries is not needed. Code size could also be tracked for other optimization levels in the future, after enablement of performance measurement. These other levels aim at finding tradeoffs between size and performance (-Os, -O2) or at achieving the best possible performances (-O3). 

Code size is measured on SPEC (Standard Performance Evaluation Corporation) benchmarks (SPEC CPU 2006 & SPEC CPU 2017 [[7](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.9hm05gt8ow2w)] for the AArch64 target, and results are submitted to an internal LNT dashboard [[8](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.y9ques5gqdta)]. This is automated in a Jenkins job that runs daily [[9](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.3xuv9uqiebil)]. This work is still ongoing. It may be productized and shared more widely in the future.

LNT (LLVM Nightly Test) is an infrastructure for performance testing. It consists of two main parts: "a web application for accessing and visualising performance data, and command line utilities to allow users to generate and submit test results to the server".

Note that an official LLVM LNT dashboard has been available for a long time, and already provides code size figures for other benchmarks and targets [[10](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.25e64264n7q8)].

There are also several TCWG Jenkins jobs that measure code size on different benchmarks, targets and optimization levels, aiming at detecting significant regressions and improvements, identifying exact responsible commits and notifying developers [[11](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.6akgup371zc2)].<br><br>

### EVOLUTION OF THE CODE SIZE ON SPEC BENCHMARK (AT -Oz OPTIMIZATION LEVEL)

{% include image.html path="/assets/images/content/figure-1-evolution-of-code-size-aarch64-.png" alt="Figure 1: Evolution of code size (AArch64)" width="70%"%}

*Figure 1: Evolution of code size (AArch64) <br><br>*

{% include image.html path="/assets/images/content/figure-2-evolution-of-code-size-x86_64-.png" alt="Figure 2: Evolution of code size (X86_64)" width="70%" %}

*Figure 2: Evolution of code size (X86_64) <br><br>*

Several observations can be made by looking at code size evolution (AArch64 / -Oz) through the last LLVM releases (Figure 1 & Figure 3):

* On average, code size is smaller from release to release since LLVM 10.0. It seems this is not the case on x86_64, maybe because size is less important there (size variations on target x86_64 were not specifically analysed).
* This decrease is constant (since LLVM 12.0), but slight. Only 1% decrease on average on SPEC benchmarks since LLVM 12.0. Less if we compare with LLVM 10.0.

Note that the apparent increase between LLVM 14.0 and LLVM 15.0 is misleading. It actually corresponds to the enablement by default on linux of Position Independent Executable (PIE) generation by clang (Figure 4 V7). A decrease between LLVM 13.0 and LLVM 14.0 also corresponds to a change of default (about FP contraction, Figure 4 V5). Using -fPIE/-pie and -ffp-contract=on for fairer comparison change the variations as shown in Figure 3. Results obtained on X86_64 (Figure 2) would surely also be different doing this. 

* It's mainly something about small variations. Only a few commits stand out for both increase and decrease. Less than 10 commits lead to a code size variation (increase or decrease) of more than 0.1% on average on Smber PEC benchmarks. The biggest variations are listed in the next section.

While the variations caused by these 15 commits look small (from 0.06% to 0.6%), they all contain larger variations on individual benchmarks (ranging from 0.8% to 5.2%). Also, when looking at individual benchmarks, about 40 commits result in a variation of more than 1.0% (not ignoring reverts and relands).

{% include image.html path="/assets/images/content/figure-3-evolution-of-code-size-fixed-aarch64-.png" alt="Figure 3: Evolution of code size - fixed (AArch64)" %}

*Figure 3: Evolution of code size - fixed (AArch64) <br><br>*

### COMMITS IMPACTING -Oz CODE SIZE

{% include image.html path="/assets/images/content/figure-4-commits-impacting-code-size-aarch64-.png" alt="[Figure 4: Commits impacting code size (AArch64)" %}

*Figure 4: Commits impacting code size (AArch64) <br><br>*

<table style="width: 800px; height: 600px;">
<tbody>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400;"><span style="background-color: #ffcc00;">V1</span>&nbsp;</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">+0.15%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[NFCI] SCEVExpander: emit intrinsics for integral {u,s}{min,max} SCEV expressions</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V2</span><span style="font-weight: 400;">&nbsp;</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">+0.06%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[SLP]Improve cost model for the vectorized extractelements.</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V3</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.06%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">Return "[CGCall] Annotate\\`this\\` argument with alignment"</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V4</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">+0.41%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[AArch64] Make -mcpu=generic schedule for an in-order core</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V5</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.56%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">Making the code compliant to the documentation about Floating Point support default values for C/C++.</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V6</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.09%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[IRGen] Do not overwrite existing attributes in CGCall.</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V7</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">+0.60%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">Reland "[Driver] Default CLANG_DEFAULT_PIE_ON_LINUX to ON""</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V8</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.17%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[AArch64] Split fuse-literals feature</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V9</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.09%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[MachineSink] replace MachineLoop with MachineCycle</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V10</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">+0.25%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[MachineOutliner]\[AArch64] NFC: Split MBBs into "outlinable ranges"</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V11</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.09%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[MachineOutliner] Make getOutliningType partially target-independent</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V12</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.08%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[AArch64] Cost-model vector splat LD1Rs to avoid unprofitable SLP vectorisation</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V13</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">+0.09%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[MachineOutliner] Fix label outlining regression introduced in D125072</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V14</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.09%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[AggressiveInstCombine] Enable also for -O2</span></p>
</td>
</tr>
<tr>
<td style="width: 33px;">
<p><span style="font-weight: 400; background-color: #ffcc00;">V15</span></p>
</td>
<td style="width: 54.625px;">
<p><span style="font-weight: 400; color: #ff0000;">-0.22%</span></p>
</td>
<td style="width: 344.375px;">
<p><span style="font-weight: 400;">[AArch64] Combine SELECT_CC patterns that match smin(a,0) and smax(a,0)</span></p>
</td>
</tr>
</tbody>
</table>

These are some of the biggest AArch64 code size variations on SPEC CPU (2006 & 2017) benchmarks since tag llvmorg-13-init, ignoring revert/reland commits.

One can observe that MachineOutliner (V10, V11, V13) and AArch64 target specific patches (V4, V8, V12, V15) represent almost half of these variations. The remaining commits are mostly about generic optimizations (like MachineSink or AggressiveInstCombine). <br><br>

### NEXT

Linaro TCWG is currently working on several other activities related to code size reduction for LLVM AArch64.

* Compiler benchmarking. TCWG also runs multiple other benchmarking jobs, which measure performance and code size generated by LLVM and GCC compilers on various benchmarks and configurations (targets and optimization levels) [[11](<* https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.6akgup371zc2>)].
* Tracking of the AOSP code size. A Jenkins job is run regularly to measure the code size of the AOSP project. If a significant variation is detected (on the whole project or on a subset), the commits since the last build on the AOSP and LLVM repositories are bisected to identify the exact commit responsible for the variation. This should help avoid unexpected code size increases [[12](<* https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.1ht5phb9lfnc>)].
* Identification of compiler tuning opportunities. Experimentation with combinations of optimization flags and thresholds were performed on both AOSP project and SPEC benchmarks. Several optimization flags and thresholds beneficial to code size reduction compared to -Oz optimization level were identified. This could be used for compiler tuning (changing optimizations run by default or default threshold values), or simply for choosing different flags when building. For example, it has been shown that such combinations could lead to ~6% code size reduction on AOSP compared to -Oz \[Figure 6]. Performances were also measured on benchmarks to show the impact on performances, even if not really important at -Oz level \[Figure 5] [[13](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.cgttxxkteh13)]

{% include image.html path="/assets/images/content/figure-5-impact-of-inlining-flags-on-deepsjeng-.png" alt="Figure 5: impact of inlining flags on deepsjeng" %}

*Figure 5: impact of inlining flags on deepsjeng <br><br>*

{% include image.html path="/assets/images/content/figure-6-impact-of-optimization-flags-on-aosp.png" alt="Figure 6: impact of optimization flags on AOSP" %}

*Figure 6: impact of optimization flags on AOSP <br><br>*

* Analysis of code size reduction opportunities using inlining optimization. Specifying a custom inlining threshold value could result in a code size reduction of more than 3% on AOSP compared to -Oz. On this project, tenths of objects are at least 2 times larger with -Oz than with -O2 due to a lower threshold in this level. While this still needs to be analysed, it at least shows that there may be room for interesting improvements here \[Figure 7]. This may be an interesting topic for a future blog post.

{% include image.html path="/assets/images/content/figure-7-code-size-for-inline-threshold-values.png" alt="Figure 7: code size for inline-threshold values" %}

*Figure 7: code size for inline-threshold values <br><br>*

For the LNT dashboard itself, the plan is to continue the tracking, adding measurements obtained with latest LLVM versions everyday. Measurement of performance and of code size generated with other optimization levels could also be added in the future.

For more information on Linaro's work on toolchains and compilers, check out the project page [here](https://linaro.atlassian.net/wiki/spaces/LLVM/overview). You can also contact us at linaro-toolchain@lists.linaro.org. 

{% include image.html path="/assets/images/content/figure-8-lnt-dashboard-14-.png" alt="Figure 8: LNT dashboard" %}

*Figure 8: LNT dashboard [[14](https://docs.google.com/document/d/1Y98bqJ9xPyNSfGESUBlFrFkYEbIo_aRBaZ9rFTGaUFs/edit#bookmark=id.de9gruo50m55)]<br><br>*

### REFERENCES

\[1] [Inlining for Code Size Reduction](https://homepages.dcc.ufmg.br/~fernando/publications/papers/SBLP21Pacheco.pdf)

\[2] [Uber Blog: How Uber Deals with Large iOS App Size](https://www.uber.com/en-FR/blog/how-uber-deals-with-large-ios-app-size/), [CGO21 paper](https://eng.uber.com/wp-content/uploads/2021/02/cgo21main-p112-p-dbdebd6-49049-preprint.pdf)

\[3] [2022 LLVM Dev Mtg: Inlining for Size](https://www.youtube.com/watch?v=8Uiv2RsPim4), [paper](https://dl.acm.org/doi/pdf/10.1145/3519941.3535074)

\[4] [2022 LLVM Dev Mtg: Linker Code Size Optimization for Native Mobile Applications](https://www.youtube.com/watch?v=YXUKxQQ_qTM), [paper](https://arxiv.org/pdf/2210.07311v1.pdf)

\[5] Android Open Source Project <https://source.android.com/>

\[6] The LLVM Compiler Infrastructure Project <https://llvm.org/>

\[7] Standard Performance Evaluation Corporation <https://www.spec.org>

\[8] Linaro LNT dashboard (WIP) <http://llvm.validation.linaro.org:38000/>

\[9] <https://ci.linaro.org/view/tcwg-all/job/tcwg-lnt-run-spec-codesize/>

\[10] LLVM LNT [http://lnt.llvm.org/](https://ci.linaro.org/view/tcwg-all/job/tcwg-lnt-run-spec-codesize/)

\[11] <https://ci.linaro.org/view/tcwg_bmk/>

\[12] <https://ci.linaro.org/view/tcwg_aosp/>

\[13] <https://www.slideshare.net/linaroorg/bkk16308-the-tool-called-autotuned-optimization-system-atos>

\[14] [Linaro LNT dashboard graph](http://llvm.validation.linaro.org:38000/db_default/v4/tcwg_spec_codesize/graph?xaxis_date=yes&normalize_by_median=yes&moving_window_size=10&limit=0&plot.55.10=6.55.10&plot.57.10=6.57.10&plot.59.10=6.59.10&plot.61.10=6.61.10&plot.63.10=6.63.10&plot.65.10=6.65.10&plot.67.10=6.67.10&plot.69.10=6.69.10&plot.71.10=6.71.10&submit=Update)