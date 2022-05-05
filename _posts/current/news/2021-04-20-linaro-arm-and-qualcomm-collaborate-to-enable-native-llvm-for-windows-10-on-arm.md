---
layout: post
title: Linaro, Arm and Qualcomm® collaborate to enable native LLVM for Windows
  10 on Arm
description: Linaro, Arm & Qualcomm® collaborated to enable native LLVM for
  Windows 10 on Arm. Allowing developers to recompile their apps faster by using
  the LLVM toolchain.
date: 2021-04-20 09:02:44
image: /assets/images/content/llvm-image.jpg
tags:
  - LLVM
  - Windows10
  - Arm
  - Microsoft
  - Qualcomm
  - Snapdragon
  - Open Source
  - Toolchain
category: news
author: linaro
---
Linaro Ltd, the open-source collaborative engineering organization developing software for the Arm® ecosystem, today announced the availability of the Windows 10 on Arm bot support and binary as part of the LLVM 12.0.0 release. 

This is the first LLVM release for Windows 10 on Arm and marks a significant step towards enabling developers to build natively with LLVM on Windows 10 on  Arm. The binary includes a compiler, linker and compiler libraries and will be available to download from [the LLVM Project on GitHub](https://github.com/llvm/llvm-project/releases).

LLVM is one of the main tools the open-source community uses to compile their code. It is a set of reusable compiler and toolchain technologies which are used to develop front ends for any programming language and back ends of any instruction set architecture. Since 2010, Linaro has been consistently listed as one of the top ten contributors to the Linux kernel and has played a key role in multiple open-source projects, including LLVM.

Up until now, Windows 10 on Arm has not had a truly native toolchain. As a result, developers have resorted to cross-developing and cross-testing to make their applications run on Windows 10 on Arm. The Windows 10 on Arm binary made available allows these developers to recompile their applications much faster by using the LLVM toolchain as a native Windows on Arm program. Using a native Clang (the front-end compiler which is part of the LLVM release) as opposed to an x86 build of Clang for Windows 10 on Arm devices has been shown to make compilation twice as fast.\[1]

“Arm-powered devices have proven they can deliver the high-performance and efficiency required to develop the code for many next-generation applications” said Rahoul Varma, director, Large Screen Compute, Client Line of Business, Arm. “Enabling key open-source compilers such as LLVM to work natively on Windows on Arm laptops will empower developers to compile their projects more quickly, paving the way for faster innovation using Arm technology.”

“The availability of native LLVM support for Windows 10 on Arm is an important step in enabling developers to build their critical applications faster and more efficiently.” said Hari Pulapaka, Group Program Manager, Windows. “We look forward to seeing more open-source tools being enabled for Windows 10 on Arm following the LLVM release.”

“Qualcomm Technologies supports the developer community in the continued progress of native applications utilizing the cutting-edge performance, connectivity and efficiency delivered by Windows devices powered by Qualcomm® Snapdragon™ compute platforms”, said Rami Husseini, Director, Product Management at Qualcomm Technologies, Inc. “We are excited by this development and the effort to support the ecosystem.”

“Linaro is proud to help grow the open-source software ecosystem for Windows on Arm”, said Andrea Gallo, VP of Membership Development at Linaro. “Today’s announcement will enable the large ecosystem of developers - individual and commercial - to work faster with better tools.”

To learn more about Qualcomm Technologies’ portfolio of Snapdragon compute platforms, click [here](https://www.qualcomm.com/products/mobile-computing/mobile-pcs).

**About Linaro** 

Linaro leads collaboration in the Arm ecosystem and helps companies work with the latest open-source technology. The company has over 250 engineers working on more than 70 open-source projects, developing and optimizing software and tools, ensuring smooth product roll outs, and reducing maintenance costs. Work happens across a wide range of technologies including artificial intelligence, automotive, datacenter & cloud, edge & fog computing, high performance computing, IoT & embedded and mobile. Linaro is distribution neutral: it wants to provide the best software foundations to everyone by working upstream, and to reduce costly and unnecessary fragmentation. The effectiveness of the Linaro approach has been demonstrated by Linaro consistently being listed as one of the top ten company contributors, worldwide, to Linux kernels since 3.10. To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro engineering work is open to all online. To find out more, please visit <https://www.linaro.org> and <https://www.96Boards.org>.

Qualcomm and Snapdragon are trademarks and or registered trademarks of Qualcomm Incorporated.

Qualcomm Snapdragon is a product of Qualcomm Technologies, Inc. and/or its subsidiaries

\[1]“Compiling Twice as Fast: Native Clang for Windows on Arm”, Daniel Bailey, Arm Ltd, March 3, 2020, <https://community.arm.com/developer/tools-software/tools/b/tools-software-ides-blog/posts/native-clang-for-windows-on-arm>