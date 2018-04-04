---
author: joakim.bech
categories:
- blog
comments: true
date: 2015-07-06 19:24:58
description: Getting a TEE driver into Linux upstream has been the ultimate goal for
  a long time. This blog post will talk about the history, design choices and lessons
  learned when implementing and submitting a generic TEE driver for the Linux kernel.
excerpt: ' Getting a TEE driver into Linux upstream has been the ultimate goal for
  a long time. This blog post will talk about the history, design choices and lessons
  learned when implementing and submitting a generic TEE driver for the Linux kernel. '
layout: post
link: /blog/evolution-of-a-generic-tee-kernel-driver/
slug: evolution-of-a-generic-tee-kernel-driver
tags:
- Linaro
- OP-TEE
- Security
- TEE
- TrustZone
title: Evolution of a generic TEE kernel driver
wordpress_id: 8867
---

## **What is TrustZone?**

A [Trusted Execution Environment](http://en.wikipedia.org/wiki/Trusted_execution_environment) (TEE) is a hardware assisted tamperproof secure environment where you can run software that are isolated from the rest of the system, such as Linux and other operating systems. The software for a TEE can be implemented in various ways, the crucial thing is to have hardware support. It could for example be an external co-processor or it could be something directly integrated on the chip. To support the TEE concept, ARM® introduced the TrustZone® technology back in 2003. TrustZone is directly integrated into the processor but also extends throughout the system via the AMBA® AXI™ bus and specific TrustZone System IP blocks. Software needed to have a full TEE environment normally consists of some piece of code running on the non-secure side, such as code running in user space in Linux and a supporting Linux kernel driver. Likewise on the secure side, you need to implement software that are running the Trusted OS.

To read the full post please visit: [/blog/evolution-of-a-generic-tee-kernel-driver-2/](/blog/evolution-of-a-generic-tee-kernel-driver-2/)