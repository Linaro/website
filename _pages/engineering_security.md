---
title: Securing the Arm Software Ecosystem
description: |-
  Securing the Arm Software Ecosystem. Linaro aims to tackle issues such as fragmentation, lack of standards and open source implementations in the Arm ecosystem.
keywords: Linaro, Security, Arm, Linux, hardware
image: /assets/images/content/Security_screen.jpg
members:
  key: mi-incubator
related_resources_tracks: https://connect.linaro.org/assets/json/security.json
permalink: /engineering/security/
js-package: engineering
related_tags:
  - Security
jumbotron:
  title: Security
  inner_class: dotted
  description: "Securing the Arm Software Ecosystem"
  image: /assets/images/content/Security_screen.jpg
layout: flow
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: title
        title_content:
          size: h2
          text: Securing the Arm Software Ecosystem
      - format: text
        style: text-left no-padding
        text_content:
          text: |
            Linaro aims to tackle issues such as fragmentation, lack of standards and open source implementations in the Arm ecosystem. While we are involved in entire use cases and technologies, we also do a lot of low level security work to ensure
            the necessary building blocks are there, enabling the implementation and support of more feature rich use cases.

            Almost all software Linaro develops is put into reference designs. Designs range from simple reference Linux setups
            including a simple root filesystem with the necessary tools and features to test the technology itself, to fully fledged AOSP
            builds where all bits and pieces are integrated, ready to use and test. It is not uncommon for the reference designs to be
            both developed and tested on Linaro member hardware. By delivering tested reference Open Source software, Linaro
            enables SoC vendors, OEMs and application developers to better understand how to design and build secure applications
            across a wide range of Arm products and segments, including IoT, mobile and digital.

            Arm and other companies are constantly developing new standards that will enrich and enhance old features, with new
            technologies being invented all the time. And yet the world continues to talk about updates to IOT devices, servers leaking
            information between VMs, silicon which has (hardware) bugs and so on. So although Linaro has tackled many challenges,
            security is increasingly still an issue! We believe there is still a lot of work to be done to design for security through
            implementation, and beyond ten years down the road.

            Linaro’s aim is to resolve common security issues and architect SoC/OEM agnostic security solutions for devices using an
            Arm chipset. These are the areas where we have made a significant impact in the past and areas where we are actively
            working today.

  - row: container_row
    style: large_type introduction_row py-0 info_row
    sections:
      - format: block
        style: text-left no-padding
        block_section_content:
          item_width: "3"
          blocks:
            - title: OP-TEE
              modal_content: |

                Back in 2013, Linaro member companies and the industry wanted to see an open alternative to the proprietary TEE (Trusted Execution Environment) solutions that existed at the time. For some use cases which involved high value assets, the existing security on OSes wasn’t sufficient. Traditional OSes like Linux, MacOS and Windows all had too many security issues that would give the attacker root access to devices. As a result, Linaro started to get into discussions with various TEE vendors regarding open sourcing an existing TEE or creating one from scratch. Linaro ended up working with ST-Microelectronics who wanted to make their proprietary TEE solution open source. In the summer of 2014, Linaro together with its member companies published the open source TEE that has since become known as OP-TEE.

                Having a TEE available enabled lots of use cases such as secure storage and secure key handling, while also providing a location to work securely with DRM data and deal with secrets during boot.

                In September 2019, Linaro donated OP-TEE to the [TrustedFirmware](https://www.trustedfirmware.org/) project. Linaro believes that it makes sense to have OP-TEE developed and belonging to the same organization as TrustedFirmware-A, since the firmware project (initially headed by Arm) serves as the initial bootloader on many recent devices (especially Armv8-A).

                From Linaro's point of view the transfer to TrustedFirmware.org hasn't changed much in terms of contributions. Linaro still employs the majority of the core maintainers of the OP-TEE project and still drives the day to day work, such as maintaining the project at GitHub, doing releases, making bug fixes and taking care of vulnerabilities reported to the project. From a long term perspective, Linaro is working with its member companies to develop new features and implement new technologies and architecture support. Some of these have been mentioned elsewhere on this webpage (Widevine, U-Boot, Linux kernel framework, Keymaster, SPCI to name a few).

                OP-TEE -  [https://www.op-tee.org/](https://www.op-tee.org/)
                TrustedFirmware - [https://www.trustedfirmware.org/](https://www.trustedfirmware.org/)

              image: /assets/images/content/op-tee-security.png
              description: >
                Back in 2013, Linaro member
                companies and the industry
                wanted to see an open
                alternative to the proprietary
                TEE (Trusted Execution
                Environment) solutions that
                existed at the time. For some
                use cases which involved...
            - title: Linux Kernel
              modal_content: |
                In the Linux kernel there are lots and lots of security features for obvious reasons . Linaro has been a contributor to the CryptoAPI for a couple of years. We created the current and official TEE framework in Linux and have also successfully upstreamed a TEE driver for OP-TEE, which we maintain today. Although we are not highly active in the [KSPP](https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project) project, we do support their work and have contributed to this project in the past.
              image: /assets/images/content/linux-kernel-security.png
              description: >
                In the Linux kernel there are lots
                and lots of security features for
                obvious reasons . Linaro has
                been a contributor to the
                CryptoAPI for a couple of years.
                We created the current and
                official TEE framework in Linux
                and have...
            - title: Morello
              modal_content: |
                The UK government has initiated a programme called ‘[Digitial Security by Design](https://www.ukri.org/innovation/industrial-strategy-challenge-fund/digital-security-by-design/)’. Together with global technology leaders including Google and Microsoft, Arm will work to develop prototype hardware - the Morello board. This device will enable industry partners to assess the security benefits of a range of prototype architectural features in real-world scenarios. Linaro will play a key role in this programme by being one of the players driving the software development for this board.


                The programme brings concepts from the University of Cambridge’s [CHERI](https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/) project into a new Arm prototype architecture. In January, the project received a major boost with £70 million of new UK Government funding. In July 2019, the project gained further momentum with the Digital Security by Design partners contributing to take the investment pot to more than £117 million.
              image: /assets/images/content/morello-security.png
              description: >
                The UK government has
                initiated a programme called
                ‘Digitial Security by Design’.
                Together with global technology
                leaders including Google and
                Microsoft, Arm will work to
                develop prototype hardware -
                the Morello board.
            - title: AOSP Security
              modal_content: |
                Google are constantly enabling new security features on Android. Many of these start out in AOSP. Linaro puts together reference designs for AOSP, meaning we are continuously enabling mandatory security features and ensuring they are up-to-date in our AOSP reference builds. One such example is Keymaster in Android/AOSP that is responsible for protecting keys used to protect various data. Google themselves have support for Keymaster in their TEE solution called Trusty. However, since there are vendors out there who use OP-TEE instead of Trusty, Linaro has together with member companies implemented a Keymaster solution for OP-TEE that works with the latest AOSP release.
              image: /assets/images/content/aosp-security.png
              description: >
                Google are constantly enabling
                new security features on
                Android. Many of these start out
                in AOSP. Linaro puts together
                reference designs for AOSP,
                meaning we
                are continuously enabling
                mandatory security...
            - title: Zephyr Security/IoT & Embedded Security
              modal_content: |
                Linaro’s involvement with M-architecture security began in 2017, with Linaro porting the mcuboot bootloader to Zephyr. This bootloader went from being the bootloader of a specific RTOS, to a general project to help provide secure booting on multiple Cortex-M platforms. At this time, Linaro also became involved with overall security in the Zephyr project, and a Linaro employee is currently the Security Architect for the Zephyr project.

                Beginning with Arm’s release of Trustzone support for M-architecture, Linaro has also been involved in the Trusted Firmware-M project.

              image: /assets/images/content/zephyr-iot.png
              description: >
                Linaro’s involvement with M-architecture security began
                in 2017, with Linaro porting the
                mcuboot bootloader to
                Zephyr. This bootloader went...
            - title: Digital Rights Management and secure video path
              modal_content: |

                Linaro aims to provide member companies with reusable components to quickly accelerate over-the-top, set-top box, smart TV and infotainment use cases for protected content such as Widevine (Level 1) and Playready SL3000 using OP-TEE, WPEWebkit, RDK and AOSP.

                -   Widevine is Google’s answer to the studios requirement of having content DRM protected. Widevine is one of the few exceptions where Linaro is actively doing work that isn’t open to the general public. In other words, Widevine is not an open source project, so for users and companies who are interested in running Widevine on their devices, they have to reach out to Google and sign an agreement that gives them access to the specifications. Google themselves have written a mock-implementation that demonstrates how to use the APIs. Since it’s a mock implementation, it hasn't been developed to run on real devices.

                    Linaro, together with member companies, developed a Widevine implementation for OP-TEE based on the OEMCrypto v11 specification. Due to many changes and the fact that v11 is no longer backwards compatible, Linaro has started to develop a new Widevine version for OP-TEE based on OEMCrypto v15.2. We expect to have this work completed at the beginning of 2020. Since it is not possible to open source it due to the license agreement, Linaro will only share this version with members of Linaro who have signed an agreement with Google. The v11 OEMCrypto reference implementation has also been integrated with wpewebkit, OpenCDM, RDK and AOSP.


                -   [PlayReady
                    ](https://www.microsoft.com/playready/)Playready is Microsoft's content protection technology, that is very widely deployed on over 4 billion devices and can be used to protect studios premium content. It is another rare exception where Linaro is doing work that isn’t open to the general public. Linaro has developed, along with our members, a Playready reference OP-TEE trusted application that adheres to the Playready for TEE (PRiTEE) interface and integrates with porting kit v3.3. This can only be shared with members who have also signed the appropriate Microsoft Playready licenses. Alongside the Playready trusted application, Linaro has also worked to provide reference implementations for AOSP and Open embedded and associated fixes to the porting kit to enable this. On AOSP, Linaro has developed a Playready mediadrm plugin and tested integration with Exoplayer and Chromium browser. For Linux we’ve integrated with Open Embedded build system and [wpewebkit](https://wpewebkit.org/) browser with OpenCDM plugins. These underlying technologies, browser plugins and trusted applications have also been integrated and tested with [RDK](https://rdkcentral.com/).

              image: /assets/images/content/digital-rights.png
              description: >
                Linaro aims to provide member
                companies with reusable
                components to quickly
                accelerate over-the-top, set-top...
            - title: SPCI / SPM and Virtualization on secure side
              modal_content: |

                In recent years, Arm have written the [SPCI specification](https://developer.arm.com/docs/den0077/a). That specification aims to describe and propose a common way to communicate with various software components, both firmware as well as OSes. A new component that is being discussed is the Secure Partition Manager (SPM). This specification together with newer Arm architectures will make it possible to run a hypervisor on secure side. This means that in the future, it will be possible to run virtualization on secure side as well. As can be expected, this specification affects lots of software components. Linaro and its member companies are working with Arm to ensure that software written today will not only work in the future, but also be configured in such a way that it can run newly developed features.

              image: /assets/images/content/security-block-placeholder.png
              description: >
                Linaro and its member companies are working with Arm to ensure that software written today will not only work in the future...
            - title: U-Boot UEFI subsystem implementation of Secure Boot and Measured Boot
              modal_content: |

                The Arm [Embedded Base Boot Requirement](https://github.com/ARM-software/ebbr) specification selects UEFI as the standard interface to boot from. Linaro has committed to the implementation of EBBR and in particular SecureBoot and MeasuredBoot in the context of U-Boot. These features require OP-TEE support for secure databases and also UEFI Authenticated Variables. Authenticated variables allow the ability to store, update and retrieve certain variables in a secure manner. Additional security ‘features’ recently added include EFI_RNG_PROTOCOL support which is used by Kernal Address Space Layout Randomization. Linaro is and has been a major player in getting this work done for U-Boot.

              image: /assets/images/content/security-block-placeholder.png
              description: >
                Linaro is and has been a major player in getting this work done for U-Boot...

  - row: container_row
    style: bg-light
    sections:
      - format: title
        style: #
        title_content:
          size: h2
          text: >
            How do I get involved?
      - format: text
        style: #
        text_content:
          text: |
            All the segment groups Linaro maintains benefit from the work Linaro does on security for Arm. This work provides the foundations these groups need to accelerate Arm development within their verticals. If you would like to get involved with the work Linaro does on security specifically, you can join as a member at Club or Core level. This will allow you to actively drive the engineering work and set the priorities.

            To read more about membership and fill out the enquiry form [>>CLICK HERE](/membership/)
  - row: custom_include_row
    source: engineering_related_resources.html
---
