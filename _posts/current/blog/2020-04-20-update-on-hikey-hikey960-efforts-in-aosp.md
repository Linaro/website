---
layout: post
title: Update on HiKey/HiKey960 efforts in AOSP
description: In this article, John Stultz takes a look at the HiKey/HiKey960
  efforts in AOSP as HiKey gets put into retirement. Read more here!
date: 2020-04-20 11:21:20
image: /assets/images/content/hikey-image1.png
tags:
  - HiKey
  - HiKey960
  - Android Ecosystem
category: blog
author: john.stultz
---

Back in 2016, after an amazing six-month effort of collaboration between various groups in Linaro, HiSilicon, and Google, the HiKey board was the first 64bit ARM dev board that was officially supported in AOSP/master using a v3.18 kernel.

{% include image.html path="/assets/images/content/hikey-image1.png" class="medium-inline right" alt="hikey-image1" %}

After that announcement, the collaborative efforts continued - moving to new kernels (v4.1, v4.4, v4.9, v4.14, and v4.19), and changes from new AOSP releases, and upstreaming kernel support into the mainline tree. Over the last 4 years, The HiKey board became a very useful tool for developing and testing the latest AOSP code with the latest upstream kernel work - be it adding the generic Linux bluetooth HAL, the move from fbdev to drm_hwcomposer, the EAS scheduler, upstreaming ION functionality via the dma-buf heaps, the Treble effort for Android Generic System Image (GSI), or even the initial proof of concept work to support the Android Generic Kernel Image (GKI). Not to mention all the upstream kernel regressions that were caught and fixed before an LTS release and the resulting android common kernel was even created.

But the sun has begun to set for the HiKey board. It's not been available via retail for quite some time, the lack of GLES3 support, and the 1GB (then expanded to 2GB) ram size has become quite limiting for the AOSP environment. So in the last few months, documentation on using HiKey has been removed from the public Android web sites, and the needed mali driver support wasn’t added to the android-5.4 kernel, making andorid-4.19 the last stop for HiKey in AOSP.

That said, while development focus has moved on to other boards, it doesn’t mean HiKey gets to shuffle off into the back of the drawer for retirement. In the Linaro labs, many HiKey boards are still actively working night after night running tests. Since the support for the board (except the binary mali driver) was upstreamed, it is still a very valuable board for validating upcoming changes to the Linux kernel stable LTS releases (from v4.4 to v4.19), which ensures vendors don’t see regressions when they adopt security updates to their already shipped production devices. And as the support code is fairly generic and has not been removed from AOSP, some of us who have become fondly attached to the board still find some time to do regular testing with the latest AOSP/master branch combined with the latest mainline kernels, continuing to utilize the board for that overlap of separate communities that it was first to help bridge.

But we’re not here for a memorial! The HiKey board’s younger and much more powerful sibling the HiKey960 is still actively supported in AOSP. While recent trade disputes have prevented us from collaborating directly with HiSilicon - Linaro and other members continue to use the board for testing and development. The upstreaming effort on HiKey960 has always been a sore spot, but efforts have slowly continued, with recent changes landing upstream to prep for HiKey960’s display driver support, and extending the dwc3 driver to support HiKey960. But we still have yet to upstream the onboard USB hub/mux support, display driver, and i2s audio.

{% include image.html path="/assets/images/content/hikey-image2.png" class="medium-inline" alt="hikey-image2" %}

With AOSP’s android-5.4 kernel, we have also taken a new direction with how we manage kernel support for HiKey960. Previously, we always kept a separate vendor kernel branch, which was based on the common/android-x.y kernel. We added whatever fixes or even hacks necessary to support the hardware, and tried to regularly merge in updates from the common/android-x.y branch. Unfortunately, this maintenance sometimes fell to the wayside, and updates became not so regular. But with android-5.4, instead of keeping a separate vendor branch, we’ve added the patches needed to support HiKey960 directly to the common/android-5.4 branch (an approach we’re also taking with the Dragonboard 845c). This means we have to be careful, as this branch will be widely shared between all Android devices that use the 5.4 kernel - hacks to support just one board won’t do. Luckily, as much of HiKey960’s support is already upstream, there wasn’t too much to add. This greatly simplifies things for testing, since we now don’t have a separate tree that we have to maintain and update. Instead we can focus our testing directly on the latest version of the android-5.4 tree, which lets us ensure that the code we’re testing for regressions is exactly the same as what vendors will be picking up for their devices!

Additionally, by being in the android-5.4 tree directly, we are making sure the android-5.4 kernel build for HiKey960 is GKI compliant, using modules for all the board specific hardware support. HiKey960 (along with HiKey and Dragonboard 845c) was a crucial platform in early proof-of-concent work of the GKI ([demoed at the SAN19 Connect](https://twitter.com/johnstultz_work/status/1171915205548183553)). This is important, as one cannot really call something generic until it has been useful on more than one platform, and having multiple devices from different SoC vendors has been an important test point in creating a truly vendor-neutral approach.

The HiKey960 continues the AOSP dev board tradition of allowing us to create an overlap between the AOSP community and the upstream kernel community. We still regularly use it for testing every upstream Linux -rc release against AOSP/master, which catches regressions early so they don’t make it into a release. And we’ve also used it to validate Android focused changes that we want to upstream. As development priority moves to newer boards (like the Dragonboard 845c), the HiKey960, which is the only AOSP dev board to currently support Vulkan graphics, will continue to be a very useful test device going forward.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Getting ready
for <a href="https://twitter.com/LinaroConnect?ref_src=twsrc%5Etfw">@LinaroConnect</a>
- Db845c and hikey960 running AOSP w/ the same GKI kernel <a
href="https://t.co/0bZNz5JzYr">pic.twitter.com/0bZNz5JzYr</a></p>&mdash;
John Stultz (@johnstultz_work) <a
href="https://twitter.com/johnstultz_work/status/1171915205548183553?ref_src=twsrc%5Etfw">September
11, 2019</a></blockquote> <script async
src="https://platform.twitter.com/widgets.js"
charset="utf-8"></script