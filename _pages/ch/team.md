---
lang: ch
title: 团队
description: 团队页面显示了 Linaro 的运行方式以及董事会、执行团队和技术指导委员会的成员。
permalink: /about/team/
keywords:
  - Linaro organization
  - technical steering committee
  - executive team
layout: flow
jumbotron:
  description-class: smaller
  title: 团队
  inner_class: dotted
  description: ""
  image: /assets/images/content/san19-group-photo.jpg
flow:
  - row: container_row
    style: larger_type bg-secondary centered_type introduction_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          style: display-4 text-white
          text: >
            Linaro 是会员驱动的。 会员公司与 Linaro 合作，推动长期目标和工程优先事项的方向。
  - row: container_row
    style: large_type main_text_row
    sections:
      - format: title
        title_content:
          size: h2
          text: 董事会
      - format: text
        text_content:
          text: >
            董事会是主要的决策机构，专注于确保组织朝着其战略使命迈进。 它由 Linaro 成员代表和 Linaro 的 CEO 组成。
      - format: custom_include
        source: team/board_of_directors.html
  - row: container_row
    style: large_type main_text_row green_row
    sections:
      - format: title
        title_content:
          size: h2
          text: 执行团队
      - format: text
        text_content:
          text: >
            长期目标的执行和公司的整体管理被分配给 Linaro 执行管理团队。 执行团队负责业务的运营成功，并通过管理运行软件工程公司的“日常”物流来实现这一目标。
      - format: custom_include
        source: team/executive_team.html
  - row: container_row
    style: large_type main_text_row
    sections:
      - format: title
        title_content:
          text: 技术指导委员会
          size: h2
      - format: text
        text_content:
          text: >
            技术指导委员会 (TSC) 和部门组指导委员会负责决定需要完成哪些工程工作、何时以及如何完成。 TSC 包括来自每个 Linaro 成员公司的高级工程师、每个细分工程组的代表，以及 Linaro 的首席执行官、首席技术官和工程副总裁。
      - format: custom_include
        source: team/technical_steering_committee.html
---
