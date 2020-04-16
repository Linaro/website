---
title: Membership
description: >-
  Linaro is consistently listed as one of the top five contributors worldwide to
  the Linux Kernel and works on more than 70 open source projects.
permalink: /membership/
js-package: membership
css-package: membership
layout: flow
jumbotron:
  image: /assets/images/content/memberhsip_bg.jpg
  title: Shape the future of Arm Software
  description: ''
  inner_class: dotted
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: membership/grouped_members_section.html
  - row: container_row
    sections:
      - format: text
        text_content:
          text: >
            Linaro is member driven. Member engineers work with Linaro engineers
            to solve common software problems. Why?
      - format: title
        title_content:
          size: h2
          text: No need to differentiate on the basics
      - format: text
        text_content:
          text: >
            Because collaborating on common software allows participating member
            companies to direct more resources towards differentiating their
            products. In effect, collaborating on non-differentiation allows you
            to focus more on differentiation.
      - format: title
        title_content:
          size: h2
          text: Faster problem solving = accelerated time to market
      - format: text
        text_content:
          text: >
            Having engineers from all the member companies work together with
            Linaro engineers - many of which are world-reknown Arm software
            experts - means more eyes on the problem. The more people who look
            at the problem, the quicker it gets solved and the better the
            solution. And the quicker the basics are resolved, the faster you
            get your product to market.
      - format: title
        title_content:
          size: h2
          text: Arm & Open Source Software Expertise
      - format: text
        text_content:
          text: >
            Linaro is the collaboration platform for Arm software, formed in
            2010 for this very purpose. We contribute to over 70 open source
            projects, many of which we maintain. If you want a say in how Arm
            software evolves and want to work with leading technology companies
            to develop and implement actual engineering solutions, Linaro
            membership is for you.
    style: large_type main_text_row
  - row: container_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: OPEN SOURCE PROJECTS LINARO CONTRIBUTE TO
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
