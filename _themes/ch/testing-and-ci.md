---
id: 1
title: 测试与 CI
sub_theme: true
lang: ch
permalink: /core-technologies/testing-and-ci/
image: /assets/images/content/Banner_Testing_CI.jpg
icon: /assets/images/content/Icon_Testing_notext.svg
js-package: contactForm
description: >
  Linaro 提供的软件工具可针对各种仿真和硬件目标（物联网、嵌入式和服务器）快速检测 Linux、Android、Zephyr 和其他操作系统中的构建和功能测试回归。
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/b14ff507-8b3e-4ce4-856d-ef161e2d4214
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: 测试与 CI
  description: |
    Linaro 提供的软件工具可针对各种仿真和硬件目标（物联网、嵌入式和服务器）快速检测 Linux、Android、Zephyr 和其他操作系统中的构建和功能测试回归。

    Linaro 成员有幸参与各种改进其设备上的操作系统软件的活动。 他们参与了 Linaro Linux 内核质量计划，部署了专门保持其产品 Linux 内核最新和上游的登陆团队，与 Linaro 合作以在 LAVA 中实现设备自动化，并利用 Linaro 的可扩展构建和测试解决方案在他们的设备上定期测试 Linux .

    Linaro 成员公司甚至通过 Linaro 指导的项目在 Linaro 中围绕测试建立自己的社区。 Linaro 成员花费更多时间专注于差异化技术，并且能够通过直接与 Linaro 合作，让测试团队专注于最后一英里的测试。
  image: /assets/images/content/Banner_Testing_CI.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: 专注于测试和 CI 的 Linaro 项目
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Linaro 自动化和验证架构 (LAVA)
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                LAVA 是开源的 Linaro 自动化和验证架构。 它是嵌入式设备和测试自动化的行业标准软件，也适用于物联网和服务器级设备。 它可以执行固件、操作系统（启动和功能）、应用程序和生产者-消费者测试。 作为 LAVA 的创造者，Linaro 拥有十多年改进该自动化软件的经验。 Linaro 的会员指导发展代表会员的利益。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://validation.linaro.org/
            - title: Tuxsuite
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                Linaro 的 TuxSuite™ 是 Linaro 测试工作的支柱。 这现在作为一项商业服务提供，以帮助任何有兴趣改进其 Linux 内核测试的人快速、大规模地这样做。 使用 TuxSuite 将您的测试从有限和不频繁变为持续和扩展。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://tuxsuite.com/
            - title: Linux 内核功能测试 (LKFT)
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                Linaro 的 Linux 内核质量计划涵盖 Linux 内核测试和 LTS 派生的 Android 通用内核的测试。 Linaro 的 Linux 内核功能测试框架 (LKFT) 是业界最可靠的 Linux 长期稳定功能测试框架。 每周，在最新的 6 个 Linux LTS 版本、linux-next 分支和 linux-mainline 分支中，Linaro 构建测试并在每次 git-branch 推送时报告超过 350 个版本+架构+目标组合。 我们在真实和模拟硬件上对近 40 种这些组合进行功能测试，并在 48 小时内一致地报告结果。 迄今为止，我们已经针对各种嵌入式、仿真和服务器平台运行了超过 1.56 亿次 Linux LTS 树的测试运行。 我们每周与 LTS 维护人员合作，在发布之前对最新的候选发布执行测试并报告回归。

                我们还每周构建和功能测试（Android CTS 和 VTS）Android Common Kernels，并分别向 Linux 上游维护者和 Google 直接报告 Linux 内核和 AOSP 中的回归。 迄今为止，我们已经针对各种移动芯片组进行了超过 5.3 亿次测试，在它们影响生产移动设备之前防止了回归。 探索 Linaro 的 Linux 内核功能测试项目：
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://lkft.linaro.org/
            - title: 软件质量仪表板软件 (SQUAD)
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                SQUAD 是 Linaro 的开源软件质量仪表板软件。 它是云部署和可扩展的软件，用于调度、聚合、收集软件测试结果，并通过报告前端直接呈现它们，或通过报告 API 用于客户结果组合。 SQUAD 还能够维护软件基线、执行结果比较以及使用项目模板生成电子邮件报告。 它支持具有权限和访问层的混合租户结果，可以分别提供对公共和私有数据的精细访问。
              buttons:
                - title: 了解更多
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://github.com/Linaro/squad
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
