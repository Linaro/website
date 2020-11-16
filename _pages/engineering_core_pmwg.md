---
title: Arm Power Management
description: |-
  The Power Management Working Group is tasked with creating infrastructure, guidelines and tools to enable superior power management on multiple Arm SoCs.
keywords: EAS, DynamIQ, Arm, tools, power, energy, thermal, scheduler, big.LITTLE
permalink: /engineering/core/arm-power-management/
layout: flow
related_resources_tracks: https://connect.linaro.org/assets/json/power.json
js-package: engineering
image: /assets/images/content/engineering/png/core_engineering.png
jumbotron:
  title: Arm Power Management
  inner_class: dotted
  description: ""
  image: /assets/images/content/engineering/context/stewardship.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club
        source: related_members.html
  - row: main_content_row
    style: large_type introduction_row py-0
  - row: custom_include_row
    source: engineering_related_resources.html
---

Linaro power management team aims to bring consistency and to reduce fragmentation of power management solutions in the Arm SoC-Linux ecosystem. Members of this team collaborate with open source Linux community, Arm and other member companies to understand diverse requirements pertaining to power management solutions and actively tries to bridge the gap between conflicting solutions.

The team primarily offers comprehensive solutions to complex problems surrounding power management frameworks, thermal management frameworks and scheduler in Linux kernel. The team also works on testing infrastructure and tools required to evaluate and optimize performance and power consumption of the SoCs https://wiki-archive.linaro.org/SoCs. On need basis, the members get involved in other parts of the software stack to accomplish to optimize power and performance.

Some of the key areas where Linaro Power Management team Engineers are currently involved in Linux Kernel are: -

**Energy Aware Scheduler (EAS)**

- EAS aims to make power-performance control more centralized in Linux Kernel with the scheduler being the primary driver for power-performance decisions. For details, click here : Energy Aware Scheduler (EAS) - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/EAS

Power Management Frameworks

- Linux kernel power management frameworks include :-
  - **Runtime PM** **GenPD (Generic Power Domain)** **CPU Freq** **CPU Idle** **Voltage Management and Regulator Framework**

**Thermal Management**

- Linux Kernel thermal management frameworks include thermal sensors, thermal governor, cooling devices, thermal zones and trip points. To learn more about Linaro's work in these areas, click here: Thermal Management - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/Thermal%20Management

Other initiatives by this team includes

- **DynamIQ Development** **Power management Farm** - Linaro power team maintains a farm to aid in build, sanity, performance and power testing of various arm platforms.For more info on the various initiatives that are part of PMWG farm, click here: PMWG Farm - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/PMWG-Farm
  **Tools and other solutions** - Linaro provides tools for simulating workloads and debugging various power management frameworks in Linux for Arm Socs. To learn more about these tools, click here: Tools - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/Tools
