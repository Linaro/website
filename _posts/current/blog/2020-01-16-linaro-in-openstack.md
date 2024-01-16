---
layout: post
title: Linaro is now part of OpenStack
description: Linaro developers now use OpenStack as a way of sharing servers’
  resources with coworkers instead of just embedded and mobile space. Read more
  here.
date: 2020-01-16 02:35:45
image: /assets/images/content/DataCenter.jpg
tags:
  - Datacenter
  - Server
  - OpenStack
  - Arm
  - Cloud
category: blog
author: Marcin.Juszkiewicz
---

During the first years of OpenStack’s existence, Arm architecture was mostly used in the embedded and mobile space. Servers were not part of the picture.

In 2011 came the AArch64 – 64-bit architecture from Arm Ltd. Two years later the first servers arrived. Distributions started supporting new architecture, several embedded/mobile devices landed in the hands of users and developers. More and more projects added support for AArch64/Arm64 architecture.

At that point, Linaro developers started looking at OpenStack as a way of sharing servers' resources with coworkers.

### The first cloud

'Liberty' was the first OpenStack release we used to run what later became Linaro Developer Cloud. There were hacks, missing features, limited permissions but it worked for us.

And not only us – through Linaro Developer Cloud we were able to provide a way for external projects to get access to AArch64 instances. Several hundreds of teams applied and got access. It was a great success.

But from a maintenance point of view it was a nightmare – far too many hacks and out-of-tree patches. So we looked at how to make it right.

### Going Kolla

In 2016 we selected the Kolla project as a way forward. An engineer was assigned (Marcin Juszkiewicz - also known as 'hrw') and cooperation started.

Fast forward half a year and we have the first testing deployments using up-to-date code from Pike release. All built from upstream code without any extra patches or hacks. Then Queens followed with more complex scenarios.

### Nova improvements

In the meantime we provided Nova with some AArch64 related improvements. UEFI got set as default bootloader and it simplified life a lot (we had to set it for each image before). As graphical console support landed in libvirt and kernel, we integrated support for it as well. And then a way to configure emulated PCI Express slots as neither aarch64/virt nor x86-64/q35 machines had enough of them by default.

### Rocky cloud

We then decided to finally upgrade Linaro Developer Cloud, saying ‘goodbye’ to Liberty and moving forward with Queens (which was later updated to Rocky). This meant huge improvement to administrators and all users. Instead of giving bare instances, users got resources which they could split into instances using Horizon or CLI tools.

### Going infra

Going with Rocky allowed us to help OpenStack developers in a new way. In 2018 a set of resources was assigned and provided to the OpenStack infrastructure team. This gave access to AArch64 nodes for CI jobs.

Running CI jobs allowed us to find new issues. Storage cluster needed improvements, network access to Chinese datacenter was a problem etc. We sorted out most of them with the move of Linaro Developer Cloud to London, UK and worked hard to get all problems resolved.

As the amount of AArch64 nodes was small (just eight), we started working on a second instance of cloud just for OpenStack use. The datacenter told us that we could only get IPv6 address space. We accepted the deal and cooperated with Kolla developers on working and testing IPv6 support in Kolla and Kolla-Ansible projects.

In the meantime we discussed with the OpenStack infrastructure team how to improve the CI situation on a small amount of nodes. To make life easier a new pipeline was created on CI – a ‘check-arm64’ one covering only AArch64 nodes. This allowed projects to add CI jobs without blocking standard set of checks. Turned out to be a good move.

### Today

Which brings us to today, January 2020. Linaro is now part of OpenStack MultiArch SIG which was just created to help projects work better on AArch64, Power and other non-x86 architectures. We are looking forward to cooperation here.

What will the future bring? More nodes for sure. And more projects using them to test how they work on 64-bit Arm servers.
