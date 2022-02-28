---
id: 15
title: 客户端设备
sub_theme: false
lang: ch
permalink: /client-devices/
image: /assets/images/content/client-devices-share-image.png
icon: /assets/images/content/Client_Devices_icon_white.svg
icon_dark: /assets/images/content/CD.svg
icon_alt: /assets/images/content/Client_Devices_icon.svg
icon_col: /assets/images/content/Icon_Client_Devices_colour.svg
js-package: contactForm
description: >
  我们每天都在我们的设备上访问各种各样的应用程序，并期望无论我们使用什么操作系统，一切都能“正常工作”。 但是为了提供无缝的用户体验，很多工作都在后台进行。 Linaro 与 Google 密切合作，在 Arm 上推进 Android 生态系统。 除了与 Google 的合作之外，我们还与 Microsoft 密切合作以推进 Windows on Arm 生态系统。 在这两种情况下，Linaro 都在推动使开源软件包能够在运行 Windows 和/或 Android 的基于 Arm 的设备上本地运行所需的工作。
presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/307811da-98f5-4cfe-b63c-72b117b9c674
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 客户端设备
  description: |
    毫无疑问，Arm 芯片可以通过高效的功耗、快速的性能和全天的电池寿命提供卓越的用户体验。

    但对于在基于 Arm 的技术上运行的设备以真正利用这些功能，操作系统 (OS) 需要确保使用其操作系统的开源工具和应用程序可以在 Arm 上本地运行。 这是一项不小的任务，也是 Google 和 Microsoft 与 Linaro、其成员和开源社区合作的原因。 Linaro 推动了为 Arm 上的 Android 和 Windows 创建强大的生态系统所需的工作。 这些生态系统在为消费者提供卓越的用户体验方面发挥着至关重要的作用。
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
            ## Arm 上不断发展的生态系统，可提供卓越的最终用户体验

            为了提供最佳的最终用户体验，设备需要与最新的软件保持同步，并与第三方软件包很好地集成。 换句话说，需要有一个健康的生态系统来支持这些设备。 Linaro 与成员公司合作，通过帮助上游新功能、减少技术债务和检测回归来实现最佳用户体验。
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro 项目帮助在 Arm 上发展 Android 和 Windows 生态系统
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
                Windows on Arm 项目旨在为 Windows 建立一个健康的、自我维持的 Arm 开源生态系统。这涉及查看各种工具、语言和框架，并努力确保它们在 Windows on Arm 上原生运行。 最终目标是将 Windows on Arm 打造为一流的可交付成果。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/WOAR/overview
            - title: Android Runtime
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Android 运行时 (ART) 是 Android 上的应用程序和某些系统服务使用的托管运行时。 ART 及其前身 Dalvik 最初是专门为 Android 项目创建的。 ART 作为运行时执行 Dalvik 可执行格式和 Dex 字节码规范。 ART 和 Dalvik 是运行 Dex 字节码的兼容运行时，因此为 Dalvik 开发的应用程序在使用 ART 运行时应该可以工作。 然而，一些适用于 Dalvik 的技术不适用于 ART。 ART 支持 Java 和 Kotlin。
            - title: 面向 Android 的 Linux 内核开发
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                该项目的最终目标是启用和维护上游内核以与 Android/AOSP 良好配合，以便最终用户拥有使用最新和最安全技术的设备。 为了做到这一点，Linaro 定期使用 AOSP 测试上游内核，向社区提供回归报告，然后作者修复特定问题或将问题传递给正确的社区以采取行动。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LI/overview
            - title: 适用于 Android 的软件设备启用
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                具有良好软件支持的硬件（例如 96Boards）是测试和验证最新 AOSP 以及最新稳定和上游内核的关键工具，也是新硬件和软件原型设计的关键。 这个 Linaro 项目旨在生产可用于测试 AOSP 的开发板。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: hhttps://linaro.atlassian.net/wiki/spaces/SDEFAU/overview
      - format: buttons
        style: text-center
        buttons_content:
          - title: 查看所有项目
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
            有多种方式可以与 Linaro 互动。
      - format: custom_include
        source: themes/engagement_blocks_client_devices.html
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
