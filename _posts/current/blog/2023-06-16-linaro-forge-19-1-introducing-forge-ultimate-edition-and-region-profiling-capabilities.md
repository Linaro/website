---
layout: post
title: 'Linaro Forge 19.1: Introducing "Forge Ultimate" edition and region
  profiling capabilities'
description: In this blog we talk about the Linaro "Ultimate" edition and the
  capabilities it provides. Read more here!
date: 2019-06-25 02:38:31 +01:00
image: /assets/images/content/CCS_banner_image.jpg
tags:
  - Linaro Forge
  - HPC
category: blog
author: Patrick.Wohlschlegel
---
[Arm Forge 19.1](https://www.linaroforge.com/documentation/) is now available. This new major version includes the launch of a new Arm Forge Ultimate edition and the introduction of "region profiling", leveraging LLNL's work on Caliper.

Introduction of Arm Forge Ultimate
By popular request, we are launching Forge Ultimate, a new edition of Forge including DDT, MAP and Performance Reports in a single bundle. This new offering has been created to answer the needs of:

* **HPC development centres** who offer computing access to a wide range of very different end-users. This includes those looking for in-depth performance analysis from MAP and those seeking a simple view of the broad metrics provided by Performance Reports. These centres can now provide to their users the full capabilities of Arm's oprimization product offering by relying on one single package.
* **Professional code teams** who rely on dynamic analysis tools to feed their continuous delivery and automated testing frameworks. The ability to interface performance analysis reports with their systems helps code teams to identify and diagnose regressions much sooner.

Forge Ultimate is the most cost-efficient way to access Arm's capabilities across all platforms.

{% include image.html path="/assets/images/content/forge-editions-table.png" alt="forge editions table" %}

# Caliper and MAP: A marriage made in heaven

Created in 2014, LLNL has created a general purpose application introspection system called Caliper. This tool is designed for developers working with complex workflows and workloads which combine multiple packages, solvers and libraries. Caliper helps them improve their contextual understanding of an application. Using a simple API, users simply need to annotate their codes, link with the Caliper library and run their application to get valuable information.

LLNL "regularly embed Caliper annotations in large codes developed in-house to outline domain-specific abstractions, such as kernels or physics packages", explains David Boheme, Computer Scientist at LLNL and key contributor to the Caliper project.

{% include image.html path="/assets/images/content/calipher-image-forge.png" alt="calipher image" %}

On the other hand, MAP, Arm's parallel profiler, is very data driven and collects a wide range of metrics at runtime. MAP is designed to help developers understand application performance bottlenecks and extract the last drop of performance from their applications.

By relying on an interface between MAP and Caliper, users can now correlate regions information with performance metrics and data and associate regions with their application timeline. This innovative combination of technologies helps applications developers bring contextual information to their performance profiles. As David Boehme explains, "with the new Caliper support in Arm MAP, our developers can now easily navigate through MAP performance profiles using high-level abstractions rather than complex C++ call trees.”

{% include image.html path="/assets/images/content/calipher-image-2-forge.png" alt="calipher image 2" %}

Caliper is free, open-source and distributed [on Github](https://github.com/LLNL/Caliper). If you are interested, please let us know! Training materials and a technical webinar are being scheduled, and we would be delighted to send you an invitation. In the meantime, if you have time to try this new capability, please give it a good go and send us your feedback!

# Conclusion

I am excited to announce the availability of Arm Forge 19.1 with a new bundle and exciting new capabilities. Please get in touch to [request a trial](https://www.linaroforge.com/freeTrial/) or [buy a license](https://www.linaroforge.com/contactUs/). We plan to provide the next major release 20.0 towards the end of November 2019, with more features and improvements.