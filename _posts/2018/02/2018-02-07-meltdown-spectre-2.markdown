---
author: Joakim Bech, Ard Biesheuvel, Mark Brown, Daniel Thompson
date: 2018-02-07 11:00:00.000
title: 'Implications of Meltdown and Spectre &#58; Part 2'
description: >-
  The basis of the Meltdown and Spectre attacks is to make use of speculative
  execution, out-of-order execution, branch predictors and caches, all features
  found in modern CPUs.  These features all aim to increase performance and to
  avoid latencies in the pipeline.  They work in conjunction with each other in
  quite complex ways.
categories:
  - blog
published: true
tags: 'Meltdown, Spectre, Arm, OP-TEE, TrustZone'
keywords: >-
  Meltdown, Spectre, Arm, OP-TEE, TrustZone, Speculative execution, branch
  predictor, CPU cache, Set-Associative-Cache, side channel attack, Simple Power
  Analysis, Differential Power Analysis, crypto,
image:
  featured: true
  path: /assets/images/blog/meltdown-spectre-logo.jpg
  name: meltdown-spectre-logo.jpg
layout: post
---


In the [first blog post](https://www.linaro.org/blog/meltdown-spectre/) we gave an introduction to the techniques used by a CPU to be able to maximize performance and utilization. Then we had a quick introduction to side channel attacks where we looked at the Flush + Reload and the Prime + Probe cache time attacks. Finally we also looked into how the Meltdown and Spectre attacks works in practice. In this second part we are going to look more into how Spectre and Meltdown impact various components we are working with in Linaro.

# OP-TEE

OP-TEE is an open source *Trusted Execution Environment*. In short it is a secure OS running in a separate hardware assisted secure domain, often called secure world or simply "the *TEE*". On Arm architectures, TEE implementations leverages the Arm [TrustZone technology](https://www.arm.com/products/security-on-arm/trustzone) to develop secure OSes.

Conceptually TEEs works in a similar way to traditional OSes, that is you will have a *privileged part* (kernel) and a *non-privileged part* (user space). The difference here is that they are both running secure mode separately from the normal OS. So, what we are talking about here is mainly the green part in the image below, but it will also overlap with the Secure Monitor which is also running in secure world. The Secure Monitor is responsible for entries and exits to and from secure world.

{% include image.html name="trustzone-matrix.png" alt="TrustZone Matrix" %}

OP-TEE consists of code running both in non-secure world (in both Linux and user space) as well as secure world. The OP-TEE code running in non-secure world will be protected against Meltdown and Spectre by the "general" mitigations taking place from Linux point of view, i.e., *KPTI*, branch predictor invalidation etc. I.e., the mitigations that we talked about in the [previous blog post](https://www.linaro.org/blog/meltdown-spectre/). This means that there is no need for doing anything extra for non-secure OP-TEE components to protect them against Meltdown and Spectre.

It is a different story on the secure side. Since OP-TEE has been working with page tables similar to how it has been done in Linux, there was a need for page table isolation in OP-TEE as well in order to mitigate against the Meltdown attack. This has been implemented and was merged a couple of weeks ago and the patches for this can be found at our [security advisories](https://www.op-tee.org/security-advisories/) page. It should be noted here that it is [mainly Cortex-A75](https://developer.arm.com/support/security-update) that is affected by Meltdown and currently we are unaware of any OP-TEE devices running on a Cortex-A75. Having that said, we still decided to merge the page table isolation patches, since we think it raises security a notch and so far we haven't been able to tell any difference in performance when running our test cases.

For **Spectre variant 2** (*Branch target injection, CVE-2017-5715*) we have again been doing the same type of mitigations as in the non-secure environment and that is to invalidate the branch predictor when switching from non-secure to secure world as well as when going from user space (Trusted Application) to the kernel in the TEE. The invalidation taking place when switching to the secure state is done by the Secure Monitor. In OP-TEE we are typically using Arm Trusted Firmware when running on `Armv8-A` devices and therefore we are also using their Secure Monitor implementation. Arm have implemented mitigations for the attacks in Arm Trusted Firmware and you can read more about it in a section further down.

On `Armv7-A` devices, where we are using the Secure Monitor that comes with `TEE Core` (this is what the kernel code is being called in OP-TEE). We have updated the "v7" Secure Monitor from OP-TEE to also invalidate the branch predictor when going from non-secure to the secure state on `Armv7-A` devices. As mentioned we also had to invalidate the branch prediction, when a Trusted Application invokes a syscall down to TEE Core. It is worth mention that unlike the Meltdown case, we have a mix of Arm cores being affected by the Spectre attacks. Because of that we have added compile time flags as well as runtime configuration in OP-TEE to only enable the mitigation when it is necessary. All mitigation patches for Spectre variant 2 were also merged a couple of weeks ago and again, all details about them can be found on our security advisories page at [op-tee.org](https://www.op-tee.org).

This leaves us with **Spectre variant 1** (*Bounds check bypass, CVE-2017-5753*). Out of the three attacks this is probably hardest one to find robust mitigations for. The main reason for that is because the developers needs to do manual inspection to find areas in the code that potentially can be vulnerable to the attack. As one can imagine, this is not trivial and it is error prone and the code base needs to be re-checked for this on regular basis. Since the attacks surfaced, people have started to develop tools to assist in finding vulnerable areas. The OP-TEE team have been guinea pigs to such a tool, which is being developed by an engineer from Red Hat (Nick Clifton). There are no guarantees, but we believe that the Red Hat engineer will publish the tool when initial bugs have been smoked out. It is here we are with OP-TEE right now, i.e., we are manually looking at the code in combination to trying out tools like the one just mentioned. So far we have not been able to find any vulnerable sections, but we still have more work to be done here before having some confidence saying that there are no such vulnerable areas in OP-TEE (hopefully!).

## Are the any known Meltdown and Spectre attacks on OP-TEE?

We are not aware of any Meltdown and Spectre attacks on OP-TEE, in fact we are not aware of any Meltdown and Spectre attacks getting meaningful results from **any** TEE. There has been various whitepapers and [talks](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2017/december/34C3-Tool-Release-Cachegrab/) about general cache related attacks on TrustZone in the past. But what we currently know about such attacks, is that besides seeing some patterns in some cache lines after being running code on secure side, they have not been able to get any useful information out of it.

Although TrustZone **is** affected by Meltdown and Spectre, we believe it is much harder to put the exploits in practice on secure side. One reason is that the SoC/OEMs are in full control of all software running on secure side on their devices (we still haven't seen any "appstore" for Trusted Application and it is probably quite unlikely that we will ever see one). I.e., all software on the secure side, the monitor, the TEE and the Trusted Applications are all signed (and verified during boot time or later when the system is up and running). Compare that a normal OS environment where anyone can write a program poking on who knows what. Another reason is that the execution path to secure side is "longer" and therefore we will get more "noise" in terms of cache lines being used by the code running between the attacker and the victim.

Finally (with risk of being repetitive), all information about mitigation patches etc for OP-TEE can be found at our [security advisories](https://www.op-tee.org/security-advisories/) page at optee.org.

# Arm Trusted Firmware

Arm Trusted Firmware has not, at present, been observed to contain code patterns vulnerable to **Spectre variant 1** (*Bounds check bypass, CVE-2017-5753*) attacks. Similarly it can never be vulnerable to *Meltdown** (*Rogue data cache load, CVE-2017-5754*) attacks, because it runs at `EL3` and therefore does not share a translation regime with code running lower exception levels.

That leaves only **Spectre variant 2** (*Branch target injection, CVE-2017-5715*) attacks and, for these attacks, Trusted Firmware is responsible not only for protecting itself from attack, but it also has a key role to play implementing other mitigations, including  for normal world kernels.

The technical changes to Arm Trusted Firmware are described in [Security Advisory TFV 6](https://github.com/ARM-software/arm-trusted-firmware/wiki/ARM-Trusted-Firmware-Security-Advisory-TFV-6). The advisory clearly highlights the specific code changes needed, which is useful both for backporting and for auditing any code you receive from other parties. The specific workaround varies significantly between different micro-architectures but whatever workaround is required the Trusted Firmware is modified so that the branch target buffers are invalidated whenever a core traps into `EL3`. This defends Arm Trusted Firmware from attack and additionally ensures that no normal world code can launch a Spectre variant 2 attack upon secure world code. No further changes to the secure world OS are required to mitigate threats from normal world, although TEEs can be further engineered to harden themselves against attack from their own trust applications.

Given these changes, the Linux kernel can rely on every trap to EL3 invalidating the branch target buffer simply as a side effect of Trusted Firmware protecting itself from the kernel! The kernel can be extended to make PSCI calls at key points in the kernel in order to mitigate Spectre variant 2 attacks and this implies that even systems that do not run any code in secure world must update Trusted Firmware if the kernel mitigation is effective. Whilst running `PSCI_VERSION` is sufficient to deploy the workaround a more efficient alternative has been made available called `SMCCC_ARCH_WORKAROUND_1`. This alternative uses a specially crafted ABI to dramatically reduce the entry/exit cost.

 At the time of writing, [https://git.kernel.org/pub/scm/linux/kernel/git/arm64/linux.git/log/?h=kpti](https://git.kernel.org/pub/scm/linux/kernel/git/arm64/linux.git/log/?h=kpti) contains mitigation patches that work by calling `PSCI_VERSION`. Unfortunately the kernel cannot detect whether or not Trusted Firmware contains the appropriate security fixes and cannot warn users in situations where the kernel mitigations are ineffective. The only way to be sure is to adopt latest version or audit your firmware for the presence of a backport.

**Update**: *Since this article was first published, kernel code to exploit* `SMCCC_ARCH_WORKAROUND_1` *has been included in both the mainline kernel (from `v4.16-rc1`) and [https://git.kernel.org/pub/scm/linux/kernel/git/arm64/linux.git/log/?h=kpti](https://git.kernel.org/pub/scm/linux/kernel/git/arm64/linux.git/log/?h=kpti). `SMCCC_ARCH_WORKAROUND_1` is better optimized and permits better error reporting by the kernel if it is booted on a mis-configured system. It is strongly recommended to adopt the newer approach.*

# Traditional bootloaders and runtime firmware

## UEFI

UEFI firmware execution consists of two distinct phases, the **boot** phase and the **runtime** phase.

In the boot phase, it executes in a flat mapping of memory with no privilege separation between UEFI drivers or applications and the core. Given that UEFI does not keep any secrets (even with secure boot enabled, all crypto that goes on inside UEFI itself involves non-secret RSA public keys), there is no point in going to great lengths to infer anything from the state of the caches, simply because the same data can be read directly from memory. This means UEFI itself is not affected by Meltdown or Spectre.

However,  some parts of UEFI remain in memory after the OS boots, and can be invoked by the OS itself, or via the OS by user applications. The primary purpose of these **UEFI Runtime Services** is to manipulate UEFI variables that store boot preferences, to access the hardware clock or to install firmware updates. These services always execute at the same exception level as the OS, which means that any mitigations for Meltdown or Spectre variant 2 (which take place when changing exception levels or switching between tasks) should be sufficient to ensure that the execution context where these services live is sufficiently protected.

That leaves Spectre variant 1. Given that the UEFI runtime services interact with structured data (e.g., authenticated variable updates, signed capsules), it is likely that implementations of UEFI will require changes of the same nature as the OS, i.e., speculation barriers in boundary checks. This requires changes to the firmware sources and rebuilds of the images, and a high level of trust on the part of the OS that the resulting binary blobs are safe.

In the meantime, we can mitigate this threat by taking an approach similar to the Kaiser/KPTI solution for Meltdown, which is to unmap the entire kernel while UEFI runtime services are in progress. Given that UEFI does not keep any secrets itself, there will simply be no secret left to steal in this case, making any speculation attacks pointless. [Patches](https://www.spinics.net/lists/arm-kernel/msg630851.html) implementing this have been proposed for the Linux kernel, and are under discussion.

## U-Boot

*U-Boot* is a bootloader used in many embedded systems. Since it is a simple bootloader which does not support applications and does not continue running after handing over execution to the next stage of boot these security issues are not relevant to it.

# Linux kernel

The Linux kernel has a key role to play in addressing the issues raised by Meltdown and Spectre. A number of patch sets with both architecture specific fixes and fixes that apply to all architectures are currently in various stages of development and release.

To mitigate **Meltdown** (*Rogue data cache load, CVE-2017-5754*) Arm implemented kernel page table isolation for arm64 kernels. Kernel page table isolation means that kernel pages are not mapped when executing code at EL0 preventing reads from kernel memory during speculative execution.

To mitigate **Spectre variant 2** (*Branch target injection, CVE-2017-5715*) current implementation relies upon Arm Trusted Firmware being updated to clear the Branch Target Buffer as a result of trapping to EL3 to get the `PSCI_VERSION`.  It is likely that the kernel mitigation will be improved over time. In particular replacing `PSCI_VERSION` with a custom command to allow for optimized `EL3` entry/exit whilst also allowing the kernel to detect when it cannot effectively mitigate the threat. Additionally, on some cores, it is possible to invalidate the branch target buffer without trapping to `EL3` leaving additional scope for optimization within the kernel. The PSCI mitigation will remain needs for cores such as Cortex-A73 and Cortex-A75 which require the workaround code run at `S-EL1`.

The mitigation for **Spectre variant 1** (*Bounds check bypass, CVE-2017-5753*) is significantly different. Firstly the nature of this attack must be fixed at multiple places within the kernel, and secondly the fixes are typically architecture neutral. There are already architecture neutral patches available to prevent eBPF being used to launch variant 1 attacks. This is perhaps the most important of the variant 1 fix since dynamically generating vulnerable code using eBPF was the easiest attach to launch. Many further architecture neutral variant 1 fixes can e expected throughout the v4.16 development cycle (and beyond).

As with all security relevant fixes the goal is to get these patches into the LTS kernels maintained by Greg Kroah-Hartmann as they are ready. For the Arm specific fixes this backporting work is being done by Linaro engineers.  It is strongly recommended that products in the field be kept up to date as much as possible with the latest LTS releases.

Due to the urgency surrounding these particular issues some members will want to start integrating fixes into their products prior to them being ready for LTS. In order to facilitate this we are maintaining a git repository https://git.linaro.org/kernel/speculation-fixes-staging.git/. This contains branches for each individual patch series for each kernel version, plus branches for each of v4.4, v4.9 and v4.14 with all the fixes for each kernel merged.

**Update**: *Since this article was first published, the kernel mitigations for **Sprectre variant 2** have been optimized to use* `SMCCC_ARCH_WORKAROUND_1` *instead of* `PSCI_VERSION` *and these are included in both the mainline kernel (from `v4.16-rc1`) and [https://git.kernel.org/pub/scm/linux/kernel/git/arm64/linux.git/log/?h=kpti](https://git.kernel.org/pub/scm/linux/kernel/git/arm64/linux.git/log/?h=kpti). It is strongly recommended to adopt the newer approach.*
