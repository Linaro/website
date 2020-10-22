---
layout: post
title: Device Tree - Future Improvements
description: "Over the years there have been countless discussions around Device
  Tree. It is not a problem that has gone unnoticed. Still the impression seems
  to be that little is actually happening, why is that? Linaro are working with
  many SoC vendors and we have maintainers in the projects discussed in this
  article. Since Linaro is a neutral player in the Arm ecosystem, we believe
  that Linaro is the perfect organization to address challenging problems like
  the ones described within this blog. "
date: 2020-10-22 10:59:59
image: /assets/images/content/devicetree-logo.webp
tags:
  - Device Tree
  - Arm ecosystem
  - Linaro
  - Linux Kernel
related_project:
  - DTE
category: Blog
author: joakim.bech
---
# Device Tree - Future improvements

**Enter firmware                                       	        1
A fragmented community?	                                2
The train has left the station	                        2
A turtle race	                                                        3
So, what should we do with the Device Tree?	4**

Device Tree has been around for a long time and is a well known technology for engineers working with embedded devices. One of the key goals with Device Tree was to separate SoC specifics into separate configurations in way that would make it possible to run a generic kernel (Linux kernel) and provide different Device Tree Blobs (the name that refers to the compiled form of a Device Tree configuration, DTB for short) for different hardware configurations. Originating from [Open Firmware](https://www.kernel.org/doc/html/latest/devicetree/usage-model.html#history), Linux kernel picked up Device Tree roughly fifteen years ago as an effort trying to sort out the at the time rather [messy](https://lkml.org/lkml/2011/3/17/492) configuration of Arm devices. As of today, you will find hundreds of DTS-files in the Linux kernel tree for all sorts of devices coming from a plethora of SoC manufacturers. In Linux kernel v5.8 there are 1833 *.dts files, which shows that the Device Tree way of doing device configuration in Linux kernel has been pretty successful.

So, with this being a well established technology and configurations for lots and lots of devices, is there any problem with it? Our embedded devices seem to boot up fine using this. But, as with all other technologies, things are constantly evolving. A technology that was well designed and fully working a couple of years ago, might be in need for updates to fit better into the systems that we are running today. This is what Linaro (with its members) have seen with respect to the Device Tree. Also, it’s not only about evolving a working technology to work with future systems, it’s also about improving usability, enhancing security etc, which is an always ongoing effort.

## Enter firmware

In a typical setup the DTB files are provided to the Linux kernel by a boot loader, such as U-Boot. However, U-Boot is more or less in the same situation as the Linux kernel. I.e., there is a need for a device configuration for U-Boot also. It doesn’t stop there, boot loaders such as U-Boot and Linux kernel are last in the boot chain.  Today it’s not uncommon to see other components running before both U-Boot and Linux kernel. On Armv8-A systems you run some ROM-code (can be based on Trusted Firmware-A, BL1), a first stage boot loader (TF-A, BL2) and TEE’s (like OP-TEE). These firmware components use far less device configuration, but there is still a need to read device configuration in these firmware components also. We’ve also seen that it’s not uncommon that these components do runtime modifications to the Device Tree in memory. It could change a value, add a node, remove a node and so on (think the “[chosen](https://www.kernel.org/doc/Documentation/devicetree/bindings/chosen.txt)” node).

It is important to pinpoint that firmware isn't just a boot thing. Some boot components like the secure monitor and TEE’s are firmware that runs all the time alongside the main operating system. Still these are not entities running “on their own”, instead they are vital parts of the entire and coherent system. I.e., all components must have knowledge about each other. Take a memory carve-out for example that the TEE needs. The Linux kernel must in some way get notified that the TEE have taken a chunk of memory. Today this happens via Device Tree. If that wouldn’t take place, then the Linux kernel would have no clue that someone else is using a chunk of memory and eventually would try to use it.

## A fragmented community?

When a firmware or boot loader engineer would like to use Device Tree in their firmware, what should they do? Use the DTS files in Linux kernel? Patch those and upstream the changes made? Or will they copy existing DTS-files, make modifications and save them locally in this tree? Unfortunately there is no clear answer to that. There is a bit of a mix of both strategies. This is a bit unfortunate, since developers in the worst case would need to edit just as many DTS-files as there are copies of it. The ones doing that are the “good citizen engineers”. However, it’s more than often that engineers just update the DTS-file in the project they are working on and forget about the rest. Maybe they don’t even know where all the DTS copies reside?

In short, the Arm embedded community has without realizing it, solved one problem (the “Arm Linux mess” in Linux kernel), but at the same time created another problem, i.e., created a fragmented Device Tree ecosystem. This means that engineers and system architects have to deal with questions like, where are the DTS files that I need to change? How can we ensure that the Device Tree configuration is in sync? How should we pass DTB between firmware components and to the main OS? How can we ensure the integrity of the DTB in memory? How can we detect runtime modifications to the DTB in memory? How do we know that the runtime modifications follow the rules? What are the rules? How should we write bindings working across software projects?

## The train has left the station?

A fair question to ask is whether there actually is a need to synchronize DTS files? Maybe there isn’t most of the time. As long as the component itself can do what it is supposed to do and then can handover whatever the next runnable expects. Likewise without DTS we would have had the same problem to address, just in another way. Having said that, I’d personally prefer having it all nicely packaged at a single location for a couple of reasons. Simple to find it, easy to share and re-use already existing DT configurations when starting a new (firmware-) project. For security reasons it would help a lot to have it all in a single place, since it’d be easier to apply common security schemas in various firmware components.

As an exercise to see what it would take to compile DTB(s) from a single DTS source we took the [iMX8MQevk](https://www.nxp.com/design/development-boards/i-mx-evaluation-and-development-boards/evaluation-kit-for-the-i-mx-8m-applications-processor:MCIMX8M-EVK) device and looked up the dts-files for it in U-Boot and the Linux kernel. The root dts file, “imx8mq-evk.dts” is fairly populated with various configurations and it also includes “imx8mq.dtsi”, which in turn includes a couple of h-files. These files exist both in U-Boot and in the Linux kernel. I.e., nothing is shared between the projects. At first glance they look “similar”. However, when running a diff-tool, it’s immediately clear that there are lots of differences and the differences affect many different areas. Without expertise in all these areas it’s quite a daunting task to try to come up with correct merge decisions. I.e., the likelihood of breaking something is pretty high and that in turn will take quite some time to sort out, since the compile, flash, boot-up turnaround time isn’t negligible. So, even with focusing only on a single device this turns out to be a pretty complex and challenging task. Then we should also remember that we were using a combination of two stable git tags, one in U-Boot and one in the Linux kernel. In reality, there could be as many combinations as there are branches and tags in each of the git trees.

Considering that there are more than 1800 dts-files in the Linux kernel and more than 1100 dts-files in U-boot and that both projects are fast moving in terms of code changes. Add to the equation the other firmware projects starting to use Device Tree, then I think it’s fair to say that trying to merge all dts files to a common project/git is an impossible utopia, i.e., the train has left the station a long time ago. Maybe for a new SoC it’d be possible to do something about it, but for existing devices it seems to be game over.

## A turtle race

The things discussed in this article until now are a few of the questions that Linaro are working with members and external contributors on the [Device Tree Evolution](https://www.linaro.org/projects/#DTE) project. As probably everyone can understand, addressing questions like that is not an easy task. It affects lots of projects, git trees, build systems, regression testing setups and there are many people affected both directly and indirectly by changes that are proposed. The technical aspect of it is pretty challenging, since the decisions cannot be made by a single community, instead decisions have to be made across different communities and here we’re not talking about small projects. We’re talking about projects like the Linux kernel, U-Boot, Trusted-Firmware, AOSP, TEEs, Xen, KVM etc. On top of this already challenging task there is also the normal politics that takes place in one way or another in most communities. Internal disagreements within a community, disagreements between different projects and communities.

Over the years there have been countless discussions around Device Tree, discussions taking place at mailing lists, conferences, meetings between maintainers, meetings between consortiums, companies and so on, so it’s not a problem that has gone unnoticed. Still the impression seems to be that little is actually happening, why is that?

For the discussions that I’ve personally been part of, people often seem to share a common view of the problems. However, for every single question raised, there are often many answers and often also lots of new questions. How can there be many answers? Consider the amount of combinations you can end up with depending on hardware capabilities, hardware constraints, software to use, software configurations and different use cases within configurations, it simply becomes quite overwhelming to consider all use cases and combinations. So, a subject matter expert in one area might give a perfectly acceptable answer for his use cases, but that same answer can be a showstopper for another engineer working with other use cases. This is not a new nor unique problem as such, this happens all the time within projects, but there you typically have a maintainer being able to give the final say. What is unique with Device Tree is that it affects multiple projects, multiple maintainers with multiple combinations of hardware and software (configurations).

Linaro are working with many SoC vendors and we have maintainers in the projects we’ve been discussing in this article. Since Linaro is a neutral player in the Arm ecosystem, we believe that Linaro is a perfect organization to address challenging problems like the ones described here. We organize and run meetings and discussions. We propose work that we believe would improve the Arm ecosystem.

## So, what should we do with the Device Tree?

From a security perspective we believe that there is more we can do. If we would have had a single DTS and single DTB shared by all components, then life would have been pretty easy. But as concluded after discussing and investigating the “common repo” for Device Tree it looks like we have to see what can be improved from a security perspective when we use Device Tree as we’re using it today. At best the Device Tree (DTBs) are protected with signatures. However, that doesn’t protect against successful runtime attacks taking place after the signature has been verified. We’ve seen that [Fault Injection](https://en.wikipedia.org/wiki/Fault_injection#Hardware_implemented_fault_injection) attacks have become a mature attack vector and therefore we should try to step up the security a notch. It could be anything from doing best practice when it comes to software mitigations, to measured boot where you compute a running hash of the firmware, to runtime integrity verification. Here we have challenges with Device Tree Overlays and other ways to modify Device Tree in runtime. We’ve been debating whether we shall suggest “Device Tree Security Profiles”, that ranges from no security to the highest level where all the bells and whistles are enabled.

Another thing we’ve discussed is how to deal with the runtime modifications and the handover of Device Tree when the DTB is in memory and passed between firmware. Right now it seems a bit ad-hoc and it would be good to have it written down how that should be done.

At the Jira [page](https://projects.linaro.org/projects/DTE/) for the [Device Tree Evolution](https://www.linaro.org/projects/#DTE) project you will find these two topics in addition to +10 other areas that we’re currently working on. If you’re interested in Device Tree then we urge you to join the Device Tree Evolution project by starting to attend the meetings taking place twice a month.

**Author: Joakim Bech, Distinguished Engineer, Linaro**

Joakim is currently a Distinguished Engineer at Linaro and has been a Linux user for more than 15 years where he spent most of the time in his professional career working with security on embedded devices. Joakim started up the Security Working Group in Linaro in 2013 and was the lead for that team until 2020. Before joining Linaro he had various roles such as architect, team leader and development engineer.