---
layout: post
title: Qualcomm and Linaro Enable Latest Flagship Snapdragon Compute SoC
description: >
  Running fully fledged Debian desktop (including GPU rendering) with patches on
  top of linux-next on the X Elite (X1E80100) platform even before it has been
  announced
date: 2024-01-05 06:10:33 +07:00
image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
tags:
  - Qualcomm
  - X1e80100
  - X Elite
  - Debian
  - Snapdragon
  - Arm64
  - Arm64laptops
category: blog
author: Abel.vesa
---
# Running fully fledged Debian desktop (including GPU rendering) with patches on top of linux-next on the X Elite (X1E80100) platform even before it has been announced

For many years the Qualcomm Landing Team at Linaro has joined forces with Qualcomm to help deliver launch-day support for new chips. This past year, we have been developing a kernel that supports the recently-announced Snapdragon X Elite. In previous years we have been able to provide basic boot-to-shell support on launch day. This year not only did we have these ready to roll but we already had full Debian desktop working, complete with display, GPU and WiFi.

The collaboration between Qualcomm and Linaro engineers, harnessed together, has pushed  the boundaries of initial upstream support beyond just basic boot-to-shell. The patches will be driven all the way into the mainline in the coming months. In the meantime, a public [tree](https://git.codelinaro.org/linaro/qcomlt/demos/linux/-/tree/x1e80100) based on the most recent linux-next is available. This builds upon the years-long efforts of Linaro engineers making upstream bring-up easier for each new Qualcomm platform.

When announced, the [X1E80100](https://docs.qualcomm.com/bundle/publicresource/87-71417-1_REV_C_Snapdragon_X_Elite_Product_Brief.pdf) demonstrated very impressive benchmark results. The single and multi core results were captured using systems running the kernel and Debian images provided by the team.

# Upstreaming strategy

The upstreaming effort was split into two main parts mainly, because the development was done jointly by the collaboration between Qualcomm and Linaro engineers. First, an initial series that supports [boot-to-shell](https://lore.kernel.org/all/?q=x1e80100) is already on the list, making its way into mainline; another series of patches for the rest of the supported features will be posted later.  Posting the patches in two parts was also done because the platform was launched near the end of the Linux development cycle (v6.6-rc7). 

The first series includes the following features:

* Qualcomm® Oryon™ CPUs
* Clocks, interconnects, regulators, power domains and pinctrl providers
* Low-Speed I/O: I2C, SPI, UART
* Compute Reference Device (CRD) board support, with coverage of all the drivers above
* Qualcomm Compute Platform (QCP) board support, also covering the drivers above

At the time of writing this blog post, the interconnects, pinctrl and power domains have already been merged.

Sending the second series is underway; it includes the following features:

* CPUFreq support 
* High-Speed peripherals: PCIe Gen3 and Gen4, USB SuperSpeed
* Embedded DisplayPort support
* GPU support
* Qualcomm® Hexagon™ Processor SubSystem (Audio)
* More Compute Reference Design (CRD) specific support (trackpad, touchscreen, keyboard, battery management, NVMe and WLAN)

Linaro’s Qualcomm Landing Team has prepared a [kernel tree on CodeLinaro](https://git.codelinaro.org/linaro/qcomlt/demos/linux/-/tree/x1e80100) that provides all of the support mentioned above.

# Debian on Snapdragon X Elite (X1E80100) Compute Reference Device

Linaro provides [a step-by-step guide](https://git.codelinaro.org/linaro/qcomlt/demos/debian-12-installer-image) on how to prepare the installer media that will take you all the way through to a full Debian system, with GPU and WiFi support. 

The installer also brings GRUB, which provides dual boot support out-of-the-box and also allows chainloading other EFI applications, including the Fastboot EFI app. Booting via fastboot protocol helps a lot when it comes to rapid kernel development and testing because it avoids the need to build the deb package and install it manually. Instead, you can boot the kernel image with the devicetree blob and the initramfs (including the modules) provided via a boot image (similar to other mobile platforms).

{% include image.html path="/assets/images/content/debian-running-.png" alt="Debian running on top of latest linux-next, with GPU rendering, on Snapdragon X Elite (X1E80100) Compute Reference Device" %}

# What’s next

The upstreaming effort will continue in the coming months and will include more boards/platforms/features based on X1E80100. The engineers from both Qualcomm and Linaro will continue to work closely with upstream maintainers to get all support needed by the X1E80100 accepted upstream. Work is underway to enable audio and camera support as well; these features are planned for inclusion in the Linux v6.8 kernel.

# Want to learn more?

If you want to follow closely the upstreaming of the X1E80100, you can head to [https://lore.kernel.org/all/?q=X1E80100](https://lore.kernel.org/all/?q=x1e80100).

More information about the Snapdragon X Elite (X1E80100) can be found here:

<https://docs.qualcomm.com/bundle/publicresource/87-71417-1_REV_C_Snapdragon_X_Elite_Product_Brief.pdf>

For more information about what Linaro’s Qualcomm Platform Services does and has to offer, please head to <https://www.linaro.org/services/qualcomm-platforms-services/>