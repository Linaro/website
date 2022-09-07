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
  - row: custom_include_row
    source: home/quick_links.html
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
      - format: custom_include
        source: home/member_testimonials.html
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
---
