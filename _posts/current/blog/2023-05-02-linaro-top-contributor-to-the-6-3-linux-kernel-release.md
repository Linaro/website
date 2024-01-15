---
layout: post
title: Linaro top contributor to the 6.3 Linux Kernel Release
description: In this blog, we celebrate some of our Kernel Engineers whose work
  resulted in Linaro being the top contributor to the 6.3 Linux Kernel. Read
  more here!
date: 2023-05-02 01:23:41 +01:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - Qualcomm
  - Kernel Release
  - Devicetree
  - Snapdragon
  - 32 bit
category: blog
author: linaro
---
{% include image.html path="/assets/images/content/6.3-most-active-employers.png" alt="Most active 6.3 Employers" %}

[LWN’s development statistics from the 6.3 Kernel release](https://lwn.net/Articles/929582/) showed Linaro at the top of the list - both in terms of changsets and lines changed. What is more, Linaro developers topped both of these lists - Krzysztof Kozlowski for the most changesets and Arnd Bergmann for lines changed. This is Linaro’s most impressive contribution yet and shows yet again how much of an impact our company has on driving the Arm ecosystem forward. We decided to celebrate this feat by crowning Krzysztof Kozlowski and Arnd Bergmann at Linaro Connect - our annual technical conference which we held last week in London (where the Coronation of King Charles III will coincidentally be taking place on Saturday 6 May). 

{% include image.html path="/assets/images/content/crowned-developers-6.3-kernel-release.jpg" alt="Most active 6.3 Kernel Release Developers" %}

In this blog, we asked the Linaro Engineers featured in LWN’s list of most active developers to the 6.3 Kernel Release to talk about their contributions.

{% include image.html path="/assets/images/content/6.3-most-active-developers.png" alt="Most active 6.3 Developers" %}

## Krzysztof Kozlowski

Krzysztof Kozlowski was mostly working on improving the Qualcomm ecosystem and the vast number of its already upstreamed SoCs. This resulted in several patches mostly for DTS files, but also for Devicetree bindings for remote processors, pin controllers and others. Beside this, Krzysztof was improving the Qualcomm audio codec drivers and added the SM8550 Audio components: specialised pin controller for the Low Power Audio SubSystem (LPASS) and the ADSP Generic Packet Router (GPR). Both LPASS and GPR are parts of larger work of bringing full audio support to the newest Qualcomm Snapdragon 8 Gen 2 SoC (SM8550).

Continuation of Krzysztof’s work on PREEMPT_RT resulted in one important patch solving the remaining PSCI cpuidle driver headache in the Real-Time use case. This concluded Krzysztof’s work on bringing Linux Real-Time to the [Qualcomm RB5 Robotics Platform](https://www.qualcomm.com/products/internet-of-things/industrial/industrial-automation/robotics-rb5-platform) and was also presented on [Linaro Connect session LHR23-204](https://resources.linaro.org/en/resource/fX76n9YiNUCfCTMvLRCWAv).

In his spare time, Krzysztof improved several other ARM64 platforms, fixing their Devicetree check warnings. Krzysztof was as usual quite an active reviewer in the ARM ecosystem as a lot of Devicetree bindings and DTS files are reviewed by him. This resulted in 225 Reviewed-by credits for v6.3 Linux.

## Dmitry Baryshkov

During this release, Dmitry continued working on the display driver for Qualcomm platforms. Most important changes included support for the Qualcomm SM8450 platform, both DPU (display processing unit) and DSI output, DSI support for SM8350 platform (DPU support was contributed by Robert Foss) and major fixes for SC8280XP, QCM2290 and MSM8996 platforms.

The next working area to be mentioned is the clock drivers for Qualcomm platforms. Dmitry continued his fight with the clock drivers which used legacy clock bindings rather than declaring all used clocks properly. This work is mostly concluded now, leaving only the Qualcomm MDM9615 unconverted, which hopefully is going to be fixed in one of the next releases. Closely tied with this work was the rework of the SMD-RPM clock driver, the core clock driver used on the lower power and/or older platforms. This rework simplified adding support for newer devices, without requiring developers to do hand-comparison of clock definitions.

This list should be concluded with several other kernel improvements, including CPU clock fixes for MSM8996 platform (which can now boot with all 4 cores enabled and scaling properly) and Lontium lt9611 DSI-to-HDMI bridge, which now supports using two DSI channels for data input (and thus gains support for 4k display modes).

## Arnd Bergmann

Arnd completed his work to remove all unused legacy board files with 32-bit Arm processors Most of the work here involved finding the people that last used these machines to ensure there are no users remaining. For around 40 of the 200 board files, there was at least one user that showed interest in keeping it a while longer, but all the other ones are now gone.
Machines that already use devicetree were not removed, and now the only remaining non-devicetree boards are for the old Intel StrongArm, Marvell PXA, Marvell Orion, TI OMAP1, and Cirrus Logic EP93xx platforms, all based on ARMv4 or ARMv5.

The cleanup removed a total of 150,000 lines of code, and is already helping to enable cleanups in other places that were previously too hard.

For more details, check out [Arnd’s session from Linaro Connect London 2023](https://resources.linaro.org/en/resource/aLLCnNzxqpY43NwtA7TVTs) where he gave an update on Arm Soc Upstream.

## Konrad Dybcio

Konrad introduced support for the Lenovo Tab P11 based on the Snapdragon 662. He cleaned and fixed up some existing dt-bindings, fixed some minor issues in existing Qualcomm-specific drivers for various platforms, and improved support for multiple generations of midrange and flagship Sony Xperia devices. Konrad wired up the display subsystem on SM8150, fixed the UFS crypto engine on SM6115, set up DDR & L3 scaling on SM6350, fixed the display subsystem initialization on SM8350/SM8450 and improved the styling in a multitude of existing Device Trees. He also reviewed numerous patches and removed some obsolete/unnecessary code.

## Johan Hovold

Johan Hovold has worked on support for the Qualcomm SC8280XP platform and the Lenovo ThinkPad X13s laptop in particular. This release includes, for example, fixes for races and a rework of the locking in the core IRQ mapping code; a rework of the interconnect registration API which was inherently racy; and support for saving the RTC time using an external non-volatile memory as is needed on most Qualcomm platforms.

## Neil Armstrong

With Abel Vesa, Neil added drivers and device tree support for Snapdragon 8 Gen 2 SoC. Support was added on core providers (clock, pinctrl, interconnect, PMICs, …) to advanced peripherals (SDCard, Remoteproc, USB, UFS, PCIe, Display Engine, DSI ) in order to support the Qualcomm MTP SM8550 reference device. Neil also continued cleaning Amlogic Device Tree and moving Amlogic Device Tree bindings to YAML dt-schema, and added initial support for the Hardkernel ODROID-N2L SBC.

## Overall Testing Statistics

{% include image.html path="/assets/images/content/6.3-test-and-review-credits.png" alt="6.3 Test and review credits" %}

### Reviewed-by

Around 82 companies contributed their works to the 6.3 Kernel Release and
[Linaro secured 3rd position](https://remword.com/kps_result/6.3_review.html) in “Reviewed-by” of this kernel release by committing 1077 Reviewed-by for this kernel release.

### Tested-by

Around 49 companies contributed their works to the 6.3 Kernel Release and
[Linaro secured 3rd position](https://remword.com/kps_result/6.3_test.html) in “Tested-by” of this kernel release by committing 161 Tested-by for this kernel release.

{% include image.html path="/assets/images/content/5.18-6.3-most-active-employers.png" alt="5.18-6.3 most active employers" %}

## Conclusion

As can be seen in the above list of most active employers from releases 5.18 - 6.3, Linaro continues to appear on top. This demonstrates not just our high level of expertise in Arm Software but also our experience in working as part of the Open Source Community. To find out more about Linaro’s role in the Linux kernel, check out our [](https://linaro.atlassian.net/wiki/spaces/UM/overview)[Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview). Alternatively if you would like to leverage this expertise and work with Linaro on successfully building and deploying your Arm-based product, read about the [services we provide here](https://www.linaro.org/services/).