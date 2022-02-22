---
layout: post
title: "GLIBC improvements & what to expect in future Linux distributions "
description: "In this article, we cover glibc improvements in an architecture
  way while also highlighting generic features to show what to expect in future
  Linux distributions. "
date: 2021-07-15 09:31:35 +01:00
image: /assets/images/content/code.jpg
tags:
  - GLIBC
category: blog
author: adhemerval.zanella
---
The GNU C Library Project (glibc) provides the core libraries for the GNU system and GNU/Linux systems. Although it is quite an old project (the first release was in 1987), it is actively developed and maintained. Its latest version 2.33 was released on 2021-02-01 with a set of improvements, optimizations, new features, and the usual bug fixes. Linaro and Arm worked on AArch64 enablement and optimizations for recent platform auditions besides the generic improvements.

This blog will cover the recent glibc improvements in an architecture specific way (with a special emphasis on aarch64) while also highlighting generic features to show developers and system administrators what to expect in future Linux distributions. 

The recent glibc releases bring a lot of newer features, ranging from new schemes to handle optimized shared libraries, to new architecture support, new security features, and hardware extensions. Here are some features from the lastest four releases, from 2.29 to 2.33: 

## AArch64 PAC-RET, BTI, and MTE

**glibc 2.32** supports newer Arm Architecture features: AArch64 pointer authentication for return addresses ([PAC-RET](https://events.static.linuxfound.org/sites/events/files/slides/slides_23.pdf)) and branch target identification ([Armv8.5-A BTI](https://github.com/llvm-mirror/llvm/commit/4bc81028d48c0ab07e7b429d2a98ed6d15140a23)), while glibc **2.33** supports the Arm Memory Tagging Extension ([Armv8.5-A MTE](https://www.google.com/url?q=https://developer.arm.com/-/media/Arm%2520Developer%2520Community/PDF/Arm_Memory_Tagging_Extension_Whitepaper.pdf&sa=D&source=editors&ust=1626344114788000&usg=AOvVaw0zaywww6vHZcRdqIvWcX5-)).

**PAC-RET** is an optional Armv8.3-A extension that basically detects illicit modification of pointers and data. Its main purpose is to harden programs against Return-Oriented programming (ROP) by signing and authenticating the pointers on usage such as locally-scoped pointers / stackframe or PLTs ([Procedure Linkage Table](https://www.technovelty.org/linux/plt-and-got-the-key-to-code-sharing-and-dynamic-libraries.html) which is an essential part of dynamic libraries) entries. Its support is done by a combination of kernel (which handles the internal cryptography key) and compiler support. glibc support was also added and requires some additional support on specific assembly routines.

The **BTI** (Branch Target Identification) is another optional Armv8.5-A security extension which marks valid targets of indirect branches so the CPU can act (with a trap for instance)  when instruction in a protected page tries to perform an indirect branch to an instruction other than a marked BTI. It requires glibc support since it is an opt-in feature set per ELF module via a GNU property note that the dynamic linker has to check and mprotect the executable pages with PROT_BTI (The GNU property is an ELF extension added by either the linker/compiler or explicit by the source with an inline assembly). The idea is only to allow branches to code mapped with the PROT_BTI mmap flag. Branches to code mapped on a page without the flags are handled as invalid operations.

Finally the **MTE** (Memory Tagging Extension) is another arm8.5-a security extension that implements granular memory access through lock and key access to memory. The system then checks the key on each memory access and if the key does not match the lock an error is reported. This is done by using the Top Byte Ignore (TBI) feature of the Armv8-A Architecture, where each memory pointer is ‘colored’ with a different tag.

The extension requires both kernel and library support, and glibc implements it on its memory allocation routines (malloc and related functions). Although disabled by default, it can be enabled per process with a glibc tunable. The MTE is used by glibc malloc implementation tag to ‘color’ each block of memory (on a 16 byte granule that uses the extra bits in the unused part of the VMA) and also the returned pointer by the memory allocation routines. When the pointer is dereferenced, the pointer's color is checked against the memory's color and if they differ the access is faulted.

This improves buffer overruns detention (since glibc metadata is colored differently than memory handled to the caller), simple use-after-free (since free will re-color the memory to a different value and freeing it again will mismatch the color when accessing the metadata), and also some double-free scenarios.

## More Arm optimizations

The glibc project also keeps adding new optimizations to aarch64 memory and string routines, which are the backbone for a lot of algorithms and one of the most used routines in a lot of programs. See below chart which lists improvements over the releases:

{% include image.html path="/assets/images/content/more-arm-optimizations-.png" alt="More Arm Optimizations" %}

The best routine selection is done with a mechanism named [GNU IFUNC](https://sourceware.org/glibc/wiki/GNU_IFUNC): in a simplified manner glibc will consult the kernel information along with processor information to bind the most suitable memory and string routine at runtime (so there is no need to provide specialized builds for each chip or vendor). glibc keeps tuning and adjusting the best selection for each processor, recent versions, for instance, the optimized SIMD routines for Neoverse chips. As a result, the best memory operation routines are provided without the user having to program or instruct the library to do so. 

## glibc HWCAPS loader support

The library search path allows the loader to use a different library depending on how it is laid out on the filesystem (for instance to load an optimized version depending on the underlying hardware).

Prior to the new scheme, each architecture defines its own way to handle it.  The x86_64, for instance, defines a subset of its various hardware extensions and maps it to subfolders depending on the cpuid supported flags. As an example, on glibc 2.31 running a haswell processor multiple different paths will be used:

{% include image.html path="/assets/images/content/glibc-2.31-running-a-haswell-processor-path-1.png" alt="glibc running a haswell processor path 1" %}

It is similar on architectures where hardware support is mapped from the information provided by the kernel (AT_HWCAP). For instance on a POWER9 processor running glibc 2.17:

{% include image.html path="/assets/images/content/glibc-2.31-running-a-haswell-processor-path-2.png" alt="glibc running a haswell processor path 2" %}

The way the library search path is defined and combined generates a lot of permutation and leads to two different issues:

1. More overhead in process initialization due to the multiple filesystem access. This is mitigated by using a library search cache ([ld.so.cache](https://man7.org/linux/man-pages/man8/ld.so.8.html)).
2. It increases the complexity to provide libraries optimized to a specific ABI or processor and how to organize and deploy the optimized builds.

The solution on glibc 2.33 is a simplified search path that does not create multiple subpaths based on hardware capabilities, but rather maps it to a specific ABI subfolder. Each architecture can then define a set of ABIs, as [x86_64 has done](https://gcc.gnu.org/pipermail/gcc/2020-July/233088.html). The current scheme has a bad side effect where the possible combination of hardware capabilities does not scale well (it increases exponentially by each new hardware capability). By defining specific sets, we can limit the possible permutations.

For instance, with glibc 2.33 on x86_64 the loader now does:

{% include image.html path="/assets/images/content/image-of-the-loader-with-glibc-2.33-on-x86_64.png" alt="Image of the loader with glibc 2.33 on x86_64" %}

The tls and previous haswell files are still present to keep compatibility, but both are set to be removed in future releases. And along with recent GCC support to accept the new x86_64 ISA on compiler flags, it is simpler to build and deploy optimized versions of a library targeting a specific hardware extension.

## DT_AUDIT and DT_DEPAUDIT support.

This adds the missing [rtld-audit support](https://man7.org/linux/man-pages/man7/rtld-audit.7.html), where a program can specify a set of libraries the loader will load similar to the ones specified by the LD_AUDIT environment variable.

## Unicode 13.0.0 support

Recent glibc versions keep in sync with the standard [new languages and glyphs](https://www.google.com/url?q=http://blog.unicode.org/2020/03/announcing-unicode-standard-version-130.html&sa=D&source=editors&ust=1626344289162000&usg=AOvVaw37QcHRMFtob5hXyOrlTQdb).

## Support for newer security features

The new security features help catch potential security issues while developing, using glibc functions which leverage extra compiler support on newer versions of clang and GCC.

The glibc 2.33 adds support for _FORTIFY_SOURCE=3 when used along with LLVM 9, which adds some runtime checks for a set of glibc interfaces (string and memory functions for instance).

The glibc 2.32 also adds support for GCC 'access' attribute which improves the compiler warning for wrong glibc interface usage. For instance, GCC can diagnose out-of-the-bounds access for functions like read if the input buffer size is known at the caller site.

## Optimized math libraries

The glibc 2.29 replaced its generic exp, exp2, exp10f, log, log2, pow, sinf, cosf, sincosf and tanf with an optimized version originally from [Arm Optimized Routines](https://github.com/ARM-software/optimized-routines). These new routines also follow the new C standard regarding error handling, which results in less overhead. The performance improvements range from two to three times on both latency and throughput.

## New APIs

### pthread_attr_setsigmask_np, pthread_attr_getsigmask_np

This is a glibc extension that allows getting and setting the initial signal mark when a new thread is created. It avoids some signal handler issues, where the user can mask all signals until the thread sets its desired mask.

### __libc_single_threaded

This new symbol allows an application to find when the process became a multithread one, so it can optimize some routines that require synchronization to handle multiple threads. For instance, newer GCC c++ libraries (libstdc++) use the flag to optimize some C++ classes like std::once_flag and std::call_once.

### sigabbrev_np, sigdescr_np, strerrorname_np, and strerrordesc_np

This is a long standing problem on how to map the supported errno and the signal to its name and description in asynchronous signal-safe manner. Both standard defined manner (sterror and strsignal) are either non asynchronous signal safe (either triggering internal routines that try to translate the names to the session set language) or provided an either non-standard access to glibc defined objects (which in turn has its own shortcoming, such as no out-of-bound checks or the creation of copy relocation that increase memory usage).

The newer APIs are fully asynchronous signal-safe and align with recent discussion [to add a similar API on POSIX standard](https://www.austingroupbugs.net/view.php?id=1138).

### pthread_clockjoin_np

This is an extension to the pthread_join where the caller specifies not only a timeout, but also which clock to use.

### pthread_cond_clockwait, pthread_mutex_clocklock, pthread_rwlock_clockrdlock, pthread_rwlock_clockwrlock and sem_clockwait

Similar to the pthread_clockjoin_np, these are extensions to the pthread routines to allow use of a different clock than CLOCK_REALTIME with the specified timer.

### twalk_r

This is similar to the existing twalk function, but it passes an additional caller-supplied argument  to the callback function.

### Linux getdents64, gettid, and tgkill, getcpu

These are the direct maps to the Linux syscalls and keep the new glibc idea to keep in sync with Linux syscall additions.

### posix_spawn extensions

Continuing the extension of posix_spawn and posix_spawnp the posix_spawn_file_actions_addchdir_np and posix_spawn_file_actions_addfchdir_np extension allows to specify a directory from when the new process will be spawned.

## New standard support

The glibc 2.31 supports the feature test macro _ISOC2X_SOURCE, which enables features from the draft [ISO C2X standard](https://en.wikipedia.org/wiki/C2x). The GCC 9 and Clang 9.0 compilers support the -std=c2x option to support this standard. The libc part of the standard was already supported for some time by glibc (for instance the functions memccpy(), strdup(), strndup()).

It also fixes some clarification for the new math functions introduced in the [TS 18661-1:2014 and TS 18661-3:2015](http://www.open-std.org/JTC1/SC22/WG14/www/docs/n2095.pdf).

## Future Plans

The next 2.34 release, planned to be released on August 2021, will have some important changes:

1. Libpthread symbols moved to libc: the idea to have libc.so the only provider of libpthread implementations. This fixes a long standing issue where some application that uses wrong linkage mode (named underlining) and ends up triggering undefined behaviour at runtime (instead of failing at link-time).
2. Improve more math function performance by removing the slow multiprecision paths. It affects asin, acos, tan, atan, and atan2.
3. AArch64 MTE fixes and performance improvements for malloc implementation.
4. 64 bit time_t support on all 32 bit architectures (such as arm-linux-gnueabi).

For more information on Linaro and the work we do, do not hesitate to [get intouch](https://www.linaro.org/contact/).