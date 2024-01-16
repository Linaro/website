---
layout: post
title: Linaro contributes to the OpenStack community CI officially supporting
  openEuler
description: "At the end of 2021, openEuler entered the list of Openstack
  official CI test operation systems. In this blog, Linaro Engineers Kevin Zhao
  and Xinliang Liu talk about the work involved in making this happen. "
date: 2022-01-20 09:49:21 +00:00
image: /assets/images/content/openstack-special-interest-group.png
tags:
  - openEuler
  - OpenStack
  - CI
  - Open Source
  - Huawei
  - Linaro
category: blog
author: joyce.qi
---
During the last day of 2021, the openEuler OpenStack SIG delivered a 2022 New Year’s gift to the developers in the OpenStack and openEuler open source communities: openEuler has successfully entered the list of OpenStack official CI test operation systems, and [DevStack, the most widely used by OpenStack developers, officially supports openEuler](https://review.opendev.org/c/openstack/devstack/+/760790)!

openEuler is an open source Linux distribution platform based on CentOS. In this blog, Linaro Engineers Kevin Zhao and Xinliang Liu talk about how [Linaro helped drive the work needed to get the OpenStack community CI to officially support openEuler](https://mp.weixin.qq.com/s/7nqjsrBoynAOfuwonyJ8Hg). 

{% include image.html path="/assets/images/content/openeuler-image.png" alt="Image of OpenEuler Upstream Process" %}

### Upstreaming code and the need to guarantee quality on different platforms

When developing upstream software locally, developers usually select the corresponding architecture, hardware, operating system and other related software and hardware first based on their target scenarios. After completing local development and verification, they will submit the code to the upstream community. The upstream community will then usually provide an automated CI verification mechanism which comprehensively verifies the code submitted by the developer. Only after the code has been verified and approved by the upstream community maintainer can it be incorporated into the upstream community mainline.

In order to ensure the quality of openEuler, we needed to push it into the upstream community as part of the CI verification mechanism. Without this verification mechanism, there would be no guarantee as to the quality of the development activities carried out on software and hardware. To further support testing of different types of hardware and operating systems, the openEuler community also released software packages suitable for different platforms and related usage and migration guidance for the upstream community. These tools provide users on different platforms with convenient and reliable solutions, which greatly facilitate the use of openEuler.

### How it all started - OpenStack agrees to support openEuler

Let’s review how the OpenStack upstream community worked to support openEuler. At the China Open Source Hackathon in Q4 2020, OpenStack and openEuler developers from Huawei and Linaro discussed the possibility of OpenStack to support openEuler. After two days of onsite development, they completed the POC prototype verification and demonstrated the achievement, which proved the basic usability of OpenStack + openEuler.

{% include image.html path="/assets/images/content/china-open-source-hackathon.png" alt="China Open Source Hackathon" %}

In early 2021, developers from Huawei, Linaro, Unicom Digital and China Telecom established the OpenStack SIG in the openEuler community, dedicated to better combining the two OpenStack and openEuler open source communities to provide users with an open and reliable cloud infrastructure stack. Linaro developers undertook the task of promoting openEuler support in the OpenStack upstream community, and officially opened related technical discussions, which involved the Infra SIG and Multi-Arch SIG‘s reports and discussions in the OpenStack community. The community began to recognize the influence and activity of openEuler in the field of operating systems, the open governance of the openEuler community, and the technical capabilities of the members of the openEuler OpenStack SIG. After careful consideration, the OpenStack community agreed to provide openEuler support, with plans to support x86 and aarch64 multi-architectures.

{% include image.html path="/assets/images/content/china-open-source-hackathon-image-2.png" alt="China Open Source Hackathon image 2" %}

### What have we achieved with openEuler so far?

In the middle of 2021, Linaro engineer Xinliang Liu completed the [openEuler image build  in the OpenStack upstream community](https://review.opendev.org/c/openstack/diskimage-builder/+/784363), which made the foundation for openEuler support. At the same time, developers from Huawei completed the related work of openEuler accessing the OpenStack upstream CI resource pool. Finally, the [introduction of openEuler into the OpenStack community was officially completed](https://zuul.opendev.org/t/openstack/job/devstack-platform-openEuler-20.03-SP2). Now the OpenStack upstream community not only has CI to guarantee the quality of openEuler, but users can also quickly deploy a set of OpenStack environments based on openEuler through DevStack.

DevStack is an OpenStack rapid deployment kit officially developed by the OpenStack community. It is used to quickly build a complete OpenStack environment based on the latest version or specified version of git master. It is a necessary development kit for daily OpenStack developers, and all the CI tests of [all OpenStack projects are using DevStack to do the corresponding environment deployment](https://docs.openstack.org/devstack/latest/#quick-start). Now that DevStack supports openEuler, it not only provides a great help for the development work of OpenStack and openEuler developers, but also provides a technical foundation for the verification of the upstream CI of more projects in OpenStack on openEuler.

At the same time, openEuler OpenStack SIG has completed the adaptation, verification and software packages of OpenStack core components of Queens, Rocky, Train, Victoria, Wallaby, etc. in multiple versions of openEuler 20.03 LTS, 21.03, 21.09, etc. [The release work](https://gitee.com/openeuler/openstack) provides openEuler users with easy-to-use and useful OpenStack software. In the future, we will continue to work to promote the integration and verification of openEuler by the main component communities in OpenStack，as well as the adaptation and tuning of each component on openEuler，and the integration with openEuler community innovation projects.

{% include image.html path="/assets/images/content/openstack-special-interest-group.png" alt="Openstack Special Interest Group" %}

The openEuler access to the OpenStack community is the cooperation of many developers from the two communities. I would like to express my gratitude to the contributors:

Open Infrastructure Foundation: Clark Boylan、Ian Wienand、Jeremy Stanley、李昊阳、Rico Lin
OpenStack QA SIG:  Dr. Jens Harbott、Radosław Piliszek,
openEuler OpenStack SIG: 陈锐、陈硕、黄填华、李昆山、李佳伟、Xinliang Liu（Linaro）、刘胜、王玺源、姚志聪、张迎、张帆、赵帅（Kevin Zhao Linaro）、郑振宇

### Where can I find out more about openEuler?

For more information on the work Linaro does on openEuler, please check :

* Support OpenEuler in OpenStack Disk Image Builder：<https://linaro.atlassian.net/browse/EULR-10>
* Support openEuler in OpenStack Devstack and enable basic tempest test：
  <https://linaro.atlassian.net/browse/EULR-11>
* openEuler website：<https://www.openeuler.org/en/>