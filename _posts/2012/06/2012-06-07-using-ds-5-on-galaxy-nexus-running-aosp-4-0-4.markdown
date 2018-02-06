---
author: vishal.bhoj
date: 2012-06-07 17:16:11+00:00
layout: post
link: /blog/android-blog/using-ds-5-on-galaxy-nexus-running-aosp-4-0-4/
slug: using-ds-5-on-galaxy-nexus-running-aosp-4-0-4
title: using DS-5 on Galaxy Nexus running AOSP 4.0.4
wordpress_id: 1669
categories:
- blog
tags:
- Android
- android
- profiling
- DS-5
- streamline
- linaro
- AOSP
- galaxy
- nexus
---

Last week during connect there was a lot of buzz about DS-5. After using it on Origen and Snowball for profiling android performance, I found DS-5 Streamline extremely useful for profiling apps and libraries in Android . I realized that this tool is extremely useful to application developers in finding hotspot in their applications. But app developers wouldn't want to use a development board to actually profile apps. I thought of integrating the gator(kernel module+ userspace daemon needed for DS-5 to work with the device) on an end device,which is easily available to developers. I thought of trying on Galaxy Nexus since it is the latest Google device (and that's the one I have with me ;) ).

The gator module is hosted in Linaro's git repository:
[ http://git.linaro.org/gitweb?p=arm/ds5/gator.git;a=summary](http://git.linaro.org/gitweb?p=arm/ds5/gator.git;a=summary)

I have packaged a boot.img which is based on AOSP 4.0.4 release(android-4.0.4_r1.2). I won't get into the details of compiling the module and binary.  You can look at linaro's integration of DS-5 on the boards. It is very similar to that. Maybe I will post if someone needs the instructions.The boot image has the kernel compiled with necessary configs for gator and I have also included the gator daemon and module in the image. The init script takes care of loading and running the daemon.

Download the boot image from here:
[ http://people.linaro.org/~vishalbhoj/boot_gator.img]()http://people.linaro.org/~vishalbhoj/boot_gator.img

You will need  an unlocked galaxy nexus running AOSP 4.0.4.
Test the above boot image by soft booting it to see that it works with the build running on your device . To do that, reboot the device into fastboot mode and boot with above image:

```
#adb reboot bootloader                                    // should get you to bootloader mode
#fastboot boot boot_gator.img                     // boots the image with gator module

```

You can then connect over adb and check that gatord daemon is running to confirm that device can work with DS-5.

If everything seems to be stable then flash the boot image:

```
#adb reboot bootloader
#fastboot flash  boot boot_gator.img
```

Here is a video on how to setup and use DS-5 Streamline for app developers:

{% include media.html media_url="http://www.youtube.com/embed/LgRHpRI6C_4" %}

One can connect to device by typing the IP address of  the phone in streamline configuration. DS-5  won't be able to give GPU activity on Galaxy Nexus since GPU on OMAP4 is not supported by DS-5 .

Happy analyzing :) .
