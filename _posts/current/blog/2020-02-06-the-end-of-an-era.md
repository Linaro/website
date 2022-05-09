---
layout: post
title: The end of an Era
description: In this article, Arnd Begrmann discusses the end of an era with the
  Linux-5.6 window, a project which has kept him busy for nealt 6 years. Read
  more here!
date: 2020-02-06 09:09:55
image: /assets/images/content/2038_image.jpg
tags:
  - Linux Kernel
  - Arm
  - Open Source
  - Software
category: blog
author: arnd.bergmann
---

With the linux-5.6 merge window, a project ends that has kept me busy for nearly six years: preventing the “Epochalypse” by changing every single instance of a 32-bit time_t in the kernel to a type that does not roll over on 2038-01-19.

While both John Stultz and I had been thinking about and prototyping partial solutions even earlier, the year 2014 is when we started discussing more openly in Linaro and the wider kernel community about what needed to happen. In a team effort, John started rewriting the core timekeeping support of the kernel, working his way out, while I would work my way down from the outside, starting with file systems and then system calls and device drivers with the goal of getting this done by the end of the year.

### Spreading the Load

As chronicled on [lwn.net](https://lwn.net/Kernel/Index/#Year_2038_problem), it turned out to take a bit longer. In order to address over 1000 files referencing time_t, timeval or timespec as of linux-3.15, we recruited help from a number of places.

The Outreachy program was a great resource for getting a lot of simple changes in drivers done, while internship candidates learned about contributing to the mainline kernel. Tina Ruchandani was my first intern and contributed 25 patches for the y2038 work in 2014/2015. For the 2015/2016 round, Deepa Dinamani joined as the second Outreachy intern and ended up implementing some of the most important bits all the way until the end with hundreds of patch submissions.

Within Linaro’s Kernel Working Group, I assigned simple driver conversions to new assignees from member companies to get them started on contributing to the upstream kernel while getting the conversion done one driver at a time, before moving on to more review intensive work in the kernel. Baolin Wang worked on converting real-time clocks and the audio subsystem, Firoz Khan’s first contribution was to rewrite the system call tables across all CPU architectures and many others contributed to device drivers.

### Yak Shaving

Usually, getting y2038 fixes included was really easy, as maintainers are generally happy to take an obviously correct bugfix that they don’t have to implement themselves. However, some cases turned out to be much more time and labor intensive than we had imagined.

Converting the VFS code to use 64-bit inode timestamps took countless rewrites of the same patches, first from me and then from Deepa who finally succeeded. We wanted to avoid having to do a “flag day” change, which is generally considered too invasive and risks introducing regressions, and we wanted to minimize the changes for existing 64-bit users and for existing 32-bit applications. Doing this step-by-step change however turned out to add a lot of complexity as well. In the end, Deepa worked out a process of many non-invasive changes over multiple merge windows, followed by [an automated conversion using coccinelle](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=95582b0083883). The same series also fixed unrelated issues in the way some file systems generated their timestamps which reviewers had complained about.

This is an effect that can be observed a lot in kernel development: when you work on a simple bugfix, there is a good chance that development or review finds a much larger issue that also wants to be addressed, at which point it becomes near impossible to get the simple change merged without also addressing the wider problem. Issues that we addressed along the way include:

- Changing the time functions away from getnstimeofday() to ktime_get() and similar conversions addressed the bugs with leap seconds, with time going backwards from settimeofday() as well as some particularly inefficient code.
- File system timestamps are now checked for overflow in a consistent way, and interpreted the same way on 32-bit and 64-bit architectures, extending the range to at least year 2106 where possible.
- The system call tables are now generated from machine readable files, and all architectures support at least the set of standard system calls that are available to newly added architectures.
- Converting all the architectures led to the decision to [clean out architectures that are no longer actively used or maintained](https://lwn.net/Articles/748074/)
- David Howells contributed the statx() system call that solves passing 64-bit timestamps along with many other features that are not present in stat().
- The handling for 32-bit compat tasks on 64-bit kernels is more consistent with the native system calls now, after a lot of the compat syscalls were rewritten to be shared with time32 support for 32-bit architectures. Most importantly, the compat ioctl() handling is now completely reworked and always handled by the driver rather than a centralized conversion function that easily gets out of sync.

### Endgame

With all the VFS and system call changes out of the way during early 2019, the kernel was basically working, but a number of smaller issues still remained. In the summer I set out to make a list of everything that was still missing and revisited patches I had done in the previous years. Instead of creating the list I ended up writing the remaining ~100 patches: alsa and v4l2 were still lacking ABI changes, the NFS implementation and a few other file systems still needed changes, and there were still users referencing the time_t type. [The resulting branch](https://git.kernel.org/pub/scm/linux/kernel/git/arnd/playground.git/log/?h=y2038-endgame) was basically ready for linux-5.4, and with the usual bug fixes and testing this has now all but made it into the ongoing linux-5.6 merge window. The last patch in the series hides the traditional time_t definition from kernel space and removes all the now unused helper functions that use it to prevent new references from getting merged.

### Fixing User Space

After the time64 system call ABI was finalized in linux-5.1, work on using this in the C libraries got a lot more serious. The release of musl-1.2 is now imminent and will provide time64 for all newly compiled code. Adelie Linux is already migrating to this version and has [a list of known issues](https://wiki.adelielinux.org/wiki/Project:Time64). I expect the bugs to also get fixed in upstream projects soon. The first preview release of a time64 Adelie Linux is [available for testing now](https://distfiles.adelielinux.org/adelie/1.0/iso/rc1/). Most other distributions based on musl are likely to do the same conversion over the next months, depending on their release cycles.

For glibc, work is still ongoing, the plan at the moment is to move over to 64-bit time_t as an option in glibc-2.32 later this year. However, the default is still a 32-bit time_t, and as glibc based distributions tend to have a larger number of packages, there is a very significant effort in rebuilding everything in a coordinated way. Any library that exposes an interface based on time_t must be recompiled along with all applications and other libraries using this interface, so in the end the result is typically a completely incompatible distribution. The Debian “armhf” port for ARMv7 CPUs is an obvious candidate that will have to go through this transition, but I expect most of the other distributions on 32-bit CPUs to stay with 32-bit time_t and then stop support before this becomes a problem.

So far it is looking good for the distro port, as most of the y2038 problems have already been found by the various BSD Unixes that changed over years ago (thanks guys!), so a lot of the remaining problems are either Linux specific, or in applications that have never been ported to anything other than Linux. I expect that once we get into larger scale testing, we will find several sets of problems:

- Bugs that got introduced by an incorrect conversion to the time64 interfaces, breaking existing source code regardless of the time_t definition, like the regressions that are inevitably caused by any larger change and hopefully found quickly. For instance, we broke the sparc architecture port multiple times, but then also found ancient sparc bugs from a previous large-scale change that are now fixed.
- Problems of an incorrect or incomplete conversion, breaking 32-bit software after the conversion to 64-bit time_t, e.g. a format string printing a time_t as a ‘long’ type rather than a ‘long long’, software that mixes the libc data types with direct calls to low-level kernel interfaces like futex(), or source packages that contain outdated copies of kernel headers such as linux/input.h or sound/asound.h.
- 32-bit software that works correctly with 64-bit time_t until 2038 but then still fails because of an incorrect truncation to a ‘long’ type when it defines its own types rather than using the ones from system headers.
- Anything that uses fixed 32-bit representation for time_t values remains broken on both 32-bit and 64-bit applications. This often involves on-disk or over-the-wire data formats that are hard to change.

The biggest challenge will be to find and update all the devices that are already being deployed without the necessary bug fixes. The general move to 64-bit hardware even in deeply embedded systems helps ensure that most machines only run into the last set of problems, but 32-bit hardware will be deployed for many years to come, and will increasingly run on old software as fewer developers are motivated to work on them.