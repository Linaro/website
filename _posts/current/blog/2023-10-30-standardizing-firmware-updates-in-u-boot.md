---
layout: post
title: Standardizing firmware updates in U-Boot
description: >
  Most of the embedded devices Operating Systems are rarely updated.  Updating
  the firmware of these is even rarer.  Let’s have a look at what Linaro and its
  members did to improve the situation and come up with a solution that’s based
  on open standards
date: 2023-10-30 01:41:25 +01:00
image: /assets/images/content/istock-1201405775_150dpi.jpg
tags:
  - U-Boot
  - Firmware
  - Firmware_update
  - UEFI
  - Embedded
  - CapsuleUpdates
category: blog
author: sughosh.ganu
---
# Need for standardized firmware updates

Most of the modern embedded devices that are deployed in the field by vendors do not get regular firmware or Operating System(OS) updates. While the situation has improved with the OS updates a bit, the firmware on these devices is left stale. Being able to update firmware is essential for addressing any security vulnerabilities on the currently running firmware, as well as adding new features or functionality that might be provided with an updated version. 

Lately, we are seeing an increase in attacks against the firmware.  This is even more catastrophic since firmware-injected exploits are hard to detect and get rid of – reinstalling your OS won’t fix that. Being able to update firmware on the device is therefore a pretty important functionality to have. Furthermore, it is important to have a standardized framework for performing the updates, avoiding having multiple implementations all trying to achieve the same goal. The Embedded Base Boot Requirements([EBBR](https://arm-software.github.io/ebbr/)) specification lays down the framework to be used for performing firmware updates in a standard manner as well as a standardized way of communicating the details of the firmware components on the platform to the OS.

# Firmware Updates - Implementation

The EBBR specification requires using the Capsule Update functionality described in the Unified Extensible Firmware Interface([UEFI](https://uefi.org/)) specification for performing firmware updates when the update is being performed in-band, i.e. by the firmware itself. Linaro has worked on implementing this capsule update functionality in U-Boot. The updates are performed by implementing the ‘[capsule-on-disk](https://uefi.org/specs/UEFI/2.10/08_Services_Runtime_Services.html#delivery-of-capsules-via-file-on-mass-storage-device)’ method described in the UEFI specification. The implementation also supports performing authenticated capsule updates using asymmetric key-based authentication. The list of firmware images that can be updated is also tied up with the EFI System Resource Table(ESRT) which is passed on to the OS. The ESRT table can then be accessed by generic firmware update services in the OS like ‘fwupd’ to get information about the firmware components on the platform which can be updated.

# A/B Update support

While updating images on a device in the field is necessary, it’s also dangerous. The update process might fail, thus rendering the device unbootable and resulting in downtime and restoration costs. Having multiple firmware banks or partitions of firmware images mitigates the problem. This allows the platform to boot from an alternate bank in case the primary one fails to boot.

As part of making the platform boot more resilient, Linaro has worked on implementing the [Multi-Bank FWU specification](https://developer.arm.com/documentation/den0118/b?lang=en), also commonly known as A/B updates, in U-Boot.

With a UEFI-based firmware implementation, the OS depends on the firmware for various services, even when the OS has been booted on the platform. The situation is similar for components running in the Secure World. Having the OS participate in the update process is crucial. With this in mind, additional mechanisms are provided for facilitating validation of the firmware images once they have been successfully updated on the device, as described in the [Dependable Boot specification.](https://gitlab.com/Linaro/trustedsubstrate/mbfw/uploads/3d0d7d11ca9874dc9115616b418aa330/mbfw.pdf) This is done by allowing the OS to ratify the updated images. Both the update and the validation of the updated images are described in the aforementioned specs.

# Current Status

Many platforms in U-Boot currently enable the UEFI Capsule Update functionality for updating firmware on the device. The A/B Update functionality is currently supported for a couple of platforms from ST and Socionext. However, adding support for the feature on a platform is just a matter of enabling the feature and adding some very basic platform-specific code. [Contact](mailto:support@linaro.org) us if you are interested.