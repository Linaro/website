---
author: linaro
categories:
- blog
date: 2013-05-30 20:39:54
description: The Linaro 13.05 release is now available for download!
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, Linaro Connect, LCE-Dublin,
  Linaro 13.05 release, release, announcement, IKS, Linaro Stable Kernel, LSK
layout: post
link: /blog/releases-blog/linaro-13-05-released/
slug: linaro-13-05-released
tags:
- Releases
title: Linaro 13.05 Released!
wordpress_id: 2749
---

>
> The only way to predict the future is to have the power to shape it. ~Eric Hofer
>
>

## The Linaro 13.05 release is now available for [download](/downloads/)!

The 13.05 Linaro release highlights the focused efforts of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams who have provided all the updates and new features that are integrated on top of Android, OpenEmbedded and Ubuntu baselines during this development cycle.

It is through these monthly releases that Linaro, our members and community do more than predict the future of Linux on ARM; we plan and progress that future with open and collaborative teamwork and success. The 13.05 Linaro release gives a vision of that future as we highlight the accomplishments of each of our teams. Those accomplishments include:

The foundation for the Linaro Stable Kernel (LSK) tree has been prepared. LSK will track the kernel.org community released LTS (Long-Term Stable) kernel tree, and Linaro will add member selected features, platform support and bug fixes. During the 13.05 development cycle, a preview/proof of concept has been delivered, based on linux-3.9.4 stable tree with ARM LT topic branches (TC platform support) and big.LITTLE work (MP and IKS).

The announcement of big.LITTLE in-kernel switcher (IKS) code now available to the public. “This code was also developed for and tested on the Versatile Express TC2 development platform. An MCPM backend and possibly a special cpufreq clock driver are required for this code to be usable on other platforms,” wrote Nicolas Pitre in his announcement to the linaro development mailing list. More information and helpful links can be found at: [/blog/the-linaro-iks-code-now-publicly-available/](/blog/the-linaro-iks-code-now-publicly-available/)

Quality remains a focus at Linaro and on the testing and validation front, members of the LAVA team completed and tested the functionality of the first prototype production run of LAVA LMP. The Platform teams also announced that Texas Instruments Beaglebone Black is now running in LAVA. As part of the effort to improve the developers experience with LAVA, the different client tools were also consolidated into a single package in order to make it easier for the team to provide new features for LAVA users.

The Builds and Baselines team mirrors the quality efforts of the testing and validation team and notes various accomplishments across several of the Linaro teams and Working Groups (WG). The team notes that a detailed Compatibility Test Suite (CTS) report in the standard format is now being generated in LAVA and the QA Services team will include these reports in its weekly/monthly testing reports for platforms in LAVA. Another highlight for this cycle includes the completion of the Galaxy Nexus CI loop and images (without graphics acceleration) can be deployed with a graphics overlay for testing in LAVA. The team also reports that the full Android engineering build for Arndale is now available with virtual framebuffer.

The various releases that help make up the Linaro 13.05 release include:


  * Linaro UEFI 2013.05


  * Linaro Stable Kernel (LSK) preview 3.9.4-2013.05


  * Linux Linaro 3.10-rc2-2013.05


  * Linaro GCC 4.8-2013.05 and 4.7-2013.05 (based off the latest GCC releases)


  * Linaro Toolchain Binaries 2013.05




A complete list of highlights and accomplishments for LAVA, Builds and Baselines, Graphics, Kernel, Power Management, QA Services, Toolchain, Linaro Enterprise Group (LEG) and Linaro Networking Group (LNG) for the 13.05 Linaro relase can be found at: [https://wiki.linaro.org/Cycles/1305/Release](https://wiki.linaro.org/Cycles/1305/Release)




Do you want to help predict the future of Linux on ARM?  Join us in Dublin, Ireland for [Linaro Connect Europe 2013](http://connect.linaro.org) (LCE-13). [ Registration](http://linaroconnect-lce13-eorg.eventbrite.com/) is still open! Do you want to highlight the work you or your organization is doing with Linaro code and ARM-processor based boards then be a show off and participate in our [Demo Friday](/blog/demo-friday-at-linaro-connect-q1-12-to-show-the-latest-linux-developments-on-arm/) event at LCE-13.





## USING THIS RELEASE:




We encourage everybody to use the 13.05 release. The download links for all images and components are available on our downloads page:




[/downloads/](/downloads/)




See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:




[http://wiki.linaro.org/Cycles/1305/Release#Release_Information](http://wiki.linaro.org/Cycles/1305/Release#Release_Information)





## USING THE ANDROID-BASED IMAGES




The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:




[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)




If you are interested in getting the source and building these images yourself please see the following pages:




[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

## USING THE UBUNTU-BASED IMAGES


The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:


[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)
## USING THE OPEN EMBEDDED-BASED IMAGES


With the Linaro provided downloads and with ARM’s Fast Models virtual platform, you may boot a virtual ARMv8 system and run 64-bit binaries.  For more information please see:


[/engineering/armv8](/initiatives/armv8/)
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




[http://wiki.linaro.org/Cycles/1305/Release#Known_Issues](http://wiki.linaro.org/Cycles/1305/Release#Known_Issues)




Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:




[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)