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
  title: Shape the future of Arm Software
  image: /assets/images/content/Membership_banner_image.jpg
flow:
  - row: container_row
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
              url: "#enquire_form"
              style: btn-primary enquire_button text-uppercase
  - row: custom_include_row
    source: membership/membership_blocks.html
  - row: container_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Open Source Projects Linaro Contribute to
      - format: custom_include
        source: membership/projects_slider.html
    style: large_type bg-light centered_type projects_row
  - row: container_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Membership Levels
      - format: text
        style: text-center
        text_content:
          text: >-
            There are three types of membership - Core, Club and Group - each
            offering a different level of engagement. To read the complete
            membership rules, [click
            here](/assets/downloads/Membership_Rules_of_Linaro_Limited_Effective_26th_July_20122.pdf)
      - format: custom_include
        source: membership/level_blocks.html
    style: large_type centered_type membership_levels
  - row: container_row
    sections:
      - format: custom_include
        source: components/members_slider.html
    style: members_slider_row bg-light
  - row: container_row
    sections:
      - format: text
        text_content:
          text: >
            To view Linaro members by membership levels and groups, click
            [here](/members-by-group/)
    style: large_type centered_type members_by_group_row
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
      - format: custom_include
        source: components/engineering_slider.html
    style: engineering_slider_row gray_row bg-secondary
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          style: text-white
          text: To find out more about membership please complete this form
      - format: custom_include
        source: membership/membership_form.html
    style: membership_form large_type bg-primary text-white
---
