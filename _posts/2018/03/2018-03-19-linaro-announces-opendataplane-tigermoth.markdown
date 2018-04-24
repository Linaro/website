---
author: linaro
date: 2018-03-19 0:00:00.000
title: Linaro Announces OpenDataPlane Tiger Moth LTS Software 
description: >-
    Linaro Ltd, the open source collaborative engineering organization developing software for the Arm ecosystem, today announced the availability of the
    second Long Term Support (LTS) release of OpenDataPlane
categories:
  - News
published: true
tags: Linaro, Connect, HKG18, OpenDataPlane, New Release, LTS, Tiger, Moth, Software
keywords: Linaro, Connect, HKG18, OpenDataPlane, New Release, LTS, Tiger, Moth, Software
image:
  featured: true
  path: /assets/images/blog/odp-press-release-hkg18.png
  name: odp-press-release-hkg18.png
layout: post
---
## Linaro Announces OpenDataPlane Tiger Moth LTS Software Release with Support for Arm and x86
**Software Defined Data Plane Supports SoCs, SmartNICs, and Servers**
**With Full Support for Accelerated IPsec Processing**

[Hong Kong, China, 19 March 2018] Linaro Ltd, the open source collaborative engineering
organization developing software for the Arm ecosystem, today announced the availability of the
second Long Term Support (LTS) release of OpenDataPlane ® , code named “Tiger Moth”. The
OpenDataPlane project is an open-source, cross-platform set of application programming
interfaces (APIs) for the networking Software Defined Data Plane.

OpenDataPlane has been optimized to take advantage of Arm-based SoC (System on Chip)
processors that provide a very high level of integration of high performance network interfaces
and hardware packet and crypto accelerators. Another benefit is that OpenDataPlane supports
the ability to run the exact same software code base on both x86 and Arm-based server class
processors using standard NICs or SmartNICs, that utilize DPDK for input and output.

OpenDataPlane acts as a standard unifying architecture that allows true “write once, accelerate
anywhere” applications to take best advantage of polled or event driven network architectures
and hardware accelerators with little to no effort. Now OEMs and software developers can more
easily take advantage of new and improved silicon without fork-lift upgrades to their
applications.

Reference implementations of OpenDataPlane provided by the Linaro Networking Group (LNG)
as well as production-grade implementations provided by various silicon partners are available.
The Linaro components, consisting of the API Specification, Reference Implementations, and
Validation Test Suite, can be found on GitHub (https://github.com/Linaro/odp) and via the
OpenDataPlane web site (https://www.opendataplane.org/downloads/). Links to performance-
optimized native Arm-based SoC implementations from LNG member companies, including
Cavium™, are available at the same location on the ODP web site.

“This new OpenDataPlane ‘Tiger Moth’ LTS release provides real world applications a stable
and optimized set of APIs that run on accelerated Arm-based SoCs, Arm-based and x86
servers, and SmartNICs. This release includes full support for IPsec offload to meet the needs
for line-rate secure communication, as well as many other advancements over the previous
‘Monarch’ LTS release,” said François-Frédéric Ozog, LNG Director at Linaro.
OpenDataPlane Features include:

- Common Application API across Arm and x86
- Support for Inline IPsec (little to no involvement of processor cores)
- Support for IPsec Lookaside processing
- Support for Arm-based SoCs
- Support for Arm-based Servers
- Support for SmartNICs
- Support for x86 Servers

- Support for Hardware Packet Accelerators including
  - Buffer/Packet managers
  - Packet Parsers and Classifiers
  - Packet ordering engines
  - Integrated cryptographic processing
  - Integrated I/O
- Support for both Hardware and Software Schedulers and Load Balancers
- Support for both Hardware and Software Traffic Managers
- Support for FAT IPsec pipes - ability to load balance traffic across multiple cores
- Support for DPDK on Arm and x86
- Full Validation Test Suites available
- Embedded and Cloud Ready
- Production-grade implementations available

OpenDataPlane is developed jointly by LNG members and the wider open source community to
represent the interests of application developers, silicon vendors, telecom equipment
manufacturers and software solution providers, and has been validated on both Arm and x86-
based systems.

> "The Tiger Moth release of ODP highlights the power of collaboration between Arm and Linaro
> to deliver innovative networking infrastructure solutions"
> said Mark Hambleton, senior director, Open Source Software, Arm. 
> "The ability to bring forward the capabilities of unique solutions
> from our partners, while delivering truly cross-platform portability across a broad range of
> offerings, is a key value of the Arm ecosystem" 

“OpenDataPlane (ODP) continues to increase its value. With this release that supports Arm-
based SoCs, Arm-based Servers, and even DPDK on x86 Servers, Linaro and all of the Linaro
Network Group members are again actively demonstrating the real benefits of our collaborative
engineering efforts,” said Larry Wikelius, Vice President Software Ecosystem and Solutions
Group at Cavium, Inc. “ODP is an outstanding proof point for the value of standard interfaces
that allow Armv8-based SoC and server vendors to showcase differentiating performance and
features while still supporting leading software applications. Cavium is proud to continue its
tradition of open source community leadership and intends to deliver Tiger Moth across the
range of ThunderX ® , ThunderX2 ® and OCTEON TX ® product families.”

Enea has been a member of LNG and contributor to the ODP project for several years, and the
OpenDataPlane cross-platform API is today supported and leveraged by Enea’s own data plane
solutions. “The Tiger Moth release represents a new significant milestone for the
OpenDataPlane project at large, and is a key platform for our continued work with accelerated
data plane and OS solutions across a broad range of CPU architectures, including both Arm
and Intel-based hardware platforms,” said Adrian Leufvén, SVP OS Business Unit, Enea.
The Tiger Moth software release supports Nokia’s end-to- end Future X vision for 5G and the
silicon advances made with its recently announced ReefShark chipset family. Tiger Moth
supports critical features of 5G such as low latency and high throughput. “Tiger Moth-based
system software is an essential part of Nokia Reefshark and Nokia’s Future X realization,” said
Jarmo Hillo, Processor Technology Lead at Nokia Networks.

OpenDataPlane has been a key component already from the start of the OpenFastPath (OFP)
project. The event driven architecture of OFP is derived directly from OpenDataPlane, which

also provides the former project with the necessary cross-platform portability. “OFP’s future
roadmap will take full advantage of the Tiger Moth release. OpenDataPlane provides the
necessary platform for event driven packet processing, and we are excited to continue our work
in close collaboration with Linaro,” said Daniel Forsgren, President of the OpenFastPath
Foundation.

## About LNG
The Linaro Networking Group (LNG) was founded in February 2013 by twelve member
companies. The OpenDataPlane project was established from the start of LNG to produce an
open-source, cross-platform application programming interface (API) for the networking data
plane, that offers both portability and automatic access to vendor-optimized platform
acceleration capabilities, as well as linear scalability for applications deployed in many-core
system environments.

## About Linaro
Linaro is leading collaboration on open source development in the Arm ecosystem. The
company has over 300 engineers working on consolidating and optimizing open source
software for the Arm architecture, including developer tools, the Linux kernel, Arm power
management, and other software infrastructure. Linaro is distribution neutral: it wants to provide
the best software foundations to everyone by working upstream, and to reduce non-
differentiating and costly low-level fragmentation. The effectiveness of the Linaro approach has
been demonstrated by Linaro’s growing membership, and by Linaro consistently being listed as
one of the top five company contributors, worldwide, to Linux kernels since 3.10.
To ensure commercial quality software, Linaro’s work includes comprehensive test and
validation on member hardware platforms. The full scope of Linaro engineering work is open to
all online. To find out more, please visit [http://www.linaro.org](http://www.linaro.org) and [http://www.96Boards.org](http://www.96Boards.org).