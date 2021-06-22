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
          text: Linaro has driven open source software development on Arm since 2010.
            Companies become members to work with us and other industry leaders
            on [software projects](https://www.linaro.org/projects/) which
            deliver standardization and a base to differentiate on. Together we
            develop strategy which is then implemented by Linaro and member
            company engineers. Bringing engineering resource together to
            collaborate on common software projects reduces overall
            fragmentation, allowing member companies to reduce their costs for
            development and validation of Arm-based software.
  - row: custom_include_row
    source: about/maintainers_by_project.html
  - row: custom_include_row
    source: about/maintainers_by_company.html
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
