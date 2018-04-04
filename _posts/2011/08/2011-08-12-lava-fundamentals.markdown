---
author: alan.bennett
date: 2011-08-12 21:24:00+00:00
layout: post
link: /blog/lava-blog/lava-fundamentals/
slug: lava-fundamentals
title: LAVA Fundamentals
wordpress_id: 4118
categories:
- blog
tags:
- lava
- LAVA
---
This blog post talks about the core topics that LAVA deals with, dives into the architecture of the stack as it exists today and provides some background rationale for the design choices we made. If you are not familiar with LAVA you may want to read the [introduction](/blog/lava-introduction/) first.

LAVA is a broad project and to make it more manageable for day-to-day engineering we have separated it into a collection of smaller projects, focused on a narrow topic. Today LAVA has the following key sub-projects:

  * [LAVA Test](https://launchpad.net/lava-test) is a framework and a command line tool for wrapping existing test programs and translating results into a common format.


  * [LAVA Dispatcher](https://launchpad.net/lava-dispatcher) is a framework and a command line tool for controlling test execution on a particular machine, including deployment of the initial environment.


  * [LAVA Dashboard](https://launchpad.net/lava-dashboard) is a web application for storing and viewing test results. It also has a simple data mining and reporting features.


  * [LAVA Scheduler](https://launchpad.net/lava-scheduler) is another web application for managing a collection of devices and processing a queue of test jobs to perform.


There are many more smaller parts, all of which you can see on the [LAVA project page](http://launchpad.net/lava) but I will not cover them directly here. To explain how the four key pieces work I will take you back to the May 2010 when this project started.

Originally the Validation / QA effort started out as two small projects: launch-control and abrek. The former was responsible for the so-called "validation dashboard" - a web application that makes sense of test results while the latter was a test execution/wrapper tool that allowed us to run an existing test, gather the result and upload it to the dashboard.

Abrek would allow you to customize how a test is installed, how to invoke and finally how to translate between the text output of the test program and the dashboard data format. Simple tests take a few minutes to _wrap_ with this framework and we quickly got a few interesting, open source tests and benchmarks integrated.

During that early period one of the most fundamental interface was formed (that is still around today) that is, the concept of _dashboard bundles_, files containing machine-readable test results. We investigated existing formats but after a lot of mind-storming and thought experiments we realized that none of them could express the kind of data that we were interested in. We used plain text files with hierarchical data structure encoded as JSON. The idea was IMHO quite interesting because unlike virtually all other consolidated QA or CI systems that I came across before the actual data can be freely created, edited and moved around by conventional means and is not trapped in a complex database hidden behind proprietary APIs. A bundle can be written by any program that can output text, transmitted between systems by email, thumb drive or anything in between, uploaded to a dashboard, downloaded and re-sent somewhere else for processing.

Each bundle would contain one or more "test run" that describes the outcome of running a test somewhere. In addition to storing typical "pass/fail/skip/etc" status we wanted to be able to representing benchmarks and performance measurements. As soon as you think of benchmarks you will find the need to store the hardware and software context that describe the environment in which the test was performed. To formalize the format and validate bundles for correctness we have used [JSON Schema](http://tools.ietf.org/html/draft-zyp-json-schema-02). You can [read the actual schema](http://bazaar.launchpad.net/~linaro-validation/linaro-python-dashboard-bundle/trunk/changes) if you are interested in that level of detail. The schema is maintained alongside helper APIs in a library called [linaro-python-dashboard-bundle](https://launchpad.net/linaro-python-dashboard-bundle) (I really wish we could simple drop the "python" part now). Apart from what I already mentioned bundles can have arbitrary text or binary attachments, key-value attributes, references to code branches and a few other interesting features. So far we managed to map all of the tests and results we encountered in a meaningful way but if you think that, based on your experience, something is missing do let us know - the earlier we know the better.

If you are interested in looking at some real-life bundles you can see them using the integrated bundle viewer built into the dashboard. Note, that while bundle format is well-defined, various programs generate _different bundles_: LAVA dispatcher uses one bundle to store results of all the tests that were ran in one go on a single system ([example]()http://validation.linaro.org/lava-server/dashboard/streams/anonymous/lava-daily/bundles/bea57bc187496dda60a21432934b800712e5b920/), remember to click on bundle viewer tab), a small script that processes measurements from various benchmarks built with specific version of the toolchain stores source code references and uses external attachments not to duplicate large amounts of data ([example]()http://validation.linaro.org/lava-server/dashboard/streams/anonymous/gcc/bundles/04e0bd44704435721a384fb615ef6aea42570520/) while Abrek introspects software and hardware context for a particular test ([example]()http://validation.linaro.org/lava-server/dashboard/streams/anonymous/zyga/bundles/826e8c18b519e40db6aa51c22c65a0f2f62146da/).

This Abrek/Launch Control duo was the smallest building block that allowed us to do testing and retrieve the results later. But that's not the full story today.

_Background note: a few months later Paul Larson invented the fantastic project name that we use today and we gradually transitioned from launch-control to LAVA Dashboard and from Abrek to LAVA Test._

To make testing reliable and predictable we wanted to run each test in a clean, pristine environment. This also allowed us to do simple Continuous Integration on the daily Linaro images that were being produced by various parts of the build system created by our infrastructure team. The details of how we actually do that are interesting but not essential here. The idea is to describe which image to deploy, which tests to install and run and pass this data to the [LAVA Dispatcher](https://launchpad.net/lava-dispatcher). The dispatcher would then encapsulate all the magic of automating the deployment. In theory anyone could implement the required APIs to have dispatchers running tests on development boards, silicon simulators, QEMU, virtual machines, off-the-shelf x86 boxes, servers and laptops. All that matters is the machine readable description of the test job.

While I purposefully skip the details, this was and still is one of the most challenging part of LAVA. Doing automated deployment and recovery is **hard**. There are lots of practical problems to solve, unexpected issues and hardware mis-design side-effects that make it very difficult to get this right. The details warrant a separate blog post which I will surely write. You may want to look at [example Android test job](https://validation.linaro.org/scheduler/) and [example Ubuntu test job](https://validation.linaro.org/scheduler/) straight from the history of our public scheduler instance.

As long as you have one board or other device and are happy with using lava-dispatcher to describe and deploy your test environment, lava-test to execute the test program and lava-dashboard to store and visualize the results you would not need more components. Since we were tasked with building and maintaining the Validation Lab that holds many different development boards, from all the Linaro members, we had to have another component that would allow us to manage the pool of available devices. This component is known as the LAVA Scheduler.

The scheduler has an extremely simple API: you can submit a job that will be passed down to the dispatcher that is responsible for a particular board. Apart from describing the actual test you can also specify which board or board class to use. Simple as that.

As we were developing the scheduler we quickly noticed that, as a web application, it would have to copy or somehow share various parts of the dashboard code base to get the level of integration we wanted. We have thus decided to split the dashboard into two parts: the actual dashboard-specific code and the generic webapp plumbing that allows us to reuse UI elements, RPC services, user database and a few other things. This component is now called LAVA Server. Whenever you install any of the web-facing parts you will also get the server to host them. In retrospective this decision was very good as it allowed us to quickly add new applications to the server and simply not have to worry about deployment complexity or integration issues.

As our server-side parts offer XML-RPC APIs we wanted to allow people to use them directly from the command line for experiments or simple scripting. We have created a set of command-line tools, called lava-_something_-tool by convention, that expose each XML-RPC method of the corresponding server-side component.

Today we have two such tools: lava-dashboard-tool and lava-scheduler-tool. Since we liked the concept lava-server we did the same thing here and wrote lava-tool to have a consistent command line tool framework.

This covers the core parts of LAVA. Remember that you can quickly install everything, apart from the dispatcher, from [our PPA](https://launchpad.net/~linaro-validation/+archive/ppa). You may also be interested in the server side API documentation by looking at the [API help page](http://validation.linaro.org/lava-server/api/help/) of our public LAVA instance.

In the next installment I will take a closer look at LAVA Test and show you how to wrap a simple test program so that LAVA can use it.
