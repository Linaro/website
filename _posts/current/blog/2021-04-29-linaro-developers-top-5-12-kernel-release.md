---
layout: post
title: Linaro Developers top 5.12 Kernel release
description: In this article, we discuss the 5.12 kernel release, which was
  published this week & featured Linaro yet again in the top five contributors
  to the Linux kernel.
date: 2021-04-29 01:02:09
image: /assets/images/content/30921180788_34ce2cd5f8_c.jpg
tags:
  - Linux Kernel
  - Kernel Release
  - open source
  - Software
  - Arm
category: blog
author: linaro
---
The 5.12 kernel release was published this week and featured Linaro yet again in the top five contributors to the Linux kernel (as highlighted in [LWN.nets development statistics](https://lwn.net/Articles/853039/)). 

{% include image.html path="/assets/images/content/5.12-most-active-employers.png" alt="List of 5.12 Most Active Employers" %}

In addition to several Linaro engineers being featured in the top twenty contributors to the 5.12 release by changesets and lines changed (which we will talk about later), Linaro also features in the lists for bug reporters (Arnd Bergmann) and Test and Review credits (Linaro assignee Linus Walleij). Code is only accepted into a code base once it has been reviewed and only a few people have the skills to review a core change and make a decision as to whether it can be incorporated or not. For Linaro to be featured in these lists highlights the significant role we play in detecting issues and limiting regressions. 

{% include image.html path="/assets/images/content/kernel-5.12-bug-reporters-and-test-and-review-credits-.png" alt="Tables showing 5.12 Most Active Bug Reporters and Test and Review Credits" %}

As we mentioned earlier, several Linaro engineers feature as top contributors to the 5.12 kernel release. We thought it would be a good opportunity to highlight these engineers and find out what they have been working on. The contributions highlighted in this blog are only a subset of all the work Linaro does on the kernel but help showcase the role we play in maintaining and developing the Arm software ecosystem.

{% include image.html path="/assets/images/content/kernel-5.12-most-active-developers.png" alt="List of 5.12 Most Active Developers" %}

#### **Lee Jones - Fixing Compiler and Doc build warnings throughout the tree**

For the past three out of four releases Lee Jones was the top contributor for changesets. He continues to work to fix compiler and doc build warnings throughout the tree, enabling maintainers and testers to increase the warning level when test building their associated subsystems, leading to more issues being caught earlier on during the development process. When this work started, there were more than 20k level-1 (W=1) issues residing in the kernel. Now there are less than 4k. Lee will continue this work until there are as close to 0 as feasibly possible.

#### **Arnd Bergmann - Deleting support for obsolete architectures**

Arnd Bergmann was top of the list for “lines changed” as a result of deleting support for several obsolete architectures and their associated drivers. The kernel supports around 70 32-bit Arm platforms and around 40 64-bit Arm platforms today, more than those for all other CPU architectures combined. A platform is usually a family of SoC designs from a single manufacturer that evolved from one original design, and each platform has between one and over 300 individually supported board designs. In most release cycles, support for one or two new platforms gets added, which can be for new chips that are still unreleased, or for older hardware that is gaining community support through its existing users.

However, not all platforms are supported in the long run, as the developers that initially added the support may move on to other projects, or the product line gets discontinued even before it makes it into users’ hands. In the 5.12 cycle, Arnd found 14 individual platforms that had not seen any notable work for five years or more, and asked the maintainers if those were still needed. Some of these are in active use and just work without changes, some platforms have seen renewed interest as a result of the query, and six platforms turned out to be completely abandoned by both users and developers. Removing these helps ensure that the code base remains relevant and that any ongoing maintenance is done on platforms that still have users.

The coming 5.13 cycle will include preliminary support for two new Arm platforms, the Apple M1 based on Armv8.5, the Nuvoton WPCM450 based on an Armv5TE core and a new Cortex-M7 based STM32 microcontroller, along with several other new SoCs getting added to the supported platforms.

#### **Viresh Kumar - Removing oprofile kernel code and taking OPP API to the next level**

Viresh Kumar is ranked third for the “the lines changed” column by virtue of the amount of code for the 5.12 cycle. He worked on a variety of topics, the most noticeable of which are the removal of oprofile kernel code and taking the OPP API to the next level.

Oprofile is a statistical profiler for Linux systems, capable of profiling all running code at low overhead. Initially it used the kernel’s OPROFILE interfaces but has been using the perf interfaces for some time now. The OPP (Operating performance Points) framework is a helper library that provides a table of voltage-frequency pairs (with some additional information) for the kernel. Kernel frameworks, like cpufreq and devfreq, use these OPP tables to perform DVFS for the devices.

During the review of a trivial patch by Viresh Kumar, Linus Torvalds [suggested](https://lore.kernel.org/lkml/CAHk-=whw9t3ZtV8iA2SJWYQS1VOJuS14P_qhj3v5-9PCBmGQww@mail.gmail.com/) to remove the Kernel OPROFILE support as the "oprofile" user-space tools don't use it any more, and haven't in a long time. User-space has been converted to the perf interfaces instead. Viresh took the suggestion to the next logical step and got rid of the kernel OPROFILE support.

Viresh also added a new API to the OPP core, dev_pm_opp_set_opp(), after which the OPP core can be used to change OPPs of any device type now, not just CPUs. This required major changes to the structure of the OPP core.

#### **Bjorn Andersson - Introducing the first set of driver support for Qualcomm Snapdragon 8cx Compute Platform (SC8180x)**

Bjorn Andersson made it to the list of most active developers by changed lines through the introduction of a first set of driver support for the Qualcomm Snapdragon 8cx (aka SC8180x) laptop/compute platform. The largest pieces were global clock controller and top level mode multiplexer (TLMM) pinctrl, the latter included reworking the DeviceTree binding document to reduce duplication between similar Qualcomm platforms. This set of driver patches is the basis for the work done in the [aarch64-laptops project](https://github.com/aarch64-laptops/debian-cdimage), which serves the purpose of running standard Linux distributions on laptops such as the Lenovo Flex 5G.

#### **Srinivas Kandagatla - Adding SoundWire Audio support for Qualcomm Snapdragon 865 platform**

Srinivas Kandagatla is in the list of top twenty contributors by changed lines largely due to the support he added for SoundWire in the Low Power Audio Subsystem (LPASS) found on the recent Qualcomm platforms, such as the Qualcomm Snapdragon 865.  It enables support for external codecs like the Qualcomm Aqstic smart speaker amplifier (WSA881x), Qualcomm Aqstic audio codec (WCD937x/WCD938x) or digital microphone, when using the upstream Linux kernel on Qualcomm devices such as the Qualcomm Snapdragon 865 mobile hardware development kit.

In addition, Srinivas made changes to the ASoC component core driver to improve bitfield handling in an attempt to make drivers' code more readable and less error prone, see newly added functions  snd_soc_component_read_field() and snd_soc_component_write_field().

Thanks to the relentless efforts from its Linux kernel developers, Linaro continues to play a critical role in maintaining and improving the Arm software ecosystem.

To find out more about the work Linaro does upstream, check out our [Upstream Maintainership project](https://linaro.atlassian.net/wiki/spaces/UM/overview) where we track all our contributions. Or [contact us](https://www.linaro.org/contact/) to find out more!