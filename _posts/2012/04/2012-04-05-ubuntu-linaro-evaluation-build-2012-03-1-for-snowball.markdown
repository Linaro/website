---
author: fathi.boudra
date: 2012-04-05 14:55:56+00:00
layout: post
link: /blog/releases-blog/ubuntu-linaro-evaluation-build-2012-03-1-for-snowball/
slug: ubuntu-linaro-evaluation-build-2012-03-1-for-snowball
title: Ubuntu Linaro Evaluation Build 2012.03.1 for Snowball
wordpress_id: 1492
categories:
- blog
tags:
- Releases
---

This is an intermediate release due to problems with HDMI output around the 2012.03 release date.

The 2012.03-1 Ubuntu Desktop release from Linaro and Igloo Community is now available for download at

[http://releases.linaro.org/12.03.1/ubuntu/leb-snowball/](http://releases.linaro.org/archive/ubuntu/images/)

Please follow the instructions there for installing the image on microSD card.

You can also get an image that can be flashed to the internal memory from

[http://igloocommunity.org/download/images/2012.03.1/](http://igloocommunity.org/download/images/2012.03.1/)

The images are compressed to save download time. Please see the Flashing howto for installation instructions for the prebuilt image for the internal memory:

[http://www.igloocommunity.org/support/Flashing_howto](http://www.igloocommunity.org/support/Flashing_howto)

The Linaro release page can be found at

[https://wiki.linaro.org/Cycles/1203/Release](https://wiki.linaro.org/Cycles/1203/Release)

Since this release was delayed, the applicable test results at

[https://docs.google.com/spreadsheet/ccc?key=0AjEaTwrvj1bidHVUOGwzR19jYXZFUlNOR2R5Sm5EOHc](https://docs.google.com/spreadsheet/ccc?key=0AjEaTwrvj1bidHVUOGwzR19jYXZFUlNOR2R5Sm5EOHc)

will be in the 12.03.1 row.

Sources for all free components in the release are available from the Igloo Gitweb:

[http://www.igloocommunity.org/gitweb/](http://www.igloocommunity.org/gitweb/)

You can also get the sources, as well as updates, from the Snowball PPA repository:

[https://launchpad.net/~igloocommunity-maintainers/+archive/snowball](https://launchpad.net/~igloocommunity-maintainers/+archive/snowball)

A full list of bugs fixed for this release is available at

[https://launchpad.net/igloocommunity/+milestone/2012.03](https://launchpad.net/igloocommunity/+milestone/2012.03)

and

[https://launchpad.net/igloocommunity/+milestone/2012.03-1](https://launchpad.net/igloocommunity/+milestone/2012.03-1)

Main supported features


  * Based on Linux 3.3.0 and the Linaro Ubuntu desktop file system


  * HDMI/DVI-D display support


  * Graphics acceleration with the Mali 400 GPU


  * Bluetooth support


  * Ethernet and Wireless connectivity


  * GPS support


  * Sensors support (accelerometer, magnetometer, gyroscope, barometer)


  * microSD card support


  * Audio playback (see known limitations)


  * Limited USB OTG host functionality


Features to be included in future releases


  * Multimedia acceleration


  * Better USB OTG host support


Known limitations

  * USB OTG host mode is working only in a limited fashion:
  
[http://www.igloocommunity.org/support/Work-around_for_USB-Host_issue](http://www.igloocommunity.org/support/Work-around_for_USB-Host_issue)


  * Pulseaudio by default does not work well with the Snowball audio
driver, resulting in choppy playback. There is a work-around described
in the comment #1 of
[https://bugs.launchpad.net/igloocommunity/+bug/939593](https://bugs.launchpad.net/igloocommunity/+bug/939593)


  * Bluetooth seems to be working one-way only:
[https://bugs.launchpad.net/igloocommunity/+bug/974272](https://bugs.launchpad.net/igloocommunity/+bug/974272)


Please report any further issues with this image at the Igloo Community launchpad project. For details about it please see:

[http://www.igloocommunity.org/support/Bug_tracking](http://www.igloocommunity.org/support/Bug_tracking)
