---
author: khasim.mohammed
categories:
- blog
date: 2014-02-06 16:58:43
description: Linaro Android team update on their optimization efforts for 2014. What
  they will be working on in Q1 and the progress they have made so far.
keywords: Linaro, Android, Linaro Connect, LCU13, Linux, opensource, Google, Linux
  on ARM, Android community, opensource software
layout: post
link: /blog/android-blog/many-things-to-do-this-year-in-android/
slug: many-things-to-do-this-year-in-android
tags:
- Android
- android
- arm
- Linaro
- Linaro Connect
- Linux
- Linux on ARM
title: Many Things To Do This Year In Android
wordpress_id: 3350
---

I am sure this new year has already opened up quite a few challenges for you, same here.  I apologize for not keeping you posted on our progress on optimizations, ([discussed here previously](/blog/android-can-be-optimized/)) and  [Android engineering activities](/groups/lmg/) in general, this year I will make sure you get more frequent updates from us. To begin with, let me give a quick update on the roadmap and plans we have for this year.  My team is very focused on delivering:

  * Optimizing Android for better user experience on ARMv7 based SOCs


  * Enabling important mobile specific features in generic boot loaders like u-boot and UEFI EDK II and upstream.


  * Finally, solving problems in booting Android compiled with Clang


You may notice, the focus is spread across different architectures, frameworks and domains such as;  tools, compilers, software frameworks and so on. It is quite clear that showing some good progress in each of these areas simultaneously is definitely a challenge, but we are confident we will be able to meet the expectations as we are discussing and reviewing our approach and the implementation periodically with respective communities on respective forums.

We are making a good progress on every topic mentioned above, however the immediate goal for us is to improve the overall user experience of Android on ARM v7 SOC based devices. In case you have not followed our update,  you can go through the [previous post](/blog/android-can-be-optimized/) to understand the actual objective and goals set for Android optimizations. After a thorough analysis and reviews from our members and Android community we finalized on optimizing the following components:  SQLite, Zlib, Guava, fdlibm, Crypto libraries and speech libraries in Android. As part of this activity we are also looking at optimizing system startup time through hibernation though this might not be directly useful for mobile devices, but it will be very useful in segments like setup box, automotive, etc. The other task related to this is getting some of the external projects migrated to their latest source versions and ensuring they still meet the required compatibility.

For this first quarter, we have started working on:


  * Optimizing SQLite to improve read/write speeds for SQL records and reduce CPU usage to run SQL queries.


  * Evaluating few key external projects in Android after migrating to it’s latest versions from source.


  * Preparing a technical paper on improving battery life for top three use cases.


  * Working closely with AOSP members to get Android compiling for Clang, we have posted initial patches that covers major components of Android but still there are few more like BIONIC, etc. that have to be fixed before we get Android fully compiled and booted with Clang.


  * We were successful in building and booting Android with GCC 4.9 on Nexus devices, even before the official release of GCC 4.9. We should be migrating to 4.9 in our official releases soon.


One important point that I missed before is the hardware platform that we are using to evaluate these changes, with Bero’s help, we were able to fix the broken blob issue and now have both Nexus 7 and Nexus 10 booting for us from Linaro repositories. If you would like to try these platforms, please follow the instructions given [here]()http://android.git.linaro.org/gitweb?p=device/common.git;a=blob_plain;f=howto/nexus10-linaro/HOWTO_install.txt;hb=refs/heads/linaro-kk.  All the performance improvements should be evaluated on Nexus 10 before we submit to AOSP.

As mentioned before, we will keep you posted periodically as we make some considerable progress on any of these topics. If you have any questions or suggestions on these topics please write to us on [linaro-android@lists.linaro.org](mailto:linaro-android@lists.linaro.org) or join us on IRC #linaro-android on Freenode.**** ****

If you are attending Linaro Connect ASIA 2014 in Macau from March 3rd - March 7th  [www.linaro.org/connect-lca14](http://connect.linaro.org/lca14/) -- please join us for our Android sessions on


  * March 4th 2014 : Optimizing SQLite for Android mobile

  * March 5th 2014 : Building Android with Clang
  
  * March 6th 2014 : Migrating external projects used in Android to it's latest version

  * March 7th 2014 : Improving Android battery life



Thankyou, and I am looking forward to seeing you at Linaro Connect.