---
layout: post
title: The shift towards HPC AI and why it is needed
description: In this blog, Linaro Director Paul Isaac's talks about the shift
  from traditional data centers, the need for scaling and intelligent decision
  making and how Linaro is addressing these needs through the HPC AI Project.
date: 2021-03-18 03:54:31
image: /assets/images/content/Dots_lines_datacenter_UNDER_2MB.jpg
tags:
  - HPC
  - AI
  - data center
  - artificial intelligence
  - Arm
  - open source
related_projects:
  - HPCAI
category: blog
author: paul.isaacs
---
## The need for scaling and intelligent decision making

The shift from on-premise data centers to Infrastructure-as-a-Service (IaaS) has been happening for some time. Whilst storage density has improved significantly (a terabyte now fits on a device the size of a postage stamp), data centers are becoming too big to fit conventional offices. The amount of data being processed requires huge amounts of computational hardware to convert into meaningful time-sensitive information. Engineering resources to maintain this hardware becomes an operational overhead that detracts from the core business.

There is a need to scale to handle the Petabytes of data, deliver the results across national boundaries and to prioritize shifting workloads. As a result, we see data centers transitioning and consolidating. Across the global market this transition is confirmed by the server-class computing shipments to end-user companies being in decline year on year. 

How do we address these computational needs? 

## Introducing Linaro’s HPC AI Project

Linaro’s HPC AI Project aims to develop technologies which leverage Artificial Intelligence (AI) in infrastructure management tasks such as orchestration and autoscaling. Managing workloads isn’t just about bandwidth. It is also about knowing when to prioritise what task. This is achieved by supporting workloads through intelligent enablement of infrastructure.  

HPC AI aims to balance data centre workloads across available racks/server chassis in an efficient manner, whether that be to complete the task in the shortest time, maximise the number of parallel jobs or minimise the number of active chassis. The permutations of possibilities are seemingly endless which is why Linaro will incorporate not just Machine Learning models and frameworks into the operation but also aim towards the higher-level artificial intelligence. The benefits of which play into the needs of Hyperscalers as well as the more conventional Cloud Computing.

## What happens next?

Over the next year, Linaro plans to heavily leverage the new FX700 Supercomputer to further enable Arm in the Open Source ecosystem. Conventional supercomputer use would sequentially run massive parallel jobs in order. Linaro is creating the flexibility to utilise the FX700 in a variety of configurations, with each being dynamically selectable and controlled via OpenStack Ironic. Options include running an 8-node ( 8 x 48 core and 8 x 32GB memory in a diskless/netboot configuration ) compute cluster, individual compute nodes, or as compute hosts for small virtual machines (multiples of 4GB Ram/6vCPU).

The FX700 (A64FX with SVE) is not used in isolation. It joins Linaro’s existing multi-chassis installation of ThunderX2 and Kunpeng 910 based devices. Various permutations of all available hardware are selectable according to workload/requirements. This allows the most flexibility for testing, performance evaluation and developing directly on a range of Arm v8.x solutions.

There is a difference between conventional supercomputer utilisation for end-user simulations and the requirements of Linaro engineers. Linaro’s aim is to ensure that the simulation engines are able to build/run and optimise for A64FX cores in either low or high core count opportunities and to explore the possibility of hosting novel approaches to Artificial Intelligence.

These efforts will be leveraged by the entire HPC community moving forward as Linaro pushes findings into the upstream as improvements are integrated. This lays the foundations for a very flexible platform for running varying simulations.

## Want to learn more?

In my upcoming talk at Linaro Virtual Connect 2021 next week, I will talk about the journey of data centre transitions and readiness to support AI on a Smart Scalable HPC, including our latest “8-node” Supercomputer. From computational resource selection to Cloud-native software that brings it all together. The session is free to attend so make sure to register by clicking the link below if you'd like to find out more. Once registered, you will receive an invitation to our event tool Pine where you can access the session.

**LVC21-103: A Journey Towards a Smart Scalable HPC for AI** 

Tuesday 23 March, 16.15-16.40

[Register here](https://connect.linaro.org/register/) to access the session and attend