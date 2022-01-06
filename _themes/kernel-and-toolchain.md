---
id: 4
title_id: Kernel & Toolchain
title: Kernel & Toolchain
sub_theme: false
permalink: /kernel-and-toolchain/
image: /assets/images/content/code_banner.jpg
icon: /assets/images/content/Kernel_White.svg
icon_dark: /assets/images/content/Black_Kernel.svg
description: >
  Kernel and toolchain technologies are essential to maintaining the health of software. We facilitate the access to maintainers, support regression testing, improve compiler technology and increase security across the Arm ecosystem.
jumbotron:
  class: theme_banner
  title: Kernel & Toolchain
  description: >
    Kernel and toolchain technologies are essential to maintaining the health of software. We facilitate the access to maintainers, support regression testing, improve compiler technology and increase security across the Arm ecosystem.
  image: /assets/images/content/Kernel_Toolchain_Security.png
  buttons:
    - title: How can Linaro help?
      url: "#contact_form"
      style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
    - title: How can Linaro help?
      url: "#contact_form"
      style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
presentation_link: https://linaro.co/kernel-and-toolchain-slides
flow:
  - row: container_row
    sections:
      - format: text
        text_content:
          text: |
            One of the main objectives when forming Linaro was to consolidate the Arm code base. The code churn created by multiple companies and individuals trying to upstream essentially the same code into kernel.org was causing fragmentation and slowing down innovation and delivery of products. Linaro’s work, especially in the kernel, provided the focal point for collaboration and the situation recognizably improved by 2012, something [Linus Torvalds recognized](http://news.softpedia.com/news/Linus-Torvalds-Arm-Is-an-Upstanding-Member-of-The-Community-294886.shtml).

            Linaro employs a significant number of maintainers covering a [wide range of important areas](https://linaro.atlassian.net/wiki/spaces/UM/overview). This allows us to reach far within open source communities and have a real impact. We actively contribute to the upstream community and help facilitate acceptance of Linaro code into the Linux mainline kernel. Our ultimate goal is to ensure kernel consolidation - a single source tree with integrated support for multiple Arm SoCs and Arm-based platforms.

            We manage and implement support of new features not only dedicated to Arm architecture but also covering core functionalities of the kernel.  In the tradition of Linux and the open source community, much of the technical discussion takes place over email and informal conversations on IRC.

            Mailing list: mailto:linaro-kernel@lists.linaro.org (subscribe)
            IRC: #linaro-kernel on irc.libera.chat

            In addition to the work we do on the kernel, Linaro also works on all aspects of system-level tools - the core development toolchain (compiler, assembler, linker, debugger), core system libraries (dynamic linker, c-library), emulation, profiling and analysis (oprofile, performance events) and instrumentation (ftrace). We work directly with upstream communities such as GCC, Binutils, GDB, glibc, LLVM, QEMU and provide monthly GNU Toolchain Integration Builds which offer users a snapshot of the upstream build. 

            You can [access Linaro’s monthly GNU integration builds and Linaro’s official LLVM for Windows on Arm here](https://www.linaro.org/downloads/#gnu_and_llvm).
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
  - row: custom_include_row
    source: themes/theme_contact_form.html
---
