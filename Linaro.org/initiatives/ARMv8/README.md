# ARMv8

ARM announced its 64-bit ARMv8 architecture and associated ARM compiler and Fast Models  in October 2011. As licensees have developed their ARMv8 solutions, Linaro has expanded its focus to include servers and networking and ARMv8 development work has become a major priority at Linaro, enabled by the ARM Fast Models and availability of silicon. During this time, ARM has announced a number of ARMv8 licensees and a majority of these are members of Linaro.

Linaro is making toolchains and software images for AArch64 (the 64-bit execution state of ARMv8) available to interested developers. As there is currently limited availability of ARMv8 hardware, software development for AArch64/A64 has been done using software models also called virtual platforms. This approach has been used in many open source projects. The Linaro provided downloads and [ARM’s Fast Models](http://www.arm.com/fastmodels) virtual platform enables you to boot a virtual ARMv8 system, run 64-bit binaries and start developing code for ARMv8.

In 2014 Linaro accelerated ARMv8 development by making significant use of the first two commercially available ARMv8 hardware development platforms: the ARM [Juno development platform](http://www.arm.com/products/tools/development-boards/versatile-express/juno-arm-development-platform.php) and the Applied Micro (APM) [X-C1 development kit](https://www.apm.com/products/data-center/x-gene-family/x-gene/). In 2015, accessibility to hardware is set to improve rapidly with a broader choice and range of hardware platforms available including:

- [AMD 64-bit ARM Opteron Developer Kit](http://www.amd.com/en-us/press-releases/Pages/64-bit-developer-kit-2014jul30.aspx)
- [Cavium Project Thunder](http://www.cavium.com/thundersdk_access_application.html)

To help commercial software developers who do not yet have access to ARMv8 hardware, Linaro has worked with AMD, Applied Micro and ARM to create an ARMv8 server cluster to provide virtual access to enterprise-class hardware. More information about this is available [here](http://www.linaro.org/leg/servercluster).

Downloads and more information
The OpenEmbedded Engineering Builds for ARM’s Virtual Platforms contain Boot Firmware and Linux Kernel images and a selection of Root filesystems. The most recent releases can be found here: https://releases.linaro.org/members/arm/platforms/latest/

We provide pre-built versions of Linaro GCC and Linaro GDB that target either a Linaro Engineering Build or a bare-metal target. The most recent releases can be found here: http://releases.linaro.org/latest/components/toolchain/binaries/

For more information about ARMv8, ARM provides an overview of the architecture, the AArch64 execution state and the A64 instruction set: http://www.arm.com/products/processors/instruction-set-architectures/armv8-architecture.php For a deep dive into ARMv8, the ARMv8-A Architecture Reference Manual is now publicly available from ARM: http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.ddi0487a.a_errata1/index.html (Please note that free registration is required to be able to download)
