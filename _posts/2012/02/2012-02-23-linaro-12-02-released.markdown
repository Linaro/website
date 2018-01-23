---
author: david.zinman
categories:
- blog
date: 2012-02-23 19:23:18
description: Links to all the downloads for the Linaro 12.02 release
layout: post
link: /blog/releases-blog/linaro-12-02-released/
slug: linaro-12-02-released
tags:
- Releases
title: Linaro 12.02 Released
wordpress_id: 1278
---

_If I have seen further than others, it is by standing upon the shoulders of giants._ ~**Isaac Newton**

We are pleased to announce the release of Linaro 12.02.

Linaro 12.02 contains components delivered by all Linaro Teams --Working Groups, Landing Teams and Platform Teams-- and brings an abundance of exciting updates and new features which are integrated on top of Android and Ubuntu.

During the 12.02 cycle, Linaro hosted its [Linaro Connect Q1.12](http://connect.linaro.org/resources/) in Redwood City, California on 6-10 February.  Many Linaro Team members also participated in the [2nd Annual Android Builders Summit]()https://events.linuxfoundation.org/events/android-builders-summit on 13-14 February and the [Embedded Linux Conference](https://events.linuxfoundation.org/events/embedded-linux-conference) on 15-17 February also held in Redwood City, California and hosted by the [LInux Foundation](http://www.linuxfoundation.org/).

During the Linaro Connect event there were daily [plenary, planning, and hacking sessions](http://connect.linaro.org/resources/#schedule) which attendees were encouraged to attend and take part in.  This event also marked the first time which [Google+ Hangouts](http://www.google.com/+/learnmore/) were used during a Connect event to encourage remote participation from those developers around the globe.  Also, held during this Connect event was the ever growing [Demo Friday event](http://connect.linaro.org/resources/) where Linaro, its [community](/hub/), [partners](/members/) and [members](/members/) came together and demonstrated the agile development process which is highlighted monthly in each of our releases.

Highlights from this Linaro Connect event which influence this and future releases include:

**Plenary Sessions:**

* [ David Rusling, Linaro CTO, Phase III Plenary Presentation at Linaro Connect Q1.12](http://www.youtube.com/watch?v=ZSoCCRF7Hl0&list=UUAl2MfCBjH5y0nIym0ujHfg&index=9&feature=plcp)


* [George Grey, Linaro CEO, Plenary Presentation at Linaro Connect Q1.12](http://www.youtube.com/watch?v=Cl4Yr9rf7fQ&list=UUAl2MfCBjH5y0nIym0ujHfg&index=8&feature=plcp)


* [Kiko, Linaro Engineering VP: ARM, the new mainstream](http://www.youtube.com/watch?v=86Ox3wWOWTw&list=UUAl2MfCBjH5y0nIym0ujHfg&index=7&feature=plcp)


* [Linaro Connect Plenary: Andrea Gallo of ST-ERICSSON](http://www.youtube.com/watch?v=-WnsPPq_A50&list=UUAl2MfCBjH5y0nIym0ujHfg&index=5&feature=plcp)


* [Tim Bird of the Linux Foundation at Linaro Connect](http://www.youtube.com/watch?v=dub3HgezCAs&list=UUAl2MfCBjH5y0nIym0ujHfg&index=2&feature=plcp)

**Interviews:**

* [Linaro Connect: Patrik Klinger Talks Snowball & The Igloo Community](http://www.youtube.com/watch?v=cxYdyEEb9X4&list=UUAl2MfCBjH5y0nIym0ujHfg&index=6&feature=plcp)


* [Tim Bird and David Rusling Chat at Linaro Connect](http://www.youtube.com/watch?v=xgdTzBl-3wQ&list=UUAl2MfCBjH5y0nIym0ujHfg&index=1&feature=plcp)

**Demos:**

* [Ubuntu TV Demo on ARM](http://www.youtube.com/watch?v=tpIFaAxyFGE&list=UUAl2MfCBjH5y0nIym0ujHfg&index=4&feature=plcp)


* [XBMC on ST-ERICSSON's Snowball](http://www.youtube.com/watch?v=14p-WOFAWWw&list=UUAl2MfCBjH5y0nIym0ujHfg&index=3&feature=plcp)

Other video from Linaro can be found on the [Linaro Youtube channel](http://www.youtube.com/user/linaroorg).

Additional highlights from Linaro Connect Q1.12 from the Linaro [Dev Platform](https://wiki.linaro.org/Platform/DevPlatform) and [Multimedia Teams](https://wiki.linaro.org/WorkingGroups/Middleware/Multimedia) include:

By using proper image builds and validation with [LAVA](https://wiki.linaro.org/Platform/Validation/LAVA/Documentation) the Linaro Dev Platform can ensure all images are properly tested as soon they are published. A new proposal for the linux-linaro tree was introduced which will make the linux-linaro tree the single reference for kernel work at Linaro and should always be working against latest upstream RC release.

The Linaro Dev Platform team will now be responsible for packaging and maintenance of all the LT kernel flavors. Responsibilities will include validating the kernel daily with LAVA, and only publishing the kernels (which pass validation testing) to be used by the LEB images (until the new linux-linaro tree is in place).

During both Linaro Connect Q1.12 and the Embedded Linux Conference (ELC), Rob Clark and Sumit Semwal demo'd v4l2+drm buffer sharing with dmabuf as part of the Unified Memory Management work carried out by Linaro and its members.  The Multimedia team worked to improve the validation outlook on LAVA for audio and created test definitions which are related to e2e tests-- which will run on LAVA for Ubuntu and Android, as well as a number of benchmarks (LJT, Realvideo). The first internal demo of the dashboard for Graphics benchmarks with glmark2 was showcased at this Linaro Connect and the [Linaro Graphics team](https://wiki.linaro.org/WorkingGroups/Middleware/Graphics) notes that even at this early stage the dashboard shows great promise to detect graphics related performance regressions. The CMA testing suite on LAVA was also updated and follows the newest versions of CMA patches--Contiguous Memory Allocator - part of the Unified Memory Management effort.

We encourage everybody to use the 12.02 release. The download links for all images and components are available on our downloads page:

[/downloads/](/downloads/)

See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams.

The release details are linked from the “Details” column for each released artifact on the release information:

[http://wiki.linaro.org/Cycles/1202/Release#Release_Information](http://wiki.linaro.org/Cycles/1202/Release#Release_Information)

## Using the Android-based images

The Android-based images come in three parts: system, userdata and boot.
These need to be combined to form a complete Android install. For an explanation of how to do this please see:

[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)

If you are interested in getting the source and building these images yourself please see the following pages:

[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)

[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)


## Using the Ubuntu-based images

The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:

[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)



## Getting involved



More information on Linaro can be found on our websites:
* Homepage: []()
* Wiki: [http://wiki.linaro.org](http://wiki.linaro.org)

Also subscribe to the important Linaro mailing lists and join our IRC
channels to stay on top of Linaro developments:

* Announcements:
[http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)

* Development:
[http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)

* IRC:
#linaro on irc.linaro.org or irc.freenode.net
#linaro-android irc.linaro.org or irc.freenode.net


## Known issues with this release

For any errata issues, please see:
[http://wiki.linaro.org/Cycles/1202/Release#Known_Issues](http://wiki.linaro.org/Cycles/1202/Release#Known_Issues)

Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:

[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)