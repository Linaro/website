---
author: alan.bennett
date: 2011-11-30 21:31:26+00:00
layout: post
link: /blog/hardware-update/lava-at-home/
slug: lava-at-home
title: LAVA@Home
wordpress_id: 965
categories:
- blog
tags:
- Hardware
- LAVA
---

{% include image.html name="IMG_3464.jpg" alt="IMG_3464" %}

I'm currently working on the flexible [LAVA deployment blueprint](https://blueprints.launchpad.net/lava-lab/+spec/flexible-lava-deployment-11.12). This blueprint is about untying our hands (both as developers and administrators) from having to provide Debian packages for our releases. This is especially important our major new dependency, [celery](http://celeryproject.org/), is not available in Debian. The idea is to deploy both production and development releases from [pypi](http://pypi.python.org/) using a mixture of release tarballs and source branches. This way we can do very frequent releases, test new features in isolation (one of the features of the [deployment tool](http://bazaar.launchpad.net/~linaro-validation/lava-deployment-tool/trunk/changes) is an ability to install multiple instances of LAVA on one machine, ideally we'd get an instance for each merge request if we wish so).

The scrip has been improving and is now semi-production (see [TODO ](http://bazaar.launchpad.net/~linaro-validation/lava-deployment-tool/trunk/changes)for known issues) ready. It would be a shame to break production though so I wanted to do some testing before we actually use this. Since instances and global configuration are at odds I needed to make every component instance aware. This was not that hard, most of the things are using _lava-server manage_ (or have been converted to do so) and thus get automatic configuration management for free. Other things, like the dispatcher did not and had to be improved (thanks for the quick patch mwhudson).

With all the pieces aligning I had only one thing left to do. Deploy an instance in a fresh virtual machine, connect it to a board and do some testing! This is something I have carefully avoided as the dispatcher is the most complicated (for practical reasons) components of the LAVA stack and the one that is, how shall I put it, least elegant.

One of the things you will notice is that you need to prepare a_ master image_ according to the [instructions](https://wiki.linaro.org/Platform/Validation/LAVA/Documentation#Creating_a_master_image). This step is not automated and is quite error prone. Everyone ends up with a different master image. While going through the pain of doing this I learned a few interesting things. I learned how to rebuild an arm initrd on intel (copy qemu-arm-static to your rootfs, mount proc+sys and chroot inside, finally invoke mkimage with all the arguments you can read from linaro-media-create (grep for mkimage), yuck!) I learned how to boot from nfs while using initrd (you need nfs-common in your ramdisk, add "ip=dhcp boot=nfs root=/dev/nfs nfsroot=192.168.1.40:/path/to/rootfs" to kernel command line, add insecure_locks to your nfs export line), I finally learned how to edit u-boot boot script (edit the plain text file and run mkimage with different options).

I have finally come up with a rather nice solution. Let me summarize the benefits:

  1. I only need a few megabytes on the SD card for LAVA, the rest can be devoted to testing so a 4GB card is more than enough to test all of our images.


  2. The SD card will not wear out so badly and the critical parts are less likely to be damaged (and are faster to recover too)


  3. The tests cannot harm our master root filesystem. This has happened before and it's something we had to recover from manually.


  4. I don't get duplicate MAC addresses anymore, I can identify each board uniquely once it powers on.


  5. We can experiment with remote booting and other new features


  6. We can script the creation of all of the required components.


  7. Each board could tell LAVA that it has been powered on and ask the system for things to do. LAVA could power down boards to save money and energy while the test queue is empty.


  8. We could put intelligent piece on a board, consistently, so that we don't have to rely on fragile serial port for communication. We could have standard APIs for boards!


  9. We could stop caring if a board is locally attached or behind NAT on the other side of the planet.


The only thing that made my setup different from the one in the lab was remote power control. In the lab we can recover from a failed test by power cycling a board. As long as the boot loader was not damaged we could still regain control. Unfortunately the hardware we used for that is rather pricey and I could not afford it. About a year ago I experimented with USB hubs that could replace expensive server hardware. You see, the USB specification defines that all hubs have an ability to turn a port on and off (it also includes LED control but I have not seen many hubs that actually implement that feature). Sadly none of the hubs I have at home implement this specification correctly. Details differ but technically what they do is turn the port off (it goes away as far as we are concerned) but keeps the power on. The other downside is that most USB hubs don't provide enough power to run a board without additional power brick. That idea faded but now it got back in somewhat other form. An old colleague from Poland built a simple ARM-based device that acts as a USB cable with ... USB control port for power. The board is small (half of the things I have on mine are not needed and are simply there because we reused hardware from some other project). It has a few LEDs thaw we could use for signaling (master image vs test image, recovery, etc). The software that runs on the micro controller is open and you can get the [source](https://launchpad.net/usbpowercontrol) from launchpad. Since I did not need the mini-USB port on my Panda I plugged it to a 10W iPad USB power adapter. I connected the other end to my LAVA machine. The board is nice enough to show up as another serial port, you can echo a single ASCI digit there, the first bit of that digit controls power, the other three control LEDs on the board itself. I can turn my panda off with _echo 0 > /dev/ttyACM0_

So there you have it. I'll post a separate article about the details of the master image and how it can change and improve our workflow. Now it's time to run some tests!
