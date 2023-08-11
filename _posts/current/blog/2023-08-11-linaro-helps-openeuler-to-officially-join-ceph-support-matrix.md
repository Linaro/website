---
layout: post
title: Linaro helps openEuler to officially join Ceph support matrix
description: "This blog is about openEuleran open source operating system for
  digital infrastructure. "
date: 2023-08-11 10:38:17 +01:00
image: /assets/images/content/screenshot-2023-08-11-at-11.37.28.png
tags:
  - Linuxkernel
  - Opensource
category: blog
author: kevin.zhao@linaro.org
---
As an open source operating system for digital infrastructure that covers all scenarios and supports a diverse list of computing platforms, openEuler always follows the upstream first policy. By making sure the upstream open source projects natively support openEuler, its users can obtain maximum convenience while developing, integrating, and using these softwares and solutions. Ceph is the most famous open source distributed storage system, being widely used in private cloud and cloud native scenarios. It has been an important objective for openEuler to become an Linux Distribution officially supported by the Ceph’s project.

In December 2022, Linaro joined the openEuler Software-Define Storage (SDS) Special Interest Group (SIG), which is the SIG for multiple technologies of storage solutions. The SDS SIG offers support for Ceph, Lustre, BeeGFS, Mayastor, SPDK, DAOS, OpenZFS, etc. It aims to gather storage talents to jointly create high-quality, high-performance, and high-reliability distributed storage component versions, and build a rich North-South ecosystem. Xinliang Liu and Kevin Zhao, from Linaro, are working closely with the openEuler SDS SIG and actively contribute to promote the openEuler support in storage upstream.

![](/assets/images/content/screenshot-2023-08-11-at-10.48.55.png)
{% include image.html path="/assets/images/content/screenshot-2023-08-11-at-10.48.55.png
" alt="openEuler announcement" %}

On July 20 2023, under the joint promotion and contribution of Linaro and the openEuler SDS SIG, the Ceph community merged the pull request for openEuler native support, which means that the openEuler officially joined the [Ceph support matrix](https://docs.ceph.com/en/latest/install/get-packages/#openeuler) and passed the CI verification.

{% include image.html path="/assets/images/content/screenshot-2023-08-11-at-11.32.11.png" alt=" Ceph download page for openEuler packages" %}



Currently, openEuler finished the porting and compatibility test for multiple versions of Ceph. The openEuler community will continue to adapt the support for the new versions of Ceph, enrich the coverage of the openEuler Ceph integration test and follow the Ceph upstream release schedule. Besides, the SDS SIG has set up the Ceph on [openEuler daily CI jobs](https://github.com/openeuler-mirror/ceph-daily-build).

In the next stage, Linaro and openEuler SDS SIG will continue to cooperate in the Ceph community to promote the Ceph Arm64 official release. Ceph has already published the Arm64 upstream version for several years, but has never announced the official support on Arm64 as the coverage of CI jobs is not sufficient on Arm64. We will implement the Ceph Arm64 CI enhancements, Ceph Crimson development and keep maintaining the Ceph Arm64 PR CI system.