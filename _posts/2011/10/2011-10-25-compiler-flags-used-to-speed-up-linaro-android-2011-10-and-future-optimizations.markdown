---
author: bernhard.rosenkranzer
date: 2011-10-25 19:41:52+00:00
layout: post
link: /blog/android-blog/compiler-flags-used-to-speed-up-linaro-android-2011-10-and-future-optimizations/
slug: compiler-flags-used-to-speed-up-linaro-android-2011-10-and-future-optimizations
title: Compiler flags used to speed up Linaro Android 2011.10, and future optimizations
wordpress_id: 721
categories:
- blog
tags:
- Android
- Patch-Highlights
---

People trying out the latest Linaro Android builds may notice they're faster than the older versions. One of the reasons for this is that we're using a new set of compiler flags for this build.

We've switched from a base of -O2 -fno-strict-aliasing to -O3 -fmodulo-sched -fmodulo-sched-allow-regmoves.

To optimize application startup, we've also switched the linker hash style to GNU (ld --hash-style=gnu), and patched the Android dynamic linker to deal with those hashes.

Getting rid of -fno-strict-aliasing enables rather efficient additional optimizations - but requires that the code being compiled follows [some rules](http://cellperformance.beyond3d.com/articles/2006/06/understanding-strict-aliasing.html) traditionally not enforced by compilers.
Given the traditional lack of enforcement, there's lots of code out there (including, unfortunately, in the AOSP codebase) that violates those rules.
Fortunately, gcc can help us detect those violations: With -fstrict-aliasing -Werror=strict-aliasing, most aliasing violations can be turned into built time errors instead of random crashes at runtime. This allowed us to detect many aliasing violations in the code, and fix them (where doable with reasonable effort), or work around them by enabling -fno-strict-aliasing just for a particular subdirectory containing code not ready for dropping it.

-O3 enables further optimizations not yet enabled at -O2, including -finline-functions, -funswitch-loops, -fpredictive-commoning, -fgcse-after-reload, -ftree-vectorize and -fipa-cp-clone.
While some of them are probably not ideal (e.g. -finline-functions tends to increase code size, thereby also increasing memory usage and, in a bad case, reducing cache efficiency), overall -O3 has shown to increase performance.

-fmodulo-sched and -fmodulo-sched-allow-regmoves are fairly new optimizations not currently automatically enabled at any -O level. These options improve loop scheduling - more information can be found [here](http://gcc.gnu.org/news/sms.html).

We optimized further by adding link-time optimizations in some relevant libraries, and by using -ffast-math in selected parts of the code. -ffast-math is a bit dangerous because it can cause math functions to return incorrect values by ignoring parts of the ISO and IEEE rules for math functions (parts that make optimizations harder, or that simply require additional checks that slow down things considerably), so it should usually not be used for an entire build - but enabling it for parts of the code verified to not rely on exact ISO/IEEE rules can produce quite a speedup.

We also added the option to specify extra optimizations in a board specific config - so now our Panda builds are optimized specifically for Cortex-A9 CPUs while the iMX53 builds optimize for Cortex-A8 instead of relying on the least common denominator.

We also experimented with Graphite related optimizations, such as -fgraphite-identity, -floop-block, -floop-interchage, -floop-strip-mine, -ftree-loop-distribution and -ftree-loop-linear - those optimizations can rearrange loops to allow further optimizations. We've turned them back off for the release because they introduced some stability problems, and the benefit seemed minimal.
However, chances are they will come back in a future build. They can help make more efficient use of multi-core CPUs (with the addition of -ftree-parallelize-loops) once the compiler knows how to to threading (currently, Android is built using a generic arm-eabi targeted compiler that has no knowledge of the underlying OS).

Other possible future improvements - though probably not as efficient as the ones already made, or the switch to -ftree-parallelize-loops for multi-core boards - include seeing what effect a switch between ARM and Thumb2 instructions has on performance (enabling the right mode in the right modules), identifying places where the increased code size of -O3 actually hurts, and add the likes of -fno-inline-functions there, identifying further performance critical parts that can handle -ffast-math, fixing the aliasing violations we've worked around this time, and - of course - switching to gcc 4.7 when it becomes usable.
