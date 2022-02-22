---
layout: post
title: Porting common Linux tools into Morello Architecture
description: "In this blog, Linaro interns Lorenzo Carletti & Camilla Memola
  talk about the work they did to help identify how easy (or difficult) Morello
  is to get started with. "
date: 2021-06-23 09:18:44
image: /assets/images/content/Chip_background_UNDER_2MB.jpg
tags:
  - Morello
  - Arm
  - Security
  - CHERI
  - Capability Hardware Enhanced RISC Instructions
  - cURL
  - wget
category: blog
author: linaro
---
## Introduction

[Morello](https://developer.arm.com/architectures/cpu-architecture/a-profile/morello) is a research program developed by Arm in collaboration with the University of Cambridge. Its aim is to develop and use a Capability Hardware Enhanced RISC Instructions (CHERI) architecture. Morello makes use of non-software-forgeable 128(+1)-bit Capabilities, which should be able to limit how references are used. This has the potential to improve memory safety, which should, in turn, make future systems more secure. Capabilities can also help with software compartmentalization, ensuring that  the effects of an attack are less severe. In order to test the architecture, there is currently a Morello compatible Android build.

Since Morello is a research project, it has many loose ends and open questions. A key element for new software projects is that they’re somewhat easy to get started with and work with. The purpose of the work undertaken by Linaro interns Lorenzo Carletti and Camilla Memola (overseen by Joakim Bech, Distinguished Engineer at Linaro) was to understand where Morello falls on the scale. Is it really complicated and cumbersome to work with or is it something that is fairly easy to get started with? By working on the Morello project, the Linaro interns were able to report back to the people running the project as to what work was needed to simplify getting started. 

## Porting cURL to Morello

By Lorenzo Carletti

Morello's Android build can run programs in 64-bit and 32-bit modes, but software compiled to run like that does not make full use of CHERI Capabilities. To ensure that the Capabilities are used, one has to compile software with the capabilities enabled. 

The chosen target was [cURL](https://curl.se/), a command-line tool for getting or sending data, including files, using URL syntax. The porting process to CHERI Capabilities was pretty smooth, however it did highlight some issues with the current environment. BoringSSL, which is Android's SSL library, had alignment issues, both at compile-time and at runtime. The lack of gdb support and other debugging tools made it harder than it needed to be to understand what was wrong with it, as cURL would just crash with a SIGBUS as soon as it was started, and other traditional debugging methods (like using printf) wouldn't work. Other than that, it was a success.

One can find the curl port's Merge Request here: 

<https://git.morello-project.org/morello/android/platform/external/curl/-/merge_requests/1>

## [](https://git.morello-project.org/morello/android/platform/external/curl/-/merge_requests/1)Porting wget to Morello

By Camilla Memola 

In order to use the full potential of CHERI Capabilities, any tool has to be compiled with 
capabilities enabled using specific flags. The goal of this contribution was to port tools that are used on a daily basis in Linux to Morello with CHERI Capabilities.

The ported tool was [wget](https://www.gnu.org/software/wget/), a command-line tool for retrieving  files using HTTP, HTTPS, FTP and FTPS, the most widely used Internet protocols. The porting process to CHERI Capabilities was executed without a lot of issues, but a few problems occurred that resulted in adjustment in the source code in order to be able to port the code to Morello architecture with capabilities enabled.

The steps followed to do the porting can be found here: <https://github.com/CamillaMem/wget>

## Conclusion

With some initial guidance it wasn’t too difficult to port applications to run as pure capability binaries if you are somewhat used to working with an Android/AOSP build environment. 

We set no rules about the tools and applications to port, but we ended up with two that are used a lot on a daily basis, namely curl and wget. Officially more than [250 companies](https://curl.se/docs/companies.html) are using curl in one way or another. So, it made a lot of sense to see what it’d take to port curl to run as a pure capability application in Morello. Wget is a similar tool, probably not as popular as curl, but wget is something that lots of people are using in shell-scripts etc, so definitely a good choice.

## How to get involved with the Morello project

To begin with external contributors had to sign a contributors agreement to get involved with the project. This is no longer required, making it easier for future developers interested in the project to get involved. To see what is currently being worked on or to submit merge requests, click on the Morello Project’s Gitlab link here: <https://git.morello-project.org/morello>

For more information on Linaro and the work we do, [contact us here](https://www.linaro.org/contact/).