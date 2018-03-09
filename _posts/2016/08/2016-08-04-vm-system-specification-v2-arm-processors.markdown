---
author: christoffer.dall
date: 2016-08-04 09:05:03+00:00
excerpt: The goal of this spec is to allow suitably-built OS images to run on all
  virtualization solutions for ARM processors, such as KVM or Xen. Recommendations
  in this spec are valid for AArch32 and AArch64 alike, and they aim to be hypervisor
  agnostic.
layout: post
link: /blog/vm-system-specification-v2-arm-processors/
slug: vm-system-specification-v2-arm-processors
title: VM System Specification V2 for ARM Processors
wordpress_id: 11304
categories:
- blog
tags:
- white paper
---
Christoffer Dall, Virtualization Tech Lead
Version 2.0, Last Revised: April 4th, 2016

[Download PDF](/app/resources/WhitePaper/VMSystemSpecificationForARM-v2.0.pdf)

The goal of this specification is to provide a set of guidelines for both guest Operating System (OS) images and hypervisor implementations for ARM processors, such that building OS images according to the guidelines in this specification guarantees that those images can also run on hypervisors compliant with this specification.
