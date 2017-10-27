---
initiative_id: "8"
title: LSK
permalink: /initiatives/lsk/
---
# LSK

Linaro Stable Kernel (LSK) aims to provide a stable basis for system integration of ARM hardware, integrating Linaro developed features available in mainline with kernel.org Long Term Stable (LTS) releases to allow integration of those features in production systems.
Most LSK features can be disabled at either build or run time so are included as part of the core LSK functionality. To support those feature sets which have substantial impacts on the kernel and cannot be disabled at build or run time, the LSK is provided in multiple flavours. Currently these are:

- "Core" - LTS + features which can be runtime disabled
- "Android" - Core + additional changes from AOSP
- "RT" - Core + the RT patch set adding realtime features
- The number of flavours is kept to a minimum in order to make selection simpler. As much as possible is in the core LSK in order to ensure that features are as widely available as possible.
- Currently the LSK release in Development phase is based on kernel version v4.1/v4.4. Note: details for maintenance mode LSK versions can be found below.


### Recent feature status

| Feature | LSK v3.18 | LSK v4.1 |  LSK v4.4 | LSK 4.9  |
| :--- | :--- | :--- | :--- | :--- |
| PAX Usercopy | N/A | N/A | 16.09 | LTS |
| PAN emulation | N/A | N/A | N/A | 17.06 |
| Kexec/kdump | N/A | N/A | 17.06 | 17.06 |
| OPTEE * | 16.04 | N/A | 16.04 | 17.01 |
| ION * | N/A | N/A | N/A | 17.07 |

\* OPTEE(Open Portable Trusted Execution Environment) out of upstream code were maintained as separate branches, [v3.18\|v4.4\|v4.9]/topic/optee, out of the LSK mainline. From lsk 4.9, the upstream merged OPTEE  also backported into LSK mainline.

\* ION is backported as out of LSK tree branch v4.9/topic/ion, since it includs ABI changes.

### Communication/Support

- Linaro Kernel mailing list <linaro-kernel AT lists DOT linaro DOT org>
- LSK Tech Lead: Mark Brown <broonie AT linaro DOT org>
- LSK Engineer: Alex Shi <Alex.Shi AT linaro DOT org>
- https://support.linaro.org/

### Community Information

- Source Repository: git://git.linaro.org/kernel/linux-linaro-stable.git
- WIKI: https://wiki.linaro.org/LSK
