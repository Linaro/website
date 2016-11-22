This page contains direct links to the latest versions of the most popular downloads from Linaro. These include a selection of builds including Android, the LAVA test framework and key toolchains.

[<span>Click here to sign-up for the release mailing list</span>](https://lists.linaro.org/mailman/listinfo/linaro-release) [<span class="mk-button--text">Click here for past releases</span>](/downloads/historic/)

## [Linaro Member Builds](https://support.linaro.org/home#BB-lmb "Linaro Member Builds")

LMBs are full system builds of popular open-source products set up at the request of a Linaro Core/Club [Member](https://www.linaro.org/members/ "Members") company.

<table class="dev">

<tbody>

<tr>

<td valign="middle">ARM</td>

<td valign="middle" width="15%">![AARCH 64 Logo](https://www.linaro.org/wp-content/uploads/2014/08/aarch-64-logo.png)</td>

<td valign="middle" width="33%">Juno, Fixed Virtual Platforms (FVP), Versatile Express</td>

<td valign="middle" width="32%">[Platform release notes](http://community.arm.com/groups/arm-development-platforms)</td>

</tr>

<tr>

<td valign="middle">Qualcomm</td>

<td valign="middle">![Snapdragon Logo](//www.linaro.org/wp-content/uploads/2014/08/snapdragon-logo.png)</td>

<td valign="middle">Download for Snapdragon 600 processor</td>

<td valign="middle">[Snapdragon 600 Linux Platform](https://releases.linaro.org/debian/boards/snapdragon/latest/ "InForce IFC6410 Snapdragon 600 Linux Platform")</td>

</tr>

</tbody>

</table>

## [Linaro Stable Kernel (LSK)](https://wiki.linaro.org/LSK "Linaro LSK")

The LSK is a version of kernel.org’s Long-Term Stable (LTS) release with new Linaro developed optimizations and ARM support integrated. There are two versions: a “Core” version for generic Linux and an “Android” version. Click right for the latest downloads.

<table align="left" width="100%">

<tbody>

<tr>

<td>![icon-linux-logo-24x24](https://www.linaro.org/wp-content/uploads/2014/02/icon-linux-logo-24x24.png) [linux-linaro-stable (LSK)](https://wiki.linaro.org/LSK "linux-linaro-stable (LSK)"), [Source](https://releases.linaro.org/components/kernel/linux-linaro-stable/latest/ "Linux Linaro Stable LSK Source"), [Git](https://git.linaro.org/kernel/linux-linaro-stable.git/ "Linux Linaro Stable GIT ")</td>

</tr>

</tbody>

</table>

## [Linaro Confectionary Release (LCR)](https://wiki.linaro.org/LCR "Linaro LSK")

R-LCR is a build of the Android Open Source Project (AOSP) from a stable “L” branch that includes platform support and other features. R-LCR includes the Android flavour of Linaro Stable Kernel (LSK) for all machine configurations.

## [LAVA](https://wiki.linaro.org/LAVA "LAVA")

The Linaro Automated Validation Architecture (LAVA) is a test and continuous integration framework that Linaro uses to validate its releases. The source is open so that members and others can create their own instantiations and run proprietary tests within this standard framework. [Click here for the latest downloads](https://releases.linaro.org/components/lava/latest/).

## [Linaro Networking](https://www.linaro.org/projects/networking/ "Linaro Networking LNG")

Based on the Linaro Stable Kernel (LSK) and upstream, these kernels add features currently being developed by LNG and not upstreamed yet.

Release notes [https://git.linaro.org/lng/releases-instructions.git](https://git.linaro.org/lng/releases-instructions.git)

Repo [https://git.linaro.org/kernel/linux-linaro-lng.git](https://git.linaro.org/kernel/linux-linaro-lng.git)

<table>

<tbody>

<tr>

<td width="72%">Latest LSK kernel for which a preempt-rt patch set has been released, plus patches that have not yet been accepted upstream and are relevant to LNG</td>

<td>![lng](https://www.linaro.org/wp-content/uploads/2014/06/lng.png) [linux-linaro-lng-4.1](http://releases.linaro.org/components/kernel/linux-linaro-lng/16.03/linux-linaro-lng-4.1.14-2016.03.tar.bz2)</td>

</tr>

<tr>

<td width="70%">Same as **linux-linaro-lng-v4.1 **but with the preempt-rt patches applied.</td>

<td>![lng](https://www.linaro.org/wp-content/uploads/2014/06/lng.png) [linux-linaro-lng-preempt-rt-4.1](http://releases.linaro.org/components/kernel/linux-linaro-lng/16.03/linux-linaro-lng-preempt-rt-4.1.14-2016.03.tar.bz2)</td>

</tr>

</tbody>

</table>

**[OpenDataPlane](http://www.opendataplane.org/ "Open Data Plane")**

The OpenDataPlane API has three implementations supported directly by LNG

<table>

<tbody>

<tr>

<td width="72%">Functional reference model that runs on any linux implementation</td>

<td>[![ODP-Icon-50x](https://www.linaro.org/wp-content/uploads/2014/06/ODP-Icon-50x.png) odp-linux-generic](https://git.linaro.org/lng/odp.git)</td>

</tr>

<tr>

<td width="70%">Reusing odp-linux-generic and adding packet_io acceleration via Netmap</td>

<td>[![ODP-Icon-50x](https://www.linaro.org/wp-content/uploads/2014/06/ODP-Icon-50x.png)](https://git.linaro.org/lng/odp-netmap.git) [odp-netmap](https://git.linaro.org/lng/odp-netmap.git)</td>

</tr>

<tr>

<td width="70%">Performance implementation build for x86  using the DPDK SDK.</td>

<td>[![ODP-Icon-50x](https://www.linaro.org/wp-content/uploads/2014/06/ODP-Icon-50x.png) odp-dpdk](https://git.linaro.org/lng/odp-dpdk.git)</td>

</tr>

</tbody>

</table>

## [Linaro Toolchain](https://wiki.linaro.org/WorkingGroups/ToolChain "Toolchain")

Linaro offers monthly updates to QEMU, GDB, toolchain components and various versions of GCC. You can access [source](http://releases.linaro.org/components/toolchain/gcc-linaro/ "Toolchain Source") and pre-built [binaries](http://releases.linaro.org/components/toolchain/binaries/ "Toolchain Binaries"). Click below for the latest downloads.

<table border="0" class="dev" width="100%">

<tbody>

<tr>

<td width="35%">linaro-toolchain-binaries (little-endian)</td>

<td width="10%">[Linux](https://releases.linaro.org/components/toolchain/binaries/latest/arm-linux-gnueabihf/)</td>

<td width="15%">[Windows Archive](https://releases.linaro.org/components/toolchain/binaries/latest/arm-linux-gnueabihf/)</td>

<td width="12%">[Bare Metal](https://releases.linaro.org/components/toolchain/binaries/latest/arm-eabi/)</td>

<td width="10%">[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)</td>

<td width="15%">[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/arm-linux-gnueabihf/)</td>

</tr>

<tr>

<td>linaro-toolchain-binaries (big-endian)</td>

<td>[Linux](https://releases.linaro.org/components/toolchain/binaries/latest/armeb-linux-gnueabihf/)</td>

<td>[Bare Metal](https://releases.linaro.org/components/toolchain/binaries/latest/armeb-eabi/)</td>

<td>[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)</td>

<td>[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/armeb-linux-gnueabihf/)</td>

</tr>

<tr>

<td>linaro-toolchain-binaries (Aarch64 little-endian)</td>

<td>[Linux](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-linux-gnu/)</td>

<td>[Windows Archive](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-linux-gnu/)</td>

<td>[Bare Metal](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-elf/)</td>

<td>[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)</td>

<td>[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64-linux-gnu/)</td>

</tr>

<tr>

<td>linaro-toolchain-binaries (Aarch64 big-endian)</td>

<td>[Linux](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64_be-linux-gnu/)</td>

<td>[Bare Metal](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64_be-elf/)</td>

<td>[Source](https://releases.linaro.org/components/toolchain/gcc-linaro/latest/)</td>

<td>[Sysroot](https://releases.linaro.org/components/toolchain/binaries/latest/aarch64_be-linux-gnu/)</td>

</tr>

</tbody>

</table>

Interested in bare-metal development for [ARM embedded processors](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm)? We’re working with ARM to also supply a Cortex-R and Cortex-M bare-metal build with yearly major releases and quarterly updates. Get these from **ARMDeveloper**: [https://developer.arm.com/open-source/gnu-toolchain/gnu-rm](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm)