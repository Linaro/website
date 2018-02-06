---
author: bernhard.rosenkranzer
categories:
- blog
date: 2012-04-01 15:02:24
description: Linaro announces the release of Android 5.0.0 "Jujube"
keywords: Linaro,Android,Linaro Android,linaro-android,Jujube,Android 5.0.0,April
  Fools,April 1st
layout: post
link: /blog/community-blog/linaro-releases-android-5-0-0-jujube/
slug: linaro-releases-android-5-0-0-jujube
tags:
- Android
- Community
- Releases
title: Linaro releases Android 5.0.0 "Jujube"
wordpress_id: 1484
---

Linaro has always ensured that its Android releases contain the most up-to-date components possible. Today, we're excited to announce that we're able to release our version of Android 5.0.0 "Jujube".

If, like us, you can't wait to try it out, grab the code from gerrit:

`repo init -u git://android.git.linaro.org/jujube/manifest.git -b linaro_android_5.0.0 -m default.xml
repo sync`

and build it as you would with any Linaro Android release,

`make TARGET_TOOLS_PREFIX=/where/you/put/the/toolchain TARGET_PRODUCT=YOURBOARD systemtarball boottarball userdatatarball -j4`

where YOURBOARD is the board you're trying to build for - one of pandaboard,iMX53,iMX6, Origen, Snowball, Waterpit (For those unfamiliar with it, the Waterpit board is the successor of the Snowball board, due to climate change).

This release was a lot harder to do than the [4.0.4 release](/blog/linaro-android-updated-to-4-0-4/) a couple of days back - aside from the fact that Jujube seems to be a completely refactored codebase, we've had to perfect space-time refactoring in git to get hold of the sources of this release. The patch has been submitted to upstream git, but given its complexity, it probably won't hit the official codebase until at least git 4.0. git maintainers have asked us to not release the patch until they've incorporated it.