---
layout: post
title: A Decade of Achievement
description: " In this article, former Linaro CTO David Rusling takes a look at
  how Linaro came to be and how the company has moved forward throughout the
  last 10 years. Read more here."
date: 2020-06-18 03:21:00
image: /assets/images/content/10-year-graphic-horizonal1.png
tags:
  - Linaro
  - Arm
  - Networking
  - Datacentre
  - Big Data
  - SoC
  - Linux
  - Linux Kernel
  - Android Ecosystem
  - Ledge
  - Linus Torvalds
category: blog
author: david.rusling
---

### **Introduction**

It is hard to believe that Linaro is 10 years old this year, but it is and like everything in life, has evolved during this time. One thing, though, Linaro remains a place where the Arm ecosystem collaborates.

### **ARM and Open Source**

Arm’s business model was a key factor in their success. Unusual at the time, they licensed their technology to system on chip (SoC) makers who then built products. In essence, they acted as the R&D department for their partners. These partners all gained because Arm built an ecosystem of tools and software around their architecture, an architecture which steadily gained capabilities.

Another factor in Arm’s success is open source and this is where my own history becomes interwoven with Arm’s story. I worked for Digital, firstly on Linux on the Alpha processor and then on Linux on the StrongArm. In 1998, as Digital Semiconductor was acquired by Intel, it was logical, perhaps inevitable, that I moved to Arm. I brought my open source experience with me. I had seen the power of open source and saw its importance to the Arm architecture and ecosystem. Arm had much early success in the mobile space with Symbian OS (remember Nokia phones?) then two things happened that changed the world. Firstly, Apple invented the iPhone. Whilst it was ridiculed when it was first launched for everything that it didn’t have, the iPhone seriously changed what people expected of a mobile phone and how they expected to interact with it. Secondly, Android happened. For many this may have seemed derivative, but Android has a very long history as it is based on Linux, which had been around since the early 90s.

Whilst Apple continued to develop the iPhone (and look where that has led), Android was enthusiastically taken up by the Arm ecosystem. One of the beauties of open source is that it is available to anyone, or company, that wants to use it.

### **Mobile**

When many companies compete to bring products to market, fragmentation will be a problem. That problem got worse, much worse, as Android became more popular. The rewards for releasing the latest technology were so great that this was, in retrospect, inevitable. It is also fair to say that, at the time, the ARM ecosystem companies were not particularly adept open source citizens.

There were two problems facing the ARM ecosystem in 2010 - fragmentation in the Linux kernel and support for the Arm architecture in the GNU toolchain. These were the first problems that Linaro and its members focused on. Getting everyone’s Linux kernel engineers together and collaborating quickly started to solve the fragmentation issues. However, it became clear that more was needed, especially after Linus Torvalds remarked that more was needed. “Somebody needs to get a grip in the Arm community.” That remark sent shockwaves through the ARM ecosystem and helped galvanise Linaro’s members to form the Arm sub-architecture maintenance team in 2011. We were successful, as around a year later, Linus was lauding the Arm kernel community for being exceptionally well organised. I think that this marks the moment in time when the ARM community became full members of the open source community. This trend continued as we worked on power management within the kernel.

### **The Datacentre**

As the ARMv8 architecture was being released, the ARM Ecosystem asked Linaro to support their efforts to support ARM in the datacentre. As a way of focussing on this market segment, we formed the Linaro Enterprise Group, or LEG, in late 2012. This group was later renamed to Linaro Data Centre Group, LDCG. Other groups focussing on networking and embedded were later created. The main challenges were again fragmentation, especially in boot architecture and ensuring that a myriad of open source software needed in the data centre were available and performant on the Arm architecture.

The data centres operate in a completely different way to the mobile phone market. It is driven by standards, from how the system boots (UEFI) to how software is reliably deployed at scale. As an example of how different, data centres distributions rely on hardware support being upstream before they will support that hardware. It is also worth noting that during the lifetime of this segment group, how software is deployed at scale was revolutionised by the adoption of containers and open source deployment frameworks such as OpenStack (which Linaro and its members helped ensure that OpenStack ran well on Arm based systems).

LDCG started looking at High Performance Computing (HPC) in 2016. This was a natural extension of the work that LDCG had been doing, and Linaro and its members looked at standardisation, interoperability, orchestration, all driven by user cases important to our members. The engineering focus was on OpenHPC, compiler performance, SVE enablement and hardware deployment.

The Linaro HPC work has been incorporated into Fujitsu’s A64FX processor release (see [this announcement](https://www-techradar-com.cdn.ampproject.org/c/s/www.techradar.com/amp/news/little-known-japanese-cpu-threatens-to-make-nvidia-intel-and-amd-obsolete-in-hpc-market) about deploying the A64FX at Nagoy University).

### **Networking**

The nature of collaboration within Linaro has changed and a good illustration of that is Time Sensitive Networking (TSN). TSN is a set of standards guaranteeing the delivery of network data with time sensitive restrictions. One example is audio, after all you don’t want your favourite song stuttering during playback. More seriously, you really need that important warning to get displayed on your car’s console.

Linaro’s edge networking group, LEDGE, identified a need to coalesce around a practical Linux kernel framework that supported all of their SoCs. After a lot of discussion, including persuading one of our members to change their implementation, they settled on the switchdev architecture. A lot of architectural discussion in Linaro revolves around hardware acceleration, a feature of the diverse approaches of the ARM ecosystem. TSN provides a good example of this in that a key concept of switchdev is that there are three priority classes, each represented by a different port. This enables the use of hardware resource allocation via queues. Even better, it standardises the access to network acceleration hardware. Traffic shapers are configured in the manner as a traditional hardware switch.

We also pushed the configuration of shapers through integration in the TC framework (ip route2 userland commands). If you have a real switch, this does not change the configuration method and you can even determine how traffic is effectively switched between ports.

TSN also illustrates the power of Linaro members having a common approach to technical problems as no single member could have influenced any given system architecture, but, together, they could.

### **Big Data**

We are living in the era of big data as we wire the planet and seek to orchestrate everything from homes, transportation, and factories to whole cities. This planet scale deployment is turning the old model of SoC vendors supplying commodity chips upside down as it becomes more and more complex to integrate devices securely with the myriad of cloud ecosystems that now exist. In many ways, the big data companies (Google, Facebook, Microsoft etc.) driving top to bottom software stacks and standards is reminiscent of the early history of computing with giants such as IBM and Digital supplying hardware and software. The difference now though is that open source software is the common substrate upon which this is all built.

One of the values of the Arm licensing model is that many SoC manufacturers compete, bringing rapid innovation to a market. However, dealing with many vendors can be difficult and this Darwinian value of competition can sometimes be lost in the noise. Google, a Linaro member since 2014, uses its Linaro membership to help manage and leverage its relationship with its Arm ecosystem. Within the Linaro Consumer Group (LCG) Google has worked with the other members on technical work, such as the porting OPTEE (Open source Trusted Execution Environment) to AOSP for use by the Android TV project. Other collaboration includes supporting the Android ecosystem. It leveraged LCG as it lengthened its Long Term Support (LTS) kernel maintenance period from 2 to 6 years, something key to Android support. It also extended its Android Common kernel testing significantly, both in the number of tests and the number of hardware platforms that regularly run those tests (165M+ tests-to-date on real AOSP dev boards). That testing is in addition to other engineering work the segment group has been doing via the Android Open Source Project (AOSP).

### **Summary**

Linaro and the Arm ecosystem have both evolved, but collaboration continues to be our core activity. Our members continue to show us great trust as we work with them to get the most out of the Arm ecosystem and the markets that they participate in. The last 10 years were interesting and I’m pretty confident that the next 10 years will be too.
