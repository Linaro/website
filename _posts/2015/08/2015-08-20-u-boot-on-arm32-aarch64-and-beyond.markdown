---
author: linus.walleij
categories:
- blog
comments: true
date: 2015-08-20 16:14:21
description: U-Boot became the de facto bootloader on most ARM systems during the
  early 2000s. What is the best bootloader to use for any one system is a subject
  of debate.
excerpt: "U-Boot became the de facto bootloader on most ARM systems during the early
  2000s.  What is the best bootloader to use for any one system is a subject of debate.
  There have been pushes to different \u201Cthere can be only one\u201D approaches,
  but the recent consensus is to \u201Cuse the right tool for the job\u201D  Learn
  more"
layout: post
link: /blog/core-dump/u-boot-on-arm32-aarch64-and-beyond/
slug: u-boot-on-arm32-aarch64-and-beyond
tags:
- Core Dump
- AArch64
- arm
- U-Boot
title: U-Boot on ARM32, AArch64 and beyond
wordpress_id: 9094
---

U-Boot became the de facto bootloader on most ARM systems during the early 2000s. It grew out of an earlier flora of smaller and custom boot loaders such as RedBoot and Open Handhelds ARM Bootloader. Currently the main alternatives are [the Little Kernel bootloader](https://developer.qualcomm.com/download/db410c/little-kernel-boot-loader-overview.pdf), which has been used by Qualcomm and Google for a series of Android devices, and the [UEFI-compliant Tianocore](http://www.tianocore.org/) (also known as EDK II) bootloader.

What is the best bootloader to use for any one system is a subject of debate. There have been pushes to different “there can be only one” approaches, but the recent consensus is to “use the right tool for the job”, while people may have differing opinions on what the right tool is.

**Boot Chain**
All SoCs have some way to bootstrap their CPU(s) to execute code on cold start. On an older ARM32 system, the execution is usually started in an on-chip ROM, which in turn continue execution either in NOR flash (memory-mapped flash memory) or by initializing the main RAM (which is normally not accessible at boot) and loading a proper boot loader from a NAND flash or eMMC or SD card.

Sometimes several steps need to be performed to boot a system, and as some code may need to execute from on-chip memory or locked down cache until the RAM is initialized, initial steps can be very small boot stages (programs).

Eventually a fairly large program single-threaded program is loaded into memory, and its task is to load and execute the final operating system from images (binary objects, files) stored on some media. For simplicity, this program is usually executed from 1-to-1-mapped physical memory. This program may also have the ability to reformat and install new images on the system.

This program is referred to as the boot loader. The stages up until this program is loaded is handled by [ARM Trusted Firmware](http://www.slideshare.net/linaroorg/arm-trusted-firmareforarmv8alcu13) on the ARM reference designs for AArch64.

The boot loader will typically be a bit interactive (has a prompt) and support booting the final operating system from hard disk, memory card, flash memory, ethernet connection, USB cable, or even through light morse code from an IrDA sensor. It places the final operating system image in memory, passes some information to it and kicks off execution at the start of executable memory.

From this point, the operating system needs to set up virtual memory, caches and everything else needed to get the system into full-flight mode.

**Chain of Trust**
If a chain of trust shall be preserved across these stages, the first point of execution needs to be trusted and contain routines for checking validity of the next executable program all the way. This is usually achieved using public key cryptography, where a public key is stored in the ROM (or similar location inside the device) and binaries to be executed need to be signed by the secret key corresponding to that public key. This way the device will not contain any secret keys. Sometimes a certificate chain is used to distribute the signing authorization.

**Initial U-Boot AArch64 Support**

The AArch64 (ARM64) support for U-Boot was pioneered by Scott Wood, David Feng and York Sun from Freescale in 2013 to support their LS2085 platforms. Leo Yan from Marvell joined the efforts, and thanks to these people U-Boot can start and boot Linux on a range of ARMv8/AArch64 systems.

**ARM Fastmodel Support**
Freescale’s submissions included fastmodel support, a specific customization known as Foundation model or simply FVP. This is a cycle-exact AArch64 emulator made by ARM Ltd, which behaves akin to a Versatile Express reference board, just with the difference that the whole system is emulated in software.

In order to load binary images into the emulated memory, so-called semihosting is used. This is basically a way for the code running on the emulator to talk directly to the emulator, i.e. for it to be aware that it is not running on real hardware. By issuing a parametrized HLT instruction, the code running in the model can ask for services, such as to retrieve files into the memory, from the emulator.

When I started working on AArch64 support for U-Boot I augmented this code a bit so that we now have [a command called _smhload_](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=202a674bb8b7d7867503224857a2b0e04617d9b3) that will load a file into the emulated memory akin to how files are loaded from flash memory or over Ethernet+TFTP.

By working on the Foundation model, I could verify that execution and interactive prompt was working, and I could continue with support for real reference hardware.

**ARM Juno Development System Support**
Freescale’s attempt had been focused around emulated reference hardware and later their own hardware. When I started working on AArch64 the scope was on [the 64 Bit Juno ARM ](http://www.arm.com/files/pdf/Juno_ARM_Development_Platform_datasheet.pdf)Development Platform. The idea was to showcase U-Boot on this real hardware as a reference point for the rest of the ARM vendor ecosystem. If we could get U-Boot working nicely on Juno, we could provide a trusted starting point for others.

First we had to make Juno start the compiled U-Boot. ARM recommend that U-Boot is started from the ARM Trusted Firmware, which is essentially the ROM for the Juno. The trusted firmware performs the boot chain as described above in several stages or _Boot Levels_ called BL1, BL2, BL3-1, BL3-2 BL3-3. I only needed to consider myself with the last boot level, BL3-3, which is the level containing a “real” bootloader binary. In the examples, BL3-3 was Tianocore UEFI. By compiling U-Boot to address 0xe0000000 and replacing UEFI with the resulting binary, U-Boot was executed by the ARM Trusted Firmware.

At first the system would not boot at all - the Juno went catatonic. By instrumenting U-Boot with a [low-level UART print hack](http://dflund.se/~triad/krad/junoboard/0001-vexpress64-assembly-debugging-and-uglyfix.patch) to push strings to the console before initializing the rest of U-Boot, I could determine the cause: the MPIDR (Multi-Processor ID register) had totally different meaning and contents on a multi-cluster machine. The U-Boot code was adapted for a single cluster of symmetric CPUs, not for multiple clusters of CPUs, such as the cluster of two Cortex-A57s and four Cortex-A53s found on the Juno.

Freescale’s system had the ROM or similar mechanism enter U-Boot from both CPUs, and when it reached U-Boot all slave CPUs were immediately dispatched to a spin table while execution of the single-threaded U-Boot should continue on the primary CPU. However the branch_if_slave assembler macro would think all CPUs on the system were secondary CPUs.

Since the Juno board was only initiating execution of the boot loader on the primary CPU, this problem was solved with [a patch making U-Boot assume single entrance](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=23b5877c64562a314f8d8c60d0066cd346f2d886) (i.e. only one CPU will execute it) and after this we got all the way to prompt. A special configuration symbol, ARMV8_MULTIENTRY was created for systems such as Freescale to select. This way single-entrance was made the norm.

Now U-Boot was working to prompt at Juno hardware, so I could test loading a kernel by compiling in Y-modem binary loading support and uploading a kernel Image file and a device tree to the memory and start execution using Y-modem and boot it. It worked fine. [A patch for initial Juno support](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=ffc103732c82faa945c85bbb7c5c34c30b6fac72) was submitted upstream and merged.

Uploading a big kernel and initramfs over the serial port at 115200 baud was quite tiresome, so I immediately started to get U-Boot to load kernels over the ethernet port, resulting in [a patch supporting SMSC9118 ethernet booting](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=b31f9d7a4aea23a8a9d007356a2b61e503e69daa). This was it is possible to quickly boot a kernel using ethernet and TFTP.

It was now quick and efficient to develop Linux using U-boot, especially if you compile in a boot script into the ethernet/TFTP boot so that all you really need to do it reset the machine and it would immediate download a new kernel from the TFTP server and run it.

However it is nice to be able to flash a kernel and a filesystem into the on-board flash memory in the Juno and use that to just boot the machine, especially for demos and similar where you want to prepare the machine and just use it. Thus I also added flash support to the Juno, the tricky part being [a patch to handle the AFS partitions](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=4bb6650632a3e36185f689c56ea31f189ce39325) in the flash - this was a new ARM-specific flash image format that relies in footers in the end of the last erase block of the flash. After adding this, I could make [a patch making this the default boot method](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=10d1491b3dea43182aec5cdce8f81ca520400c4b) for the Juno, so the boot chain was self-contained on the device.

**Future Directions**
We now have pieced together a system that will start U-Boot from ARM Trusted Firmware and then have U-Boot load the Linux kernel and a device tree and start it. Are there problems remaining?

  * One of the big outstanding issues are those where things are fragile because memory references need be hard-coded in U-Boot or ARM Trusted Firmware. For example U-Boot currently [assumes that ARM TF will use 16MB](http://git.denx.de/?p=u-boot.git;a=commitdiff;h=303557089f3db253eaec6f38dece204fd154b6ac) of the DRAM memory. If the ARM TF change things around and use more or less memory, U-Boot needs to be reconfigured and recompiled. U-Boot on the other hand, will then pass whatever knowledge it has about the memory to the Linux kernel by augmenting the device tree. So if ARM TF could communicate the memory available to U-Boot and the OS this would be great.

  * U-Boot relies on prior boot stages such as ARM Trusted Firmware to install [PSCI handlers](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.den0022c/index.html), while on ARMv7 this was usually done by augmenting U-Boot to do the same. Letting U-Boot install PSCI handlers is a bit bogus, since it is a piece of resident code left in memory after U-Boot has executed and not really “boot loader” code. U-Boot was augmented to compile these into a special memory area, copy them there and leave them around for the operating system to use later. Still there are people who might like to do this on ARMv8 U-Boot, especially those not using ARM Trusted Firmware.
  
  * People apparently toy with the idea of booting U-Boot on bare metal, using a very small or no ROM nor ARM Trusted Firmware, letting U-Boot just execute immediately on the system. As U-Boot relies on something else to set up main memory and providing PSCI, this currently does not work. Doing this would require U-Boot to initialize memory and install PSCI handlers. It would also need to be small enough to execute from on-chip RAM.
  
  * Chain of trust booting with signed boot levels, signed U-Boot and a signed kernel image and a signed device tree, making an example of a totally locked-down system. The Flattened Image Tree (FIT) supported by U-Boot is likely the best way forward here, but requires U-Boot to access public key infrastructure to verify images unless you want to compile the public key directly into U-Boot, which is often not a good idea.

  * Fastboot - the Android boot protocol used by the Little Kernel, exists in U-Boot but has not been tested or verified. It can use USB or Ethernet alike.
  
  * More hardware support - such as booting from the USB stick or MMC/SD card found in the Juno board. This was not covered by the experimental port.