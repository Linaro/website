---
layout: post
title: Protected UEFI Variables With U-Boot
description: TBC
date: 2021-01-04 02:16:09
image: /assets/images/content/tech_background.jpg
tags:
  - UEFI
category: blog
author: jon.burcham@linaro.org
---
## **Intro**

Critical system variables, like the UEFI ones, must be protected against a variety of attacks. On Arm servers and desktops, which typically run EDK2, dedicated flashes are used. Those would normally be accessible from the secure world only, since they are storing critical variables for our systems integrity and security.

What about smaller embedded systems though? Those don't typically run EDK2 nor do they have special dedicated flashes. Those systems usually use U-Boot. Prior to 2019 U-Boot was using it's environment to store EFI variables. Although that was fine for the initial UEFI implementation, it imposed limitations to platforms that wanted to store variables securely and in the long run, implement UEFI Secure Boot.

Embedded devices with a dedicated flash in Secure World are rare though (anyone aware of any?). What's becoming more common though is eMMC flashes with an RPMB partition. Wouldn't it be nice to store the EFI variables in that? We would then inherit the RPMB Authentication and protection against Replay Attacks and use a non-volatile storage we trust more due to it's built-in security characteristics.

## **More problems**

In the Arm ecosystem and it's Trusted Firmware you have, up to now (and prior to Arm8.4), two ways of dispatching payloads to the Secure world. The first one is called ***Secure Partition Manager*** or in short SPM. This is what EDK2 uses, when compiled for Arm, to spawn ***StandAloneMM***, the component used for the variable management and storage.

The second one is called SPD or ***Secure Payload Dispatcher***. This is what OP-TEE is using today. The problem is that those two are mutually exclusive. So you can either store EFI variables securely or run OP-TEE. Small devices, with limited hardware have a lot to gain when using a secure OS though. The first thing that comes in mind is running a FirmwareTPM or a secure client that takes care of the on-boarding process for small IoT devices.

## **Less code to the rescue**

We could of course rewrite StandAloneMM as a Trusted Application for OP-TEE. The application is huge though, the final binary for EDK2 is ~2.5MB and quite complex. Wouldn't we be better off with an application that's been working for a couple of years? But can we run it directly in OP-TEE? That way we can get the best of both worlds. Re-use an existing application which will manage our variables securely and maintain the ability to run a Secure OS.

It turns out that the StandAloneMM binary is self-relocatable, so as long as we manage to jump on the first instruction, everything will just 'work'. We would of course need code in OP-TEE to launch the new partition and in U-Boot to communicate with that partition, but that should be way less, or at least that's what we assumed.

And less it was!

[OP-TEE](https://github.com/OP-TEE/optee_os/commit/42471ecf25b7/) and [U-Boot](https://github.com/u-boot/u-boot/commit/f042e47e8fb4/) already got patches for that and EDK2 patches are currently on upstream review.

<!--EndFragment-->