---
title: Windows on Arm Project
description: >
  Linaro, Microsoft, Qualcomm, Arm and CIX Technology are working together to
  build a Windows on Arm ecosystem which supports native development. Read more
  here!
permalink: /windows-on-arm/
keywords:
  - Arm software
  - open source
  - linux
  - software projects
js-package: about
css_bundle: woa
layout: flow
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Windows on Arm Project
  description: >
    Linaro is working with Arm, CIX Technology, Microsoft and Qualcomm to build
    a Windows on Arm ecosystem which supports native development. We believe
    native development is key to unlocking better user experiences and broader
    adoption of Windows on Arm platforms.
  image: /assets/images/content/iStock-667012914_sm.jpg
flow:
  - row: container_row
    style: my-3 bg-blue bordered-row
    sections:
      - format: text
        style: text-center text-white
        text_content:
          text:
            Our mission is to establish a healthy self-sustaining Arm open source
            ecosystem for Windows. We look at a diverse set of tools, languages,
            and frameworks to support Windows on Arm
  - row: container_row
    style: my-3
    sections:
      - format: title
        style: text-left
        title_content:
          size: h3
          style: font-weight-bold
          text: Windows on Arm Supported Projects
      - format: text
        style: text-left
        text_content:
          text: >
            The work we do to grow the Arm open source ecosystem for Windows
            involves setting up CI and testing, coordinating with vendors to
            analyze and fix regressions and establishing relationships with
            project maintainers. Below you will find all the projects we are
            currently working on along with projects we plan to enable for
            Windows on Arm in the future.

            To find out more about how well supported a project is in Windows on Arm, click on the relevant project or product below.
      - format: custom_include
        source: woa/projects.html
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
    style: my-3 bg-light-gray
    sections:
      - format: two_column
        style: null
        breakpoint: md
        left_column:
          custom_size: 8
          style: p-3
          text: |
            **Provide feedback or request support for a missing package**
        right_column:
          custom_size: 4
          style: p-3
          button:
            style: blue-button
            title: Linaro Service Desk
            url: https://linaro-servicedesk.atlassian.net/servicedesk/customer/portal/22/group/85/create/301
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
          text: Testimonials from Members of the Linaro Windows Group
      - format: custom_include
        source: woa/testimonials.html
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
          size: h3
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
image: /assets/images/content/iStock-667012914_sm.jpg
---
