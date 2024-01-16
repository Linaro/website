---
layout: post
title: The Evolution Of The QEMU Translator
description: >
  In this article, Alex Bennee looks at the changes the QEMU Translator has seen
  over the last 5 years. Read about the evolutuion of the QEMU translator here!
date: 2020-07-22 01:00:55+00:00
image: /assets/images/content/tech_background_2.jpg
tags:
  - Qemu
  - Toolchain
  - RISU
  - SVE
  - KVM
related_projects:
  - QEMU
category: blog
author: alex.bennee
---

# Introduction

The QEMU team in Linaro sits inside a group known as the Toolchain Working Group (TCWG). The rest of the team spend their time working with compilers and other code generators such as [GCC](https://gcc.gnu.org/) and [LLVM](https://llvm.org/). When dealing with emulation, QEMU has its own module known as the Tiny Code Generator (TCG). It shares many similarities with a compiler albeit one that works with different constraints than your typical compiler. As the code generator works on a just-in-time (JIT) basis it can't afford to spend large amounts of time (or memory!) that a typical compiler does when optimising its output. This is especially true for code that only gets executed once or twice before being flushed out of the cache.

## History

The TCG is actually the second code generator that QEMU has used. Originally QEMU worked as a "template" translator where each individual instruction has a snippet of C code associated with it. The translation was a case of stitching these templates together into larger blocks of code. This meant porting QEMU to a new system was relatively easy because if GCC supported it, you could generate code to run under it. However, eventually the limits of this approach necessitated moving to a new code generator and TCG was born.

TCG has its roots as a generic back end for a C compiler. The main difference is instead of converting an abstract syntax tree from a high level language into micro ops, its input is the decomposed operations of an individual instruction.

A simplified version might look something like this:

```
 static void disas_add_imm(DisasContext *s, uint32_t insn)
 {
       /* Decode Instruction */
       int rd = extract32(insn, 0, 5);
       int rn = extract32(insn, 5, 5);
       uint64_t imm = extract32(insn, 10, 12);
       /* Allocate Temporaries */
       TCGv_i64 tcg_rn = cpu_reg_sp(s, rn);
       TCGv_i64 tcg_rd = cpu_reg_sp(s, rd);
       TCGv_i64 tcg_result = tcg_temp_new_i64();
       /* Do operation */
       tcg_gen_addi_i64(tcg_result, tcg_rn, imm);
       tcg_gen_mov_i64(tcg_rd, tcg_result);
       /* Clean-up */
       tcg_temp_free_i64(tcg_result);
  }
```

The decode step involves dissecting the various fields of the instruction to work out what registers and immediate values are needed. The operation is synthesised from TCG ops which are the basic units of the code generator. After a simple optimisation pass, these ops are then converted into host instructions and executed.

You can see the process yourself if you turn on the debugging options in QEMU although be warned it generates a lot of output:

```
qemu-aarch64 -d in_asm,op,op_opt,out_asm testprog
```

## Evolution

While the TCG has been part of QEMU since 2008 it has seen some changes over time. I've been working in and around it since 2015 and I thought it would be an interesting exercise to look at some of the changes it has seen over the last five years.

### Common Loop and Decode Tree

Originally each guest architecture just supplied a 'gen_intermediate_code' function that dealt with the process of translating a block of guest code into TCG operations. While they all looked fairly similar they also tended to have accumulated their own slight idiosyncrasies. The work to convert to a common translator loop didn't involve any particular bleeding edge technology and was mostly concerned with re-factoring architecture specific parts behind a set of 'TranslatorOps' that would be familiar to anyone who has worked on something like a Linux device driver. The main reason I mention this work is because it opened the way for architecturally independent enhancements to be made functioning of the translator. This includes things like much improved tracing and [TCG plugin](https://qemu.readthedocs.io/en/latest/devel/tcg-plugins.html) instrumentation.

Another recent innovation is the [Decode Tree](https://qemu.readthedocs.io/en/latest/devel/decodetree.html). This started as an experiment with another of QEMU's testing tools known as Random Instruction Sequence (generator for) Userspace [RISU](https://git.linaro.org/people/peter.maydell/risu.git/about/) which is used to test the instruction decoder.

Ideally an instruction set fits into a nice regular and tree like decode pattern. However, reality often gets in the way, especially when ISA designers are trying to squeeze additional functionality into an increasingly crowded opcode space. Eventually you end up with functions like [this](https://git.qemu.org/?p=qemu.git;a=blob;f=target/arm/translate-a64.c;h=73d753f11fbe7878e23cbfaa9df38be4d8b96cbd;hb=HEAD#l14381) which do a series of masked pattern tests in a very particular order to tease out exactly which instruction is being decoded. Needless to say this process is error prone and many bugs have occurred due to mistakes in decoding the opcode.

Decode Tree solves this problem by allowing a simple textual description of the opcode fields and then having a script automatically generate the most efficient decoding of opcode it can. As a bonus it can also automatically extract the fields from the instruction and pass those to a simplified implementation that can just concentrate on the semantics of the operation.

```
static void trans_add_imm(DisasContext *s, arg_rri *a)
  {
      TCGv_i64 tcg_rn = cpu_reg_sp(s, a->rn);
      TCGv_i64 tcg_rd = cpu_reg_sp(s, a->rd);
      TCGv_i64 tcg_result = tcg_temp_new_i64();
      /* Do operation */
      tcg_gen_addi_i64(tcg_result, tcg_rn, a->imm);
      tcg_gen_mov_i64(tcg_rd, tcg_result);
      /* Clean-up */
      tcg_temp_free_i64(tcg_result);
  }
```

Decode Tree was originally written to support the introduction of [SVE](https://www.linaro.org/blog/sve-in-qemu-linux-user/) in QEMU but since then new guests have used it and several existing guest architectures have been converted to use decode tree powered instruction decode.

### Multi-threaded TCG (MTTCG)

The original implementation of system emulation was single-threaded and although user-mode emulation followed the threading model of the programs it translated, this was distinctly flaky in its behaviour. The process of converting QEMU to a fully multi-threaded app had started with the introduction of KVM support but for a long time it was always assumed that TCG had too much global state to make multi-threading viable.

In the end it was a multi-year effort involving contributions from many different sections of the community. You can read about some of the details in a [LWN article I wrote as we approached merge](https://lwn.net/Articles/697265/). There where changes behind the scenes like a lock-less hash table called QEMU Hash Table ([QHT](https://git.qemu.org/?p=qemu.git;a=blob;f=util/qht.c;h=67e5d5b9163f5f33e41f76a7cd261b9f620096f3;hb=HEAD)) which is optimised for the read case as well as front end changes like properly modelling atomic and memory barrier operations.

Now MTTCG is the default for the majority of the mainline architectures and any new architecture tends to support MTTCG from the start.

### TCGv_vec

When we started working on implementing ARM's [Scalable Vector Extensions for QEMU](https://wiki.qemu.org/Features/ARM/SVE) we realised we were taxing TCG's scalar orientated API. Up until that point most Single Instruction Multiple Data (SIMD) instructions where implemented by manually unrolling into a series of scalar operations. While this worked it was somewhat inefficient, especially if the actual implementation would end up in helper calls anyway (as most floating point operations do). Previous proposals for introducing SIMD TCG ops had been rejected because of the large range of vector sizes that would lead to an explosion of TCG ops - one for each vector size.

In the end SVE's vector size agnostic approach would be an inspiration for a new API which can encode a vector op on an arbitrarily sized vector. The interface is rich enough that the backend still has the option of using the hosts own vector instructions to generate code while also providing helper based fallbacks for the cases where we can't. There is still a place for target specific helpers but now they can use the TCGv_vec interface to pass pointers to the register file in a consistent way. While originally written to support SVE work, other targets have started using the interface for their vector implementations.

### Inline dynamic jumps (tb lookup)

The translator works by translating a block of instructions at a time. At the end of the block it can jump to one of two blocks. When these are static addresses, that jump will get patched in, once the next block is translated. If the translator doesn't know what to execute next it exits from the translated code back to the outer loop which will either translate a new block or process some sort of asynchronous operation. However, there is one case where we shouldn't need to make such an expensive exit which is that of the computed jump. The translator can't know at translation time where a jump may go, but it can certainly do the lookup inline and avoid the expensive exit.

## Potential Future Directions

There is still plenty of scope to improve things, so some of things that are being considered for future improvement include:

### Pre-caching for linux-user

While the JIT is fast enough that you don’t notice it even in interactive use it is still quite inefficient in a lot of use cases. A common use case for linux-user mode is using a guest compiler as a fake cross-compiler - effectively running a native compiler on the emulated target hardware. For a typical compilation there is a lot of code that we end up re-generating for every invocation which is a bit of a waste. We could on completion of an execution save our translation cache for the benefit of future runs.

### More efficient chaining for SoftMMU

When running system emulation we disable chaining of generated blocks between pages. This is because at any point the system may swap out a page for different contents at which point we would need to find all blocks that jump into a page and invalidate them. However page granularity is overkill for a lot of the code. For example the kernel typically resides in a fixed series of physical pages and never swaps itself out.

### Hot Block analysis

Currently the JIT doesn’t take into account any hot sequences of multiple blocks. For example most JavaScript engines will detect when a particular sequence of blocks is in a tight loop and then combine the hot-path into a single heavily optimised sequence. By taking the larger block into account you have more opportunities for traditional optimizations like dead-code elimination and register propagation.

### Value propagation

The current optimisation pass is relatively simple as most blocks are quite small and you always need to ensure that values computed in host registers are stored correctly back in the memory that represents the guest registers before the end of the block. However currently we still end up re-loading values more than we need to. Two examples are [constants](https://patchew.org/QEMU/20200508182616.18318-1-richard.henderson@linaro.org/) which are used for multiple operations and store-load propagation where a value is stored in a register and then immediately used for a following operation and is still present in a host register.

### SSA Form

Single Static Assignment (SSA) form is a fairly standard way that compilers use to represent the data flow of a particular set of operations. It is favoured by compilers because it makes analysis easier and optimisations become a matter of transforming a tree of operations. QEMU currently uses a simpler virtual register approach which favours faster code generation. There is a trade-off to be made between fast and optimal code generation that we tend not to worry about with compilers (compare for example a -O0 and -O3 compile). It might be a step too far or it might be the gateway to even faster code. We shall have to experiment ;-)

## Conclusion

It is fair to assume a lot of the work done in the team is about improving QEMU's ARM specific emulation - see for example the recent [changelog](https://wiki.qemu.org/ChangeLog/5.0#Arm) and [ARMv8.5-MemTag](https://wiki.qemu.org/ChangeLog/5.1#Arm) in the upcoming 5.1 release. However, we also benefit from the QEMU being a healthy project that supports a wide range of host and guest architectures. Our goal is still to make QEMU the go to emulation platform for free software developers to experiment with the latest ARM ISA features - as well as the best free software emulation platform for any architecture. I hope this article has given you a flavour of the sort of changes that have been made to the core translator over the last few years. There is certainly more to come as we continue to work on improving QEMU every day.
