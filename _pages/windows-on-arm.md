---
title: "Windows on Arm "
description: >
  Linaro, Microsoft, Arm, Qualcomm and CIX Technology are building a Windows on
  Arm ecosystem to support native development. Read more here!
permalink: /windows-on-arm/
keywords:
  - Arm software
  - open source
  - linux
  - software projects
js-package: about
css_bundle: woa
layout: flow
video_resources_link: https://resources.linaro.org/en/tags/0e965752-e803-4fd8-9a71-f01c5c1a113f
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Windows on Arm
  description: >
    Linaro is working with Arm, CIX Technology, Microsoft and Qualcomm to build
    a Windows on Arm ecosystem which supports native development. We believe
    native development is key to unlocking better user experiences and broader
    adoption of Windows on Arm platforms.
  image: /assets/images/content/iStock-667012914_sm.jpg
flow:
  - row: container_row
    style: my-3 bg-dark-gray
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          image: /assets/images/content/windows_on_arm/Chip_background_v2.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## Windows and Open Source

            There is no doubt that Arm chips can deliver an exceptional user experience through efficient power consumption, fast performance and all day battery life. But for devices running on Arm-based technology to truly leverage these capabilities, operating systems (OS) need to ensure that open source tools and applications using their OS can run natively on Arm.

            This is no small task and the reason why the Linaro Windows on Arm Group exists - to establish a healthy self-sustaining Arm open source ecosystem for Windows.
  - row: container_row
    style: my-3 bg-light-gray
    sections:
      - format: title
        style: text-left
        title_content:
          size: h3
          style: font-weight-bold
          text: Enabling Windows to run natively on Arm
      - format: text
        style: text-left
        text_content:
          text: >
            Below is a list of all the projects the Linaro Windows Group plans to enable for Windows on Arm. The work the group does to grow the Arm open source ecosystem for Windows involves setting up CI and testing, coordinating with vendors to analyze and fix regressions and establishing relationships with project maintainers.
      - format: custom_include
        source: woa/projects.html
  - row: container_row
    style: bg-light-gray
    sections:
      - format: custom_include
        source: woa/marcus_testimonial.html
  - row: container_row
    sections:
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Client PC
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                **UEFI+ACPI Firmware for Arm-based client devices.**


                This project aims to enable booting both Linux and Windows on ARM based client machines using the same ARM SystemReady SR compliant UEFI/ACPI firmware.
              buttons:
                - title: Client PC
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/CLIENTPC
            - title: WPerf
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                **Performance analysis tool for Windows**


                An open-source performance analysis tool for Windows similar to Linux Perf.
              buttons:
                - title: WPerf
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/WPERF
  - row: container_row
    style: my-3 bg-dark-gray
    sections:
      - format: title
        style: text-left font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold text-white
          text: Testimonials from Linaro Windows Group members
      - format: custom_include
        source: woa/testimonials.html
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: woa/tagged_resources_and_blogs.html
  - row: container_row
    style: my-3
    sections:
      - format: title
        style: text-left white-border-title font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold
          text: Windows on Arm Portfolio Roadmap
      - format: custom_include
        source: woa/roadmap.html
  - row: container_row
    style: my-3 bg-light-gray
    sections:
      - format: title
        style: text-left white-border-title font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold
          text: Linaro Windows on Arm Technical Meetings
      - format: title
        style: text-left font-weight-bold
        title_content:
          size: h4
          style: font-weight-bold
          text: Windows on Arm Technical
      - format: text
        style: text-left
        text_content:
          text: >
            Every two weeks on Tuesday - 4:00-5:00pm (GMT+1) <br/>

            If you're interested in participating in the meeting, please contact windowsonarm@linaro.org
  - row: container_row
    style: my-3
    sections:
      - format: title
        style: text-left white-border-title font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold
          text: Active Members
      - format: custom_include
        source: woa/members.html
---
