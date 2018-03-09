---
author: george.grey
categories:
- blog
date: 2014-01-14 21:22:02
description: A look back at achievements in 2013 within Linaro and a look forward
  into 2014 goals. This blog looks at the progress Linaro has made in a short time
  with it's engineering efforts and the benefit that gives to it's members
keywords: linaro, linux, linux on ARM, open source, software, ARM-CortexA, ARMv8,
  big.Little, LAVA, LEG, LNG,
layout: post
link: /blog/linaro-2013-year-end-review/
slug: linaro-2013-year-end-review
tags:
- android
- arm
- embedded
- kernel
- Linaro Connect
- Linux
- Linux on ARM
- Open Source
- Opensource
- release
- release cycle
- software
- toolchain
- tools
title: Linaro 2013 Year End Review
wordpress_id: 3247
---

It’s the traditional time of year to look back and reflect on the last 12 months. Linaro’s continued growth has led to more engineering output and new challenges. Looking forward we want to build on the successes, learn from those challenges, and deliver increasing benefit to all our members in 2014.

With growth in membership and resources Linaro has been able to deliver more than in any previous year, and many building blocks for 2014 are already in place.

### **Let’s quickly summarize some of the achievements:**

[Membership](/members) has grown to two Core members, six Club members and 16 Group members. This has enabled Linaro to grow to 106 employees and 95 assignees – providing a $40M+ engineering organization working on the ARM software ecosystem directed by, and for the benefit of, its members.

Linaro has along the way become one of the most important company contributors to the Linux kernel, and is home to several kernel subsystem maintainers. Linaro also contributes to many other open source projects including GNU, AOSP, OpenEmbedded/Yocto, and OpenJDK.

Important foundation and mobile work has included supporting the deployment of early big.LITTLE products, upstreaming of key Android functionality to mainline, delivery and maintenance of the de-facto ARM Cortex-A toolchain, many ARM focused changes to the Linux kernel, work on Linux and Android graphics and multimedia, and important discussions on the future of the Linux scheduler and ARM power management. We also see increasing member and non-member use of Linaro’s monthly builds of the Linux kernel, OpenEmbedded/Yocto, Ubuntu and Android.

The first Linaro Stable Kernel (LSK) based on the kernel.org Long Term Supported (LTS) kernel series was produced using the Linux 3.10 baseline in October 2013. LSK will be supported by Linaro Developer Technical Support (LDTS) for two years, and a next version is expected to be selected in 2014 in line with the kernel.org LTS and new Android kernel versions. In parallel with ARMv7 consolidation, optimization and builds, Linaro has been working closely with ARM and members on the software ecosystem for ARMv8. Significant work has included toolchain development, QA and delivery, boot architecture work on UEFI and ACPI, as well as the 64-bit kernel and middleware builds. In 2012 our work was all on the ARM models, which are still supported in Linaro deliverables. In 2013 we have been working on the first ARMv8 hardware platform from Linaro member Applied Microsystems. ARMv8 is now a first class citizen in Linaro’s monthly deliverables. 

The [Linaro Enterprise Group (LEG)](/groups/leg/) completed an amazing first year. Momentum behind the future use of ARM in servers is building rapidly and LEG is becoming a key delivery vehicle for important pieces of open source software infrastructure for the ARM server market. Work has included delivery of boot architecture software, KVM and XEN virtualization, LAMP stack analysis and optimization, an OpenJDK enterprise class implementation working closely with Red Hat, and test builds of major open source software applications including Hadoop and OpenStack. Extensive use of models and early ARMv8 hardware has been critical in readying the software ecosystem for the ARMv8 SoC introductions we expect to see in 2014.

The [Linaro Networking Group (LNG)](/groups/lng/) is still in its early stages, but has already delivered initial results including real time patch set support, bigendian legacy code support, and a networking specific configuration for test & validation in LAVA. LNG is also working on the OpenDataPlane initiative to create a platform independent OS interface to the wide variety of proprietary SoC dataplane hardware.

[LAVA](https://wiki.linaro.org/Platform/LAVA) has continued to evolve to meet the needs of Linaro and our members both in the hardware lab and in the cloud. Increasing deployment and feedback from members has led to significant efforts in product documentation and training. New product features have included multimode support for server and networking configurations, improved user interfaces, and additional test and benchmark support.


### **Looking Forward****

While much of our work is common to ARMv7 and ARMv8 it is clear that the major story of 2014 is going to be the delivery of multiple ARMv8 SoCs into the market targeting multiple segments – mobile, digital home, networking equipment and servers. Much of our work over the last two years will come to fruition as these products roll out with Linux distributions including Android, Ubuntu and Red Hat, incorporating many technical contributions from Linaro and its members.


### **Making the most of Linaro Membership**

As the year comes to an end members ask “how to quantify the ROI from Linaro”? The follow up is often “What do members get that non-members don’t?”

A simple analysis shows that members are realizing an increasing ROI as membership of Linaro grows, and that an ROI of 3-5x or more is being delivered. The answer to the second question lies in the value of driving and contributing to a $40M software engineering organization that is delivering key technology to the ARM ecosystem, without which all member’s engineering costs would be substantially higher. Members get substantial tangible and intangible advantages from membership of Linaro. Nevertheless, how can the ROI be calculated at 3-5x when Linaro upstreams all output to the open source community for everyone to use at no cost?

The apparent paradox can be resolved only by understanding the difference between working within the open source community effectively, and simply using the output. Followers try to do the latter with decidedly mixed results. Products take longer to get to market, and development cost and maintenance cost increases over time. Leaders, including Linaro’s members, realize that to truly extract the maximum value from open source you must be part of the engineering effort that collaboratively creates it.

### **An ARM SoC vendor can take one of three positions:**

  1. Software is not important to our business plan – we just deliver silicon.

	
  2. Software is important and we will build out our software organization to deliver all required software, taking from open source as needed.

	
  3. Software is important and business success comes from investing in open source development to reduce costs, enabling further investment in proprietary innovation.

**I would argue that the first option is no longer a tenable strategy**. Customers demand high quality software, and ARM SoC differentiation and innovation requires excellent software support that meets the needs of the various application ecosystems. 

**The second option is to do everything in house.** While possible, this is not efficient. As more vendors turn to open source, building software inside the community is increasingly important. Internal duplicated development of common features is hard, if not impossible, to upstream. The result is an increasingly large set of patches and software that must be maintained and supported out of tree through the entire product life cycle. The cost of this approach increases dramatically over time.

**The third option is where Linaro fits.** It recognizes that non-differentiated software does not create competitive value. Investing in Linaro shares the cost of common software development. The more members Linaro attract, the higher the return to each member. Linaro enables members to spend more of their software budget on delivering their own value-add. Linaro helps everyone raise the open source bar more quickly for the ARM architecture. This commoditization of the core common software and APIs/frameworks enables more resources to be applied to each vendor’s differentiation and innovation, while maintaining critical software compatibility across SoCs.


### In summary:


**“As standardized middleware and application ecosystems evolve, the ultimate cost of building everything yourself is much higher than sharing the cost of common software development.”**

We also believe that because of the range of activities in Linaro, being outside and attempting to be a follower is now at least as expensive as becoming a member of Linaro. It also causes delayed time to market.  

I look forward to 2014 with great optimism, and the entire Linaro team has a strong determination to continue to deliver further value to all our members.