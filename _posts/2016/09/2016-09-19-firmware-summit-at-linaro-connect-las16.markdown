---
author: linaro
date: 2016-09-19 03:21:27+00:00
layout: post
link: /blog/firmware-summit-at-linaro-connect-las16/
slug: firmware-summit-at-linaro-connect-las16
title: Firmware Summit at Linaro Connect LAS16
wordpress_id: 11577
categories:
- blog
tags:
- Enterprise edition
- Firmware
- hardware
- las16
- LEG
- Linaro Connect
- Linux
- Linux on ARM
---

Next week at Linaro Connect LAS16 there will be a Firmware Summit on Tuesday September 27, 2016 from 10:10am-1:00pm (PST).  The purpose of this summit is to bring the key developers and maintainers from all camps in the same place, review the status and plan the next steps.

The Linaro Enterprise Group has been driving the work to implement, upstream and maintain UEFI and ACPI support on ARM platforms since its creation in 2012. Over the years, the team has initiated new activities, namely the OpenPlatformPkg proposal to support multiple SoCs and multiple platforms in EDK2, as well as supporting more and more features on ACPI, e.g. recently, Console Selection, APEI, PCIe, NUMA and new GIC implementations. In order to successfully deploy ARM servers in production, it is required that firmware (BIOS) engineers and kernel engineers work in close collaboration and drive the addition of new platforms, improved SoC support, etc.

Recently Linaro founded devicetree.org to support making device tree a properly managed and supported standard. This includes reducing fragmentation, improving maintainability and increasing multiplatform support in hardware description thanks to an open process that encourages wide community participation and the current best practices and technology.

Leif Lindholm, one of the speakers for the summit has just published a great blog on "UEFI Driver Development" that discusses writing a standalone driver from scratch.  His blog also discusses loading it from the UEFI Shell, detecting the presence of a device it recognizes and unloading it from the UEFI shell.  This is a great introduction related to some of the topics in the summit next week.   To read his blog please go to:  [http://blog.eciton.net/uefi/uefi-driver-part1.html ](http://blog.eciton.net/uefi/uefi-driver-part1.html)

Below is an overview of the sessions that will be part of the summit:

**Title:  ARM64 ASWG and Linux ACPI update**
**Abstract:** As presented at previous connects an update on the current support for ARM64 at ASWG level and the hot topics. Also an update on the support that is mainline in the Linux kernel for ARM64 ACPI support. Also covering the next steps for both ASWG and Linux support. Followed by a discussion period.
**Speaker**: Al Stone, Hanjun Guo


**Title: SCMI - System Management and Control Interface**
**Abstract:** In this session we present a new standard proposal for system control and management. The industry, both in high end mobile and enterprise, is trending towards the use of power and system controllers. In most cases the controllers have very similar communication mechanisms between application processors and controllers. In addition, these controllers generally provide very similar functions, e.g. DVFS, power domain management, sensor management. This standard proposal provides an extensible, OS agnostic, and virtualizable interface to access these functions.
**Speaker(s):**Charles Garcia-Tobin

**Title: Tianocore Progress and Status**
**Abstract:**  A brief update on the progress of ARM64 support in EDK2 and OpenPlatformPkg. Also covering the next steps. Followed by a discussion period.
**Speaker:** Leif Lindholm

**Title: Secure Boot**
**Abstract:**  A 101 style introduction to what Secure Boot is as Secure means different things to different people. Covering the current status, what features are implemented currently on ARM64 and what features should be implemented in the future. Followed by a discussion period.
**Speaker:** Ard Biesheuvel

**Title: RAS What is it? Why do we need it?**
**Abstract:**  A 101 style introduction to RAS, its purpose and how we use it on ARM64. Covering current status of implementation in ASWG specs and Linux kernel. Plans for future features that are essential for ARM64. Followed by a discussion period.
**Speaker:** Yazen Ghannam, Fu Wei

To learn more about Linaro Connect LAS16 please visit:  [http://connect.linaro.org/las16/](http://connect.linaro.org/las16/)


