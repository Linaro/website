---
id: 1
title: Artificial Intelligence
sub_theme: false
sub_themes:
  - HPC / Server
  - Edge
  - Microcontrollers
permalink: /artificial-intelligence/
icon: /assets/images/content/Icon_AI.svg
icon_dark: /assets/images/content/Black_AI.svg
image: /assets/images/content/Artifical_Intelligence.png
description: >
    Linaro and collaborating members are working to bring best in class
    ML Inferencing & AI to the Arm ecosystem. This involves pushing
    optimized for Arm experiences on member hardware across a
    range of strategic AI projects.
jumbotron:
    class: theme_banner 
    title: Innovation within Open Source projects that bring Artificial Intelligence solutions to Arm devices/systems
    description: >
        Linaro and collaborating members are working to bring best in class ML Inferencing & AI to the Arm ecosystem.
        This involves pushing experiences  optimized for Arm on member hardware across a range of strategic AI projects. 
    image: /assets/images/content/Artifical_Intelligence.png
    buttons:
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
presentation_link: https://linaro.co/ai-slides
flow:
    - row: custom_include_row
      source: themes/sub_theme_blocks.html
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
      style: bg-green
      sections:
       - format: custom_include
         source: themes/quick_link_blocks.html
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