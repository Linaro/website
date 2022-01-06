---
title: Arm ベースのソリューションの導入を加速
description: Arm パートナーシップのコラボレーション プラットフォーム。メンバーは、ソリューションが議論され、作業されるオープンソースソフトウェアで共同作業を行うことができます。
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
lang: ja
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
          text: Linaro メンバーズ
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
          text: Arm のオープンソースソフトウェアのエキスパート
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
          text: プロジェクト Linaro とそのメンバー企業が協力
          size: h2
      - format: text
        style: text-left
        text_content:
          text: これは、Linaro が動作するプロジェクトの一部のスナップショットです。
      - format: custom_include
        source: home/projects_section.html
      - format: text
        style: text-left text-white font-weight-bold
        text_content:
          text: |
            [プロジェクトの完全なリストについては、ここをクリックしてください。](/projects/)
  - row: container_row
    style: ""
    sections:
      - format: title
        style: ""
        title_content:
          style: font-weight-bold
          text: コラボレーションは多くの形で提供されます
          size: h2
      - format: text
        style: text-left blockquote
        text_content:
          text: |
            Linaro と提携する方法は複数あり、Linaro とのコラボレーションと その他の Linaro  メンバーまたは 1 対 1 のベースで。また、私たちが行う仕事の多くは、 オープン、つまり、私たちがコミュニティに利益をもたらすと思うものは何でも公表します 私たちの[ダウンロードページ](/downloads/)。
  - row: container_row
    sections:
      - format: custom_include
        source: home/cta_section.html
    style: cta_section bg-light
---
