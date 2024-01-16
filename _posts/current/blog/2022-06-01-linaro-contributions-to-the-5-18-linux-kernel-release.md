---
layout: post
title: Linaro contributions to the 5.18 Linux Kernel Release
description: "In this blog we talk about Linaro's contributions to the Linux
  kernel 5.18 release. "
date: 2022-06-01 10:22:01 +01:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - Kernel Release
  - Open Source
  - Upstream
category: blog
author: linaro
---
The 5.18 Linux Kernel release took place at the end of May. As always, Linaro featured in the top ten companies in terms of changesets and lines changed (based on statistics [pulled together here by LWN](https://lwn.net/Articles/895800/)).

{% include image.html path="/assets/images/content/linux-kernel-5.18-release-active-employers.png" alt="Most active linux kernel 5.18 employers" %}

We asked our Kernel Engineers to talk about their contributions which helped land Linaro in the top ten. 

## Linus Walleij

Linus Walleij featured in the top ten list for most active 5.18 developers in terms of changed lines. 
He has been working on finalizing the conversion of the SPI (Serial Peripheral Interface)  subsystem to use GPIO (General Purpose Input/Output) descriptors exclusively, prompted by the recent re-use of early 2000s Samsung SPI IP in the Tesla Full Self Driving (FSD) computer. The IXP4xx platform was stepwise moved to device tree and multiplatform support (finalized for v5.19). Linus contributions also involved several improvements to the battery charging code in the kernel, where the kernel needs to handle battery charging tasks normally handled by an autonomous ASIC, leading up to paying back technical debt left behind since the early days of device tree support in 2013.

{% include image.html path="/assets/images/content/linux-kernel-5.18-most-active-developers.png" alt="Most active linux kernel 5.18 developers" %}

## Krzysztof Kozlowski

Krzysztof Kozlowski was working on converting Devicetree bindings to DT schema format where he reached almost full coverage of the Samsung Exynos SoC bindings with the new format.  With that came a lot of fixes and corrections for DTS files (not only Samsung Exynos), mostly pointed out by the schema itself.  Krzysztof also squashed a few bugs in different drivers and the NFC stack, and improved the code quality of some other pieces. Beside patches, Krzysztof also performed many reviews as a co-maintainer of the Devicetree bindings.

## Arnd Bergmann

Arnd Bergmann contributed two important sets of cleanup patches: The set_fs()/get_fs() interfaces in the kernel are now [removed](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=16477cdfefdb494), completing [work started by Christoph Hellwig](https://lwn.net/Articles/832121/). These date back to linux-0.10 from 1997 and previously led to a class of security bugs when used incorrectly. The code was already eliminated from x86 and arm architectures but is now gone from all architectures. On the 32-bit Arm architecture, the final three platforms now use the generic interrupt entry code. This was a prerequisite for [a series by Ard Biesheuvel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/arch/arm/kernel?id=9c0e6a89b59) to enable the use of separate IRQ stacks across all Arm machines for improved reliability, as well as helping with the multiplatform conversion patches that are [now queued](https://lore.kernel.org/linux-arm-kernel/CAK8P3a3gqQbZG5gdh_cRmGx8B6XR8CGYcXN7wMu-YmCBwD1wGQ@mail.gmail.com/) for linux-5.19.

## Vinod Koul

Vinod Koul contributed towards the Qualcomm Snapdragon SM8450 SoC by adding support for HDK board, interconnects and  enabling driver configs. GPI DMA support in I2C driver was also added along with support for GPI DMA for Qualcomm Snapdragon SDM845. Wearing his maintainer hat there were subsystem changes for dmaengine and phy subsystems too.

## Shawn Guo

Shawn Guo mostly contributed a driver for the Qualcomm MSM Power Manager (MPM), which can be found on a few Snapdragon SoCs based on the Resource Power Manager (RPM) architecture like MSM8939, SDM660 and QCM2290. With this irqchip driver, it becomes possible to wake up these SoCs from VddMin low power state.

## Conclusion

The engineers featured in this blog were asked to contribute content based on the fact that they had either contributed a significant number of patches or reviewed patches in the 5.18 kernel release. This only goes to show how Linaro’s engineers continue to make an impact in advancing the Arm software ecosystem through feature enablement, testing and maintenance. You can find out more about Linaro’s role in the Linux kernel by checking out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview).