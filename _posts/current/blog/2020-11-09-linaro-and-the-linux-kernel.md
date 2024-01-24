---
layout: post
title: Linaro and the Linux Kernel
description: In this article, Daniel Lezcano reviews the work Linaro continues
  to undertake & the contributions the company has made, together with the wider
  OS community.
date: 2020-11-09 02:34:26
image: /assets/images/content/open_source_keyboard_under_2mbjpg.jpg
tags:
  - Linaro
  - Linux Kernel
category: blog
author: daniel.lezcano
---

## Introduction

A contribution to the Linux kernel requires experience. The development happens in a large meritocracy community, with a development process based on technical public discussions. There is no deadline, no profit, only one thing matters. Make Linux better.

The industry has a different goal, which is to reduce the time to market as much as possible. That usually implies some short term development at the cost of misdesigns, duplicated efforts and individual changes without taking care of the existing. In addition, the turnover on the projects prevents any form of capitalisation of the knowledge for a long term support.

These opposite goals lead to a fragmentation of the Linux code. In the long term, the gap between the Linux kernel and the product code is too large. The development time increases as well as the product validation with the consequence of a longer time to market.

The solution is to upstream the product code into the Linux kernel. However, the lack of experience in open source, the different mindsets and cultures, can lead the upstreaming process to fail.

In front of these apparent ecosystems incompatibility, Linaro takes place and creates a bridge between the open source and the industry, by guiding them to upstream the code in a long term vision on the Arm architecture.

## The Linux Kernel

## Some numbers

In 2019 the Linux kernel had 27.8 million lines of code, dispatched in 66492 files. That is the result of 75,000 commits per year, 18,750 commits per kernel release. 15,600 persons have contributed from 1,600 companies since 2005. The Linux kernel is worth 14.4 billion dollars.

[Linaro was the top #1 contributor to the Linux kernel for the v4.9 version.](https://www.linaro.org/blog/linaro-1-contributor-linux-kernel-4-9-release/)

## Why upstream?

The open source projects are usually protected by a GPL license. Anyone can make a copy of the project, carry out modifications and redistribute it. However, this is allowed only if the changes are published with the source code and the scripts to generate the binaries. Thus, that allows full control over the cloned project and gets rid of the review process of the corresponding community. This attractive solution has a major drawback among others. From the open source community perspective, those changes don’t exist and the original project will evolve independently. As we saw, there is a large number of changes per year for the Linux kernel, so both projects will diverge very quickly.

In the next versions of the original project, more features will be available, so an update of the cloned project will be inevitable to merge the new features. Unfortunately, at this point, there is no guarantee that the specific changes in the cloned project will be compatible with the new original project version, i.e. merge conflicts, redesign, subtle bugs, revalidation of the current code. These are some of the costs of keeping the changes outside of the mainstream.

Version after version, the cost of porting the product specific code in the new project releases will be higher. This will continue to increase until it reaches the point where the cost will be prohibitive, blocking the future features coming from the mainstream, like a branch breaking under a heavy load.

The only way to work in a sane way, in the long term, is to upstream the code in the original project by joining and being part of the open source developer community.

## The community

The community is a group of people contributing to the same project by proposing changes. Those are reviewed by the community members and accepted if they make sense and if nobody complains, or when there is an agreement after a technical debate. All the discussions are oriented towards technical facts. The proposed changes must be beneficial to the community. The maintainers are special members. They have the knowledge and the history of the project, as well as the last word and the responsibility of commiting the changes.

## The mindset

The focus of the community is on making the project better. For this reason any member can comment on a change from anyone. Because an open source project is the result of evolution, the technical debate is always beneficial, even if the discussion can be harsh sometimes. Joining the community implies accepting the criticism and the rules of the open source development process. One of them is to act with respect and altruism with the community, by helping on some components out of the scope a company may have to work on. The community will perceive the contributor positively, as a symbiotic relationship instead of parasitism.

That could be really hard for employees who are asked to code upstream in an open source project if the management misunderstands its philosophy. The employees will be torn between deadlines and technical achievements.

# The Industry

## The turnover on the projects

Whatever the project, the management uses the engineer as resources equivalent to each other. They move them around depending on the load for different projects. That implies a latency for an engineer to be fully operational because of the learning curve ramp up. Another reason for changing the teams often is to prevent an engineer from being compulsory. Whatever we think about this managerial model, these are the facts and the reasons why some companies can not accumulate enough knowledge and credits in the open source ecosystem.

## Capitalisation of the knowledge

Some companies understood the importance of the open source development process and they created entities in their companies to handle the upstreaming support for their platforms. They operate autonomously to prevent conflicts between non-open source management and open source developers. This model allowed the creation of dedicated teams for the development of open source projects where the employees could become key players inside the community, capitalising the knowledge and the experience. The open source community is based on a meritocratie, so the time to gain credits and confidence is saved by keeping some employees full time on the project.

However, such an approach for a company is not obvious, especially because of the open source development process misunderstanding, the pressure of the hierarchy for lean manufacturing, short term releases and the cost of putting in place an open source center. Another aspect is how the management perceives their employees evolving in the open source ecosystem autonomously.

## Linaro

The Arm architecture is massively deployed all around the world. The licensing model allows different companies to implement their version of the SoC. It results in the kernel making use of the different features on the SoC, which can be different for the same architecture. That was particularly true for the Armv7. The different SoC vendors clone the Android kernel which is itself a clone of the Linux kernel, and implement the same features on their side. The resulting code fragmentation is considerable. Linaro took the lead as a consortium to consolidate the Linux kernel, along with other open projects, over a decade ago.

## Acting as a bridge between two ecosystems

A SoC vendor can rely on experienced open source developers working in a dedicated landing team for the platform, where it wants to accelerate the upstream support. The Linaro engineers will act under an NDA and upstream the platform specific bits. In that, there are a few differences with the specialized companies proposing the same service.

But Linaro is much more than that. The core engineering will be in charge of understanding the needs of the different members and will find a common generic solution usable for all members, yet leaving them enough space to add their differentiation. The exercise is difficult but, after more than 10 years, the list of achievements shows the setup is working.

In addition, the SoC vendors will assign some engineers of their teams to the different Linaro projects. These will be guided through the open source development process, gain experience and share it with their company.

Linaro consolidates the Arm architecture code fragmentation and helps the companies to understand what open source is.

## Capitalization of the knowledge

In order to bring together the most experienced open source developers, Linaro chose the distributed, remote working environment, building virtual teams across the world. These developers are the backbone of the company and provide valuable insight into the current and future technologies. Dedicated to open source, they are part of its community and are decisive actors for technical decisions. Most of the discussions happen offline on the mailing lists, but the open source events like the Linux Plumbers Conference or the Embedded Linux Conference are preferred places where they meet and exchange ideas.

Given the implication of these developers in the open source ecosystem, they have an influence to orient and to propose technical solutions.

## Consolidation of the kernel features

One of the major goals of Linaro is to reduce the code fragmentation with the different SoC vendors, specific kernels, and for the mainstream. The features added in the custom kernels can be similar and the Linaro engineers have the role to identify the common pieces, improve them if it is possible, and propose a generic solution to be merged in the mainstream. The impact on the custom solutions is immediate, because the mainstream must ensure backward compatibility.

## Linaro Challenges

Acting as a bridge between the members and the open source ecosystem, Linaro has the responsibility of connecting both worlds. Because Linaro is involved in the open source projects, one side of the connection is easier than the other. On the other side, Linaro tries to move custom solutions to generic solutions. This implies that this puts into question the work already done by the member engineers who may never have faced an audit of their code, or their design, via a review process. Member engineers could perceive that as an act of depreciation, a hostile takeover to take control of the code. In addition, the misunderstanding of the open source ecosystem can exacerbate this feeling.

Another aspect is the nature of Linaro which joins different members to collaborate on the common parts in order to prevent duplicated work and code fragmentation. Linaro has the responsibility to collect information to understand the technical needs of the different members and identify the common parts. A difficult task as the members are competitors on the market.

## Linaro achievements

Linaro maintainership in the Linux kernel. The following table lists the maintainers of the Linux kernel for the Arm architecture, the drivers and the generic frameworks. The frameworks are bigger in terms of size and changes submission traffic. This table demonstrates how Linaro is involved in the Linux kernel development and how de facto it has a voice in the community to make the upstreaming process as smooth as possible. Since its creation, Linaro has merged more than 23,000 changes in the kernel, especially in the generic frameworks where the implementation and the submission process are harder than a driver.

{% include image.html path="/assets/images/content/linux-kernel-blog-1.png" alt="maintainer framework and driver table" %}
{% include image.html path="/assets/images/content/linux-kernel-blog-2.png" alt="maintainer framework and driver table" %}
{% include image.html path="/assets/images/content/linux-kernel-blog-3.png" alt="maintainer framework and driver table" %}

The next table shows the noticeable achievements of Linaro in terms of functionalities for the Linux kernel, the list is not exhaustive but it shows Linaro is a major player in the Linux kernel ecosystem.

{% include image.html path="/assets/images/content/linaro-noticeable-achievements-1.png" alt="Linaro noticeable achievements table by year" %}
{% include image.html path="/assets/images/content/linaro-noticeable-achievements-2.png" alt="Linaro noticeable achievements table by year" %}
{% include image.html path="/assets/images/content/linaro-noticeable-achievements-3.png" alt="Linaro noticeable achievements table by year" %}
{% include image.html path="/assets/images/content/linaro-noticeable-achievements-4.png" alt="Linaro noticeable achievements table by year" %}
{% include image.html path="/assets/images/content/linaro-noticeable-achievements-5.png" alt="Linaro noticeable achievements table by year" %}

\[1] [Force Idle When a CPU Is Overheating](https://www.linaro.org/blog/force-idle-when-a-cpu-is-overheating/)

\[2] [Thermal Notifications With Netlink](https://www.linaro.org/blog/thermal-notifications-with-netlink/)

## Conclusion

Linaro is a consortium dedicated to supporting the Arm architecture in the open source ecosystem. It is deeply involved in the Linux kernel development as well as other open source projects. Its role is to educate the members and make them comfortable with the open source development process.

The Arm architecture, especially on the mobile and the embedded systems, is constantly evolving with more complexity and technical challenges to solve. For a decade, Linaro did a great number of achievements, especially in the Linux kernel side. It has successfully kept reducing the gap between the custom and mainstream kernels since then. That must be a continuous effort and, with the market pressure, the temptation of coming back to the out of mainstream kernels model is high. There is always the risk of returning to the code fragmentation.

The Arm architecture has practically replaced all other architectures in embedded systems since Linaro started, which would not have been possible without creating and maintaining subsystems and platforms on the long term.

## About The Author
Daniel is a member within the Kernel Working Group (KWG). The group's primary focus is to be an active contributor to the upstream community and facilitate acceptance of our code into the Linux mainline kernel. Our goal is kernel consolidation - a single source tree with integrated support for multiple Arm SoCs and Arm-based platforms.