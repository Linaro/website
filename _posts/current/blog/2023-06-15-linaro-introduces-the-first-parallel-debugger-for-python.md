---
layout: post
title: Linaro introduces the first parallel debugger for Python
description: In this blog we talk about the first parallel debugger for Python
  introduced by Linaro. Read more!
date: 2020-07-22 08:30:19 +01:00
image: /assets/images/content/CCS_banner_image.jpg
tags:
  - HPC
  - Linaro Forge
category: blog
author: Patrick.Wohlschlegel
---
# Introduction

Linaro announces the release of Linaro Forge 20.1 featuring various enhancements and bug fixes across all products. In particular, this new release includes:

* Native parallel debugging of Python applications in DDT
* Improvements to performance analysis of Nvidia GPU in both MAP and Performance Reports
* Simplifications to our packaging, through the integration of Performance Reports into the Forge installation files
* Support for the latest development environments for Arm-based servers.

For more in-depth information including a full breakdown of the latest features and bug fixes please see release notes history. 

# Python Debugging

Attach to mpi4py and serial applications by inserting `%allinea_python_debug%` into the command line:

`1 bin/ddt mpirun -np 2 python3 %allinea_python_debug% python-blog.py`

O﻿r

`1﻿ bin/ddt python3 %allinea_python_debug% python-blog.py`

The MPI version drops you into a stack starting at "`import mpi4py`". Using step-in, step-out and step-over in Python code all work in the same way as C, C++ and Fortran.

{% include image.html path="/assets/images/content/linaro-ddt-python-debugging-1.png" alt="linaro ddt python debugging" %}

All the same advanced breakpoint features as C and C++ are supported including function name, conditional and triggering every N hits breakpoints.
Setting a breakpoint in a loop with the condition i == 10 stops at that point, as can be seen from the local variables:

{% include image.html path="/assets/images/content/linaro-ddt-python-debugging-2.png" alt="linaro ddt python debugging" %}

The evaluation window can be used to inspect globals, locals or even execute Python expressions in the selected frame:

{% include image.html path="/assets/images/content/linaro-ddt-evaluation-window.png" alt="linaro ddt evaluation window" %}

As well as debugging Python, the stack also shows a merged view of Python and native code. So the steps that led up to some native code being executed are visible. For example, here is what the stack looks like when pausing in a numpy dot product which uses BLAS under the hood. Registers can be inspected and instructions can be stepped over using Forge's assembly debugging mode:

{% include image.html path="/assets/images/content/linaro-forge-s-assembly-debugging-mode.png" alt="linaro forge's assembly debugging mode" %}

# Performance Reports and Forge Integration

Performance Reports is now distributed with Forge as a single combined installation, launched via `bin/perf-report` in the Forge installation directory.

We have also renamed some lesser-used or behind-the-scenes binaries and scripts to be more appropriate. While this will not affect most users, any users of manual launch should use `forge-client` instead of (`ddt-client` or `allinea-client`) and users of .qtf scripts should use `forge-mpirun` in place of `ddt-mpirun`.

# Revamp of GPU Metrics

CUDA 10.2 and GPU Metrics are now supported on x86_64 and PowerPC. We have removed the "GPU Temperature" and "Time Spent in Global Memory Accesses" metrics to provide a more stable metric collection mechanism that is consistent across supported platforms.

GPU Utilization, GPU Memory Usage and GPU Power Usage are collected once the NVIDIA Management library is installed (<https://developer.nvidia.com/nvidia-management-library-nvml>). Warp Stall Reasons and Line metrics are collected using MAP's CUDA Kernel Analysis feature based on CUPTI, CUDA's profiling interface. MAP supports profiling compiler optimized code but it is necessary to compile with the flag `-lineinfo` to use MAP's CUDA Kernel Analysis feature. CUDA Kernel Analysis can be enabled with the GUI's Run Dialog or with the command line using `--cuda-kernel-analysis`. An example workflow is

```
$ nvcc -O3 -g -lineinfo cuda_app.cu -o cuda_app
$ map --profile --cuda-kernel-analysis cuda_app
```

The following is a MAP profile of CloverLeaf_CUDA on Oak Ridge National Laboratory's Summit. It demonstrates both GPU Metric collection and CUDA Kernel Analysis on PowerPC. 

{% include image.html path="/assets/images/content/gpu-metrics-image.png" alt="gpu metrics image" %}

# Graphical Interface Refresh

Forge has been updated to Qt 5, which means a crisper and more performant GUI, as well as bug fixes and stability improvements. In particular, macOS is better supported when in dark appearance mode.

# Documentation

## Developer and reference guides

* Linaro Performance Reports is a merged component of the Linaro Forge product from version 20.1 onwards.
  The Linaro Performance Reports user guide is now combined with the Linaro Forge user guide, and is available from [https://developer.arm.com/docs/101136/latest](https://developer.arm.com/documentation/101136/latest.).
* Linaro License Server user guide is available from [https://developer.arm.com/docs/101169](https://developer.arm.com/documentation/101169/latest/).

# C﻿onclusion

Despite the very unusual times, we are all experiencing, the team has been able to push new, innovative features. With this release, Linaro is the first company to release a parallel debugger for Python which includes all the features one would expect. We are looking forward to hearing what you think, just click on the button below!