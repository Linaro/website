---
author: alan.bennett
date: 2011-11-30 21:44:03+00:00
layout: post
link: /blog/lava-master-images/
published: false
slug: lava-master-images
title: LAVA master images
wordpress_id: 974
categories:
- blog
---

There is a small partition you need to put on your SD card. The partition I've used is 64MB but it could well be 16 or less. This place is used to pull in a kernel and the initrd. Both can be (alternative) provided by tftp but since LAVA does not manage tftp just yet I wanted to avoid this step. There is a specially crafted boot script that knows where to get the root filesystem from. This means that each board has a different boot image. Sadly this is the case for the moment, while we could easily provide those options remotely there are two important pieces that need additional configuration (mac address is one of them)

The board gets a consistent, non-cloned, MAC address on the network card. This is a new feature as it seems all our boards get the same address if simply cloned from a single SD card (go figure!). I tested this on panda and at least there there is no good place to keep the hardware address. We've had issues with duplicate UUIDs generated based on, hold it, time and mac address. That's right, time was not set and mac was all the same everywhere. No more!

The card can store a _LAVA identity profile_ for the board. This is actually not implemented yet but will be very significant soon. This means that we can differentiate between boards directly in the boot loader. We can also look it up at runtime (when Linux has booted) if required.

I can keep the rootfs on my home machine, away from the fragile SD card. The rootfs can be reverted to a snapshot on each boot if required. This is even more important as we grow as I want LAVA to be able to generate master root filesystems for **all** supported boards automatically. The process of adding a new board can then be simplified to downloading a small SD card image (that LAVA generates) and copying it to the board. LAVA will build (or download if that is faster) a master image. No more random images, no more cryptic partition setups.

We can support netblock device that some people tell me is much better than NFS for this use case. With some additional magic we could keep a single immutable image that would fuel any number of boards.

We can start experimenting with putting the boot loader remotely. This would simplify our "master image" that we need to maintain on the card to just the _LAVA identity profile_. The boot loader, the kernel and the root filesystem would be then downloaded remotely (in stages). With some clever engineering we could actually store the identity file in some unused blocks of the card (I'm sure there is a place where nothing needs to look, the identity is just an UUID after all, we could squeeze it in a crafted header if we really wanted). We could then use the entire SD card to test verbatim images of any kind (android and ubuntu alike).

I can script the creation of the rootfs used by LAVA. It's much easier once file systems and partition alignment are out of the equation. It essentially boils down to getting an arbitrary released rootfs + hwpack. Running a small script against both on your host (so it's something that LAVA can do, thanks to celery). The process has to modify a few places, namely network configuration, u-boot script, and initial ram disk.


