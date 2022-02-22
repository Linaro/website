---
layout: post
title: Reducing code size with LLVM Machine Outliner on 32-bit Arm targets
description: >
  In this article we talk about how the LLVM release will see 32-bit Arm targets
  gain full support of the Machine Outliner code size optimization for Arm and
  Thumb-2 instruction sets. 
date: 2021-04-13 02:26:45
image: /assets/images/content/code_highway-2-.jpg
tags:
  - LLVM
  - Machine Outliner
  - Code optimization
  - Arm software
related_projects:
  - LLVM
category: blog
author: yvan.roux
---
With the upcoming release of LLVM 12.0.0, 32-bit Arm targets have gained the full support of the Machine Outliner code size optimization for Arm and Thumb-2 instruction sets. The expected code size gain provided by this optimization is around 5% on average (you can jump straight to the results part for more details). It is not turned on by default (see How to use it section) but our goal is to have it enabled under -Oz for all Arm cores inside LLVM 13.0.0.

Function outlining is a compilation process which consists of replacing a chunk of consecutive statements with a call to a new function containing those statements. In a nutshell, it is the inverse of the well known inlining optimization. It is used in different areas of compilation to achieve various goals such as code refactoring or kernel extraction in source to source compilers, shrinking large functions to reduce compile time in JIT compilers, or performance improvement by splitting hot and cold regions of a function and performing partial inlining as presented in \[1].

As mentioned above, the Machine Outliner objective is code size reduction, close to what Identical Code Folding (ICF) at link time is doing \[2]. It is an interprocedural optimization (i.e not tied to function boundaries) which operates on LLVM machine specific intermediate representation (a.k.a MIR) at the last step in the optimization pipeline, right before code emission (code selection, register allocation, instruction scheduling, etc. are already done).

Let’s look at a simple example:

{% include image.html path="/assets/images/content/machine-outliner-example-1.png" alt="Machine Outliner Example 1" %}

In the Arm assembly generated for this C code, we can see (on the left side) that the highlighted instructions on lines <3,4,5>, <9,10,11> and <15,16,17> are exactly the same, and thus candidates for being outlined. The Machine Outliner will identify this redundancy, extract the code into a new function, and replace it by calls to this function as can be seen below:

{% include image.html path="/assets/images/content/default-code-generation-vs-outlined-version.png" alt="Default code generation vs outlined version" %}

## History

Machine outlining optimization pass was originally developed by Jessica Paquette from Apple in 2016 \[3] and presented at the LLVM developers’ meeting \[4]. It was primarily developed for AArch64 (with a minimal support for X86_64 as well) and firstly available in the LLVM 5.0.0 release. It was later extended for RISC-V targets and included in the LLVM 10.0.0 release in 2019. For 32-bit Arm, we have made an initial version available in LLVM 11.0.0 and we have continued to improve it in order to deliver complete support in LLVM 12.0.0.

## How does it works

The algorithm can be divided into three steps:

### **Identification of candidates**

This is done by walking through all the basic blocks of the program to find the longest repeated sequences of MIR instructions, which can be reduced to the longest common substring problem \[5] where basic blocks are the strings, and instructions the characters.This class of problems can be solved efficiently with a generalized suffix tree representation.

In the example below, the two functions calc_1 and calc_2 can be represented by strings ABABC and AABC respectively. A generalized suffix tree is built after padding these strings with a unique terminator (# and $). The depth of an internal node of this tree represents the length of a candidate and the number of leaf nodes reachable from it, the number of times it is repeated. Looking for repeated substrings which have a minimum length of two in our example will give us BC which is repeated two times, AB repeated three times and ABC repeated two times.

{% include image.html path="/assets/images/content/generalized-suffix-tree-for-strings-ababc-and-aabcc.png" alt="Generalized suffix tree for strings ababc and aabcc" %}

### **Removal of unsafe or unbeneficial cases**

Now that we have a list of candidates, we have to take care that outlining these pieces of code will not break the program behavior and will actually reduce its size. Indeed not all instructions can be safely extracted. Conditional branches are part of the instructions or sequences which can’t be safely outlined, like when an operand is an index of a constant pool or jumptable for instance or if the sequence contains a label which is used to compute an offset position-independent code (PIC) mode, etc… Thus, such candidates are removed from the list. See below a slightly modified example:

{% include image.html path="/assets/images/content/machine-outliner-removal-of-unsafe-or-unbeneficial-cases.png" alt="Machine Outliner-Removal of unsafe or unbeneficial cases" %}

We have two candidates on lines <2,3,4> and <10,11,12> and two more on lines <6,7> and <14,15> which would, once outlined, give the code below which is broken. Indeed the return instruction outlined on line 14 is predicated and is only executed if r0 is lower or equal to r1, which means that if it is not the case when OUTLINED_FUNCTION_0 is called on line 2, the program will not come back to perform the subtraction on line 3 as it should do, but fallthrough and execute the multiplication on line 17 which is not the correct behaviour of the program.

{% include image.html path="/assets/images/content/machine-outliner-example-2-of-removal-of-unsafe-or-unbeneficial-cases-.png" alt="Machine Outliner-Example 2 of Removal of unsafe or unbeneficial cases" %}

Let’s continue with our example, now that unsafe candidates have been removed, we only have two instructions from two call sites outlined into one function, the size of our binary file is 28 bytes (12 instructions of 4 bytes: 5 in calc_1, 5 in calc_2 and 2 in OUTLINED_FUNCTION_1) which is the same size as the file obtained without outlining, so there is no point in doing it in such cases. To guarantee that the code size is reduced when a candidate is outlined, we need to check that this inequality is true, and remove the candidates otherwise:

N x Co + Cs + Fo < N x Cs

Where:
N is number of candidate occurrences
Cs is the size in byte of a candidate
Co is the overhead (added instructions) in byte at call site
Fo is the overhead (added instructions) in byte in the outlined function

### **Function splitting**

Once we have a safe list of candidates, it remains to actually transform the code, by creating the new functions and replacing each candidate by calls. But given the nature of the instructions which compose a candidate, or their context, it is not always as straightforward as what we have seen in previous examples.

Let’s look at the three cases presented in the table below:

{% include image.html path="/assets/images/content/function-splitting-table.png" alt="Function Splitting Table" %}

In calc_1 the outlined region is not a tail-call or a return instruction this time, thus it is needed to insert one (line 14) and a Branch with Link (bl) is used to call the outlined function (which will save the return address into the link register lr). It is the same thing for calc_2, but it is also needed to save and restore lr around the call (lines 2 and 4) to preserve the return address used on line 6, it can be done either by using a spare register (like r4 in our case) or by pushing it on the stack if none are available. The last case adds another constraint, because the region outlined from calc_3 contains a call to another function (line 15), lr needs to be saved and restored (lines 9 and 17) in order to jump back to the correct address. As it is done on top of the stack, the offsets of the instructions which are accessing it must be changed accordingly (line 12).

## How to use it

The Machine Outliner pass is enabled by default inside the aggressive code size optimization level -Oz for AArch64 and M-profile cores for 32-bit Arm, but it can also be invoked manually or disabled with the -moutline/-mno-outline flags.

{% include image.html path="/assets/images/content/machine-outliner-pass.png" alt="Machine Outliner Pass" %}

It is also possible to get information about the transformation made by the pass, by using LLVM remarks for it with flag -Rpass=machine-outliner, for instance in our first example it will give:

{% include image.html path="/assets/images/content/rpass-machine-outliner.png" alt="Rpass-machine-outliner" %}

## Results

As we have seen, Machine Outlining is always a win-win for code size optimization, in the worst case your code will not be touched at all, but on average the expected code size reduction on top of the existing aggressive code size optimization level -Oz is \~5% for Arm mode and \~4% for Thumb-2. If we look at a benchmark suite such as SPEC CPU 2017, we see that we obtain the best results on large benchmarks (up to 14% on parest for instance) which is expected since there are better chances to find repeated sequences of instructions in a large code base than in tiny tuned mathematical libraries for instance. It is also very beneficial when combined with Link Time Optimization (LTO) which operates on the whole program and not per files and already provides some very good results. The Machine Outliner can go further as we can see on blender (-14% in LTO and -23% with the Outliner) or gcc (-8.5% in LTO and -18.7% with the Outliner) for instance.

{% include image.html path="/assets/images/content/spec-cpu-2k17-code-size-in-arm-mode.png" alt="SPEC CPU 2K17 Code Size in Arm table" %}

{% include image.html path="/assets/images/content/spec-cpu-2k17-normalized-code-size-in-arm-mode.png" alt="SPEC CPU 2K17 Normalized code size in Arm table" %}

## Bibliography

\[1] <https://webdocs.cs.ualberta.ca/~amaral/papers/ZhaoAmaralSBAC05.pdf>

\[2] <https://storage.googleapis.com/pub-tools-public-publication-data/pdf/36912.pdf>

\[3] <https://lists.llvm.org/pipermail/llvm-dev/2016-August/104170.html>

\[4] <https://www.youtube.com/watch?v=yorld-WSOeU>

\[5] <https://en.wikipedia.org/wiki/Longest_common_substring_problem>

For more information on Linaro and the work we do, do not hesitate [to contact us](https://www.linaro.org/contact/).