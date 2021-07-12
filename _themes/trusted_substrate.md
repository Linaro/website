---
id: 6
title: Trusted Substrate
sub_theme: false
permalink: /trusted-substrate/
image: /assets/images/content/Trusted_Firmware.png
icon: /assets/images/content/Icon_Trusted_Substrate.svg
icon_dark: /assets/images/content/Black_Trusted_Substrate.svg
description: >
    Trusted Substrate is a BIOS that brings standards based secure booting and
    over-the-air (OTA) updates to the most trust demanding embedded
    computing projects such as automotive and robotics. OTA is a key value of
    Trusted Substrate as it allows any firmware components to be updated with
    anti-bricking and anti-roll back protections, and will allow transactional
    updates in asymmetric computing, Cortex-A + Cortex-M solutions.
jumbotron:
    class: theme_banner 
    title: Standards based BIOS for Arm SystemReady hardware
    description: >
        Trusted Substrate is a BIOS that brings standards based secure booting and
        over-the-air (OTA) updates to the most trust demanding embedded
        computing projects such as automotive and robotics. OTA is a key value of
        Trusted Substrate as it allows any firmware components to be updated with
        anti-bricking and anti-roll back protections, and will allow transactional
        updates in asymmetric computing, Cortex-A + Cortex-M solutions.
    image: /assets/images/content/Trusted_Firmware.png
    buttons:
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
      - title: Download White Paper
        url: https://linaro.co/trusted-substrate-white-paper
        style: btn btn-primary white_on_black_btn btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: Download White Paper
        url: https://linaro.co/trusted-substrate-white-paper
        style: btn btn-primary white_on_black_btn btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
sub_themes:
  - Dependable Boot
  - Over-the-air Updates
  - Trusted Services
presentation_link: https://linaro.co/trusted-substrate-slides
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
      sections:
       - format: text
         text_content: 
          text: |
            ### Trusted Substrate Panel Discussion

            The goal of the Trusted Substrate panel is to discuss what’s new on the firmware planet and how it is influencing Linux. In addition to this, panelists will discuss their views on: The value of standardized firmware interfaces, particularly on OTA The strategic value of firmware as it is changing role The continued importance of working upstream Safety certification in industrial and automotive areas.
    - row: container_row
      style: youtube_embed_row bg-light
      sections:
        - format: youtube
          style: #
          url: https://www.youtube.com/watch?v=8Ttg-p7-uys
          poster_image: /assets/images/content/lvc21-300k2-poster.png
          title: LVC21-300K2 Trusted Substrate Panel
    - row: container_row
      sections:
       - format: text
         text_content: 
          text: |
            ### Is the project for me?

            If you are a product builder you may want to lead specific aspects of the ownership lifecycle, software supply chain integration or over-the-air updates for instance. Some tenders may require compliance to regulatory or industry specific trust related documentation (NIST,  UN.WP29, ASIL…).
            Membership empowers you to have a strong influence on the scope of the relevant specifications that Trusted Substrate needs to cover.

            If you are an operating system provider, you may want to influence the feature and interface implementation aspects.
            Membership gives you an opportunity to push for completeness of the implementation that sometimes includes components that are optional, based on standards which may be required for your specific use cases.

            If you are a SoC vendor, you may want to ensure that all your digital trust technologies are properly exposed and that your product meets all the requirements from product builders.
            Membership gives you the opportunity to push and promote your secure element and your innovative crypto accelerators as well as silicon based hardware attack mitigations.

            If your business relies on trusted applications such as Digital Rights Management, Digital Wallet or fingerprint authentication, you may want to lead the transformation of the trusted application life cycle and lead its specification and technical roadmap.
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