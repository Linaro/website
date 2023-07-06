---
layout: post
title: How to emulate Windows on Arm
description: This blog is about emulating Windows on Arm on any Linux x64 machine
date: 2023-06-20 12:19:17 +01:00
image: /assets/images/content/coding.jpg
tags:
  - Windows on Arm
category: blog
author: pierrick_bouvier
---
In a previous [blog article](https://www.codeproject.com/Articles/5353967/Continuous-Integration-for-Windows-on-Arm), we presented Continuous Integration for Windows on Arm. While there are options for getting Arm devices (the [Windows Dev Kit 2023](https://www.microsoft.com/en-us/d/windows-dev-kit-2023/94K0P67W7581), [Lenovo Thinkpad X13](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx/thinkpad--x13s-(13-inch-snapdragon)/len101t0019) or [Dell Inspiron 14](https://www.dell.com/en-us/shop/dell-laptops/inspiron-14-laptop/spd/inspiron-14-3420-laptop) are all good options), projects that want to build and test on Arm may not have these available yet. 

This post presents a solution, accessible to any Linux x64 machine, based on emulation, combining qemu-user and wine. We provide a public Linux docker image (linaro/wine-arm64), directly usable from GitHub/GitLab, or on your machine, that can help testing your binaries.

Before diving into details, it’s important to mention that this work focuses on running binaries (mostly for testing purposes), instead of compiling code. We still recommend cross compilation as the best approach for now if you don’t have access to Windows on Arm hardware.

# How it works

* QEMU can run aarch64 binaries on x64 host: qemu-aarch64 ./program
* Wine-arm64 is a set of native aarch64 binaries that implements Windows interface, and can run windows-arm64 programs as simply as: wine ./program.exe

By combining both, we can run windows-arm64 binaries on a linux x64 machine:

```
qemu-aarch64 /path/to/wine-arm64/wine ./program.exe
```

## QEMU

is an open source machine emulator and virtualizer.

[QEMU](https://www.qemu.org/) provides one binary per architecture, and comes in two variants under Linux: system and user modes.

System mode (qemu-system-aarch64) emulates a whole “virtual machine”, which can be accelerated by using [KVM](https://www.linux-kvm.org/page/Main_Page).

User mode provides emulation for a single program (and not a whole machine). In this case, QEMU intercepts system calls. It translates those calls from host architecture to guest architecture, talking directly to the kernel. [User mode is implemented for Linux and BSD](https://www.qemu.org/docs/master/user/main.html).

On Windows, syscall ABI is not stable ([some syscall number change, including on minor updates!](https://j00ru.vexillium.org/syscalls/nt/64/)) and is not documented. Backward compatibility is maintained at symbol level using an extra layer in user space (Windows API). Thus, implementing the user mode approach would be very difficult. That’s where Wine comes in.

## Wine

[Wine](https://www.winehq.org/) stands for “Wine is not an emulator”.

It is an implementation of [Windows API](https://en.wikipedia.org/wiki/Windows_API) interface, and a [PE](https://en.wikipedia.org/wiki/Portable_Executable) loader to run windows programs. It can run unmodified windows binaries and DLL (shared objects). As the acronym states, it does not emulate anything, especially not a different architecture.

For the Windows user, it can be compared to the modern [Windows Subsystem for Linux](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux), even if implementation is pretty different (v2 is based on a full virtual machine, while v1 is more of a wine-like approach, where Linux syscall ABI is reimplemented on top of the Windows Kernel).

Arm64 has been [supported](https://wiki.winehq.org/ARM64) since Windows on Arm was released. Technically, the porting effort [started](https://source.winehq.org/git/wine.git/?a=search&h=HEAD&st=commit&s=+ARM64) in 2013 and Windows on Arm was officially released in 2017!

This port was started by [André Hentschel](https://wiki.winehq.org/User:AndreHentschel) and since then, received many contributions from [Martin Storsjö](https://github.com/mstorsjo). Martin is also the maintainer of [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) which is a toolchain allowing you to cross compile for Windows on Arm. Thanks to both of you for all this amazing work!

# linaro/wine-arm64 Docker image

We created a docker x64 linux container image with wine-arm64 prebuilt and embedded qemu-user-static (so [binfmt](https://en.wikipedia.org/wiki/Binfmt_misc) support is not required on host). It can easily be used with any CI system interfacing with containers: GitLab, GitHub, etc.

Image is published as [linaro/wine-arm64](https://hub.docker.com/r/linaro/wine-arm64). It is based on the latest debian stable, and you can install packages using apt if needed.

A convenient wrapper named wine-arm64 (calling wine through qemu-user), available on PATH, allows you to execute any Windows on Arm executable.

```
docker run -it --rm linaro/wine-arm64 wine-arm64 cmd.exe /c 'echo Hello World'
```

Details and implementation can be found here: [Unified docker image](https://gitlab.com/Linaro/windowsonarm/woa-linux#unified-docker-image)

We publish an image for every wine version from 8.0, so users can pin a specific wine version. In this case, use linaro/wine-arm64:8.5.

## Use wine-arm64 in your CI

GitLab and GitHub pipeline examples can be found [here](https://gitlab.com/Linaro/windowsonarm/woa-linux-examples). This repository can be forked/mirrored on both platforms and CI will be automatically triggered on your namespace.

A GitHub job running Windows on Arm “Hello World” is as simple as:

```
jobs:
  cmd-hello-world:
    runs-on: ubuntu-latest
    container: linaro/wine-arm64
    steps:
      - run: wine-arm64 cmd.exe /c 'echo Hello World'
```

For GitLab:

```
cmd-hello-world:
  image: linaro/wine-arm64
  script:
    - wine-arm64 cmd.exe /c 'echo Hello World'
```

Beyond CI environment, you can manually run examples like this:

```
docker run -it --rm linaro/wine-arm64
# it will open a shell in container
git clone https://gitlab.com/Linaro/windowsonarm/woa-linux-examples
cd woa-linux-examples
./job-cmd-hello-world.sh
./job-llvm-mingw-windows-arm64-hello-world.sh

```

Among the examples we provide, you can be interested in:

* [Compile and run an hello world for windows-arm64](https://gitlab.com/Linaro/windowsonarm/woa-linux-examples/-/blob/main/job-llvm-mingw-windows-arm64-hello-world.sh)
* [Compile and run ninja for windows-arm64](https://gitlab.com/Linaro/windowsonarm/woa-linux-examples/-/blob/main/job-compile-and-run-ninja.sh)
* [Run some unit tests for Node.js](https://gitlab.com/Linaro/windowsonarm/woa-linux-examples/-/blob/main/job-nodejs-unit-tests.sh)

Note: When using this image in your CI environment, you’ll have to split compilation and testing in different jobs, and export artefacts between them. This is because your compilation job will run in a different environment (OS or container) than testing.

# Limitations

## Wine

Wine can have bugs, either on the Windows interface, or specific arm64 bugs. In case you encounter a crash, don’t assume your program is necessarily faulty, and if you can, investigate on a Windows on Arm machine.

## Missing x64 emulation

On Windows 11, you can conveniently execute windows x64 binaries, thanks to a layer of emulation built in the system. In our approach, all your binaries have to be native arm64 ones. This is one more reason why building your project can be difficult, as all your tools have to be native arm64 versions.

## Performance

Running wine under emulation is not without a significant performance penalty. Expect something around x10 compared to a native x64 workflow. This is one of the reasons why we currently recommend not to build your project using it, but focus on unit tests instead.

# Experiments

## Performance and correctness evaluation

We created a [gitlab repository](https://gitlab.com/Linaro/windowsonarm/woa-linux-test-binaries) to collect binaries that can be used to evaluate wine correctness and qemu/wine performance. First results are available [here](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28888137940/WoA+Emulation+using+qemu-user+wine-arm64#Limitations).

## QEMU system mode

We tried as well to use QEMU system mode (on a x64 host) to run Windows on Arm, to give some performance insights. Beyond the difficulty to build and reproduce a Windows on Arm virtual machine ([full instructions](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28914909194/windows-arm64+VM+using+qemu-system)), the result is pretty unresponsive, and performance is twice slower than the qemu-user/wine approach. Thus, this is not what we recommend for now.

However, if you have access to a linux arm64 physical machine, you can still follow instructions to create a KVM accelerated virtual machine. This is probably the easiest and cheapest (Raspberry Pi 4 based) solution available today to run Windows on Arm.

## sse2neon CI

We enabled CI for windows-arm64 platform for project [ss2neon](https://github.com/DLTcollab/sse2neon) using our docker image ([PR](https://github.com/DLTcollab/sse2neon/pull/598)). In this case, there is a single test executable, which makes it a good candidate for our approach.

# Conclusion

In this article, we presented a solution to run Windows on Arm binaries directly on your Linux x64 machine. This solution has some shortcomings, but can still be useful to integrate in your CI/CD pipeline to test your native binaries.

We’ll propose to use this for projects we contribute to (like we did for ss2neon). It’s not yet the ideal solution we are looking for, but we hope it can help more projects to support Windows on Arm! In the future, we’ll extend this solution to windows-x64 using WSL, and support wine.

Contributions, comments and bug reports are welcome on our [gitlab repository](https://gitlab.com/Linaro/windowsonarm/woa-linux).