---
author: george.grey
date: 2015-03-05 14:52:40+00:00
excerpt: 'The Linaro 96Boards initiative announced at the recent Linaro Connect conference
  in Hong Kong on February 9th is an industry-first, establishing an open standard
  for low cost developer hardware from multiple SoC vendors.
  '
layout: post
link: /blog/inside-96boards-specification/
slug: inside-96boards-specification
title: Inside the 96Boards Specification
wordpress_id: 8232
categories:
- blog
---

# Inside the 96Boards Specification

  * The Specification
  * Goals

  * Linaro

  * Footprint

  * SoCs and Price Points

  * Memory

  * Storage

  * Networking Interfaces

  * Displays and Cameras

  * USB

  * UARTs

  * Audio

  * Power Supplies and Power Measurement

  * Expansion Connectors

  * Software

  * 96Boards Enterprise Edition

  * The Future


The Linaro 96Boards initiative announced at the recent Linaro Connect conference in Hong Kong on February 9th is an industry-first, establishing an open standard for low cost developer hardware from multiple SoC vendors.

The initiative has already resulted in the cost of 64-bit ARM hardware for developers dropping by more than an order of magnitude to $129 for the 96Boards [HiKey](https://www.96boards.org/product/hikey/) product from CircuitCo Inc., featuring an 8 core ARM Cortex-A53 SoC from HiSilicon with a Mali 450 3D graphics accelerator.


## **The Specification**

The 96Boards Consumer Edition [specification](https://linaro.co/ce-specification) has been published by Linaro. It defines an open platform with a required set of minimum functionality, and standardized expansion buses to enable third parties to create mezzanine boards and modules that will work on any 96Boards compliant product.

In any effort like this the final specification will represent a set of compromises and cannot meet all possible user’s requirements. So how did Linaro set about developing this specification and why were the design and functionality decisions made?


### **Goals**

At the outset the Consumer Edition was designed with 3 main use cases in mind:

  * Software developers, particularly those working on the new 64-bit ARMv8 architecture
  * Universities and the Maker community
  * Embedded product manufacturers

In addition a key attribute of the ARM ecosystem is the speed of innovation and the differentiated products that the many ARM licensees produce. A goal of 96Boards is to embrace this differentiation and innovation and not to create a “one size fits all” commoditized product. This led to the concept of a minimum set of required functionality enabling a base software platform, leaving additional features, options and interfaces to the board designer.

### **Linaro**

Linaro is a not for profit company funded by its members - these members pay substantial fees and contribute engineers to enable Linaro to be a substantial software engineering company, delivering software to its members and the community, primarily through upstreaming technology to open source projects, including the Linux kernel. Linaro is fortunate enough to have many of the ARM Cortex-A series SoC licensees as members. As a member-led organization we therefore looked to our members for input once the idea for the 96Boards initiative was formed.

The 96Boards specifications are a result of input from not only these members, but also Linaro’s technical leads and other members of the community, particularly those working on the ARMv8 architecture. Many of these inputs were naturally contradictory and many were not feasible if we were to achieve the target low cost price point, but they were all listened to, and the effort resulted in the final specifications which went through many drafts prior to completion of the first published version.

Here is some background to the choices that the technical team made for the 96Boards Consumer Edition.


### **Footprint**


For the maker and embedded product market a small physical footprint was a requirement. For example, for robots and drones/UAVs small physical size and low weight is critical. For many embedded products the smaller the computing engine the better. We therefore decided that the “standard” credit card format would be our goal (as used by Raspberry Pi, Beaglebone and other community boards). Two other design objectives were:

  * low-height footprint to enabled easy stacking of boards, or fitting into a low profile embedded product
  * Connectors/cabling from only two opposite sides to improve ergonomics and make the board easier to stack for build or test farms


This led to the standard consumer board footprint of 85x54x12mm. A compatible extended version is also defined (85x100x20mm) for those applications that require additional space for functionality and/or height (for example for RJ45 connectors for Ethernet connections).


### **SoCs and Price Points**


A key project goal was to enable SoC independence and lowest possible cost. Our design point was 32- and 64-bit mobile/embedded SoCs running mobile operating systems such as Linux/Android. It was specifically NOT a goal to compete with ultra low cost boards such as Raspberry Pi - this would be very difficult to achieve with state of the art new SoCs, and so we initially targeted products at the $70-130 retail price point.


### **Memory**


While Linux can be run in microcontrollers today, we felt that mainstream embedded Linux on 32- and 64-bit SoCs requires a minimum of 0.5GB of memory. However, we expect most implementations to provide 1-2GB DRAM (or more), especially for products targeted at Android or multi-board applications.


### **Storage**


For flexibility we make on-board flash storage optional except that we require either boot from SD Card or 8MB of bootable flash on board. We expect most implementations to use on board eMMC for OS and user storage. Given that most modern SoCs support SPI/SD controllers we require a microSD card on all implementations.


### **Networking Interfaces**


Opinions from members and the community on this topic were all over the map - from requiring none, wired, wireless or both. On most community boards this functionality has been dealt with by offering a wired ethernet port, and enabling wireless via off-the-shelf dongles that attach to USB ports (although upstream support for the variety of these devices is variable). This has the benefit of not needing expensive radio emitter testing to achieve regulatory approvals such as FCC and CE. In addition the historic cost of wireless has been significant.

On the other hand we are in the second decade of the 21st century and wireless communication is now ubiquitous. Most hobbyists, makers and education establishments have WiFi, not everyone uses ethernet now, and many embedded products rely on wireless. Furthermore the Internet of Things is driving huge interest in the development of low power devices using WiFi and Bluetooth Low Energy. We wanted to provide a platform that could be used out of the box for the development of interfaces to such devices. Finally advanced mobile SoCs typically arrive with good hardware and software support for Bluetooth and WiFi (and none for Ethernet), and pre-certified off-the-shelf low cost wireless modules are now available that address the issues of historic unit cost and remove the requirement to undergo expensive emissions testing during product development.

In the end we made the decision to require WiFi (for internet connectivity) and Bluetooth LE (for mouse, keyboard, audio and IoT type interfaces), and not to require Ethernet. Part of the rationale on Ethernet was that USB Ethernet dongles are well supported in upstream Linux and these would enable easy implementation of Ethernet connections to the required USB interfaces. For those applications which require hard wired Ethernet as opposed to the USB dongle, the extended format (85x100x20mm) allows compatibility with the standard credit card format, while providing an extra area of board real estate for additional components including RJ45 ethernet connectors.


### **Displays and Cameras**


This was another area where there were very diverse opinions and ideas. In the end we decided to make a graphics display a requirement - we expect most implementations will use HDMI, but we also allow for MHL or Displayport over USB Type C. For some embedded products a display may not be required - we are looking at addressing that in a future 96Boards IoT/Embedded platform specification.

Most modern ARM Cortex-A mobile SoCs support MIPI DSI and most also support MIPI CSI. Low end mobile chip sets (and some embedded SoCs) do not always support HDMI directly. In these cases small-footprint converter chips are available to convert from DSI to HDMI.

Looking at our three use cases (above) we recognized that:

  * Software developers and universities want to work on multi-core GPU tools and optimization. This is a good use case for many of the mobile SoCs which utilize high performance GPUs.

  * Universities and the Maker community are working on diverse products that use displays and cameras; for example vision systems, robots, and drones/UAVs.

  * Some large embedded markets require simple or intelligent displays (e.g. industrial or embedded displays in everything from white goods to elevators or airplane and car seat backs).


Our conclusion was to require a graphics display output on the 96Boards Consumer edition and to require DSI for the high speed expansion bus (see below) to enable intelligent displays. We allow for up to 2 CSI camera interfaces on the expansion bus, but make them optional for maximum flexibility. For SoCs without DSI, either an on-SoC display bus (e.g. HDMI or LVDS) will need to be converted using an external chip, or a variance could be requested (resulting in the board not being interoperable with mezzanine display boards/modules). Note that a graphics display will not be required for the 96Boards Enterprise edition.


### **USB**


USB provides great flexibility for development board users - networking, keyboards/mice, storage devices, multimedia devices etc. Most mobile SoCs include at least a single USB 2.0 OTG port so one option was to require a single port, and assume everything else could be dealt with using an external USB hub. However, requiring a hub for even basic operation of an OS - e.g. keyboard, mouse, display did not seem a good tradeoff (even if you could use bluetooth peripherals). For these reasons we made it a requirement that boards support multiple USB interfaces. We also cater for the emergence of USB 3.1 and the new Type C connector.

The 96Boards USB specification provides some flexibility to allow for SoCs that only support a single USB port. In this case, the board designer must implement a hub on the board and there may be additional limitations on USB speeds and simultaneous use of the ports depending on the hardware IP on the SoC. All such limitations must be documented. The initial HiKey board is a good example of an SoC which has these limitations, but which can still provide the required functionality in the 96Boards Consumer Edition specification.


### **UARTs**


A single UART is required on the low speed expansion interface. A second UART is optional but recommended if available. We expect early mezzanine boards to be available to developers to convert to standard 6 pin 0.1” headers for FTDI style cables. Board designers can optionally add an SoC debug UART interface on the baseboard. However, modern SoCs typically use fastboot over USB to do bringup load of an initial bootloader into external bootable flash memory, removing the need for a UART for many target users.


### Audio


There is variable audio support on modern SoCs. Given that we require a display and Bluetooth, the specification requires a minimum of display and Bluetooth audio support as well as an I2S/PCM audio interface on the low speed expansion module. Other audio functionality (including headphone/mic jacks etc.) is at the discretion of the board designer.


### **Power Supplies and Power Measurement**


Many lower cost boards and consumer products now use the ubiquitous microUSB cable to deliver 5V power to the device. However, this limits the power available to 1.8A at 5V, or 9W. On previous community boards this has provided some challenges where “brown-outs” occur because the power supply cannot deal with peak power requirements from the SoC and other board functionality. Even if alternative power supplies are available, users often think that the board is unreliable or defective, leading to a bad user experience and high levels of returns.

As more powerful SoCs become available even in the mobile space (particularly 64-bit), peak power requirements for the SoC alone can easily exceed 5W. We therefore made an early decision to not specify microUSB power and instead to require an external power supply (at least until Type C USB 3.1 connectors arrive, which are able to support up to 60W). Note that board designers can still implement microUSB power if they wish, as long as the board also supports the external power supply connection.

In order to minimize the board height profile while maximizing the power available we specified a 1.7mm center pin 5A barrel-jack connector for the power supply. While not the most common connector (larger 2.1 and 2.5mm pins are more often used) the 1.7mm connector is widely supported and adapters are easily available to convert 2.1 and 2.5mm jacks to the 1.7mm format. For an embedded product power can alternatively be provided over the low speed expansion bus.

Given the use of these boards for software development we wanted to provide good facilities for power measurement. This allows the measurement of power consumption in real time, allowing for software to be optimized for both performance and power consumption. Our original plan was to require power measurement facilities on all major power rails. However, modern SoCs use power management ICs that can be extremely sensitive to any additional component load or voltage drop on power supply lines. In addition multiple power measurement ICs can add significant cost to the end product. We therefore compromised by requiring the capability for at least one sense resistor for external power measurement while providing guidelines for the implementation of additional power measurement, and a standard physical interface allowing off the shelf low cost power measurement equipment such as the ARM energy probe to be used by developers.


### **Expansion Connectors**


Expansion connectors and networking connectivity were probably the two most debated areas, as well as the two where the opinions from the stakeholders and community were most diverse. After much discussion and input we made the following decisions:


  * To have a separate low speed and high speed connector. This allows maker, education and “low cost” usage with “pins” and expansion products using the low speed signals only (i.e expansion mezzanine boards/modules are not required to use the high speed connector if they do not need the high speed functionality). The high speed connector is then used because modern high speed buses such as CSI, DSI and HSIC need impedance matched connectors, and cannot provide reliable performance over traditional header block style connectors.
  
  * To use 1.8V as the standard expansion interface voltage. The majority of mobile/embedded SoCs use 1.8V for I/O. We looked at implementing a scheme allowing support for multiple I/O voltages but this was considered to be overly complex and costly. We also considered standardizing on 3.3V or 5V but realized that for add-on boards/modules there would then be many cases where we were level shifting up to 3.3V or 5V on the baseboard and then down again to 1.8V on the mezzanine board/module.
  
  * To use a 2mm header block for the low speed expansion module. While less popular in the maker community than 0.1” it was agreed that this would provide users with an indication that this was not compatible with other 3.3V/5V community boards and would help reduce accidental damage through trying to interface with 3.3V or 5V external levels. 2mm connector hardware is readily available through DIY and electronics distributors. We expect early mezzanine boards to support level conversion to 3.3/5V and 0.1” headers for the DIY/Maker community.

### **Software**

While anyone can use the 96Boards specification to design a product, only products that have been certified can carry the 96Boards brand or logo. Part of the specification therefore involves software expectations and requirements. The minimal requirement is designed to enable community, maker and embedded OEM use of a 96Boards product out of the box with minimal licensing requirements and integration issues. For compliance, buildable Linux kernel source code is required. Linaro will work with vendors to enable full upstream support for 96Boards branded products.

### **96Boards Enterprise Edition**


The 96Boards Enterprise Edition specification is in the final stages of development alongside an initial vendor implementation. As for the Consumer Edition, input on the specification has been sought from a variety of Linaro members and from community users. The target users include software developers in the networking and server space, as well as universities and applications ranging from build and test farms to High Performance Computing (HPC). The goal is to create a low cost standalone development board for high end SoCs, rather than an embedded server or PC chassis class product.

### **The Future**


Ongoing development and evolution of the 96Boards specifications will be the responsibility of the Linaro Community Board Group (LCG) Steering Committee, which will be made up of key stakeholders and representation from 96Boards product vendors and from the community.

We look forward to the community delivering add-on mezzanine boards and modules for the 96Boards products. A key benefit of the 96Boards initiative is that these add-on boards will be used on multiple 96Boards SoC products - for example a “maker” board with 3.3V I/O and Arduino® or mbed® compatibility, or an intelligent display module built for one Consumer Edition board will also work on another with a completely different SoC.

We are also investigating additional Platform specifications for specific segments or markets which are looking to support a diversity of SoCs from multiple vendors, such as deeply embedded/IoT, digital home and automotive applications.

We look forward to working with all interested parties as 96Boards evolves. If you are interested in early access to the Enterprise Edition specification to provide input and feedback, or have a use case for a different Platform specification please email us at [96Boards@linaro.org](mailto:96Boards@linaro.org)

{% include image.html name="george-grey.png" alt="George Grey CEO, Linaro" class="img-thumbnail" %}

George Grey
**CEO, Linaro**