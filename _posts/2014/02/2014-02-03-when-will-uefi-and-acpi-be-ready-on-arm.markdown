---
author: grant.likely
categories:
- blog
date: 2014-02-03 18:58:27
description: Why are we doing UEFI & ACPI? Who should be using UEFI/ACPI? Will U-Boot
  and FDT continue to be supported? Can hardware provide both ACPI & FDT? Can ACPI
  and FDT coexist? And so on. I want to quickly address those questions in this blog
  post, and then I want to discuss a development plan to get UEFI and ACPI onto shipping
  servers.
keywords: Linaro, software on ARM, Linux, Linux on ARM, UEFI, ACPI, enterprisse software,
  ARM, U-Boot, FDT, kernel
layout: post
link: /blog/when-will-uefi-and-acpi-be-ready-on-arm/
slug: when-will-uefi-and-acpi-be-ready-on-arm
tags:
- kernel
- Linaro
- Linux
- Linux on ARM
- software
title: When Will UEFI and ACPI Be Ready On ARM?
wordpress_id: 3284
---

As part of the work to prepare for ARM servers, the Linaro Enterprise Group has spent the last year getting ACPI and UEFI working on ARM. We’ve been working closely with ARM and ARM’s partners on this to make sure the firmware architecture meets the needs of the server market.

Yet this work has raised questions about what it means for the rest of the ARM Linux world. Why are we doing UEFI & ACPI? Who should be using UEFI/ACPI? Will U-Boot and FDT continue to be supported? Can hardware provide both ACPI & FDT? Can ACPI and FDT coexist? And so on. I want to quickly address those questions in this blog post, and then I want to discuss a development plan to get UEFI and ACPI onto shipping servers.


### Table Of Content


Why UEFI and ACPI?
Current Status
What Should Vendors Do?
For Hardware Shipping Very Shortly
For a Year From Now
The Long View
Implementation Details
UEFI
GRUB on UEFI
Linux on UEFI (CONFIG_EFI_STUB)
ACPI


## **Why UEFI and ACPI?**


Note: I am only talking about general purpose ARMv8 servers here. Not mobile, not embedded. At this present time, I don’t see any compelling reason to adopt ACPI outside of the server market. If you are not doing server work you can stop reading right now and keep using what you already have.

The short answer is, “UEFI and ACPI should be used because ARM’s server specifications will require it.”, but that just leads the question, “Why do the specifications require it?” ARM has spent the last couple of years consulting with its partners to develop a common platform for ARM servers. Those partners include OS, hardware, and silicon vendors as well as other interested parties.

Firmware design was a big part of those consultations. The two big questions were, what firmware interface should be specified, and what hardware description should be used? First of all, it is important to note that while many of the same people are involved, UEFI and ACPI are not the same thing. UEFI is not tied to ACPI and will happily work with an FDT. Similarly, ACPI does not depend on UEFI, and can be made to work just fine with U-Boot.

On firmware interface, choosing UEFI was a pretty easy decision. UEFI has a specification, an open source BSD-licensed implementation, and the mainline project has ARM support. UEFI specifies how an OS loader is obtained from disk or the network and executed, and we have tools to work with it on Linux. Plus it works exactly the same way on x86. This makes life far simpler for vendors who already have tooling based on UEFI, and for end users who don’t have to learn something new. Supporting UEFI has minimal impact and doesn’t impose a major burden on Linux developers. When compared with U-Boot it was no contest. U-Boot is great in the environments that it grew up in, but it doesn’t provide any of the consistency that is absolutely required for a general purpose platform.

ACPI was a harder decision, particularly for us Linux folks. We’ve spent the past 3 years focusing on FDT development, and ACPI uses a different model. FDT is based on the model where the kernel drives all hardware right down to the clocks and regulators. The FDT merely describes how the components are configured and wired together. ACPI on the other hand moves a lot of the low level wiring details into the ACPI bytecode so that the kernel doesn’t need to be aware of power management’s details. For ARM Linux this is an issue because it runs completely counter to all the work we’ve done on clock, regulator, gpio and power management frameworks; work that is absolutely essential when using board files or FDT, but may conflict when PM control is managed by ACPI. There is a lot of work that we need to do in order to get ACPI working on ARM Linux, especially since adding ACPI must not break existing board support.

Hardware and silicon vendors look at ACPI in a very different way than kernel engineers. To begin with they already have hardware and process built around ACPI descriptions. Platform management tools are integrated with ACPI and they want to use the same technology between their x86 and ARM product offerings. They also go to great lengths to ensure that existing OS releases will boot on their hardware without patches to the kernel. Using ACPI allows them limited control over low level details of the platform so that they can abstract away differences between systems.

We kernel engineers don’t like to give up that control. There have certainly been enough instances where firmware has abused that control to the frustration of kernel hackers. Yet by and large the system works and there is a very healthy ecosystem around platforms using ACPI.

Ultimately, ARM and the companies it consulted came to the consensus that ACPI is the best choice for the ARM servers. I personally think it is the right decision. It helps that both UEFI and ACPI specs are maintained under the umbrella of the UEFI Forum, which any company is welcome to join if they want to be involved in specification development. There are a lot of Linux people involved with the UEFI and ACPI working groups these days.

I expect ARM will be publishing a firmware document requiring both UEFI and ACPI in the near future.



## **Current Status**


At this present moment, mainline only supports FDT. I think I’m safe in saying that among the ARM kernel maintainers we’re committed to FDT. It is not going away. Any hardware that provides an FDT that boots mainline Linux will continue to be supported. You can build a device with FDT and it will be supported for the long term. Similarly, there are no plans to deprecate U-Boot support, or any other boot loader for that matter. ACPI and UEFI support will happily coexist with FDT and support for other bootloaders.

ACPI support is not yet in mainline. The patches for ARM are done and have been posted to the mailing list for review. I expect that they will get merged in v3.15 or v3.16 of the kernel. Now, work has shifted to working out best practices for using ACPI on ARM. At the moment we don’t yet know what a “good” set of ARM ACPI tables should look like. Nor do we know how existing kernel device drivers and infrastructure should work when ACPI is provided. Until those questions are answered, ACPI isn’t ready to use. Getting those answers is going to take some time.

So, for the vendors who do want to use ACPI, what are they supposed to do? Ship ACPI (which doesn’t work yet)? Ship FDT and upgrade to ACPI later? Ship both (but how does that work)? In an effort to clarify, here is how I see the world:



## **What Should Vendors Do?**


Given the current state of mainline support, what should vendors ship on their hardware? In typically helpful form, I answer, “it depends”. To keep the answer simple, I’ve split up my suggestions into three categories based on when hardware is going to ship: immediately, in the next year, and in the long term (2+ years).



## **For Hardware Shipping Very Shortly**


There are two questions to answer, which firmware should vendors use, and which hardware description. I’ll start with firmware. At this moment, Linux UEFI support is essentially complete. The patches have been reviewed positively and will probably get merged in the next merge window. UEFI will also work equally well with either an FDT or an ACPI hardware description. Plus the TianoCore UEFI project can already boot a Linux kernel without any additional patches. Anyone planning to ship servers is the near future should plan on using UEFI right from the start.

UEFI is important because it provides a standard protocol and runtime for an OS to install itself. This is critical for distributions because it gets away from the hardware-specific install scripts that they have to do for U-Boot right now. UEFI has been working on ARM for years. Kernel patches for CONFIG_EFI_STUB and runtime services are under review for ARM321,2 and ARM643 and should get merged soon. If you want a generic distribution image to boot on your hardware, then use UEFI.

ACPI is another matter. While basic support patches are in the process of getting reviewed for merging, there is still a lot of work to be done on the infrastructure side to get ACPI working well. It is still going to take some time before we can claim that the kernel will support ACPI systems. ACPI should be considered experimental at this time and expect changes will be required before being usable by the kernel. I suggest that any server vendor shipping hardware in the near future should make firmware provide an FDT.

Stability also used to be an issue for FDT, but we’ve hit the point where the majority of FDT support is in mainline. It is no longer necessary to update the FDT in lock step with the kernel. We debated the problem at the 2013 ARM kernel summit in Edinburgh and made the decision that the FDT is a stable ABI once it hits mainline. If the ABI gets changed in a way that breaks users, then it is a bug and it must be fixed. Therefore, upgrading the kernel shall not require an FDT upgrade, even if it means we need to carry some legacy translation code for older bindings.4

That said, there are other valid reasons for upgrading the FDT, so vendors should allow for that when designing firmware. For instance, the kernel will not support hardware that isn’t described in the FDT. An FDT update would be required to enable previously hidden functionality. Additionally, bugs in FDT data should be fixed with an FDT update. We don’t want to be dealing with individual bug workarounds in the kernel that can be easily repaired in the data.

A vendor can provide ACPI tables alongside the FDT, but in doing so I would strongly recommend providing it as an experimental feature and not the default boot behavior.

On a related note, UEFI may also provide SMBIOS to the kernel regardless of whether ACPI or FDT is used. Vendors who want to provide SMBIOS data should feel free to do so. SMBIOS is an independent table which can provide identification information about the platform that is useful for asset management. SMBIOS is maintained by a [separate spec](http://dmtf.org/standards/smbios). A [simple SMBIOS patch](http://comments.gmane.org/gmane.linux.ports.arm.kernel/282504) has been posted enabling it on ARM.

FDT, SMBIOS and ACPI tables are provided to the kernel via the UEFI Configuration Table. The configuration table is a list of key value pairs. Keys are well known GUIDs, and the value is a pointer to the data structure. SMBIOS and ACPI GUIDs are specified in the UEFI spec. The FDT GUID has been [posted for review](http://sourceforge.net/mailarchive/message.php?msg_id=31731478). FDT and SMBIOS data structures must be in memory allocated as EFI_RUNTIME_DATA.



## **For a Year From Now**


In about a year from now I would make the prediction that ACPI support is in mainline. My recommendations are the same as above, with the following exceptions:

For widest range of support, platforms should support both FDT and ACPI. Some operating systems will only support ACPI, others only FDT. ACPI will probably be stabilizing to the point that if support is in mainline, then we will continue to support the platform in Linux.

My opinion is that Linux should use only FDT or only ACPI, but not both! [Edit: by this I mean not both at the same time. It is perfectly fine for an OS to have support for both, as long as only one is used at a time] I think that when provided with both, the kernel should default to ACPI and ignore the FDT (this is up for debate; Eventually I think this is what the kernel should do, and I think we should start with that policy simply because trying to change the policy at some arbitrary point in time will probably be a lot more painful than starting with the default that we want to ultimately get to).



## **The Long View**


Servers must provide ACPI, but vendors can optionally choose to provide an FDT if they need to support an OS which doesn’t have ACPI support. For example, this may be an issue for the Xen hypervisor which does not yet have a design for adding ARM ACPI support. The kernel should prefer ACPI if provided, but there are no plans to deprecate FDT support. As far as the kernel is concerned, FDT and ACPI are on equal footing. We will not refuse to boot a server that provides FDT.

I cannot speak for OS vendors and hardware vendors on this topic. They may make their own statements on what is required to support the platform. So, while the kernel will fully support both FDT and ACPI descriptions, vendors may require ACPI.



## **Implementation Details**


Here I’m going to talk about how everything works together. There are a lot of moving parts in the firmware architecture described above, so it helps to have a description of how the parts interact.



## **UEFI**


The TianoCore UEFI project has a complete, open source UEFI implementation that includes support for both 32 and 64 bit ARM architectures. It can be used to build UEFI firmware which is compliant with the UEFI spec. UEFI cannot boot Linux directly, but requires a Linux specific OS loader which is not part of the UEFI spec. There is a legacy LinuxLoader in the UEFI tree, but as it is not standardized there is no guarantee that it will be included in firmware. Best practice is to use the native UEFI support in the kernel.

UEFI passes all hardware description tables to an OS loader via the UEFI configuration table.



## **GRUB on UEFI**


GRUB UEFI support has been ported to ARM and works almost identically to GRUB UEFI on x86. The patches have been merged into mainline and will be part of the GRUB release 2.02.

Internally, the most significant difference between x86 and ARM GRUB support is that on x86 GRUB the boot_params structure is used to pass additional data to the kernel, while on ARM it uses an FDT.



## **Linux on UEFI (CONFIG_EFI_STUB)**


The current set of ready-to-merge patches to the Linux kernel add support for both CONFIG_EFI_STUB and UEFI runtime services. CONFIG_EFI_STUB embeds a UEFI OS loader into the kernel image itself which allows UEFI to boot the kernel as a native UEFI binary. The stub takes care of setting up the system the way Linux wants it and jumping into the kernel. The kernel-proper entry point remains exactly the same as it is now and a CONFIG_EFI_STUB kernel is still bootable on U-Boot and other bootloaders.

The kernel proper still requires an FDT pointer to be passed at boot time, so the UEFI stub is responsible to parse the UEFI data, set up the environment including an FDT, and jump into the kernel proper. When booting with FDT, the stub will obtain the FDT from UEFI and pass it directly to the kernel. When booting with ACPI, an empty FDT is created and used to pass boot parameters (kernel command line, initrd location, memory map, system table pointer, etc.) similar to how x86 uses the boot_params structure.

If both ACPI and FDT are provided by firmware, then all hardware description in the FDT will be ignored. The kernel should never attempt use ACPI and FDT hardware descriptions at the same time.5

UEFI runtime services are also supported. The stub will pass the UEFI system table pointer through to the kernel and the kernel will reserve UEFI memory regions so that it can call back into UEFI code to query and manipulate boot variables, the hardware clock, and system wakeup.



## **ACPI**


As described above, the kernel will use ACPI if present in the configuration table, and fall back to FDT otherwise. The kernel will not attempt to use both ACPI and FDT hardware descriptions.

One potential problem is that Kexec may interact poorly with ACPI. The OS isn’t supposed to unpack the DSDT more than once, which would happen if the kernel kexecs into another kernel (each kernel will unpack it on boot). However, x86 has been doing kexec for years so this may not actually be a problem in the real world.

_Re-published with permission from Grant Likely from his original blog post at_ [http://www.secretlab.ca/archives/27](http://www.secretlab.ca/archives/27)


* * *

	
  1. ARM32 Runtime Service: [http://lwn.net/Articles/575363/](http://lwn.net/Articles/575363/)

	
  2. ARM32 CONFIG_EFI_STUB: [http://lwn.net/Articles/575352/](http://lwn.net/Articles/575352/)

	
  3. ARM64 CONFIG_EFI_STUB and Runtime services:
[https://lkml.org/lkml/2013/11/29/373](https://lkml.org/lkml/2013/11/29/373)

	
  4. With the caveat that if nobody notices, is it really an ABI breakage? There are many embedded platforms which want to keep the FDT in lock step with the kernel and the build toolchain reflects that

	
  5. This is still up for debate, the priority of ACPI over FDT may yet be changed