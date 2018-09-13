---
title: The Boot Problem
author: linaro
layout: post
date: 2018-09-13 09:00:00+00:00
description: >-
  Linaro CTO David Rusling talks about fragmentation in Boot Architecture.
categories: Blog
tags: Linaro, Linaro Connect, Boot Architecture, Arm, SBBR, EBBR, Server, U-Boot, Vancouver, YVR18
image:
  featured: true
  name: linaroconnectSFO17.jpg
  path: /assets/images/blog/linaroconnectSFO17.jpg
---
Quoting Tim O’Reilly - ‘Evolution breeds not a single winner, but diversity’.  This is very true and diversity is one of the hallmarks of the Arm ecosystem. For any given market there are a lot of companies competing and this competition drives diversity and, therefore, evolution.  The results are awesome as a variety of approaches are taken and the market decides. Sometimes brutally.  

Diversity is good, but one historical downside of the Arm ecosystem has been a tendency towards fragmentation. Indeed, one of the motivations behind Linaro’s formation was this need to reduce fragmentation in open source. Fragmenting a code base is bad in that it makes it harder to change, test and deploy. The most obvious example was (I’m happy to use the past tense here) the Arm parts of the Linux kernel back in 2010.  

Another example of fragmentation has been the boot firmware. There are many, many ways to get a system out of reset and run an operating system. The boot firmware is software that gets the system out of reset, initialises it and boots an operating system kernel. Typically it is developed as the hardware is debugged and made ready for release. This means that, in the Arm ecosystem, many firmware teams are working in secret within their companies against hard deadlines. Linaro and its members have done a lot of work here, unifying [U-Boot](https://www.denx.de/wiki/U-Boot/) features across our member’s systems. This is also where we have seen problems working with the upstream project as the code to be upstreamed is developed in isolation and in full before attempting to upstream it.  

All in all though, Arm based systems (across all profiles) are being deployed into real products, so at the moment, there doesn’t seem to be a huge problem to solve here. The biggest investment in boot software by Linaro and its members has been been the shift to a mandated boot software and methodology. This fact of the datacenter leaves no room to manouver, if you want a system to be in a data center it has to obey that architecture. The Linaro Enterprise Group (now known as the Linaro Data Center Group, LDCG) has invested a lot of time and effort on getting this right. It is also a really good example of collaboration within Linaro. The Arm SBBR (Server Based Boot Requirement) specification, along with a set of confirmance tests helps ensure that Arm based systems are suitable to be deployed and managed in a data center.

I believe that it is time to adopt a similar approach in embedded systems. It is time for architecture, but why? Once again, the answer is evolution. The embedded space is evolving with devices now being connected to the internet, if sometimes via bluetooth and gateways. As well as that, the expectation is that software is updated in the field for improved security and features. For smart cities (smart anything, actually) to operate securely and reliably at scale we need hardware and software that intelligently configures itself and manages compute and data at the appropriate distance from the factory, car, school crossing etc. 

A similar effort to SBBR has started; called EBBR (Embedded Based Boot Architecture), it builds on the lessons from SBBR and is being developed in as open a way as possible and learning lessons from the current embedded world.  One of those lessons is that U-Boot is important and that we should build on our earlier work there. This is going to take a while and we should not, as the saying goes, attempt to ‘boil the ocean’. One place where embedded boot architecture should focus is on embedded gateways as these devices need to be secure and regularly updated. Of course, you could implement SBBR on gateways (and some will), as being SBBR compliant satisfies EBBR’s compliance rules, but we still need the option to implement EBBR. I believe that, from there, EBBR will be adopted and will spread into more traditional embedded spaces over time.

**Want to understand more or get involved?** 

Luckily we have [Linaro Connect in Vancouver](https://connect.linaro.org/) starting on Monday `7 September where there will be lots of sessions on all aspects of boot architecture. These sessions will be uploaded on to the [Linaro Connect website under Resources](https://connect.linaro.org/resources/yvr18/), including the presentations and the discussions themselves.



 

  





