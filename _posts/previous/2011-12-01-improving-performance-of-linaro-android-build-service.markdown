---
author: paul.sokolovsky
date: 2011-12-01 14:16:58+00:00
layout: post
link: /blog/android-blog/improving-performance-of-linaro-android-build-service/
slug: improving-performance-of-linaro-android-build-service
title: Improving Performance of Linaro Android Build Service
wordpress_id: 979
categories:
- blog
tags:
- Android
- android
- infrastructure
- tools
---

[Linaro Android Build Service]()https://android-build.linaro.org/ (please bear with SSL issues - it is still officially in beta) is a place where you can get any downloads related to Linaro Android - monthly releases, daily builds for specific boards, and engineers' personal builds while they work on specific features.

The Builds Service is a busy place serving up to dozen(s) builds each day. Architecturally, it is a Cloud-based service, with a master running well-known open-source [Jenkins CI server](http://jenkins-ci.org/), spawning slave Cloud instances to perform actual builds. As Android codebase is rather big, and checking it out from scratch each time would generate lot of traffic outside the Cloud and put pressure on outside git servers, we also employed a mirror proxy which lives in the Cloud and fetches only updates from the upstream repositories. The mirror proxy is collocated on the build master.

This architecture worked reasonably well until last couple of months, when we started to perform enablement builds for more and more boards, and more and more engineers joined Linaro Android team and started to perform builds in parallel. With the extended and concurrent load, the Build System started to perform less satisfying, and in particular, it turned out that the proxy mirror which was supposed to speed up builds actually became the bottleneck. The final straw which broke the camel's back was upgrade to recently released Android Ice Cream Sandwich (4.0). Google developers warned that ICS release is "[two times more everything that 2.x used to be](http://groups.google.com/group/android-building/browse_thread/thread/3757b189f4e93df0)", and they were very true.

We considered several options to improve the situation, like upgrading the build master to a bigger instance, patching "repo" tool used to check out the Android codebase, or using another proxy system. The first solution is particularly tempting - you don't need to optimize the architecture, just throw in bigger hardware (then soon do it again, and then again...). But build master has a special usage pattern of being human-interactive and at the same time has low "duty cycle": it should be constantly running to allow people to check builds any time, and is used in full power only in short bursts when slaves perform codebase chechouts against the mirror. The rest of time it just sits and waits in there. So, using a big (and expensive) instance would give pretty low cost efficiency for such service, especially taking into account that Android Build is not the only Cloud system used or developed by Linaro.

The solution came with something we actually used for few months before doing daily Android Toolchain builds from Linaro GCC Bazaar repository. We didn't have a cloud mirroring support for BZR, so Linaro Toolchain Workgroup proposed simple solution - make a tarball of BZR checkout, and then use it as a "seed" for new builds - fetching just the latest updates quickly and proceeding with the compilation.

It took some time to re-apply the same idea to Android Platform builds, which is mostly due to peculiarities of "repo" tool, and the fact that Android codebase is really huge and consists of hundreds of projects, so slight error in a part not in heavy usage could go unnoticed for weeks or months and then would be hard to find and fix, so sufficient testing needed to be performed. Nonetheless, ICS upgrade urged us, and both Android and Infrastructure team decided that it's more beneficial to invest resources into seeded builds than keep patching old non-scalable solution.

So, how seeded builds work and what they really brought us, based on more than week of runtime? The basic idea is very simple - if we hit some inefficiency with some networked SCM protocol (in particular, here we faced inefficient memory usage with git-daemon), then we can just skip that network protocol altogether! Instead, we replace it with high-efficient and low-resource streaming protocol like HTTP to fetch entire repository, and then perform checkout operations locally. This is of course not a universal solution, but works very well for the usage pattern of a clean-room build system. Fully optimized seeded checkout for Android takes less than 5mins, while previously it took ~12mins. But what's more important is that it's much more scalable - previously, in the worst case of too many concurrent checkouts being done, single one could take hours to finish (or fail). With seed tarball, even download performance drop 3-4 times (and that's pretty heavy server load) wouldn't lead to large build delays.

One chart can say more than dozen of words, so let's look at the typical one:

{% include image.html name="seeded-builds-chart.png" alt="Seeded Build Chart"%}

Here, we can see all 3 phases described above: reasonable build performance (though some builds here failed due to checkout issues), overload phase with big dispersion of build times, and then seeded builds were deployed. You can see how smooth the curve went, how predictable the build time became (a step there is due to adding new components/upgrade of AOSP version). Builds also became more stable, though some "red" gaps are still seen, which correspond to infrastructural issues with the build (which are inherent when using complex Cloud services). Our next aim is to separate such non-deterministic failures from actual compile errors, to avoid false negatives when performing higher-level Continuous  Integration cycle with our testing solution, LAVA.

Bottom line: we made a big progress improving performance and stability of Linaro Android builds, which will enable the Linaro Android team to be more productive and do their job with more comfort. It is also big step forward towards reliable Linaro Continuous Integration overall, though more work is needed to make it really shine.
