---
author: mark.gregotski
date: 2016-09-02 15:35:39+00:00
layout: post
link: /blog/hisilicon-creates-poplar-the-first-96boards-tv-platform-development-board/
slug: hisilicon-creates-poplar-the-first-96boards-tv-platform-development-board
title: HiSilicon creates Poplar, the first 96Boards TV Platform development board
wordpress_id: 11525
categories:
- blog
tags:
- 96Boards
- Enterprise edition
- hardware
- LHG
- Linux
- Linux on ARM
---

HiSilicon Technologies announced the arrival of Poplar, the first Linaro 96Boards TV Platform development board (Press release:[ /news/linaro-announces-first-development-board-compliant-96boards-tv-platform-specification/](/news/linaro-announces-first-development-board-compliant-96boards-tv-platform-specification/) ).

The Poplar board is manufactured by Tocoding Technologies and is described here:[ http://en.tocoding.com/index.php/96boards-poplar/](http://en.tocoding.com/index.php/96boards-poplar/)

The board supports the HiSilicon quad-core 3798C V200 and is targeted at professional set-top box and TV panel developers, as well as the open source maker community (see image of board below). The Poplar board ships with Android 5.1.1 installed.

{% include image.html name="Poplar-board-photo.jpg" alt="HiSilicon Poplar TV Platform Board (courtesy Tocoding Technologies" %}

_HiSilicon Poplar TV Platform Board (courtesy Tocoding Technologies)_

Poplar’s design is based on the 96Boards TV Platform specification, which focuses on home media requirements targeted to set-top boxes, media gateways and TV panel manufacturers. The requirements for the 96Boards TV Platform specification were defined by the Linaro Digital Home Group (LHG) director and member company representatives of the LHG steering committee.

The TV Platform specification includes support for key premium technologies such as 4k UHD video at 60fps and powerful graphics processing units (GPUs). The specification permits a wide array of high-speed peripherals (USB3.0, SATA, PCIe) and a host of media/networking connectors such as HDMI 2.0a with HDCP 2.2, S/PDIF, Gigabit Ethernet, etc. WiFi and Bluetooth are also defined for use in a home network environment. A key feature of the specification is the option for a PCIe card that can accommodate media/graphics/WiFi or other peripherals.

The specification also defines an optional tuner interface to permit using an external tuner card to deliver MPEG Transport Streams via Cable/Terrestrial/Satellite sources to the board. This makes the platform ideal for exercising use cases in 'hybrid' environments where traditional linear video services provided by a service provider can be combined with video services delivered via broadband such as IPTV or OTT streaming services. In addition, a SmartCard connector option is defined to use a separate security module for decryption of services.

LHG will use the Poplar platform as a target for reference platform builds (RPBs) based on both Linux and Android that contain features defined by the members of LHG. The RPBs will focus on optimized media frameworks and commercial DRM integrations, using ARM TrustZone and the Open Portable Trusted Execution Environment ([OP-TEE](https://github.com/OP-TEE/)). LHG RPBs help our members accelerate their product development through collaborative development of essential open source components and interfaces. The RPBs will be tested on Poplar via Continuous Integration (CI) loops using Jenkins servers.

LHG will work closely with HiSilicon throughout the process of upstreaming Poplar kernel and driver support to the Linux kernel and Android Open Source Project (AOSP) to ensure that the latest kernel features can be used by LHG and the larger community for development.

Please visit LHG at[ LAS16](http://connect.linaro.org/las16/) to see some of the first Poplar board demos. We look forward to seeing you!

**Additional Information:**

The 96Boards Poplar Hardware User Manual is available from Tocoding, available here:[ https://app.box.com/s/2t60tdcr07p8w1c8gf9j2veozpbhjkt5](https://app.box.com/s/2t60tdcr07p8w1c8gf9j2veozpbhjkt5)

The 96Boards Poplar board is currently on sale for $79USD + Shipping on Aliexpress ([http://www.aliexpress.com/store/product/96Boards-Poplar/2350001_32701867575.html?spm=2114.8147860.0.85.jZ7Tzj](http://www.aliexpress.com/store/product/96Boards-Poplar/2350001_32701867575.html?spm=2114.8147860.0.85.jZ7Tzj)).

Linaro has officially released the 96Boards TV Platform Specification at this location:[ http://www.96boards.org/specifications/](http://www.96boards.org/specifications/).

The Poplar board is supported on the 96Boards website at:[ http://www.96boards.org/product/poplar/](http://www.96boards.org/product/poplar/)

