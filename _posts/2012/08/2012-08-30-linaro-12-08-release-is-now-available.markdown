---
author: linaro
categories:
- blog
date: 2012-08-30 16:17:14
description: Links to all the downloads for the Linaro 12.08 release
keywords: Linaro, Linaro Connect, Linaro 12.08 Release, Announcement, Linux on ARM,
  Ubuntu, Android, ARM, Virtual Connect, Copenhagen, October, Events
layout: post
link: /blog/releases-blog/linaro-12-08-release-is-now-available/
slug: linaro-12-08-release-is-now-available
tags:
- Connect Events
- Releases
title: Linaro 12.08 Release Is Now Available
wordpress_id: 1842
---

> Coming together is a beginning; keeping together is progress; working together is success.~ Henry Ford

## The Linaro 12.08 release is now available!

The [Linaro 12.08 release](https://wiki.linaro.org/Cycles/1208/Release) highlights the combined work of all the [Linaro Teams](/leg/) – [Working Groups](https://wiki.linaro.org/WorkingGroups), [Landing Teams](https://wiki.linaro.org/LandingTeams) and [Platform Teams](https://wiki.linaro.org/Platform) – who have provided all the updates and new features that are integrated on top of Android and Ubuntu during this development cycle. The 12.08 release is another example of how Linaro succesfully--together with its members, partners and community--continue to build the future of Linux on ARM.

Linaro also held its first [Virtual Connect](/blog/linaro-announces-virtual-connect-q3-12-13-17-august-2012/) event on 13 - 17 August, 2012. This online event used Google+ Hangouts on Air and was streamed and recorded via YouTube. Linaro's Engineering VP, [Christian "Kiko" Reis](/about/) hosted the event and many members of the various Linaro Teams provided informative, educational and exciting sessions that allowed for public viewing and participation. By all accounts, this event was a success. If you missed this event, don't worry all the sessions can be viewed on the [Linaro On Air Google+ Page](https://plus.google.com/u/0/b/112814496864921562564/116754366033915823792/posts) and [YouTube channel](http://www.youtube.com/channel/UCIVqQKxCyQLJS6xvSmfndLA/feed); additionally, a complete [listing and links](http://akgraner.com/?p=1324) to all the sessions can be found on [Planet Linaro](https://www.linaro.org/planet/).

12.08 was a very busy cycle for the Linaro Android platform team, "During the cycle, our number one goal was to create stable Jelly Bean builds from AOSP for all of the platforms we support," said [Zach Pfeffer](/about/), Tech Lead for the Linaro Android Team. "Not only did the team achieve this goal, but also continued to create a world class Android benchmarking platform, made it easier for people to connect their Jelly Bean based builds to the network by integrating the Ethernet Configuration Manager and automated many of the tests in the AOSP codebase," added Pfeffer.  The Linaro Android team is already looking toward the Linaro 12.09 release cycle and according to Pfeffer, "We’re planning on getting each baseline working with Linaro’s linux-linaro upstream tracking kernel, continuing to improve our benchmarking infrastructure and start researching what it would take to get Android working on 64-bit".

The Developer Platform Team announced USB Host enablement is now available in [LAVA](https://wiki.linaro.org/Platform/Validation) and that all packaged linux-linaro kernels are now cross-compiled and boot tested via LAVA before these packages are uploaded to Linaro Overlay PPA. Additionally, U-Boot-Linaro is now based on the latest upstream release--v2012.07.

Just as the Linaro Android team is looking to the future, so is the whole of Linaro, as we continue to build the future of Linux on ARM, we would like to announce that [registration](http://connect.linaro.org/wp-login.php?redirect_to=/register-connect/) for [LCE 12 Copenhagen](http://connect.linaro.org/resources/) is now open.  Linaro Connect will be held from 29 Oct to 2 Nov at the Bella Centre in Copenhagen, Denmark and new to this upcoming Linaro Connect will be three mini-summits--Android, ARMv8 (64-bit) and big.LITTLE. More information about this event can be found on the [Linaro Connect website](http://connect.linaro.org/resources/).

### USING THE ANDROID-BASED IMAGES

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

  * [http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

  * [http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


  * [http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

### USING THE UBUNTU-BASED IMAGES

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

  * [http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

### GETTING INVOLVED

More information on Linaro can be found on our websites:

  * Homepage: [](/)


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

  * IRC:
#linaro on irc.linaro.org or irc.freenode.net


#linaro-android irc.linaro.org or irc.freenode.net



### KNOWN ISSUES WITH THIS RELEASE

For any errata issues, please see: [http://wiki.linaro.org/Cycles/1208/Release#Known_Issues](http://wiki.linaro.org/Cycles/1208/Release#Known_Issues)

* * *

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to: [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)