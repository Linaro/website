---
layout: post
title: A closer look at VirtIO and GPU virtualisation
description: >
  In this blog we will discuss VirtIO and GPU virtualisation challenges along
  with the progress the Linaro development teams are making in this space.
date: 2023-06-21 02:16:56 +01:00
image: /assets/images/content/whatsapp-image-2023-06-21-at-14.25.03.jpeg
tags:
  - Virtualization
category: blog
author: alex.bennee
---
As projects like [Project Cassini](https://www.arm.com/markets/computing-infrastructure/edge-computing/project-cassini) and [SOAFEE](https://www.soafee.io/) (Scalable Open Architecture for Embedded Edge) are being developed to support standards-based Cloud Native Edge development/deployment environments, VirtIO is a key building block designed to enable these efficient EDGE development environments.  GPU virtualisation is one of the more complex components to enable in VirtIO.  This blog will discuss some of those challenges along with the progress the Linaro development teams are making in this space.

VirtIO based block and network devices benefit from being relatively simple abstractions which map well onto the underlying hardware. This has been helped by the many rounds of optimisation they have been through to minimise the virtualisation overhead penalty.

Graphical Processing Units (GPUs) are much harder to cleanly abstract due to the wide range of hardware that exists. Back in the simpler days of 2D graphics any particular hardware could only support a specific range of memory layouts and colour depths. As technology advanced graphics engines gained various disparate abilities to copy regions of memory, manage [sprites](https://en.wikipedia.org/wiki/Sprite_(computer_graphics)) or [rotate textures](https://en.wikipedia.org/wiki/Mode_7). The situation hasn’t gotten simpler with the advent of 3D. A modern GPU is really a special purpose processor which has been optimised to execute the large numbers of parallel calculations required to render a modern scene. It’s not surprising a lot of modern supercomputers have these number crunching pipelines at the core.

Unlike most CPUs however, the details of the GPUs execution model are often hidden from the user. Typically GPUs are either programmed with a higher level API which is then translated by a proprietary binary blob into those secret hidden instruction streams that are fed to the GPU. While there are a number of open APIs for programming GPUs that aim for portability between GPUs there are also vendor specific libraries which are tied to a particular hardware.

All this has made the virtualisation of GPUs a particularly challenging field. There are broadly two approaches that can be used: Virtual Functions and API Forwarding.

{% include image.html path="/assets/images/content/uvqt7m6lamnjq1keeecbmj4neaj4pmlbyjbulxiy_5ljptex831eqc8sbrdqqa21d1ib0agwnvwqredu58-qmhpfmmmhm5_0fq59iafwk9tudmo-foiwtwvp8noc_v4-c.jpg" alt="A 2D desktop scene being composited by glmark2-wayland" %}

## Virtual Functions

This approach is similar to what is done with other high performance virtualisation hardware where a single physical card is partitioned into a number of Virtual Functions (VF). Each VF can then be shared with a guest which then drives it directly much like it would if running as the host.

For the server space, the major GPU players (Intel, AMD, nVidia) support SR-IOV on their high end GPU cards. This uses the well established PCI partitioning to divide the VFs between the guests. However there are two challenges with GPUs aimed at the automotive and industrial market:

\- Lower number of VFs (maybe only 2, requiring abstraction)

\- Platform specific partitioning schemes

GPUs supporting VF partitioning are still fairly rare in the market and those that do exist often only support a limited split which means a fully abstracted virtual GPU is still needed to multiplex multiple guests with graphics requirements.

As these devices are often platform devices (i.e. directly mapped memory, not a PCI device) the support for assignment of these VFs needs coordination between the firmware, platform and the drivers. This complicates things from the point of view of clean abstractions.

### Software aided virtual functions

To address these limitations, various software aided approaches have been adopted to make up for the lack of pure hardware support. 

The original form of this is an extension called [Mediated Devices](https://docs.kernel.org/driver-api/vfio-mediated-device.html) (mdev)  which, hardware permitting, allows the host kernel to partition up a device. Currently the only in-kernel drivers that support this are the Intel i915 driver and one s390 crypto driver.

{% include image.html path="/assets/images/content/yhcslnejz-iglphtva4jrd3loveu_ftlrs82p8_xs5omauxlo9tf1yvyannx9uzfncgevnisijmeteuhbzb7gllq6rx3mzgwvqf56xq-8j1vcvi253fua7deb5efjm8vu.jpg" alt="Native context rendering with GPU user space in guest" %}

A more recent approach is to leverage an extension to virtio-gpu known as the [Native ](https://www.youtube.com/watch?v=9sFP_yddLLQ)[Context](https://www.youtube.com/watch?v=9sFP_yddLLQ). This re-uses the VirtIO machinery for a number of common functions but also exposes the native context directly to the guest. The guest ends up running a lightly modified version of the native GPU driver which is made VirtIO aware in combination with changes made to the rendering backend to support a custom guest/host protocol for that particular GPU.

## API Forwarding

The other approach seen in GPU virtualisation is API forwarding. This works by presenting the guest with an idealised piece of virtual hardware which closely maps onto the requirements of the shared library abstractions. The original 3D acceleration for VirtIO GPU was based on [OpenGL](https://www.opengl.org/). The device provides a virtual OpenGL device called VirGL which is based on the Gallium3D interface. This allows the guest to simply feed the device a series of OpenGL commands along with a universal GPU independent shader intermediate language. At the back end these commands are fed into [virglrenderer](https://gitlab.freedesktop.org/virgl/virglrenderer) which will then render through the host GPU.

{% include image.html path="/assets/images/content/pfun-ifuigbuep7o4fczgozkpaxs89vsyrue_jyqt-wnbos0ijdlkfxxmhx_ntp7bucaqeb-dqjarwovxsjevblmhsur7dfrr7znocacigm5gwo3pbhkgmvdmpejwfg8-.jpg" alt="API forwarding GPU specific drivers in host" %}

The main complaint against the VirGL approach is efficiency. While fine for running a smooth desktop experience, performance is well below what you would expect running directly on the host. One reason for this could be that the venerable OpenGl programming model is a little too abstract from the way modern GPUs tend to be programmed. Combined with the inevitable virtualisation overhead this exacerbates its performance problems.

A more modern API called [Vulkan](https://vulkan.org/) has been developed to replace OpenGL which is a much lower level programming API more closely aligned to how modern graphics hardware works. It also unifies graphics with compute workflows (which make up a significant use case of GPUS) under a single API. While support for Vulkan over virtio-gpu has yet to land in projects like QEMU a number of alternative Virtual Machine Monitors (VMMs) are able to use this mode to provide a more efficient virtual GPU implementation.

Finally there is a third protocol, [Wayland](https://wayland.freedesktop.org/), which doesn’t target the GPU directly but is intended for talking to a 3D enabled display server. This allows guest applications running in the guest to be seamlessly integrated with the hosts display manager. The original use case was for Linux applications in CrosVM guests to integrate with the ChromeOS host. Interestingly there are extensions to the protocol targeting [in-vehicle entertainment](https://github.com/COVESA/wayland-ivi-extension) systems. 

## Comparing the two approaches

Virtual functions look like the way forward for those wanting to wring as much performance out of their graphics hardware as possible by keeping abstractions as lightweight as possible. There is also a good security argument that by isolating a complex graphics stack in the guest domain library exploitation risks can be mitigated. GPUs by their very nature have to deal with processing lots of untrusted guest data.

However there are some disadvantages to this pass through approach. In the context of Cloud Native development the biggest problem is binding the guest code to a particular GPU architecture which means there is less portability between the cloud and edge deployments.

Also for Linaro, as a company which works predominantly with open source, adding support would require access to proprietary code spread across the stack rather than dealing with open source abstractions.

We think that some of the security concerns around the graphics stack can be ameliorated by using safer languages like Rust to write our VirtIO backends.  However it should be noted that a large chunk of the backend will still eventually end up being processed on common C libraries. One approach to mitigating the risk of exploits in the privileged host is to move the graphics backend into a separate virtual machine (sometimes called a driver domain). This way if the daemon is breached the attacker should still be contained in a relatively limited environment.

{% include image.html path="/assets/images/content/a_bb8ol4wk0__k9c7dkb-n7yv-nj28n4m8xwbkmfqhsxwi04sqkmh5rsgf_juylcklewsmcjwlom8ga8xzykabcvjafrxvfcktru53je8jzshedwxi0mupftpsx2bzyi6.jpg" alt="A 3D horse as rendered by glmark2-wayland" %}

## **How this relates to Project Orko**

[Project Orko](https://linaro.atlassian.net/wiki/spaces/ORKO/overview) is the spiritual successor to our previous virtualisation project Stratos. We are working on integrating a number of VirtIO devices into a reference SOAFEE platform to accelerate their adoption. With multimedia being a big driver of automotive workloads, having a functional GPU solution is important. Initially there are two pieces of work planned out for GPU support.

### Measuring the cost of abstraction

While there are [some](https://lists.freedesktop.org/archives/virglrenderer-devel/2018-September/001589.html) [anecdotes](https://www.collabora.com/news-and-blog/blog/2021/05/17/optimizing-3d-performance-with-virglrenderer/) about the performance of VirGL on some systems we have yet to see a comprehensive measurement of the costs of these abstractions on ARM hardware. We want to know if these newer graphics pipelines are going to be usable for handling workloads potentially as heavy as running AAA games without too much overhead.

For QEMU several groups have proposed [various](https://patchew.org/QEMU/20220926142422.22325-1-antonio.caggiano@collabora.com/) [patches](https://patchew.org/QEMU/20230312092244.451465-1-ray.huang@amd.com/) to [enhance](https://patchew.org/QEMU/20230421011223.718-1-gurchetansingh@chromium.org/) the virtio-gpu device with various extensions. We intended to help with review while also integrating those patches with QEMU’s recent [xenpvh](https://patchew.org/QEMU/20230411224746.16152-1-vikram.garhwal@amd.com/) support and start making measurements on real HW on how much each abstraction costs. We also want to explore using the CrosVM [Wayland backend](https://crosvm.dev/book/devices/wayland.html) (which uses vhost-user under the hood) and see how hard it is to integrate with QEMU’s xenpvh mode and our Xen vhost-user Frontend.

**Stand-alone virtio-gpu daemon**

While we are using QEMU to help with bootstrapping VirtIO devices in our SOAFEE platform, our vision is still very much to have stand-alone hypervisor independent daemons written in Rust utilising [rust-vmm components](https://github.com/rust-vmm). There are a number of other reasons why having a standalone daemon is useful:

* A standalone daemon is not tied to the rendering model of any particular platform (e.g. expecting a VMM to display the final renders, as it does in QEMU)
* Being able to link to a proprietary OpenGL/Vulkan library as a drop in replacement for the Mesa stack
* Take advantage of the proposed vhost-user extension with our rust-vmm traits to hide the implementation details of mapping memory and notifications on Xen (and potentially later other hypervisors)
* Without having a separate backend from the core VMM we can’t experiment with the driver domain concept I discussed earlier

\
Whether the best approach is to expand CrosVM’s Wayland implementation to support other GPU command streams or write a new backend from scratch remains to be seen. We are currently doing preparatory work in measuring the overhead of the various abstractions to help inform our future development direction.

As with most of the projects at Linaro all of our work is being done with the relevant upstream communities as well as being integrated into Linaro’s [Trusted Reference Stack](https://gitlab.com/Linaro/trusted-reference-stack/trs). You can find links to our JIRA and other presentations at the [Project Orko homepage](https://linaro.atlassian.net/wiki/spaces/ORKO/overview). If you are interested in collaborating please [email me](mailto:alex.bennee@linaro.org) and stay signed up to our blog for further updates.