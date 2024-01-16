---
layout: post
title: New Trust Sources for Linux Kernel Keyrings
description: In this blog, our Engineer talks about how Linaro helped generalize
  the Trusted Keys sub-system in Linux to add support for new trust sources.
  Read more here.
date: 2021-11-02 01:53:36 +00:00
image: /assets/images/content/Security_screen.jpg
tags:
  - Linux Kernel
  - Security
  - Trusted Platform
  - TrustZone
category: blog
author: sumit.garg
---

{% include image.html path="/assets/images/content/linux-keyrings.png" alt="Linux Keyrings Image" %}

## Introduction

Protecting key confidentiality is essential for many kernel security use-cases such as disk encryption, file encryption and protecting the integrity of file metadata. Trusted keys are symmetric keys created within the kernel. The kernel also provides a mechanism to export trusted keys to user-space for storage as an opaque blob and for the user-space to later reload them onto Linux keyring without the user-space knowing how to decrypt the opaque blob. Trusted keys make it impossible for userspace compromises to leak key material. In order to embed trust in Trusted Keys however, there is a requirement for the availability of a Trust Source.

In this blog, we will look at how we generalized the Trusted Keys sub-system in Linux. This has made it easier for kernel security developers to add support for new trust sources and reduce downstream kernel technical debt.

## What is a trust source?

A trust source provides the source of security for Trusted Keys. New trusted keys are created from random numbers generated in the trust source. Trusted keys can be encrypted/decrypted using a unique secret key known only to the trust source, which never leaves the trust source’s boundary. Unique secret key usage via crypto operations is protected by a strong access control policy within the trust source.

## Background: Trusted Platform Module as a trust source

Trusted Keys were introduced in the Linux kernel from v2.6.38. Since this feature’s inception, the only trust source has been provided by the Trusted Platform Module (TPM). Thus, if a user needs to leverage Trusted Keys support on specific hardware, there is a need to deploy a TPM device. This requirement made the Trusted Keys feature unavailable on many embedded systems as most of them do not possess a TPM device and adding one to the Bill of Materials is viewed by vendors as expensive.

{% include image.html path="/assets/images/content/trusted-platform-module.png" alt="Trusted Platform Module Image" %}

## Using TrustZone as a trust source

Many embedded systems do come with alternative hardware mechanisms such as Arm TrustZone, crypto engines etc. that are capable of providing a source of trust. These mechanisms can be leveraged to support Trusted Keys encryption and decryption operation. This has led to the implementation of software-based TPM but that too has its shortcomings. A full-featured software TPM is a large and complicated software stack. This makes it difficult to port and, on constrained devices with limited flash space, it may be difficult to fit along with the boot firmware.

A Trusted Execution Environment (TEE) based on Arm TrustZone provides hardware based isolation to perform trusted operations. For example, the open source TEE implementation, [Open Portable TEE (OP-TEE)](https://optee.readthedocs.io/en/latest/), is supported on approx. 80 platforms from various SoC vendors. OP-TEE offers a standardized TEE client API (compliant with GlobalPlatform TEE Client API [Specification v1.0](https://globalplatform.org/specs-library/tee-client-api-specification/)) to perform cryptographic operations using a Hardware Unique Key (HUK) that is only accessible within the TEE. The HUK can be utilized to perform encrypt/decrypt operations for Trusted keys. The encrypted trusted key blob can be exported to user-space which can later be decrypted and loaded in kernel keyring.

{% include youtube.html url="https://www.youtube.com/watch?v=kJdI_flEMR4" title="SAN19-413 TEE based Trusted Keys in Linux" %}

## Adding a trust source framework

Back in June 2019, we shared the initial [RFC patch-set](https://lore.kernel.org/lkml/1560421833-27414-1-git-send-email-sumit.garg@linaro.org/) to add support for a standalone TEE based trusted keys module. This initial version operated by replacing the existing trusted keys module which was tightly coupled to use TPM as a trust source. This RFC received encouraging feedback from Jarkko Sakkinen (the trusted keys co-maintainer) but we were asked to be more aggressive in refactoring the existing TPM code to avoid code duplication between the TPM and TEE code bases and abstract out common APIs.

Based on this feedback our first step was to refactor the existing TPM1 and TPM2 code into a trusted keys sub-system. At this stage the new sub-system didn't add any new features but it consolidated trusted keys code. These changes landed in the mainline kernel and were released in v5.5.

Our next step was to add an additional trust source, allowing the TEE to provide these services instead of relying upon a TPM. These patches started to attract attention from a wider range of reviewers. Several reviewers were concerned that having both TPM and TEE as trust sources might inadvertently suggest the implementations have identical security properties. TEE trust sources, whether implemented as software-TPM or direct TEE implementations, certainly do have different benefits and drawbacks compared to hardware TPM implementations. Consensus was eventually reached by observing the choice between competing security approaches is not really a job for the kernel. Instead it is a decision to be made when choosing what hardware to deploy the kernel on. Thus the tension was largely resolved through careful documentation, in particular in the implementation guidelines corresponding to the different trust sources.

Two other review comments in particular helped us improve the solution. The first was a request for a kernel module parameter to allow a user to force a particular choice for a trust source in cases where both TPM and TEE are present. The second suggestion was to optimize the trust source callbacks by using [static calls](https://lwn.net/Articles/815908/) instead of indirect pointer dereferences.

As a result, as part of the v5.13 kernel release cycle, the trust source framework and a new trust source as TEE made its way to the mainline kernel. Many thanks to all who were involved in the review and testing process.

{% include image.html path="/assets/images/content/trusted-keys-core.png" alt="Trusted Keys Core Image" %}

## Using crypto hardware as a trust source

Since the Trusted Keys sub-system was introduced to the kernel in 5.13, it has gained some attention from the kernel community. Ahmad Fatoum from Pengutronix has proposed a new trust source based on NXP’s [Cryptographic Acceleration and Assurance Module (CAAM)](https://lore.kernel.org/linux-integrity/cover.9fc9298fd9d63553491871d043a18affc2dbc8a8.1626885907.git-series.a.fatoum@pengutronix.de/). The CAAM is included in recent NXP’s i.MX and QorIQ SoCs. It can directly Advanced Encryption Standard (AES) encrypt/decrypt user data using a unique never-disclosed device-specific key. We were rather flattered by the [Ahmad’s summary](https://lore.kernel.org/linux-integrity/1530428a-ad2c-a169-86a7-24bfafb9b9bd@pengutronix.de/) of how adding support for pluggable trust sources improves the upstream kernel:

_“The users I meant are humans, e.g. system integrators. They need to think about
burning fuses, signing bootloaders, verifying kernel and root file systems, encrypting file systems and safekeeping their crypto keys. Ample opportunity for stuff to go wrong. They would benefit from having relevant kernel functionality integrated with each other instead of having to carry downstream patches, which we and many others did for years. We now finally have a chance to drop this technical debt thanks to Sumit's trusted key rework and improve user security along the way.”_

We have also seen patches from Richard Weinberger who has proposed a trust source using a simpler NXP device called the [Data Co-Processor (DCP)](https://lore.kernel.org/linux-integrity/20210614201620.30451-1-richard@nod.at/). This peripheral is found on older NXP SoCs such as i.mx6ull. Its big brother, CAAM, can directly encrypt and decrypt blobs in hardware but the DCP cannot do this. Instead the DCP is capable of performing AES operations using hardware-bound keys. These keys are not accessible to the operating system, although the encryption/decryption operation needs aid from software.

Overall we have been very pleased with the progress so far. Having new ways to exploit security features on Arm platforms with TrustZone support is exciting. Likewise we have been delighted to see this work open the door to adding further support for alternative crypto hardware, especially given the minimal changes the patches to date have required of the generic sub-system code.
