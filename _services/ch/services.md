---
lang: ch
title: Linaro 开发者服务
description: |-
  我们以自己的经验和知识、能力、工作质量以及与客户的专业精神成为 Arm 软件工程专家而自豪。
permalink: /services/
service_id: 99
jumbotron:
  class: dev_services text-center
  title: "Linaro 开发者服务"
  inner_class: dev_services text-center
  title-class: my-md-4
  description: "帮助您在 Arm 上构建、部署和维护您的产品"
  image: /assets/images/content/Banner_Landing_page.png
image: /assets/images/content/LinaroDSVertical.png
flow:
  - row: container_row
    style: #
    sections:
      - format: text
        style: larger_type
        text_content:
          text: |
            从初始设计到开发、实施、支持和培训，Linaro 开发人员服务可帮助您利用 Arm 上的开源来确保快速上市、卓越的质量和安全性以及具有成本效益的长期维护。
      - format: buttons
        style: text-center
        buttons_content:
          - title: 我们的客户怎么说
            url: "#what_our_customers_say"
            style: btn-primary btn-lg
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_1.png
          title: 操作培训
          text: |
            Linaro 雇佣了许多世界领先的 Arm 软件专家。 您可以通过 Linaro 开发人员服务获得所有这些专业知识。

            [阅读更多](/services/hands-on-training/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_2.png
          title: 安全
          text: |
            作为 Arm 安全和可信执行环境 (TEE) 方面的专家，我们利用开源确保您从最新的上游功能和安全修复中受益。

            [阅读更多](/services/security/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_3.png
          title: 测试和长期支持
          text: |
            我们上游代码以减少维护您的产品所需的成本和工作量。 我们为您的软件提供持续集成 (CI) 和自动验证，以确保尽可能高的质量。

            [阅读更多](/services/testing-and-long-term-support/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_4.png
          title: 板级支持包 (BSP)
          text: |
            我们支持产品交付的各个方面，从构建安全的电路板支持包、产品验证和长期支持与维护。 我们帮助您更快地将产品推向市场。

            [阅读更多](/services/board-support-packages/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_6.png
          title: 系统性能与优化
          text: |
            我们可以支持在所有 Arm 平台上部署您的软件 - 从微控制器到 HPC 超级计算机 - 进行初始移植和优化性能。我们帮助您的产品更快地推向市场。

            [阅读更多](/services/system-performance-and-optimization/)
  - row: container_row
    style: dotted-border-top dotted-border-bottom services_feature highlighted_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_5.png
          title: 高通平台服务
          text: |
            Linaro Developer Services 是为 Qualcomm 平台提供 Linux BSP 开发、维护和优化的领导者。

            [阅读更多](/services/qualcomm-platforms-services/)
  - row: container_row
    id: what_our_customers_say
    style: text-center
    sections:
      - format: title
        style: text-left
        title_content:
          size: h2
          style: display-4 large_header
          text: 我们的客户怎么说
  - row: container_row
    style: bg-light testimonials
    sections:
      - format: custom_include
        source: services/testimonials.html
  - row: container_row
    style: text-center
    sections:
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#ds_contact_form"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block ds_contact_form_btn
          - title: 联系我们
            url: "#ds_contact_form"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_contact_form_btn
          - title: 下载开发者服务概述
            url: "#download_services_overview"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block ds_overview_download
          - title: 下载开发者服务概述
            url: "#download_services_overview"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_overview_download
  - row: custom_include_row
    source: services/developer_services_form.html
---
