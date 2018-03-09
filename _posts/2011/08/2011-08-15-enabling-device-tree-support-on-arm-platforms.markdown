---
author: deepak.saxena
date: 2011-08-15 15:59:00+00:00
layout: post
link: /blog/enabling-device-tree-support-on-arm-platforms/
slug: enabling-device-tree-support-on-arm-platforms
title: Enabling Device Tree support on ARM platforms
wordpress_id: 4120
categories:
- blog
---

Linaro hosted its first Connect event last week in Cambridge, UK; providing an opportunity for Linaro and community developers to gather and work on current tasks and plan for the future.  The kernel working group used this time to work along with several sub-architecture maintainers to work on several critical items on the ARM cleanup and consolidation roadmap.

The team was split into two main groups, the first focusing on continuing the work on enabling Device Tree support on ARM platforms, a technology selected by the ARM Linux community to simplify porting of the kernel to the diverse platforms developed by ARM silicon vendors and ODMs.  ARM-based silicon vendors and ODMs.  Device Tree moves the description of the  devices that make up a platform (memory, I2C connected devices, serial ports, etc) from the kernel to an external file - the Device Tree file. Currently, adding support to a new board for a kernel supported SOC required changing the kernel and rebuilding it even if the change from an already supported board is as simple as a device changing I2C bus addresses or IRQ number. With Device Tree, an engineer simply needs to update the Device Tree Source (DTS) file, compile it with a simple script into a binary blob - the Device Tree, and load it into memory. The kernel reads the device tree at boots and initializes the HW described by the DTB. A new revision of a platform or a brand new platform simply requires a new DTB file. In the case of new hardware not supported by the existing kernel, drivers for such can be modularized and the old kernel can still be used without needing an update. This model also opens up the possibility of updating device support on stable and supported kernels, something that is of importance for moving ARM Linux distributions into the server market.

Basic Device Tree support - passing platform identification and memory size information to the kernel - has been working on a few platforms in Linus' upstream kernel.org tree since 2.6.39 but this is not enough to fully describe a hardware platform. The team at Linaro Connect, led by Grant Likely, set out to enhance DT support and to enable it on some new platforms. By the end of the week, the team had written many patches that will are queued up for the 3.2 kernel tree:
	
  * Several device drivers for the Freescale iMX were converted to use DT-based discovery.

	
  * Code was developed to bridge between the Device Tree model and TI OMAP's HWMOD which is used to describe complex power and clock domains.

	
  * Initial support for DT was added to the Samsung Exynos, Qualcomm MSM86, and Atmel AT91 ports including a serial console described by the Device Tree.

	
  * Initial skeleton work for DT was done for the ARM Versatile board.


Device Tree helps us move towards our goals of being able to boot a kernel on any ARM machine and having a cleaner code base; however, it is only part of the solution. The ARM kernel port has been under development for over a decade and in that time has accumulated a lot of cruft that does not make it possible to build a kernel that supports heterogeneous SOCs. Much of it code that has been copy-pasted from one place to another, creating multiple similar implementations of the same functions, using the same symbol names globally, and adding much code bloat. The ARM kernel tree has grown at a very rapid pace, estimated at a quarter million lions of code changes/year.  years and in that time, many decisions have been made that were OK in the context of "traditional embedded" but do not scale to needs of millions of mobile devices or of enterprise commodity servers. Cleaning up this code to remove the cruft and enabling the building of a multi-SOC kernel binary was the other focus of the Kernel Working Group.

The problems we are trying to solve in this exercise are mostly simple conceptually but require much hand coding to rename symbols, replace build-time constants with runtime variables, consolidating configuration options. Often, digging into these led into other problems that need to be solved first, as significant portions of the code base has been create piecemeal, with one change depending on some other API or set of headers. In much the same way, the cleanup work requires fixing one piece at a time. For example, one of the simpler tasks was to remove a constant - CLOCK_TICK_BASE - that is still in global header files for all ARM SOC ports. This symbol is a historical leftover from old time keeping code that describes the frequency of the system timer clock. New system timer drivers do not rely on this symbol. The initial thought was to simply remove this symbol from the SOC headers and rename it on the SOCs that do make use of it. Unfortunately, there is another constant - LATCH - based on the CLOCK_TICK_RATE and removing the later would cause kernel build to fail. LATCH is also a legacy leftover from out-of-date time keeping code so in theory it can too be deleted, unfortunately, it is used by several drivers that still need to be cleaned up. In addition, LATCH is used in some non-ARM architecture code, so removing it also requires cleaning those up. All together, the removal of this one symbol leads to about two dozen patches that need to be submitted upstream touching code throughout the kernel tree, not just the ARM SOC ports. This was one of the simpler problems we looked into and others require digging through a much more complicated puzzle of inter-dependencies. These included:

	
  * Replacing low level IO accessor macros with runtime selected functions based on platform type. Currently each platform defines I/O macros with the same name and these will clash if trying to build multi-platform kernels. Removing these is a complex challenge as there are many pieces of code that incorrectly use these macros when they should be using higher-level APIs.

	
  * Replacing the global NR_IRQS constant with per-board information

	
  * Removing duplicated low-level serial output functions. Currently the code to print "Uncompressing kernel..." and the code for low-level in-kernel serial output are completely different but could be made to be the same.


In addition the the above work, KWG members also were involved in discussions about continuous integration and testing of the upstream kernels on ARM platforms, kernel development process at Linaro and how to better stay in sync with upstream, -stable patches for ARM platforms, Android development, and flash storage roadmap to name a few.  Overall, the team had an extremely productive week of hacking on existing projects and on coming up with more detailed plans on what other items on which we need to focus.


