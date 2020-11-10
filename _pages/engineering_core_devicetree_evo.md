---
title: Devicetree Evolution
layout: flow
related_resources_tracks: https://connect.linaro.org/assets/json/toolchain.json
js-package: engineering
image: /assets/images/content/engineering/png/core_engineering.png
description: |-
  Devicetree.org is a community effort by many companies and individuals to facilitate the future evolution of the Devicetree Standard. The devicetree is a data structure for describing hardware. Rather than hard coding every detail of a device into an operating system, many aspects of the hardware can be described in a data structure that is passed to the operating system at boot time.
keywords: Builds, Baselines, LAVA, software, Arm, collaboration, Toolchain, Continuous Integration, CI
permalink: /engineering/core/devicetree-evolution/
related_tags:
  - kernel
  - devicetree
  - DTE
jumbotron:
  title: Devicetree Evolution
  inner_class: dotted
  description: ""
  image: /assets/images/content/engineering/context/stewardship.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro has defined a Lead Project with its membership to address the needs of the Arm ecosystem. The Devicetree Evolution (DTE) project aims to:

            - collect and consolidate the different Devicetree requirements from the Linaro membership and the ecosystem.

            - update the different specifications (Devicetree, EBBR,...) as needed

            - work to ensure coherency between all software components using Devicetree
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The project is expected to deliver:

            - Modification of each software component to support the Devicetree evolution

            - Implementation on selected reference platforms

            - A Devicetree specification update
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Groups and projects within Linaro will provide a set of reference platforms covering the Devicetree diversity we want to address with this project and will provide regression testing and maintenance.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            More details on Devicetree and the work identified as part of the evolution project can be found in the Linaro White Paper "Why Device Tree Needs to Evolve".
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Download **["Why Device Tree Needs to Evolve"](/assets/pdf/Linaro-White-Paper--Device-Tree-Evolution.pdf)** for more information on this Linaro Lead Project.
  - row: custom_include_row
    source: engineering_related_resources.html
---
