---
id: 1
title: Artificial Intelligence
sub_theme: true
permalink: /core-technologies/artificial-intelligence/
image: /assets/images/content/ai-share-image.png
icon: /assets/images/content/Icon_AI.svg
icon_dark: /assets/images/content/Black_AI.svg
js-package: contactForm
description: >
  Artificial Intelligence impacts every single
  industry and is increasingly becoming
  part of our everyday lives - powering
  everything from our smart home devices
  to our digital voice assistants and social
  media accounts.
presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/d6090241-cd9d-4534-bd53-ce29c2814671
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Artificial Intelligence
  description: |
    Artificial Intelligence impacts every single
    industry and is increasingly becoming
    part of our everyday lives - powering
    everything from our smart home devices
    to our digital voice assistants and social
    media accounts.

    Its influence is only going to grow and as such, standardization and open reference
    implementations will be key to help evolve this transformative technology on Arm. Linaro
    works with industry leaders to bring the best in class Machine Learning Inferencing and
    Artificial Intelligence (AI) to the Arm ecosystem. This involves pushing experiences optimized
    for Arm on our member companies hardware across a range of strategic AI projects.
  image: /assets/images/content/Artifical_Intelligence.png
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro Projects focused on Artificial Intelligence
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Optimize AI for Arm Data Center & Edge
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                This project is focused on enablement which optimizes
                performance in HPC and AI computing. The project is
                addressing a wide range of use cases for AI training and
                inference, targeting Armv8.x based servers and
                supercomputers such as Fujitsu’s high end Fugaku
                supercomputer, Neoverse and Cortex-A based edge devices.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/AIA/overview
            - title: Optimize AI for Arm Microcontrollers
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                The Optimize AI for Microcontrollers project is focused on the strategic AI libraries microTVM and Tensorflow Lite Micro. The aim of this project is to enable inference workloads on Arm microcontrollers while optimizing the AI compiler experience for deeply embedded environments.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/AIM/overview
      - format: buttons
        style: text-center
        buttons_content:
          - title: All Projects
            url: /projects/
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Artifical_Intelligence.png
    sections:
      - format: title
        style: mt-4 text-white
        title_content:
          text: How to participate
          size: h2
      - format: text
        style: text-white
        text_content:
          text: |
            There are multiple ways to engage with Linaro.
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: Join as a Linaro Club Member
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                If you want to collaborate with Linaro
                and other industry leaders on all verticals
                in the Arm Ecosystem, club membership
                is the right option for you.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: /membership/
            - title: Join as a Linaro Core Member
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                If you want to participate in all the
                work Linaro does as well as have
                access to your own dedicated
                engineering team, then core
                membership is the right option for you.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: /membership/
            - title: Join our team!
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                We frequently hire subject matter
                experts and maintainers - if you’re
                interested in becoming part of our
                team, go to the linaro careers page to
                find out more.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: /careers/
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
