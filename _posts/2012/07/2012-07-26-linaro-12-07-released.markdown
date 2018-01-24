---
author: linaro
categories:
- blog
date: 2012-07-26 17:22:56
description: "Linaro announces the availability of its 12.07 release. This release
  highlights the quality, effort and work of all the Linaro Teams \xE2\x80\x93 Working
  Groups, Landing Teams and Platform Teams \xE2\x80\x93 who have provided all the
  updates and new features that are integrated on top of Android and Ubuntu during
  this release cycle."
keywords: Linaro, Linux On ARM, Open Source, ARM, 12.07, Release, Announcement, Ubuntu,
  Android
layout: post
link: /blog/releases-blog/linaro-12-07-released/
slug: linaro-12-07-released
tags:
- Releases
title: Linaro 12.07 Released
wordpress_id: 1720
---

> **You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.**
>
> **Aristotle**

## The Linaro 12.07 release is now available!

The Linaro 12.07 release highlights the quality, effort and work of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams – who have provided all the updates and new features that are integrated on top of Android and Ubuntu  during this release cycle. The 12.07 release is another example of how Linaro, together with its members, partners and community continue to build upon the future of Linux on ARM one release and line of code at a time.

[The LAVA team](/about/) added new test views for its daily testing processes as well as updates to the way its deployment tool works by [implementing a new method](/blog/lava-deployment-improvements/) which uses zc.buildout which works consistently and in a repeatable fashion.[](/blog/lava-deployment-improvements/))

Linaro continues to make progress in big.LITTLE development as the [ARM Landing Team](/about/) delivers support for ARM TC2 (TestChip2) tile for the vexpress board. (TC2 is a big.LITTLE core with 2 Cortex A15 and 3 Cortex a7 processors).  The [Linaro Power Management group ](/about/) delivers its first submissions of big.LITTLE MP functionality (git://git.linaro.org/arm/big.LITTLE/mp.git) during the 12.07 release cycle as well.

{% include image.html name="Lava-blog-image.jpg" alt="Lava Image" %}

The LAVA team was also able to release [the first boot log](https://plus.google.com/u/0/118153619948280443975/posts/V2dzB1PnP4r) from the new big.LITTLE Vexpress (shown)  which is currently located in its LAVA lab. Additionally, the [Developer Platform](https://wiki.linaro.org/Platform/DevPlatform) team reports that the Linaro ALIP is now using LXDE as the default environment, with a reduced image for better performance at ARM targets, such as Vexpress and FastModels.  Linux Linaro updated on top of the latest upstream release (3.5), which reflects the latest changes and development available at Linaro, such as big.LITTLE MP.

The [Linaro Android team](https://wiki.linaro.org/Platform/Android) added experimental  baselines for the [Galaxy Nexus](https://releases.linaro.org/archive/12.09/android/images/galaxynexus-jb-gcc47-aosp-blob/) and [Pandaboard ]()https://android-build.linaro.org/builds/~linaro-android/panda-jb-gcc47-tilt-tracking-blob/ as part of our ongoing Jelly Bean transition efforts. Also, deployed this month in LAVA were the Android benchmarking apps for Pandaboard, Snowball and Origen which included vellamo, quadrant, nbench, linpack, glbenchmark, geekbench, caffeinemark, antutu, and AndEBench.

In addition to these improvements the Developer Platform team notes that Kernel packages are updated to reflect the latest development trees from Linux Linaro (lct/ll-3.5 and llt-3.4) and the Landing Teams. CI jobs for the Ubuntu Kernel Packages are now cross compiled at Jenkings, then pushed directly to the Kernel PPA which reflects the reduction the time it takes for the kernel package to respin.

The Infrastructure, Graphics, Kernel, Multimedia, Toolchain, and Validation teams all had updates and new features added into this release which are covered in more detail on the release wiki.

We encourage everybody to use the 12.07 release. The download links for all images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1207/Release#Release_Information](http://wiki.linaro.org/Cycles/1207/Release#Release_Information)

### Using the Android-based images

* * *

The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:
[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)

[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)

### Using the Ubuntu-based images

* * *

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)


### Getting involved

* * *


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


### Known issues with this release

* * *

For any errata issues, please see:

[http://wiki.linaro.org/Cycles/1207/Release#Known_Issues](http://wiki.linaro.org/Cycles/1207/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)