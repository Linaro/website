---
author: zach.pfeffer
date: 2012-08-11 01:09:45+00:00
layout: post
link: /blog/trying-linaro-jellybean-android-on-tis-panda-board/
slug: trying-linaro-jellybean-android-on-tis-panda-board
title: Trying Linaro Jellybean Android on TI's Panda board
wordpress_id: 1826
categories:
- blog
---
## Overview

This post takes you through trying a prebuilt build on a TI Panda and then reproducing that exact build from source.

## Try the Prebuilt Build

Go to [Jellybean Panda build 20 ]() and go through the instructions on the page to try the prebuilt build.

## Now Build

Use these commands:

```bash
wget http://snapshots.linaro.org/android/~linaro-android/panda-jb-gcc47-tilt-stable-blob/20/linaro_android_build_cmds.sh
chmod +x linaro_android_build_cmds.sh
wget http://snapshots.linaro.org/android/~linaro-android/panda-jb-gcc47-tilt-stable-blob/20/pinned-manifest.xml
./linaro_android_build_cmds.sh -m /path/to/pinned-manifest.xml
```

Now use the commands listed in [Jellybean Panda build 20 ]() but use the system.tar.bz2, boot.tar.bz2 and userdata.tar.bz2 you just made in  out/target/product/pandaboard/

Enjoy!
