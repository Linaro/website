---
author: edmund.szeto
categories:
- blog
date: 2014-06-04 14:35:37
description: Android supports SQLite, a lighter weight database management system
  that does not require a server backend. SQLite is very useful for smaller collections
  of data, such as application settings, bookmarks in browsers, high scores in games,
layout: post
link: /blog/android-blog/optimizing-sqlite-database-android/
slug: optimizing-sqlite-database-android
tags:
- Android
- android
- Linaro
- Linux
- Linux on ARM
- Open Source
- Opensource
- software
title: 'Optimizing SQLite database in Android '
wordpress_id: 5963
---

Wait, what? You might be thinking "Why would a smartphone need a database? Don't those belong on major website backend servers?" Yes, that is true for large client-server databases such as online accounts for an eCommerce website implemented using MySQL. However, Android supports SQLite, a lighter weight database management system that does not require a server backend. SQLite is very useful for smaller collections of data, such as application settings, bookmarks in browsers, high scores in games, etc. The support for SQLite is available natively in the Android OS, and is thus widely used by many Android apps. As such, it is beneficial to optimize the performance of SQLite in Android and hopefully lead to an overall improvement. **So how do we attack the task to improve the performance of SQLite? There are three main places to look:**

  * **The actual SQLite implementation**


  * **The external libraries that SQLite uses**


  * **The medium of which contains the databases**


As of Android KitKat (4.4.2), the SQLite library is still based off of an older release 3.7.11. The newest release from the official SQLite website, which is available in the public domain, is 3.8.4.3. An exercise was carried out to update the version of SQLite in Android to the a newer version 3.8.3.1 (the latest at the time of the exercise). Using some freely available SQLite benchmark apps from the Google Play Store, the newer version showed a 7% improvement. In addition to improved performance, the newer package contains bug fixes. A win-win scenario for performance, stability and security. Moving on to the external dependencies, the one set of functions that naturally used a lot in SQLite are the string functions. Every SQLite statement (used for instruction SQLite to carry out operations) is in the format of a string. The statements are parsed, compared, etc. As such, by improving the performance of such string operations should lead to an improvement in SQLite as well. An exercise was carried out to replace the string operations in the Bionic C library with ARM Cortex-optimized versions. Using the same benchmarking apps mentioned earlier, a subset of the Cortex-optimized strings showed promising gains. An analysis later on with Android's method profiling tool from the Android SDK did in fact reveal a large portion of the CPU cycles are spent within string functions. Finally, there is the storage medium on which the actual SQLite databases are stored. Just like a PC, the bottleneck for accessing a file is the file I/O speed. Since it is impossible to simply change the NAND flash part on a smartphone to a faster part, the next best thing is to look at the filesystem. One of the more popular filesystems used today in Android smartphones is EXT4 (or even EXT3 if running on an older kernel). Said filesystem was developed for mechanical hard drives in mind, so it may not be optimized for NAND flash based storage drives as in smartphones. To tackle this, Samsung had developed a new filesystem called Flash Friendly File System (F2FS). Yet another exercise was carried out to port F2FS onto an existing device and compare the performance between EXT4 and F2FS. Unfortunately the exercise did not yield any mind-boggling improvements. Instead, F2FS fared similarly to its EXT4 counterpart in the same bencmarking apps. A separate task to use the Iozone utility to measure the pure performance of F2FS vs EXT4 showed a healthy 7% improvement in writes, but sadly a 2% in reads. Since the usage of SQLite varies from app to app, F2FS cannot be justified at this time to replace EXT4 as apps that write-few-read-many via SQLite will benefit, but others will suffer. So, is there more? Being software, there is always more room for improvement. There are talks to use Android's not-so-widely-adopted RenderScript technology to speed up SQLite operations. This technology is analogous to OpenCL, which is using the GPU to do computations more efficiently than the CPU. Stayed tuned for more to come... Here's the link to the wiki page with more details of the optimizations mentioned above: [https://wiki.linaro.org/Platform/Android/SQLiteOptimization](https://wiki.linaro.org/Platform/Android/SQLiteOptimization) To sum it up, the improvements in SQLite look promising, but keep in mind that it does not translate 1:1 to real-world improvements. You may see faster loading of contacts when scrolling through the phone book, which is stored in an SQLite database, but don't expect animations to be smoother and nicer. That's left for another optimization another day.   Come to the next Linaro Connect  to see what all the Linaro Android Team is working on.  Linaro Connect USA 2014, September 15-19 in Burlingame, California.  [Register Now!](http://connect.linaro.org/lcu14/)