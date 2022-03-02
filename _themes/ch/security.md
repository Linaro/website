---
id: 1
title: 安全
sub_theme: true
lang: ch
permalink: /core-technologies/security/
image: /assets/images/content/testing-and-ci-share-image.png
icon: /assets/images/content/Icon_Security_White.svg
icon_dark: /assets/images/content/Icon_Security_black.svg
js-package: contactForm
description: >
  安全不再是一种选择，它是能够保护知识产权、通信、银行账户、个人数字财产等的重要因素。
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/78d8b871-93f5-45a9-9ed0-2cdd8769f852
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 安全
  description: |
    安全不再是一种选择，它是能够保护知识产权、通信、银行账户、个人数字财产等的重要因素。

    要开发满足所有安全标准的解决方案，您需要对需要专家团队的大量技术有深入的了解。 自 Linaro 成立以来，安全一直是一个重要主题，我们继续在设计和开发 Arm 上多个开源项目中的基本安全组件方面发挥重要作用。
  image: /assets/images/content/Banner_Security.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro 对 Arm 安全性的贡献
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: OP-TEE
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                OP-TEE 是实现 Arm TrustZone 技术的开源可信执行环境 (TEE)。 Linaro 在使用 TrustZone 和可信执行环境 (TEE) 方面有着长期的记录。早在 2013 年，Linaro 就与 STMicroelectronics 一起开始着手准备 STMicroelectronics 的开源 TEE 专有解决方案。几个月后，OP-TEE 发布，从那时起，Linaro 一直是推动新功能以及进行路线图规划、维护、发布工作、漏洞评估和缓解安全问题的关键贡献者。我们为 P-TEE 项目雇佣了几个核心维护者，以及 Linux 内核和 U-Boot 中的 TEE 框架的维护者。由于 TEE 是 Arm 生态系统中的核心组件，因此它被用于许多不同的用例中。因此，Linaro 建立了强大的工程团队，他们知道如何使用 OP-TEE 将高效且性能良好的解决方案组合在一起，无论任务有多大。 2019 年，OP-TEE 被捐赠给了 Linaro 社区项目 [Trusted Firmware](/news/linaro-donates-op-tee-into-the-trusted-firmware-project/)。 Linaro 仍然负责与 Linaro 的成员以及 [TrustedFirmware.org 项目](https://trustedfirmware.org/) 同步推动 OP-TEE 的路线图。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LOC/overview
            - title: Morello
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                Morello 是一个由 Arm 与合作伙伴共同领导的研究项目，由 UKRI 资助，是英国政府数字安全设计 (DSbD) 项目的一部分。 它定义了一个基于 CHERI（能力硬件增强 RISC 指令）的新原型安全架构。 这种新的研究架构与我们目前在设备上使用的架构非常不同。 主要区别在于它使用 129 位 (128 + 1) 而不是标准的 64 位或 32 位。 最终目标是能够实现高粒度的划分，这样我们最终应该得到一个对众所周知的攻击更加健壮的系统。 例如，缓冲区溢出、面向返回的编程 (ROP) 和许多其他已知的漏洞类别。 Linaro 是该计划的积极参与者，为工具链、调试器、基础设施工作以及纯功能支持做出了贡献。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://www.arm.com/why-arm/architecture/cpu/morello
            - title: U-Boot 上的 EFI 启用
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                U-Boot 是一个主要的引导加载程序，用于嵌入式设备，用于打包引导设备操作系统内核所需的指令。 StandAloneMM (StMM) 是负责存储变量的 EDK2 应用程序。 由于近年来 U-Boot 已成为 EFI 意识，因此需要安全地存储变量。 在第一次迭代中，U-Boot 将变量存储在其环境中，这对于初始实现来说很好。 然而，这并没有提供任何安全保障。 这引发了关于是否可以利用在 Arm 设备安全端运行的现有技术的讨论，例如 TEE 和安全分区。 由于当前平台的限制，只能在安全端（S-EL1）运行单个有效负载，因此必须做出决定。 作为未来架构的垫脚石，Linaro 与 Arm 合作决定在 OP-TEE 中添加支持，这样就可以在未经修改的情况下使用 StMM。

                结合 OP-TEE 访问 RPMB 分区的能力，现在可以将 EFI 变量存储在安全世界或 RPMB 分区（在嵌入式设备上更常见）上的闪存中。 这一贡献实现了在当前 Arm 架构上存储 EFI 变量的安全方式。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://github.com/u-boot/u-boot
            - title: Zephyr 和 MCUboot
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                Zephyr 是一种实时操作系统 (RTOS)，适用于支持多种架构的资源受限嵌入式设备。从一开始，Linaro 就与 Zephyr 项目在各种技术上合作，但安全方面一直是 Linaro 在创建安全架构中发挥关键作用的重要领域。我们在安全架构方面的工作范围从系统和通信协议使用的加密算法支持到密钥管理和篡改/入侵检测系统。此外，我们的工作考虑到与 ARMv8-M 架构相关的安全扩展，使用 Cortex-M 的可信固件和 Arm 的平台安全架构 (PSA)。 2019 年 10 月，[我们使用 Zephyr 构建并认证了 PSA 1 级硬件和软件平台实施](https://www.linaro.org/news/linaro-contributes-to-the-zephyr-project-becoming-psa-认证/）。 Zephyr 安全架构师是 Linaro 的一名员工，负责领导安全架构讨论，并领导团队为项目创建各种安全流程。这包括与 MITRE 合作，将 Zephyr 作为 CVE 编号机构，并开发处理漏洞的流程。除了是 Zephyr 安全架构师之外，这位 Linaro 员工还是 MCUboot 项目（一个 Linaro 社区项目）的维护者。 MCUboot 是一个安全的引导加载程序，用作 Zephyr 的主要引导加载程序。开发与 Zephyr 安全性相关的多个标准 (RFC) 的过程也需要与 IETF 合作。
              buttons:
                - title: 了解有关 Zephyr 的更多信息
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://zephyrproject.org/
                - title: 了解有关 MCUboot 的更多信息
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://www.mcuboot.com/index.html
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
    background_image: /assets/images/content/Banner_Security.jpg
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
