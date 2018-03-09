---
author: fathi.boudra
categories:
- blog
date: 2012-01-26 18:22:14
description: Links to all the downloads for the Linaro 12.01 release
layout: post
link: /blog/releases-blog/linaro-12-01-release/
slug: linaro-12-01-release
tags:
- Releases
title: Linaro 12.01 release
wordpress_id: 1212
---

"_Action is the foundational key to all success._" ~ **Pablo Picasso**

We are pleased to announce the release of Linaro 12.01. Linaro engineers worked
tirelessly on this release to bring hardware accelerated video decoding that is
fully supported on the Texas Instruments PandaBoard to users. A set top box
based image with the award-winning XBMC media center and enablement for Ubuntu
TV are also featured.

Ricardo Salveti, team lead for the Developer Platform at Linaro, details these
successful achievements in the following blog posts:


  * [Ubuntu TV fully accelerated on a PandaBoard with Ubuntu LEB](http://rsalveti.wordpress.com/2012/01/16/ubuntu-tv-fully-accelerated-on-a-pandaboard-with-ubuntu-leb/)


  * [Ubuntu TV UI on PandaBoard, and next steps](http://rsalveti.wordpress.com/2012/01/10/ubuntu-tv-ui-at-pandaboard-and-next-steps/)


  * [Hardware video decode and XBMC support on a PandaBoard with Ubuntu LEB](http://rsalveti.wordpress.com/2012/01/06/hw-video-decode-and-xbmc-ubuntu-linaro/)


Linaro 12.01 contains components delivered by all Linaro Teams -Working Groups,
Landing Teams and Platform Teams- and brings an abundance of exciting updates
and new features which are integrated on top of Android and Ubuntu.

In addition to these highlights and improvements delivered by Linaro engineers,
the following updates and features are also available:


  * The Multimedia Working Group announces the completion of benchmarking work
for Speex codec on Linaro Automated Validation Architecture (LAVA) and an
updated version of libjpeg-turbo for Linaro Ice Cream Sandwich (ICS), with
ICS specific upstream optimizations backported. The team also notes that
Android skia-bench numbers have been improved through further optimization
of commonly used libjpeg-turbo code paths with results available here.


  * The Toolchain Working Group now provides pre-built binary versions of Linaro
GCC, Linaro GDB and binutils. These binary versions work under generic Linux
and Windows and can be used by an end developer to cross-compile programs
for either a Linaro Evaluation Build or a bare-metal target.


  * ST-Ericsson Snowball updates for this release include graphics acceleration
with the Mali 400 GPU on Linaro Ubuntu, supports in Linaro U-Boot, and runs
test suite on Linaro Android with LAVA.


We encourage everybody to use the 12.01 release. The download links for all
images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been
accomplished by the Working Groups, Landing Teams and Platform Teams.
The release details are linked from the "Details" column for each released
artifact on the release information:

[http://wiki.linaro.org/Cycles/1201/Release#Release_Information](http://wiki.linaro.org/Cycles/1201/Release#Release_Information)

Using the Android-based images
=======================

The Android-based images come in three parts: system, userdata and boot.
These need to be combined to form a complete Android install. For an
explanation of how to do this please see:

[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images
yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

Using the Ubuntu-based images
=======================

The Ubuntu-based images consist of two parts. The first part is a hardware
pack, which can be found under the hwpacks directory and contains hardware
specific packages (such as the kernel and bootloader). The second part is
the rootfs, which is combined with the hardware pack to create a complete
image. For more information on how to create an image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

Getting involved
============

More information on Linaro can be found on our websites:

* Homepage: []()
* Wiki: [http://wiki.linaro.org](http://wiki.linaro.org)

Also subscribe to the important Linaro mailing lists and join our IRC
channels to stay on top of Linaro developments:

* Announcements:
[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)
* Development:
[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)
* IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android irc.linaro.org or irc.freenode.net

Known issues with this release
=====================

For any errata issues, please see:

[http://wiki.linaro.org/Cycles/1201/Release#Known_Issues](http://wiki.linaro.org/Cycles/1201/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the
individual packages that are affected. If a suitable package cannot be
identified, feel free to assign them to:

[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)