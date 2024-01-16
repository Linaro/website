---
layout: post
title: Linaro high up the list for most active Linux Kernel contributors in 2022
description: In this blog we look at Linaro's contributions to the Linux Kernel
  for 2022 as well as for the latest 6.1 Kernel Release. Read more here!
date: 2022-12-20 12:04:50 +00:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - Kernel Release
  - LKFT
  - Qualcomm
  - Thermal Framework
category: blog
author: linaro
---
## Introduction

The 6.1 Linux Kernel was released last week and featured Linaro yet again in [LWN’s lists](https://lwn.net/Articles/915435/) for most active developers and most active employers. In this blog we have asked Linaro developers to talk about the work they have done which is featured in this release. 

In LWN’s latest development statistics, they also look at who has been most active throughout the year. We are proud to say that a Linaro developer - Krzysztof Kozlowski - is the most active developer by changesets for 2022. Dmitry Baryshkov - another Linaro engineer - is also featured in the list for 20 most active developers. 

{% include image.html path="/assets/images/content/most-active-developers-5.16-to-6.1.png" alt="List of most active developers 5.16 to 6.1 Linux Kernel Releases" %}

Linaro was the 6th most active employer by changesets and 4th most active by lines changed. 

{% include image.html path="/assets/images/content/most-active-employers-5.16-6.1.png" alt="List of most active employers 5.16 to 6.1 Linux Kernel Releases" %}

On the list for most active maintainers and developers for non-author signoffs in 2022 we have Vinod Koul and Shawn Guo. Non-author signoffs are defined by the application of a Signed-off-by tag to a patch written by somebody else. This tends to happen when a Maintainer accepts a patch and adds it to their repository to eventually send upstream. Linaro is the second most active employer for non-author signoffs, no small feat for a company with 150 employees! 

These statistics are testament to our highly skilled Engineers and the influential roles they play in supporting open source communities and driving the Arm software ecosystem as a whole forward.

{% include image.html path="/assets/images/content/non-author-signoffs-5.16-6.1.png" alt="List of most non-author signoffs 5.16 to 6.1 Linux Kernel Releases" %}

Now let's get back to the latest 6.1 Kernel Release and find out what Linaro’s Engineers contributed with. 

{% include image.html path="/assets/images/content/most-active-6.1-developers-.png" alt="List of most active developers 6.1 Linux Kernel Release" %}

## Krzysztof Kozlowski - Qualcomm Devicetree sources and bindings

Krzysztof Kozlowski continued his work to bring down Devicetree bindings check warnings on Qualcomm SoCs DTS, so the DTS files are compliant with the DT bindings. This work led to several improvements in the Qualcomm bindings themselves (ASoC, display, pin controller, FastRPC and Slimbus) and in converting a few more bindings to new DT schema format.

Another aspect of Krzysztof's work was on the Qualcomm Bandwidth Monitor (BWMON) driver, adding support for the second BWMON instance in SDM845 - present in the Last Level Cache Controller (LLCC). It monitors current throughput between LLCC and memory bus, thus providing aggregated memory throughput for the entire system. BWMON then places votes for bandwidth, so the system performance levels can be adjusted to match current needs.

Krzysztof also contributed fixes to Slimbus drivers, several other platforms and bindings. As usual, Krzysztof was an active reviewer of Devicetree bindings, giving him second place for number of reviewer credits.

## Dmitry Baryshkov - Qualcomm display subsystem driver

Dmitry Baryshkov continued his work on the Qualcomm display subsystem driver (MSM DRM). During this cycle his contributions include rework of the IOMMU usage, changing the DSI (Display Serial Interface) driver to use a common code path for both the DSI panels and DSI bridges (by using the panel-bridge abstraction) and simplification of the DSI DSC (Display Stream Compression) usage for the DSI panels and bridges. Dmitry is a co-maintainer of the MSM DRM driver.

Then Dmitry continued his work on converting Qualcomm clock drivers to use DT bindings to determine the incoming clocks, the way that all current kernel drivers are expected to behave. This time his contributions include MSM8916, MSM8939, MSM8960/APQ8064 and MSM8660 clock controller drivers.

Last, but not least, his contributions include a rework of MSM8996 CPU clock drivers, working towards fixing stability issues on this platform. A work on this topic also caused contributions to the Linux Power State Coordination Interface (PSCI) implementation easing the debugging process for the misbehaving PSCI platforms.

It’s worth mentioning that Dmitry’s continued work on the Linux kernel can also be noted in the long term perspective. If counted through the v5.16 to v6.1 timeframe, Dmitry is ranked on the 12th place by the amount of the changesets and on the 11th place if counted by the number of changed lines.

## Johan Hovold - Support for Qualcomm SC8280XP

Johan Hovold has worked on support for the Qualcomm SC8280XP platform and the Lenovo Thinkpad X13s laptop in particular. This release includes, for example, support for functional system suspend, PCIe driver support, preparatory QMP PHY driver and devicetree-binding work, and fixes for probe-deferral issues in the MSM DRM display driver.

## Manivannan Sadhasivam - Support added for SM8540 to the Qualcomm PCIe Endpoint controller driver

Manivannan Sadhasivam added support for the SM8450 SoC to the Qualcomm PCIe Endpoint controller driver that he upstreamed in v6.0 along with patches for improving the driver in general. This marked the first step towards establishing the communication between PCIe host and PCIe endpoint with Qualcomm SoCs. During this process, Manivannan became a maintainer of the Qualcomm PCIe RC driver.

Manivannan also worked on improving the Designware eDMA driver by fixing the runtime PM support and reviewed the patches targeting the eDMA driver and PCIe Endpoint subsystem as a whole.

## Daniel Lezcano - Thermal Rework

The thermal framework is currently reworked to fix a design issue related to how the trip point violations are detected. The ordering of the trip point list is not guaranteed because of the multiple duplications of the thermal trip implementation in the different drivers. Without this ordering, the trip point violations can not be correctly handled. That impacts the thermal notifications events, the statistics and the governors, that can especially happen when the temperature is jittering around the threshold. This work will improve all the thermal drivers and simplify considerably the thermal framework code but it is a long term development which will take several releases to be completed. In addition, the userspace thermal daemons will benefit from consistent and ordered thermal events sequence which is not the case today.

This kernel release had some fixes and cleanups regarding the simplification of the thermal OF code. The simplification introduced de facto the generic trip point into a single initialization path for the device tree based drivers.

The monitoring loop and the locking scheme have been improved to close some race windows and simplify how the thermal mainloop watches the temperature.

The Mellanox driver has been changed to remove the driver specific thermal decision aggregation as it was already supported by the thermal core code.

And finally the thermal zone callback to set the trip point has been moved to the place it belongs to.

All the thermal ARM drivers have been changed to support the generic trip points but the merge for this set of changes is postponed for the v6.3 release.

{% include image.html path="/assets/images/content/test-and-review-credits-6.1-kernel-release.png" alt="List of most test and review credits 6.1 Linux Kernel Release" %}

## Naresh Kamboju - Linaro Kernel Validation Test CI

Naresh Kamboju, the Linaro kernel validation (LKFT) expert, continued his work in validating the various Linux subsystems by using the LKFT CI test architecture. LKFT is powered by fast builds and tests by using the Linaro Tuxsuite, Tuxmake and Tuxtriggers API tools for auto scalable parallel builds (up to 5000 concurrent jobs) for multiple architectures with various Clang and GCC toolchains. This has enabled LKFT to minimise the turn-around time for build validation and regression reports. Not only that -- reproducing bugs is now only a Tux command away!

LKFT’s objective is kernel validation on Arm64 on Qualcomm SoC’s (DragonBoard 845C, DragonBoard 410C), ARM’s Juno-r2, FVP platforms, Hikey and Raspberry Pi 4 development boards, as well as X86 and various Qemu emulation platforms.

While on this release LKFT and Naresh are featured prominently on the top-15 list of Tested-By’s, the work done by LKFT on testing patches and reporting problems traces back a long way before making it into Linux Mainline, as many of the reports happen on Linux Next. By letting the LKFT machinery run on a series of patches or a subsystem tree, kernel developers have access to a wide range of build architectures and to automated testing on physical hardware which would otherwise not be available to them. This imprints quality on the patches before getting merged on Mainline, like the CLK series before reaching Linux 6.1.

{% include image.html path="/assets/images/content/6.1-most-active-employers.png" alt="List of most active employers 6.1 Linux Kernel Release" %} 

## Conclusion

As can be seen from the development statistics for 2022, Linaro’s highly skilled engineers continue to play a crucial role in advancing the Arm software ecosystem. To find out more about Linaro’s role in the Linux kernel, check out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview). Alternatively if you would like to work with Linaro’s experts on successfully building and deploying your Arm-based product, read about [the services we provide](https://www.linaro.org/services/) here.