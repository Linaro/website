---
id: 1
title: 虚拟化
sub_theme: true
lang: ch
permalink: /core-technologies/virtualization/
image: /assets/images/content/virtualization-share-image.jpg
icon: /assets/images/content/Icon_Virtualization_notext.svg
js-package: contactForm
description: >
  虚拟化几乎可以用于任何用例，它在自动驾驶等新兴技术中发挥着越来越重要的作用。 Linaro 在 QEMU（一个开源管理程序）中发挥着关键作用。
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/4176e32f-5e66-492d-bbc9-b428446048c9
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 虚拟化
  description: |
    从更快的周转时间到减少停机时间和成本，虚拟化的好处显而易见。

    虚拟化几乎可以用于任何用例，它在自动驾驶等新兴技术中发挥着越来越重要的作用。 Linaro 在 QEMU（一个开源管理程序）中发挥着关键作用。 Linaro 员工和受让人不仅担任代码库中 Arm 特定区域的维护者，而且我们还负责 TCG 代码生成、构建和测试自动化以及发布管理等领域。 除了我们在 QEMU 中的工作外，我们还推动了 Stratos 项目，该项目正在开发与虚拟机管理程序无关的 Virtio 接口和标准，以应对更丰富的生态系统，例如汽车和物联网。
  image: /assets/images/content/Banner_Virtualization.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: 专注于虚拟化的 Linaro 项目
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: 在 QEMU 中启用 Arm 架构
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                QEMU 是一个免费的开源模拟器和虚拟器。 Linaro 在确保 ARM 生态系统得到良好代表和积极维护的项目中发挥着关键作用。 我们利用我们作为维护者的专业知识来支持成员和更广泛社区的新功能的上游化。 我们一直在参与开发这个备受推崇的项目的公司中排名前三。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/QEMU/overview
            - title: Project Stratos
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                在传统服务器环境以外的领域，虚拟化的趋势正在增长。 服务器环境本质上是统一的，但随着我们在汽车、医疗和通用移动和物联网领域走向更丰富的生态系统，丰富的管理程序和 SoC 阵列成为一个问题。 Project Stratos 正致力于开发与虚拟机管理程序无关的 Virtio 接口和标准。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/STR/overview

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
    background_image: /assets/images/content/Banner_Virtualization.jpg
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
