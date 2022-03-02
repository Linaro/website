---
lang: ch
title: 构建和下载
description: Linaro 维护各种开发存储库并定期发布构建版本，例如 Android、LAVA 测试框架以及 GNU 和 LLVM 工具链。 此页面提供了 Linaro 工程团队制作的许多更受欢迎的下载链接。
permalink: /downloads/
keywords:
  - GNU
  - LLVM
  - Windows on Arm
  - GCC
  - Cortex-A GCC 8.3-2019.03
  - Arm
  - Ledge
  - Linaro Toolchain
  - Toolchain
  - Linaro Member Builds
  - Openstack-Powered Rocky
  - Binary Toolchain Releases
layout: flow
jumbotron:
  class: header_2021 text-center
  image: /assets/images/content/IMAGE_HOMEPAGE.jpg
  title: 构建和下载
  title-class: font-weight-bold
  description: ""
flow:
  - row: container_row
    sections:
      - format: text
        text_content:
          text: >-
            自 2010 年以来，Linaro 在上游 Arm 软件方面发挥了关键作用，其许多工程师积极维护开源项目。 此页面提供了 Linaro 工程团队当前制作的下载链接。


            如果您有任何技术疑问，请前往 [Linaro 的支持页面](https://www.linaro.org/support/) 向 Linaro 开发人员技术支持团队提交工单。 对于任何其他查询 [单击此处](https://www.linaro.org/contact/)。
  - row: container_row
    style: bg-secondary
    sections:
      - format: block
        item_width: auto
        block_section_content:
          blocks:
            - title: Linaro 的 GNU 和 LLVM 工具链
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#gnu_and_llvm"
            - title: Linaro 的持续集成和验证工具
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#ci_and_validation"
            - title: Linaro 针对 Qualcomm™ Snapdragon® 处理器的 Linux 版本
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#releases_for_snapdragon"
            - title: LEDGE 参考平台
              style: text-center
              content_style: d-flex align-items-center blue_block
              url: "#ledge_rp"
  - row: container_row
    style: text_blocks_1
    sections:
      - format: title
        style: block_bg_header
        title_content:
          style: font-weight-bold
          id: gnu_and_llvm
          text: Linaro 的 GNU 和 LLVM 工具链
          size: h2
      - format: title
        style: icon_heading
        title_content:
          text: gnu gcc compiler download
          size: h2
          icon: /assets/images/projects/gnu.png
      - format: text
        text_content:
          text: >
            用于 AArch64 和 ARM 32 位 A-Profile 内核的预构建 GNU 交叉工具链的正式 Arm 版本现已在 [Arm 开发人员网站] (https://developer.arm.com/tools-and-software) 上提供 /open-source-software/developer-tools/gnu-toolchain/gnu-a/downloads）。


            Linaro 还每月提供 [GNU 工具链集成构建](https://snapshots.linaro.org/gnu-toolchain/)，为用户提供上游构建的快照。 这些构建允许开发人员在预先构建的二进制文件进入上游后立即对其进行测试。
      - format: title
        style: icon_heading
        title_content:
          text: LLVM 工具链
          size: h2
          icon: /assets/images/projects/llvm-icon.PNG
      - format: text
        text_content:
          text: >
            用于 AArch64 和 ARM 32 位 A-Profile 内核的预构建 LLVM 本机工具链的官方社区版本由 Linaro 构建和测试，现在可在 [LLVM 的 GitHub](https://github.com/llvm/llvm -项目/发布/）。


            除了通常的 Linux 托管 LLVM 工具链外，Linaro 现在还提供 [official LLVM Toolchain for Windows on Arm](https://github.com/llvm/llvm-project/releases/download/llvmorg-12.0.0/LLVM-12.0.0-woa64.exe) 从 LLVM 12.0.0 版本开始。


            对 Arm 嵌入式处理器的 Cortex-R 和 Cortex-M 裸机目标工具链感兴趣？ 我们正在与 Arm 合作，每年提供一个新版本（每季度更新一次）。 版本维护两年。 您可以直接从 [Arm 网站](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm) 获得这些。
      - format: title
        style: block_bg_header
        title_content:
          style: font-weight-bold
          text: Linaro 的持续集成和验证工具
          id: ci_and_validation
          size: h2
      - format: title
        style: icon_heading
        title_content:
          text: LAVA - Linaro 的自动验证架构
          size: h2
          icon: /assets/images/projects/lava-icon.PNG
      - format: text
        text_content:
          text: >
            Linaro 自动验证架构 (LAVA) 是 Linaro 用来验证其版本的测试和持续集成框架。 源代码是开放的，因此 Linaro 成员公司和其他公司可以创建自己的实例并在此标准框架内运行专有测试。


            推荐的两种安装 Lava 的方法是通过 DEB 或 Docker：


            - [推荐的 Debian 架构](https://docs.lavasoftware.org/lava/installing_on_debian.html#recommended-debian-architectures)
            - [使用 Docker 管理 LAVA — LAVA 2021.05 文档](https://docs.lavasoftware.org/lava/docker-admin.html?#official-lava-software-docker-images)

            - [单击此处了解有关 LAVA 的更多信息。](https://validation.linaro.org/)
      - format: title
        style: icon_heading
        title_content:
          text: SQUAD - Linaro 的报告工具
          size: h2
          icon: /assets/images/projects/squad-icon.PNG
      - format: text
        text_content:
          text: >
            SQUAD 是一个基于网络的报告工具。 它由 Linaro 创建，用于涵盖 Linaro 团队的基本测试结果报告。 它可以从直接提交或从 LAVA 等测试工具收集通过/失败结果和基准。


            - [点击这里下载 SQUAD](https://pypi.org/project/squad-client/)

            - [单击此处以了解有关 SQUAD 的更多信息](https://squad.readthedocs.io/en/latest/)
      - format: title
        style: icon_heading
        title_content:
          text: TuxSuite
          size: h2
          icon: /assets/images/projects/tuxsuite-icon.PNG
      - format: text
        text_content:
          text: >-
            [TuxSuite™](https://tuxsuite.com/) 提供按需 API 和工具，用于并行构建和测试 Linux 内核。 Tuxsuite 由 Linaro 创建，是我们测试工作的支柱，任何有兴趣更快、更大规模地进行 Linux 内核测试的人都可以使用它。


            您可以[下载 TuxSuite 客户端](https://docs.tuxsuite.com/#install-and-configure) 使用 Linaro 的 TuxSuite 服务，也可以下载后端工具自行运行。


            TuxMake 跨不同架构、配置、目标和工具链自动构建 Linux。 指定您的选择，TuxMake 会为您驱动构建，每次都以相同的方式执行相同的步骤。 [在此处下载 TuxMake](https://tuxmake.org/#installing-tuxmake)。


            TuxRun 在 QEMU 下自动启动和测试 Linux。 它支持 TuxMake 支持的几乎所有架构。 [在此处下载 TuxRun](https://tuxrun.org/install-pypi/)。
      - format: title
        style: block_bg_header
        title_content:
          style: font-weight-bold
          text: 适用于 Qualcomm™ Snapdragon® 处理器的 Linaro Linux 版本
          id: releases_for_snapdragon
          size: h2
      - format: text
        text_content:
          text: >
            Linaro 发布了一套 Linux 软件版本，适用于基于 Qualcomm Snapdragon 处理器的平台，例如 Dragonboard 410c、Qualcomm Robotics RB3 或 RB5。 Linaro 的版本基于 Linux 主线内核，并且完全依赖于开源用户空间包。 Linaro 提供基于 Yocto 项目和 Debian 的参考实现。 有关受支持平台的更多信息，请访问 [96boards.org 网站](https://www.96boards.org/documentation/consumer/dragonboard/)。


            <table class="table table-bordered">
              <thead>
                <td>Qualcomm Platform</td>
                <td>Linux OS</td>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2">Dragonboard 410c</td>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard410c/linaro/debian/latest/">Debian</a></td>
                </tr>
                <tr>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard410c/linaro/openembedded/latest/">OpenEmbedded</a></td>
                </tr>
                <tr>
                  <td rowspan="2">Dragonboard 845c / RB3</td>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard845c/linaro/debian/latest/">Debian</a></td>
                </tr>
                <tr>
                  <td><a href="http://releases.linaro.org/96boards/dragonboard845c/linaro/openembedded/latest/">OpenEmbedded</a></td>
                </tr>
                <tr>
                  <td rowspan="2">Robotics RB5 / QRB5165</td>
                  <td><a href="http://releases.linaro.org/96boards/rb5/linaro/debian/latest/">Debian</a></td>
                </tr>
                <tr>
                  <td><a href="http://releases.linaro.org/96boards/rb5/linaro/openembedded/latest/">OpenEmbedded</a></td>
                </tr>
              </tbody>
            </table>


            [单击此处了解有关 Linaro 如何帮助上游公司进入 Qualcomm 平台的更多信息。](https://www.linaro.org/services/qualcomm-platforms-services/)
      - format: title
        style: block_bg_header
        title_content:
          id: ledge_rp
          style: font-weight-bold
          text: LEDGE RP - 安全可靠的容器运行时环境
          size: h2
      - format: text
        text_content:
          text: >-
            LEDGE 参考平台 (RP) 是一个轻量级、高度安全和强大的容器运行时环境，具有可靠的启动和更新功能。 它带有一套完整的 SELinux、IMA（Linux 内核完整性测量架构）和其他技术的安全策略，并基于 SystemReady-IR 和 EBBR 规范构建。完整的 Ledge 参考平台 v0.3 版本可在此处访问：


            [LEDGE 参考平台 0.3 发布](http://releases.linaro.org/components/ledge/rp-0.3/)


            有关 LEDGE 参考平台的其他信息，请参见 [此处](https://github.com/Linaro/meta-ledge)
---
