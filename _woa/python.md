---
title: Python - Windows on Arm
name: Python
logo: /assets/images/content/windows_on_arm/Python.png
description: >
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
  erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
  molestie consequat.
image: /assets/images/content/iStock-667012914_sm.jpg
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Windows on Arm Project - Python
  image: /assets/images/content/iStock-667012914_sm.jpg
links:
  - text: Latest Release
    url: https://www.python.org/downloads/release/python-3110a6/
  - text: Enablement Notes
    url: https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28598239406/Python
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

Python is a general-purpose high-level programming language. It is one of the most popular programming languages in the world now.

Linaro and partners has been working together to enable windows on arm support for python and popular python packages.

Python has official support for windows on arm from 3.11 release (currently at alpha) and installers are available from python.org.

Python 3.10 and 3.9 experimental releases are available on [NuGet](https://www.nuget.org/packages/pythonarm64)
