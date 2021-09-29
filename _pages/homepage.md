---
title: Accelerating deployment of Arm-based solutions
description: The collaboration platform for the Arm partnership. Members can collaborate on open source software, where solutions are discussed & worked upon.
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
    source: home/theme_row.html
  - row: container_row
    style: bg-light members_row
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
    style: bg-secondary text-white py-0
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
      - format: text
        style: text-left
        text_content:
          text: |
            [Click here for a complete list of projects.](/projects/)
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
          text: |
            There are multiple ways you can partner with Linaro - be it in collaboration with Linaro and
            other Linaro members or on a one-to-one basis. In addition, a lot of the work we do is in the
            open, meaning anything we think can benefit the community at large we will make public on
            our [Downloads page](/downloads/).
  - row: container_row
    sections:
      - format: custom_include
        source: components/testimonial_slider.html
    style: testimonial_row bg-light
  - row: container_row
    style: dev_services_blocks
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Linaro Developer Services
      - format: text
        text_content:
          text: >
            Linaro Developer Services help companies build their products on
            Arm. From initial design through to planning, implementation and
            support and training, Linaro Developer Services help you leverage
            open source on Arm to ensure fast time to market, exceptional
            quality and security, and cost effective long term maintenance.
      - format: custom_include
        source: home/dev_services_blocks.html
      - format: buttons
        style: text-center my-3
        buttons_content:
          - title: Learn More
            url: /services/
            style: btn btn-primary text-uppercase
---
