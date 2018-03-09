---
author: linaro
categories:
- blog
date: 2012-12-14 16:57:30
description: The 3.7 Linux Kernel which was released earlier this week, includes many
  innovative new ARM focused features such as multi-platform, ARMv8(64-bit) and Xen
  in ARM support.
keywords: Linaro, Linux on ARM, ARM, Open Source, Linux, Kernel, 3.7 Linux Kernel,
  LEG, Linaro Enterprise Group
layout: post
link: /blog/industry-blog/the-future-of-linux-on-arm-shines-in-the-3-7-kernel/
slug: the-future-of-linux-on-arm-shines-in-the-3-7-kernel
tags:
- Community
- Industry
title: The Future of Linux on ARM Shines in the  3.7 Kernel
wordpress_id: 2105
---

The [3.7 Linux Kernel](http://kernelnewbies.org/Linux_3.7) which [was released](https://lkml.org/lkml/2012/12/10/688) earlier this week, includes many innovative new ARM focused features such as multi-platform, ARMv8(64-bit) and Xen in ARM support.


### ARM multi-platform support

ARM multi-platform support adds the ability to build a single ARM kernel image which is able to boot multiple platforms.  While not the primary goal of the Linaro kernel consolidation program, a single [zImage](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux.git;a=commit;h=9cd11c0c47b8690b47e7573311ce5c483cb344ed) from Linaro was demonstrated at [Demo Friday](http://connect.linaro.org/) during the [Linaro Connect Europe 2012 (LCE12)](http://connect.linaro.org/resources/) event in Copenhagen at the beginning of November by members of the Linaro Kernel Team, and highlights the progress which Linaro has made in regards to its kernel consolidation program.  This consolidation effort is what makes the single kernel binary possible. “A single zImage is a key ingredient for Server and as such is important to the Linaro Engineering Group (LEG).” added [David Rusling](/about/), Linaro CTO.

[Mark Orvek](/about/), Director for the Kernel Working Group at Linaro also made reference to this single zImage kernel [in a video interview](http://youtu.be/5nphAyCFCaA) at this same event.  “The ability to boot a single kernel on multiple hardware platforms within one SoC family has been available for a few years; however, what is now being added is the ability to boot a single kernel image across some of the SoC families that used to be mutually exclusive,” added  [Arnd Bergmann](/about/), Upstream Kernel Engineer at Linaro.

Much of the “thanks” for this enablement goes to Rob Herring of [Calxeda](http://silverlining-systems.com//), who contributed greatly to this effort, and his commit to 3.7 can be seen [here](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux-2.6.git;a=commitdiff;h=387798b37c8dd0ae24c0ac12ba456dd76865bca3).

Another fundamental ingredient which contributed to the ARM multi-platform inclusion comes from efforts catalyzed during the [first Linaro Connect in August of 2011](http://connect.linaro.org/).  Efforts which focused on enabling Device Tree (DT) support on ARM Platforms.  [Deepak Saxena](/about/), Tech Lead for the Linaro Kernel team summed up these efforts in a [blog post](/blog/enabling-device-tree-support-on-arm-platforms/) after that event.  Saxena notes in his post that, “Device Tree helps us move towards our goals of being able to boot a kernel on any ARM machine and having a cleaner code base; however, it is only part of the solution. The ARM kernel port has been under development for over a decade and in that time has accumulated a lot of cruft that does not make it possible to build a kernel that supports heterogeneous SOCs.” Now fast forward to the 3.7 Linux Kernel release and you can see how Linaro’s collaboration with member organizations and upstream engineers through the enablement of DT for ARM platforms helped accelerate multi-platform support for ARM.

Bergmann describes the three global efforts in the ARM kernel this way, “Device Tree helps to consolidate code for boards within one SoC family and allows you to boot on future ones without kernel changes. Multi-platform helps to consolidate across SoC families. Moving platform code out into drivers supports the other two and allows to consolidate code across CPU architectures.”


### ARMv8(64-bit) Support


“The newest ARM CPU model, ARM v8, adds 64-bit memory addressing capabilities for first time for the ARM world. The new 64-bit CPUs can run 32 bits code, but the 64-bit instruction set is completely new, not just 64-bit extensions to the 32-bit instruction set, so the Linux support has been implemented as a completely new architecture,” as described on the [Kernel Newbies](http://kernelnewbies.org/Linux_3.7) wiki pages about the 3.7 release.

As early as May 2011, enthusiasm for the ARMv8(64-bit) architecture was starting to build. Jonathan Corbet with LWN took a look at [support for the 64-bit ARM systems](https://lwn.net/Articles/506148/). In this article, Corbet highlights the first patches, the naming protocol, and even points to an email thread from Bergmann,  which references “[much of the relevant thinking](https://lwn.net/Articles/506165/)” surrounding the AArch 64 Linux Kernel Port. Of note as well, Bergmann has been the primary reviewer for all the architectures that have been merged into the Linux kernel for the past 5+ years and while Linaro didn’t specifically push support for ARMv8 upstream it did; however, provide consulting to ARM who did most of the technical development for this added feature.

At Linaro, support for this newest architecture continued to grow and at LCE12 - Copenhagen the first [ARMv8(64-bit) Mini-Summit](/blog/armv8-64-bit-mini-summit-at-lce12-copenhagen/) was held. Discussions included the current state of ARMv8 (64-bit), along with a look at past and future releases. Planning for the next quarter’s work in Linaro including blueprints and various requirements for the continuous integration (CI) loop for 64-bit tools (gcc 4.7 etc.), CI loop for 64-bit kernel and the LAMP stack based on Open Embedded were started. Also highlighted were various ways to coordinate the kernel activities for both 32- and 64-bit architectures and platforms along with the 64-bit bring-up of Linux distributions. A core theme that flowed throughout all theses sessions was the importance enabling  the wider development community to get involved with ARMv8 (64-bit) development.

[Andrea Gallo](/about/), Director of the Linaro Enterprise Group (LEG), commented that "ARMv8 support in the 3.7 Kernel release represents a major milestone for our work at LEG. We will leverage on it for all our developments on the ARM Foundation model towards enabling the 64-bit enterprise server workloads. We are eager to demonstrate early UEFI and ACPI work on AArch64 and 3.7 kernel at next the Linaro Connect in Hong Kong"

Linaro also made early [ARMv8 images](/initiatives/armv8/) available to interested developers and provided links to the [ARMv8 architecture introduction](http://www.arm.com/products/processors/instruction-set-architectures/armv8-architecture.php) with includes a primer on the ARMv8 architecture, the AArch64 execution state and the A64 instruction set. Linaro also points out that while there is no hardware available yet,  ARM and Linaro have developed support for AArch64/A64 against virtual platforms and have started sending the resulting patches to various open source projects.


### Virtualization features


Additional references to ARM support in the 3.7 Linux Kernel include virtualization features as [support](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux-2.6.git;a=commitdiff;h=eff8d6447d5fac2995ffa5c1f0ea2da5bd7074c9) for Xen in ARM was also added.


### Excitement Builds


Excitement continues to grow throughout the Linux and ARM development communities as articles about the inclusion of ARM support in the 3.7 Linux Kernel circulate.

“Industry efforts have also recently been driven by the [Linaro Enterprise Group](/groups/leg/) [LEG], which is pushing ARM development on Linux forward, “ wrote Sean Michael Kerner of ServerWatch in his [Linux 3.7 with ARMs to the Future](http://www.serverwatch.com/server-news/linux-3.7-arms-for-the-future.html) post. In November [Linaro announced](/news/industry-leaders-collaborate-to-accelerate-software-ecosystem-for-arm-servers-and-join-linaro/) the formation [LEG](/groups/leg/), which Kerner references in his article.

Jon Gold of Network World referenced the inclusion of these new features as “groundbreaking” in his [Linux 3.7 adds major new ARM processor support]() post.

When asked what the inclusion of the various ARM features in the 3.7 Linux kernel really means for the future of Linux on ARM Rusling added, “ARM’s future in the Linux will be less fragmented, but, perhaps, more importantly, instead of being an irritation to the kernel maintainers, the ARM community are engaged as full Linux kernel citizens, helping Linux as it evolves to support diverse hardware platforms that are the hallmark of the ARM architecture and as it takes more sophisticated approaches to power management.”

Linaro engineers continue to collaborate with its members, partners, and the wider development communities to build the future of Linux on ARM as the inclusion of the ARM support in the 3.7 Kernel continues to increase the realization that ARM as a platform is becoming a mainstream player in not only in areas of mobile phones, but also in the Enterprise realm and is poised to change the face of desktop computing as well.

The latest release of the Linaro-Linux Kernel - 12.11 - is available on our [downloads page](/downloads/) and more information about the 12.11 baseline image available in [Launchpad](https://launchpad.net/linaro-linux-baseline/+milestone/12.11).


### **About**

#### **Getting involved with The Linaro Kernel Team**


_The Kernel Consolidation Working Group targets the Linux kernel. Its goals are to consolidate source repositories, unify support across SoCs, develop new kernel infrastructure and features and more. Our acid test: shipping a single source tree that integrates support for multiple modern ARM SoCs._




  * _Linaro Kernel Tree Explained - [https://wiki.linaro.org/WorkingGroups/Kernel/](https://wiki.linaro.org/WorkingGroups/Kernel/)_


  * _Mailing List: mailto:linaro-dev@lists.linaro.org ([subscribe](http://lists.linaro.org/mailman/listinfo/linaro-dev))_


  * _IRC Channel: #linaro on irc.linaro.org or irc.freenode.net_


  * _[Team Members](/about/)_


_More information about the Linaro Kernel Team can be found at: [https://wiki.linaro.org/WorkingGroups/Kernel](https://wiki.linaro.org/WorkingGroups/Kernel)_


#### **Joining Linaro**


_Linaro is a member-sponsored, not-for-profit engineering organization focused on consolidating and optimizing open source software for member hardware platforms based on the ARM architecture._

_Membership is open to ARM licensees, Linux distributions and other companies who wish to influence the future of Linux on ARM_

_Find out more about how your organization can become a Linaro member at: [/members](/members)_