---
layout: post
title: Standard Temperature Tooling in the Linux kernel
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - Arm
  - Open Source
category: blog
author: linus.walleij
---

With the Linux 5.6 release, it was announced that there is a proper drive temperature driver for disks and solid-state drives with temperature sensors - something that has been in the works for years. So what does this mean? Why is this significant? And how did Linaro play a role?

In this blog Senior Engineer Linus Walleij talks about Linaro’s involvement and how he would like to see things evolve.

### What happened and how was Linaro involved?

It began in August 2018 when I submitted an RFC patch: https://lore.kernel.org/linux-hwmon/20180809222425.17304-1-linus.walleij@linaro.org/
Then a v1: https://lore.kernel.org/linux-hwmon/20180824191514.14938-1-linus.walleij@linaro.org/

I suggested doing SMART temperature readouts only for ATA devices, solving my pet peeve, NAS boxen with one single temperature sensor: the embedded sensor in the harddrive.

It was discovered that the userspace tools doing these temperature readouts had never been quite adequate. The temperature has little meaning for the overall longevity of the device, which is what the SMART-tools are for.

Reading temperatures and dealing with temperature zones is for the kernel.

SCSI maintainer James Bottomley suggested making the feature more generic so that it could alsosupport SCSI drives: https://lore.kernel.org/linux-hwmon/1536949216.3531.35.camel@HansenPartnership.com/

I iterated on this approach a few times up to a v7 version of the patch set in november 2018:
https://lore.kernel.org/linux-hwmon/20181118193729.25278-1-linus.walleij@linaro.org/

Because of the complexities involved, I got stuck at that and the item went to the back of my backlog for a year. Guenther Roeck however liked the idea, and reworked it from scratch and returned
with a patch on december 8 2019: https://lore.kernel.org/linux-hwmon/20191209052119.32072-1-linux@roeck-us.net/

This has been quickly iterated and now is merged to the mainline kernel.

### Why is this signficant?

This provides userspace with a unified interface, HWMON sysfs, to discover, monitor and react to all temperature zones in the hardware, also disks and disk stacks. It removes the need for an external tool and relies on standard temperature tooling. What’s more, the SMART tools needed to be run as root and with this more granular policy users can relax privileges on system temperature monitoring tools. As the kernel now knows about the temperature zone in the disk, the thermal policy engine in the kernel can react to it and monitor disks.

### What does the future hold?

For embedded the next step for me will be to provide parsing code such that hard drives become attached to device tree nodes. We have generic code in place to create thermal zones from device trees. For storage server systems the feature is usable by system monitoring tools starting with the deployment of kernel v5.6.
