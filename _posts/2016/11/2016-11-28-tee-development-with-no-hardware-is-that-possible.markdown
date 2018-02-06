---
author: joakim.bech
categories:
- blog
date: 2016-11-28 17:06:06
description: "The question is whether you actually need hardware for TEE development.
  As it turns out, QEMU officially received TrustZone support at the beginning of
  this year. But just the support in QEMU isn\u2019t enough: you will still need the
  software for the TEE."
excerpt: Read about System Trace Module (STM) which can not only collect trace data
  from software sources, but also monitor hardware events. Learn how to write traces
  to STM and how many approaches to do this, etc.
layout: post
link: /blog/tee-development-with-no-hardware-is-that-possible/
slug: tee-development-with-no-hardware-is-that-possible
tags:
- Core Dump
- ARMv7
- Linaro
- Linux
- Linux on ARM
- OP-TEE
- Opensource
- qemu
- TEE
title: TEE Development With No Hardware - Is That Possible?
wordpress_id: 11914
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" %}


It is a well-known fact that it has been hard to get started with TEE development for a couple of reasons. For example, it has been hard to get access to the software because in the past TEE software has typically been proprietary and therefore kept within the company or under a non-disclosure agreement. On the hardware side it hasn’t been much better, and even today it is still hard to find hardware readily available for TEE development, at least if you intend to make a completely secure product. So wouldn’t it be great if we could emulate it all on a local desktop? The question is whether you actually need hardware for TEE development. As it turns out, QEMU, the machine emulator that can emulate a multitude of CPUs, officially received TrustZone support at the beginning of this year and QEMU currently supports TrustZone on both ARMv7-A and ARMv8-A architecture. But just the support in QEMU isn’t enough: you will still need the software for the TEE.




A couple of years ago Linaro, together with STMicroelectronics, teamed up and reworked STMicroelectronics proprietary TEE. That work resulted in an Open Source TEE called OP-TEE. That project has been hosted on GitHub ([https://github.com/OP-TEE](https://github.com/OP-TEE)) since the summer of 2014. Initially it came with board support for devices coming from STMicroelectronics. But since then members of Linaro and other companies have started to use OP-TEE and today there are roughly twenty different platforms officially supported by OP-TEE. Quite early into the development of OP-TEE, Linaro added support for running OP-TEE on QEMU (ARMv7-A). Back then there were no TrustZone patches in upstream QEMU. Because of that, we were running on a fork of QEMU for quite a while. The fork contained a set of TrustZone patches that later on went into the official QEMU tree. A major reason why we did the port at an early stage was simply due to the fact that it was hard to obtain hardware back then. We could use the board from STMicroelectronics but, although it was a good development board, it had a form factor that made it hard to bring it with you, and was (and still is) hardware that is not publicly available. Today things look much better. People can choose between a variety of devices, like HiKey from Hisilicon, Raspberry Pi 3 and some devices from Freescale and TI and Xilinx. Still, with the ability to use real hardware, we haven’t let QEMU go away.




So why on earth would you want to write code to be used in a secure environment in something that isn’t secure? As it turns out, it is very convenient to use QEMU for quite a lot of the work we are doing and the turnaround time is kept to a minimum. No cables to plug and pull, no memory cards to update, no mmc to flash and, as a bonus, the GDB debugger works without the need for any modifications. All in all, you have all the tools you need running on a single computer and it doesn’t cost you anything! So how does it compare with running the code on real hardware? What is the main difference and what about the interfaces? Let’s first consider the OP-TEE boot. The ARMv8-A QEMU setup reminds more of a true boot scenario compared to ARMv7-A on QEMU. But in both cases, when running QEMU with OP-TEE, secure boot is not enabled. Having said that, there is nothing really preventing you from implementing a chain of trust, although since the boot flow is a bit different compared to other devices it doesn’t make much sense to spend time on implementing chain of trust, since it will most likely be something that won’t be used in other setups.




When the system is up and running it is another situation. There the system behaves more or less in the same way as running on real hardware. The biggest limitation using QEMU is that some peripherals might not be emulated and some low level functionality might not be fully supported (CPU caches etc). But for developing and debugging the core of the TEE (kernel mode in secure world) you can do almost everything and, most of the time, the changes you have made will work when you have compiled for another platform and try it out on real hardware.




What about the Trusted Applications? If you have some prior knowledge about the GlobalPlatform Internal Core API specification, you know that this specification specifies how to deal with cryptographic operations, secure storage, secure time and how to work the arithmetical (big number) operations. So the question is: do the Trusted Applications need some special treatment to work with QEMU? The short answer is no. Everything but secure time works just fine, and secure time is heavily platform dependent regardless if you’re running QEMU or not. The cryptographic operations run using a software implementation and secure storage uses whatever root file system you have decided to use. We typically use a initramfs based file system. Everything is transparent to the one writing the Trusted Application. The important thing is that Trusted Applications being developed for use with OP-TEE should be written so they use and follow the rules in the API specified by the GlobalPlatform TEE Internal Core API specification. By doing so, there is no need to make any changes to the source code at all when building for different platforms and devices. In fact, by following a standard strictly, I believe it is possible to take the source code as it is and compile it using another TEE vendors’ SDKs and development kits without having to make many changes at all. A missing piece, but a great step in the future, would be to create Trusted Applications that are binary compatible so you wouldn’t have to recompile for different platforms or even when running on a different TEE solution. Unfortunately, I think we are a bit far away from that now.




As mentioned, GDB just works. QEMU provides a GDB stub (the -s parameter), which means that you not only have the ability to develop and test the solution, but that you can also debug the entire solution, i.e., Linux kernel, TEE core and the Trusted Applications. By default the debugger is text based, but there are some quite decent graphical interfaces available if someone prefers using that instead. From a debugger point of view everything works as expected: you can set breakpoints, examine variables, memory etc. This is a very powerful tool and can save a lot of time and headaches both when trying to find bugs and when studying the code. Again, this doesn’t cost you anything.




The 2016 developer workshop, hosted by GlobalPlatform in Santa Clara, covered everything discussed above. The workshop covered how to write code and debug the TEE core itself and how to write, deploy and test a Trusted Application using QEMU and OP-TEE, and attendees learned how to work with OP-TEE using QEMU. The takeaway was that using a local setup as described here is a good way for people new to TEE development to get started, and to make experienced users’ lives a bit easier when they are working with real products, by simplifying the setup and minimizing the turnaround time. Most likely the majority of their development could be done by using QEMU and then finalizing the remaining bits and pieces on the target hardware.




For users who did not attend the workshop, but still would like to try this, we recommend that you head over to [https://github.com/OP-TEE/optee_os](https://github.com/OP-TEE/optee_os) and read through the README.md file (prerequisites in section 4 and QEMU in section 5 should be sufficient to get a working setup by running a handful of command in a Linux shell).






* * *




_This blog was originally posted the TeeSeminar.org site:  http://www.teeseminar.org/media_center_blog_jbech.asp_