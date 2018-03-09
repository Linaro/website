---
author: steve.taylor
categories:
- blog
date: 2013-08-29 18:31:15
description: Linaro 13.08 release notes and highlights. Links to relevant downloads
  for the release.
keywords: Linaro, Linux on ARM, Linux, ARM, Open Source, Linaro stable kernel, LSK,
  Linaro Connect US 2013, LCU13,  Linaro 13.08, Release, Announcement, Ubuntu, Android,
  OpenEmbedded, big.LITTLE, LAVA,  KVM on ARM
layout: post
link: /blog/releases-blog/linaro-13-08-released/
slug: linaro-13-08-released
tags:
- Releases
- big.little
- Linaro
- Linaro Connect
- linaro stable kernel
- Linux on ARM
- Open Source
- release
title: Linaro 13.08 Released
wordpress_id: 2910
---

<blockquote>People with goals succeed because they know where they're going.

~Earl Nightingale</blockquote>




## Linaro 13.08 is now ready for download


The 13.08 release includes the "beta" version of the Linaro Stable Kernel (LSK), the big.LITTLE MP patchset available in both LSK and Linux Linaro 3.11-rc6, and sees the first major output from the Linaro Networking Group (LNG).

Over the past few months, the LSK team has been developing a process to build and maintain a stable kernel based on the latest LTS kernel serie and has produced monthly interim LSK releases since May to verify the process. On August 4th, Greg Kroah ­Hartman announced 3.10 as the next long-­term stable (LTS) kernel series and this means the LSK team is able to produce a preview LSK release, based on the 3.10.9 stable kernel. Next month's 13.09 delivery will be the first official LSK release. The LSK git repository is located at [https://git.linaro.org/gitweb?p=kernel/linux-linaro-stable.git;a=summary]( https://git.linaro.org/gitweb?p=kernel/linux-linaro-stable.git;a=summary).

This release includes a significant amount of work from the Linaro Networking Group (LNG), which was established in February. LNG moved its kernels to 3.10.6 and 3.10.6 + rt3 and the real time (PREEMPT_RT) patch set for 3.10.6 + rt3 became available. Work on the Linaro OpenEmbedded baseline progressed rapidly with the merging of the meta-bigendian layer and booting of the LNG images based on this baseline on the Arndale board.

The Linaro Enterprise Group continued to build on its work in earlier releases, but a key highlight was getting the continuous integration (CI) loop for OpenJDK-8 on ARMv8 up and running. Work remains to get all the tests passing and to amplify the range of the test suites used. In addition, the patch set enabling bit sliced AES for NEON have been completed and merged upstream in the OpenSSL project.

Most of Linaro's working groups now have approved public roadmaps so it is possible to see when key output will be available in the future: [https://wiki.linaro.org/TSC/Roadmaps](https://wiki.linaro.org/TSC/Roadmaps). These roadmaps are based on the requirements of Linaro members and we expect the Power Management and LNG roadmaps to be approved and shared publicly soon.


### UPCOMING LINARO CONNECT EVENTS: LINARO CONNECT US 2013 (LCU13)


Registration for [Linaro Connect US 2013 (LCU13)](http://connect.linaro.org/lcu13/), which will be co-located with ARM’s TechCon in Santa Rosa, CA from October 28 through 1 November 2013 is now open.  More information on this event can be found at: [/connect-lcu13](http://connect.linaro.org/lcu13/)


### USING THIS RELEASE:


We encourage everybody to use the 13.08 release. The download links for all images and components are available on our downloads page:




  * [/downloads/](/downloads/)


See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:


  * [http://wiki.linaro.org/Cycles/1308/Release#Release_Information](https://wiki.linaro.org/Cycles/1308/Release#Release_Information)




### USING THE ANDROID-BASED IMAGES


The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:




  * [http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)


If you are interested in getting the source and building these images yourself please see the following pages:


  * [http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)


  * [http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)




### USING THE UBUNTU-BASED IMAGES


The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:




  * [http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)




### USING THE OPEN EMBEDDED-BASED IMAGES


With the Linaro provided downloads and with ARM’s Fast Models virtual platform, you may boot a virtual ARMv8 system and run 64-bit binaries.  For more information please see:




  * [/engineering/armv8](/initiatives/armv8/)




### GETTING INVOLVED


More information on Linaro can be found on our websites:




  * Homepage: [](/)


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


  * IRC:


    * #linaro on [irc.linaro.org](/contact/irc/) or [irc.freenode.net](/contact/irc/)


    * #linaro-android [irc.linaro.org](/contact/irc/) or [irc.freenode.net](/contact/irc/)







### KNOWN ISSUES WITH THIS RELEASE


For any errata issues, please see:




  * [http://wiki.linaro.org/Cycles/1308/Release#Known_Issues](https://wiki.linaro.org/Cycles/1308/Release#Known_Issues)


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)