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
    source: home/banner.html
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
    style: bg-white lds_section py-0 overflow-hidden
    absolute_image:
      style: rocket_svg px-0
      image: /assets/images/content/RocketGraphic.svg
      image_alt: Linaro Developer Services rocket launching upwards
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          style: px-3 py-5
          text: |
            ## Linaro Developer Services

            If you want to leverage Linaro’s Arm and open source software expertise on a specific project, then working with Linaro Developer Services is the right option for you.

            From initial design through to development, implementation, support and training, Linaro Developer Services help you leverage open source on Arm to ensure fast time to market, exceptional quality and security, and cost effective long term maintenance..
          buttons:
            - title: Find out more about Linaro Developer Services
              url: /services/
              class: btn-primary
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
    style: bg-secondary text-white py-0 mb-5 project_collab_section
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
