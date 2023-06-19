---
layout: post
title: Profiling Python and compiled code with Linaro Forge – and a performance
  surprise
description: In this blog we talk about how to profile Python and compiled code
  with Linaro Forge. Read more here!
date: 2018-03-28 03:32:38 +01:00
image: /assets/images/content/hpc-bg.jpg
tags:
  - Linaro Forge
  - HPC
category: blog
author: Patrick.Wohlschlegel
---
If you are developing HPC applications, there is a good chance that you have been in contact with Python these days. Whether you use Python to orchestrate large workflows, to quickly put together small prototypes, to visualize data or even to create actual simulations, you’ve likely either used or written Python code at some point in your day job.

Python brings a lot of advantages, such as its capacity to enable productivity, but it is often described as being slow when it comes to performance.  Developers typically assume that most of the execution time is spent in compiled, optimized C/C++ or Fortran libraries (e.g. NumPy) which are called from Python. But is that truly the case? How confident are you that your application is not wasting your precious computing resources for the wrong reasons?

In Linaro Forge and Linaro Performance Reports 19.0, we have added the Python profiling capabilities you need to hunt down and resolve bottlenecks for your Python codes in the blink of an eye and at scale. Too good to be true? Let’s get to it using our profiling tool, Linaro MAP!

First off, profile your application like you always have, using the following command:

`map --profile mpirun -n 2 python ./demo.py`

This command generates the profile information you need. Let’s open it up with the command:

`map ./profile.map`

{% include image.html path="/assets/images/content/profiling-python-example-1.png" alt="profiling python example 1" %}

If your code spends time in the Python interpreter, the information will be plotted in pink in the graphical user interface. In this particular example, we realize fairly quickly that we are spending the vast majority of the execution time in the python interpreter. That’s not what we expected! Actually, an innocuous multiplication in a loop is taking most of our time!  We can do better!

By simply replacing this line of code by a call to `numpy.multiply()`we manage to replace operations performed by the interpreter by a compiled library call. How does this impact the efficiency of our code? Quickly profiling the new application with Linaro MAP gives the following:

{% include image.html path="/assets/images/content/profiling-python-example-2.png" alt="profiling python example 2" %}

What a change! We now spend only 1% of the time in the Python interpreter (down from 80.2%) and the small loop runs in a fraction of the time. Within just five minutes, we have been able to run the same code more than 10 times faster (from 41.2 seconds down to 3.6 seconds).

And this is just one of the problems you can resolve. Better load balancing of large workflows orchestrated by Python frameworks, more intelligent data accesses… The pitfalls Linaro Forge 19.0 can help you avoid are countless.

As usual, this feature is available on any hardware architecture. If you are interested, simply download the latest Forge and Performance Reports builds and install it on your cluster. Use your existing licence. If you are not yet part of the Forge tools family, do feel free to request a [temporary trial licence](https://www.linaroforge.com/freeTrial/) or give us a shout at [Contact us](https://www.linaroforge.com/contactUs/). The whole team looks forward to hearing from you. 

You can view our Python profiling webinar [here](https://www.youtube.com/watch?v=kJYrE4Yu5WU).