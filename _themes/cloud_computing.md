---
id: 14
title: Cloud Computing and Servers
sub_theme: false
permalink: /cloud-computing-and-servers/
image: /assets/images/content/CCS_banner_image.jpg
icon: /assets/images/content/CC_and_S_icon_white.svg
icon_dark: /assets/images/content/CC_and_S_icon_dark.svg
icon_alt: /assets/images/content/CC_and_S_icon_green.svg
js-package: contactForm
description: >
  The past few years have seen Arm being adopted more and more in the server space, with the world’s fastest supercomputer - Fujitsu’s Fugaku - running on Arm CPUs.
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Cloud Computing & Servers
  description: |
    The past few years have seen Arm being adopted more and more in the server space,
    with the world’s fastest supercomputer - Fujitsu’s Fugaku - running on Arm CPUs.

    It is a well known fact that Arm chips have dominated the mobile market. The flexibility
    Arm offers device manufacturers who can design Arm chips to meet specific needs make it
    an attractive choice. But for Arm server chips to continue to meet the demands of
    businesses needing more storage and more data, there needs to be a software ecosystem
    in place that helps drive feature enablement, testing and bug fixing. Linaro works together
    with its member companies on strengthening the software ecosystem for Arm servers.
  image: /assets/images/content/CCS_banner_image.jpg
flow:
  - row: custom_include_row
    source: themes/associated_members.html
  - row: container_row
    style: bg-blue py-4 mb-5
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          image: /assets/images/content/CCS_banner_image.jpg
        right_column:
          custom_size: 6
          style: p-3 text-white
          text: |
            ## Making Arm a first class citizen

            Linaro, together with its member companies, is working on
            making key open source projects enabled for Arm-based
            servers. We refer to this as making Arm a first class citizen. By
            verifying the projects build continuously, get tested and have
            binaries available for Arm server targets, the Arm ecosystem is
            able to depend on quality software for use in production
            environments.
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: font-weight-bold mt-4
        title_content:
          text: Linaro projects delivering quality software for Arm-based servers
          size: h2
      - format: custom_include
        source: themes/related_project_blocks.html
      - format: buttons
        style: text-center
        buttons_content:
          - title: See all projects
            url: /projects/
            style: btn-lg btn-primary my-2
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/CCS_banner_image.jpg
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
      - format: custom_include
        source: themes/engagement_blocks.html
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
