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
    style: call_to_action_sections bg-secondary text-white
    sections:
      - format: feature_block
        style: linaro_membership
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/membership_board.jpg
          title: Linaro Membership
          text: >
            Linaro membership allows you to shape the future
            of Arm software together with Linaro and other
            industry leaders. Collaborating on common
            projects significantly reduces software
            fragmentation across the many Arm platforms,
            enabling participating companies and the
            community to reduce their costs for development
            and validation of Arm-based software.
          buttons:
            - title: Learn More
              url: /membership/
              style: btn-primary homepage_call_to_action
  - row: container_row
    style: call_to_action_sections bg-light
    sections:
      - format: feature_block
        style: developer_services blue
        feature_block_content:
          position: right
          type: image
          image_content_path: /assets/images/content/linaro_developer_services.jpg
          title: Linaro Developer Services
          text: >
            Linaro Developer Services help companies build their products on Arm. From initial design through to planning, implementation and support and training, Linaro Developer Services help you leverage open source on Arm to ensure fast time to market, exceptional quality and security, and cost effective long term maintenance.
          buttons:
            - title: Learn More
              url: /services/
              style: btn-primary homepage_call_to_action
---
