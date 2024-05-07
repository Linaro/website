---
layout: post
title: How to build and test the Linux kernel locally
description: >
  One of the toughest challenges developers face is the constant need to build
  and test the kernel on various hardware configurations. In this blog we look
  at Tuxsuite, a tool created by Linaro to make building and testing Linux
  kernels easier. 
date: 2024-05-07 02:31:55 +01:00
image: /assets/images/content/Banner_Toolchain.jpg
tags:
  - Testing
  - Tuxsuite
category: blog
author: alok_ranjan
---
# Introduction

Developing the Linux kernel is a complex and continually evolving process that demands significant technical expertise and computational resources. One of the primary challenges faced by developers is the constant need to build and test the kernel on various hardware configurations. 

Getting started with comprehensive kernel testing is a daunting task that can consume  a lot of time and effort, especially when resources are limited.

Whether you are a seasoned Linux kernel developer, just starting, or you are looking to streamline your Linux kernel development workflow, [TuxSuite](https://tuxsuite.com/), by Linaro, provides a suite of tools and services to help you with Linux kernel development on the desktop and in the cloud. TuxSuite leverages the containers built and maintained by Linaro for various toolchains with curated rootfs/testsuites to provide reproducible builds and tests.

In this blog post, we'll delve into one of its standout features: Local Plan Execution. But first, let's understand TuxSuite's plans.

# TuxSuite Plan Specification:

A TuxSuite plan is a Yaml file which is analogous to dockerfiles but for kernel builds and tests. You can think of it as a structured blueprint that describes  what needs to be built, booted, and tested under various hardware/software configurations. 

Previously, TuxSuite plans could only be executed in the TuxSuite cloud service. Now  developers can  run TuxSuite plans directly on their desktop machines.

A TuxSuite local plans can specify:

* Stand-alone kernel builds
* Stand-alone tests
* Set of kernel builds and set of tests to be run for each build
* Combination of all of the above

Below is an example of a simple plan file with a build and test.

```
version: 1
name: Simple plan
description: A simple plan
jobs:
- name: arm64
  build: {toolchain: gcc-13, target_arch: arm64, kconfig: defconfig}
  test: {device: qemu-arm64, tests: [ltp-smoke]}
```

# Why TuxSuite Plan Specification?

* Describe, maintain and share Linux kernel test plans
* Enable/disable additional parameters
* Scale from single build to thousands of builds and tests in a compact description.
* Shareable Reproducers similar to TuxMake and TuxRun reproducers.
* Analogous to Dockerfiles for kernel builds and tests

# Introducing Local Plan Execution

While TuxSuite excels in cloud-based environments, supporting  local plan execution opens up a world of possibilities for developers. With local plan execution, developers can harness the power of full TuxMake and TuxRun workflows  from their local development environment. 

# Benefits of Local Plan Execution with TuxSuite:

Let's explore some of the key benefits of leveraging TuxSuite's local plan execution:

* **Seamless Integration:** TuxSuite seamlessly integrates with local development environments, providing a consistent experience across different platforms and runtimes, such as podman and docker.
* **Enhanced Efficiency:** By executing plans locally, developers can take advantage of their local hardware resources, optimising the build and test process for efficiency.
* **Comprehensive Testing:** With TuxMake/TuxRun robust testing containers , developers can ensure the stability and reliability of their code through comprehensive virtual-target testing, even in local environments.
* **Simplified Development:** TuxSuite simplifies the development process by providing a unified platform for managing build and test tasks, reducing complexity and improving productivity.
* **Convenience:** Local execution eliminates the dependency on an internet connection for executing build and test jobs apart from fetching the needed container image, allowing you to work seamlessly even in offline environments.

It's worth highlighting that when running a local plan in TuxSuite, jobs are carried out one after another. Moreover, it's important to note that executing a TuxSuite local plan doesn't accommodate hardware testing.

However, developers can leverage TuxSuite's cloud services and functionalities to offload and speed up their development process and fully utilise all the capabilities of TuxSuite. To know about TuxSuite capabilities, [check here](https://learn.tuxsuite.com/features/).

# Local Plan Execution In Action:

Once you have your TuxSuite plan file ready, executing it locally is easy.

TuxSuite cli will parse the plan file, prepare the build's dependent tests and standalone tests hierarchy, and then execute it sequentially, one after another. If a build fails, its dependent tests will automatically be skipped. 

Execute a plan file:

`$ tuxsuite plan execute plan.yaml --tree <path-to-linux-source-tree>`

Execute a specific job from a  plan file:

`$ tuxsuite plan execute plan.yaml --tree <path-linux-source-tree> --job-name <job-name>`

Artefacts generated will be saved automatically under  ~/.cache/tuxsuite/plan/ folder.

You can also define your custom directory to save artefacts using --output-dir 
Option.

Let's checkout the execution of sample local plan file below:

```
version: 1
name: Simple plan
description: A simple plan
jobs:
- name: i386
  build: {toolchain: gcc-13, target_arch: i386, kconfig: defconfig}
  test: {device: qemu-i386, tests: [ltp-smoke]}

- name: arm64
  build: {toolchain: gcc-13, target_arch: arm64, kconfig: defconfig}
  test: {device: qemu-arm64, tests: [ltp-smoke]}
```

plan.yaml

!\[plan.yaml]{% include image.html path="/assets/images/content/plan-yaml.gif" "Plan Yaml"){:width="100%"}

# Conclusion

TuxSuite's new local plan execution feature brings increased development speed, potential cost savings, and offline work convenience to Linux kernel developer desktops. 

By incorporating this feature into your workflow, you can significantly enhance your Linux kernel development experience for managing build and test tasks.

## Useful Links

* [https://docs.tuxsuite.com/plan/kernel](https://docs.tuxsuite.com/plan/kernel/)
* <https://docs.tuxsuite.com/plan/kernel/subcommands/#execute>
* [https://tuxmake.org](https://tuxmake.org/)
* [https://tuxrun.org](https://tuxrun.org/)
* [TuxSuite Cloud access Request](https://docs.google.com/forms/d/e/1FAIpQLSdbYpVhYphuqD25nkZzx8vYlkLGib63Q9vADBd9-10iUNkHjQ/viewform)

## Bugs / Feature Requests

<https://gitlab.com/Linaro/tuxsuite/-/issues>