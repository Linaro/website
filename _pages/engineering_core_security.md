---
title: Security work at Linaro
description: |-
  The Linaro Security Working Group (SWG) mission is to support Arm Open Source Linux distributions on security related topics.
keywords: OP-TEE, TEE, Arm, Arm-Trusted-Firmware, GlobalPlatform, Security
permalink: /engineering/core/security/
projects:
  - title: OP-TEE
    url: /engineering/
related_tags:
  - OP-TEE
  - Security
  - Trusted Firmware
  - SWG
layout: flow
related_resources_tracks: https://connect.linaro.org/assets/json/security.json
js-package: engineering
image: /assets/images/content/engineering/png/core_engineering.png
jumbotron:
  title: Security work at Linaro
  inner_class: dotted
  description: ""
  image: /assets/images/content/engineering/context/stewardship.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club
        source: related_members.html
  - row: main_content_row
    style: large_type introduction_row py-0
  - row: custom_include_row
    source: engineering_related_resources.html
---

The Linaro Security Working Group (SWG) was created to help ensure an optimised
and efficient software ecosystem exists to support Arm Open Source Linux
distributions on security related topics, and to accelerate the delivery of high
quality secure products across the Arm Open Source ecosystem. The team’s mission
is to avoid and prevent fragmentation of implementations underpinning security
within Arm based systems.

In order to enable secure boot and to enable security on devices one has several
choices to make depending on what architectural layer you are working with. The
SWG are doing work in both normal user space applications as well as
implementing drivers and adding general security enhancements to Linux kernel.
Another area where SWG spends a lot of time is in the so called Trusted
Execution Environment (TEE). Find out more about Linaro's work on OP-TEE on this [website](https://www.op-tee.org) or on the project's own [domain](https://www.op-tee.org/).

The SWG is creating reference designs showing how normal and Trusted Application
code and libraries can be integrated within a particular platform such as
Android. Activities include the development of an Open Source reference
implementation of the W3C Encrypted Media Extension (EME) using platform
security features for secure media playback on mobile and digital home devices;
and an Open Source reference implementation of secure boot for the 64-bit Arm
Cortex-A series processor cores to complement the Arm Trusted Firmware open
source project, targeted at server applications.

By delivering tested reference Open Source software Linaro will enable SoC
vendors, OEMs and application developers to more easily understand how to design
and build secure applications across a wide range of Arm products and segments.
These include the Internet of Things, mobile devices, the digital home.

### Objective

- Key player in software related to security such as TEE solutions and kernel
  hardening on Arm systems.
- Stabilize Armv7-A and Armv8-A TEE solution(s) running on Android.
- Active role in open sourcing a TEE.
- Active part of Linaro’s (LHG) mission creating DRM/EME reference.
  implementations for Android and Comcast RDK.
- Kernel hardening - with Arm contribution in [Kernel Self Protection Project].
- Include, [Travis], LAVA and CI in the all tasks.
- Actively monitor and contribute to relevant Open Source projects.
- Deliver the Linaro Open Source Security Project

### Process

The Security Working Group does all planning and tracking in
[JIRA] which you can follow in detail if you are a Linaro member and have the required access
(Linaro IT gives access).

- [JIRA Security roadmap] (password required): https://cards.linaro.org/secure/StructureBoard.jspa?s=138
- [Kernel Self Protection Project](https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project): https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project
- [Travis](https://travis-ci.org/OP-TEE): https://travis-ci.org/OP-TEE
