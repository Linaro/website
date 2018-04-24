---
author: david.rusling
co-author: robin.randhawa
date: 2018-02-16 12:00:00.000
title: Robin Randhawa (Arm) discusses The Automotive Industry and Open Source Software with Linaro CTO
description: >-
 Today’s CTO blog is really an interview. I have been working with Robin Randhawa (Arm)
 on Linaro’s automotive strategy for a little while now. We both get asked how open 
 source software fits in that industry. I thought that this interview would help explain.
categories:
  - blog
published: true
tags: 'CTO-Blog, Open Source Software, Arm, Software, Hardware, Automotive, Machine Learning, Autonomous Vehicles'
keywords: CTO-Blog, Open Source Software, Arm, Software, Hardware, Automotive, Machine Learning, Autonomous Vehicles
image:
    featured: true
    path: /assets/images/blog/automotive-arm-ecosystem.png
    name: automotive-arm-ecosystem.png
layout: post
---

_**DR:** Today’s CTO blog is really an interview. I have been working with Robin Randhawa (Arm) on Linaro’s automotive strategy for a little while now. We both get asked how open source software fits in that industry. I thought that this interview would help explain._

Robin, first of all, could you introduce yourself and tell me a little bit about your background and current role at Arm?

Thanks. 

**RR:** Academically I'm an Industrial Electronics Engineer who saw the light and became an embedded systems software junkie. That way I got to work with the best of both worlds (hardware and software).

I've been at it professionally since '99 which pegs me at 20 years of experience (kind of scary). Of those 20, I've spent 10 years at Arm working in a variety of roles. 

I was lucky to be at Arm when the realisation that software matters critically was just sinking in. 8 years ago I was tasked with forming the first platform systems software team, in Cambridge. 

I've been the technical lead for Arm's OS power-performance team at Cambridge for the past 6 years. In that role I learnt how to make commercial products using open source software which poses many interesting challenges. This primed me to the next thing on my plate.

I've been working on something completely different this past year - figuring out ways to help align the Arm safety critical ecosystem - especially Automotive and Robotics - using open source software. 

Being at Arm gives me channels into our rich partner ecosystem and therefore the ability to see interesting technical and strategic patterns forming ahead of time. I've been speaking to system software and hardware architects from a wide range of Automotive suppliers and manufacturers, including operating system vendors. From those discussions I'm finding practical ways to increase the adoption of open source software in these spaces.

Why? Well, because if we can do with safety critical spaces what we managed to do in the mobile space with open source software, then we should trend towards a universe where we have more safe, secure, technically hygienic and cheaper software deployments.

I'm fond of all sorts of system software development ranging from operating system kernels, system services, boot flows, language run-times, the lot. On most nights my family graciously permits me 
some me time in my hardware ridden man-cave for personal tinkering projects. 

Playing with Rust on Arm boards these days! Very exciting!!

**DR:** Thanks Robin. I like to keep my feet on the ground and play with hardware and software. Tell me, what is different about software for automotive?

**RR:** Let me talk about the broad structure of Automotive software to illustrate how it’s different from, say, mobile software.

At a high level, you can divide a car into two compute partitions. The first is what I call the traditional partition. This is where processing elements such as microcontrollers started being used for fuel injection, powertrain control, brake control etc. The degree of compute intensity was pretty modest with more emphasis on real-time response, redundancy for fail-safe operation and simplicity. The software that runs on this partition typically consists of real-time operating systems designed to run without the luxury of virtual memory. Everything is static and deterministic. All of these attributes feed into another overarching requirement - assessment for safety certification.

The early 90s up until the end of the first decade of this millenium saw a lot of focus on enhanced compute for the user experience. This is traditionally called IVI or in-vehicle-infotainment. IVI became 
the mainstay of the second partition which I choose to simply call the compute intensive partition. This partition was all about high single thread performance capable cores, available at a modest 
multi-core scale, with a GPU subsystem. The kind of processing elements required to service human machine interfaces, multimedia playback, rich content delivery etc. This partition did not have 
stringent safety requirements. The idea was that if this partition is well isolated from the traditional one ,the software here could run in an insular way. If there was a critical failure of some sort then 
that would mean some minor irritation to the user and that was it. Open source software became pretty popular with IVI. The use of a rich OS kernel like Linux along with open GUI toolkits and 
multimedia frameworks started becoming common. Akin to the mobile landscape a need arose for standardised middleware for IVI and several prominent projects arose to service this need. The lower 
sensitivity to safety and integrity meant that so long as it could be proved that the hardware and the right layer of system software worked in concert to sandbox the "IVI stack", there was no need to 
take on the nigh impossible task of taking the Linux kernel through to safety certification, for example. This type of arrangement is often called mixed criticality composition.

What's happened in the last 6-7 years is that the same compute intensive partition's role has been significantly overloaded to include hardware and software aiming to solve one central theme - inference. The fashionable term to use is autonomous driving or self driving cars. Central to autonomy of this sort is hardware and software designed to solve inference problems such as lane, sign and 
pedestrian detection for example. The big realisation was that if you throw enough compute of the right kind at the inference problem, then you can rely on multiple AI disciplines to solve it. So machine 
learning - or more precisely - the use of pre-trained and updatable-in-the field machine learning models became an overriding requirement. The compute requirements to handle what I choose to 
call the "Inference pipeline" (data streams from high throughput sensor systems such as Radar, Lidar, Camera on to compute clusters and back to actuators) went through the roof. There is a need to 
fuse data coming in at a very high rate from different sensory elements to form an accurate environmental model of the immediate vicinity of the car. Very high single thread performance capable processing elements with very high scale of deployment are required. Folks quickly stopped smirking at the phrase "a couple of blade servers in the boot". The use of GPUs to do more than graphics and take on ML acceleration became common. The use of sophisticated bespoke ML accelerators for even more efficient ML number crunching is now setting in. OEMs started building silicon to provide all the varying types of compute required. Solving the inference problem has been very disruptive from a system hardware and software architecture standpoint. A key problem is being able to decompose the inference pipeline into hardware and software elements that can be graded by their safety 
integrity level (SIL).

Once you have that kind of grading known, the problem devolves to designing hardware and software isolation schemes that allow seamless integration of all the elements involved in the inference 
pipeline.

Coming back to your question, depending on what partition you look at, there are vectors to consider which are very different from the traditional mobile space. Even more so for open source software.. Some vectors are process oriented - things like conforming to ISO26262 software development methodologies, quality management, rigorous specification etc. Others are feature oriented - modular system software architecture (monolithic operating system kernels are not the norm), composability (the ability to knit together a very precise set of system software features into the system software stack), security architecture (the ability to control communication and capability across system software module by way of explicit authorisation), isolation (drivers as user-space processes, rich OS’s in VMs etc).

**DR:** We often hear about stringent software development requirements for the Automotive space. I think that in some cases it is possible to reconcile some open source software with automotive’s strict safety and reliability requirements. First of all the inefficient way to include open source code bases is not to freeze them in time, put them through a certification process and maintain them for 20 years. You instantly lose the benefit of the latest reliable and secure as possible releases. On the other hand, the free for all unmanaged code base will not work for anything other than entertainment systems. There has to be a well organised maintainership that manages the flow of patches and features into the code base. A small code base also helps. That way, it is feasible to have a continuously certifiable software component. A good example of this might be an L4 microkernel. These are sufficiently small and well managed that they could be used within a vehicle’s systems.

This brings me to my next question. A car is a mixture of safety critical and non-safety critical software, both proprietary and open source. How do we combine these in a vehicle?

**RR:** From a systems software standpoint, this is where the use of fault tolerant microkernels with virtualization capability comes in. So you have the ability to reduce the LoC of the most critical software and the reliance on MMUs and Virtualization to sandbox device drivers (a significant source of faults), and increase the utilization of the silicon by safely co-locating low and high SIL software 
components etc.

**DR:** Robin, thank you for being interviewed, I think that this interview goes a long way towards explaining where open source fits in vehicles, now and an a little bit of our thinking about the future. Robin will be at Linaro’s Hong Kong Connect (HKG18) later this year in March. If you are there, he is always worth talking to. Speaking of HKG18, there is a strong Automotive presence there, especially on Ecosystem Day, which is the Wednesday of the event.


For more information on HKG18 or to register for Ecosystem Day, click [here](http://connect.linaro.org/).
