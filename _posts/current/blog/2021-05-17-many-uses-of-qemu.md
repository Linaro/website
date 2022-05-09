---
layout: post
title: The many and varied uses of QEMU
description: In this article, Alex Bennée provides an overview of some of the
  engineering enabled by QEMU throughout Linaro and beyond. Read more here!
date: 2021-05-18 09:00:00
image: /assets/images/content/code-background_1.jpg
tags:
  - QEMU
  - emulation
  - MTE
  - SVE
  - SVE2
  - BTI
  - IoT
  - SBSA
  - open source
  - software
  - arm
  - linux
category: blog
author: alex.bennee
---
# Introduction

QEMU is a versatile virtual machine monitor (VMM) and emulator. While there are other options for handling hardware virtualisation its pedigree as an emulator is almost unique in the open source world. Very few come close to emulating such a broad range of architectures and general purpose hardware on such a wide range of host systems.

There has been a QEMU team inside Linaro since our creation over 10 years ago. The team has been heavily involved in the upstream maintenance of the project and over that time we have been the 3rd biggest contributor to the code. The core team mostly concentrate on[ enabling new architectural features](https://projects.linaro.org/browse/QEMU-241). The development pipeline for working silicon is so long FLOSS developers don't want to wait until actual hardware ships to be able to test their new features. A good recent example was the work to implement [Scalable Vector Extensions (SVE)](https://www.linaro.org/blog/sve-in-qemu-linux-user/). This has been available in QEMU since 3.0 but unless you are very lucky to get access to a [A64FX](https://www.fujitsu.com/global/products/computing/servers/supercomputer/a64fx/) system real hardware is still out of the reach of most FLOSS developers. More recent examples include the [Memory Tagging Extension (MTE)](https://wiki.qemu.org/ChangeLog/5.1#Arm) and [Branch Target Identification (BTI)](https://wiki.qemu.org/ChangeLog/5.2#Arm) features which allow the processor to assist in validating memory and pointers and are key components for compiler "hardening" efforts when generating secure code.

While the core team is quite small it doesn't mean that work is not done on QEMU elsewhere in Linaro. As a flexible software model QEMU is ideally suited to enabling low level development and testing of a variety of use cases.

# IoT development with M-profile

Most people think of Arm processors as low power devices due to their usage in mobile phones. While it's true Arm cores give a lot of performance per-watt, the chips that mobile phones use are general purpose [A-profile](https://developer.arm.com/architectures/cpu-architecture) cores designed for running so called "high-level" operating systems like Linux. The M-profile is aimed at situations
where efficiency and power consumption are even more important. While they share the same core [Instruction Set Architecture (ISA)](https://developer.arm.com/architectures/instruction-sets/base-isas) they have a different set of system features. For example, they trade a full-featured [Memory Management Unit (MMU)](https://en.wikipedia.org/wiki/Memory_management_unit) needed by a multi-user system like Linux for an optional [Memory Protection Unit (MPU)](https://developer.arm.com/documentation/ddi0337/h/memory-protection-unit/about-the-mpu) better suited to tightly integrated use-cases. Support for the "internet of things" relies on these capable but low power processor cores.

Developing for such devices can often involve having special versions of the target board which expose debug headers to the developers system. These need to be connected with specialised JTAG headers to access the debug pins which can be a bit fiddly if you are just getting started with micro controller development.

Emulation will never be a complete replacement for running code on the final target, however it is very useful for experimentation. QEMU does provide a variety of M-profile targets which can be debugged with standard tools like **gdb**. Over the last few years we've added a range of [Arm MPS boards](https://qemu.readthedocs.io/en/latest/system/arm/mps2.html) which are modern embedded development boards which are ideal for testing the latest features like TrustZone. As a software model QEMU also makes it easier to integrate tests into Continuous Integration (CI) loops that can be used to check new contributions to the code base.

One of the items we are working on this cycle is [bringing in support for the M-profile vector extensions](https://projects.linaro.org/browse/QEMU-406). While you may think of large server rooms of dedicated hardware training machine learning models,  those resulting models are often run on very resource constrained targets. Here [QEMU can provide](https://projects.linaro.org/browse/AI-57) a useful target for running such models on IoT devices.

# Common reference platforms

[The Open Portable Trusted Execution Environment (OPTEE)](https://www.op-tee.org/) is a key part of providing the trusted execution environment on Arm. It operates at the lowest level of the software stack and has to have intimate knowledge of the hardware it's running on. Generally referred to as firmware, it is usually built by the OEM who designed the hardware. However when developing generic features it helps to have a standard platform which all developers can have access to. Here QEMU offers an[ excellent target](https://optee.readthedocs.io/en/latest/building/devices/qemu.html) which supports secure world peripherals that only the
firmware can access.

In fact having a reference platform is useful in all sorts of cases. The [Server Base System Architecture (SBSA)](https://developer.arm.com/documentation/den0029/latest) standard is a big part of the drive to "make servers boring". It provides enough standardisation for OS manufacturers so they can can target the architecture without building special installers for a myriad of platforms. The aim is you can just insert a single build of the install media and expect it to work. To help test the firmware that supports this we have the[ sbsa-ref](https://qemu.readthedocs.io/en/latest/system/arm/sbsa.html) board. It is very much a fixed platform that it's quite hard to directly boot a generic kernel on. This is because a kernel is expecting all the details to be provided by an SBSA compliant firmware which will "know" the details of the hardware by virtue of having it baked in during the build process.

The standard is an evolving one and later levels also require a minimum base architecture spec. It's for this reason we have a [bunch of work](https://projects.linaro.org/browse/QEMU-418) this cycle to provide newer CPU and GIC models to support work on the later levels of the specification. If an operating system can boot on a reference SBSA platform like QEMU then you can be fairly
certain it will boot on any other similarly compliant piece of real hardware.

# Testing in the Cloud

Linaro's [Linux Kernel Functional Test (LKFT)](https://lkft.linaro.org/about/) team are focused on doing functional regression testing on a number of public kernel trees. This augments other kernel CI activities across the community but obviously with a very Arm flavoured focus. After building with [TuxSuite](https://tuxsuite.com/) tests are run on a number of platforms. However while building in the cloud allows for easy scaling of capacity the testing still requires physical hardware which requires maintaining racks of machines which are considerably harder to scale up on demand. We are still some way off having ubiquitous nested Arm virtualisation in the cloud but we can certainly easily spin up x86 machines and run QEMU on them to emulate various bits of Arm hardware.

Of course while we are focused on improving the Arm experience we still have to ensure patches don't break the kernel's support for other architectures. Again QEMU's support for a wide range of guest architectures means we can test against software models without having to scale up a lab with lots of non-Arm hardware.

# Stratos playground

Project Stratos is a company wide effort to expand the usage of virtualisation on Arm platforms. The work encompasses both hypervisors and guests with a strong focus on using [VirtIO](https://www.linaro.org/blog/virtio-work/) for standardised device emulation and resource sharing. We are focused on testing against open source hypervisors like KVM and [Xen](https://xenproject.org/) as well as looking at up-coming secure hypervisors such as [Hafnium](https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/Architecture.md). Getting a hypervisor up and running requires a fairly tight integration between the firmware, boot loader and the host kernel. While most **sbsa** boards will happily boot
KVM on mainline distributions, results can vary for other solutions. If you are working on experimental hypervisor code you might not want to brick your main development machine to get an environment up and running.

To avoid being blocked on hardware bring up you can utilise QEMU's **virt** platform and boot directly into a hypervisor while setting up[ a guest with the appropriate metadata](https://qemu.readthedocs.io/en/latest/system/guest-loader.html). QEMU's ISA emulation includes v8.1's[ Virtualization Host Extensions](https://lwn.net/Articles/650524/) which enable more efficient type-2 hypervisors as well as the recently merged [secure EL2 support](https://gitlab.com/qemu-project/qemu/-/commit/48202c712412c803ddb56365c7bca322aa4e7506) which is part of the recently [released QEMU 6.0](https://www.qemu.org/2021/04/30/qemu-6-0-0/).

# Introspection, Introspection, Introspection

There are advantages to running inside QEMU beyond having a nice sand boxed test environment. While attaching **gdb** to a real debug port can give a pretty good experience (assuming you have the headers required) it's hard to match the level of introspection possible via QEMU. For example QEMU exposes the entire [range of system co-processor registers](https://developer.arm.com/documentation/ddi0595/2021-03?lang=en) to the gdb stub.

Anyone who has ever used the excellent [rr](https://rr-project.org/) to debug user space programs on Linux will know how useful it is to rewind time after your application has failed. While still relatively new to QEMU the ability to leverage [deterministic replay](https://wiki.qemu.org/Features/record-replay) to enable reverse debugging also promises to be a useful tool.

Finally there is also the recently introduced [TCG plugins](https://qemu.readthedocs.io/en/latest/devel/tcg-plugins.html) feature which allows for some interesting experiments to be written to analyse code behaviour. The tool chain teams already take advantage of the ability to count executed instructions to measure the real world differences to changes in code generation. It's easy to imagine creating experiments to measure things like general cache residency or instructions spent executing in the kernel to service a user request, giving further insight to how code actually behaves when it is run.

# Outro

I hope this has been a useful overview of the many ways we use QEMU here in Linaro. All our work on QEMU is done in the open on the upstream development lists. If you want to play with some of the latest features please visit the [project website](https://www.qemu.org/) where you can find instructions for downloading and building from the source code. We hope to see you there ;-)

For more information about Linaro and the work we do, do not hesitate to [contact us](https://www.linaro.org/contact/).