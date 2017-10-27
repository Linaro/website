---
author: frans.gifford
comments: false
date: 2011-11-16 12:42:00+00:00
layout: post
link: https://www.linaro.org/blog/android-blog/installing-f-droid-on-linaro-builds/
slug: installing-f-droid-on-linaro-builds
title: Installing F-Droid on Linaro builds
wordpress_id: 879
categories:
- Android
tags:
- android
- app
- free software
- howto
- Linaro
- market
---

In a [previous post](http://www.linaro.org/linaro-blog/2011/10/26/using-markets-with-linaro-android-builds/), I wrote about using app markets with Linaro builds. One app market offering a selection of Free Software for Android is F-Droid[1]. Installation is fairly simple, but does require some configuration changes to get the most out of it, so here's how to install F-Droid on a Linaro build and some of the tweaks needed to be able to install all the apps available there.

We assume a Linaro image is already installed on the board. Instructions for how to do this are in the [Linaro Wiki](https://wiki.linaro.org/Platform/Android/ImageInstallation). Installation of F-Droid is pretty simple:



  1. In the Android browser, go to http://f-droid.org/FDroid.apk to download the F-Droid .apk, or otherwise locate and download the .apk file by browsing http://f-droid.org


  2. Open the Downloads application and select FDroid.apk to install it.


F-Droid will now appear on the applications menu and you should be able to list and install Android apps.

[caption id="attachment_895" align="alignnone" width="300" caption="F-Droid installed app list"][![F-Droid installed app list](http://www.linaro.org/wp-content/uploads/2011/11/device-2011-11-16-120452-300x225.png)](http://www.linaro.org/wp-content/uploads/2011/11/device-2011-11-16-120452.png)[/caption]

**Tweaks**


  * Augment the set of features the board claims to support. The files declaring supported hardware features are located in the build tree in [platform/frameworks/base/data/etc](http://android.git.linaro.org/gitweb?p=platform/frameworks/base.git;a=tree;f=data/etc;hb=HEAD). Simply copy them to the Linaro image to have your board claim it supports this feature. In my case, Ubuntu automatically mounted the /system partition on the memory card as /media/system, so `cp platform/frameworks/base/data/etc/*.xml /media/system/etc/permissions/` copied all the files.



  * App markets are sensitive to the date and time. Always make sure it is set (and has not reverted to the default 1/1/2000).



  * Some apps (e.g. trying to install Firefox/Fennec on Snowball) require more memory to install than is available to Dalvik. To work around this, use `setprop dalvik.vm.heapsize 64mb` to increase the memory available to Dalvik.


[1] F-Droid http://f-droid.org
