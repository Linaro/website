---
initiative_id: "7"
title: LAVA
description: |-
    LAVA - Validation is key to the delivery of robust code and is an ongoing process involving multiple teams.
keywords: Linaro, Validation, Automation, Test, feedback, Linux, hardware, Build
permalink: /initiatives/lava/
icon: lava-logo.png
featured_video: https://www.youtube.com/embed/6jwYymfauik?feature=oembed
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsPqZwWtTbWEDG8Mni_e4qtJ
---
# LAVA

Validation is key to the delivery of robust code and is an ongoing process involving multiple teams, covering four components:

- Device Automation
- Build Automation
- Test Planning
- Developer feedback

Device  is the process of providing remote access to a set of devices in order to deploy systems for testing, automate the operation of the test and collect the results. Device automation involves the provision of hardware and the software to automate tests on that hardware. The hardware provision for the Cambridge Lab is managed by the [Linaro LAB team](https://wiki.linaro.org/LAVA/Team) (login required) who work closely with the [LAVA software team](https://wiki.linaro.org/LAVA) to provide the device automation for the Cambridge lab and the LAVA software for other instances inside and outside Linaro.

Build Automation is the process of preparing files which are based on developer activity and which can be deployed on devices to validate whether the developer changes have improved or broken the ability of the device to perform the required test. Linaro has the [Builds and Baselines](https://support.linaro.org/home) team (see the [portal](https://collaborate.linaro.org/pages/viewpage.action?title=Builds+and+Baselines+%28BB%29+DRAFT&spaceKey=EP) also – login required) to support automated builds of releases and test support files.

Test Planning involves developers and test writers identifying which tests are relevant to the development work and how at least some of those can be automated. The Test Plan needs to arrange that:

- tests are initiated automatically by developer activity,
- updated test files are prepared,
- a test job is submitted to the device.
- results are collected and made available to developers

Without a Test Plan, the provision of device automation and build automation cannot deliver validation. The [Linaro Quality Assurance Team](https://collaborate.linaro.org/pages/viewpage.action?pageId=47841921) (login required) can assist in the preparation of a Test Plan.

Developer feedback is team-specific and involves mapping the raw results to a relevant and useful summary which is delivered to the developers in a timely and helpful manner. The LAVA software can provide the raw results with some initial formatting but teams will benefit from the preparation of a custom frontend which presents the results in the way most suitable to that particular team. e.g. [kernelci.org](http://kernelci.org/).

Linaro has developed an automated testing system called LAVA (Linaro Automated Validation Architecture) which delivers the device automation and result collection. The software for this system is open source and can be recreated by following the [documentation](https://validation.linaro.org/static/docs/). Examples of the installation of the LAVA software and the Linaro LAB setup are included below.

The LAVA software includes the lava-server component to schedule jobs, administer device configurations and store results.  The dispatcher component supports processing test jobs that can deploy Debian, Ubuntu, Open Embedded and Android images on supported development boards. Generic support can be extended and customised to support additional client types (development boards) and interface with external equipment. The LAVA software includes helpers that can provide a consistent interface to various Linux distributions. The LAVA Manual provides additional information including how to contribute and communicate with the LAVA Team. You can view the types of devices currently available in any instance of the LAVA software by viewing the main scheduler status page, e.g. for the Linaro production instance at [validation.linaro.org](https://validation.linaro.org/scheduler/).

- [Introduction to LAVA](http://www.linaro.org/blog/community-blog/automated-validation-with-lava/)
- [LAVA fundamentals](http://www.linaro.org/blog/lava-blog/lava-fundamentals/)
- [LAVA Manual](https://validation.linaro.org/static/docs/)

{% include image.html name="lava-debian-jessie-installation.jpg" url="http://www.youtube.com/watch?v=T8jFzXRrFh8"%}

{% include image.html name="lava-linaro-validation-team.jpg" url="http://www.youtube.com/watch?v=zTPmypG7b08" %}

{:.responsive-table}
|[![LAVA Installation in Debian Jessie](http://img.youtube.com/vi/T8jFzXRrFh8/0.jpg)](http://www.youtube.com/watch?v=T8jFzXRrFh8)|[![Linaro validation team use LAVA for native toolchain builds and hack sessions](http://img.youtube.com/vi/zTPmypG7b08/0.jpg)](http://www.youtube.com/watch?v=zTPmypG7b08)|
