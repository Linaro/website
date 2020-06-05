---
layout: post
title: 'Linaro Engineering Highlights: May 2020'
date: '2020-06-05 11:58:17'
image: /assets/images/content/open_source_keyboard_under_2mbjpg.jpg
tags:
  - Linaro
  - Engineering
  - Highlights
  - KissCache
  - Tuxpub
  - Ledge
  - Raspberry Pi
  - Firmware
  - AI
  - Projects
category: Blog
author: jon.burcham@linaro.org
---
### **Linaro AI Project: uTVM**

By Tom Gall, Director, AI/ML Project Lead

{% include image.html path="/assets/images/content/ai.png" class="small-inline left" alt="AI icon" %}

TVM is an AI compiler for inferencing which can create highly optimized binaries for deploying on ARM systems. Micro TVM or uTVM is an effort to leverage the advanced technology in the compiler infrastructure as applied to microcontroller devices.

From the Members meeting in January you might remember the exercise to determine what activities would bring value to Linaro members involving AI on microcontrollers. The recommendation delivered to the LITE-SC was to approve a uTVM project as part of the AI efforts within Linaro. The LITE-SC vote is in progress as this is being written.

If any individual member would like a briefing we are happy to do so.

A product level specification, internal to Members and Linaro only, has been created which documents the various modifications / goals that need to be completed in order to evolve uTVM from its current PoC/Alpha state to a mature piece of software which can be utilized within Member products. The creation of this document is a group effort by those engaged in the project. The document will serve as our roadmap to success

Engineering related to the project has already begun:

[Arm Ethos-N integration RFC](https://discuss.tvm.ai/t/rfc-ethosn-arm-ethos-n-integration/6680) 

[First microTVM testcase (Merged)](https://github.com/tom-gall/incubator-tvm/commit/30e3ce99a7dc7aef9c388e0ebc05018b4c4ba721)

The project is open to club/core Members to join.  If a Member is not a club or core Member or part of the LITE-SC, they may also join by either joining LITE or by becoming a project member.

Email tom.gall@linaro.org for details or questions.

### **Firmware Framework for Arm (FFA) Specification \[1.0 EAC release]**(https://developer.arm.com/docs/den0077/a)

By Mike Holmes, Director, Foundational Technologies

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}

Arm and Linaro have been collaborating on prototypes with changes in the OP-TEE kernel driver, OP-TEE OS and Trusted Firmware based on the different versions of the FFA (formerly SPCI) specification.

Having the OP-TEE regression suite xtest pass has improved confidence in the different versions of the specifications. Later versions of the prototypes have also included a secure world (S-EL2) hypervisor based on Hafnium. Linaro created the first prototype and after that it has been a shared effort.

### **KissCache: A New Caching Server**

By Ryan Arnold, Director, System Technologies