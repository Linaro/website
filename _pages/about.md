---
title: About Linaro
description: |-
  Linaro has driven open source software development on Arm since 2010, providing the tools, Linux kernel quality and security needed for a solid foundation to innovate on.
permalink: /about/
css_bundle: about
js-package: about
layout: flow
jumbotron:
  inner_class: dotted
  title: Arm Software Experts
  description: ""
  image: /assets/images/content/tech_background_1.jpg
flow:
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: title
        style: text-left
        title_content:
          size: h2
          style: display-4
          text: Driving open source software development on Arm
      - format: text
        style: text-left
        text_content:
          text: >
            Linaro has driven open source software development on Arm since 2010, providing the tools, Linux kernel
            quality, multimedia and security needed for a solid foundation to innovate on. One of the main reasons
            Linaro was formed was to consolidate the Arm code base as multiple companies were frequently trying to
            upstream the same code - causing fragmentation and delay to product deployments. Linaro was therefore
            formed to provide a collaborative forum for companies to work together on foundational open source
            software on Arm. For more information on the work we do on tools, Linux kernel quality, multimedia and
            security, go to [https://www.linaro.org/engineering/core/](/engineering/core/)
  - row: container_row
    style: bg-secondary
    sections:
      - format: youtube
        style: about_youtube_section
        url: https://www.youtube.com/watch?v=E_m19nFNz-4
        poster_image: /assets/images/content/about_page_video_poster.png
        title: About Linaro
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left
        text_content:
          text: >
            Linaro works within many different verticals and within each of these verticals there are many different
            [projects](/projects/). As an important partner within the open source community, Linaro has over one hundred
            maintainers. We are also one of the top contributors to the development of the Linux kernel.
  - row: container_row
    sections: 
      - format: custom_include
        source: about/maintainers_by_project.html
      - format: custom_include
        source: about/maintainers_by_company.html
  - row: container_row
    sections:
      - format: title
        style: text-left
        title_content:
          size: h2
          text: Enabling new markets through collaborative engineering
      - format: text
        style: text-left
        text_content:
          text: >
            As a collaborative forum, Linaro is not just the place where Arm software is consolidated, developed and
            maintained. We also bring companies together to identify business opportunities and enable new markets
            on Arm architecture. This has resulted in multiple Linaro groups focused on specific verticals that now
            includes Artificial Intelligence, Autonomous Vehicles, Consumer, Datacenter & Cloud, Edge & Fog
            Computing and IoT & Embedded. In 2016 Linaro also created 96Boards, a range of hardware
            specifications which are open and define a standard board layout for SoC-agnostic development platforms
            - making the latest Arm-based processors available to developers at a reasonable cost. For more
            information on 96Boards, go to [www.96Boards.org](https://www.96boards.org).

            Linaro is member driven. Member engineers’ work with Linaro engineers to solve common software
            problems. Our members also sit on technical steering committees where together with Linaro and other
            member companies, decisions are made on what work needs to be done. Being a Linaro member in effect
            means shaping the future of Arm software.

            In addition to Linaro membership, companies can also leverage Linaro Arm software expertise on specific
            projects by working with Linaro Developer Services.
  - row: container_row
    style: members_slider_row bg-light
    sections:
      - format: custom_include
        source: components/members_slider.html
  - row: container_row
    style: large_type centered_type engineering_blocks_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          style: display-4
          text: End to End Solutions using Arm Technology
      - format: text
        style: text-left
        text_content:
          text: >
            Linaro’s work spans a wide range of technologies. To find out more about what work we do in
            each vertical, click on the relevant picture below.
      - format: block
        style: text-center text-white
        block_section_content:
            item_width: "3"
            blocks:
                - title: Artificial Intelligence
                  url: /engineering/artificial-intelligence/
                  image: /assets/images/content/engineering/context/artificial_intelligence.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/artificial-intelligence/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Autonomous Vehicles
                  url: /engineering/autonomous-vehicles/
                  image: /assets/images/content/engineering/context/autonomous_vehicles.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/autonomous-vehicles/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Consumer (Mobile & Android)
                  url: /engineering/consumer/
                  image: /assets/images/content/engineering/context/consumer.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/consumer/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Datacenter & Cloud
                  url: /engineering/datacenter-and-cloud/
                  image: /assets/images/content/engineering/context/datacenter_and_cloud.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/datacenter-and-cloud/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Edge & Fog Computing
                  url: /engineering/edge-and-fog-computing/
                  image: /assets/images/content/engineering/context/edge_and_fog_computing.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/edge-and-fog-computing/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: High Performance Computing
                  url: /engineering/high-performance-computing/
                  image: /assets/images/content/engineering/context/high_performance_computing.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/high-performance-computing/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: IoT & Embedded
                  url: /engineering/iot-and-embedded/
                  image: /assets/images/content/engineering/context/iot_and_embedded.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/iot-and-embedded/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Security
                  url: /engineering/core/security/
                  image: /assets/images/content/engineering/context/security.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/core/security/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Core Engineering
                  url: /engineering/core/
                  image: /assets/images/content/engineering/context/stewardship.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/core/
                      style: btn-primary
                      icon: fa fa-arrow-right
                - title: Multimedia
                  url: /engineering/multimedia/
                  image: /assets/images/content/engineering/context/multimedia.jpg
                  background_image: true
                  style: d-flex
                  content_style: d-flex flex-column align-items-center justify-content-center
                  buttons:
                    - title: More Details
                      url: /engineering/multimedia/
                      style: btn-primary
                      icon: fa fa-arrow-right
---
