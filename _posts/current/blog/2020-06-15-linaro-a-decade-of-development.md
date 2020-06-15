---
layout: post
title: Linaro - A Decade of Development
description: Founded in 2010, Linaro will be celebrating its 10th Anniversary on
  the 18th June 2020. The technological world has evolved significantly
  throughout this time, but one thing remains consistent and that is Linaro's
  expertise and collaboration within the Arm ecosystem. In this thought
  provoking article, David Rusling (CTO at Linaro) takes a look back at how
  Linaro came to be and also how the company has moved forward throughout the
  years.
date: 2020-06-15T03:21:32.000Z
image: /assets/images/content/5years.png
tags:
  - linaro
  - arm
  - arm ecosystem
  - opensource
  - networking
  - mobile
  - datacentre
  - david
  - rusling
  - big data
  - SoC
  - linux
  - linux kernel
  - android
  - ledge
  - Linus Torvalds
category: Blog
author: david.rusling
---
Article
Introduction
It is hard to believe that Linaro is 10 years old this year, but it is and like everything in life, has evolved during this time.  One thing, though, remains at the heart of Linaro, it is a place where the ARM ecosystem collaborates.
ARM and Open Source
Arm’s business model was a key factor in their success.  Unusual at the time, they licensed their technology to system on chip (SoC) makers who then built products. In essence, they acted as the R&D department for their partners.  These partners all gained because Arm built an ecosystem of tools and software around their architecture, an architecture which steadily gained capabilities. 
Another factor in Arm’s success is open source and this is where my own history becomes interwoven with Arm’s story.  I worked for Digital, firstly on Linux on the Alpha processor and then on Linux on the StrongArm.  In 1998, as Digital Semiconductor was acquired by Intel, it was logical, perhaps inevitable, that I moved to Arm.  I brought my open source experience with me; I had seen the power of open source and saw its importance to the Arm architecture and ecosystem.  Arm had much early success in the mobile space with Symbian OS (remember Nokia phones?) then two things happened that changed the world.  Firstly, Apple invented the iPhone.  Whilst it was ridiculed when it was first launched for everything that it didn’t have, the iPhone seriously changed what people expected of a mobile phone and how they expected to interact with it.  Secondly, Android happened.  For many this may have seemed derivative, but Android has a very long history as it is based on Linux, which had been around since the early 90s.
Whilst Apple continued to develop the iPhone (and look where that has led), Android was enthusiastically taken up by the Arm ecosystem.  One of the beauties of open source is that it is available to anyone, or company, that wants to use it.
Mobile 
When many companies compete to bring products to market, fragmentation will be a problem.  That problem got worse, much worse, as Android became more popular.  The rewards for releasing the latest technology were so great that this was, in retrospect, inevitable.  It is also fair to say that, at the time, the ARM ecosystem companies were not particularly adept open source citizens.
There were two problems facing the ARM ecosystem in 2010 - fragmentation in the Linux kernel and support for the Arm architecture in the GNU toolchain.  These were the first problems that Linaro and its members focused on.  Getting everyone’s Linux kernel engineers together and collaborating quickly started to solve the fragmentation issues.  However, it became clear that more was needed, especially after Linus Torvalds remarked that more was needed. “Somebody needs to get a grip in the Arm community.”   That remark sent shockwaves through the ARM ecosystem and helped galvanise Linaro’s members to form the Arm sub-architecture maintenance team in 2011. We were successful, as around a year later, Linus was lauding the Arm kernel community for being exceptionally well organised.  I think that this marks the moment in time when the ARM community became full members of the open source community.  This trend continued as we worked on power management within the kernel.
The Datacentre
As the ARMv8 architecture was being released, the ARM Ecosystem asked Linaro to support their efforts to support ARM in the datacentre.  As a way of focussing on this market segment, we formed the Linaro Enterprise Group, or LEG, in late 2002.  This group was later renamed to Linaro Data Centre Group, or LDCG.  Other groups focussing on networking and embedded were later created.  The main challenges to LEG were again fragmentation, especially in boot architecture and ensuring that a myriad of open source software needed in the data centre were available and performant on the Arm architecture.
The data centres operate in a completely different way to the mobile phone market.  It is driven by standards, from how the system boots (UEFI) to how software is reliably deployed at scale.  As an example of how different, data centres distributions rely on hardware support being upstream before they will support that hardware.  It is also worth noting that during the lifetime of this segment group, how software is deployed at scale was revolutionised by the adoption of containers and open source deployment frameworks such as OpenStack (which Linaro and its members helped ensure that OpenStack ran well on Arm based systems).
LDCG started looking at High Performance Computing (HPC) in 2016. This was a natural extension of the work that LDCG had been doing, and Linaro and its members looked at standardisation, interoperability, orchestration, all driven by user cases important to our members. The engineering focus was on OpenHPC, compiler performance, SVE enablement and hardware deployment. 
[Can I mention the Fujitsu A64FX here? https://www.hpcwire.com/2020/02/03/fujitsu-arm64fx-supercomputer-to-be-deployed-at-nagoya-university/]
Networking
As I noted at the beginning of this article, Linaro has always been about collaboration, but the nature of that collaboration has changed.  A good example of how Linaro operates now is Time Sensitive Networking (TSN).  TSN is a set of standards guaranteeing the delivery of data with time sensitive restrictions.  A good example is audio, after all you don’t want your favourite song stuttering during playback.  More seriously, you really need that important warning to get displayed on your car’s console.
LEDGE, Linaro’s edge networking group, identified a need to coalesce around a practical Linux kernel framework that supported all of their SoCs.  After a lot of discussion, including persuading one of our members to change their implementation, they settled on the switchdev architecture.  I would note that a lot of architectural discussion in Linaro revolves around hardware acceleration, a feature of the diverse approaches of the ARM ecosystem.  TSN provides a good example of this in that a key concept of switchdev is that there are three priority classes, each represented by a different port. This enables the use of hardware resource allocation via queues.  Even better, it standardises the access to network acceleration hardware.  Traffic shapers are configured in the manner as a traditional hardware switch.
 We also pushed the configuration of shapers through integration in the TC framework (ip route2 userland commands). If you have a real switch, this does not change the configuration method and you can even determine how traffic is effectively switched between ports.
TSN also illustrates the power of Linaro members having a common approach to technical problems as no single member could have influenced any given system architecture, but, together, they could.

[TBD - mention SmartNIC here?]
Big Data
We are living in the era of big data as we wire the planet and seek to understand and orchestrate everything from homes, cars, factories and cities.  This planet scale deployment is turning the old model of SoC vendors supplying commodity chips upside down as it becomes more and more complex to integrate devices securely with the myriad of cloud ecosystems that now exist.  In many ways, the big data companies (Google, Facebook, Microsoft etc) driving top to bottom software stacks and standards is reminiscent of the early history of computing with giants such as IBM and Digital supplying hardware and software.  The difference now though is that open source software is the common substrate upon which this is all built.
One of the values of the Arm licensing model is that many SoC manufacturers compete but dealing with many vendors can be difficult and the Darwinian value of competition can sometimes be lost in the noise.  One example of Linaro’s role here is that we work with long time member Google on Linux kernel quality.  This is helping Android suppliers provide more up to date systems to their customers.
[TBD - more detail here, need to work in -Todd’s remarks that getting everyone into the room really helps influence and coordinate]
Summary
The Arm ecosystem is unique and the combination of many actors driving 

The last 10 years were interesting and I’m pretty confident that the next 10 years will be too.
