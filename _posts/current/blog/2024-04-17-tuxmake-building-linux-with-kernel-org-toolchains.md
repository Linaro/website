---
layout: post
title: "TuxMake: Building Linux with kernel.org LLVM toolchains"
description: >
  This blog talks about how support has been introduced for kernel.org LLVM
  toolchains. Click here to read more!
date: 2024-04-17 09:05:14 +01:00
image: /assets/images/content/Tech_Background.jpg
tags:
  - Testing
  - Linux Kernel
category: blog
author: senthil_kumaran
---
# Introduction

The Linux kernel is the heart of any Linux-based operating system. It orchestrates hardware, memory, and other crucial system resources. Building a Linux kernel from source code offers immense flexibility and customization but can be a daunting task, especially for beginners. In the case of experienced kernel developers, maintaining custom scripts or tooling for building a Linux kernel, for various architecture and toolchain combinations, can quickly prove painful in the long run. 

TuxMake streamlines this process by providing a consistent command-line interface (CLI) and a Python library for building the Linux kernel across diverse architectures, toolchains, and configurations. 

TuxMake provides Docker container images to build Linux kernels across various architectures and toolchain combinations. These container images are Debian-based (ranging from oldstable to unstable) and come pre-installed with stock (Debian-provided) toolchains and all the tools required for kernel compilation. The TuxMake Docker container images (<https://hub.docker.com/u/tuxmake>) can be used in any Linux distribution to build Linux kernels.

This blog post brings exciting news for TuxMake users. The TuxMake team has listened to the [long-term](https://gitlab.com/Linaro/tuxmake/-/issues/99) [users’ requests](https://gitlab.com/Linaro/tuxmake/-/issues/215). We are now introducing support for kernel.org [LLVM toolchains](https://mirrors.edge.kernel.org/pub/tools/llvm/). This addition allows the users to leverage the official kernel.org toolchains within their TuxMake builds, potentially leading to improved build compatibility and build performance.

# kernel.org LLVM toolchain

Previously, the TuxMake Docker images were built with all the tools that are required for building the Linux kernel, along with the stock toolchain that comes from the official Debian repository. For example, if Debian bookworm defaults to gcc version 13.x then the Docker image corresponding to gcc-13 toolchain provided by TuxMake would have the stock gcc toolchain available from Debian bookworm. Similarly, for Clang/LLVM toolchains.

The stock toolchains that are part of the Debian repositories are generic and not optimised for the linux kernel builds or for any project since they have to cater to all projects as a compiler toolchain provided by the Debian operating system. In the case of the Linux kernel project, the official website provides compilers that are optimised (most of the time) for building the Linux kernel. The users of TuxMake have [wished](https://gitlab.com/Linaro/tuxmake/-/issues/215) to leverage the toolchains provided by kernel.org for a [long time](https://gitlab.com/Linaro/tuxmake/-/issues/99), and finally, the wait is over! TuxMake has introduced  Docker containers that have pre-installed toolchains from kernel.org (<https://mirrors.edge.kernel.org/pub/tools/llvm/>).

## Internals of kernel.org LLVM toolchain support

The TuxMake kernel.org toolchain Docker images use a Debian base with all the necessary tools to build a Linux kernel for a specific architecture, except for the compiler toolchain itself which is obtained from <https://mirrors.edge.kernel.org/pub/tools/llvm/>. 

These Docker images are available in two host architecture combinations (aarch64 and x86_64). Figure 1, shows the supported kernel.org toolchains and the target architectures.

{% include image.html path="/assets/images/content/figure-1-tuxmake-blog.png" alt="Tuxmake kernel.org toolchain vs architecture support matrix" %} 

NOTE: The loongarch target architecture Docker image is only available for x86_64 host architecture.

## How to use  kernel.org LLVM toolchains?

`$ tuxmake -r podman -a loongarch -t korg-clang-18 -k defconfig`

The above command builds the Linux kernel with a kernel.org Clang 18 toolchain for the loongarch target architecture, with defconfig as the kernel config and podman as the runtime.

To reproduce this build locally, use the following command:

`tuxmake --target-arch=loongarch --kconfig=defconfig --toolchain=korg-clang-18 --wrapper=none --environment=KBUILD_BUILD_TIMESTAMP=@1710894445 --environment=KBUILD_BUILD_USER=tuxmake --environment=KBUILD_BUILD_HOST=tuxmake --environment=KCFLAGS=-ffile-prefix-map=/home/stylesen/.cache/tuxmake/builds/32/build/= --runtime=podman --image=docker.io/tuxmake/loongarch_korg-clang-18 config default kernel xipkernel modules dtbs dtbs-legacy debugkernel headers`

`Trying to pull docker.io/tuxmake/loongarch_korg-clang-18:latest...`

When necessary, the container for loongarch_korg-clang-18 will be fetched from TuxMake's public container registry at [hub.docker.com/u/tuxmake](https://hub.docker.com/u/tuxmake).

The actual make command that will be invoked by TuxMake will be:

`make --silent --keep-going --jobs=12 O=/home/stylesen/.cache/tuxmake/builds/32/build ARCH=loongarch CROSS_COMPILE=loongarch64-linux-gnu- LLVM=1 LLVM_IAS=1 HOSTCC=clang CC=clang defconfig`

Once the build process is complete we will see the following output:

`I: config: PASS in 0:00:01.715550
I: default: PASS in 0:18:54.221519
I: kernel: PASS in 0:00:16.026103
I: xipkernel: SKIP in 0:00:00.311325
I: modules: PASS in 0:00:32.313870
I: dtbs: PASS in 0:00:12.584119
I: dtbs-legacy: SKIP in 0:00:00.361245
I: debugkernel: PASS in 0:00:14.388657
I: headers: PASS in 0:00:05.408176
I: build output in /home/stylesen/.cache/tuxmake/builds/32`

The kernel build artifacts will reside in, /home/stylesen/.cache/tuxmake/builds/32 which is a customizable location. Thus, we have just seen the korg-clang-18 toolchain in action with TuxMake.

# Conclusion

Thus TuxMake makes building Linux kernels with official kernel.org toolchains a breeze. The TuxMake developers are actively working to bring in support for GCC, which is available at <https://mirrors.edge.kernel.org/pub/tools/crosstool/>.

TuxMake excels at simplifying complexity across target devices, processor architectures, compiler tool sets, kernel configuration options, and the underlying build environment on the developer's machine to produce target-specific Linux build artifacts.

Developed by [Linaro](https://www.linaro.org/), TuxMake works hand-in-hand with [TuxSuite](https://docs.tuxsuite.com/), a commercial service. While TuxMake focuses on individual builds executed locally, TuxBuild offers a public API that seamlessly integrates with continuous integration (CI) pipelines. This allows for large-scale, on-demand parallel builds of Linux kernels, ideal for development teams and organisations.

Please open an issue at <https://gitlab.com/Linaro/tuxmake/>, and email us at tuxsuite@linaro.org if you have any concerns. The complete documentation of TuxMake is available at <https://docs.tuxmake.org/>