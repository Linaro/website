---
layout: post
title: DragonBoard 845c in AOSP
description: >
  In this article, John Stultz takes a detailed look at the DragonBoard 845c in AOSP (Android Open Source Project). Read about his findings here!
date: "2020-04-06 01:48:45"
image: /assets/images/content/48806078402_a2756594c6_k.jpg
tags:
  - Android Ecosystem
  - Linux Kernel
  - Upstreaming
category: blog
author: john.stultz
---

Over the last year, the Linaro Consumer Group (LCG) has been actively working with the Qualcomm Landing Team and the Google Android Systems Team to get the DragonBoard 845c added as one of the AOSP supported devboards (similar to HiKey, HiKey960 and the Beagle X15).

One of the most exciting parts of the DragonBoard 845c is that it supports the freedreno graphics driver and mesa, which means the board has a fully open source graphics stack! This avoids the proprietary blob drivers, which while very common in the Android ecosystem, are a constant pain point for adapting to newer kernels and Android revisions. This also means that the board functionality can be completely upstreamed into the mainline kernel, which makes the board a very interesting test target for validating the mainline kernel and stable updates.

{% include image.html path="/assets/images/content/db845cblog1.png" class="medium-inline" alt="DragonBoard 854c 96Board" %}

Another unique aspect of the board is how the Qualcomm Landing Team is enabling functionality for the board. With most devboards, when they ship there is a BSP kernel package (usually containing hundreds if not thousands of patches, against an old kernel version) that provides support for all the board functionality. That BSP tree is usually then forward ported against mainline kernels and some components are then upstreamed, slowly shrinking the stack, though usually not as much as was hoped for, leaving a handful of patches to be continually rebased onto newer kernels.

{% include image.html path="/assets/images/content/db845cblog2.png" class="medium-inline right" alt="DragonBoard 854c 96Board" %}

There may have been such a BSP with the DragonBoard 845c, but the Qualcomm Landing Team started sharing an integration branch that contained all of the work-in-progress patches to enable functionality that they were actively upstreaming against the most recent kernel release. This means initially the board functionality was pretty bare bones. It would boot to UI, USB and ethernet worked - but *Bluetooth*® wireless technology, WiFi and audio were all missing. That said, the set of patches in that tree were usually under thirty, and actively shrinking. And as we’ve moved forward to newer kernels, we see additional functionality showing up, as part of the upstream kernel. This has at times made it feel like progress was moving more slowly, but the extremely valuable aspect is by using this upstream-first approach, we don’t have the technical debt of upstreaming looming overhead, and the board is useful for mainline testing right away. So a big thanks to the Qualcomm Landing Team for their efforts here! It ensures the board will be very valuable for upstream kernel testing for a long time.

As for AOSP support, the board has technically been a part of AOSP since last October (right before last years’ Linaro Connect San Diego 2019). However, not as much attention was called to it, since we’ve taken this upstream-first approach with the kernel. How we’re handling the kernel in AOSP with the Dragonboard 845c is really new as well. Instead of providing a vendor specific kernel tree, we integrated the board kernel support directly into the android-mainline and android-5.4 kernel source trees as those patches were being pushed upstream. This however meant initially there was no tree from which we could build an official pre-built kernel until after the v5.4 release, making AOSP builds a bit incomplete. So it was not until January when we finally had a prebuilt kernel (built directly from the android-5.4 tree by Google’s build infrastructure) to add to the project. With this, the build process is now very similar to the classic AOSP dev board experience, providing a booting device “out of the box” with AOSP/master, with the added benefit of not having to keep a separate vendor tree in sync with changes as they land in android-5.4 or android-mainline.

After we got support merged into the AOSP branches, the DragonBoard 845c has also been included in the ci.android.com build testing for both [android-5.4](https://ci.android.com/builds/branches/aosp_kernel-common-android-5.4/grid?) and [android-mainline](https://ci.android.com/builds/branches/aosp_kernel-common-android-mainline/grid?), as well as AOSP/master build testing. In fact, one can easily flash and test the very latest [AOSP/master](https://ci.android.com/builds/branches/aosp-master/grid?) builds from ci.android.com on a dragonboard using their web browser by visiting [flash.android.com](https://flash.android.com/welcome?continue=%2Fcustom) and simply following the instructions!

Having the DragonBoard 845c support added directly to the android-5.4 and android-mainline kernels have made the board particularly useful for some of the recent [Android Generic Kernel Image (GKI) efforts](https://www.linuxplumbersconf.org/event/2/contributions/61/attachments/69/80/Android_and_Linux_Kernel__Herding_billions_of_penguins_one_version_at_a_time.pdf). The GKI will eventually allow a variety of devices from different SoC vendors to be able to share the same kernel image, enabling the vendor specific hardware via loadable modules. This allows the ownership of the kernel to be split so that vendors can provide driver modules for their device, but the core kernel could eventually be updated directly by Google to provide quick security fixes - very similar to th[e Android Generic System Image (GSI)](https://developer.android.com/topic/generic-system-image).

{% include image.html path="/assets/images/content/db845cblog3.png" class="medium-inline" alt="DragonBoard 854c 96Board" %}

The DragonBoard 845c, along with HiKey960 and HiKey, were used for early proof-of-concept work of the GKI ([demoed at Linaro Connect San Diego 2020](https://twitter.com/johnstultz_work/status/1171915205548183553)), and as the GKI details have been formalized, the DragonBoard 845c has been the first AOSP device able to have its default kernel image be a GKI kernel built by Google’s build infrastructure. This effort required a lot of collaboration between Google, Linaro’s Consumer Group and the Qualcomm Landing Team in order to be able to get all the needed functionality built and functioning properly as a module. As additional functionality is upstreamed (like Bluetooth®, wifi and audio), we are able to validate those changes with the GKI images from android-mainline tree.

{% include image.html path="/assets/images/content/db845cblog4.jpg" class="medium-inline right" alt="DragonBoard 854c 96Board" %}

The efforts on the DragonBoard 845c have also been very useful in enabling some form-factor devices with AOSP and the upstream kernels. Since it shares the same SoC as many popular devices, such as the Google Pixel 3 and the POCOPHONE F1, we have been able to share effort to bring up both of those devices as well.

As mentioned earlier, we are using an upstream-first approach to the board support, so there is still a fair amount of work in progress. Upstream Bluetooth® support recently was enabled, WiFi support was also upstreamed and support was added to the android-mainline kernel. There is also active work on upstreaming audio support, which due to complex dependencies needs some additional effort to get it working when loaded from modules to work with the GKI.

The upstreaming status for the DragonBoard 845c is quite good! There is only one patch outstanding that is needed to get the board booting. After that it's about three dozen patches to enable USB, PCIe, HDMI bridge, and Audio - almost all of which have already been submitted to lkml and a good many are likely to land in the next merge window. We are excitedly and aggressively pushing to have the board fully supported upstream before the next LTS.

All of this to say, the DragonBoard 845c is a really exciting device for doing development and testing with AOSP/master along with the latest upstream and LTS -stable kernels. If you are interested in trying it out, you can find instructions here: <https://source.android.com/setup/build/devices>

See also the 96boards.org page for more information on the board and how to order one: <https://www.96boards.org/product/rb3-platform/>
