---
title: Learning Hub
description: >
  Here we have provided lots of information to help explain what things are. We
  have also added links to other useful resources such as white papers and
  testimonial videos to help explain our technology and why Linaro is important.
permalink: /learning-hub/
keywords:
  - Learning hub
  - open
  - linux
js-package: about
css_bundle: learning-hub
layout: flow
jumbotron:
  class: about_header text-center
  title: Learning Hub
  title-class: font-weight-bold my-5
  description: >
    Here we have provided lots of information to help explain what things are. We
    have also added links to other useful resources such as white papers and
    testimonial videos to help explain our technology and why Linaro is important.
  image: /assets/images/content/37258684572_e7b51c154e_o.jpg
flow:
  - row: container_row
    style: learning_hub_index
    sections:
      - format: custom_include
        source: learning_hub/learning_hub.html
  - row: container_row
    style: why_section mb-5
    sections:
      - format: title
        title_content:
          size: h3
          text: Why companies join Linaro
      - format: custom_include
        source: learning_hub/testimonials.html
  - row: container_row
    style: whitepapers_section mb-5
    sections:
      - format: title
        title_content:
          size: h3
          text: Whitepapers
      - format: custom_include
        source: learning_hub/whitepapers.html
  - row: container_row
    style: themes_section
    sections:
      - format: text
        style: text-left
        text_content:
          text: >-
            Linaro works with businesses and open source communities to develop software on Arm-based technology.
            We create solutions that drive forward the Arm software ecosystem, enhance standardisation, promote
            collaboration across industries and contribute to real-world applications.

            The collaborative work we do covers the following four industries.
      - format: custom_include
        source: learning_hub/themes.html
---
