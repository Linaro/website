---
layout: post
title: A Year In The Life Of The STG Group
description: TBC
date: 2020-12-17 05:20:53
image: /assets/images/content/abstract-small.jpg
tags:
  - STG
category: blog
author: jon.burcham@linaro.org
---
###### Linaro STG 2020 Year In Review

## 2020 Objectives

This year the 2020 objectives for the STG team focused around 5 key topics:

1. Provide LKFT Remote Labs Product 
2. Improve LAVA User Experience \[Committed]
3. Implement OnDemand TuxBuild Public Offering \[Committed]
4. Implement OnDemand Linux kernel boot testing prototype 
5. Support infrastructure stakeholder requests and SLAs \[Committed]

This was an extremely ambitious plan and in retrospect was overly ambitious. The objectives were about how STG would continue to move Linaro forward measurably in 2020 and not just how the team would execute against their responsibilities.

Moving into 2021 the objectives will be even more focused.

## STG 2020 Report Card

STG has done exceptionally well in executing on two of the committed and one aspirational objectives.

### Provide LKFT Remote Labs Product

Members of Linaro have always been intrigued by the idea of having their devices in LKFT but there are often too many unknowns to make pursuing this technology a high priority for members.

As LKFT 2.0 started to adopt elements of the tuxbuild backend and implemented new gitlab-ci based pipelines LKFT became a demonstration platform for how Linaro members can use the TuxSuite products to implement their own LKFT-like processes that exactly fit their business needs. This is a much better proposition to Linaro members and it’s much easier for STG implement the technology.

### Improve LAVA User Experience

The LAVA user experience continues to be an issue. There is much discussion about what needs to improve in LAVA in order to make the onboarding of remote-labs as effortless (and maintainable) as possible. In reality the time has not yet come for the remote-labs concept. When we have the product which will use the remote-labs concept, the LAVA user experience improvements will be a natural key-result. It’s time might be coming soon!

### Implement OnDemand TuxBuild Public Offering

TuxBuild is on track for general open enrollment in January 2021 and is already an integral part of LKFT and LTS kernel maintenance, as well as being adopted by Linaro kernel engineers for their daily development and testing pipelines. TuxBuild’s constant-time build capabilities across large build sets can change the culture of Linux kernel engineering to increase the breadth of build testing as the standard.

We’re proud of the fact that Android phone users have benefited from Google using TuxBuild since April 2020. They’re performing batch Android security patch build testing for Android Common Kernels on a monthly basis

### Implement OnDemand Linux kernel boot testing prototype

The TuxBoot prototype was an ambitious project to test the hypothesis that we could build an infinitely scalable Linux kernel boot system booting on cloud-hosted QEMU instances managed by ephemeral LAVA instances, using the serverless design principles proven by TuxBuild.

The goal was to produce a boot demo demonstrating a TuxBuild-like API able to boot 100 Linux kernels as described above in a two month time-frame. The team executed flawlessly, and we were able to provide our demo only a few weeks after our original ambitious target.

TuxBoot will transform into a TuxTest prototype in the very near future.

### Support infrastructure stakeholder requests and SLAs

Most engineers in STG have something to do with executing against our LTS testing SLA. This objective is mostly about sustained commitment and operational excellence. Linaro is the only kernel testing organization that has reported on every LTS release in the last year \[1]. We are the most consistent kernel testing organization in the industry and Greg KH relies on both our LKFT process and our internal tooling on a weekly basis.

Going forward, the Linaro lab will continue to innovate in order to insulate our SLA against un-expected downtime. We expect to start rolling our per-DUT dispatchers on vulnerable workloads over the coming months, and we’re experimenting with rack density improvements and solid-state PDU prototypes to eliminate PDU failure rates. As well, we’ll slowly move to a cloud-hosted LAVA master environment and start improving our ability to enroll off-premises devices as our business needs demand.

*`[1]This has been fact-checked by Daniel Diaz. Guenter Roeck has missed 3 LTS releases. Nvidia has missed 42 LTS releases. CKI, KernelCI, and 0-day do not actively participate in the formal LTS testing process. They’re passive contributors. Each has experienced significant downtime in the last year.`*

## 2020 STG Accomplishments

### Keep The Lights On - The Tip Of The Iceberg

In the last year the Linaro STG team has resolved a stunning 800+ LSS tickets. This represents requests from across Linaro’s segment and working groups, projects where we provide services directly to members, Linaro developer services, Linaro landing teams, Linaro community projects (such as Trusted Firmware), directed projects such as Morello, and our own internal needs. This 800+ tickets doesn’t include software feature requests that are a part of the collection of open-source software that we created and maintain.

### LTS Kernel Testing SLA - 100% of all LTS releases validated in less than 48 hours

Repeating the success from last year the KV team and LSS teams have successfully validated all (100%) LTS releases in less than 48 hours, exceeding our goal of 80%. This took discipline and in some cases extreme effort to achieve. Kernel Image Repacking (KIR)

### Kernel Image Repacking (KIR)

[KIR](https://github.com/Linaro/kir) is a tool that allows repacking of kernel images into boot images and/or rootfs images. KIR was written to eliminate the need to have a custom rootfs build for every LKFT LAVA job. Any LKFT job can run any kernel without additional modifications. This allows functional test bisections to be much easier to accomplish, and allows us to reduce the amount of time it takes to execute an LKFT build since we’re able to build the rootfs images out-of-band from the kernels being tested.

## Reported By

All the work we have done on LKFT tooling, process, and initiative of our reporting individuals comes together with successful reported-by and regression reports to both Greg KH, and Linus Torvalds. There have been many demonstrations of Linaro engineers expertly navigating the upstream bug reporting process successfully. This leads to the establishment of Linaro as experts in the area of Linux kernel testing.

{% include image.html path="/assets/images/content/squad.png" alt="SQUAD logo" %}

### Squad Client

Squad client was started as an effort to improve test report customization for the end users. As initially designed, server based reporting was difficult to use and hard to customize. Together with LKQ engineers we came up with a simple, API-based, command line tool that allows users to produce customizable reports from the data collected in SQUAD. The tool is still in active development and is already used by Linaro Developer Services. The LKQ team is starting to make greater use of this project in their effort to improve kernel testing reports.

### KissCache

Linaro recently developed and open-sourced KissCache, a simple and stupid caching server built on the KISS principle: Keep It Simple Stupid. Unlike classical proxies like Squid that transparently intercept traffic, in order to use KissCache one must explicitly prefix the requested URL by the URL of the local KissCache instance. KissCache will download the requested resource in the background while streaming it to the client.

If many clients are requesting the same resource, KissCache will download it only once and stream the content to every client. When artefacts are hosted on a system where network bandwidth is charged per unit (such as Amazon S3), this can amount to several thousands of dollars in savings per month (as is the case in Linaro.) We’ve also seen this deployed at Linaro member companies to similar success.