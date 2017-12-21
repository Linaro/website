---
author: khasim.mohammed
categories:
- blog
date: 2014-09-08 13:00:53
description: Multiple engineering teams at ARM and Linaro have worked together to
  provide this feature rich, pre-integrated build of Android for the Juno ARM Development
  Platform (ADP)
excerpt: The latest Linaro 14.08 AOSP software build provides developers a unique
  pre-integrated Android software distribution that enables them to more easily conduct
  64-bit development for Android on ARMv8-A based SOCs & platforms.
layout: post
link: /blog/android-blog/android-development-made-easy-64-bit-armv8-platforms/
slug: android-development-made-easy-64-bit-armv8-platforms
tags:
- Android
- 64-bit
- android
- AOSP
- ARMv8
- Development
title: Android development made easy for 64-bit ARMv8 platforms
wordpress_id: 6569
---

The latest Linaro 14.08 AOSP software build provides developers a unique pre-integrated Android software distribution that enables them to more easily conduct 64-bit development for Android on ARMv8-A based SOCs & platforms.

Multiple engineering teams at ARM and Linaro have worked together to provide this feature rich, pre-integrated build of Android for the Juno ARM Development Platform (ADP). The release includes the latest Android from the AOSP master with kernel based on Linaro Linux LSK 3.10, pre-integrated with ARM Mali, accelerated OpenGL (3D Graphics) drivers, ARM Trusted Firmware and the UEFI EDK II boot loader. All components are built with Linaro GCC version 4.9. The release works for both the ARMv8-A Juno hardware platform and ARM Fast Models.

The following video from ARM helps developers easily understand the Android development and booting procedure using Linaro Android release for ARMv8 based Juno platforms:


{% include media.html media_url="https://www.youtube.com/watch?v=ojg4eZ-l3Po" %}

The latest release from Linaro is available is here
    
[http://releases.linaro.org/14.08/members/arm/android/images/armv8-android-juno-lsk](http://releases.linaro.org/android/member-lcr/juno/)

**How does this release helps developers?** Android and other software components like the Linux kernel, and the UEFI boot loader are built with a common toolchain - in this case, the Linaro GCC compiler version 4.9 - and this helps to reduce the number of debug and development cycles. Developers have access to documentation that provides a build procedure, Android booting instructions for both the ARM Fast models and Juno hardware. The release provides both source and pre-built binaries to ease the initial setup and facilitates porting to custom hardware or integration with custom software components in Android.

**_Linaro’s LAVA infrastructure_** is used to help in thorough validation and thereby hardening of upcoming Android software for ARMv8 64-bit architecture. The Android compatibility test suite (CTS version 4.4), individual BIONIC and Android Monkey tests were run on Juno hardware platform setup on LAVA automated infrastructure. OpenGL 3D graphics rendering is validated manually to check for UI artifacts if any, and multi-lib (64-bit and 32-bit native applications) is tested using Android NDK apps. Known issues are captured separately in the release notes.

**Key Android features included in Linaro build**

The release includes ARMv8 optimizations for Android of OpenSSL, LibPNG and BIONIC cortex C strings. These optimizations have also been submitted by Linaro to AOSP. By default ART runtime is enabled in “compiler” mode. SELinux is enabled in enforcing mode and validated with CTS packages. Recently Google released the Android NDK with support for 64-bit platforms and the changes to Andrid NDK are also starting to show up in the AOSP master codebase. The release includes Android latest NDK from AOSP master built with Linaro tool chains.

**Can 32-bit applications be run?** The release is built for a 64-bit primary and 32-bit secondary configuration. So, the libraries are built for both 32-bit and 64-bit versions giving applications a fair chance to run on the 64-bit Android rootfs.

**by Khasim Syed Mohammed, Tech Lead - Android, Linaro Mobile Group.**

**A lot More @ ****[2014 Linaro Connect USA](http://connect.linaro.org/lcu14/)**

Don’t miss this opportunity to meet ARM and Linaro engineers developing and integrating 64bit ARMv8 features in Android AOSP. Following are few very important and key technical sessions for on ARMv8 Android developers




  * [LCU14-100:](https://lcu14.zerista.com/event/member/137702) Dalvik is Dead, Long Live Dalvik !


  * [LCU14-104: ](https://lcu14.zerista.com/event/member/137707)Everything’s Done! Android for 64-bit ARMv8, What’s next?


  * [LCU14-108:](https://lcu14.zerista.com/event/member/137711) Panel: Faster, Better and more Open AOSP Support


  * [LCU14-309:](https://lcu14.zerista.com/event/member/137756) Introducing Android NDK for 64bit ARMv8 SOCs


  * [LCU14-403: ](https://lcu14.zerista.com/event/member/137770)LMG Lightning Talks


  * [LCU14-407:](https://lcu14.zerista.com/event/member/137775) How to enable SELinux for Android on AOSP master for ARMv8


  * [LCU14-411:](http://lcu14.zerista.com/event/member/137779) From zero to booting Nano-Android with 64bit support


  * [LCU14-502:](https://lcu14.zerista.com/event/member/137789) Android User-Space Tests: Multimedia codec tests, Status


  * and Open Discussions


  * [LCU14-504:](https://lcu14.zerista.com/event/member/137791) Taming ARMv8 NEON: from theory to benchmark results


  * [LCU14-106: QEMU for ARMv8 and the 64-bit Android Emulator](https://lcu14.zerista.com/event/member/137709)


You can also [remove participate](http://connect.linaro.org/lcu14/) Linaro Connect USA