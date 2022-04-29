---
layout: post
title: Booting the Mainline Linux Kernel on Qualcomm Devices
description: >
  In this blog, Vinod Koul shares detailed instructions to get started with the mainline Linux kernel on arm64 Qualcomm Snapdragon based devices.
date: 2021-10-28 08:29:06 +01:00
image: /assets/images/content/tech_background_1.jpg
tags:
  - Qualcomm
  - Snapdragon
  - Linux
  - kernel
  - arm64
category: blog
author: vinod.koul
---

One of the benefits of Linaro Core and Club memberships is the option to have a Landing Team. A Landing Team is a group of Linaro engineers which is dedicated to one Linaro member, and whose work contributes to both private and public projects. Beginning in 2014, the Linaro Qualcomm Landing Team has been an active contributor to upstream Qualcomm platforms, building stable releases for the 96Boards Dragonboard program and adding support to the next generation Qualcomm mobile platforms. Fostering and partnering with the open source community is a primary goal of this Landing Team, often in the role of maintainers for Qualcomm sub-systems.

In addition, [Linaro Developer Services](https://www.linaro.org/services/) has a dedicated team which provides Linux Board Support Package (BSP) development, maintenance and optimization for Qualcomm platforms such as Qualcomm Snapdragon, to companies building products based on Qualcomm processors. Check out Linaro Developer Services for additional information on how Linaro Developer services can help.

In this blog, Senior Engineer Vinod Koul from the Linaro Qualcomm Landing Team shares detailed instructions to get started with the mainline Linux kernel on arm64 Qualcomm Snapdragon based devices.

## Overview

The current advanced state of the mainline Linux kernel for Qualcomm Snapdragon platforms is such that it is becoming easier to run an upstream Linux kernel flavor on a Qualcomm based device, such as a Snapdragon based development board or an actual form factor device (a mobile phone, IOT device or [a laptop](https://github.com/aarch64-laptops/build)) without significant changes or special patches.

This blog post shows step by step instructions to download, build and boot a fully functional Linux system which can be used for kernel development on any modern Qualcomm Snapdragon based device.

The blog assumes one is familiar with version control tools like git, steps to build the Linux kernel (any architecture) and installing packages on the development environment one is using.

## Getting Sources

There are multiple Linux kernel source trees available for one to use. For example[ Linus Torvald’s upstream kernel tree](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/), [linux-next tree](https://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git/), the [Qualcomm community upstream tree](https://git.kernel.org/pub/scm/linux/kernel/git/qcom/linux.git/) or [Linaro Qualcomm Landing Team’s integration tree](https://git.linaro.org/landing-teams/working/qualcomm/kernel.git/). We recommend cloning Linus' tree as it is the upstream tree for kernel development and add other related trees as remotes.

{% include image.html path="/assets/images/content/getting-sources-image-1.png" alt="Getting sources image 1" %}

Optionally one can also use linux-next for integration and testing. This is a merge of most maintainer trees.

{% include image.html path="/assets/images/content/getting-sources-image-2.png" alt="Getting sources image 2" %}

The Linaro Qualcomm Landing Team has various pieces which are works in progress. The below tree would typically contain these pieces. Look for integration-linux-qcomlt branch which is a merge of various component branches using Continuous Integration (CI).

{% include image.html path="/assets/images/content/getting-sources-image-3.png" alt="Getting sources image 3" %}

## Building the kernel

One can use GCC to build the kernel as most of the Linux distributions include the gcc-aarch64 toolchain.
Gcc can be installed on RPM based distributions such as Fedora by:

{% include image.html path="/assets/images/content/building-the-kernel-image-1.png" alt="Building the kernel image 1" %}

And on Debian based distributions by:

{% include image.html path="/assets/images/content/building-the-kernel-image-2.png" alt="Building the kernel image 2" %}

### Cross compiling for aarch64

In order to compile for a different target architecture (aarch64) on a host machine (for example x86), we need to specify the architecture of target and cross compiler to the kernel makefile. Architecture is specified with the flag ARCH which in this case is “arm64” and cross compiler using flag CROSS_COMPILE which would be “aarch64-linux-gnu-”.

### Steps to build the kernel

To compile the kernel, we first need to set up the configuration (“config”) file. In the kernel, we have config files for different architectures. So, on specifying the ARCH=”arm64”, the build system will pick the appropriate architecture config file:

{% include image.html path="/assets/images/content/steps-to-build-the-kernel-image-1.png" alt="Steps to build the kernel image 1" %}

Then, the make command should be provided with arguments to compile the kernel, device tree bindings (dtbs) and modules as below:

{% include image.html path="/assets/images/content/steps-to-build-the-kernel-image-2.png" alt="Steps to build the kernel image 2" %}

Next, we create a module library by installing and stripping modules (which helps to reduce the overall size of modules). Then we install the modules to a local directory so that we can move it to the target later. The Linux build system can do that for us, as shown below:

{% include image.html path="/assets/images/content/steps-to-build-the-kernel-image-3.png" alt="Steps to build the kernel image 3" %}

## initramfs

Now that we have built the kernel, modules and dtbs, we need to package it into a bootable image and boot the board. For this discussion we are going to use the [Qualcomm® Robotics RB3 Development Platform (based on the 96Boards Consumer specification)](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard845c/) as an example.

Typically in embedded programming, one would try to use a variant of [initramfs](https://www.kernel.org/doc/html/latest/filesystems/ramfs-rootfs-initramfs.html). We can build our own image using [buildroot](https://www.google.com/url?q=https://buildroot.org/&sa=D&source=docs&ust=1635411319572000&usg=AOvVaw2LC26nkb-H4FRXZ8f77ksZ) etc., but for this example, we are going to use a reference initramfs provided and maintained by Linaro that is released as a cpio image. The **latest** images from Linaro are available here:

- For arm64: <https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm64/latest/> especially: https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm64/latest/initramfs-test-image-qemuarm64-*.rootfs.cpio.gz*
- _For 32-bit arm: <https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm/latest/>,
  especially: https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm/latest/initramfs-test-image-qemuarm-_.rootfs.cpio.gz

This reference initramfs also contains tiny images if one needs to keep the overall image size smaller.

[A Linux initramfs](https://www.kernel.org/doc/html/latest/filesystems/ramfs-rootfs-initramfs.html) is a compressed (gzip) “[cpio](https://www.linuxjournal.com/article/1213)” format archive, which is extracted into a root filesystem when the kernel boots up. After extracting, the kernel checks to see if rootfs contains a file “init”, and if so it executes it as PID 1.

A benefit of using a compressed cpio archive is that we can concatenate several compressed cpio archives to overlay and create the final image required for boot, since all cpio archives will be decompressed and overlaid serially. Here we would like to add a module cpio archive so that initramfs finds the modules and loads them. To create the module cpio, run the following command:

{% include image.html path="/assets/images/content/initramfs-image-1.png" alt="initramfs image 1" %}

And finally create the final initramfs image:

{% include image.html path="/assets/images/content/initramfs-image-2.png" alt="initramfs image 2" %}

## Preparing the board

In order to boot on a Qualcomm Snapdragon based board (MTP, HDK, form factor device etc), it is recommended to perform the following steps.

Many of the most recent boards ship with a dtbo partition and when loading a kernel and DTB, the bootloader will overlay the DTB with the content of the dtbo partition causing it to go badly. In order to avoid this situation, it is recommended to erase/program the dtbo partition.

For some boards, erasing the dtbo partition causes the bootloader to fail. So it is recommended to program NULL to this partition.

{% include image.html path="/assets/images/content/preparing-the-board.png" alt="Preparing the board" %}

## Building the boot image

For creating boot images which can be loaded by fastboot, we use the mkbootimg tool. This can be obtained from the skales repository. This contains various tools and we use mkbootimg for creating the image.

{% include image.html path="/assets/images/content/building-the-boot-image.png" alt="Building the boot image" %}

mkbootimg needs to be passed kernel, dtb and final initramfs image. First, we append the dtb image to the kernel image. Please note that we should use the appropriate DTB for the board one is working on. For the below example, we are using the Qualcomm® Robotics RB3 Development Platform as noted earlier, so the DTB used is sdm845-db845c.dtb.

{% include image.html path="/assets/images/content/building-the-boot-image-2.png" alt="Building the boot image 2" %}

The resulting boot image can be booted on your board using fastboot. It is recommended to use slot ‘b’ for booting. Slot ‘a’ can also be used if the board supports that, but some production devices don't boot when using slot 'a', so using slot 'b' is recommended in those cases.

This will not program the boot image into the onboard storage (eMMC/UFS), but load it and boot from it. During a successful boot, one should see the serial console printing messages about booting the kernel and see the shell prompt on the serial console at the end.

{% include image.html path="/assets/images/content/building-boot-image-3.png" alt="Building the boot image 3" %}

Below is the snippet of boot log on the RB3 board:

{% include image.html path="/assets/images/content/building-boot-image-4.png" alt="Building the boot image 4" %}

{% include image.html path="/assets/images/content/building-boot-image-5.png" alt="Building the boot image 5" %}

{% include image.html path="/assets/images/content/building-boot-image-6.png" alt="Building the boot image 6" %}

{% include image.html path="/assets/images/content/building-boot-image-7.png" alt="Building the boot image 7" %}

Note that [Android Debug Bridge](https://developer.android.com/studio/command-line/adb) (adb) is _not supported_ in the default initramfs image, so it won’t work here. All the debugging needs to be performed over serial. But if the board supports Ethernet or a USB Ethernet dongle is available that can be used as well.

## Advanced Topics

In this section, we discuss some advanced topics which may be useful when working with upstream kernels.

### Kernel configuration

To add or remove a component from the kernel, we can use menuconfig. It opens up the menuconfig CUI.

{% include image.html path="/assets/images/content/kernel-configuration-image-2.png" alt="Kernel Configuration image 2" %}

Tip use “/” to search for options and use the option number to navigate to that option.

Once we have selected the options, we need to recompile the kernel, modules and dts.

### Boot Parameters

Various cmdline parameters are available which help in debugging. Here we discuss a few of them which can be very useful to debug some issues. A more exhaustive reference of the parameters can be found in kernel source [documentation](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html).

- keep_bootcon: This option does not unregister the boot console at start. This is only useful for debugging when something happens in the window between unregistering the boot console and initializing the real console.
- ignore_loglevel: Ignore loglevel setting - this will print all kernel messages to the console. Useful for debugging. We also add it as a printk module parameter, so users could change it dynamically, usually by /sys/module/printk/parameters/ignore_loglevel.
- earlycon: Output early console device and options. When used with no options, the early console is determined by stdout-path property in device tree's chosen node.
- initcall_debug: This option traces initcalls as they are executed. This is very useful for working out where the kernel is dying during startup. Beware! This is very verbose.

### Adding content to the Boot Image

The initramfs image loaded in the previous section contains minimal initramfs cpio and modules cpio. In order to perform various testing features, additional content can be added to this initramfs image.

One interesting benefit of the cpio archive approach is that we can concatenate multiple cpio images and create the final cpio image to be loaded.

### Bootrr

The Linaro Qualcomm Landing Team uses bootrr to check sanity and ensure all modules are loaded, so we can create a bootrr cpio archive for this

The Bootrr build system supports creating cpio archives :

{% include image.html path="/assets/images/content/bootr-image.png" alt="bootr image" %}

### Test Utilities

Any test binaries and libraries can be added as well. This can be achieved by creating the disk layout one would like on the target and copying the binaries and libraries at appropriate locations. For example it is recommended to copy binaries to usr/bin in this utilities directory.

In order to automount a partition (like firmware), we can add an entry to inittab which would be overlayed. The last entry was added to mount the vendor_b partition to /mnt.

We can also create symlinks, for example to link firmware to /lib/firmware/

{% include image.html path="/assets/images/content/test-utilities-image-1.png" alt="Test Utilities image 1" %}

After adding all the required pieces, we can create the cpio archive:

{% include image.html path="/assets/images/content/test-utilities-image-2.png" alt="Test Utilities image 2" %}

And finally, create the final initramfs image which contains bootrr and test-utils which should be used for making the boot image:

{% include image.html path="/assets/images/content/test-utilities-image-3.png" alt="Test Utilities image 3" %}
