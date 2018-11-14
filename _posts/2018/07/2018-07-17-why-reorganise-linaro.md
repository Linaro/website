---
title: Why Reorganise Linaro?
author: david.rusling
layout: post
date: 2018-07-17 09:00:00+00:00
description: >-
    You should never make change for change sake, but there has been a steady pressure for change in Linaro for the last couple of years. Some of the pressures acting on Linaro are industry based.
categories: Blog
tags: Linaro, ReOrg, Reorganise, Groups, Company
published: true
---
I am as fascinated by how an organisation works as I am by how a code base works. What I learnt in Arm, as it evolved during my time there, was that it went through the classic ‘staircase’. That is, there were periods of change followed by steady state periods, just like a staircase (upright is change, tread is steady state). The changes in Arm were driven by the business and the world changing, just as they are in Linaro. The important thing is to keep the business processes aligned with the membership and open source technologies that Linaro is working with. As in life, change is not optional, it’s part of the deal.

Firstly, don’t panic. Reorganising Linaro does not mean that everything changes, what is really happening is that we’re rearranging the furniture, putting pieces that go together, maybe even throwing some old bits away and also looking to expand Linaro’s engineering into new areas. Linaro’s mission continues to be an engine for the Arm ecosystem to collaborate.

You should never make change for change sake, but there has been a steady pressure for change in Linaro for the last couple of years. Some of the pressures acting on Linaro are industry based. The acquisition of Arm by Softbank is a good example of an industry shift, as is the attempt by Broadcom to buy Qualcomm. An example of technology driven changes is the rise of the robots, or rather big data and its application to real world problems via machine learning; a shift to data driven algorithms for a data driven economy. Another (albeit smaller) driver is the need to scale Linaro’s operation with its growth.

Reorganising Linaro does not mean that everything changes, what is really happening is that we’re rearranging the furniture, putting pieces that go together, maybe even throwing some old bits away and also looking to expand Linaro’s engineering into new areas. Linaro’s mission continues to be an engine for the Arm ecosystem to collaborate. In one sense, reorganising Linaro is a non-event, in another sense it is a complex operation, requiring the understanding of our members and all of Linaro’s internal teams. There has been a lot of discussion and we have taken things relatively slowly as we ensure that current Lead Projects continue to run. In other words, we’re not being disruptive.

Linaro is not a ‘normal’ company. In a ‘normal’ company, engineering is arranged around technologies, and products and segment marketing and product management represent the market and customer needs to the engineering teams. In Linaro we don’t have that layer, instead the committees drive the work. Segment groups in Linaro are focused on an industry segment with a membership consisting of SoC providers, OEMs, ODMs, commercial distribution vendors and ISVs, providing direction and prioritisation.  Special Interest Groups focus on some aspect of a segment market (a great example of this is the HPC SIG in LEG).  To further complicate matters, the Technical Steering Committee (TSC) looks after core technologies but, perhaps more importantly, looks at the strategic roadmap and invests in new areas ‘incubating’ new core technologies, SIGs and Segment Groups.

The major change is to align Linaro’s major segment groups with three major industry segment groups - device, fog and edge, and data center and cloud. For this alignment, the biggest changes are around networking, with LNG morphing into LEDGE, LTNS and ODP, but why and what are these new groupings? 

LTNS (Linaro Telco & Network SIG) is a SIG under LEG (now renamed as the Linaro Datacenter and Cloud Group or LDCG). This SIG is focused on the data center, looking to provide the best in class Telecom & Network performance in the datacenter for the Arm ecosystem. This is focused on today’s standards (the alphabet soup includes VPP, NFV, DPDK, ONAP and OVS) and existing datacenter deployment technologies. There is not necessarily a completely clear line between LEDGE and LTNS; I would expect networking in the data center to adopt Fog and Edge protocols and techniques over time. That said, LTNS will focus more near term than the LEDGE group.  An interesting question here is whether ‘islands of cloud’ will compete with fog networking.  My guess is that will coexist and evolution will take place.

LEDGE is looking into the strategic future at where networking will be, where it needs to be to fully support distributed computing. IoT in all its guises needs this to deploy at planet wide scale.  It is simply not feasible to run factories, transport or cities via cloud based remote data centers. One example is that of traffic, in the future your car will be interacting with cars around it, exchanging information and making decisions. My car’s decision making should not be affected by network bottlenecks with MINI’s headquarters, and I also want it to be fully aware of the changing situation around it.

Edge and Fog networking has some interesting characteristics:

- Swarm and mesh networks are fluid and dynamic  
    - This means that the onboarding of devices is important as nodes keep joining and leaving impromptu networks. These processes need to be automated and trustworthy.  Blockchain has been considered as a technology that could work here. I suspect that in order to deploy and manage this next generation networks at scale we will need to apply machine learning to this problem.  

- Multi-cloud and multi-authority 
    - Today most devices join a single network but, in the future, they will be part of many clouds and will need to exchange and trust information.  

- Compliance and interoperability 
    - Compared to networking in the past, edge and fog networking is much more complex, with that complexity being supported by a myriad of standards and those standards being supported by open source software. Being slightly biased, I would say that you cannot roll out such standards without using open source software.  The key consortium supporting and guiding this is the [OpenFog Consortium](https://www.openfogconsortium.org/). 
    
A key activity of LEDGE will be to deliver a secure, predictable and reliable reference open software architecture and base platform for edge and fog computing. If we don’t, it will slow down the introduction of Arm based devices and new network technologies.   This is especially true for network gateways.   Happily,  much progress is being made by Arm on Embedded Base Boot Requirements ([EBBR](https://developer.arm.com/products/architecture/system-architecture/embedded-system-architecture)).  One of the early LEDGE discussion is how this flexible standard could be practically implemented:

- Tianocore + ACPI 
- U-Boot + UEFI extensions + DT 
- Coreboot + LinuxBoot + UEFI extensions 

My guess is that LEDGE, rather than building on the Tianocore work that LEG has done will choose U-Boot with UEFI extensions as the industry is used to and tooled for U-Boot.

Another key activity in LEDGE is Time Sensitive Networking or TSN, a set of standards allowing deterministic transmission of packets over Ethernet. This is needed for industrial automation as well as for automotive, performance/professional audio and video, wired telecommunication and 5G wireless. There are multiple middleware layers that provide different QoS and traffic shaping  implementations on top of TSN; [PROFINET](https://www.profibus.com/) (driven by Siemens and the PROFINET/PROFIBUS consortium), [EtherNET IP](https://www.odva.org/) (driven by Cisco, Schneider Electric and Rockwell Automation) and [EtherCAT](https://www.ethercat.org/default.htm) (invented by Beckhoff).

LEDGE working and coordinating in this area is essential to enable the upstream Linux kernel to work well with all of these implementations (and any future ones). This is one of the reasons that the OEMs wish to work within Linaro, it mitigates the risk of future Linux kernels being incompatible with key provisioning and management middleware as this technology matures.

As ODP is a core technology, it has become a separate SIG under direction of the Linaro TSC.  It will continue to add functionality (for example 3GPP crypto algorithm support) and they are reworking the current odp-dpdk reference implementation of ODP into a more direct mapping of ODP APIs onto DPDK.  This will allow applications written to the ODP APIs to use DPDK without requiring any application change. 

There are, of course, other changes, but they are mostly about where and how Lead Projects are managed across Linaro and balancing core activities with market segment based activities. These changes should be complete by the [Linaro Connect Vancouver 2018](https://connect.linaro.org/), 17-21 September 2018.  



