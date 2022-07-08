---
layout: post
title: Booting the Mainline Linux Kernel on Qualcomm Devices
description: >
  In this blog, Vinod Koul shares detailed instructions to get started with the
  mainline Linux kernel on arm64 Qualcomm Snapdragon based devices.
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

```
$ git clone 
git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
```

Optionally one can also use linux-next for integration and testing. This is a merge of most maintainer trees.

```
$ git remote add next  
git://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git
```

The Linaro Qualcomm Landing Team has various pieces which are works in progress. The below tree would typically contain these pieces. Look for integration-linux-qcomlt branch which is a merge of various component branches using Continuous Integration (CI).

```
$ git remote add qcomlt 
https://git.linaro.org/landing-teams/working/qualcomm/kernel.git
```

## Building the kernel

One can use GCC to build the kernel as most of the Linux distributions include the gcc-aarch64 toolchain.
Gcc can be installed on RPM based distributions such as Fedora by:

```
$ sudo dnf install gcc-aarch64-linux-gnu
```

And on Debian based distributions by:

```
$ sudo apt install gcc-aarch64-linux-gnu
```

### Cross compiling for aarch64

In order to compile for a different target architecture (aarch64) on a host machine (for example x86), we need to specify the architecture of target and cross compiler to the kernel makefile. Architecture is specified with the flag ARCH which in this case is “arm64” and cross compiler using flag CROSS_COMPILE which would be “aarch64-linux-gnu-”.

### Steps to build the kernel

To compile the kernel, we first need to set up the configuration (“config”) file. In the kernel, we have config files for different architectures. So, on specifying the ARCH=”arm64”, the build system will pick the appropriate architecture config file:

```
$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- defconfig
```

Then, the make command should be provided with arguments to compile the kernel, device tree bindings (dtbs) and modules as below:

```
$ make -j$(nproc) ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- Image.gz dtbs modules
```

Next, we create a module library by installing and stripping modules (which helps to reduce the overall size of modules). Then we install the modules to a local directory so that we can move it to the target later. The Linux build system can do that for us, as shown below:

```
$ make -j$(nproc) ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- modules_install INSTALL_MOD_PATH=./modules_dir INSTALL_MOD_STRIP=1
```

## initramfs

Now that we have built the kernel, modules and dtbs, we need to package it into a bootable image and boot the board. For this discussion we are going to use the [Qualcomm® Robotics RB3 Development Platform (based on the 96Boards Consumer specification)](https://www.96boards.org/documentation/consumer/dragonboard/dragonboard845c/) as an example.

Typically in embedded programming, one would try to use a variant of [initramfs](https://www.kernel.org/doc/html/latest/filesystems/ramfs-rootfs-initramfs.html). We can build our own image using [buildroot](https://www.google.com/url?q=https://buildroot.org/&sa=D&source=docs&ust=1635411319572000&usg=AOvVaw2LC26nkb-H4FRXZ8f77ksZ) etc., but for this example, we are going to use a reference initramfs provided and maintained by Linaro that is released as a cpio image. The **latest** images from Linaro are available here:

* For arm64: <https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm64/latest/> especially: https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm64/latest/initramfs-test-image-qemuarm64-*.rootfs.cpio.gz*
* *For 32-bit arm: <https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm/latest/>,
  especially: https://snapshots.linaro.org/member-builds/qcomlt/testimages/arm/latest/initramfs-test-image-qemuarm-*.rootfs.cpio.gz

This reference initramfs also contains tiny images if one needs to keep the overall image size smaller.

[A Linux initramfs](https://www.kernel.org/doc/html/latest/filesystems/ramfs-rootfs-initramfs.html) is a compressed (gzip) “[cpio](https://www.linuxjournal.com/article/1213)” format archive, which is extracted into a root filesystem when the kernel boots up. After extracting, the kernel checks to see if rootfs contains a file “init”, and if so it executes it as PID 1.

A benefit of using a compressed cpio archive is that we can concatenate several compressed cpio archives to overlay and create the final image required for boot, since all cpio archives will be decompressed and overlaid serially. Here we would like to add a module cpio archive so that initramfs finds the modules and loads them. To create the module cpio, run the following command:

```
$ (cd modules_dir; find . | cpio -o -H newc | gzip -9 > ../modules.cpio.gz)
```

And finally create the final initramfs image:

```
$ cat initramfs-test-image-qemuarm64-20210422073919-769.rootfs.cpio.gz modules.cpio.gz > final-initramfs.cpio.gz
```

## Preparing the board

In order to boot on a Qualcomm Snapdragon based board (MTP, HDK, form factor device etc), it is recommended to perform the following steps.

Many of the most recent boards ship with a dtbo partition and when loading a kernel and DTB, the bootloader will overlay the DTB with the content of the dtbo partition causing it to go badly. In order to avoid this situation, it is recommended to erase/program the dtbo partition.

For some boards, erasing the dtbo partition causes the bootloader to fail. So it is recommended to program NULL to this partition.

```
$ dd if=/dev/zero of=zero.bin bs=4096 count=1

$ fastboot flash dtbo_a zero.bin
$ fastboot flash dtbo_b zero.bin

$ fastboot reboot
```

## Building the boot image

For creating boot images which can be loaded by fastboot, we use the mkbootimg tool. This can be obtained from the skales repository. This contains various tools and we use mkbootimg for creating the image.

```
$ git clone https://git.codelinaro.org/clo/qsdk/oss/tools/skales
```

mkbootimg needs to be passed kernel, dtb and final initramfs image. First, we append the dtb image to the kernel image. Please note that we should use the appropriate DTB for the board one is working on. For the below example, we are using the Qualcomm® Robotics RB3 Development Platform as noted earlier, so the DTB used is sdm845-db845c.dtb.

```
$ cat arch/arm64/boot/Image.gz \ 
arch/arm64/boot/dts/qcom/sdm845-db845c.dtb > Image.gz+dtb

CMDLINE="ignore_loglevel earlycon”

$ ./skales/mkbootimg --kernel Image.gz+dtb \
          --cmdline ${CMDLINE} --ramdisk final-initramfs.cpio.gz \
          --base 0x80000000 --pagesize 4096 --output boot.img
```

The resulting boot image can be booted on your board using fastboot. It is recommended to use slot ‘b’ for booting. Slot ‘a’ can also be used if the board supports that, but some production devices don't boot when using slot 'a', so using slot 'b' is recommended in those cases.

This will not program the boot image into the onboard storage (eMMC/UFS), but load it and boot from it. During a successful boot, one should see the serial console printing messages about booting the kernel and see the shell prompt on the serial console at the end.

```
$ fastboot -s <board-id> set_active b


$ fastboot -s <board-id> boot boot.img
```

Below is the snippet of boot log on the RB3 board:

```

Fastboot: Initializing...
Fastboot: Processing commands
Fastboot Action (Press <Right> to select): SAT
Handling Cmd: getvar:slot-count
Handling Cmd: set_active:a
SetActiveSlot: _a already active slot
Handling Cmd: download:026d9000
Download Finished
Handling Cmd: boot
A/B retry count NOT decremented
Booting Into Mission Mode
No dtbo partition is found, Skip dtbo
Exit key detection timer
GetVmData: making ScmCall to get HypInfo
GetVmData: No Vm data present! Status = (0x3)
No Ffbm cookie found, ignore: Not Found
Memory Base Address: 0x80000000
Decompressing kernel image start: 13555 ms
Decompressing kernel image done: 21000 ms
BootLinux: failed to get dtbo image
DTB offset is incorrect, kernel image does not have appended DTB
Cmdline: console=tty0 console=ttyMSM0,115200n8 pd_ignore_unused clk_ignore_unused root=/dev/sda1 rw rootwait earlycon androidboot.bootdevice=1d84000.ufshc androidboot.serialno=512e84bb androidboot.baseband=msm

RAM Partitions
Add Base: 0x0000000080000000 Available Length: 0x00000000FDFA0000
WARNING: Unsupported EFI_RAMPARTITION_PROTOCOL
ERROR: Could not get splash memory region node
kaslr-Seed is added to chosen node

Shutting Down UEFI Boot Services: 22557 ms
BDS: LogFs sync skipped, Unsupported
App Log Flush : 0 ms
Exit BS        [22716] UEFI End
[    0.000000] Booting Linux on physical CPU 0x0000000000 [0x517f803c]
[    0.000000] Linux version 5.15.0-rc5-00004-gd7f6a1ce1090 (vkoul@kurma) (aarch64-linux-gnu-gcc (GCC) 11.2.1 20210728 (Red Hat Cross 11.2.1-1), GNU ld version 2.35.2-1.fc34) #22 SMP PREEMPT Wed Oct 20 19:05:17 IST 2021
[    0.000000] Machine model: Thundercomm Dragonboard 845c
[    0.000000] efi: UEFI not found.
[    0.000000] earlycon: qcom_geni0 at MMIO 0x0000000000a84000 (options '115200n8')
[    0.000000] printk: bootconsole [qcom_geni0] enabled

...

[    0.000000] Kernel command line: console=tty0 console=ttyMSM0,115200n8 pd_ignore_unused clk_ignore_unused root=/dev/sda1 rw rootwait earlycon androidboot.bootdevice=1d84000.ufshc androidboot.serialno=512e84bb androidboot.baseband=msm
[    0.000000] Dentry cache hash table entries: 524288 (order: 10, 4194304 bytes, linear)
[    0.000000] Inode-cache hash table entries: 262144 (order: 9, 2097152 bytes, linear)
[    0.000000] mem auto-init: stack:off, heap alloc:off, heap free:off
[    0.000000] software IO TLB: mapped [mem 0x00000000fa000000-0x00000000fe000000] (64MB)
[    0.000000] Memory: 3655892K/4161152K available (13056K kernel code, 1982K rwdata, 5488K rodata, 3072K init, 438K bss, 472492K reserved, 32768K cma-reserved)
[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1

...

[    0.013495] printk: console [tty0] enabled
[    0.017841] Calibrating delay loop (skipped), value calculated using timer frequency.. 38.40 BogoMIPS (lpj=76800)
[    0.028209] pid_max: default: 32768 minimum: 301
[    0.032984] LSM: Security Framework initializing
[    0.037791] Mount-cache hash table entries: 8192 (order: 4, 65536 bytes, linear)
[    0.045277] Mountpoint-cache hash table entries: 8192 (order: 4, 65536 bytes, linear)
[    0.056323] rcu: Hierarchical SRCU implementation.
[    0.062648] EFI services will not be available.
[    0.067725] smp: Bringing up secondary CPUs ...
[    0.074501] Detected VIPT I-cache on CPU1
[    0.074640] GICv3: CPU1: found redistributor 100 region 0:0x0000000017a80000
[    0.074795] CPU1: Booted secondary processor 0x0000000100 [0x517f803c]
[    0.076641] Detected VIPT I-cache on CPU2
[    0.076697] GICv3: CPU2: found redistributor 200 region 0:0x0000000017aa0000
[    0.076778] CPU2: Booted secondary processor 0x0000000200 [0x517f803c]
[    0.078589] Detected VIPT I-cache on CPU3
[    0.078622] GICv3: CPU3: found redistributor 300 region 0:0x0000000017ac0000
[    0.078689] CPU3: Booted secondary processor 0x0000000300 [0x517f803c]
[    0.081238] CPU features: detected: Spectre-v2
[    0.081257] Detected VIPT I-cache on CPU4
[    0.081291] GICv3: CPU4: found redistributor 400 region 0:0x0000000017ae0000
[    0.081360] CPU4: Booted secondary processor 0x0000000400 [0x516f802d]
[    0.083681] Detected VIPT I-cache on CPU5
[    0.083714] GICv3: CPU5: found redistributor 500 region 0:0x0000000017b00000
[    0.083783] CPU5: Booted secondary processor 0x0000000500 [0x516f802d]
[    0.086244] Detected VIPT I-cache on CPU6
[    0.086278] GICv3: CPU6: found redistributor 600 region 0:0x0000000017b20000
[    0.086346] CPU6: Booted secondary processor 0x0000000600 [0x516f802d]
[    0.088967] Detected VIPT I-cache on CPU7
[    0.089003] GICv3: CPU7: found redistributor 700 region 0:0x0000000017b40000
[    0.089073] CPU7: Booted secondary processor 0x0000000700 [0x516f802d]
[    0.089158] smp: Brought up 1 node, 8 CPUs

...


[  OK  ] Started Load/Save RF Kill Switch Status.
[  OK  ] Finished Update UTMP about System Boot/Shutdown.
[  OK  ] Finished Update is Completed.
[  OK  ] Finished Run pending postinsts.
[  OK  ] Reached target System Initialization.
[  OK  ] Started Daily Cleanup of Temporary Directories.
[  OK  ] Reached target Timers.
[  OK  ] Listening on D-Bus System Message Bus Socket.
[  OK  ] Reached target Sockets.
[  OK  ] Reached target Basic System.
         Starting Bluetooth service...
[  OK  ] Started D-Bus System Message Bus.
[    6.955958] NET: Registered PF_ALG protocol family
[  OK  ] Started A minimalistic net�…Pv4, rdisc and DHCPv6 support.
[    7.015787] 8021q: 802.1Q VLAN Support v1.8
[  OK  ] Reached target Network.
[  OK  ] Started QIPCRTR Name Service.
[  OK  ] Started Qualcomm PD mapper service   7[0m.
[  OK  ] Started Qualcomm remotefs service    0m.
[  OK  ] Started QRTR TFTP service.
[  OK  ] Finished Permit User Sessions.
[  OK  ] Started Getty on tty1.
[  OK  ] Started Serial Getty on ttyMSM0.
[  OK  ] Reached target Login Prompts.
[  OK  ] Stopped User Login Management.
         Starting Load Kernel Module drm...
[  OK  ] Finished Load Kernel Module drm.
[  OK  ] Started Bluetooth service.
[  OK  ] Reached target Bluetooth.
[  OK  ] Started Qualcomm PD mapper service
[  OK  ] Reached target Multi-User System.
         Starting Update UTMP about System Runlevel Changes...
Reference-Platform-Build-X11 3.0+linaro qemuarm64 ttyMSM0

qemuarm64 login: root (automatic login)

root@qemuarm64:~# 
```

Note that [Android Debug Bridge](https://developer.android.com/studio/command-line/adb) (adb) is *not supported* in the default initramfs image, so it won’t work here. All the debugging needs to be performed over serial. But if the board supports Ethernet or a USB Ethernet dongle is available that can be used as well.

## Advanced Topics

In this section, we discuss some advanced topics which may be useful when working with upstream kernels.

### Kernel configuration

To add or remove a component from the kernel, we can use menuconfig. It opens up the menuconfig CUI.

```
$ make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- menuconfig
```

Tip use “/” to search for options and use the option number to navigate to that option.

Once we have selected the options, we need to recompile the kernel, modules and dts.

### Boot Parameters

Various cmdline parameters are available which help in debugging. Here we discuss a few of them which can be very useful to debug some issues. A more exhaustive reference of the parameters can be found in kernel source [documentation](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html).

* keep_bootcon: This option does not unregister the boot console at start. This is only useful for debugging when something happens in the window between unregistering the boot console and initializing the real console.
* ignore_loglevel: Ignore loglevel setting - this will print all kernel messages to the console. Useful for debugging. We also add it as a printk module parameter, so users could change it dynamically, usually by /sys/module/printk/parameters/ignore_loglevel.
* earlycon: Output early console device and options. When used with no options, the early console is determined by stdout-path property in device tree's chosen node.
* initcall_debug: This option traces initcalls as they are executed. This is very useful for working out where the kernel is dying during startup. Beware! This is very verbose.

### Adding content to the Boot Image

The initramfs image loaded in the previous section contains minimal initramfs cpio and modules cpio. In order to perform various testing features, additional content can be added to this initramfs image.

One interesting benefit of the cpio archive approach is that we can concatenate multiple cpio images and create the final cpio image to be loaded.

### Bootrr

The Linaro Qualcomm Landing Team uses bootrr to check sanity and ensure all modules are loaded, so we can create a bootrr cpio archive for this

The Bootrr build system supports creating cpio archives :

```
$ (cd bootrr; make cpio.gz)
```

### Test Utilities

Any test binaries and libraries can be added as well. This can be achieved by creating the disk layout one would like on the target and copying the binaries and libraries at appropriate locations. For example it is recommended to copy binaries to usr/bin in this utilities directory.

In order to automount a partition (like firmware), we can add an entry to inittab which would be overlayed. The last entry was added to mount the vendor_b partition to /mnt.

We can also create symlinks, for example to link firmware to /lib/firmware/

```
$ cat test-utils/etc/fstab

/dev/root            /                    auto       defaults              1  1
proc                 /proc                proc       defaults              0  0
devpts               /dev/pts             devpts     mode=0620,gid=5       0  0
tmpfs                /run                 tmpfs      mode=0755,nodev,nosuid,strictatime 0  0
tmpfs                /var/volatile        tmpfs      defaults              0  0

/dev/disk/by-partlabel/vendor_b		/mnt	auto       ro,defaults  0  0
```

After adding all the required pieces, we can create the cpio archive:

```
$ (cd test-utils; find . | cpio -o -H newc | gzip -9 > ../test-util.cpio.gz)
```

And finally, create the final initramfs image which contains bootrr and test-utils which should be used for making the boot image:

```
$ cat initramfs-test-image-qemuarm64-20210422073919-769.rootfs.cpio.gz \ 
modules.cpio.gz bootrr.cpio.gz \
test-util.cpio.gz > final-initramfs.cpio.gz
```