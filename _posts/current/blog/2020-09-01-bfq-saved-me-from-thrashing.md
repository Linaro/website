---
layout: post
title: BFQ saved me from thrashing
description: In this article Linus Walleij looks at what causes thrashing and developments
  that help to mitigate this problem.
date: 2020-09-02 10:13:04
image: /assets/images/content/technology-3389917_1920-1-.jpg
tags:
- Linaro
- Linux Kernel
- BFQ
related_projects:
- LSE
category: blog
author: linus.walleij
---

## Benefits of the BFQ I/O scheduler

Recently my less-used desktop computer became sluggish, and would randomly crash. It seemed to be fully occupied with disk activity and quickly became uninteractive to the point that not even ssh login would work. This is easily identified as [thrashing](<https://en.wikipedia.org/wiki/Thrashing_(computer_science)>): constantly swapping to disk because of short core memory.

When Linux runs out of memory, processes will of course be killed by the [OOM](https://en.wikipedia.org/wiki/Out_of_memory) (out of memory) killer, but if you have ample swap space, instead you will get thrashing. In this case the OOM killer would have been better: the system was so uninteractive that there is no point in trying to use swap. This was on a flash drive but still would just thrash.

Normally you would interact with the machine through the UI or a terminal to shut down some processes, but it would not work: the memory used by the interactive processes like the desktop itself or even an SSH terminal was subject to swap!

After an update to the latest Fedora distribution the thrashing was the same but with one difference: the UI did not become completely uninteractive, making it possible to close down e.g. the web browser and recover the system.

The thrashing was caused by one of the DIMMs in the computer starting to malfunction reducing the core memory to a mere 4GB. (I have since replaced the memory.)

Something happened in Fedora that made it cope better with thrashing.

The most likely improvement in [Fedora is BFQ the Budget Fair Queue block scheduler](https://www.youtube.com/watch?v=l7j1AqTZKG4), that will use heuristics to keep the interactive processes higher in priority. This was recently made default for single queue devices in Fedora using a udev ruleset.

My flash drive was a single queue elder device – no fancy NVME – so it would become the bottleneck while constantly swapping, but with BFQ in between the interactive processes got a priority boost and the system remains interactive under this heavy stress, and swapping is again a better alternative to the OOM killer.

Having worked a bit with BFQ over the years this is a welcome surprise: the user-perceived stability of the system is better.

This might also illustrate the rule to make swap space around double the physical memory: now that my swap space suddenly became 4 times the physical memory the OOM killer would never step in, if it was just 2 times the physical memory, maybe it would. (I do not know if this holds or if the thrashing would be the same.)