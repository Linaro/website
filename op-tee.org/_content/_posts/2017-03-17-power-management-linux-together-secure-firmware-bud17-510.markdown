---
layout: post
title:  "Power management in Linux together with secure firmware – BUD17-510"
date:   2017-03-17 12:00:00
categories: Blog

image: /images/posts/power-management-linux-together-secure-firmware-bud17-510-image.jpeg

---

{% include media.html media_url="https://www.youtube.com/embed/MNvTBGNQRDY" %}

On a device it’s not uncommon to share power domains between secure and non-secure side, for example between a TEE and Linux kernel. With that comes some challenges that needs to be taken care of and that is the theme for this presentation. We’ve identified a couple of challenges when it comes to power management and security. One case is when sharing power resources (clock, power domains, …) between secure and non-secure devices. Another is to make a proper shutdown and boot-up sequence (CPU on/off etc) and finally there has been some concerns regarding the latency when communicating with PSCI. In this session we would like to highlight those and discuss what the short and long term plans are.


{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/xIRI2KnLUplfd9" %}

**Speakers:** Vincent Guittot, Joakim Bech  
**Track:** Security  
**Session ID:** BUD17-510  
