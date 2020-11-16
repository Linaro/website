---
title: Multimedia
description: |-
  The Multimedia initiative at Linaro aims at collaborating to reduce fragmentation in the Deep learning NN acceleration ecosystem, where currently every IP vendor forks the existing open source models and frameworks to integrate their hardware blocks and then tune for performance.
keywords: Linaro, Multimedia, RDK, LHG, Arm, Linux, hardware, Audio/Video automated testing, Secure Video
image: /assets/images/content/Phone_cam1.jpg
members:
  key: mi-incubator
related_resources_tracks: https://connect.linaro.org/assets/json/multimedia.json
permalink: /engineering/multimedia/
js-package: engineering
related_tags:
  - Multimedia
  - RDK
  - LHG
jumbotron:
  title: Multimedia
  inner_class: dotted
  description: "Improving the media experience on Arm devices"
  image: /assets/images/content/Phone_cam1.jpg
layout: flow
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club,Comcast
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: title
        title_content:
          size: h2
          text: Improving the media experience on Arm devices
      - format: text
        style: text-left no-padding
        text_content:
          text: |
            Multimedia devices often function as home gateways and IP clients to access broadband and Pay TV services and are
            capable of managing content rights throughout the connected home. Viewers expect these devices to deliver rich 3D
            graphical user interfaces, access to their favorite applications, and the ability to watch and record programs all while
            operating on lower standby and active power. Many standards exist, but these are not implemented consistently across all
            platforms and devices, leading to significant fragmentation, a multitude of point solutions and subsequently significant
            amounts of duplicated, non-differentiating engineering effort. The Linaro multimedia group was formed in 2018 to help
            overcome these fragmentation issues and provide standardized solutions, helping to improve the media experience on
            Arm and resolve common multimedia problems for the Arm ecosystem.

  - row: container_row
    style: large_type py-0 bg-light members_row
    sections:
      - format: custom_include
        params: Microsoft Play Ready,RDK,Widevine
        source: related_projects.html
  - row: container_row
    style: large_type introduction_row py-0 info_row
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: |
            Linaro works on fundamental software platforms which enable rapid deployment of new services across a range of
            platforms. Developing the base platform for diverse and complex multimedia applications requires a significant amount of
            software that addresses common challenges.
      - format: block
        style: text-left no-padding
        block_section_content:
          item_width: "3"
          blocks:
            - title: Secure Video
              modal_content: |
                The goal of the project is to provide member companies with reusable open source components (where possible) to quickly accelerate over-the-top, set-top box, smart TV and infotainment use cases that need to support the playback of protected content. One of the main focuses since the multimedia group was formed in Linaro has been on implementing a Secure Video Path (SVP) or Secure data path (SDP) solution that leverages OP-TEE secure OS and Trustzone to satisfy the requirements of Widevine L1 and Playready SL3000 so that decrypted and decompressed data is never accessible by the rich execution environment.

                Traditionally this is an area where many vendors have implemented very custom out of tree solutions that are costly to implement and even more costly to maintain. Linaro wants to promote a standardized solution for the benefit of everyone working right across the stack from the web browser down to the secure OS. Work to date has focussed on how we can support the [W3C EME standard](https://www.w3.org/TR/encrypted-media/) via:

                - open source content decryption (CDM) plugins

                - integration of these plugins with wpewebkit and Chromium browsers

                - the development of trusted applications in OP-TEE

                - integration of the SDP solution into the Reference Design Kit (RDK) and AOSP

                - secure buffer allocation and communication of file descriptors across components

                - enhancements to wayland and GStreamer to support secure playback use cases.

              image: /assets/images/content/Security_screen.jpg
              description: >
                The goal of the project is to
                provide member companies with
                reusable open source
                components (where possible) to
                quickly accelerate over-the-top,
                set-top box...
            - title: Reference Design Kit (RDK)
              modal_content: |
                [RDK](https://rdkcentral.com/) is a modular, portable and customizable open source software solution that standardizes core functions used in video, broadband and IoT devices. The goal of the RDK project is to help facilitate fast ramp up on member companies own RDK projects. To do this Linaro prototypes on member company silicon best in class open source components to give RDK more interoperability, flexibility and improved performance. Linaro has worked on the Yoctofication of RDK, integration of OP-TEE and CDM plugins to support secure video use cases, enhancements to the Westeros wayland compositor and member silicon enablement.
              image: /assets/images/content/testing.jpg
              description: >
                RDK is a modular, portable and
                customizable open source
                software solution that
                standardizes core functions used
                in video, broadband and IoT
                devices. The...
            - title: Camera
              modal_content: |
                As SoC camera architectures have become more complex, the kernel APIs have evolved to support this increased complexity. New kernel APIs such as media controller and v4l2 subdev were created to expose these complex pipelines to userspace. What’s more, instead of having one video device node to manage, userspace now has multiple device nodes. In summary, setting up these complex camera pipelines requires userspace to have lots of prior knowledge of the underlying hardware. The proposed solution to this complexity is [libcamera.org](http://libcamera.org/), which aims to encapsulate all this platform complexity into a userspace library that can be re-used by ChromeOS, Android and Linux. Linaro is working with the libcamera project and across the Camera ecosystem to help members leverage the library and enable their SoCs. Work to date has focussed on Camera sensor driver upstreaming to avoid fragmentation in downstream vendor trees, and helping ensure good support of the [96boards](https://www.96boards.org/) ecosystem.
              image: /assets/images/content/Phone_cam1.jpg
              description: >
                As SoC camera architectures
                have become more complex, the
                kernel APIs have evolved to
                support this increased
                complexity. New kernel APIs
                such as media controller...
            - title: Audio/Video automated testing
              modal_content: |

                To ensure your products are secure and of the highest possible quality, you want to be able to test them. Linaro provides members with re-usable test definitions built on open source tooling to help validate video and audio use cases.

              image: /assets/images/content/Testcard.png
              description: >
                To ensure your products are
                secure and of the highest
                possible quality, you want to be
                able to test them. Linaro
                provides members with
                re-usable test definitions built...
  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: #
        title_content:
          size: h2
          text: >
            How do I get involved?
      - format: text
        style: #
        text_content:
          text: |
            All Linaro member companies benefit from the work Linaro does on multimedia. This work provides the foundations
            these groups need to accelerate Arm development within their verticles. If you would like to get involved with the work
            Linaro does on multimedia specifically, you can join as a member at Club or Core level. This will allow you to actively drive
            the engineering work and set the priorities.

            To read more about membership and fill out the enquiry form [>>CLICK HERE](/membership/)
  - row: custom_include_row
    source: engineering_related_resources.html
---
