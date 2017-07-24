---
layout: post
title:  "Bud17-313 BoF: Device Tree and Secure Firmware"
date:   2017-03-17 12:00:00
categories: Blog
image: /images/posts/bof-device-tree-secure-firmware-bud17-313-image.jpeg
---

{% include media.html media_url="https://www.youtube.com/embed/kbREjQS3moM" %}

Device Tree is well established in the Linux kernel. But since there could be other bootloader(s) and firmware components involved that needs to configure the hardware and thereby also needs to update the Device Tree blobs before passing it to Linux kernel. Therefore we are looking for a well established way for firmware to also make use and modify the Device Tree blobs before handing them over to Linux kernel. With this BoF session we would like to get started a gather ideas etc

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/w10DZhBzHkyykA" %}

[BUD17-416: Benchmark and profiling in OP-TEE ](https://www.slideshare.net/linaroorg/bud17416-benchmark-and-profiling-in-optee) from [Linaro](http://www.slideshare.net/linaroorg)  
**Speakers:** Joakim Bech, Jens Wiklander  
**Track:** Security  
**Session ID:** BUD17-313  
