---
id: 15
title: Android Ecosystem
slug_title: Android Ecosystem
sub_theme: false
permalink: /android-ecosystem/
image: /assets/images/content/client-devices-share-image.png
icon: /assets/images/content/Client_Devices_icon_white.svg
icon_dark: /assets/images/content/CD.svg
icon_alt: /assets/images/content/Client_Devices_icon_white.svg
icon_col: /assets/images/content/Client_Devices_icon_col.svg
js-package: contactForm
description: >
  Arm is the dominant CPU architecture in modern smartphones because of its efficient power consumption, fast performance and all day battery life. Ensuring Android devices run smoothly on Arm is therefore crucial to deliver an exceptional user experience. 
# presentation_link: https://linaro.co/android-slides
video_resources_link: https://resources.linaro.org/en/themes/307811da-98f5-4cfe-b63c-72b117b9c674
jumbotron:
  class: header_no_bold_first_para theme_banner
  title_row: true
  title: Android Ecosystem
  description: |
    Arm is the dominant CPU architecture in modern smartphones because of its efficient power consumption, fast performance and all day battery life. Ensuring Android devices run smoothly on Arm is therefore crucial to deliver an exceptional user experience. 
  image: /assets/images/content/Client_Devices_banner_pic.jpg
flow:
  - row: container_row
    style: bg-light-gray py-4 mb-5
    sections:
      - format: two_column
        style: #
        breakpoint: md
        right_column:
          custom_size: 6
          image: /assets/images/content/Mobile_Ecosystem_pic.jpg
        left_column:
          custom_size: 6
          style: p-3
          text: |
            ## Android and Open Source

            For devices running on Arm-based technology to truly leverage the Arm CPU’s power consumption, performance and all day battery life capabilities, it is necessary to ensure that open source tools and applications using Android can run natively on Arm. It is also essential to ensure that Android devices are continually maintained, updated and secure.

            These are no small tasks which any one company can tackle on its own. This is why companies join the Linaro Consumer Group.
  - row: container_row
    style: bg-white py-0
    absolute_image:
      style: px-0
      image: /assets/images/content/Maintaining_Secure_image.jpg
    sections:
      - format: two_column
        style: #
        breakpoint: md
        left_column:
          custom_size: 6
          style: px-3 py-5 text-white
          text: |
            ## Maintaining Secure and Up to Date Android Devices

            There are millions of Android devices all over the world that need to be kept secure and up to date. But how do you make that happen? Linaro has been active in the Android community for many years, specialising in getting security patches and features upstreamed so that the community as a whole can benefit. Equally crucial to ensuring Android devices are secure and up to date is the regular testing of upstream kernels. Linaro created the testing framework which is used to do just this - Linux Kernel Functional Test (LKFT). Linaro runs regular tests of upstream kernels with AOSP and creates regression reports to the community, authoring fixes to specific issues which are then passed along to the correct community to take action.
  - row: container_row
    style: bg-light-gray
    sections:
      - format: custom_include
        source: themes/android_ecosystem_testimonial.html
  - row: custom_include_row
    source: themes/associated_members.html
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    sections:
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
---
