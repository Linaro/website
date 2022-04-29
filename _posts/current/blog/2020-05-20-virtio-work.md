---
layout: post
author: alex.bennee
published: true
title: Working on VirtIO
description: >
  In this article, Alex Bennee provides a summary of the history of VirtIO and the areas Linaro is working on for the future. Read more here!
date: 2020-05-20 16:00:00+00:00
image: /assets/images/content/tech_background_1.jpg
tags:
  - Linaro
  - Qemu
  - VirtIO
related_projects:
  - STR
category: blog
---

{% include image.html path="/assets/images/content/virtio.png" alt="virtio diagram" %}

# Introduction

In the world of virtualisation you can present whatever hardware you
like to the guest. From the guests point of view it thinks it is
running on real hardware right down to the clunky serial ports and
legacy interfaces. However providing this sort of fidelity comes at a
cost to system as a whole. Each time the guest accesses something that
isn't really there, for example a memory mapped IO address (MMIO), the
access "trapped" by the hypervisor. The system will then context
switch to the hypervisor which will either handle the emulation of the
device or pass the event deeper into the virtualisation stack with
each additional context switch adding to the total time taken to
process the request. In real systems accessing a MMIO register may
well be slower than accessing RAM but in virtual systems it can
involve executing tens of thousands of instructions before control is
returned to the guest.

# Para-virtualisation

The concept of para-virtualisation is not a new one. A
para-virtualised guest is simply one that has been specifically built
to run in a virtual machine. It will then use a para-virtualised
interface to more efficiently access resources instead of having to
emulate an existing piece of real hardware. The [Xen](https://xenproject.org/) hypervisor was an
early example in the Linux world which required a specially built
Linux kernel image that would directly invoke a hypercall rather than
force the hypervisor to expensively emulate a processor feature. Part
of that para-virtualisation included I/O drivers split into a
front-end (in the guest kernel) and a back-end (handled by the
hypervisor).

# Enter Virt-IO

As Xen was slowly working towards up-streaming their guest support
into the Linux kernel there was other virtualisation activity going
on. In 2006 the KVM project came out and was quickly merged into the
kernel. Ozlab's Rusty Russel, who had written his own [lguest](http://lguest.ozlabs.org/)
virtualisation module, was worried that with the proliferation of
support for various hypervisors there was a danger of every one having
multiple solutions for para-virtualisation of I/O operations. His
[original virtio paper](https://ozlabs.org/~rusty/virtio-spec/virtio-paper.pdf) proposed 3 core concepts:

## Common configuration model

All Virt-IO drivers have a common driver API to deal with things like
configuration and feature negotiation. This makes them fairly
simple to understand as they are not having to deal with the vagaries
of real hardware. Drivers for real hardware often target a family of
chips but have to be careful to ensure each individual chip has it's
own quirks and workaround.

## Virtqueue transport abstraction

Virtqueues provide the mechanism by which buffers are passed between
the guest and the host. Guests will add buffers to the queue before
"kicking" the host to notify it of the waiting buffers. The host in
turn can queue buffers and trigger a callback in the guest which
function much the same way as interrupts do for real hardware.

## Replaceable transport implementation

The original paper suggested a simple ring buffer implementation but
acknowledged that there was scope for other transports to be used. By
separating the low level transport from the driver abstraction any
particular hypervisor requirements can be kept on one place without
having to address them in the drivers themselves.

# Standardisation

By 2014 VirtIO had [seen fairly wide adoption](https://lwn.net/Articles/580186/) not only in the Linux
Kernel but support in other hosts such as VirtualBox and FreeBSD's
[bhyve](https://wiki.freebsd.org/bhyve) hypervisor. In 2012 Rusty had been approached by ARM who wanted
to clear any potential IP issues before using virtio in their [Fast
Models](https://developer.arm.com/tools-and-software/simulation-models/fast-models). He realised that having the specification scattered over blog
posts and patches wasn't sustainable and it was time for a formally
published standard where any potential IP issues could be made clear.
That work was turned over to the [Organization for the Advancement of
Structured Information Standards](https://www.oasis-open.org/) who are a non-profit group concerned
with developing open standards and interoperability. Work on the
VirtIO standard is now done in the open following the OASIS guidelines
and as of now has reached the [v1.1 of the spec](https://docs.oasis-open.org/virtio/virtio/v1.1/virtio-v1.1.html).

# Collaborating for the Future

It should be clear now that VirtIO is well established as good model
for virtualised hardware - indeed you can now get real hardware which
implements the [VirtIO programming model](https://kvmforum2019.sched.com/event/TmxF/virtio-without-the-virt-towards-implementations-in-hardware-michael-tsirkin-red-hat). It has attracted the interest
of a number of our members and as Linaro is a place for collaboration
we are well positioned to get involved in the furthering of this open
standard. There are a number of areas of particular interest we are
currently looking at.

## Enabling VirtIO on new hypervisors

When virtualisation was first introduced to the ARM architecture it
was envisioned that most ARM hypervisors would be "type-1" or
"bare-metal" hypervisors. In this model the hypervisor is a very
lightweight layer at the highest privilege level which then may
offload more complex device emulation to lower privileged domains. In
Xen this is often Linux running in "dom0". While KVM's "type-2"
approach is well established in the server space there are still good
use cases for the traditional "type-1" approach. These include places
like automotive who want to ensure reliable partitioning of resources
and the mobile space where we are seeing the introduction of [secure
virtualisation](https://developer.arm.com/architectures/learn-the-architecture/armv8-a-virtualization/secure-virtualization).

To support VirtIO on hypervisors such as Xen, Google's [Hafnium](https://opensource.google/projects/hafnium) and
[Project ACRN](https://projectacrn.github.io/latest/introduction/) will require adding support for new transport layers for
carrying signalling from the guest driver to the backend as well as
the ability to share parts of the guests memory with whatever might be
providing the backend of the device. Generally thanks to VirtIO's
layered approach the front ends are entirely untouched.

## Expanding vhost-user

While the front-end of a particular piece of virtual hardware always
looks the same to the guest there are a number of ways the host can
deal with the data. The traditional approach relies on the hypervisor
or Virtual Machine Manager (VMM) terminating the VirtIO transaction
before queuing the data through the host devices. A more optimal
approach involves the guest injecting data directly into the host
kernels outgoing data streams - this is known as vhost. Finally all
VirtIO handling can be handed off to a separate user space process and
dealt with there, referred to as vhost-user.

The original driver for vhost-user was [to support high throughput
dataplanes](https://www.redhat.com/en/blog/how-vhost-user-came-being-virtio-networking-and-dpdk) such as [DPDK](https://www.dpdk.org/) which would busy-wait on queues rather than
have the overhead of interrupt based signalling. vhost-user is simply
a [protocol describing the messages](https://qemu.readthedocs.io/en/latest/interop/vhost-user.html) sent to the user space daemon to
signal that virtqueues need processing. Traditionally these drivers
have visibility of the entire guest address space to access the
virtqueues. We would like to support limiting the address space to
only the portions of the guest's address space required to do it's job.
This in turn would allow interesting architectures where the back-ends
could be separated out into their own contained virtual domains.

## Standardisation of more devices

While the original driver for VirtIO was to implement efficient
high-performance devices the simplicity of the programming model makes
it appealing as a form of Hardware Abstraction Layer (HAL). Having a
common HAL enables the individual implementation details to be kept to
a small part of the code base. For example one model could see the
main mobile OS in a virtual machine communicating with virtual
devices. The details and individual quirks would be handled by a
smaller self-contained set of components for each platform. This would
simplify the process of validating and releasing new builds of the
main OS which could help extend the software support lifetime of a
device.

Devices of interest include things like Replay Protected Memory Block
(RPMB) which provide secure storage services on phones. There is also
interest in having standardised sound and video devices for use-cases
like in-car entertainment systems. A more knotty problem involves how
to manage the power state of devices on things like mobile phone
platforms. Unlike servers phones are constantly trying to manage the
power budgets for devices against the current demand. This involves
making decisions about how much voltage a part is supplied with or
what rate it's clock is run at. We want to explore how these sort of
requirements are best dealt with in a virtualised environment.

As Linaro is an "upstream first" organisation we do our work in the
open on public mailing lists and repositories. If you are interested
please [do get in touch](https://www.linaro.org/contact/).
