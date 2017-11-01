---
layout: default-no-sub-nav
title: Downloads
permalink: /downloads/
---
## Downloads

Linaro code exists in many states and is found in many places. Working upstream means that the ultimate goal for most code is to be accepted and incorporated into something like the Linux kernel or GCC tool chain. The [Patches website](http://patches.linaro.org/) presents this work by team and by upstream project.

Before the code gets accepted upstream, Linaro maintains various development repositories and Linaro's groups make regular releases of various builds including Android, the LAVA test framework, key toolchains and builds for specific member products.

## Linaro Releases, Platforms and Snapshots

[Releases](http://releases.linaro.org/) is the main repository for Linaro code that has been tested and released. It is possible to navigate down through this site to find code if you know what you are looking for, but we recommend you use the links below for our most popular downloads.

[Platforms](https://platforms.linaro.org/documentation/Reference-Platform/Platforms/Enterprise/README.md/) is a new site that will host platform builds for specific end-to-end solutions. Currently, this site features the 16.12 release of the Enterprise Reference Platform, but we expect to post additional platform builds in the first half of 2017.

[Snapshots](http://snapshots.linaro.org/) code shows Linaro work in progress. Often created on a daily basis, these are literally snapshots of work in progress that are used for testing and development. The code on this site may not work and should only be used by experienced engineers who know exactly what they are doing.

## Linaro Member Builds

LMBs are full system builds of popular open-source products set up at the request of a Linaro Core/Club [Member](https://www.linaro.org/members/) company.

{:.table-responsive}
|:---|:---|:---|:---|:---|
|ARM | <img src="https://www.linaro.org/wp-content/uploads/2014/08/aarch-64-logo.png" width="32px" height="auto" alt="AARCH 64 Logo" /> | Juno, Fixed Virtual Platforms (FVP), Versatile Express | [Platform release notes](http://community.arm.com/groups/arm-development-platforms)|
|Qualcomm | <img src="https://www.linaro.org/wp-content/uploads/2014/08/snapdragon-logo.png" width="32px" height="auto" alt="Snapdragon Logo" /> | Download for Snapdragon 600 processor | [Snapdragon 600 Linux Platform](https://releases.linaro.org/debian/boards/snapdragon/latest/)|

***

## Linaro Stable Kernel (LSK)

The LSK is a version of kernel.org’s Long-Term Stable (LTS) release with new Linaro developed optimizations and ARM support integrated. There are two versions: a “Core” version for generic Linux and an “Android” version.

{% include image.html name="icon-linux-logo-24x24.png" alt="Linux Logo Icon" %}

 [linux-linaro-stable (LSK) Git](https://git.linaro.org/kernel/linux-linaro-stable.git/), [additional information](https://wiki.linaro.org/LSK)

***

## Linaro Confectionary Release (LCR)

R-LCR is a build of the Android Open Source Project (AOSP) from a stable release branch that includes platform support and other features. R-LCR includes the Android flavour of Linaro Stable Kernel (LSK) for all machine configurations.

- [R-LCR, Binaries](https://releases.linaro.org/android/reference-lcr/)

***

## LAVA


The Linaro Automated Validation Architecture (LAVA) is a test and continuous integration framework that Linaro uses to validate its releases. The source is open so that members and others can create their own instantiations and run proprietary tests within this standard framework. [Click here for the latest downloads](https://releases.linaro.org/components/lava/latest/).

{% include image.html name="lava-logo_standard.png" class="pull-right" alt="Lava Logo Standard Image"%}


***

## Linaro Networking

#### OpenDataPlane

<img src="https://www.linaro.org/wp-content/uploads/2017/01/opendataplane-logo_standard-opendataplane.png" alt="Linaro Lava Logo" width="200px" height="auto" align="right" />
The [OpenDataPlane](http://www.opendataplane.org/) API has three implementations supported directly by LNG

- Functional reference model that runs on any linux implementation ([odp-linux-generic](https://git.linaro.org/lng/odp.git))
- Performance implementation build for x86  using the DPDK SDK. ([odp-dpdk](https://git.linaro.org/lng/odp-dpdk.git))

***
## Linaro Toolchain

Linaro provides monthly [GCC source archive](https://snapshots.linaro.org/components/toolchain/gcc-linaro/) snapshots of the current Linaro GCC release branch, as well as quarterly releases of pre-built Linaro [GNU cross-toolchain binary archives](https://releases.linaro.org/components/toolchain/binaries/).

The following tables provide direct access to the most common Linux and bare-metal ABI variants of the Linaro binary cross-toolchain quarterly releases.  Both x86_64 Linux and Mingw32 (MS Windows compatible) host binaries are provided:

#### Latest Linux Targeted Binary Toolchain Releases

<table class="table table-responsive">
<tbody>
<tr>
<td style="text-align:left"><strong>arm-linux-gnueabihf</strong></td>
<td style="text-align:left"><em>32-bit ARMv7 Cortex-A, hard-float, little-endian</em></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/binaries/latest/">Release-Notes</a></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/binaries/latest/arm-linux-gnueabihf/">Binaries</a></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/gcc-linaro/latest/">Source</a></td>
</tr>
<tr>
<td style="text-align:left"><strong>armv8l-linux-gnueabihf</strong></td>
<td style="text-align:left"><em>32-bit ARMv8 Cortex-A, hard-float, little-endian</em></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/binaries/latest/">Release-Notes</a></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/binaries/latest/armv8l-linux-gnueabihf/">Binaries</a></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/gcc-linaro/latest/">Source</a></td>
</tr>
<tr>
<td style="text-align:left"><strong>aarch64-linux-gnu</strong></td>
<td style="text-align:left"><em>64-bit ARMv8 Cortex-A, little-endian</em></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/binaries/latest/">Release-Notes</a></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-linux-gnu/">Binaries</a></td>
<td style="text-align:left"><a href="https://releases.linaro.org/components/toolchain/gcc-linaro/latest/">Source</a></td>
</tr>
</tbody>
</table>


#### Latest Bare-Metal Targeted Binary Toolchain Releases

{:.table-responsive}
|:---|:---|:---|:---|:---|
|**arm-eabi**|_32-bit ARMv7 Cortex-A, soft-float, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/arm-eabi/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|
|**aarch64-elf**|_64-bit ARMv8 Cortex-A, little-endian_|[Release-Notes](https://releases.linaro.org/components/toolchain/binaries/latest/)|[Binaries](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-elf/)|[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)|

***

Interested in other target ABIs such as big-endian or soft-float little-endian? All toolchain target ABI and host variants can be seen [here](https://releases.linaro.org/components/toolchain/binaries/latest/). _Note: Not all ABI and host variants are supported to the same degree. See the [release-notes](https://releases.linaro.org/components/toolchain/binaries/latest/) for more information._

***

Interested in Cortex-R and Cortex-M bare-metal targeted toolchains for ARM embedded processors? We’re working with ARM to also supply a new release every year (with quarterly updates). Releases are maintained for two years. Get these from Launchpad: https://launchpad.net/gcc-arm-embedded

***
