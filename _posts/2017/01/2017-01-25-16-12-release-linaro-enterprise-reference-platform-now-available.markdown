---
author: linaro
date: 2017-01-25 11:54:43+00:00
layout: post
link: /blog/16-12-release-linaro-enterprise-reference-platform-now-available/
slug: 16-12-release-linaro-enterprise-reference-platform-now-available
title: 16.12 release for Linaro Enterprise Reference Platform is now available
wordpress_id: 12081
categories:
- blog
---

The Linaro Enterprise Group (LEG) is pleased to announce the 16.12 release for the Linaro Enterprise Reference Platform. To find out more, visit [platforms.linaro.org](https://platforms.linaro.org/) or click [here](http://releases.linaro.org/reference-platform/enterprise/16.12/?utm_source=platforms.linaro&utm_medium=submenu) to download the release.

The goal of the Linaro Enterprise Reference Platform is to provide a product quality, end to end, documented, open source platform for ARM based Enterprise servers. The Reference Platform includes boot firmware, kernel, a choice of userspace distributions and additional relevant open source projects. The Linaro Enterprise Reference Platform is built and tested on 96Boards RP-Certified hardware and the Linaro Developer Cloud. It is intended to be a reference example for use as a foundation for products based on open source technologies.

The Linaro Enterprise Group has worked closely with Linaro’s Core Technology & Tools teams to deliver the Linaro Enterprise Reference Platform with updates across the software stack (Firmware, Linux Kernel, and key server workloads) for ARM based Enterprise servers and a focus on QA testing and platform interoperability. OpenStack reference architecture is now available with ansible playbooks, allowing users to deploy an end to end Openstack reference on ARM servers. BigTop 1.1 has also been upgraded with OpenJDK 8, Spark 2.0 (from 1.6) and Hive 2.1 (from 1.2), all tested with Hadoop 2.7.2. You can review the test plan for the Linaro Enterprise Reference Platform 16.12 [here](https://mwasilew.github.io/rpb_testplan/enterprise_testplan.html).

Below is the complete list of 16.12 features:

**Reference Platform Kernel**

4.9 based, including under-review topic branches to extend hardware platform support
Unified tree, used by both the CentOS and Debian Reference Platforms
ACPI and PCIe support
Single kernel config and binary (package) for all hardware platforms

**UEFI**
Tianocore EDK II and OpenPlatformPkg containing reference implementations for Huawei D03/D05 and AMD Overdrive

**16.12 with Debian based installer and userspace**
Network Installer based on Debian 8.6 “Jessie”
Unified Reference Platform Kernel based on 4.9

**16.12 with CentOS based installer and userspace**
Network Installer based on CentOS 7.2.1603
Unified Reference Platform Kernel based on 4.9

**Enterprise Components**
Docker 1.10.3
OpenStack Newton
Ceph 10.2.3
Spark 2.0
Hadoop 2.7.2
OpenJDK 8
QEMU 2.7

**Supported Hardware Platforms**
AMD Overdrive
HiSilicon D03
HiSilicon D05
AppliedMicro X-Gene X-C1 (Mustang)
HP Proliant m400
Qualcomm QDF2432 Software Development Platform (SDP)
Cavium ThunderX

To find out more about the Linaro Enterprise Reference Platform, go to [platforms.linaro.org](https://platforms.linaro.org/).
