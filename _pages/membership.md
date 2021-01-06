---
title: Membership
description: >-
  Linaro is consistently listed as one of the top five contributors worldwide to
  the Linux Kernel and works on more than 70 open source projects.
permalink: /membership/
js-package: membership
css_bundle: membership
layout: flow
jumbotron:
  class: text-center about_header
  title: Shape the future of Arm Software
  image: /assets/images/content/Membership_banner_image.jpg
flow:
  - row: container_row
    style: pb-5
    sections:
      - format: title
        title_content:
          size: h2
          text: Linaro Membership
      - format: text
        text_content:
          text: >
            Linaro membership allows you to shape the future of Arm software together with Linaro and other industry
            leaders. Collaborating on common projects significantly reduces software fragmentation across the many
            Arm platforms, enabling participating companies and the community to reduce their costs for development
            and validation of Arm-based software.
  - row: custom_include_row
    source: membership/grouped_members_row.html
  - row: container_row 
    style: text-center
    sections:
      - format: buttons
        style: text-center
        buttons_content:
            - title: Enquire about membership today
              url: "#membership_form"
              style: btn-primary enquire_button text-uppercase
  - row: container_row
    style: membership_blocks text-dark
    background_image: /assets/images/content/code_banner.jpg
    sections:
       - format: block
         style: text-dark
         item_width: "4"
         block_section_content:
           blocks:
              - title: No need to differentiate on the basics
                description: > 
                  Collaboration on common software allows participating member companies to direct more resources towards differentiating their products.
                style: membership_block
              - title: Faster problem solving = accelerated time to market
                description: > 
                  Having engineers from all the member companies work together with Linaro engineers - many of which are world-renowned Arm software experts - means more eyes on the problem.
                style: membership_block
              - title: Arm & Open Source Software Expertise
                description: > 
                  If you want a say in how Arm software evolves and want to work with leading technology companies to develop and implement actual engineering solutions, Linaro membership is for you.
                style: membership_block
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          text: Open Source Projects Linaro Contribute to
      - format: custom_include
        source: membership/projects_slider.html
    style: large_type bg-light centered_type projects_row
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          text: Core Membership
      - format: text
        text_content:
          text: >
            Core members drive the direction of software development in the Arm
            ecosystem. They can participate in any of Linaro’s projects or
            segment groups and have access to their own dedicated engineering
            team.
      - format: custom_include
        source: membership/core_membership_testimonial.html
    style: large_type centered_type membership_row core_membership_row bg-light-blue
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          text: Club Membership
      - format: text
        text_content:
          text: >
            Club members influence the direction of Arm software development and
            can participate in any of Linaro’s segment groups. At an additional
            fee, they can also have access to their own dedicated engineering
            team and participate in additional Linaro projects.
      - format: custom_include
        source: membership/club_membership_testimonial.html
    style: large_type centered_type membership_row club_membership_row  bg-green
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          text: Group Membership
      - format: text
        text_content:
          text: >
            Group members drive strategy within a specific vertical and can
            participate in any of the Linaro projects set up by their segment
            group. Linaro manages the following groups: Artificial Intelligence,
            Autonomous Vehicles, Consumer, Datacenter & Cloud, Edge & Fog
            Computing, IoT & Embedded and HPC.
      - format: custom_include
        source: membership/group_membership_testimonial.html
    style: large_type centered_type membership_row group_membership_row bg-light-gray
  - row: container_row
    sections:
      - format: title
        style: text-center text-white
        title_content:
          size: h3
          text: Delivering End to End Solutions using Arm Technology 
      - format: custom_include
        source: components/engineering_slider.html
    style: engineering_slider_row gray_row bg-secondary text-white
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          style: text-dark
          text: To find out more about membership please complete this form
      - format: custom_include
        source: membership/membership_form.html
    style: membership_form large_type bg-primary text-white
---
