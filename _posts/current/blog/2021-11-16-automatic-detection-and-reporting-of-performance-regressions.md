---
layout: post
title: Automatic detection and reporting of performance regressions
description: In this blog, Paolo Valente and Federico Gelmetti talk about the
  progress that has been made on extending Linaro Kernel Functional Test (LKFT)
  functionalities to include automatic detection and reporting of performance
  regressions. All of this work will ultimately help maintainers spot
  regressions and remove them.
date: 2021-11-16 05:09:40 +00:00
image: /assets/images/content/tech_background.jpg
tags:
  - LKFT
  - Kernel Development
  - LAVA
  - Linaro Automation and Validation Architecture
  - SQUAD
  - Software Quality Dashboard
related_projects:
  - LKQ
category: blog
author: paolo.valente
---
By Paolo Valente and Federico Gelmetti

In June 2021 we published [a blog](https://www.linaro.org/blog/ensuring-optimal-performance-through-enhanced-kernel-testing/) where we talked about the efforts being made to extend LKFT (Linaro Kernel Functional Test) functionalities to include automatic detection and reporting of performance regressions.

As stated in that blog, [a patchset was created](https://github.com/Linaro/test-definitions/commit/de4c57c2b8d3d877001b898a601b7753d23d2cfc) for [Linaro test definitions](https://github.com/Linaro/test-definitions/), in order to run [mmtests](https://github.com/gormanm/mmtests) benchmarks in LAVA (Linaro Automation and Validation Architecture), publish the result to SQUAD (Software Quality Dashboard) and then do post processing to find out if we have regressed between the different kernel versions. In addition to this patchset, we are also trying to glue all the pieces together to have a fully working pipeline that can actually notify the people involved if a regression has happened.

The first step we took to achieve a fully working pipeline was to verify that any arbitrary mmtests benchmark other than sysbenchcpu (which we have running in the pipeline as of today) could be run from test-definitions. We managed to make test-definitions run dbench4 from mmtests benchmarks selection with little tweaks to the existing interface, so we can assume that most tests can be configured with the same amount of effort.

Result data, now generated in JSON format, were useful for simulating the next step, which was to pull the metric's data from SQUAD via a script that retrieves the data in a JSON format. This allowed us to run the regression detection script on this data by feeding it into squad-report (the tool that is responsible for creating a report with the regressions), which then got sent to the people involved.

As it stands, this pipeline is very close to being complete and functional, only missing two major components: on one end, the JSON manipulation and report creation script (for which a [work is in progress](https://gitlab.com/Linaro/lkft/reports/squad-report/-/merge_requests/102) already; on the other end, the creation of a root filesystem with all benchmark pre-installed, which would be ready for use in the LKFT environment.

With these last pieces, plus some more tweaks and minor fixes, the pipeline will finally be operational. We personally would like to see that in action, as it will help maintainers spot regressions and get rid of them.

For more information, go to [https://lkft.linaro.org/ ](https://lkft.linaro.org/)