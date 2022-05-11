---
id: 1
title: Linux内核
sub_theme: true
lang: ch
permalink: /core-technologies/linux-kernel/
image: /assets/images/content/linux-kernel-share-image.png
icon: /assets/images/content/Icon_Linux_notext.svg
js-package: contactForm
description: >
  Linaro雇佣了大量的维护者，涵盖了广泛的重要领域。 这使我们能够在开源社区中走得更远，并产生真正的影响。
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/e6d3ba4d-9158-42f9-8df4-28eef7ecf78e
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Linux内核
  description: |
    Linaro雇佣了大量的维护者，涵盖了广泛的重要领域。 这使我们能够在开源社区中走得更远，并产生真正的影响。

    我们积极为上游社区做出贡献，并帮助促进 Linux 主线内核接受 Linaro 代码。 我们的最终目标是确保内核整合——一个集成支持多个 Arm SoC 和基于 Arm 的平台的源代码树。

    我们不仅专用于Arm架构的新功能的管理和实施支持，还涵盖了内核的核心功能。 在 Linux 和开源社区的传统中，大部分技术讨论都是通过电子邮件和 IRC 上的非正式对话进行的。
  image: /assets/images/content/Banner_Linux_Kernel.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro 项目专注于 Linux 内核
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: 功率和性能
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                多年来，设备变得更加紧凑和强大，但电池受到更多限制。 Linaro 的性能项目旨在通过改进 Linux 子系统（例如调度程序、热框架和传统电源管理子系统）来提高所有基于 Arm 的 Linux 系统的效率。 这些子系统会影响功耗性能，并帮助系统在达到最高性能的同时有效地使用功率预算。 这可以防止系统过热和崩溃。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/PERF/overview
            - title: 系统控制和管理界面
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                SoC 具有共享和关键资源，这些资源通常由专用且安全的电源协处理器 (SCP) 处理。 这个专用处理器负责收集不同子系统/客户端的需求。 然而，一些系统负担不起专用处理器或没有足够的客户端通道用于所有可能的子系统。 在这种情况下，SCMI 服务器必须能够运行与通常的 cortex M 裸机不同的执行环境。 这个 Linaro 项目解决了这些用例。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/SCMI/overview
      - format: buttons
        style: text-center
        buttons_content:
          - title: 所有项目
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
          text: 如何参加
          size: h2
      - format: text
        style: text-white
        text_content:
          text: |
            有多种方式可以与 Linaro 互动。
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: 加入 Linaro 俱乐部会员
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                如果您想在 Arm 生态系统的所有垂直领域与 Linaro 和其他行业领导者合作，俱乐部会员资格是您的正确选择。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: /membership/
            - title: 作为 Linaro 核心成员加入
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                如果您想参与 Linaro 所做的所有工作并访问您自己的专业工程团队，那么核心会员是您的正确选择。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: /membership/
            - title: 加入我们的团队！
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                我们经常聘请主题专家和维护人员 - 如果您有兴趣成为我们团队的一员，请访问 Linaro 职业页面以了解更多信息。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: /careers/
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
