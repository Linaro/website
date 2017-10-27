---
author: bernhard.rosenkranzer
comments: false
date: 2012-03-06 23:11:07+00:00
layout: post
link: https://www.linaro.org/blog/community-blog/linaro-android-gets-ready-for-gcc-4-7/
slug: linaro-android-gets-ready-for-gcc-4-7
title: Linaro Android gets ready for gcc 4.7
wordpress_id: 1351
categories:
- Android
- Community
- Patch-Highlights
---

With the first release candidate of [gcc 4.7](http://http://gcc.gnu.org/ml/gcc/2012-03/msg00014.html) out, we've decided to get Linaro Android ready for the new compiler.

Overall, adding support for the new compiler went smoothly - in the process, we fixed 2 compiler bugs, and adapted the Android codebase to gcc 4.7's stricter checking. In particular the C++ declaration order changes took a bit of effort.

Other than that, gcc was mainly screaming at code that should never have been valid, like this extreme fondness of variable name recycling uncovered in stagefright's Matroska decoder:


    
    <tt>for(size_t i=0; ...) {
        ...
        int32_t i = 0;
        ...
        while(i<20) {
            for(int i=0; ...) {
                ...
    </tt>



Currently, the gcc 4.7 based toolchain is available on [android-build](https://android-build.linaro.org/builds/~linaro-android/toolchain-4.7-bzr/). 2 builds already using it -- [Pandaboard](https://android-build.linaro.org/builds/~linaro-android/panda-ics-gcc47-tilt-tracking-blob/) and [iMX6](https://android-build.linaro.org/builds/~linaro-android/imx6-ics-gcc47-freescalelt-stable-open/) -- are also available, and seem to work as expected.

Builds for additional boards will follow shortly.

