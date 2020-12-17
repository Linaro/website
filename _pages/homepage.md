---
title: Accelerating deployment of Arm-based solutions
description: Linaro accelerates deployment of Arm-based solutions
permalink: "/"
layout: flow
css_bundle: home
js-package: home
flow:
  - row: custom_include_row
    source: home/homepage_header.html
  - row: container_row
    style: bg-secondary
    sections:
      - format: custom_include
        source: home/stats_slider_row.html
  - row: container_row
    sections:
      - format: custom_include
        source: components/testimonial_slider.html
    style: testimonial_row
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
            Linaro Developer Services help companies build their products on Arm. From initial design through to
            planning, implementation and support and training, Linaro Developer Services help you leverage open source
            on Arm to ensure fast time to market, exceptional quality and security, and cost effective long term
            maintenance.
      - format: custom_include
        source: home/dev_services_blocks.html
      - format: buttons
        style: text-center my-3
        buttons_content:
          - title: Learn More
            url: /services/ # Required - button url
            style: btn btn-primary text-uppercase
---
