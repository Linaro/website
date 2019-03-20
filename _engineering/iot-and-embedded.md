---
title: IoT & Embedded
description: |-
    The Internet of Things (IoT) is disrupting the traditional embedded market and creating huge growth opportunities. Every device being connected to the cloud and generating personal information is a huge data generation, connectivity and security headache. The disparate software and hardware solutions used in this space are already creating a massive amount of fragmentation and redundant engineering effort.
keywords: Linux, Arm, LITE, Android, IoT, Kernel, ecosystem, tinification
members:
    key: lite
related_tags:
  - lite
  - LITE
  - Linaro IoT and Embedded
  - Embedded
  - Android
  - IoT
related_jira_project: https://projects.linaro.org/projects/LITE/summary
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMjCTIdpvcX5ePMBl4rXS5R
members_key: lite_members
output: true
image: /assets/images/content/LITE col.svg
releases: 
  - title: LITE Releases
    url: https://releases.linaro.org/components/lite/
jumbotron:
    background-image: /assets/images/content/IoT-bg.jpg
---
The Internet of Things (IoT) is disrupting the traditional embedded market and creating huge growth opportunities. Every device being connected to the cloud and generating personal information is a huge data generation, connectivity and security headache. The disparate software and hardware solutions used in this space are already creating a massive amount of fragmentation and redundant engineering effort.

Linaro and its members have created the Linaro IoT & Embedded (LITE) engineering group to work collaboratively on Arm ecosystem support for key standards and engineering work to support reliable implementations in this space.

With the vast choice of proprietary and open software in this space, including FreeRTOS, mbed, Zephyr, ThreadX and more, Linaro needed to choose a project with an open governance model, independent of any single company with the potential to become the Linux kernel of the IoT client world. Linaro chose Zephyr and is using it as a neutral development and test platform for non-differentiating engineering work in this space. Existing solutions will continue for quite a while.  For this reason, Linaro is taking the approach of defining strong abstract interfaces and unifying technology component use. So, for example, it is important that all RTOSes migrate to the same, latest, GNU toolchains. Another example would be of agreeing to use the same Javascript engine.   This means that these technology components can be reused within member RTOS-specific reference platforms.
