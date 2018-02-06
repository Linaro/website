---
author: paul.sokolovsky
date: 2011-08-18 13:45:45+00:00
layout: post
link: /blog/linaro-android-gerrit/
slug: linaro-android-gerrit
title: Linaro Android codebase migrated to Gerrit (location changed!)
wordpress_id: 4122
categories:
- blog
tags:
- android
- gerrit
- migration
---

At the end of last week, we started final stage of Linaro Android migration to Gerrit. If you keep an eye on our trees, that's the first thing you should know about the migration:

**Linaro Android codebase now has a new home! Previously, it was hosted at git://git.linaro.org/adnroid/ . With Gerrit migration,  there is now dedicated host [git://android.git.linaro.org/](http://android.git.linaro.org) . We still offer access to the old tree for parties interested in our existing and older releases (11.07 and earlier). 11.08 release will be made from the new tree, and if you follow Linaro Android closely, it is important to [make a fresh check out](https://wiki.linaro.org/Platform/Android/GetSource).**

Gerrit review frontend is available here: [https://git.linaro.org/](https://git.linaro.org/) :

{% include image.html name="Screenshot-statusmerged-review.android-Code-Review-Mozilla-Firefox.jpg" alt="Screenshot-statusmerged-review.android-Code-Review-Mozilla-Firefox" class="small-inline right" url="https://git.linaro.org/"%}

We are still in the process of deploying and configuring our Gerrit-based setup and workflow, but it is already lively with more than 40 changes having passed thru it. Using Gerrit brings number of benefits to Linaro's Android development process:
	
  * Using same tools and process as the uptream, Android Open Source Project (AOSP). This brings us closer to the upstream, streamlining communication and contribution, which is one of the main aims of Linaro.

	
  * Leveraging and adopting best practices of Android development for Linaro members.

	
  * Improving and making more transparent our own development workflow. With Linaro Android gathering momentum, support for more boards landing and many people across Linaro contributing, Gerrit comes right about time to manage our workflow more efficiently and allow better peer review internally and externally.

	
  * Streamlining process for contributions from other parties and community, in particular central management of contributor agreements, which are important for contributing back to AOSP.

	
  * Gerrit is important part of our Continuous Integration strategy, with ultimate goal that each change, once have been reviewed and approved, to be tested and validated before being merged.


So, Gerrit brings lots of benefits to development process, especially for such complex system as Android. But it can be also rough at times, with [documentation](https://gerrit-documentation.storage.googleapis.com/Documentation/2.2.1/index.html#_resources) lacking important and just helpful details, lagging behind with describing features of new versions, etc. To accommodate for this, we created [Linaro Gerrit Howto](https://wiki.linaro.org/Platform/Android/Gerrit) page to summarize most used and useful command and work patterns as we find them, which may be also useful for other projects and developers who adopt Gerrit.
