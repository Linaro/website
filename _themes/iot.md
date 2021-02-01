---
id: 3
title: IoT & Embedded
sub_theme: false
permalink: /iot-and-embedded/
image: /assets/images/content/IoT_Embedded.png
icon: /assets/images/content/Icon_IoT_Embedded.svg
icon_dark: /assets/images/content/Black_IoT.svg
description: >
    IoT is an enabling infrastructure that companies, cities and individuals need in place to act on the data and insights from connected devices. As the 5th wave of computing (AI, IoT and 5G) quickly approaches, fragmentation in the Arm ecosystem is hindering the deployment of increasingly sophisticated devices. Linaro and its Members are collaborating to build best in class common tools, libraries and interfaces while supporting common standards that will enable rapid deployment of secure solutions at lower cost points, more efficient deployments and easier maintenance.
jumbotron:
    class: theme_banner 
    title: Internet of Things
    description: >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
    image: /assets/images/content/IoT_Embedded.png
    buttons:
      - title: How can we help?
        url: "#contact_form"
        style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: How can we help?
        url: "#contact_form"
        style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
presentation_link: /about/
video_link: /about/
blogs_link: /blog/tags/?tag=AI
flow:
    - row: container_row
      style: bg-green
      sections:
       - format: custom_include
         source: themes/quick_link_blocks.html
    - row: container_row
      style: related_projects bg-secondary text-white
      sections:
        - format: title
          title_content:
            size: h2
            text: >
                Related Projects
        - format: custom_include
          source: themes/related_projects.html
    - row: container_row
      style: associated_members
      sections:
        - format: title
          title_content:
            size: h2
            text: >
                Associated Members
    - row: custom_include_row
      source: themes/associated_members.html
    - row: custom_include_row
      source: themes/theme_contact_form.html
---