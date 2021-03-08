---
id: 12
title: Security
sub_theme: false
permalink: /security/
image: /assets/images/content/Kernel_Toolchain_Security.png
icon: /assets/images/content/Icon_Security_White.svg
icon_dark: /assets/images/content/Icon_Security_black.svg
description: >
    Security is no longer an option, it's a vital ingredient to be able to protect intellectual
    property, communications, bank accounts, personal digital belongings etc. The list is almost
    endless. To develop solutions that meet all the security criterias, you need to have a solid
    understanding of a vast range of technologies which requires teams of experts. Security has
    been an important topic for Linaro since the start. Linaro has built a strong team with
    security expertise and we have proven that we have been able to help other companies as
    well as communities to thrive. If you believe security is too challenging, we can help you!
jumbotron:
    class: theme_banner 
    title: Security
    description: >
        Security is no longer an option, it's a vital ingredient to be able to protect intellectual
        property, communications, bank accounts, personal digital belongings etc. The list is almost
        endless. To develop solutions that meet all the security criterias, you need to have a solid
        understanding of a vast range of technologies which requires teams of experts. Security has
        been an important topic for Linaro since the start. Linaro has built a strong team with
        security expertise and we have proven that we have been able to help other companies as
        well as communities to thrive. If you believe security is too challenging, we can help you!
    image: /assets/images/content/Kernel_Toolchain_Security.png
    buttons:
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
presentation_link: https://linaro.co/security-slides
flow:
    - row: main_content_row
    - row: container_row
      style: related_projects bg-secondary text-white
      sections:
        - format: title
          title_content:
            size: h2
            text: >
                Related Projects
        - format: custom_include
          source: themes/related_projects.html
    - row: container_row
      style: associated_members
      sections:
        - format: title
          title_content:
            size: h2
            text: >
                Associated Members
    - row: custom_include_row
      source: themes/associated_members.html
    - row: custom_include_row
      source: themes/theme_contact_form.html
---
### OP-TEE

Linaro has a long track record of working with TrustZone and Trusted Execution Environments (TEE). Back in 2013 Linaro, together with STMicroelectronics, started working on preparing STMicroelectronics proprietary TEE solution for Open Source. A couple of months later [OP-TEE](https://www.op-tee.org/) was published and since then Linaro has been a key contributor both in terms of pushing new features as well as doing roadmap planning, maintenance, release work, vulnerability assessment and mitigation of security issues. On the Linaro team we also employ core maintainers for the OP-TEE project as well as maintainers for the TEE framework in the Linux kernel and U-Boot as well. Since the TEE is a core component in the Arm ecosystem it’s being used in lots of different use cases. Therefore, Linaro has developed strong engineering teams who know how to put together efficient and well performing solutions with OP-TEE, no matter how big or small the tasks are.


### Widevine

Studios and content creators want to protect their content and that is typically achieved by using a [DRM](https://en.wikipedia.org/wiki/Digital_rights_management) solution. Google created [Widevine](https://www.widevine.com/) which consists of a specification and library for implementing a DRM solution. This also goes under the name OEMCrypto. Linaro together with its member companies have implemented an OEMCrypto Trusted Application and supporting libraries to be able to run Widevine with OP-TEE. The solution has been deployed on member devices and additionally it’s possible to run the solution in QEMU (Armv7-A as well as Armv8-A), which enables a good and efficient development environment. Development and testing turnaround time is short and debuggers like GDB, are very stable.

Widevine comes with the Widevine License Agreement (WLA), which disallows open sourcing the components. If you need Widevine and OEMCrypto on your device, Linaro has the expertise to make it happen.


### PKCS#11

Originating from RSA Labs, [PKCS#11](http://docs.oasis-open.org/pkcs11/pkcs11-base/v2.40/pkcs11-base-v2.40.html) (also known as Cryptoki) is a well established standard for working with cryptographic keys and tokens. PKCS#11 achieves this by establishing a connection between an application and a cryptographic device. The cryptographic device comes in many forms, it can be a HSM, TPM devices, TEE based devices etc. On the application side there are [lots of applications](https://en.wikipedia.org/wiki/List_of_applications_using_PKCS_11#Applications) we use on a daily basis which have support for PKCS#11. Linaro is creating a PKCS#11 implementation for devices running OP-TEE. I.e., on Arm devices where OP-TEE is running. It will be possible to use OP-TEE as the cryptographic device when using PKCS#11.

### Keymaster

Everytime you unlock your phone on Android devices whether it’s a PIN-code, fingerprint or swiping your fingers in a certain pattern, you’re using something called Keymaster. The [Keymaster](https://source.android.com/security/keystore) solution is Google’s answer to securely store and use keys on an Android device. Keymaster is defined in a specification and a set of API’s that need to be implemented on the target device. Much like many other secure frameworks, it’s a solution running code in Linux as well as in a secure environment. In the AOSP tree you find source code for running Keymaster on Google own TEE ([Trusty](https://source.android.com/security/trusty)). However, if you’re running any other TEE you need a Keymaster solution for that particular TEE. Linaro has created and maintains a Keymaster (and Gatekeeper) solution for devices running OP-TEE. If you need help with running the Keymaster solution on your devices, talk to Linaro, we have the expertise.


### Arm® Firmware Framework for Armv8-A

Also known as “FFA”. This is a new specification for recent Armv8-A architectures defining communication protocols, interfaces, memory sharing concepts and partitioning of secure environments. This is a big and complex task. Linaro has been working directly with Arm on this from early alpha and beta versions. We have helped review specifications etc, but more importantly we’ve been and are still working with reference designs and implementations to prepare OP-TEE for FF-A support.


### GlobalPlatform

The GlobalPlatform organization writes specifications for various devices and environments. The OP-TEE solution is a TEE based on the GlobalPlatform Internal API as well the GlobalPlatform Client API. Therefore, it’s important to keep track of new specifications and updates to existing specifications. Besides the two specifications mentioned above, Linaro has also implemented support for the Socket API in OP-TEE and we’ve brought bits and pieces from the GlobalPlatform TEE Management Framework specification into OP-TEE. In short, Linaro is investing time and efforts in this area to make sure that OP-TEE is working according to the GlobalPlatform TEE related specifications. This is something that is beneficial to the entire community.

In addition to that, Linaro are now running the GlobalPlatform compliance test suite on every single patch that is sent to the OP-TEE project. We publish the results directly in the pull requests themselves at GitHub.


### Morello project

Morello is a research program led by Arm in association with partners and funded by the UKRI as part of the UK government [Digital Security by Design (DSbD) programme](https://www.ukri.org/our-work/our-main-funds/industrial-strategy-challenge-fund/artificial-intelligence-and-data-economy/digital-security-by-design-challenge/). It defines a new prototype security architecture based on CHERI (Capability Hardware Enhanced RISC Instructions). This new research architecture is very different from what we are currently using on our devices as of today. A major difference is that it uses 129bits (128 + 1) and not 64bit or 32bit as we’re used to. The ultimate goal is to be able to implement compartmentalization with high granularity and with that we should end up with a system that is more robust to well known attacks. For example, buffer overflows, return oriented programming (ROP) and many other known vulnerability classes. Linaro is an active participant in this program with contributions to toolchains, debuggers, infrastructure work as well as pure capability enablement.

### Mbed TLS

When it comes to cryptography, Mbed TLS is a mature and popular crypto library being used in many applications and products. The OP-TEE project is using it as an extension to the Trusted Applications, making it possible to complement the GlobalPlatform cryptographic APIs. The OP-TEE project also replaced the Big Number library a while ago to start using the Big Number implementation from Mbed TLS instead. The Linaro team has an engineer that is part of the Mbed TLS maintainer team. That team is actively working on new features, improvements, maintenance and vulnerability mitigation.

### TPM and Firmware TPM

As part of the Trusted Substrate project, Linaro picked up the fTPM implementation from Microsoft where we created a proof of concept [prototype](https://connect.linaro.org/resources/bkk19/bkk19-215/) back in 2019. Since then the Linux kernel driver for fTPM enablement has been merged upstream (a Microsoft contribution) and we have reworked the prototype which has been integrated. For example, the LEDGE reference build which is a device agnostic reference build, includes fTPM support. The fTPM serves as a base for TPM related work going on at Linaro. We are working with partners and maintainers on enabling measured boot, involving components like TrustedFirmware-A, OP-TEE, U-Boot, Grub and Linux kernel. Some U-Boot patches have already landed upstream, adding [EFI_TCG2_PROTOCOL support](https://www.mail-archive.com/u-boot@lists.denx.de/msg390810.html). Although not directly related, the measured boot efforts are related to EBBR. Currently EBBR itself has no requirements on the security aspects, but in collaboration with Arm and other partners we are exploring things that might be used and necessary in future versions of EBBR.

### Zephyr and MCUBoot

Linaro is working with the [Zephyr project](https://www.zephyrproject.org/) on various technologies, but the security side has been an important area where Linaro played a key role in the creation of the security architecture. Our work in security architecture ranges from cryptographic algorithm support to be utilized by system and communication protocols, to key management, and tamper/intrusion detection systems. Additionally, it takes into account the security extensions associated with the ARMv8-M architecture, using Trusted Firmware for Cortex-M and Arm’s Platform Security Architecture (PSA). In October 2019, we built and certified a PSA Level 1 hardware and software platform implementation using Zephyr. The Zephyr Security Architect is a Linaro employee who is heading the security architecture discussions, and has led the team in the creation of various security processes for the project. This includes working with MITRE to bring Zephyr in as a CVE Numbering Authority, and developing the process of handling vulnerabilities. In addition to being the Zephyr Security Architect, this Linaro employee is also a maintainer with the MCUboot project. This is the secure bootloader that is used as the primary bootloader for Zephyr. The process of developing several standards (RFCs) relevant to the security of Zephyr has also required work with the IETF. 

### EFI enablement on U-Boot

StandAloneMM (StMM) is the EDK2 application responsible for storing variables. Since U-Boot has become EFI aware in recent years, there has been a need to be able to store the variables securely. In the first iterations, U-Boot was storing the variables in its environment, which was fine for the initial implementation. However,  this offered no security whatsoever. Therefore, the discussion got started whether it would be possible to leverage existing technology running on the secure side of Arm devices, like for example TEE’s and Secure Partitions. Due to limitations on the current platforms where it is, in short, only possible to run a single payload on the secure side (S-EL1), a decision had to be made. As a stepping stone to future architectures, Linaro in collaboration with Arm decided to add support in OP-TEE, so that it is possible to use StMM unmodified. 

Combined with OP-TEE ability to access an RPMB partition, it is now possible to store EFI variables in a flash on the secure world or an RPMB partition (which is more common on embedded devices). This contribution enables a secure way of storing the EFI variables on current Arm architectures.
