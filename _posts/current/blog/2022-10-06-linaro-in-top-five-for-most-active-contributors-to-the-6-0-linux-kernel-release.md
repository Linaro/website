---
layout: post
title: "Linaro in top five for most active contributors to the 6.0 Linux Kernel
  Release "
description: "In this blog we talk about Linaro's contributions to the 6.0 Linux
  Kernel Release. Read more here! "
date: 2022-10-06 03:51:13 +01:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - linux kernel
  - "6.0"
  - open source
  - Arm Soc
category: blog
author: linaro
---
The 6.0 Linux kernel was released at the beginning of October and saw Linaro featured yet again in the top five for most active employers (according to LWN’s monthly development stats).

{% include image.html path="/assets/images/content/6.0-most-active-employers.png" alt="List of most active employers in the 6.0 Linux Kernel Release" %}

We asked the Linaro Engineers who featured top in the lists for most active developers and for test and review credits to talk about the work they did which landed them in the lists. 

{% include image.html path="/assets/images/content/6.0-most-active-developers.png" alt="List of most active developers in the 6.0 Linux Kernel Release" %}

## Krzysztof Kozlowski - Improvements to Devicetree bindings

Krzysztof was working mostly on improvements in Devicetree bindings and DTS for several platforms. Most of the efforts focused on Qualcomm SoCs, but many cleanups also hit other ARM and ARM64 platforms. Krzysztof also upstreamed the Qualcomm SoC bandwidth monitoring driver (bwmon). bwmon sits between various subsystems like CPU, GPU, Last Level caches and memory subsystems. The bwmon can be configured to monitor the data throughput between memory and other subsystems. The throughput is used to request appropriate performance (and power) state.

With 155 review tags (and 136 acks), Krzysztof was also the fourth most active reviewer. The majority of these reviews were for Devicetree bindings.

## Dmitry Baryshkov - Rework of the Qualcomm QMP PHY driver

Dmitry’s main contribution during this cycle was a rework of the Qualcomm QMP PHY driver. This driver supports most high-speed transceivers on recent Qualcomm platforms: UFS, USB 3, PCIe, DisplayPort. Through the development course this driver has evolved into complex and convoluted code, containing many device and type specific hooks, which made adding support for new platforms or features close to impossible. Dmitry has split this driver into smaller pieces, cleaned up type specific code and reworked platform-specific defines. This work opens a gate to fixing several issues which were hard to spot during the previous development cycles, and adding support for newer platforms.

The next major working item for Dmitry was the driver for Qualcomm Display Subsystem (MSM DRM). While this cycle did not bring any big improvements, Dmitry continued working on cleaning up the driver, improving support for older and current Qualcomm platforms.

The rest of Dmitry’s work in this development cycle was dedicated to small issues with Qualcomm platforms, like fixing PCIe MSI support, improving MSM8996 platform or adding support for Inforce IFC6560 single-board computer.

## Arnd Bergmann - Revisited the state of the traditional “board file” support on 32-bit machines

As part of Arnd’s SoC Maintainer role, he revisited the state of the traditional “board file” support on 32-bit machines. While all 2288 machines that were added in the past ten years have been based around device tree based probing, there are still around 200 32-bit arm boards left that use ATAGS based board files. Most of these never got converted to devicetree because there are no known users. After a survey started by Arnd, the 28 board files that most likely are still used were identified, and the rest were marked as unused in the kernel’s configuration system in linux-6.0, with the plan to remove them in linux-6.2 if no other users are found until then.

Arnd also worked on finishing the cleanup of the pci_mmap_resource_range() in-kernel interface across all CPU architectures, on eliminating the virt_to_bus() interface that was deprecated over 20 years ago, and on removing the arm32 “dmabounce” code that blocked the arm32 DMA mapping code from using the same infrastructure as all other architectures.

The SoC tree contained a total of over 1000 patches in the 6.0 release that Arnd merged from downstream maintainers and [forwarded to Linus Torvalds](https://lore.kernel.org/linux-arm-kernel/20220802140200.3987874-1-arnd@kernel.org/t/#u). This includes support for two new SoC families: Nuvoton NPCM8XX and Sunplus SP7021.

## Viresh Kumar - Redesigned the OPP core’s platform specific configuration interface

As part of Viresh's OPP Maintainer role, he redesigned the OPP core's, platform specific, configuration interface in order to provide a simpler interface for platforms requiring multiple configurations. Previously the platforms had to call a resource specific helper, once for each configuration. With the recent changes, a single call is enough to take care of all configurations. This work was instrumental in providing support for multiple clocks per device in the OPP core, which is currently required for Qualcomm SoCs. Viresh also worked on patches to provide the multiple clock support along with Krzysztof Kozlowski.

{% include image.html path="/assets/images/content/6.0-test-and-review-credits.png" alt="6.0 test and review credits" %}

## Manivannan Sadhasivam - Reviewed and tested PCIe patches

Manivannan helped review and test the PCIe patches improving the Synopsys Designware (DWC) PCIe controller driver. The patches also served as preparation for adding the Embedded DMA (eDMA) support in the DWC PCIe controller driver for offloading the PCIe read/write operations to the host memory from endpoint device.

## Overall Testing Statistics

Linaro consistently ranks in the top ten companies when it comes to reviews, testing and reporting of regressions. We asked Naresh Kamboju - Linux Kernel Validation Engineer at Linaro - to share some statistics on our contributions.

### Reviewed by - Linaro in 6th place

Around 81 companies contributed their works to this kernel release v6.0 and [Linaro secured 6th position](https://remword.com/kps_result/5.20_review.html) in “Reviewed-by” of this kernel release by committing 571 Reviewed-by for this kernel release which is around 25% improvement for the previous release.

{% include image.html path="/assets/images/content/reviewed-by-stats-6.0-kernel-release.png" alt="reviewed by stats 6.0 kernel release" %}

### Tested by - Linaro in 7th place

Around 55 companies contribute their works to this kernel release v6.0 and [Linaro secured 7th position](https://remword.com/kps_result/5.20_test.html) in “Tested-by” of this kernel release by committing 75 Tested-by for this kernel release which is around 300% improvement for the previous release.

{% include image.html path="/assets/images/content/tested-by-stats-6.0-kernel-release.png" alt="tested by stats 6.0 kernel release" %}

## Conclusion

Through feature enablement, testing and maintenance, Linaro engineers continue to play a crucial role in advancing the Arm software ecosystem. To find out more about Linaro’s role in the Linux kernel, check out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview).