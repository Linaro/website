---
title: Kernel Validation
description: |-
  The mission of the Kernel Validation team (KVT) is to perform functional regression testing on select Linux kernel branches in real time (as they’re updated) and report any regressions as quickly as possible.
keywords: linux, Arm, kernel,upstream, coresight, MMC, LSK, kexec, kdump,storage,memory management,device tree, validation, lkft
permalink: /engineering/core/kernel-validation-and-testing/
related_tags:
  - kernel
  - KVT
  - validation
  - lkft
layout: flow
related_resources_tracks: https://connect.linaro.org/assets/json/validation.json
js-package: engineering
image: /assets/images/content/engineering/png/core_engineering.png
jumbotron:
  title: Kernel Validation
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
            The mission of the Kernel Validation team (KVT) is to perform functional regression testing on select Linux kernel branches in real time (as they’re updated) and report any regressions as quickly as possible. This is performed by executing a variety of functional-tests on a selection of user-space operating systems.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The goals of KVT are to shorten derivative Linux kernel release intervals, increase the confidence of upstream Linux kernel engineers in the quality of their releases, and increase the confidence of downstream adopters of those Linux kernel trees. Ultimately the goal is that KVT will encourage downstream hardware vendors to more frequently update the Linux kernel that runs on their devices in order that consumers might benefit from bug and security updates.
  - row: container_row
    style: youtube_embed_row bg-light
    sections:
      - format: youtube
        style: #
        url: https://www.youtube.com/watch?v=mWpK-cNQmL8
        #   poster_image: /assets/images/test/background-image1.jpg
        title: Interview with Shuah Khan on Kernel Self Test
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            As part of Linaro’s mission to improve the Arm architecture eco-system, the KVT team reports discovered regressions to Linaro kernel developers, Linaro members, and upstream Linux kernel engineers.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            It is important to the Arm eco-system that Linaro also fix as many failures as are found. The KVT team invests time into identifying, reporting, and fixing upstream kernel regressions, identifying kernel regressions in select member-hardware SoC (system-on-a-chip) trees, fixing test-suites by contributing to upstream testing projects, fixing kernel configurations, improving full OS stack integration (firmware, kernel, userspace), and improving Arm device automation integration.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The results of running functional test against the LTS, mainline and next branches can be viewed here [https://lkft.linaro.org/](https://lkft.linaro.org/).
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            View the KernelCI meeting notes - https://groups.io/g/kernelci/search?q=%23minutes&ct=1
  - row: custom_include_row
    source: engineering_related_resources.html
---
