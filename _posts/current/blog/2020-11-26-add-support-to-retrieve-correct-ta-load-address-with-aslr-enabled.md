---
layout: post
title: Add Support to Retrieve TA Load Address w/ ASLR Enabled
description: This blog details how two interns enabled debugging in Open
  Portable Trusted Execution Environment (OPTEE) using GDB. Read more here.
date: 2020-11-26 12:46:01
image: /assets/images/content/intern.jpg
tags:
  - OP-TEE
category: blog
author: paolo.valente
---

## Proud to Support Internships.

Recently two interns worked with Linaro to solve a real engineering problem. We are grateful for the work they undertook and this blog details their achievements: -

Luca and Simone have enabled debugging in Open Portable Trusted Execution Environment (OPTEE) using GDB. We added support to retrieve the correct load addresses of Trusted Applications (TA) even when ASLR (Address Space Layout Randomization) is enabled. ASLR is a new functionality that shuffles memory addresses to improve security against malicious memory accesses; in this context, the load address of a TA is unknowable at prior, requiring a check at execution time to build the symbols table of GDB with the actual addresses.

## Contribution

ASLR (Address Space Layout Randomization) in OP-TEE environment randomizes memory locations of executing applications to improve security against malicious accesses. This feature doesn't allow to debug an application without considering this randomization, because locations of executed applications are set at runtime.

So, for GDB to be able to debug an application, it has to retrieve the correct load address of that application. This is exactly what this script does, getting the actual load address from OP-TEE to allow debugging.

This contribution was developed under the supervision of Joakim Bech and Jens Wiklander from Linaro. Patches have been sent individually to the OP-TEE maintainers who are evaluating and refining the patches so they should be ready to be included in the OP-TEE project.
