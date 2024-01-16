---
title: Challenges of Stabilising Power and Performance Results in a Board Farm
author: lisa.nguyen
layout: post
date: 2019-03-20 09:00:00
description:
  In Linaro, the Power Management Working Group (PMWG) manages a board
  farm to boot Linux and Android kernels and run tests across various boards.
category: blog
tags:
  - Linaro
  - Arm
  - Open Source
  - Power Management
image: /assets/images/blog/collect-power-measurements-in-ci.png
---

In Linaro, the Power Management Working Group (PMWG) manages a board farm to boot Linux and Android kernels and run tests across various boards. Some of our board farm’s objectives include:

- To collect power and performance results for each board type
- Monitor any regressions
- Share hardware resources within the PMWG team

## Background

Before we describe the challenges of stabilising power and performance results, let’s dive into some background information first.

We were trying to standardise the way we run power and performance tests as a team. Every developer has their own testing methods and ways of analysing data. However, not everyone uses the same metrics to confirm whether their improvements to the Linux kernel are effective or not. One developer may use standard deviation. Another developer may use a particular number as a baseline. We also needed consistent test runs from the same environment and to be able to reproduce bugs easily.

The idea of the PMWG board farm was born. Because this was going to be a collaborative effort, we requested assistance from other Linaro teams to setup CI loops, build a board farm, add features needed in our open source tools, and create a reporting dashboard.

Our CI process is illustrated in the flowchart that we created for our farm demo at Linaro Connect Vancouver 2018 below.

#### PMWG CI Flowchart

{% include image.html path="/assets/images/blog/collect-power-measurements-in-ci.png" alt="PMWG CI Flowchart" %}

Each developer in PMWG has their own branch and we use automerge to merge changes to an integration tree automatically. When an update is detected, we trigger a build and start the process of creating and submitting a CI job.

The Linaro LAVA Lab team also provides us with daily and weekly health reports of our instance. These reports provide a breakdown of the total number of jobs run, how many completed and how many errored. It then breaks down the errors on a per device type, per error type and device instance basis. The top level error categories are:

#### Configuration

Something is wrong with the pipeline job definition. E.g. required commands not being specified (this is a new category as of LAVA 2019.01)

#### Job

Some required action in the job failed

#### Test

Some issue in the test definition resulted in a failure

#### Infrastructure

Something went wrong with the Lab infrastructure, e.g. serial connection lost, a call to some control script failed

#### Bug

The job has triggered a problem in LAVA which needs to be reported to the LAVA team for investigation

#### Canceled

The job was canceled by a user

The aim is to keep the infrastructure errors to less than 1%. In some CI instances, an infrastructure error triggers an automatic resubmission. This is under control of the QI team.

Here is a snippet of a lab health report:

```
Total jobs:     136

        Total errors:   11      (8.09%)

        LAVA errors:    0       (0.00%)

        Test errors:    7       (5.15%)

        Job errors:     4       (2.94%)

        Infra errors:   0       (0.00%)

        Canceled jobs:  0       (0.00%)

Device type:    hi960-hikey

Total jobs:     107

Total errors:   5       (4.67%)

        Error type:     Job

        Error count:    2       (1.87%)

                Error:  auto-login action timed out

                        Count:  1       (0.93%)

                        IDs:

                        hi960-hikey-02:

                                15316

                Error:  git-repo-action timed out

                        Count:  1       (0.93%)

                        IDs:

                        hi960-hikey-02:

                                15308

        Error type:     Test

        Error count:    3       (2.80%)

                Error:  Device NOT found!

                        Count:  3       (2.80%)

                        IDs:

                        hi960-hikey-01:

                                15254

                        hi960-hikey-02:

                                15218 15219

Device type:    juno-r2

Total jobs:     7

Total errors:   0       (0.00%)

```

The daily reports are run starting at 07:00 UTC, and the weekly reports run on Wednesday starting at 06:00 UTC. The utility emails out to a list specified to the script. On PMWG this is currently Vincent, Lisa and the Lab team.

## Challenges

### Infrastructure and Integration

The first challenge we had was to set up the test infrastructure before we could collect any measurements.

We asked the Linaro LAVA team to enable and integrate Arm energy probe (AEP) support in LAVA. The lack of hardware made it difficult for the LAVA team to fulfill this request in the beginning. We showed the LAVA team how the arm-probe command-line tool works to make the AEP integration process easier. Jointly, we wrote test definitions to detect the AEP and run an AEP command to collect data in LAVA.

We also spent months soldering hikey and hikey960 boards in order to connect the AEPs, and shipping them to the Linaro labs in Cambridge, UK for racking. This is already challenging for developers who want to collect power measurements locally because most development boards do not provide easy access to the power domain and often need rework.

### Stability and Reliability

Once we had the test infrastructure in place, we focused on stabilising our power and performance results. We made some hardware and software adjustments along the way.

#### Hardware Adjustments

We noticed static interference between boards. When our hikey and hikey960 jobs ran simultaneously, the hikey960 test results were affected by the disturbance caused by our hikeys. It became important to isolate these boards to minimise the chances of the static interference from reoccurring.

As a first step to solve this problem, we reorganised the board farm. Our board farm was moved to a more temperature controlled area of the lab with more space.

Before the reorganisation, we noticed the idle power consumption was rather high.

In this overview chart of idle power consumption below, the left portion shows high results before the reorganisation and then the right portion shows the improved results afterwards.

#### Idle power consumption results before and after the reorg

{% include image.html path="/assets/images/blog/idle-power-consumption-1.png" alt="Idle power consumption results before and after the reorg" %}

The next two charts show a closer view of before and after.

#### Closeup of idle power consumption results before the reorg

{% include image.html path="/assets/images/blog/idle-power-consumption-2.png" alt="Closeup of idle power consumption results before the reorg" %}

#### Close up of idle power consumption results after the reorg

{% include image.html path="/assets/images/blog/idle-power-consumption-3.png" alt="Close up of idle power consumption results after the reorg" %}

Before, we collected 328 measurements with a standard deviation of 2.15% to be compared with a probe precision of 2.12%. After, we collected 336 measurements with a standard deviation of 1.38% to be compared with a probe precision of 2.14%.

Surprisingly fan placement affected our results as well. We noticed a difference between placing the fan on top of the board versus on the side. Moving the fan also reduced vibrations that our lab team noticed.

The first hikey960 board had the correct fan placement on the side but the second one did not, so we saw a big variation in our measurement on the left side of the chart below. While our jankbench results were steady, our boards tended to overheat when we ran vellamo, a more intensive workload that triggered thermal mitigation.

### Fan placement affected our data. Vellamo results in red. Jankbench results in blue.

{% include image.html path="/assets/images/blog/fan-placement.png" alt="Fan placement affected our data. Vellamo results in red. Jankbench results in blue" %}

No two boards generated the same or similar results, which led to significant power consumption offsets. For example, our hikey960 boards behaved differently. There was a huge power consumption offset of 15-20% difference between our hikey960 boards before we started troubleshooting with our lab team.

- Were the power supplies identical?
- Did we need to swap cables?
- Did they have the same fan size?
- What would happen if we removed sdcards?
- Were the probes connected properly?

The troubleshooting did not end there. We removed the daughter board, used a USB to serial cable for the console, checked firmware versions, and more. With those changes, we reduced the power offset difference to 5-10%. We reached a close error margin of 1% between our two hikey960 boards recently with more accurate AEP calibration.

#### Software Adjustments

To solve our overheating issues, we increased the cooling times by running eight iterations of 15 second idle workloads in between tests, totaling two minutes in cooldown time. In the initial test results, we noticed that the multimedia workloads “consumed” less power than the idle workloads, which did not make sense.

We kept our tools as current as possible. We upgraded LAVA from v1 to v2 and learned how to rewrite jobs in YAML instead of JSON. We also moved to Workload Automation v3, taking advantage of the newer energy measurement instrument. Although we acknowledge that the latest version of tools can generate regressions occasionally.

Originally we had one large CI job that took four hours to complete on average. Then we decided to split the CI job into two smaller ones: one for multimedia use cases (audio and video), and the other to run vellamo only. Having a dedicated vellamo CI job would be less likely to impact other tests like idle. We also cut the amount of time to run our tests in half by running smaller CI jobs.

We started tracking performance trends for kernel versions 4.9, 4.14, and 4.19. 4.9 is our reference for this comparison chart below.

### Tracking performance trends for kernel versions 4.9, 4.14, and 4.19

{% include image.html path="/assets/images/blog/tracking-performance-trends.png" alt="Tracking performance trends for kernel versions 4.9, 4.14, and 4.19" %}

## Recommendations

Based on our experiences with our board farm so far, we would make the following recommendations:

1. Check physical connections frequently. Small movements such as rearranging boards in a rack may disconnect the probe on accident, or as we mentioned before, fan placement can greatly affect power and performance results.
2. Keep tools and firmware versions up to date.
3. Run stable, well-known images regularly to help detect any hardware or infrastructure regressions.
4. Add multiple iterations of idle workloads for the board to cool down between runs.
5. If there is more than one of the same board type (in our case, multiple hikey and hikey960 boards), check that they have the same components. Use the same power supply, sdcards from the same batch, same fans, and more. It will make troubleshooting easier.
6. Check that the AEP config file reflects the physical board setup with the correct channel names, numbers, and values. We cannot assume that one hikey960 AEP config will be identical to another one.
7. While isolating the boards may not be necessary, it helped to stabilise our results.
8. Calibrate the arm energy probes often. To do that, we use the arm-probe command-line tool and run this command with the autozero option:

```
arm-probe --config &lt;/path/to/config&gt; -z
```

## Future

With our success in collecting power and performance results for Android, we hope to do the same for the Linux kernel. We also want to test patches from the Linux/Arm kernel mailing list to find any regressions and report back to the developers. Lastly, we hope to collaborate with kernelci to share resources and provide more useful results to kernel maintainers and contributors other than boot test reports.

For more information on the PMWG board farm, visit [/kernel-and-toolchain/](/core-technologies/toolchain/).
