---
layout: post
title: LEDGE Blogs - UEFI HTTP and HTTPs Boot in U-Boot
description: >
  Network boot is widely used for booting embedded and server class systems.
  Historically for Arm-based boards, U-Boot is the preferred bootloader used to
  set up the board's initial settings and load the operating system. According
  to git history, the initial git commit for the network was created in Dec
  2000, i.e. almost 23 years ago.  
date: 2023-10-17 01:28:08 +02:00
image: /assets/images/content/istock-860653830sm.jpg
tags:
  - embedded U-Boot SystemReady UEFI  Bootloaders UEFI_HTTP Fedora
category: blog
author: linaro
---
## Introduction

Network boot is widely used for booting embedded and server class systems. Historically for Arm-based boards, U-Boot is the preferred bootloader used to set up the board's initial settings and load the operating system. According to git history, the initial git commit for the network was created in Dec 2000, i.e. almost 23 years ago.  

Nowadays U-Boot has support for various network devices as well as different network boot methods, like tftpboot, rarpboot,  DHCP, HTTP, and NFS.  These protocols do not use encryption though and are intended for local networks.

## Network booting

Enabling network boot on devices allows:

* Shipping devices without OS images. When we power up the device, the firmware can connect to the Internet and download and install suitable boot images for this specific device. Administrators can centrally manage the boot images and configuration files on a network server. This centralization streamlines the management of boot options and ensures consistency across all devices. 
* This is particularly useful in enterprise environments. On mass deployments, there is a need to install the operating system on multiple devices simultaneously.
* Ability to maintain a completely diskless system if needed

Doing so also leads to cost reductions in product deployment. Instead of sending engineers with physical storage (eg. a USB device) to install an OS, you can do all that remotely and in parallel. It also makes repurposing devices a lot easier. However, non-secure protocols can be an issue when used in public networks. These issues can be solved by implementing HTTPs in U-Boot.

## UEFI HTTP Boot

The UEFI specification includes support for booting over the network via the Preboot eXecution Environment (PXE). 

PXE boot network protocols include Internet Protocol (IPv4 and IPv6), User Datagram Protocol (UDP), Dynamic Host Configuration Protocol (DHCP), and Trivial File Transfer Protocol (TFTP). However, these protocols suffer from the same security problems and reliability problems that come with UDP connections. The UEFI spec also describes UEFI HTTP Boot which was recently added in U-Boot. In contrast to traditional network boot protocols:

* HTTP is better suited for modern network infrastructures and security policies, where encrypted connections are preferred over unencrypted traffic.
* TCP is much more reliable than UDP as a transport mechanism.  Although TFTP has a smaller footprint, embedded devices nowadays aren’t as constrained as they used to be.
* Physical media or PXE boot using TFTP (Trivial File Transfer Protocol), can be cumbersome to set up and maintain.

Example of downloading debian iso image and starting the OS installer.  The commands are for QEMU arm64:

```
qemu-system-aarch64 -nographic -machine virt -cpu cortex-a57 -bios u-boot.bin \

\-m 4096 \

\-drive if=none,file=test.img,format=raw,id=hd0 \

\-device virtio-blk-device,drive=hd0 \

\-device virtio-net-device,netdev=net0 \

\-netdev tap,ifname=tap0,id=net0 \

\-device virtio-net-device,netdev=net1 \

\-netdev user,id=net1

\=> setenv loadaddr 0x41000000

\=> lwip wget http://192.168.2.100/mini.iso

eth0: virtio-net#29 52:54:00:12:34:57 active

eth1: virtio-net#30 52:54:00:12:34:56

downloading http://192.168.2.100/mini.iso to addr 0x41000000



153399296 bytes successfully downloaded.

\=> blkmap create debian

Created "debian"

\=> setexpr fileblks ${filesize} / 0x200

\=> blkmap map debian 0 ${fileblks} mem 0x41000000

Block 0x0+0xa99cc9 mapped to 0x41000000

\=> ls blkmap 0:2 /

         efi/

         dtb/

    88   ubootefi.var

\=> fatload blkmap 0:2 0x4b000000 efi/boot/bootaa64.efi;

979672 bytes read in 4 ms (233.6 MiB/s)

\=> bootefi 0x4b000000 ${fdt_addr}
```

\
Note: We are in the process of upstreaming patches. The command sequence above will be part of the UEFI [Bootmanager](https://lore.kernel.org/u-boot/20230922071119.1439482-1-masahisa.kojima@linaro.org/).

Then we can see loader grub bootloader:

![](/assets/images/content/gnu-grub-version-2.12~rc1-7.png)

## U-Boot Implementation

U-Boot traditionally relies on code implemented in its own codebase. However, TCP/IP code is big and complicated.  On top of that U-Boot implements only a small subset and has limited IPv6 support. Additionally things like the recent [EU Cybersecurity Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cybersecurity-act) further complicate the device security model and responsibilities. Instead of rewriting a TCP/IP stack from scratch, we thought we were better off using an established TCP/IP library that also adheres to U-Boots license needs.  

lwIP (lightweight IP stack) is GPLv2 compatible library that can replace the existing TCP/IP stack in U-Boot. The idea was discussed in the mailing list and patches are already under [review](https://lore.kernel.org/u-boot/20230926094124.7024-1-maxim.uvarov@linaro.org/). Initial patches reimplement U-Boot commands ping, tftp, dhcp, wget with lwIP variant and bring full IP stack inside the boot loader.

## Working towards HTTPs

In a secure boot environment, firmware binaries are expected to be signed and verified before booting, protected by cryptographic signatures starting from the first stage bootloader (e.g. TF-A, U-Boot SPL etc), and establishing a chain of trust.  Plain not encrypted HTTP protocol does not protect you from intercepting a download and does not encrypt information used between the server and client during the installation procedure.

Attackers can tamper with the image a firmware downloads. If the device has not enabled Secure Boot by default, it can boot an arbitrary EFI application. Securing network protocols with HTTPs provides encryption as well, concealing sensitive information that might be needed during the installation. This includes transmitting sensitive data such as device secrets, device ID, current firmware version, location, localization, etc.

As a result, if we add additional security for the network protocols we can operate with untrusted public networks. Technically HTTPs inside firmware in a similar fashion to HTTPs inside your browser. Certificates built into the firmware are used to establish a secure and encrypted connection to a remote host.

## Future work

Once the lwIP IP stack is integrated with U-Boot we intend to replace the U-Boot crypto stack with an open-source crypto library. lwIP already provides an API for mbedTLS. Integrating lwIP and mbedTLS in U-Boot will provide us with a viable path for enabling UEFI HTTPs boot.