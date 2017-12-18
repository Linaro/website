---
author: linaro
date: 2011-02-15 18:00:00+00:00
layout: post
link: /blog/hardware-update/snowball-new-cortex-a9-community-board-from-st-ericsson/
slug: snowball-new-cortex-a9-community-board-from-st-ericsson
title: Snowball - New Cortex A9 community board from ST-Ericsson
wordpress_id: 3373
categories:
- blog
tags:
- Hardware
- board
- community
- CortexA9
- ST-Ericsson
---
Barcelona, Mobile World Congress, Feb. 15, 2011

At Linaro, we are pleased to relay the announcement by ST-Ericsson of the Snowball board, a new low cost, low power and high performance board for the embedded Linux community, based on their Nova A9500 dual Cortex A9 processor and the MALI 400 GPU from ARM.

This board was designed for the needs of both the embedded Linux community developers, and professional developers as a basis for prototypes and custom designs. I've just had a very interesting talk with Stephane David, the CEO of CALAO Systems, the company which designed the board.

First, here are pictures:

{% include image.html name="ResizedImage600441-snowball1.jpg" alt="Snowball Connectors" %}

{% include image.html name="ResizedImage600466-snowball2.jpg" alt="Snowball Connectors" %}


And then, technical details:

<table border="0" class="responsive-table table-responsive">
<tbody >
<tr >

<td markdown="1">
- ARM Dual Cortex A9 @ 1GHz,
- 4 / 8GByte e-MMC,
- 1GByte LP-DDR2,
- 1x Micro-SD,
- 1x RTC Battery Backup,
- 1x HDMI Full HD,
- 1x Ethernet 10/100Mbits,
- 1x CVBS Video OUT,
- 1x Audio OUT,
- 1x Audio IN,
- 1x USB OTG HS (480Mbits),
- 1x DC IN +5V,
- 1x Li-Ion Battery Charger
</td>

<td >
</td>

<td markdown="1">
- 1x Serial Port (RS232 / Over USB),
- 1x JTAG Connector,
- 1x MiPi34 Debug Connector,
- 1x IEEE 802.11 b/g/n WLAN,
- 1 x Bluetooth 2.1+EDR (Ex. Antenna),
- 1 x GPS (Ex. Antenna),
- 1x 3 Axis Accelerometer,
- 1x 3 Axis Magnetometer,
- 1x 3 Axis Gyrometer,
- 1x Pressure sensor,
- 3x Expansion Connectors (FSMC,
HSI, Audio, MiPi CSI / Camera, LCD,
MiPi DSI, UART, SPI, I2C, GPIO).
</td>
</tr>
</tbody>
</table>
<!-- more -->

Another nice feature is the board's ability to run with only USB power, though a regular 5V power supply will be needed to use WIFI, Bluetooth and expansion boards. Last but not least,  there is a battery to keep system time. Since this battery is rechargeable, it will never need replacing.

The board that is shown in Barcelona is the Product Development Kit (PDK) version, and will be sold at 300 USD. It contains all the connectors that product developers will need.

Another version of the board will be available soon: the Software Development Kit (SDK). It will target software developers and hobbyists with less budget, and will be sold at 200 USD only, thanks to the removal of some of the expansion connectors. Anyway, except for these connectors, both board versions will have exactly the same chips, and their components are already shielded against EMI (Electro Magnetic Interference), RFI (Radio Frequency Interference) and ESD (Electro Static Discharge). Stephane David added that all the components have been selected for their availability in distribution channels. The intent is to make it easy to turn the Snowball into a real product.

The board shown in Barcelona already has a functional Linux BSP, and Ubuntu, Meego and Android filesystems are demonstrated. The bootloader is U-boot so far, but plans are to port Barebox to it for faster boot time. Stephane also highlighted that Linaro engineers took care of developing the low-level software and optimizing it for the Nova A9500’s ARM dual
Cortex A9-based architecture.

This board initially targets two families of Consumer Electronics devices: Internet tablets (an extension board with a 3G modem will be released soon), as well as Set-Top Boxes (an extension board with amongst others an infrared receiver will also be released for this kind of application).

A new website has been created to host the community for this new platform: [http://www.igloocommunity.org](http://www.igloocommunity.org). That's where sources and binaries will be released.

At Linaro, we welcome this new member of the Cortex A9 chip family, and will support this board in the upcoming releases that we produce every 6 months. Perhaps not in the 11.05 release which is only 3 months away, but most probably in the 11.11 one. The ST-Ericsson landing team will take care of mainlining its Linux BSP.

The board will be sold on the [http://www.calao-store.com/](http://www.calao-store.com/) website. All technical details will be found on the CALAO Systems website, and on the Igloo Community website. By the way, did you notice that Linux is no longer mentioned in recent press releases? Look at [ST-Ericsson's announcement](http://www.stericsson.com/press_releases/Igloo_Snowball.jsp) for example. I conclude that the operating system choice is getting obvious now...
