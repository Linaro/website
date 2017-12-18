---
author: arnd.bergmann
categories:
- blog
comments: true
date: 2014-12-23 10:00:32
description: An overview of what was merged into version 3.19 of the Linux kernel
  through the arm-soc tree
layout: post
link: /blog/core-dump/arm-soc-contents-merged-3-19/
slug: arm-soc-contents-merged-3-19
tags:
- Core Dump
- '3.19'
- arm
- arm-soc
- arm64
- kernel
- Linux
title: arm-soc contents merged into 3.19
wordpress_id: 7731
---

# Introduction

Every kernel release has a two week merge window following the release of the previous kernel during which all new features are merged, followed by several weeks of stabilization period during which only bug fixes are applied.

The merge window for the 3.19 kernel is coming to an end, which gives me as one of the arm-soc maintainers the chance to talk a bit more about the work that has been going into the release from our end. We have sent a total of eleven pull requests that were included in 3.19, each with a separate topic spreading across the various SoC families. Each pull request is one email sent to the linux-kernel and linux-arm-kernel mailing lists, and is associated with signed tag on [arm-soc.git](https://git.kernel.org/cgit/linux/kernel/git/arm/arm-soc.git/). While the descriptions are all publicly accessible through the mailing list archives or the git history, I hope to make it easier to find by reposting them here together with all the relevant links . I'm also including a list of related trees that have been merged already, in particular the arm and arm64 architecture trees.

For a more global view of what has been going on outside of ARM, please see the excellent articles on Linux Weekly News:
[The 3.19 merge window opens](http://lwn.net/Articles/625146/), [3.19 Merge window part 2](http://lwn.net/Articles/626150/), and [The end of the 3.19 merge window](http://lwn.net/Articles/627202/).


# First set of pull requests


From the [introductory mail](https://lkml.org/lkml/2014/12/9/573):

This is the 3.19 set of branches for ARM SoC related changes. As usual, about half the additions are for device tree files, both counting the number of patches and number of lines. The other changes are all dwarfed by the removal of the remaining legacy machine support in the Atmel at91 platform, now that this platform has sufficient DT support.

Aside from this one-time peak for at91, the most active platforms remain shmobile, omap, sunxi and exynos.

We are also adding a record number of twelve new arm32 SoC types and two arm64 SoC types in this merge window, with at least four more that almost made it in but were a little late.

This is also the first time we do not have 'boards' branch that tracks changes to board specific files any more: We now support 527 individual machine types with device tree and have 258 old-style board files, but the latter are rarely updated these days.

Total number of changesets (including merges): 1120
Total number of merge changesets: 147
Total number of contributors: 170

Overall diffstat:
867 files changed, 37747 insertions(+), 36520 deletions(-)

Dirstat:

```bash
    $ git diff --dirstat=0.2 v3.18..for-next
    0.4% Documentation/devicetree/bindings/arm/
    0.5% Documentation/devicetree/bindings/
    31.7% arch/arm/boot/dts/
    1.4% arch/arm/configs/
    0.2% arch/arm/include/
    0.8% arch/arm/kernel/
    30.4% arch/arm/mach-at91/
    0.5% arch/arm/mach-bcm/
    0.4% arch/arm/mach-davinci/
    3.9% arch/arm/mach-exynos/
    0.6% arch/arm/mach-imx/
    0.6% arch/arm/mach-integrator/
    1.1% arch/arm/mach-mvebu/
    5.0% arch/arm/mach-omap2/
    0.3% arch/arm/mach-pxa/
    0.2% arch/arm/mach-rockchip/
    2.9% arch/arm/mach-shmobile/
    1.0% arch/arm/mach-vexpress/
    0.2% arch/arm/mm/
    1.9% arch/arm/
    0.3% arch/arm64/boot/dts/amd/
    0.5% arch/arm64/boot/dts/arm/
    1.3% drivers/bus/
    0.3% drivers/clk/
    0.3% drivers/clocksource/
    2.5% drivers/dma/
    2.5% drivers/iommu/
    2.8% drivers/memory/tegra/
    1.1% drivers/memory/
    0.3% drivers/reset/sti/
    0.2% drivers/rtc/
    0.2% drivers/soc/versatile/
    0.6% drivers/
    0.4% include/dt-bindings/
    0.6% include/linux/
```

Top 20 contributors by patch count (no merges):

```bash

    $ git log --format=%an --no-merges v3.18..for-next  | sort | uniq -c  |sort -nr | head -n 20
    56 Geert Uytterhoeven
    48 Maxime Ripard
    31 Tero Kristo
    29 Nicolas Ferre
    28 Chen-Yu Tsai
    26 Linus Walleij
    24 Thomas Petazzoni
    24 Kuninori Morimoto
    24 Hans de Goede
    22 Peter Griffin
    20 Tony Lindgren
    20 Laurent Pinchart
    19 Sebastian Hesselbarth
    18 Roger Quadros
    15 Arnaud Ebalard
    14 Simon Horman
    13 Arnd Bergmann
    12 Thierry Reding
    12 Dmitry Lifshitz
    11 Zhangfei Gao
```

## ARM: SoC non-critical bug fixes for 3.19


Commit [0a9e0acddb2f](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=0a9e0acddb2f0975e7c9a379171c82e158e93a9a)

These are bug fixes for harmless problems that were not important enough to get fixed in 3.19. This contains updates to the MAINTAINERS file, in particular:




  * Ben Dooks stepped down as Samsung co-maintainer (thanks Ben for   long years of maintaining this). Kukjin Kim, who has been doing the work de-facto by himself recently is now the only maintainer.


  * Liviu, Sudeep and Lorenzo from ARM now officially maintain the Versatile Express platform, which was orphaned (thanks for stepping up)


  * Gregory Fong and Florian Fainelli help out on the Broadcom BCM7XXX platform


  * Ray Jui and Scott Branden are the future maintainers for the newly merged Broadcom Cygnus platform. Welcome!


In terms of actual fixes, we have the usual set of OMAP bug fixes, which Tony Lindgren separates out well from the other OMAP changes, one really ep93xx regression fix against 3.11 that didn't make it for 3.18, a few GIC changes from Marc Zyngier as a preparation for later rework (the current code is wrong in a harmless way), on Tegra regression and one samsung spelling fix.


## ARM: SoC cleanup on mach-at91 for 3.19


Commit [0563fdc0d9fb](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=0563fdc0d9fbd4d8896956d4aeb01fad09146acc)

On Atmel AT91, the conversion to device tree is now considered complete, and all machines that were not already converted in 3.18 are assumed to be unused and dropped by the maintainer.

All remaining board files that were written in C are dropped, and the ancient at91x40 sub-platform (based on an MMU-less ARM7) is removed altogether.  Cleaning up the last pieces was great fun, so I took the time to do some of the coding myself and removed several hundred code lines that ended up unused after the board files were done.

There are still a couple of AT91 specific device drivers that are not converted to DT (CF, USB-OTG) and currently not working, and the platform itself is not "multiplatform"-enabled, but both issues are going to be taken care of in the 3.20 cycle.

This is split out from the other cleanups purely based on the size of the branch.


## ARM: SoC cleanups for 3.19


Commit [6c9e92476bc9](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=6c9e92476bc924ede6d6d2f0bfed2c06ae148d29)

The remaining cleanups for 3.19 are to a large part result of devicetree conversion nearing completion on two other platforms besides AT91:




  * Like AT91, Renesas shmobile is in the process to migrate to DT and multiplatform, but using a different approach of doing it one  SoC at a time. For 3.19, the r8a7791 platform and associated "Koelsch" board are considered complete and we remove the non-DT  non-multiplatform support for this.


  * The ARM Versatile Express has supported DT and multiplatform  for a long time, but we have still kept the legacy board files around, because not all drivers were fully working before. We have finally taken the last step to remove the board files.


Other changes in this branch are preparation for the later branches or just unrelated to the more interesting changes:


  * The dts files for arm64 get moved into per-vendor directories for a clearer structure.


  * Some dead code removal (zynq, exynos, davinci, imx)


  * Using pr_*() macros more consistently instead of printk(KERN_*) in some platform code.




## ARM: SoC platform changes for 3.19


Commit [6cd94d5e57ab9](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=6cd94d5e57ab97ddd672b707ab4bb639672c1727)

New and updated SoC support, notable changes include:




  * bcm: brcmstb SMP support


  * bcm: initial iproc/cygnus support


  * exynos: Exynos4415 SoC support


  * exynos: PMU and suspend support for Exynos5420


  * exynos: PMU support for Exynos3250


  * exynos: pm related maintenance


  * imx: new LS1021A SoC support


  * imx: vybrid 610 global timer support


  * integrator: convert to using multiplatform configuration


  * mediatek: earlyprintk support for mt8127/mt8135


  * meson: meson8 soc and l2 cache controller support


  * mvebu: Armada 38x CPU hotplug support


  * mvebu: drop support for prerelease Armada 375 Z1 stepping


  * mvebu: extended suspend support, now works on Armada 370/XP


  * omap: hwmod related maintenance


  * omap: prcm cleanup


  * pxa: initial pxa27x DT handling


  * rockchip: SMP support for rk3288


  * rockchip: add cpu frequency scaling support


  * shmobile: r8a7740 power domain support


  * shmobile: various small restart, timer, pci apmu changes


  * sunxi: Allwinner A80 (sun9i) earlyprintk support


  * ux500: power domain support


Overall, a significant chunk of changes, coming mostly from the usual suspects: omap, shmobile, samsung and mvebu, all of which already contain a lot of platform specific code in arch/arm.


## ARM: SoC driver updates for 3.19


Commit [3a647c1d7ab0](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=3a647c1d7ab08145cee4b650f5e797d168846c51)

These are changes for drivers that are intimately tied to some SoC and for some reason could not get merged through the respective subsystem maintainer tree.

The largest single change here this time around is the Tegra iommu/memory controller driver, which gets updated to the new iommu DT binding. More drivers like this are likely to follow for the following merge window, but we should be able to do those through the iommu maintainer.

Other notable changes are:




  * reset controller drivers from the reset maintainer (socfpga, sti, berlin)


  * fixes for the keystone navigator driver merged last time


  * at91 rtc driver changes related to the at91 cleanups


  * ARM perf driver changes from Will Deacon


  * updates for the brcmstb_gisb driver




## ARM: SoC DT updates for 3.19


Commit [6da314122ddc](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=6da314122ddc11936c6f054753bbb956a499d020)

The DT branch adds a lot of new stuff for additional SoC and board support. The branch is the largest one and contains 513 out of the total 972 non-merge arm-soc changesets for 3.19.

Most of the changes are about enabling additional on-chip devices for existing machines, but there are also an unusual number of new SoC types being added this time:




  * AMLogic Meson8


  * ARM Realview in DT mode


  * Allwinner A80


  * Broadcom BCM47081


  * Broadcom Cygnus


  * Freescale LS1021A


  * Freescale Vybrid 500 series


  * Mediatek MT6592, MT8127, MT8135


  * STMicroelectronics STiH410


  * Samsung Exynos4415


The level of support for the above differs widely, some are just stubs with nothing more than CPU, memory and a UART, but others are fairly complete. As usual, these get extended over time.

There are also many new boards getting added, this is the list of model strings that are showing up in new dts files:


  * ARM RealView PB1176


  * Altera SOCFPGA Arria 10


  * Asus RT-N18U (BCM47081)


  * Buffalo WZR-1750DHP (BCM4708)Buffalo WZR-600DHP2 (BCM47081)


  * Cygnus Enterprise Phone (BCM911360_ENTPHN)


  * D-Link DIR-665


  * Google Spring


  * IGEP COM MODULE Rev. G (TI OMAP AM/DM37x)


  * IGEPv2 Rev. F (TI OMAP AM/DM37x)


  * LS1021A QDS Board


  * LS1021A TWR Board


  * LeMaker Banana Pi


  * MarsBoard RK3066


  * MediaTek MT8127 Moose Board


  * MediaTek MT8135 evaluation board


  * Mele M3


  * Merrii A80 Optimus Board


  * Netgear R6300 V2 (BCM4708)


  * Nomadik STN8815NHK


  * NovaTech OrionLXm


  * Olimex A20-OLinuXino-LIME2


  * Raspberry Pi Model B+


  * STiH410 B2120


  * Samsung Monk board


  * Samsung Rinato board


  * Synology DS213j


  * Synology DS414


  * TBS2910 Matrix ARM mini PC


  * TI AM5728 BeagleBoard-X15


  * Toradex Colibri VF50 on Colibri Evaluation Board


  * Zynq ZYBO Development Board


Other notable changes include:


  * exynos: cleanup of existing dts files


  * mvebu: improved pinctrl support for Armada 370/XP


  * nomadik: restructuring dts files


  * omap: added CAN bus support


  * shmobile: added clock support for some SoCs


  * shmobile: added sound support for some SoCs


  * sirf: reset controller support


  * sunxi: continuing the relicensing under dual GPL/MIT


  * sunxi: lots of new on-chip device support


  * sunxi: working simplefb support (long awaited)


  * various: provide stdout-path property for earlycon

## ARM: SoC/OMAP GPMC driver cleanup and move for 3.19


Commit [e78c54b4788](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=fe78c54b4788b69bb2a8f157b524c933ea0c66d5)

The GPMC driver has traditionally been considered a part of the OMAP platform code and tightly interweaved with some of the boards.

With this cleanup, it has finally come to the point where it makes sense to move it out of arch/arm into drivers/memory, where we already have other drivers for similar hardware. The cleanups are still ongoing, with the goal of eventually having a standalone driver
that does not require an interface to architecture code.

This is a separate branch because of dependencies on multiple other branches, and to keep the drivers changes separate from the normal cleanups.

## ARM: SoC defconfig changes for 3.19

Commit [151cd97630f8](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=151cd97630f87451cab412e40750d0e5f7581c98)

This is a collection of the various changes to defconfig files, most importantly enabling some additional platforms in the multi_v7_defconfig file. These are split out into a separate branch to avoid most of the merge conflicts in the defconfig files.

This also touches 12 other defconfig files for shmobile, at91, hisilicon, keystone, mvebu, omap, and tegra.

## ARM64: SoC changes for 3.19

Commit [ed8efd2de754](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=ed8efd2de75479a175bd21df073d9e97df65a820)

This adds support for two new ARM64 platforms:

  * ARM Juno
  * AMD Seattle
  
We had submissions for a number of additional platforms from Samsung, Freescale and Spreadtrum but are still working out the best process for getting these merged.

# Second set of pull requests

## ARM: SoC DT updates part 2

Commit [205dc205ed3b](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=205dc205ed3ba748bab9770016bbbffb68558146)

This is a follow-up to the early ARM SoC DT changes, with additional content that has external dependencies:

  * The Tegra IOMMU DT support depends on changes from the iommu tree, plus the contents of the arm-soc drivers branch
  * The MVEBU PHY support depends on changes from the phy tree The AT91 DT support depends on changes from the RTC and DMA-slave trees

All of these changes just enable additional devices for existing platforms

## ARM: SoC/iommu configuration for 3.19

Commit [6f51ee709e4c](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=6f51ee709e4c6b56f2c2a071da2d056a109b9d26)

The iommu-config branch contains work from Will Deacon, quoting his description:

> "This series adds automatic IOMMU and DMA-mapping configuration for OF-based DMA masters described using the generic IOMMU devicetree bindings. Although there is plenty of future work around
splitting up iommu_ops, adding default IOMMU domains and sorting out automatic IOMMU group creation for the platform_bus, this is already useful enough for people to port over their IOMMU drivers and start using the new probing infrastructure (indeed, Marek has patches queued for the Exynos IOMMU)".

The branch touches core ARM and IOMMU driver files, and the respective maintainers (Russell King and Joerg Roedel) agreed to have the contents merged through the arm-soc tree. The final version was ready just before the merge window, so we ended up delaying it a bit longer than the rest, but we don't expect to see regressions because this is just additional infrastructure that will get used in drivers starting in 3.20 but is unused so far.

# Other ARM related trees


A number of subsystem maintainers are merging code device driver code that is relevant to ARM platforms. This is a selection of relevant upstream commits for branches that are already merged into what will become Linux-3.19-rc1.


Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=f2fb38049c72">f2fb38049c72</a> Pull MMC updates from Ulf Hansson
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=3a7dbed7f23c">3a7dbed7f23c</a> Pull MFD updates from Lee Jones
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=177808cd28ac">177808cd28ac</a> Pull hwmon updates from Guenter Roeck
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=de740386447f">de740386447f</a> Pull regmap updates from Mark Brown
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=f94784bdb114">f94784bdb114</a> Pull regulator updates from Mark Brown
Commit <strong><a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=b64bb1d75816">b64bb1d75816</a></strong> Pull arm64 updates from Will Deacon
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=a0e4467726cd">a0e4467726cd</a> Pull asm-generic asm/io.h rewrite from Arnd Bergmann
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=a157508c9790">a157508c9790</a> Pull timer core updates from Thomas Gleixner
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=ecb50f0afd35">ecb50f0afd35</a> Pull irq core updates from Thomas Gleixner
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=9e66645d72d3">9e66645d72d3</a> Pull irq domain updates from Thomas Gleixner
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=4b0a268eecca">4b0a268eecca</a> Pull f2fs updates from Jaegeuk Kim
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=c75059c46293">c75059c46293</a> Pull PCI changes from Bjorn Helgaas
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=92a578b064d0">92a578b064d0</a> Pull ACPI and power management updates from Rafael Wysocki
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=c1b30e4d9466">c1b30e4d9466</a> Pull pin control changes from Linus Walleij
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=e28870f9b3e9">e28870f9b3e9</a> Pull backlight updates from Lee Jones
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=2183a58803c2">2183a58803c2</a> Pull media updates from Mauro Carvalho Chehab
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=b859e7d13bcc">b859e7d13bcc</a> Pull spi updates from Mark Brown
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=14ba9a2e4bac">14ba9a2e4bac</a> Pull mailbox framework updates from Jassi Brar
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=413fd0e3fbf5">413fd0e3fbf5</a> Pull fbdev updates from Tomi Valkeinen
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=7ef58b32f571">7ef58b32f571</a> Pull devicetree changes from Grant Likely
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=e5edba464c11">e5edba464c11</a> Pull ASoC Updates from Mark Brown (through alsa tree)
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=87c779baabff">87c779baabff</a> Pull dmaengine updates from Vinod Koul
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=8d1406675559">8d1406675559</a> Pull IOMMU updates from Joerg Roedel
Commit <strong><a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=26ceb127f7bc">26ceb127f7bc</a></strong> Pull ARM updates from Russell King
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=96895199c864">96895199c864</a> Pull i2c updates from Wolfram Sang
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=980f3c344ff1">980f3c344ff1</a> Pull take two of the GPIO updates
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=988adfdffdd4">988adfdffdd4</a> Pull drm updates from Dave Airlie
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=27cb8823e26c">27cb8823e26c</a> Pull rpmsg update from Ohad Ben-Cohen
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=60d7ef3fd34d">60d7ef3fd34d</a> Pull irq domain ARM updates from Thomas Gleixner
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=7051d8e63086">7051d8e63086</a> Pull power supply updates from Sebastian Reichel
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=2dbfca5a1819">2dbfca5a1819</a> Pull LED subsystem update from Bryan Wu
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=36c0a48fe5fa">36c0a48fe5fa</a> Pull arm64 fixes from Will Deacon
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=d6666be6f0c4">d6666be6f0c4</a> Pull MTD updates from Brian Norris
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=0b4954c46943">0b4954c46943</a> Pull pwm updates from Thierry Reding
Commit <a href="https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=bfc7249cc293">bfc7249cc293</a> Pull clk framework updates from Mike Turquette


While most of these trees cover multiple CPU architectures, it is interesting to note that a lot of the work going into them is driven by the needs of ARM SoCs or is specific to a particular SoC family. Also, over one third of the subsystems in this list are maintained or co-maintained by someone in Linaro. In a future post, I am going to talk about the significance of having subsystem maintainers in Linaro and how we work as maintainers.