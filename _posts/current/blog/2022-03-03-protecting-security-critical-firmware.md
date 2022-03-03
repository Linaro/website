---
layout: post
title: Protecting Security Critical Firmware
description: "This blog looks at the work Linaro has done to make it easier for
  silicon vendors to enable firmware encryption with minimal platform plumbing.
  "
date: 2022-03-03 12:50:35 +00:00
image: /assets/images/content/Linaro-and-Riscure-release-banner.jpg
tags:
  - Security
  - OP-TEE
  - Trusted Firmware
  - Open Portable Trusted Execution Environment
  - TF-A
  - Securekey
  - Encryption
category: blog
author: sumit.garg
---
# Introduction

Security is not a turn key solution but rather made of many different components. There is no such thing as “a secure system”, only secure enough. Some security features offer confidentiality and integrity protection, whilst others are there to make it harder for an attacker to launch an attack. Firmware encryption is a security feature that makes it harder for an attacker to reverse engineer the firmware. It can be used to armour several possible assets which can be present in a firmware image. The first asset could be the software IP implemented as part of firmware. The second one could be the secret keys which may be part of the firmware image. And the last one could be the firmware implementation details to make it harder to develop exploits for any vulnerabilities present in the firmware.

In this blog, we will look back at an abstraction layer we introduced in Trusted Firmware-A (TF-A) and Open Portable Trusted Execution Environment (OP-TEE) to support firmware encryption. This has made it easier for silicon vendors to enable firmware encryption with minimal platform plumbing and reduce downstream firmware maintenance burden. There was [a session](https://www.youtube.com/watch?v=JJjCUSDKb30) around this at Linaro virtual connect 2020 but due to the pandemic we never discussed this feature as widely as we could have. We have decided to correct that in this blog post!

# Firmware encryption

Firmware encryption is designed to achieve confidentiality and integrity properties for a particular firmware image. When introducing firmware encryption, a couple of the design goals were clear right from the start. Firstly, we wanted to leverage a symmetric encryption technique since asymmetric encryption can be slow with the device boot time being a major limiting factor. Secondly, we decided to employ authenticated encryption techniques in order to ensure integrity of encrypted firmware blobs.

{% include image.html path="/assets/images/content/firmware-encryption.png" alt="Firmware Encryption" %}

One major driver for firmware encryption was the emerging robustness requirements for software Digital Rights Management (DRM) implementations. These requirements vary from vendor to vendor but may include requirements for additional barriers to make reverse engineering more difficult. Firmware encryption provides a reference implementation that can be used to address these requirements.

On Armv8 systems, DRM software generally runs as a Trusted Application (TA) running in a TEE environment, perhaps augmented with some hardware specific drivers in Trusted OS. Hence, to provide firmware encryption, we must add support in TF-A to decrypt Trusted OS payloads (BL32) which, for OP-TEE, consists of the OS itself together with any bundled TAs (including pseudo TAs). Additionally OP-TEE must have support for decrypting TAs that are loaded from the Linux file system. In both cases the pre-existing loaders supported authentication but not decryption.

# Encryption + Signature?

The most commonly used cryptographic technique while implementing secure boot is firmware signature. This technique allows only authorized firmware to execute on a particular platform. Firmware signature ensures authentication, integrity, authorization and non-repudiation properties on behalf of the OEM / Service provider. The only security property left out is confidentiality which is ensured by firmware encryption. So there is a need for a combination of signature and encryption techniques to ensure all security properties for a firmware.

[Prior studies](https://theworld.com/~dtd/sign_encrypt/sign_encrypt7.html) have shown threats to ill-thought-out combinations of signature and encryption techniques as discussed in the next section.

## Encrypt-then-sign

{% include image.html path="/assets/images/content/encrypt-then-sign-image.png" class="medium-inline left" alt="Encrypt then sign image" %}

Security Properties:

1. Confidentiality 
2. Integrity
3. Authentication
4. Authorization

Shortcomings:

* Only encrypted firmware blobs are non-repudiable to OEM / SP.
* Signing an encrypted blob makes it immutable. Also, it doesn’t allow re-encryption on devices, aka firmware binding.

## Sign-then-encrypt

{% include image.html path="/assets/images/content/sign-then-encrypt-image.png" class="medium-inline left" alt="Encrypt then sign image" %}

Security properties:

1. Confidentiality
2. Authentication
3. Authorization
4. Non-repudiation

Shortcomings:

* Plain encryption doesn’t assure integrity of encrypted blobs.
* Vulnerable to Chosen Ciphertext Attacks (CCAs).

## Sign-then-encrypt-then-MAC (the one we adopted)

{% include image.html path="/assets/images/content/sign-then-encrypt-then-mac.png" class="medium-inline left" alt="Sign then encrypt then mac" %}

Security properties:

1. Confidentiality
2. Integrity
3. Authentication
4. Authorization
5. Non-repudiation

Concerns addressed:

* MAC tag assures integrity of encrypted blob.
* Allows firmware re-encryption.

After discussion we opted for the sign-then-encrypt-then-MAC scheme. It gives us assurance of the integrity of the decrypted blob whilst providing us the option to re-encrypt the firmware on the device if needed (for example to replace an ephemeral negotiated key used to transfer it onto the device with a device-specific storage key).

# Protecting secret key

Secret key protection may vary from one platform to another depending on the use-case and the underlying hardware capabilities. In order to address this varying requirement, we need to provide an abstraction layer in the TF-A boot-loader (BL2) or OP-TEE TA loader. The loader should provide a weak default API to retrieve the secret key / secret key handle which can be overridden by the platform specific implementation. Note that the secret encryption key is different from the likes of the OP-TEE HUK since it has to be shared with the service provider responsible for encrypting the firmware.

The other aspect of a secret key is its uniqueness. The secret key can be unique per device or a common shared key across a class of devices. The major benefits of device unique key over class wide key is to limit the attack surface to per device and to defend against software cloning. A problem with device unique keys is that it can make it more difficult to coordinate the delivery of firmware to a fleet of devices, both in manufacturing and in the field. How about leveraging the benefits of both key types? Firmware binding is an optional part of the firmware encryption design that offers this.

First boot sequence (aka firmware binding) leveraging two key types, Shared Secret Key (SSK) and Binding Secret Symmetric Key (BSSK):

{% include image.html path="/assets/images/content/protecting-secret-key-image-1.png" alt="Protecting secret key" %}

Subsequent boot sequence leveraging only Binding Secret Symmetric Key (BSSK):

{% include image.html path="/assets/images/content/protecting-secret-key-image-2.png" alt="Protecting secret key" %}

{% include youtube.html url="https://www.youtube.com/watch?v=JJjCUSDKb30" title="LVC20-204 Encrypted firmwares and how to bake them right" %}

# Upstream status

Back in November 2019, support for loading encrypted TAs from Linux filesystem made its way to [OP-TEE mainline](https://www.google.com/url?q=https://github.com/OP-TEE/optee_os/pull/3340&sa=D&source=docs&ust=1646317138336730&usg=AOvVaw2TuaJZxFPTnH6IwNskglt6). It allows one to keep secrets, keys or passwords as part of encrypted TA until they are provisioned into OP-TEE secure storage. Also, it allows the protection of DRM software IP implemented as an encrypted TA.

Back in March 2020, after extensive security focussed discussions with the TF-A community, experimental support for encrypted Firmware Image Package (FIP) images made its way to the [TF-A mainline](https://trustedfirmware-a.readthedocs.io/en/latest/design/trusted-board-boot.html#authenticated-encryption-framework). Now it is possible to bundle encrypted OP-TEE OS image(s) into FIP. It allows one to keep secrets, keys or passwords as part of OP-TEE OS binary. Also, it allows the protection of DRM software IP implemented as drivers in OP-TEE OS.

Overall we have been very pleased with the progress so far. Having a common abstraction layer to support firmware encryption in TF-A and OP-TEE is encouraging and would certainly welcome any contributions to improve the firmware encryption framework or to add new platform support.

Our engineers will, of course, engage in upstream focused discussion via the mailing lists. If you need any additional help in bringing these features to your products and platforms then feel free to reach out to [the Linaro Developer Services team](https://www.linaro.org/services/) or, if you are already a Linaro member, to contact [the Linaro support team](https://www.linaro.org/support).