---
future_project: false
title: node.js - Windows on Arm
name: node.js
logo: /assets/images/content/windows_on_arm/nodeJS.png
description: >
  Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

image: /assets/images/content/iStock-667012914_sm.jpg
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Windows on Arm Project - node.js
  image: /assets/images/content/iStock-667012914_sm.jpg
links:
  - text: Enablement Notes
    url: https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28696084508/Node.js
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

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

Node.js added support for windows on arm but there are no official releases yet. It can be compiled from source. Please see enablement notes for details.
