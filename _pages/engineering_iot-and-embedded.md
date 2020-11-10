---
title: IoT & Embedded
description: |-
  The Internet of Things (IoT) is disrupting the traditional embedded market and creating huge growth opportunities. Every device being connected to the cloud and generating personal information is a huge data generation, connectivity and security headache. The disparate software and hardware solutions used in this space are already creating a massive amount of fragmentation and redundant engineering effort.
keywords: Linux, Arm, LITE, Android, IoT, Kernel, ecosystem, tinification
permalink: /engineering/iot-and-embedded/
layout: flow
js-package: engineering
members:
  key: lite
related_resources_tracks: https://connect.linaro.org/assets/json/iot.json
related_tags:
  - lite
  - LITE
  - Linaro IoT and Embedded
  - Embedded
  - Android
  - IoT
related_jira_project: https://projects.linaro.org/projects/LITE/summary
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMjCTIdpvcX5ePMBl4rXS5R
members_key: lite_members
image: /assets/images/content/LITE col.svg
releases:
  - title: LITE Releases
    url: https://releases.linaro.org/components/lite/
jumbotron:
  title: IoT & Embedded
  inner_class: dotted
  description: "Accelerating the adoption of secure Arm technologies in the IoT & Embedded space"
  image: /assets/images/content/IoT-bg.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: lite
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: title
        title_content:
          size: h2
          text: Accelerating the adoption of secure Arm technologies in the IoT & Embedded space
      - format: text
        style: text-left no-padding
        text_content:
          text: |
            By 2035, a trillion devices will be connected to the Cloud, receiving and generating terabytes of data across buildings, towns and the globe. The IoT ecosystem is fragmented across hundreds of RTOS’s using multiple communication protocols with many of these connections and devices insufficiently secure.

            Linaro’s IoT and Embedded (LITE) Group members work collaboratively to create and support key standards and best in class implementations to enable secure connected devices in the Arm ecosystem.

  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: MicroPython,DeviceTree,JerryScript,MCU Boot,OpenAMPProject,TrustedFirmware,Zephyr Project
        source: related_projects.html
  - row: container_row
    style: #
    sections:
      - format: text
        text_content:
          text: |
            The IoT and Embedded Group is driving collaboration on open source software for microcontrollers (MCU’s), as well as heterogeneous embedded compute devices with combinations of Cortex-A, Cortex-M and/or Cortex-R and FPGA’s. Our priorities are connected device security, IoT platform testing, and contributing to software projects that enhance the Arm ecosystem.
      - format: tabs
        style: #
        tabs:
          - title: Embedded Security
            content: |

              Linaro’s involvement with M-architecture security began in 2017 when Linaro engineers ported the community supported MCUboot bootloader to Zephyr. Now MCUboot is utilized to provide secure booting on multiple Cortex-M platforms. Concurrently, Linaro took on a leadership role in the Zephyr project to drive the Security Working Group. The Security Working Group has developed secure coding guidelines, threat models and processes to improve the security of the code base. Now a Linaro engineer is the Zephyr Security architect and a maintainer on MCUboot.

              Our scope ranges from cryptographic algorithm support to be utilized by system and communication protocols, to key management, and tamper/intrusion detection systems. Additionally, it takes into account the security extensions associated with the ARMv8-M architecture using Trusted Firmware for Cortex-M and Arm’s Platform Security Architecture (PSA). In October 2019, we built and certified a [PSA Level 1 hardware and software platform implementation using Zephyr](/news/linaro-contributes-to-the-zephyr-project-becoming-psa-certified/).

          - title: Testing Frameworks
            content: |

              Using the LAVA testing and verification platform, the IoT and Embedded team is developing a testing and CI infrastructure for MCU’s and other embedded devices. Testing Cortex-M devices presents unique challenges different from the Cortex-A platforms leading to some novel solutions in this space. For Cortex-M devices, the applications are usually monolithic, fixed-function, and written in low-level languages. Thus, adding testing handlers on the application side would require time-consuming modification of sources, would quickly hit constraints on RAM/ROM, and beyond that, would lead to concerns that a different system is being tested than the one intended for production. Due to this, testing of such devices is inherently "reactive", where a test system applies external stimuli to a device under test and then checks for expected behavior. We plan to expand on the number of boards and simulations supported and continue to extend LAVA to meet our needs in this space.

          - title: Zephyr & Member Platform Enablement
            content: |

              The Zephyr Project is an open source RTOS designed specifically for resource constrained devices. It supports multiple hardware architectures, connects via transport layer security to any cloud and has LTS (long term support). Linaro is actively working within this fast moving project with representation as a Board member, TSC member, maintainer and contributor. Our charter is to ensure that our Member Arm based platforms are active and up to date in the Zephyr releases. Within the Zephyr project, we are maintaining and updating JerryScript and MicroPython as well as networking support.

              In addition, we monitor industry leading open source RTOS’s for opportunities to promote the Arm ecosystem.

      - format: tabs
        style: #
        tabs:
          - title: Additional Activity Areas
            content: |

              Linaro promoted and contributed the use of [Device Tree](https://www.devicetree.org/) within the Zephyr project. We continue to promote and implement Device Tree within the Zephyr project for different compJEKonents as well as are active in the Device Tree community. Device Tree describes hardware configurations for use at boot time which reduces the complexity and size of the resulting code base. Device Tree can be used across multiple platforms and operating systems.


              We are also active in the [OpenAMP](https://www.openampproject.org/) community as members of the Board and TSC and implementing and integrating Zephyr support for key components.
          - title: Research Areas
            content: |

              We are researching **Machine Learning and AI (AI/ML)** strategies for Cortex-M devices as part of the [Linaro AI/ML project](/engineering/artificial-intelligence/) with a focus on frameworks and compilers as well as how our embedded device knowledge can be applied to this rapidly expanding space. We are building on basic **Power Management** support within Zephyr to implement more advanced and precise power management concepts from the Linux world.
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
            There are multiple ways to join the Linaro IoT and Embedded Group - you can either join at Group membership level which allows you to participate in all work managed by the group. Or you can join at Club or Core level, both of which allow you to participate in the IoT and Embedded Group as well as other Linaro segment groups.

            To read more about membership and fill out the enquiry form [>>CLICK HERE](/membership/)
  - row: custom_include_row
    source: engineering_related_resources.html
---
