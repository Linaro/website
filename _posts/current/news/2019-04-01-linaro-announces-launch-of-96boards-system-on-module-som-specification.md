---
layout: post
title: Linaro announces launch of 96Boards System-on-Module (SOM) Specification
description: Linaro Ltd, the open source collaborative engineering organization
  developing software for the Arm® ecosystem, today announced the publication of
  version 1.0 of 96Boards System-on-Module (SOM) specifications. 96Boards is
  Linaro’s initiative to build a single software and hardware community across
  low-cost development boards based on Arm technology.
date: 2019-04-01 03:00:00
image: /assets/images/blog/96Boards-SoM-Carrier-Board-Angle.png
tags:
  - Linaro
  - Arm
  - Open Source
  - Artificial Intelligence
  - Rockchip
category: news
author: linaro
---

Linaro Ltd, the open source collaborative engineering organization developing software for the Arm® ecosystem, today announced the publication of version 1.0 of 96Boards System-on-Module (SOM) specifications. 96Boards is Linaro’s initiative to build a single software and hardware community across low-cost development boards based on Arm technology.

The launch of the new 96Boards specifications means that developers now have a SOM solution which is compatible across SoCs. SOM solutions today use a variety of different connector solutions including SO-DIMM connectors used in DRAM and Mini Module Plus (MMP) connectors for certain specialist boards. Up until now, there has been no solution offering flexible IO and a robust mounting mechanism, nor a standard form factor. The new 96Boards SOM specifications aim to address this lack of choice by producing a general purpose SOM platform that will enable plug and play compatibility between a whole range of different SOM solutions.

Today two 96Boards SOM specifications have been launched - the [Compute Module Specification](https://linaro.co/som-spec) and the [Wireless Specification](https://linaro.co/som-w-spec). Both specifications encourage the development of reliable and cost-effective embedded platforms for building end-products. The specifications have been proposed, created and reviewed by the current 96Boards Steering Committee Members.

- The [Compute Module Specification](https://linaro.co/som-spec) defines a SOM with generic module-to-carrier board interface, independent of the specific SoC choice on the module. The Compute module addresses the application requirements of segments including industrial automation, smart devices, gateway systems, automotive, medical, robotics and retail POS systems.

Two form factors are defined as **SOM-CA** and **SOM-CB** with a maximum of four 100 pin Connectors. The X1 connector is mandatory on all SOMs. The defined interfaces are shown in the table below.

<div class="double-scroll" markdown="1">

|             Feature             |         X1          |            X2            |        X3         |         X4          |
| :-----------------------------: | :-----------------: | :----------------------: | :---------------: | :-----------------: |
|         SOM Management          |          1          |                          |                   |
|              UART               |          1          |                          |                   |          2          |
|               I2C               |          2          |                          |                   |          2          |
|               I2S               |                     |    1+1(mux with PCIe)    |                   |  1(mux with SATA)   |
|              GPIO               |                     | 6(mux with Analog Audio) |         7         | 7(mux with ADC/SPI) |
|               SD                |          1          |                          |                   | 1(mux with UHS-II)  |
|               SPI               |          2          |                          |                   |          2          |
|               CAN               |          1          |                          |                   |      2(1 mux )      |
|            MIPI CSI             |                     |     1(mux with DSI)      | 4(1 mux with DSI) |                     |
|            MIPI DSI             | 1(DSI/eDP/LVDS mux) |     1(mux with CSI)      |  1(mux with CSI)  |                     |
| MIPI Audio (SLIMbus, SoundWire) |                     |   1(mux with DSI/CSI)    |                   |                     |
|            Ethernet             |                     |            1             |         1         |                     |
|              PCIe               |                     |          1 (x4)          |                   |       1 (x4)        |
|       USB (2.0) OTG/HOST        |          2          |            1             |                   |          1          |
|       USB (2.0/3.0) HOST        |          1          |        1 (Device)        |                   |          1          |
|            SmartCard            |                     |     1(mux with PCIe)     |                   |                     |
|              HDMI               |                     |                          |         1         |                     |
|              SATA               |                     |            1             |                   |   1(mux with I2S)   |
|               eDP               | 1(DSI/eDP/LVDS mux) |                          |                   |                     |
|              LVDS               | 1(DSI/eDP/LVDS mux) |                          |                   |                     |

</div>

- The Wireless specification designs a SOM for interchangeable wireless module applications, supporting standard and/or proprietary wireless standards such as 802.15.4, BLE, WiFi, LoRa, NB-IoT, LTE-M etc. The specification is designed to enable evolution that will support multiple products and future wireless standards.

The two form factors are defined as **SOM-WA/SOM-WB** with the below pinouts to the specification.

<div class="double-scroll" markdown="1">

| Pin |             Signal              | I/O |     | I/O |               Signal               | Pin |
| :-: | :-----------------------------: | :-: | :-: | :-: | :--------------------------------: | :-: |
|  1  |       GPIO1/PWM1/UART_TxD       | I/O |     | I/O |     GPIO20/PWM20/ADC4/I2S_SCK      | 20  |
|  2  |       GPIO2/PWM2/UART_RxD       | I/O |     | I/O | GPIO19/PWM19/ADC3/I2S_MCLK/PCM_CLK | 19  |
|  3  |  GPIO3/PWM3/UART_RTS/SD_DAT[0]  | I/O |     | I/O |  GPIO18/PWM18/ADC2/I2S_WS/PCM_FS   | 18  |
|  4  |  GPIO4/PWM4/UART_CTS/SD_DAT[1]  | I/O |     | I/O |  GPIO17/PWM17/ADC1/I2S_D0/PCM_DO   | 17  |
|  5  |   GPIO5/PWM5/SPI_CS/SD_DAT[2]   | I/O |     | I/O |  GPIO16/PWM16/ADC0/I2S_D1/PCM_DI   | 16  |
|  6  |  GPIO6/PWM6/SPI_MOSI/SD_DAT[3]  | I/O |     | I/O |   GPIO15/PWM15/I2C1_SDA/USB_D_P    | 15  |
|  7  | GPIO7/I2C0_SDA/SPI_MISO/SD_CMD  | I/O |     | I/O |   GPIO14/PWM14/I2C1_SCL/USB_D_N    | 14  |
|  8  | GPIO8/I2C0_SCL/SPI_SCLK/SD_SCLK | I/O |     | I/O |            GPIO13/SWCLK            | 13  |
|  9  |              RESET              |  I  |     | I/O |            GPIO12/SWDIO            | 12  |
| 10  |               GND               |     |     |     |                VDD                 | 11  |

</div>

With the publication of the specifications, Linaro is also launching two 96Boards Compute SOM designs with Rockchip and Beiqicloud - TB-96AI and TB-96AIoT - and a 96Boards SOM Carrier Board.  TB-96AI features the latest high-performance AI processing chip RK3399Pro while the TB-96AIoT is equipped with the RK1808 AIoT chip with ultra low power consumption. The 96Boards Compute SOM designs are available for purchase today from [Beiqicloud.com](https://www.bearkey.com.cn/en/).

### TB-96AI

The TB-96AI has an integrated neural network processor NPU, computing power of up to 3.0 Tops, and offers compatibility across a variety of AI architectures. It can be combined with the backplane to form a complete industry application motherboard, and be applied to various embedded artificial intelligence fields. The SOM design has the following characteristics:

{% include image.html path="/assets/images/blog/TB-96AI.jpg" alt="TB-96AI Front image" %}

#### Super Performance Processor

The architecture of Arm dual-core Cortex-A72+quad-core Cortex-A53 is adopted. The main frequency is up to 1.8 GHz and it integrates Mali-T860 MP4 quad-core graphics processor.

#### Ultra-high AI power NPU

Integrating AI Neural Network Processor NPU, supporting 8Bit/16Bit operation, and with computing power of up to 3.0Tops, it can meet various AI application needs such as vision, audio and so on.

{% include image.html path="/assets/images/blog/TB-96AI-back.jpg" alt="TB-96AI Back image" %}

#### Powerful Hard Decoding Ability

Supports DP1.2, HDMI 2.0, MIPI-DSI, eDP multiple display output interfaces, dual-screen co-display/dual-screen heterodyne, 4K VP9, 4K 10bits H265/H264 and 1080P multi-format (VC-1, MPEG-1/2/4, VP8) video decoding, 1080P (H.264, VP8 format) video coding.

#### Supports multiple AI frameworks

Compatible with multiple AI frameworks, the design supports TensorFlow Lite/Android NN API, AI software tools support import, mapping and optimization of Caffe / TensorFlow models, allowing developers to easily use AI technology.

#### Rich Interfaces

{% include image.html path="/assets/images/blog/rich-interfaces.png" alt="Rich Interfaces (Interface function table." %}

### TB-96AIoT

Equipped with the RK1808 AIoT chip, 22nm process, ultra low power consumption with Independent NPU and AI computing power of up to 3.0Tops, the TB-96AIoT also provides rich interfaces and strong scalability:

{% include image.html path="/assets/images/blog/TB-96AIoT-dimensions.png" alt="TB-96AIoT Dimensions Image" %}
{% include image.html path="/assets/images/blog/TB-96AIoT-chip.png" alt="TB-96AIoT Chip functionality breakdown image" %}
{% include image.html path="/assets/images/blog/TB-96AIoT-performance.png" alt="TB-96AIoT Performance Image" %}

## 96Boards SOM Carrier Board

The 96Boards SOM Carrier Board is  compatible with both the TB-96AI and TB-96AIoT. It is designed to suit different markets and demonstrates how easy it is to support multiple different SOMs.

{% include image.html path="/assets/images/blog/som-carrier-boards-image.png" alt="SoM Boards + Carrier Boards Img" %}

{% include image.html path="/assets/images/blog/96Boards-SoM-Carrier-Board-Angle.png" alt="SoM Board and Carrier Board Image" %}

{% include image.html path="/assets/images/blog/96Boards-SoM-Carrier-Board-adjusted.png" alt="Carrier Board Breakdown Image" %}

### About Linaro

Linaro leads collaboration in the Arm ecosystem and helps companies work with the latest open source technology and accelerate deployment of Arm-based solutions. The company has over 300 engineers working on more than 70 open source projects, developing and optimizing software and tools, ensuring smooth product roll outs, and reducing maintenance costs. Work happens across segments including datacenter & cloud, edge & fog, IoT & embedded, consumer, machine intelligence, telecom & networking, autonomous vehicles, and high performance computing. Linaro is distribution neutral: it wants to provide the best software foundations to everyone by working upstream, and to reduce non-differentiating and costly low-level fragmentation. The effectiveness of the Linaro approach has been demonstrated by Linaro’s growing membership, and by Linaro consistently being listed as one of the top five company contributors, worldwide, to Linux kernels since 3.10.

To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro engineering work is open to all online. To find out more, please visit [https://www.linaro.org](/) and [https://www.96Boards.org](https://www.96Boards.org/).

### About Beiqicloud

Beiqicloud is 96Boards Compute SoM Lead partner, which is also the most powerful solution design and manufacturer of Rockchip SOC platform. The supporting manufacturers have passed ISO9001-2008 、ISO14001-2004、OHSAS18001-2001. Please contact sales@beiqicloud.com for business cooperation. For more information about SoM board and Carrier board, please visit [http://www.beiqicloud.com](https://www.bearkey.com.cn/en/)

About Rockchip and ToybrickRockchip is China’s leading fabless semiconductor company and has been honored with China Chip Awards for 12 times. Since its establishment, Rockchip is committed to providing technical innovation and prompt support to fuel successful growth for customers. Being a pioneering IC design company, Rockchip offers comprehensive and professional end-to-end SoC (system-on-chip) for AI, smart voice, IPC, fast charger, tablet, IPTV/OTT-Box, ARM PC, embedded applications, VR, robot, drone, image processor, CVR, Internet of Things (IoT),  smart audio products etc.Toybrick, Rockchip’s AI development platform, integrates software and hardware development into one platform. In terms of hardware, Toybrick provides various series of development platforms and reference designs to satisfy different user groups. For software, it offers stable system, rich development tools, and series of AI cases and open source communities.Toybrick is aiming at providing efficient, convenient and stable services, enabling developers to quickly develop AI applications, accelerating the process of industry application development, and improving the whole industry ecology. To find out more, please visit [http://t.rock-chips.com](http://t.rock-chips.com/portal.php)