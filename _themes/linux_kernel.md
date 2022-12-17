---
title: Linux Kernel
description: >
  We actively contribute to the upstream community and help facilitate
  acceptance of Linaro code into the Linux mainline kernel. Read more about the
  work Linaro does on the Linux Kernel!
permalink: /core-technologies/linux-kernel/
js-package: contactForm
sub_theme: true
icon: /assets/images/content/Icon_Linux_notext.svg
video_resources_link: https://resources.linaro.org/en/themes/e6d3ba4d-9158-42f9-8df4-28eef7ecf78e
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Linux Kernel
  description: >
    Linaro employs a significant number of

    maintainers covering a wide range of important

    areas. This allows us to reach far within open

    source communities and have a real impact.


    We actively contribute to the upstream community and help facilitate

    acceptance of Linaro code into the Linux mainline kernel. Our ultimate goal is to

    ensure kernel consolidation - a single source tree with integrated support for

    multiple Arm SoCs and Arm-based platforms.


    We manage and implement support of new features not only dedicated to Arm

    architecture but also covering core functionalities of the kernel. In the tradition

    of Linux and the open source community, much of the technical discussion takes

    place over email and informal conversations on IRC.
  image: /assets/images/content/Banner_Linux_Kernel.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro Projects focused on the Linux Kernel
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Power and Performance
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content
                d-flex flex-column justify-content-around align-items-baseline
              description: |
                Over the years devices have become more compact and
                powerful yet batteries are more constrained. Linaro’s
                Performance Project aims to improve the efficiency of all Arm
                based Linux systems by improving Linux subsystems such as
                the scheduler, thermal framework and traditional power
                management subsystems. These subsystems influence
                performance of power consumption and help systems use
                power budget efficiently while reaching maximum
                performance. This prevents systems from overheating and
                crashing.
              buttons:
                - title: Power and Performance
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/PERF/overview
            - title: System Control and Management Interface
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content
                d-flex flex-column justify-content-around align-items-baseline
              description: |
                SoC have shared and critical resources which are usually
                handled by a dedicated and secured power coprocessor (SCP).
                This dedicated processor is in charge of gathering requirements
                of the different subsystem/clients. However, some systems
                cannot afford a dedicated processor or do not have enough
                client channel for all possible subsystems. In such cases, an
                SCMI server must be able to run a different Execution
                environment than the usual cortex M bare metal. This Linaro
                project addresses those use cases.
              buttons:
                - title: System Control and Management Interface
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/SCMI/overview
      - format: buttons
        style: text-center
        buttons_content:
          - title: All Projects
            url: /projects/
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Banner_Linux_Kernel.jpg
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
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
id: 1
image: /assets/images/content/linux-kernel-share-image.png
---
