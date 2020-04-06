---
title: Edge & Fog Computing
layout: flow
description: |-
    Edge computing is often described as the computing work done between “Things” and “The cloud”. The reality is far more complex.
keywords: Linux, Arm, LITE, Android, IoT, Kernel, ecosystem, tinification
permalink: /engineering/edge-and-fog-computing/
css-package: landing-page
js-package: engineering
members:
    key: ledge
related_tags:
  - ledge
  - LEDGE
  - Edge
  - Fog
  - IoT
  - LITE
members_key: ledge_members
related_resources_tracks: IoT Fog/Gateway/Edge Computing
output: true
image:
    path: /assets/images/content/LEDGE col.svg
    background-class: "bottom-bg "
jumbotron:
    title: Edge & Fog Computing
    inner_class: dotted
    description: ""
    image: /assets/images/content/edge-and-fog-bg.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
        - format: custom_include
          params: ledge
          source: related_members.html
  - row: container_row
    style: large_type introduction_row
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Edge computing is often described as the computing work done between _things_ and _the cloud_. Reality is far more complex. A wrist watch can be seen as an edge device for all wearables that a person holds; a car communication system can be seen as an edge device for onboard devices but also for the wrist watch of the driver; a traffic light pole can embed a system that would be an edge device for many cars and may be for wrist watches directly. Each edge device can be connected to multiple clouds such as the city smart infrastructure cloud, a car manufacturer cloud, an insurance company cloud. What’s more, multiple edge devices can collaborate in the context of a dynamic ad hoc swarm. For instance, a swarm can be formed out of the cars present in the surroundings of a road intersection; cars enter and leave the swarm as they enter and leave the intersection.
  - row: container_row
    style: youtube_embed_row bg-light
    sections:
        - format: custom_include
          youtube_embed:
            url: https://www.youtube.com/watch?v=lmXKYhcLqbU
            title: Arm on Arm Panel Discussion 2019
          source: components/lazy_youtube_video_embed.html
  - row: container_row
    style: large_type introduction_row
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            So edge computing is not just merely a layer between _things_ and _the cloud_, it is an entire new world for computing. It has particular trust requirements and deployment constraints. It has to bring together the tightly coupled nature of embedded solutions with the flexibility of data center technologies.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro members have a particular interest in manufacturing, automotive, smart infrastructure and multi-access edge computing use cases. That may seem broad but one can envision two classes of solutions: one can be very resource constrained with required support of Time Sensitive Networking (TSN), the other is closer to a micro-server form factor.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            In order to meet our members’ needs and collaborate in this evolving technology landscape, Linaro has established Linaro Edge (LEDGE). LEDGE will initially focus on industrial use cases with major contributions in TSN technologies into the Linux kernel. It will produce an OpenEmbedded derived Reference Platform comprising a minimal set of building blocks. An end-to-end Continuous Integration process will be established with an additional set of libraries and payload  to prove the feature completeness Reference Platform.
  - row: custom_include_row
    source: engineering_related_resources.html
---
