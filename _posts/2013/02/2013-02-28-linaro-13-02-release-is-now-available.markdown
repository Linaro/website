---
author: linaro
categories:
- blog
date: 2013-02-28 18:58:24
description: Links to all the downloads for the Linaro 13.02 release
layout: post
link: /blog/releases-blog/linaro-13-02-release-is-now-available/
slug: linaro-13-02-release-is-now-available
tags:
- Releases
title: Linaro 13.02 Release is Now Available
wordpress_id: 2480
---

> If you can dream it, you can do it. ~ Walt Disney

## The Linaro 13.02 release is now available for [download](/downloads/)!


The Linaro 13.02 release highlights the quality, effort and work of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams – who have provided all the updates and new features that are integrated on top of Android and Ubuntu during this release cycle. The 13.02 cycle shows the reality of a dream and desire to unify, improve and build a better more effective future for Linux on ARM. Linux on ARM is not a dream, but together--Linaro, its Members, Groups, and community--continue to make the visions of Linux on ARM a reality.


## About this release:


The Linaro Engineering Group (LEG)  released Linaro UEFI 2013.02 which fixed several bugs targeting the Arndale boards. LEG also added ARM support to libhugetlbfs, merged into next branch--package is available from Linaro's Overlay PPA.

During this release cycle the LAVA Team converted the Linaro CI jobs to lava-test-shell, a black box style testing approach, and the Galaxy Nexus device is now deployed into the LAVA lab. The Linaro Android Team has set-up the ASOP master build for the Galxay Nexus.

The Linaro Developer Platform team completed the CI bring up for the Arndale board: Arndale image reports have been added to the LAVA dashboard and daily tests are run on the board. The team has also enabled UEFI support in the Arndale hardware pack. The Linux Linaro kernel 2013.02 was released and is based on the 3.8 upstream Linux kernel with highlights that include: new kvm topics and big-LITTLE-MP version master-v15. The Developer Platform Team merged the OpenEmbedded based SDK with LAMP and is able to build the FaceBook HipHop Virtual Machine v8 (64bit). In addition, the OpenEmbedded baseline has been updated to the latest gcc-linaro and linux-linaro releases. Several new packages such as cpica-unix, acpi-abat, fwts, libhugetlbfs and numactl are available from Linaro's Overlay PPA to help LEG engineering effort. Finally, the arm64 Debian/Ubuntu port image is [now available](http://lists.linaro.org/pipermail/linaro-dev/2013-February/015534.html). A call to 'the distros' has been made to take this work forward from here. People interested in Debian and Ubuntu on 64-bit ARM hardware need to step up and help out.

The Linaro Kernel team was able to update the AB8500 driver with pinctrl patches and update the Snowball platform to now use sparse IRQs. As part of the single zImage work, the team started to depopulate the Exynos and Ux500 <include/mach> and <include/plat> directories. Also as part of this, with much work from the community, final removal of <mach/id.h> subdirectory has landed in Linus's tree. The team also started to work on refactoring of the USB EHCI controller code so that we can build multiple USB host types into a single binary kernel. As part of the storage work in Kernel Working Group, work has begun on improvements to the eMMC Power Management support and the team is digging into how to use the enhanced area of eMMC devices for EXT4 journaling metadata.  Additionally, as part of the team's Android upstreaming efforts, the Android keyreset driver has been accepted into the 3.9 kernel and Android alarm-dev compat_ioctl support has been added.

The Linaro Toolchain Team released Linaro GCC 4.7-2013.02-01 based off GCC 4.7.2+svn195745 and includes arm/aarch64-4.7-branch up to svn revision 195716, support for Cortex-A7 backported from trunk. The 2013.02 Linaro Toolchain Binaries release were updated to latest Linaro GCC 4.7 2013.02-01 which included upgrades for binutils to v2.23.1, eglibc to v2.17 and the kernel header to v3.7.


## Announcements


More exciting news for the 13.02 cycle in addition to all the work done for this release came with the [announcement](/news/networking-leaders-collaborate-to-maximize-choice-performance-and-power-efficiency/) by George Grey, Linaro CEO about the formation of a new Linaro engineering group--The Linaro Networking Group (LNG).  [LNG](/blog/arm-leg-and-now-lng-linaro-forms-a-new-engineering-group/) is a group dedicated to accelerating Linux networking on ARM. Membership to this group is based on a new Linaro membership category which will initially include ARM, equipment OEMs, silicon partners and distribution partners to leverage and extend Linaro’s existing shared engineering, legal and open source collaboration resources and infrastructure. Discussion of LNG's focus areas and the formal kick off for the group will happen during Linaro Connect Asia 2013 on 4-8 March in Hong Kong.


## Linaro Connect


Registration for [LCA-13 in Hong Kong](http://connect.linaro.org) is now closed, however, remote participation is available. More information about you can participate remotely can be found at: [http://connect.linaro.org/about/](http://connect.linaro.org/about/)


## Using this Release


We encourage everybody to use the 13.02 release. The download links for all images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1302/Release#Release_Information](http://wiki.linaro.org/Cycles/1302/Release#Release_Information)[](http://wiki.linaro.org/Cycles/1301/Release#Release_Information)

**Using the Android-based images**
**=======================**
The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

**Using the Ubuntu-based images**
**=======================**
The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)

**Getting involved**
**============**
More information on Linaro can be found on our websites:

* Homepage: [](/)
* Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)

Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

* Announcements:
[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)

* Development:
[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

* IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android irc.linaro.org or irc.freenode.net

**Known issues with this release**
** =====================**
For any errata issues, please see:

[http://wiki.linaro.org/Cycles/1302/Release#Known_Issues](http://wiki.linaro.org/Cycles/1302/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)