---
title: Linaro Developer Services
description: |-
    We at Linaro Developer Services are Arm software engineering experts. We pride ourselves on
    the breadth of our hands-on experience and knowledge, depth of our capabilities, quality of
    our work and professionalism of the engagements with our customers.
layout: flow
permalink: /services/
js-package: services

jumbotron:
    title: "Helping Build & Deploy your Products on Arm"
    inner_class: dotted
    description: ""
    image: /assets/images/content/developer_services_bg.jpg
flow:
    - row: container_row
      style: large_type
      sections:
        - format: text
          text_content:
            text: >
                From initial design through to planning, implementation, support and training, Linaro
                Developer Services help you leverage open source on Arm to ensure fast time to market,
                exceptional quality and security, and cost effective long term maintenance.
        - format: block
          style: text-black developers_services_block
          item_width: "6"
          block_section_content:
            blocks:
               - title: Leverage our Arm Software Expertise
                 description: |
                        Linaro employs several of the world’s
                        leading Arm Software experts. All of this
                        expertise is made available to you
                        through Linaro Developer Services.

                        - [Hands on training](/services/hands-on-training/)
                        - [Open source Consultancy](/services/open-source-consultancy/)
               - title: Secure your product
                 description: |
                        Specialists in security and Trusted
                        Execution Environment (TEE) on Arm,
                        we leverage open source to ensure you
                        benefit from the latest upstream
                        features and security fixes.

                        - [Security](/services/security/)

                        - [Bootloaders](/services/bootloaders/)
               - title: Maintain quality cost-effectively
                 description: |
                        We upstream code to reduce the cost and
                        effort needed to maintain your product. We
                        offer continuous integrations (CI) and
                        automated validation for your product
                        software, ensuring the highest possible
                        quality.

                        - [Testing & Validation](/services/testing-validation-services/)

                        - [Kernels and Long Term Support](/services/kernel-lts/)
               - title: Build, test and deploy faster
                 description: |
                        We support every aspect of product
                        delivery, from building secure board
                        support packages (BSP's), product
                        validation and long-term maintenance -
                        we help get your products to market
                        faster.

                        - [BSP’s, Builds and Support](/services/bsp-builds-support/)
                        - [Power management tuning](/services/power-management/)
                        - [Toolchain optimization](/services/toolchain-optimization-services/)
                        - [96Boards](/services/96boards/)
    - row: custom_include_row
      source: services/prospectus_registration_form.html
    - row: container_row
      style: services_form large_type bg-primary text-dark
      sections:
        - format: title
          title_content:
            size: h2
            style: text-dark
            text: To find out more about Developer Services please complete this form
        - format: custom_include
          source: services/developer_services_form.html
image:
    name: LinaroDSVertical.png
    path: /assets/images/content/LinaroDSVertical.png
---
