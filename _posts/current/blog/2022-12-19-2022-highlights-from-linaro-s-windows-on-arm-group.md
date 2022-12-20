---
layout: post
title: 2022 Highlights from Linaro’s Windows on Arm Group
description: "In this blog we look back at the first year of Linaro's Windows
  Group to see what it has achieved so far in its mission to build a
  self-sustaining Windows on Arm ecosystem. "
date: 2022-12-19 09:28:41 +00:00
image: /assets/images/content/blog_python_woa.jpg
tags:
  - Windows on Arm
  - WOA
  - Arm
  - Microsoft
  - Linaro
  - Qualcomm
  - CIX Technology
  - Python
  - Flang
  - LLVM
category: blog
author: julianus.larson
---
Linaro’s engagement in Windows on Arm is a steadily growing area. This year has seen the launch of [the Linaro Windows Group](https://www.linaro.org/news/microsoft-joins-linaro-arm-and-qualcomm-technologies-to-advance-windows-on-arm/) to improve the cooperation, governance and control of the area. In this blog we talk about the milestones that have taken place since launching the group. 

## The need for native Windows on Arm development

Windows on Arm is, of course, a very interesting topic. It brings for example the low power consumption of the Arm devices to the Windows ecosystem and it brings the Windows operating system to hardware OEMs, creating great possibilities for people and new devices.

This all sounds great, but unfortunately, you can not simply switch your laptop to an Arm based device and expect everything to work out of the box. To run your favourite applications they need to be recompiled for the Arm processor to run natively or run in emulation with a performance penalty. Even though emulated applications work without modification, they don’t offer the same performance, integration with hardware or security, so a certain amount of native applications is needed for the platform to thrive. The list of applications that can run natively on Windows on Arm is continuously growing and open source software plays a big part in this. There are many open source applications and tools available to support the development and this is where Linaro is very well placed to make a difference.

## What has been enabled for Windows on Arm so far

To convince the Windows ecosystem that Linaro would be able to help improve the support for Windows on Arm, Linaro did a proof of concept getting the [LLVM toolchain to run and create software directly for Windows on Arm](https://www.linaro.org/news/linaro-arm-and-qualcomm-collaborate-to-enable-native-llvm-for-windows-10-on-arm/). The next step was to see what it took to enable an application. QT is an open source project where Linaro employees have experience and it was selected for adaptation to Windows on Arm. These two proof of concepts were very successful and the Linaro members, Microsoft, Qualcomm and Arm started a project together with Linaro with the goal to establish a healthy self-sustaining Arm open source ecosystem for Windows. The project was aptly named Windows on Arm.

One of the first tasks of the new project was to get the [Python ecosystem running natively for Windows on Arm](https://www.linaro.org/blog/windows-on-arm-now-supported-in-python-3-11-release/). Even though it sounds like a well defined and confined task it was soon evident that, with the great number of packages and libraries available for Python, many other areas needed to be tackled. One example of this is when enabling certain math libraries. These libraries were implemented in Fortran and so it was necessary to get a compiler and tools for Fortran. Once again the Toolchain team at Linaro got involved and enabled [Flang for Windows on Arm](https://www.linaro.org/blog/how-to-build-flang-on-windows-on-arm/) and the Python enablement could continue.

Another important part of the development is to ensure that the effort is not wasted and that the applications will continue to work in the future as well. Linaro’s continuous integration team and lab team has been involved to set up automatic testing to secure the achievements of the project.

## CIX Technology joins as a Member

During this period Linaro gained [a new member, CIX Technology](https://www.linaro.org/news/cix-technology-joins-linaro-s-windows-on-arm-group/). CIX Technology is a start-up which aims to create intelligent computing solutions for cutting edge client devices based on the Arm architecture. The company also shares a great interest in the Windows on Arm initiative and started a project with Linaro called [Arm Client PC](https://linaro.atlassian.net/wiki/spaces/CLIENTPC/overview). The project aims to investigate and develop SystemReady compliant UEFI and ACPI  firmware and kernel solutions for enabling fully functional client PCs for Arm-based hardware running either Linux or Windows. This project will help OEMs to have a generic way of booting the two operating systems and resort to customised software for each type of device.

## Windows Perf Project

Making progress with open source projects such as Python, Perl, Flang etc, inevitably leads to the questions: Have we enabled enough things yet? Is the performance enough?

To help answer the last question another project was started at Linaro together with the members Arm, Qualcomm and CIX Technology called [Windows perf](https://linaro.atlassian.net/wiki/spaces/WPERF/overview). This project aims to create a Windows on Arm perf tool with the same command line interface as the Linux perf tool so that you can do [deep performance analysis](https://community.arm.com/arm-community-blogs/b/infrastructure-solutions-blog/posts/announcing-windowsperf). The tool is of course open source so it is not only beneficial for Linaro and members, but also the wider community of developers for Windows on Arm.

With the growth of the original project and more work and ideas coming up in the Windows on Arm area, the controlling entity, which up until now had been called the Windows on Arm Steering committee, was formalised and the Linaro Windows group was launched. The group consists of Linaro employees and representatives from member companies.

## Conclusion

To summarise, the Windows on Arm ecosystem is growing continuously and is here to stay. Maybe your next laptop will have an Arm processor?

To find out more about the Windows on Arm project go to [our project page](https://www.linaro.org/windows-on-arm/).