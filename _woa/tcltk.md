---
title: Tcl/Tk - Windows on Arm
name: Tcl/Tk
logo: /assets/images/content/windows_on_arm/TclTk.png
description: >
  Tcl is a high-level, general-purpose, interpreted, dynamic programming language.

  Tk is a platform-independent GUI framework developed for Tcl.

image: /assets/images/content/iStock-667012914_sm.jpg
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Windows on Arm Project - Tcl/Tk
  image: /assets/images/content/iStock-667012914_sm.jpg
links:
  - text: Enablement Notes
    url: https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28698017811/Tcl+Tk
flow:
  - row: container_row
    style: #
    sections:
      - format: custom_include
        source: woa/project_page_content.html
  - row: container_row
    style: my-3 bg-light-gray
    sections:
      - format: custom_include
        source: woa/projects.html
  - row: container_row
    style: #
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 8
          style: p-3
          text: |
            **Provide feedback or request support for a missing package**
        right_column:
          custom_size: 4
          style: p-3
          button:
            style: blue-button
            title: Linaro Service Desk
            url: https://linaro-servicedesk.atlassian.net/servicedesk/customer/portal/22/group/85/create/301
  - row: container_row
    style: my-3 bg-light-gray
    sections:
      - format: title
        style: text-left white-border-title font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold
          text: Linaro Windows on Arm Technical Meetings
      - format: title
        style: text-left font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold
          text: Windows on Arm Technical
      - format: text
        style: text-left
        text_content:
          text: |
            Every two weeks on Tuesday - 4:00-5:00pm (GMT+1) <br/>
            If you're interested in participating in the meeting, please contact windowsonarm@linaro.org
  - row: container_row
    style: my-3
    sections:
      - format: title
        style: text-left white-border-title font-weight-bold
        title_content:
          size: h3
          style: font-weight-bold
          text: Active Members
      - format: custom_include
        source: woa/members.html
---

Tcl is a high-level, general-purpose, interpreted, dynamic programming language.

Tk is a platform-independent GUI framework developed for Tcl.

Tcl/Tk has been ported for windows on arm. There are no pre-built releases available yet but can be compiled from source. Please see enablement notes for details.
