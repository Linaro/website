---
title: Consumer
description: |-
  Most that are familiar with Android might think of consumer phones that are available in the average retail shop and naturally think that Google and the creator of the phone are the ones that perform all of the work to create the product. In reality, a number of important pieces of software in Android are open source and developed in the open. The Linux kernel is inside of all Android phones.
keywords: Linux, Arm, Mobile, Android, IoT, toolchains, ecosystem, phones, tablets, wearables, LCG, LMG
image: /assets/images/content/LCG.png
permalink: /engineering/consumer/
layout: flow
js-package: engineering
members:
  key: lcg
related_resources_tracks: https://connect.linaro.org/assets/json/consumer.json
other_projects:
  - name: Linaro Confectionary Release (LCR) and AOSP
    url: https://wiki-archive.linaro.org/LMG/AndroidEngineeringDelta
  - name: Project Ara
    url: https://en.wikipedia.org/wiki/Project_Ara
related_jira_project: https://projects.linaro.org/projects/LMG/summary
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsOCKDbxvLxNKNWxMCwS0QsB
jumbotron:
  title: Consumer
  inner_class: dotted
  description: ""
  image: /assets/images/content/consumer-bg.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: lcg
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Open source is a key ingredient of Android
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Most that are familiar with Android might think of consumer phones that are available in the average retail shop and naturally think that Google and the creator of the phone are the ones that perform all of the work to create the product. In reality, a number of important pieces of software in Android are open source and developed in the open. The Linux kernel is inside of all Android phones.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            In order to stay ahead of security and other issues, the Linux kernel requires a steady stream of patches from the upstream kernel community. These fixes are compiled, tested and released through the Long Term Support (LTS) kernel community. The LTS kernel community targets a wide variety of hardware but most kernel developers do not actively develop for mobile devices. As such, the ARM ecosystem needs to be particularly proactive.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro, together with the ARM SoC vendors and especially Google, through Project Sharp, validate LTS fix streams to ensure they do not contain regressions before these fixes make their way into the Android Common Kernel and then onto consumer devices. This is just one example of how companies collaborating through Linaro make for better end products and better open source for future products.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro’s collaboration with members involved in Android(™) related technologies is done through the Linaro Consumer Group. There are three engineering teams that work under the direction of the LCG: ART, LCG-Kernel and Android. Each team is focused on specific strategic efforts.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The Android team is actively involved with changes that either add functionality to Android (such as OPTEE, AI/ML), or optimization activities where changes to frameworks can improve performance, reduce the memory footprint and so on.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The ART team is engaged with the Android Runtime portion of the Android Open Source Project (AOSP), creating optimizations that benefit both Java and Kotlin apps. A typical optimization example would be examining a code sequence and emitting a more optimal sequence of Arm instructions to increase performance.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The LCG-Kernel team spans a couple of kernel related activities. It maintains the experimental/android-mainline-tracking branch which tracks the out of tree Android kernel patches on top of linux mainline. The team works to upstream patches to mainline and decreasing the backlog of out of tree patches. Through Project Sharp, it keeps close watch searching for kernel regressions in mainline, LTS and Android Common Kernels. This aids the many companies who are
            utilizing LTS and Android Common kernels in their products. When regressions are detected, appropriate action is taken.  Lastly, the team is deeply involved with member company developer boards running Android, helping to make the developer experience on AOSP first rate.

  - row: custom_include_row
    source: engineering_related_resources.html
---
