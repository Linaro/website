---
title: 加速部署基于 Arm 的解决方案
description: Arm 合作伙伴关系的协作平台。 成员可以在开源软件上进行协作，讨论和研究解决方案。
permalink: /
keywords:
  - arm software
  - engineering
  - open source
  - linaro
  - linux
  - software projects
js-package: home
css_bundle: home
layout: flow
flow:
  - row: custom_include_row
    source: alert_banner.html
    title: 微软加入 Linaro 以推进 Windows on Arm
    url: /news/microsoft-joins-linaro-arm-and-qualcomm-technologies-to-advance-windows-on-arm/
    content_include: home/alert_banner_include.html
  - row: custom_include_row
    source: home/homepage_header.html
  - row: container_row
    style: bg-black text-section
    sections:
      - format: text
        style: text-left text-white highlighted_text_section px-3
        text_content:
          text: |
            Linaro 与企业和开源社区合作开发基于 Arm 技术的软件。 我们创建的解决方案能够推动 Arm 软件生态系统、增强标准化、促进跨行业协作并为实际应用做出贡献。

            要了解有关我们所做工作的更多信息，请选择以下图标之一。
  - row: custom_include_row
    source: home/theme_row.html
  - row: container_row
    style: bg-light members_section
    sections:
      - format: title
        style: text-center
        title_content:
          style: font-weight-bold
          text: 利纳罗成员
          size: h2
      - format: custom_include
        source: membership/members_section.html
  - row: container_row
    style: bg-secondary stats_row text-white
    sections:
      - format: title
        style: text-center
        title_content:
          style: font-weight-bold
          text: Arm 上的开源软件专家
          size: h2
      - format: custom_include
        source: home/stats_row.html
  - row: custom_include_row
    source: about/maintainers_by_project.html
  - row: container_row
    style: bg-secondary text-white py-0 project_collab_section
    sections:
      - format: title
        style: ""
        title_content:
          style: font-weight-bold
          text: Projects Linaro and its member companies collaborate on
          size: h2
      - format: text
        style: text-left
        text_content:
          text: 这是 Linaro 从事的一些项目的快照
      - format: custom_include
        source: home/projects_section.html
  - row: container_row
    style: ""
    sections:
      - format: title
        style: ""
        title_content:
          style: font-weight-bold
          text: 协作有多种形式
          size: h2
      - format: text
        style: text-left blockquote
        text_content:
          text: |
            您可以通过多种方式与 Linaro 合作 - 无论是与 Linaro 和其他 Linaro 成员合作还是一对一合作。 此外，我们所做的很多工作都是公开的，这意味着我们认为可以使整个社区受益的任何内容都将在我们的 [下载页面](/downloads/) 上公开。
  - row: container_row
    sections:
      - format: custom_include
        source: home/cta_section.html
    style: cta_section bg-light
---
