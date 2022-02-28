---
id: 14
title: 云计算和服务器
sub_theme: false
lang: ch
permalink: /cloud-computing-and-servers/
image: /assets/images/content/cloud-computing-and-servers-share-image.png
icon: /assets/images/content/CC_and_S_icon_white.svg
icon_dark: /assets/images/content/CC_S.svg
icon_alt: /assets/images/content/CC_and_S_icon_green.svg
icon_col: /assets/images/content/Icon_Cloud_Computer_colour.svg
js-package: contactForm
description: >
  传统数据中心正在从本地服务器机架过渡到第三方数据中心的云技术。 由于大流行和对远程工作的需求加速，数据中心和云基础设施预计将更快地提供更多连接 - 同时保持安全。 为了帮助实现这一目标，Linaro 与成员公司合作，为基于 Arm 的服务器启用关键开源项目。 我们所做的工作确保 Arm 服务器生态系统可以依赖优质软件。
video_resources_link: https://resources.linaro.org/en/themes/04687b37-4cdc-4716-a26b-64e0e55ed988
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 云计算和服务器
  description: |
    过去几年，Arm 在服务器领域被越来越多地采用，世界上最快的超级计算机——富士通的 Fugaku——在 Arm CPU 上运行。

    众所周知，Arm 芯片主导了移动市场。 Arm 为能够设计 Arm 芯片以满足特定需求的设备制造商提供的灵活性使其成为一个有吸引力的选择。 但要使 Arm 服务器芯片继续满足需要更多存储和更多数据的企业的需求，就需要有一个软件生态系统来帮助推动功能启用、测试和错误修复。 Linaro 与其成员公司合作，加强 Arm 服务器的软件生态系统。
  image: /assets/images/content/CCS_banner_image.jpg
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
          image: /assets/images/content/CCS_banner_image.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## 让 Arm 成为一等公民

            Linaro 与其成员公司一起致力于为基于 Arm 的服务器启用关键的开源项目。 我们称之为使 Arm 成为一等公民。 通过验证项目的持续构建、测试并为 Arm 服务器目标提供可用的二进制文件，Arm 生态系统能够依赖高质量的软件在生产环境中使用。
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro 项目为基于 Arm 的服务器提供优质软件
          size: h2
      # - format: custom_include
      #   source: themes/related_project_blocks.html
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: Arm 服务器架构
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                服务器技术在不断发展。 对于引导架构，这意味着 AArch64 引导过程应该使用已经普遍使用和积极开发的熟悉工具。 Arm 服务器架构项目主要关注 Arm UEFI、GRUB2 和相关组件。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/ASA/overview
            - title: 用于数据中心和边缘的 AI
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                该项目专注于优化 HPC 和 AI 计算性能的支持。 该项目正在解决人工智能训练和推理的广泛用例，针对基于 Armv8.x 的服务器和超级计算机，例如富士通的高端 Fugaku 超级计算机、Neoverse 和基于 Cortex-A 的边缘设备。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/AIA/overview
            - title: 大数据与数据科学
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                在过去两年中创建了 90% 的所有数据，大数据和数据科学技术至关重要，并且已经随着各种生产实施而变得成熟。 Linaro 为 Apache BigTop、Hadoop、Spark、Ambari 和 Drill 等项目推动工程活动和 ARMv8 构建。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/BDDS/overview
            - title: 云基础设施
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Linaro 在这一领域的目标是为开源云基础设施项目提供在 Arm64 上轻松部署、管理和交付性能的能力。 工程活动包括管理程序和基于容器的虚拟化（OpenStack、Kubernetes）和软件定义存储（Ceph）等技术。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/CLOUD/overview
            - title: 增强 Arm 服务器上的软件定义存储
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                由于性能的提高，与使用传统 HDD 磁盘相比，正在转向使用全闪存存储解决方案 (SSD/NVME)。 该项目的目标是与 Arm 服务器生态系统中的行业领导者合作，以便我们能够提供具有竞争力和领先的 Arm 服务器存储解决方案。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/STOR/overview
            - title: Linaro 生态系统仪表板
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Linaro 生态系统仪表板是一个一站式资源，供大家查找必要的软件项目信息和有关 Arm 支持的资源。 目的是提供 Arm 生态系统景观的完整图景。 目前 Linaro 生态系统仪表板专注于服务器领域，但 Linaro 将把它扩展到其他垂直领域。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://ecosystemdashboard.linaro.org/
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
    background_image: /assets/images/content/CCS_banner_image.jpg
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
        source: themes/engagement_blocks.html
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
