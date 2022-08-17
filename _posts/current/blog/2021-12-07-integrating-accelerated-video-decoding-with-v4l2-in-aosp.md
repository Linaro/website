---
layout: post
title: Integrating Accelerated Video Decoding in AOSP
description: >
  Upstream enabled development boards are critical to the work Linaro does as
  they provide a platform to develop and validate new solutions, as well as
  allow us to demonstrate the value of those solutions to upstream maintainers,
  and also as a vehicle for testing to ensure external regressions are caught
  and quickly fixed. One area that has commonly been missing on AOSP development
  boards is open implementations of accelerated video decoding. In this blog,
  Linaro Engineer John Stultz talks about the work Linaro has done to integrate
  accelerated video decording with v412 in AOSP.
date: 2021-12-07 08:47:03 +00:00
image: /assets/images/content/technology-3389917_1920.jpg
tags:
  - AOSP
  - Qualcomm Dragonboard 845c
  - Qualcomm Robotics kit
  - RB3
  - RB5
  - video decoding
category: blog
author: john.stultz
---

Upstream enabled development boards are an extremely crucial tool for our work at Linaro, as they provide a platform to develop and validate new solutions, as well as allow us to demonstrate the value of those solutions to upstream maintainers, and also as a vehicle for testing to ensure external regressions are caught and quickly fixed. However, compared to shipping devices like phones, development boards are usually missing functionality. Often this is due to missing hardware, such as touch-panels, NFC, batteries, or fingerprint readers, but in some cases it's due to missing upstream kernel support for specific hardware functionality, or missing userland HALs to enable it. For the scope of much of our work, this is acceptable, as we can still do quite a bit of core kernel development and testing with only a basic amount of functionality. But there are still benefits to be had by enabling additional features on development boards, as in doing so, we may find bugs and limitations of existing frameworks, and it allows us to collaboratively work with others to solve and upstream generic solutions to the problems we find.

One area that has commonly been missing on AOSP development boards is open implementations of accelerated video decoding.

On prior AOSP development boards, this has mostly been due to missing upstream kernel support for video decoding IP. However, on the [Qualcomm Dragonboard 845c](https://source.android.com/setup/build/devices#845cdragonboard)/Robotics RB3 and [RB5 devices](https://www.96boards.org/product/qualcomm-robotics-rb5/), the Qualcomm Landing Team has managed to upstream kernel support for the Venus acceleration hardware, using standard kernel v4l2 interfaces. The Qualcomm landing team is an engineering team within Linaro which works closely with Qualcomm on upstreaming their platforms.

While this got it working for classic Linux environments, AOSP was still missing out, as Android has its own media subsystem called Codec2, and it requires a vendor supplied HAL to glue its logic to the kernel drivers for hardware support. And most vendors shipping devices usually implement their own proprietary HALs, using out of tree, non-v4l2 kernel drivers.

A while back Google did implement a v4l2_codec2 HAL, to use the upstream kernels v4l2 interfaces. However, this HAL seems to have evolved out of efforts from the ChromeOS team, likely for use when running Android containers on ChromeOS. This means it included the extra complexity of additional abstractions in order to work on ChromeOS, and as a result it had a number of logic and build assumptions that prevented it from working properly on plain AOSP in the past.

After a number of false starts, Amit Pundir and myself started taking a more serious look at integrating the v4l2_codec2 HAL earlier this year. This also aligned with similar external efforts by both Kevin Hilman and Neil Armstrong from Baylibre as well as Dmitry Shmidt on the AndroidTV team, which let us collaborate on various build-issues and potential routes for moving forward. But it wasn’t until a major refactoring effort to the HAL by Google, that was released with Android12, that we were able to make any real progress.

Unfortunately, the newly refactored code in Android12 didn’t work out of the box. But we were able to make further progress than before, and working with Google developers as well as other other community members, we uncovered a number of other bugs in the process.

The first was a kernel issue with the v4l2 VIDIOC_DQEVENT ioctl. Once diagnosed, I reported the problem to Arnd Bergmann who was able to quickly submit a fix, which has now [been merged](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=678d92b6126b9f55419b6a51ef0a88bce2ef2f20).

Additionally, with the extra efforts working with the venus kernel driver, we uncovered a frequent boot issue, where the driver components would initialize in an unexpected order causing a crash. For this, Tadeusz Struck stepped in, diagnosed the issue and [submitted a patch upstream to fix it](https://lore.kernel.org/all/20211029214833.2615274-1-tadeusz.struk@linaro.org/).

Another issue was found in the drm_hwcomposer which was not handling multi-plane buffers properly. I submitted an initial fix, and Roman Stratiienko from the GloDroid project [merged a further improved fix for the problem](https://gitlab.freedesktop.org/drm-hwcomposer/drm-hwcomposer/-/commit/875f39793ff12f95cf8bd5c66addfa14b3cf01fb?merge_request_iid=160).

Finally, with a few other hacks we managed for the first time to get video output from the v4l2_codec2 HAL. This was exciting, but unfortunately that output looked like this:

{% include image.html path="/assets/images/content/video-decoding-aosp-image-1.png" alt="Output from video decoding on AOSP" %}

After much continued debugging (which included a hack to overwrite the venus output buffers with a hand-calculated frame to try to understand if the venus hardware was exporting the wrong format or if the display was not displaying it correctly), I realized that the gralloc allocator was setting the DRM_FORMAT_MOD_QCOM_COMPRESSED modifier flag on the dmabuf.

This flag is something the display code understands so it expects the buffers to be compressed, but the v4l2 interfaces don’t manage to look at this flag, so the venus hardware was filling buffers with uncompressed frames, and then it was being misinterpreted by the display hardware which was interpreting the data as compressed.

A workaround to disable setting the compression modifier on NV12 buffers was [merged in the minigbm gralloc project](https://chromium-review.googlesource.com/c/chromiumos/platform/minigbm/+/3265874). Additionally Stanimir Varbanov on the Linaro Qualcomm Landing Team has [submitted patches to introduce new format types so that v4l2 interfaces](https://lore.kernel.org/lkml/20210706124034.773503-1-stanimir.varbanov@linaro.org/) can distinguish between NV12 and QCOM_COMPRESSED NV12, until the v4l2 interfaces can be extended to pass though the DRM buffer object modifiers.

Pausing here for a moment, it’s good to appreciate how efforts like this - just trying to integrate something new - manages to uncover bugs and limitations all through the stack! And this shows the importance of further enabling new functionality on AOSP development boards, which increases test coverage uncovering issues and allowing us to quickly catch and fix future regressions.

Now, back to v4l2_codec2 HAL, where there are still a few remaining issues to fix:

\#1: An AOSP build issue, where we need to set a few v4l2_codec2 libraries as vendor_availabe, as discovered by Dmitry Shmidt. This still needs review and feedback from the v4l2_codec2 maintainers.

\#2: The Codec2 framework wants to set up the encoded video input buffer size very early in the initialization of the infrastructure. So the v4l2_codec2 logic sets the value, and then later queries the hardware to try to set the buffer size. Unfortunately the venus driver is a bit more picky and returns a different buffer size then what is requested. Ignoring the v4l2 API rules, the v4l2_codec2 code does not use the kernel’s adjusted buffer size and sticks to its earlier requested size, which causes problems when importing buffers into the venus driver. Ideally the v4l2_codec2 could change to use the kernel’s adjusted size, but at that point in the code it's too late for the Codec2 infrastructure. So some deeper rework of the v4l2_codec2 initialization logic is needed. Alternatively, the venus driver seems to be overly picky here, so we may be able to change the driver to be less particular, which would avoid the issue. However, avoiding the issue would not work for hardware that really requires a specific input buffer size.

\#3: With the venus driver successfully generating output frames, we’ve noticed that the output is a bit more glitchy than what we see with the software decoder. This may be due to issues in the venus kernel driver, or it may be due to incorrect cache flushing of the DMA’ed video buffers, causing accidental corruption. This will require further investigation.

We are continuing to work with the Google developers to better understand what solutions would be acceptable, so it seems we are not too far away from having video decoding working properly with the Qualcomm Dragonboard 845c/Robotics RB3 and RB5 boards in AOSP. With similar efforts being done by others like Baylibre and the Glodroid project in the community, hopefully this will be generically working on other boards like the VIM3, RaspberryPi4 and more.

{% include image.html path="/assets/images/content/video-output-from-aosp-development-board.png" alt="Video output from AOSP development board" %}

Again, getting this far has really been a collaborative community effort thanks to a wide array of folks inside Linaro, the Qualcomm Landing Team, Google, and our community peers at Baylibre and the GloDroid project.

Not only will this effort allow for improved testing and open the door to future work like enabling v4l2 encoding for camera video input or screen recording in AOSP, but it also provides a solid reference point, where we can work with vendors to compare the functionality of upstream kernel interfaces with the shipping vendor solutions. This allows us to better understand what changes the upstream kernel would require in order to migrate vendors to a generic upstream solution. That would allow vendors to stop having to spend effort to maintain and forward port their out of tree solutions, letting them focus on more valuable features of their IP.

For more information on this work, go to our [Software Device Enablement for Android project page](https://linaro.atlassian.net/wiki/spaces/LCGSC/pages/15697806250/Software+Device+Enablement+for+Android).
