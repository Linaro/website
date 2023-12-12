---
layout: post
title: " QEMU 8.2 and Linaro’s Maintainer Story"
description: >
  We discuss the impact of Linaro’s leadership in QEMU maintenance, the upcoming
  8.2 release and the latest Arm architectural features you can now experiment
  with inside QEMU’s system emulation. 
date: 2023-12-12 04:12:03 +07:00
image: /assets/images/content/Banner_Core_Technologies.jpg
tags:
  - qemu
  - RME
  - Realms
  - Confidential Computing
  - community
  - maintainers
  - maintainership
  - security
  - architecture
category: blog
author: alex.bennee
---
# Introduction

Without trying to make me out as more of a greybeard than I actually am, I celebrate 10 years at Linaro this year. I joined the team to work on adding support for emulating the recently announced Aarch64 architecture to QEMU. In the years since, the team has been steadily keeping up with the evolution of the architecture and at the last count we’ve added a total of [98 additional extensions](https://qemu.readthedocs.io/en/master/system/arm/emulation.html) to the main A-profile CPU as well as recent additions to the older M-profile class of CPUs. With the latest release and the addition of the [Cortex-A710](https://www.arm.com/products/silicon-ip-cpu/cortex-a/cortex-a710) model developers can now experiment with a next generation Arm v9 processor which sets a new baseline of advanced functionality for a modern processor.

I’ll talk about some of those new features later in the post but first I want to talk a little about QEMU’s maintainer story.

# Maintainership Matters

At Linaro we take our responsibilities to the wider Free, Libre and Open Source (FLOSS) ecosystem very seriously. While open source empowers anybody to download, examine and modify code, maintainers play a key role in keeping projects and communities active and productive. In QEMU maintainers are responsible for the bulk of code review as well as collecting patches for their subsystems and funnelling that code into tested pull requests that are eventually merged into the mainline. It is usually maintainers who are involved in the essential work of modernising and renovating the creakier legacy parts of the code base to keep the project fit for the current generation.

The year before I joined Linaro we were well represented in the contribution stats placing in 5th place in terms of changesets and lines. However, contributions were dominated by the major enterprise suppliers for whom QEMU is a key part of the virtualisation story. Red Hat has always held the crown in terms of contribution and in my first year was still responsible for 30-40% of the changes going into the codebase.

### Top changeset contributors by employer (Dec 2013 to Dec 2014)

<br>

<table style="width: 100%; border-collapse: collapse; border: 1px solid rgb(0, 0, 0);">
    <tbody>
        <tr>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;Red Hat</span><br></td>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0); vertical-align: middle;">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;2283 (39.3%)</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;Linaro</span></p>
            </td>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;622 (10.7%)</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;IBM</span></p>
            </td>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;590 (10.1%)</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;Individual Contributors</span></p>
            </td>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;548 (9.4%)</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;Huawei</span></p>
            </td>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;207 (3.6%)</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;SUSE</span></p>
            </td>
            <td style="width: 50%; border: 1px solid rgb(0, 0, 0);">
                <p style="text-align: start;color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);font-size: 10.5pt;">&nbsp; &nbsp;199 (3.4%)</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="text-align: start;color: rgb(0, 0, 0);"><br></p>

In the years since I joined we have continued to invest in the project as it has become a key part of delivering for Linaro and its members. About a fifth of the [MAINTAINERS](https://gitlab.com/qemu-project/qemu/-/blob/master/MAINTAINERS?ref_type=heads) entries on the project are now Linaro email addresses covering areas such as the core TCG translator, testing frameworks, debug and introspection code as well as of course the Arm emulation support and a slew of the modelled devices.

[Last year](https://www.linaro.org/blog/next-qemu-development-cycle/) while discussing our development plans for QEMU I shared some stats showing how important a role we play in QEMU development. With the 8.2 release it looks like we have just overtaken Red Hat’s excellent record in supporting the project.

### Top changeset contributors by employer (Nov 2022 to Nov 2023)

<br>

<div align="left">
    <table style="border: 1px solid; border-collapse: collapse; margin-right: calc(30%); width: 100%; margin-left: calc(0%);">
        <tbody>
            <tr>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;Linaro</span></p>
                </td>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;2762 (30.6%)</span></p>
                </td>
            </tr>
            <tr>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;Red Hat</span></p>
                </td>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;2565 (28.5%)</span></p>
                </td>
            </tr>
            <tr>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;Individual Contributors</span></p>
                </td>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;554 (6.1%)</span></p>
                </td>
            </tr>
            <tr>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;IBM</span></p>
                </td>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;297 (3.3%)</span></p>
                </td>
            </tr>
            <tr>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;Ventana Micro Systems</span></p>
                </td>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;206 (2.3%)</span></p>
                </td>
            </tr>
            <tr>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;Academics</span></p>
                </td>
                <td style="color: rgb(0, 0, 0); border: 1px solid; width: 50%;">
                    <p><span style="color: rgb(0, 0, 0);font-size: 11pt;">&nbsp; &nbsp;196 (2.2%)</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p style="text-align: start;color: rgb(0, 0, 0);"><br></p>

# What’s new in 8.2

While every QEMU release brings [new features to Arm](https://wiki.qemu.org/ChangeLog/8.1#Arm) this release is the culmination of several QEMU releases to bring FEAT_RME emulation to QEMU. The Realm Management Extension (RME) is a key component of Arm’s Confidential Compute Architecture (CCA). The additional realm state allows guests to run in such a way that even the non-secure host cannot access any area of the Realm unless explicitly shared by the Realm itself. In common with other big features we’ve implemented previously (e.g. [SVE](https://www.linaro.org/blog/sve-in-qemu-linux-user/), [TrustZone](https://www.linaro.org/blog/arm-trustzone-qemu/)) there is more to implement than just the feature itself. When the feature specifies it depends on other features being present we have to backfill those in our support matrix. As FEAT_RME was only introduced with the Arm v9 architecture, we have to ensure QEMU can now model that baseline. If you want to see the full list of what we had to implement feel free to peruse our [JIRA cards](https://linaro.atlassian.net/browse/QEMU-466).


{% include image.html path="/assets/images/content/arm-cca-software-architecture.png" alt="Diagram of the ARM security architecture showing the various security states and exception levels interact." %}

For now we only support software realms (securely interfacing realm guests to real HW involves a lot more work). As the feature is so new we still recommend that those who wish to experiment with it track QEMU’s master branch so they can get the benefit of fixes as soon as they are patched. 

## Overview of QEMU command-line options for RME

Because of the restricted support described above, FEAT_RME is considered experimental in QEMU and thus not enabled by default.

FEAT_RME itself is enabled with “-cpu max,x-rme=on”.  In addition, EL3 and EL2 must be enabled for the board model. Per the figure detailing the CCA Software Architecture, the RMM runs in EL2 and the TF-A monitor runs in EL3.

Thus the basic cpu and machine configuration are done with

```
qemu-system-aarch64 \
 -M virt,virtualization=on,secure=on,gic-version=max \
 -cpu max,x-rme=on ...
```

## Overview of software stack for QEMU and RME

Support for QEMU and RMM are still being staged into upstream Trusted Firmware, and support for guest Realms is still being staged into upstream KVM and QEMU.  A complete set of instructions for building the complete software stack from Linaro repositories has been [published separately](https://linaro.atlassian.net/wiki/spaces/QEMU/pages/29051027459/Building+an+RME+stack+for+QEMU), and will be kept up-to-date.

## Example of booting a Realm Guest

A [set of binaries](https://fileserver.linaro.org/s/Grjs6kSkBYd8DkX) has been created using the above instructions as a demonstration.  Unpack the tar file and execute “rmm-example/run-host.sh”:


{% include image.html path="/assets/images/content/rmm-example-run-host.sh.png" alt="Picture of QEMU running with tabs for the host and realm consoles as well as the secure and non-secure serial ports." %}

The firmware and the kernel’s earlycon will log to serial0, the secure monitor will log to serial1, and the host and realm guests consoles will be on HostConsole and RealmConsole respectively.

Log into the host as “root” with no password, then execute “/mnt/run-guest.sh”.  The debugging that is enabled within the firmware will immediately begin logging about the realm creation:

{% include image.html path="/assets/images/content/mnt-run-guest.sh.png" alt="Picture of QEMU continuing to run, this time with the serial port outputting diagnostics from the Realm Machine Manager (RMM)" %}

Within a few minutes, the guest will boot:

{% include image.html path="/assets/images/content/guest-will-boot.png" alt="Picture of QEMU continuing to run, this time with the Realm Console showing the login prompt of the Realm image that has been started." %}

Again, one may log in as “root” without password.  The guest filesystem is minimal, so there is really very little to see at this point.  However, it does demonstrate a successful boot to Realm user-space.  Hooray!

Run “halt” on the guest and then host to shutdown cleanly, or abruptly kill the entire emulation by closing the window or “quit” from the QEMU monitor on stdin.  🙂

# Final Thoughts

The work to enable FEAT_RME supports a number of aims of the [core QEMU team](https://linaro.atlassian.net/wiki/spaces/QEMU/overview) within Linaro. We upstream useful architectural features so the wider open source community can experiment with them before general availability of hardware. We also provide reference platforms for the rest of Linaro to develop software. You can expect more activity over the next year as our Linaro colleagues work to ensure all layers of the software stack are ready for real silicon when it arrives. As what is going on inside the real hardware will be inscrutable by design I’m sure engineers will also appreciate having the ability to peek inside the inner workings of QEMU when it comes to the inevitable debugging phase of the project.

As we look to the new year we still have a number of upcoming features to implement for the architecture as well as improvements for using QEMU in early modelling and bring-up tasks. You can see our upcoming roadmap on the [team's project page](https://linaro.atlassian.net/wiki/spaces/QEMU/overview). We’ll see you on the [qemu-devel mailing list](https://lists.gnu.org/archive/html/qemu-devel/)!