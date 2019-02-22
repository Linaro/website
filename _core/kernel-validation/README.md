---
core_id: "2"
title: Kernel Validation
description: |-
    The mission of the Kernel Validation team (KVT) is to perform functional regression testing on select Linux kernel branches in real time (as they’re updated) and report any regressions as quickly as possible.
keywords: linux, Arm, kernel,upstream, coresight, MMC, LSK, kexec, kdump,storage,memory management,device tree, validation, lkft
permalink: /engineering/core/kernel-validation-and-testing/
image: /assets/images/projects/kernel.png
tech-lead: Dan Rue
---
The mission of the Kernel Validation team (KVT) is to perform functional regression testing on select Linux kernel branches in real time (as they’re updated) and report any regressions as quickly as possible. This is performed by executing a variety of functional-tests on a selection of user-space operating systems.

The goals of KVT are to shorten derivative Linux kernel release intervals, increase the confidence of upstream Linux kernel engineers in the quality of their releases, and increase the confidence of downstream adopters of those Linux kernel trees. Ultimately the goal is that KVT will encourage downstream hardware vendors to more frequently update the Linux kernel that runs on their devices in order that consumers might benefit from bug and security updates.

As part of Linaro’s mission to improve the Arm architecture eco-system, the KVT team reports discovered regressions to Linaro kernel developers, Linaro members, and upstream Linux kernel engineers.

It is important to the Arm eco-system that Linaro also fix as many failures as are found. The KVT team invests time into identifying, reporting, and fixing upstream kernel regressions, identifying kernel regressions in select member-hardware SoC (system-on-a-chip) trees, fixing test-suites by contributing to upstream testing projects, fixing kernel configurations, improving full OS stack integration (firmware, kernel, userspace), and improving Arm device automation integration.

The results of running functional test against the LTS, mainline and next branches can be viewed here [https://lkft.linaro.org/](https://lkft.linaro.org/).
