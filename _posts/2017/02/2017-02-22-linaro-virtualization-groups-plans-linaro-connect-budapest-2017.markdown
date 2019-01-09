---
amazon_s3_presentation_url: None
amazon_s3_video_url: None
author: connect
categories:
- blog
comments: false
date: 2017-02-22 20:24:44
excerpt: The Linaro Virtualization group will host several sessions at the upcoming
  Linaro Connect Budapest 2017 (BUD17) and has scheduled a wide array of interesting
  presentations.  Linaro Connect is a great time for engineers interested opensource
  to get together and to learn more about what is going on not only with Linaro but
  within the opensource community.   As part of this event the Linaro Virtualization
  team will host three sessions during the week, and Red Hat will host an additional
  session on their efforts on ARM virtualization.
image:
  featured: true
  path: /assets/images/blog/LinaroVirtualizationGroupsPlansforLinaroConnectBudapest2017.png
layout: post
link: http://connect.linaro.org/blog/linaro-virtualization-groups-plans-linaro-connect-budapest-2017/
session_id: None
session_track: None
slideshare_presentation_url: None
slug: linaro-virtualization-groups-plans-linaro-connect-budapest-2017
speakers: None
tags:
- BUD17
- Budapest
- Linaro Connect
- Virtualization
title: Linaro Virtualization Group's Plans for Linaro Connect Budapest 2017
video_length: 00:00
video_thumbnail: None
wordpress_id: 4589
youtube_video_url: None
permalink: /blog/:title/
---

The Linaro Virtualization group will host several sessions at the upcoming Linaro Connect Budapest 2017 (BUD17) and has scheduled a wide array of interesting presentations.  Linaro Connect is a great time for engineers interested opensource to get together and to learn more about what is going on not only with Linaro but within the opensource community.   As part of this event the Linaro Virtualization team will host three sessions during the week, and Red Hat will host an additional session on their efforts on ARM virtualization.

**Monday:
**_Time:  2:00-2:25pm __
_**_Title: _**BUD17-101: What's new in QEMU**
**
**_Abstract:_ This session will cover new features and additions to QEMU that happened over the last year, ranging from new KVM support features, to QEMU Multi-Threaded TCG (MTTCG) and QEMU linux-user improvements.  We will also discuss upcoming work to support LITE and IoT development and hope for a healthy discussion on requirements for members interested in these areas.

**Tuesday:
**_Time:  11:30-11:55pm __
_**_Title: _**BUD17-213: libvirt integration and testing for enterprise KVM/ARM**
**
**_Abstract:_ This technical discussion will highlight on-going Red Hat activities for the integration of an Enterprise Virtualization stack and present a vision of an enterprise guest. The status of features such as live migration, device assignment, H52PCIe topology, large guest support, and more will be presented. The status will cover the integration up to the libvirt level of the stack, and exhibit that components above libvirt can ""just work"", even when development, to this time, has been predominately focused on other architectures. As feature parity with x86 is a goal, the remaining gaps with x86 will also be highlighted.  Finally, the status of the verification efforts, specifically those involving the Avocado and kvm-unit-tests frameworks, will be presented.

**Wednesday:
**_Time:  10:00-10:25am __
_**_Title: _**BUD17-301: KVM/ARM Nested Virtualization**
**
_Abstract:_ Nested virtualization, the ability to run a virtual machine inside another virtual machine, is increasingly important because of the need to deploy virtual machines running software stacks on top of virtualized cloud infrastructure, and for prototyping and testing.  As ARM servers make inroads in various deployment scenarios, being able to support nested virtualization on ARM is a key requirement, which has been met recently with the introduction of nested virtualization support in the latest ARMv8.3 revision of the architecture.  I will present the initial effort to introduce ARM nested virtualization support to KVM/ARM, which involves adding significant logic to core KVM/ARM code, MMU support, timers, and the GIC emulation.  I will also briefly discuss a paravirtualization approsch we have used to prototype and evaluate the implementation on current ARMv8 hardware without hardware support for nested virtualization.

**Thursday:
**_Time:  10:00-10:25am __
_**_Title: _**BUD17-402: Virtual Perspectives on Cross-compilation**
**
_Abstract:_ Cross compiling (building software for one machine type on another) is something that should be familiar to most ARM developers. While kernel cross-compilation is well supported the story for user space is more complex. There are dedicated build systems for creating an entire rootfs from scratch but the overhead of learning them is quite for a single program. The usual fall-back of a linux-user chroot can be quite fiddly to set up and is often unique to each developer's set-up. Virtualisation developer Alex Bennée offers some solutions that utilise Docker's container based approach, optionally with QEMU's linux-user emulation to do builds directly from the command line. In contrast to custom chroots Docker allows the creation of well specified, rebuildable containers that can be simply deployed by new developers. He will talk about the ongoing work to make building test binaries for foreign architectures in QEMU as simple as a make invocation.


Those attending Linaro Connect are welcome to come to any and all of the sessions on Virtualization. To see the entire schedule of sessions taking place during the week please [click here](https://eu.eventscloud.com/ehome/bud17/200391688/).   If you are not able to attend you can visit the Linaro Connect resources page after the event to view recorded sessions and get access to select materials - [http://connect.linaro.org/resources/](/resources/).