---
title: Windows on Arm Project
description: >
  Linaro, Arm, Microsoft and Qualcomm are working together to build a Windows on Arm ecosystem which supports native development. We believe native development is key to unlocking better user experiences and broader adoption of Windows on Arm platforms.
permalink: /windows-on-arm/
image: /assets/images/content/iStock-667012914_sm.jpg
keywords:
  - Arm software
  - open source
  - linux
  - software projects
js-package: about
css_bundle: about
layout: flow
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Windows on Arm Project
  description: |
    Linaro, Arm, Microsoft and Qualcomm are working
    together to build a Windows on Arm ecosystem
    which supports native development. We believe
    native development is key to unlocking better user
    experiences and broader adoption of Windows on
    Arm platforms.
  image: /assets/images/content/iStock-667012914_sm.jpg
flow:
  - row: container_row
    style: my-3 bg-blue
    sections:
      - format: text
        style: text-left
        text_content:
          text: >-
            Our mission is to establish a healthy self-sustaining Arm open source ecosystem for Windows. We look at a diverse set of tools, languages, and frameworks to support Windows on Arm
  - row: container_row
    style: my-3 bg-light-gray
    sections:
      - format: title
        style: text-left
        title_content:
          size: h3
          text: Windows on Arm Supported Projects
      - format: text
        style: text-left
        text_content:
          text: |
            The work we do to grow the Arm open source ecosystem for Windows involves setting up CI
            and testing, coordinating with vendors to analyze and fix regressions and establishing
            relationships with project maintainers. Below you will find all the projects we are currently
            working on along with projects we plan to enable for Windows on Arm in the future.

            To find out more about how well supported a project is in Windows on Arm, click on the
            relevant project or product below.
      - format: custom_include
        source: woa/projects.html
  - row: container_row
    style: #
    sections:
      - format: two_column
        style: #
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
            text: Linaro Service Desk
            url: https://linaro-servicedesk.atlassian.net/servicedesk/customer/portal/22/group/85/create/301
---
