---
author: linaro
date: 2016-12-21 12:37:28+00:00
layout: post
link: /blog/linaro-1-contributor-linux-kernel-4-9-release/
slug: linaro-1-contributor-linux-kernel-4-9-release
title: 'Linaro #1 contributor to the Linux kernel 4.9 release'
wordpress_id: 11995
categories:
- blog
---

Linaro has been a long-standing top 5 company contributor to Linux kernel development.
With the [release](https://www.linux.com/news/linux-kernel-49-here-and-its-largest-release-ever) of Linux kernel 4.9, Linaro has for the first time made the top position, measured by number of changesets. Linaro was the [most active employer](https://lwn.net/Articles/708266/) with 1,876 changesets, due mainly to the integration of Greybus into Linux. Greybus was developed as part of Google ATAP’s Project Ara modular phone effort. The top three contributors for this release -- John Hovold, Viresh Kumar and Alex Elder -- worked in Linaro on the project with Greg Kroah-Hartman.

Greybus is a framework that allows the main processor on a portable device (i.e., a phone or tablet) to communicate with removable modules. It allows protocols to be defined that use a common remote procedure call mechanism to communicate with and control functionality on a module. Modules may be added to or removed from a running system, and Greybus defines how new modules are recognized and configured for use, and allows them to be gracefully removed from the system at any time.

Modules are envisioned to provide virtually unlimited capabilities--speakers, cameras, flash storage, displays, automobile remotes, and other functions not yet imagined. The Greybus architecture provides a way for additional features to be added to a phone long after it has been purchased (or even designed). Greybus is built as an application layer on the MIPI UniPro stack, but its basic constructs are generic enough that it could be layered on other transports as well.

Linaro CEO George Grey said “Linux is a truly collaborative project. While we are proud to have achieved the top contributor position for the first time, working in the kernel and other open source projects is a key part of our mission, and we are very pleased to be contributing at any level. We are excited that, despite the closing of Project Ara, this work has been merged upstream - we believe that it will be used as the model for future modular products based on Linux, and we look forward to seeing products utilizing this code for new solutions in the future.”
