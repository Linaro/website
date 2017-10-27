---
author: zach.pfeffer
comments: false
date: 2011-10-19 01:15:25+00:00
layout: post
link: https://www.linaro.org/blog/android-blog/second-android-11-10-pre-release/
slug: second-android-11-10-pre-release
title: 'The Second Android 11.10 Pre-Release is Out! '
wordpress_id: 603
categories:
- Android
tags:
- android
- Linaro
- release
---

The second Android pre-release is done and has been tested. 



## Overview



Each build is based on Android 2.3.5 and has been compiled with Linaro's 11.10 GCC 4.6 release, with `-O3` and `strict-aliasing` turned on. 

Tracking builds are based on "Androidized" Linus HEAD trees, staging builds are generally based on the last stable Android kernel/common.git + linux-linaro. Both build types contain enablement patches that have not been upstreamed yet. Beagle xM is built using an upstream only tree, and represents the state of upstream enablement.  



## Builds


[![Linaro Android Build Service](http://www.linaro.org/wp-content/uploads/2011/10/linaro-android-build-service1-300x155.png)](http://www.linaro.org/linaro-blog/wp-content/uploads/2011/10/linaro-android-build-service1.png)
[Tracking Panda](https://android-build.linaro.org/builds/~linaro-android/tracking-panda-11.10-release/#build=4) Linux version 3.1.0-rc9+
[Staging Panda](https://android-build.linaro.org/builds/~linaro-android/staging-panda-11.10-release/#build=3) Linux version 3.1.0-rc9+ (coincidence)
[Beagle xM](https://android-build.linaro.org/builds/~linaro-android/beagle-11.10-release/#build=3) Linux version 3.1.0-rc9-09767-g52e3db9
[Staging Snowball](https://android-build.linaro.org/builds/~linaro-android/staging-snowball-11.10-release/#build=6) Linux version 3.0.4-g7118ded
[Landing Snowball](https://android-build.linaro.org/builds/~linaro-android/landing-snowball-11.10-release/#build=3) Linux version 3.0.0-rc7-g2036fd7
[Staging Origen](https://android-build.linaro.org/builds/~linaro-android/staging-origen-11.10-release/#build=4) Linux version  3.0.4-01826-gd24a797
[Staging iMX53](https://android-build.linaro.org/builds/~linaro-android/staging-imx53-11.10-release/#build=3) Linux version 2.6.38.7+

See each build page for usage info.
[![Linaro Android 11.10-rc2 smoke tests](http://www.linaro.org/wp-content/uploads/2011/10/11.10-rc2-smoke-tests-300x155.png)](http://www.linaro.org/linaro-blog/wp-content/uploads/2011/10/11.10-rc2-smoke-tests.png)
All the smoke tests are listed on [tests](https://docs.google.com/a/linaro.org/spreadsheet/ccc?key=0AnpUtxWjZbP9dGFDUk5kNXBoeWZDb3MyUmJ4cnBHTEE&hl=en_US#gid=0). See the "11.10 Pre Release 2" section.
