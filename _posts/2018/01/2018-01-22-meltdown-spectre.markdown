---
author: joakim.bech
date: 2018-01-24T11:00:00.000Z
title: 'Implications of Meltdown and Spectre &#58; Part 1'
description: >-
  The basis of the Meltdown and Spectre attacks is to make use of speculative
  execution, out-of-order execution, branch predictors and caches, all features
  found in modern CPUs.  These features all aim to increase performance and to
  avoid latencies in the pipeline.  They work in conjunction with each other in
  quite complex ways.
categories:
  - blog
published: true
tags: 'Meltdown, Spectre, Arm, OP-TEE, Trustzone'
keywords: >-
  Meltdown, Spectre, Arm, OP-TEE, Trustzone, Speculative execution, branch
  predictor, CPU cache, Set-Associative-Cache, side channel attack, Simple Power
  Analysis, Differential Power Analysis, crypto,
image:
  featured: true
  path: /assets/images/blog/meltdown-spectre-logo.jpg
  name: meltdown-spectre-logo.jpg
layout: post
---
<div class="col-sm-6" markdown="1">
# Implications of Meltdown and Spectre

By now everyone has heard about [Meltdown](https://meltdownattack.com/) and [Spectre](https://spectreattack.com/), but let us try to discuss what it really means in practice and also how it could potentially affect secure domains like [TrustZone](https://www.arm.com/products/security-on-arm/trustzone). The basis of the Meltdown and Spectre attacks is to make use of speculative execution, out-of-order execution, branch predictors and caches, all features found in modern CPUs. These features all aim to increase performance and to avoid latencies in the pipeline. They work in conjunction with each other in quite complex ways. Let us go over them one by one to get a better understanding of the essence of Meltdown and Spectre.
</div>
<div class="col-sm-6" markdown="1">
{% include media.html media_url="https://youtu.be/rGwgOOSwXBY" %}
</div>

<div class="col-md-12"><hr></div>

# Speculative execution

In short, [*speculative execution*](https://en.wikipedia.org/wiki/Speculative_execution) is about doing work that might happen in the future. If that execution does not happen in practice, then we will just throw the results away. As an analogy you can compare this with when you as a programmer are writing some code in general. You are using Git for example to make "snapshots" at various points (*git commit*, *git checkout -b foo* etc). So let’s for example say that you have a stable setup, but you want to explore something new. What do you do? You create another branch and start working with your new idea. If it turns out to be something good, then you can just commit the changes directly to the stable branch, but if it turned out to be a bad idea, then you can just throw away the work. The penalty you have to pay when throwing it away is that you have spent time on doing work that turned out to be unnecessary. Although a trivial example, it describes the basic ideas behind speculative execution. In a computer the CPU will do similar things. It fetches instructions and data where some instructions might take more time than others, so instead of just letting the CPU sit and wait for some instructions to complete, the CPU will continue doing some work by executing pending instructions. What that means is that code in branches that are not taken will eventually still execute due to the speculative execution done by the CPU.

{% include image.html name="speculative-execution.png" alt="Speculative execution" %}

Set aside for a moment that the compiler probably would remove `buffer[pos]` in the example above in a real scenario. With that in mind and albeit simplified, the example serves as a good example of what eventually could happen due to speculative execution.  Here it could be that `buffer[pos]` are being speculatively executed even though `pos` is greater than `limit`. In practice this would lead to "out-of-bounds" access by the speculative execution. This is the key thing in one of the Spectre attacks that we will discuss in more detail further down.

---

# Out-of-order execution

Another CPU feature to gain performance is the so called [*out-of-order execution*](https://en.wikipedia.org/wiki/Out-of-order_execution), which basically means that the CPU can re-order micro operations, so they run in parallel or sometimes even before the preceding instructions. So instead of running all instructions in a strict sequential order it will run them as soon as required resources are available.

{% include image.html name="out-of-order-execution.png" alt="Out-of-order execution" %}

As an example, in the code above it could be that the MOV instructions takes several cycles to complete and therefore instead of just stalling the pipeline the CPU will continue and execute the ADD and the SUB instructions since there are no dependencies on the MOV instruction (the registers R1 and R2 are not used by the instructions on lines 2 and 3).

---

# Branch predictor

The next CPU feature to mention is the so called [*branch predictor*](https://en.wikipedia.org/wiki/Branch_predictor). The reason for having a branch predictor is to make guesses whether a branch will be taken or not. This goes hand in hand with the speculative executions, since the speculative execution will execute instructions based on where the branch predictor believes the execution will continue. If it turns out that the branch predictor is wrong, then we have the situation where we have done some extra unnecessary work that needs to be thrown away. As one could imagine, a wrong guess by the branch predictor will introduce some extra delay. So without the branch predictor the CPU would just have been sitting idle and waiting instead of doing useful work.

{% include image.html name="branch-prediction-for-loop.png" alt="Branch Prediction For Loop" %}

A simple example would be a while loop. Let’s say it executes 100 times until the condition changes, branch prediction hardware would predict that the branch will be taken until suddenly it is not taken.  This means that for 100 loops of the code, the CPU correctly predicted the branch.  It also means that it predicted the final branch wrongly and had to throw away some work.

CPU branch prediction hardware can be pretty complicated, since the branch predictor as such consists of special hardware and there are a lot of different branch prediction strategies. It also depends on whether it is about doing prediction for direct branches, conditional branches as well as doing prediction for [indirect branches](https://en.wikipedia.org/wiki/Indirect_branch), where the latter is about trying to figure out a good target address to branch to. For branch target prediction the CPU keeps a history of whether branches were taken or not in in the past (Branch Target Buffer, BTB). You can think of it as an array with mappings from different PC (Program Counter) to addresses corresponding to the last address it jumped to from a particular PC. In the most simple way such a Branch Target Buffer could look like this:

{% include image.html name="branch-target-buffer.png" alt="Branch Target Buffer" %}

A thing to notice here is that this type of information is not bound to a particular process or [Exception Level](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.ddi0488d/CHDHJIJG.html), instead this is something that is shared across exceptions levels etc, with "whatever" code is running on the same core.

---

# Caches

The last CPU feature to mention before looking into Meltdown and Spectre is the [CPU cache](https://en.wikipedia.org/wiki/CPU_cache). There is no need to go into the nitty gritty details about caches and why we need them since caches are well established technology and known to most people. Without caches our systems would be incredibly slow, since it simply takes too much time to fetch information from main memory every time, so in a modern (high end) system it is a must to use them. More interesting is to know what ends up in the cache and why? Usually caches makes use of the [principle of locality](https://en.wikipedia.org/wiki/Principle_of_locality), in which data in memory that are going to be used, will probably use data in nearby memory, either in terms of time (temporal locality) or in terms of data corresponding to addresses nearby (spatial locality). The cache is also split into *cache sets* and divided into blocks, usually referred to as *cache lines*. Here we are talking about sizes in the order of 64 bytes per cache line or so (could be less, could be more). So what we have on an Arm system with [*Set-Associative-Cache*](https://en.wikipedia.org/wiki/CPU_cache#Two-way_set_associative_cache) is something like this:

{% include image.html name="set-associative-cache.png" alt="Set Associative Cache" %}

The cache sets are the horizontal rows, the columns are the *ways* and the individual cells are the cache lines. As depicted in the image (marked with blue color) we can see that the "*Index*" is use to select a certain cache set.

---

# Side channel attacks

This category of attack makes use of properties and behaviour occurring outside the code itself that leaks information that otherwise should not be observable. There are many different variants of this. Measuring the amount of time it takes to do certain operations is a common [side channel attack](https://en.wikipedia.org/wiki/Side-channel_attack). The textbook example is when you are verifying a password using *memcmp* (which by the way is a very bad idea). The way *memcmp* works is that it compares one byte at a time and as soon as they do not match *memcmp* will [return to the caller](https://github.com/gcc-mirror/gcc/blob/master/libiberty/memcmp.c#L30-L31). So it is easy to understand that by measuring the time it takes to do a password comparison in this way, you can see that it will take more time if it is a correct password being verified than verifying an incorrect password. By knowing this you could just simply try all possible characters (255 bytes) one by one. The call that takes the most amount of time is probably the one containing the correct character and then one can advance to the next character, rinse and repeat all the way until the entire password has been recovered. Below is an example of how this could look, here we have used the instruction [*rdtsc*](https://en.wikipedia.org/wiki/Time_Stamp_Counter) (x86) to do measurements. The correct password is "foo" and as we can see, when all characters are wrong it takes 486 cycles for the operation until *memcmp* returns. But, when you have the full (and correct) password it takes 561 cycles.

{% include image.html name="password-timing-attack.png" alt="Password Timing Attack" %}

[Source: [joakimbech.com - Timing Attack - Proof of Concept](http://jyx.github.io/blog/2014/02/02/timing-attack-proof-of-concept/)]

There are many similar techniques, for example Simple Power Analysis ([SPA](https://en.wikipedia.org/wiki/Power_analysis#Simple_power_analysis)) and Differential Power Analysis ([DPA](https://en.wikipedia.org/wiki/Power_analysis#Differential_power_analysis)), both of which measure the amount of power used at a certain point in time. This is a very powerful type of side channel attack that has been able to completely break the security in many devices. As it turns out,the cache can also be subject of side channel timing attacks, since the cache itself leaks information. If you measure the amount of time it takes to access data, you can figure out whether the data was already in the cache or not. We will look into a couple of techniques for this here.

---

## Prime and Probe

In this scenario, the attacker makes sure that he fills the cache completely with his own data to start with.

{% include image.html name="prime-probe-01.png" alt="Prime and Probe" %}

After this the attacker makes sure that the victim’s code runs. This could potentially be a more privileged domain doing some crypto operation or something else using some sensitive information. Since the attacker started out by filling up the cache completely, the CPU needs to replace data in some location in the cache. I.e, it will evict some of the attacker’s data from the cache and put the victim’s data there instead. What we have been doing so far is the "Prime" part of this attack. The second part, the “Probe” part takes place when we return back to the attacker’s code. What the attacker does is to start accessing their own data and by measuring the time it takes to access their data, it is possible to determine whether it was a cache hit (fast access) or cache miss (slow access).

{% include image.html name="prime-probe-02.png" alt="Prime and Probe" %}

The ones of interest here are the cache misses, since they will tell that the attacker’s data has been replaced with something else, i.e., the victim’s data. So in the blue line (the cache set) above the attacker will get a slow access to this cache line due to a cache miss.

---

## Flush and Reload

If we have access to shared memory the attacker can use a cache side channel attack similar to prime and probe, the major difference here is that both the attacker and the victim uses shared memory where the same memory is mapped into the attacker’s and the victim’s separate virtual memory space.

{% include image.html name="flush-reload.png" alt="Flush and Reload" %}

This means that data in a certain cache line will be in the cache for both the victim and the attacker. What the attacker will do in this case is similar to the prime and probe, but instead of filling the cache the attacker will instead flush the cache line, so the data is not in the cache anymore. Next the attacker lets the victim run the code dealing with sensitive data which means that the CPU is going to put some data back into the cache. When the victim has completed running the code, the attacker will try to read the data again and by measuring the time it takes (cache hit or not) he can once again determine whether the victim accessed the data or not.

---

# Meltdown - Rogue data cache load (CVE-2017-5754)

We now have enough background to start looking into the recent attacks, let us start with *Meltdown*. For a very long time the kernel’s memory mappings have been present even when running in unprivileged mode. The main reason for this is performance, since with the mapping readily available there is no work to be done when switching context from user space to kernel. Conceptually this is not a problem, since there are ways to protect user space from actually being able to read the mapped kernel memory. That type of access information (readable, writable, executable and user space accessible) is stored in the [page tables](https://en.wikipedia.org/wiki/Page_table). But as we will see, [researchers](https://meltdownattack.com) recently found a way, due to (undesired) side effects of out-of-order, speculative execution and how kernel switches contexts, to completely overcome the memory isolation between privileged and unprivileged domains and thereby found a way to read kernel memory from a user space process.

The whitepaper mentions a couple of different ways to do the Meltdown attack. One involves making use of exceptions and another way is to suppress exceptions (and only run instructions speculatively). In the case when doing the attack involving exceptions, it could be that the attack is triggered by a client trying to access kernel memory. What then happens when user space tries to access kernel memory is that  we get an exception that immediately [traps](https://en.wikipedia.org/wiki/Trap_(computing)) to the kernel. Architecturally the kernel and the CPU will not allow the user space process to access the memory and from user space point of view you will get some kind of error message in return (or the process will simply be terminated). However, between the exception has been handled and before returning back to the client in user space, some instructions might still be executed due to out-of-order execution (unseen outside the CPU) and that could very well be instructions that are accessing kernel memory and because of this kernel memory will be put into the cache.

When the exception is being handled, just before returning to user space, the CPU will discard the registers, memory etc in use by the out-of-order execution. But what is not discarded is the "out-of-order" memory that was put in the cache. That is still there and that is what is used in the Meltdown attack. From user space one can run attacks like the Flush and Reload or Prime and Probe as described earlier to get the leaked information.

What does all this really mean in practice? What are the practical attacks and do we have to worry about them? Let us for example say that you are using disk encryption. To decrypt (or encrypt) files, a key needs to be present somewhere. If such a key is present in kernel memory, then due to Meltdown it is possible to get access to this key from user space. Since many systems are multiuser systems this is a serious problem. Think about environments where computers that are shared by students at universities or think about companies hosting cloud services where their customers are running in containers like Docker, LXC etc. In most cases, all users are supposed to be running in their own "sandbox" without being able to access data from other users. With Meltdown it is possible to get out of the sandbox and also escape containers.

The mitigation being proposed for this is called KAISER. In short what that is about is that instead of having the entire kernel mapped when running in user space, you should only have the necessary kernel functionality mapped (interrupt handler etc). In Linux this feature is being called [KPTI](https://en.wikipedia.org/wiki/Kernel_page-table_isolation), i.e., Kernel Page Table Isolation and has been implemented for both x86 and Arm. It should be noted that this is not something unique to Linux. Most other OSes (Windows, macOS, Android etc) have used similar mapping techniques and even secure OSes (TrustZone) are doing this. So the KAISER idea needs to be applied in lots of places.

Another thing to note regarding Meltdown is that not all processor architectures are susceptible to this attack. Intel seems to have a hard time here where many of their processors architectures are affected. Arm on the other hand have just [listed](https://developer.arm.com/support/security-update) a few processor architectures being affected by this (and mainly Cortex-A75), which means that there are not really many Arm devices out there yet that are exposed to this attack.

---

## Meltdown patches and performance issues?

In the news there have been lots of mentions saying that patching Meltdown gives a significant performance drop ([Arstechnica](https://arstechnica.com) has a good [summary](https://arstechnica.com/gadgets/2018/01/heres-how-and-why-the-spectre-and-meltdown-patches-will-hurt-performance/)). This is true in general, but how big a performance hit you will get depends on the use case. If we think about the mitigation for a minute, what are the implications of not having the kernel mapped in user space any longer? For user space it does not really matter as such, but as soon as user space needs to access some (privileged) service running in kernel it will do a [syscall](https://en.wikipedia.org/wiki/System_call). When doing the syscall we jump from running code in user space to instead run code in kernel and for kernel to be able to run its code, it needs to put back the kernel memory mappings again. This takes time and before we did not have to do this. So, in short, a syscall has become more expensive to do now compared to the past. Imagine you have an I/O-heavy use case, then you will tend to do lots of syscalls and therefore these types of use cases will see a greater performance hit than others. Worst case for performance are probably pure test cases that are mainly testing syscalls and that is probably where we are seeing figures saying up to 50% decrease in performance. Contrary there are uses cases that are not using that many syscalls and in those cases the performance hit will be negligible.

---

# Spectre

Spectre is related to Meltdown in the sense that the two Spectre attacks both make use of the same side effects as Meltdown is making use of, i.e., that data from the code being speculatively executed will end up in the cache. The major difference here is that the attacks are not limited to only access kernel memory from user space. With the Spectre attacks you can, if successfully exploited, also access memory from other processes running in the same privilege level or even get access to memory from any other domain running on the system. So what do we mean by that? We shouldn’t forget that in addition to the user space and kernel, we have more privilege levels, for example in an Armv8-A system we also have [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor) mode, Secure Monitor and on the secure side (TrustZone) we also have user space (Trusted Applications) and kernel (secure OS). This means that Spectre attacks works across boundaries regardless of privilege level and secure state.

There are many ways an attacker could make use of the Spectre attacks. One that has been mentioned affects browsers. Let us for example say that you visit a website that runs some malicious "Spectre Javascript code" in one of your tabs in the web browser, that piece of code could get access to sensitive information running the other tabs in the browser. In principle, the malicious piece of code could get access to passwords, cookies and other data that is in the web browsers memory. Let us now have a look at the two attacks individually.

---

## Variant 1: Bounds check bypass (CVE-2017-5753)

The core in this attack is that an attacker sends an out-of-bounds variable used to index some array which under normal circumstances would be OK to access (if the parameter was within the limits). In the Spectre [whitepaper](https://spectreattack.com/spectre.pdf) they listed the code below.

{% include image.html name="spectre-v1-example.png" alt="Spectre Example" %}

[Source: [https://spectreattack.com/spectre.pdf](https://spectreattack.com/spectre.pdf)]

Here `x` is the user provided data and `array1_size` is the full length of `array1`. By just looking at the code everything seems fine. I.e, if `x` is too big, then nothing will happen. But if `array1_size` is not cached, then it will take some time before the CPU will know the answer whether this branch will be taken or not since it will need to bring in `array1_size` from the main memory. Meanwhile doing that, the CPU will under some conditions speculative execute the line inside the `if` statement even if `x` was an out-of-bound value.

So what happens at the second line if `array1` is a byte value? What are the possible values we could get by reading `array1[x]`? Simple, we get a byte value in the range [0-255] and it cannot be anything else. This is the value that we are looking for in the attack, but since we cannot simply read it from the cache there are some more work to be done and that is where `array2`and the multiplication with 256 comes into play. By doing this multiplication we will load data somewhere in `array2` at position [0 * 256, 1 * 256, 2 * 256, 3 * 256, … , 256 * 255] and now is time for the Eureka moment! The value `y` or whatever `array2[]` evaluates to are not of any interest in the attack. What is of interest is that what is being updated in the cache.

Let us say for example that `array1` and the two adjacent out-of-bound bytes in  memory looks like this:

{% include image.html name="spectre-v1-memory.png" alt="Spectre v1 Memory" %}

If a rogue user sends an out-of-bounds value of x so the speculative execution evaluates `array1[x] = 0x66` (i.e., the last value listed in the image above), then the access to `array2` will read memory on location `array2[0x66 * 256]` and the cache line corresponding to this address will be updated accordingly. Do you remember the prime and probe attack? I.e, suppose that we filled the entire cache before running this piece of code. Besides some noise, what would happen with the cache when returning from the code in this example? The cache line corresponding to byte 0x66 would have been evicted and replaced with this new value.

Upon return, the attacker would simply loop over all possible cache sets / cache lines and the one that has a cache miss would probably be the cache line corresponding to the value [0x66 * 256] (it is possible to come up with such a mapping). I.e, the attacker have figured out that the value of byte `array1_size + 2` is 0x66. By controlling the speculative execution and by submitting different out-of-bounds values, it is possible for the attacker to read any memory. This explanation is a bit simplified, but it explains the essence of this attack. In reality one needs to do some more work to be able to figure out which address the value maps to etc. For readers interested in a real example, there is a Spectre example implementation for x86 in the Spectre [whitepaper](https://spectreattack.com/spectre.pdf) (appendix A, listing 4).

The mitigation here is not as straightforward as for Meltdown and many processor architectures are susceptible to this attack (Intel, Arm, AMD etc) . What developers needs to do here is to manually inspect the code to see if there are memory access patterns in the code similar to the example we described here. This can be tricky, error prone and is something that needs to be done again over time. Toolchains (GCC [[1](https://gcc.gnu.org/ml/gcc-patches/2018-01/msg00205.html)], [[2](https://gcc.gnu.org/ml/gcc-patches/2018-01/msg00211.html)], LLVM [[3](https://reviews.llvm.org/D41760)], [[4](https://reviews.llvm.org/D41761)] etc) will get patches with new [intrinsics](http://www.linuxjournal.com/content/introduction-gcc-compiler-intrinsics-vector-processing) that can assist developers when trying to locate vulnerable code sections.

This attack is thought to be hard to put in practice. Google engineers have been able to [demonstrate](https://googleprojectzero.blogspot.se/2018/01/reading-privileged-memory-with-side.html) it by leverage the [eBFP](https://opensource.com/article/17/9/intro-ebpf) (extended Berkeley Packet Filter) bytecode interpreter and JIT engine in Linux kernel, but other than that we are unaware of other successful attacks.

---

## Variant 2: Branch target injection (CVE-2017-5715)

In the second variant of Spectre, the attacker tricks the branch predictor to either take or not take branches and thereby influences what code will be speculatively executed. This can for example be done by filling the Branch Target Buffer (described in the Branch Predictor section)  when running user space code and then later, when running more privileged code (on the same core) the speculative execution will take place at the indirect branches as being told by the BTB. The thing to pay attention to here is that branch prediction and speculation are not filtered by the exception level that the processor was in.

To be able to exploit this, the attacker must find gadgets that can be used as a trampoline to run code in a way making this exploit possible. A gadget is a set of instructions that can be chained together with other gadgets that makes it possible for an attacker to run arbitrary instructions on a machine. Readers familiar with [ROP](https://en.wikipedia.org/wiki/Return-oriented_programming) (Return Oriented Programming) have probably heard about gadgets in the past.

The rest of the attacks are the same as for the first variant of Spectre, i.e, data ends up in the cache that can then later leak memory due to a covert channel. Of all three attacks being discussed, this is the one that is thought to be hardest to put in practice. There are many pieces in a big puzzle that need to match, so an attacker would need to know a lot about the target itself and the code running between their "attacker" code and the target.

The main mitigation technique that has been discussed here is to invalidate the branch predictor when moving across different privilege levels (and secure state).  Most processor architectures have instructions for doing this and some may need [special treatment](https://github.com/ARM-software/arm-trusted-firmware/wiki/ARM-Trusted-Firmware-Security-Advisory-TFV-6#variant-2-cve-2017-5715). However, Google have proposed another technique that they call [retpoline](https://support.google.com/faqs/answer/7625886). It sounds to be something that can be used on multiple architectures (Intel, Arm etc), this technique seems to be cheaper in terms of performance hit compared to doing branch invalidate.

---

# Is TrustZone affected?

Conceptually TrustZone works in a similar way to a normal OS and by that we mean that you also have different privilege levels when running code on the secure side. In a TrustZone solution we are running *Trusted Applications* in secure user space and we are running the "TrustZone kernel" in a privileged kernel mode. This is often depicted as in the image below.

{% include image.html name="trustzone-matrix.png" alt="Trustzone Matrix" %}

Because working in a similar way as a traditional OS the secure OSes are also susceptible to the attacks we have described here. We will look more into the TrustZone in the upcoming blog post where we will talk about how this affects OP-TEE and what has been done in OP-TEE to prevent the exploits from being used.

---

# Summary

This is the first part in a series of blog posts about Meltdown and Spectre. The intention here was to penetrate the whitepapers and give an easy to grasp overview of the attacks. In the upcoming blog post we will talk more about individual components, like OP-TEE, Linux kernel and other firmware.

---

# References

* Arm processor security update:
[https://developer.arm.com/support/security-update](https://developer.arm.com/support/security-update)

* Spectre and Meltdown
[https://spectreattack.com](https://spectreattack.com)
[https://meltdownattack.com](https://meltdownattack.com)

* Google Project Zero
[https://googleprojectzero.blogspot.se/2018/01/reading-privileged-memory-with-side.html](https://googleprojectzero.blogspot.se/2018/01/reading-privileged-memory-with-side.html)

* OP-TEE Mailing list [http://eepurl.com/cSqzDf](http://eepurl.com/cSqzDf)

* OP-TEE Website [https://www.op-tee.org/](https://www.op-tee.org/)
