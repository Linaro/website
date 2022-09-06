---
layout: post
title: How to emulate Trusted Platform module in QEMU with U-Boot
description: In this blog, Linaro Tech Lead Ilias Apalodimas provides a step by
  step guide to emulating Trusted Platform module in QEMU with U-Boot. Read more
  here!
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

TPMs are microcontrollers designed for cryptographic tasks. Don’t think of them as crypto accelerators though, since carrying out cryptographic operations on your CPU will always be faster. However they can encrypt and decrypt information and have a significant advantage over your CPU doing so, since the keys are tied to the TPM.
When the TPM is initially configured, it generates a Storage Root Key or SRK. You can then ask the TPM to generate a new keypair for you, which the TPM will encrypt using the SRK, and hand it over to the caller. When the OS needs to encrypt or decrypt something, it loads the key into the TPM. The TPM then decrypts the key and performs the requested operation.

Another interesting functionality of the TPM is the ability to measure the system state using Platform Configuration Registers or PCRs, combined with the key ‘sealing and unsealing’.

PCRs start zeroed out and can only be reseted if on a system reboot. Those can be extended by writing a SHA hash (typically SHA-1/256/384/512 for TPMv2) into the PCR. The TPM concatenates the new hash to the existing PCR value and another SHA is calculated. This new value is now stored in the PCR.

TPMs also have the ability to seal and unseal keys. They can create and secure keys bound to specific platform states (and thus measurements). In order to unseal the key, the PCRs have to contain the exact same values that they had when the key was sealed. So for example you can create an encrypted filesystem with the encryption key sealed safely into your TPM. The filesystem will only be decrypted if the TPM ends up in the expected state.

On typical measured boot scenarios the firmware (or even BL1 is some devices) hashes itself to specific PCRs. So you can have for example BL2 measure itself and then measure BL31, BL32, BL33 and even GRUB config files, commands, Linux initrd etc. This effectively creates a chain of trust, which guarantees system components that we choose to measure have not been modified. Changing any of these would result in a different set of hash values.

## U-Boot Support

There is a specification defining a [standard](https://trustedcomputinggroup.org/wp-content/uploads/EFI-Protocol-Specification-rev13-160330final.pdf) interface to the TPM on an UEFI platform. Its purpose is to define APIs and provide information, for things like, is a TPM present, which PCR banks are active, change active PCR banks, obtain the TCG boot log, extend hashes to PCRs, append events to the TCG boot log etc.
U-Boot recently got support for this, as well as support for the [TCG PC Client Platform Firmware Profile](https://trustedcomputinggroup.org/wp-content/uploads/TCG_PCClient_PFP_r1p05_v22_02dec2020.pdf).
Patches for U-Boot were contributed by Linaro and can be found [here](https://lore.kernel.org/u-boot/20201112222210.876652-1-ilias.apalodimas@linaro.org/), [here](https://lore.kernel.org/u-boot/20201127162932.1965323-1-ilias.apalodimas@linaro.org/) and [here](https://lore.kernel.org/u-boot/20210813071243.18885-1-masahisa.kojima@linaro.org/).
It can be tricky to find an Arm device with a TPMv2. If you have a board with an RPMB and OP-TEE support, we recommend trying Microsoft's [fTPM](https://github.com/microsoft/ms-tpm-20-ref/). However testing that in QEMU won't work since it lacks RPMB emulation. Luckily there is another solution.

## Using SWTPM

[SWTPM](https://github.com/stefanberger/swtpm) is a TPM emulator that works under QEMU. It provides a memory mapped device which adheres to the [TCG TPM Interface Specification](https://trustedcomputinggroup.org/wp-content/uploads/TCG_PCClientTPMInterfaceSpecification_TIS__1-3_27_03212013.pdf). U-Boot lacked an MMIO TPMv2 driver up until [this patchset](https://source.denx.de/u-boot/u-boot/-/commit/e0ff3489974415873426188c71c613d2d28de6e3).

## Building U-Boot

```
git clone https://github.com/u-boot/u-boot.git
pushd u-boot
make qemu_arm64_defconfig
make menuconfig
```

The qemu defconfig includes the needed CONFIG_TPM, CONFIG_TPM2_MMIO and CONFIG_EFI_TCG2_PROTOCOL options. Make sure you enable CONFIG_CMD_EFIDEBUG as well, since we will need it to boot our kernel.

```
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
-chardev socket,id=chrtpm,path=/tmp/mytpm1/swtpm-sock \  	-tpmdev emulator,id=tpm0,chardev=chrtpm \
-device tpm-tis-device,tpmdev=tpm0
```

## Booting linux

From U-Boot's command line do something along the lines of

```
virtio scan
efidebug boot add -b 0 'Linux' virtio 0 boot/Image -s 'root=/dev/vda'
efidebug boot order 0
bootefi bootmgr
```

If everything is compiled and launched correctly, you should see the kernel reporting the location of some related EventLog pointers.

```
efi: EFI v2.80 by Das U-Boot
efi: TPMFinalLog=0x13ddcc040 RTPROP=0x13ddcb040 SMBIOS=0xffffe000
TPMEventLog=0x13ddc4040 MEMRESERVE=0x13ddc3040
```

## Reading the EventLog

I am using a debian qcow2 image, where I have installed the latest tpm2 tools. If you don't have them install them with

```
sudo apt install tpm2-tools
```

The kernel exposes the eventlog in /sys. So you can read it with:

```
tpm2_eventlog /sys/kernel/security/tpm0/binary_bios_measurements
---
events:
  - EventNum: 0
    PCRIndex: 0
    EventType: EV_NO_ACTION
    Digest: "0000000000000000000000000000000000000000"
    EventSize: 37
    SpecID:
      - Signature: Spec ID Event03
        platformClass: 0
        specVersionMinor: 0
        specVersionMajor: 2
        specErrata: 2
        uintnSize: 2
        numberOfAlgorithms: 2
        Algorithms:
          - Algorithm[0]:
            algorithmId: sha1
            digestSize: 20
          - Algorithm[1]:
            algorithmId: sha256
            digestSize: 32
        vendorInfoSize: 0
  - EventNum: 1
    PCRIndex: 0
    EventType: EV_S_CRTM_VERSION
    DigestCount: 2
  Digests:
      - AlgorithmId: sha1
        Digest: "0772fd675fbebcdd4401008ee8d609760c1675df"
      - AlgorithmId: sha256
        Digest: "69f66450f9a8780cf2fbab358d46b8fabd4b7e9ae886b3d80083646c30e91b4c"
    EventSize: 74
    Event: "552d426f6f7420323032312e31302d7263322d30303031302d67643536666231666138352d646972747920284175672032342032303231202d2030363a33343a3335202b303830302900"
  - EventNum: 2
    PCRIndex: 7
    EventType: EV_EFI_VARIABLE_DRIVER_CONFIG
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "57cd4dc19442475aa82743484f3b1caa88e142b8"
      - AlgorithmId: sha256
        Digest: "115aa827dbccfb44d216ad9ecfda56bdea620b860a94bed5b7a27bba1c4d02d8"
    EventSize: 53
    Event:
      VariableName: 61dfe48b-ca93-d211-aa0d-00e098032b8c
      UnicodeNameLength: 10
      VariableDataLength: 1
      UnicodeName: SecureBoot
      VariableData: "00"
  - EventNum: 3
    PCRIndex: 7
    EventType: EV_EFI_VARIABLE_DRIVER_CONFIG
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9b1387306ebb7ff8e795e7be77563666bbf4516e"
      - AlgorithmId: sha256
        Digest: "dea7b80ab53a3daaa24d5cc46c64e1fa9ffd03739f90aadbd8c0867c4a5b4890"
    EventSize: 36
    Event:
      VariableName: 61dfe48b-ca93-d211-aa0d-00e098032b8c
      UnicodeNameLength: 2
      VariableDataLength: 0
      UnicodeName: PK
  - EventNum: 4
    PCRIndex: 7
    EventType: EV_EFI_VARIABLE_DRIVER_CONFIG
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9afa86c507419b8570c62167cb9486d9fc809758"
      - AlgorithmId: sha256
        Digest: "e670e121fcebd473b8bc41bb801301fc1d9afa33904f06f7149b74f12c47a68f"
    EventSize: 38
    Event:
      VariableName: 61dfe48b-ca93-d211-aa0d-00e098032b8c
      UnicodeNameLength: 3
      VariableDataLength: 0
      UnicodeName: KEK
  - EventNum: 5
    PCRIndex: 7
    EventType: EV_EFI_VARIABLE_DRIVER_CONFIG
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "5bf8faa078d40ffbd03317c93398b01229a0e1e0"
      - AlgorithmId: sha256
        Digest: "baf89a3ccace52750c5f0128351e0422a41597a1adfd50822aa363b9d124ea7c"
    EventSize: 36
    Event:
      VariableName: cbb219d7-3a3d-9645-a3bc-dad00e67656f
      UnicodeNameLength: 2
      VariableDataLength: 0
      UnicodeName: db
  - EventNum: 6
    PCRIndex: 7
    EventType: EV_EFI_VARIABLE_DRIVER_CONFIG
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "734424c9fe8fc71716c42096f4b74c88733b175e"
      - AlgorithmId: sha256
        Digest: "9f75b6823bff6af1024a4e2036719cdd548d3cbc2bf1de8e7ef4d0ed01f94bf9"
    EventSize: 38
    Event:
      VariableName: cbb219d7-3a3d-9645-a3bc-dad00e67656f
      UnicodeNameLength: 3
      VariableDataLength: 0
      UnicodeName: dbx
  - EventNum: 7
    PCRIndex: 4
    EventType: EV_EFI_BOOT_SERVICES_APPLICATION
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "d2702383b2e042ebefbb318f9382fd094c1c2d6b"
      - AlgorithmId: sha256
        Digest: "8fb6a4c7a0c7e7f22b944906eb07786cd3860394c7929e7c0768b2c99a2a3d87"
    EventSize: 162
    Event:
      ImageLocationInMemory: 0x7adb3000
      ImageLengthInMemory: 893720
      ImageLinkTimeAddress: 0x0
      LengthOfDevicePath: 130
      DevicePath: "01041400b9731de684a3cc4aaeab82e828f3628b031d050002031d05000104012a0001000000009800000000000000f805000000000050641c65888b6b418f2257061a9dc3c50202040436005c004500460049005c00640065006200690061006e005c007300680069006d0061006100360034002e0065006600690000007fff0400"
  - EventNum: 8
    PCRIndex: 1
    EventType: Unknown event type
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "50eb6bd100c48e81644d666a437725f49c6aed3c"
      - AlgorithmId: sha256
        Digest: "eb881b78feeb95756141a8d5358b891b297fad61b296f667de1f59b66bc92f4f"
    EventSize: 52
    Event: "61dfe48bca93d211aa0d00e098032b8c0900000000000000020000000000000042006f006f0074004f0072006400650072000000"
  - EventNum: 9
    PCRIndex: 1
    EventType: Unknown event type
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "74e29a0674816dfdfc2c2e9cbbcec357132da4e8"
      - AlgorithmId: sha256
        Digest: "5d123811f51e2e46c437c7e88e07053c81f4e63da3f11de8a8a2afb5334db137"
    EventSize: 198
    Event: "61dfe48bca93d211aa0d00e098032b8c0800000000000000960000000000000042006f006f0074003000300030003000010000008200640065006200690061006e00000001041400b9731de684a3cc4aaeab82e828f3628b031d050002031d05000104012a0001000000009800000000000000f805000000000050641c65888b6b418f2257061a9dc3c50202040436005c004500460049005c00640065006200690061006e005c007300680069006d0061006100360034002e0065006600690000007fff0400"
  - EventNum: 10
    PCRIndex: 4
    EventType: EV_EFI_ACTION
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "cd0fdb4531a6ec41be2753ba042637d6e5f7f256"
      - AlgorithmId: sha256
        Digest: "3d6772b4f84ed47595d72a2c4c5ffd15f5bb72c7507fe26f2aaee2c69d5633ba"
    EventSize: 40
    Event: 'Calling EFI Application from Boot Option'
  - EventNum: 11
    PCRIndex: 0
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 12
    PCRIndex: 1
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 13
    PCRIndex: 2
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 14
    PCRIndex: 3
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest:
"df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 15
    PCRIndex: 4
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 16
    PCRIndex: 5
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 17
    PCRIndex: 6
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 18
    PCRIndex: 7
    EventType: EV_SEPARATOR
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "9069ca78e7450a285173431b3e52c5c25299e473"
      - AlgorithmId: sha256
        Digest: "df3f619804a92fdb4057192dc43dd748ea778adc52bc498ce80524c014b81119"
    EventSize: 4
    Event: "00000000"
  - EventNum: 19
    PCRIndex: 5
    EventType: EV_EFI_ACTION
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "443a6b7b82b7af564f2e393cd9d5a388b7fa4a98"
      - AlgorithmId: sha256
        Digest: "d8043d6b7b85ad358eb3b6ae6a873ab7ef23a26352c5dc4faa5aeedacf5eb41b"
    EventSize: 29
    Event: 'Exit Boot Services Invocation'
  - EventNum: 20
    PCRIndex: 5
    EventType: EV_EFI_ACTION
    DigestCount: 2
    Digests:
      - AlgorithmId: sha1
        Digest: "475545ddc978d7bfd036facc7e2e987f48189f0d"
      - AlgorithmId: sha256
        Digest: "b54f7542cbd872a81a9d9dea839b2b8d747c7ebd5ea6615c40f42f44a6dbeba0"
    EventSize: 40
    Event: 'Exit Boot Services Returned with Success'
pcrs:
  sha1:
    0  : 0x3e26be54f5f15140afbe509cc4580538d979598d
    1  : 0x5b4c188c39baa249f688460a63b68df6d3d3ec94
    2  : 0xb2a83b0ebf2f8374299a5b2bdfc31ea955ad7236
    3  : 0xb2a83b0ebf2f8374299a5b2bdfc31ea955ad7236
    4  : 0x260ae65533f38ab643f157bd176c72f9fdece410
    5  : 0xd16d7e629fd8d08ca256f9ad3a3a1587c9e6cc1b
    6  : 0xb2a83b0ebf2f8374299a5b2bdfc31ea955ad7236
    7  : 0x518bd167271fbb64589c61e43d8c0165861431d8
  sha256:
    0  :
0x7f35c1ef1bb7b9d2aee58ec4c36cf384d70524c2ce2b6801772d7fdb1d2b5f5a
    1  : 0xf35b74319598e48a6a69a6a04e903a872558b891563b0af23c877c8472c277a6
    2  : 0x3d458cfe55cc03ea1f443f1562beec8df51c75e14a9fcf9a7234a13f198e7969
    3  : 0x3d458cfe55cc03ea1f443f1562beec8df51c75e14a9fcf9a7234a13f198e7969
    4  : 0xbe4d7464e3a3c0a04040355368006a5fbe02c0ef232c8c18926df9b718374f36
    5  : 0xa5ceb755d043f32431d63e39f5161464620a3437280494b5850dc1b47cc074e0
    6  : 0x3d458cfe55cc03ea1f443f1562beec8df51c75e14a9fcf9a7234a13f198e7969
    7  : 0x65caf8dd1e0ea7a6347b635d2b379c93b9a1351edc2afc3ecda700e534eb3068
```

For more information on the work Linaro does in securing edge devices, go to our [Trusted Substrate project page](https://linaro.atlassian.net/wiki/spaces/TS/overview). Trusted Substrate is an integrated firmware solution made of all necessary components to implement Arm SystemReady standards with more security options turned on.
