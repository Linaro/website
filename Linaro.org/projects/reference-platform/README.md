# Reference Platform

**Summary:**

The goal of the Reference Platform Lead Project is to create reference end to end open source software releases for ARM SoCs in applications ranging from the Embedded to Enterprise segments. The releases will comprise bootloader, kernel, distribution and user level middleware/applications. The intention is to make available reference source code, documentation on building the source code and any hardware dependencies including porting guide for other SoCs, and details about configurations chosen for the reference builds.

The Reference Platform releases on their tested hardware are product quality. The tested hardware includes member SoCs, 96Boards products and may include some other third-party platforms.

**Key Deliverables:**

- Quarterly releases including binary images, source code and documentation
- Consumer Edition
   - Open source bootloader for 64-bit ARM SoCs supporting ARM Trusted Firmware, PSCI, UEFI with DT, Grub2 and Fastboot.
   - Open source trusted execution environment (OP-TEE) optionally installable
   - Recent Kernel based on upstream (or last LTS)
   - Debian 8 “Jessie”, OE/Yocto and AOSP “M” distributions
- Enterprise Edition
   - Open source bootloader for 64 bit enterprise SoCs supporting ARM Trusted Firmware, PSCI, UEFI with ACPI and Grub2
   - Recent kernel (e.g. LEG kernel tree)
   - Verification, instructions and documentation covering support for the Debian 8 “Jessie” and CentOS 7 distributions
   - OpenStack tbd
   - Hadoop tbd
- IoT Edition (Cortex-M)
- IoT Edition (Gateway)


**Useful Information:**

- [Reference Platform Specification](https://docs.google.com/document/d/12bNzBBF-becEh8Y50CUmXtMmWRR_T4pBaxSNU2SBr64/edit)
- [Public github repository](https://github.com/linaro/documentation/wiki/Reference-Platform-Home)
- Governance:
- Mailing lists:
- Engineering: [Reference Platform Specification](https://docs.google.com/document/d/12bNzBBF-becEh8Y50CUmXtMmWRR_T4pBaxSNU2SBr64/edit
- JIRA Project: [Project Summary](https://projects.linaro.org/projects/BOARDS/summary)
