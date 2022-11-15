---
layout: post
title: "The Challenges of Abstracting Virtio "
description: In this blog we talk about the challenges of abstracting Virtio.
  Read the blog to find out more.
date: 2022-11-15 04:46:14 +00:00
image: /assets/images/content/virtualization-image.png
tags:
  - VIrtIO abstraction camera
  - VirtIO
  - Virtualization
  - Project Stratos
  - Cloud Native Development
category: blog
author: alex.bennee
---
One of the hats I wear is as the lead for [Project Stratos](https://linaro.atlassian.net/wiki/spaces/STR/overview) which was our virtualisation pathfinder project where we explored approaches to implementing VirtIO devices. VirtIO offers a way to simplify hardware support by decoupling the main guest operating system from having to include drivers for every possible device it might need to interact with in its build. The nitty gritty details of talking to the actual hardware can be kept in a separate Virtual Machine (VM) which helps lower the complexity of distributing the main OS.

We've had a [couple](https://linaro.atlassian.net/wiki/spaces/STR/pages/28765880340/2022-09-30+Project+Stratos+Meeting+notes) of [meetings](https://linaro.atlassian.net/wiki/spaces/STR/pages/28771778789/2022-10-14+Project+Stratos+Meeting+notes) in the project to try and identify some potential areas of work and for this blog post I'd like to discuss some thoughts about virtio-camera.

## A quick primer of VirtIO

I've talked about this in detail in a [previous blog post](https://www.linaro.org/blog/virtio-work/) but in short VirtIO provides a generic abstraction of a piece of hardware. It does this in a way which is friendly to hypervisors by providing a programming model that works hard to avoid expensive "exit" events. The model has been so successful that VirtIO based block and network devices are standard in the world of cloud computing. A VirtIO enabled Linux kernel shouldn't need to worry about the details of the underlying hypervisor to access virtual disks and the network because it can use the same frontend driver either way.

VirtIO also avoids trying to cater to the lowest common denominator by having a well defined feature discovery and negotiation interface. This means a more functional hypervisor can expose additional features to the host which will only be taken advantage of if the guest is suitably up to date.

## virtio-camera, cloud native and HALs

One potential VirtIO device that has been on our radar since the inception of Project Stratos is that of the virtio-camera. It's been mentioned to us by a number of our member companies as something they are interested in while at the same time it's been hard to gather a consistent set of requirements and use cases. I think it is an interesting study in how different sectors of the IT industry can look to a technology to solve different problems.

Let's first talk about the camera. My history with computer vision goes all the way back to the 80s and the height of the "silicon fen" personal computer boom. Perhaps unsurprisingly my parents were true technology geeks and we had one of the very first hobbyist digital vision systems. It was born from observation that if you removed the protective cover off a dynamic RAM chip and periodically reset the memory you could detect photons. Add a basic lens to focus the image and you could record a simple black and white image into your computer. If you took 3 images with red, blue and green filters you could even re-constitute that image into something approximating colour.

How digital photography has changed over my lifetime! We now take it for granted that we carry around multi-megapixel sensors in our pocket capable of High Dynamic Range (HDR), slow motion (i.e. high frame rate) combined with advanced computational photography to bring the best out of our hasty snaps. As well as the cameras in our phones we are seeing more in the wider environment, from the ubiquitous Closed Circuit TV (CCTV) to cars where the simple reversing camera has multiplied into arrays of sensors tracking hazards and preparing for the oncoming automation of driving. This wide spectrum of use cases does
raise the question of can a VirtIO device satisfy a diverse range of requirements?

### Cloud Native development

One of the use cases of VirtIO is enabling something called Cloud Native development. This is a model of development being driven by organisations like SOAFEE who argue for a [portable software stack](https://www.arm.com/blogs/blueprint/cloud-native-automotive-development) which can be used in the cloud and in their final embedded edge processing location. Rather than re-build your application in a test harness to run through simulations in the cloud you target a virtual platform. From the applications point of view there is no difference between consuming data from your corpus of test data or from a real  live sensor. As a result you can have greater confidence in your solution as it is transferred from its cloud environment to the actual edge hardware it will run in.

There are a number of challenges that need to be addressed for this model of deployment. Most importantly perhaps is that when deployed in edge hardware the performance meets acceptable latency and bandwidth requirements. No one will want to build a safety critical system on something that occasionally delays an image or delivers images in a stuttered fashion. It will also be no good if an algorithm trained on glorious 4k images from the cloud first encounters shakier lower resolution images when first run in the actual car.

### HAL Abstractions

Because the features of a phone are so tied to the features of the individual System on a Chip (SoC) that it is based on, there is a very direct relationship between the SoC and the kernel a system can ship. While initiatives like [Project Treble](https://arstechnica.com/gadgets/2017/05/google-hopes-to-fix-android-updates-no-really-with-project-treble/) have tried to reduce the delta  between the vendor supplied kernel and a common baseline kernel there is still a lot of vendor code in the systems kernel. This makes upgrading phones difficult - especially when upgrading the rest of the mobile OS itself. Newer versions of Android often require newer versions of the kernel to support other user facing features. If the vendor doesn't update the kernel it locks the phone out of receiving newer versions of the OS.

One approach to avoiding this sort of dependency is to isolate vendor code into so called driver domains. These are small virtual machines (VMs) with direct access to parts of the hardware. They would be provided by the chipset vendor and would drive the actual HW and  present it as a VirtIO device to a generic kernel that hosts the main OS image. Assuming there are no bugs in the back end you are then free to upgrade your generic kernel accessing this Hardware Abstraction Layer (HAL) provided by the vendor code.
Abstraction is of course a mainstay of software engineering. Our entire computing experience is built on abstractions all the way down to the microcode running on CPUs which present an abstraction of the particular CPU architecture that the silicon implements. The challenge of course is avoiding an implementation which just caters to the lowest common denominator.

As I mentioned earlier modern camera chipsets offer a whole range of features. Aside from the variety of sensor sizes, optics and performance characteristics there is a slew of smart processing that can be done before the image is delivered to the user. For example there may be a secondary depth sensor which can provide the data required to create a [bokeh](https://en.wikipedia.org/wiki/Bokeh) effect to make the foreground element "pop". For mobile applications a virtio-camera would be unlikely to fly if the latest and greatest features provided by fancy new hardware never get exposed to the user.

VirtIO already provides a feature negotiation mechanism which allows for a device to evolve as time goes on. However, virtio-camera presents an exceptional challenge given the range of features already available and the potential for variation in the details of each implementation. Some devices may be able to alter their configuration for each individual  frame captured and some may need a more classical configuration step before starting the capture process. Some features may only be available in a per-frame or a global context.

### Upstream first?

The VirtIO framework does make it easy to implement new devices because a lot of the decisions about how to represent things are made for you. When I did my last [survey of reserved IDs ](https://op-lists.linaro.org/archives/list/stratos-dev@op-lists.linaro.org/thread/VPLKMBWYB4PG2X5MTACUIW5SBGBP5HVF/#QD5W5PPV4XTG7TB7QJYQRYKI75SQS3YC)I found a lot of device implementations that lived in downstream forks of kernels. I've no doubt there are many more devices that exist only on some proprietary hypervisors to solve a particular niche issue. Generally these are code-only implementations without the accompanying changes to the [VirtIO specification](https://docs.oasis-open.org/virtio/virtio/v1.2/csd01/virtio-v1.2-csd01.html#x1-64100019) and as a result no discussion on the list about the relative merits of design choices made.

One of the core approaches to Project Stratos was to leverage VirtIO as a standard interface to enable portability of guests between hypervisors. While open up-streamed drivers are an important part of this it is secondary to having a well thought out and openly developed
specification. As a result for every backend and driver we helped get upstream we also made sure the corresponding specification was also ratified and voted on.

It is important when developing this specification to get input from as many areas as possible. We don't want early decisions in what will be an evolving iterative design to preclude implementing the advanced features that cameras will continue to gain during the oncoming years. So if you have an interest in bringing a standardised VirtIO interface to life please come and talk to us and bring your experience and feedback. We have learnt a lot during our work on [Project Stratos](https://linaro.atlassian.net/wiki/spaces/STR/overview) and hope to continue collaborating in this space in the years to come.