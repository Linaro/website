---
title: LTS
description: >
  Our displayed projects are only a subset of the leading edge Arm developments
  actively being worked on by Linaro, its member partners, & open source
  community.
permalink: /lts/
js-package: lts
layout: flow
jumbotron:
  class: about_header text-center
  title: "Linaro Long-Term Support: Enhance the Longevity of Your Linux Software"
  title-class: font-weight-bold my-5
  image: /assets/images/content/LTS_banner_image.jpg
flow:
  - row: container_row
    style: bg-light
    sections:
      - format: text
        style: text-center font-weight-bold h3
        text_content:
          text: |
            The security and support solution for your Linux boot-to-kernel product needs levelled-up with advanced Continuous Integration (CI) pipelines
            and LAVA technology
  - row: container_row
    sections:
      - format: custom_include
        source: lts_solution.html
        class: font-weight-bold
  - row: container_row
    style: bg-light
    sections:
      - format: custom_include
        source: lts_suport.html
  - row: container_row
    style: custome-back
    sections:
      - format: custom_include
        source: lts_world_benefit.html

  - row: container_row
    sections:
      - format: custom_include
        source: lts_form.html
---
