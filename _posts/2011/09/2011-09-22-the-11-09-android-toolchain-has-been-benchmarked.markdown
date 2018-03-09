---
author: zach.pfeffer
date: 2011-09-22 16:04:47+00:00
layout: post
link: /blog/the-11-09-android-toolchain-has-been-benchmarked/
slug: the-11-09-android-toolchain-has-been-benchmarked
title: The 11.09 Android Toolchain has been Benchmarked
wordpress_id: 4130
categories:
- blog
tags:
- Android benchmark 11.09
---

Andy Doan has put together the Android benchmarks for the 11.09 toolchain. You can check it out here:

[https://wiki.linaro.org/Platform/Android/AndroidToolchainBenchmarking/2011-09](https://wiki.linaro.org/Platform/Android/AndroidToolchainBenchmarking/2011-09)

Older benchmarks can be found at: [https://wiki.linaro.org/Platform/Android/AndroidToolchainBenchmarking](https://wiki.linaro.org/Platform/Android/AndroidToolchainBenchmarking)


## Summary

	
  * **skia** continues to show monthly improvments.

	
  * **cximage** all toolchains score about the same.

	
  * **gcstone** 4.5 was the only to show improvement over Android. This is slight regression from last month. However, the results from this are biased to the "Total List Alloc Time" test case.

	
  * **gnugo** Shows month-to-month improvement, but 4.5 still outperforms 4.6

	
  * **python** There was a small month-to-month regression in the 2011-09/2011-08 toolchain for 4.6.


The 4.6 graphite optimization "-floop-interchange -floop-strip-mine -floop-block" were more consistent this month than last month.

This chart shows percent improvements against Android 4.4. This was done by comparing the cumulative totals for each benchmark:


{% include image.html name="summary.png" alt="Android Toolchain Benchmarking Summary Image"%}

