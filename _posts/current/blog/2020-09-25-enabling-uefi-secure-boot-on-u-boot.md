---
layout: post
title: Enabling UEFI Secure Boot on U-Boot
description: >
  In this article, Takahiro Akashi looks at how UEFI Secure Boot on U-Boot works and what it is designed to protect you against. Read about it here!
date: 2020-09-28 02:15:38
image: /assets/images/content/tech_background_1.jpg
tags:
  - Qemu
  - UEFI
  - Linux
  - Linaro
  - Arm
category: blog
author: takahiro.akashi@linaro.org
---

U-Boot is a favorite boot loader for embedded devices, supporting a variety of architectures and platforms. In the last few years, a number of new UEFI interfaces have been brought into U-Boot, and the latest element added is Secure Boot. How does it work and what is it designed to protect you against?

## UEFI U-Boot

UEFI (Unified Extensible Firmware Interface)\[1] is the specification developed by UEFI Forum to standardize interfaces between firmware and the OS's, aiming to replace legacy BIOS on PC architecture.

Nowadays UEFI is everywhere. It has been the default on PC and server side, so now is on arm64 platforms. While U-Boot is still popular among embedded world, supporting generic interfaces like UEFI will make it much easier for users to bring a wider range of OS distributions to their platforms with minimized efforts and no customization. Remember that grub can support U-Boot's own APIs but only on arm port. No distributions support it on arm64 or x86.

Accordingly, a huge amount of effort has been devoted on developing UEFI interfaces on top of U-Boot framework since 2016. Linaro participated in this community activity since 2018 and worked together to help improve the functionality as well as the quality. (At Linaro we focus on the arm ecosystem, but those developments benefit other architectures as well. It might be worth mentioning that, in the latest release, risc-v is added to a list of supported architectures along with arm and x86.)

To further strengthen interoperability (and hence compatibility with the existing implementation like EDK-II), UEFI U-Boot now reinforces its development goal that it should fully commit and adhere to EBBR (Embedded Base Boot Requirement)\[2]. EBBR is a collective document being developed by the community. It defines a set of requirements that the firmware on embedded devices should follow to enable standard OSs installed without customization.

At the time of writing this article, UEFI U-Boot provides :

- most of boottime services (before OS starts)
- a limited number of runtime services (after OS starts)
- a subset of relevant protocols (block devices, console, network etc.)
- minimal boot manager

There is still plenty of missing features and restrictions, but the functionality is now mature enough to run software like:

- EDK-II shell
- shim and grub, or more directly
- linux kernel

While the primary target OS is linux, other OSs like BSD variants are also confirmed to work with UEFI U-Boot. Furthermore, _UEFI SCT (Self Certification Tests)_ can also be executed directly on U-Boot. This allows us to evaluate to what extent the current implementation is compliant with the UEFI specification and has contributed to the enhancement in conformity.

## Secure Boot: How it works?

Among others, UEFI Secure Boot is a new feature introduced in the latest U-Boot release, v2020.10. (At the time of writing, the status is in -rc5.)

It is, as the name suggests, a security framework in boot sequence which is designed to protect the system from malware being executed by ensuring that only trusted software, EFI applications and OS kernels, are loaded and executed in the middle of transferring the control from the firmware to the OS.

In fact, U-Boot already has its own secure boot framework, dubbed FIT Signature Verification. There are always pro's and con's; For example, the original secure boot can sign and verify not only binaries but also other type of data like device tree blob and initrd, and UEFI Secure Boot can only deal with PE (Portable Executable) executables (at least, for now). On the other hand, UEFI Secure Boot provides a more flexible manner for key management in addition to compatibility with existing third party software (including linux distributions). It is not intended to supersede U-Boot original, it's up to the user's choice based on system requirements.

Since there are a variety of articles about UEFI Secure Boot on websites, for example,\[3], we will not dive into technical details. Instead, the basic logic under UEFI Secure Boot will be outlined here. UEFI Secure Boot is based on message digests (hashes) and public key cryptography technologies. When attempting to load an image file, U-Boot checks for the image's signature against signature databases to determine if the image is trusted or not.

There are four main signature databases used here.

- PK (Platform Key)
- KEK (Key Enrollment Key)
- db (allow-list of signatures)
- dbx (deny-list of signatures)

"db" database may have x509 certificates, hashes of images as signatures and "dbx" may additionally contain hashes of certificates.

An image will be granted for loading if

- it is signed and its signature is validated by one of the certificates in "db" (there can be a number of intermediate certificates involved) or
- its message digest is found in "db"

Likewise, any image will be refused if

- it is signed and its signature is validated by one of the certificates in "dbx"
- it is signed and verified by "db" but any one of certificates in a chain of trust is found in "dbx" or
- its message digest is found in "dbx"

In July, the security vulnerability, named "BootHole"\[5], has drawn people's attention. Grub, the de-facto boot loader for linux and other distributions, has a security attack vector due to memory overflow and may possibly allow attackers to execute arbitrary code bypassing UEFI Secure Boot on targeted systems.

To eliminate this security hole, grub and hence shim must be updated, and at the same time, the chain of trusted boot sequence must also be modified to prevent any old and vulnerable version of software from being loaded and potentially exploited by malicious code. It is expected that, in future security fixes, hashes of all affected binaries will be added to "dbx". (Additionally, shim will maintain its own signature database, MokList/MokListX (Machine Owner's Keys), per OS requests as well.)

All those signature databases above are kept and maintained as UEFI authenticated variables, which means that they are also protected with their own signatures and that updating their values must be granted by verifying the signatures. PK is used to verify KEK before altering its value, while KEK is a key for updating db and dbx.

Once PK is enrolled, UEFI Secure Boot is set to be in force. Since PK is the root of chain in trusted boot sequence, it is expected to be stored in a non-volatile and tamper-resilient place on the systems at the factory level.

The current UEFI U-Boot provides two alternatives for non-volatile variable storage:

a) a plain file on UEFI System Partition

b) OP-TEE based variable service

While a filesystem in (a) doesn't provide any robust protection against being compromised, the secure service running under OP-TEE in (b), EDK-II Standalone Management Mode, is isolated, yet being proxied and accessible from non-secure U-Boot code. Thereby, the option (b) is the only fully secure solution for now. Required patches have been merged for U-Boot and OP-TEE, but some on EDK-II side are still pending.

Currently, U-Boot has no switch to turn UEFI Secure Boot on and off after enrolling PK.

## Playing with Secure Boot

Let's take Red Hat Enterprise Linux (8.2) as a real example and illustrate how we can activate UEFI Secure Boot and install the OS with U-Boot on qemu(arm64). (Please note that this is for demo purposes only, aiming to help people have an easy experience with UEFI Secure Boot, not intended to show that UEFI U-Boot fully meets RHEL's requirements).

To simplify the required steps, we will go with option (A) in this example.

### 1. build U-Boot

CONFIG_EFI_SECURE_BOOT is the only option required in addition to qemu_arm64_defconfig to support UEFI Secure Boot.

```
$ make qemu_arm64_defconfig
# enable CONFIG_EFI_SECURE_BOOT and CONFIG_SEMIHOSTING
$ make
```

### 2. prepare a disk with UEFI System Partition

Filesystem-based variables service relies on UEFI System Partition to implement non-volatile variables by saving values in a file on the partition.

```
$ qemu-img create -f raw redhat_fs.img 5G
$ sgdisk -n 1:0:+100MiB -t 1:C12A7328-F81F-11D2-BA4B-00A0C93EC93B redhat_fs.img
$ guestfish -a redhat_fs.img
 > run
 > mkfs vfat /dev/sda
 > quit
```

### 3. acquire Red Hat certificate

This step is a bit tricky as, AFAIK, there is no website available from which a valid Red Hat certificate can be downloaded.

Luckily any EFI application may hold associated certificates in its signature (with pkcs7 format), and 'shim.efi', which is to be loaded as the first EFI application, which has been signed with "Red Hat Secure Boot (CA key 1)". You will have to dig into the signature's data structure and retrieve this certificate into a separate file.

Details are not described here, but you can use "sbverify" command to extract signature data (or authenticode) from the binary and then use "openssl" command to examine and parse it to identify the offset and size of the certificate within it.

### 4. create data for signature database

Here, interim "PK" and "KEK" are created as self-signed certificates, while "db" should contain the certificate, dubbed "rh_ca.crt", from step (3).

```
# PK
$ openssl req -x509 -sha256 -newkey rsa:2048 -subj /CN=TEST_PK/ \
  -keyout PK.key -out PK.crt -nodes -days 365
$ cert-to-efi-sig-list -g 11111111-2222-3333-4444-123456789abc \
  PK.crt PK.esl
$ sign-efi-sig-list -c PK.crt -k PK.key PK PK.esl PK.auth

# KEK
$ openssl req -x509 -sha256 -newkey rsa:2048 -subj /CN=TEST_KEK/ \
  -keyout KEK.key -out KEK.crt -nodes -days 365
$ cert-to-efi-sig-list -g 11111111-2222-3333-4444-123456789abc \
  KEK.crt KEK.esl
$ sign-efi-sig-list -c PK.crt -k PK.key KEK KEK.esl KEK.auth

# db
$ cert-to-efi-sig-list -g 11111111-2222-3333-4444-123456789abc \
  rh_ca.crt rh_ca.esl
$ sign-efi-sig-list -c KEK.crt -k KEK.key db rh_ca.esl rh_ca.auth
```

### 5. start U-Boot & enroll keys into signature database

Now you can enroll keys at U-Boot command line. First, start qemu with the following command:

```
$ qemu-system-aarch64 \
  -machine virt \
  -cpu cortex-a57 -smp 1 -m 4G -d unimp \
  -nographic -serial mon:stdio \
  -semihosting \
  -bios /path/to/u-boot.bin \
  -drive if=none,file=/path/to/redhat_fs.img,format=raw,id=hd0 \
  -device virtio-blk-device,drive=hd0 \
  -cdrom /path/to/rhel-8.2-aarch64-dvd.iso
```

Then,

```
=> smhload PK.auth 50000000
=> setenv -e -nv -bs -rt -at -i 50000000:<file-size> PK
=> smhload KEK.auth 50000000
=> setenv -e -nv -bs -rt -at -i 50000000:<file-size> KEK
=> smhload rh_ca.auth 50000000
=> setenv -e -nv -bs -rt -at -i 50000000:<file-size> db
```

### 6. install the OS

Start the OS installer:

```
=> fatload virtio 1:1 50000000 EFI/BOOT/BOOTAA64.EFI
=> bootefi 50000000
```

Select "Install Red Hat Enterprise Linux 8.2". Eventually, the installer boots up in text mode and stops at the installation menu.

```
...
05:32:49 Not asking for VNC because we don't have a network
05:32:50 X startup failed, falling back to text mode
================================================================================
================================================================================
Installation

1) [x] Language settings                 2) [x] Time settings
       (English (United States))                (America/New_York timezone)
3) [!] Installation source               4) [!] Software selection
       (Processing...)                          (Processing...)
5) [!] Installation Destination          6) [x] Kdump
       (No disks selected)                      (Kdump is enabled)
7) [!] Network configuration             8) [!] Root password
       (Not connected)                          (Password is not set.)
9) [!] User creation
       (No user will be created)

Please make a selection from the above ['b' to begin installation, 'q' to quit,
'r' to refresh]:
```

### Installation

You can configure the options as you like. The point here is on "5) Installation Destination". Select the disk created in step (2) as the destination and

```
Partitioning Options

1) [X] Replace Existing Linux system(s)
2) [ ] Use All Space
3) [ ] Use Free Space
4) [ ] Manually assign mount points

Installation requires partitioning of your hard drive. Select what space to use
for the install target or manually assign mount points.

Please make a selection from the above ['c' to continue, 'q' to quit, 'r' to
refresh]:
```

Select "Replace Existing Linux system(s)" as we have already created UEFI System Partition in step (2).

After setting all the choices, continue the installation.

At the end of installation, you will probably see an error like:

```
Question

The following error occurred while installing the boot loader. The system will
not be bootable. Would you like to ignore this and continue with installation?

failed to set new efi boot target. This is most likely a kernel or firmware bug.
Please respond 'yes' or 'no':
```

You can ignore this message and say 'yes'. What happened here was that the installer failed to set up UEFI variables relating to boot options, ie. "BootXXXX" and "BootOrder" as UEFI variables are not accessible from OS in runtime services.

### 7. reboot the system

Once you have successfully done the above steps, you will see in dmesg from efistub code and kernel:

```
EFI stub: Booting Linux Kernel...
EFI stub: EFI_RNG_PROTOCOL unavailable, no randomness supplied
EFI stub: UEFI Secure Boot is enabled.
EFI stub: Using DTB from configuration table
EFI stub: Exiting boot services and installing virtual address map...
[    0.000000] Booting Linux on physical CPU 0x0000000000 [0x411fd070]
[    0.000000] Linux version 4.18.0-193.el8.aarch64 (mockbuild@arm64-025.build.eng.bos.redhat.com) (gcc version 8.3.1 20191121 (Red Hat 8.3.1-5) (GCC)) #1 SMP Fri Mar 27 15:23:34 UTC 2020
[    0.000000] Machine model: linux,dummy-virt
[    0.000000] efi: Getting EFI parameters from FDT:
[    0.000000] efi: EFI v2.80 by Das U-Boot
...
```

Here is the last magic. Even though no boot option variables were created in step (6), UEFI U-Boot is set to look for a fallback bootable image, "/EFI/BOOT/BOOTAA64.efi," in UEFI System Partition and attempt to start it automatically.

This binary is actually a copy of OS's boot loader, i.e. shimaa64.efi if UEFI Secure Boot is enabled, and it will also detect an absence of boot options and create them with the OS standard path and start OS's second boot loader, 'grubaa64.efi', which is signed by OS vendor and must be verified before loading. Likewise, it will securely chain the boot sequence to linux kernel.

Hereafter, U-Boot's efi bootmanager is expected to kick off shim from installed path at every succeeding reboot under secure boot environment.

### References

**\[1]<https://uefi.org/>**

**\[2][https://github.com/ARMsoftware/ebbr/](https://github.com/ARM-software/ebbr/)**

**3]<https://access.redhat.com/articles/5254641>**

**\[4]<https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-secure-boot>**

**\[5]<https://eclypsium.com/2020/07/29/theres-a-hole-in-the-boot/>**

For more information on Linaro and the work we do, make sure to [get intouch](https://www.linaro.org/contact/)!
