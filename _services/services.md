---
title: Linaro Developer Services
description: |-
  We pride ourselves on being Arm software engineering experts with our experience & knowledge, capabilities, quality of our work & professionalism with our customers.
permalink: /services/
service_id: 99
jumbotron:
  class: dev_services text-center
  title: "Linaro Developer Services"
  inner_class: dev_services text-center
  title-class: my-md-4
  description: "Helping you build, deploy and maintain your products on Arm"
  image: /assets/images/content/Banner_Landing_page.png
image: /assets/images/content/LinaroDSVertical.png
flow:
  - row: container_row
    style: #
    sections:
      - format: text
        style: larger_type
        text_content:
          text: |
            From initial design through to development, implementation, support and
            training, Linaro Developer Services help you leverage open source on Arm
            to ensure fast time to market, exceptional quality and security, and cost
            effective long term maintenance.
      - format: buttons
        style: text-center
        buttons_content:
          - title: What our customers say
            url: "#what_our_customers_say"
            style: btn-primary btn-lg
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_1.png
          title: Hands-on Training
          text: |
            Linaro employs many of the world’s leading Arm Software
            experts. All of this expertise is available to you through Linaro
            Developer Services. 

            [View Our Hands On Training Services](/services/hands-on-training/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_2.png
          title: Security
          text: |
            Specialists in security and Trusted Execution Environment (TEE)
            on Arm, we leverage open source to ensure you benefit from the
            latest upstream features and security fixes.

            [View Our Security Services](/services/security/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_3.png
          title: Testing and Long Term Support
          text: |
            We upstream code to reduce the cost and effort needed to maintain
            your product. We offer continuous integration (CI) and automated
            validation for your software, ensuring the highest possible quality.

            [View Our Testing & Long Term Support Services](/services/testing-and-long-term-support/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_4.png
          title: Board Support Packages (BSP)
          text: |
            We support every aspect of product delivery, from building secure
            board support packages, product validation and long-term support &
            maintenance. We help get your products to market faster.

            [View Our Board Support Packages](/services/board-support-packages/)
  - row: container_row
    style: dotted-border-top services_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_6.png
          title: System Performance & Optimization
          text: |
            We can support deployment of your software on all Arm Platforms -
            from Microcontrollers to HPC super-computers - doing initial ports and
            optimising performance.we help get your products to market faster.

            [View Our System Performance & Optimization Services](/services/system-performance-and-optimization/)
  - row: container_row
    style: dotted-border-top dotted-border-bottom services_feature highlighted_feature
    sections:
      - format: feature_block_small
        style: dev_services_block
        feature_block_content:
          position: left
          type: image
          image_content_path: /assets/images/content/Rocket_5.png
          title: Qualcomm Platform Services
          text: |
            Linaro Developer Services is a leader in providing Linux BSP
            development, maintenance and optimization for Qualcomm platforms.

            [View Our Qualcomm Platforms Services](/services/qualcomm-platforms-services/)
  - row: container_row
    id: what_our_customers_say
    style: text-center
    sections:
      - format: title
        style: text-left
        title_content:
          size: h2
          style: display-4 large_header
          text: What our customers say
  - row: container_row
    style: bg-light testimonials
    sections:
      - format: custom_include
        source: services/testimonials.html
  - row: container_row
    style: text-center
    sections:
      - format: buttons
        buttons_content:
          - title: Contact Us
            url: "#ds_contact_form"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block ds_contact_form_btn
          - title: Contact Us
            url: "#ds_contact_form"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_contact_form_btn
          - title: Download Developer Services Overview
            url: "#download_services_overview"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block ds_overview_download
          - title: Download Developer Services Overview
            url: "#download_services_overview"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_overview_download
  - row: custom_include_row
    source: services/developer_services_form.html
---
