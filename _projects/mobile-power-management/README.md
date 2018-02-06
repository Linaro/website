---
project_id: "4"
title: Mobile Power Management
permalink: /projects/mobile-power-management/
description: |-
    ARM SoCs expose a lot of information to software about Hardware knobs for controlling power consumption.
keywords: power, management, working, kernel, hardware, group, jira, tools, differences, project
governance:
  - name: Linaro Technical Steering Committee (MEMBERS ONLY)
    url: https://wiki.linaro.org/Internal/TSC
engineering:
  - name: Power Management Engineering Wiki
    url: https://wiki.linaro.org/WorkingGroups/PowerManagement
related_jira_projects:
  - name: Project Summary
    url: https://projects.linaro.org/projects/PMWG/summary
  - name: JIRA Board
    url: https://projects.linaro.org/secure/RapidBoard.jspa?projectKey=PMWG&rapidView=30
  - name: JIRA Structure
    url: https://projects.linaro.org/secure/StructureBoard.jspa?s=100
mailing_lists:
  - name: EAS Dev
    url: https://lists.linaro.org/mailman/listinfo/eas-dev
  - name: Sched-Tools
    url: https://lists.linaro.org/mailman/listinfo/sched-tools
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsPdiaNrIkWgl-x-fg48gJYV
---

# Mobile Power Management

ARM SoCs expose a lot of information to software about Hardware knobs for controlling power consumption. As there is no Hardware to OS abstraction layer (such as ACPI), these knobs tend to be controlled directly by OS drivers. Additionally, each SoC vendor exposes a superset of the standard ARM power states to allow fine-grained control over each component to maximize battery-life. This increases the complexity of the core SoC enablement code inside the kernel as well as the peripheral drivers.

SoC vendors have taken slightly different approaches to implementing their OS power management frameworks. The differences arise for a number of reasons: a lack of design patterns to achieve what they require; due to lack of infrastructure support inside the kernel, and, on occasion, because of intrinsic differences in Hardware structure.

The Power Management Working Group shall endeavor to identify design patterns that help with the implementation of the majority of the usecases that vendors care about. To this end, the Power Management Working Group will look at the entire software stack (kernel, middleware, applications and tools) to help optimize power consumption. The Power Management Working Group is responsible for creating infrastructure, guidelines and tools to enable top-notch power management on ARM SoCs.

#### Key Deliverables:

- [Energy Aware Scheduler (EAS)](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/EAS)
- Dynamic PM evolution
- [Tools](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools) and [Test Suites](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/TestSuite)

#### Useful Information

- **Governance**: [Linaro Technical Steering Committee](https://wiki.linaro.org/Internal/TSC) (MEMBERS ONLY)
- **Mailing lists**: [EAS Dev](https://lists.linaro.org/mailman/listinfo/eas-dev), [Sched-Tools](https://lists.linaro.org/mailman/listinfo/sched-tools)
- **Engineering**: [Power Management Engineering Wiki](https://wiki.linaro.org/WorkingGroups/PowerManagement)
- **JIRA Project**: [Project Summary](https://projects.linaro.org/projects/PMWG/summary), [JIRA Board](https://projects.linaro.org/secure/RapidBoard.jspa?projectKey=PMWG&rapidView=30), [JIRA Structure](https://projects.linaro.org/secure/StructureBoard.jspa?s=100)
