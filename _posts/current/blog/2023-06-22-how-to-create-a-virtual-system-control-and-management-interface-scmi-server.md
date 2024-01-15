---
layout: post
title: How to create a virtual System Control and Management Interface (SCMI) server
description: This blog talks about the creation of a virtual SCMI server to fill
  the gap through the SCMI project. It also demonstrates how the concept of
  virtual SCP and SCMI server can be extended to other systems, providing a
  virtual power coprocessor to VMs and SPs as an example.
date: 2023-06-22 03:31:47 +02:00
image: /assets/images/content/Datacenter.jpg
tags:
  - Linux Kernel
category: blog
author: vincent.guittot
---
## Why do we need a virtual power coprocessor ?

In 2019, Linaro started to study how to provide a virtual System Control Processor (SCP) a.k.a. power coprocessor for systems without such HW device. The SCP aims to manage the power resources shared across the system and to coordinate system wide tasks. It handles requests from the application processors and other agents of the system and sets the state of those resources accordingly, managing conflicts and reference counting their use. [The SCMI specification](https://developer.arm.com/documentation/den0056/latest/) which stands for System Control and Management Interface, has been created to provide an OS independent interface between the agents of the system and the SCP. In this blog, we will talk about how we have created a virtual SCMI server to fill the gap through the [SCMI project](https://linaro.atlassian.net/wiki/spaces/SCMI/overview). We will also demonstrate how this concept of virtual SCP and SCMI server can be extended to other systems to provide a virtual power coprocessor to VMs and SPs as an example.

## Creating a virtual System Control Processor

Our first implementation of a virtual SCP has been an OP-TEE pseudo trusted application (PTA). The SCMI server has to run in a Trusted Execution Environment because it has to manage secure resources or resources shared between both secure and non-secure worlds. Regarding the transport layer, we originally considered using SPCI (which will then become FFA) but it was not yet ready for what we wanted to do so we finally chose to use native OP-TEE methods supporting both static and dynamic shared memory.

{% include image.html path="/assets/images/content/yuqb4yhqv0ttirn4nsm0n40_bs07smd0r31nmv1-mdacpsuew4jfojtgeufjgzx7eentnidi26ngxasnwyyspw4y8gaoj5eufqn1v1nxnfih7yjct4qqu4oylyce.png" alt="This framework provides information on various concepts and components related to the Linux Kernel and system-level operations" %}

Because SCMI is an extensible specification with the v3.2 beta version being available on the Arm developer website, we decided to leverage the [SCP-firmware code](https://github.com/ARM-software/SCP-firmware) which is a reference implementation of this specification instead of creating yet another one. As a result, optee_os uses the SCP-firmware source code for its SCMI server and the SCP-firmware supports optee-os as an Execution Environment in addition to the default bare metal mode or the CMSIS compliant RTOS mode.

All three parts (Linux, optee-os and SCP-firmware) have been merged and support synchronous and asynchronous commands. The current OP-TEE SCMI server has been tested with the [SCMI compliance suite](https://github.com/ARM-software/scmi-tests):

* **TOTAL TESTS: 94**

  ◦ PASSED: 75

  ◦ FAILED: 2

  ◦ SKIPPED: 17

The two FAILED tests are related to the support of notification and delayed responses which are the next development steps with patches under review on the mailing lists. The SKIPPED tests cover fast channel and permission agents that are not enabled on this version of the SCMI server. We are going to evaluate how to integrate this compliance suite in the TRS CI.

Since then, virtualization and device assignments have raised a lot of interest. During the “SOAFEE: hypervisor portability/device assignment” meeting, it has been discussed how to manage access to resources needed to initialize the devices assigned to VMs or SPs.  Because these devices can share resources like clock or power domains or just because a VM should only have access to the resources of its devices, we have to manage access permission. Such a feature is already possible with SCMI base protocol and hypervisor and/or SPMC can dynamically enable/disable access by using it and let the SCMI server deny or grant access to the resources. This helps to keep the hypervisor and the SPMC generic as they delegate power resources access management to an external SCMI server.

## Future Plans for SCMI

Our next activity will be to further extend the support of virtual SCMI servers by adding FFA as a new transport layer and by running the SCP-firmware in a Secure Partition. With the permission access command, the system will dynamically set or unset which resources can be accessed by a VM / SP while launching it. Furthermore, the power coprocessor, if present, will not have to manage those configurations but only system resources.

{% include image.html path="/assets/images/content/1mbw5j8fwcfjwmav_9omaezjs0hyicewscfo63qgtvqra88pow6n27kldyr8tb0gz-_pimdnorg8yrgtz4kum0mmhsgxgyzxnm3mzdjpf0_cp2b-bohgal286xrs.png" alt="This framework provides information on resources control and permission control related to the SCMI Server" %}

In order to ease the configuration of the SCP-firmware, we are adding the support of Device Tree at compilation time like what is done by [zephyr](https://github.com/ARM-software/SCP-firmware/pull/77). We also want to go further and find a generic way to identify the device’s resources and ease the SCMI server configuration. 

This will be the topic of the SCMI Project’s next public meeting that will be held June 29th at 5:00pm (CEST). This is an Open call so feel free to join and share with us your constraints or requirements for SCMI server configuration. Meeting and connection details are available [here](https://linaro.atlassian.net/wiki/spaces/SCMI/overview)