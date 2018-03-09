---
author: alan.bennett
categories:
- blog
date: 2013-08-23 19:36:37
description: Recap of the weekly LAVA team meeting and LIVE demos
keywords: Linaro, Linux, LAVA, opensource, multinode
layout: post
link: /blog/lava-blog/22-aug-2013-lava-team-meeting-live-demos/
slug: 22-aug-2013-lava-team-meeting-live-demos
tags:
- LAVA
- arm
- lava
- Linaro
- Linux
- Opensource
title: 22 Aug 2013 - LAVA Team meeting - LIVE demos
wordpress_id: 2863
---

In this week's LAVA team meeting, the LAVA team opens a beta program for new git service (integrated with an optional code-review system/Gerrit), shows you where to learn about multi-node, introduces the new concept of an Image Report Editor, demos a lightweight bootloader class for netbooting lava-test-shell and discusses the use of Jenkins + LAVA to verify LAVA.

Review the summary below and check it out on Youtube:  [22 Aug 2013 LAVA Weekly Team Meeting OnAir Broadcast](http://www.youtube.com/watch?feature=player_embedded&v=-O-ygNKX6eI)


## Beta testing staging.git.l.o & staging.review.l.o by Milo Casagrande

  * git-web, gitolite, gerrit working together


  * How does a beta tester get started


  * [https://wiki.linaro.org/Infrastructure/StagingGit](https://wiki.linaro.org/Infrastructure/)

## Guide to multi-node documentation by Neil Williams

  * What is Multi-node?  Where do I go to find out more about it?


  * [http://people.linaro.org/~neil.williams/docs/]()http://people.linaro.org/~neil.williams/docs/


  * [https://git.linaro.org/gitweb?p=people/neilwilliams/multinode-yaml.git;a=summary](https://git.linaro.org/gitweb?p=people/neilwilliams/multinode-yaml.git;a=summary)


  * [git://git.linaro.org/people/neilwilliams/multinode-yaml.git](//git.linaro.org/people/neilwilliams/multinode-yaml.git)


  * [http://bazaar.launchpad.net/~linaro-automation/lava-dispatcher/multinode/files/head:/doc/]()http://bazaar.launchpad.net/~linaro-automation/lava-dispatcher/multinode/files/head:/doc/


  * [http://bazaar.launchpad.net/~linaro-validation/lava-dispatcher/trunk/files/head:/doc/]()http://bazaar.launchpad.net/~linaro-validation/lava-dispatcher/trunk/files/head:/doc/


  * [https://staging.validation.linaro.org/dashboard/filters/~admin/beagleblack-usecase]()https://staging.validation.linaro.org/dashboard/filters/~admin/beagleblack-usecase




  * Multinode & the use of timeouts


    * [http://people.linaro.org/~neil.williams/docs/]()http://people.linaro.org/~neil.williams/docs/





  * Simultaneously driving many targets with a single dispatcher can create interesting system loads


    * LAVA before multi-node can run well on a minimal HW & VMs


    * Multi-node LAVA jobs can increase the load for LAVA dispatchers due to the high IO & high cpu utilization during the dispatcher-side image decompression (tgz/gunzip/...).


    * LAVA Administrators will need to carefully monitor and adjust resources as necessary.


## Image Report Editor by Stevan Radakovic

  * An abstraction layer to provide the ability to create and combine mulitple LAVA filters and produce customized/targeted Image Reports that help the test administrator share the results they want to with more flexibility and power.


  * Where do I get more information (i.e. cards.l.o)


    * [https://cards.linaro.org/browse/LAVA-634](https://cards.linaro.org/browse/LAVA-634)


## Bootloader/lava-test-shell & LAVA Continuous Integration by Tyler Baker


  * Using Jenkins and LAVA to verify LAVA on [http://community.validation.linaro.org](http://community.validation.linaro.org/) and[http://community.validation.linaro.org:8082](http://community.validation.linaro.org:8082/)