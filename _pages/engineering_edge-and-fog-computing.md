---
title: Edge & Fog Computing
layout: flow
description: |-
  Edge computing is often described as the computing work done between “Things” and “The cloud”. The reality is far more complex.
keywords: Linux, Arm, LITE, Android, IoT, Kernel, ecosystem, tinification
permalink: /engineering/edge-and-fog-computing/
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
related_resources_tracks: https://connect.linaro.org/assets/json/edge.json
output: true
image:
  path: /assets/images/content/LEDGE col.svg
  background-class: "bottom-bg "
jumbotron:
  title: Edge & Fog Computing
  inner_class: dotted
  description: >
    Accelerating the adoption of Arm technologies in Edge & Fog Computing ecosystems
  image: /assets/images/content/edge-and-fog-bg.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: ledge
        source: related_members.html
  - row: container_row
    sections:
      - format: custom_include
        source: components/edge_info.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: |
            On the cloud side, a generic software stack runs on Commercial-Off-The-Shelf platforms. On the embedded side, each component is custom: the software stack, the firmware and the hardware platform are custom. Those two approaches adequately address very different market demands.

            To fully realize the edge computing promise, a generic edge software stack shall rely on a standard interface with the firmware and hardware platforms. Those later elements can remain highly customizable to efficiently address specific use cases.

            The Linaro Edge and Fog Computing group and its members have joined forces to make this hybridization a reality through two major efforts:

            - Trusted Substrate - a reference implementation of the Embedded Base Board Requirement (EBBR) firmware specification from Arm.
            - LEDGE Reference Platform - a Generic Kernel Image industrial ready Linux (a single bootable image can run on any EBBR compliant board).

  - row: container_row
    style: youtube_embed_row bg-light
    sections:
      - format: youtube
        style: #
        url: https://www.youtube.com/watch?v=lmXKYhcLqbU
        title: Introduction to Linaro's Edge & Fog Computing Group
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        text_content:
          text: |
            ## What is the group working on?

            ### LEDGE Reference Platform

            For servers, developper freely choose the operating system they want from a commercial or free provider. For embedded systems, developers get their operating system out of a limited list available for a chip family from the silicon vendor.

            Edge computing requires a greater choice for operating systems that come with market specific features such as Time Sensitive Networking support for the industrial market or special trust and privacy capabilities for medical equipment.

            The task of building and maintaining an operating system is complex and costly. Linaro members are collaboratively building a Linux Reference Platform. Borrowing from the server market, a single LEDGE  Reference Platform binary image can run on any EBBR compliant platform. This build on the concepts of Generic Kernel Image pioneered by Google for the Android market. When moving from development to product, the Generic Kernel Image can be optimized for a platform to get the benefits of genericity without sacrificing performance. The efforts to create this Reference Platform allow any organization to easily create Linux distributions for vertical markets, focusing on the high level features of the operating system.

            In more technical terms, LEDGE Reference Platform is a lightweight highly secure and robust container runtime environment that has dependable boot and update capabilities. It comes with a full set of security policies with SELinux, IMA and other technologies that can be further adapted to specific markets.

            ### Trusted Substrate

            As a companion to the LEDGE Reference Platform that builds on [Embedded Base Boot Requirement](https://developer.arm.com/architectures/platform-design/embedded-systems) compliant platforms, Linaro and its members are building an EBBR reference implementation based on U-Boot.

            Conformance to EBBR brings standard support for:

            - UEFI Secure Boot
            - UEFI Measured Boot
            - UEFI random number generation
            - UEFI update capsules

            In addition to being standard, great efforts are made to making the boot and update processes “dependable” which translates into a qualities of:

            - Trustworthiness - the system has clear and enforceable authority lines
            - Durability - the system shall be operation tens of years
            - Robustness and resilience - the system shall be updateable in confidence that it will remain operational regardless of incidents
            - Traceability - actions can be traced in case of liability forensics
            - Transparency - the generic software stack shall have no knowledge of implementation details
            - Scalability - all aspects of the boot and update process shall accommodate demographics of trillion devices

  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        text_content:
          text: |
            For more information, download our slide deck.
      - format: buttons
        buttons_content:
          - title: Download our Slide Deck
            url: https://docs.google.com/presentation/d/12uG-QYGB_mCoU7TBanIdVKrs2y72imccn6lzXzGh68I/edit#slide=id.g4ebc95b9e6_0_91
            style: btn-primary
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: title
        style: text-left no-padding
        title_content:
          size: h3
          text: How do I get involved?
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            There are multiple ways to join the Linaro Edge & Fog Computing Group - you can either join at Group membership level which allows you to participate in all work and projects managed by the group. Or you can join at Club or Core level, both of which allow you to participate in the Edge & Fog Computing Group as well as other Linaro segment groups.

            To read more about membership and fill out the enquiry form, click here:
      - format: buttons
        buttons_content:
          - title: Learn about Membership
            url: /membership/
            style: btn-primary
  - row: custom_include_row
    source: engineering_related_resources.html
---
