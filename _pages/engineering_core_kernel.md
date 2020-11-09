---
title: Kernel
description: |-
  The Kernel Working Group’s primary focus is to be an active contributor to the upstream community and facilitate acceptance of Arm code into the Linux mainline kernel.
keywords: linux, Arm, kernel,upstream, coresight, MMC, LSK, kexec, kdump,storage,memory management,device tree
permalink: /engineering/core/kernel/
related_tags:
  - kernel
  - coresight
  - KWG
layout: flow
js-package: engineering
related_resources_tracks: https://connect.linaro.org/assets/json/kernel.json
image: /assets/images/content/engineering/png/core_engineering.png
jumbotron:
  title: Kernel
  inner_class: dotted
  description: ""
  image: /assets/images/content/engineering/context/stewardship.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The Kernel Working Group’s (KWG) primary focus is to be an active contributor to the upstream community and facilitate acceptance of our code into the Linux mainline kernel. Our goal is kernel consolidation - a single source tree with integrated support for multiple Arm SoCs and Arm-based platforms.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The Kernel Working Group has been at the center of Linaro’s engineering work right from the beginning. The code churn created by multiple companies and individuals trying to upstream essentially the same code into kernel.org was one of the main reasons that Linaro was founded and Linus Torvalds famously complained about this shortly after Linaro’s founding:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            > “Somebody needs to get a grip in the Arm community. I do want to do these merges, just to see how screwed up things are, but guys, this is just ridiculous. The pure amount of crazy churn is annoying in itself, but when I then get these “independent” pull requests from four different people, and they touch the same files, that indicates that something is wrong.” Source: Linux Kernel Mailing List, March 2011 https://lkml.org/lkml/2011/3/17/492
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro’s work, especially in the kernel working group, provided the focal point for collaboration and the situation recognizably improved and Torvalds commented in 2012:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            > “What makes me happy is when some painful process issue gets resolved. For me, over the last year, it’s been Arm who from a constant headache in every single merge window has become an upstanding citizen in the Linux community…” Source: http://news.softpedia.com/news/Linus-Torvalds-Arm-Is-an-Upstanding-Member-of-The-Community-294886.shtml
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            By 2015, Torvalds recognized that the situation had continued to improve:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            > “The Arm situation has just improved tremendously over the last several years. It used to be a major pain to me, it has gone to almost being entirely painless…” Source: https://youtu.be/msT1O8P6KXQ
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            As part of its Arm Kernel Collaboration work, the Kernel Working Group has taken full responsibility for implementing support for many Armv8 features including CoreSight, kprobes, kexec and more. In addition, it has major contributions in the areas of Android upstreaming and work specific to storage performance.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            In the tradition of Linux and the open source community, much of the technical discussion for the kernel team takes place over email and informal conversations on IRC.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            - Mailing list: mailto:linaro-kernel@lists.linaro.org ([subscribe](http://lists.linaro.org/mailman/listinfo/linaro-dev))

            - IRC: #linaro-kernel on irc.freenode.net

            - Process: The Kernel Working Group works upstream using upstream processes and through lead projects.
  - row: custom_include_row
    source: engineering_related_resources.html
---
