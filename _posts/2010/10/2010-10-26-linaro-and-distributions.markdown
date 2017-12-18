---
author: david.rusling
date: 2010-10-26 18:50:00+00:00
layout: post
link: /blog/community-blog/linaro-and-distributions/
slug: linaro-and-distributions
title: Linaro and Distributions
wordpress_id: 4107
categories:
- blog
tags:
- Community
- arm
- distributions
- gcc
- Linux
---
Linaro works in upstream open source projects, ensuring that the ARM architecture and embedded platforms are well supported. Along the way, the ARM community is learning how to be more open and collaborative, both within the open source community and between ourselves. It's a very interesting, worthy of a future blog entry; watching ARM and its partners adapting themselves to align with an open source based platform world.

The difficulty with upstream working is the lag between upstream work, upstream stable releases and inclusion in distributions and, therefore, products.This is particularly critical for code bases with long development cycles. GCC, for example, makes one major release per year, in spring, with several bug fixing updates. That is, new features come out once a year and, any code donated before the end of 2010 will come out in the 4.6.0 branch made around April 2011. Worse still, the 4.6 branch will not be used by distributions until it is considered to be stable. This will be 4.6.1 and will not be used by distributions until Autumn 2011. In other words, any code donated into GCC before end of 2010 will not be used by a distribution until Autumn 2011. Of course, other code bases have different release cadences. The Linux kernel is creating new point releases roughly every couple of months.

When Linaro started, I thought that distributions would want the six monthly 'baseline' release. That is, a set of built and co-tested binaries produced at the end of each 6 monthly development cycle. This turns out (mostly) not to be true. What they are much more interested in are Linaro's consolidation trees. These are code trees based on a project's current stable release but with additional features that have been fed upstream. An example would be GCC 4.5 plus upstream patches giving better ARMv7A Thumb-2 code performance. The baseline releases are still important; they are used to underpin the development in the next cycle and they are starting to be used by Linaro's members as they develop new platforms.

<!-- more -->

One danger of consolidation trees though, is that they might hold patches that will never go upstream. This is why the 'rule' in Linaro is that a patch must be accepted upstream before it can go in a consolidation tree. Although, quite what accepted means varies by code base and engineering practice. It is also worth noting that, in the process of being merged upstream, patches may get reworked.This creates some engineering drag, in that consolidation trees need engineering effort in order to maintain and test them. This stability and support is as important as the distributions are, effectively, treating Linaro consolidation trees as they would upstream open source projects.

One trend I have noticed over the last 12 months, is that Linux distributions, particularly those from an embedded heritage, are trying to move to the latest stable version of upstream projects. In particular, the core toolchains and the Linux kernel. This aligns well with Linaro's approach, and also makes consolidation trees easier to provide. The amount of engineering effort needed to maintain a consolidation tree three releases behind the leading edge of an open source project is much greater than maintaining one that is only one release behind. As an example, maintaining a 2.6.35 consolidation tree is relatively light engineering effort, whereas maintaining a 2.6.32 based consolidation tree would be much harder.

Why do distributions not want to take binaries? I think that this is about timing and build systems. Timing wise, it is much easier to align with a monthly release than with a six monthly release. Distributions started taking Linaro's toolchain output in the middle of this cycle (and will take the next release in the middle of the next cycle). Waiting until the end of this cycle would have delayed adoption by 3 to 6 months.

There are many build systems being used in Linux today, to name but a few; the Linux Foundation supports Open Build System (OBS), OpenEmbedded, Gentoo, Red Hat packaging system (RPM), Debian and Ubuntu's Launchpad. Whilst they are all different, they have similar aims. They allow the inclusion of upstream stable releases to be imported into the build system and be modified by patch sets. This allows distributions to track the upstream projects, whilst maintaining a high degree of control over bug fixes and features. They often incorporate bug and work tracking systems as well as validation features. Each distribution is, therefore, deeply wedded to its build system, relying upon it to make on time, feature rich product releases.

Even if all of the world's Linux distributions used the same build system, there would still be the complexity of choice, as each distribution chooses the technologies on which to base their release,which versions of the upstream projects and the build options used to build the release. All of this mitigates against distributions taking binary outputs from Linaro and leads them, instead, to treat Linaro as an upstream project, taking Linaro's consolidation trees where this enhances their products.

In summary, the interaction between Linaro and the various distributions happens via upstream open source projects and the consolidation trees that it creates and maintains.
