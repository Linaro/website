---
author: joakim.bech
categories:
- blog
comments: true
date: 2015-07-13 19:05:06
description: Getting a TEE driver into Linux upstream has been the ultimate goal for
  a long time. This blog post will talk about the history, design choices and lessons
  learned when implementing and submitting a generic TEE driver for the Linux kernel.
excerpt: ' Getting a TEE driver into Linux upstream has been the ultimate goal for
  a long time. This blog post will talk about the history, design choices and lessons
  learned when implementing and submitting a generic TEE driver for the Linux kernel. '
layout: post
slug: evolution-of-a-generic-tee-kernel-driver-2
tags:
- Core Dump
- Linaro
- OP-TEE
- Security
- TEE
- TrustZone
title: Evolution of a generic TEE kernel driver
wordpress_id: 8967
---

## **What is TrustZone?**

A [Trusted Execution Environment](http://en.wikipedia.org/wiki/Trusted_execution_environment) (TEE) is a hardware assisted tamperproof secure environment where you can run software that are isolated from the rest of the system, such as Linux and other operating systems. The software for a TEE can be implemented in various ways, the crucial thing is to have hardware support. It could for example be an external co-processor or it could be something directly integrated on the chip. To support the TEE concept, ARM® introduced the TrustZone® technology back in 2003. TrustZone is directly integrated into the processor but also extends throughout the system via the AMBA® AXI™ bus and specific TrustZone System IP blocks. Software needed to have a full TEE environment normally consists of some piece of code running on the non-secure side, such as code running in user space in Linux and a supporting Linux kernel driver. Likewise on the secure side, you need to implement software that are running the Trusted OS.

## **The TEE kernel driver before Linaro**

Back in 2010 when [ST-Ericsson](http://en.wikipedia.org/wiki/ST-Ericsson) was formed as an outcome of the joint venture between ST-NXP Wireless and [Ericsson Mobile Platforms](http://en.wikipedia.org/wiki/Ericsson_Mobile_Platforms) the security department at ST-Ericsson in Lund, Sweden was starting to work with Trusted Execution Environments. The goal was to have a TEE running alongside with Android. The company faced a couple of challenges since most of the engineers were coming from an environment where the primary focus for several years had been on [OSE](http://en.wikipedia.org/wiki/Operating_System_Embedded) (real-time OS by Enea) Most of the development for OSE took place in a Microsoft Windows environment.

I and a colleague got a task of writing the Linux kernel driver for the TEE solution (back then I was working as a contractor for ST-Ericsson). We both had Linux experience so I think it was a natural choice to let us work on it. This first version of the driver [1] was just simply moving data back and forth between user space and the Trusted OS. We were only using read and write calls for all communication, which in hindsight wasn’t a very good choice. Consider that normally when using the write call, input buffers will still remain the same when returning from the call. In our case we modified that data in the kernel before returning to the caller, which feels a little bit strange. The sane choice would have been to use IOCTL from the beginning. This version of the driver was used in the first TEE solution on ST-Ericsson which was named as “TEE v1” depicted below.

{% include image.html name="TEE-blog-image-1.jpg" alt="TEE blog image 1" %}

A choice made early on was to implement the interfaces stated by GlobalPlatform. Back in 2012 there was much activity at GlobalPlatform with recurring “TestFests” taking place as a preparation for TEE qualification. This led us to start thinking about how to solve secure storage and secure time use cases. Secure storage is a bit interesting since the Trusted OS doesn’t have its own filesystem and we didn’t want to add one. We were inspired by the [wpa_supplicant](http://w1.fi/wpa_supplicant) and came up with something called tee-supplicant, which serves the Trusted OS with services not necessarily available direct in the Trusted OS. To support tee-supplicant we needed to make additional changes to the TEE driver, i.e, we needed to open up a communication channel between user space and the Trusted OS. At the same time we had two different versions of the TEE driver, one for TEE v1 (u8500) and one under development for TEE v2 (u8540). A decision was taken saying that we should unify the two drivers to only have and maintain a single driver, this was a good decision! Due to the necessity of implementing all GlobalPlatform APIs for the qualification, merging two drivers and adding support for tee-supplicant the driver was almost completely re-written. Suddenly the driver started to grew in size and also started to become a bit complex. For example we needed sync points (mutexes) for messages going back and forth between the secure side and the non-secure side. A lot of GlobalPlatform related calls and data structures where showing up in the driver. In the end TEE v2 as depicted above was quite stable, but still it wasn’t upstreamed (and unfortunately I cannot find a link to this version).

## **STMicroelectronics maintains the code**

In 2013 the owners of ST-Ericsson decided to dissolve the company. In principle the parts related to the modem went back to Ericsson and the Linux related commitment went to STMicroelectronics. Since the focus at STMicroelectronics wasn’t about mobile, they started to rework the TEE solution intended for use on set-top boxes. By doing so they also made it possible to use the TEE solution on other architectures than standard ARM TrustZone. Once again the TEE kernel driver was changed, not that much this time, but a few notable things worth mentioning are that they finally got rid of the read and write only communication and started to make use of IOCTL’s also. On the timeline we’re now approaching the date when Linaro decided to form Security Working Group (October 2013). After some initial discussions and decision made by Linaro Board we started to work with STMicroelectronics and once again a few of us was working with the old TEE solution that we had been working with in the past.

{% include image.html name="TEE-blog-image-2.jpg" alt="TEE blog image 2" %}

## **TEE kernel driver in OP-TEE**

I believe most of the readers of this blog post know about OP-TEE, but let me just quickly summarize what OP-TEE is. OP-TEE is the outcome of the collaboration between STMicroelectronics and other members of Linaro where the source code originates from the proprietary TEE solution coming from ST-Ericsson. In the preparation for making it publicly available it did undergo extensive changes and cleanup. When it came to the TEE driver, we knew that STMicroelectronics internally where re-writing and splitting up the driver into two drivers, i.e, one generic driver communicating with user space and the backplane and the other driver, called backplane driver which was supposed to sit in-between the generic driver and the Trusted OS. We wanted to make use of their updated driver, but at the same time we also wanted to publish OP-TEE. We decided to take a snapshot of the original driver, clean it up and publish it on [GitHub](https://github.com/OP-TEE/optee_linuxdriver) (between summer of 2014 and February 2015 this is more or less what you could find on GitHub).

## **Someone submits a TrustZone driver to LKML**

In October 2014 Linaro got access to the reworked driver, we started to review it and use it internally. This was the version that we finally intended to upstream! The plan was  to 1) review and test as much as possible on our own, 2) have a kernel maintainer at Linaro have a look at it, 3) then send patches to the kernel mailing list ([LKML](https://lkml.org)) for review. Almost on the same week as we had the plan ready we found out that someone just recently posted a [proposal](http://lkml.iu.edu/hypermail/linux/kernel/1411.3/04305.html) for a generic TrustZone interface in the Linux kernel. Now we basically had two choices, should we ignore that there already was a proposal on the mailing list and send our patches anyways? Or should we contact the one (Javier González) that had sent the patches available on the mailing list and asking for eventual collaboration? We ended up doing the latter. The initial contact with Javier was a couple of weeks before Connect / HKG15. Javier and I started to look into commonalities to see whether is was feasible to merge our implementations. The results of our initial exercise was a document with common APIs, differences and some open questions.

## **A new driver is born**

At Connect we had a technical discussion in the hacking room solely about the kernel driver and what to do next. For that discussion we also invited an engineer that had been working with various TEE solutions for quite a while. We had a really good discussion that was continued by email after Connect. The outcome of the discussion was that OP-TEE’s driver was still too GlobalPlatform and OP-TEE centric even though much work had been done to make it more generic. Also we wanted to incorporate ideas from both OP-TEE and Javier’s patch set into one common solution for a generic TEE (and not only TrustZone) solution. Having that said we started to re-implement the driver taking the good ideas and concepts from the original driver from STMicroelectronics and this time we were also taking into account Javier’s ideas and from others involved in the discussion at the [tee-dev](https://lists.linaro.org/mailman/listinfo/tee-dev) mailing list. The big difference this time is that a lot of functionality has been moved from the kernel driver to user space instead which makes the kernel driver much cleaner compared to previous implementations. Also the generic part of the driver is completely free from GlobalPlatform related code which means that other implementations which are not following GlobalPlatform APIs also should be able to use this driver. The first [patchset](https://lkml.org/lkml/2015/4/17/63) with this new implementation was sent 17th April 2015. I think it was well received and we got some good and constructive feedback. Since then we addressed the comments and we have sent both [v2](https://lkml.org/lkml/2015/4/30/43) and [v3](https://lists.linaro.org/pipermail/tee-dev/2015-March/000074.html) are are currently waiting for feedback from kernel maintainers.

## **Lessons learned**

So, what is the takeaway from this long story about the kernel driver supposed to support Trusted Execution Environments? Well, there are a few things to consider, most important is “**_submit early, submit often”_**. That is the key message from all kernel maintainers. I am pretty sure that if we had submitted patches from the beginning we would have had a TEE driver integrated in the kernel for quite a while now. Likewise I’m also pretty sure that the driver still would had been rewritten and extended when found in the kernel, but I don’t think it would require as many iterations as we have seen for the driver we have been working with. Another thing to consider is that you shouldn’t neglect the importance of talking and getting feedback from engineers outside of your own company. If you’re just working within your own environment and don’t get much feedback from outside, there a big risk that you become blind and eventually miss important details. So basically what I’m saying is that please, realize the importance of upstreaming and please try to convince your authorities where you are working to support you in doing upstream work!

_References / Links_

[1] [https://git.linaro.org/bsp/st-ericsson/linux-2.6.34-ux500.git/tree/drivers/tee](https://git.linaro.org/bsp/st-ericsson/linux-2.6.34-ux500.git/tree/drivers/tee)