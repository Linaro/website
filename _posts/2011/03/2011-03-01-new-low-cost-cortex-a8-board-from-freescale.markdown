---
author: linaro
date: 2011-03-01 05:00:00+00:00
layout: post
link: /blog/hardware-update/new-low-cost-cortex-a8-board-from-freescale/
slug: new-low-cost-cortex-a8-board-from-freescale
title: New low-cost Cortex A8 board from Freescale
wordpress_id: 3372
categories:
- blog
tags:
- Hardware
- board
- community
- CortexA8
- Freescale
- i.MX53
---
Freescale has taken the opportunity of the [Embedded World exhibition in Nuremberg](https://www.embedded-world.de/en) to announce its first low-cost board based on its i.MX53 ARM® CortexTM- A8 processor family, priced at 149 US dollars, and called the i.MX53 Quick Start board.

Technical details and a picture can be found on the [LinuxDevices.com](https://www.nxp.com/docs/en/user-guide/SABRE6QUADPLUSQSG.pdf) website:
<table border="0" class="table-responsive">
<tbody >
<tr >

<td markdown="1" >
- Processor: Freescale i.MX535 at 1GHz
- Dialog DA9053 Power Management chip
- Memory: 1GB of DDR3 RAM for maximum performance
- Flash expansion: 1 full-size SD/MMC slot; 1 microSD slot
- Storage: 7-pin SATA connector
- Display:
+ VGA connector
+ LVDS connector
+ Parallel LCD or HDMI add-on card via expansion connector
+ Supports 4.3-inch, 24-bit 800 x 480 display with 4-wire touchscreen.
- Networking: 10/100 Ethernet port
</td>

<td >
</td>

<td markdown="1" >
- Other I/O:
+ 2 high-speed USB ports
+ 1 micro-USB device port
+ Mic and headphone jacks
+ SPDIF audio via HDMI add-on card
+ Expansion connector for LCD, HDMI, camera CSI, I2C SSI, SPI
+ JTAG connector + DB-9 UART port
- Other features: 3-axis Freescale accelerometer, Freescale SGTL5000 audio codec
- Power: 5V, 2A with a wall adaptor.
</td>
</tr>
</tbody>
</table>

{% include image.html name="freescaleimx53quickstart.jpg" alt="Freescale i.MX53 Quickstart board" %}

<!-- more -->

According to Freescale, this board will be supported by the [imxcommunity.org](http://imxcommunity.org/) community, and by a number of hardware and software partners. See [Freescale's press release](http://media.freescale.com/phoenix.zhtml?c=196520&p=irol-newsArticle&ID=1532783&highlight&tid=rsspr&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+FSL_PRESSRELEASES+%28Freescale+Press+Releases%29).

Linaro welcomes this release of a new low cost, high performance board from one of its founding members, especially designed and priced for the embedded Linux development community. In particular, this is the first board of this kind offering a SATA connector for high performance I/O, making it perfect to develop high performance, low power multimedia and data processing system prototypes. The 3-axis accelerometer will allow to develop tablet and smartphone designs (for example) and with JTAG, a DB-9 serial port and an expansion connector to interface with the outside world, this board has everything community and system developers need to create real products.

Linaro will help these embedded Linux community and product developers by supporting this new board in its upcoming releases. “Linaro is excited to be enabling the i.MX53 Quick Start board to use the latest and best open source code and tools” said Stephen Doel, COO of Linaro.  “We are working on delivering Linaro Evaluation Builds for Android 2.3 and 3.0 as well as Ubuntu 11.04 for this board". "These products will enable developers and manufacturers to rapidly evaluate the i.MX53 SoC and will accelerate product development.” added George Grey, Linaro's CEO.

Stay tuned on our website for new release announcements, and join our [linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev) mailing list if you are interested in contributing to this work.
