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

{% include image.html path="/assets/images/content/lkft.png" class="small-inline left" alt="LKFT icon" %}

[KissCache, the "simple and stupid caching serve](https://www.linaro.org/blog/the-kisscache-caching-server/)r", is a newly released open source project from Linaro that is now used in production by the Linux Kernel Functional Test (LKFT) project. KissCache is used to cache and serve binary artifacts to Linaro’s LKFT LAVA instance. These artifacts are held in Amazon S3. Using Kisscache both saves Linaro money by caching artifacts in the Linaro lab (reducing bandwidth usages from S3) as well as increases job execution time because artifacts are served much more quickly, and therefore systems are provisioned more quickly.

Unlike classical proxies like Squid that transparently intercept traffic, in order to use KissCache one must explicitly prefix the requested URL by the URL of the local KissCache instance. KissCache will download the requested resource in the background while streaming it to the client. Kisscache’s primary use case is for downloading and caching https (secure) content. It preserves the chain of trust, whereas Squid really only works properly with non-secure content.

If many clients are requesting the same resource, KissCache will download it only once and stream the content to every client. In the last month, Linaro’s KissCache deployment handled more than 160k requests, serving 32TB of data while only downloading 1TB from outside of the Linaro lab. This has a real cost savings of over $2000 per month.

### **Tuxpub - The Serverless Cloud-Based Artifact Server**

By Ryan Arnold, Director, System Technologies

{% include image.html path="/assets/images/content/lkft.png" class="small-inline left" alt="LKFT icon" %}

At Linaro, we have often hosted artifacts from Amazon S3 using a custom tool known as Linaro License Protection (LLP). LLP started life serving files from local disk storage, then later moved to use Amazon S3. Technically LLP provides an S3 browsing interface. However it was never designed to run under a serverless architecture. This coupled with other necessary Linaro/License features (such as authentication) means that LLP doesn’t fit a “simple serverless” model.

Linaro is presently working on a SaaS offering called [TuxBuild](https://gitlab.com/Linaro/tuxbuild) (and companion service called TuxBoot). These technologies are implemented using the new serverless model and have a need to provide artifacts from cloud storage using a lightweight application that provides a file browser as a web-based user front end.

The original implementation of Tuxpub used Javascript, but we quickly realised it wasn’t scalable, it wasn’t conformant with what web tools expect, and it lacked features which our users were demanding (such as the ability to pull the file contents in JSON) for browsing programmatically. After searching for existing solutions we discovered that there were no available light-weight tools to solve our problems!

We built a wishlist of the following features and requirements that we felt a proper file server would honour and set about building tuxpub:

* Serverless methodology for easy deployment and management
* Ability to block the index page so people cannot browse other folders
* Allow users to access a JSON output of the page for easy downloading

The following is a sample file browser front-end being served by tuxpub for the TuxBuild project:

{% include image.html path="/assets/images/content/ai.png" class="small-inline left" alt="AI icon" %}