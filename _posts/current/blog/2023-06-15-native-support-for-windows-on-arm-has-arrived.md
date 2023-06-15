---
layout: post
title: Native Support for Windows on Arm has arrived
description: In this blog, we look at some of the big announcements made at
  Microsoft Build and how they signal a huge leap forward for native development
  on Windows on Arm. Read more here!
date: 2023-06-15 11:22:14 +01:00
image: /assets/images/content/open_source_keyboard_under_2mbjpg.jpg
tags:
  - Windows on Arm
category: blog
author: andrea.gallo
---
# Introduction

Microsoft Build is an annual conference event held by Microsoft, targeted at software engineers and web developers using Windows. Linaro was present at the Microsoft BUILD event in Seattle on May 23rd-25th, 2023. From a broad conference perspective, the focus was on the integration of generative AI across the entire range of products by Microsoft. This enables unprecedented use cases, for example the new Microsoft copilot AI-based assistant could analyse a test report from github, identify every test failure and create a corresponding Jira ticket, assign it to the right engineers, send email notifications and calendar reminders.

At the conference, Microsoft also announced an increasing number of new applications being released with native support for Windows on Arm. In this blog we take a closer look at what this means for the Windows on Arm ecosystem and the role Linaro has played in these significant achievements. 

# Building the best Arm apps for Windows

From a Linaro specific perspective, Windows on Arm was very well covered by both Qualcomm and Microsoft at Microsoft Build. In particular, the video recording from the closing session “Learn how to build the best Arm apps for Windows” by Ivette Carreras, Jamshed Damkewala and Marcus Perryman is now publicly available on the [BUILD website](https://build.microsoft.com/en-US/sessions/4c00afb9-e345-489c-bf7f-bfd6ecfde455).

The message shared by the speakers is that the majority of dependencies from open source tools has been removed and new applications are now being released with native support for Windows On Arm. There is no magic needed or different tools or different ways of developing applications when adopting the Arm architecture embedded in the Qualcomm Snapdragon chips. It is just a question of rebuilding with Arm64 as a target.

Fast-forward to 6’00” into the video and the testimonials include announcements by Ned Stankus from Cisco for their Webex communication suite, Aidan Fitzpatrick from Reincubate for their Camo studio camera filters, Armand Rochette and Yvan Grabit from Steinberg for Cubase and other sound production tools, Graham Booker from Plex for their Plex Media Server.

At 20’00”, Ivette Carreras also announced that Dropbox is now in beta and will become available later this summer thanks to python, Bazel and node being fully supported. This is thanks to the collaboration between Microsoft, Arm, Qualcomm and Linaro, as these packages have been at the top of our priority list for the last several months.

Jamshed and Marcus gave a few demonstrations of the latest games, applications and tools now supported natively, including Wine and Flutter.

Fast forward to 32’00” into the public video: Marcus invited every developer to visit the [http://aka.ms/ArmOSS](https://linaro.atlassian.net/wiki/spaces/WOAR/overview) page, verify the status of native support for Windows on Arm for most open source packages and request new open source projects that may still be a dependency. Interestingly enough, the short URL recommended by Microsoft redirects to the Linaro-hosted Windows on Arm landing page!

Ivette called out Linaro again at 36’00” in their talk!

The closing and most exciting announcement by the speakers at the end of their session was that Unity 23.1 tech stream release will have Arm native support this summer, it is already available now in beta.

# Solving the Open Source Dependencies

The slides presented by Ivette are available on the [Microsoft BUILD website](https://www.google.com/url?q=https://medius.microsoft.com/video/asset/PPT/ab47e3cf-274e-421d-82d2-8b39fa1fde60&sa=D&source=docs&ust=1686835756549661&usg=AOvVaw1l7-JRjEK2wP1C98CCFgGR) and it is worth calling out the “Arm development ecosystem” page:

{% include image.html path="/assets/images/content/arm-development-ecosystem.png" alt="Arm development ecosystem" %}

Ivette clearly walked the audience through the slide and explained the three phases of their approach: (1) deliver critical development tools (2) solve the open source dependencies and then (3) deploy powerful development platforms to all developers.

Since late 2020, Linaro has been focusing on #2, solving the open source dependencies and in February 2022 we announced that [Microsoft joined Linaro, Arm and Qualcomm to advance Windows on Arm](https://www.linaro.org/news/microsoft-joins-linaro-arm-and-qualcomm-technologies-to-advance-windows-on-arm/).

{% include image.html path="/assets/images/content/llvm-release-heading-woa.png" alt="llvm logo" %}

Actually the first breakthrough was in April 2021, when Linaro announced the first piece of collaborative work: [Linaro, Arm and Qualcomm® collaborate to enable native LLVM for Windows 10 on Arm](https://www.linaro.org/news/linaro-arm-and-qualcomm-collaborate-to-enable-native-llvm-for-windows-10-on-arm/). This was the first LLVM release for Windows 10 on Arm and marked a significant step towards enabling developers to build natively with LLVM on Windows 10 on Arm.

LLVM is one of the main tools the open-source community uses to compile their code and Linaro is the maintainer of LLVM for Arm for Linux, it was just straightforward for our engineers to extend coverage to include Windows on Arm too. Probably the complexity was not on the software engineering side but on setting up a build farm in the early days when Arm nodes running Windows were not available yet from Azure.

{% include image.html path="/assets/images/content/python-heading-woa.png" alt="python logo" %}

In October 2022 Linaro announced: [Windows on Arm now supported in Python 3.11 Release](https://www.linaro.org/blog/windows-on-arm-now-supported-in-python-3-11-release/). It took a few months of work, after contributing to several key packages, and providing a CI machine to build and test for Windows on Arm.

{% include image.html path="/assets/images/content/flutter-heading-woa.png" alt="flutter logo" %}

In October 2022 Linaro started contributing to Flutter, the open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase. It is a key component that allows Android applications to be recompiled for Windows on Arm and then run natively under Windows.

The work is showing good progress, as demonstrated by Marcus in their video at 30’36”. You can follow the Flutter porting notes on our [Flutter Enablement Notes page](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28745138193/Dart+Flutter).

{% include image.html path="/assets/images/content/bazel-heading-woa.png" alt="bazel logo" %}

Bazel was mentioned by Ivette in her talk as a dependency for DropBox. Bazel is an open-source build and test tool that scalably supports multi-language and multi-platform projects. Bazel is used for many popular projects and is the only support build platform for popular frameworks like TensorFlow.

Linaro started contributing to the Windows on Arm port of Bazel as early as February 2022 with the submission of multiple patches, all now available from trunk.

# How can I find out more about Windows on Arm?

A summary of all projects is available from our [Windows On Arm page](https://www.linaro.org/windows-on-arm/) while the engineering landing page at [http://aka.ms/ArmOSS](https://linaro.atlassian.net/wiki/spaces/WOAR/overview) provides full details for all open source projects and dependencies on our radar with full status and enablement notes.

{% include image.html path="/assets/images/content/woa-ecosystem-projects.png" alt="woa ecosystem projects" %}

For more information on Windows on Arm you can also scroll down on the Windows on Arm page to find videos and blogs:

[Linaro.org Windows On Arm Resources](https://www.linaro.org/windows-on-arm/)

If you would like to get involved in Linaro’s Windows on Arm Group, please contact us at **contact@linaro.org.**