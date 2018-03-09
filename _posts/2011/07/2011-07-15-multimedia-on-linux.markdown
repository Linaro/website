---
author: kiko
categories:
- blog
date: 2011-07-15 16:01:50
description: Discussion of Multimedia on Linux challenges and Linaro.org's work with
  Multimedia on Linux
keywords: Linux, Linaro, Multimedia, OpenMax
layout: post
link: /blog/industry-blog/multimedia-on-linux/
slug: multimedia-on-linux
tags:
- Industry
title: Multimedia on Linux
wordpress_id: 3393
---

Multimedia is one of the most important reasons Linux is used on ARM: mobile phones, tablets, digital TV stations and desktop all fundamentally require multimedia playback and recording. It is also one of the most complex and poorly-understood areas on Linux, stemming from the inherent challenges in providing high performance multimedia, IP restrictions on technology and content and the impressive rate at which new formats and capabilities have been developed to match increasing network and processing power.

Linaro’s Multimedia Working Group is focused on addressing the major challenges silicon vendors and OEMs face when supporting multimedia functionality on ARM devices. During the 1105 cycle the MMWG ran a number of initial projects on different problem areas:

• Software codec optimization, in particular using NEON

• gstreamer-openmax and OpenMAX core consolidation

• Low-power audio, focusing on ALSA and pulseaudio

• Multimedia validation tools, allowing better understanding of dynamic system behavior

These initial efforts identified a number of deeper challenges in the area of multimedia. First, while OpenMAX IL has been advertised and adopted as a standard solution for hardware and software codec integration, it does not provide sufficient definition to allow implementation of an efficient multimedia stack, leading vendors to further extend the specification with platform-specific solutions. Second, while there is indeed much work
happening in the software codec optimization area, this work is scattered across vendor repositories and vendor sites; there is no coordinated effort to bring together development in this area and allow the ecosystem to build a truly golden set of codecs. Finally, while pulseaudio itself turns out to be reasonably optimized for power consumption, the ALSA group has been developing a userspace API to allow higher-level control of a device’s audio modes, known as ALSA Use Case Management, and adoption across ARM vendors has yet to pick up, leading to reduced functionality and increased fragmentation where vendors might implemented their own solution. More information on ALSA UCM has been published by Slimlogic at [http://www.slimlogic.co.uk/2009/02/alsa-use-case-manager/]()http://www.slimlogic.co.uk/2009/02/alsa-use-case-manager/

In this cycle the Multimedia WG has started tackling those wider problems, starting with a mini-summit focused on establishing the current state of affairs, which was run in Austin, TX earlier in June. Present at the mini-summit were representatives from Linaro members, OpenMAX and NVidia and others.  Kurt Taylor, MMWG Lead, produced a  detailed set of minutes and actions out of the summit that are now available at [http://tinyurl.com/austin-mmwg-minutes](http://tinyurl.com/austin-mmwg-minutes);  this content is worth sharing within your organization to validate conclusions and indicate future directions of work.

One of the key findings out of the mini-summit was that, while there are indeed significant shortcomings in the specification, the OpenMAX group itself has been studying this area and is interested in a wider discussion around solutions. We have been invited to present our feedback formally to the group and will participate in the OpenMAX face-to-face meeting to run in Q3 2011. There was significant controversy around how much work Linaro would lead in this area, as it was perceived this could undermine the OpenMAX consortium’s work; we have agreed to coordinate with Khronos on any design and development work we execute. Next steps in this area beyond the Khronos engagement are collecting feedback from Google on their plans for OpenMAX going forward, since up to now it has been the API through which vendors have provided access to their components.

On the software codec front, we have agreed to host a community around NEON optimization; this will initially consist of a mailing list and database of software codecs, recording authorship, license, source code location and subjective quality of implementation. Mans R., who has implemented a number of NEON versions of codec algorithms, was present and provided good input on what status certain implementations are in, and where other optimization work has been done. We also had the luck of counting with the participation of Darrell C., libjpeg-turbo author, and will work on integrating it in Android and Ubuntu, and furthering the NEON optimization work started in it.

During the mini-summit Rob Clark presented on the multimedia-related impact of work being run in the Linaro Unified Memory Management SIG; this has the potential to greatly simplify the software integration of codecs, camera and display, allowing for a native zero-copy implementation using standard kernel interfaces.  ALSA UCM was also discussed, with both Slimlogic and Android representatives discussing current plans for integration in Stagefright and Pulseaudio; it is likely that a small library to support UCM functionality in the userspace frameworks would accelerate its adoption, and discussion of what that library would be (and what license it would be provided under) is also recorded. Linaro will also put effort into providing a set of standard UCM configurations for the devices which we directly support, allowing UCM to work out of the box on new hardware where the software stack has been prepared for it.

The MMWG’s Public Plan Review session will be held during the second half of July; please invite your multimedia experts to analyze the roadmap and discuss solutions and related work happening elsewhere.