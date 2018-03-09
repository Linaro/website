---
author: alex.bennee
comments: true
date: 2014-08-21 07:00:04+00:00
layout: post
link: /blog/core-dump/running-64bit-android-l-qemu/
slug: running-64bit-android-l-qemu
title: Running Android L Developer Preview on 64-bit ARM QEMU
wordpress_id: 6354
categories:
- blog
tags:
- Core Dump
- android
- Android L
- emulator
- qemu
---

# Running Android L Developer Preview on 64-bit ARM QEMU

{% include image.html name="quem.jpg" alt="QEMU" %}

Did you know the Android emulator is based on QEMU?

When the Android SDK was first made available to the world, Google used QEMU as the basis for their Android emulator. They copied the source code to a custom repository in the Android Open Source Project (AOSP) and made a number of invasive modifications to QEMU. Specifically, they added emulation of a specific board called goldfish for the purposes of emulating an Android phone.

Every build of Android targets a specific hardware platform, and the emulated goldfish platform is no different. A number of specific emulator features are enabled in both the Android kernel and Android userspace environment when run in an emulated environment. These features allow a smooth and complete user experience resembling using a real Android device, on laptop and desktop workstations.

The Android emulator provides Android application developers with a convenient development environment and allows developers to develop and test applications on devices which they do not have physical access to. With the introduction of the ARMv8-A architecture and Android support for 64-bit ARM platforms, this need is more important than ever because it allows developers to begin adapting their applications to an ARM 64-bit based mobile ecosystem prior to hardware being available.

## Differences to mainline QEMU

There are a number of differences to mainline QEMU that fall broadly into the two categories: User Interface and Emulated Devices.

The UI patches support skinning of the framebuffer window so a mock up of the emulated devices’ keypad/buttons can be displayed alongside the screen. The other big user interface component is accelerated graphics support. Accelerated graphics is a key component in modern mobile systems and a crucial for a reasonable application performance experience. The Android emulator provides accelerated graphics support in the emulated guest Android operating system, by providing an OpenGL passthrough mechanism that allows the emulated Android system to make OpenGL calls that are directly rendered by the host accelerated graphics stack to the emulated window without having to emulate a GPU inside QEMU itself. Emulating GPU hardware is certainly not something you want (or could!) emulate directly, because GPUs are complicated proprietary pieces of hardware with strict performance requirements.

The emulated devices include a fast IPC mechanism known as the “qemu_pipe” that provides a way for the emulated Android userspace to communicate with the host machine. This is used by both the adb service to communicate with the guest adb daemon and console services and to provide a fast passthrough path for the emulated accelerated graphics support described above. The Android emulator also emulates GSM support, a GPS chip, sensors (proximity and rotation), and more to provide application developers with an experience close to a real phone and to allow developers to test all aspects of their applications, such as how an application responds to a user rotating a device or an application requesting the current location.


## Along comes Android L

{% include image.html name="Android-L.jpg" alt="Android-L" %}

Google recently announced [Android L](http://developer.android.com/preview/index.html) at Google I/O. One of the major new features in Android L is the support for the ARMv8-A 64-bit architecture. Given the growth in performance and memory capacity of mobile devices, 64-bit support is a crucial feature for embracing the future. We now carry in our pockets what in olden days would have been described as nothing less than a supercomputer.

As you may have noticed, thanks to Linaro, the latest version of upstream QEMU (2.1) now includes full ARMv8 system emulation support. This means that users can use upstream QEMU to run a full 64-bit ARMv8-A kernel and filesystem, such as a 64-bit Ubuntu cloud image. This was no small endeavour as it involved emulating a completely new instruction set, exception model, CPU implementation, and more. The implementation was verified with a custom instruction verification tool ([RISU](https://git.linaro.org/people/peter.maydell/risu.git)) and was heavily reviewed upstream by an engaged and incredibly supportive upstream QEMU community.

Reimplementing 64-bit ARMv8-A support in the old Android emulator fork of QEMU would be a herculean effort and attempts to backport the changes from upstream QEMU to the Android emulator were not successful. Consequently, there was a sudden and strong desire within Google and from Linaro members to instead forward port the Android emulator specific features to upstream QEMU and have such an implementation ready for the [Android L introduction at Google I/O](https://www.google.com/events/io). At the time, this was roughly three weeks away.


## Enter Linaro


Linaro assembled a small team who between us had experience in QEMU, the Linux kernel, and the Android ecosystem. While Google had started some of the forward porting work for 32-bit Android support, it was taking longer than they liked as they weren’t familiar with the current state of the upstream QEMU code base and were busy preparing for Google I/O.

We delivered an upstream based branch of QEMU with minimal changes that could run a stable emulated Android instance on 64-bit ARM. We also provided a branch of the official Android 3.10 based Linux kernel with backported 64-bit ARMv8 support based on a minimal set of necessary topic branches used for Linaro’s Stable Kernel (LSK). We spent a few extra days to fix some of the issues that were found when stress testing the “qemu pipe” IPC mechanism. After Google I/O we also did some performance analysis on the emulation to identify some performance tweaks to the main emulator that are in the process of being upstreamed now.
The virtualization team in Linaro is working with Google to also provide Android support based on upstream 32-bit ARM QEMU as well as providing a number of missing features from the current prototype, such as display rotation, and a number of Android emulator console commands. We expect to be able to provide QEMU branches with this support in Q4 2014.

## I want to try

As with all our code we at Linaro do our work in public and with presumption of upstream first. If you want to play with the results of our work, you are more than welcome to. The details will be the subject of a follow-up post/wiki entry but I’ll sketch out the basic steps here that assume familiarity with building the kernel, android and QEMI. The major **CAVEAT** at the moment is that we haven’t implemented OpenGL passthrough (as there is no current suitable solution that targets upstream) so as a result all the graphics are rendered in software on the emulated device. Anything needing a proper OpenGL implementation (e.g. the browser) won’t start for this reason. We expect both an OpenGL implementation and skinning support based on Linaro’s upstream work will be made available in due course.

### You will need:

A custom arm64 build of the [ranchu kernel](https://git.linaro.org/people/)

    ARCH=arm64 make ranchu_defconfig

    ARCH=arm64 make CROSS_COMPILE=aarch64-linux-gnu-


A patched version of the AOSP tree (master or l-preview branch), with [qemu_pipe tweak](http://people.linaro.org/~alex.bennee/android/android-init-tweaks.diff)

```bash

    tar -xvf linaro-devices.tar.gz

    source build/envsetup.sh

    lunch ranchu-userdebug

```

A copy of [our QEMU branch](https://git.linaro.org/people/peter.maydell/qemu-arm.git/refs/heads)

```bash

    ./configure --target-list=aarch64-softmmu

    make

```


Some spare time (there is a lot to compile)


**Finally you can launch the emulator with a command line like this:**

```bash
    ../qemu.git/aarch64-softmmu/qemu-system-aarch64 -cpu cortex-a57 -machine type=ranchu -m 4096 -kernel ./ranchu-kernel/Image -append 'console=ttyAMA0,38400 keep
    _bootcon' -monitor stdio -initrd ranchu-build/ramdisk.img -drive index=2,id=userdata,file=ranchu-build/userdata.img -device virtio-blk-device,drive=us
    erdata -device virtio-blk-device,drive=cache -drive index=1,id=cache,file=ranchu-build/cache.img -device virtio-blk-device,drive=system -drive index=0,id=system,file=ranchu-build/system.img -
    netdev user,id=mynet -device virtio-net-device,netdev=mynet -show-cursor 

```

I have symlinks in my test directory to try and keep things sane. So ranchu-kernel links to arch/arm64/boot in my kernel tree and ranchu-build links to out/target/product/ranchu in my android tree. Please note the order of the block devices on the command line is important.
