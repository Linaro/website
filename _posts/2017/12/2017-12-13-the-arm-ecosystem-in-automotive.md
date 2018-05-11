---
author: david.rusling
date: 2017-12-13 8:00:00+00:00
layout: post
title: The Arm Ecosystem in Automotive
categories:
- blog
tags: Arm, Automotive, Ecosystem, Hardware, 96boards
keywords: Arm, Automotive, Ecosystem, Hardware, 96boards
image:
    featured: true
    path: /assets/images/blog/automotive-arm-ecosystem.png
    name: automotive-arm-ecosystem.png
---
<div class="col-md-8" markdown="1">

# Automotive 

Over the last year we have been discussing how Linaro might help the Arm Ecosystem in automotive. This has resulted in a number of very interesting conversations with members and non-members as well as discussions in Linaro’s Technical Steering Committee (TSC) and Birds of a Feather (BOFs) sessions at the Linaro Connect events. In my view, there are several areas in which a Linaro automotive focused group would make sense. 

First, we should define some automotive platforms. Standard hardware platforms, including 96boards, have really helped pull software together for various projects within Linaro and will greatly help with automotive. There’s a lot of Linaro activity already on these platforms, much of which is useful for automotive - for example OP-TEE, an open source trusted execution environment. These efforts are already being used by Linaro members in their automotive offerings.

Secondly, there is some useful work that we could do ensuring that today’s automotive needs are better met by the Arm automotive ecosystem. Linux is mostly used in the dashboard for In Vehicle Infotainment (IFI) and Advanced Driver Assistance Systems (ADAS). Here, the [Linux Foundation AGL project](https://www.automotivelinux.org/) has helped, and Linaro is a member. Dan Cauchy, who directs AGL, was at SFO17 and gave an interesting (and well attended) presentation @ SFO17. The main issue for the Arm ecosystem here is fragmentation, but simple things like building software on multiple platforms will show us many issues that might need solving. 

</div>
<div class="col-md-4">

{% include media.html media_url="https://youtu.be/XSk4oeIRRyU" %}

</div>


<div class="col-md-8" markdown="1">

Another aspect of deploying software today is that of being able to update portions of the vehicle software dynamically, just like our everyday mobile devices. It’s unfortunate when your new car is running 10 year old software (as mine is). In Linaro, we have been investigating OpenEmbedded (OE) based gateway frameworks, integrating over the air updates. George Grey (Linaro CEO) demonstrated OTA updates via this platform in his keynote @ SFO17 and some Linaro alumni have started Open Source Foundries to bring this to market as an open source product. 

Thirdly, Linaro can help drive an automotive software system architecture for the vehicle, one that builds on IoT standards, allowing you to securely update parts / all of the software subsystems in the car and to understand the interaction between the safety critical and non-safety critical pieces. This covers a range of activities from supporting existing standards, creating new standards and implementing reference software stacks.

Why is an automotive system architecture important? The amount of software in a vehicle is rising and will continue to rise. Driving (pun intended) this is electric vehicles and autonomous driving, as well as a wish to consolidate hardware and software efficiently and safely. Much of this huge software need can only be realistically filled by open source solutions. The automotive companies that I've talked with are worried about this transition, as it's a big step up from their current software expertise and will be difficult for their (often small) teams to cope. Equipment suppliers feel nervous too, after all, they have to ensure that the right software is available for their automotive parts. An automotive system architecture, especially with a reference software implementation would really help the ecosystem.

One of the first system architecture questions to ask (and answer) is how to maintain safety guarantees in complex systems. Vehicles are (quite correctly) heavily regulated, they are, after all, giant metal boxes on wheels often travelling very quickly. Vehicle components, hardware and software have to be safely integrated. As such, automotive software can be divided into two areas - safety critical and non-safety critical software. Safety critical system software is developed and certified in a very different way from most open source software. Yet, in order to meet the functionality needed for vehicles in the future, manufacturers need to dramatically increase both the amount of open source software but also frequently update that software over the lifetime of the vehicle; all without reducing safety or reliability.

One simple aspect of this is the need to run both safety critical, often real time, software on the same multicore system as less safety critical software. Here, isolation techniques such as micro-kernels and type 1 virtualisation need to be used. I think that micro-kernels such as L4RE (link) are a good solution. Michael Hohmuth of kernkonzept, hosted a [BoF discussing L4RE and automotive at SFO17](http://connect.linaro.org/resource/sfo17/sfo17-416/).


</div>
<div class="col-md-4">

{% include media.html media_url="https://youtu.be/NEYO7q-x7b0" %}

</div>
<div class="col-md-8" markdown="1">

Going beyond ADAS towards autonomous driving, we will need to integrate client-side machine learning with the vehicle’s control systems in order to analyse conditions and issue driving instructions to the vehicle. The decision making software will be based around machine learning algorithms (a whole other topic) and you need a subsystem that will control the vehicle. The Robot Operating System, or [ROS](http://www.ros.org/) is a good fit on the control side. After all, a vehicle is becoming a robot with wheels. 

Fourthly, enable an open dialog between the various suppliers, distributions and end users of the automotive industry. The automotive industry is comprised of long established and trusting supply chains, getting everyone on the same page is important. This is one of the key ingredients for success in other Linaro groups, for example the HPC Special Interest Group (SIG) in LEG, as it helps us choose the right problems to focus on and get the most benefit.

Finally, If you look at Linaro, you will see that aside from some core technologies (such as tools and the Linux kernel) we are working across the spectrum of Arm ecosystem; in other words we are working on clients (mobile, IoT clients), middle/fog (gateways, smart NICs) and cloud (OpenStack). Each group focuses on their market’s particular needs but also benefits from activities in other groups. Automotive will benefit from the work that’s happening in LITE on IoT gateways and IoT clients, in LEG networking, from the security working group and Cloud integration activities, and more. 

What’s next for automotive in Linaro? In September, at SFO17, the TSC agreed to create an Automotive SIG as a first step. The SIG is defining the scope of a Linaro Automotive group and some initial work. I will keep you updated - in the meantime contact me if you would like to get involved. 


</div>

<div class="col-md-4">

{% include media.html media_url="https://youtu.be/DSFjAawIvmU" %}

</div>










