---
id: 17
title: Automotive, IoT & Edge Devices
sub_theme: false
permalink: /automotive-iot-and-edge-devices/
image: /assets/images/content/automotive-iot-and-edge-share-image.png
icon: /assets/images/content/Auto_IoT_Edge_white.svg
icon_dark: /assets/images/content/AIoTE.svg
icon_alt: /assets/images/content/Auto_IoT_Edge_blue.svg
icon_col: /assets/images/content/Icon_Automotive_IoT_Edge_colour.svg
js-package: contactForm
description: >
  Consumers expect to be always connected, always online. Supplying this demand is complex, requiring devices to process a constant stream of data and to    communicate with other types of devices - often at scale and in multiple locations. And this all needs to be done securely. The technologies driving these use cases are continuously evolving but all suffer from one common denominator - the lack of standardization. Linaro is working together with its member companies on developing open standards and interfaces which will help accelerate deployment of their Automotive, IoT and Edge solutions.
# presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/50057078-8f3b-4615-8f44-67c194e43b69
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Automotive, IoT & Edge Devices
  description: |
    Software defined functionality is no longer
    restricted to the cloud network but is now
    expected to extend to the edge.

    Autonomous AI-driven features are being deployed to positions of trust in
    gateways and even sensors.The Zonal Architecture revolution driving the evolution
    to software-defined vehicles is just one indicator that industry has switched to a
    software-first methodology. The technologies underpinning these use cases are
    continuously evolving but all suffer from one common denominator - the lack of
    open software standardization.
  image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
flow:
  - row: custom_include_row
    source: themes/associated_members.html
  - row: container_row
    style: bg-blue py-4 mb-5
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          image: /assets/images/content/Automotive_Dashboard.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## Open standards for Automotive, IoT & Edge solutions

            The shift to software-first methodology, coupled with advances in
            artificial intelligence has the potential to create a world in which
            our devices are always connected, communicate with one another
            and are driven by intelligent decision making. But in order to realize
            the full potential of an always connected, always online world,
            standardization is key. Linaro works with member companies on
            developing open standards and interfaces which will help
            accelerate and secure deployment of their Automotive, IoT and
            Edge solutions.
  - row: container_row
    style: bg-lighter-blue text-center
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: White Papers available to download (PDF)
          size: h2
      - format: custom_include
        source: themes/automotive_iot_white_paper_blocks.html
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro Projects delivering standardization to Automotive, IoT & Edge use cases
          size: h2
      # - format: custom_include
      #   source: themes/related_project_blocks.html
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: Project Stratos
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                There is a growing trend towards
                virtualization in areas other than the
                traditional server environment. The
                server enviroment is uniform in nature
                but as we move towards a richer
                ecosystem in automotive, medical and
                general mobile and IoT spaces, the rich
                array of hypervisors and SoCs become
                a problem. Project Stratos is working
                towards developing hypervisor
                agnostic Virtio interfaces and
                standards.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/STR/overview
            - title: Open-CMSIS-Pack
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                The Open-CMSIS-Pack project is
                delivering a standard for software
                component packaging and related
                foundation tools for validation,
                distribution, integration, management,
                and maintenance of microcontroller
                software. It aims to create a flexible
                and easy to use end to end
                development flow - from project
                creation to execution of the software
                on real or virtual hardware - for
                embedded software.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/CMSIS/overview
            - title: Trusted Substrate
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Trusted Substrate is a BIOS that brings
                standards based secure booting and
                over-the-air (OTA) updates to the
                most trust demanding embedded
                computing projects such as
                automotive and robotics. The project
                aims to upstream all necessary
                technologies in multiple projects to
                enable Arm SystemReady compliance.
              buttons:
                - title: Download White Paper
                  style: btn-lg btn-primary mb-2
                  url: https://linaro.co/trusted-substrate-white-paper
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/TS/overview
            - title: Ledge Reference Platform
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                In an effort to empower any
                organization to easily create a Linux
                distribution for vertical markets,
                focusing on the high level features of
                the operating system, Linaro has
                created the LEDGE Reference
                Platform. LEDGE Reference Platform
                (RP) is a lightweight highly secure and
                robust container runtime environment
                that has dependable boot and update
                capabilities.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LRP/overview
            - title: Oniro
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Oniro OS is a publicly available open source version of the HarmonyOS operating system. Linaro is working with Huawei to further
                the capabilities of the Oniro OS (around trusted-boot and over-the-air updates), create a collaborative, Oniro OS Open CI testing
                system, and onboard Linaro Oniro project members and their devices into the project.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://git.ostc-eu.org/groups/distro/-/milestones
            - title: Optimize AI for Microcontrollers
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                The Optimize AI for Microcontrollers
                project is focused on the strategic AI
                libraries microTVM and Tensorflow
                Lite Micro. The aim of this project is to
                enable inference workloads on Arm
                microcontrollers while optimizing the
                AI compiler experience for deeply
                embedded environments.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/AIM/overview
      - format: buttons
        style: text-center
        buttons_content:
          - title: See all projects
            url: /projects/
            style: btn-lg btn-primary my-2
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
    sections:
      - format: title
        style: mt-4 text-white
        title_content:
          text: How to participate
          size: h2
      - format: text
        style: text-white
        text_content:
          text: |
            There are multiple ways to engage with Linaro.
      - format: custom_include
        source: themes/engagement_blocks_edge_iot_devices.html
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
