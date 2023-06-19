---
lang: ch
title: 项目
description: "下面的开源项目只是 Linaro、其成员合作伙伴和开源社区积极开展的前沿开发的一部分。 加入我们，共同实现加速您在 Arm 生态系统中的产品部署的目标！"
layout: flow
permalink: /projects/
keywords:
  - arm open source project
  - software
  - open-source
js-package: projects
css_bundle: projects
layout: flow
jumbotron:
  class: projects_banner text-center
  title: 项目
  image: /assets/images/content/Dots_lines_datacenter_UNDER_2MB.jpg
flow:

  - row: container_row
    sections:
      - format: text
        text_content:
          text: |
            Linaro 与其成员一起致力于 Arm 开源项目。 这些项目的范围和涉及的垂直领域可能有所不同，但都旨在实现以下一个（或多个）目标：
      - format: collapse
        style: #
        panels:
          - title: 解决生态系统质量问题
            icon: /assets/images/content/Quality.svg
            content: |
              旨在解决生态系统质量问题的项目主要侧重于测试。 在这里，利益相关者共同资助关键配置的持续连续测试，以使上游成为质量参考。 这些项目之一的示例是 [Linux Kernel Quality](/projects/#core-technologies_LKQ)。
          - title: 为架构和操作系统要求提供上游支持
            icon: /assets/images/content/Upstream.svg
            content: |
              专注于上游支持的项目专注于回归测试，通过添加更多功能和提高整个生态系统的安全性来改进技术。 通过这些项目，成员公司可以接触到维护者，这些维护者对上游的内容有发言权。 这些项目之一的示例是 [上游维护者](/projects/#core-technologies_UM)。
          - title: 解决限制市场部署的碎片化问题
            icon: /assets/images/content/Fragmentation.svg
            content: |
              Linaro 最初成立是为了解决 Arm 软件生态系统中的碎片化问题，这也是我们今天在新市场出现时仍在做的事情。 解决碎片化问题的项目侧重于跨多个开源项目将所有必要的技术上游化，以便所有生态系统参与者从一个共同的参考中工作。 这些项目之一的示例是 [Trusted Substrate](/projects/#automotive-iot-edge-devices_TS)，旨在为边缘设备固件带来标准化。
          - title: 通过利用成员的内部代码库实现生态系统目标
            icon: /assets/images/content/house_code.svg
            content: |
              在某些情况下，成员会向 Linaro 捐赠一个项目，使我们能够利用内部开发的代码库来实现更广泛的生态系统目标。 Linaro 提供了一个中立的平台，可以使用我们的工具和流程建立协作。 一旦项目启动并运行，它可以继续从 Linaro 工程协作中受益，或者可选择演变为 Linaro 社区项目，这是一个具有独立治理的项目。 迄今为止，有两个 Linaro 社区项目 - [OpenAMP](https://www.openampproject.org/) 和 [Trusted Firmware](https ://www.trustedfirmware.org/）。
      - format: text
        text_content:
          text: |
            有兴趣在 Arm 开源项目上与 Linaro 和其他行业领导者合作吗？ 在此处了解有关 [membership](/membership/) 以及如何参与的更多信息。
  - row: custom_include_row
    source: projects.html
---