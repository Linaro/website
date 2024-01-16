---
layout: post
title: Linaro Engineering Highlights - December 2020
description: In this edition of the Engineering Highlights, Jon Burcham takes a
  detailed look at the Future of 32-bit Linux, Zephyr security, evolution of
  Device Tree and more.
date: 2021-01-08 12:08:24
image: /assets/images/content/code.jpg
tags:
  - Linaro
  - Linux Kernel
  - Zephyr
  - Artificial Intelligence
  - IoT
  - LKFT
category: blog
author: jon.burcham@linaro.org
---
## Introduction

In this edition of Linaro's Engineering Highlights we have articles on the Future of 32-bit Linux, Zephyr security, the evolution of Device Tree, SystemReady IR and EBBR and more. 

## The Future of 32-bit Linux

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}
The news cycle for processors and system-on-chip (SoC) products these days is all about 64-bit cores powering the latest computers and smartphones, so it’s easy to be misled into thinking that all 32-bit technology is obsolete. That quickly leads to the idea of removing support for 32-bit hardware, which would clearly make life easier for kernel developers in a number of ways. At the same time, a majority of embedded systems used today use 32-bit processors , so a valid question is if this will ever 
change, or if 32-bit will continue to be the best choice for devices that do not require significant resources.

To find an answer, it is worth taking a look at different types of systems supported in Linux today, how they have evolved over time with the introduction of 64-bit processors, why they remain popular, and what challenges these face today and in the future. [Continue reading](https://lwn.net/Articles/838807/)

## Zephyr Security Update on Amnesia:33

**By David Brown, Linaro Security Working Group and Zephyr Security Architect**
{% include image.html path="/assets/images/content/zephyr-iot.png" class="small-inline left" alt="Zephyr Project icon" %}
On December 8, 2020, Forescout released a report containing numerous vulnerabilities found in various embedded TCP/IP stacks, known as [AMNESIA:33](https://www.forescout.com/company/blog/amnesia33-forescout-research-labs-finds-33-new-vulnerabilities-in-open-source-tcp-ip-stacks/). These vulnerabilities, across multiple network implementations, concern various memory and overflow errors, some of which are readily exploitable. [Continue reading](https://www.zephyrproject.org/zephyr-security-update-on-amnesia33/)

## Device Tree Evolution and SystemReady IR

**By Bill Mills, Linaro**
{% include image.html path="/assets/images/content/devicetree-logo_vertical-devicetree.png" class="small-inline left" alt="Device Tree.org icon" %}

#### **Introduction**

This article will present one aspect of the Devicetree evolution project that is being worked on now: How does devicetree (DT) fit into the scope of SystemReady IR and what is the importance?  This exploration is our current focus on the devicetree evolution calls.  We hope to have agreement on this topic so work can begin in the April to October 2021PoR cycle.

For good background information on devicetree and the devicetree evolution project, please see this white paper from 2019: [Linaro Devicetree Evolution](https://www.linaro.org/assets/pdf/Linaro-White-Paper--Device-Tree-Evolution.pdf).

## SystemReady IR and EBBR

SystemReady is a program from Arm to enable multiple operating system versions to “just work” on many Arm platforms.  The key to these programs is to draw a well defined line between what is considered the operating system (OS) and what is considered the firmware and to ensure the interfaces between the two are stable from platform to platform and model year to model year.  In this way old platforms (with old firmware) continue to work with new OSes and old OSes work with new hardware (as much as possible).

Many of you will know of the efforts that have gone to make this work on Arm server platforms.  This effort is based on UEFI and ACPI and is now called SystemReady SR.

SystemReady IR is a developing standard to do the same for smaller systems typically represented by mobile or embedded Arm systems running Linux or some other high level OS or hypervisor.  SystemReady IR is based on UEFI and devicetree. In addition, SystemReady IR incorporates by reference the work of EBBR: the Embedded Base Boot Requirements.

For more information, see Arm’s [SystemReady](https://developer.arm.com/architectures/system-architectures/arm-systemready) pages.

## DT or ACPI

Arm Server systems use ACPI to describe and abstract the platform hardware. ACPI works well for the server market but there are reasons to prefer devicetree for some types of systems. Some of these reasons are technical and some are more political.

ACPI offers a strong ABI and standard stability. Once a given device type is known to ACPI, it should continue to operate with newer platforms or newer versions of the operating system. ACPI also offers some amount of abstraction for low level platform operations like placing a device into a low power mode. This abstraction works using byte coded functions embedded into the ACPI tables. ACPI works well for server platforms where the variation of device interconnectivity is low and power operations are infrequent.

Device tree also has a formal specification but that specification outlines the form of the data not the exact schema of every device. A collection of schema for different device classes and specific vendor devices is built up over time and maintained as code. New schema (and the closely related concept of bindings) are peer reviewed and accepted by the maintainers using the standard kernel patch acceptance model. Device tree format is a pure data structure; it contains no code. The kernel must know how to use the data represented by a specific binding in order to use it. If your kernel does not know how to enable clocks on your SoC, you are out of luck. However, abstractions are possible using other standards like [SCPI](https://developer.arm.com/documentation/dui0922/g/css-system-control-and-power-interface--scpi-). SCPI allows DT to describe a desired device power state request to be a SCPI message with data provided by devicetree properties.

The differences between the two formats directly lead to the advantages and disadvantages of each. DT is more flexible and can be quickly adapted to new situations but has a harder time providing strong ABI guarantees from kernel version to kernel version, year to year. ACPI provides more abstraction but some poor quality byte code implementations have led to the kernel not fully trusting the byte code to be thread safe or to be called 1000s of times per second.

No matter your opinions on the weights attached to the issues raised above, the vast majority of non server Arm systems use devicetree today. Even as the scope of server-like systems extends out of the data center, there will always be systems smaller or more deeply interconnected than can fit the server model. For these reasons, many feel that non server-like systems will continue to use devicetree indefinitely.

## Vertical OS vs Distro OS

The point of SystemReady is to allow out of the box OSes to run on Arm platforms.  This includes “Distro OSes” like Debian, Fedora, OpenSUSE etc.  In this model all, the OS components like kernel, user space packages, and boot manager (often Grub) come from the distribution while the firmware comes from the platform provider.

Classic Embedded Linux systems were examples of a “Vertical OS”.  In this model all the firmware and OS components came from the system vendor.  Often these OS images were only designed to work on a small subset of platforms.  This allows the vendor a very high level of control but the vendor must also take on the burden of maintaining all the components.

When firmware and OSes are SystemReady IR compatible, the Distro OS has a good chance of working out of the box.  There are things to do to make this work more efficiently and more often.

Perhaps more importantly, SystemReady IR allows a new model:  A vertical OS built from off the self distro components.  In this model, the standard OS components like kernel and user space come from a well established distribution but the vendor pretests combinations and signs off on them.  In this way the vendor ensures that things always work but does not need to address each CVE for its own kernel and libraries.

Even if a given vendor chooses to stay with the vertical model, their burden is reduced if they build different systems with SoCs from different silicon providers.  If each SoC vendor enables SystemReady IR, the work of the vertical OS vendor will be reduced as each SoC follows the same pattern.

## Is DTB part of the OS or part of the firmware?

In the Distro model, the devicetree binary data (DTB) needs to come from the firmware.  In this way, the OS works if the kernel already understands the devices in the SoC, even if it has not been tested on this specific board.  Perhaps this is a new SoC based on one that the OS knew or just a new board with a known SoC. Even if the SoC is completely unknown, at least the OS will work well enough to send a message via the UART and may be able to use well defined peripheral controllers like the XHCI for USB.

However, today the DTB used for the kernel is most often built with that exact kernel.  In this way, it is guaranteed that the DTB information matches what the kernel code expects.  If the DT bindings have changed between kernel 5.4 and 5.10, the correct DTB will be used for each.  In this model the DTB is considered part of the OS image.

Which model is correct?  The answer should be “both”.  We wish to always have the firmware supply the DTB in case the OS has no DTB info for the SOC or board.  However, we also want to enable the OS to override the DTB if it thinks it knows better.

## DTB ABI testing (DTB as part of firmware model)

In theory, new kernels should work with older DTBs for most modern Arm SoCs.  However this is very rarely tested and not at all formally.  If we believe in this model, we need to start testing it.  We need to test older DTBs with the latest kernel versions.  How old is older?  Ideally all LTS kernels in the past 6 years, but we need to start somewhere so the idea is to start with current LTS - 1.  For example, the Linux 5.11-rc releases should be tested against 5.4.  We can’t test all platforms so we will start with a few that support the idea.  A simple boot test will not be sufficient. We will need to quickly checkout as many peripherals as possible because this is the most likely area to break when the DTB info is incompatible.

Ideally old kernels should work with new DTBs also.  If not, you could have one OS upgrade your firmware and it would break another OS that was previously working.  This version of the test is probably a lower priority than the case above, so we will suggest holding off on this testing until the first version is worked out more.

## DTB Override by a Boot Manager (DTB as part of OS model)

In a vertical OS model, each kernel version has its own DTB files that are known to work with it.  The firmware (often U-Boot) knows how to pick a kernel and load and fixup the associated DTB file.  Thus U-Boot is playing the role of platform firmware and also OS boot manager.  It does all the work and knows the file layout of the kernel and DTB images.

However, in the Disto model, the distro will almost always use its own boot manager.  (Grub is often used in this role but others are used as well such as the syslinux family, systemd-boot, etc.)

The presence of this OS boot manager causes several problems if it wants to override the DTB info.  Only the boot manager knows which kernel it will choose but only the firmware knows how to perform the DTB fixups.  (DTB fixups include inserting the serial number,  ethernet mac addresses, or the size of main DDR into the DTB.)

To resolve this issue, the DTE project is proposing a new UEFI API to the EBBR spec.  This API can be used by the boot manager to request the firmware to perform the DTB fixups after it has loaded a new DTB.  This API will be implemented in U-Boot.  Grub will be enhanced to call this UEFI API if it loads a new DTB.  

Grub will also be enhanced to measure the DTB into a Trusted Platform Module (TPM) if one is present and to verify the signature of the DTB it loads if secure boot is enabled.  Upstream Grub has not accepted secure boot enhancements made by others so far so the signature verification of DTB may be another contention point.

### Conclusion

SystemReady IR can enable the best attributes of a vertical OS and an off-the-shelf distro OS but some effort and coordination is required to make this real.

If you are interested in this work please subscribe to the [boot-architecture](https://lists.linaro.org/mailman3/lists/boot-architecture.lists.linaro.org/) mailing list. Our next DTE call will be in early January and will be announced on the mailing list.

## 2020 Year in Review

### Preface

**By Mark Orvek**
{% include image.html path="/assets/images/content/mark-orvek.png" class="small-inline left" alt="Photo of Mark Orvek" %}
At the risk of being repetitious, 2020 has been a historic year due to the COVID pandemic.  It has had a direct or indirect impact on all of us.  I offer my condolences to all, like me, who have experienced personal loss due to the pandemic. As 2020 winds down, I am hopeful for the future and I am confident recovery will happen in the coming months.

Linaro has always been a distributed company and has known from its beginning how to work effectively and efficiently with individuals, teams and companies across more than 30 countries.  This knowledge and experience has allowed us to continue to be productive even given the challenges of the pandemic.  Later in this month’s update, the engineering teams will summarize some of the highlights from this year.  Before you read their highlights I want to share my thoughts on the coming year.

### Where are we headed?

We are not necessarily going in a different direction, rather, we will be working for better alignment across core engineering and segment groups.  We continue to feel collaborative engineering (solving common engineering challenges by working together) and direct participation in the various upstream communities is the best approach for solving complex technical problems.  Over the past few months we have been opening Linaro projects, such as Trusted Substrate and Stratos, to everyone working in the Arm ecosystem.  As always, Linaro members will control the project plans and direction.  In addition, non-members will be able to participate in the project development.  Many hands make the work go quicker and lighten the load on all.  I have asked the engineering teams to ensure that all project plans include specific deliverables for each development cycle.  Some projects will take more than one cycle to complete, even so, the project needs to show demonstrable results along the way.  Each project, as part of the Plan of Record (PoR) process, will determine the best way to achieve results in each cycle.

I wish everyone a very happy and healthy end of year and the hope for a prosperous 2021.

## Building Fundamentals in 2020

**By Mike Holmes, Engineering Director, Foundational Technologies**
https://www.linkedin.com/in/jon-burcham/

{% include image.html path="/assets/images/content/building-fundamentals-2020.jpg" alt="Foundational Technologies Team Patches and Stewardship Table" %}

### Articles

The [2020 OSPM summit](http://retis.sssup.it/ospm-summit/), which is a significant event for the Linux kernel world, was covered by Jonathan Corbet publisher of [LWN](http://lwn.net). Jonathan wrote an article [“Imbalance Detection and Fairness in CPU Scheduler”](https://lwn.net/Articles/821123/) for the May 22, 2020 issue highlighting the work Vincent Guittot is driving within the KWG and the Linux community. Closer to home we published an [overview of VirtIO work](https://www.linaro.org/blog/virtio-work/) and [The Evolution Of The QEMU Translator](https://collaborate.linaro.org/display/EMR/Linaro+Engineering+Highlights+2020.07) both written by Alex Bennée. In August, Daniel Lezcano published two power management articles. The first was “[Using Energy Model to Stay in TDP Budget](https://www.linaro.org/blog/using-energy-model-to-stay-in-tdp-budget/) ” and [“Thermal Notifications with Netlink”](https://www.linaro.org/blog/thermal-notifications-with-netlink/) . Linus Walleij contributed a widely read article “[How the ARM32 Linux kernel decompresses](https://people.kernel.org/linusw/how-the-arm32-linux-kernel-decompresses)” which was reprinted in the August 13, 2021 issue of LWN. In September, we wrote articles on [BFQ](https://www.linaro.org/blog/bfq-saved-me-from-thrashing/), [Force Idle When a CPU Is Overheating](https://www.linaro.org/blog/force-idle-when-a-cpu-is-overheating/), [Enabling UEFI Secure Boot on U-Boot](https://www.linaro.org/blog/enabling-uefi-secure-boot-on-u-boot/) and [OpenOCD at Linaro](https://www.linaro.org/blog/open-on-chip-debugger-ocd-at-linaro/). In November, a [sequence of articles on Arm32](https://www.linaro.org/blog/linaro-engineering-highlights-november-2020/) by Linus Walleij was published with a wrapup in December of [an overview of the future of 32-bit Linux](https://www.linaro.org/blog/32-bit-linux-bright-future-or-end-of-life/).

## Linaro Consumer Group

**By Tom Gall, Engineering Director, LCG**

{% include image.html path="/assets/images/content/LCG.png" class="small-inline left" alt="Linaro Consumer Group icon" %}
Over the course of the past year,  LCG has been focused in 3 areas of involvement within the Android ecosystem. These are Premium Supported Developer Boards for Android, Kernel Engineering for Android and Android Common Kernel Validation in collaboration with LKFT.

### Premium Supported Developer Boards for Android

LCG consolidated its focus on the Member development boards that we had helped push into the AOSP master tree. We maintain these development boards in AOSP, keeping them up-to-date across Android 8, Android 9, Android 10, Android 11, and AOSP with kernel versions that include 4.4, 4.9, 4.14, 4.19, 5.4, 5.10 and mainline. At present, these boards are: Qualcomm’s Dragonboard 845c, HiSilicon’s HiKey and Hikey960, and TI’s X15.

These boards serve as a great vehicle to do feature development (ex GKIv2, etc), upstreaming, CI and validation for all things Android. They have been instrumental in development and demonstration of new Android features. More details are in the following section.

Our mainline-tracking activities on these boards have made sure that breakages between Android userspace and mainline kernels are found, reported and fixed as soon as the upstream kernels are released - naturally most of these are found during the merge windows. This also provided the validation paths needed for changes posted upstream.

## Kernel Engineering for Android

Kernel engineering for Android was largely concentrated on Android feature enablement and validation, dmabuf heap updates and keeping form-factor devices in sync with mainline kernels.

As Android continues to evolve, the team focussed on enabling new Android features on the current devices - both the development boards and formfactor devices. GKIv2 was implemented on all the devices and continues to be validated. Relevant patches were posted upstream, keeping in line with the upstream-focus of the GKI effort. New features such as FBE, replacing ION with dmabuf heaps, and clk_sync_state were added and validated on the devices.

After we merged dmabuf heaps into Linux mainline kernel as the replacement for ION, we implemented many features to bring dmabuf heaps closer to ION in terms of feature parity, and there are more patches in-flight. This work is ongoing as the enabler for vendors to move over to dmabuf heaps from ION in AOSP.

ION has been dropped from mainline from v5.11 onwards, and dmabuf heaps are the way going forward. It was great to see the first patches outside of Linaro for SRAM dma-buf heap upstream. We continue to work with Members and vendors to improve this coverage. We also converted the Codec2 media framework in AOSP to use dmabuf heaps via the libdmabufheaps library which was newly written to allow AOSP users to transition to dmabuf heaps.

To keep our form-factor devices synced with the mainline, we added more features, while pushing patches for upstreaming. As a result, Poco F1 now has its panel driver, accelerated touchscreen, Wifi, Bluetooth, and audio fully functional with minimal patches outstanding. Adding these features allows the devices to be more usable to us and increase our validation coverage.

Our Android graphics open stack focus with the Dragonboard 845c continued, where we kept aosp/master libdrm, Mesa GL and drm_hwcomposer in sync with the upstream with regular merges and fixes.

In our other upstreaming efforts, we pushed fixes for the devices we manage. Android kernel debt reduction was largely focussed around GKI v2. It was also augmented by increased participation from Google engineers on upstreaming new features. We continue to maintain dmabuf, dmabuf heaps, drm_hwcomposer and timekeeping, while being highly active as reviewers in the areas of interest.

## Android Common Kernel Validation

Android common kernel validation continued to be a strategic focus for the team. So far this year, we have run 402 Million tests, reported in 237 test reports sent through the year. A total of 422 kernels were tested.

All the board/kernel/userspace combinations mentioned above as our premium supported development boards are under test. Test runs include regular runs of defined subsets of CTS and VTS that exercise the kernel, as well as periodic full CTS/VTS runs on the boards. 
With these large numbers of tests being run weekly, average weekly triaging for issues has also increased. Test regressions were found and fixed in many VTS/CTS tests, around webview, networking, bluetooth, storage areas to name a few. Our test report format improved over the year, with additional data about flakey tests, regressions and total failures added based on feedback received.

Community wise, we had an active year. We were highly active in the Linux Plumbers Android Microconference - both as organising committee members and presenters - driving key discussions and design decisions. John Stultz posted a couple of articles around cache handling and dma-api on LWN. We also did various demos at Linux Plumbers Conference (LPC) and Virtual Connect, notable ones including showcasing GKIv2 and mainline work on Poco F1.

## AI Project

Over this past year the Linaro AI Project has focused on impact to Servers, Edge and Microcontrollers. Some of accomplishments include:

### Servers

Linaro now hosts the community build for AArch64 TensorFlow. This is an achievement of the CI infrastructure and the engineering effort to overcome build dependencies.

The Server perspective acknowledges that inferencing dominates the Machine Learning element of AI. By exploring the Training component of machine learning (ML), servers provide the added resource requirements for the ML Models to be built that inference relies upon.

In addition to ML Frameworks, Servers explore novel approaches to AI to see how these can be applied to disaggregated/distributed computing environments.

### Edge

ArmNN/ACL made several releases through the course of the year. The Arm team collaborating through the AI Project took in patches to add a Python interface. Boost dependencies have started to be removed. Performance and other notable improvements happened through the course of the year.

ONNX-RT/ONNX activity this year included the integration of ACL and then ArmNN as part of ONNX-RT. A number of performance improvements were authored by the NXP team that complement these integrations using the ONNX-RT on Arm.

TVM is a deep learning compiler that supplies superior performance. This year saw many large performance improvements for Arm platforms. Those engaged on the project benefited from performance updates having visibility as improvements landed. TVMC was integrated into the project. This major contribution by the Arm team gives TVM a command line interface to compile, run, profile and tune models without having to author any python code. This helps to make TVM far more usable to those who aren’t experts in AI or TVM. ACL was also integrated into TVM. This toolbox of performance optimized kernels while not fully utilized yet will help to improve performance of inference on Arm. Ethos-N NPU support was also integrated into TVM. Efficient use of offload technologies on Arm is a key attribute of why companies are collaborating on TVM.

### Microcontrollers

The µTVM project was launched in coordination with the LITE segment group. The goal is to complete the vision bringing the superior effectiveness of AI Deep Learning compilers to Arm microcontrollers. The direct benefit to Members is the ability to add to their SDK product portfolio. Members collaborating/coordinating through the project increase their value by directly impacting the engineering priorities to align with their own. As the project has gotten off the ground, Zephyr and Mbed RTOS integration is one of the first achievements. The prototype code has started to evolve with the runtime and rpc mechanisms moving forward. There is plenty to do in 2021 on this project.

TensorFlow Lite Micro is another important piece of the AI Project. As LITE launches their CI system, we will be integrating Tensorflow Lite Micro workloads into this CI. We will be working with Members through the next engineering cycle to identify Tensorflow Lite Micro engineering activities through LITE.

### Linaro IoT and Embedded Group

**By Vicky Janicki, Engineering Director, LITE**

{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="Linaro IoT and Embedded Group" %}

Over the past year, the LITE team has been expanding the reach of several LITE contributing technology areas. Trusted Firmware for Cortex-M (TF-M) is a maturing codebase. Kevin Townsend (Linaro) has been contributing in various ways to reduce the barriers to successful use. To this end, he has contributed working sample applications showing realistic use cases with TF-M based authentication and certificate management. Kevin has contributed blogs and sessions at conferences such as Arm DevSummit as part of this effort.  TF-M also can now be used out of the box with QEMU on Zephyr. Both David Vincze (Arm) and Andrei Gansari (NXP) were active contributors to the TF-M 1.1 (July) and TF-M 1.2 releases with board support and testing. 

{% include image.html path="/assets/images/content/mcuboot-logo.png" class="small-inline left" alt="MCU Boot icon" %}

MCUboot, a secure RTOS bootloader, has been garnering more contributors in 2020. The release cycle sped up resulting in 3 releases in 2020 (1.5, 1.6 and 1.7). A significant milestone was the removal of the MCUboot tree within the TF-M build system and the move to use upstream MCUboot in the TF-M 1.2 release in November. This significantly reduces the amount of out of tree code. Out of tree features such as RAM Load, No Swap and Hardware Rollback support were also merged upstream. David Brown, as co-maintainer, led these efforts as well as speaking at general and security conferences. As a side note, David was invited to be a maintainer for Mbed TLS, a widely used cryptography library.

With the added activity, MCUboot outgrew its home at JuulLabs and in November was migrated to a new home, mcu-tools, on github. A membership agreement and open governance charter for the project are available. A kickoff meeting for founding members is planned for January/February 2021.

The team worked closely with the LAVA and Lab teams over the past year to develop innovative ways to integrate MCU’s into LAVA and the Linaro CI infrastructure. Because each MCU tends to be unique in multiple ways (inputs, core configurations, tools and software etc), finding common mechanisms and adding support has sometimes been difficult. The team is cleverly using Docker containers as well as updating LAVA itself to have a prototype running a commercially available Member board. We also are prototyping using Raspberry PI’s as dispatchers. Kumar Gala, LITE technical lead,  and  Paul Sokolovskyy (Linaro) have been herding this effort along, weeding and seeding throughout the year.

Kumar, a senior Zephyr project maintainer ended the year as the #1 contributor across three releases - 2.2 (March), 2.3 (June) and 2.4 (September). In addition to his role as TSC member, Kumar has released 6 updates to the SDK. Erwan Gouriou (ST) was ranked #10.  LITE team members added support for the Arm Musca S1, the NXP LPC55S and ST boards. This fall, Kevin began work on supporting uTVM on Zephyr, starting with building it within the Zephyr build system.

## Linaro Edge and Fog Computing Group

**By François-Frédéric Ozog, Engineering Director, LEDGE**

{% include image.html path="/assets/images/content/ledge.jpg" class="small-inline left" alt="Linaro Edge Networking Group icon" %}
Based on our Member needs, our focus this year was UEFI (mostly U-Boot and EDK2) contributions, the LEDGE Reference Platform and Linux kernel fixes.

### Trusted Substrate

The project that started as Dependable Boot last year, evolved into Trusted Substrate. The Dependable boot code is still there and is a vital piece of Trusted Substrate, which aims towards SystemReady compliant firmware, while adding a substantial amount of security on the chain of trust.

The majority of the goals defined at Linaro Connect 2019 Bangkok (BKK19), regarding U-Boot EFI subsystem were achieved. Up to now platforms could either support OP-TEE or EFI variables stored securely, since OP-TEE and StandAloneMM are mutually exclusive. Patches in U-Boot, OP-TEE and EDK2 have been merged, which allow OP-TEE and StandAloneMM to coexist. Moreover, storing the EFI variables in an RPMB partition of an eMMC is also available, which allows small embedded devices without a flash in the secure world to protect their EFI variables against a variety of attacks.

Continuing our effort in Trusted Substrate, a number of features have been merged (or are in the process of merging) in U-Boot. Features like UEFI secure boot, Capsule Updates, EFI RNG protocol and EFI TCG2 protocol, provide additional functionality, security and greatly enhance the chain of trust. It’s worth mentioning that some LEDGE engineers became maintainers in projects to which they contribute.

Continuing the work on secure devices, we are working on secure, rollback and brick protected firmware upgrades, collaborating with Arm in defining the protocol and providing a proof of concept.

## LEDGE Reference Platform

The LEDGE reference platform evolved substantially since last year. We now offer prebuilt images for a range of boards. Although the scope of the platform up to now was to provide a reference OS, we also provide prebuilt images that can be easily deployed on a range of platforms. Those images include, apart from the OS itself, an EBBR compliant firmware.

The reference platform consumed the majority of the work done upstream. As a consequence, we can now provide images that have EFI enabled and use an architecture agnostic way of loading an initramfs. We are currently working on adding the rest of the features, like TCG2 protocol support, using the firmware TPM which we now provide.

PARSEC (Platform AbstRaction for SECurity, an API to hardware security and cryptographic services) support was added, including its daemon and the required user-space libraries which currently use our FirmwareTPM device. PARSEC integration included a meta-rust layer to be enabled and developed bitbake recipes can be used as examples of packaging embedded applications written in the Rust programming language. We also solved the problem of fetching Rust application dependencies with the Cargo tool.

During integration of Trusted Substrate work, we found and solved bugs:

1. Wrong calculation crypto signature in uefi U-Boot if virtual machine was run with a different amount of memory. The connection patch was merged on the community review stage.
2. Depending on virtual machine memory size, the initrd image can not be loaded. This was an issue with the communication protocol between UEFI uboot and UEFI kernel stab, which allocated memory and copies there initrd. The fix went to 5.10 kernel.

We also added documentation for LEDGE RP- the LEDGE User guide and LEDGE Developer Howto. (<https://linaro.github.io/ledge-doc>). Documents are also generated during the Open Embedded build.

We removed the injection of the OPTEE compatible node to QEMU device tree. Previously we did that with -dtb qemu parameter, later with patching QEMU. Now OPTEE OS itself adds this node.

## QEMU BSA

Support of the QEMU virtual machine as a reference machine to run LEDGE/Trusted Substrate work continued with enhancements for QEMU with reboot, machine power down enhancements for secure boot. We made several proposals and sent these as patches to the QEMU mailing list:

* sbsa watchdog for qemu virt platform matching linux kernel sbsa-gwdt driver. Maxim Uvarov’s  patch was integrated with the Sashi Mallela patch. The combined patch finally was merged.
* For LEDGE RP we enabled wdt_i6300esb PCI watchdog.
* A proposal to use sbsa_ec controller to reboot QEMU secure virtual machine was sent as patches to QEMU and Arm Trusted Firmware mailing lists.  But discussion of next improvement sbsa_ec may break the virt platform, so the community decided to use secure gpio (pl061) to reboot/shutdown a virtual machine from the secure world.  Maxim is working on a new set of patches.

## CI

On the CI front we continued adding tests for the reference platform. Since the firmware development paved the way on the previous cycle, one major addition is the FWTS test suite running in LAVA.

## Community leadership

LEDGE has been active in promoting Trusted Substrate and LEDGE Reference Platform as an Arm Cassini implementation at various organizations and during a number of events.

The most salient results are:

* Reference to Linaro and Trusted Substrate in Industrial Internet Consortium [Distributed Computing in the Edge](https://www.iiconsortium.org/pdf/IIoT-Distributed-Computing-in-the-Edge.pdf)
* Industrial Internet Consortium Journal of Innovation article on [Over-The-Air updates in automotive sector](https://www.iiconsortium.org/news/joi-articles/2020-March-JoI-Why-Are-OTA-Updates-Needed-for-ITS.pdf)
* Bright Talk [Trusted Substrate webinar](https://www.brighttalk.com/webcast/679/427036)
* Bosch webinar on [over-the-air updates for off-road machinery](https://bit.ly/3oXYVcQ)
* FOSDEM presentation for [XDP](https://archive.fosdem.org/2020/schedule/event/xdp_and_page_pool_api/)
* NetDev presentation on [page_pool API and XDP](https://netdevconf.info/0x14/session.html?tutorial-add-XDP-support-to-a-NIC-driver)
* ArmDevSummit presentation on LEDGE RP (https://devsummit.arm.com/agenda/?search=ledge#/)

## System Technologies

**By Ryan Arnold, Engineering Director, System Technologies**

2020 has been an extremely busy year for the Linaro System Technologies Group. Included below are the highlights of the impressive contribution of this team.

### Keep The Lights On - The Tip Of The Iceberg

In the last year, the Linaro STG team has resolved a stunning 800+ LSS tickets. This represents requests from across Linaro’s segment and working groups, projects where we provide services directly to Members, Linaro developer services, Linaro landing teams, Linaro community projects (such as Trusted Firmware), directed projects such as Morello, and our own internal needs. These 800+ tickets do not include software feature requests that are a part of the collection of open-source software that we created and continue to maintain.

### LTS Kernel Testing SLA - 100% of all LTS releases validated in less than 48 hours!

Repeating the success from last year, the KV team and LSS teams have successfully validated all (100%) LTS releases in less than 48 hours, exceeding our goal of 80%. This took discipline and in some cases extreme effort to achieve.

### Kernel Image Repacking (KIR)

[KIR](https://github.com/Linaro/kir) is a tool that allows repacking of kernel images into boot images and/or rootfs images. KIR was written to eliminate the need to have a custom rootfs build for every LKFT LAVA job. Any LKFT job can run any kernel without additional modifications. This allows functional test bisections to be much easier to accomplish, and allows us to reduce the amount of time it takes to execute an LKFT build since we’re able to build the rootfs images out-of-band from the kernels being tested.

## Reported By

All the work we have done on LKFT tooling, process, and initiative of our reporting individuals comes together with successful reported-by and regression reports to both Greg KH, and Linus Torvalds. There have been many demonstrations of Linaro engineers expertly navigating the upstream bug reporting process successfully. This leads to the establishment of Linaro as experts in the area of Linux kernel testing.

{% include image.html path="/assets/images/content/squad.png" class="small-inline left" alt="SQUAD logo" %}

### Squad Client

The Squad client was started as an effort to improve test report customization for the end users. As initially designed, server based reporting was difficult to use and hard to customize. Together with LKQ engineers, we came up with a simple, API-based, command line tool that allows users to produce customizable reports from the data collected in SQUAD. The tool is still in active development and is already used by Linaro Developer Services. The LKQ team is starting to make greater use of this project in their effort to improve kernel testing reports.

### KissCache

Linaro recently developed and open-sourced KissCache, a simple caching server built on the KISS principle: Keep It Simple and Short. Unlike classical proxies like Squid that transparently intercept traffic, in order to use KissCache one must explicitly prefix the requested URL by the URL of the local KissCache instance. KissCache will download the requested resource in the background while streaming it to the client.

If many clients are requesting the same resource, KissCache will download it only once and stream the content to every client. When artefacts are hosted on a system where network bandwidth is charged per unit (such as Amazon S3), this can amount to several thousands of dollars in savings per month (as was the case in Linaro.) We’ve also seen this deployed at Linaro Member companies to similar success.

### LAVAche

LAVAche is an interesting solution to the problem of QEMU scalability in LAVA instances. Formerly QEMU instances were externally managed as LAVA dispatcher+DUT combinations that were provided directly to LAVA in the traditional method, i.e., statically allocated. LAVAche provides a way for LAVA to utilize cloud availability for running (and scaling) QEMU targets ‘onDemand’. The prototype is able to assess the QEMU target queue depth and dynamically bring-up GCP (Google Cloud Platform) servers as QEMU target devices to which LAVA jobs are dispatched. When the queue is empty it is able to tear down the allocated instances. This hasn’t yet been upstreamed, but it’s likely to make its way into some technology prototypes in the near future.

### LAVA test plans

The LAVA test plans project was created to combine test-definitions (see below) with LAVA device types and produce valid LAVA job templates. The task isn’t easy because LAVA job definitions tend to use implicit dependencies, for example some types of deployments only work for certain devices. At the same time the goal of LAVA test plans was to produce a valid LAVA job for every possible combination of LAVA device type and test-definitions test. Currently the project is used by the LKFT team but there are a number of proposals to use it in Linaro Developer Services projects. 

### Test-Definitions

For several years the [test-definitions](https://github.com/Linaro/test-definitions) project has provided a good base for LAVA test encapsulation. This year it received one important improvement - documentation. The documentation is now auto generated and available in [readthedocs.io](https://test-definitions.readthedocs.io/en/latest/). This project is used quite heavily both inside and outside of Linaro (see [github fork metrics](https://github.com/Linaro/test-definitions/network/members)). This project provides a powerful ‘network’ effect for Linaro because it establishes Linaro as experts in automated testing.

{% include image.html path="/assets/images/content/lkft.png" class="small-inline left" alt="LKFT logo" %}

### LKFT 2.0

The idea behind LKFT 2.0 is that we could pivot our architecture to develop and make use of discrete and reusable components which improve our ability to scale, lead to developer-controlled LKFT pipelines, and reuse of components outside of the Linux Kernel Quality project directly. This is exactly what has happened. LKFT is now using TuxBuild as the Linux kernel build engine. We’re also making LKFT pipelines available to Linux kernel developers and we’re working on reporting concepts which are applicable everywhere.

LKFT 2.0 now includes the following components:

* Reusable Gitlab pipeline definitions
* TuxBuild
* TuxMake
* Lava-test-plans to generate LAVA test definitions in a robust and reusable way
* Squad
* Squad-client
* KIR
* TuxPub for hosting LKFT root filesystems
* LAVA
* Linaro lab hosted target devices
* Test-definitions for hosting the implementation details of running each test
* KISS Cache
* Openembedded layer meta-lkft

Each of these components can and are often reused outside of LKFT for their specific purpose. Together, they provide all of the functionality needed to deliver LKFT. What’s really interesting about this list is that many of the innovations from this year have already been adopted in LKFT, but by no means is LKFT the only place these are usable. 

{% include image.html path="/assets/images/content/tuxsuite.png" class="small-inline left" alt="tuxsuite logo" %}

## [TuxSuite](https://tuxsuite.com/)

The term ‘TuxSuite’ might be new to many people since this ‘branding’ term was just recently decided upon as the name of the suite of tools we’re building around the cloud-scalable Linux kernel build and test capabilities.

{% include image.html path="/assets/images/content/tuxmake.png" class="small-inline left" alt="tuxmake logo" %}

### [TuxMake](https://gitlab.com/Linaro/tuxmake)

TuxMake is an open source project that provides curated build environments and tools (in containers) that are necessary for building Linux kernels. It provides for kernel builds what git provides for kernel source, that is portable and reproducible builds. It’s a problem that much of the upstream Linux development community doesn’t even realize they have (collectively spending incredible amounts of time dealing with broken builds and frustration about lack of build reproducibility). TuxMake has delivered on its promises and is currently being fully integrated into TuxBuild. TuxMake has a chance to change Linux kernel development best-practices. We’re hoping for industry adoption of TuxMake in the future.

{% include image.html path="/assets/images/content/tuxpub.png" class="small-inline left" alt="tuxpub logo" %}

### TuxPub

TuxPub is the “Serverless File-Server”. It’s a file server that does not require any actively running servers, with cloud-native scalability and availability and it costs very little to run and maintain since it’s “just software”. It features a simple, minimal design and 100% unit-test coverage. It solves the problem of how to provide a light-weight, content view of related files similar to an Apache directory listing and is applicable for any project that stores artifacts in AWS S3. TuxPub is already living up to the promise and being used in places in Linaro outside of the TuxSuite proper, such as in LKFT.

{% include image.html path="/assets/images/content/tuxboot.png" class="small-inline left" alt="tuxboot logo" %}

### TuxBoot Prototype

TuxBoot is the sibling service to TuxBuild. TuxBoot was conceived with the grand vision of being able to boot any Linux kernel built by TuxBuild in emulation, in constant time. The first step in this vision was to execute a prototype. The prototype started with a very narrow mission--to prove that we could boot test 100 Linux kernels simultaneously “in the cloud” using ephemeral LAVA hosted QEMU instances. This required learning cloud-native ‘serverless’ methodologies so that there is no TuxBoot infrastructure running when there are no TuxBoot jobs being executed. We now understand AWS Amazon Machine Images (AMI), AWS queuing with SQS, Auto-scaling groups, AWS spot instance ‘on-demand’ virtual machine management, AWS APIs, and AWS Lambda. They used TuxBuild as a model for the API and serverless backend but had to solve major technological problems to get the ASG model working properly.

{% include image.html path="/assets/images/content/tuxbuild.png" class="small-inline left" alt="tuxbuild logo" %} [TuxBuild](https://gitlab.com/Linaro/tuxbuild) has been impressively reliable over the last year, with zero downtime, attributable to the continuous deployment methodology of the development team as well as a testament to the power of the serverless methodologies when implemented according to “best-practices”. The Tux team has been making consistent improvements in the areas of scalability for the last year. Not only have they been executing disciplined weekly load tests which have helped them find scalability corner-cases (such as abnormalities in how AWS reaps spot-instances immediately after allocating them), but they’ve also been working on fundamental improvements to how we manage hitting foreign git-servers at scale.

We learned a lot about how to crash git server hosts in the last year while scale-testing TuxBuild and we realized that in order to execute on our vision for TuxBuild we could not have TuxBuild hammering kernel.org, github.com, or gitlab.com with thousands of simultaneous fetch requests or we might get sternly worded emails from those service providers. As a remedy we developed a serverless git repo cache and mirror mechanism, proprietary to TuxBuild, that prevents TuxBuild from saturating external git servers.

## LDCG

{% include image.html path="/assets/images/content/ledge.jpg" class="small-inline left" alt="Linaro Edge Networking Group icon" %}

This year we have had a goal to move the Colocation datacentre facility from London to Cambridge. The Colo hosts the infrastructure for the Linaro Developer Cloud. This is a free service to enable Any developer to gain access to Arm-based Server-grade environments.

Over the years the hardware at the Colo has been added to with products, sometimes early access before general release, from Qualcomm, HP, Marvell, Mellanox and Huawei. As we go to print with these highlights, the latest addition will be from Fujitsu. Moving forward, we have transitioned and retired older hardware whilst still being able to maintain our overall compute capacity.

The relocation of facilities has also given us an opportunity to re-evaluate how services are delivered at the Colo. Until now, allocation of workloads have been siloed per team/function 
to specific racks/chassis. To improve general availability of chassis across varying workloads and to optimise power consumption, we are in the process of consolidating chassis access and applying live migration of workloads across optimal numbers of chassis and will power-down spare chassis between workloads.

LDCG covers more than the infrastructure. Each of our teams focus on specific areas of Arm-based server requirements. We have also had a number of new recruits this year.

In Server Architecture this year we welcomed Shashi Mallela, based in Canada. Shashi is helping to develop the Arm SystemReady SR subset for emulation, otherwise known as SBSA QEMU. On its own, QEMU provides an emulation environment for a range of architectures. The SBSA variant provides a whole chassis emulation environment so that developers can try libraries that interact with whole systems rather than pure CPU/Linux Kernel focus. This can be used for pre-availability of hardware testing. SBSA QEMU forms the emulation environment for our SmartNIC research too.

Our avid Cloud developers, Kevin Zhao & Xinliang, both based in China, have been identifying and coding to enable Arm-based support in the Ceph storage platform which ended up also enhancing functionality on non-Arm-based architectures too. Ceph is the storage backend that underpins the whole LDCG datacentre solution. Our virtual machine environment is managed within OpenStack, a community project which enables Live Migration services, which are key to the new datacentre layout. Notwithstanding that, the Cloud team have managed to enable Linaro to be recognised as a Kubernetes-certified test environment, which sits atop OpenStack/Ceph.

{% include image.html path="/assets/images/content/hpc-supercomputer-image.png" class="small-inline left" alt="HPC Supercomputer image" %}
Arm may have begun in the mobile space but has grown significantly to incorporate not only the server space but now leads the HPC space with the Fujitsu/Riken Fugaku 158,576 node 29MegaWatt supercomputer. Linaro doesn’t want to get left behind in this supercomputer wave and so being installed this Christmas 2020, alongside our existing 6-node ThunderX2-based HPC, is our very own 8-node 1.5KiloWatt variant of Fugaku! We’ve already heard from quite a few of you requesting access.

Feeding into our new datacentre layout and supercomputer will be the need to handle Big Data. Our very own Ganesh Raju, based in the US, just celebrated the release of BigTop v1.5. Ganesh and his Arm Member engineers have been working hard to ensure the various components that make up Big Top all built correctly, and plugged the holes with new code as needed. Big Top will be the stack that houses our Machine Learning models that devour CPU cores for number crunching needs.

For our AI component too, Arm has added two Member engineers to help with our ML Framework development. So, with the rest of LDCG’s assignee and Member engineers - Marcin Juszkiewicz , Masato Fukumori, Masahisa Kojima, Jun He, Guillame Gardet, Nathan Sircombe, Crefeda Rodrigues, Yuqi Gu, LDCG is looking strong for 2021.

This year we have seen the amalgamation of two workgroups, HPC-SIG and AI on Servers, to form the HPC SmartScale project (HPC-AI). It’s also where we’ve seen growth in welcoming new recruits Andrew Goodbody and Takis Mavrodakos. We’re also actively recruiting now for a third! All are based in Cambridge. Andrew and Takis have been providing the physical work of maneuvering the servers from our old London Colo to the Cambridge site, whilst remotely Kevin and Xinliang have been sending many requests to plug Cable 43 to Port 98 and Cable 23 to Switch 2. The list goes on. Well done all - it’s a mammoth task. When the move is over, I’m sure they’ll enjoy the sole focus of software development!

HPC-AI is to promote the Arm-based use of servers in high performance environments and enable intelligent decision making based on input streams. It’s an environment that wouldn’t be possible without all of the components that make up LDCG and the collaboration with notably TCWG and the rest of Linaro.

What? We can do more! We are just beginning the challenge to take-on and support Neoverse in the Hyperscaler environment. This means, cloud-native, disaggregated heterogeneous, distributed computing that utilises AI/ML for smart-enablement of the backend for all those incoming API/RPC calls from the EDGE and IoT fields. Watch this space!

To find out more about the work Linaro does do [get in touch](https://www.linaro.org/contact/)!