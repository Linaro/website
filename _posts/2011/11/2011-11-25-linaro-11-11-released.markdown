---
author: david.zinman
categories:
- blog
date: 2011-11-25 00:24:05
description: Links to all the downloads for the Linaro 11.11 release
layout: post
link: /blog/linaro-11-11-released/
slug: linaro-11-11-released
title: Linaro 11.11 Released
wordpress_id: 949
---

The Linaro Team is pleased to announce the release of Linaro 11.11, another of Linaro’s releases delivered on a monthly cadence.This release includes components delivered by all Linaro Teams: Working Groups, Landing Teams and Platform Teams. Some outstanding effort has gone into delivering a lot of exciting updates and features integrated on top of Android and Ubuntu.

Up to now, this reads like a normal monthly release announcement, but wasn’t there something special??? Yes!

We had Android Ice Cream Sandwich for the world this month and the Android Team worked hard to deliver a sneak preview of early alpha ICS images for our 4 primary development targets!

The Release Team notes that this is a remarkable achievement and congratulates the Linaro Android Team for this effort that showed how agile that team is set up to accommodate engineering plan mid-month and get these builds up and out within 10 days. Check out our ICS running on Snowball. Video available on youtube: [http://www.youtube.com/watch?v=MQOKPLg3ARE](http://www.youtube.com/watch?v=MQOKPLg3ARE).

If you don’t want to read the rest of this announcement but want to get started on our ICS builds, please go to our download mirror directly, download the bits and follow our easy install instructions that you will find there:
[http://releases.linaro.org/](http://releases.linaro.org/)

Obviously, Linaro continued to deliver great stuff outside of those Android ICS builds. So here are the big items that the Release Team has selected to feature this time:
	
  * The Android rockstars delivered ICS preview builds but did not detour from their initially stated release goals. Among them we have an upgraded Android LEB based off Android 2.3.7 that comes again with all optimizations and bleeding edge Linaro toolchain integration. Other Android builds showcase a first release for Versatile Express using the Linaro ARM LT kernel, a NEON optimized libpng, preliminary DS-5 support and a host of bug fixes and enhancement's to existing support.

	
  * The Linaro Ubuntu LEB now supports officially the PandaBoard ES and features PandaBoard's USB booting with U-Boot USB-SPL. The developer story was improved with updated ARM DS-5 packages. Source and debug packages for all Linaro's kernel flavors are now available. Additionally, Firefox can now be cross-built using multi-arch. Instructions are available from http://wiki.linaro.org/Platform/DevPlatform/CrossCompile/FirefoxCrossCompile.

	
  * The Infrastructure Team rolled out our new git mirroring approach to our android cloud build service that uses a seed approach. With that, we noticed considerable speedup in total build time for android builds as well as a massive improvement with regard to scalability as the load put on git-daemons that can be quite inefficient is minimized due to this improvement. On top Infrastructure released an update to status.linaro.org that connects engineering with roadmap planning using the well known status.linaro.org approach.

	
  * The Graphics team has added a new benchmark for bump-mapping for glmark2. Bump-mapping is a technique for simulating bumps and wrinkles on the surface of an object. This improvement is coming along side LAVA test cases that improve glmark2 support for automated testing and in particular support bump-mapping now.

	
  * Linux Linaro 3.1-2011.11 release includes a fresh rebase of Linaro improvements to the v3.1.1 mainline kernel and features LPAE support, Samsung Exynos cpuidle, sched_mc optimization, and a fix for mmap greater than 2GB. The Kernel WG has also enabled eCryptFS in Linaro and Android kernel defconfigs.

	
  * Some highlights for the Multimedia team are that Speex was released on Linaro Ubuntu evaluation build with NEON optimisation patches, libpng v1.5 was released with additional patches to allow NEON auto-detection, and libjpeg-turbo is now built with compatibility for libjpeg8.

	
  * The Validation Team started to land the new LAVA user interface and navigation, with a shiny Linaro theme. Under the hood, LAVA infrastructure has been upgraded, including network improvements and more memory to better serve its increasing users base.


Full details of this release, including detailed release highlights and known issues, can be found on [the release pages of our Wiki](https://wiki.linaro.org/Cycles/1111/Release).

We encourage everybody to use the 11.11 release. The download links  for all images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of  what has been accomplished by the Working Groups, Landing Teams and  Platform Teams.

The release details are linked from the "Details" column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1111/Release#Release_Information](http://wiki.linaro.org/Cycles/1111/Release#Release_Information)

For better support and tracking the hardware sanity of our supported  boards, we now publish a board support status with each monthly release.  The results for Linaro 11.10 are available here:

Android: [http://wiki.linaro.org/Cycles/1111/BoardSupport/Android](http://wiki.linaro.org/Cycles/1111/BoardSupport/Android)
Ubuntu: [http://wiki.linaro.org/Cycles/1111/BoardSupport/Ubuntu](http://wiki.linaro.org/Cycles/1111/BoardSupport/Ubuntu)


## Using the Android-based images


The Android-based images come in three parts: system, userdata and  boot. These need to be combined to form a complete Android install. For  an explanation of how to do this please see:

[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)
[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)


## Using the Ubuntu-based images


The Ubuntu-based images consist of two parts. The first part is a  hardware pack, which can be found under the hwpacks directory and  contains hardware specific packages (such as the kernel and bootloader).  The second part is the rootfs, which is combined with the hardware pack  to create a complete image. For more information on how to create an  image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)


## Getting involved


More information on Linaro can be found on our websites:



	
  * Homepage: []()

	
  * Wiki: [http://wiki.linaro.org](http://wiki.linaro.org)


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:

	
  * Announcements:[
http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)



	
  * Development:[
http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)



	
  * IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android irc.linaro.org or irc.freenode.net




## Known issues with this release


For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1111/Release#Known_Issues](http://wiki.linaro.org/Cycles/1111/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the  individual packages that are affected. If a suitable package cannot be  identified, feel free to assign them to: [http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)