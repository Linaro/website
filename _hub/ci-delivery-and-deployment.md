---
title: CI, Delivery & Deployment
description: >
  Continuous integration (CI) is the process of automating and integrating code changes
  and updates into the software development process. Typically, a developer will create
  code locally, subject it to testing and then frequently propose the code for integration...
general: >
  ## Continuous integration, delivery and deployment

  Continuous integration (CI) is the process of automating and integrating code changes and updates into the software development process. Typically, a developer will create code locally, subject it to testing and then frequently propose the code for integration into the code base. Automated tools ensure that the proposed update is valid and error-free before it is integrated. Many developers may contribute changes before a new version of the software is proposed for release to users.

  Continuous delivery (CD) is the ability to push new software into production regularly, often many times daily. Automated tools and processes manage CD. Many builds may be created, tested and refined to fix bugs or enhance functionality. The build is delivered to a runtime environment for integration, quality assurance, or pre-production. Functional and performance tests are run against the application.

  Continuous Deployment (CD) means code is deployed to production environments and made available to users. The deployment pipeline automatically launches and distributes software to end users.

  Continuous deployment is seen to be the logical development of first adopting CI and CD. It is the ultimate cycle of planning, creating, building, testing, deploying, operating and monitoring applications. Continuous feedback mechanisms are integrated into the cycle to ensure rapid improvements in quality, functionality and user satisfaction. 

  The CI/CD pipeline has four distinct phases:

  ### Build

  Code is created and compiled. 

  ### Test

  Testing is automated and typically includes integration, unit, and regression tests.

  ### Deliver

  Code is delivered to a production environment. This stage is automated in continuous deployment and is only automated in continuous delivery after developer approval.

  ### Deploy

  Changes are deployed and made available to users.

  The C/CD pipeline is distinguished by the use of automation tools to ensure code quality and rapid development processes. As software progresses down the pipeline it is subjected to pre-defined quality gateways. Test automation is used to identify dependencies, security issues, API usage, and performance earlier. The pipeline pushes code to different environments and ultimately delivers applications to production environments and real users.

linaro: >
  ## Linaro and Continuous integration, delivery and deployment

  ### Linaro Automation and Validation Architecture (LAVA)

  LAVA is an open source industry standard for embedded device automated testing and validation. It can also be applied to IoT and server-grade devices. It serves applications that have hardware dependencies. LAVA performs testing for firmware, Operating System (OS), application and producer-consumer. 

  LAVA is a collection of participating logical components in an evolving framework. It is a Continuous Integration (CI) system to deploy operating systems onto physical and virtual hardware. LAVA can be easily incorporated into existing comprehensive CI loops. Tests can be simple boot testing, bootloader testing or complex system testing. 

  Hardware emulation based on Quick Emulator (QEMU) is supported, but LAVA excels with real hardware. 

  ### Linaro TuxSuite™

  TuxSuite™ delivers on-demand APIs and tools to build Linux kernels in parallel and at scale:

  #### TuxMake™

  TuxMake™ enables Linux kernels to be built, developed and debugged locally. Builds can be scaled automatically and in parallel. Linux builds are automated across different architectures, configurations, targets and toolchains. 

  #### TuxBuild™

  TuxBuild ™ exposes an on-demand API to build massive quantities of Linux kernels in parallel. It can be seamlessly integrated with your command line or Continuous Integration (CI) and Continuous Deployment (CD) systems. 

  #### TuxPub

  TuxPub™ is the open source AWS S3-backed Serverless File Server, used by TuxSuite to globally distribute build artefacts.

  ### Linaro’s Linux Kernel Quality program

  Linaros Linux Kernel Quality program encompasses both Linux kernel testing and testing of the Long Term Supported (LTS)-derived Android common kernel from the Android Open Source Project (AOSP).

  Linaro’s Linux Kernel Functional Testing (LKFT) framework is a long-running project that provides unparalleled coverage over 6 Linux LTS releases, the linux-next branch and linux-mainline branches. Functional regression testing is performed in real-time over an array of release, architecture and target combinations. 

  ### Linaro Software Quality Dashboard (SQUAD)

  SQUAD is a web based reporting tool.  It can collect pass/fail results and benchmarks from direct submissions or from testing tools such as LAVA.

  SQUAD is an extensible and sophisticated reporting engine, supporting multiple groups and multiple projects simultaneously. Each project can have many test runs. Tests can have different pass and fail triggers or metrics with differing measurement values. Results can be composed into a suite to aid comparative analysis. Suites are associated with a single environment. An environment is composed of hardware, configuration, operating system and build combinations. Results are organised against environments to enable valid comparison.
---
