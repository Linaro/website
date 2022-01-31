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
lang: ch
flow:
  - row: custom_include_row
    source: home/homepage_header.html
  - row: custom_include_row
    source: home/theme_row.html
  - row: container_row
    style: bg-light members_section
    sections:
      - format: title
        style: text-center
        title_content:
          style: font-weight-bold
          text: Linaro会员成员
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
          text: Linaro 及其成员公司合作的项目
          size: h2
      - format: text
        style: text-left
        text_content:
          text: 这是 Linaro 从事的一些项目的快照
      - format: custom_include
        source: home/projects_section.html
      - format: text
        style: text-left text-white font-weight-bold
        text_content:
          text: |
            [单击此处查看完整的项目列表。](/projects/)
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
