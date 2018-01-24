---
author: linaro
categories:
- blog
date: 2011-05-31 17:36:09
description: 'Video: trying the Linaro Android Build Service on the Panda board -
  Only 15 minutes needed. Other boards available.'
layout: post
link: /blog/linaro-android-build-service-video/
slug: linaro-android-build-service-video
tags:
- android
- Evaluation builds
- Landing teams
- Linaro
- Panda board
- video
title: 'Video: Linaro Android Build Service on Panda board'
wordpress_id: 3387
---

Linaro has just opened a new service to generate Android images built with the Linaro kernel, and with Linaro optimizations (binaries built with optimized ARM toolchains, optimized C library...).

All users need to do is go to [https://android-build.linaro.org/]()https://android-build.linaro.org/. They can then choose between downloading images built by other users and requesting their own build. In the latter case, the request submitted to the cloud, and within an hour, the results are available.

This approach makes it very easy to try Android on one of the boards supported by Linaro, compared to build your image by yourself. For example, in the TI Panda board case, you would have to go through a long list of steps. Remember that ARM provides RISC (Reduced Instruction Set Computer) types of CPUs. With the Linaro Android Build Service, you also get a reduced set of instructions ;-)

For the moment, only authorized users can submit their own requests to the Linaro Android Build Service. Anyone can already log in, and will soon be able to submit requests.

In the below video, we show how to use one of the images already available on the website:


The video can also be downloaded in WebM format (VP8 codec):




  * [WebM / VP8 codec, 800x450 resolution](https://free-electrons.com/pub/video/2011/linaro/may/)


  * [WebM / VP8 codec, full HD resolution](https://free-electrons.com/pub/video/2011/linaro/may/)



Here is the list of steps that we went through in the video:

	
  * Download the `boot.tar.bz2`, `system.tar.bz2` and `userdata.tar.bz2` archives

	
  * Plug in an SD card. With `dmesg`, find the corresponding device on your Linux box. Let's assume this is `sdb`.

	
  * Download `linaro-image-tools` from [Launchpad](https://launchpad.net/linaro-image-tools).

	
  * Now run:

    
    sudo ./linaro-image-tools/linaro-android-media-create
    --dev panda --system system.tar.bz2 --boot boot.tar.bz2
    --userdata userdata.tar.bz2  --mmc /dev/sdb


Make sure that you only say `y` if the device it wants to use was
listed in the `dmesg` output.

	
  * Once you see:

    
    Done creating Linaro Android image on /dev/sdd


Unplug the SD card.

	
  * Plug it into Panda's SD card slot (SD/MMC card)

	
  * Plug in a USB mouse and a USB keyboard

	
  * Plug in a serial to USB converter

	
  * Get a minicom session going with

    
    minicom -D /dev/ttyUSB0




	
  * Plug in the HD monitor (HDMI label on the board)

	
  * Turn on the monitor

	
  * Turn on the Panda board

	
  * See the unit booting in minicom

	
  * See the default launcher. Use the mouse to click on the launcher.

	
  * You should see `0xBenchmark`