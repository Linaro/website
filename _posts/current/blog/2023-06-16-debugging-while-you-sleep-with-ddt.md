---
layout: post
title: Debugging While You Sleep with DDT
description: In this blog we provide a step by step guide to debugging with
  Linaro DDT. Read more here!
date: 2019-04-02 02:53:28 +01:00
image: /assets/images/content/Datacenter.jpg
tags:
  - Linaro Forge
  - HPC
category: blog
author: Beau_Paisley
---
In this post I am going to focus on running DDT from the command line. I will present a few use cases on how the utility of offline debugging can be expanded by running from the command line and post-processing CSV output.

# Look Like a Guru – Embrace the Command Line

{% include image.html path="/assets/images/content/command-line.jpg" alt="command line" %}

The DDT graphical user interface much like many application GUIs provides a simplifying, easy to use method of accessing the tool. The GUI accelerates the learning curve and makes quick work of many tasks without even consulting the user guide.  Using the command line, however, adds many flexible capabilities to your debugging tools box.

# Command Line Basics

The DDT GUI provides extensive flexibility of how breakpoints, watchpoints, and tracepoints are set. This robustness of capability is completely accessible through the command line. Let’s start with breakpoints, the good old bread and butter in any debugging session.

{% include image.html path="/assets/images/content/command-line-basics-breakpoints.png" alt="command line basics breakpoints" %

The first 3 arguments of this offline run were introduced in my first blog but let’s have a quick review. The -offline flag is telling DDT to run without the user interface. The -o flag is providing the name of a file for output.  Remember, if the suffix of the file is anything but .html then DDT creates a flat CSV file. The -mem-debug flag turns on balanced memory debugging. Remember that best practices encourage that we always run our program within the debugger with memory debugging turned on even if we are not looking for a memory problem.  Memory related bugs are always easier to fix when found sooner than later.

Now, on to the new stuff! The -break-at flag specifies a breakpoint location. Let’s use the ddt –help option to get a quick summary on the flag; a good approach for a concise review or maybe when you’re working on the bus without your hotspot.

{% include image.html path="/assets/images/content/command-line-basics-breakpoints-2.png" alt="command line basics breakpoints 2" %

For my run I am asking to break at line 73 in the one file comprising my project.

{% include image.html path="/assets/images/content/command-line-basics-break-73.png" alt="command line basics break 73" %

Since I specified an output file with a suffix other than .html DDT created a flat CSV file; not as pretty as those interactive HTML files but a lot more compact and amenable to post-processing. The excerpt above shows the file output at the point of the requested breakpoint.

{% include image.html path="/assets/images/content/forge-hit-limits.png" alt="forge hit  limits" %

Like the DDT user interface, command line options support controlling hit limits and setting conditionals.  Let’s expand our offline example from above to include a conditional breakpoint.

{% include image.html path="/assets/images/content/forge-coding-example-1.png" alt="forge coding example 1" %

For this run I have added a conditional to only break on line 73 if the value of argc is greater than 2.

{% include image.html path="/assets/images/content/forge-coding-example-2.png" alt="forge coding example 2" %

Searching the output file, we can see that the breakpoint was not triggered; good deal as argc equaled 1 for that run.  Let’s add a couple arguments and see if the breakpoint is correctly triggered.

{% include image.html path="/assets/images/content/forge-coding-example-3.png" alt="forge coding example 3" %

And now searching the output we can see that we halted at that location and we can open the file and go to the breakpoint location to review the state of the program.

{% include image.html path="/assets/images/content/forge-coding-example-4.png" alt="forge coding example 4" %

Setting hit limits and defining conditionals for watchpoints and tracepoints is equivalent to breakpoints.  We will leave that as an excellent exercise opportunity for the reader.

# Sifting Through a Mountain of Debug Data

Best practices when debugging require a systematic, disciplined approach.  Before hitting the run button always apply the following steps;

A) Create a hypothesis about the nature of the bug. 

B) Try to limit the domain of the problem as much as possible. For example, if you know the error does not happen until the j iteration of a given loop, then don’t output data until after the j step. This reduces the amount of data to sort through and reduces the overhead on the debugger.

C) Create an experiment to support your hypothesis. This may involve carefully setting breakpoints, tracepoints, and watchpoints. 

D) Save a description of your experiment in the debugger log book. Then, and only then hit the run button! If you find the bug in this session good for you; discipline paid off. If not, save the description of your session so it can be referenced in future debugging sessions.

The process above always pays dividends when debugging. For some bugs such as those that are sporadic, random, or perhaps only evident at large scale it may be very challenging to create a focused hypothesis or limit the domain of the problem. Offline debugging can be particularly effective for finding those kinds of issues. Logging debug information to a file enables us to gather far more data than could ever be reviewed when using the debugger in interactive mode. Let’s run our application with a tracepoint on the inner loop of the calculation.

{% include image.html path="/assets/images/content/forge-coding-example-5.png" alt="forge coding example 5" %

This run is telling DDT to set a tracepoint on line 98 of my single file application and to output the values of sum and x at that point. Opening the output file, we can review the tracepoint output.

{% include image.html path="/assets/images/content/forge-coding-example-6.png" alt="forge coding example 6" %

My implementation for calculating pi used 1000 timesteps but I am only displaying the first 4 iterations. From this we can see that even in the CSV format DDT uses a summary-oriented technique like sparklines and the gui-based tracepoint output tab. In addition to direct inspection this format is amenable to post-processing with tools like sed, grep and awk to help further refine your search.

# DDT: Last Thoughts Before Bed Time

Over the years of presenting and teaching DDT usage I have learned that folks like the idea of learning a debugger about as much as getting up before sunrise to go for a run in the freezing rain. Much like your exercise commitment is an investment in your well being and future good health, investing in your development tools is an investment in your efficacy as a software engineer. So, stick to your commitment of best practices, have a look in the Arm Forge User Guide to review the full breadth of offline debugging capability, and commit to learning these capabilities before the frantic search for the next bug begins. Rest assured that with this elevated discipline when the next monster bug comes along you won’t be losing much sleep before putting it in its place.  And maybe, just maybe, the next sleeting rain morning run might not be onerous at all.

# Bonus: Get your free Linaro HPC Tools trial

Simply click on the[ link here](https://www.linaroforge.com/freeTrial/) to get your free Linaro HPC Tools trial today.