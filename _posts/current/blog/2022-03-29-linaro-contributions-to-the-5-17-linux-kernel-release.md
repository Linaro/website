---
layout: post
title: Linaro contributions to the 5.17 Linux Kernel Release
description: In this blog we talk about Linaro's contributions to the 5.17 Linux
  Kernel Release.
date: 2022-03-12 09:04:13 +00:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - 5.17 linux kernel release
  - Open Source
category: blog
author: linaro
---
# Introduction

Last week the 5.17 Linux Kernel release took place. As always, Linaro featured in the top ten companies in terms of changesets and lines changed. 

{% include image.html path="/assets/images/content/5.17-most-active-employers.png" alt="5.17 Most Active Employers" %}

So how did we end up in the top ten? We reached out to our Kernel Engineers to find out more about the work they did which landed us in the top ten. We have also taken a look at our testing contributions which help ensure the quality of the Linux kernel. 

# Kernel Contributions

## Linus Walleij

In v5.17 Linus developed structures for operating system-controlled battery charging using extended CC/CV algorithms, made the thermistor HWMON (Hardware Monitoring) driver generic and reusable by e.g. ACPI systems, fixed some problems in the Zinitix touchscreen driver, added reset line bindings to a few Arm PrimeCells and continued the cleanup work for the Intel XScale StrongARM IXP4xx platforms which will be concluded in the v5.18 kernel.

## Dmitry Baryshkov

In this release, Dmitry’s work concentrated on cleaning up the Qualcomm Display driver (MSM DRM). A significant number of patches were necessary to open the gates for the virtualized DRM planes ([LVC21F-108 Advanced KMS: virtualized planes as a way to hide hardware implementation details](https://resources.linaro.org/ru/resource/KdJRxQgh8NG3J4ssja9qHe)), which are expected to land in the 5.19 release. Other MSM DRM patches included the removal of old unsupported eDP (Embedded DisplayPort) code and other minor cleanups. Another set of patches added power domain code and PCIe PHY support for the Qualcomm Snapdragon 8 Gen 1 Mobile Platform (SM8450). Full support for the PCIe bus on this platform is expected in the 5.18 kernel. The final set of changes were rather minor fixes for the older Qualcomm platforms (APQ8096, MSM8916/8994/8996).

## Vinod Koul

Most of the work done in the kernel 5.17 release involved adding support for the Snapdragon 8 Gen 1 Mobile Platform (SM8450) platform, which is the latest Qualcomm SoC, announced in December 2021. These patches add clock, pinctrl, regulator, interconnect, IOMMU, UFS and USB driver support along with relevant device tree updates and support for the Qualcomm SM8450 Reference hardware platform (QRD). Vinod’s work on the Snapdragon 8 Gen 1 Mobile platform also landed him in the list of most active developers to the 5.17 kernel release in terms of changed lines. 

{% include image.html path="/assets/images/content/5.17-most-active-developers.png" alt="5.17 Most Active Developers" %}

## Sam Protsenko

A portion of Sam’s patches were applied for WinLink E850-96 board support, as well as for Samsung Exynos850 SoC. Now there is minimal viable support for that board merged in the mainline kernel, which is enough to boot the E850-96 up to the serial console, using some rootfs as a RAM disk.

Basic platform features like eMMC, watchdog, RTC, I2C, HS I2C, serial, etc, are already functional with this patch set. Some new drivers were added, like Exynos850 clock driver, USIv2 driver, etc. The work of course also includes some generic fixes and related additions to existing Exynos drivers and Device Tree bindings.

## Arnd Bergmann

Arnd reworked the architecture specific code backing the futex() system call to be more general, avoiding runtime detection of the feature that sometimes caused problems on 32-bit Arm systems.

In the dmaengine subsystem, old code that used an incompatible method to describe the relation between a DMA engine hardware block and its client device was cleaned up.

## Bjorn Andersson

In addition to a few bug fixes, Bjorn's contributions to v5.17 consisted of a new driver for Embedded DisplayPort PHY found in e.g. the Qualcomm 8cx platform and a PWM-chip implementation in the TI SN65DIS86 DSI/eDP bridge driver to be used for backlight control. Bjorn also picked up the maintainership of Qualcomm clock drivers.

# Testing Contributions

Linaro consistently ranks in the top ten companies when it comes to reviews, testing and reporting of regressions. We asked Linux Kernel Validation Engineer Naresh Kamboju to share some statistics on our contributions.

## Reviewed-by

Around 83 companies contributed their works to this kernel release and
Linaro secured [8th position in “Reviewed-by”](https://remword.com/kps_result/5.17_review.html). Linaro committed 269 reviewed-by, a 11% improvement from the previous release. 

{% include image.html path="/assets/images/content/reviewed-by-stats-5.17-kernel-release.png" alt="Reviewed by stats for 5.17 kernel release" %}

## Tested-by

Around 57 companies chose to contribute bytesting patches that went into this kernel release. Linaro secured [7th position in “Tested-by](https://remword.com/kps_result/5.17_test.html)”, having tested 34 patches - an 18% improvement from the previous release.

{% include image.html path="/assets/images/content/tested-by-stats-5.17-kernel-release.png" alt="Tested by stats for 5.17 kernel release" %}

## Reported-by

Around 62 companies reported regressions in this kernel release with Linaro securing 11th position \[3].  Linaro reported fewer regressions in the 5.17 release than in the 5.16 release and is continuously working to improve its capabilities in reporting early build and test regressions through [Linux Kernel Functional Testing (LKFT)](https://lkft.linaro.org/) - a Linaro project. 

{% include image.html path="/assets/images/content/reported-by-stats-5.17-kernel-release.png" alt="Reported by stats for 5.17 kernel release" %}

# Conclusion

As the statistics in this blog show, Linaro’s engineers continue to make an impact in advancing the Arm software ecosystem through feature enablement, testing and maintenance. To find out more about Linaro’s role in the Linux kernel, check out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview).