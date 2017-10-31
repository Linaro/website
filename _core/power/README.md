---
core_id: "3"
title: Power Management
permalink: /core/power/
director: Vincent Guittot
related_projects:
  - "4"
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMbk293t64TnZmxzLp-bRib
---
# Power Management

The Power Management Working Group is tasked with creating infrastructure, guidelines and tools to enable superior power management on multiple ARM SoCs.

The Power Management Working Group was formed two months after Linaro was launched. In initial discussions, many members identified power management as an area to avoid collaborative working since it was seen as an area of major differentiation. As the Technical Steering Committee (TSC) meetings progressed, it quickly became apparent that the members had significant overlap in this area and the TSC decided to form a group to handle the Power Management work.

ARM SoCs have a lot of hardware “knobs and dials” that software can use to control power consumption, but there is no hardware to operate system abstraction layer (such as ACPI) so the knobs and dials tend to be controlled directly by operating system drivers. Additionally, each SoC vendor exposes a superset of the standard ARM power states to allow fine-grained control over each component to maximize battery-life in mobile applications. This increases the complexity of the core SoC enablement code inside the kernel as well as the peripheral drivers.

SoC vendors have naturally taken slightly different approaches to implementing their power management frameworks with differences arising for a number of reasons: a lack of available design patterns to achieve what they require; a lack of infrastructure support inside the kernel; and, on occasion, because of intrinsic differences in hardware structure.

The Power Management Working Group’s goal is to identify design patterns that help with the implementation of the majority of the use-cases that vendors care about. To this end, the group looks at the entire software stack (kernel, middleware, applications and tools) to help optimize power consumption.

###### RESOURCES

- [Energy Aware Scheduler (EAS)](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/EAS)
- [Tools](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Tools)
- [Test Suites](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/TestSuite)
- [Benchmarking](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Benchmarking)
- [Good Practices and Recommendations](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/DesignRecommendations)
- [Hardware](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Hardware)
- [Articles](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Articles): Articles and posts related to our work

[Community](https://wiki.linaro.org/WorkingGroups/PowerManagement/Resources/Community): Information for community members looking to get involved in power management
