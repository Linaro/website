---
lang: ch
title: 系统性能与优化
description: >
  我们可以支持在所有 Arm 平台上部署您的软件——从微控制器到 HPC 超级计算机——进行初始端口并优化性能。 我们帮助您更快地将产品推向市场。
permalink: /services/system-performance-and-optimization/
image: /assets/images/content/Rocket_6.png
service_id: 10
keywords:
  - GCC
  - GDB
  - Binutils
  - glibc
  - LLVM
  - toolchain
  - compiler
  - optimization
  - microarchitecture
jumbotron:
  title: 系统性能与优化
  image: /assets/images/content/Banner_System_Performance_Optimization.png
  title-class: my-4
  class: dev_services text-center
  buttons:
    - title: 联系我们
      url: "#contact_form"
      style:
        btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase
        ds_contact_form_btn
    - title: 联系我们
      url: "#contact_form"
      style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase
        ds_contact_form_btn
flow:
  - row: container_row
    style: bg-white text-dark text-center dotted-border-bottom
    sections:
      - format: text
        style: larger_type reduced_larger_type bg-light-gray p-3 rounded down_triangle mt-4
        text_content:
          text: |
            移植您的软件以在基于 Arm 的系统上高效运行不仅仅是重新编译您的代码。 代码需要优化以提高性能 - 高级软件和底层系统库和工具。
      - format: text
        style: larger_type reduced_larger_type bg-green p-3 rounded font-weight-bold
        text_content:
          text: |
            我们可以共同努力，确保您的软件和工作负载在 Arm 上具有出色的性能。
      - format: text
        style: larger_type reduced_larger_type bg-light-gray p-3 rounded up_triangle mb-4
        text_content:
          text: |
            Linaro 开发人员服务在系统库和工具方面拥有专业知识和经验，可以使它们在基于 Arm 的系统上很好地为您工作。
  - row: container_row
    style: bg-white text-dark dotted-border-bottom
    sections:
      - format: two_column
        style: mb-4
        breakpoint: md
        left_column:
          style: p-3
          text: |
            **结合我们的 Arm 系统知识和您的应用专业知识来满足您的产品要求**
          include: services/expertise_image.html
        right_column:
          style: p-3 coloured_bullet_list
          text: |
            **我们的专业领域包括:**

            * 机器学习：例如 张量流
            * 计算机视觉：例如 开放式CV
            * 线性代数：例如 OpenBLAS，特征
            * System C 库：例如 glibc
            * Linux内核
            * 编译器：例如 GCC，LLVM，去吧
            * 语言专长包括：C/C++/Fortran/go
            * Arm 架构：Armv8、SVE、HPC、内存模型。

  - row: container_row
    style: bg-white text-dark
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: 工具链优化服务
      - format: text
        style: #
        text_content:
          text: |
            Linaro 拥有世界一流的工程师，他们对 Arm 架构的所有配置文件和版本都有深入的了解。 这包括从深度嵌入式微控制器到在云中运行的大型 HPC 规模机器。
      - format: text
        style: #
        text_content:
          text: |
            Linaro 开发人员服务有专门的团队，专注于确保工具链（包括 GCC 和 LLVM）有效地针对基于 Arm 的系统。 我们在以下方面拥有丰富的经验和知识：

            * 调整工具链，为特定的 CPU 微架构和系统生成高性能代码。 对于编译器，这包括优化指令选择、布局和调度。 C 库（例如 Glibc、Musl-libc 或仿生）可以在适当的情况下使用手写汇编程序进行调整。
            * 调整工具链以生成满足代码大小要求的代码 - 特别是对于微控制器环境。 这包括改进编译器对指令选择、函数内联和概述的启发式方法。
            * 针对客户工作流程优化系统库。 Linaro 致力于系统 C 库和其他支持库，包括自动并行化（例如 OpenMP）、线性代数（例如 OpenBLAS）、机器学习（例如 TensorFlow）。 工作包括调整 Arm 内存模型； 确保代码在适当的情况下使用 Neon 或 SVE。

            我们与工具链上游社区的牢固关系促进了快速上游和问题的解决。 我们知道如何组织项目，并将与您合作，确保您的项目成功快速地向上游提交代码。 我们还为 Arm 架构被许可方提供了该领域的开发经验。

            Linaro 开发人员服务能够为您的系统提供预打包的工具链，您可以将这些工具链发送给您的客户和合作伙伴。 除了我们的工具链打包服务，我们还可以为您提供对工具链问题的快速响应，并培训您的开发人员如何为 Arm 架构编写开发人员高性能代码。
  - row: container_row
    style: bg-white text-dark
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: 电源管理调整服务
      - format: text
        style: #
        text_content:
          text: |
            Linaro 拥有一支对 Arm 架构和 Linux 电源管理框架有着深刻理解的世界级团队。 因此，我们在以下领域拥有丰富的经验：
      - format: text
        style: #
        text_content:
          text: |
            * 在 Linux 内核中为多个 SoC 调整 Energy Aware Scheduler 的实践经验
            * 在 Linaro 稳定内核 (LSK) 中维护长期 EAS 分支以供 Linaro 成员使用的经验
            * 与上游内核开发人员建立牢固的工作关系； 我们的团队因其世界级的工作而受到认可
            * 深入了解 PSCI 等全系统电源状态管理技术
            * 动态电压和频率缩放 (DVFS)、能量感知调度 (EAS)
            * 各种商业领域（移动设备、机顶盒、嵌入式设备）的电源管理技能
      - format: text
        style: larger_type
        text_content:
          text: |
            立即联系 Linaro 开发人员服务，获取有关工具链优化、应用程序性能和移植或电源管理调整服务的帮助！
  - row: container_row
    style: text-center dotted-border-bottom
    sections:
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#ds_contact_form"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block ds_contact_form_btn
          - title: 联系我们
            url: "#ds_contact_form"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_contact_form_btn
  - row: container_row
    style: text-center
    sections:
      - format: custom_include
        source: services/icon_links.html
  - row: custom_include_row
    source: services/developer_services_form.html
icon: /assets/images/content/Icon_Toolchain_Optimization.svg
---
