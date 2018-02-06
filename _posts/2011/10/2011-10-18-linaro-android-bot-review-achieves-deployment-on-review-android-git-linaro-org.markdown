---
author: frans.gifford
categories:
- blog
date: 2011-10-18 13:21:18
description: First deployment of Linaro Android Review Bot. This integrates our Gerrit
  code review system with our Jenkins build system and LAVA validation and test system.
keywords: continuous integration, LAVA, gerrit, jenkins, linaro android review bot,
  android, linaro, automation
layout: post
link: /blog/lava-blog/linaro-android-bot-review-achieves-deployment-on-review-android-git-linaro-org/
slug: linaro-android-bot-review-achieves-deployment-on-review-android-git-linaro-org
tags:
- Android
- LAVA
- android
- automation
- continuous integration
- gerrit
- jenkins
- lava
- Linaro
- linaro android review bot
title: Linaro Android Bot Review Achieves Deployment On Review.android.git.linaro.org
wordpress_id: 699
---

This week saw the first deployment of the Linaro Android Review Bot[1][2]. This further integrates our Gerrit[3] code review system[4] with our Jenkins[5] build system, and our LAVA[6] validation and test system. Changes approved by reviewers in Gerrit are now automatically queued for build and testing and the results of these builds and tests are reported back into the code review. If both build and test succeed, the changeset is approved and automatically merged.

It is early days yet for the bot, which is currently only building changes for one target board, but it will raise the minimum level of testing on Linaro Android builds and it is already beginning to drive changes in the way we build and test as the load on those systems increases.

[1] Linaro Android Bot Review homepage: [https://wiki.linaro.org/Platform/Android/AndroidBotReview](https://wiki.linaro.org/Platform/Android/AndroidBotReview)
[2] Linaro Android Bot Review project page (raise bugs here!): [http://launchpad.net/linaro-android-bot-review](http://launchpad.net/linaro-android-bot-review)
[3] Gerrit Code Review: [https://code.google.com/p/gerrit](https://code.google.com/p/gerrit)
[4] Linaro Code Review: [https://git.linaro.org/?q=android](https://git.linaro.org/?q=android)
[5] Jenkins Continuous Integration: [http://jenkins-ci.org](http://jenkins-ci.org)
[6] Linaro Automated Validation on ARM: [https://launchpad.net/lava](https://launchpad.net/lava)