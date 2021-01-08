---
layout: post
title: Linaro Engineering Highlights - December 2020
description: This edition of the monthly Engineering Highlights is feature
  packed with several updates. together with  roundups on the year of some of
  the key projects.
date: 2021-01-08 12:08:24
image: /assets/images/content/code.jpg
tags:
  - Linaro
  - Linux
  - Zephyr
  - AI
  - LCG
  - IoT
  - LKFT
category: blog
author: jon.burcham@linaro.org
---
# The Future of 32-bit Linux

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}
The news cycle for processors and system-on-chip (SoC) products these days is all about 64-bit cores powering the latest computers and smartphones, so it’s easy to be misled into thinking that all 32-bit technology is obsolete. That quickly leads to the idea of removing support for 32-bit hardware, which would clearly make life easier for kernel developers in a number of ways. At the same time, a majority of embedded systems used today do use 32-bit processors , so a valid question is if this will ever 
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

In theory, new kernels should work with older DTBs for most modern Arm SoCs.  However this is very rarely tested and not at all formally.  If we believe in this model, we need to start testing it.  We need to test older DTBs with the latest kernel versions.  How old is older?  Ideally all LTS kernels in the past 6 years but we need to start somewhere so the idea is to start with current LTS - 1.  For example, the Linux 5.11-rc releases should be tested against 5.4.  We can’t test all platforms so we will start with a few that support the idea.  A simple boot test will not be sufficient. We will need to quickly checkout as many peripherals as possible because this is the most likely area to break when the DTB info is incompatible.

Ideally old kernels should work with new DTBs also.  If not, you could have one OS upgrade your firmware and it would break another OS that was previously working.  This version of the test is probably a lower priority than the case above, so we will suggest holding off on this testing until the first version is worked out more.

## DTB Override by a Boot Manager (DTB as part of OS model)

In a vertical OS model, each kernel version has its own DTB files that are known to work with it.  The firmware (often U-Boot) knows how to pick a kernel and load and fixup the associated DTB file.  Thus U-Boot is playing the role of platform firmware and also OS boot manager.  It does all the work and knows the file layout of the kernel and DTB images.

However, in the Disto model, the distro will almost always use its own boot manager.  (Grub is often used in this role but others are used as well such as the syslinux family, systemd-boot, etc.)

The presence of this OS boot manager causes several problems if it wants to override the DTB info.  Only the boot manager knows which kernel it will choose but only the firmware knows how to perform the DTB fixups.  (DTB fixups include inserting the serial number,  ethernet mac addresses, or the size of main DDR into the DTB.)

To resolve this issue, the DTE project is proposing a new UEFI API to the EBBR spec.  This API can be used by the boot manager to request the firmware to perform the DTB fixups after it has loaded a new DTB.  This API will be implemented in U-Boot.  Grub will be enhanced to call this UEFI API if it loads a new DTB.  

Grub will also be enhanced to measure the DTB into a Trusted Platform Module (TPM) if one is present and to verify the signature of the DTB it loads if secure boot is enabled.  Upstream Grub has not accepted secure boot enhancements made by others so far so the signature verification of DTB may be another contention point.

### Conclusion

SystemReady IR can enable the best attributes of a vertical OS and an off-the-shelf distro OS but some effort and coordination is required to make this real.

If you are interested in this work please subscribe to the [boot-architecture](https://lists.linaro.org/mailman/listinfo/boot-architecture) mailing list. Our next DTE call will be in early January and will be announced on the mailing list.

## 2020 Year in Review
### Preface
**By Mark Orvek**

