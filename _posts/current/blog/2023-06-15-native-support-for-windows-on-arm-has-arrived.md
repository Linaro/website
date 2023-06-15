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

From a Linaro specific perspective, Windows on Arm was very well covered by both Qualcomm and Microsoft at Microsoft Build. In particular, the video recording from the closing session “Learn how to build the best Arm apps for Windows” by Ivette Carreras, Jamshed Damkewala and Marcus Perryman is now publicly available on the BUILD website.

The message shared by the speakers is that the majority of dependencies from open source tools has been removed and new applications are now being released with native support for Windows On Arm. There is no magic needed or different tools or different ways of developing applications when adopting the Arm architecture embedded in the Qualcomm Snapdragon chips. It is just a question of rebuilding with Arm64 as a target.

Fast-forward to 6’00” into the video and the testimonials include announcements by Ned Stankus from Cisco for their Webex communication suite, Aidan Fitzpatrick from Reincubate for their Camo studio camera filters, Armand Rochette and Yvan Grabit from Steinberg for Cubase and other sound production tools, Graham Booker from Plex for their Plex Media Server.

At 20’00”, Ivette Carreras also announced that Dropbox is now in beta and will become available later this summer thanks to python, Bazel and node being fully supported. This is thanks to the collaboration between Microsoft, Arm, Qualcomm and Linaro, as these packages have been at the top of our priority list for the last several months.

Jamshed and Marcus gave a few demonstrations of the latest games, applications and tools now supported natively, including Wine and Flutter.

Fast forward to 32’00” into the public video: Marcus invited every developer to visit the http://aka.ms/ArmOSS page, verify the status of native support for Windows on Arm for most open source packages and request new open source projects that may still be a dependency. Interestingly enough, the short URL recommended by Microsoft redirects to the Linaro-hosted Windows on Arm landing page!

Ivette called out Linaro again at 36’00” in their talk!

The closing and most exciting announcement by the speakers at the end of their session was that Unity 23.1 tech stream release will have Arm native support this summer, it is already available now in beta.