---
amazon_s3_presentation_url: https://static.linaro.org/event-resources/elc-openiot-2018/elc-openiot-2018-the-end-of-time-19-years-to-go.pdf
event: elc-openiot-2018
date: "2018-10-22 09:00:00+00:00"
image: /assets/images/content/elc-openiot-europe-2018-placeholder.png
speakers:
  - biography: '""'
    company: Linaro
    job-title:
    name: Arnd Bergmann
title: "The End of Time, 19 Years to Go"
youtube_video_url: https://www.youtube.com/watch?v=8OiTB8qWqXk
---

### The End of Time, 19 Years to Go - Arnd Bergmann, Linaro Ltd

Software that uses a 32-bit integer to represent seconds since the Unix epoch of Jan 1 1970 is affected by that variable overflowing on Jan 19 2038, often in a catastrophic way. Aside from most 32-bit binaries that use timestamps, this includes file systems (e.g. ext3 or xfs), file formats (e.g. cpio, utmp, core dumps), network protocols (e.g. nfs) and even hardware (e.g. real-time clocks or SCSI adapters).

Work has been going on to avoid that overflow in the Linux kernel, with hundreds of patches reworking drivers, file systems and the user space interfaces including over 50 affected system calls.

With much of this activity getting done during 2018, it's time to give an update on what has been achieved in the kernel, what parts still remain to be solved, and how we will proceed to solve this in user space, and how to use the work in long-living product deployments.

### About Arnd Bergmann

Arnd Bergmann works for Linaro as one of the maintainers of the arm-soc tree, through which the platform specific code for ARM based SoCs are merged. As a long-time kernel contributor, he has worked on many CPU architectures and subsystems before that, and his current side interests include fixing the 2038 time_t overflow, removing outdated interfaces in the kernel, and keeping the kernel building in all configurations.
