---
author: op-tee
tags: 
- OP-TEE
title: 'LCU14-302 &#58; OP-TEE Porting and Future Enhancements'
date: 2016-07-04 12:00:00 Z
categories:
- Blog
layout: post
image:
    featured: true
    path: /assets/images/lcu14-302-op-tee-porting-future-enhancements-image.jpg
    name: lcu14-302-op-tee-porting-future-enhancements-image.jpg
---

SWG is porting OP-TEE to ARMv8 using Fixed Virtual Platform. Initially OP-TEE is running secure world in aarch32 mode, but with the normal world code running in aarch64 mode. Since ARMv8 uses ARM Trusted Firmware we have patched it with an OP-TEE dispatcher to be able to communicate between secure and normal world.

{% include media.html media_url="https://www.youtube.com/embed/JViplz-ah9M" %}

--------

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/NUSDUEsiVcHWrt" %}

[LCU14 302- How to port OP-TEE to another platform](https://www.slideshare.net/linaroorg/lcu14-302-how-to-port-optee-to-another-platform) from [Linaro](http://www.slideshare.net/linaroorg)
