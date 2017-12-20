---
author: linaro
categories:
- blog
date: 2012-11-29 16:45:41
description: The Linaro 12.11 release is now available. Highlights, release notes
  and information on how to download Linaro 12.11 are available in this post.
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, Linaro Connect, Release,
  Announcement, 12.11, Ubuntu, Android, ARMv8, LEG,
layout: post
link: /blog/releases-blog/linaro-12-11-now-available/
slug: linaro-12-11-now-available
tags:
- Releases
title: Linaro 12.11 Now Available
wordpress_id: 2041
---

> One way to keep momentum going is to have constantly greater goals. ~ **Michael Korda** 

# The Linaro 12.11 release is now available!

The Linaro 12.11 release cycle highlights the hard work of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams – who have provide all the updates and new features that are integrated on top of our platforms during this development cycle. The 12.11 release is another example of how Linaro works together with its members, partners and community to continue to build the future of Linux on ARM.



Looking over the [highlights for the 12.11 release cycle](https://wiki.linaro.org/Cycles/1211/Release), it's easy to see how the momemtum and energy from LCE12-Copenhagen carries over and our teams consistantly meet and exceed the goals set in the Linaro Connect sessions. Our Android team has updated the platform to AOSP 4.2 on all our supported boards, and Android evdev is now upstreamed and used in AOSP 4.2.



As we look over improvements to the Linaro toolchain, it is notable that Linaro GCC now includes the arm/aarch64-4.7-branch ([ARMv8](/blog/armv8-64-bit-mini-summit-at-lce12-copenhagen/)). The Developer Platform team reports that the initial GRUB support for ARM is now available, provided by our Linaro Enterprise Group ([LEG](/groups/leg/)) and marking its first component delivery.



The Power Management Working Group continues its progress on big.LITTLE MP by delivering the v11 and v12 branches, as the Graphics Working Group notes that there is a new GLMark2 release which demonstrates shadow mapping. Additionally our LAVA team reports that the NI Battery Simulator is now available in the lab and can now be accessed remotely.


"Linaro 12.11 includes a number of important contributions from the engineering teams, most significant are the v11 and v12 releases of the big.LITTLE MP tree. These releases integrate a number of feature patches required for commercial products in 2013.  It is very satisfying to know the work our teams do will be put to good use in great products developed by our member companies," said [Mark Orvek](/about/), Director, Kernel Working Group at Linaro.



"[**B**ernhard Rosenkranzer](/about/) developed a very exciting demo of a native VI editor and native gcc compilers running on Android for Connect. Perf support on android is improved and is now on the linux-linaro tree and builds for Origen 4412 were set up." said [Zach Pfeffer](/about/), Linaro Android Tech Lead.



With 13 companies joining Linaro to become part of the [newly formed](/groups/leg/) and [announced](/news/industry-leaders-collaborate-to-accelerate-software-ecosystem-for-arm-servers-and-join-linaro/) Linaro Enterprise Group ([LEG](https://wiki.linaro.org/LEG/)), excitment continues to grow around the opportunity to accelerate developement in the Linux ARM server ecosystem. In a [video interview](http://youtu.be/kANJ9iGD3GI) during the 12.11 release cycle, Linaro's Director of LEG, [Andrea Gallo](/about/), gave a more indepth explaination of what this new group is, how it works, and why the formation of LEG is important.



"LEG has been focused on creating our roadmap and drafting the first cards as we continue to build on the work that[ David Rusling](/about/) initiated as part of the OCTO enterprise pre-work," said Gallo.  "We've been busy working with ARM and Samsung on extending the Tianocore UEFI support to the Samsung platform beyond the multiple ARM Versatile Express variants already in place. Many thanks to [Ryan Harkin](/about/), the Linaro ARM Landing team and Rony Nandy of Samsung for all their help and collaboration. Also, we are planning an invitation only UEFI mini-summit which is scheduled to take place on the 11-13 of December at the Linaro office in Cambridge," added Gallo."

For more information on the mini-summit and LEG please follow the Linaro [enterprise mailing list](http://lists.linaro.org/mailman/listinfo/linaro-enterprise) and other Linaro social media outlets.



The 12.11 release cycle has been a busy yet exciting cycle as teams not only continue their work to provide updates and features, but have now begun to discuss and plan the next Linaro Connect event--LCA13-Hong Kong. If you missed LCE12-Copenhagen the resources such as slides, videos, and interviews are now available on the [Linaro Website](/blog/summary-of-the-android-mini-summit-at-connect-copenhagen-2012/). The [Linaro Blog](/blog/) also contains many items of interest from the 12.11 release cycle including [mini-summit write-ups](/blog/armv8-64-bit-mini-summit-at-lce12-copenhagen/) and a look at [LAVA](/blog/watch-lava-erupt-with-growth-as-new-tests-are-added/) since it's go live date on 27 July 2011 through 6 November 2012.



Between development cycles you can stay up to date with all the latest news in an around Linaro by following us on [Twitter](https://twitter.com/LinaroOrg), [Google+](https://plus.google.com/+LinaroOnAir) and [Facebook](https://www.facebook.com/LinaroOrg).

## USING THE ANDROID-BASED IMAGES

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

  * [http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)


If you are interested in getting the source and building these images yourself please see the following pages:


  * [http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


  * [http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

## USING THE UBUNTU-BASED IMAGES

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

  * [http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

## GETTING INVOLVED

More information on Linaro can be found on our websites:

  * Homepage: [](/)


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


  * IRC:


    * #linaro on irc.linaro.org or irc.freenode.net


    * #linaro-android irc.linaro.org or irc.freenode.net

## KNOWN ISSUES WITH THIS RELEASE


For any errata issues, please see:


  * [http://wiki.linaro.org/Cycles/1211/Release#Known_Issues](http://wiki.linaro.org/Cycles/1211/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)