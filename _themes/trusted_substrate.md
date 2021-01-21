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
    title: Standards Compliant BIOS for Arm Embedded World
    description: >
        Trusted Substrate is a BIOS that brings standards based secure booting and
        over-the-air (OTA) updates to the most trust demanding embedded
        computing projects such as automotive and robotics. OTA is a key value of
        Trusted Substrate as it allows any firmware components to be updated with
        anti-bricking and anti-roll back protections, and will allow transactional
        updates in asymmetric computing, Cortex-A + Cortex-M solutions.
    image: /assets/images/content/Trusted_Firmware.png
    buttons:
      - title: How can we help?
        url: "#contact_form"
        style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: How can we help?
        url: "#contact_form"
        style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
sub_themes:
  - Dependable Boot
  - Over-the-air Updates
  - Trusted Services
presentation_link: /about/
video_link: /about/
blogs_link: /blog/tags/?tag=Trusted%20Firmware
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
          text: >
            ### Is the project for me?


            If you are a product builder you may want to lead specific aspects of the ownership lifecycle, software supply chain integration or
            over-the-air updates for instance. Some tenders may require compliance to regulatory or industry specific trust related documentation
            (NIST, UN.WP29, ASIL...). Membership gives you an opportunity to have a strong influence on the scope of the relevant specifications
            that Trusted Substrate need to cover.
            

            If you are an operating system provider, you may want to influence the feature and interface implementation aspects. Membership gives
            you an opportunity to push for completeness of implementation that sometimes has optional components but required in your use cases.
            If you are an SoC vendor, you may want to ensure all your digital trust technologies are properly exposed and that your product meets all
            requirements from product builders. Membership gives you all opportunities to push and promote your secure element and, crypto
            accelerations innovations as well as silicon based hardware attack mitigations.


            If your business relies on a trusted application such as Digital Rights Management, Digital Wallet or fingerprint authentication, you may
            want to lead the transformation of the trusted application life cycle and lead the specification and technical roadmap on this topic.
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