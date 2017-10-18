---
layout: developer-services
title: ARM Trusted Firmware
permalink: /services/linux/bootloaders/arm-trusted-firmware/
---
# ARM Trusted Firmware

We have provided several of our clients with ports of ARM Trusted Firmware. These ports are a reference implementation of secure world software for our clients SoC and board, and have been upstreamed to be included in ARM Trusted Firmware by default.

They feature full support for the ability to load a trusted execution environment such as OPTEE, and implementations of the ARM Power State Coordination Interface (PSCI), along with a secure monitor using the ARM SMC calling convention so the non-secure world may communicate with both.  All ports feature the low level initialization of the secure world, as well as the addition of drivers to initialize and use the various hardware peripherals (UFS, eMMC, USB, etc) needed by the firmware.

Support for Trusted Board Boot Requirements (TBBR) is available, including image authentication using certificates, a firmware update/recovery mode boot flow, and packaging of the various firmware images into a Firmware Image Package (FIP) to be loaded from non-volatile storage. The ports all switch to non-secure mode and support the loading of a second stage bootloader such as UEFI or U-Boot.
