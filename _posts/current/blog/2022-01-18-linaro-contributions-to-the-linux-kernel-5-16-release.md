---
layout: post
title: Linaro contributions to the Linux Kernel 5.16 Release
description: >
  In this blog, we asked the Linaro developers to talk about the contributions and impact they made to the Linux kernel 5.16 release. Read about the release here.
date: 2022-01-18 09:36:32 +00:00
image: /assets/images/content/careers-image-1.jpg
tags:
  - Linux kernel
  - Qualcomm
  - 5.16 kernel release
  - Arm
category: blog
author: linaro
---

The 5.16 kernel release was published last week and featured several Linaro developers in the top twenty contributors to the Linux kernel (as highlighted in [LWN.nets development statistics](https://lwn.net/Articles/880699/)) - both by changesets and changed lines.

{% include image.html path="/assets/images/content/5.16-kernel-release-active-developers.png" alt="5.16 Kernel Release Most Active Developers" %}

In this blog we asked the Linaro developers featured to talk about the contributions they made to the Linux kernel 5.16 release.

### Arnd Bergmann - Randomized kernel configurations for the purpose of regression testing

Arnd spent some time on building randomized kernel configurations for the purpose of regression testing. As a result of this, there are over 80 bugfixes from him in linux-5.16, about half of those for Arm specific code and drivers, and the others spread around all subsystems of the kernel.

Most of his other contributions this time were for merging branches from downstream maintainers. 5.16 was an unusually large release, and at the time of release there were over 100 branches and over 1000 non-merge commits that Arnd forwarded for inclusion in the mainline kernel. Detailed information about the merged contents is as usual available in the pull request messages, for linux-5.16 SoC contents see <https://lore.kernel.org/linux-arm-kernel/CAK8P3a2FokRce-oN3dRJPihmDPWuqgWfWg1FNG6WKpWiUa4eNQ@mail.gmail.com/t/>

In comparison, the 5.17 merge cycle has started with less than 800 Arm SoC specific patches, but it does include a number of new SoCs including the recently announced Snapdragon 8 Gen 1. For details about the coming contents of 5.17, see:

<https://lore.kernel.org/linux-arm-kernel/CAK8P3a0RDZpLtWjMEU1QVWSjOoqRAH6QxQ+ZQnJc8LwaV7m+JQ@mail.gmail.com/t/>

### Dmitry Baryshkov - Refactoring of interconnect drivers for Qualcomm platforms

The largest part of Dmitry’s contributions during this cycle is related to refactoring for the interconnect drivers for some of the Qualcomm platforms (sdm660, msm8916, msm8939). These changes have generified support for QoS (Quality of Service) settings for the in-chip bandwidth management. This improves support and performance of older (but still used) platforms. Dmitry’s other contributions were mostly concentrated around the Qualcomm Display driver (MSM DRM), Qualcomm clock and MPP (multi-purpose pin) controllers.

### Srinivas Kandagatla - Support for Qualcomm "AudioReach'' signal processing framework

Srinivas’ contributions are related to Qualcomm audio drivers support. In particular the support for the Qualcomm "AudioReach'' signal processing framework was merged in Linux 5.16. This new framework is an integral part of Qualcomm next generation audio SDK and this will be deployed on all new Qualcomm chipsets, such as the recently announced [Snapdragon 8 Gen 1 mobile platform](https://www.qualcomm.com/products/snapdragon-8-gen-1-mobile-platform). Upstream support to this framework makes use of ASoC Topology to load graphs on to the DSP (digital signal processor) which is then managed by APM (Audio Processing Manager) service to prepare/start/stop. This should also provide end users more flexibility to build graphs as per the use case and include vendor specific DSP modules.In addition to the support for AudioReach, Srinivas contributed various fixes in legacy Qualcomm Audio Codecs drivers.

### Shawn Guo - Adding the initial Qualcomm [QCM2290](https://www.qualcomm.com/products/qcm2290) chipset support

Shawn’s main contribution to the 5.16 Linux kernel release involved adding the initial Qualcomm [QCM2290 ](https://www.qualcomm.com/products/qcm2290)chipset support. This entry-level SoC is newly introduced by Qualcomm as a cost-effective solution for retail point-of-sale (POS), industrial handheld, tracking and camera applications. As a result of Shawn’s work, drivers for QCM2290 Clock, Pinctrl, Regulator and USB PHY are available with the 5.16 kernel, and the kernel should be booting on the platform with a simple device tree. Along the way of adding QCM2290 support, Shawn also fixed several device tree bindings and DTS related to QMP PHY support.

{% include image.html path="/assets/images/content/top-signoffs-in-5.16.png" alt="5.16 Kernel Release Top Signoffs" %}

### Bjorn Andersson - Qualcomm SoC, remoteproc and rpmsg maintainership

Bjorn's presence on the top signed-off-by list is the result of a good amount of community contributions related to the Qualcomm platforms, as well as the remoteproc and rpmsg frameworks.

Among the changes in the Qualcomm space, device trees were introduced for Samsung Galaxy S4 Mini Value Edition, Xiaomi Mi 5, Xiaomi Mi Note 2, Sony Xperia XZ1 Compact, Sony Xperia XZ Premium, Sony Xperia XZ1, two revisions of Google Homestar, Google Herobrine, Sony Xperia 10 III and the Fairphone FP4.

The Qualcomm Snapdragon 410 (MSM8916) got cleaned up, improved and now supports running in 32-bit mode as well. Qualcomm IPQ6018 got USB support, Asus Zenfone 2 Laser got sensor, touchscreen and uSD-card support. Among other things, the Snapdragon 7c Gen 3 got PCIe, QFPROM, GPU, QSPI, IPA, interconnect, coresight and USB support. The Qualcomm Snapdragon 660 SoC got video encoder/decoder support. The Qualcomm Snapdragon 835 Mobile Platform (MSM8998) got GPU and the Qualcomm Snapdragon 845 SoC got LMh support. Qualcomm Snapdragon 855 (SM8150) got FastRPC, as did Qualcomm Snapdragon 888 (SM8350), which also got cluster idling support.

Support for the new GPR protocol, used by Qualcomm's new audio stack, a driver for exposing platform sleep statistics, SMP2P feature negotiation were introduced as well, as was, additional platform support in the RPM power-domain, LLCC and socinfo drivers.

In remoteproc support for controlling the Mediatek MT8195 SCP, Meson AO ARC, Qualcomm Snapdragon 7c Gen 3 modem co-processors was introduced, along with a range of cleanups, general improvements and bug fixes. Similar cleanups and general improvements were seen in the rpmsg subsystem.

{% include image.html path="/assets/images/content/5.16-kernel-release-active-employers.png" alt="5.16 Kernel Release Most Active Employers" %}

Linaro as an employer featured sixth by changesets and seventh by lines changed. These statistics demonstrate the crucial role Linaro’s highly skilled kernel developers continue to play in maintaining and improving the Arm software ecosystem.
