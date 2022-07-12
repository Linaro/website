---
layout: post
title: Using the Arm Statistical Profiling Extension to detect false cache-line
  sharing
description: This article talks about how to use perf c2c tool with Arm Neoverse CPUs.
date: 2022-07-12 09:38:03 +01:00
image: /assets/images/content/code-background_1.jpg
category: blog
author: leo_yan
---
# Introduction

Memory operations can introduce performance bottlenecks - in a non-uniform memory access (NUMA) environment a typical case is if that multiple items of data share the same cache line, threads write to some items and read from the rest items concurrently, and these threads reside on different CPUs and even across NUMA nodes, we call it “false sharing”. In this case, it’s expensive for the cache coherency operations and causes a significant performance penalty.

Perf c2c tool observes cache-to-cache line contention and allows us to identify the places in the code that provokes these cache activities, therefore, the tool can teach developers to optimise data structures (e.g. using per CPU data, or use “aligned” attribute with compiler) for avoiding false sharing.  We cannot detect false sharing issues purely in software, this is why perf c2c relies on underlying hardware mechanisms to inspect cache activity. x86 machines offer the hardware capability and this is already supported by the perf c2c tool. With the introduction of the Statistical Profiling Extensions (SPE) in Armv8.2 we can now provide similar analysis for Arm machines.

SPE is a hardware tracing mechanism that can be used for memory profiling, furthermore, recent Arm cores including the CPUs of Neoverse  family implement the data source packet in SPE to identify where data is originally from, which gives us an opportunity to enable perf c2c tool on Arm platforms. This article introduces how to use perf c2c tool with Arm Neoverse CPUs.

# The implementation of perf c2c on x86 architecture

First let’s review the implementation of perf c2c on x86 architecture. On x86 the command perf c2c record uses the events ‘mem-loads’ and ‘mem-stores’ to record the memory operations:

```
  /sys/devices/cpu/events/mem-loads 
  /sys/devices/cpu/events/mem-stores
```

Afterwards, we can use perf c2c report command to output the shared cache line table, for every sorted cache line it shows metrics “Total records”, “Total loads”, “Total stores”, etc; followed by more breakdown metrics for loads and stores.

{% include image.html path="/assets/images/content/shared-data-cache-line-table.png" alt="Shared Data Cache Line Table" %}

The question is how do you identify cache lines that are false sharing? A feature called Processor Event Based Sampling (PEBS) provides data source for memory operations; an important concept “HITM” is introduced in PEBS, HITM stands for “Hit modified cache line”, which means a memory operation hits a modified copy from another processor’s cache line. The perf tool sets the snooping flag PERF_MEM_SNOOP_HITM in the memory sample’s “data_src” field for the HITM operations.

Furthermore, combining with cache level info (e.g. L3 cache level or remote cache), a memory operation can be decided if it is a local HITM or a remote HITM. The distinguished HITMs are very useful to locate NUMA performance issues since a remote HITM indicates sharing that crosses memory nodes.

As result, the below view shows how false sharing happened within a cache line. HITM are classified as metric “RmtHitm” for remote HITMs and metric “LclHitm” for local HITMs, these two metrics tell us that the modified cache is snooped from local peer CPUs and from remote nodes respectively, and from the store metrics we can know how the data items are modified in the program. This view is printed out by default in stdio mode; in text-based user interface (TUI) mode we need to select a cache line with enter and then press key ‘d’ so the view can pop up.

{% include image.html path="/assets/images/content/shared-cache-line-distribution-pareto-image.png" alt="Shared Data Cache Line Distribution Pareto Image" %}

# Enabling Arm SPE in perf

The Statistical Profiling Extension provides a different mechanism to trace cache activity. Instead of the 'mem-loads' and 'mem-stores' events used on x86, Arm SPE systems provide a mechanism to run a sampling-profiler over memory operations. As an operation is sampled in SPE, its PC value, event type, latency, physical and virtual data addresses for data accessing are recorded; at last, a sample is recorded as packets and saved into memory. Note, SPE inherently is a statistical profiler, rather than instrument for every memory operation, users can specify the programmable interval for the recording, and even a pseudo-random jitter can be enabled for random intervals, the profiling result might lose some resolution but we can benefit from it without significant overhead.

In order to integrate Arm SPE in perf tool, we needed to be able to use Arm SPE as a source of memory events on Arm64. We extended the perf tool to do this, whilst also keeping support for traditional memory events found in other architectures (like x86, powerpc). This is accomplished with a weak function perf_mem_events**ptr().  This function’s argument is a general event type (PERF_MEM_EVENTS**LOAD, PERF_MEM_EVENTS**STORE, or PERF_MEM_EVENTS**LOAD_STORE) and it returns back the corresponding hardware performance monitoring unit (PMU) event.  For the Arm64 arch, we redefined this function to return the Arm SPE PMU event as memory events. Thus we can record the Arm SPE trace data. Note, the recorded trace data is merely raw data, we can use the command perf script -D to dump the SPE raw data with packet wise: 

{% include image.html path="/assets/images/content/using-perf-to-dump-arm-spe-raw-trace-data-image.png" alt="Using perf to dump Arm SPE Raw Trace Data Image" %}

During the decoding phase, we need to synthesise memory samples based on SPE raw trace data, and the memory samples at the end can be consumed by perf tool. A memory sample contains fields for instruction pointer (IP), virtual and physical data addresses, alongside with a field “data_src”.  At this stage of development there was enough for enabling perf mem, we can use perf mem to capture SPE trace data and output the statistics result based on synthesised memory samples on Arm64:

```
  perf mem record -- test_program
  perf mem report
```

The data source packet in SPE trace data has no unified format but is implementation dependent, therefore, without the data source format SPE leaves too many gaps to monitor cache-to-cache activity and becomes a hurdle to enable perf c2c… until Ali Saidi (Amazon) sent a patch series to support data sources for the Arm Neoverse family of cores.

# Perf c2c tool extension for Arm SPE

It was critical that Ali Saidi explored the data source format for Arm Neoverse cores; we can find the data source definition in the documentation “[Arm ® Neoverse™ N2 Core Technical Reference Manual](https://developer.arm.com/documentation/102099/0000/Statistical-Profiling-Extension-support/Statistical-Profiling-Extension-data-source-packet)”, section “22.2 Statistical Proﬁling Extension data source packet”.  Arm Neoverse cores have four kinds of data source that indicate snooping is taking place from peer cores: Peer core (0b1001), Local cluster (0b1010), Peer cluster (0b1100) and Remote (0b1101).

These four data source values can tell us that the peer snooping happens, this is not as rich as x86 HITM which is also able to report on data access from a modified copy in the peer cache line, but it is quite sufficient to identify cache-line sharing.  After some discussion, we decided to introduce a new snooping flag: PERF_MEM_SNOOPX_PEER to indicate that the data is fetched from peer cache lines.  Connecting with code, the flag PERF_MEM_SNOOPX_PEER would easily help us to locate false sharing cases.

The rest of the work was to support the flag PERF_MEM_SNOOPX_PEER in perf c2c, we need to let perf c2c tool sort cache lines based on this new flag.  Similar to HITM tags, we treat the data sources “Peer core”, “Local cluster”, “Peer cluster” as local peer accesses, and “Remote” as remote peer accesses, the remote peer access accounting is expected to be helpful for NUMA performance analysis.

As a result, I sent out [a patch series](https://lore.kernel.org/lkml/20220604042820.2270916-1-leo.yan@linaro.org/) containing Ali’s patches and perf c2c tool extension, which introduces a new display type “peer” for sorting shared cache lines with the SNOOPX_PEER flag. It is the default display type on Arm64 platforms; with the changes perf c2c tool can parse false sharing on Arm Neoverse (N1/N2/V1) CPUs.  We hope this patch series can be landed on the mainline kernel in the merge window for v5.20.  

# Reporting cache-to-cache activity on Arm64

Let’s demonstrate an example at the end, the command “perf c2c record” traces memory accessing with Arm SPE, and “perf c2c report” outputs results shown below.  

“perf c2c report” supports four display types, three types (“rmt”, “lcl” and “tot”) of them are for displaying with HITM tags, and the new added “peer” type is to sort cache lines with the SNOOPX_PEER flag. A minor improvement for the tool is to automatically select appropriate display type based on the session environment, it uses “peer” as default type for reporting Arm64 perf data and alternatively uses “tot” display for x86, thus users don’t need to explicitly specify the display type. 

```
  perf c2c record -- test_program
  perf c2c report
  perf c2c report -d peer (Explicitly specify display peer type)
```

The result outputs a new metric “Peer Snoop” which shows the peer snooping happened on two cache lines with base address 0x420180 and 0x420100, then if we look into details for every cache line, with observing two metrics “Peer Snoop Rmt” and “Peer Snoop Lcl”, we can easily conclude the accesses for virtual address 0x400bd0 and 0x400c74 provoked a big amount of peer snooping, afterwards we can explore optimizations for corresponding structures.

{% include image.html path="/assets/images/content/perf-c2c-outputs-with-arm-spe-trace-data-image.png" alt="Perf c2c outputs with Arm SPE trace data image" %}

# Acknowledgement

Credits and thanks to Ali Saidi for enabling data source on Arm Neoverse CPUs, and contributed the idea for the snooping flag.  Thanks to Adam Li (Ampere), German Gomez (Arm) and James Clark (Arm) for continuous testing and reviewing.  Joe Mario (Redhat)’s suggestions and feedback for extension perf c2c are very valuable, appreciated!  Finally, thanks for Arnaldo Carvalho de Melo (Redhat) for his background support, for Steven Miao (Arm) pointing me the documentation that how AMBA bus topology maps to SPE data source encodings, and for Haojian Zhuang (Linaro) sharing Hisilicon D06 board.

Enjoy the tool on your platform! If you are interested in perf c2c and luckily have an Arm Neoverse platform in hand, you are encouraged to try this new debugging feature with [the test case](https://github.com/joemario/perf-c2c-usage-files/blob/master/false_sharing_example.c) (and with applying the patches mentioned in this article on mainline kernel). And welcome patches to support Perf c2c on new Arm CPU variants, you could refer to [the patch](https://lore.kernel.org/lkml/20220517020326.18580-6-alisaidi@amazon.com/) for how to do it.