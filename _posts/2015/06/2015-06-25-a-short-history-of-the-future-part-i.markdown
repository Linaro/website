---
author: david.rusling
categories:
- blog
date: 2015-06-25 14:33:55
description: Overview of how Linaro began and why it was created. David Rusling discusses
  some of the challenges in the beginning and what was done to overcome them.
excerpt: Overview of how Linaro began and why it was created. David Rusling discusses
  some of the challenges in the beginning and what was done to overcome them.
layout: post
link: /blog/a-short-history-of-the-future-part-i/
slug: a-short-history-of-the-future-part-i
tags:
- arm
- Linaro
- Linux
- Linux on ARM
- software
title: A short History of the Future - Part I
wordpress_id: 8807
---

When the idea that became Linaro came to us in late 2009, the world was (or at least appeared to be) a much simpler place. The technical problems were more immediate, more concrete and easier to grasp and understand. The ARM parts of the Linux kernel were a mess, the GNU toolchain for ARM was not competitive (or even particularly stable).  The social problems were also eminently tangible. It was clear that ARM’s business model generated fragmented and (sometimes even lackadaisical) open source efforts. The original Linaro membership was split between companies that were wildly enthusiastic about open source and companies that were skeptical at best. Some even believing that to donate code into projects was equivalent to giving your fiercest rivals your secrets.

In 2010, Android was more of a promise than a reality. Apple’s iPhone was setting the standards and the iPad was showing the world that the PC era was over. Having lived through the transition between minicomputers and PCs, it was a dazzling time to be in computing. What was (and still is) clear to me is that open source, together with ARM’s IP licensing business model, is a clear advantage in a commercial competitive marketplace.

Five years later, several things are clearer now:

  * Open Source is a huge advantage, but using it in your business is hard
  * Collaboration is not only a good habit, it makes business sense
  * Startups are fun, but so are established businesses
  * There are always new technical challenges


**Open Source is Challenging**
During Linaro’s working life, I have seen companies succeed and companies fail at open source. One failure case intrigues me, and that is the case where a company uses open source code but is not a good open source citizen. In other words, they never get around to upstreaming SoC support. Apart from irritating the open source communities it is a very inefficient use of engineering resource. For example, product kernel engineers are in a treadmill of forever running to catch up with the main kernel tree as it relentlessly moves forward (a new release of the kernel happens every 6 weeks or so). Worse than that the code was, when it was released, all stuffed into /arch/arm/platform-foo and not integrated with the rest of the kernel. In short, in 2009 the ARM kernel was a mess.

In early 2011 Linus had had enough and exploded - “Gah. Guys, this whole ARM thing is a f*cking pain in the ass” [1]. This shocked the Linaro members and we rallied them to “do something about it”. What we did was simple, we created and supported an ARM architecture maintainership that, together, set standards and worked steadily to improve the whole Linux kernel codebase and the quality of platform support. Within a year Linus was describing the ARM community as much improved. In a recent Google+ blog post [2], he said “The ARM situation has just improved tremendously over the last several years. It used to be a major pain to me, it has gone to almost being entirely painless.”. Quite a change.

There is still plenty to do in the kernel though. The ARMv8 kernel is separate from the rest of the ARM support. This was deliberate as we wanted a clean start. Now, however, is the time to fold up at least the ARMv7 architecture support as it too will benefit. There is still further work to do on consolidating out of tree code from manufacturers; in particular the Android kernel is still effectively, in many places, a fork of kernel.org.

In many ways Android has not helped encourage good engineering habits. Mobile phones make a huge amount of money (billions of US dollars) and the approach of getting the product out ahead of rivals and clearing up problems later is all too prevalent. Even worse is the attitude that publishing code is somehow enabling your competitors. In my view this is simplistic - in reality most code is not at all special. Contrast this with the enterprise market, where the approach is to not only take from upstream but then to maintain kernel and software releases for a very long time. This, by the way, is also the approach of the Google Chrome OS. Android is not standing still though:, Google ATAP’s (Advanced Technologies and Projects) Project ARA shows that we can and should enhance and extend Androids HAL (Hardware Abstraction Layer) to reduce unnecessary variance between the platform BSPs (Board Support Packages).



**Collaboration is a Good Habit**
In the early days of Linaro I used to compare ARM’s partnership, the companies that license ARM IP and build products, with pirates. Massively competitive with each other they would, nonetheless band together against the (British) navy if it dared attack their home base. You can all guess who I mean when I talk of another CPU architecture as the common enemy.

Getting these pirates into a room so that they could have sensible conversations about joint engineering was a feat in itself. Some areas were completely out of scope for Linaro when it first started. One of these was power management. I even recall one member representative walking out of a meeting shouting and ranting that this was the wrong thing for Linaro to do. Don’t worry, they’re still a member and, not 6 months after the rant, that company proposed that we form a Power Management engineering team. It started with cpu_freq and cpu_idle, but that team is still running, still working on power management for ARM. Only now it is working on energy aware scheduling and thermal management.

Aside from the kernel, the other obvious place to collaborate was on the core GNU tools: GCC, GDB and more. Initial activities were based on improving the performance of the ARMv7 code the tools produced, as well as improving the quality and robustness of those tools. This mostly means continually optimizing, testing and fixing regressions. Looking around at frameworks for testing, we could not see a single tool or framework that fitted what we needed to do and so we evolved our own (known as LAVA). This enabled us to use ARM hardware from our members to continually test the software that we’re creating and modifying.

The main steering body for Linaro, the Linaro Technical Steering Committee soon settled down and directed and supported the Linaro engineering teams. It is, and remains, a very relaxed, yet functional, open forum where members support Linaro and each other. That is not to say that it is not tough; our members give us a hard time when they need to.

It became clear though that there was much more to do than fix the kernel, especially as ARM started to penetrate more markets and as they released the ARMv8 architecture.



**Next Episode**
In the next installment I talk about how Linaro continued to evolve, adding members and forming segment groups.

_References_

  1. [http://article.gmane.org/gmane.linux.ports.arm.omap/55060](http://article.gmane.org/gmane.linux.ports.arm.omap/55060)
  2. [https://plus.google.com/+LinusTorvalds/posts/TyGZ8se6hhn](https://plus.google.com/+LinusTorvalds/posts/TyGZ8se6hhn)