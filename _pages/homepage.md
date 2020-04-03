---
title: Accelerating deployment of Arm-based solutions
description: Linaro accelerates deployment of Arm-based solutions
permalink: /
edit-on-github: "false"
css-package: home
layout: flow
jumbotron:
  inner_class: dotted
  slider:
    - darken: true
      title: Linaro accelerates product deployment in the Arm ecosystem
      image: /assets/images/content/code_banner.jpg
      title-class: big-title
    - darken: true
      description: >
        Linaro Connect Budapest 2020 Cancelled
      image: /assets/images/content/budapest_banner_bg.jpg
      inner-image: /assets/images/content/BUD20logo_white_text.png
      inner_class: text-center
      buttons:
        - title: Read more
          url: /blog/linaro-connect-budapest-2020-cancelled/
          class: btn-primary
      title-class: big-title
flow:
  - row: container_row
    style: introduction_row
    sections:
      - format: title
        style: text-center
        title_content:
          style: display-5
          size: h2
          text: >
            Linaro brings together industry and the open source engineering community to
            collaboratively develop software on Arm.
      - format: title
        style: arm_expertise text-center
        title_content:
          size: h2
          style: dotted dotted_heading
          text: >
            Arm software is our expertise
  - row: container_row
    style: engineering_row bg-secondary
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          style: display-4 text-white
          text: Delivering end to end solutions using Arm technology
      - format: custom_include
        source: components/engineering_slider.html
  - row: container_row
    style: testimonial_row bg-light
    sections:
      - format: custom_include
        source: components/testimonial_slider.html
  - row: container_row
    style: call_to_action_sections
    sections:
      - format: feature_block
        style: dotted linaro_membership
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
      - format: feature_block
        style: dotted developer_services
        feature_block_content:
          position: right
          type: image
          image_content_path: /assets/images/content/linaro_developer_services.jpg
          title: Linaro Developer Services
          text: >
            Linaro Developer Services help companies build
            their products on Arm. From initial design through
            to planning, implementation and support and
            training, Linaro Developer Services help you
            leverage open source on Arm to ensure fast time
            to market, exceptional quality and security, and
            cost effective long term maintenance.
          buttons:
            - title: Learn More
              url: /services/
              style: btn-primary homepage_call_to_action
---
