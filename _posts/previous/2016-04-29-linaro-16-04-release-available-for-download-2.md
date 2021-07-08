---
author: linaro
category: blog
date: 2016-04-29 15:51:39
description: Linaro's 16.04 release is now available for download. See the detailed
  highlights of this release and an overview of what has been accomplished by each
  team along with all available software downloads.
excerpt: Linaro's 16.04 release is now available for download. See the detailed highlights
  of this release and an overview of what has been accomplished by each team along
  with all available software downloads.
keywords: Linaro
layout: post
link: /blog/linaro-16-04-release-available-for-download-2/
slug: linaro-16-04-release-available-for-download-2
tags:
- Android
- Kernel
- Linaro
- Linux
- Linux On Arm
- Open Source
title: Linaro 16.04 Release Available for Download
wordpress_id: 10555
---

> “Digital circuits are made from analog parts." _**~ Don Vonada**_

Linaro 16.04 release is now available for download. See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. We encourage everybody to use the 16.04 release. To sign-up for the release mailing list go here: [https://lists.linaro.org/mailman/listinfo/linaro-release ](https://lists.linaro.org/mailman/listinfo/linaro-release)

Both LSK and LNG tarball releases have been discontinued this cycle and the preferred way of procuring a release is through [git.linaro.org](http://git.linaro.org/).

This post includes links to more information and instructions for using the images. The download links for all images and components are available on our downloads page:

- [/downloads/](/downloads/)

**USING THE ANDROID-BASED IMAGES**

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

- [http://wiki-archive.linaro.org/Platform/Android/ImageInstallation](http://wiki-archive.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

- [http://wiki-archive.linaro.org/Platform/Android/GetSource](http://wiki-archive.linaro.org/Platform/Android/GetSource)

- [http://wiki-archive.linaro.org/Platform/Android/BuildSource](http://wiki-archive.linaro.org/Platform/Android/BuildSource)

**USING THE UBUNTU-BASED IMAGES**

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

- [http://wiki-archive.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki-archive.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

**USING THE OPEN EMBEDDED-BASED IMAGES**

With the Linaro provided downloads and with Arm’s Fast Models virtual platform, you may boot a virtual Armv8 system and run 64-bit binaries.  For more information please see:

- [/initiatives/armv8/](/engineering/)

**GETTING INVOLVED**

More information on Linaro can be found on our websites:

- Homepage: [](/)

- Wiki: [http://wiki-archive.linaro.org](http://wiki-archive.linaro.org/)

Also subscribe to the important Linaro mailing lists to stay on top of Linaro developments:

- Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)

- Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

**KNOWN ISSUES WITH THIS RELEASE**

- Bug reports for this release should be filed in Bugzilla ([http://bugs.linaro.org](http://bugs.linaro.org/)) against the individual packages or projects that are affected.

**UPCOMING LINARO CONNECT EVENTS: LINARO CONNECT BANGKOK 2016**

Linaro Connect Las Vega 2016 will be held September 26-30, 2016.  More information on this event can be found at: [https://connect.linaro.org/las16/](https://connect.linaro.org/las16/)