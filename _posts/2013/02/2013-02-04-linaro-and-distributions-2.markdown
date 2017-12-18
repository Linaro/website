---
author: david.rusling
categories:
- blog
date: 2013-02-04 15:14:04
description: How Linaro interacts with distributions
keywords: Linaro, distribution, open source, LAVA, ARMv8, Linux, ARM,
layout: post
link: /blog/linaro-and-distributions-2/
slug: linaro-and-distributions-2
title: Linaro and Distributions
wordpress_id: 2244
---

From the by start of Linaro there has been much confusion about Linaro and distributions. Part of this, I'm sure is because Linaro is different from most open source entities which, by and large, are either industry consortiums or distributions or a mixture of the two. So what is the relationship between Linaro and ARM Linux based distributions?

Linaro is an engineering organisation, it's work split between working groups containing engineers from its member companies. These groups are working away on such things as power management, kernel consolidation, ARMv8 and so on. We need to test the code and patches created and, to do that, we need a variety of test software. These we call 'engineering builds', and they are tailored to the engineering work and the testing needed. As an example, we have engineering builds based on Android that are used to test the big.LITTLE power management changes that we're making.

Maybe a slightly different way of looking at how Linaro uses distributions is to think about [LAVA](https://wiki.linaro.org/Platform/LAVA), our test and validation framework. Like all frameworks, it is a combination of scripts. Where we have done engineering in the past is in order to pull distributions into LAVA and the build framework in order that they can be used for testing our engineering. Most (not all) distributions have build systems that generate a set of packages containing binary images. The LAVA and build system integration consists of pulling the root file system out of a set of packages and modifying it to take a different kernel, low level libraries and so on. An example of this is the work that Linaro did in order to allow different boot configurations to work with Ubuntu. What we haven't done is to directly work on distributions, that's up to the owners of the distributions.

[Open embedded](https://wiki.linaro.org/HowTo/ARMv8/OpenEmbedded) is an exception to the 'built binaries' rule and, in this case, we build the images ourselves. This makes sense as we mostly use open embedded to test our toolchain work. However, we are also using it to test the early ARMv8 work, building a test LAMP stack with it.

Distributions mostly (there's that word again) do not pull code directly from Linaro. Instead, they take the results of our upstream work and pull that into their distribution, managing appropriate patches and version control along the way. The exception is that Linaro's GNU tools are pulled directly into Ubuntu, at least for the 32 bit world. This emphasises our need to test our changes well before the distribution does this as, by then, it will be much harder to fix any problems found.

There's a really important distinction to be made between Linaro's testing and validation and the certification testing used by distributions. Linaro is primarily focussed on testing the work that we have been doing. An example of this is testing that big.LITTLE MP performs as well as it should, with no regressions. Distributions are testing that a release of theirs runs on particular hardware combinations. Just because we are sure that Linaro's engineering has been tested, you cannot infer that a distribution could be certified for Linaro's test hardware. The best that I would say is that particular software is ready to be integrated into a distribution release.

Further confusion, if any were needed, comes when we talk about releases and 'member builds'. Member builds are builds of software that Linaro makes on behalf of its core and club members. It consists of some set of Linaro and member software bundled with a distribution. It is specified by the members to suit their business and engineering needs. As an example, ARM uses member builds to support its test platforms, model, FPGA and test chip. Other members use them to support their low cost boards program or internal development teams. Releases are snapshots of code (mostly patches), engineering and member builds, released monthly. These act as an integration point and help us test the results of our work as it progresses.

There, I hope that is much clearer, although I expect to continue to be asked about Linaro and distributions. At least I can point them to this blog entry.