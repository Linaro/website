---
title: Our Projects
description: >
  Our displayed projects are only a subset of the leading edge Arm developments actively being worked on by Linaro, its member partners, & open source community. 
layout: flow
permalink: /projects/
keywords:
  - arm open source project
  - software
  - open-source
js-package: projects
css_bundle: projects
layout: flow
jumbotron:
  class: about_header text-center
  title: Projects
  title-class: font-weight-bold my-5
  image: /assets/images/content/Dots_lines_datacenter_UNDER_2MB.jpg
flow:

  - row: container_row
    sections:
      - format: text
        text_content:
          text: |
            Linaro works together with its members on Arm open source projects. These projects may vary
            in scope and verticals they touch but all aim to achieve one (or several) of the following goals:
      - format: collapse
        style: #
        panels:
          - title: Solve Ecosystem Quality Problems
            icon: /assets/images/content/Quality.svg
            content: |
              Projects which aim to solve ecosystem quality problems focus primarily on testing. Here stakeholders
              collaboratively fund consistent continuous testing of key configurations to make upstream the quality
              reference. An example of one of these projects would be [Linux Kernel Quality](/projects/#core-technologies_LKQ).
          - title: Deliver Upstream Support for Architecture and OS Requirements
            icon: /assets/images/content/Upstream.svg
            content: |
              Projects which concentrate on upstream support focus on regression testing, improving technology by
              adding more functionality and increasing security across the ecosystem. Through these projects,
              member companies have access to maintainers who have a say in what does or does not get
              upstreamed. An example of one of these projects would be [Upstream Maintainership](/projects/#core-technologies_UM).
          - title: Solve problems of Fragmentation which limit Market Deployment
            icon: /assets/images/content/Fragmentation.svg
            content: |
              Linaro was initially formed to address fragmentation in the Arm software ecosystem and this is
              something we still do today whenever a new market emerges. The projects which address
              fragmentation focus on upstreaming all necessary technologies across multiple open source projects
              so that all ecosystem players work from a common reference. An example of one of these projects
              would be [Trusted Substrate](/projects/#automotive-iot-edge-devices_TS) which aims to bring standardization to edge device firmware.
          - title: Achieve ecosystem goals by leveraging a member’s in-house codebase
            icon: /assets/images/content/house_code.svg
            content: |
              In some cases a member will donate a project to Linaro, allowing us to leverage a codebase developed
              in-house to achieve broader ecosystem goals. Linaro provides a neutral platform where collaboration
              can be built using our tools and processes. Once the project is up and running it can continue to
              benefit from Linaro engineering collaboration or optionally evolve into a Linaro Community Project, a
              project with stand-alone governance. To date there are three Linaro Community Projects - [MCUboot](https://www.mcuboot.com/index.html),
              [OpenAMP](https://www.openampproject.org/) and [Trusted Firmware](https://www.trustedfirmware.org/).
      - format: text
        text_content:
          text: |
            Interested in working with Linaro and other industry leaders on Arm open source projects?
            Find out more about [membership](/membership/) and how to participate here.
  - row: custom_include_row
    source: projects.html
---
