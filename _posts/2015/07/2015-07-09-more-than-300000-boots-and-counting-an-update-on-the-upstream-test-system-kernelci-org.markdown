---
author: linaro
categories:
- blog
comments: true
date: 2015-07-09 23:58:58
description: "Linux maintainers see hundreds of patches during a Kernel version and
  there\xE2\x80\x99s never enough time to thoroughly test every change. The LAVA team
  has been working with these maintainers to leverage Linaro\xE2\x80\x99s LAVA automation
  and test platform."
excerpt: "Linux maintainers see hundreds of patches during a Kernel version and there\u2019s
  never enough time to thoroughly test every change.  At Linaro, we wanted to expand
  the system and add the capabilities to perform additional test activities beyond
  build and boot and leverage our LAVA test framework.  Thus the LAVA team has been
  working with these maintainers to leverage Linaro\u2019s LAVA automation and test
  platform.  \n"
layout: post
link: /blog/more-than-300000-boots-and-counting-an-update-on-the-upstream-test-system-kernelci-org/
slug: more-than-300000-boots-and-counting-an-update-on-the-upstream-test-system-kernelci-org
tags:
- arm
- kernel
- lava
- Linux on ARM
- maintainers
title: 'More than 300,000 boots and counting: An update on the upstream test system
  - kernelci.org'
wordpress_id: 8894
---

_**Authors: Alan Bennett, Tyler Baker, Kevin Hilman and Milo Casagrande**_


Linux maintainers see hundreds of patches during a Kernel version and there’s never enough time to thoroughly test every change. However, it’s always helpful to identify regressions early to prevent lost time bisecting failures after the fact. For years, a core group of arm-soc maintainers have been maintaining a build and boot test system, built from the ground up to make sure regressions were quickly spotted and addressed. At Linaro, we wanted to expand the system and add the capabilities to perform additional test activities beyond build and boot and leverage our LAVA test framework. Thus the LAVA team has been working with these maintainers to leverage Linaro’s LAVA automation and test platform.


Of course, with our experience we thought this would be a simple task, however we had to perform many experiments before we ended up with a system that was fast enough and robust enough to live up to scrutiny. In the end, we built a stand-alone system from the ground up leveraging Jenkins, Pyboot, LAVA, some custom scripts and built a dashboard system. A few key points we addressed during the last 12-18 months.

**Effective LAB administration**
Working with Kevin and his extensive test lab, we realized that the most important element in dev-board automation was the ability to effectively maintain the hardware within the lab. We determined it was better to support the automation system the administrator was using, versus forcing a foreign automation system onto the developer. This led us to create a platform agnostic dashboard and API to allow any automation system to integrate with the system as long as they supported the API. Today, [kernelci.org](http://kernelci.org/?july2015) is fed information from multiple boot farms, some administered by LAVA, and others by pyboot.

**Engagement from kernel engineers**
Of course, when trying to provide kernel engineers with a test system, they need to be involved. Trying to force a workflow onto a developer just resulted in them not using the system. If we wanted their help fixing kernel failures, it was vital that we created a system that aligned with their development workflows. To address this and better engage with the kernel developers, we also modified our test system and using Deploy_Linaro_Kernel in LAVA, a developer can simply deploy a kernel, minimal rootfs and a dtb to a platform, making it easier for developers to leverage the hardware within the LAVA lab.

**Build infrastructure needs to be fast**
With a goal of booting over 13,000 kernels a year, we were concerned with the speed and performance of our original EC2-based build infrastructure. After thorough review of over a dozen target systems, EC2, google cloud hosting, local bare metal and other systems, we were able to find a great solution. Not only could this system build all the kernels we needed, we could do it at a fraction of the cost. Today we are close to capacity using 7 dedicated build systems hosted @ [Hetzner](https://www.hetzner.de/en/) to build ~120 defconfigs on over 40 separate tree/branch pairs, on every change.

**If LAVA is to be used, it has to be faster**
The continuous integration system within Linaro was originally created to support Linaro image needs and most platforms were integrated into LAVA using master images and hardware packs. Using hwpacks enables Linaro to make sure the overall system is efficient at scale, however, it creates complexity and runtime processing steps that were not necessary to build the upstream build/boot system. With the benefits of using network-enabled bootloaders and some changes to LAVA, we were able to optimize the build/boot loop from over 20 minutes to under 2 minutes on most cases.

**Infrastructure stability**
Managing an automation system can be a challenge which gets exponentially more difficult with each additional use-case you try to support. In order to keep infrastructure failures to a minimum, we built a system that was solely focused on the [kernelci.org](http://kernelci.org/?july2015) use case. From the build system to artifacts storage to supporting volunteer labs (and lab admins), we created a system that is robust, and to a certain degree, fault-tolerant, in that if any facility is ‘ill’, the other labs will continue feeding results.

**Email reporting**
As we built the system, we met with the kernel leads at LCU14 as a way to understand their priorities. It was clear that the system must communicate the way they do and do it with integrity. Simply put, they wanted the system to create build and boot reports and report status on existing public mailing lists. This requirement is a culmination of the other improvement areas above as the only way this would work was if the results could be trusted and we had the support of the kernel developers / maintainers. As of LCA15, our results are now being published to the [kernel-build-reports](https://lists.linaro.org/mailman/listinfo/kernel-build-reports) mailing list.

**Powerful and extendable dashboard framework**
To support distributed labs and clean email reporting we needed to build a intermediate data processing system and a dashboard system so that you could collate results from multiple labs, make decisions based on the results and provide a reference system for future use cases.

{% include image.html name="boot-coverage-image.jpg" alt="Boot Coverage Image"%}

It is important to note that even with the great progress we have made, the overall problem is much larger. Today, v4.1, [kernelci.org](http://kernelci.org/?july2015) performed 457 boots across 3 processor architectures on 103 unique platforms and 24 SoC families. However there are a staggering 570 Device Tree Source (dts) files in the Linux kernel which means there are approximately ~467 ARM platforms that we are not able to test.

{% include image.html name="mainline-platform-coverage.jpg" alt="Mainline Platform Coverage"%}

## Using [kernelci.org](http://kernelci.org/?july2015) with Linaro Stable Kernels

Having an early warning system for build and boot regressions upstream has also been valuable for the Linaro stable kernel as the benefits of developing on the Linux kernel always flow down. Beyond mainline, we also use kernelci.org to validate the stable queues, making sure that no regressions sneak into the stable kernel, and also watch the test lsk branch to make sure any feature backports also do not introduce regressions.

{% include image.html name="chart-on-builds-and-boots.jpg" alt="Chart on Builds and Boots" %}

**What’s next?**

  * Adding more platforms and shared labs
  * Extending the system to encompass some tests (In-Kernel / kselftest, LKP, etc...)
  * Continue working on the in-kernel test infrastructure, kselftest
    * Help the project maintain cross compilation support and any build/test conflicts
    * Future Plans
      * Unify test output format to be machine parseable
      * Automate test execution on ARM64, ARM, and x86 architectures
  * Auto-boot-bisection; Now that we have a system to identify failures, we leverage the system to help identify the change within a tree that caused a failure by bisecting and booting kernels across target platforms
  * Now that we are beginning to add test capabilities, we are also working on overall test result parsing, display and generating clean email reports

**Recently added boards and other test coverage improvements**

  * Recently, we have added some new device targets:
    * Optimus-a80 (Allwinner A80 SoC),
    * Cubieboard 4 (Allwinner A80 SoC),
    * ZTE zx296702-ad1,
    * Annapurna Labs alpine-db,
    * Huawei hi6220-hikey,
    * Qualcomm DB410c (apq8016-sbc)
    * aarch64-kvms (allowing us to boot test mainline kernels ARM kvm’s on APM and ARM Juno platforms)
    * Gumstix OMAP4 Duovero
    * Gumstix AM335x Pepper
    * SmartRG SR400ac
    * MediaTek 8135 EVB P1
  * Boot targets added to include NFS and MMC boot targets

**Testing supporting the 96boards.org initiative**

When the 96boards arrive, both physically and as support also arrives in the upstream kernel, we’ll make sure they are added.

  * [Hi6220-Hikey](http://kernelci.org/boot/hi6220-hikey/): The recent enablement patch series for getting minimal HiKey support into the 4.2 Linux kernel, you can follow the link to see it booting in 4.2 RCs
  * [Dragonboard 410c (apq8016)](http://kernelci.org/boot/apq8016-sbc/) has also been added, and providing Linaro’s Qualcomm Land Team with build & boot testing as well as mainline kernel build and boot testing

**Some notable bugs found**

[kernelci.org bug tracker can be found here: [https://github.com/kernelci/kernel-bugs/issues](https://github.com/kernelci/kernel-bugs/issues)]

  * Allwinner Boot Failures
  * [https://github.com/kernelci/kernel-bugs/issues/23](https://github.com/kernelci/kernel-bugs/issues/23)
  * IMX6Q Boot Failures
    * [https://github.com/kernelci/kernel-bugs/issues/20](https://github.com/kernelci/kernel-bugs/issues/20)
  * X86 Boot Failures
    * [https://github.com/kernelci/kernel-bugs/issues/22](https://github.com/kernelci/kernel-bugs/issues/22)
  * Stable 3.19.7 Boot Failures
    * [https://github.com/kernelci/kernel-bugs/issues/24](https://github.com/kernelci/kernel-bugs/issues/24)

**What the community is saying**

  * [https://plus.google.com/105446846339629686466/posts/EsvEPznMhyM](https://plus.google.com/105446846339629686466/posts/EsvEPznMhyM)
  * [https://plus.google.com/+DanielStone/posts/7JsNfUdpU1t](https://plus.google.com/+DanielStone/posts/7JsNfUdpU1t)
  * AT91 family of processors join the group of multi-zImage platforms [https://plus.google.com/104934465431918795983/posts/fQfh8yL3PwW](https://plus.google.com/104934465431918795983/posts/fQfh8yL3PwW)
  * Discussed as a resource in Tim Bird’s State of Embedded Linux for April 2015 [http://elinux.org/images/1/15/Status-of-Embedded-Linux-2015-04-JJ52.pdf](http://elinux.org/images/1/15/Status-of-Embedded-Linux-2015-04-JJ52.pdf)

**Helpful Links**

  * Boot failure bug tracker: [https://github.com/kernelci/kernel-bugs/issues](https://github.com/kernelci/kernel-bugs/issues)
  * Kernel build report mailing list: [https://lists.linaro.org/mailman/listinfo/kernel-build-reports](https://lists.linaro.org/mailman/listinfo/kernel-build-reports)
  * kernelci.org wiki: [http://wiki.kernelci.org](http://wiki.kernelci.org)
  * kernelci.org api: [http://api.kernelci.org](http://api.kernelci.org)
  * kernelci.org frontend: [http://kernelci.org/](http://kernelci.org/?May2015)