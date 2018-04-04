---
author: mathieu.poirier
categories:
- blog
comments: true
date: 2014-10-30 14:33:00
description: "A lot of exciting things have happened in the world of ARM\xC2\xAE Coresight\xE2\x84\xA2
  since our first blog post a few months ago. Good progress was achieved on several
  fronts"
excerpt: "A lot of exciting things have happened in the world of ARM\xAE Coresight\u2122
  since our first blog post a few months ago. Good progress was achieved on several
  fronts and we thought an update was in order to keep readers informed on the latest
  developments."
layout: post
link: /blog/core-dump/coresight-tracing-update/
slug: coresight-tracing-update
tags:
- Core Dump
- arm
- CoreSight
- kernel
title: 'Coresight: Tracing the Update'
wordpress_id: 7171
---

# Coresight: Tracing the Update

A lot of exciting things have happened in the world of ARM® Coresight™ [since our first blog post](/blog/coresight-initial-steps-supporting-hw-assisted-tracing-linux-arm-socs/) a few months ago. Good progress was achieved on several fronts and we thought an update was in order to keep readers informed on the latest developments.

As of this writing, the [8th](https://lkml.org/lkml/2014/10/20/548) version of the “Coresight framework and drivers” patchset has been posted for review. The most important modification to the framework since our first write up was to revert to the creation of a new “Coresight” bus where discovered IP blocks are aggregated. As such the configuration blocks for each component were taken out of debugfs and added back to sysfs, following the Linux kernel’s bus model and the original implementation.

We have seen very interesting progress in several areas that were detailed in our first post, most notably regarding STM, ARMv8, integration with _ftrace_ and continuous integration testing in our LAVA environment. Work on the STM32 driver is currently well underway and an initial RFC is scheduled for the end of October or early November. The framework itself has been compiled to run in a 64-bit environment and integration to the Juno platform and other systems from member companies is imminent. Moreover a strategy to add hooks to the _ftrace_ subsystem has been identified, allowing Coresight related manipulation to be added to the _ftrace_ path without impacting system performance. Last but not least a Coresight test environment is being developed in our LAVA lab, allowing for continuous integration testing and automating the verification of SoCs presenting very complex Coresight topologies.

Before concluding we’d like to bring the spotlight on a couple of new areas of improvement we are currently working on. The first one is the integration of the Coresight framework with run time power domain management. Using the generic power domain framework already available in the Linux kernel we intend to use the run time power management API to make sure that a power domain associated to a Coresight component doesn’t get switched off by another subsystem while is it actively tracing. We have identified the required building blocks to enable the feature and currently working on the implementation.

The second improvement is related to boot time initialisation of the Coresight blocks, something very useful for trace scenarios like user space initialisation and continuous recording mode. Initial configuration will be conveyed to the kernel using the device tree subsystem. At this level we teamed up with a device tree expert to come up with a new configuration binding and operation code to hold configuration values.

As always, we encourage people to look at our work and provide comments to improve the solution. So far, working with the community has allowed us to take the project into areas we never expected, building a new subsystem that is comprehensive, versatile and powerful.