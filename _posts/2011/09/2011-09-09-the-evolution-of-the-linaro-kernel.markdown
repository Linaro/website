---
author: deepak.saxena
categories:
- blog
date: 2011-09-09 14:17:05
description: Discusses the changes in the Linaro Kernel
keywords: Linaro, Linux, kernel, ARM,
layout: post
link: /blog/industry-blog/the-evolution-of-the-linaro-kernel/
slug: the-evolution-of-the-linaro-kernel
tags:
- Industry
title: The Evolution of the Linaro Kernel
wordpress_id: 4126
---

In the last few months Linaro has shifted from releasing a kernel every 6 months to releasing monthly kernel snapshots, which allow members and the broader ARM community to have access to an updated kernel in a more timely manner. This is the first step of the evolution of Linaro's kernel process, and over the next several months we will continue to make changes to provide more value to our members and the upstream Linux community.

**The goal of Linaro's kernel process is threefold:**

1. Ensuring that new technology developed by Linaro makes its way into the upstream kernel.org tree.
2. Ensuring that Linaro member's platforms are well supported in the upstream kernel.org tree.
3. Delivering a monthly validated and stable kernel that works on Linaro member platforms.

Historically, the Kernel Working Group's kernel maintainer, Nicolas Pitre, has backported key features from Linus Torvalds' development tree into the prior version of the kernel on a monthly basis. We have also merged in fixes to bugs that we have found through our own testing. The resulting tree has been called **linux-linaro**. For example, Linus' tip is currently on a 3.1 release candidate;  Linaro has backported several features from this kernel to our 3.0-based kernel branch which is available from [git://git.linaro.org/kernel/linux-linaro-3.0.git](git://git.linaro.org/kernel/linux-linaro-3.0.git)

By using an older kernel base (3.0 in the current case) Linaro has provided a level of stability to the Linaro Landing Teams and users who want to develop products. However, bringing in changes from a future kernel version potentially decreases that stability as those changes may not have undergone much testing and will occsaionally conflict with vendor add-ons due to code incompatibilities. From the point of view of Linaro's Working Groups (kernel, power management, graphics, and multimedia) and of cleanup and consolidation work, a kernel that is one version behind is also too old for cutting edge development. In essence, **linux-linaro** today is not meeting the needs of either product builders nor of the upstream-focused WG developers.

To improve upon this, Linaro is making a number of adjustments to its kernel process, which can be summarized as:

1. Building Continuous Integration for the kernel
2. Supporting the Stable Kernel effort
3. Less backporting of features into linux-linaro
4. Maintaining a stable Android branch

**Continuous Integration** The cornerstone to providing added value in the kernel process is Continuous Integration (CI). By performing automated build and runtime testing through Linaro’s Automated Validation Architecture (LAVA), we can catch issues in kernel trees as soon as patches are committed to them. The CI system allows any kernel tree to be continuously built, booted and tested on Linaro member platforms. Results will be publicly available; if a commit breaks a kernel build, we will catch it early and notify upstream kernel maintainers to either fix the problem or revert the offending patches. And we will expand validation to cover basic enablement features which is where we are currently finding most regressions.

**Linaro will be actively testing a number of trees, including:**

* Linus Torvald’s mainline tree
* The "for-next" branch of the arm-soc tree, a key consolidation point for for various SOC trees
* [Russell King’s ARM tree](http://ftp.arm.linux.org.uk/git/gitweb.cgi?p=linux-2.6-arm.git;a=summary), which contains core ARM architecture changes
* Stephen Rothwell's linux-next tree
* **linux-linaro** itself

Testing this set of trees enables us to quickly catch mainline-affecting issues. By testing often and early, we can ensure that member platforms are always working upstream, and substantially decrease the maintenance burden for internal BSP trees. In addition, this work will provide a validated baseline with improved ARM support and testing that member’s engineering teams can use for development of new features and SOC ports.

**Stable ARM Kernels**
The concept of a "stable kernel" has existed for Linux for a long time. With the move to a rolling release in the 2.6 kernel series, each released version of the kernel has seen a number of stable updates. The 3.0 stable tree is currently maintained by Greg Koah-Hartman; the latest stable version available is today is linux-3.0.4. The patch policy for this tree is quite stringent: patches must be small and no new features are allowed. This tree is quite successful in the x86 space, but has seen less interest from other architectures, ARM included.  In changing our kernel process, **linux-linaro** will function more like the upstream stable kernel tree;  in other words, built upon a released kernel version, tested across member hardware, and including backported bugfixes that make it a better starting point for a team building a product. We will also be actively involved in getting outstanding bugfixes submitted to the -stable tree ourselves, helping the upstream ARM community build a process around it.

**Less Backporting**
Because we want linux-linaro to be "stable first", we will no longer actively backport all ARM-related features from the tips of mainline and other relevant upstream trees. Backports will be considered on a case-by-case basis, and we expect to deliver a monthly release of linux-linaro which has improved stability, bugfixes and testing on member ARM hardware compared to the linux kernel version it was based on (today linux-3.0).

Linaro’s Working Groups will continue to focus on getting their work merged into upstream trees.  The WGs will also take advantage of the CI infrastructure to also test their in-development topic trees. This will ensure that they do not unexpectedly cause issues on member platforms, and will better prepare the code for mainline submission.

**Android Branch**
As well as testing upstream kernels, Linaro will maintain a merged tree consolidating AOSP, Linaro and member patches, providing a solid foundation for Android product development. The following diagram describes the flow of versions:

{% include image.html name="Android-Upstream-kernel-picture2.jpg" alt="Android upstream kernel image"%}

John Stultz of the KWG currently maintains our merged [linux-linaro-android tree](http://git.linaro.org/gitweb?p=people/jstultz/android.git;a=summary).

**The Future**
We will introduce the changes above in the coming months and continue to evaluate the uptake of the linux-linaro tree along with the impact of the CI system. We will be using the linux-linaro and linux-linaro-android trees internally as the starting point for our member specific Landing Team trees and LEBs. Over time, it is possible that linux-linaro and Greg K-H's stable kernel effort merge, leading to the monthly release of a stable kernel including key ARM bugfixes. In the long term, if results from the CI effort lead to a mainline kernel which is significantly more stable on ARM, we may experiment with generating Platform deliverables directly from that mainline kernel, providing a simple way to validate Working Group kernel code without the need for backporting.

Finally, Linaro is considering supporting the Long Term Supported Linux Kernel program, which elects a certain kernel version to be supported over multiple years. We'll keep you informed of progress on all these fronts, and we invite you to help spread word of Linaro's kernel plans in your organization.