---
author: linaro
categories:
- blog
comments: true
date: 2014-09-26 08:54:06
description: The blog post describes why introducing ARM TrustZone support in QEMU
  is important and the accompanying benefits. The post outlines the turbulent history
  behind the current development as well as an explanation of the added features.
excerpt: The blog post describes why introducing ARM TrustZone support in QEMU is
  important and the accompanying benefits.  The post outlines the turbulent history
  behind the current development as well as an explanation of the added features.
layout: post
link: /blog/core-dump/arm-trustzone-qemu/
slug: arm-trustzone-qemu
tags:
- Core Dump
- arm
- qemu
- Security Extensions
- TrustZone
title: ARM TrustZone in QEMU
wordpress_id: 6913
---

# ARM® TrustZone® in QEMU

Ever used an application on your smartphone or tablet that accesses security sensitive information such as banking, personal health information, or credit cards? The demand for mobile devices to do more and more is rapidly growing and includes increased security sensitive tasks. At the same time, malicious apps are also flooding mobile app stores in hopes of exploiting security holes to take advantage of unsuspecting users.

Can we rely on certain apps to protect our personal data and prevent undesired and unauthorized access? The current solution is to present users with warning dialogs when downloading applications and otherwise trust the rest of the system. This does not work for a number of reasons. First, existing protection and isolation principles may not work. Second, applications may not be implemented according to secure programming guidelines. Third, other users of devices (such as children or friends) may download malicious applications without the main user realizing it.

The proper solution is to improve the application development ecosystem so sensitive applications also become trusted applications and have the facilities to better protect our sensitive data. In order to promote such an ecosystem, it is important for these facilities to be readily available and widespread. Only then can data sensitive applications be made available in an efficient and timely manner.

The ARM architecture is dominant mobile CPU architecture and already has the technology for providing such security, it’s called TrustZone. Unfortunately, developing applications for TrustZone is challenging, requires access to expensive hardware development kits, and often involves signing NDAs and custom licenses.


### Tell me more about ARM TrustZone

{% include image.html name="Arm-TrustZone-Logo.png" alt="Arm-TrustZone-Logo" class="small-inline"%}

ARM TrustZone is the term used to describe the ARM Security Extensions. Available since ARMv6, the ARM Security Extensions define optional hardware security features for the ARM processor as well as other components of an ARM SoC.

The ARM Security Extensions divide execution into separate secure and non-secure worlds on a single SoC. This division allows for strict hardware-based isolation between software executing in the normal (non-secure) world and the secure world, without the need for dedicated security hardware. Typically, a device will run its rich conventional OS, like Linux or Android, in the normal world, while running a small vendor specific secure OS and its applications in the secure world.

The isolation between the normal and secure worlds is driven largely by an additional security state incorporated into many aspects of the architecture. A single secure state bit can determine the accessibility to certain system registers and memory as well as control where interrupts should be delivered. Similarly, devices on the bus may be configured as secure or nonsecure providing protection against undesired access.

While the above technology exists for enabling secure compute, it is typically only available on costly and difficult to obtain development hardware. As well, the software for accessing these features is often proprietary and tightly controlled by hardware vendors. Overcoming these restrictions is key to the growth of secure computing by making the technology more generally available. QEMU is the ideal solution to addressing these limitations.

### QEMU - Q What?

{% include image.html name="Qemu-logo.png" alt="Qemu-logo" class="small-inline" %}

QEMU, short for “quick emulator”, is very widely used open source machine emulator. QEMU is capable of emulating a variety of client architectures across a number of host architectures through the use of dynamic binary translation. In addition to being a standalone emulator the QEMU sources are also the foundation for other emulated environments. Most notably, the Android Emulator, which is shipped as part of the Android SDK, is based on an older stripped down version of QEMU (go [here](/blog/running-64bit-android-l-qemu/) for more details).

QEMU supports multiple emulation modes including full-system emulation of an entire system and its peripherals, as an emulated guest machine on a given host. One example would be emulating a virtual ARM Linux system on an x86 host. Alternatively, QEMU supports user-mode emulation which allows a single execution binary compiled for one architecture to be executed on a different host architecture. For example, executing gcc compiled for x86 on an ARM host.

QEMU is open source and freely available, making it a cost-effective alternative to requiring actual hardware for development of secure software. Developers benefit from QEMU’s single system environment that utilizes familiar development and debug tools such as GDB.  Altogether, these conveniences allow for more efficient development and debug, resulting in quicker time-to-market solutions. Derivative technology, such as the Android Emulator, also benefits from the added features when based on the upstream version of QEMU.

### Adding ARM TrustZone to QEMU

#### Why should QEMU be trusted?

The primary goal of adding the security extensions support to QEMU’s ARM target is to allow for development of secure software without the need for dedicated hardware. With ARM Security Extensions support in QEMU, users could conveniently load their trusted secure world binary alongside a rich OS running in the non-secure world, allowing full interaction while debugging both environments.

{% include image.html name="quem-trusted.jpg" alt="quem-trusted" class="small-inline"%}

Developers can use the QEMU ARM Security Extensions to develop and work with Trusted Execution Environments (TEEs) that are likely to be the primary consumers of the added functionality. Secure applications can then be developed on the added TEEs without the need for dedicated hardware.

Linaro is currently working on running open-source TEE (OP-TEE) software on top of QEMU for two reasons. Firstly, to provide a concrete real-world use case. Secondly, to stress-test the added QEMU functionality to insure proper operation. Linaro is already engaged in efforts of developing an open source TEE solution that will be a likely candidate. More details about the OP-TEE work can be found [here](/blog/op-tee-open-source-security-mass-market/).

To reiterate, the addition of the ARM Security Extensions to QEMU allows for the coexistence of separate secure and non-secure software where QEMU emulates the architectural facilities that bridge the two worlds.

#### Can QEMU be trusted?

QEMU has made advances in supporting some of the latest ARM architectural features such as 64-bit and ARMv8-A, however, it still lacks support for the ARM Security Extensions. Attempts to utilize features such as the _smc_ instruction or secure registers will result in an undefined operation failure.

Just as the ARM Security Extensions extend the ARM architecture, they can similarly extend QEMU’s functionality. QEMU’s system register management functionality must be extended to track the additional security specific system registers and system register secure banks that allow for separate configuration of the secure and non-secure worlds. Support for the added _smc_ instruction and associated monitor exception mode must be added to allow software to transition between the secure and non-secure worlds. Additionally, QEMU’s memory management functionality must be extended to allow tracking and protection of secure memory accesses across the system. Lastly, QEMU’s ARM interrupt facilities must be extended to control accessibility to the interrupt controller as well as to enable secure interrupt grouping.

### Turbulent development history

#### Initial development

{% include image.html name="quem-timeline.jpg" alt="Qemu - timeline" %}

From August of 2011 to June 2013, Johannes Winter of the Graz University of Technology started developing QEMU TrustZone changes to the GitHub QEMU repository.

Johannes’ initial changes included much of the ARM Security Extensions functionality seen in today’s latest patches. Changes included all the expected ARM Security Extension features such as secure system registers, monitor mode, the smc instruction and distinct secure world address spaces. Secure memory translation support was not included.

In addition to the processor extensions, Johannes patches also included infrastructure and support for the ARM TrustZone TZC380 and BP147 peripheral controllers, virtualization register and exception support as well as extensions to GDB support for debugging secure registers. ARM GIC security extensions were not included.

The code evolved over its two year development period but never made it into upstream QEMU. Although considered experimental and a work-in-progress, Johannes work has become the foundation for ongoing emulated ARM trusted environment development.

#### Version 1 - Samsung’s contributions

Six months after Johannes’ final committed work, Sergey Fedorov and Svetlana Fedoseeva from Samsung submitted patches for review based on Johannes’ final changes. While the patches mostly paralleled Johannes’ final work there were slight differences.

The most significant of the changes to Johannes’ initial work was the redesign of the mechanism for selecting between the system registers banks. Rather than promote Johannes’ explicit bank access approach, Samsung adopted an active register mechanism that would context switch the banked registers on secure state change. This approach would eventually be criticized during review for its added overhead. In addition, certain functionality from Johannes’ final work was omitted including support for the TrustZone peripheral controllers and GDB secure register support.

Shortly after the initial request for comments, Samsung orphaned the patches leaving the effort unmaintained.  Details on Samsung’s v1 patches can be found [here](http://lists.nongnu.org/archive/html/qemu-devel/2013-12/msg00261.html).

#### Version 2 - Linaro gets involved

In March of this year, Linaro began evaluating the pieces left behind by Samsung in part due to Qualcomm’s interest in having ARM Security Extensions support in QEMU. Corrections were underway to address prior feedback on Samsung’s review comments with hopes of sending version 2 of the TrustZone patches out for review. The most significant effort would be addressing the secure banked system register mechanism.

At the beginning of May of this year, Edgar Iglesias from Xilinx sent a set of patches out for review containing changes preparing for modeling of ARMv8-A EL2/EL3 support in QEMU. The changes primarily included infrastructure support for extending the number of supported exception levels in AArch64. Although minimal, there was slight overlap in the naming of and method for accessing common security related resources.

To Linaro’s surprise and shortly before Linaro’s version 2 patches were ready, Fabian Aggeler, a student from ETH Zürich beat Linaro to the punch and sent out for review his own follow-on to Samsung’s patches.

It was no surprise that Fabian’s changes were similar to Linaro’s as we were both addressing the same review feedback. The primary difference in the changes was the design used for managing and addressing the secure banked system registers. After consideration and consultation within the QEMU community, the decision was made to move forward with Fabian’s approach. Ironically, the approach is very close to Johannes’ original approach. In addition, Fabian also made changes around the ongoing AArch64 changes made since Samsung’s patches. Details on Fabian’s v2 patches can be found [here](http://lists.nongnu.org/archive/html/qemu-devel/2014-05/msg02522.html).


#### Version 3 - Linaro takes over

Moving forward, Linaro embraced Fabian’s changes, and accepted the role of reviewing the ongoing work by both Fabian and Edgar. After receiving extensive comments on his version 2 patchset, Fabian would eventually submit version 3 for review, but with a caveat. Fabian needed to relinquish ownership of the TrustZone patches so he could concentrate on school work. Committed to seeing the TrustZone functionality in QEMU, Linaro stepped up and took over Fabian’s patches. Details on Fabian’s v3 patches can be found [here](http://lists.nongnu.org/archive/html/qemu-devel/2014-06/msg02558.html).

In the meantime, Edgar was able to get his first ARMv8-A EL2/EL3 patchset approved and committed upstream. This was shortly followed by a second patchset enabling certain aspects of the ARMv8-A EL2/EL3 exception model. Details on Edgar’s approved patches can be found [here](http://lists.nongnu.org/archive/html/qemu-devel/2014-05/msg05035.html).


#### Version 4 & 5 - Linaro’s contributions


Today, development is ongoing, with Linaro awaiting review comments on version 4 of the original patchset. The patchset primarily consists of fixes for feedback on the version 3 patches. Not far behind, version 5 is underway and includes minor fixes discovered in testing and will address version 4 feedback. It is targeted at being the upstream version. Details on Linaro’s v4 patches up for review can be found [here](http://lists.nongnu.org/archive/html/qemu-devel/2014-06/msg07347.html).

As well, Edgar’s development is still underway as he is wrapping up his second set of ARMv8-A EL2/EL3 changes, which are still being monitored and coordinated with Linaro’s changes. Fabian and Sergey have actively been commenting on the outstanding changes. Details on Edgar’s latest patches can be found [here](http://lists.nongnu.org/archive/html/qemu-devel/2014-08/msg02858.html).


#### Future updates and ongoing work


In addition to the above processor security extension development, both Edgar and Fabian have been developing QEMU GIC security extensions functionality. Fabian has submitted his patches to the QEMU working group and Linaro has agreed to take ownership of the patches to see them through.

In addition to the future GIC work, Linaro will continue to pursue a full QEMU TrustZone solution.


### TrustZone QEMU availability




#### Where can I find it?


The latest QEMU TrustZone support is available in the below Linaro git repository:

[https://git.linaro.org/virtualization/qemu-tz.git](https://git.linaro.org/virtualization/qemu-tz.git)

To acquire a buildable version of QEMU:

```bash
    $ git clone https://git.linaro.org/virtualization/qemu-tz.git --branch qemutz
```



#### How do I build it?


To build the QEMU (from the QEMU root directory):

```bash
    $ ./configure --target-list=arm-softmmu
    $ make
```


**How do I run it?**

In order to take advantage of QEMU’s security extensions, you have to have an image capable of providing a secure and non-secure contexts. Without this, it is not possible to take advantage of the TrustZone features. If you are interested in checking whether the TrustZone enabled QEMU still works, take a stab at booting your favorite ARM 1176 or Cortex-A8/A9/A15 Linux kernel as follows from the QEMU root directory:

```bash
    $ ./arm-softmmu/qemu-system-arm -kernel $PATH_TO_KERNEL/zImage -M vexpress-a15 -cpu cortex-a15 -dtb PATH_TO_DTB/vexpress-v2p-ca15-tc1.dtb -m 1024 -append 'console=ttyAMA0,38400n8' -serial stdio -initrd $PATH_TO_INITRD/initrd.img
```


**How do I run a secure image?**

In order to take advantage of QEMU’s support for the ARM Security Extensions, different command line options are used to start the user off in a secure PL1 mode. As mentioned earlier, the -bios command line option is used to initiate execution of a raw binary image starting at address 0x0 in a secure PL1 mode. This option replaces the standard options used when booting a standalone OS kernel, such as -kernel, -dtb, and -initrd. Support of the -bios option is currently limited to ARM Versatile Express models using Cortex A9 or A15 processors.

```bash
    $ ./arm-softmmu/qemu-system-arm -bios $PATH_TO_IMAGE/image -M vexpress-a15 -cpu cortex-a15 -m 1024 -append 'console=ttyAMA0,38400n8' -serial stdio
```

### References


[1] [http://www.arm.com/products/processors/technologies/TrustZone/index.php](http://www.arm.com/products/processors/technologies/trustzone/index.php)

[2] [http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.prd29-genc-009492c/ch04s01s01.html](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.prd29-genc-009492c/ch04s01s01.html)

[3] [http://wiki.qemu.org/Main_Page](http://wiki.qemu.org/Main_Page)

[4] [https://github.com/jowinter/qemu-TrustZone](https://github.com/jowinter/qemu-trustzone)

[5] DDI0406C ARM® Architecture Reference Manual - ARMv7-A and ARMv7-R edition


### Author


**Greg Bellows** and **Christoffer Dall**