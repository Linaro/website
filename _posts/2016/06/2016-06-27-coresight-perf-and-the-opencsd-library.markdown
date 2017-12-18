---
author: mathieu.poirier
categories:
- blog
date: 2016-06-27 22:45:43
description: How the CoreSight framework found in the Linux kernel has been integrated
  with the standard Perf core, both at the kernel and user space level.
excerpt: 'Learn how the CoreSight framework found in the Linux kernel has been integrated
  with the standard Perf core, both at the kernel and user space level.  In the latter
  part the newly introduced Open CoreSight Decoding Library (OpenCSD) is used to assist
  with trace decoding.  The topic of trace decoding with openCSD will be covered in
  an upcoming post.

'
keywords: CoreSight, Perf, OpenCSD Library
layout: post
link: /blog/core-dump/coresight-perf-and-the-opencsd-library/
slug: coresight-perf-and-the-opencsd-library
tags:
- Core Dump
- CoreSight
- kernel
- Linux
- Linux on ARM
- OpenCSD library
- Perf
title: CoreSight, Perf and the OpenCSD Library
wordpress_id: 10726
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://wiki.linaro.org/CoreDevelopment" %}


### **Introduction**


In this article we explain how the CoreSight framework found in the Linux kernel has been integrated with the standard Perf core, both at the kernel and user space level.  In the latter part the newly introduced Open CoreSight Decoding Library (OpenCSD) is used to assist with trace decoding. The topic of trace decoding with openCSD will be covered in an upcoming post.

All examples presented in this post have been collected on a juno-R0 platform using code that is [public and accessible to everyone](https://github.com/Linaro/OpenCSD).


### **Background on Perf and the Performance Management Units**


The standard Perf core is a performance analysis tool found in the Linux kernel. It comes with a complement user space tool, simply called _perf_, that provides a suite of sub-commands to control and present trace profiling sessions. Perf is most commonly used to access SoC performance counters, but over the years it has grown well beyond that and now covers tracepoints, software performance counters and dynamic probes. 

The perf core is generic and caters to many architectures. To hide variations between HW implementation and profiling metrics the concept of Performance Monitoring Unit (PMU) is used. A PMU is a [structure](http://lxr.free-electrons.com/source/include/linux/perf_event.h?v=4.6#L223) providing a well defined set of interfaces that PMU drivers implement in order to carry action on behalf of the Perf core. The actions carried out the by the PMU drivers are not relevant to the Perf core itself, as long as the semantic of the API is respected.

Every time a process is installed on a CPU for execution, the scheduler invokes the Perf core.  From there Perf will see if any event is associated with that process and if so, the PMU API performing HW specific operations is invoked. The same happens when the process is removed from a CPU. That way statistics and performance counters are collected for that process only and aren’t impacted by other activities concurrently happening in the system. Traces collected during a session are transferred to user space using a mmap’ed area and made available to users in the _perf.data_ file. The latter is then read by the various _perf_ [sub-command](https://perf.wiki.kernel.org/index.php/Main_Page) for rendering in human readable format. 

Integrating the CoreSight drivers with the Perf core was advantageous on many fronts. On the kernel side it streamlined the configuration of trace sessions - with hundreds of parameters per CPU this was certainly not something to pass on. It also offered a way to easily transfer massive amounts of trace data to user space with little overhead. In user space the metadata pertaining to each trace session could be embedded in the _perf.data_ file and _perf_ sub-commands like _report_ and _script_ used to decode trace data. Last but not least most of the upstream code can be re-used in the PMU abstraction.


### **Integration of CoreSight with the Perf Framework**




#### The kernel side


To bridge the gap between the CoreSight framework and the Perf core, CoreSight tracers (ETMv3/4 and PTM) are modelled as PMUs.  At boot time the newly introduced function [_etm_perf_init()_](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/drivers/hwtracing/coresight/coresight-etm-perf.c?id=refs/tags/v4.7-rc1#n370) registers an _etm_pmu_ with the perf core:

_#define CORESIGHT_ETM_PMU_NAME “cs_etm”_

_static struct pmu etm_pmu;_

_…_

```c
static int __init etm_perf_init(void)
{
         int ret;
 
         etm_pmu.capabilities    = PERF_PMU_CAP_EXCLUSIVE;
 
         etm_pmu.attr_groups     = etm_pmu_attr_groups;
         etm_pmu.task_ctx_nr     = perf_sw_context;
         etm_pmu.read            = etm_event_read;
         etm_pmu.event_init      = etm_event_init;
         etm_pmu.setup_aux       = etm_setup_aux;
         etm_pmu.free_aux        = etm_free_aux;
         etm_pmu.start           = etm_event_start;
         etm_pmu.stop            = etm_event_stop;
         etm_pmu.add             = etm_event_add;
         etm_pmu.del             = etm_event_del;
         etm_pmu.get_drv_configs = etm_get_drv_configs;
         etm_pmu.free_drv_configs = etm_free_drv_configs;
                                
        ret = perf_pmu_register(&etm_pmu, CORESIGHT_ETM_PMU_NAME, -1);
        if (ret == 0)
                 etm_perf_up = true;
 
         return ret;
 }
device_initcall(etm_perf_init);


```


Calling _perf_pmu_register() _creates a new PMU with the characteristics found in the _struct pmu_ given as a parameter.  When a successful registration has completed the new PMU can be found alongside the other PMUs catalogued at boot time:

```bash
linaro@linaro-nano:~$
linaro@linaro-nano:~$ ls /sys/bus/event_source/devices/
breakpoint  cs_etm  software  tracepoint
linaro@linaro-nano:~$
linaro@linaro-nano:~$ ls /sys/bus/event_source/devices/cs_etm
cpu0  cpu1  cpu2  cpu3  cpu4  cpu5  format  perf_event_mux_interval_ms  power  subsystem  type  uevent
linaro@linaro-nano:~$
```

The astute reader will notice that cpu[0… 5] are not part of the typical sysFS entries associated with PMUs, and they will be correct.  Upon successful registration with the CoreSight core, the ETMv3/PTM and ETMv4 drivers create a symbolic link between their sysFS entries and the new_ cs_etm_ PMU, allowing the Perf user space API to quickly retrieve the metadata associated with a tracer:

```bash
linaro@linaro-nano:~$ ls -l /sys/bus/event_source/devices/cs_etm/cpu0
lrwxrwxrwx 1 root root 0 Jun  1 20:19 /sys/bus/event_source/devices/cs_etm/cpu0 -> ../platform/23040000.etm/23040000.etm
linaro@linaro-nano:~$
linaro@linaro-nano:~$ ls /sys/bus/event_source/devices/cs_etm/cpu0/trcidr/
trcidr0  trcidr1  trcidr10  trcidr11  trcidr12  trcidr13  trcidr2  trcidr3  trcidr4  trcidr5  trcidr8  trcidr9
linaro@linaro-nano:~$
linaro@linaro-nano:~$ ls /sys/bus/event_source/devices/cs_etm/cpu0/mgmt/
trcauthstatus  trcdevid    trclsr    trcpdcr  trcpidr0  trcpidr2  trctraceid trcconfig      trcdevtype  trcoslsr  trcpdsr  trcpidr1  trcpidr3
linaro@linaro-nano:~$
```

#### The user space side


In user space integration is done around three tools: _perf record_, _perf report_ and _perf script_, which are the perf sub-commands we have been referring to.  The first deals with event configuration and creation while the latter two assist in rendering trace data collected during a session in a human readable format.

##### **perf record**


Integration in the _perf record_ sub-command is done by providing an architecture specific function that return a [struct auxtrace_record](http://lxr.free-electrons.com/source/tools/perf/util/auxtrace.h?v=4.6#L292).  As with the kernel PMU abstraction the auxtrace_record structure allows the generic core to perform architecture-specific operations without losing genericity.  That way it is possible to process traces data generated by IntePT and CoreSight without changing anything to the common core.

```c
struct auxtrace_record *cs_etm_record_init(int *err)
{
       struct perf_pmu \*cs_etm_pmu;
       struct cs_etm_recording \*ptr;

       cs_etm_pmu = perf_pmu__find(CORESIGHT_ETM_PMU_NAME);

       [clip…]

       ptr->cs_etm_pmu                 = cs_etm_pmu;
       ptr->itr.parse_snapshot_options = cs_etm_parse_snapshot_options;
       ptr->itr.recording_options      = cs_etm_recording_options;
       ptr->itr.info_priv_size         = cs_etm_info_priv_size;
       ptr->itr.info_fill              = cs_etm_info_fill;
       ptr->itr.find_snapshot          = cs_etm_find_snapshot;
       ptr->itr.snapshot_start         = cs_etm_snapshot_start;
       ptr->itr.snapshot_finish        = cs_etm_snapshot_finish;
       ptr->itr.reference              = cs_etm_reference;
       ptr->itr.free                   = cs_etm_recording_free;
       ptr->itr.read_finish            = cs_etm_read_finish;

       \*err = 0;
       return &ptr->itr;
out:
       return NULL;
}

```

Among other things, functions provided to the _struct auxtrace_record_ deal with how to find tracer specific metadata, the presentation and formatting of the metadata in the _perf.data_ file along with specifics related to the size and mapping of the ring buffer shared between the kernel and user space.  That ring buffer is then used to retrieve trace data from the kernel.


##### **perf report and perf script**


The decompression and rendering of trace data is done in the _report_ and _script_ utilities.  The process starts by reading the _perf.data_ file and parsing each of the events that were generated during a trace session.  The AUXTRACE_INFO and PERF_RECORD_MMAP2 are especially important.  The first event carries a wealth of information about how the tracers were configured, the so called metadata, and a list of offsets in the _perf.data_ file where lumps of trace data are located.  These offsets are recorded for later processing.  

PERF_RECORD_MMAP2 events carry the name and path of the binary and libraries that were loaded/executed during the trace session.  Those are commonly called _Dynamic Shared Object_, or DSO.  Having a handle on the DSOs is important for trace decoding since some branch point don’t carry the destination address, only that the branch point was taken or not.  In those cases the code needs to be read to find out where execution resumed.  

Once all that information has been tallied decoding of the trace data can begin.  The process is done by feeding the previously recorded trace data offsets to the _decoder_.  The _decoder_ is an instantiated object provided by the openCSD companion library.  It decodes trace data lumps in steps, calling a user provided callback function with each successful round .

_Un-synthesised output will look like this:_

```c
mpoirier@t430:~/work/linaro/coresight/bkk16/jun01-kernel$ ../../kernel-cs-pm/tools/perf/perf report --stdio --dump
. ... CoreSight ETM Trace data: size 162416 bytes
 0: I_ASYNC : Alignment Synchronisation.
 12: I_TRACE_INFO : Trace Info.
 17: I_TRACE_ON : Trace On.
 18: I_ADDR_CTXT_L_64IS0 : Address & Context, Long, 64 bit, IS0.; Addr=0xFFFFFFC000531720; Ctxt: AArch64,EL1, NS;
 28: I_ATOM_F2 : Atom format 2.; NE
 29: I_ADDR_L_64IS0 : Address, Long, 64 bit, IS0.; Addr=0xFFFFFFC000536038;
 39: I_ATOM_F2 : Atom format 2.; EE
 40: I_ADDR_S_IS0 : Address, Short, IS0.; Addr=0xFFFFFFC0005366CC ~[0x166CC]
 43: I_ATOM_F1 : Atom format 1.; E
 44: I_ADDR_S_IS0 : Address, Short, IS0.; Addr=0xFFFFFFC000531BC0 ~[0x11BC0]
 48: I_ATOM_F3 : Atom format 3.; NEE
 49: I_ADDR_S_IS0 : Address, Short, IS0.; Addr=0xFFFFFFC000531F54 ~[0x11F54]
 52: I_ATOM_F1 : Atom format 1.; E
 53: I_ADDR_L_32IS0 : Address, Long, 32 bit, IS0.; Addr=0x0016BB60;
 58: I_ATOM_F3 : Atom format 3.; NEE
 59: I_ATOM_F3 : Atom format 3.; NNE
 60: I_ATOM_F6 : Atom format 6.; EEEEEE
 61: I_ADDR_S_IS0 : Address, Short, IS0.; Addr=0x0016BBF4 ~[0x1F4]
 64: I_ATOM_F1 : Atom format 1.; E
 65: I_ADDR_S_IS0 : Address, Short, IS0.; Addr=0x0016BD44 ~[0xBD44]
 68: I_ATOM_F3 : Atom format 3.; NNE
 69: I_ATOM_F1 : Atom format 1.; E
```


This raw trace packet output, ETMv4 in this case, is great for infrastructure debugging but of little value for system troubleshooting scenarios. These packets are further decoded by the OpenCSD library into a set of generic packets, describing core state and instruction ranges executed. The _report and script_ commands will filter the packets they get back from the decoder and the packets related to executed instruction ranges will be accounted for and submitted for synthesis.  In Perf terminology, the synthesis process deals with how decoded and relevant events are presented to users.

When using the _report_ utility packets are synthesises to form a flame graph, where hot spots can be identified quickly:

_mpoirier@t430:~/work/linaro/coresight/jun01-user$ perf report --stdio_


```c
# Children      Self  Command  Shared Object     Symbol                
# ........  ........  .......  ................  ......................
#
    4.13%     4.13%  uname    libc-2.21.so      [.] 0x0000000000078758
    3.74%     3.74%  uname    libc-2.21.so      [.] 0x0000000000078e50
    2.06%     2.06%  uname    libc-2.21.so      [.] 0x00000000000fcaf4
    1.65%     1.65%  uname    libc-2.21.so      [.] 0x00000000000fcae4
    1.59%     1.59%  uname    ld-2.21.so        [.] 0x000000000000a7f4
    1.50%     1.50%  uname    libc-2.21.so      [.] 0x0000000000078e40
    1.43%     1.43%  uname    libc-2.21.so      [.] 0x00000000000fcac4
    1.31%     1.31%  uname    libc-2.21.so      [.] 0x000000000002f0c0
    1.26%     1.26%  uname    ld-2.21.so        [.] 0x0000000000016888
    1.24%     1.24%  uname    libc-2.21.so      [.] 0x00000000000fcab8
    1.19%     1.19%  uname    ld-2.21.so        [.] 0x0000000000008eb8
    1.18%     1.18%  uname    libc-2.21.so      [.] 0x0000000000078e7c
    1.17%     1.17%  uname    libc-2.21.so      [.] 0x0000000000078778
    1.08%     1.08%  uname    libc-2.21.so      [.] 0x0000000000078e98
    1.04%     1.04%  uname    libc-2.21.so      [.] 0x0000000000072520
    1.04%     1.04%  uname    libc-2.21.so      [.] 0x0000000000078e84
    0.90%     0.90%  uname    libc-2.21.so      [.] 0x0000000000072368
    0.86%     0.86%  uname    libc-2.21.so      [.] 0x00000000000fcac8
    0.83%     0.83%  uname    libc-2.21.so      [.] 0x0000000000071624
    0.81%     0.81%  uname    ld-2.21.so        [.] 0x00000000000084b4
    0.80%     0.80%  uname    libc-2.21.so      [.] 0x0000000000074900
    0.80%     0.80%  uname    libc-2.21.so      [.] 0x00000000000726c0
    0.79%     0.79%  uname    libc-2.21.so      [.] 0x0000000000078e54
    0.79%     0.79%  uname    libc-2.21.so      [.] 0x00000000000728d0
    0.75%     0.75%  uname    libc-2.21.so      [.] 0x0000000000078e74_
```

The above shows that 4.13% of all the instruction ranges started in library libc-2.21.so at address 0x0000000000078758.  Using the source code, the DSO file and an objdump utility it is possible to quickly identify the function that was referenced.  It is important to keep in mind that flame graphs are generated using the _entry_ point only.  Nothing can be deduced about the path through the code that was taken after that.

From more accurate results it is suggested to work with the _script_ command where a user supplied script can take advantage of all the information conveyed by synthesised events by way of the [perf_sample structure](http://lxr.free-electrons.com/source/tools/perf/util/event.h#L180).  An example is the _cs-trace-disasm.py_ script produced by Linaro:


```c
FILE: /lib/aarch64-linux-gnu/ld-2.21.so CPU: 0
         7f9175cd80:   910003e0        mov     x0, sp
         7f9175cd84:   94000d53        bl      7f917602d0 <free@plt+0x3790>
FILE: /lib/aarch64-linux-gnu/ld-2.21.so CPU: 0
         7f917602d0:   d11203ff        sub     sp, sp, #0x480
         7f917602d4:   a9ba7bfd        stp     x29, x30, [sp,#-96]!
         7f917602d8:   910003fd        mov     x29, sp
         7f917602dc:   a90363f7        stp     x23, x24, [sp,#48]
         7f917602e0:   9101e3b7        add     x23, x29, #0x78
         7f917602e4:   a90573fb        stp     x27, x28, [sp,#80]
         7f917602e8:   a90153f3        stp     x19, x20, [sp,#16]
         7f917602ec:   aa0003fb        mov     x27, x0
         7f917602f0:   910a82e1        add     x1, x23, #0x2a0
         7f917602f4:   a9025bf5        stp     x21, x22, [sp,#32]
         7f917602f8:   a9046bf9        stp     x25, x26, [sp,#64]
         7f917602fc:   910102e0        add     x0, x23, #0x40
         7f91760300:   f800841f        str     xzr, [x0],#8
         7f91760304:   eb01001f        cmp     x0, x1
         7f91760308:   54ffffc1        b.ne    7f91760300 <free@plt+0x37c0>
FILE: /lib/aarch64-linux-gnu/ld-2.21.so CPU: 0
         7f91760300:   f800841f        str     xzr, [x0],#8
         7f91760304:   eb01001f        cmp     x0, x1
         7f91760308:   54ffffc1        b.ne    7f91760300 <free@plt+0x37c0>
FILE: /lib/aarch64-linux-gnu/ld-2.21.so CPU: 0
         7f91760300:   f800841f        str     xzr, [x0],#8
         7f91760304:   eb01001f        cmp     x0, x1
         7f91760308:   54ffffc1        b.ne    7f91760300 <free@plt+0x37c0>
FILE: /lib/aarch64-linux-gnu/ld-2.21.so CPU: 0

```

Here we can see exactly the path a processor took through the code.  The first field is the address in the DSO, the second the OPcode as found in the DSO at that specific address while the remaining of the line depicts an assembly language representation of the instructions as provided by objdump.  Instructions on how to setup an environment capable of producing the above output can be found on the [openCSD](https://github.com/Linaro/OpenCSD/blob/opencsd-0v002/HOWTO.md) website.

### **Conclusion**


In this post we presented the main elements used to integrate the CoreSight framework with the Linux Perf core.  In kernel space CoreSight tracer configuration and control functions are folded in the PMU interface, allowing the Perf core to control trace generation the same way it does with any other system monitoring metrics.  In user space the very valuable metadata, along with trace session blobs, are extracted from the _perf.data_ file and submitted to the _decoder_ for packet extraction.  Different synthesis methods are offered depending on the level of details needed, i.e the popular flame graph is generated using _perf report_ command while more detailed analysis can be rendered by python or perl scripts.

An upcoming post on this blog will feature the OpenCSD library in detail.  It will introduce the different components, how these are used to decode trace,  and the C++ and C APIs allowing integration with various standalone programs.  The library example and test programs, which demonstrate using the library will also be presented.