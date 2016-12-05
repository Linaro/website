# Open Source Security

The Linaro Security Working Group (SWG) was created to help ensure an optimized and efficient software ecosystem exists to support ARM open source Linux distributions on security related topics, and to accelerate the delivery of high quality secure products across the ARM open source ecosystem.

In order to enable applications such as securely booting a server or decoding encrypted media, there needs to be a Trusted Execution Environment (TEE). The SWG has been creating reference designs showing how normal and trusted application code and libraries can be integrated within a particular platform such as Android. Initial activities included the development of an open source reference implementation of the W3C Encrypted Media Extension (EME) using platform security features for secure media playback on mobile and digital home devices; and an open source reference implementation of secure boot for the 64-bit ARM Cortex-A series processor cores to complement the ARM Trusted Firmware open source project, targeted at server applications. In addition, tehre is regular work on security features in the Linux kernel.

In 2014, Linaro started working with STMicroelectronics to transform a proprietary TEE solution into open source. This TEE was rooted in a proprietary solution, initially created by ST-Ericsson and then owned and maintained by STMicroelectronics. The work on making this open source was concluded in September 2015 when Linaro took ownership and rolled out [OP-TEE](https://www.op-tee.org/). OP-TEE is now an open source project that contains a full implementation to make up a complete Trusted Execution Environment. Today, OP-TEE is one of the key security projects in Linaro, with several of Linaro’s members supporting and using it.

**Key Deliverables:**

- Key player in software related to security such as TEE solutions and kernel hardening on ARM systems.
- Stabilize ARMv7 TEE solution(s) running on Android.
- [OP-TEE](https://www.op-tee.org/).
- Active part of Linaro’s (LHG) mission creating DRM/EME reference implementations for Android and Comcast RDK.
- ARMv8 UEFI based Ubuntu/Fedora boot leverage a TEE.
- Kernel hardening.
- Include LAVA and CI in the all tasks.
- Actively monitor and contribute to relevant open source projects.

**Useful Information:**

- Governance: [Linaro Technical Steering Committee](https://wiki.linaro.org/Internal/TSC) (MEMBERS ONLY)Mailing lists:
- op-tee@linaro.org (reach OP-TEE developers)
- team-security-wg@linaro.org (Security WG)
- [tee-dev](https://lists.linaro.org/mailman/listinfo/tee-dev) (public discussion about TEE in general)
- Engineering: [Security Working Group Wiki](https://wiki.linaro.org/WorkingGroups/Security)
- JIRA Project: [Project Summary](https://projects.linaro.org/projects/SWG/summary), [JIRA Board](https://projects.linaro.org/secure/RapidBoard.jspa?rapidView=34), [JIRA Structure](https://projects.linaro.org/secure/StructureBoard.jspa?s=106)
