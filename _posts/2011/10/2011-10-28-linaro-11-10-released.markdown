---
author: david.zinman
categories:
- blog
date: 2011-10-28 21:03:38
description: Links to all the downloads for the Linaro 11.10 release
layout: post
link: /blog/releases-blog/linaro-11-10-released/
slug: linaro-11-10-released
tags:
- Releases
title: Linaro 11.10 Released
wordpress_id: 769
---

The Linaro Team is pleased to announce the release of Linaro 11.10, Linaro’s fifth release delivered on a monthly cadence. This release includes components delivered by all Linaro Teams: Working Groups, Landing Teams and Platform Teams. Again, the effort brings a  lot of updates and new features, integrated on top of Android and Ubuntu.

Among the improvements brought by this release and delivered by Linaro engineers, some prominent items worth mentioning are:

  * This month Linaro Ubuntu LEB images are based on Ubuntu 11.10 (Oneiric) featuring the latest and greatest Unity 3D experience ported to OpenGL ES by the Linaro Graphics Working Group. Note that this is one month ahead of plan and a remarkable achievement of the Developer Platform Team with support from the whole Linaro engineering organization.


  * The Linaro Android LEB also saw continued enablement improvements across all boards with functional audio through jacks and HDMI on PandaBoard being one prominent example. All Android LEBs have been moved over to a 3.x based kernel and include a TJBench port for continuous libjpeg benchmarking in the lab.


  * Linaro Kernel CI started a pilot exploring a new feature that allows maintainers to submit git trees as one time jobs for building and lab testing. Also Developer Platform Team now uses the Kernel CI infrastructure to continuously package and test a first LEB kernel.


  * To improve tracking of a continuous stream of build and runtime results coming from the kernel CI infrastructure, a waterfall type reporting tool provided by LAVA has been developed and added to the dashboard ([http://validation.linaro.org/lava-server/kernel-ci-views/index]()). Initial Snowball boards have landed in the lab and the LAVA test repository incorporated support for power management CPU hotplug tests and "Insanity", a multimedia test suite.


  * Finally, even more sophistication on the CI front was introduced for Android through integrating Gerrit into the Linaro Android Build Service. Reviewed changes now automatically get build tested and a bot posts the outcome to the gerrit ticket, making it easier to catch issues before they are integrated into the official Linaro Android trees.


  * The Graphics Working Group has integrated GLEW with OpenGL ES support on Ubuntu 11.10 images. It is packaged and available at the Linaro Overlay PPA.


  * Linaros Kernel efforts improved Device Tree support for member platforms and made a first step in improving managability of board defconfigs through merge_config.sh script that helps to maintain config overlays. This has the potential to reduce redundancy carried by the various board defconfigs in the upstream kernel.


  * After a few month of investment into libjpeg-turbo optimization by the Multimedia Working Group, the recently started libpng effort carried successes this month and an initial component release of libpng 1.5 with a first set of ARM optimization is included in this release. PNG is a key building block of web browsing technology and improvements will be a direct benefit for usability in todays ARM based products.


  * This month Linaro GCC comes with critical performance fixes and developers using Linaro GDB can enjoy an improved native debugging experience through gdbserver. The Toolchain Working Group started to transition their custom validation infrastructure to the LAVA lab this cycle. The complete transition is expected to take additional months, but once complete it will free up engineering resources in the Working Group to focus on code.


We encourage everybody to use the 11.10 release. The download links for all images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams.

The release details are linked from the "Details" column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1110/Release#Release_Information](http://wiki.linaro.org/Cycles/1110/Release#Release_Information)

For better support and tracking the hardware sanity of our supported boards, we now publish a board support status with each monthly release. The results for Linaro 11.10 are available here:

Android: [http://wiki.linaro.org/Cycles/1110/BoardSupport/Android](http://wiki.linaro.org/Cycles/1110/BoardSupport/Android)
Ubuntu: [http://wiki.linaro.org/Cycles/1110/BoardSupport/Ubuntu](http://wiki.linaro.org/Cycles/1110/BoardSupport/Ubuntu)


## Using the Android-based images


The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:

[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)


## Using the Ubuntu-based images


The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)


## Getting involved


More information on Linaro can be found on our websites:

  * Homepage: []()


  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


  * Announcements:
[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)


  * Development:
[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

  * IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android irc.linaro.org or irc.freenode.net


## Known issues with this release


For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1110/Release#Known_Issues](http://wiki.linaro.org/Cycles/1110/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to: [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)