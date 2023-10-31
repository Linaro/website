---
layout: post
title: Introducing 1.0.0-beta release of WindowsPerf Visual Studio extension
description: "Introducing WindowsPerf 1.0.0-beta Visual Studio extension:
  Explore the new sampling feature for optimized code performance. Dive deep
  into what's already there, tutorial steps, and upcoming features in this
  Linaro open-source initiative. Download and be a part of our journey!"
date: 2023-10-02 10:31:29 +01:00
image: /assets/images/content/Code_Image_Core_tech.jpg
tags:
  - WindowsPerf
  - Windows on Arm
category: blog
author: nader.zouaoui
---
The [WindowsPerf](https://gitlab.com/Linaro/WindowsPerf/windowsperf) team proudly presents the 1.0.0-beta release of their Visual Studio extension, focusing on a dynamic sampling feature for optimised code performance. This version of the extension is compatible starting with WindowsPerf [3.0.0](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/3.0.0)!

This Linaro open-source project is available for [download](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/releases/1.0.0-beta). The new sampling feature, built on [WindowsPerf’s sampling model](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#sampling-model), allows detailed performance analysis and displays hot spots in a process, helping developers target and rectify performance bottlenecks. Users can easily navigate through this feature in a familiar Visual Studio 2022 environment.

In this blog, we will go over most of the new features and in-depth tutorials on how to best use the extension.

The stable version 1.0.0 of the extension will be coming later this year. Upcoming enhancements consist of advanced sampling options and introducing the [counting model of WindowsPerf](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#counting-model). Join the open-source journey, access [the beta version](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/releases/1.0.0-beta), and [contribute](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/merge_requests) to the future of WindowsPerf GUI!

## Feature Deep Dive: Sampling Feature

### Implementation Details

The newly integrated sampling feature relies fundamentally on [WindowsPerf](https://gitlab.com/Linaro/WindowsPerf/windowsperf)’s [sampling model](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/tree/main/wperf?ref_type=heads#sampling-model). This model serves as a bedrock for collecting and evaluating the performance metrics  of a given process. The methods employed, `wperf sample` or `wperf record`, are command line options that captures system events and generates a detailed JSON output of all performance counter profile for the process in that process.

Leveraging this output, the WindowsPerf GUI crafts a tree representation of the process's hot spots . By referring to the PDB file, the interface highlights the most frequently accessed lines of code, thus enabling developers to zoom into performance bottlenecks and make necessary code optimizations if possible.

To initiate the sampling process, users need to navigate to View > Sampling Explorer within the interface. Subsequently, the sampling settings dialogue allows users to  configure the command-line arguments, selecting specifics like the binary, event to record, recording frequency, timeout, and any additional arguments for the primary binary. A pivotal feature ensures the process being analysed is pinned to a chosen CPU core. Post configuration, users can seamlessly execute multiple sampling runs, allowing for a comparative analysis across runs.

### Usability Considerations 

Drawing inspiration from the native Test Explorer in Visual Studio 2022, the sampling explorer UI was designed with a similar user experience. The Sampling Explorer UI, a dockable window, is conveniently located under View > Sampling Explorer.

Please  note that for the sampling feature to work, the WindowsPerf Path Configuration needs to be pre-configured [(see link)](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/tree/1.0.0-beta?ref_type=tags#setting-up-the-wperf-path). This ensures the appropriate WindowsPerf binary is used  for the analysis.

## Supporting Features

### Enhanced Settings

Starting with this release, the WindowsPerf GUI mandates a minimum version of  [WindowsPerf 3.0.0](https://gitlab.com/Linaro/WindowsPerf/windowsperf/-/releases/3.0.0).

### Data Handling & Storage

All data collected is stored locally on the user's machine and the data is cleared each time Visual Studio restarts.

## Tutorials & Help

### How to open Sampling Explorer

To open the sampling explorer, you need to go to View > Sampling Explorer

### Setting Your Sampling Preferences

Within the Sampling Explorer window, locate the settings wheel icon and click on it. This will prompt the settings dialog to appear.

### Configuring the Sampling Parameters

The dialog presents several fields for configuration. Essential fields include file payload, CPU core selection, event choice, and desired frequency. Make sure to populate these.

Optionally, you can set other parameters based on your requirements.

A unique feature to note: As you configure, the dialogue offers a real-time preview of the WindowsPerf command. This command will be executed in the background during sampling.

Once satisfied with your configuration, click save.

{% include image.html path="/assets/images/content/configuring-the-sampling-parameters.png" alt="Sampling settings dialog for the WindowsPerf GUI" %}

### Initiating the Sampling Process

Click on the play button to kickstart the sampling.

If you've set a timeout, the process will run for the specified duration. Otherwise, you have the flexibility to end the sampling manually using the stop button.

The stop button can also be used to interrupt the process even if the timeout hasn't lapsed and the collected samples will be shown in the next screen.

### Delving into the Sampling Results

Post-sampling, you'll notice the window divides into two sections: a tree view and a detailed analysis section.

Navigate through the tree view by clicking on the nodes. This will reveal functions triggered, selected events, line numbers in the source code, and the responsible source files.

An added convenience: Any accessible source file appears as a clickable hyperlink. Selecting it will directly open the file within the IDE.

### Implementing Code Adjustments

{% include image.html path="/assets/images/content/implementing-code-adjustments-1.png" alt="Sampling explorer window for WindowsPerf GUI" %}

Based on the insights gathered from the sampling results, proceed to make any required optimizations or edits to your source code.

{% include image.html path="/assets/images/content/implementing-code-adjustments-2.png" alt="How to open a file from the sampling explorer in WindowsPerf GUI" %}

### Re-evaluating Post Edits

Post editing, run the sampling process again.

This allows you to instantly compare and contrast the results before and after your code modifications, ensuring optimal performance improvements.

With these steps, you are well-equipped to make the best of the sampling feature in the WindowsPerf GUI extension. Happy coding and optimizing!

## What's Next

### Project Target Selection in Sampling Settings

Users will soon be able to specify their desired build target settings for sampling. For instance, choices like Debug > ARM64 or Release > AnyCPU will be readily available in the sampling settings dialog without the need to manually select the binary path.

### Sampling Integration with Debug Session

A seamless integration is on the horizon where users can initiate sampling directly from the debug session in Visual Studio 2022. This integration ensures that we can sample a process that is currently being debugged.

### Sampling Active Processes

Users will soon be able to execute sampling on processes (`wperf sample` command line option) that are currently running on their machine, granting them more flexibility and control over their performance analysis.

### Introducing the Counting Feature

We're thrilled to announce that support will be extended for the counting model in WindowsPerf (`wperf stat` command line option). This addition aims to provide developers with even more comprehensive tools for performance analysis and optimization. 

### Be a Part of Our Journey

We're thrilled to share the 1.0.0-beta version of the WindowsPerf GUI extension. Download the release from our [release page](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/releases/1.0.0-beta).

WindowsPerf GUI is an open-source initiative, and its code can be accessed [here](https://gitlab.com/Linaro/WindowsPerf/vs-extension). We warmly invite [contributions](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/merge_requests) and [feedbacks](https://gitlab.com/Linaro/WindowsPerf/vs-extension/-/issues). Your insights can shape the next big feature or refinement, enhancing the tool’s usability and impact.