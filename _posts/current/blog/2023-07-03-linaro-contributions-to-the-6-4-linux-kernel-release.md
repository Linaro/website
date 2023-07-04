---
layout: post
title: Linaro Contributions to the 6.4 Linux Kernel Release
description: In this blog, we discuss the 6.4 kernel release, which was
  published last week & featured Linaro yet again in the top five contributors
  to the Linux kernel.
date: 2023-07-04 12:59:08 +01:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - Linux kernel
  - 6.4 kernel release
  - open source
  - software
  - arm
  - linux
category: blog
author: linaro
---
{% include image.html path="/assets/images/content/most-active-6.4-employers.png" alt="Most active 6.4 employers" %}

[LWN’s development statistics](https://lwn.net/Articles/936113/) from the 6.4 Kernel release featured Linaro as one of the top five employers in terms of contributions to the Linux kernel. Statistics like these show Linaro’s continued commitment to driving the Arm open source ecosystem forward. 

In this blog, we asked the Linaro Engineers featured in LWN’s list of most active developers to the 6.4 Kernel Release to talk about their contributions.

{% include image.html path="/assets/images/content/most-active-6.4-kernel-release-developers2.png" alt="Most active 6.4 Kernel Release Developers" %}



## Krzysztof Kozlowski

In the v6.4 kernel, Krzysztof contributed Audio support for the Qualcomm SM8550 SoC: digital codecs, Soundwire controllers and respective DTS. He also added a Qualcomm QRD8550 board with that SoC. As with every cycle, Krzysztof was on a cleaning and fixing spree bringing Qualcomm SoC bindings and DTS files closer to full DT schema compliance. Krzysztof also worked on cleanups in Samsung SoC DTS and hardware monitoring drivers, tree-wide improvements of of_device_id table usage and fixes for 1-Wire subsystem, which he recently took as maintainer.

With almost two hundred Reviewed-by credits for the Devicetree bindings, Krzysztof made it to the top reviewers list for this release.



## Konrad Dybcio

Konrad’s work this cycle mainly revolved around improving and cleaning up existing SoC drivers, fixing regressions (such as ensuring the Last Level Cache is properly initialized on the SM8550 platform), addressing some long-standing issues and laying some groundwork for larger patchsets coming next cycle. On top of that, he introduced support for the Qualcomm Robotics RB1 board. Konrad also reviewed tons of incoming patches.

## Manivannan Sadhasivam

In this release, Manivannan mostly worked on Qualcomm PCI and EDAC/LLCC drivers along with several devicetree fixes/improvements. Most notably, Manivannan reworked the PCI endpoint notifiers to a callback-based mechanism to pass the events from Endpoint controllers to function drivers. In addition, the PCIe Root Complex (RC) support for Qualcomm SDX55 SoC was also added on top of a cleanup of the Qualcomm PCIe RC driver. With this, users can now access the PCIe devices connected to the SDX55 SoC. Finally, Manivannan fixed the Qualcomm EDAC/LLCC drivers to use SoC specific register offsets instead of hardcoded offsets to fix the crash observed on SM8450 SoC. This will allow the users to use both EDAC and LLCC drivers on the SM8450 SoC.

{% include image.html path="/assets/images/content/test-and-review-credits-in-6.4.png" alt="Test and review credits in 6.4" %}



## Dmitry Baryshkov 

This cycle Dmitry’s work included reviewing a large part of changes for the Qualcomm Display driver (drm/msm), which accounted for more than a half of his Reviewed-by tags. Most of the display patches were generic enough and did not target any particular platform, but worked towards improving user experience on all recent Qualcomm platforms, including SM8450 and SM8550.

Also Dmitry assisted in reviewing other Qualcomm-specific patches, including the DT (Device Tree) changes as well as patches targeting Qualcomm clock, interconnect and PHY drivers.



## Conclusion

Given Linaro has 150+ employees, it is no small feat to be consistently featured in the list for most active employers to the Linux Kernel! That so many of our Engineers are regularly featured is also testament to their hard work and level of expertise. To find out more about Linaro’s role in the Linux kernel, check out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview). Alternatively if you would like to leverage this expertise and work with Linaro on successfully building and deploying your Arm-based product, read about the services we provide [here](https://www.linaro.org/services/).