---
id: 6
title: Trusted Substrate
permalink: /trusted-substrate/
image: /assets/images/content/Trusted_Firmware.png
description: >
    Trusted Substrate is a BIOS that brings standards based secure booting and
    over-the-air (OTA) updates to the most trust demanding embedded
    computing projects such as automotive and robotics. OTA is a key value of
    Trusted Substrate as it allows any firmware components to be updated with
    anti-bricking and anti-roll back protections, and will allow transactional
    updates in asymmetric computing, Cortex-A + Cortex-M solutions.
jumbotron:
    class: theme_banner 
    title: Standards Compliant BIOS for Arm Embedded World
    description: >
        Trusted Substrate is a BIOS that brings standards based secure booting and
        over-the-air (OTA) updates to the most trust demanding embedded
        computing projects such as automotive and robotics. OTA is a key value of
        Trusted Substrate as it allows any firmware components to be updated with
        anti-bricking and anti-roll back protections, and will allow transactional
        updates in asymmetric computing, Cortex-A + Cortex-M solutions.
    image: /assets/images/content/Trusted_Firmware.png
sub_themes:
  - Dependable Boot
  - Over-the-air Updates
  - Trusted Services
presentation_link: /about/
video_link: /about/
blogs_link: /blog/tags/?tag=Trusted%20Firmware
flow:
    - row: container_row
      sections:
        - format: custom_include
          source: themes/sub_theme_blocks.html
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
---