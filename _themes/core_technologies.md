---
id: 15
title: Core Technologies
sub_theme: false
permalink: /core-technologies/
image: /assets/images/content/Client_Devices_banner_pic.jpg
icon: /assets/images/content/Client_Devices_icon_white.svg
icon_dark: /assets/images/content/Client_Devices_icon_dark.svg
icon_alt: /assets/images/content/Client_Devices_icon.svg
js-package: contactForm
description: >
  One of the main objectives when forming Linaro
  was to consolidate the Arm code base.
presentation_link: https://linaro.co/android-slides
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Core Technologies
  description: |
    One of the main objectives when forming Linaro
    was to consolidate the Arm code base.

    The code churn created by multiple companies and individuals trying to upstream essentially the same code into
    kernel.org was causing fragmentation and slowing down innovation and delivery of products. Linaro’s work, especially in
    the kernel, provided the focal point for collaboration and the situation recognizably improved by 2012, something Linus
    Torvalds recognized. Since the Linux kernel release 3.10, Linaro has been consistently listed as one of the top ten
    company contributors, worldwide, to Linux kernel. We are also widely recognized for the work we have done on
    toolchains such as GCC and LLVM. In addition to our work in the Linux kernel and toolchains, we are known for our
    expertise in security and testing through projects such as OP-TEE, LAVA and LKFT.
  image: /assets/images/content/Client_Devices_banner_pic.jpg
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
          image: /assets/images/content/Mobile_Ecosystem_pic.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## Accelerating time to market through collaboration on low-level functionality

            Regardless of market or device, all products require low-level
            functionality - tools, frameworks, testing mechanisms and
            security - in order to function. Developing this low-level
            functionality in house is costly and requires a wide range of
            expertise which is why member companies choose to work with
            Linaro and other industry leaders to develop the foundations
            once. Not only does this enable them to leverage the expertise
            of our technical domain experts but it also reduces overall costs
            through shared engineering resource. Working together with
            Linaro engineers who are well versed in navigating open source
            communities in turn accelerates time to market.
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro Projects enabling the optimal user experience for Android on Arm
          size: h2
      # - format: custom_include
      #   source: themes/related_project_blocks.html
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: Android Runtime
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Android runtime (ART) is the managed
                runtime used by applications and some
                system services on Android. ART and
                its predecessor Dalvik were originally
                created specifically for the Android
                project. ART as the runtime executes
                the Dalvik Executable format and Dex
                bytecode specification. ART and Dalvik
                are compatible runtimes running Dex
                bytecode, so apps developed for
                Dalvik should work when running with
                ART. However, some techniques that
                work on Dalvik do not work on ART.
                ART supports both Java and Kotlin.
            - title: Linux Kernel Development Targeting Android
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                The ultimate aim of this project is to
                enable and maintain upstream kernels
                to work well with Android/AOSP so
                that end users have devices which are
                using the latest and most secure
                technology. In order to do this, Linaro
                regularly tests upstream kernels with
                AOSP, delivers regression reports to
                the community and then authors fixes
                to specific issues or passes issues
                along to the correct community to
                take action.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LI/overview
            - title: Software Device Enablement for Android
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Hardware with good software
                support, such as 96Boards, is a critical
                tool both for testing and validation of
                the latest AOSP and latest stable and
                upstream kernels, but also key for
                prototyping both new hardware and
                software. This Linaro Project aims to
                produce development boards which
                can be used for testing AOSP.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: hhttps://linaro.atlassian.net/wiki/spaces/SDEFAU/overview
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
    background_image: /assets/images/content/Client_Devices_banner_pic.jpg
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
        source: themes/engagement_blocks_client_devices.html
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
