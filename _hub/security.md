---
title: Security
description: Sharing resources and on-demand provisioning of services over
  public networks ensure that the threats faced by modern networks and devices
  are both more severe and ubiquitous. Defence must be in-depth and at every
  layer of the stack.
---

## Securing the future

Sharing resources and on-demand provisioning of services over public networks ensure that the threats faced by modern networks and devices are both more severe and ubiquitous. Defence must be in-depth and at every layer of the stack.

Cloud security must encompass:

### Physical networks

Network infrastructure and in particular edge devices must be both physically and logically protected. Intrusion and molestation sensors triggering automatic shut-down should be enabled. Robust firewalls, multi-factor authorisation and authentication mechanisms, zero-trust zones and network isolation can all be employed.

### Data storage

While data at rest may be under less threat than data in action, due to its potential value and commercial sensitivity it is a high value target for malicious actors. Effective data protection begins with the thorough categorisation of data and the implementation of appropriate controls based on relative value. Encryption, Hardware Security Modules (HSM) and robust access controls can provide the necessary protection.

### Virtualisation framework

Virtualisation is at the heart of cloud computing. Hypervisors have full control over the Virtual Machine (VM) lifecycle and exploitation of their functionality would potentially be a catastrophic security incident. Hypervisors can be vulnerable to man-in-the-cloud attacks launched from applications running on VMs.

A number of basic controls can be considered mandatory protection: robust access control to cloud management accounts, rigorous patching, network separation particularly between VMs and management networks, disabling unnecessary services to prevent hijacking, and employing first-rate security tools.

### Update mechanisms

Regular updates for Apps, middleware and firmware are business as usual for cloud management. However, the updating mechanisms employed must prevent well-known cloud attacks such as imposter attacks, man-in-the-middle, and man-in-the-cloud attacks. It is critical that updates only come from trusted sources and are not interfered with before they are installed.
Operating System

- Authentication
- One Time passwords
- Program Threats
- System Threats

## Linaro and security

### OP-TEE

The Open Portable Trusted Execution Environment (OP-TEE)
A precondition for OP-TEE is a reference open source implementation for Dependable Boot, Trust services and, Over-the-Air (OTA) updates with anti-bricking and anti-roll back protection.

To decrease complexity caused by a multitude of implementations, common kernels must be defined, utilised, and maintained. Additionally, a stable functional test framework is required.

The Open Portable Trusted Execution Environment (OP-TEE
Morello

A project encompassing targeted improvements/efforts for RTOSes.
Candidate RTOSes are defined by members. Typical candidates are Zephyr, FreeRTOS, AzureRTOS etc.
Outputs of the project include upstream contributions and reference implementation(s) that solve specific problems within the RTOS space. Work includes integration and support for specific use cases between RTOS and underlying firmware components like bootloader or secure firmware. The scope also covers features like system-wide configuration and MCU power management.

The current list of topics are:

- System DeviceTree
- [Matter](https://en.wikipedia.org/wiki/Matter_(standard) Connectivity Integration
- MCU Power Management
- MCUBoot Development
- Zephyr RTOS Development

### Trusted substrate

Trusted Substrate is a BIOS that brings standards based secure booting and over-the-air (OTA) updates to the most trust demanding embedded computing projects such as automotive and robotics. The project aims to upstream all necessary technologies in multiple projects to enable Arm SystemReady compliance.
