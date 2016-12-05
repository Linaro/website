# Security

The Linaro Security Working Group (SWG) was created to help ensure an optimised and efficient software ecosystem exists to support ARM open source Linux distributions on security related topics, and to accelerate the delivery of high quality secure products across the ARM open source ecosystem. The team’s mission is to prevent fragmentation in security architecture and to strengthen security by doing kernel hardening. In addition, the SWG also wants to monitor and contribute to the upstream. 

In order to enable applications such as securely booting a server or decoding encrypted media, there needs to be a Trusted Execution Environment (TEE). The SWG is creating reference designs showing how normal and trusted application code and libraries can be integrated within a particular platform such as Android. Activities include the development of an open source reference implementation of the W3C Encrypted Media Extension (EME), using platform security features for secure media playback on mobile and digital home devices; and an open source reference implementation of secure boot for the 64-bit ARM Cortex-A series processor cores to complement the ARM Trusted Firmware open source project, targeted at server applications. In addition, the team works on security features in the Linux kernel.

To ensure the broadest commercial choice and applicability for Linaro’s members, the SWG ensures that the reference applications operate with a range of TEEs.  By delivering tested reference open source software, Linaro will enable SoC vendors, OEMs and application developers to more easily understand how to design and build secure applications across a wide range of ARM products and segments. These include the Internet of Things, mobile devices, the digital home and advanced multi-node hyperscale servers.

SWG's main security project is OP-TEE. It is an open source project which contains a full implementation to make up a complete Trusted Execution Environment. The project has roots in a proprietary solution, initially created by ST-Ericsson and then owned and maintained by STMicroelectronics. In 2014, Linaro started working with STMicroelectronics to transform the proprietary TEE solution into an open source TEE solution instead. In September 2015, the ownership was transferred to Linaro. The optee_os git, contains the source code for the TEE in Linux using the ARM® TrustZone® technology. This component meets the GlobalPlatform TEE System Architecture specification. It also provides the TEE Internal core API v1.1 as defined by the GlobalPlatform TEE Standard for the development of Trusted Applications. 

To find out more about OP-TEE, go to https://www.op-tee.org/. 

### Objective

- Key player in software related to security such as TEE solutions and kernel hardening on ARM systems.
- Stabilize ARMv7 TEE solution(s) running on Android.
- Active role in open sourcing a TEE for ARMv8-A.
- Active part of Linaro’s (LHG) mission creating DRM/EME reference implementations for Android and Comcast RDK.
- ARMv8 UEFI based Ubuntu/Fedora boot leverage a TEE.
- Kernel hardening.
- Include LAVA and CI in the all tasks.
- Actively monitor and contribute to relevant open source projects.

### Process

The Security Working Group does all planning and tracking in [JIRA](https://cards.linaro.org/secure/StructureBoard.jspa?s=138) which you can follow in detail if you have the required access (IT gives access).
