---
id: 15
title: Client Devices
sub_theme: false
permalink: /client-devices/
image: /assets/images/content/client-devices-share-image.png
icon: /assets/images/content/Client_Devices_icon_white.svg
icon_dark: /assets/images/content/CD.svg
icon_alt: /assets/images/content/Client_Devices_icon.svg
js-package: contactForm
description: >
  We access a wide range of applications on our devices every single day and expect things to “just work” regardless of what operating system we are using. But a lot of work happens in the background in order to deliver that seamless user experience. Linaro works closely with Google to advance the Android ecosystem on Arm. In addition to our collaboration with Google, we also work closely with Microsoft to advance the Windows on Arm ecosystem. In both cases, Linaro is driving the work needed to enable open source packages to run natively on Arm-based devices running Windows and/or Android.
presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/307811da-98f5-4cfe-b63c-72b117b9c674
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Client Devices
  description: |
    There is no doubt that Arm chips can deliver an exceptional user experience through efficient power consumption, fast performance and all day battery life.

    But for devices running on Arm-based technology to truly leverage these capabilities, operating systems (OS) need to ensure that open source tools and applications using their OS can run natively on Arm. This is no small task and the reason why Google and Microsoft collaborate with Linaro, its members and the open source community. Linaro drives the work needed to create strong ecosystems for Android and Windows on Arm. These ecosystems play a crucial role in delivering exceptional user experiences to consumers.
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
            ## Growing ecosystems on Arm which deliver exceptional end-user experiences

            In order to deliver the best end user experience, devices need to be kept up to date with the latest software and integrate well with third party packages. In other words, there needs to be a healthy ecosystem supporting these devices. Linaro works with member companies to achieve the optimal user experience by helping upstream new features, reduce technical debt and detect regressions.
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro Projects helping grow the Android and Windows Ecosystems on Arm
          size: h2
      # - format: custom_include
      #   source: themes/related_project_blocks.html
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Windows on Arm
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                The Windows on Arm project aims to establish a healthy self-sustaining Arm open source ecosystem for Windows.This involves looking at a diverse set of tools, languages and frameworks and working to ensure these run natively on Windows on Arm. The ultimate goal is to establish Windows on Arm as a first-class deliverable.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/WOAR/overview
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
