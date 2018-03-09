---
author: linaro
categories:
- blog
date: 2013-07-30 17:34:17
description: The Linaro 13.07 release is now available for download!
keywords: Linaro, Linux on ARM, Linux, ARM, Open Source, Linaro Connect Europe 2013,
  LCE13, Dublin, Linaro Connect US 2013, LCU13,  Linaro 13.07, Release, Announcement,
  Ubuntu, Android, OpenEmbedded, big.LITTLE, LAVA, Jon Maddog Hall, KVM on ARM
layout: post
link: /blog/releases-blog/linaro-13-07-released/
slug: linaro-13-07-released
tags:
- Releases
title: Linaro 13.07 Released!
wordpress_id: 2848
---

>
> It' s easy to get good players. Getting them to play together, that's the hard part. ~Casey Stengel
>
>

## The Linaro 13.07 release is now available for download!

### Summary

The 13.07 Linaro release highlights the collaborative efforts of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams who have provided all the updates and new features that are integrated on top of Android, OpenEmbedded and Ubuntu baselines during this development cycle. With this release we are reminded of the great "players" who come together to plan and create the future of Linux on ARM. Seeing the synergic efforts of Linaro, its members and the greater Open Source Community is what drives our future--the future of Linux on ARM.

### About this Release

On the Builds and Baselines front, the Linaro Stable Kernel preview 2013.07 was updated: based on the 3.10.1 stable kernel tree; including ARM MP patch set, IKS VExpress TC2 and Power efficient workqueue support, Android v3.10 experimental patch set from AOSP. Linaro OpenEmbedded baseline added libjpeg-turbo as the preferred provider for jpeg, updated to the Linaro GCC 4.8-2013.07 release and switched builds to use Linaro versions of binutils and eglibc (2.17). Linaro Android baseline reports that the Arndale platform has been updated with display support on HDMI using software graphics stack, and is built with the Linaro GCC 4.8-2013.07 release as well.

The Linaro toolchain Working Group released Linaro GCC 4.8 and 4.7 2013.07 which added address Sanitizer support for ARM along with the new -mrestrict-it option support. The backports of support for further AArch64 aand ARMv8 AArch32 instructions were added. Linaro eglibc 2.17-2013.07 has optimized string functions for AArch64: memcmp, memset, memcpy, memmove, bzero, strcmp, strlen, strnlen, strncmp.

As of this release, the Linaro LAVA lab now hosts 75 devices including 4 new member systems and an actual  “LMP stack” which is a tower of 5 LAVA Multi-purpose Probe boards (including SDMux support) is now being prototyped and tested. Multi-node test is currently in beta, but a live demo from LCE13 can be seen at: [http://multinode.validation.linaro.org](http://multinode.validation.linaro.org/) sandbox. Advanced LAVA configuration options were reviewed during this cycle and topics that were discussed included managing a multi-machine (LAVA Servers & worker nodes), deployment with salt-stack (LAVA Cambridge Lab), generic test integration, creating a test parser, overriding boot commands and the new interactive boot command support in LAVA.

During the 13.07 development cycle, the Power Management Working Group reports that the Linux scheduler is getting a lot of attention in the ARM ecosystem. At the LCE13 Linux Scheduler session, the team brought together Linaro scheduler experts and users to discuss common interests and requirements. The Linaro Networking Group’s (LNG) major requirements were low interrupt latency and the ability to run a process uninterrupted. Other requirements included the need for Adaptive NO_HZ, evaluation of the PREEMPT_RT patchset as well as the Deadline scheduler. Additionally, the discussion for Power efficient scheduling continues to the mailing list and ARM has posted patches for its power scheduler proposal.

The Kernel Working Group during the LCE13 event discussed the following: determine next steps in ARMv7 consolidation work, sync up community and members on ARMv8 status, determine plans for next 6 months of storage related work at Linaro and figure out arm-soc tree management when maintainer is not available. Additionally the working group accomplished the conversion of Moxart to GENERIC_CLOCKEVENTS, storage of the EXT4 journal is now in enhanced area of eMMC and club journal and metadata are now together in the enhanced area.


### Release Highlights

For more information and a detailed list of highlights for the 13.07 release please see the release wiki at: [https://wiki.linaro.org/Cycles/1307/Release/Highlights](https://wiki.linaro.org/Cycles/1307/Release/Highlights).

### Highlights from Linaro Connect Europe 2013 (LCE13)

[Linaro Connect Europe 2013 (LCE13)](http://connect.linaro.org/lce13/) was took place during the 13.07 release cycle and highlights from that event include:


  * Jon Maddog Hall and the 64-bit porting project


  * big.LITTLE software update


  * KVM on ARM


  * LAVA-LMP


Other highlights from LCE13 include:

  * Linaro Connect Europe 2013: Keynote Speaker Videos - [/blog/linaro-connect-europe-2013-keynote-speaker-videos/](/blog/linaro-connect-europe-2013-keynote-speaker-videos/)


  * Linaro Connect Europe 2013: People and Personalities of Connect - [/blog/linaro-connect-europe-2013-people-and-personalities-of-connect/](/blog/linaro-connect-europe-2013-people-and-personalities-of-connect/)


  * Resources - [http://connect.linaro.org/resources/](http://connect.linaro.org/resources/)


  * Pictures from Connect - [http://www.flickr.com/photos/linaroorg/](http://www.flickr.com/photos/linaroorg/)




For updates on these topics, as well as links to videos, pictures, presentations and more please see the Linaro Blog and the summary of this event at: [/blog/kvm-on-arm-big-little-maddog-lava-and-more-from-linaro-connect-europe-2013/](/blog/kvm-on-arm-big-little-maddog-lava-and-more-from-linaro-connect-europe-2013/)

### Upcoming Linaro Connect Events: Linaro Connect US 2013 (LCU13)

Registration for [Linaro Connect US 2013 (LCU13)](http://connect.linaro.org/lcu13/), which will be co-located with ARM's TechCon in Santa Rosa, CA from October 28 through 1 November 2013 is now open.  More information on this event can be found at: [http://connect.linaro.org/lcu13/](http://connect.linaro.org/lcu13/)

### USING THIS RELEASE:

We encourage everybody to use the 13.07 release. The download links for all images and components are available on our downloads page:

  * [/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:


  * [http://wiki.linaro.org/Cycles/1307/Release#Release_Information](http://wiki.linaro.org/Cycles/1307/Release#Release_Information)

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


    * #linaro on [irc.linaro.org](/contact/irc/) or [irc.freenode.net](/contact/irc/)


    * #linaro-android [irc.linaro.org](/contact/irc/) or [irc.freenode.net](/contact/irc/)


### KNOWN ISSUES WITH THIS RELEASE

For any errata issues, please see:

  * [http://wiki.linaro.org/Cycles/1307/Release#Known_Issues](http://wiki.linaro.org/Cycles/1307/Release#Known_Issues)




Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

  * [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)