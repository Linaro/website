---
author: christoffer.dall
categories:
- blog
date: 2016-06-16 18:37:46
description: While PCIe passthrough (the process of assigning a PCIe device to a VM,
  also known as device assignment) is supported through a mostly architecture-agnostic
  subsystem called VFIO, there are intricate details of an ARM-based system that require
  special support for Message Signaled Interrupts (MSIs) in the context of VFIO passthrough
  on ARM server systems.
excerpt: 'The first study of ARM virtualization performance on server hardware, including
  multi-core measurements of two popular ARM and x86 hypervisors, KVM and Xen. We
  show how ARM hardware support for virtualization can enable much faster transitions
  between VMs and the hypervisor, a key hypervisor operation. '
layout: post
link: /blog/core-dump/on-the-performance-of-arm-virtualization/
slug: on-the-performance-of-arm-virtualization
tags:
- Core Dump
- arm
- ARM servers
- KVM
- Linux
- Linux on ARM
- PCIe
- virtualization
- VM
- x86 hypervisors
- Xen
title: On the Performance of ARM Virtualization
wordpress_id: 10716
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://wiki.linaro.org/CoreDevelopment" %}


# Abstract


ARM servers are becoming increasingly common, making server technologies such as virtualization for ARM of growing importance. We present the first study(1) of ARM virtualization performance on server hardware, including multi- core measurements of two popular ARM and x86 hypervisors, KVM and Xen. We show how ARM hardware support for virtualization can enable much faster transitions between VMs and the hypervisor, a key hypervisor operation. However, current hypervisor designs, including both Type 1 hypervisors such as Xen and Type 2 hypervisors such as KVM, are not able to fully leverage this performance benefit for real application workloads. We discuss the reasons why and show that other factors related to hypervisor software design and implementation have a larger role in overall performance. Based on our measurements, we discuss changes to ARM’s hardware virtualization support that can potentially bridge the gap to bring its faster VM-to-hypervisor transition mechanism to modern Type 2 hypervisors running real applications. These changes have been incorporated into the latest ARM architecture.


# Introduction


Despite the importance of ARM virtualization, little is known in practice regarding how well virtualized systems perform using ARM. There are no detailed studies of ARM virtualization performance on server hardware. Although KVM and Xen both have ARM and x86 virtualization solutions, there are substantial differences between their ARM and x86 approaches because of key architectural differences between the underlying ARM and x86 hardware virtualization mechanisms. It is unclear whether these differences have a material impact, positive or negative, on performance. The lack of clear performance data limits the ability of hardware and software architects to build efficient ARM virtualization solutions, and limits the ability of companies to evaluate how best to deploy ARM virtualization solutions to meet their infrastructure needs. The increasing demand for ARM-based solutions and growing investments in ARM server infrastructure makes this problem one of key importance.

Linaro, in collaboration with Columbia University, present the first in-depth study of ARM virtualization performance on multi-core server hardware. We measure the performance of the two most popular ARM hypervisors, KVM and Xen, and compare them with their respective x86 counterparts. These hypervisors are important and useful to compare on ARM given their popularity and their different design choices. Xen is a standalone bare-metal hypervisor, commonly referred to as a Type 1 hypervisor. KVM is a hosted hypervisor integrated within an existing OS kernel, commonly referred to as a Type 2 hypervisor.

The detailed results of this study are to appear in the 43rd International Symposium on Computer Architecture (ISCA), a first-tier academic conference for computer architecture.


# Background


{% include image.html name="Hypervisor-designs.jpg" alt="Hypervisor designs" %}

Figure 1 depicts the two main hypervisor designs, Type 1 and Type 2. Type 1 hypervisors, like Xen, comprise a separate hypervisor software component, which runs directly on the hardware and provides a virtual machine abstraction to VMs running on top of the hypervisor. Type 2 hypervisors, like KVM, run an existing OS on the hardware and run both VMs and applications on top of the OS. Type 2 hypervisors typically modify the existing OS to facilitate running of VMs, either by integrating the Virtual Machine Monitor (VMM) into the existing OS source code base, or by installing the VMM as a driver into the OS. KVM integrates directly with Linux where other solutions such as VMware Workstation use a loadable driver in the existing OS kernel to monitor virtual machines. The OS integrated with a Type 2 hypervisor is commonly referred to as the host OS, as opposed to the guest OS which runs in a VM.

One advantage of Type 2 hypervisors over Type 1 hypervisors is the reuse of existing OS code, specifically device drivers for a wide range of available hardware. This is especially true for server systems with PCI where any commercially available PCI adapter can be used. Traditionally, a Type 1 hypervisor suffers from having to re-implement device drivers for all supported hardware. However, Xen, a Type 1 hypervisor, avoids this by only implementing a minimal amount of hardware support directly in the hypervisor and running a special privileged VM, Dom0, which runs an existing OS such as Linux and uses all the existing device drivers for that OS. Xen then uses Dom0 to perform I/O using existing device drivers on behalf of normal VMs, also known as DomUs.

Transitions from a VM to the hypervisor occur whenever the hypervisor exercises system control, such as processing interrupts or I/O. The hypervisor transitions back to the VM once it has completed its work managing the hardware, letting workloads in VMs continue executing. The cost of such transitions is pure overhead and can add significant latency in communication between the hypervisor and the VM. A primary goal in designing both hypervisor software and hardware support for virtualization is to reduce the frequency and cost of transitions as much as possible.


# Experimental Design


To evaluate the performance of ARM virtualization, we ran both microbenchmarks and real application workloads on the most popular hypervisors on ARM server hardware. As a baseline for comparison, we also conducted the same experiments with corresponding x86 hypervisors and server hardware. We leveraged University of Utah’s CloudLab installation of hundreds of ARM 64-bit HP Moonshot m400 nodes and a plethora of x86 servers for our measurements. We compared ARM measurements with Intel Xeon 2.1 GHz ES-2450 CPUs in similar configurations of RAM, disk, network, and more. All network measurements were done with 10G isolated Mellanox networking equipment.

We designed and ran a number of microbenchmarks to quantify important low-level interactions between the hypervisor and the ARM hardware support for virtualization. A primary performance cost in running in a VM is how much time must be spent outside the VM, which is time not spent running the workload in the VM and therefore is virtualization overhead compared to native execution. Therefore, our microbenchmarks are designed to measure time spent handling a trap from the VM to the hypervisor, including time spent on transitioning between the VM and the hypervisor, time spent processing interrupts, time spent switching between VMs, and latency added to I/O.

To provide comparable measurements, we kept the soft-ware environments across all hardware platforms and all hypervisors the same as much as possible. We used the most recent stable versions available at the time of our experiments of the most popular hypervisors on ARM and their counterparts on x86: KVM in Linux 4.0-rc4 with QEMU 2.2.0, and Xen 4.5.0. KVM was configured with its standard VHOST networking feature, allowing data handling to occur in the kernel instead of userspace, and with cache=none for its block storage devices. Xen was configured with its in-kernel block and network backend drivers to provide best performance and reflect the most commonly used I/O configuration for Xen deployments. Xen x86 was configured to use HVM domains, except for Dom0 which was only supported as a PV instance. All hosts and VMs used Ubuntu 14.04 with the same Linux 4.0-rc4 kernel and software configuration for all
machines. A few patches were applied to support the various hardware configurations, such as adding support for the APM X-Gene PCI bus for the HP m400 servers. All VMs used paravirtualized I/O, typical of cloud infrastructure deployments such as Amazon EC2, instead of device passthrough, due to the absence of an IOMMU in our test environment.

We designed a custom Linux kernel driver, which ran in the VM under KVM and Xen, on ARM and x86, and executed the microbenchmarks in the same way across all platforms. Using this framework, we ran seven microbenchmarks that measure various low-level aspects of hypervisor performance.


# Results


**KVM ARM Hypercall cost:** **6,500 cycles**
**Xen ARM Hypercall cost:**    **376 cycles**

As an example of our microbenchmarks, we measured the cost of a no-op hypercall, measuring a transition from the VM to the hypervisor and a return to the VM without doing any work in the hypervisor; in other words the bidirectional base transition cost of hypervisor operations. The Hypercall microbenchmark shows that transitioning from a VM to the hypervisor on ARM can be significantly faster than x86, as shown by the Xen ARM measurement, which takes less than a third of the cycles that Xen or KVM on x86 take.

We have analyze the true reasons for this difference in performance and developed and ran many more micro-level benchmarks, which can be found in the published paper about this work.

We also ran a number of real application benchmark workloads to quantify how well the ARM virtualization extensions support different hypervisor software designs in the context of more realistic workloads. The benchmarks we ran include a mix of widely-used CPU and I/O intensive benchmark workloads. For workloads involving a client and a server, we ran the client on a dedicated machine and the server on the configuration being measured, ensuring that the client was never saturated during any of our experiments. We ran these workloads natively and on both KVM and Xen on both ARM and x86, the latter to provide a baseline comparison.

{% include image.html name="Benchmark-performance.jpg" alt="Benchmark performance" %}


Again, for an in-depth discussion of these results we refer you to the published paper, but we provide two examples here: First, the low hypercall performance of Xen vs. KVM on ARM, really only shows up in an isolated fashion in the hackbench results. The reason is that hackbench heavily utilizes the Linux scheduler, which results in a high amount of rescheduling virtual IPIs, and Xen ARM benefits from its low VM-to-hypervisor transition time for handling virtual IPIs.

Second, consider the latency-sensitive network benchmark TCP_RR. This benchmark sends a single byte back and forward between a client and the server running in the VM, and shows high overhead on all platforms. To understand where this overhead is spent, we used _tcpdump_ to capture timestamps at various locations in the full software stack. These results showed us that the majority of the overhead spent on the incoming network path was between the physical machine running the VMs receiving a network packet and until the VM sees the packet, but only a relatively small part of this time was spent actually transitioning between the VM and the hypervisor. Instead, most time was spent in the networking layers of the host Linux OS for KVM, and in the Dom0 Linux OS for Xen. The same was true for the outgoing network path. The fundamental reason for Xen being slower than KVM in this case is due to Xen’s I/O model, which uses a special VM, Dom0, to handle physical network packets. Xen must perform expensive scheduling operations of the application VM and Dom0 and expensive mapping and unmapping operations to set up shared data mappings between the application VM and Dom0.

These results are surprising given a typical focus on low-level hypervisor operations performance; instead, the hypervisor design and I/O model turns out to have a significant impact on real application performance.


# Conclusions


ARM hypervisors do not necessarily benefit from a  fast transition cost between the VM and the hypervisor, because hypervisor software requires more complex interactions than simply switching between execution contexts to support common macro operations like supporting I/O. Surprisingly, KVM ARM actually exceeds the performance of Xen ARM for most real application workloads involving I/O. This is due to differences in hypervisor software design and implementation that play a larger role than how the hardware supports low-level hypervisor operations.

The new improvements to the ARM architecture, the Virtualization Host Extensions (VHE) may allow Type 2 hypervisors to bring ARM’s fast VM-to-hypervisor transition cost to real application workloads involving I/O given the combination of a simpler I/O model for Type 2 hypervisors and a VM-to-hypervisor transition cost that is potentially lower than on x86 systems.

The published papers describes more performance numbers and offer more detailed explanations as well as give an in-depth overview of VHE and how Type 2 hypervisors benefit from these architectural changes.

Christoffer Dall, Linaro Virtualization Tech Lead, will be presenting this work at ISCA 2016 in Seoul, Korea, this on Monday 20 at June 4-5pm in session 4B: NoC / Virtualization. http://isca2016.eecs.umich.edu.

**References:**

(1): [http://www.cs.columbia.edu/~cdall/pubs/isca2016-dall.pdf ](http://www.cs.columbia.edu/~cdall/pubs/isca2016-dall.pdf)