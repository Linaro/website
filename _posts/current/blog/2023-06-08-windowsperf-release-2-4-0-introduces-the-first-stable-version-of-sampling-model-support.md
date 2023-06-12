---
layout: post
title: WindowsPerf release 2.4.0 introduces the first stable version of sampling
  model support
description: In this blog we talk about the highlights from the WindowsPerf
  2.4.0 release. Read more here!
date: 2023-06-08 04:06:32 +01:00
image: /assets/images/content/blog_python_woa.jpg
tags:
  - Windows on Arm
category: blog
author: " Przemyslaw_Wirkus"
---
# Introduction

WindowsPerf is a (Linux perf inspired) lightweight Windows on Arm performance profiling tool. Profiling is based on ARM64 PMU (Performance Monitor Unit) and its hardware counters. Currently, WindowsPerf is in the early stages of development, but it already supports the counting model for obtaining aggregate counts of occurrences of special events, and sampling model for determining the frequencies of event occurrences produced by program locations at the function, basic block, and/or instruction levels.

WindowsPerf is using a custom Kernel mode driver model to pass Windows Kernel API limitations such as lack of counter multiplexing or support for custom IP blocks. We are currently driving our architecture to a device-tree like approach which will allow users to create from template their own Kernel driver and instrument counters in their own custom IP block on WOA.

WindowsPerf can instrument Arm PMU performance counters. As of now, it can also collect:

* Core PMU counters for all or specified CPU core, this includes core PMU counting, event multiplexing & grouping, and timeline mode.
* unCore PMU counters, now system cache (DSU-520) and DRAM (DMC-620) are supported.

In this blog we will talk about the latest WindowsPerf release which is a major step in the project development. We’ve introduced a new major feature (sampling) and improved our release process with binary releases which contain now signed Kernel mode driver.

# Release 2.4.0

We are happy to announce the latest [WindowsPerf](https://gitlab.com/Linaro/WindowsPerf/windowsperf) release version [2.4.0](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/2.4.0). This major release is a continuation of WindowsPerf development. In this release we’ve introduced the first stable version of sampling model support. Sampling enables developers to perform more in depth performance analysis.

With counting model supported from day one, we are happy to announce that we’ve added per core sampling feature (**wperf sample** command line option). Sampling is used for determining the frequencies of event (per core, not process) occurrences produced by program locations at the function, basic block, and/or instruction levels. With version 2.4.0 sampling currently supports function level sampling. Users now can sample native WOA executables and determine hot function locations. We are actively working on adding source code and instruction level “hot code” annotation.

How does it work? Users can specify a set of events (with sampling frequencies) from command line, pin their “sampled” process to a given core and monitor CPU core for events with **wperf** user space command line tool. We will expand on that below with our CPython example. Please note that WindowsPerf can correctly determine functions for process executable and associated with it (imported by process) Dynamic Link Libraries (DLL). WindowsPerf reads associated with executable (process image) PE and PDB files.

Release 2.4.0 contains signed Kernel **wperf-driver,** user space **wperf** command line tool, and **wperf-devgen** command line tool used for kernel driver installation.

You can find Linaro Connect 2023 WindowsPerf introductory presentation [here](https://www.google.com/url?q=https://resources.linaro.org/en/resource/2rFnqDJ9bvHvjNJX5oCrYn&sa=D&source=docs&ust=1686241409365297&usg=AOvVaw3KcWJzgnonF4QDf19ltcNP). And examples of wperf command line tool usage [here](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/blob/main/wperf/README.md).

# Highlights from the 2.4.0 Release

You can find a full list of improvements [here](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/2.4.0#changelog). Below is a summary of the highlights:

* Signed Kernel driver - users do not have to disable SecureBoot to use WindowsPerf.
* Stop sampling when the sampled process exits.
* Comma separated printouts for large values of counters.
* New tool [wperf-devgen](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/blob/main/wperf-devgen/README.md) which will help users install WindowsPerf signed Kernel driver without devgen on their system.
* Improvements to timeline.
* Deduce from command line image and PDB file(s) for sampled executable.
* Add to sampling support for DLLs symbols resolution.

Release 2.4.0 is a reflection of our carefully crafted roadmap. We work with customers in order to deliver critical new features and functionalities as soon as possible. We’ve been able to squeeze in a three month development window the majority of requested features and stability improvements. We’ve worked on driver stability and refactored user-space application to pave the way for new incoming features such as C API library support, annotate feature (with perf.data format support), integration with MSVC extension framework and WPA plugin base. We are looking forward to the next release when we will present even more great features. This release is dedicated to native Windows on Arm developers porting their applications to WOA, experienced engineers seeking native ARM64 PMU performance tools, toolchain engineers running microbenchmarks and more!

## Sampling CPython example

In this example we will build CPython from sources and execute simple instructions in Python interactive mode to obtain sampling from CPython runtime image. To achieve that we will:

* Build CPython binaries targeting ARM64 from sources in debug mode.

  * We need access to PE and PDB files for symbol resolution in CPython executable and associated DLLs built with the project.
* Pin `python_d.exe` interactive console to CPU core no. 1.
* Try to calculate an absurdly large integer number [Googolplex](https://en.wikipedia.org/wiki/Googolplex) to stress CPython and get a simple workload.
* Run counting and sampling to obtain some simple event information.

Let's go...

Let's first build CPython locally in debug mode. We will in this example cross-compile CPython to the ARM64 target. Build machine in this example is x64 host

```
> git clone git@github.com:python/cpython.git
> cd cpython
> git log -1
commit 1ff81c0cb67215694f084e51c4d35ae53b9f5cf9 (HEAD -> main, origin/main, origin/HEAD)
Author: Eric Snow <ericsnowcurrently@gmail.com>
Date:   Tue Mar 14 10:05:54 2023 -0600
> cd PCBuild
> build.bat -d -p ARM64
...
> arm64>python_d.exe
Python 3.12.0a6+ (heads/main:1ff81c0cb6, Mar 14 2023, 16:26:50) [MSC v.1935 64 bit (ARM64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

We will now copy above CPython binaries from `PCbuild/arm64 build` directory to our WOA ARM64 machine. Do not forget the Lib directory containing extra libs CPython!

### Example 1: Sampling CPython executing Googolplex calculation

* Let’s pin a new CPython `python_d.exe`  process (_d suffix tells us it’s an executable with debug information!) on CPU core no. 1:

```
> cd PCbuild/arm64
> start /affinity 2 python_d.exe
```

* Check with the Task Manager if `python_d.exe` is running on core no. 1. 
* Newly created CPython interactive window will allow us to execute example workloads. In the below example we will calculate a very large integer `10^10^100`.

```
Python 3.12.0a6+ (heads/main:1ff81c0cb6, Mar 14 2023, 16:26:50) [MSC v.1935 64 bit (ARM64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> 10**10**100
```

Note: [start](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/start) command line switch `/affinity <hexaffinity>` applies the specified processor affinity mask (expressed as a hexadecimal number) to the new application. In our example decimal `2` is `0x02` or `0b0010`. This value denotes CPU core no. 1 as 1 is a 1st bit in the mask, where the mask is indexed from 0 (zero).

* Execute counting to assess which events are “hot” - this step of course varies from use case to use case. In our case we knew that Googleplex calculation will influence events from the `imix` metric.

```
>wperf stat -m imix -c 1 sleep 3
counting ... done

Performance counter stats for core 1, no multiplexing, kernel mode excluded, on Arm Limited core implementation:
note: 'e' - normal event, 'gN' - grouped event with group number N, metric name will be appended if 'e' or 'g' comes from it

        counter value  event name  event idx  event note
        =============  ==========  =========  ==========
          23859193503  cycle       fixed      e
           8877337489  inst_spec   0x1b       g0,imix
            712165071  dp_spec     0x73       g0,imix
           3464962917  vfp_spec    0x75       g0,imix
              6647740  ase_spec    0x74       g0,imix
           9116947967  ld_spec     0x70       g0,imix
             13268033  st_spec     0x71       g0,imix

                3.31 seconds time elapsed
```

* Sampling for `ld_spec` event which, by looking at counting is dominant (at least for imix metrics).

Let's sample for the `ld_spec` event. Please note that you can specify process image name and PDB file name with wperf’s `-pdb_file python_d.pdb` and `-image_name python_d.exe` command line options. In our case `wperf` is able to deduce image name (same as PE file name) and PDB file from PE file name.
We can stop sampling by pressing `Ctrl-C` in `wperf` console or sampling will end when sampled process exits.

```
>wperf sample -e ld_spec:100000 -pe_file python_d.exe -c 1
base address of 'python_d.exe': 0x7ff6e0a41270, runtime delta: 0x7ff5a0a40000
sampling ....e.e.e.e.e.eCtrl-C received, quit counting... done!
======================== sample source: ld_spec, top 50 hot functions ========================
 75.39%       579  x_mul:python312_d.dll
  6.51%        50  v_isub:python312_d.dll
  5.60%        43  _Py_atomic_load_32bit_impl:python312_d.dll
  3.12%        24  v_iadd:python312_d.dll
  2.60%        20  PyErr_CheckSignals:python312_d.dll
  2.08%        16  unknown
  1.17%         9  x_add:python312_d.dll
  0.91%         7  _Py_atomic_load_64bit_impl:python312_d.dll
  0.52%         4  _Py_ThreadCanHandleSignals:python312_d.dll
  0.52%         4  _PyMem_DebugCheckAddress:python312_d.dll
  0.26%         2  read_size_t:python312_d.dll
  0.13%         1  _Py_DECREF_SPECIALIZED:python312_d.dll
  0.13%         1  k_mul:python312_d.dll
  0.13%         1  _PyErr_CheckSignalsTstate:python312_d.dll
  0.13%         1  write_size_t:python312_d.dll
  0.13%         1  _PyObject_Malloc:python312_d.dll
  0.13%         1  pymalloc_alloc:python312_d.dll
  0.13%         1  pymalloc_free:python312_d.dll
  0.13%         1  _PyObject_Init:python312_d.dll
  0.13%         1  _PyMem_DebugRawFree:python312_d.dll
  0.13%         1  _PyLong_New:python312_d.dll
```

In the above example we can see that the majority of code executed by CPython's `python_d.exe` executable resides inside the `python312_d.dll` file.
Note that in `sampling ....e.e.e.e.e.` progressing printout '.'  represents sample payload (of 128 samples) received from the driver. 'e' represents an unsuccessful attempt to fetch the whole sample payload. `wperf`is polling `wperf-driver` awaiting sample payload.

### Example 2: sampling of CPython executable on ARM64 running simple Fibonacci lambda

* Let's execute a new portion of code to see a totally different sampling profile. Please note that again CPython executes code from its `python312_d.dll`.

```
>>> fib = lambda n: n if n < 2 else fib(n-1) + fib(n-2)
>>> fib (100)
```

* Sampling again for `ld_spec`:

```
>wperf sample -e ld_spec:10000 -pe_file python_d.exe -pdb_file python_d.pdb -image_name python_d.exe -c 1
base address of 'python_d.exe': 0x7ff6e0a41270, runtime delta: 0x7ff5a0a40000
sampling ....ee.e.eCtrl-C received, quit counting... done!
======================== sample source: ld_spec, top 50 hot functions ========================
 35.42%       136  _PyEval_EvalFrameDefault:python312_d.dll
  9.38%        36  unicodekeys_lookup_unicode:python312_d.dll
  5.47%        21  _PyFrame_Stackbase:python312_d.dll
  3.91%        15  GETITEM:python312_d.dll
  3.65%        14  dictkeys_get_index:python312_d.dll
  3.39%        13  _Py_DECREF_SPECIALIZED:python312_d.dll
  3.12%        12  _PyFrame_ClearExceptCode:python312_d.dll
  2.86%        11  _PyFrame_Initialize:python312_d.dll
  2.60%        10  DK_UNICODE_ENTRIES:python312_d.dll
  2.60%        10  _Py_dict_lookup:python312_d.dll
  2.60%        10  unicode_get_hash:python312_d.dll
  2.34%         9  clear_thread_frame:python312_d.dll
  2.08%         8  _PyFrame_StackPush:python312_d.dll
  2.08%         8  PyDict_Contains:python312_d.dll
  1.82%         7  Py_INCREF:python312_d.dll
  1.82%         7  _PyThreadState_PopFrame:python312_d.dll
  1.82%         7  _PyErr_Occurred:python312_d.dll
  1.82%         7  medium_value:python312_d.dll
  1.56%         6  get_small_int:python312_d.dll
  1.30%         5  PyTuple_GET_SIZE:python312_d.dll
  1.30%         5  _PyLong_FromSTwoDigits:python312_d.dll
  1.04%         4  Py_XDECREF:python312_d.dll
  1.04%         4  _Py_atomic_load_64bit_impl:python312_d.dll
  0.78%         3  Py_IS_TYPE:python312_d.dll
  0.78%         3  _Py_EnterRecursivePy:python312_d.dll
  0.52%         2  _PyFrame_GetStackPointer:python312_d.dll
  0.52%         2  read_u16:python312_d.dll
  0.52%         2  _PyLong_Add:python312_d.dll
  0.52%         2  _PyFrame_PushUnchecked:python312_d.dll
  0.52%         2  Py_SIZE:python312_d.dll
  0.26%         1  _Py_IncRefTotal:python312_d.dll
  0.26%         1  _PyFrame_SetStackPointer:python312_d.dll
  0.26%         1  unknown
```

WindowsPerf can annotate which “hot” functions are executed when given event occurrences overflow counties. Please remember that in-depth performance analysis of sampling results is not trivial and may require you factor in effects such as performance events skid.

# WindowsPerf releases update

We’re planning to have a major release every three months with the next release 2.5.0 coming in June/July 2023. During the time between the releases, we will be able to implement 2-3 new major features (derived from our [requirements](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/requirements_management/requirements)), improve documentation and fix issues.

# Where to find us?

For source code and binary releases please visit our [WindowsPerf webpage at GitLab](https://gitlab.com/Linaro/WindowsPerf/windowsperf). Additional project resources include [WindowsPerf Wiki](https://linaro.atlassian.net/wiki/spaces/WPERF/overview) and [WindowsPerf JIRA](https://linaro.atlassian.net/jira/software/c/projects/WPERF/boards/169) project board.

If you have any questions, issues you would like to raise please visit our [WindowsPerf GitLab issue page](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/issues) and create a new issue with a clear description of the problem you're facing or issue you want help with.