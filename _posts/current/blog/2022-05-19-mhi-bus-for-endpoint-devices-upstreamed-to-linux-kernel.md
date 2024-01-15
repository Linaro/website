---
layout: post
title: MHI bus for Endpoint devices upstreamed to Linux Kernel
description: "In this blog, Mani talks about how the Modem Host Interface
  (MHI) bus support for Endpoint devices has been upstreamed to the Linux
  kernel."
date: 2022-05-19 08:58:54 +01:00
image: /assets/images/content/Tech_Background.jpg
tags:
  - MHI
  - Modem Host Interface
  - Qualcomm
  - Upstreaming
  - Linux Kernel
category: blog
author: manivannan.sadhasivam
---
At the start of the year 2020, I wrote [a blog on MHI bus support for Host devices](https://www.linaro.org/blog/mhi-bus-support-gets-added-to-the-linux-kernel/). Two years later I am back with an update on the MHI bus support for Endpoint devices. The timeline tells the story on its own: **Upstreaming is hard but it is always important to do so**.

# What is Modem Host Interface (MHI)?

[My previous article](https://www.linaro.org/blog/mhi-bus-support-gets-added-to-the-linux-kernel/) gave a brief introduction to the Modem Host Interface (MHI) bus and its implementation in the Linux kernel. Even though the article focused on the host side implementation, the concept remains the same. So I won’t go over the details again here. But here is a short summary on MHI:

MHI is the communication protocol used by the host machines to control and
communicate with the Qualcomm modems/WLAN devices over any high speed physical bus like PCIe. MHI is represented as a [bus device](https://www.kernel.org/doc/html/latest/driver-api/driver-model/bus.html) in the Linux kernel with the client drivers getting bind to a set of bidirectional channels exposed as MHI devices. There are also MHI controller drivers that define the channels used by the endpoint devices like modems/WLAN chipsets. The MHI controller driver is the one that sits between the MHI bus stack and the transport bus like PCIe.

{% include image.html path="/assets/images/content/modem-host-interface-mhi-.png" alt="Modem Host Interface - MHI" %}

# Upstreaming the MHI bus for endpoint devices

## Motivation

The MHI host implementation has been used widely by various OEMs for connecting their modems to a host machine. These days, adding the support for a modem device may take only a couple of lines to the [PCI_GENERIC ](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/bus/mhi/host/pci_generic.c#n449) MHI host controller driver.

So while the MHI host stack continued to receive updates ever since it got merged, Linaro started to add the MHI bus support for endpoint devices in parallel. The push for the MHI endpoint support came from Qualcomm as their vision was to run the full upstream software stack on the modems. The full upstream software stack includes the Linux Kernel and the userspace components.

Once the entire software stack is upstreamed, the OEMs can pull all the latest
versions of the software components directly from the respective repositories and provide updated firmware to their customers seamlessly. This will greatly help in building more secure modems with fewer or no software vulnerabilities.

## Preliminaries

Compared to our MHI host support work, the endpoint work got more pieces to stick together apart from MHI.

We took [Qualcomm Snapdragon X55 5G modem](https://www.qualcomm.com/products/technology/modems/snapdragon-x55-5g-modem) as the target endpoint device and got the below development platforms:

1. SDX55 MTP sponsored by Qualcomm.
2. [Telit FN980m](https://www.telit.com/devices/fn980-and-fn980m-data-cards-support-5g/) EVB sponsored by Telit.
3. [T55 development kit](https://www.thundercomm.com/product/t55-development-kit-5g-sub-6ghz/) purchased from Thundercomm.

With these development platforms in place, we started upstreaming the SoC
support for the [SDX55 chipset](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/arch/arm/boot/dts/qcom-sdx55.dtsi) and the board support for these platforms [[1](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/arch/arm/boot/dts/qcom-sdx55-mtp.dts)][[2](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/arch/arm/boot/dts/qcom-sdx55-telit-fn980-tlb.dts)][[3](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/arch/arm/boot/dts/qcom-sdx55-t55.dts)].

Below is the list of features upstreamed by Linaro apart from the MHI endpoint bus support:

1. GCC
2. Pinctrl
3. NAND
4. BAM DMA
5. USB PHY and controller
6. Watchdog
7. Interconnect
8. CPUFreq
9. Remoteproc
10. PCIe PHY and Endpoint controller

Once the base support was done, we started looking into the MHI endpoint stack support for SDX55.

## MHI Endpoint (MHI EP) stack

We decided to take inspiration from the MHI EP bus support added by Qualcomm in their [downstream Linux kernel](https://www.google.com/url?q=https://git.codelinaro.org/clo/la/kernel/msm-5.4/-/tree/LE.UM.5.3.2.r1-06300-SDX65.0/drivers/platform/msm/mhi_dev&sa=D&source=docs&ust=1652956639476410&usg=AOvVaw1sP-TfkLpDQVi2zfqYHJmT). After going through the driver, it was evident to us that the stack needed some heavy refactoring to fit
upstream. It was mostly because the downstream stack was tightly coupled to their standalone [PCIe endpoint controller](https://git.codelinaro.org/clo/la/kernel/msm-5.4/-/tree/LE.UM.5.3.2.r1-06300-SDX65.0/drivers/platform/msm/ep_pcie) and [IPA](https://git.codelinaro.org/clo/la/kernel/msm-5.4/-/tree/LE.UM.5.3.2.r1-06300-SDX65.0/drivers/platform/msm/ipa_fmwk) drivers.

To break the dependency and make it easy to upstream, we followed the same code organization as the MHI host. Below is the final representation we came up with following the [MHI host](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/bus/mhi/host) architecture:

{% include image.html path="/assets/images/content/mhi-endpoint-stack.png" alt="MHI Endport Stack" %}

As the figure illustrates, the MHI EP stack sits in between the MHI EP controller driver and MHI EP client drivers. The MHI EP controller driver modelled as a [PCI Endpoint Function driver](https://www.kernel.org/doc/html/latest/PCI/endpoint/index.html) (PCI
EPF) registers itself as **mhi_epN** device with the MHI EP stack and handles all the interactions with the underlying bus like PCIe. It takes care of operations such as enumeration, MSI generation, event handling, and read/write to the host memory.

On the other hand, the MHI EP client drivers like QRTR, IPA, WWAN, etc,... register themselves as **IPCR, IP_HW0, QMI** devices with the MHI EP stack and take care of transmitting the protocol specific packets between the host and the baseband processor.

## Internal Address Translation Unit (iATU)

So once we got settled with the MHI EP architecture, the next hurdle for us was communicating with the host over PCI. The Qualcomm downstream MHI EP code used the DMA engines available in IPA and eDMA peripherals. But unfortunately, IPA driver support was not ready for SDX55, and eDMA peripheral was not enabled in the SoC itself.

So we were left with only one option and that's iATU (internal Address Translation Unit) embedded into the [Designware PCIe IPs](https://www.synopsys.com/designware-ip/interface-ip/pci-express.html) from Synopsys. iATU takes care of mapping the host memory onto the endpoint local memory through which the endpoint devices can do Memory Managed Input/Output (MMIO) operations to it. So even though we cannot use Direct Memory Access (DMA) for reading/writing to the host memory, we can at least do plain readl/writel operations from the Linux kernel by treating it as an MMIO region.

But soon we came up against the limitations imposed by iATU and one of them was the availability of only 8 outbound/inbound windows. The iATU uses outbound windows to map the host address space in the endpoint and inbound windows to map the endpoint address space in the host (mostly BAR region).  In the MHI EP stack, we needed to map many host buffers in the endpoint memory. But since there were only 8 windows available, we decided to keep only a couple of mappings constant and dynamically map the rest. This solved the problem for us.

The other issue was the alignment requirement of the host address for mapping using the outbound window. The configuration of the PCIe IP in SDX55 required the host address to be 4k aligned. Initially, we tried to use the **bounce buffer** technique in the MHI host stack to allocate the 4k aligned buffers. But that proved to be costly as using the bounce buffer takes up extra cycles to [copy the buffers](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/bus/mhi/host/main.c#n191) in the host. Then finally Linaro Engineer, **Dmitry Baryshkov** pitched in and shared a trick that allowed us to map the host buffers without alignment requirements.

Below is the illustration of the trick. Let's assume that the endpoint needs to map the host address starting from 0x40000100 with a size of 4KB (0x1000) to its local memory at 0x10000000:

1. Find out the offset of the host address that when substracted gives the 4k aligned address.

	`offset = 0x40000100 % 0x1000; /* offset = 0x100 */`

2. Allocate the endpoint memory including the offset along with the actual size.

	`buffer = alloc_addr(0x100 + 0x1000); /* alloc_addr(offset + actual size) */`

3. Map the host address starting from the aligned address to the total
   size including the offset.

	`map_addr(buffer, 0x40000100 - 0x100, 0x100 + 0x1000); /* map_addr(buffer, address - offset, offset + actual size) */`

4. Finally we can do memcpy to the actual host address by adding the offset to the buffer with the actual size.

	`memcpy_fromio(0x10000000, buffer + 0x100, 0x1000);`

In the above steps, we mapped the 4k aligned address of the unaligned address, then copied only the memory that we were interested in. This proved to be a nice and elegant hack to work around the iATU limitation.

## Putting all the pieces together

Once we were able to get the MHI EP stack up and running, we added all the pieces together. That included
an MHI EP controller driver modelled as a PCI EPF driver and the MHI EP client driver modelled as a
networking driver utilizing the **IP_SW0** channels. With all these drivers in place, we got SDX55 enumerated
as a modem in the host and got the network devices **mhi_swip0** to appear at both host and endpoint
representing the **IP_SW0** channels. Through the network device, we were able to communicate between host
and endpoint over networking utilities such as **ping, ssh, iperf,** etc,...

## Data connectivity

Even though the MHI EP stack was fully up and running, we were not able to establish data connectivity with the modem baseband processor yet. For that, we needed IPA driver support enabled in SDX55 and integrated with the MHI EP stack. I can confirm that the work has already started and will hit the mailing list soon.

## Upstreaming work

After we thoroughly tested the stack on both SDX55 and Snapdragon 8 Gen 1 (SM8450) based development platforms, the [initial MHI EP patches](https://lore.kernel.org/all/6fc89860-9eea-630c-f193-272bf436ad81@linaro.org/T/) were posted to the [MHI mailing list](https://lore.kernel.org/mhi/). It has gone through multiple revisions (thanks to the reviews from both Qualcomm and Linaro developers, especially Linaro Senior Engineer Alex Elder for his in-depth review of the patches). And once the patches got enough reviews, we finally [submitted the patches](https://lore.kernel.org/lkml/20220405135754.6622-1-manivannan.sadhasivam@linaro.org/) to Char Misc maintainer, Greg KH for inclusion in the next kernel release v5.19. Later, he [pulled the patches](https://lore.kernel.org/lkml/YmfVSe1JHbXTtZLG@kroah.com/) to his char-misc-next tree.

# What's next?

As said above, the work is not finished yet. Our top priority is to add support for IPA and eDMA to the MHI EP stack and provide data connectivity to the host machines using the [WWAN drivers](https://www.kernel.org/doc/html/latest/networking/device_drivers/wwan/index.html). At the same time, we will continue to optimize both the MHI host and EP stacks for reducing the latency and increasing the throughput. For more information, check out some of our previous blogs and sessions on this topic:

* [Linaro connect talk on upstreaming the Qualcomm modems](https://www.google.com/url?q=https://resources.linaro.org/en/resource/JW762ZTT7Qv3jtiY5UDF2U&sa=D&source=docs&ust=1652956936204910&usg=AOvVaw3HNFHvVzjoTFiAkL4gIrU3)[](https://www.linaro.org/blog/upstreaming-support-for-qualcomm-pcie-modems/)
* [Blog on upstream host support for Qualcomm modems](https://www.linaro.org/blog/upstreaming-support-for-qualcomm-pcie-modems/)
* [Linaro connect talk on IPA](https://resources.linaro.org/en/resource/P9mzGkAzt5cJZHe2zAGtUp)
