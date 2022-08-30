---
layout: post
title: Linaro brings testing and automation to FOSDEM 2020
description: In this blog we talk about Linaro's testing efforts that were
  presented at FOSDEM 2020.
date: 2020-03-12 09:16:32
image: /assets/images/content/48806077322_d5b5e6aaa0_k.jpg
tags:
  - Testing
  - Automation
  - LKFT
  - Linux Kernel
category: blog
author: anders.roxell
---
Anders Roxell is part of the [Linux Kernel Functional Testing (LKFT) project](https://lkft.linaro.org/) at Linaro. The mission of LKFT is to perform functional regression testing on select Linux kernel branches in real time and report any regressions as quickly as possible. In this blog, Anders talks about the devroom he recently co-organised at FOSDEM to get all the testing folks that attend the event in the same room.

There are many different projects at the moment independently running their own versions of test suites. So far there has been little coordination on what tests are needed and/or a common definition of test plans. As a result, there is a lot of fragmentation in this space. If we can increase collaboration in the testing landscape, and find synergies between the different projects, we may be able to prevent more bugs from entering released kernels.

This is why I decided to co-organise a devroom at FOSDEM, to help further drive collaboration and reduce fragmentation. While I didn’t get as much discussion as I perhaps had hoped, there was [a good variety of talks at the Testing and Automation devroom](https://fosdem.org/2020/schedule/track/testing_and_automation/) - covering topics such as kernel testing, writing tests in Go, testing large software, improving the culture of automated testing in FOSS and auto-healing clusters through negative testing.

Here are some of the highlights:

* [One test output format to unite them all](https://fosdem.org/2020/schedule/event/testing_one_test_output_format/) by Boris Feld was a fun talk that highlighted output format (although he is trying to solve the input format as well)
* [Testing a large testing software](https://archive.fosdem.org/2020/schedule/event/testing_large_testing_software/) by Linaro Engineer Rémi Duraffort was a great talk on how to mock up your software so you're able to test it. Remi talked about Linaro's Automated Validation Architecture (LAVA) [](https://www.lavasoftware.org/)and how it is becoming the de facto standard to test hardware.
* [How to fail successfully and reliably](https://fosdem.org/2020/schedule/event/testing_fail_successfully_reliably/) by Saleem Siddiqui was an interesting high level talk. Key takeaway was “to fail fast” and “fail without regrets”. That and “bikeshedding”.
* [Writing Go(od) Tests](https://archive.fosdem.org/2020/schedule/event/testing_writing_go_tests/) by Nikki Attea was a great talk about test driven development.

For FOSDEM 2021, I’d like to see more devrooms for testing like “Automated firmware and kernel testing”. “Automated testing” can be the devroom that covers broader talks about how to harmonise test output formats.

In addition to the devrooms, Linaro will look at doing a testing summit a few days before or after FOSDEM 2021 where we can drive more discussion to help find synergies between all the different projects. If you’re interested in getting involved, please reach out!