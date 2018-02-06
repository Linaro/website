---
author: eric.auger
categories:
- blog
date: 2016-02-29 23:08:58
description: While PCIe passthrough (the process of assigning a PCIe device to a VM,
  also known as device assignment) is supported through a mostly architecture-agnostic
  subsystem called VFIO, there are intricate details of an ARM-based system that require
  special support for Message Signaled Interrupts (MSIs) in the context of VFIO passthrough
  on ARM server systems.
excerpt: While PCIe passthrough (the process of assigning a PCIe device to a VM, also
  known as device assignment) is supported through a mostly architecture-agnostic
  subsystem called VFIO, there are intricate details of an ARM-based system that require
  special support for Message Signaled Interrupts (MSIs) in the context of VFIO passthrough
  on ARM server systems.
layout: post
link: /blog/core-dump/kvm-pciemsi-passthrough-armarm64/
slug: kvm-pciemsi-passthrough-armarm64
tags:
- Core Dump
- ARM servers
- kernel
- Linux
- Linux on ARM
- MSI
- PCIe
- qemu
- VFIO
title: KVM PCIe/MSI Passthrough on ARM/ARM64
wordpress_id: 10013
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="core-dump" url="https://wiki.linaro.org/CoreDevelopment" %}

While PCIe passthrough (the process of assigning a PCIe device to a VM, also known as device assignment) is supported through a mostly architecture-agnostic subsystem called VFIO, there are intricate details of an ARM-based system that require special support for Message Signaled Interrupts (MSIs) in the context of VFIO passthrough on ARM server systems.


# Message Signaled Interrupts


MSIs are an alternative to wire based interrupts. A device using MSIs does not need a dedicated line to the interrupt controller. Instead, to trigger interrupts a device simply writes at a specific memory address belonging to a piece of HW that can generate interrupts as a result of the memory write.  Such hardware is typically referred to as an MSI controller. The MSI controller derives an interrupt ID from the written message.

Thus, the MSI-enabled device must be programmed with:

  * the address to write to
  * and a payload

# ARM MSI Controllers

This chapter gives a brief introduction of 2 ARM MSI controllers, the GICv2m and the GICv3 ITS. We purposely present a simplified overview. Please refer to the [references](https://docs.google.com/document/d/19-ZLE_xXKbebXKysIrAhmpXIdcRz6BjJlhP4NNWom8Y/edit#heading=h.p2pt38fekl4d) for more details.

## GICv2M

The GICv2m widget contains one or more MSI frames. Each MSI frame is wired up to a set of GIC SPI wires (shared peripheral interrupt). MSI frames should not target the same SPI IDs for isolation purpose.

{% include image.html name="KVM-blog-image-1.jpg" alt="KVM blog image 1" %}

From the CPU perspective each MSI frame is 4kB wide and contains some info registers telling the base and number of associated SPI IDs and the MSI_SETSPI_NS 32-bit register.

The MSI_SETSPI_NS is also referred to as the doorbell. Writes to this register trigger SPI to the GIC. The data payload allows to select the triggered SPI ID.

The GICv2M does not require any functional programming since the SPIs are statically assigned to each MSI frame.

Separate MSI frames are provisioned for interrupt isolation purpose. Each frame is supposed to target separate SPI ID windows. Devices attached to separate MSI frames have different SPI ID domains. Of course MSI frame access must be restricted by the bus topology, an IOMMU, or by other means. On the other hand, a system with a single MSI frame cannot do HW IRQ isolation between devices allowed to access that single MSI frame.

{% include image.html name="KVM-blog-image-2.jpg" alt="KVM blog image 2" %}

## GICv3 ITS


GICv3 supports a compatibility mode where a similar mechanism as GICv2m is used. But more importantly it supports the Interrupt Translation Service (ITS) mechanism. The ITS exposes a single 64kB MSI frame. This MSI frame contains the GITS_TRANSLATOR register (ITS doorbell register). This is the address to be written when a device wants to trigger an interrupt. The ITS implements a translation mechanism that takes as input the eventid passed in the MSI data payload, a device id (conveyed out-of-band, typically on the AXI user bits) and outputs an LPI id. LPI stands for Local Peripheral Interrupt. The GIC HW takes this LPI ID as input.

As opposed to the GICv2M, the ITS must be configured by software before it is used. For example, translation tables need to be programmed before any MSI translation can succeed:




  * A device table entry must exists per deviceid, pointing to a device interrupt translation table


  * An entry must exist in the device interrupt translation table for each eventid the device is likely to produce. This entry basically tells which LPI ID to trigger (and the CPU it targets)

{% include image.html name="KVM-blog-image-3.jpg" alt="KVM blog image 3" %}


Interrupt translation is also supported on Intel hardware as part of the VT-d spec. The Intel IRQ remapping HW provides a translation service similar to the ITS. The difference is that the intel implementation looks more like a true IOMMU in the sense the translation process uses the MSI address as input as well the MSI data payload. On ARM the deviceid is conveyed out of band.

So on x86 there is not a single doorbell address MSI messages are written to. Instead each device writes at a different address. This address is within  the 0xFEEX_XXXXh range and bits 14:0 and bit 2 of the upper 32-bit of the address encode the deviceid (handle) used by the translation process.

For that reason the IRQ remapping HW is abstracted by IOMMU drivers.  On ARM, ITS is abstracted by irqchip driver.


# KVM PCI/MSI passthrough, x86/ARM Differences


This chapter explains why the current VFIO integration (QEMU VFIO PCI device/ kernel VFIO PCI driver) does not work for ARM.

When a device is assigned to a guest, it is unbound from its native driver and bound to the VFIO-PCI driver. A prerequisite for using VFIO in full feature mode is to have an IOMMU downstream to the device. Indeed The VFIO driver API eventually allows the user-space to set up DMA mappings between the device IOVA space and user-space virtual memory. If no IOMMU mapping does exist for a given IOVA, the related DMA access fails with an IOMMU abort. IOMMU allows DMA access isolation.

In the virtualization use case, The QEMU VFIO device takes care of mapping all the guest ram region physical addresses to allow them to be accessed by the assigned device. However only the RAM regions are mapped, meaning the peripheral register spaces are not mapped.

On x86 this does not bring any issue since MSI write translation hit within a special 1MB physical address window [FEE0_0000h - FEF0_000h]. Those transactions target the APIC configuration space and not DRAM, meaning the downstream IOMMU is bypassed. So there is no need to IOMMU map the MSI transaction addresses.

On ARM however the MSI transactions towards the doorbell are conveyed through the IOMMU. Therefore an IOMMU mapping must exist. This is similar on PowerPC.

Without changes to the VFIO subsystem, MSIs simply cause IOMMU aborts because no mapping is defined between the address used by the device (IOVA) and the physical address for the MSI frame including the doorbell register.

The goal of the ongoing work is to create the needed IOMMU mappings for MSI write transactions to eventually reach the hardware MSI frame.


# Assigned device MSI Setup


This chapter describes how an MSI is setup for an assigned device. First we discuss the VFIO legacy implementation (upstreamed implementation working for x86). Then we explain the adaptations needed to make it functional on ARM/ARM64.


## Legacy Implementation


VFIO decouples the MSI configuration of the physical PCIe device from the configuration performed by the guest driver.

Practically the MSI message (address/data) programmed by the guest are not used to program the actual physical PCIe device. PCIe configuration space accesses performed by the guest are trapped by VFIO/KVM. The MSI address never is used. The data payload computed by the guest matches a virtual SPI ID and not a physical SPI ID.

Instead, when the user-space sets IRQ signalling up (VFIO_DEVICE_SET_IRQ ioctl), the host VFIO PCI driver retrieves MSI vectors from the host MSI sub-system. Therefore, it programs the assigned PCIe devices with an MSI message composed by the host msi-parent MSI controller.

Then the MSI forwarding follows that path:

host computed MSI message -> host computed physical SPI ID -> eventfd -> guest computed virtual SPI ID


## Requested adaptation for ARM


When the VFIO PCI driver programs the assigned physical PCIe device with an MSI message composed by the host, we need to replace the MSI message address (the doorbell host physical address) by an IOVA, mapped onto this doorbell physical address.

So we need to identify an IOVA that is not already used (ie. not an IOVA matching any guest RAM region GPA). The choice, then, is to either (1) use an IOVA known to the guest (in its GPA space), for example belonging to a virtual GICv2m or other MSI controller created and presented to the guest, or (2) just use some other IOVA, not corresponding to any RAM region.

It feels natural that user-space communicates the address of a virtual MSI controller to the guest (GICv2m single MSI frame on our case). However we saw the virtual side of MSIs and physical side are completely decoupled. Also a device may need multiple MSI frames or the host MSI controller may be different in character from the virtual one given to the guest.

So we currently choose not to use the GICv2m MSI frame GPA. Instead QEMU provides a pool of unused GPA to VFIO.

In mach-virt we have a platform bus which represents a pool of IRQ and MMIO pages. The platform bus is currently used for dynamic instantiation of sysbus devices, especially VFIO platform devices. This 32MB GPA pool with its own GPA allocator is quite well suited to provide an anonymous contiguous pool of GPA=IOVA usable to map MSI frames. This integration does not induce any change in mach-virt memory map.

We reuse the VFIO DMA MAP ioctl to pass this reserved IOVA region. A new flag (VFIO_DMA_FLAG_MSI_RESERVED_IOVA ) is introduced to differentiate such reserved IOVA from RAM IOVA. Then the base/size of the window is passed to the IOMMU driver though a new function introduced in the IOMMU API.

The IOVA allocation within the supplied reserved IOVA window is performed on-demand, when the MSI controller composes/writes the MSI message in the PCIe device. Also the IOMMU mapping between the newly allocated IOVA and the backdoor address page is done at that time. The MSI controller uses a new function introduced in the IOMMU API to allocate the IOVA and create an IOMMU mapping.

So there are adaptations needed at VFIO, IOMMU and MSI controller level. The extension of the IOMMU API still is under discussion. Also changes at MSI controller level need to be consolidated.


# Interrupt Safety


When an MSI enabled device is assigned to a guest we need to guarantee it cannot trigger MSIs that correspond to interrupt IDs of devices belonging to the host or other guests. Indeed once a device gets access to an MSI frame, shared with others, nothing prevents a malicious user-space driver to trigger DMA requests within that region. This can lead to denial of service attacks.

On the figure below we can image device #0 is used by the host while devices #1 and #2 are assigned to a guest.

{% include image.html name="KVM-blog-image-4.jpg" alt="KVM blog image 4" %}

## Interrupt Safety with GICv2m

On GICv2m the standard way to implement interrupt isolation is to support several MSI frames and make sure guests are assigned with separate MSI frames (host and each guest must have separate MSI frames). This is due to the fact the GICv2m does not support interrupt translation, also known as IRQ remapping (Intel naming).

Also even with multiple MSI frames, an SR-IOV PCI device attached to a PCI host controller would have a single MSI parent frame. We could not have one VF (virtual function) assigned to one guest and another assigned to another guest for security reasons.

Since the HW does not support IRQ remapping, the host kernel would need to check that devices attached to a VFIO group do not share an MSI frame with devices outside of the group. Performing such a check in software involves extending the VFIO notion of group viability. This would bring a significant design complexity and the choice was made to consider MSI passthrough without IRQ remapping capable msi-parent as unsafe.

If the end-user takes the risk to enable such passthrough, he must explicitly load the VFIO_IOMMU_TYPE1 module with allow_unsafe_interrupts parameter set to 1 (see the _User Perspective_ section). This is an obvious limitation, but works the same way in the x86 world.


## Interrupt Safety with GICv3 ITS


With GICv3 ITS we do not have this issue since each MSI transaction is tagged with a device-id and the device-id makes possible to separate the LPI domains. The ITS supports IRQ remapping similarly to the Intel VT-d IRQ remapping HW: MSI passthrough is safely supported and users do not need to use the allow_unsafe_interrupts parameter.


# Conclusions


Supporting MSI passthrough with KVM on ARM platforms requires changes to Linux and QEMU due to underlying differences between the ARM and x86 architectures. ARM platforms with GICv2m MSI controllers will require users to load VFIO with the allow_unsafe_interrupts parameter for MSI passthrough to work, but GICv3 ITS platforms will work with VFIO without any additional parameters.

The changes required to Linux and QEMU are currently being upstreamed by Linaro and the latest versions of the patch series are referenced below [5, 6].


## User Perspective


This chapter illustrates the assignment of 2 different PCIe devices:




  * Intel 82574L Ethernet Controller (**e1000e**)


  * Intel X540-T2 Ethernet Controller (SR-IOV capable)


on  AMD 64-bit ARM Overdrive featuring a single GICv2M MSI frame.


## e1000e Assignment


#### Host Compilation


_make defconfig_
_scripts/config -e CONFIG_IOMMU_SUPPORT_
_scripts/config -e CONFIG_IOMMU_API_
_scripts/config -e CONFIG_ARM_SMMU_
_scripts/config -m CONFIG_VFIO_
_scripts/config -m CONFIG_VFIO_PCI_
_scripts/config -m CONFIG_VFIO_IOMMU_TYPE1_
_scripts/config -e CONFIG_NETDEVICES_
_scripts/config -e CONFIG_NET_VENDOR_AMD_
_scripts/config -e CONFIG_AMD_XGBE_
_scripts/config -e CONFIG_E1000E_


#### Host PCIe Topology


_00:00.0 0600: 1022:1a00
Subsystem: 1022:1a00
00:02.0 0600: 1022:1a01
00:02.2 0604: 1022:1a02
Kernel driver in use: pcieport
**01:00.0 0200: 8086:10d3**
      **Subsystem: 8086:a01f**
      **Kernel driver in use: e1000e**_

_00:00.0 Host bridge: Advanced Micro Devices, Inc. [AMD] Device 1a00_
_00:02.0 Host bridge: Advanced Micro Devices, Inc. [AMD] Device 1a01_
_00:02.2 PCI bridge: Advanced Micro Devices, Inc. [AMD] Device 1a02_
**_01:00.0 Ethernet controller: Intel Corporation 82574L Gigabit Network Connection_**


#### Module Loading

allow_unsage_interrupts opt-in:
_sudo modprobe -v vfio-pci
sudo modprobe -r vfio_iommu_type1
sudo modprobe -v vfio_iommu_type1 allow_unsafe_interrupts=1_


#### VFIO-PCI driver binding


The following command lines unbind the native e1000e driver and bind the vfio-pci driver instead:

_echo vfio-pci > /sys/bus/pci/devices/0000:01:00.0/driver_override_
_echo 0000:01:00.0 > /sys/bus/pci/drivers/e1000e/unbind_
_echo 0000:01:00.0 > /sys/bus/pci/drivers_probe_


#### QEMU command line example

_qemu-system-aarch64 -M virt -smp 4 -m 12G -cpu host -serial stdio -display none \_
_--enable-kvm -kernel /root/VM/Image \_
_-drive if=none,cache=writethrough,file=/root/VM/ubuntu10.img,format=raw,id=guestrootfs \_
_-device virtio-blk-device,drive=guestrootfs \_
_-net none \_
**_-device vfio-pci,host=01:00.0_** \
_-append 'loglevel=8 root=/dev/vda rw console=ttyAMA0 earlyprintk ip=dhcp'_


## X540-T2 (SR-IOV capable) Assignment

#### Host Compilation


**ACS Capability Override**
PCIe ACS capability (Access Control Service) is not properly exposed on this HW.

Without any action the PF (physical function) and all the VFs (virtual functions) belong to the same iommu group. This prevents from assigning the VF since the vfio group is not viable (the PF must remain bound to the ixgbe native driver else the VFs disappear).

This problem is pretty well know on other architectures too. There is a patch available to hack and workaround the issue but this one most probably will never been upstreamed:[ https://lkml.org/lkml/2013/5/30/513](https://lkml.org/lkml/2013/5/30/513). At least it makes possible to experience SR-IOV passthrough.

After applying the patch and adding _pcie_acs_override=downstream_ to the grub cmd line the PF/VF are in separate iommu groups.

#### **ixgbe Module Addition**

Compile the ixgbe as a module (needed to turn VFs on) by adding the following options:

_scripts/config -m CONFIG_IXGB_
_scripts/config -m CONFIG_IXGBE_
_scripts/config -m CONFIG_IXGBEVF_

Host PCIe Topology
**Before SR-IOV enabling:**
**_00:00.0 0600: 1022:1a00_**
       _Subsystem: 1022:1a00_
_00:02.0 0600: 1022:1a01_
_00:02.2 0604: 1022:1a02_
       _Kernel driver in use: pcieport_
_01:00.0 0200: 8086:1528 (rev 01)_
       _Subsystem: 8086:0002_
       _Kernel driver in use: ixgbe_

**SR-IOV enabling:**

reload the ixgbe module with max_vfs parameter set to the wished number of virtual functions:

_modprobe -r ixgbe_
_modprobe ixgbe max_vfs=2_

Now the PCIe topology looks like:

_-[0000:00]-+-00.0_
          _+-02.0_
          _\-02.2-[01]--+-00.0_
                       _+-10.0_
                       _\-10.2_

_00:00.0 0600: 1022:1a00_
       _Subsystem: 1022:1a00_
_00:02.0 0600: 1022:1a01_
_00:02.2 0604: 1022:1a02_
       _Kernel driver in use: pcieport_
_01:00.0 0200: 8086:1528 (rev 01) eth4_
       _Subsystem: 8086:0002_
       _Kernel driver in use: ixgbe
_**_01:10.0 0200: 8086:1515 (rev 01)
       _**Subsystem: 8086:0002**_
       _**Kernel driver in use: ixgbevf**_
_**01:10.2 0200: 8086:1515 (rev 01)**_
      _**Subsystem: 8086:0002v**_ 
      _**Kernel driver in use: ixgbevf**_ 


#### Allow Unsafe Interrupts


_sudo modprobe -v vfio-pci
sudo modprobe -r vfio_iommu_type1
sudo modprobe -v vfio_iommu_type1 allow_unsafe_interrupts=1_


#### Physical Function Enable


The PF must be enabled before assigning the VFs.
ifconfig eth4 up


#### VFIO-PCI driver binding


unbind the ixgbevf native driver and bind vfio-pci driver instead:

echo vfio-pci > /sys/bus/pci/devices/0000:01:10.0/driver_override
echo 0000:01:10.0 > /sys/bus/pci/drivers/ixgbevf/unbind
echo 0000:01:10.0 > /sys/bus/pci/drivers_probe


#### QEMU Command line


_qemu-system-aarch64 -M virt -smp 4 -m 4096 -cpu host -serial stdio -display none \_
_--enable-kvm -kernel /root/VM/Image1 \_
_-drive if=none,cache=writethrough,file=/root/VM/ubuntu10.img,format=raw,id=guestrootfs -device virtio-blk-device,drive=guestrootfs \_
_-net none **-device vfio-pci,host=01:10.0** \_
_-append 'loglevel=8 root=/dev/vda rw console=ttyAMA0 earlyprintk ip=dhcp'_


# References




## Documents


[1] Server Base System Architecture, (SBSA): [http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.den0029/index.html](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.den0029/index.html)

[2] GICv3 architecture Specification

[3] GICv3 Software Overview, [http://infocenter.arm.com/help/topic/com.arm.doc.dai0492a/GICv3_Software_Overview_Official_Release_A.pdf](http://infocenter.arm.com/help/topic/com.arm.doc.dai0492a/GICv3_Software_Overview_Official_Release_A.pdf)

[4] Intel® Virtualization Technology for Directed I/O (Architecture Specification):  [http://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/vt-directed-io-spec.pdf](http://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/vt-directed-io-spec.pdf)


## Kernel & QEMU Series


[5] kernel series: KVM PCIe/MSI passthrough on ARM/ARM64 [https://lkml.org/lkml/2016/2/12/47](https://lkml.org/lkml/2016/2/12/47)

[6] QEMU series: [RFC v2 0/8] KVM PCI/MSI passthrough with mach-virt  [http://lists.gnu.org/archive/html/qemu-arm/2016-01/msg00444.html](http://lists.gnu.org/archive/html/qemu-arm/2016-01/msg00444.html)