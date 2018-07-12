---
group_id: 3
title: Linaro Edge & Fog Computing (LEDGE)
description: |-
    Edge computing is often described as the computing work done between “Things” and “The cloud”. The reality is far more complex.
keywords: Linux, Arm, LITE, Android, IoT, Kernel, ecosystem, tinification
permalink: /engineering/groups/ledge/
group_short_name: ledge
group_long_name: Linaro Edge & Fog Computing (LEDGE)
#icon: lite_icon.png
director: Francois Ozog
related_tags:
  - ledge
  - LEDGE
  - Edge
  - Fog
#related_jira_project: https://projects.linaro.org/projects/LITE/summary
#youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMjCTIdpvcX5ePMBl4rXS5R
members_key: ledge_members
---
Edge computing is often described as the computing work done between “Things” and “The cloud”. Reality is far more complex. A wrist watch can be seen as an edge device for all wearables that a person holds; a car communication system can be seen as an edge device for onboard devices but also for the wrist watch of the driver; a traffic light pole can embed a system that would be an edge device for many cars and may be for wrist watches directly. 

Each edge device can be connected to multiple clouds such as the city smart infrastructure cloud, a car manufacturer cloud, an insurance company cloud. What’s more, multiple edge devices can collaborate in the context of a dynamic ad hoc swarm. For instance, a swarm can be formed out of the cars present in the surroundings of a road intersection; cars enter and leave the swarm as they enter and leave the intersection.

So edge computing is not just merely a layer between “things” and “the cloud”, it is an entire new world for computing. It has particular trust requirements and deployment constraints. It has to bring together the tightly coupled nature of embedded solutions with the flexibility of data center technologies.

Linaro members have a particular interest in manufacturing, automotive, smart infrastructure and multi-access edge computing use cases. That may seem broad but one can envision two classes of solutions: one can be very resource constrained with required support of Time Sensitive Networking (TSN), the other is closer to a micro-server form factor.

In order to meet our members’ needs and collaborate in this evolving technology landscape, Linaro has established Linaro Edge (LEDGE). LEDGE will initially focus on industrial use cases with major contributions in TSN technologies into the Linux kernel. It will produce an OpenEmbedded derived Reference Platform comprising a minimal set of building blocks. An end-to-end Continuous Integration process will be established with an additional set of libraries and payload  to prove the feature completeness Reference Platform. 
