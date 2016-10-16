# Reference Software Platform

**Summary:**

The Reference Software Platform Lead Project is part of the Linaro 96Boards initiative. The goal of the project is to create reference end to end open source software releases for ARM SoCs using 96Boards products for applications ranging from the Embedded to the Enterprise segments. The releases will comprise bootloader, kernel, distribution and user level middleware/applications. The releases will comprise loadable software for 96Boards products, reference source code, and documentation on building the source code, any hardware dependencies including porting guide for other SoCs, and configurations chosen for the reference builds.

The Reference Software Platform releases are expected to be product quality for the 96Boards program. Release will be provided for different segments – for example an Enterprise release might include a build of CentOS, OpenStack and Hadoop, configured to run optimally on a 96Boards EE hardware product, with documentation on hardware dependencies, configuration and build from source information.

**Key Deliverables:**

- Quarterly releases including binary images, source code and documentation
- Consumer Edition
   - Open source bootloader for 64 bit SoCs supporting ARM Trusted Firmware, PSCI, UEFI with DT, Grub2 and Fastboot.
   - Open source trusted execution environment (OP-TEE) optionally installable
   - Recent Kernel based on upstream (or last LTS)
   - Debian 8 “Jessie”, OE/Yocto and AOSP “M” distributions
- Enterprise Edition
   - Open source bootloader for 64 bit enterprise SoCs supporting ARM Trusted Firmware, PSCI, UEFI with ACPI and Grub2
   - Recent kernel (e.g. LEG kernel tree)
   - Verification, instructions and documentation covering support for the Debian 8 “Jessie” and CentOS 7 distributions
   - OpenStack tbd
   - Hadoop tbd

**Useful Information:**

- [Reference Software Platform Specification](https://docs.google.com/document/d/12bNzBBF-becEh8Y50CUmXtMmWRR_T4pBaxSNU2SBr64/edit)
- [Public github repository](https://github.com/linaro/documentation/wiki/Reference-Platform-Home)
- Governance:
- Mailing lists:
- Engineering: [Reference Software Platform Specification](https://docs.google.com/document/d/12bNzBBF-becEh8Y50CUmXtMmWRR_T4pBaxSNU2SBr64/edit
- JIRA Project: [Project Summary](https://projects.linaro.org/projects/BOARDS/summary)
