---
title: Accelerating deployment of Arm-based solutions
description: The collaboration platform for the Arm partnership. Members can
  collaborate on open source software, where solutions are discussed & worked
  upon.
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
    style: bg-secondary
    sections:
      - format: custom_include
        source: home/stats_slider_row.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left
        text_content:
          text: Linaro has driven open source software development on Arm since 2010 and
            is home to many world-leading Arm software experts. Together with
            our members and the open source community, we help maintain and
            evolve the Arm open source software ecosystem. Collaborating on
            common software projects reduces overall fragmentation, allowing
            member companies to reduce their costs for development and
            validation of Arm-based software.
  - row: custom_include_row
    source: about/maintainers_by_project.html
  - row: custom_include_row
    source: about/maintainers_by_company.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: title
        title_content:
          text: Linaro Membership
          size: h2
      - format: text
        text_content:
          text: "If you want to work with Linaro’s technical domain experts and other
            industry leaders on solving common problems, then Linaro membership
            is the option for you. Click on the videos below to find out why our
            members choose to partner with Linaro:"
      - format: buttons
        buttons_content:
          - title: Learn more
            url: /membership/
            style: btn btn-primary text-uppercase
  - row: container_row
    sections:
      - format: custom_include
        source: components/testimonial_slider.html
    style: testimonial_row bg-light
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        text_content:
          text: If you want to leverage Linaro’s Arm and open source software expertise on
            a specific project, then working with Linaro Developer Services is
            the right option for you.
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
