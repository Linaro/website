---
id: 1
title: 工具链
sub_theme: true
lang: ch
permalink: /core-technologies/toolchain/
image: /assets/images/content/toolchain-share-image.png
icon: /assets/images/content/Icon_Toolchain_notext.svg
js-package: contactForm
description: >
  随着新 SoC功能的增加，工具链在不断演进。速度和空间优化变得越来越重要，尤其是在物联网领域。新的安全功能需要编译器和工具支持。
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/e07e525f-3fa5-44db-a1b2-bc673a318fe4
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 工具链
  description: |
    随着新 SoC功能的增加，工具链在不断演进。速度和空间优化变得越来越重要，尤其是在物联网领域。新的安全功能需要编译器和工具支持。

    世界瞬息万变，因此计算系统上的开放软件必须适应机器学习的更多使用，从而提高移动 CPU 性能。 Linaro 自 2010 年成立以来一直为 Arm 架构提供开源工具，直接与上游社区合作，如 GCC、Binutils、GDB、Glibc、Newlib、LLVM、Clang、LLD、LLDB、QEMU、Valgrind 和 OpenOCD。 我们的使命是改进和维护开源 Arm 工具链项目。

    我们致力于系统级工具开发的各个方面——核心开发工具链（编译器、汇编器、链接器、调试器）、核心系统库（动态链接器、c-库）和仿真。Linaro 为 ARM和 AArch64 架构 构建和测试 LLVM 社区集成版本 (http://releases.llvm.org/download.html)。 Linaro 维护者担任 QEMU 和 Glibc 项目的发布管理人。
  image: /assets/images/content/Banner_Toolchain.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro Projects 专注于工具链技术
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Arm GNU 工具链支持和 CI
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                GNU 编译器集合 (GCC) 是由 GNU 项目生产的编译器系统。 它支持各种编程语言，是 GNU 工具链的关键组件。 它是大多数与 GNU 和 Linux 相关的项目（包括 Linux 内核）的标准编译器。 这个 Linaro 项目专注于改进流行 Arm 内核的优化、支持编译器清理程序、支持新的 Armv8 架构特性和改进调试体验。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/GNU/overview
            - title: Arm LLVM 工具链启用和 CI
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                LLVM 是开源社区用来编译代码的主要工具之一。 它是一组可重用的编译器和工具链技术，用于开发任何编程语言的前端和任何指令集架构的后端。 LLDB 是 LLVM 项目的调试器组件。 Linaro 工具链团队积极维护 LLDB 项目，并拥有 Arm 和 AArch64 目标特定代码库。 我们针对AArch64和Arm目标进行了优化，实施了新的工具，并改进了现有的代码尺寸和速度。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LLVM/overview

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
    background_image: /assets/images/content/Banner_Toolchain.jpg
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
