---
author: linaro
categories:
- blog
date: 2013-06-27 18:01:37
description: The Linaro 13.06 release is now available for download!
keywords: Linaro, Linux on ARM, Open Source, Linux, ARM, Linaro Connect, LCE-Dublin,
  Linaro 13.06 release, release, announcement, IKS, Linaro Stable Kernel, LSK, LAVA,
  Builds and Baselines, Kernel, QA Services
layout: post
link: /blog/releases-blog/linaro-13-06-released/
slug: linaro-13-06-released
tags:
- Releases
title: Linaro 13.06 Released!
wordpress_id: 2787
---

>
> Without deviation from the norm, progress is not possible.  ~Frank Zappa
>
>

## The Linaro 13.06 release is now available for download!

The 13.06 Linaro release highlights the progressive efforts of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams who have provided all the updates and new features that are integrated on top of Android, OpenEmbedded and Ubuntu baselines during this development cycle. With this release we celebrate the 3rd anniversary of Linaro and can truly begin to see how deviation from the norm and the "way things were" have been a catalyst to progressing the future of Linux on ARM thus bringing the collaborative efforts of Linaro, its members and the greater Open Source Community together to build upon.

It’s been a very active cycle for the Builds and Baselines team, reporting that the Continuous Integration (CI) loop for the Linaro Stable Kernel (LSK) Android proof of concept which is based on 3.9.6 kernel version was set up and includes the big.LITTLE IKS and MP patches (also called beta patchset). Support for Kernel CI loop with Android filesystem was added to android-build and CI loop was set up to track the ARM Landing Team (LT) integration tree. The HiSilicon member build with complete CI loop was set up and now tracks the LT kernel tree.

The LAVA team was equally as productive as the various client tools were consolidated into a single package simplifying the process of updating the tools and making it easier for the team to provide new features for LAVA users, thus improving the developer experience. LAVA support for tarballs (tgz), Debian and RPM packaging has been reviewed and explicit support has now been created outside the use of lava-deployment-tool. Additionally, LAVA now supports KVM devices, which can be used for providing x86 boxes for cross-building and other tasks where there is no need (or no possibility) of using actual ARM devices.

Progress on the kernel front includes the continuous porting effort to multi-platform support as well as Integrator PCI DT, the u300 work and the Nomadik clock DT were pulled into ARM SoC tree. The team also posted the first version of the ARM 32 bit uprobes support for public review and has got portions of eMMC power management work accepted upstream.

The QA Services team notes that is has successfully fully automated big.LITTLE benchmarking noting that when a build is done, it is automatically benchmarked and results are uploaded to a google spreadsheet. The initial cleanup of bugs in Linaro launchpad projects has now been completed and the Piglit test suite is now run on each Android build for Pandaboard.

For more information and a detailed list of highlights for the 13.06 release, please see the [release wiki](https://wiki.linaro.org/Cycles/1306/Release#Release_Information).

[Linaro Connect Europe 2013](http://connect.linaro.org) (LCE13) which is being held at the Burlington Hotel in Dublin Ireland on 8-12 July is just over a week away.  We look forward to seeing you there and for those who may not be able to make but would still like to attend we will have the opportunity for you to [participate remotely](http://connect.linaro.org/).

### USING THIS RELEASE:

We encourage everybody to use the 13.05 release. The download links for all images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1306/Release#Release_Information](http://wiki.linaro.org/Cycles/1306/Release#Release_Information)

### USING THE ANDROID-BASED IMAGES

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)

[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

### USING THE UBUNTU-BASED IMAGES

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

### USING THE OPEN EMBEDDED-BASED IMAGES

With the Linaro provided downloads and with ARM’s Fast Models virtual platform, you may boot a virtual ARMv8 system and run 64-bit binaries.  For more information please see:

[/engineering/armv8](/initiatives/armv8/)

### GETTING INVOLVED

More information on Linaro can be found on our websites:

* Homepage: [](/)

* Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)

Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

* Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)

* Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

* IRC:

#linaro on irc.linaro.org or irc.freenode.net

#linaro-android irc.linaro.org or irc.freenode.net

### KNOWN ISSUES WITH THIS RELEASE

For any errata issues, please see: [http://wiki.linaro.org/Cycles/1306/Release#Known_Issues](http://wiki.linaro.org/Cycles/1306/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)