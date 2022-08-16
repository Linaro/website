---
layout: post
title: "Linaro featured top in 5.19 Linux Kernel Release - the first kernel to
  be released on Arm64 "
description: "In this blog we look at Linaro's contributions to the 5.19 Linux
  Kernel Release. "
date: 2022-08-16 09:48:30 +01:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux kernel release
  - "5.19"
  - Linux
  - Arm64
category: blog
author: linaro
---
The 5.19 kernel was released at the end of July and saw Linaro featured in the top three in terms of most active employers (according to [LWN's monthly development stats](https://lwn.net/Articles/902854/#:~:text=The%205.19%20kernel%20was%20released,Retbleed%20mitigations%2C%20on%20July%2031.)). 

{% include image.html path="/assets/images/content/5.19-most-active-employers.png" alt="List of most active employers in the 5.19 Linux Kernel Release" %}

While this is impressive given the size of Linaro, there is something even more exciting about this release which is worth celebrating. 

For the first time ever, Linus Torvalds [released a new kernel](https://lore.kernel.org/lkml/CAHk-=wgrz5BBk=rCz7W28Fj_o02s0Xi0OEQ3H1uQgOdFvHgx0w@mail.gmail.com/T/#u) on an Arm64 machine. For a long time many, including Linus himself, have felt developing on Arm just wasn’t an option - the hardware just wasn’t quite there. Until now. 

So why are we excited about this? Linaro was formed to consolidate the Arm code base back in 2010 which, at the time, was quite fragmented. Through important development and maintenance efforts on the building blocks which support Arm devices in the  kernel, Linaro has contributed to making this achievement possible.

It is fair to say that without all the work Linaro has done to enhance and improve the Arm software ecosystem as a whole, the Arm development platform would not be what it is today. 

# Linaro Statistics from the 5.19 Linux Kernel Release

Now back to the stats…  Quite a few of our Kernel Engineers were featured as top contributors to the 5.19 Linux Kernel release. We asked them to talk about the work they did  which helped place Linaro third in the list for the most active employers.  

{% include image.html path="/assets/images/content/5.19-kernel-stats.png" alt="List of most active developers in the 5.19 Linux Kernel Release" %}

## Krzysztof Kozlowski

Krzysztof converted several Devicetree bindings to DT schema and improved or fixed many others. Along with improvements in DTS files for Qualcomm and Samsung ARM/ARM64 platforms, this gave him 1st place in v5.19 active contributors by number of changesets. Krzysztof also worked on various small fixes around memory controllers, interconnects and a few other drivers.

A significant portion of Krzysztof’s time is now being spent reviewing Devicetree bindings, as the DT bindings maintainer. With 144 reviewed tags (and 110 Acked-by for smaller DT patches) this effort put him in fifth place among top reviewers of v5.19 kernel.

{% include image.html path="/assets/images/content/5.19-review-credits.png" alt="List of most active reviewers in the 5.19 Linux Kernel Release" %}

## Arnd Bergmann

Arnd completed the work to bring all Armv4T and Arm5 platforms into a single multiplatform kernel configuration, the same way that one can build a kernel for all Arm8, all Arm6 and Armv7, or all x86-64 machines. This concludes work that has been ongoing [since 2012](https://lore.kernel.org/linux-arm-kernel/1349135827-24790-13-git-send-email-olof@lixom.net/). While the newer platforms were already converted within a short period of time, and the last ARMv6 and ARMv7 based platforms were all done [in 2016](https://lore.kernel.org/linux-arm-kernel/1453338882-31300-4-git-send-email-olof@lixom.net/), the older platforms generally have fewer users and developers, so this took longer. The last platforms to get converted now are TI OMAP1, Intel/Marvell PXA, Intel IXP4xx, Intel IOP32x, Cirrus Logic EP93xx and Samsung S3C24xx. The only exclusions are the even older Intel StrongARM (ARMv4) based machines that still require a custom kernel build: 

[ARMv4T/v5 multiplatform support for v5.19, part 1](https://lore.kernel.org/linux-arm-kernel/CAK8P3a3gqQbZG5gdh_cRmGx8B6XR8CGYcXN7wMu-YmCBwD1wGQ@mail.gmail.com/)
[ARM: multiplatform changes, part 2](https://lore.kernel.org/linux-arm-kernel/CAK8P3a13uAiBJkqD9UMmnfFn3AAY2ZqQisVQdovRy5dKiyJaXQ@mail.gmail.com/)

This work already enabled a number of cleanups of the 32-bit Arm codebase and led to the next step, which is the deprecation of the majority of the last 196 machine definitions that have not yet been converted to device tree. A patch series to mark all machines with no known users as deprecated has been merged for linux-6.0 and the machines are planned to finally be removed in [early 2023](https://lore.kernel.org/linux-arm-kernel/CAK8P3a0ht1tG2nVzh1Shm0v8orQTa0VWOVkhvX9daF4yu6u8Sg@mail.gmail.com/). 

In addition, Arnd merged well over 1000 patches for modern Arm based platforms from other developers through [the SoC tree in linux-5.19](https://lore.kernel.org/linux-arm-kernel/CAK8P3a1K_t-a4=uKPbZ2kwa13bDhkNC9S8ZiyhF84SSXJYjT2w@mail.gmail.com/) and another set of changes in the asm-generic tree, which included the addition of the new loongarch64 architecture as well as the removal of the old Renesas H8300 architecture.

## Dmitry Baryshkov

Dmitry continued his work on maintaining the Qualcomm display drivers, by unifying common parts of the MDP5 and DPU code bases, removing the legacy eDP driver support, and improving the use of drm_bridges throughout the drivers. In addition to this, Dmitry's work on adding support for the PCIe root-complex  for Qualcomm Snapdragon 8 Gen 1 (e.g. SM8450) was accepted.

## Bjorn Andersson

Bjorn continued the upstreaming of support for the Qualcomm Snapdragon 8cx Gen3 compute platform, with contributions in the form of clock drivers, interconnect providers, power-domains and remoteproc support. His work on the Qualcomm Light Pulse Generator PWM and LED driver was at last accepted, after a very long development process. Progress was also made on the journey to get external display functional on Qualcomm platforms, through improvements necessary in the USB Type-C mux and orientation switch handling code.

On the maintainer side, the bulk of the contributions came from a continuously active Qualcomm community, which resulted in Bjorn accepting patches touching upon 84 different boards, across 31 different Qualcomm platforms. In addition to work extending existing board support and adding new boards, a significant portion of these patches was improvements towards enabling DeviceTree binding validation.

## Manivannan Sadhasivam

Manivannan upstreamed the [Modem Host Interface (MHI) bus stack for the PCIe Endpoint devices](https://www.linaro.org/blog/mhi-bus-for-endpoint-devices-upstreamed-to-linux-kernel/), that gave him the #21st spot in the most active developers by changed lines for v5.19 release. Earlier, Manivannan upstreamed the [MHI bus stack for the PCIe host devices](https://www.linaro.org/blog/mhi-bus-support-gets-added-to-the-linux-kernel/) that is currently being used with various host platforms based on x86, ARM64 and MIPS architectures for bringing the network connectivity using Qualcomm modems and WLAN devices.

This MHI bus support for PCIe endpoint devices will allow running the upstream kernel directly on the Qualcomm modems, such as the Snapdragon SDX55 platform, WLAN devices or boards with pairs of SoCs bridged using PCIe that used to run only the downstream kernel so far. Manivannan validated the PCIe endpoint work on the Telit FN980M modem based development board and was able to get the network connectivity over PCIe on the host using MHI IP_SW0 channels.

There is still some work pending for getting the data connectivity from the modem DSP and that is expected to land in the future releases.

{% include image.html path="/assets/images/content/5.19-kernel-non-author-signoffs-.png" alt="List of most active non-author signoffs in the 5.19 Linux Kernel Release" %}

In addition to being the third most active employer in terms of changesets and lines changed, Linaro was also top of the list for non-author signoffs. This demonstrates the crucial role Linaro’s Maintainers play in accepting and upstreaming patches, thus moving the Arm software ecosystem forward.  

## Shawn Guo

As one of i.MX platform maintainers, Shawn helped to review and collect i.MX device tree and platform drivers patches for 5.19 Linux Kernel.  With that effort, we have a number of i.MX8M Plus SoC based devices supported by 5.19 Kernel, i.e. Engicam i.Core MX8M Plus SoM and EDIMM2.2 Starter, Toradex Verdin i.MX8MP devices, Gateworks GW7400 series.

## Vinod Koul

Vinod reviewed and accepted patches for a variety of platforms across the DMAengine, PHY and SoundWire subsystems.

### Conclusion

Linaro’s position in the 5.19 kernel release and the number of Linaro kernel engineers featured as most active contributors is true testament to the crucial role Linaro continues to play in advancing the Arm software ecosystem through feature enablement, testing and maintenance. We look forward to Linus releasing more kernels on Arm development platforms!

You can find out more about Linaro’s role in the Linux kernel by checking out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview).