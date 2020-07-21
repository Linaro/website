---
layout: post
title: The Evolution Of The QEMU Translator
description: >-
  The QEMU team in Linaro sits inside a group known as the Toolchain Working
  Group (TCWG). The rest of the team spend their time working with compilers and
  other code generators such as [GCC] and [LLVM]. When dealing with emulation,
  QEMU has its own module known as the Tiny Code Generator (TCG). While the TCG
  has been part of QEMU since 2008 it has seen some changes over time. I've been
  working in and around it since 2015 and I

  thought it would be an interesting exercise to look at some of the changes it has seen over the last five years.
date: 2020-07-23T02:11:12.000Z
image: /assets/images/content/tech_background_2.jpg
tags:
  - QEMU
  - Toolchain
  - Toolchain Working Group
  - TCWG
  - TCG
  - RISU
category: Blog
author: alex.bennee
---
# Introduction

The QEMU team in Linaro sits inside a group known as the Toolchain Working Group (TCWG). The rest of the team spend their time working with compilers and other code generators such as \[GCC] and \[LLVM].  When dealing with emulation QEMU has its own module known as the Tiny Code Generator (TCG). It shares many similarities with a compiler albeit one that works with a within different constraints than your typical compiler. As the code generator works on a just-in-time (JIT) basis it can't afford to spend the large amounts of time (or memory!) that a typical compiler does when optimising it's output. This is especially true for code that only gets executed once or twice before being flushed out of the cache.