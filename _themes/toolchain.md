---
id: 1
title: Toolchain
sub_theme: true
permalink: /core-technologies/toolchain/
image: /assets/images/content/toolchain-share-image.png
icon: /assets/images/content/Icon_Toolchain_notext.svg
js-package: contactForm
description: >
  Toolchains continue to evolve as new SoC features are added. Our mission is to improve & maintain open-source Arm toolchain projects.
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/e07e525f-3fa5-44db-a1b2-bc673a318fe4
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Toolchain
  description: |
    Toolchains continue to evolve as new SoC features are
    added. Speed and space optimisations are increasingly
    important, especially in the IoT space. New security
    features need compiler and tool support.

    The world is rapidly changing, and as a result the open software on computing systems is having to accommodate a shift to greater use
    of machine learning, increasing mobile CPU performance. Linaro has provided open source tools for Arm architectures since its
    inception in 2010, working directly with upstream communities such as GCC, Binutils, GDB, Glibc, Newlib, LLVM, Clang, LLD, LLDB,
    QEMU, Valgrind and OpenOCD. Our mission is to improve and maintain open-source Arm toolchain projects.

    We work on all aspects of system-level tools - the core development toolchain (compiler, assembler, linker, debugger), core system
    libraries (dynamic linker, c-library), and emulation.Linaro builds and tests LLVM community integration releases for ARM and AArch64
    architectures (http://releases.llvm.org/download.html). Linaro maintainers serve as release managers for QEMU and Glibc project.
  image: /assets/images/content/Banner_Toolchain.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro Projects focused on Toolchain technology
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Arm GNU Toolchain Enablement and CI
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                The GNU Compiler Collection (GCC) is a compiler system
                produced by the GNU Project. It supports various
                programming languages and is a key component of the GNU
                toolchain. It is the the standard compiler for most projects
                related to GNU and Linux, including the Linux kernel. This
                Linaro project focuses on improving optimizations for popular
                Arm cores, supporting compiler sanitizers, supporting new
                Armv8 architectural features and improving the debugging
                experience.
              buttons:
                - title: Arm GNU Toolchain Enablement & CI
                  style: btn-lg text-btn
                  textBtn: true
                  url: https://linaro.atlassian.net/wiki/spaces/GNU/overview
            - title: Arm LLVM Toolchain Enablement and CI
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                LLVM is one of the main tools the open-source community
                uses to compile their code. It is a set of reusable compiler and
                toolchain technologies which are used to develop front ends
                for any programming language and back ends of any
                instruction set architecture. LLDB is the debugger component
                of the LLVM project. The Linaro toolchain team actively
                maintains the LLDB project and has ownership of Arm and
                AArch64 target specific code base. We implement new and
                improve existing code-size and code-speed optimizations for
                AArch64 and Arm targets.
              buttons:
                - title: Arm LLVM Toolchain Enablement & CI
                  style: btn-lg text-btn
                  textBtn: true
                  url: https://linaro.atlassian.net/wiki/spaces/LLVM/overview

      - format: buttons
        style: text-center
        buttons_content:
          - title: All Projects
            url: /projects/
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Banner_Toolchain.jpg
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
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
