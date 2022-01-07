---
layout: post
title: How to emulate Trusted Platform module in QEMU with U-Boot
description: "In this blog, Linaro Tech Lead Ilias Apalodimas provides a step by
  step guide to emulating Trusted Platform module in QEMU with U-Boot. Trusted
  Platform Modules (TPM) are microcontrollers designed for cryptographic tasks.
  "
date: 2022-01-06 11:08:44 +00:00
image: /assets/images/content/Trusted_Services2.jpg
tags:
  - Trusted Platform Module
  - TPM
  - UBoot
  - QEMU
  - Firmware
category: blog
author: ilias.apalodimas@linaro.org
---
## Do I need a Trusted Platform Module (TPM)?

The short answer is "yes you do". 

TPMs are microcontrollers designed for cryptographic tasks.  Don’t think of them as crypto accelerators though, since carrying out cryptographic operations on your CPU will always be faster. However they can encrypt and decrypt information and have a significant advantage over your CPU doing so, since the keys are tied to the TPM.
When the TPM is initially configured, it generates a Storage Root Key or SRK. You can then ask the TPM to generate a new keypair for you, which the TPM will encrypt using the SRK, and hand it over to the caller. When the OS needs to encrypt or decrypt something, it loads the key into the TPM. The TPM then decrypts the key and performs the requested operation. 

Another interesting functionality of the TPM is the ability to measure the system state using Platform Configuration Registers or PCRs, combined with the key ‘sealing and unsealing’.

PCRs start zeroed out and can only be reseted if on a system reboot. Those can be extended by writing a SHA hash (typically SHA-1/256/384/512 for TPMv2) into the PCR.  The TPM concatenates the new hash to the existing PCR value and another SHA is calculated. This new value is now stored in the PCR.

TPMs also have the ability to seal and unseal keys. They can create and secure keys bound to specific platform states (and thus measurements).  In order to unseal the key, the PCRs have to contain the exact same values that they had when the key was sealed. So for example you can create an encrypted filesystem with the encryption key sealed safely into your TPM. The filesystem will only be decrypted if the TPM ends up in the expected state.

On typical measured boot scenarios the firmware (or even BL1 is some devices) hashes itself to specific PCRs. So you can have for example BL2 measure itself and then measure BL31, BL32, BL33 and even GRUB config files,  commands, Linux initrd etc.  This effectively creates a chain of trust, which guarantees system components that we choose to measure have not been modified. Changing any of these would result in a different set of hash values.

## U-Boot Support

There is a specification defining a [standard](https://trustedcomputinggroup.org/wp-content/uploads/EFI-Protocol-Specification-rev13-160330final.pdf) interface to the TPM on an UEFI platform. Its purpose is to define APIs and provide information, for things like, is a TPM present, which PCR banks are active, change active PCR banks, obtain the TCG boot log, extend hashes to PCRs,  append events to the TCG boot log etc.
U-Boot recently got support for this, as well as support for the [TCG PC Client Platform Firmware Profile](https://trustedcomputinggroup.org/wp-content/uploads/TCG_PCClient_PFP_r1p05_v22_02dec2020.pdf).
Patches for U-Boot were contributed by Linaro and can be found [here](https://lore.kernel.org/u-boot/20201112222210.876652-1-ilias.apalodimas@linaro.org/), [here](https://lore.kernel.org/u-boot/20201127162932.1965323-1-ilias.apalodimas@linaro.org/) and [here](https://lore.kernel.org/u-boot/20210813071243.18885-1-masahisa.kojima@linaro.org/).
It can be tricky to find an Arm device with a TPMv2. If you have a board with an RPMB and OP-TEE support, we recommend trying Microsoft's [fTPM](https://github.com/microsoft/ms-tpm-20-ref/). However testing that in QEMU won't work since it lacks RPMB emulation. Luckily there is another solution.

## Using SWTPM

[SWTPM](https://github.com/stefanberger/swtpm) is a TPM emulator that works under QEMU. It provides a memory mapped device which adheres to the [TCG TPM Interface Specification](https://trustedcomputinggroup.org/wp-content/uploads/TCG_PCClientTPMInterfaceSpecification_TIS__1-3_27_03212013.pdf).  U-Boot lacked an MMIO TPMv2 driver up until [this patchset](https://source.denx.de/u-boot/u-boot/-/commit/e0ff3489974415873426188c71c613d2d28de6e3).

## Building U-Boot

```
git clone https://github.com/u-boot/u-boot.git
pushd u-boot
make qemu_arm64_defconfig
make menuconfig
```

The qemu defconfig includes the needed `CONFIG_TPM`,
`CONFIG_TPM2_MMIO` and `CONFIG_EFI_TCG2_PROTOCOL` options. Make sure
you enable `CONFIG_CMD_EFIDEBUG` as well, since we will need it to
boot our kernel.

```
# needed when cross-compiling
set -x ARCH arm64
set -x CROSS_COMPILE aarch64-linux-gnu-
# then do the build
make -j $(nproc)
popd
```

## Running QEMU

Make sure swtpm is installed and running on your system. For Debian and friends there's a swtpm package, so just do

```
sudo apt install swtpm
mkdir /tmp/mytpm1
swtpm socket --tpmstate dir=/tmp/mytpm1 \
    --ctrl type=unixio,path=/tmp/mytpm1/swtpm-sock \
    --log level=40 --tpm2 -t -d
```

and launch QEMU with swtpm support

```
qemu-system-aarch64 -nographic -no-acpi \
    -bios u-boot.bin -machine virt \
    -cpu cortex-a57 -m 2G \
    -drive if=virtio,file=<your qcow2> \
    -chardev socket,id=chrtpm,path=/tmp/mytpm1/swtpm-sock \
    -tpmdev emulator,id=tpm0,chardev=chrtpm \
    -decice tpm-tis-device,tpmdev=tpm0
```

## Booting linux

From U-Boot's command line do something along the lines of

```
virtio scan
efidebug boot add -b 0 'Linux' virtio 0 boot/Image -s
'root=/dev/vda'
efidebug boot order 0
bootefi bootmgr
```

If everything is compiled and launched correctly, you should see the kernel reporting the location of some related EventLog pointers.

{% include image.html path="/assets/images/content/booting-linux-image-2.png" alt="Booting Linux image 2" %}

## Reading the EventLog

I am using a debian qcow2 image, where I have installed the latest tpm2 tools. If you don't have them install them with

```
sudo apt install tpm2-tools
```

The kernel exposes the eventlog in /sys. So you can read it with:

{% include image.html path="/assets/images/content/reading-the-eventlog-image-2.png" alt="Reading the eventlog image 2" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-3.png" alt="Reading the eventlog image 3" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-4.png" alt="Reading the eventlog image 4" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-5.png" alt="Reading the eventlog image 5" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-6.png" alt="Reading the eventlog image 6" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-7.png" alt="Reading the eventlog image 7" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-8.png" alt="Reading the eventlog image 8" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-9.png" alt="Reading the eventlog image 9" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-10.png" alt="Reading the eventlog image 10" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-11.png" alt="Reading the eventlog image 11" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-12.png" alt="Reading the eventlog image 12" %}

{% include image.html path="/assets/images/content/reading-the-eventlog-image-13.png" alt="Reading the eventlog image 13" %}

For more information on the work Linaro does in securing edge devices, go to our [Trusted Substrate project page](https://linaro.atlassian.net/wiki/spaces/TS/overview). Trusted Substrate is an integrated firmware solution made of all necessary components to implement Arm SystemReady standards with more security options turned on.
