---
layout: post
title: " Upstream Linux support now available for the the Qualcomm Snapdragon 8
  Gen 3 Mobile Platform"
description: >
  We're thrilled to share the latest development in our ongoing collaboration
  with Qualcomm. Linaro Engineer Neil Armstrong has successfully enabled
  upstream Linux support for the Qualcomm Snapdragon 8 Gen 3 Mobile Platform,
  the latest addition to the Snapdragon processor family.
date: 2023-10-26 12:02:02 +02:00
image: /assets/images/content/stack.png
tags:
  - LinuxKernel
  - Qualcomm
  - Snapdragon
  - ""
category: blog
author: linaro
---
At Linaro, we're thrilled to share the latest development in our ongoing collaboration with Qualcomm. Linaro Engineer Neil Armstrong has successfully enabled upstream Linux support for the [Qualcomm Snapdragon 8 Gen 3 Mobile Platform](https://www.qualcomm.com/products/mobile/snapdragon/smartphones/snapdragon-8-series-mobile-platforms/snapdragon-8-gen-3-mobile-platform), the latest addition to the Snapdragon processor family.

This achievement signifies a significant milestone in the realm of Linux support, as it demonstrates our commitment to providing cutting-edge solutions to our partners. Here an inside look at this groundbreaking development, showcasing the unparalleled collaboration between Qualcomm and Linaro, impacting positively on:

* Effortless upstream Linux integration
* Powerful performance optimization
* Running AOSP with Mainline
* Continued collaboration 

# The Qualcomm Announcement

The initial support was posted on October 25th 2023 on the Linux kernel mailing lists for review by the Linux developers community. With the set of patches released by Linaro engineers, it is also possible to boot an AOSP image with Graphics Software Rendering using Google’s SwiftShader.

Since 2014, Linaro Engineers have been working closely with Qualcomm Engineers to enable Snapdragon platforms to work with Mainline Linux.

Running a recent upstream Linux kernel immediately after the announcement of a new SoC is a significant achievement, and is a testimony to the close working partnership between Qualcomm and Linaro.

# What has been upstreamed for the Snapdragon 8 Gen 3 Mobile Platform?

With the recent series of patches released by Linaro, the following features are enabled for the Snapdragon 8 Gen 3 Mobile Platform:

* Qualcomm® Kryo™ CPUs, including DVFS (Dynamic voltage and frequency scaling) and Power Management
* System foundation: Clocks, Power controllers, PMICs
* Low-Speed I/O: I2C, SPI, RTC, Buttons, LEDs
* High-Density Storage: UFS 4.0, SDXC
* High-Speed Peripherals: PCIe Gen3 and Gen4, USB Version 3.1 Gen 2, USB-C PD
* Qualcomm® Hexagon™ Processor SubSystems: Audio, Sensors, Compute and Modem
* Mobile Display Subsystem + DSI Engine, Touch Controller
* Communication: WCN7850 Bluetooth

All patches sent for review are also integrated and available in the following development [branch](https://git.codelinaro.org/linaro/qcomlt/demos/linux/-/tree/topic/sm8650/demo/aosp-next-20231016) on CodeLinaro.org.

{% include image.html path="/assets/images/content/snapdragon-8-gen-3-mobile-platform.png" alt="Snapdragon 8 Gen 3 Mobile Platform" %}

{% include image.html path="/assets/images/content/te3oohadzhyx4qgbgtvi2obo3rblehqruczrhjq1l6eafj7_xn1d7-hu4ut5yjruo0ycwhnltxapakltjqtb_a0pylxgn1-tgdurjpvfylun0hm-pyjzn4i7sswl.png" alt="Snapdragon 8 Gen 3 Mobile Platform" %}

{% include image.html path="/assets/images/content/t7oky6w8060jncgxxsyzvkxr_xl10ywvbvqfkqmb14xzuizdkoa2zqcqoraf5so8tspeoffrr-emtmpdh63mnspttiu76l_6l8q6kgbapoavneh91loa_usx1frr.png" alt="Snapdragon 8 Gen 3 Mobile Platform" %}

**Qualcomm Snapdragon 8 Gen 3 Running Android 14**

# How do I run AOSP using Mainline?

One might think it is quite hard to run AOSP with mainline on such a new platform, but in reality, not at all! Thanks to the long term effort of Linaro and Google engineers making it possible to run AOSP with vanilla Linux releases. Thanks to Amit Pundir for providing a helping hand to get AOSP on this platform.

To generate an AOSP image for the Snapdragon 8 Gen 3 Qualcomm Reference Device using the current set of patches available on the mailing list, use the following instructions, which  are derived from here <https://source.android.com/docs/setup/build/devices> with some small changes.

Download the Android source tree:

`$ mkdir AOSP`\
`$ cd AOSP`\
`$ AOSP=$PWD`\
`$ repo init -u https://android.googlesource.com/platform/manifest -b master`\
``$ repo sync -j`nproc` ``

Prepare SM8650 device config by pulling this pathset:

```$ cd device/linaro/dragonboard``$ git fetch https://git.codelinaro.org/linaro/qcomlt/demos/device_linaro_dragonboard.git \``topic/sm8650/demo/android-14-20231016 && git checkout FETCH_HEAD```

Build the Linaro SM8550 tree containing the patches sent for review:

`$ cd $AOSP`\
`$ git clone https://git.codelinaro.org/linaro/qcomlt/demos/linux.git \`\
`-b topic/sm8650/demo/aosp-next-20231016 sm8650-kernel`\
`$ cd sm8650-kernel`\
`$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- \`\
`rbX_aosp_defconfig`\
``$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- -j`nproc` ``\
`$ mkdir $AOSP/device/linaro/dragonboard-kernel/android-6.6/`\
`$ cp arch/arm64/boot/Image.gz arch/arm64/boot/dts/qcom/sm8650-qrd.dtb \`\
`$AOSP/device/linaro/dragonboard-kernel/android-6.6/`\
`$ find ./ -name "*.ko" -exec cp {} $AOSP/device/linaro/dragonboard-kernel/android-6.6/ \;`

Build AOSP

````$ cd $AOSP``$ . build/envsetup.sh``$ lunch qrd8650-userdebug```$ make -j````nproc` 

Flash AOSP Images

```$ cd out/target/product/qrd8650/``$ fastboot erase super erase boot erase vendor_boot \``          erase userdata erase metadata erase dtbo erase recovery``$ fastboot flash -S 256M super ./super.img flash boot ./boot.img \``          flash vendor_boot ./vendor_boot.img format:ext4 metadata \``          flash userdata ./userdata.img reboot```

# Next steps

In the coming weeks, Linaro engineers will continue to work with the Linux kernel community to ensure all the patch series are merged in a timely manner. Additional patches are expected soon to enable display, audio and modem use cases.

# Want to learn more ?

To find out more information on the ongoing work, check  <https://lore.kernel.org/all/?q=SM8650> or contact us.

The Snapdragon 8 Gen 3 Specification & features can be found [Here](https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/images/company/news-media/media-center/press-kits/snapdragon-summit-2023/documents/Snapdragon8Gen3_%20ProductBrief.pdf) 

For more information about what Qualcomm platform services Linaro offers and how we can help develop, maintain and optimize products using Qualcomm technologies, go to <https://www.linaro.org/services/qualcomm-platforms-services/>.