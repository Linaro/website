---
title: Membership
description: |-
    Linaro is consistently listed as one of the top five contributors worldwide to the Linux Kernel and works on more than 70 open source projects.
layout: flow
permalink: /membership/
js-package: membership
css-package: membership
jumbotron:
    triangle-divider: true
    background-image: /assets/images/content/membership-bg.jpg
    title: Join Linaro to accelerate the deployment of your Arm-based solutions
    description-class: smaller
    description: >-
        Linaro is consistently listed as one of the top five contributors worldwide to the Linux Kernel and works on more than 70 open source projects.
    buttons:
        - title: contact@linaro.org
          url: mailto:contact@linaro.org?subject=Linaro.org - Membership
          class: btn btn-linaro-home
flow:
    - row: custom_include_row
      source: membership_testimonials_row.html
    - row: custom_include_row
      source: membership_projects_slider.html
    - row: custom_include_row
      source: membership_benefits.html
    - row: container_row
      style: levels_of_engagement
      sections:
        - format: title
          title_content:
            text: Levels of Engagment
            size: h2
        - format: text
          style: text-center # Optional css class to applied to section
          text_content: >
            "
            There are multiple levels of membership and different ways to engage in projects that Linaro runs. Core and Club membership provide influence and participation across everything Linaro does, others levels provide a route into engagement on focused activities. Linaro has groups focused on the following segments: [Data Centre & Cloud](https://www.linaro.org/engineering/datacenter-and-cloud/), [IoT & Embedded](https://www.linaro.org/engineering/iot-and-embedded/), [Edge & Fog Computing](https://www.linaro.org/engineering/edge-and-fog-computing/), [Consumer (Android)](https://www.linaro.org/engineering/consumer/) and [HPC](https://www.linaro.org/engineering/high-performance-computing/). Current strategic initiatives are [Artificial Intelligence](https://www.linaro.org/engineering/artificial-intelligence/) and [Autonomous Vehicles](https://www.linaro.org/engineering/autonomous-vehicles/); and current projects include 96Boards, DeviceTree, LAVA, LKFT, OP-TEE and Trusted Firmware.
            "
    - row: container_row
      sections:
        - format: title
          title_content:
            text: Become a member
            size: h2
        - format: buttons
          buttons_content:
            - title: contact@linaro.org
              url: mailto:contact@linaro.org?subject=Linaro.org - Membership
              icon: fa fa-envelope-o
              class: btn-primary
    - row: custom_include_row
      source: membership_related_news.html
---
