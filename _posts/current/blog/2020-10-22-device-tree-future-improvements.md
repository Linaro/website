---
related_project:
  - DTE
layout: post
title: Device Tree - Future Improvements
description: Device Tree - Future Improvements
date: 2020-10-23 11:08:40
image: /assets/images/content/devicetree-logo_vertical-devicetree.png
tags:
  - Device Tree
  - Arm
  - Linaro
  - Linux Kernel
related_projects:
  - DTE
category: blog
author: joakim.bech
---
## What is Device Tree?

Device Tree is a data structure used to describe hardware. Instead of hard coding every detail of a device into an operating system, aspects of the hardware can be described in a data structure which is then passed to the operating system at boot time. 

## Device Tree - Future improvements

Device Tree has been around for a long time and is a well known technology for engineers working with embedded devices. One of the key goals with Device Tree was to separate specific settings related to a specific SoC into separate configurations, in a way that would make it possible to run a generic kernel (Linux kernel) and provide different Device Tree Blobs (the name that refers to the compiled form of a Device Tree configuration, DTB for short) for different hardware configurations. Originating from [Open Firmware](https://www.kernel.org/doc/html/latest/devicetree/usage-model.html#history), Device Tree was picked up by the Linux kernel roughly fifteen years ago, as an effort to try and sort out what at the time was a rather [messy](https://lkml.org/lkml/2011/3/17/492) configuration of Arm devices. Today, you will find hundreds of DTS-files in the Linux kernel tree for all sorts of devices coming from a plethora of SoC manufacturers. In Linux kernel v5.8 there are 1833 *.dts files, which shows the Device Tree approach of doing device configuration in Linux kernel has been pretty successful.

With this clearly being such a well established technology and having configurations for so many devices, is there any problem with it? Our embedded devices seem to boot up fine using this approach. As with other technologies, things are constantly evolving and a technology that was well designed and fully working a couple of years ago, might be in need of updates to fit better with the systems which are available and being used today. This is what Linaro, along with its members, have seen with respect to the Device Tree -- it’s not just about evolving a working technology to work with future systems, it’s also about improving usability, enhancing security, etc., which are always ongoing efforts.

## Enter firmware

In a typical setup the DTB (Device Tree Blob) files are provided to the Linux kernel by a boot loader, such as U-Boot. However, U-Boot is more or less in the same situation as the Linux kernel. i.e., there is a need for a device configuration for U-Boot also. It doesn’t stop there either, boot loaders such as U-Boot and Linux kernel are almost always last in the boot chain. Today it’s not uncommon to see other components running before both U-Boot and Linux kernel. On Armv8-A systems you run some ROM-code (can be based on Trusted Firmware-A, BL1), a first stage boot loader (TF-A, BL2) and TEE’s (like OP-TEE). These firmware components use far less device configuration, but there is still a need to read device configuration information in these firmware components also. We’ve also seen that it’s not uncommon for these components to runtime modifications to the Device Tree in memory. It could change a value, add a node, remove a node and so on (think the “[chosen](https://www.kernel.org/doc/Documentation/devicetree/bindings/chosen.txt)” node).

It is important to pinpoint that firmware isn’t just a boot thing. Some boot components, like the secure monitor and TEEs, are firmware that run all the time alongside the main operating system. Still these are not entities running “on their own”, but rather they are vital parts of the entire and coherent system. i.e., all components must have knowledge about each other. For example, take a memory carve-out that the TEE needs. The Linux kernel must in some way get notified that the TEE has taken a chunk of memory. Today this happens via Device Tree. If that didn’t take place, then the Linux kernel would have no clue that someone else is using a chunk of memory and eventually would try to use it.

## A fragmented community?

When a firmware or boot loader engineer would like to use Device Tree in their firmware, what should they do? Use the DTS (Device Tree File Types) files in the Linux kernel? Patch those and upstream the changes made? Or copy existing DTS-files, make modifications and save them locally in that tree? Unfortunately there is no clear answer to that and we see a mix of these strategies employed. This is a bit unfortunate, since developers in the worst case would need to edit just as many DTS-files as there are copies of it. The ones who are doing that are the “good citizen engineers”. However, it seems more common that engineers just update the DTS-file in the project they are working on and forget about the rest. Maybe they don’t even know where all the DTS copies reside?

In short, the Arm embedded community has, without realizing it, solved one problem (the “Arm Linux mess” in the Linux kernel), but in doing so has created another problem, i.e., a fragmented Device Tree ecosystem. This means that engineers and system architects have to deal with questions like: Where are the DTS files I need to change? How can we ensure the Device Tree configuration is in sync? How should we pass DTB between firmware components and the main OS? How can we ensure the integrity of the DTB in memory? How can we detect runtime modifications to the DTB in memory? How do we know that the runtime modifications follow the rules? What are the rules? How should we write bindings working across software projects?

## The train has left the station?

A fair question to ask is whether there actually is a need to synchronize DTS files? Maybe there isn’t most of the time, as long as the component itself can do what it is supposed to do and then can handover whatever the next runnable expects. Likewise without DTS we would have had the same problem to address, just in another way. Having said that, I’d personally prefer having it all nicely packaged at a single location for a couple of reasons. It makes it simple to find and easy to share and re-use already existing DT configurations when starting a new (firmware-) project. For security reasons it would help a lot to have it all in a single place, since it’d be easier to apply common security schemas in various firmware components.

As an exercise to see what it would take to compile DTB(s) from a single DTS source, we took the iMX8MQevk device and looked up the dts-files for it in U-Boot and the Linux kernel. The root dts file, “imx8mq-evk.dts” is fairly populated with various configurations and it also includes “imx8mq.dtsi”, which in turn includes a couple of h-files. These files exist both in U-Boot and in the Linux kernel. i.e., nothing is shared between the projects. At first glance they look “similar”. However, when running a diff-tool, it’s immediately clear that there are lots of differences and the differences affect many different areas. Without expertise in all these areas it’s quite a daunting task to try to come up with correct merge decisions. i.e., the likelihood of breaking something is pretty high, which in turn could take quite some time to sort out, since the compile, flash, boot-up turnaround time isn’t negligible. So, even in focusing our efforts only on a single device this turns out to be a pretty complex and challenging task. We should also remember that we were using a combination of two stable git tags, one in U-Boot and one in the Linux kernel. In reality, there could be as many combinations as there are branches and tags in each of the git trees.

Considering that there are more than 1800 dts-files in the Linux kernel and more than 1100 dts-files in U-boot, and that both projects are fast moving in terms of code changes. Add to the equation the other firmware projects starting to use Device Tree and I think it’s fair to say that trying to merge all dts files to a common project/git is an impossible utopia, i.e., the train has left the station a long time ago. Maybe for a new SoC it’d be possible to do something about it, but for existing devices it seems to be game over.

## A turtle race

The things discussed in this article to this point are just a few of the questions that Linaro is working with members and external contributors on the Device Tree Evolution project to try and address. As probably everyone can appreciate, addressing questions like these is not an easy task. It will affect a lot of projects, git trees, build systems, regression testing setups, and there are many people affected both directly and indirectly by any changes that might be proposed. The technical aspect of it is pretty challenging, since the decisions cannot be made by a single community, instead decisions have to be made across different communities and here we’re not talking about small projects. We’re talking about projects like the Linux kernel, U-Boot, Trusted-Firmware, AOSP, TEEs, Xen, KVM etc. On top of this already challenging task there are the normal politics that take place in one way or another in most communities. Internal disagreements within a community, disagreements between different projects and communities, etc.

Over the years there have been countless discussions around Device Tree, discussions taking place at mailing lists, conferences, meetings between maintainers, meetings between consortiums, companies and so on, so it’s not a problem that has gone unnoticed. Still the impression seems to be that little is actually happening, why is that?

For the discussions that I’ve personally been part of, people often seem to share a common view of the problems. However, for every single question raised, there are often many answers and often also, many new questions raised by that proposed approach. How can there be so many answers? Consider the number of combinations you would end up with simply by considering: hardware capabilities, hardware constraints, software to use, software configurations, and different use cases within configurations. You will recognize how quickly it becomes overwhelming to consider all use cases and combinations. A subject matter expert in one area might give a perfectly acceptable answer for their use cases, but that same answer could be a showstopper for another engineer working with other use cases. This is not a new nor unique problem and it happens all the time within projects, but there you would typically have a maintainer being able to give the final say. What is unique with Device Tree is it affects multiple projects, multiple maintainers with multiple combinations of hardware and software (configurations).

Linaro is working with many SoC vendors and we have maintainers in the projects we’ve been discussing in this article. Since Linaro is a neutral player in the Arm ecosystem, we believe that Linaro is a perfect organization to address challenging problems like the ones described here. We organize and run meetings and discussions. We propose work that we believe would improve the Arm ecosystem.

## So, what should we do with the Device Tree?

From a security perspective we believe that there is more we can do. If we would have had a single DTS and single DTB shared by all components, then life would have been pretty easy. But as concluded, after discussing and investigating the “common repo” for Device Tree, it looks like we have to see what can be improved from a security perspective when we use Device Tree as we’re using it today. At best the Device Tree (DTBs) are protected with signatures. However, that doesn’t protect against successful runtime attacks taking place after the signature has been verified. We’ve seen that [Fault Injection](https://en.wikipedia.org/wiki/Fault_injection#Hardware_implemented_fault_injection) attacks have become a mature attack vector and therefore we should try to step up the security a notch. It could be anything from doing best practice when it comes to software mitigations, to measured boot where you compute a running hash of the firmware, to runtime integrity verification. Here we have challenges with Device Tree Overlays and other ways to modify Device Tree in runtime. We’ve been debating whether we shall suggest “Device Tree Security Profiles”, which could range from no security to the highest level of security where all the bells and whistles are enabled.

Another thing we’ve discussed is how to deal with the runtime modifications and the handover of Device Tree when the DTB is in memory and passed between firmware. Right now it seems a bit ad-hoc and it would be good to document a consistent approach for how that should be done.

At the Jira [page](https://projects.linaro.org/projects/DTE/) for the [Device Tree Evolution](https://www.linaro.org/projects/#DTE) project you will find these two topics in addition to +10 other areas that we’re currently working on. If you’re interested in Device Tree, we urge you to join the Device Tree Evolution project by starting to attend the meetings taking place twice a month.

**Author: Joakim Bech, Distinguished Engineer, Linaro**

Joakim is currently a Distinguished Engineer at Linaro and has been a Linux user for more than 15 years where he spent most of the time in his professional career working with security on embedded devices. Joakim started up the Security Working Group in Linaro in 2013 and was the lead for that team until 2020. Before joining Linaro he had various roles such as architect, team leader and development engineer.

For more information on Linaro and the work we do, do not hesitate to [get intouch](https://www.linaro.org/contact/)!