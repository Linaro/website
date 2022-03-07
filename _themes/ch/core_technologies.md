---
id: 15
title: 核心技术
slug_title: Core Technologies
sub_theme: false
lang: ch
permalink: /core-technologies/
image: /assets/images/content/core_technologies_share_image.png
icon: /assets/images/content/Icon_Core_Technologies_notext.svg
icon_dark: /assets/images/content/Core.svg
icon_alt: /assets/images/content/Icon_Core_Technologies_notext.svg
icon_col: /assets/images/content/Icon_Core_Technologies_Colour.svg
js-package: contactForm
description: >
  有所有产品都依赖的核心软件，构建块可以开发额外的功能和特性来解决特定的用例。 Linaro 成立于 2010 年，旨在帮助开发这些核心技术，因为 Arm 代码库分散，导致产品创新和部署延迟。 我们帮助实现了这一目标，并继续发展和共同维护这些技术，特别关注 Linux 内核、Arm 工具链、测试和 CI、安全性和虚拟化。 近年来，我们还致力于将一流的 ML 推理和 AI 引入 Arm 生态系统。
# presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/cc312f4a-8546-4e22-8895-3a98acfc3e10
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 核心技术
  description: |
    组建 Linaro 的主要目标之一是巩固 Arm 代码库。

    多家公司和个人试图将本质上相同的代码上传到 kernel.org 所产生的代码搅动导致了碎片化，并减缓了产品的创新和交付。 Linaro 的工作，尤其是在内核方面的工作，提供了协作的焦点，并且到 2012 年情况明显改善，这是 Linus Torvalds 认识到的。 自 Linux 内核 3.10 版以来，Linaro 一直被列为对Linux内核做出贡献的全球前十名公司之一。 我们在 GCC 和 LLVM 等工具链上所做的工作也得到了广泛认可。 除了我们在 Linux 内核和工具链方面的工作外，我们还以通过 OP-TEE、LAVA 和 LKFT 等项目在安全和测试方面的专业知识而闻名。
  image: /assets/images/content/Banner_Core_Technologies.jpg
flow:
  - row: custom_include_row
    source: themes/associated_members.html
  - row: container_row
    style: bg-blue py-4
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          image: /assets/images/content/Code_Image_Core_tech.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## 通过低级功能协作加快上市时间

            无论市场或设备如何，所有产品都需要低级功能——工具、框架、测试机制和安全——才能发挥作用。 在内部开发这种低级功能成本高昂，并且需要广泛的专业知识，这就是成员公司选择与 Linaro 和其他行业领导者合作开发基础的原因。 这不仅使他们能够利用我们技术领域专家的专业知识，而且还通过共享工程资源降低了总体成本。 与精通开源社区导航的 Linaro 工程师一起工作可以加快产品上市时间。
  - row: container_row
    style: bg-secondary py-4 text-white
    sections:
      - format: title
        style: font-weight-bold mt-4 text-white
        title_content:
          text: 提供差异化基础的技术
          size: h2
      - format: text
        text_content:
          text: |
            Linaro 在维护和发展 Arm 上的基础开源软件方面发挥着重要作用。 **通过选择感兴趣的技术了解更多关于我们的贡献:**
      - format: custom_include
        source: themes/core_technologies_blocks.html
  - row: container_row
    style: bg-green mb-5
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Banner_Core_Technologies.jpg
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
