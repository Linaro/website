---
id: 15
title: Core Technologies
sub_theme: false
permalink: /core-technologies/
image: /assets/images/content/core_technologies_share_image.png
icon: /assets/images/content/Icon_Core_Technologies_notext.svg
icon_dark: /assets/images/content/Core.svg
icon_alt: /assets/images/content/Icon_Core_Technologies_notext.svg
icon_col: /assets/images/content/Icon_Core_Technologies_Colour.svg
js-package: contactForm
description: >
  There are core pieces of software that all products rely on, building blocks upon which additional functionality and features can be developed to address specific use cases. Linaro was formed in 2010 to help develop these core pieces of technology as the Arm code base was fragmented, causing delay to innovation and deployment of products. We helped achieve this and continue to evolve and co-maintain these technologies, focusing specifically on the Linux kernel, Arm toolchains, testing and CI, security and virtualization. In recent years we have also worked to bring best in class ML Inferencing & AI to the Arm ecosystem.
# presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/cc312f4a-8546-4e22-8895-3a98acfc3e10
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Core Technologies
  description: |
    One of the main objectives when forming Linaro
    was to consolidate the Arm code base.

    The code churn created by multiple companies and individuals trying to upstream essentially the same code into
    kernel.org was causing fragmentation and slowing down innovation and delivery of products. Linaro’s work, especially in
    the kernel, provided the focal point for collaboration and the situation recognizably improved by 2012, something Linus
    Torvalds recognized. Since the Linux kernel release 3.10, Linaro has been consistently listed as one of the top ten
    company contributors, worldwide, to Linux kernel. We are also widely recognized for the work we have done on
    toolchains such as GCC and LLVM. In addition to our work in the Linux kernel and toolchains, we are known for our
    expertise in security and testing through projects such as OP-TEE, LAVA and LKFT.
  image: /assets/images/content/Banner_Core_Technologies.jpg
flow:
  - row: custom_include_row
    source: themes/associated_members.html
  - row: container_row
    style: bg-blue py-4
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          image: /assets/images/content/Code_Image_Core_tech.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## Accelerating time to market through collaboration on low-level functionality

            Regardless of market or device, all products require low-level
            functionality - tools, frameworks, testing mechanisms and
            security - in order to function. Developing this low-level
            functionality in house is costly and requires a wide range of
            expertise which is why member companies choose to work with
            Linaro and other industry leaders to develop the foundations
            once. Not only does this enable them to leverage the expertise
            of our technical domain experts but it also reduces overall costs
            through shared engineering resource. Working together with
            Linaro engineers who are well versed in navigating open source
            communities in turn accelerates time to market.
  - row: container_row
    style: bg-secondary py-4 text-white
    sections:
      - format: title
        style: font-weight-bold mt-4 text-white
        title_content:
          text: The Technologies delivering the foundations upon which to differentiate
          size: h2
      - format: text
        text_content:
          text: |
            Linaro plays a significant role in maintaining and evolving foundational open source software on Arm.
            **Read more about our contributions by selecting the technology of interest:**
      - format: custom_include
        source: themes/core_technologies_blocks.html
  - row: container_row
    style: bg-green mb-5
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Banner_Core_Technologies.jpg
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
