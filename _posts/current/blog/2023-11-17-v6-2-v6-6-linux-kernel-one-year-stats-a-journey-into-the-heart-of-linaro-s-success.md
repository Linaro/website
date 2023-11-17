---
layout: post
title: "V6.2-V6.6 Linux Kernel (one year) stats: A journey into the heart of
  Linaro’s success"
description: >
  With V6.6 Linaro celebrates another year of contributions to the Linux Kernel.
  Through our engineers’ expertise and dedication, we explore the significant
  contributions they have made gaining valuable insights into the Linux kernel
  development process from V6.2 to the current V6.6 release.
date: 2023-11-20 08:34:33 +01:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - 6.6 kernel release
  - Linux kernel
  - arm
  - linux
  - open source
  - software
category: blog
author: linaro
---
{% include image.html path="/assets/images/content/most-active-employers-6.2-through-6.6.png" alt="Most active employers, 6.2 through 6.6" %}

With V6.6 Linaro celebrates another year of contributions to the Linux Kernel. Through our engineers’ expertise and dedication, we explore the significant contributions they have made gaining valuable insights into the Linux kernel development process from V6.2 to the current V6.6 release.

Linaro has the biggest maintainer impact among all releases:

{% include image.html path="/assets/images/content/top-non-author-signoffs-6.2-to-6.6.png" alt="Top non-author signoffs, 6.2 to 6.6" %}


<br>

{% include image.html path="/assets/images/content/most-active-6.6-emplovers.png" alt="Most active 6.6 emplovers" %}

# Krzysztof Kozlowski

Krzysztof did quite a lot of cleanups and minor fixes all over the tree with main focus on improving Qualcomm SoC DTS files. Other work was around Devicetree bindings, fixing various vendors DTS, dealing with Wvoid-pointer-to-enum-cast warning, simplifying driver's error paths with dev_err_probe() and dropping of_match_ptr() macro when not really needed (which also fixes W=1 build warnings). Krzysztof also added SD card support for the Qualcomm SM8350 and a few parts of the SM8350 Low Power Audio SubSystem, including the new SM8350 LPASS TLMM pin controller driver.

Finally Krzysztof added Maintainer's profile document for SoC platforms clean of dtbs_check and dtc warnings. Referencing this document in given SoCs platform entry, makes the requirement that new contributions cannot bring any new warnings. So far only one ARM SoC platform references the document thus is a subject to these stricter restrictions. Hopefully more will follow!

With 151 Reviewed-by credits for the Devicetree bindings, Krzysztof made it to the top reviewers list for this release.

# Konrad Dybcio

Konrad once again worked on squashing long-standing bugs across multiple platforms. He cleaned up the Venus video accelerator driver, the SCM driver and refactored parts of the Qualcomm interconnect infrastructure.

He submitted some fixes to drivers responsible for the Adreno GPU, the bandwidth monitor, the QMP PHY, the on-SoC RNG, interconnect and some others. He also finished up his previous changes to the SMD RPM clock driver, fixed up a couple of SoC and board Device Trees and resolved some dtbs_check warnings. On top of that, Konrad laid the groundwork for audio on the RB2 platform, introduced the REFGEN regulator driver and added the missing GDSCs on SC8280XP.

He continued his reviewing and maintaining work, becoming the #2 most active developer in the cycle by changed lines and the #3 most active reviewer.

# Dmitry Baryshkov 

During this cycle Dmitry mainly concentrated on two major topics. First, he continued his work on the Qualcomm display (DRM MSM) driver, reworking the hardware description catalogue and fixing several incorrect values there. This work simplifies adding new platforms, which recently allowed Linaro developers to provide patches enabling display on the day new platforms were announced.

Second major topic was the cleanup of Qualcomm PCIe, USB+DP and UFS PHY drivers. While this work didn’t bring new features on its own, it is a part of the ongoing work to clean up and simplify these PHY drivers.

Putting miscellaneous fixes aside, one of the last series that were merged during this cycle targeted DisplayPort support, finally tying several bits and pieces together and enabling proper DisplayPort support on the Qualcomm Robotics RB5 platform.

# Conclusion

Our enduring presence in this group speaks volumes about our ongoing dedication to advancing open-source technology and pushing the boundaries of innovation. Together, we shape the future of the Linux Kernel, contributing to a world where collaboration and excellence are at the forefront of progress.

For a deeper insight into Linaro's vital role in the Linux kernel, explore our [Upstream Maintainership project page](https://linaro.atlassian.net/wiki/spaces/UM/overview). If you're interested in harnessing this expertise to create and deploy your Arm-based products successfully, discover the services we offer [here](https://www.linaro.org/services/). Partner with Linaro, and together, we can turn your vision into reality.