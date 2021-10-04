---
title: Membership
description: Linaro is consistently listed as one of the top five contributors
  worldwide to the Linux Kernel and works on more than 70 open source projects.
permalink: /membership/
keywords:
  - Arm
  - Open Source
js-package: membership
css_bundle: membership
layout: flow
jumbotron:
  class: text-center about_header header_2021
  title: Influence the future of Arm Software
  title-class: font-weight-bold my-5
  inner_class: py-5
  image: /assets/images/content/member__banner_image.jpg
flow:
  - row: container_row
    style: bg-light
    sections:
      - format: custom_include
        source: membership/members_section.html
  # - row: container_row
  #   style: text-center
  #   sections:
  #     - format: buttons
  #       style: text-center
  #       buttons_content:
  #         - title: Enquire about membership today
  #           url: "#membership_form"
  #           style: btn-primary enquire_button text-uppercase
  #         - title: View membership rules
  #           url: /assets/downloads/Membership_Rules_of_Linaro_Limited_Effective_26th_July_20122.pdf
  - row: container_row
    style: membership_text
    sections:
      - format: text
        text_content:
          text: |
            ## Linaro Membership

            Being a Linaro member means collaborating on projects which help enable new markets on Arm and solve
            common problems. Collaboration significantly reduces software fragmentation across the many Arm
            platforms, enabling participating companies and the community to reduce their costs for development and
            validation of Arm-based software.

            **In practise, there are two parts to being a Linaro member.** 

            One part is the technical discussions with Linaro and other industry leaders in which roadmaps
            and strategy are developed and agreed.

            The other part is the collaborative engineering which then takes place between Linaro, member
            engineers and the open source community to deliver these solutions.

            **In this sense what we offer is unique** - a forum where actual software engineering happens as a result of
            member companies collaborating with Linaro’s Arm software experts, other industry leaders and the open
            source community.
  - row: container_row
    style: membership_panels bg-light
    sections:
      - format: text
        class: test
        text_content:
          text: >
            ## What is the value of becoming a Linaro member?

            While the level of influence a member company has varies, depending on what membership type they have,
            all members benefit from three key factors.
      - format: custom_include
        source: membership/members_collapse_panels.html
  - row: container_row
    background_image: /assets/images/content/member__banner_image.jpg
    style: membership_panels bg-light text-dark
    sections:
      - format: text
        class: test
        text_content:
          text: >
            ## Linaro offers four different types of membership
      - format: custom_include
        source: membership/membership_types_tabs.html
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
