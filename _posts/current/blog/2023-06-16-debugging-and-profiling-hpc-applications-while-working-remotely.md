---
layout: post
title: Debugging and Profiling HPC Applications while Working Remotely
description: In this blog we talk about how to debug and profile HPC
  applications while working remotely. Read more here!
date: 2020-07-20 09:29:41 +01:00
image: /assets/images/content/Banner_Toolchain.jpg
tags:
  - Linaro Forge
  - HPC
category: blog
author: Nick.Forrington
---
The ongoing impact of the COVID-19 pandemic means that more and more scientific research is being conducted by teams working remotely.

While remote access to compute resources is nothing new, visual tasks such as debugging and profiling can become difficult as network latencies increase, and remote graphics solutions become unresponsive.

The good news is that the Linaro Forge cross-platform tools suite provides various GUI and command-line methods for remote debugging and profiling, including the following components:

* [Linaro DDT](https://www.linaroforge.com/linaroDdt/)
* [Linaro MAP](https://www.linaroforge.com/linaroMap/)
* [Linaro Performance Reports](https://www.linaroforge.com/linaroPerformanceReports/)

Here we describe some of those methods that you can use to quickly get up and running.

# Linaro Forge remote client

The Linaro Forge remote client allows you to debug and profile remote jobs, while running the GUI on your local machine. This is faster than remote-X11 (particularly for slow connections) and provides a native GUI.

The remote client is available for Windows, Mac, and Linux, and can also be used as a local viewer for collected MAP profiles.

The Linaro Forge remote client will connect and authenticate using SSH, and use existing licensing from your remote compute resource, so minimal setup is required.

{% include image.html path="/assets/images/content/linaro-forge-remote-launch-settings.png" alt="linaro forge remote launch settings" %}

When you are connected, Forge looks and behaves as it does when running locally, but launches jobs, browses for files, and uses the configuration found on the remote system.

Additionally, the Reverse Connect feature allows you to easily launch jobs with DDT and MAP using your usual terminal.

For example, once connecting your remote client, run the following in your remote terminal:

`ddt --connect mpirun -np 24 ./a.out`

O﻿r

`map --connect mpirun -np 24 ./a.out`

When you execute the DDT or MAP --connect command, a connection is made to your existing remote client, and the specified mpirun command is executed to start up your program.

This provides a convenient way for the remote client to work with batch systems and avoids the need to tell DDT or MAP about any program parameters, environment variables, or module files required.

For more information on the Forge Remote Client see:

* [Forge remote client setup and usage](https://www.olcf.ornl.gov/tutorials/forge-remote-client-setup-and-usage/)
* [Connecting to a remote system](https://developer.arm.com/documentation/101136/2010/Arm-Forge/Connecting-to-a-remote-system)

# Using Linaro Forge from the command-line

While the previous section describes how to better use the Forge GUI on remote connections, sometimes working without a GUI can be preferable.

Not only is this useful when working remotely, it can be useful to drive the tools inside batch scripts, or integrate them into Continuous Integration workflows.

## Debugging Offline with DDT

Linaro DDT is best known as an interactive debugger. But whether an unreliable connection makes using a GUI difficult, or you are not sure if you are at your desk when your job is scheduled, offline debugging can be a very useful alternative. 

Offline debugging provides the complete breadth of DDT debugging capabilities but without user interaction, and without using the GUI.

Instead, DDT generates a report when your job completes, detailed any crashes or areas of interest (specified when launching), along with relevant variables. This mode can simplify the debugging process when you are working in the easily interrupted WFH world.

For example:

`ddt --offline mpirun -n 4 PROGRAM [ARGUMENTS]...`

This shows an example detecting a program crash, highlighting the offending line of code, along with variables.

{% include image.html path="/assets/images/content/debugging-offline-with-ddt.png" alt="debugging offline with ddt" %}

With command-line arguments or session files, you can define breakpoints, watchpoints, and tracepoints to gather more extensive data.

# Collecting MAP profiles from the command line

When you are debugging, it is common to submit runs from inside a debugger. For profiling, the common approach would be to run the program offline, producing a profile file that can be inspected later. To do this, replace your usual program invocation with a MAP command such as:

`map --profile mpirun -n 4 PROGRAM [ARGUMENTS]...`

MAP runs without a GUI, gathering data to a .map profile file.

When you have collected your profile, you can:

1. Connect the remote client, and browse to open it (see previous)
2. Copy it to your local machine, and open it with the remote client
3. Convert it to a Performance Report (see the following)

# Characterise performance with Performance Reports

[Linaro Performance Reports](https://www.linaroforge.com/linaroPerformanceReports/) is a low-overhead tool that produces one-page text and HTML reports summarizing and characterizing both scalar and MPI application performance.

These reports can be particularly useful when working remotely, because no remote GUI is required – all that is needed is a web browser.

Reports are generated by simple modifications to your launch command:

`perf-report mpirun -n 4 PROGRAM [ARGUMENTS]...`

You can copy the resulting report to your local machine and open it with your web browser. Here you’ll see summary information:

{% include image.html path="/assets/images/content/performance-reports-summary-information.png" alt="performance reports summary information" %}

As well as sections displaying more detail and advice for CPU usage, MPI, I/O, Threading/OpenMP usage, memory usage, and energy usage.

{% include image.html path="/assets/images/content/performance-reports-cpu-usage.png" alt="performance reports cpu usage" %}

For more information about performance reports, see:

* [Linaro Forge user guide](https://www.linaroforge.com/documentation/)
* [Interpreting performance reports](https://developer.arm.com/documentation/101136/2010/Performance-Reports/Interpreting-performance-reports)

# [](https://developer.arm.com/documentation/101136/2010/Performance-Reports/Interpreting-performance-reports)Summary

In this article, we have introduced potential solutions to some of the issues faced when debugging and profiling HPC code when working remotely.

Using Linaro Forge, we have covered how to improve the performance of GUI solutions, by using the remote client rather than generic solutions like X11-forwarding.

We have also discussed how to bypass the GUI entirely, and use DDT, MAP, and Performance reports non-interactively from the command line, which can help with slow connections, and dealing with busy batch systems.

[R﻿equest free Linaro Forge trial](https://www.linaroforge.com/freeTrial/)