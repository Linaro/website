---
layout: post
title: Windows on Arm and the possibilities of native development
description: This blog covers public statements captured during the discussion
  on Windows on Arm, highlighting what is possible today & why porting natively
  is the way to go.
date: 2021-10-12 02:05:49 +01:00
image: /assets/images/content/llvm-image.jpg
tags:
  - Windows
  - WoA
  - Snapdragon
  - Qualcomm
  - Microsoft
  - Arm
  - LLVM
  - Windows10
category: blog
author: ebba.simpson
---
Linaro is working with Arm and Qualcomm to bring together other participants in the Arm ecosystem, identify gaps in the native support of key open source tools for Windows on Arm and set up the required upstream CI to produce the official binaries in collaboration with the upstream project maintainers. The aim is to create an open source community around Windows which supports third parties and ensures a good user experience. 

In April 2021, [Linaro announced the availability of the Windows 10 on Arm support and binary as part of the LLVM 12.0.0 release](https://www.linaro.org/news/linaro-arm-and-qualcomm-collaborate-to-enable-native-llvm-for-windows-10-on-arm/). This was the first LLVM release for Windows 10 on Arm and marked a significant step towards enabling developers to build natively with LLVM on Windows 10 on Arm. LLVM is one of the main tools the open-source community uses to compile their code. 

A few weeks ago, we hosted a panel at Linaro Virtual Connect Fall 2021 featuring Arm, Qualcomm and Microsoft where we discussed the current status of Windows on Arm and what work is left to do. This blog is based on public statements captured during the panel discussion on Windows on Arm, highlighting what is possible today and why porting natively is the way to go. [Click here to watch the complete discussion](https://connect.linaro.org/resources/lvc21f/lvc21f-300k2/). 

## The promise of Arm hardware - all day battery life and fast performance

Arm has proven it is strong on power consumption, fast performance and battery life, making it a good choice for developing new device form factors. At present there are plenty of tools out there that allow you to emulate, meaning all the third party experiences delivered by Windows running on the Arm chip will just work.  

Your x86 application will work on Windows on Arm using Microsoft’s emulation platform built into the operating system. On Windows 11, x64 emulates on the device. There is even a new hybrid called Arm64 EC which allows you to bring together emulated assemblies and native assemblies into the same process to ease the steps of migrating. 

However, to truly leverage all day battery life and the highest level of performance, we need to move away from emulation and move towards porting natively. Porting natively not only improves overall performance and battery life but also reduces costs and uses fewer instructions. 

This is why Linaro has launched the Windows on Arm project, to work with the Arm ecosystem on creating the tools needed to natively port. 

## Windows on Arm today and how to get started developing

A lot has happened since Windows on Snapdragon was first introduced in 2017. 

From the toolchain perspective there are several options to choose from, including the Windows 10 on Arm support and binary that was part of the LLVM 12.0.0 release ([and can be accessed here](https://www.linaro.org/downloads/#gnu_and_llvm)). 

When it comes to third party applications there are multiple options for emulation, using Microsoft’s emulation platform or Arm64 EC which is available with Windows 11. Arm64 EC allows you to run third party applications in emulation while your core components run native. Arm continues to work on upstreaming support and has so far upstreamed Elektron and CEF support, as well as contributed a native build of Chromium. 

As for testing, there are plenty of devices to choose from- both the standard commercial Surface ProX as well as [Qualcomm’s Snapdragon developer kit](https://developer.qualcomm.com/hardware/windows-on-snapdragon/snapdragon-developer-kit) are good options. You can read more about how to get started with Windows on Snapdragon [in this blog post](https://developer.qualcomm.com/blog/windows-snapdragon-developer-highlights) by Rami Husseini, Director of Product Management for Qualcomm Technologies, Inc.  

## How do I get involved?

To get started there are plenty of resources on [developer.arm.com](https://developer.arm.com/) such as case studies which talk about moving to a native Windows application. Qualcomm and Microsoft Azure have also partnered to provide support to developers. So grab a device, start porting and get involved in the community. Compile it, see what dependencies you have and let us know what needs doing!

For more information on the project and how to get involved, [go to the Windows on Arm project homepage here](https://linaro.atlassian.net/wiki/spaces/WOAR/overview). To find out more about Linaro and the work we do, [contact us here](https://www.linaro.org/contact/).