---
id: 1
title: Security
sub_theme: true
permalink: /core-technologies/security/
image: /assets/images/content/testing-and-ci-share-image.png
icon: /assets/images/content/Icon_Security_White.svg
icon_dark: /assets/images/content/Icon_Security_black.svg
js-package: contactForm
description: >
  Security is no longer an option, it is a vital
  ingredient to be able to protect intellectual
  property, communications, bank accounts,
  personal digital belongings and more.
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/78d8b871-93f5-45a9-9ed0-2cdd8769f852
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Security
  description: |
    Security is no longer an option, it is a vital
    ingredient to be able to protect intellectual
    property, communications, bank accounts,
    personal digital belongings and more.

    To develop solutions that meet all the security criterias, you need to have a solid understanding
    of a vast range of technologies which requires a team of experts. Security has been an
    important topic for Linaro since our inception and we continue to play an instrumental role in
    designing and developing the essential security components found across multiple open source
    projects on Arm.
  image: /assets/images/content/Banner_Security.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro contributions to Security on Arm
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: OP-TEE
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                OP-TEE is an open source Trusted Execution Enviroment (TEE)
                implementing the Arm TrustZone technology. Linaro has a long
                track record of working with TrustZone and Trusted Execution
                Environments (TEE). Back in 2013 Linaro, together with
                STMicroelectronics, started working on preparing
                STMicroelectronics proprietary TEE solution for Open Source.
                A couple of months later OP-TEE was published and since then
                Linaro has been a key contributor both in terms of pushing new
                features as well as doing roadmap planning, maintenance,
                release work, vulnerability assessment and mitigation of
                security issues. We employ several core maintainers for the
                OP-TEE project as well as maintainers for the TEE framework
                in the Linux kernel and U-Boot. Since the TEE is a core
                component in the Arm ecosystem, it is used in a lot of different
                use cases. As a result, Linaro has developed strong engineering
                teams who know how to put together efficient and well
                performing solutions with OP-TEE, no matter how big or small
                the task. In 2019, [OP-TEE was donated to Trusted Firmware](/news/linaro-donates-op-tee-into-the-trusted-firmware-project/), a
                Linaro Community Project. Linaro is still responsible for driving
                the roadmap for OP-TEE in sync with the members of Linaro
                as well as with the [TrustedFirmware.org](https://trustedfirmware.org/) project.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://linaro.atlassian.net/wiki/spaces/LOC/overview
            - title: Morello
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                Morello is a research program led by Arm in association with
                partners and funded by the UKRI as part of the UK
                government Digital Security by Design (DSbD) programme. It
                defines a new prototype security architecture based on CHERI
                (Capability Hardware Enhanced RISC Instructions). This new
                research architecture is very different from what we are
                currently using on our devices as of today. A major difference is
                that it uses 129bits (128 + 1) rather than the standard 64bit or
                32bit. The ultimate goal is to be able to implement
                compartmentalization with high granularity and with that we
                should end up with a system that is more robust to well known
                attacks. For example, buffer overflows, return oriented
                programming (ROP) and many other known vulnerability
                classes. Linaro is an active participant in this program with
                contributions to toolchains, debuggers, infrastructure work as
                well as pure capability enablement.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://www.arm.com/why-arm/architecture/cpu/morello
            - title: EFI enablement on U-Boot
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                U-Boot is a primary boot loader which is used in embedded
                devices to package the instructions needed to boot the
                device’s operating system kernel. StandAloneMM (StMM) is
                the EDK2 application responsible for storing variables. Since
                U-Boot has become EFI aware in recent years, there has been
                a need to store the variables securely. In the first iterations,
                U-Boot was storing the variables in its environment, which
                was fine for the initial implementation. However, this offered
                no security whatsoever. This led to the discussion as to
                whether it would be possible to leverage existing technology
                running on the secure side of Arm devices, like for example
                TEE’s and Secure Partitions. Due to limitations on the current
                platforms where it is only possible to run a single payload on
                the secure side (S-EL1), a decision had to be made. As a
                stepping stone to future architectures, Linaro in collaboration
                with Arm decided to add support in OP-TEE, so that it is
                possible to use StMM unmodified.

                Combined with OP-TEE’s ability to access an RPMB partition,
                it is now possible to store EFI variables in a flash on the
                secure world or an RPMB partition (which is more common
                on embedded devices). This contribution enables a secure
                way of storing the EFI variables on current Arm architectures.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://github.com/u-boot/u-boot
            - title: Zephyr and MCUboot
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                Zephyr is a real-time operating system (RTOS) for
                resource-constrained embedded devices which supports
                multiple architectures. From the very start, Linaro has worked
                with the Zephyr project on various technologies, but the
                security side has been an important area where Linaro has
                played a key role in the creation of the security architecture.
                Our work in security architecture ranges from cryptographic
                algorithm support to be utilized by system and communication
                protocols, to key management, and tamper/intrusion detection
                systems. Additionally, our work takes into account the security
                extensions associated with the ARMv8-M architecture, using
                Trusted Firmware for Cortex-M and Arm’s Platform Security
                Architecture (PSA). In October 2019, [we built and certified a
                PSA Level 1 hardware and software platform](https://www.linaro.org/news/linaro-contributes-to-the-zephyr-project-becoming-psa-certified/) implementation
                using Zephyr. The Zephyr Security Architect is a Linaro
                employee who is heading the security architecture discussions,
                and has led the team in the creation of various security
                processes for the project. This includes working with MITRE to
                bring Zephyr in as a CVE Numbering Authority, and developing
                the process of handling vulnerabilities. In addition to being the
                Zephyr Security Architect, this Linaro employee is also a
                maintainer with the MCUboot project, a Linaro Community
                Project. MCUboot is a secure bootloader that is used as the
                primary bootloader for Zephyr. The process of developing
                several standards (RFCs) relevant to the security of Zephyr has
                also required work with the IETF.
              buttons:
                - title: Learn more about Zephyr
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://zephyrproject.org/
                - title: Learn more about MCUboot
                  style: btn-lg btn-primary btn-outline-primary
                  url: https://www.mcuboot.com/index.html
      - format: buttons
        style: text-center
        buttons_content:
          - title: All Projects
            url: /projects/
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Banner_Security.jpg
    sections:
      - format: title
        style: mt-4 text-white
        title_content:
          text: How to participate
          size: h2
      - format: text
        style: text-white
        text_content:
          text: |
            There are multiple ways to engage with Linaro.
      - format: block
        style: pb-4
        item_width: "4"
        block_section_content:
          blocks:
            - title: Join as a Linaro Club Member
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                If you want to collaborate with Linaro
                and other industry leaders on all verticals
                in the Arm Ecosystem, club membership
                is the right option for you.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: /membership/
            - title: Join as a Linaro Core Member
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                If you want to participate in all the
                work Linaro does as well as have
                access to your own dedicated
                engineering team, then core
                membership is the right option for you.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: /membership/
            - title: Join our team!
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-around align-items-baseline
              description: |
                We frequently hire subject matter
                experts and maintainers - if you’re
                interested in becoming part of our
                team, go to the linaro careers page to
                find out more.
              buttons:
                - title: Learn more
                  style: btn-lg btn-primary btn-outline-primary
                  url: /careers/
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
