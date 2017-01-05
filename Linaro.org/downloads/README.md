## Downloads

This page contains direct links to the latest versions of the most popular downloads from Linaro. These include a selection of builds including Android, the LAVA test framework and key toolchains.

* [Click here to sign-up for the release mailing list](https://lists.linaro.org/mailman/listinfo/linaro-release)

## Linaro Member Builds

LMBs are full system builds of popular open-source products set up at the request of a Linaro Core/Club [Member](https://www.linaro.org/members/) company.

|     |     |     |
|:---|:---|:---|
|ARM| Juno, Fixed Virtual Platforms (FVP), Versatile Express | [Platform release notes](http://community.arm.com/groups/arm-development-platforms)|
|Qualcomm| Download for Snapdragon 600 processor | [Snapdragon 600 Linux Platform](https://releases.linaro.org/debian/boards/snapdragon/latest/)|

***

## Linaro Stable Kernel (LSK)

The LSK is a version of kernel.org’s Long-Term Stable (LTS) release with new Linaro developed optimizations and ARM support integrated. There are two versions: a “Core” version for generic Linux and an “Android” version. Click right for the latest downloads.

- [linux-linaro-stable (LSK), Source, Git](https://wiki.linaro.org/LSK)

***

## Linaro Confectionary Release (LCR)

R-LCR is a build of the Android Open Source Project (AOSP) from a stable “L” branch that includes platform support and other features. R-LCR includes the Android flavour of Linaro Stable Kernel (LSK) for all machine configurations.

***

## LAVA

The Linaro Automated Validation Architecture (LAVA) is a test and continuous integration framework that Linaro uses to validate its releases. The source is open so that members and others can create their own instantiations and run proprietary tests within this standard framework. [Click here for the latest downloads](https://releases.linaro.org/components/lava/latest/).

***

## Linaro Networking

Based on the Linaro Stable Kernel (LSK) and upstream, these kernels add features currently being developed by LNG and not upstreamed yet.

Release notes https://git.linaro.org/lng/releases-instructions.git

Repo https://git.linaro.org/kernel/linux-linaro-lng.git

- Latest LSK kernel for which a preempt-rt patch set has been released, plus patches that have not yet been accepted upstream and are relevant to LNG ([linux-linaro-lng-4.1](http://releases.linaro.org/components/kernel/linux-linaro-lng/16.03/linux-linaro-lng-4.1.14-2016.03.tar.bz2))
- Same as linux-linaro-lng-v4.1 but with the preempt-rt patches applied. ([linux-linaro-lng-preempt-rt-4.1](http://releases.linaro.org/components/kernel/linux-linaro-lng/16.03/linux-linaro-lng-preempt-rt-4.1.14-2016.03.tar.bz2))

***

#### OpenDataPlane

The [OpenDataPlane](http://www.opendataplane.org/) API has three implementations supported directly by LNG

- Functional reference model that runs on any linux implementation ([odp-linux-generic](https://git.linaro.org/lng/odp.git))
- Reusing odp-linux-generic and adding packet_io acceleration via Netmap ([odp-netmap](https://git.linaro.org/lng/odp-netmap.git))
- Performance implementation build for x86  using the DPDK SDK. ([odp-dpdk](https://git.linaro.org/lng/odp-dpdk.git))

*** 
## Linaro Toolchain

Linaro provides monthly [GCC source archive](https://snapshots.linaro.org/components/toolchain/gcc-linaro/) snapshots of the current Linaro GCC release branch, as well as quarterly releases of pre-built Linaro [GNU cross-toolchain binary archives](https://releases.linaro.org/components/toolchain/binaries/).

The following tables provide direct access to the most common Linux and bare-metal ABI variants of the Linaro binary cross-toolchain quarterly releases.  Both x86_64 Linux and Mingw32 (MS Windows compatible) host binaries are provided:

#### Latest Linux Targetted Binary Toolchain Releases
|    |    |    |    |    |    |
|:---|:---|:---|:---|:---|:----|
|**arm-linux-gnueabihf**|_32-bit ARMv7 Cortex-A, hard-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/arm-linux-gnueabihf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/arm-linux-gnueabihf/)|
|**armv8l-linux-gnueabihf**|_32-bit ARMv8 Cortex-A, hard-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/armv8l-linux-gnueabihf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/armv8l-linux-gnueabihf/)|
|**aarch64-linux-gnu**|_64-bit ARMv8 Cortex-A, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-linux-gnu/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-linux-gnu/)|

#### Latest Bare-Metal Targetted Binary Toolchain Releases
|    |    |    |    |    |    |
|:---|:---|:---|:---|:---|:----|
|**arm-eabi**|_32-bit ARMv7 Cortex-A, soft-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/arm-eabi/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/arm-eabi/)| 
|**aarch64-elf**|_64-bit ARMv8 Cortex-A, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-elf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-elf/)|

***

Interested in other target ABIs such as big-endian or soft-float little-endian? All toolchain target ABI and host variants can be seen [here](https://releases.linaro.org/components/toolchain/binaries/latest/). _Note: Not all ABI and host variants are supported to the same degree. See the [release-notes](https://releases.linaro.org/components/toolchain/binaries/latest/) for more information._

***

Interested in Cortex-R and Cortex-M bare-metal targetted toolchains for ARM embedded processors? We’re working with ARM to also supply a new release every year (with quarterly updates). Releases are maintained for two years. Get these from Launchpad: https://launchpad.net/gcc-arm-embedded

***

[Edit this page on GitHub](https://github.com/Linaro/website/blob/master/Linaro.org/downloads/README.md)
