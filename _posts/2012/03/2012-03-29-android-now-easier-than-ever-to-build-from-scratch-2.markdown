---
author: linaro
categories:
- blog
date: 2012-03-29 20:37:41
description: How to build Android from scratch
layout: post
link: /blog/android-now-easier-than-ever-to-build-from-scratch-2/
slug: android-now-easier-than-ever-to-build-from-scratch-2
title: Android Now Easier Than Ever To Build From Scratch
wordpress_id: 1463
---

Building products from source is always hard, and Android can be one of the worst. We get a lot of questions at Linaro about how to reproduce our builds. This month the Android team spent some time helping make this as easy as possible.

Android builds now include two small shell scripts:
	
  * linaro_android_build_cmds.sh

	
  * linaro_kernel_build_cmds.sh

### linaro_android_build_cmds.sh

This script will reproduce an entire Android build for you. It performs several actions for the user:
	
  * Ensure packages required for build are installed.

	
  * Grab the proper Android manifest and sync the repo to your system. **NOTE:** By default this grabs the _"pinned_manifest"_ that will point to the exact code. There's also an option to build from the tips of the branches used in the manifest.

	
  * Grab the proper toolchain for building the code

	
  * Perform the build


The script is fairly short, so you can take bits and pieces of it to include in your own work flow.

### linaro_kernel_build_cmds.sh


This is similar to the first script, but insteads just downloads the kernel repository used by the build and executes the commands needed to rebuild the kernel.

For an example of these scripts take a look at the [Panda LEB build](http://releases.linaro.org/) for the 12.03 engineering cycle.