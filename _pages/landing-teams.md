---
title: Landing Teams
description: >
  Linaro’s Core and Club Members have access to a dedicated engineering team, in other words a “landing
  team”. A landing team is a group of Linaro engineers dedicated to one Linaro member.
permalink: /landing-teams/
keywords:
  - Arm software
  - open source
  - linux
  - software projects
  - landing teams
layout: flow
jumbotron:
  class: about_header text-center
  title: Linaro Landing Teams
  title-class: font-weight-bold my-5
  description: ""
  image: /assets/images/content/Landing_team_banner_image.jpg
flow:
  - row: container_row
    style: py-0
    sections:
      - format: text
        style: text-left
        text_content:
          text: >-
            Linaro’s Core and Club Members have access to a dedicated engineering team, in other words a “landing
            team”. A landing team is a group of Linaro engineers dedicated to one Linaro member. The team executes a
            Statement of Work (SoW), usually under NDA and all work plans are agreed upon with the member. A
            landing team may be comprised of engineers from member companies who will collaboratively work on tasks
            defined in the SoW. The landing team predominantly supports the member in two areas: upstreaming and
            testing.
      - format: collapse
        style: null
        panels:
          - title: Upstreaming platforms
            icon: /assets/images/content/Quality.svg
            content: >
              A landing team will work with the member to upstream it’s platforms to the Linux kernel so that they benefit
              from the current stable kernel version, in other words the latest software updates and security fixes. This
              may involve work such as adding HALs and framework support for Android, implementing and upstreaming
              recipes for Yocto project support or porting open source software, libraries and tools for member SOCs
              (system-on-chips). Working with a landing team helps member companies leverage Linaro’s experience in
              upstreaming and the Linux kernel to build strong and healthy open source ecosystems for their platforms.
          - title: Rigorous kernel upstream testing
            icon: /assets/images/content/Testing.svg
            content: >
              Linaro has a strong track record in the field of testing, having created tools such as LAVA (Linaro Automation
              and Validation Architecture) and LKFT (Linaro’s Linux Kernel Functional Test Framework) . Landing teams
              provide support to member companies through kernel upstream testing and are able to provide software
              release testing for member companies’ products. This gives members the peace of mind that their platforms
              and products are running on software which is as secure and of as high quality as is possible.
  - row: container_row
    style: bg-light-green
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 8
          style: p-3
          text: |
            ### Case in point: Linux releases for QualcommTM Snapdragon® processors

            A good example of the type of work Linaro landing teams
            deliver to members are the Linux releases for QualcommTM
            Snapdragon® processors. Qualcomm is a core member and
            has had a landing team since 2014. One of the tasks the
            landing team has is to support and evolve the Snapdragon
            open source ecosystem. As a result, Linaro releases a set of
            Linux software builds for platforms based on Qualcomm
            Snapdragon processors. These releases are based on the Linux
            mainline kernel and rely solely upon open-source user space
            packages. To access these releases click here. Alternatively,
            check out this video on how to download the releases.
        right_column:
          custom_size: 4
          style: p-3
          image: /assets/images/content/96boards.jpg
          image_alt: 96Boards.org homepage screenshot
---
