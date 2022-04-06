---
layout: post
title: Linaro Developers make an impact in Linux Kernel 5.13 release
description: "In this blog, we asked Linaro's kernel engineers who were featured
  in the top twenty to talk about their contributions to the 5.13 kernel
  release. "
date: 2021-07-01 02:23:22
image: /assets/images/content/services_board.jpg
tags:
  - linux kernel
  - 5.13 kernel
  - open source
  - Linaro
category: blog
author: linaro
---
The 5.13 kernel release was published last week and featured Linaro developers yet again in the top twenty contributors to the Linux kernel (as highlighted in [LWN.nets development statistics](https://lwn.net/Articles/860989/)) - both by changesets and changed lines.

{% include image.html path="/assets/images/content/5.13-kernel-stats.png" alt="Most active 5.13 kernel developers" %}

In this blog we asked the Linaro developers featured to talk about the contributions they made to the Linux kernel 5.13 release.

### **Lee Jones - Fixing Compiler and Doc build warnings throughout the tree**

For the past four out of five releases, Lee Jones was the top contributor for changesets. Fixing compiler and doc build warnings throughout the tree enables maintainers and testers to increase the warning level when test building their associated subsystems, leading to more issues being caught earlier on during the development process. When this work started, there were more than 20k level-1 (W=1) issues residing in the kernel. Now there are fewer than 2.5k. Lee will continue this work until there are as close to 0 as feasibly possible.

### **Arnd Bergmann - SoC tree work**

Arnd is one of the maintainers responsible for merging all platform specific patches for Arm based machines into the mainline kernel, and [his pull requests](https://lore.kernel.org/linux-arm-kernel/CAK8P3a2RjRSjTcmwVf3VHy2CUB2HBj5AaJTx=1NSYuA_Qy4E-w@mail.gmail.com/T/#u) give a good overview of what is going on in this area.

During the 5.13 merge window, we saw 863 patches from 195 developers, most of these are about changes to the device tree files of existing platforms that get improved by enabling more devices, cleanups and bug fixes.

Support for 35 distinct new machines, and six new SoCs is added, which is slightly higher than normal. While in most merge releases there is still a similar amount of work going into 32-bit and 64-bit platforms, this time there is a strong bias towards 64-bit, something that is expected to continue over time, while Cortex-A7 and older 32-bit platforms will remain used on the low end. Three of the new SoC platforms stand out in particular, though in very different ways:

Initial support for [Apple M1 platform](https://github.com/AsahiLinux/docs/wiki/SW%3ALinux) was added by Hector Martin through the SoC, giving hope for much more capable developer workstations to run Arm Linux in the future, once this support becomes complete enough to be included in distributions. The current state is fairly minimal, but a lot of the harder problems have been resolved and the remaining work is mainly about adding all the device drivers.

Another noteworthy platform is at the opposite end of the spectrum, the STMicroelectronics STM32H750 microcontroller based on a Cortex-M7 with no MMU, along with support for a developer board. While most new development has moved away from Linux on MMU-less hardware, this is a reminder that machines like this still exist and can be put into productive work.

Finally, Nuvoton WPCM450 is an older baseboard management controller that got merged through the OpenBMC project. While this is an older SoC based on the 20 year old ARM926 core, it remains popular enough in modern server systems to have developers interested in needing new software for it.

### **Dmitry Baryshkov  - Refactoring DSI PHY code**

Dmitry is ranked fifth in “the lines changed” column thanks to refactoring one of the pieces of the Qualcomm Display driver (MSM DRM), which for a long time has been asking for tender love and care — the DSI (Display Serial Interface) PHY code. The DSI PHY is a hardware block found in most of the Qualcomm Snapdragon SoCs. It is responsible for physical communication between the SoC and MIPI (Mobile Industry Processor Interface Alliance) DSI display panels or bridges. Dmitry worked on cleaning the code responsible for setting up the MIPI DSI interfaces, managing DSI PHY PLLs and clocks, and removing duplicated code. While this contribution does not bring new features on its own, it provides a good background for future contributions both from other kernel developers and Dmitry. It won’t take long for new features to arrive: DSI PHY register snapshotting is expected to be merged in 5.14 while support for MIPI C-PHY mode (latest MIPI physical interface specification) and fixes for MIPI DSI continuous clock are both targeting the 5.15 Linux kernel.

Another large contribution from Dmitry is the cleanup of Qualcomm clock drivers for the last SoC generations (sc7180, sc7280, sdm845, sm8180, sm8280 and sm8350), making the code more robust and easy to understand and maintain.

### **Robert Foss  - Implementing Camera ISP support for Qualcomm Robotics RB3 Development kit / SDM845**

Robert’s contributions can be divided into two separate parts; CAMSS, the Qualcomm Camera ISP driver, and platform enablement for the SM8350 Qualcomm SoC.

The CAMSS driver contributions targeted adding support for the current generation of Camera ISPs used by Qualcomm SoCs. As well as adding support for this generation of the ISP design, the Qualcomm Robotics RB3 / SDM845 SoC had the CAMSS driver enabled, which will allow for basic camera sensor input.

The SM8350 SoC enablement revolved around enabling peripheral IP blocks such as Thermal Sensors and the Pseudorandom Generator.

For more information on the work Robert has done on upstreaming camera support for Qualcomm platforms, [check out this blog](https://www.linaro.org/blog/upstream-camera-support-for-qualcomm-platforms/).

In addition to several Linaro engineers being featured, Linaro as an employer was also listed sixth for changesets and fourth for changed lines. 

{% include image.html path="/assets/images/content/kernel-5.13-employees.png" alt="Most active 5.13 employers" %}

These stats showcase how Linaro continues to play an important role in maintaining and improving the Arm software ecosystem thanks to the hard work of its highly skilled kernel developers.

To find out more about the work Linaro does in the Linux Kernel check out our [Upstream Maintainership Project](https://linaro.atlassian.net/wiki/spaces/UM/overview) where we track all our contributions. Or [contact us](https://www.linaro.org/contact/) for more information!