---
layout: post
title: Linaro Contributions to the 6.2 Linux Kernel Release
description: In this blog we talk about the contributions Linaro made to the 6.2
  Linux Kernel Release. Read more here!
date: 2023-03-02 02:11:44 +00:00
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - Open Source
  - Qualcomm
  - Lenovo
  - Arm
category: blog
author: linaro
---
{% include image.html path="/assets/images/content/most-active-6.2-employers.png" alt="Most active 6.2 Employers" %}

As the development statistics compiled by [LWN](https://lwn.net/Articles/923410/) demonstrate, Linaro employees remain key code reviewers and committers. Except for writing code, a significant number of all v6.2 reviews came from Linaro engineers, placing the company as second reviewer for that release. Linaro employs several Linux kernel maintainers which were responsible for applying 6.5% of all v6.2 commits. A lot of code is not only written by Linaro, but is actually going through our hands and eyes.

In this blog, we asked the Linaro Engineers featured in LWN’s list of most active developers to the 6.2 Kernel Release to talk about their contributions.

{% include image.html path="/assets/images/content/most-active-6.2-developers.png" alt="Most Active 6.2 Developers" %}

## Krzysztof Kozlowski

**Improved and fixed Qualcomm Arm64 SoC Devicetree sources**

In v6.2 release, Krzysztof Kozlowski worked on improving and fixing Qualcomm ARM64 SoC DTS (Devicetree sources), mostly making them compliant with the Devicetree bindings. This compliance resulted in several fixes for actual issues, so there is a clear benefit of having bindings in the new DT schema format. Another piece of work was refactoring, correcting and converting to DT schema of the Qualcomm SoC pin controller and Audio DSP Devicetree bindings. Krzysztof worked also on Slimbus drivers, several other platforms’ Devicetree bindings and DTS files. His involvement in running the Real-Time Linux kernel (PREEMPT_RT) on the Qualcomm RB5 platform resulted in a few fixes for Qualcomm devices. The PREEMPT_RT patchset stresses sometimes a bit different than usual paths of kernel code, thus some bugs are not visible in a standard, non-RT kernel. Just like in previous releases, a large amount of new patches with DT bindings on the Linux Kernel Mailing Lists gave Krzysztof a lot of review work resulting in 249 reviewed-by tags in v6.2.

## Johan Hovold

**Worked on support for the Lenovo Thinkpad X13 laptop**

Johan Hovold has worked on support for the Qualcomm SC8280XP platform and the Lenovo Thinkpad X13s laptop in particular. This release includes, for example, a rework of the QMP PHY drivers to add support for 4-lane PCIe PHYs and DisplayPort Alternate Mode on recent Qualcomm SoCs; support for PCIe, WiFi, modem and NVMe on the X13s; and fixes for a couple of long-standing locking bugs in regulator core and UFS core, respectively.

## Dmitry Baryshkov

**Miscellaneous fixes for Qualcomm platforms**

Dmitry Baryshkov’s contributions during this cycle consist mostly of various cleanup and consolidation activities. He continued co-maintaining the Display and GPU (DRM MSM) driver (device tree schema rework for display devices and several fixes), reworked the way ARM System Memory Management Unit (SMMU) driver handles Qualcomm platforms specifics, continued cleaning up Qualcomm clock drivers (including, but not limited to significant restructuring of RPM and RPMh clock drivers). Dmitry also worked on cleaning Qualcomm device trees, including both current 64-bit platforms and older 32-bit platforms. Last, but not least, during this release Dmitry expanded the Qualcomm QMP PHY driver to support configuring the PHY to work in PCIe EndPoint (EP) mode.

## Arnd Bergmann

**Removed unused device drivers and merged 100 branches from downstream maintainers**

Arnd removed some unused device drivers and sent a number of build fixes for the 6.2 release. A much larger series to remove unused hardware support that was originally planned for this release was postponed and later included in the 6.3 merge window. 

As part of the arm-soc tree maintenance, he merged exactly 100 branches from downstream maintainers, mostly for added device support in the devicetree descriptions. As usual, a description of the changes is part of the four pull main requests posted to the list in
<https://lore.kernel.org/lkml/257c9d3c-5bfa-4c5a-8ba3-11982a00b1d3@app.fastmail.com/>

## Konrad Dybcio

**Introduced upstream support for the Sony Xperia 5 IV**

Konrad introduced basic upstream support for the Sony Xperia 5 IV (based on the Snapdragon 8 Gen 1) as well as conducted basic bring up for the Snapdragon 695 5G and the Sony Xperia 10 IV smartphone based on it. He submitted fixes to various Qualcomm-specific drivers in subsystems such as DRM, Interconnect, Regulators and CPUFreq. His work also included numerous fixes to Qualcomm Device Trees, wiring up more hardware on already-supported boards and reviewing patches posted on linux-arm-msm.

## Manivannan Sadhasivam

**Added ADC and thermal support for the Lenovo Thinkpad X13 laptop** 

Manivannan added the Analog-to-Digital Converter (ADC) and thermal support for the Lenovo Thinkpad X13s laptop powered by Snapdragon 8cx Gen 3 SoC from Qualcomm. This work allows the laptop to reduce heat generated under heavy workloads by throttling the frequency of CPU cores.

He also worked on adding clock provider support to the Qualcomm CPUFreq driver to model the clock hierarchy properly in devicetree for all CPUFreq based Qualcomm SoCs . Finally, he submitted a few bug fixes to the Qualcomm EDAC driver.

## Overall Testing Statistics

Linaro consistently ranks in the top ten for companies who review, test and report the most regressions. We asked Naresh Kamboju - Linux Kernel Validation Engineer at Linaro - to share some statistics on our contributions to the latest 6.2 Kernel Release.

{% include image.html path="/assets/images/content/test-and-review-credits-6.2-kernel-release.png" alt="Test and review credits 6.2 kernel release" %}

### Reviewed-by - Linaro in third place

Around 76 companies contributed to the v6.2 kernel release. [Linaro secured 3rd position](https://remword.com/kps_result/6.2_review.html) in “Reviewed-by” of this kernel release by committing 835 Reviewed-by.

### Tested-by - Linaro in eigth place

Around 51 companies contributed to the 6.2 kernel release. [Linaro secured 8th position](https://remword.com/kps_result/6.2_test.html) in “Tested-by” of this kernel release by committing 40 Tested-by for this kernel release.

### Reported-by - Linaro in tenth place

Around 55 companies contributed to the v6.2 kernel release. [Linaro secured 10th position](https://remword.com/kps_result/6.2_report.html) in “Reported-by” of this kernel release by committing 16 Reported-by for this kernel release. 

## Conclusion

As we can see in the development statistics from the latest kernel release, Linaro’s highly skilled and specialised  engineers continue to play a central role in moving the Arm Software Ecosystem forward. To find out more about Linaro’s role in the Linux kernel, check out our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview). Alternatively if you would like to leverage this expertise and work with Linaro on successfully building and deploying your Arm-based product, read about [the services we provide](https://www.linaro.org/services/) here.