---
author: linaro
date: 2010-06-03 21:26:00+00:00
layout: post
link: /blog/towards-linaro-10-11/
slug: towards-linaro-10-11
title: Towards Linaro 10.11
wordpress_id: 4112
categories:
- blog
tags:
- arm
- launchpad
- Linux
- release
- ubuntu
---

> "Any intelligent fool can make things bigger and more complex... It takes a touch of genius - and a lot of courage to move in the opposite direction". - ** Albert Einstein **

## A little history

{% include image.html name="arm.jpg" class="small-inline" alt="Arm Logo" %}

Perhaps a little known fact is that well over [15 billion](http://www.arm.com/about/company-profile/index.php) chips have been shipped using ARM's technologies, [1.3 billion](http://www.arm.com/about/newsroom/26746.php) in the last quarter of 2009 alone and as the Internet goes truly mobile this is set to sky rocket. ARM have sold over 600 processor licenses to more than 200 companies and 12 of the top 20 semiconductor companies use their technologies. ARM based devices really are everywhere. In contrast, Intel have shipped just [3.3 billion](http://www.extremetech.com/article2/0,2845,2363643,00.asp) to date. Renowned for their low power consumption and high performance, ARM based devices really do seem to be the holy grail of computing but why is it that Intel continues to dominates the desktop, laptop, netbook and server market?


## Fragmentation


Developing for ARM devices isn't without its problems. There are a lot of companies all working independently on producing their own products, often duplicating effort. Kernels, boot loaders, and to a lesser extent middleware are being worked on in isolation with little in the way of standards and a common direction. This is scary for those who are used to working in the Intel world where one kernel and one boot loader will pretty much work on all compatible devices. To really push ARM devices into the standard spaces Intel currently enjoys, something needs to be done.


## Ubuntu's Linux on ARM initiative

{% include image.html name="ubuntulogo.png" class="small-inline" alt="Ubuntu Logo" %}
Canonical, creators of the renowned Ubuntu distribution, and ARM saw the need to rally around an effort to produce a modern, full-featured Linux distribution tailored for ARM devices. Together, starting in 2008, Canonical and ARM took on the task of bring [Ubuntu to ARM platforms]().

<!-- more -->

Release 9.04, codenamed "[Jaunty Jackalope](https://wiki.ubuntu.com/JauntyJackalope/ReleaseNotes)" was the first Ubuntu release supporting Freescale's iMX51 and Marvell's Dove platforms. This distribution was further refined in the 9.10 [Karmic Koala](https://wiki.ubuntu.com/ARM/KarmicReleaseNotes) release and 10.04, [Lucid Lynx](https://wiki.ubuntu.com/ARM/LucidReleaseNotes) even added support for a third ARM platform, TI's [Beagle Board](http://beagleboard.org/). With a completely redesigned user interface, a web based office solution and many [more improvements](), Lucid is a magnificent release; however there is still a need for a more consolidated effort. This is where [Linaro](/) fits into the story.


## What is Linaro?

{% include image.html name="linaro-logo-web.png" class="small-inline" alt="Linaro Blog Post Logo Image" %}
Linaro is an initiative undertaken by ARM, Canonical and partners with the task of improving the state of the whole Linux on ARM ecosystem. It brings together the vast talents of the open source community and ARM's wealth of experience in the electronics industry to work on key and game-changing projects. It will work in the various upstreams where possible and provide engineering, technical and guidance support for a wide and diverse set of problem area's. Linaro will not just help other projects, there will also be a clear set of deliverables which will culminate Linaro's efforts into regular 6 monthly engineering releases, starting this November.


## Release Objectives


So this is the area which gets me the most excited. As the release manager for Linaro I am responsible for making sure each and every release captures exactly what the essence of Linaro is, **consolidation**, **collaboration**, **improvement** and **robustness**. Each of these qualities are goals for the Linaro releases and to that end our first release, 10.11, will contain all of these in abundance. Building upon the already successful Linux on ARM effort, Linaro will utilize Canonical's [Launchpad](http://www.launchpad.net/) framework including bug management, code hosting and blueprints. Just some of the high-level highlights are below. I'll leave the other Linaro team members to blog the details about their teams efforts later.




  1. Help standardize the industry on common kernel versions and features.


  2. Improve debugging and performance analysis at the kernel level.


  3. Bring power management and performance improvements including boot speed reduction.


  4. Promote and implement device-tree's on ARM hardware.


  5. Provide test 'heads', whole vertical software stacks and distributions, to show what can be done on top of Linaro.


  6. Explore integrating telephony right into the distribution.


  7. Improve the state of graphics acceleration.


  8. Provide QA and validation harnesses to ensure anything built with Linaro is of the highest standard.


  9. Offer performance analysis and suggestions on how to improve.


  10. Supply a whole host of development, archive and image management, and distribution creation and customization tools.


And much, much more. A full list of blueprints which capture what we are trying to achieve can be found on the [Linaro wiki](http://wiki.linaro.org/Linaro1011/)


## Get Involved


For more information on the Linaro initiative please see the official [website]() and the [wiki](http://wiki.linaro.org). We have [mailing lists](http://lists.linaro.org) and a [Launchpad project page](http://www.launchpad.net/linaro) and I invite you all to come and participate in this exciting and ground-breaking venture.


## What next?


So whats next? Well, the famous words of Albert Einstein that opened this post are most relevant here. We are the Genius's trying to make ARM development both easier and simpler. So with courage and a bit of luck, Linaro will succeed in bring Linux and ARM to a whole new level.
