---
js-package: contactForm
icon_alt: /assets/images/content/Auto_IoT_Edge_blue.svg
slug_title: Automotive, IoT & Edge Devices
title: Automotive, IoT & Edge Devices
description: >
  Linaro works with its member companies on developing open standards &
  interfaces which helps accelerate deployment of their Automotive, IoT and Edge
  solutions.
permalink: /automotive-iot-and-edge-devices/
sub_theme: false
icon: /assets/images/content/Auto_IoT_Edge_white.svg
icon_dark: /assets/images/content/AIoTE.svg
icon_col: /assets/images/content/Auto_IoT_Edge_icon.svg
video_resources_link: https://resources.linaro.org/en/themes/50057078-8f3b-4615-8f44-67c194e43b69
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Automotive, IoT & Edge Devices
  description: >-
    Open standards for Automotive, IoT & Edge solutions


    Software defined functionality is no longer restricted to the cloud network but is now expected to extend to the edge. Autonomous AI-driven features are being deployed to positions of trust in gateways and even sensors.The Zonal Architecture revolution driving the evolution to software-defined vehicles is just one indicator that industry has switched to a software-first methodology. The technologies underpinning these use cases are continuously evolving but all suffer from one common denominator - the lack of open software standardization. Linaro works with member companies on developing open standards and interfaces which will help accelerate and secure deployment of their Automotive, IoT and Edge solutions.
  image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
flow:
  - row: custom_include_row
    source: themes/associated_members.html
  - row: container_row
    style: bg-blue py-4 mb-5
    sections: []
  - row: container_row
    style: text_blocks bg-secondary
    sections:
      - format: youtube
        style: null
        poster_image: /assets/images/content/confidential-ai-screen-capture.png
        url: https://www.youtube.com/watch?v=uHXRuE1c5nI
        title: Confidential AI
  - row: container_row
    style: bg-lighter-blue text-center
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: White Papers available to download (PDF)
          size: h2
      - format: custom_include
        source: themes/whitepaper_blocks.html
        category: automotive
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro Projects delivering standardization to Automotive, IoT & Edge use
            cases
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Project Stratos
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
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
                - title: Project Stratos
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/STR/overview
            - title: Open-CMSIS-Pack
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
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
                - title: Open-CMSIS-Pack project
                  style: btn-lg text-btn
                  textBtn: true
                  url: https://linaro.atlassian.net/wiki/spaces/CMSIS/overview
            - title: Trusted Substrate
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
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
                - title: Trusted Substrate White Paper
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.co/trusted-substrate-white-paper
                - title: Trusted Substrate
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/TS/overview
            - title: Oniro
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                Oniro OS is a publicly available open source version of the
                HarmonyOS operating system. Linaro is working with Huawei to
                further

                the capabilities of the Oniro OS (around trusted-boot and over-the-air updates), create a collaborative, Oniro OS Open CI testing

                system, and onboard Linaro Oniro project members and their devices into the project.
              buttons:
                - title: Oniro
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://git.ostc-eu.org/groups/distro/-/milestones
            - title: Optimize AI for Microcontrollers
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
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
                - title: Optimize AI for Microcontrollers
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/AIM/overview
            - title: Heterogeneous Platform
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                The Heterogeneous Platform project is focused on software that
                allows the different core types or OS types to work together and
                creates a standards based framework to make the system
                developers job easier. The majority of Automotive SOCs use
                multiple CPU core types. Adding M profile or R profile cores to
                a SOC with A profile cores, allows the A profile cores to focus
                on the Linux tasks it is designed for, while M/R cores can focus
                on low latency sense/control loops, isolated security, or
                increased safety.
              buttons:
                - title: Heterogeneous Platform
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/HPP/overview
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
      - format: block
        style: pb-4 text-left
        item_width: "6"
        block_section_content:
          blocks:
            - title: Join Linaro's Edge & Fog Computing Group
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                If you want to collaborate with Linaro and other industry
                leaders on projects which specifically tackle challenges in the
                edge computing space, the Linaro Edge & Fog Computing Group is
                the option for you. The Linaro Edge & Fog Computing Group and
                its members have joined forces to make hybridization a reality
                through two major efforts - Trusted Substrate and the LEDGE
                Reference Platform.
              buttons:
                - title: Linaro's Edge & Fog Computing Group
                  textBtn: true
                  style: btn-lg text-btn
                  url: /membership/groups/
            - title: Join Linaro's IoT & Embedded Group
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                If you want to collaborate with Linaro and other industry
                leaders on projects which specifically tackle challenges in the
                IoT space, the Linaro IoT & Embedded Group is the option for
                you. Linaro's IoT and Embedded Group members work
                collaboratively to create and support key standards and best in
                class implementations to enable secure connected devices in the
                Arm ecosystem.
              buttons:
                - title: Linaro's IoT & Embedded Group
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/groups/
            - title: Join as a Linaro Club Member
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                If you want to collaborate with Linaro and other industry
                leaders on all verticals in the Arm Ecosystem, club membership
                is the right option for you.
              buttons:
                - title: Linaro Club Membership
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/
            - title: Join our team!
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                We frequently hire subject matter experts and maintainers - if
                you're interested in becoming part of our team, go to the Linaro
                careers page to find out more.
              buttons:
                - title: Linaro Vacancies
                  style: btn-lg text-btn
                  textBtn: true
                  url: /careers/
            - title: Join as a Linaro Core Member
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column
                justify-content-between align-items-start
              description: >
                If you want to participate in all the work Linaro does as well
                as have access to your own dedicated engineering team, then core
                membership is the right option for you.
              buttons:
                - title: Linaro Core Membership
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
id: 17
image: /assets/images/content/automotive-iot-and-edge-share-image.png
---
