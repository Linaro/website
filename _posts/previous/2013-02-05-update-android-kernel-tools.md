---
wordpress_id: 2231
layout: post
keywords: Linaro, Linux on Arm, Open Source, Linux, Arm,Android, Kernel, Updates, Tools
title: Update Android Kernel Related Files Without Getting the sdcard Out
description: In this article, Yongqin Liu shows us an easy way to update Android
  Kernel related files without getting the sdcard out. Read more here!
image: /assets/images/content/Client_Devices_banner_pic.jpg
author: yongqin.liu
slug: update-android-kernel-tools
date: 2013-02-05 02:53:36
tags:
  - Android
  - Android
  - Kernel
  - Linaro
  - Tools
link: /blog/android-blog/update-android-kernel-tools/
category: blog
---

Do you feel it's difficult or complicated to update kernel related files for a running Android device?

Do you feel that it's boring to get the sdcard out when you just want to update some kernel files when the Android device is somewhere else?

The Linaro Android team now has tools to help you update kernel related files for an Android device through the use of a few commands--mostly only one command.

Do you want to update the kernel related files with a new boot.tar.bz2? You can do so with the following command:

    ./update-android.sh out/target/product/pandaboard/boot.tar.bz2

Do you want to update only the board.dtb file? No problem, you can do:

    ./update-android.sh out/target/product/pandaboard/boot/board.dtb

Do you just want to update the loglevel in /init.rc to 8?  Use the following command:

    ./update-uInitrd.sh /tmp/init.rc

What do you think about the tools? Do you want to give these commands a try? If so, you can get these scripts by using the following command:

    git clone http://android.git.linaro.org/git-ro/platform/external/linaro-android-tools.git

More information on these tools can be found at:
[https://wiki-archive.linaro.org/Platform/Android/KernelUpdateTools](https://wiki-archive.linaro.org/Platform/Android/KernelUpdateTools)

_**About the Linaro Android Team**_

_The primary goals of the Linaro Android Team is to develop and release tested [monthly builds](http://releases.linaro.org/) of Android for Galaxy Nexus, Panda, Snowball, Origen, and Versatile Express, collaborate with upstream [development efforts](https://wiki-archive.linaro.org/Platform/Android/UpstreamWork) and perform monthly [toolchain benchmarking](https://wiki-archive.linaro.org/Platform/Android/AndroidToolchainBenchmarking)._

- _Mailing List:  [mailto:linaro-dev@lists.linaro.org](mailto:linaro-dev@lists.linaro.org) ([subscribe](https://lists.linaro.org/mailman3/lists/linaro-dev.lists.linaro.org/))_

- _[Team Members](/about/)_

_More information about the Linaro Android Team can be found at: [https://wiki-archive.linaro.org/Platform/Android](https://wiki-archive.linaro.org/Platform/Android)_

_**About the Linaro Kernel Team**_

_The Kernel Consolidation Working Group targets the Linux kernel. Its goals are to consolidate source repositories, unify support across SoCs, develop new kernel infrastructure and features and more. Our acid test: shipping a single source tree that integrates support for multiple modern Arm SoCs._

- _Mailing List: [mailto:linaro-dev@lists.linaro.org](mailto:linaro-dev@lists.linaro.org) ([subscribe](https://lists.linaro.org/mailman3/lists/linaro-dev.lists.linaro.org/))_

- _[Team Members](/about/)_

_More information about the Linaro Kernel Team can be found at: [https://wiki-archive.linaro.org/WorkingGroups/Kernel](https://wiki-archive.linaro.org/WorkingGroups/Kernel)_