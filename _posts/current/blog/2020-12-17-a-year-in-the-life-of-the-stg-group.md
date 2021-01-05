---
layout: post
title: A Year In The Life Of The STG Group
description: "In this article we look at the work from just one of Linaro's many
  engineering teams - System Technologies Group (STG). This group have been very
  busy as usual, introducing many technical improvements as well as some
  completely new technologies, such as TuxSuite. "
date: 2020-12-22 01:00:00
image: /assets/images/content/abstract-small.jpg
tags:
  - STG
  - Tuxsuite
category: blog
author: ryan.arnold@linaro.org
---
# Linaro System Technologies Group (STG) 2020 Year In Review

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

As LKFT 2.0 started to adopt elements of the tuxbuild backend and implemented new gitlab-ci based pipelines LKFT became a demonstration platform for how Linaro members can use the TuxSuite products to implement their own LKFT-like processes that exactly fit their business needs. This is a much better proposition to Linaro members and it’s much easier for STG to implement the technology.

### Improve LAVA User Experience

The LAVA user experience continues to be an issue. There is much discussion about what needs to improve in LAVA in order to make the onboarding of remote-labs as effortless (and maintainable) as possible. In reality the time has not yet come for the remote-labs concept. When we have the product which will use the remote-labs concept, the LAVA user experience improvements will be a natural key-result. Its time might be coming soon!

### Implement OnDemand TuxBuild Public Offering

TuxBuild is on track for general open enrollment in January 2021 and is already an integral part of LKFT and LTS kernel maintenance, as well as being adopted by Linaro kernel engineers for their daily development and testing pipelines. TuxBuild’s constant-time build capabilities across large build sets can change the culture of Linux kernel engineering to increase the breadth of build testing as the standard.

We’re proud of the fact that Android phone users have benefited from Google using TuxBuild since April 2020. They’re performing batch Android security patch build testing for Android Common Kernels on a monthly basis

### Implement OnDemand Linux kernel boot testing prototype

The TuxBoot prototype was an ambitious project to test the hypothesis that we could build an infinitely scalable Linux kernel boot system booting on cloud-hosted QEMU instances managed by ephemeral LAVA instances, using the serverless design principles proven by TuxBuild.

The goal was to produce a boot demo demonstrating a TuxBuild-like API able to boot 100 Linux kernels as described above in a two month time-frame. The team executed flawlessly, and we were able to provide our demo only a few weeks after our original ambitious target.

TuxBoot will transform into a TuxTest prototype in the very near future.

### Support infrastructure stakeholder requests and SLAs

Most engineers in STG have something to do with executing against our LTS testing SLA. This objective is mostly about sustained commitment and operational excellence. Linaro is the only kernel testing organization that has reported on every LTS release in the last year \[1]. We are the most consistent kernel testing organization in the industry and Greg KH relies on both our LKFT process and our internal tooling on a weekly basis.

Going forward, the Linaro lab will continue to innovate in order to insulate our SLA against un-expected downtime. We expect to start rolling out our per-DUT dispatchers on vulnerable workloads over the coming months, and we’re experimenting with rack density improvements and solid-state PDU prototypes to eliminate PDU failure rates. As well, we’ll slowly move to a cloud-hosted LAVA master environment and start improving our ability to enroll off-premises devices as our business needs demand.

*`[1] Guenter Roeck has tested all but 3 LTS releases. Nvidia has tested all but 42 LTS releases.  CKI, KernelCI, and 0-Day are passive contributors to the formal LTS testing process. LKFT is the only service with no downtime in the last year.`*

## 2020 STG Accomplishments

### Keep The Lights On - The Tip Of The Iceberg

In the last year the Linaro STG team has resolved a stunning 800+ LSS tickets. This represents requests from across Linaro’s segment and working groups, projects where we provide services directly to members, Linaro developer services, Linaro landing teams, Linaro community projects (such as Trusted Firmware), directed projects such as Morello, and our own internal needs. This 800+ tickets doesn’t include software feature requests that are a part of the collection of open-source software that we created and maintain.

### LTS Kernel Testing SLA - 100% of all LTS releases validated in less than 48 hours

Repeating the success from last year the KV team and LSS teams have successfully validated all (100%) LTS releases in less than 48 hours, exceeding our goal of 80%. This took discipline and in some cases extreme effort to achieve.

### Kernel Image Repacking (KIR)

[KIR](https://github.com/Linaro/kir) is a tool that allows repacking of kernel images into boot images and/or rootfs images. KIR was written to eliminate the need to have a custom rootfs build for every LKFT LAVA job. Any LKFT job can run any kernel without additional modifications. This allows functional test bisections to be much easier to accomplish, and allows us to reduce the amount of time it takes to execute an LKFT build since we’re able to build the rootfs images out-of-band from the kernels being tested.

## Reported By

All the work we have done on LKFT tooling, process, and initiative of our reporting individuals comes together with successful reported-by and regression reports to both Greg KH, and Linus Torvalds. There have been many demonstrations of Linaro engineers expertly navigating the upstream bug reporting process successfully. This leads to the establishment of Linaro as experts in the area of Linux kernel testing.

{% include image.html path="/assets/images/content/squad.png" class="small-inline left" alt="SQUAD logo" %}

### Squad Client

Squad client was started as an effort to improve test report customization for the end users. As initially designed, server based reporting was difficult to use and hard to customize. Together with LKQ engineers we came up with a simple, API-based, command line tool that allows users to produce customizable reports from the data collected in SQUAD. The tool is still in active development and is already used by Linaro Developer Services. The LKQ team is starting to make greater use of this project in their effort to improve kernel testing reports.

### KissCache

Linaro recently developed and open-sourced KissCache, a simple and stupid caching server built on the KISS principle: Keep It Simple Stupid. Unlike classical proxies like Squid that transparently intercept traffic, in order to use KissCache one must explicitly prefix the requested URL by the URL of the local KissCache instance. KissCache will download the requested resource in the background while streaming it to the client.

If many clients are requesting the same resource, KissCache will download it only once and stream the content to every client. When artefacts are hosted on a system where network bandwidth is charged per unit (such as Amazon S3), this can amount to several thousands of dollars in savings per month (as is the case in Linaro.) We’ve also seen this deployed at Linaro member companies to similar success.

### LAVAche

LAVAche is an interesting solution to the problem of QEMU scalability in LAVA instances. Formerly QEMU instances were externally managed as LAVA dispatcher+DUT combinations that were provided directly to LAVA in the traditional method, i.e., statically allocated. LAVAche provides a way for LAVA to utilize cloud availability for running (and scaling) QEMU targets ‘onDemand’. The prototype is able to assess the QEMU target queue depth and dynamically bring-up GCP (Google Cloud Platform) servers as QEMU target devices to which LAVA jobs are dispatched. When the queue is empty it is able to tear down the allocated instances. This hasn’t yet been upstreamed, but it’s likely to make its way into some technology prototypes in the near future.

### LAVA test plans

The LAVA test plans project was created to combine test-definitions (see below) with LAVA device types and produce valid LAVA job templates. The task isn’t easy because LAVA job definitions tend to use implicit dependencies, for example some types of deployments only work for certain devices. At the same time the goal of LAVA test plans was to produce a valid LAVA job for every possible combination of LAVA device type and test-definitions test. Currently the project is used by the LKFT team but there are a number of proposals to use it in Linaro Developer Services projects.

### Test-Definitions

For several years the [test-definitions](https://github.com/Linaro/test-definitions) project has provided a good base for LAVA test encapsulation. This year it received one important improvement - documentation. The documentation is now auto generated and available in [readthedocs.io](https://test-definitions.readthedocs.io/en/latest/). This project is used quite heavily both inside and outside of Linaro (see [github fork metrics](https://github.com/Linaro/test-definitions/network/members)). This project provides a powerful ‘network’ effect for Linaro because it establishes Linaro as experts in automated testing.

{% include image.html path="/assets/images/content/lkft.png" class="small-inline left" alt="LKFT logo" %}

### LKFT 2.0

The idea behind LKFT 2.0 is that we could pivot our architecture to develop and make use of discrete and reusable components which improve our ability to scale, lead to developer-controlled LKFT pipelines, and reuse of components outside of the Linux Kernel Quality project directly. This is exactly what has happened. LKFT is now using TuxBuild as the Linux kernel build engine. We’re also making LKFT pipelines available to Linux kernel developers and we’re working on reporting concepts which are applicable everywhere.

LKFT 2.0 now includes the following components:

* Reusable Gitlab pipeline definitions
* TuxBuild
* TuxMake
* Lava-test-plans to generate LAVA test definitions in a robust and reusable way
* Squad
* Squad-client
* KIR
* TuxPub for hosting LKFT root filesystems
* LAVA
* Linaro lab hosted target devices
* Test-definitions for hosting the implementation details of running each test
* KISS Cache
* Openembedded layer meta-lkft

Each of these components can and are often reused outside of LKFT for their specific purpose. Together, they provide all of the functionality needed to deliver LKFT. What’s really interesting about this list is that many of the innovations from this year have already been adopted in LKFT, but by no means is LKFT the only place these are usable.

{% include image.html path="/assets/images/content/tuxsuite.png" class="small-inline left" alt="tuxsuite logo" %}

## [TuxSuite](https://tuxsuite.com/)

The term ‘TuxSuite’ might be new to many people since this ‘branding’ term was just recently decided upon as the name of the suite of tools we’re building.

{% include image.html path="/assets/images/content/tuxmake.png" class="small-inline left" alt="tuxmake logo" %}

### [TuxMake](https://gitlab.com/Linaro/tuxmake)

TuxMake is an open source project that provides curated build environments and tools (in containers) that are necessary for building Linux kernels. It provides for kernel builds what git provides for kernel source, that is portable and reproducible builds. It’s a problem that much of the upstream Linux development community 
doesn’t even realize they have (collectively spending incredible amounts of time dealing with broken builds and frustration about lack of build reproducibility). TuxMake has delivered on its promises and is currently being fully integrated into TuxBuild. TuxMake has a chance to change Linux kernel development best-practices. We’re hoping for industry adoption of TuxMake in the future.

{% include image.html path="/assets/images/content/tuxpub.png" class="small-inline left" alt="tuxpub logo" %}

### TuxPub

TuxPub is the “Serverless File Server”. It’s a file server that does not require any actively running servers, with cloud-native scalability and availability and it costs very little to run and maintain since it’s “just software”. It features a simple, minimal design and 100% unit-test coverage. It solves the problem of how to provide a light-weight, content view of related files similar to an Apache directory listing and is applicable for any project that stores artifacts in AWS S3. TuxPub is already living up to the promise and being used in places in Linaro outside of the TuxSuite proper, such as in LKFT.

{% include image.html path="/assets/images/content/tuxboot.png" class="small-inline left" alt="tuxboot logo" %}

### TuxBoot Prototype

TuxBoot is the sibling service to TuxBuild. TuxBoot was conceived with the grand vision of being able to boot any Linux kernel built by TuxBuild in emulation, in constant time. The first step in this vision was to execute a prototype. The prototype started with a very narrow mission--to prove that we could boot test 100 Linux kernels simultaneously “in the cloud” using ephemeral LAVA hosted QEMU instances. This required learning cloud-native ‘serverless’ methodologies so that there is no TuxBoot infrastructure running when there are no TuxBoot jobs being executed. This meant learning AWS Amazon Machine Images (AMI), AWS queuing with SQS, Auto-scaling groups, AWS spot instance ‘on-demand’ virtual machine management, AWS APIs, and AWS Lambda. They used TuxBuild as a model for the API and serverless backend but had to solve major technological problems to get the ASG model working properly.

{% include image.html path="/assets/images/content/tuxbuild.png" class="small-inline left" alt="tuxbuild logo" %}
[TuxBuild](https://gitlab.com/Linaro/tuxbuild) has been impressively reliable over the last year, with zero downtime, attributable to the continuous deployment methodology of the development team as well as a testament to the power of the serverless methodologies when implemented according to “best-practices”. The Tux team has been making consistent improvements in the areas of scalability for the last year. Not only have they been executing disciplined weekly load tests which have helped them find scalability corner-cases (such as abnormalities in how AWS reaps spot-instances immediately after allocating them), but they’ve also been working on fundamental improvements to how we manage hitting foreign git-servers at scale.

We learned a lot about how to crash git server hosts in the last year while scale-testing TuxBuild and we realized that in order to execute on our vision for TuxBuild we could not have TuxBuild hammering kernel.org, github.com, or gitlab.com with thousands of simultaneous fetch requests or we might get sternly worded emails from those service providers. As a remedy we developed a serverless git repo cache and mirror mechanism, proprietary to TuxBuild, that prevents TuxBuild from saturating external git servers.