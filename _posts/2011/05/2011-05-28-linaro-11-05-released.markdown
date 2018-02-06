---
author: fathi.boudra
categories:
- blog
date: 2011-05-28 22:11:09
description: Links to all the downloads for the Linaro 11.05 release
layout: post
link: /blog/releases-blog/linaro-11-05-released/
slug: linaro-11-05-released
tags:
- Releases
- '11.05'
- Linaro
- release
title: Linaro 11.05 released
wordpress_id: 3385
---

The Linaro Team is pleased to announce the release of Linaro 11.05.

11.05 is the second public release that brings together the huge amount of engineering effort that has occurred within Linaro over the past 6 months.

This is the first release delivering Android, Ubuntu and the Working Group components nicely bundled into one release. We will continue to pick up more Working Group and Landing Team outputs in the upcoming monthly releases.

We encourage everybody to use the 11.05 release. The download links for all images and components are available on our release page: [http://wiki.linaro.org/Cycles/1105/Final](https://wiki.linaro.org/Cycles/1105/Final)

Highlights of this release:

  * Linaro GCC 4.5, GCC 4.6 and GDB 7.2 2011.05, recently released components created by the Toolchain Working Group.


  * Linaro Kernel 2011.05-2.6.38, the first source tarball release of Linux Linaro done by the Kernel Working Group.


  * Linaro Evaluation Builds (LEBs) for Android and Ubuntu on PandaBoard with 3D graphics acceleration.


  * Android cross toolchain based on latest gcc-linaro and gdb-linaro


  * Host development tools (cross compiler, image builders) readily integrated for the Ubuntu distribution users (Lucid, Maverick and Natty support).


  * And many more...


**Using the Android-based images**

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:
[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:
[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

**Using the Ubuntu-based images**

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:
[ http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

**Getting involved**

More information on Linaro can be found on our websites:

  * Homepage: []()


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


  * Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)


  * IRC: #linaro on irc.linaro.org or irc.freenode.net
  
#linaro-android irc.linaro.org or irc.freenode.net

**Known issues with this release**

For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1105/Final#Known_Issues](http://wiki.linaro.org/Cycles/1105/Final#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:
[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)