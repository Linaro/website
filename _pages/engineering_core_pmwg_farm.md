---
title: Power Management Farm
description: >-
  The Power Management Working Group is tasked with creating infrastructure,
  guidelines and tools to enable superior power management on multiple Arm SoCs.
permalink: /engineering/core/arm-power-management/pmwg-farm/
related_resources_tracks: https://connect.linaro.org/assets/json/power.json
js-package: engineering
layout: flow
jumbotron:
  image: /assets/images/content/engineering/context/stewardship.jpg
  title: Power Management Farm
  description: ""
  inner_class: dotted
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: related_members.html
    style: members_row bg-light
  - row: main_content_row
    style: large_type introduction_row py-0
  - row: custom_include_row
    source: engineering_related_resources.html
image: /assets/images/content/engineering/png/core_engineering.png
---

## Overview

Linaro's Power Management Working Group manages a board farm to boot kernels and run tests across various devices. Our main objectives include:

- Monitor power consumption and performance trends of the Linux kernel and Android kernels and catch any performance and/or power regressions
- Automate benchmarking of our team's development
- Share hardware resources with the PMWG team

The PMWG board farm can be found at [https://pmwg.validation.linaro.org](https://pmwg.validation.linaro.org/).

## Devices

Some devices in our board farm include:

- Hikey6220
- Hikey960
- Pandaboard
- Dragonboard 410c
- Dragonboard 820c
- Juno R2

## Tools

We use these tools as a part of our testing process:

- [Automerge](https://git.linaro.org/power/automerge.git) to merge developer branches into a central repository
- [Jenkins](https://ci.linaro.org/) for our Android builds and [kernelci](https://kernelci.org/) for our Linux builds
- [Arm's Workload Automation framework](https://github.com/arm-software/workload-automation) to run workloads on Android and Linux
- Arm Energy Probes and [AEP command-line tool by Andy Green](https://git.linaro.org/tools/arm-probe.git) to collect power measurements
- [LAVA framework](https://validation.linaro.org/) for device management and run CI jobs
- [LISA toolkit by Arm](https://github.com/arm-software/lisa) for post-processing data
- [Linaro QA reports](https://qa-reports.linaro.org/) to display test results and graph trends

## CI loop setup

### Diagram

Our CI loop flow diagram can be found here - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/PMWG-Farm?action=AttachFile&do=view&target=pmwg-ci-poster.pdf.

### Workloads, Device Configuration, and Agendas

We use the [Linaro QA test definitions repository](https://git.linaro.org/qa/test-definitions.git) to run tests in our LAVA jobs. Specifically, we use the Workload Automation v3 test definitions for [Android](https://git.linaro.org/qa/test-definitions.git/tree/automated/android/workload-automation3/workload-automation.yaml) and [Linux](https://git.linaro.org/qa/test-definitions.git/tree/automated/linux/workload-automation3/workload-automation.yaml).

Please make sure that you have adb working in LAVA if you are running WA Android workloads, or SSH working in LAVA if you are running WA Linux workloads.

The WAv3 default device configuration files and agendas can be found from the Linaro QA [wa-templates](https://git.linaro.org/qa/wa-templates.git)repository. PMWG specific agendas and config files can be found on our [wa3-lava](https://git.linaro.org/power/wa3-lava.git) repository.

### AEP setup

If you are planning to use arm energy probes to collect power measurements, you may need to perform one or more of these actions:

- Check the probe is connected to the device. Some soldering may be needed.
- On the host machine, install the

libudev-dev package and add your username to the dialout group. Then run

ls -l ../dev/ttyACM0.

- Find the probe ID by running

ls /dev/serial/by-id/ on the host machine. The output should look similar to this format:

/dev/serial/by-id/usb-NXP_SEMICOND_ARM_Energy_Probe_S_NOXXXXXXXX-if00.

- Update the LAVA device configuration file to include 
  {% raw  %}
  {% set static_info = [{'board_id': 'S_NOXXXXXXXX'}] %} where S_NOXXXXXXXX is the probe ID.
  {% endraw  %}

### Data post processing

We are mainly using the [sched-evaluation-full](https://github.com/ARM-software/lisa/blob/master/ipynb/wltests/sched-evaluation-full.ipynb) script in the LISA toolkit to post-process data.

### Reporting

We use QA reports to display graphs and trends. QA reports uses the [SQUAD](https://github.com/linaro/squad) tool to publish data pulled from LAVA.

### LAVA job definition example

To get started, you can download this LAVA job definition - https://wiki-archive.linaro.org/WorkingGroups/PowerManagement/Resources/PMWG-Farm?action=AttachFile&do=upload_form&ticket=005cf783fb.c5a9691eca2feea13925ba3a744ceb0ecc620d8c&target=wa3-dhrystone-example.yaml and submit it on your LAVA instance. Please note that this example **DOES NOT** include the arm-probe, email notification, and post-processing sections that we use in our CI loops. You may need to change the device type and image links.

This example is created to get users running Workload Automation on Hikey Android in LAVA, and they can expand from there.

## References

If you need general **LAVA** help (e.g. how to submit a job, how to install LAVA, tips for writing test definitions), please try one of the following suggestions:

- Read the LAVA [documentation](https://docs.lavasoftware.org/lava/contents.html). It is thoroughly written.
- Email questions to the LAVA users mailing list at

&lt;lava-users AT lists DOT lavasoftware DOT org&gt; so the LAVA team and other LAVA users can assist you, especially when everyone is in different timezones. Please attach job logs and job definition in your email if you have any. It is also very helpful to list the steps taken to reproduce your problem.

- Visit the [LAVA Software Community Project](https://www.lavasoftware.org/) website.
- Have a Linaro LDAP account and want to try running your first LAVA job? Visit [here](https://validation.linaro.org/static/docs/v2/first_steps.html#linaro-lab-users).

To learn how to use parameters or enable instruments in your agenda and how **Workload Automation** works in detail, please visit the [WA document site](https://workload-automation.readthedocs.io/en/latest/).

If you experience issues with **Workload Automation** (e.g. can't run a workload, installation problems, reporting bugs), please create an [issue](https://github.com/arm-software/workload-automation/issues) at the Workload Automation github page.

If you need help setting up the **LISA toolkit**, please create an [issue](https://github.com/ARM-software/lisa/issues) at the LISA toolkit github page.
