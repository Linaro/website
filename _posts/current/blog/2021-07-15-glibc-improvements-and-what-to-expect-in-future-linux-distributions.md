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
The GNU C Library Project (glibc) provides the core libraries for the GNU system and GNU/Linux systems. Although it is quite an old project (the first release was in 1987), it is actively developed and maintained. Its latest version 2.35 was released on 2022-02-03 with a set of improvements, optimizations, new features, and the usual bug fixes. Linaro and Arm worked on AArch64 enablement and optimizations for recent platform auditions besides the generic improvements.

This blog will cover the recent glibc improvements in an architecture specific way (with a special emphasis on aarch64) while also highlighting generic features to show developers and system administrators what to expect in future Linux distributions. 

The recent glibc releases bring a lot of newer features, ranging from new schemes to handle optimized shared libraries, to new architecture support, new security features, and hardware extensions. Here are some features from the lastest four releases, from 2.29 to 2.35:

## AArch64 PAC-RET, BTI, and MTE

**glibc 2.32** supports newer Arm Architecture features: AArch64 pointer authentication for return addresses ([PAC-RET](https://events.static.linuxfound.org/sites/events/files/slides/slides_23.pdf)) and branch target identification ([Armv8.5-A BTI](https://github.com/llvm-mirror/llvm/commit/4bc81028d48c0ab07e7b429d2a98ed6d15140a23)), while glibc **2.33** supports the Arm Memory Tagging Extension ([Armv8.5-A MTE](https://developer.arm.com/-/media/Arm%20Developer%20Community/PDF/Arm_Memory_Tagging_Extension_Whitepaper.pdf)).

**PAC-RET** is an optional Armv8.3-A extension that basically detects illicit modification of pointers and data. Its main purpose is to harden programs against Return-Oriented programming (ROP) by signing and authenticating the pointers on usage such as locally-scoped pointers / stackframe or PLTs ([Procedure Linkage Table](https://www.technovelty.org/linux/plt-and-got-the-key-to-code-sharing-and-dynamic-libraries.html) which is an essential part of dynamic libraries) entries. Its support is done by a combination of kernel (which handles the internal cryptography key) and compiler support. glibc support was also added and requires some additional support on specific assembly routines.

The **BTI** (Branch Target Identification) is another optional Armv8.5-A security extension which marks valid targets of indirect branches so the CPU can act (with a trap for instance)  when instruction in a protected page tries to perform an indirect branch to an instruction other than a marked BTI. It requires glibc support since it is an opt-in feature set per ELF module via a GNU property note that the dynamic linker has to check and mprotect the executable pages with PROT_BTI (The GNU property is an ELF extension added by either the linker/compiler or explicit by the source with an inline assembly). The idea is only to allow branches to code mapped with the PROT_BTI mmap flag. Branches to code mapped on a page without the flags are handled as invalid operations.

Finally the **MTE** (Memory Tagging Extension) is another arm8.5-a security extension that implements granular memory access through lock and key access to memory. The system then checks the key on each memory access and if the key does not match the lock an error is reported. This is done by using the Top Byte Ignore (TBI) feature of the Armv8-A Architecture, where each memory pointer is ‘colored’ with a different tag.

The extension requires both kernel and library support, and glibc implements it on its memory allocation routines (malloc and related functions). Although disabled by default, it can be enabled per process with a glibc tunable. The MTE is used by glibc malloc implementation tag to ‘color’ each block of memory (on a 16 byte granule that uses the extra bits in the unused part of the VMA) and also the returned pointer by the memory allocation routines. When the pointer is dereferenced, the pointer's color is checked against the memory's color and if they differ the access is faulted.

This improves buffer overruns detention (since glibc metadata is colored differently than memory handled to the caller), simple use-after-free (since free will re-color the memory to a different value and freeing it again will mismatch the color when accessing the metadata), and also some double-free scenarios.

## More Arm optimizations

The glibc project also keeps adding new optimizations to aarch64 memory and string routines, which are the backbone for a lot of algorithms and one of the most used routines in a lot of programs. See below chart which lists improvements over the releases:

{% include image.html path="/assets/images/content/more-arm-optimizations-.png" alt="More Arm Optimizations" %}

The best routine selection is done with a mechanism named [GNU IFUNC](https://sourceware.org/glibc/wiki/GNU_IFUNC): in a simplified manner glibc will consult the kernel information along with processor information to bind the most suitable memory and string routine at runtime (so there is no need to provide specialized builds for each chip or vendor). glibc keeps tuning and adjusting the best selection for each processor, recent versions, for instance, the optimized SIMD routines for Neoverse chips. As a result, the best memory operation routines are provided without the user having to program or instruct the library to do so.

## 64-bit time support

Recent Linux version (starting from version 5.1 with complete support on 5.4) added support for 64-bit time on 32-bit legacy architecture (such as 32-bit ARM). The **glibc 2.34** also adds support for building programs with 64-bit time support on such architectures.  This is enabled with the _TIME_BITS preprocessor macro set to 64 and is only supported when LFS (_FILE_OFFSET_BITS=64) is also enabled.

## C.UTF-8

**glibc 2.35** adds a new C.UTF-8 locale, already provided by some downstream distributions and some Operational Systems. The locale supports full code-point sorting for all valid Unicode code points (including Unicode 14.0).

## glibc HWCAPS loader support

The library search path allows the loader to use a different library depending on how it is laid out on the filesystem (for instance to load an optimized version depending on the underlying hardware).

Prior to the new scheme, each architecture defines its own way to handle it.  The x86_64, for instance, defines a subset of its various hardware extensions and maps it to subfolders depending on the cpuid supported flags. As an example, on glibc 2.31 running a haswell processor multiple different paths will be used:

{% include image.html path="/assets/images/content/glibc-2.31-running-a-haswell-processor-path-1.png" alt="glibc running a haswell processor path 1" %}

It is similar on architectures where hardware support is mapped from the information provided by the kernel (AT_HWCAP). For instance on a POWER9 processor running glibc 2.17:

{% include image.html path="/assets/images/content/glibc-2.31-running-a-haswell-processor-path-2.png" alt="glibc running a haswell processor path 2" %}

The way the library search path is defined and combined generates a lot of permutation and leads to two different issues:

1. More overhead in process initialization due to the multiple filesystem access. This is mitigated by using a library search cache ([ld.so.cache](https://man7.org/linux/man-pages/man8/ld.so.8.html)).
2. It increases the complexity to provide libraries optimized to a specific ABI or processor and how to organize and deploy the optimized builds.

The solution on **glibc 2.33** is a simplified search path that does not create multiple subpaths based on hardware capabilities, but rather maps it to a specific ABI subfolder. Each architecture can then define a set of ABIs, as [x86_64 has done](https://gcc.gnu.org/pipermail/gcc/2020-July/233088.html). The current scheme has a bad side effect where the possible combination of hardware capabilities does not scale well (it increases exponentially by each new hardware capability). By defining specific sets, we can limit the possible permutations.

For instance, on x86_64 the loader now does:

{% include image.html path="/assets/images/content/image-of-the-loader-with-glibc-2.33-on-x86_64.png" alt="Image of the loader with glibc 2.33 on x86_64" %}

The tls and previous haswell files are still present to keep compatibility, but both are set to be removed in future releases. And along with recent GCC support to accept the new x86_64 ISA on compiler flags, it is simpler to build and deploy optimized versions of a library targeting a specific hardware extension.

## Auditing API for the dynamic linker support

**glibc 2.32** adds the missing DT_AUDIT and DT_DEPAUDIT support for [rtld-audit support](https://man7.org/linux/man-pages/man7/rtld-audit.7.html), where a program can specify a set of libraries the loader will load similar to the ones specified by the LD_AUDIT environment variable.

**glibc 2.35** bumps the module API version (LAV_CURRENT) and enable proper bind-now support (enabled either by the static linker or through LD_BIND_NOW environment variable). The loader now advertises via the la_symbind flags that PLT trace is not possible.

Also audit interface on AArch64 is extended to support both the indirect result location register (x8) and NEON Q register.

## Huge Pages Support

Linux is constantly leveraging Large Page Support on architectures that supports it (such as AArch64 and x86_64) by either implementing it without requering [user intervention](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html) or by improving the userspace ABI.

On **glibc 2.34** the __morecore malloc hooks was removed as a security improvement and it also removed the way to use large pages on dynamic memory allocation (as done by [libhugetblfs project](https://github.com/libhugetlbfs/libhugetlbfs]. To add back a way to use large pages on malloc **glibc 2.35** adds a new tunable, glibc.malloc.hugetlb, that can be used make malloc issue madvise plus MADV_HUGEPAGE on mmap and sbrk or to use huge pages directly with mmap calls along the MAP_HUGETLB flag. Former improves the Trnasparent Huge Pages by aligning the mmap calls and advertising the kernel that memory should be backed up by large pages, while former uses the userspace API directly (thus improving performance by not relying on kernel runtime to handle large page migrations).

## Unicode support

Recent glibc versions keep in sync with the latest Unicode standard. Version **2.32** added support for [Unicode 13 along with new languages and glyphs](http://blog.unicode.org/2020/03/announcing-unicode-standard-version-130.html) and version **2.35** updated to the [newest Unicode 14](http://blog.unicode.org/2021/09/announcing-unicode-standard-version-140.html).

## Support for newer security features

The new security features help catch potential security issues while developing, using glibc functions which leverage extra compiler support on newer versions of clang and GCC.

The **glibc 2.33** adds support for _FORTIFY_SOURCE=3 when used along with LLVM 9. Level 3 leverages new compiler support to deliver additional fortification balanced against additional runtime cost (checking non-constant bounds).

The **glibc 2.32** also adds support for GCC 'access' attribute which improves the compiler warning for wrong glibc interface usage. For instance, GCC can diagnose out-of-the-bounds access for functions like read if the input buffer size is known at the caller site.

The **glibc 2.35** builds all programs as position independent executables (PIE) by default (if the toolchain supports it).

The **glibc 2.35** also _FORTIFY_SOURCE=3 support when used with gcc 12.

## Optimized math libraries

The **glibc 2.29** replaced its generic exp, exp2, exp10f, log, log2, pow, sinf, cosf, sincosf and tanf with an optimized version originally from [Arm Optimized Routines](https://github.com/ARM-software/optimized-routines). These new routines also follow the new C standard regarding error handling, which results in less overhead. The performance improvements range from two to three times on both latency and throughput.

**glibc 2.35** improves more math function performance by removing the slow multiprecision paths. It affects asin, acos, tan, atan, and atan2.

**glibc 2.35** also optimizes the hypot function, specially for architecture with Fused Multiply-Add instructions.

## New APIs

### Linux support

Tje **glibc 2.30** added the getdents64 function, used on mainly by libraries to access that access the filesystem. It also added both gettid, tgkill, and getcpu to keep in sync with Linux syscalls.

The **glibc 2.34** continues to improve support for Linux syscalls by adding both [evecveat](https://man7.org/linux/man-pages/man2/execveat.2.html) and [close_range](https://man7.org/linux/man-pages/man2/close_range.2.html).

The **glibc 2.35** added the [Restartable Sequences ABI support back](https://www.efficios.com/blog/2019/02/08/linux-restartable-sequences/). The general idea is the kernel will handle any interrupted concurrent memory operation by context switch with a registered fallback procedure. It might be used to accelerates user-space operations on per-cpu data, such as function like [sched_getcpu](https://man7.org/linux/man-pages/man3/sched_getcpu.3.html) and possible per-cpu memory cached (such as some [memory allocator does](https://github.com/google/tcmalloc)).

The **glibc 2.35** also adds support for (epoll_pwait2)[https://man7.org/linux/man-pages/man2/epoll_wait.2.html] syscall.

### ISO C support

The **glibc 2.34** adds the C2X function timespec_getres, which obtains the clock resolution similar to the analogous POSIX function [clock_getres](https://man7.org/linux/man-pages/man2/clock_gettime.2.html). 

The **glibc 2.35** adds support for both %b and %B format for printf-family functions to output intergers in binary as specified in draft ISO C2X.

### POSIX support

The **glibc 2.34** adds the _Fork as an alternative to [fork](https://man7.org/linux/man-pages/man2/fork.2.html).  It will be added in the future POSIX standard as an async-signal-safe fork replacement, that does not run any atfork function neither resets any internal state or lock.

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

### posix_spawn extensions

Continuing the extension of posix_spawn and posix_spawnp the posix_spawn_file_actions_addchdir_np posix_spawn_file_actions_addfchdir_np extension allows to specify a directory from when the new process will be spawned.

The **glibc 2.34** adds the posix_spawn_file_actions_addclosefrom_np, which allows closing an arbitrary file descriptor range before spawning the new process (it uses the Linux syscall close_range if available).

The **glibc 2.35** adds the posix_spawn_file_actions_addtcsetpgrp_np, which allows set the controlling terminal in the new process in a race free manner. It might be used on terminal controllers (such as bash) to optimize the subprocess creation (to use posix_spawn instead of fork plus execve).

## Loader improvements

A new DSO sorting algorithm has been added in the dynamic linker that uses topological sorting by depth-first search (DFS), solving performance issues of the existing sorting algorithm when encountering particular circular object dependency cases. This improves some pathological user cases reducing startup time from 200 seconds to 15 seconds.

## New standard support

The **glibc 2.31** supports the feature test macro _ISOC2X_SOURCE, which enables features from the draft [ISO C2X standard](https://en.wikipedia.org/wiki/C2x). The GCC 9 and Clang 9.0 compilers support the -std=c2x option to support this standard. The libc part of the standard was already supported for some time by glibc (for instance the functions memccpy(), strdup(), strndup()).

It also fixes some clarification for the new math functions introduced in the [TS 18661-1:2014 and TS 18661-3:2015](http://www.open-std.org/JTC1/SC22/WG14/www/docs/n2095.pdf).

## Future Plans

The next **glibc 2.36** release, planned to be released on August 2022, will have some important changes:

1. More Linux syscalls support to work with pidfd and the new mount API.
2. Support DT_RELR relative relocation format, which optimizes binary size of PIE executables.
3. AVX512 support for vector math library.
4. More C2X support with mbrtoc8 and c8rtomb functions.

For more information on Linaro and the work we do, do not hesitate to [get intouch](https://www.linaro.org/contact/).
