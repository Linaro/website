---
id: 1
title: Virtualization
sub_theme: true
permalink: /core-technologies/virtualization/
image: /assets/images/content/virtualization-share-image.jpg
icon: /assets/images/content/Icon_Virtualization_notext.svg
js-package: contactForm
description: >
  Virtualization can be used for almost any use case, with it playing an ever more prominent
  role in up and coming technologies such as autonomous driving. Linaro plays a key role in QEMU - an
  open source hypervisor.
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/4176e32f-5e66-492d-bbc9-b428446048c9
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Virtualization
  description: |
    From faster turnaround to reduced downtime and
    costs, the benefits of virtualization are clear to see.

    Virtualization can be used for almost any use case, with it playing an ever more prominent
    role in up and coming technologies such as autonomous driving. Linaro plays a key role in QEMU - an
    open source hypervisor. Not only do Linaro employees and assignees act as main-
    tainers for Arm-specific areas of the codebase but we also take care of areas such as TCG 
    code-generation, build and test automation, and release management. In addition to our work
    in QEMU, we are also driving the project Stratos, which is developing hypervisor agnostic
    Virtio interfaces and standards to address richer ecosystems such as automotive, and IoT.
  image: /assets/images/content/Banner_Virtualization.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro Projects focused on Virtualization
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Enable Arm Architecture in QEMU
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                QEMU is a free open-source emulator and virtualizer. Linaro
                plays a key role in the project ensuring the ARM ecosystem is
                well represented and actively maintained. We leverage our
                expertise as maintainers to support the upstreaming of new
                features from members and the wider community. We
                consistently rank in the top three of companies that participate
                in the development of this well respected project.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/QEMU/overview
            - title: Project Stratos
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                There is a growing trend towards virtualization in areas other
                than the traditional server environment. The server enviroment
                is uniform in nature but as we move towards a richer
                ecosystem in automotive, medical and general mobile and IoT
                spaces, the rich array of hypervisors and SoCs become a
                problem. Project Stratos is working towards developing
                hypervisor agnostic Virtio interfaces and standards.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/STR/overview

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
    background_image: /assets/images/content/Banner_Virtualization.jpg
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
