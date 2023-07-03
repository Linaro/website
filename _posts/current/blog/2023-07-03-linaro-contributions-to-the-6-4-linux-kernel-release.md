---
layout: post
title: Linaro Contributions to the 6.4 Linux Kernel Release
description: In this article, we discuss the 6.4 kernel release, which was
  published last week & featured Linaro yet again in the top five contributors
  to the Linux kernel.
date: 2023-07-04 09:00:35 +01:00
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
{% include image.html path="/assets/images/content/jusegq_tzotnczo4uohhvb-zqehyip45488mhrv-kn5noolwpalt5co9ulfzdnw6g6edeqw27nqjyd-gwvg7uklohgkaxzq-swzyz64f3g2m4g-6hh4o4yvwsfja.png" alt="Most active 6.4 Kernel Release Developers" %}

[LWN’s development statistics](https://lwn.net/Articles/936113/) from the 6.4 Kernel release featured Linaro as one of the top five employers in terms of contributions to the Linux kernel. Statistics like these show Linaro’s continued commitment to driving the Arm open source ecosystem forward. 

In this blog, we asked the Linaro Engineers featured in LWN’s list of most active developers to the 6.4 Kernel Release to talk about their contributions.

{% include image.html path="/assets/images/content/most-active-6.4-kernel-release-developers2.png" alt="Most active 6.4 Kernel Release Developers" %}

## Krzysztof Kozlowski

In the v6.4 kernel, Krzysztof contributed Audio support for the Qualcomm SM8550 SoC: digital codecs, Soundwire controllers and respective DTS. He also added a Qualcomm QRD8550 board with that SoC. As with every cycle, Krzysztof was on a cleaning and fixing spree bringing Qualcomm SoC bindings and DTS files closer to full DT schema compliance. Krzysztof also worked on cleanups in Samsung SoC DTS and hardware monitoring drivers, tree-wide improvements of of_device_id table usage and fixes for 1-Wire subsystem, which he recently took as maintainer.

With almost two hundred Reviewed-by credits for the Devicetree bindings, Krzysztof made it to the top reviewers list for this release. 

## Konrad Dybcio

Konrad’s work this cycle mainly revolved around improving and cleaning up existing SoC drivers, fixing regressions, addressing some long-standing issues and laying some groundwork for larger patchsets coming next cycle. On top of that, he introduced support for the Qualcomm Robotics RB1 board. Konrad also reviewed tons of incoming patches.

## Manivannan Sadhasivam

In this release, Manivannan mostly worked on Qualcomm PCI and EDAC/LLCC drivers along with several devicetree fixes/improvements. Most notably, Manivannan reworked the PCI endpoint notifiers to a callback-based mechanism to pass the events from Endpoint controllers to function drivers. In addition, the PCI Root Complex (RC) support for Qualcomm SDX55 SoC was also added on top of a cleanup of the Qualcomm PCIe RC driver. Finally, Manivannan fixed the Qualcomm EDAC/LLCC drivers to use SoC specific register offsets instead of hardcoded offsets to fix the crash observed on SM8450 SoC.

{% include image.html path="/assets/images/content/test-and-review-credits-in-6.4.png" alt="Test and review credits in 6.4" %}