---
layout: post
title: Upstreaming support for Qualcomm PCie modems
description: In this article, we cover upstreaming support for Qualcomm PCie
  modems. With further changes due in Linux 5.13 release, using a Qualcomm PCIe
  modem just got easier.
date: 2021-06-01 04:35:36
image: /assets/images/content/technology-3389917_1920-1-.jpg
tags:
  - WWAN
  - Qualcomm
  - Linux kernel
  - PCIe modem
  - open source
category: blog
author: loic.poulain
---
# Introduction

**Wireless Wide Area Network (WWAN)** is a form of wireless network that relies on telecommunication technologies such as 3G or 4G cellular networks for transferring data, specifically IP packets, and thus offering internet access over mobile networks. From the user side, such a network is accessed via a ‘modem’ implementing one or several of the cellular protocols.

The arrival of fifth-generation mobile networks, known as 5G, promises an even more connected world, with billions of devices, from smartphones through connected vehicles to tiny IoT gadgets. With Linux being the major OS in the embedded world, Linux support for WWAN modems is obviously a strategic topic.

Qualcomm manufactures cellular modems such as the Snapdragon X24 (LTE) or X55 (5G) and these are integrated into various OEM WWAN modules. In the last 18 months, Linaro, in collaboration with multiple OEM modem manufacturers and with Qualcomm, has worked on upstreaming PCIe-based Qualcomm 4G/5G modems support in Linux. With further changes due in the Linux 5.13 release, using a Qualcomm PCIe modem just got a lot easier.

# Linux WWAN support for USB modems

For some time now, USB has become a de-facto solution to connect to WWAN/modems. WWAN support in Linux has therefore been mostly driven by USB-based modems integration.

Unlike other wireless technologies like WiFi or Bluetooth, the Linux kernel does not offer a unified high level API and device model for WWAN modems. A USB WWAN device is usually enumerated as a set of multiple logical devices, such as:

* TTY serial devices (/dev/ttyUSB*, /dev/ttyACM*) transporting ‘legacy’ AT commands and data via point-to-point protocol (PPP).
* cdc-wdm character devices (/dev/cdc-wdm*) to transport modern binary based control protocols such as USB-IF MBIM (Mobile Broadband Interface Model) or QMI (Qualcomm Modem/MSM Interface).
* Network devices (e.g. wwan0 iface) used to transport data through USB interfaces optimized for network packet transfer, and implemented as CDC-ECM, CDC-NCM, RNDIS or CDC-MBIM USB classes,
* Virtual CD-ROM, usually hosting Windows/MacOS drivers and user manual (e.g. /dev/sr1 block device)…

Though all the logical devices contribute to the WWAN/feature as a whole, they are each registered separately. This collection of devices varies depending on the manufacturers and models, and is possibly extended with additional interfaces for debug, firmware upgrade, GPS/GNSS and so on.

Below is the kernel log output on Telit FN980 USB modem connection, it shows several devices being registered:

{% include image.html path="/assets/images/content/kernel-log-output-on-telit-fn980-usb-modem-connection.png" alt="Kernel log output on telit fn980 usb modem connection" %}

This heterogeneous and relatively raw interfacing scheme does not make modems straightforward to use from the user side. For example, the wwan0 network interface is not useful alone and requires configuration using specific commands from one of the control ports (e.g. cdc-wdm0) to pass traffic. Thankfully, some userspace tools have been developed to handle that complexity, such as ModemManager, which

* Identifies which logical devices (tty, net, cdc-wdm…) must be collected together to expose a consolidated view of the ‘WWAN device’ to the user.
* Abstracts control protocols such as AT, QMI, MBIM to offer a high level unified control interface over DBUS (e.g. enable, connect, scan…).

To accomplish this, ModemManager relies on protocol libraries (libqmi, libmbim), sysfs hierarchy, uevents and vendor plugins.

# Qualcomm PCIe modems

Increasingly laptop manufacturers and industrial OEMs are adopting modem designs based on PCIe. For the same generation, PCIe offers higher speed, lower latency and lower power consumption than USB equivalent, making it perfectly suitable for 5G high speed requirements (up to 20Gbps). Unfortunately, PCIe modems are also known as non working under Linux, suffering lack of proper drivers and infrastructure.

PCI differs from USB because PCI devices do not offer high level operations and concepts such as USB transfers, sub-devices and endpoints/pipes (bulk, interrupt, control). Instead, PCI drivers are built on top of low level operations such as memory-mapped I/O and DMA (direct memory access) transfers, making them generally more complex.

To provide something similar to USB interfaces and endpoints, Qualcomm created the **modem-host interface (MHI)**, which can be used by a host to communicate with any PCIe modem implementing this interface. MHI devices are able to expose multiple features and protocols over a set of predefined **channels**. Internally MHI is based on shared memory and ring buffers and defines device states, transfer procedures, channels, low power modes, etc. With this solution, Qualcomm modems can therefore be easily tuned to route the higher level data and control protocols (IP, AT, MBIM…) over either USB or PCIe/MHI transport buses.

# The Linux MHI stack

As already described by my colleague, Manivannan Sadhasivam, [the MHI core stack landed in Linux in 2020 (drivers/bus/mhi)](https://www.linaro.org/blog/mhi-bus-support-gets-added-to-the-linux-kernel/). Without getting into too much detail, MHI has been implemented as a standard **Linux bus**, where each physical device is registered as a ‘MHI bus controller’ and on which the logical channels are exposed as logical ‘MHI devices’ that are in turn bound to ‘MHI client drivers’.

{% include image.html path="/assets/images/content/the-linux-mhi-stack.png" alt="The Linux MHI Stack" %}

Interestingly, the first user of this stack was the ath11k PCI WiFi driver. Although the M in MHI stands for ‘Modem’, MHI only defines the infrastructure for communicating with logical devices and not which features or protocols must be exposed by these devices.

With the MHI bus supported in mainline, Adding support for Qualcomm modems mostly consisted in implementing the missing lower (bus) and upper (functions) layers, respectively the **PCI MHI controller driver** and the **MHI client drivers.**

# Adding support for PCIe MHI modems - mhi_pci_generic

We started with the PCI MHI controller driver, and implemented it as a generic PCI driver compatible with all Qualcomm PCIe/MHI modems. This driver, [mhi_pci_generic](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/bus/mhi/pci_generic.c), is a tiny piece of code that essentially retrieves and prepares the PCI device resources (interrupts, memory mappings…) before registering a new MHI controller (e.g. mhi0). Once registered, the MHI core handles all the MHI operations and the PCI driver only acts as a physical bus abstraction layer for register accesses or low power transitions.

We were pleased to find that no changes, except for a few bug fixes, were needed in the MHI core. Once the mhi_pci_generic driver had registered with the MHI core we were able to see the discovered channels and transfer our attention to drivers for the logical devices.

For example, a Telit FN980 5G PCIe device exposes the following MHI TX/RX channels:

* IP_HW0: Is the path for network data, which is handled on the modem side by the IPA (IP hardware accelerator).
* QMI: A protocol for controlling the modem that is exactly the same as for the USB variant but is instead routed over PCIe/MHI.
* DIAG: is the modem diagnostic interface (also known as QCDM).

{% include image.html path="/assets/images/content/mhi-core.png" alt="MHI Core" %}

As any other bus, MHI devices (controllers, clients) are represented under sysfs hierarchy:
$ ls /sys/bus/mhi/devices
mhi0 mhi0_DIAG mhi0_IP_HW0 mhi0_QMI

# MHI WWAN network driver - mhi_net

The IP_HW0 device represents the data path and is a logical link to the Modem IP accelerator (IPA), and by extension to the cellular network. We Implemented a new **netdev driver**, mhi_net to perform the bridging between the MHI layer (MHI transfers) and the Linux network stack (IP packets).

{% include image.html path="/assets/images/content/mhi-wwan-network-driver-mhi_net.png" alt="MHI WWAN Network Driver MHI Net" %}

# MHI WWAN control driver - mhi_wwan_ctrl

For the control/debug channels (QMI and DIAG), we decided to expose them in a similar way as it is done in the cdc-wdm driver for USB modems, that is, rawly exposed to userspace via character devices. This way, adding MHI support for user tools already supporting USB modems would be as simple as changing a device name.

Initially, we ported the mhi_uci driver from the downstream MHI stack, which is a simple shim character driver converting device file read/write to MHI transfers, thus allowing raw MHI bus access to user space. However this driver never found its way to the Linux mainline due to concerns it would become a ‘generic backdoor interface’ for ‘everything qualcomm’, bypassing the usual kernel abstraction interfaces to transfer any opaque/vendor protocols. Maintainers were also reluctant to have yet another bus specific chardev for QMI (and MBIM…), and expressed their willingness to have more standardisation and unification for WWAN/modems in the kernel.

After some LKML back and forth to refine things, we migrated to a better solution by splitting our work into two parts. The first of these was a generic new [WWAN subsystem](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/net/wwan/wwan_core.c), which is a hardware agnostic framework managing and exposing WWAN devices and their control ports. The second is a MHI specific WWAN port driver, [mhi_wwan_ctrl](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/net/wwan/mhi_wwan_ctrl.c), which registers to the newly created WWAN subsystem and performs the MHI bus adaptation. This way, the WWAN framework can be used with any further WWAN drivers.

{% include image.html path="/assets/images/content/mhi-wwan-control-driver-mhi_wwan_ctrl.png" alt="MHI WWAN Control Driver MHI WWAN Cntrl" %}

# WWAN made easy

Linux 5.13 will be the first release including all the changes required to support any SDX55 or SDX24 based modem. It has been successfully tested with Telit FN980m and Quectel EM120GR-L modules, but more are coming and we already see other vendors adding their PCI IDs.

To support this in userspace we also added WWAN/MHI support to ModemManager. This is currently only available in the development branches but we anticipate it being included in the ModemManager 1.18.

With all those pieces, using a QCOM PCIe modem is as easy as with ethernet or WiFi networks. NetworkManager, either through command line utility (nmcli) or the graphical network settings, can be used to manage the ‘GSM’ connection:

{% include image.html path="/assets/images/content/the-gsm-connection.png" alt="The GSM Connection" %}

For WWAN, all you need is the APN, and optionally a pin to unlock the sim card.

{% include image.html path="/assets/images/content/instructions-on-how-to-use-wwan.png" alt="Instructions on how to use WWAN" %}

Enjoy!

For more information on Linaro and the work that we do, [contact us here](https://www.linaro.org/contact/).