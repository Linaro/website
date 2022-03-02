---
id: 17
title: 汽车、物联网和边缘设备
slug_title: Automotive, IoT & Edge Devices
sub_theme: false
lang: ch
permalink: /automotive-iot-and-edge-devices/
image: /assets/images/content/automotive-iot-and-edge-share-image.png
icon: /assets/images/content/Auto_IoT_Edge_white.svg
icon_dark: /assets/images/content/AIoTE.svg
icon_alt: /assets/images/content/Auto_IoT_Edge_blue.svg
icon_col: /assets/images/content/Icon_Automotive_IoT_Edge_colour.svg
js-package: contactForm
description: >
  消费者希望始终保持连接，始终在线。 满足这种需求是复杂的，需要设备处理恒定的数据流并与其他类型的设备进行通信——通常是大规模的和在多个位置。 而这一切都需要安全地完成。 驱动这些用例的技术在不断发展，但都存在一个共同点——缺乏标准化。 Linaro 正在与其成员公司合作开发开放标准和接口，这将有助于加速其汽车、物联网和边缘解决方案的部署。
# presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/50057078-8f3b-4615-8f44-67c194e43b69
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 汽车、物联网和边缘设备
  description: |
    软件定义的功能不再局限于云网络，现在有望扩展到边缘。

    自主 AI 驱动的功能正在部署到网关甚至传感器的信任位置。推动向软件定义车辆发展的区域架构革命只是行业已转向软件优先方法的一个指标。 支撑这些用例的技术在不断发展，但都存在一个共同点——缺乏开放的软件标准化。
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
            ## 汽车、物联网和边缘解决方案的开放标准

            向软件优先方法的转变，加上人工智能的进步，有可能创造一个我们的设备始终连接、相互通信并由智能决策驱动的世界。 但为了充分发挥始终连接、始终在线的世界的全部潜力，标准化是关键。 Linaro 与成员公司合作开发开放标准和接口，这将有助于加速和安全部署其汽车、物联网和边缘解决方案。
  - row: container_row
    style: bg-lighter-blue text-center
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: 可供下载的白皮书 (PDF)
          size: h2
      - format: custom_include
        source: themes/automotive_iot_white_paper_blocks.html
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro Projects 为汽车、物联网和边缘用例提供标准化
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
                在传统服务器环境以外的领域，虚拟化的趋势正在增长。 服务器环境本质上是统一的，但随着我们在汽车、医疗和通用移动和物联网领域走向更丰富的生态系统，丰富的管理程序和 SoC 阵列成为一个问题。 Project Stratos 正致力于开发与虚拟机管理程序无关的 Virtio 接口和标准。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/STR/overview
            - title: Open-CMSIS-Pack
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Open-CMSIS-Pack 项目正在为软件组件打包和相关基础工具提供标准，用于验证、分发、集成、管理和维护微控制器软件。 它旨在为嵌入式软件创建一个灵活且易于使用的端到端开发流程——从项目创建到在真实或虚拟硬件上执行软件。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/CMSIS/overview
            - title: 可信基板
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Trusted Substrate 是一种 BIOS，可为汽车和机器人等最需要信任的嵌入式计算项目带来基于标准的安全启动和无线 (OTA) 更新。 该项目旨在将所有必要技术上游到多个项目中，以实现 Arm SystemReady 合规性。
              buttons:
                - title: 下载白皮书
                  style: btn-lg btn-primary mb-2
                  url: https://linaro.co/trusted-substrate-white-paper
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/TS/overview
            - title: LEDGE 参考平台
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                为了使任何组织能够轻松地为垂直市场创建 Linux 发行版，专注于操作系统的高级功能，Linaro 创建了 LEDGE 参考平台。 LEDGE 参考平台 (RP) 是一个轻量级、高度安全和健壮的容器运行时环境，具有可靠的启动和更新功能。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LRP/overview
            - title: Oniro
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Oniro OS 是 HarmonyOS 操作系统的公开可用的开源版本。 Linaro 正在与华为合作，进一步提升 Oniro OS 的功能（围绕可信启动和无线更新），创建一个协作的 Oniro OS Open CI 测试系统，并将 Linaro Oniro 项目成员及其设备加入到项目中 .
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://git.ostc-eu.org/groups/distro/-/milestones
            - title: Optimize AI for Microcontrollers
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Optimize AI for Microcontrollers 项目专注于战略 AI 库 microTVM 和 Tensorflow Lite Micro。 该项目的目的是在 Arm 微控制器上启用推理工作负载，同时优化深度嵌入式环境的 AI 编译器体验。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/AIM/overview
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
    background_image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
    sections:
      - format: title
        style: mt-4 text-white
        title_content:
          text: 如何参加
          size: h2
      - format: text
        style: text-white
        text_content:
          text: |
            有多种方式可以与 Linaro 互动。
      - format: custom_include
        source: themes/engagement_blocks_edge_iot_devices.html
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
