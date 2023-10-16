---
layout: post
title: Linaro Contributions to the 6.5 Linux Kernel Release
description: In this blog post, we engage with Linaro Engineers who have been
  recognized by LWN as some of the most active developers in the 6.5 Kernel
  Release. We delve into their significant contributions and insights into the
  Linux kernel development process.
date: 2023-09-15 04:41:10 +02:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - 6.5 kernel release
  - Linux kernel
  - arm
  - linux
  - open source
  - software
category: blog
author: linaro
---
{% include image.html path="/assets/images/content/most-active-6.5-employers.png" alt="Most active 6.5 employers" %}

[LWN's development statistics](https://lwn.net/Articles/941675/) for the 6.5 Kernel release prominently highlight Linaro as one of the leading contributors to the Linux kernel. These statistics underscore Linaro's unwavering dedication to advancing the Arm open source ecosystem.

In this blog post, we engage with Linaro Engineers who have been recognized by LWN as some of the most active developers in the 6.5 Kernel Release. We delve into their significant contributions and insights into the Linux kernel development process.

{% include image.html path="/assets/images/content/most-active-6.5-developers.png" alt="Most active 6.5 developers" %}

## Krzysztof Kozlowski

In the v6.5 kernel, Krzysztof contributed final Devicetree sources (DTS) bits for Audio support on Qualcomm SM8550 MTP and QRD boards: WCD9385 audio-codec, WSA8845 speakers (both DTS and new driver) and audio-card nodes. SM8550 QRD board DTS also got updates and working USB OTG, PCIe, flash LED and display. Other notable Krzysztof’s v6.5 work was: re-organizing a bit of Qualcomm pin controller drivers, adding driver support for Qualcomm Soundwire v2.0.0 controllers (present for example in Qualcomm SM8550 SoC) and fixing a few bugs in the Qualcomm Soundwire controllers drivers. Majority of Krzysztof’s work were fixes and improvements in bindings and DTS for all platforms and subsystems.

With 142 Reviewed-by credits for the Devicetree bindings, Krzysztof made it to the top reviewers list for this release.

## Arnd Bergmann

As part of a larger effort to improve code quality throughout the kernel, Arnd sent a large number of mostly trivial patches to address existing build warnings that are produced by the compiler when the “W=1” diagnostics are enabled, in particular the -Wmissing-prototypes and -Wextra warnings, with the goal of enabling these warning options by default in a future kernel.\
In the SoC maintainer role, Arnd merged over 1100 patches in 86 branches from other developers \[<https://lore.kernel.org/linux-arm-kernel/80fba92e-3836-4d27-8be6-1e5f7b5b2f53@app.fastmail.com/T/>]. This includes a move of the arm32 device tree files to a nested directory structure.\
\
One notable change this time is that almost all the added SoC and machine supported in this branch is for 64-bit Arm hardware, including three new SoC platforms (stm32mp2,  ma35d1 and amlogic-c3) that are each based on 64-bit Cortex-A35 CPU cores and replace product families that were previously 32-bit only. While the move from 32-bit to 64-bit Arm SoCs has been in progress for over a decade by this point, there was still a constant flow of new 32-bit hardware support into the kernel, which appears to have ended with the linux-6.5 release.

## Konrad Dybcio

This cycle, Konrad worked on squashing a plethora of low-level bugs concerning the majority of Snapdragon SoCs. He also introduced a couple of new clock drivers, in preparation for enabling more functionality on another handful of platforms. Konrad’s work also included adding support for Adreno 610 (found on e.g. the Qualcomm Robotics RB2 platform) and Adreno 619 (on the Snapdragon 695 5G SoC). He extended support for the RB2 dev board and a couple of other supported devices. Finally, Konrad stepped up to co-maintain the linux-msm kernel project.

## Bryan O’Donoghue

For 6.5 Bryan focused on updating the CAMSS dts for supported Qualcomm boards. This involved fixing up some invalid dependencies so that the Camera test pattern generator would work on Qcom boards without camera hardware as well as updating camera sensor bindings.

He reviewed and acked a number of commits from other contributors also.

## Dmitry Baryshkov 

For 6.5 Dmitry focused on reengineering DRM (Direct Rendering Manager) DSC (Display Stream Compression) code, resulting in more code reuse which, together with the work implemented by Qualcomm engineers, allowed enabling support for the current DSC standard in the Qualcomm Display driver (DRM MSM). Then, wearing DRM MSM co-maintainers hat, Dmitry continued working on the driver, implementing several fixes and cleanups.

Other than that, Dmitry continued his work on both older and new Qualcomm platforms, improving support for MSM8974, MSM8996 and SDM845-based platforms.

Last, but not least, one of the drivers previously developed by Dmitry finally found its way to the Linux kernel (finally polished by another Linaro engineer, Neil Armstrong), allowing us to enable DisplayPort on the newest development boards produced by Qualcomm, SM8550-QRD.

{% include image.html path="/assets/images/content/test-and-review-credits-in-6.5.png" alt="Test and review credits in 6.5" %}

## Conclusion

Maintaining a presence on the list of the most active Linux Kernel contributors is no small achievement for Linaro, especially with a team of over 150 employees. It reflects not only our dedication but also the exceptional expertise of our engineers.

For a deeper insight into Linaro's vital role in the Linux kernel, explore our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview). If you're interested in harnessing this expertise to create and deploy your Arm-based products successfully, discover the services we offer [here](https://www.linaro.org/services/). Partner with Linaro, and together, we can turn your vision into reality.