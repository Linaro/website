---
author: david.rusling
categories:
- blog
date: 2011-06-09 14:47:44
description: Linaro Kernel upstreaming efforts.
keywords: Kernel, Linux Kernel, ARM, Linaro, ARM architecture, embedded linux conference
layout: post
link: /blog/kernel-upstreaming/
slug: kernel-upstreaming
title: Kernel Upstreaming
wordpress_id: 3391
---

Recently, Linus Torvalds and senior kernel maintainers have been complaining that the consolidation within the ARM Linux code base is not happening quickly enough. As an indication of the scale of this problem, each new kernel release sees about 70,000 new lines of ARM code, whereas there’s roughly 5,000 lines of new x86 code added.

One of the primary goals of Linaro is consolidation, and the [Linaro Technical Steering Committee (TSC)](/about/tsc/) agreed that Linaro should do something practical to support any ARM Linux Kernel initiative that improves this situation. Since then, our position on this subject is that it needs to be the primary mission of the Linaro kernel working group to work with the Linux kernel community towards solving this issue. The first opportunity to talk to a large number of these was at the Embedded Linux Conference in San Francisco in April. Various ideas were discussed, but there was consensus that ‘something should be done’. We also made this a key theme of the Kernel working group sessions at the Linaro developer summit (LDS) in May in Budapest.

The contents of the ARM part of the Linux kernel tree (arch/arm) should contain only code that is ARM or ARM SoC core architecture. Looking at the current contents, that means that code should be moved out to more general Linux kernel areas and grouped by purpose. Moving code does not, in itself, generate consolidation (although it is easier to see the patterns when the code is one place rather than in many platform subdirectories).   

There is also some near-term consolidation opportunities around interrupt handling and hardware timer support. In Budapest, we agreed that we would start the work now, with the subarchitecture maintainers in the room volunteering to move code and Linaro’s new Kernel working group lead, Deepak Saxena agreeing to take on as much work as the Kernel WG could handle.

 Organising ourselves to get this work done also needs thinking about. Just as every computer-science problem seems to be solvable by an additional level of indirection, every maintainership problem seems to be solvable by an additional level of git tree. This will be created as input to the new version 3.0 Linux kernel tree. In this case, there will be an experimental git tree for staging the consolidation work will be created. This new git tree will have at least one branch per participating ARM subarchitecture. Maintainers of participating ARM sub-architectures will send pull requests to a group of maintainers for this new git tree. A merge of all the branches will be sent to Stephen Rothwell's -next tree, but the branches will be individually pushed to Linus Torvalds.

The membership of this overall ARM subarchitecture maintainers group will start with Arnd Bergman, Nicolas Pitre, and Marc Zyngier, with help from Thomas Gleixner. Additionally, Russell King will have write access to this tree. The plan is to start small and evolve to handle the load. Please note that this new maintainership regime is not limited to Linaro, but neither is it mandatory for non-Linaro ARM subarchitectures. So far, the following subarchitecture maintainers have signed up - ARM, Atmel, Freescale, Qualcomm, ST Ericsson, ST Microelectronics and TI. 

Moving code out into the general Linux kernel implies owners for that code and this highlights a couple of problems. Firstly, we need more ARM knowledgeable maintainers to take ownership of the code once it has moved. Typically the ARM maintainers are more focused on a particular platform than a subsystem; moving to support generic subsystems would see them merging code from competitors and the various ARM companies need to be comfortable with that. Secondly, we have to grow the total number of ARM maintainers.

 Of course, this, whilst a good start, does not solve all problems immediately, but this new effort will be very helpful, and the parallel ARM consolidation efforts should also help reduce the size of the ARM tsunami of Linux kernel code. It signals to Linus and the senior kernel maintainers that we have taken the problem seriously and are starting to tackle it in a meaningful way. We are taking a typical open source approach of solving immediate problems and believe that, along the way, this group will further evolve to fit the Linux kernel’s needs in general and ARM’s needs in particular.