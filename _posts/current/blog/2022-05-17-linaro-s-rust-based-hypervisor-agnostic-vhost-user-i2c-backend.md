---
layout: post
title: Linaro’s Rust based hypervisor-agnostic vhost-user I2C backend
description: "In this article, Viresh Kumar talks about the work Linaro is doing
  to develop hypervisor-agnostic abstract devices which enable all
  architectures. "
date: 2022-05-17 01:15:46 +01:00
image: /assets/images/content/Banner_Virtualization.jpg
tags:
  - Rust
  - ProjectStratos
  - Automotive
  - Hypervisor
  - VirtIO
category: blog
author: viresh.kumar
---
There is a growing trend towards virtualization in areas other than the traditional server environment.  The server environment is uniform in nature, but as we move towards a richer ecosystem in automotive, medical, general mobile, and the IoT spaces, richer device abstractions are needed.  [Linaro's Project Stratos](https://www.linaro.org/projects#automotive-iot-edge-devices_STR) is working towards developing hypervisor-agnostic abstract devices, leveraging virtio and extending hypervisor interfaces and standards to enable all architectures.

# An open interface for guest virtual machines

The Virtual Input/Output device (Virtio) standard provides an open interface for guest [virtual machines (VMs)](https://en.wikipedia.org/wiki/Virtual_machine). The standard provides for common devices, such as network and block storage, which have been designed for efficient performance in a paravirtualized environment.  This is achieved by minimizing the number of potentially expensive  context switches involved in any given device transaction.  The open standard provides an extensible interface that can be implemented in a wide range of environments regardless of the choice of OS.

# How does Virtio work?

Virtio adopts a frontend-backend architecture that enables a simple but flexible framework.  The backend (BE) virtio driver, implemented by the hypervisor running on the host, exposes the virtio device to the guest OS through a standard transport method, like [PCI](https://en.wikipedia.org/wiki/Peripheral_Component_Interconnect) or [MMIO](https://en.wikipedia.org/wiki/Memory-mapped_I/O).  This virtio device, by design, looks like a physical device to the guest OS, which implements a frontend (FE) virtio driver compatible with the virtio device exposed by the
Hypervisor. The virtio device and driver communicate based on a set of predefined protocols as defined by the [virtio specification](https://github.com/oasis-tcs/virtio-spec), which is maintained by [OASIS](https://www.oasis-open.org/org/).  The FE driver may implement zero or more Virtual queues (virtqueues), as defined by the virtio specification.  The virtqueues are the mechanism of bulk data transport between FE (guest) and BE (host) drivers.  These are normally implemented as standard ring buffers in the guest physical memory space. The BE drivers parse the virtqueues to obtain the request descriptors, process them and queue the response descriptors back to the virtqueue. The BE drivers are responsible for making sure the data from the transaction is processed; either by forwarding to real HW or some sort of device emulation.

The FE virtio drivers and the virtio specification itself are not concerned with where virtqueue processing happens on the host. As such descriptors can be processed in user-space or kernel-space. Virtqueue processing can be offloaded to other entities such as a user daemon or kernel module by following the vhost protocol, which is referred to as "vhost-user" when implemented in user-space. The remainder of this article presents the implementation of a hypervisor-agnostic vhost-user I2C daemon recently introduced to the rust-vmm project.

# Implementing the Virtio I2C Specification

[The Virtio I2C specification](https://github.com/oasis-tcs/virtio-spec/blob/master/virtio-i2c.tex) and a [Linux i2c-virtio driver](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/drivers/i2c/busses/i2c-virtio.c?id=3cfc88380413d20f777dc6648a38f683962e52bf) have recently been upstreamed by Jie Deng.  Both specification and driver have received further improvement from the author to enhance buffer management and support zero-length transactions.

`virtio-i2c` is a virtual I2C adapter device, which provides a way to flexibly organize and use the host I2C controlled devices from the guest.  All communication between the FE and BE drivers happens over the `requestq` virtqueue.  The I2C requests always originate at the guest FE driver, where the FE driver puts one or more I2C requests, represented by the `struct virtio_i2c_req`, on the `requestq` virtqueue.  The I2C requests may or may not be interdependent.  If multiple requests are received together, then the host BE driver must process the requests in the order they are received on the virtqueue.

```
----
struct virtio_i2c_req {
        struct virtio_i2c_out_hdr out_hdr;
        u8 buf[];
        struct virtio_i2c_in_hdr in_hdr;
};
----

```

Each I2C virtio request consists of an `out_hdr`, followed by an optional data buffer of some length, followed by an `in_hdr`.  The buffer is not sent for the zero-length requests, like for the SMBus `QUICK` command where no data is required to be sent or received.

```
----
struct virtio_i2c_out_hdr {
        le16 addr;
        le16 padding;
        le32 flags;
};
----

```

The `out_hdr` is represented by the `struct virtio_i2c_out_hdr` and is always set by the FE driver.  The `addr` field of the header is set with the address of the I2C controlled device.  Both 7-bit and 10-bit address modes are supported by the specification, though only 7-bit mode is supported by the current implementation of the Linux FE driver.  The `flags` field is used to show dependency between multiple requests, by setting `VIRTIO_I2C_FLAGS_FAIL_NEXT `(0b01), or to mark a request `READ` or `WRITE`, by setting `VIRTIO_I2C_FLAGS_M_RD` (0b10) for `READ` operation.

As described earlier, `buf` is optional.  The virtio I2C specification defines a feature for zero-length transfers, `VIRTIO_I2C_F_ZERO_LENGTH_REQUEST` (0b01). It is mandatory for both FE and BE drivers to implement this feature, which allows zero-length transfers (like SMBus `QUICK` command) to take place.

For `WRITE` transactions, the buffer is set by the FE driver and read by the BE driver.  For `READ` transactions, it is set by the BE driver and read by the FE driver after the response is received.  The amount of the data to transfer is inferred by the size of the buffer descriptor.

```
----
struct virtio_i2c_in_hdr {
        u8 status;
};
----

```

The `in_hdr` is represented by the `struct virtio_i2c_in_hdr` and is used by the host BE driver to notify the guest with the status of the transfer with `VIRTIO_I2C_MSG_OK` (0) or `VIRTIO_I2C_MSG_ERR` (1).

Please refer to [the Virtio I2C specification](https://github.com/oasis-tcs/virtio-spec/blob/master/virtio-i2c.tex) for more details.

## Rust based I2C backend

Rust is attracting a lot of interest in the Linux world due to it's strong emphasis on performance and safety.  Rust is a multi-paradigm, general-purpose programming language designed for performance and safety.  It brings a lot of benefits to the table, especially[ memory-safety](https://en.wikipedia.org/wiki/Memory_safety) and safe [computer_science](https://en.wikipedia.org/wiki/Concurrency) \[concurrency]. The Rust for Linux project is looking to bring those safety benefits to a subset of the kernels code.

[The rust-vmm project](https://github.com/rust-vmm), an open-source initiative, was started back in late 2018, with the aim to share virtualization packages.  The rust-vmm project lets one build custom [Virtual Machine Monitors (VMMs) and hypervisors](https://en.wikipedia.org/wiki/Hypervisor).  This empowers other projects to quickly develop virtualization solutions, by reusing the components provided by rust-vmm, and better focus on key differentiators of their products.  The rust-vmm project is organized as a shared ownership project, that so far includes contributions from Alibaba, AWS, Cloud Base, Google, Intel, Linaro, Red Hat and other individual contributors. The components provided by rust-vmm are already used by several projects, like Amazon's [Firecracker](https://github.com/firecracker-microvm/firecracker) and [Cloud Hypervisor](https://github.com/cloud-hypervisor/cloud-hypervisor) started by Intel.  The rust-vmm project currently hosts ~30 repositories (or Rust crates, equivalent of a C library), where each crate plays a specialized role in the development of a fully functioning VMM.

One such component provided by the rust-vmm project is the vhost-user-backend crate, which has recently made its way to crates.io, the Rust community’s crate registry.  The vhost-user-backend crate provides a framework to implement the vhost-user backend services.  It provides necessary public APIs to support vhost-user backends, like a daemon control object (`VhostUserDaemon`) to start and stop the service daemon, a vhost-user backend trait (`VhostUserBackendMut`) to handle vhost-user control messages and virtio messages, and a vring access trait (`VringT`) to access virtio queues.  A Rust trait tells the Rust compiler about functionality a particular type has and can share with other types.

The [vhost-device](https://github.com/rust-vmm/vhost-device) workspace was recently created in the rust-vmm project to host per-device vhost-user backend crates.  As of this writing, it contains the I2C device crate but others such as GPIO, RNG, VSOCK SCSI and [RPMB ](https://en.wikipedia.org/wiki/Replay_Protected_Memory_Block)are currently being developed and reviewed."

The I2C vhost-device binary-crate (binary-crate generates an executable upon
build), supports sharing host I2C busses (Adaptors) and client devices with
multiple guest VMs at the same time with a single instance of the backend
Daemon. Once the vhost-device crate is compiled with `cargo build --release`
command, it generates the `target/release/vhost-device-i2c` executable.  The
`vhost-device-i2c` daemon communicates with guest VMs over Unix domain sockets,
a unique socket for each VM.

The daemon accepts these arguments:

* \-s, --socket-path: Path of the vhost-user Unix domain sockets.  This is
  suffixed with 0,1,2..socket_count-1 by the daemon to obtain actual socket
  paths.
* \-c, --socket-count: Number of sockets (guests) to connect to.  This parameter
  is optional and defaults to 1.
* \-l, --device-list: List of I2C busses and clients in the format
  <bus>:<client_addr>[:<client_addr>],<bus>:<client_addr>[:<client_addr>]]

As an example, consider the following command:

```
----
./vhost-device-i2c -s ~/i2c.sock -c 6 -l 6:32:41,9:37:6
----

```

This will start the I2C backend daemon, which will create 6 Unix domain sockets (`~/i2c.sock0`, .. `~/i2c.sock5`), in order to communicate with 6 guest VMs, where communication with each VM happens in parallel with the help of a separate native OS thread.  Each thread, once created by the daemon, will wait for a VM to start communicating over the thread's designated socket.  Once a VM is found for the thread, the thread registers a `vhost-user-backend` instance and starts processing the requests on the `requestq` virtqueue.  At a later point in time, once the VM shuts down, the respective thread starts waiting for a new VM to communicate on the same socket path.  In the above example, the daemon is also passed a list of host I2C busses and client devices, which are shared among the VMs.  This is how sharing is defined in the daemon's implementation for now, though it can be modified later on, if required, to allow specific devices to be accessed only by a particular VM.  In the above example, the devices provided by the host to the daemon are: devices with address 32 and 41 attached to I2C bus 6, and 37 and 6 attached to I2C bus 9.  The daemon extensively validates the device-list at initialization to avoid any failures later, especially for duplicate entries.

The `vhost-user-i2c` daemon supports both I2C and SMBus protocols, only basic SMBus commands up to word-transfer though.  The backend provides the `pub trait I2cDevice`, a public Rust trait, which can be implemented for different host environments to provide access to the underlying I2C busses and devices.  This is currently implemented only for the Linux user-space, where the I2C busses and devices are accessed via the `/dev/i2c-X` device files.  For the above example, the backend daemon will look for `/dev/i2c-6` and `/dev/i2c-9` device files. The users may need to load the standard `i2c-dev` kernel module on the host machine, if not loaded already, for these device files to be available under `/dev/`.  For a different host environment, like with a bare-metal type 1
hypervisor, we need to add another implementation of the trait depending on how the I2C busses and devices are accessed.

# Conclusion

The `vhost-user-i2c` backend is truly a hypervisor-agnostic solution that works with any hypervisor which understands the vhost-user protocol.  It has been extensively tested with QEMU for example, with Linux user-space environment.There has already been [a proof of concept implementation](https://www.google.com/url?q=https://connect.linaro.org/resources/lvc21/lvc21-314/&sa=D&source=docs&ust=1652795535690140&usg=AOvVaw3w2Bq_ENjfUe6ZYzICf7mO) of servicing a virtio-block device from a Xen guest. Work is in progress to make the Xen hypervisor vhost-user protocol compatible.  Once that is achieved, we will be able to use the same `vhost-user-i2c` executable with both QEMU and Xen, for example, under the same host environment.

Support for i2c-virtio is already merged in QEMU source, boilerplate stuff to create the i2c-virtio device in the guest kernel, and the i2c-virtio device can be created in the guest kernel by adding following command line arguments to your QEMU command:

```
----
-chardev socket,path=~/i2c.sock0,id=vi2c -device vhost-user-i2c-device,chardev=vi2c,id=i2c
----

```

We have come a long way forward with the I2C vhost-user device implementation in the [vhost-device](https://github.com/rust-vmm/vhost-device) workspace. There is still a lot to do though, especially testing the same vhost-user backend executables with multiple hypervisors and adding support for more device crates. To find out more about the work we do on Rust based hypervisor-agnostic backends, check out our [Project Stratos page](https://linaro.atlassian.net/wiki/spaces/STR/overview).