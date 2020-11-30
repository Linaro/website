---
layout: post
title: Linaro Engineering Highlights - November 2020
description: TBC
date: 2020-12-14 11:54:02
image: /assets/images/content/electricity-1288717_1920.jpg
tags:
  - Engineering Highlights
  - Lite
  - Device Tree
  - Kernel Working Group
  - Ledge
related_projects:
  - DTE
category: blog
author: jon.burcham@linaro.org
---
# LITE Updates

**By Vicky Janicki, Engineering Director LITE**
{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="LITE Icon" %}The LITE team is busy contributing to the next Zephyr 1.5 release due at the end of January 2021, the TF-M 1.2 release (due by the end of month) and MCUboot 1.7 (also due at the end of the month. Four LITE engineers were ranked in the top 10 contributors for the MCUboot release.

## MCUboot - A New Linaro Community Project

{% include image.html path="/assets/images/content/lite.jpg" class="mcuboot-logo.png" alt="MCUboot logo" %}We are very pleased and delighted to give an update on the MCUboot project's move to open governance. MCUboot originated with the company runtime.io which was acquired by JuulLabs in November 2018. 

The MCUboot github repo was formally and properly migrated from JuulLabs to the [mcu-tools github project](https://github.com/mcu-tools/mcuboot). We avoided having to fork the project and will retain the history by migrating. A website, [mcuboot.com](http://mcuboot.com/), already exists outside of JuulLabs and points to the correct github.

Thanks to David Brown (Maintainer), Reed Hinkle (Arm), Fabio Utzig (Maintainer), Aditi Hilbert (JuulLabs), and Andy Gross (JuulLabs) for giving the migration the final push to completion. Many people have been involved in this effort since January and it has taken many hands to move MCUboot to be under the Linaro Community Project umbrella.

The pledge is to keep the MCUboot project governance and administration minimal to allow the contributors to continue to build the best little bootloader in RTOS's. 

Next Steps: We are now recruiting Founding Members for MCUboot. The membership fee will cover administrative and hosting costs along with some potential funding to promote MCUboot. Once we have 4 Founding Members, a board meeting will be scheduled to begin a project charter review and approval process. In the meantime, the technical meetings and leadership will continue under David Brown’s  and Fabio's guidance. Again, the goal is to not disturb what is already working. 

We have drafted a membership presentation and have a draft charter (based on the OpenAMP project) available. Please contact [Vicky Janicki](mailto:vicky.janicki@linaro.org), [Reed Hinkel](mailto:reed.hinkel@arm.com) or [David Brown](mailto:david.brown@linaro.org) for the files.

## [Security and Zephyr Project](https://www.zephyrproject.org/security-and-the-zephyr-project/)

{% include image.html path="/assets/images/content/lite.jpg" class="zephyr_project-logo.png" alt="Zephyr Project icon" %} Part of the charter for the Zephyr Project specifies that there shall be a security subcommittee. This committee consists of an individual from each Platinum member company, along with two elected positions, a Security Architect (currently me),and a Chair. The Chair is responsible for running the regular security meetings (every two weeks), and the Architect is responsible for the overall security of the project. **[Continue Reading here..](https://www.zephyrproject.org/security-and-the-zephyr-project/)**

## [Device Tree - Future Improvements](https://www.linaro.org/blog/device-tree-future-improvements/)

**By Joakim Bech, Distinguished Engineer**

{% include image.html path="/assets/images/content/lite.jpg" class="devicetree-logo_vertical-devicetree.png" alt="Device Tree icon" %} Device Tree has been around for a long time and is a well known technology for engineers working with embedded devices. One of the key goals with Device Tree was to separate specific settings related to a specific SoC into separate configurations, <!--StartFragment-->

in a way that would make it possible to run a generic kernel (Linux kernel) and provide different Device Tree Blobs (the name that refers to the compiled form of a Device Tree configuration, DTB for short) for different hardware configurations. Originating from Open Firmware, Device Tree was picked up by the Linux kernel roughly fifteen years ago, as an effort to try and sort out what at the time was a rather messy configuration of Arm devices. Today, you will find hundreds of DTS-files in the Linux kernel tree for all sorts of devices coming from a plethora of SoC manufacturers. In Linux kernel v5.8 there are 1833 *.dts files, which shows the Device Tree approach of doing device configuration in Linux kernel has been pretty successful.

**[Continue reading](https://www.linaro.org/blog/device-tree-future-improvements/)….**


# Kernel Working Group News
