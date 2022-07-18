---
title: Accelerating deployment of Arm-based solutions
description: The collaboration platform for the Arm partnership. Where members
  can collaborate on Arm Open Source Software and solutions are discussed &
  worked upon.
permalink: /
keywords:
  - arm software
  - engineering
  - open source
  - linaro
  - linux
  - software projects
js-package: home
css_bundle: home
layout: flow
flow:
  - row: custom_include_row
    source: home/homepage_header.html
  - row: container_row
    style: bg-black text-section
    sections:
      - format: text
        style: text-left text-white highlighted_text_section px-3
        text_content:
          text: >
            Linaro works with businesses and open source communities to develop
            software on Arm-based technology. We create solutions that drive
            forward the Arm software ecosystem, enhance standardisation, promote
            collaboration across industries and contribute to real-world
            applications.


            To find out more about the work we do, select one of the icons below.
  - row: custom_include_row
    source: home/theme_row.html
  - row: container_row
    style: bg-light members_section
    sections:
      - format: title
        style: text-center
        title_content:
          style: font-weight-bold
          text: Linaro Members
          size: h2
      - format: custom_include
        source: membership/members_section.html
  - row: container_row
    style: bg-secondary stats_row text-white
    sections:
      - format: title
        style: text-center
        title_content:
          style: font-weight-bold
          text: Experts in Open Source Software on Arm
          size: h2
      - format: custom_include
        source: home/stats_row.html
  - row: custom_include_row
    source: about/maintainers_by_project.html
  - row: container_row
    style: bg-secondary text-white py-0 project_collab_section
    sections:
      - format: title
        style: ""
        title_content:
          style: font-weight-bold
          text: Projects Linaro and its member companies collaborate on
          size: h2
      - format: text
        style: text-left
        text_content:
          text: This is a snapshot of some of the projects Linaro works on
      - format: custom_include
        source: home/projects_section.html
  - row: container_row
    style: ""
    sections:
      - format: title
        style: ""
        title_content:
          style: font-weight-bold
          text: Collaboration comes in many forms
          size: h2
      - format: text
        style: text-left blockquote
        text_content:
          text: >
            There are multiple ways you can partner with Linaro - be it in
            collaboration with Linaro and

            other Linaro members or on a one-to-one basis. In addition, a lot of the work we do is in the

            open, meaning anything we think can benefit the community at large we will make public on

            our [Downloads page](/downloads/).
  - row: container_row
    sections:
      - format: custom_include
        source: home/cta_section.html
    style: cta_section bg-light
---
