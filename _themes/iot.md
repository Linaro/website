---
id: 3
title: IoT & Embedded
permalink: /iot-and-embedded/
image: /assets/images/content/IoT_Embedded.png
description: >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.
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
flow:
    - row: container_row
      sections:
       - format: block
         style: text-white 
         item_width: "3"
         block_section_content:
           blocks:
              - title: IoT & Embedded Presentation
                image: /assets/images/content/screen_1.jpg
                background_image: true
                style: text-center
                buttons:
                   - title: View
                     url: /about/
              - title: IoT & Embedded Video
                image: /assets/images/content/screen_2.jpg
                background_image: true
                style: text-center
                buttons:
                   - title: View
                     url: /about/
              - title: IoT & Embedded Blogs
                image: /assets/images/content/screen_3.jpg
                background_image: true
                style: text-center
                buttons:
                   - title: View
                     url: /blog/tags/?tag=IoT
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
---