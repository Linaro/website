---
author: greg.bellows
categories:
- blog
comments: true
date: 2015-01-22 10:57:37
description: Since the last post, the bulk of the ARM CPU Security Extension support
  has made it to upstream QEMU. Although the functional support is now available upstream,
  it is currently disabled while the details of the usage are ironed out
excerpt: Since the last post, the bulk of the ARM CPU Security Extension support has
  made it to upstream QEMU. Although the functional support is now available upstream,
  it is currently disabled while the details of the usage are ironed out
layout: post
slug: testing-qemu-arm-trustzone
tags:
- Core Dump
- arm
- qemu
- testing
- TrustZone
title: Testing QEMU ARM TrustZone
wordpress_id: 7787
---

# Testing QEMU ARM TrustZone

A while back we wrote about the [QEMU implementation of ARM TrustZone](/blog/arm-trustzone-qemu/), also known as ARM Security extensions support, and now that this work is being accepted into mainline QEMU we want to highlight some aspects about the usage model and testing of the functionality.

### Ongoing Work and Progress

Since the last post, the bulk of the ARM CPU Security Extension support has made it to upstream QEMU. Although the functional support is now available upstream, it is currently disabled while the details of the usage are ironed out. Specifically, command line options are being added to allow users to enable or disable the ARM Security extensions from the command line. This is especially important for maintaining backwards compatibility of existing machine models incorporating TrustZone enabled processors.

Achieving backwards compatibility and allowing easy future use of ARM TrustZone, we are introducing the following configuration changes:

  * The Security Extensions will be available only on machines supporting ARM1176, Cortex-A8, Cortex-A9, and Cortex A-15 CPUs.


  * The ARM Security extensions are currently only supported, and enabled by default, on the Versatile Express and the virt machine models. All other machine models will have the ARM Security extensions disabled by default.


  * A ‘-secure=on/off’ machine option is introduced to allow the override of the default security extension settings on the above supported machines. This option is unavailable on all other machine models. Disabling the security extension will restore the legacy behavior to no secure state.


  * Using the -kernel command line option to run Linux on an ARM Versatile Express machine model will result in it booting into the secure state by default. If undesirable, the user may disable the security extension as described above.


  * Use of the -kernel command line option to run Linux on a QEMU virt machine model will result in it booting into non-secure state by default. If undesirable, the user may disable the security extension as described above.


  * Use of the -bios command line option on either the ARM Versatile Express or QEMU virt machine models will result in the machines starting up in secure state,  from cold reset, as defined by the ARM architecture. If undesirable, the user may disable the security extension as described above. The -bios command is the preferred approach for running TrustZone enabled environments.

### Testing Goals

Initially, the ARM Security extensions support within QEMU will have limited usage and exposure. This limited exposure makes the security functionality more susceptible to breakages going unnoticed. For this reason, it is important to have a well-defined set of tests to verify proper operation as well as to prevent future regressions.  We are developing a standalone test guest binary, which validates the QEMU security extension functionality.

As part of our overall mission to improve test coverage of open-source technologies, Linaro is committed to establish a testing framework for the implemented functionality to guard against functional regressions and defend the upstream code.

# Testing challenges

### Test Size

So how do we verify that the QEMU TrustZone support is working properly?  A TrustZone environment includes multiple distinct parts including a secure bootloader, secure and non-secure operating systems, a non-secure root file system, a Trusted Execution Environment and both secure and non-secure applications. As you could imagine, using such an environment for test purposes would be fairly involved and fraught with variances that ultimately compromise the repeatability of the testing. Additionally, from a practical point of view, the number of distinct parts to be coordinated would likely discourage regular testing.

Given the above, our goal is to balance the complexity of creating a sufficient QEMU TrustZone test infrastructure without the complexity and burden of using a typical TrustZone environment.

### Divergence From the Typical Use

Emulating TrustZone enabled environments will typically rely on using the -bios command line option. This option allows machine emulation to begin at reset by loading and executing a raw image at a known starting address. The -bios command is a more low-level command giving users complete control of the first instruction executed when the CPU comes out of reset. This is in contrast to the on ARM more typically used -kernel command-line option, which skips over the initial machine reset by using its own internal bootloader to more conveniently jump right to the high-level OS.

By using the -bios command line option, control of the bootloading stage is left up to the user just as is done on real hardware. This allows a true secure environment to be emulated in QEMU by allowing both secure and non-secure bootloading stages as directed by the user. This more closely emulates actual ARMv7 hardware, which starts in secure PL1 mode making it ideal for loading the initial secure bootloader.

The below diagram depicts one possible secure bootloader environment.

{% include image.html name="Emulating-TrustZone-1.jpg" alt="Emulating-TrustZone-1"%}

# Test Infrastructure

In a typical ARM TrustZone environment, a bootloader is responsible for loading and initiating execution of the secure world software and possibly the non-secure world software as well. Most often, secure and non-secure software are separate binary images that are loaded into one or more ROM locations. The bootloader is usually sophisticated enough to perform the required amount of device initialization and image loading.


### Test Image Layout


Given the standalone nature of the QEMU ARM TrustZone test, it would be overkill to use something as complicated as a bare-metal bootloader. Instead, to simplify the testing setup, we construct a single test binary by concatenating separate secure and non-secure images into a single file. Each of the images have fixed offsets in the binary file and are linked at a known starting virtual addresses for easy loading and execution of each image. The benefit of using a single binary is that QEMU can be invoked by simply using the -bios command line option to point to our single test binary.

{% include image.html name="Test-Image-Layout-2" alt="Test-Image-Layout-2.jpg" %}

### Test Image Loading


As defined by the ARM architecture, the CPU resets in the secure world and executes code from RAM at a predefined physical address. By loading the single binary into an execute-in-place flash device in QEMU mapped at the reset address, execution begins in the secure image which contains a small bootloader responsible for initializing the secure world. The secure world then initializes monitor mode which makes it possible to transition between the secure and non-secure worlds. The bootloader is also responsible for loading the non-secure image as well as eventually booting the non-secure software by going through monitor mode.

### Test Case Components

The QEMU TrustZone test comprises 3 primary components.

{% include image.html name="Test-Case-Components-qeum-trustzone-3.jpg" alt="Test-Case-Components-qeum-trustzone-3" %}

#### Secure world component


The primary responsibility of the secure world component is to facilitate the execution of test cases directed at it. This is accomplished through dedicated supervisor (SVC) and monitor mode (SMC) exception handlers with predefined opcodes for routing and executing test cases supplied from the non-secure world. In addition, the secure world component includes the primary bootloader and hardware initialization for the secure world as well as abort handlers for catching and reporting expected and unexpected exceptions.

The only tests included and directly executed by the secure world component are preliminary checks for security extension support and validation of the initial processor state.  Otherwise, the majority of the test cases are defined in the non-secure user mode component and dispatched to the secure world. The secure world infrastructure is capable of executing tests in either supervisor (PL1) or user (PL0) mode.


#### Monitor component


The primary responsibility of the monitor component is to handle transitioning between the secure and non-secure worlds, just like in a real Trusted Execution Environment. Transitions are performed through the use of predefined opcodes for directing SMC exceptions.


#### Non-secure world component


The non-secure world component is the main test component and contains the bulk of the actual test cases. The non-secure world includes both supervisor mode (PL1) and user mode (PL0) functionality.

The privileged functionality is responsible for non-secure world initialization and set-up. It also includes an SVC exception handler accepting predefined opcodes for initiating non-secure privileged operations and for forwarding secure world operation requests.

The unprivileged functionality consists of the suite of TrustZone test functions executed in the varying modes and states.


### Test Case Execution


As depicted below, all test functions originate as part of the non-secure user mode functionality. Each test function is dispatched to a specific processor mode and secure state from non-secure user mode through a series of SVC and SMC calls. The test function dispatching allows data to be passed to the function as well as allowing status to be returned to the origin.


{% include image.html name="non-secure-user-mode-quem-trustzon-4.jpg" alt="non-secure-user-mode-quem-trustzon-4" %}

This framework is intended to resemble the real-world usage while validating that QEMU’s behavior matches the expected ARM Security extensions definitions. The approach both exercises the newly added functionality and stresses transitioning between the two worlds and their respective processor modes.

Test execution behaves as you might expect with a Trusted Execution Environment (TEE) by initiating secure operations from a user mode application. The executed test functions validate QEMU’s implementation of the TrustZone features while utilizing the features themselves. Just like a Trusted Execution Environment, execution utilizes secure monitor calls for transitioning between the worlds. As well, TrustZone features are leveraged to keep these worlds isolated.

# Test Status


Currently, the test provides the necessary infrastructure for validating the proper operation of code executing in the secure and non-secure worlds. The infrastructure includes functionality for performing transitions between the worlds as well as utilities for verifying exception behavior. As well, the below set of tests are provided for testing certain TrustZone architectural features as well as to serve as an example.

<table class="table responsive-table">
<tbody>
<tr>

<td align="left" markdown="1">
**Test**
</td>

<td align="left" markdown="1">
**Description**
</td>

<td align="left" markdown="1">
**Variants**
</td>
</tr>
<tr >

<td align="left" markdown="1" rowspan="3" >Initial State Check
</td>

<td align="left" markdown="1">
Test that the processor supports the security extension
</td>

<td align="left" markdown="1" rowspan="3" >
</td>
</tr>
<tr >

<td align="left" markdown="1">
Test that the processor comes up in the expected processor mode
</td>
</tr>
<tr >

<td align="left" markdown="1">
Test that the processor starts in the expected secure state.
</td>
</tr>
<tr >

<td align="left" markdown="1">
P0_nonsecure_check_smc
</td>

<td align="left" markdown="1">
Tests that the smc instruction generates an undefined exception when executed in non-secure P0 state
</td>

<td align="left" markdown="1">

</td>
</tr>
<tr >

<td align="left" markdown="1">
P0_nonsecure_check_register_access
</td>

<td align="left" markdown="1">
Tests that read/write accesses from non-secure P0 state to secure registers generate an undefined exception
</td>

<td align="left" markdown="1">
SCR(R/W), SDER(R/W), MVBAR(R/W), NSACR(W)
</td>
</tr>
<tr >

<td align="left" markdown="1">
P0_secure_check_register_access
</td>

<td align="left" markdown="1">
Tests that read/write accesses from non-secure P0 state to secure registers generate an undefined exception
</td>

<td align="left" markdown="1">
SCR(R/W), SDER(R/W), MVBAR(R/W), NSACR(W)
</td>
</tr>
<tr >

<td align="left" markdown="1">
MON_check_state
</td>

<td align="left" markdown="1">
Tests that monitor mode is entered in the correct processor mode and has the correct state
</td>

<td align="left" markdown="1">
CPSR.M, CPSR.F, CPSR.I, CPSR.A
</td>
</tr>
<tr >

<td align="left" markdown="1">
MON_check_exception
</td>

<td align="left" markdown="1">
Tests that the monitor mode exception has the correct secure state depending on the executing secure state
</td>

<td align="left" markdown="1">
SCR.NS=0, SCR.NS=1
</td>
</tr>
<tr >

<td align="left" markdown="1">
MON_check_banked_registers
</td>

<td align="left" markdown="1">
Tests that the expected banked system registers are indeed banked.
</td>

<td align="left" markdown="1">
CSSELR, SCTLR, TTBR0, TTBR1, TTBCR, DACR, DFSR, IFSR, DFAR, IFAR, PAR, PRRR, NMRR, VBAR, FCSEIDR, CONTEXTIDR, TPIDRURW, TPIDRURO, TPIDRPRW
</td>
</tr>
<tr >

<td align="left" markdown="1">
P1_nonsecure_check_mask_bits
</td>

<td align="left" markdown="1">
Tests that the SCR AW/FW bits are honored on CPSR reads and writes
</td>

<td align="left" markdown="1">
CPSR(R/W)
</td>
</tr>
<tr >

<td align="left" markdown="1">
P1_nonsecure_novirt_behavior
</td>

<td align="left" markdown="1">
Test that smc calls are not restricted when SCR.SCD is set and no virtualization is enabled.
</td>

<td align="left" markdown="1">
SCR.SCD
</td>
</tr>
<tr >

<td align="left" markdown="1">
Other
</td>

<td align="left" markdown="1">
Test for the secure to non-secure world handshake. This test is provided to insure the mechanism is working properly as all other tests are liekly to fail otherwise.
</td>

<td align="left" markdown="1">

</td>
</tr>
</tbody>
</table>


### TrustZone QEMU Availability

#### Where can I TrustZone enabled QEMU?

Since the past blog post ([/blog/core-dump/arm-trustzone-qemu/](/blog/arm-trustzone-qemu/)), the QEMU ARM TrustZone support has been accepted into upstream QEMU. TrustZone enabled QEMU can now be obtained by cloning the official QEMU GIT repository at git://git.qemu.org/qemu.git.

The instructions in the previous blog post are still relevant and may be followed for executing secure images.


#### Where can I find the QEMU TrustZone validation test?


The early QEMU TrustZone tests are available via GIT. Once cloned, change directory to the newly created test root directory (qemu.tztest in the below example), the test can be configured and built for a given architecture. Running configure with no options builds the test for Versatile Express with a ARM Cortex A15.

```bash
    $ git clone <a href="https://git.linaro.org/virtualization/qemu-tztest.git" target="_blank">https://git.linaro.org/virtualization/qemu-tztest.git</a>

    $ cd qemu.tztest

    $ ./configure

    $ make

```

The tests can then be run with the following command from the root of the QEMU directory (not the test directory):

```bash

    $ ./arm-softmmu/qemu-system-arm -machine vexpress-a15 -cpu cortex-a15 -serial stdio -m 1024 -bios $PATH_TO_TESTDIR/arm/tztest.img

```
Alternatively, the test can be configured for and run on QEMU’s virt device:

```bash
    $ ./configure --arch=arm --plat=virt --cpu=cortex-a15

    ...

    $ ./arm-softmmu/qemu-system-arm -machine virt -cpu cortex-a15 -serial stdio -m 1024 -bios $PATH_TO_TESTDIR/arm/tztest.img

```


Currently, the tests are restricted to the ARM Versatile Express and Virt machine models, but can be expanded in the future to include other models.

### References


[1] [http://www.arm.com/products/processors/technologies/TrustZone/index.php](http://www.arm.com/products/processors/technologies/trustzone/index.php)

[2] [http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.prd29-genc-009492c/ch04s01s01.html](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.prd29-genc-009492c/ch04s01s01.html)

[3] [http://wiki.qemu.org/Main_Page](http://wiki.qemu.org/Main_Page)

[4] [https://github.com/jowinter/qemu-TrustZone](https://github.com/jowinter/qemu-trustzone)

[5] DDI0406C ARM® Architecture Reference Manual - ARMv7-A and ARMv7-R edition

[6] [/blog/core-dump/arm-trustzone-qemu/](/blog/arm-trustzone-qemu/)