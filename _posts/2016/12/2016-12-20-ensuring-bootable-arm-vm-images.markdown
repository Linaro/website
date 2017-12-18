---
author: christoffer.dall
categories:
- blog
comments: true
date: 2016-12-20 16:39:41
keywords: virtualization, kvm, xen, arm, aarch64, qemu, cross-distro, standards
layout: post
link: /blog/core-dump/ensuring-bootable-arm-vm-images/
slug: ensuring-bootable-arm-vm-images
tags:
- Core Dump
- AArch64
- arm
- cross-distro
- KVM
- qemu
- standards
- virtualization
title: Ensuring Bootable ARM VM Images
wordpress_id: 11992
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" %}

_A while back, during Linaro Connect 2013, Riku Voipio (Linaro) asked a simple but important question: “When you guys are done building hypervisors that work on ARM, how do we actually make sure that a user can run something on there?”. Of course, he didn’t have in mind that users could manually build a kernel with the required options, remember a long and complicated QEMU command line, bootstrap their own root file systems, pray to the KVM gods, and hope to get a system running. Instead he was thinking of the general problem of how distribution vendors could package a cloud image that was known to work across multiple versions of multiple different ARM hypervisor implementations._

To address this problem, we started writing the [VM System Specification for ARM Processors v2](/assets/downloads/VMSystemSpecificationForARM-v2.0.pdf). There are two versions of this spec, the first one was written completely in the open with input and discussions from the community, very much similar to the Linux kernel upstream contribution process, and took a pragmatic approach to ensure that people could realistically build hypervisors and images that conformed to the spec at the time of writing. Remember, this was before ACPI support was merged upstream for 64-bit ARM, for example. Recently we slightly updated the specification in collaboration with ARM to ensure a better alignment with the SBSA and SBBR standards and to require support for ACPI from the hypervisors as well as unifying requirements across Xen and KVM.

The VM spec, as it is usually referred to, defines such things as how to format a guest VM image using GPT including an EFI system partition, where to place the bootable EFI application, how to ensure there’s a working UART to give users a console, how to describe the hardware from the hypervisor to the VM, and which peripherals must be supported. For example, the spec requires the presence of a hot-pluggable bus like the Xen PV bus or an emulated PCIe instance, so that storage volumes can be hotplugged as needed in cloud installations.

But we wanted to go beyond just publishing a spec and convincing ourselves that the hypervisors we work on, KVM and Xen, are actually compliant with the spec. And we wanted to have a method to make sure we don’t happen to break the compliance in enthusiastic future attempts to improve or expand the feature set of the hypervisors. What we need is an automated verification tool that serves both distribution vendors and hypervisor developers.

We present vmspec-tools: [https://github.com/Linaro/vmspec-tools](https://github.com/Linaro/vmspec-tools)

vmspec-tools is a test suite which can verify both images and hypervisor. One key idea behind the test suite is that verifying random images which themselves may not be spec compliant is not productive and may even be misleading. Therefore, the first thing the test suite does it to do a static analysis of the VM image and ensure it has the proper partition and file system layout. The test suite can also be run inside a VM instance which verifies that the hypervisor provides the required firmware interface implementation, hardware description data, UART for console output, that the UEFI RTC runtime service is supported, and that persistent variable storage for UEFI works across reboots of the VM.

The tool also supports a simple command, vmspec-boot, which downloads a known working reference image, verifies the image, boots the image, and runs the verification from within the VM. This automated procedure is based on the cloud-init initialization system, which is supported by some distributions, but does not work on other custom distros. We hope that if distro vendors find this tool useful and start using it, that they will add support to the tool to automatically verify their entire image from a single movecommand line executable. Until then, we can manually work with other images by manually downloading and running an image, and manually running the vmspec-verify tool inside the VM.

We encourage anyone actively engaged in developing cloud VM images for 64-bit ARM or working on ARM hypervisors to try using this tool, and contribute to it as needed.

The test suite was written by Riku Voipio with reviews and small contributions from Alex Bennée and Christoffer Dall.