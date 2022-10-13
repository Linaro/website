---
id: 14
title: Arm Based Cloud Computing and Servers
slug_title: Cloud Computing & Servers
sub_theme: false
permalink: /cloud-computing-and-servers/
image: /assets/images/content/cloud-computing-and-servers-share-image.png
icon: /assets/images/content/CC_and_S_icon_white.svg
icon_dark: /assets/images/content/CC_S.svg
icon_alt: /assets/images/content/CC_and_S_icon_green.svg
icon_col: /assets/images/content/Cloud_Computing_Servers.svg
js-package: contactForm
description: >
  Linaro works with member companies to strengthen the software ecosystem for Arm servers by making open source projects enabled for Arm-based servers.
video_resources_link: https://resources.linaro.org/en/themes/04687b37-4cdc-4716-a26b-64e0e55ed988
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Arm Based Cloud Computing & Servers
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
      # - format: custom_include
      #   source: themes/related_project_blocks.html
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: Arm Server Architecture
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Technology for servers is continuously
                evolving. For the boot architecture, this
                means the AArch64 boot process should
                use familiar tools already in common use
                and active development. The Arm Server
                Architecture project predominantly
                focuses on Arm UEFI, GRUB2 and
                related components.
              buttons:
                - title: Arm Server Architecture
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/ASA/overview
            - title: AI for Datacenter and Edge
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                This project is focused on enablement which optimizes performance in HPC and AI computing. The project is addressing a wide range of use cases for AI training and inference, targeting Armv8.x based servers and supercomputers such as Fujitsu's high end Fugaku supercomputer, Neoverse and Cortex-A based edge devices.
              buttons:
                - title: AI for Datacenter and Edge
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/AIA/overview
            - title: Big Data & Data Science
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                With 90% of all data having been
                created in the last two years, Big Data
                and Data Science technologies are vital
                and have become mature with various
                production implementations. Linaro
                drives engineering activities and ARMv8
                builds for projects such as Apache
                BigTop, Hadoop, Spark, Ambari and Drill.
              buttons:
                - title: Big Data & Data Science
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/BDDS/overview
            - title: Cloud Infrastructure
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Linaro’s aim in this space is to provide open-source cloud infrastructure projects with the capabilities to easily deploy, manage and deliver performance on Arm64. Engineering activities include technologies such as hypervisors and container based virtualization (OpenStack, Kubernetes) and Software Defined Storage (Ceph).
              buttons:
                - title: Cloud Infrastructure
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/CLOUD/overview
            - title: Enhance Software-Defined-Storage on Arm Servers
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                There is a shift towards using all-flash storage solutions (SSD/NVME) as opposed to traditional HDD disks due to improvements in performance. The goal of this project is to collaborate with industry leaders in the Arm server ecosystem so that we can provide competitive and leading storage solutions with Arm servers.
              buttons:
                - title: Enhance Software-Defined-Storage on Arm Servers
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://linaro.atlassian.net/wiki/spaces/STOR/overview
            - title: Linaro Ecosystem Dashboard
              style: related_project_block h-100
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                The Linaro Ecosystem Dashboard is a one-stop resource for everyone to find necessary software project info and resources about Arm support. The aim is to provide a complete picture of the Arm ecosystem landscape. At present the Linaro Ecosystem Dashboard is focused on the server landscape but Linaro will be expanding this to other verticals.
              buttons:
                - title: Linaro Ecosystem Dashboard
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://ecosystemdashboard.linaro.org/
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
      - format: block
        style: pb-4 text-left
        item_width: "6"
        block_section_content:
          blocks:
            - title: Join the Linaro Datacenter & Cloud Group
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                If you want to collaborate with Linaro and other industry leaders in the Arm Server Ecosystem specifically, you can join the Linaro Datacenter & Cloud Group.

                Linaro’s Datacenter & Cloud Group aims to, together with its members, provide a common development center for the Arm enterprise ecosystem.

                Working together to resolve common issues and develop standards reduces fragmentation and helps all participating companies deliver their products to market faster.
              buttons:
                - title: Linaro Datacenter & Cloud Group
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/groups/
            - title: Join as a Linaro Club Member
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                If you want to collaborate with Linaro and other industry leaders on all verticals in the Arm Ecosystem, club membership is the right option for you.
              buttons:
                - title: Linaro Club Membership
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/
            - title: Leverage our expertise on your project through Linaro Developer Services.
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                Linaro Developer Services allows you to work with Linaro on a one-to-one basis on your specific project.
              buttons:
                - title: Linaro Developer Services
                  style: btn-lg text-btn
                  textBtn: true
                  url: /services/
            - title: Join our team!
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                We frequently hire subject matter experts and maintainers - if you're interested in becoming part of our team, go to the Linaro careers page to find out more.
              buttons:
                - title: Linaro Vacancies
                  style: btn-lg text-btn
                  textBtn: true
                  url: /careers/
            - title: Join as a Linaro Core Member
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                If you want to participate in all the work Linaro does as well as have access to your own dedicated engineering team, then core membership is the right option for you.
              buttons:
                - title: Linaro Core Membership
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
