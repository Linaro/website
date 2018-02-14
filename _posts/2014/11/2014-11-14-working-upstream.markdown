---
author: daniel.lezcano
categories:
- blog
comments: true
date: 2014-11-14 17:25:07
description: Daniel Lezcano a Long term upstream contributor's shares his experience
  working upstream. He has been doing kernel development for more 10 years.
excerpt: Daniel Lezcano a Long term upstream contributor's shares his experience working
  upstream. He has been doing kernel development for more 10 years and currently maintaining
  two subsystems of the Linux kernel.
layout: post
slug: working-upstream
tags:
- Core Dump
- arm
- contributor
- CoreSight
- Daniel Lezcano
- kernel
- upstream
title: 'What do we mean by working upstream: A long-term contributor''s view'
wordpress_id: 7196
---

# What do we mean by working upstream: A long-term contributor's view


I've been doing kernel development for a bit longer than 10 years and I'm currently maintaining two subsystems of the Linux kernel. During this period I have seen good and bad experiences when I have had to upstream some big features into Linux. As a Linaro employee, part of my job is to help our different members to upstream their code to the Linux kernel. I believe it is worthwhile to share experience I have had in the past.

When the code to be upstreamed belongs to the platform specific and its derivative category, like the power management, the upstreaming effort is relatively low because the engineer can be guided to use the existing building blocks to migrate the SoC vendor code to a standard pattern following the open source rules. If a framework is missing or incomplete, it is added with the collaboration of the community.

**Upstreaming big features**

When the code to be upstreamed is a big and complex feature that changes existing functionality  provided by the kernel for several years, things are much more complex because there is a series of steps one needs to go through before being able to upstream such feature:




  1. Raise interest amongst a diverse group of maintainers, not only the ones in charge of the parts to be changed


  2. Find people from different backgrounds  who are interested in the feature in order to create a small community around it and solve disagreements


  3. Bring the feature together piece by piece, little by little ensuring in the worst case there is no regression and in the best case something existing is improved.


**Prior experience of the wrong route to upstreaming**

Previously, I was working in a startup whose goal was to provide application mobility - in other words do live migration of a group of processes from one host to another host without loss of connectivity. The result was very nice and stable because it was validated with complete application stacks e.g. databases under heavy load and High Performance Computing applications.

The developed component was divided into two parts, a command line and a big feature implemented in the kernel interacting with this command line.

IBM acquired the startup in 2005 with the goal to upstream the live migration functionality in order to have it available for the next distros. This is where our adventure in the open source community began.

Being very proud of our feature and being convinced it was the best solution in the world, we posted our first patchset for pid virtualization, certain it would be accepted with a warm welcome as a big technical challenge accomplishment. But the reaction from the community was very disappointing for us. The verdict couldn't be appealed: performance regression, implementation specific for our solution, limited approach, impact too important in the kernel, breaking some other subsystems, etc ...  In other words, we were very selfish when we posted the patchset without imagining the impact of the code on the other people in the community. Oh yeah, the "community"! Here we are, facing the flames of a group of people who were never involved in the feature but impacted by our changes. We had to review how we envision the open source and what was the community, and where we fitted in this.

After soul searching and with the help of upstream experienced people, we decide to restart from scratch.



**Picking a new route**

We created a specific mailing list for the Linux containers and we began an evangelization campaign by participating at the different Linux Summits to introduce the feature and find interested people for it (industrials and hobbyists). A community was born.

Linus Torvalds said "Linux is evolution, not intelligent design." [1].

Q: How do we make Linux evolve?
A: By providing small changes.

Q: But how to add an important feature by little pieces?
A: By providing small improvements.

Q: How can we ensure we are going in the right direction?
A: By collaborating.

The solution lies in the collaboration within the community, who ensure that changes are going to result in something better. And it is the personal experience in the upstreaming process that balances the right small pieces to go forward in the implementation of big features. In my personal experience I have never seen Linux code evolving to something worse or wrong.

In the container implementation, the utsname namespace laid the first brick by providing a small orthogonal feature [2], following the idea of the mount namespace, an already existing approach and opened the door to the "namespacification" of the Linux kernel.

This approach allowed us to split the big feature into small pieces, called "namespaces". Each of the kernel resources has been grouped into namespaces and different people belonging to the community worked together on each namespace. In a couple of years, the PID, IPC, the network stack (ipv4, ipv6, tcp, ...) were converted into namespaces and upstreamed.

The impact in the kernel was very important, with an important number of cleanups and bug fixes not in direct relation with our code but crossing the path of the changes. Yes, that's the nature of open source: you have to cleanup the code of the others. It is a goodwill guarantee and a comprehension we are acting responsibly on code that does not belong to us.

The result was far away from our initial patchset: cleaner, faster, more complete, more maintainable, more understandable, less intrusive, and the feature went to a point we were not able to reach before. The key of this success was the collaboration and it was possible because:




  * a community of interested people was built. With more people participating on the feature, the more chances we had to do the right things


  * we collaborated and we cooperated by fixing the code of others and/or helped fix bugs even when not related directly to our feature


  * we did as much as possible to keep our mind open, letting people bring new ideas, which in our case, appeared to be better


  * we trusted people with open source experience and took always in consideration their advice even if sometimes it was presented in a tough manner. Criticism means the patches raiseed some interest


  * and finally, we kept the releasing flow constant, "Release early, release often": Everything is said here: [http://en.wikipedia.org/wiki/Release_early,_release_often](http://en.wikipedia.org/wiki/Release_early,_release_often)


However, we were only half way to reaching the full desired feature list. The resources isolation was upstream and brought the container's functionality but the checkpoint/restart was missing to do the live process migration.

The checkpoint/restart feature was interesting for less people than the container, so the community size decreased, but new people came aboard with their own checkpoint/restart implementation.

One of the proposed solutions was for a checkpoint/restart 100% in the kernel. From our side, we weren't convinced by this approach and we were sure it was not upstream-able. We thought a hybrid version was more suitable: i.e. kernel checkpoint/restart services managed from userspace. That would have allowed us to bring the feature in piece by piece as we did for the containers.



**A two-year detour back to the dark side**

This disagreement led the maintainers to lose interest in the checkpoint/restart and to ask us to solve our disagreements and propose a solution resulting from a collaboration.

That's also a rule in the open source world, disagreements and competing patchsets close the door for upstreaming.

The justifications of the 100% kernel checkpoint/restart were: it was already implemented, it was working well in the lab and this solution was the better, period! The lobbying around this solution was so strong the community finally worked on it. Externally the authors of this implementation wanted to have it upstream at all costs, and internally the company wanted to see “something” upstream whatever the solution was. We finally bowed out of the race, convinced this solution will fail.

Two years later, the feature reached a point where it can only work in a single block and no small pieces could be sent separately. Hence, it was sent as is, entirely [3]. The response from Dave Miller was crushing [4] and finally the patchset was definitively buried several months later by Tejun Heo [5] who preferred a hybrid approach kernel/userspace.

Two years lost and we’re right back at the start.

There are other examples like this where the developers want to implement a big feature [6] and then try to upstream it as it is. In the vast majority of these cases, all that results is failure.

In light of this failure, we can learn some lessons:




  * working in our own solution, publicly or privately, without taking into consideration the advices or feedbacks of the community, is only a mimic of the opensource, not the true opensource where the corner stone is collaboration


  * collaborating with the community means we no longer have control of what we are doing, and the agreements may imply the need to redo solutions from scratch. This is something we have to be prepared for in case we want to upstream a big feature


  * opensource people are not ‘hippies disconnected from the real world’ (quote from my former management, from a former company), they just don’t care in the same way about an individual company’s ‘deadlines’ or ‘products’.




**Conclusion**

The opensource philosophy is so different from most company’s that they appear to belong to different dimensions and the switch from one to another could be very clashy because each of these universes have different goals. The opensource could be seen as a big public garden, where everyone can plant flowers. The people in the garden, being there a long time, know what kind of flowers you can plant without interacting badly with the existing flowers in the garden and where you can plant them. If the people in the garden like your flowers, they can point you to a place where you can put the flowers and also they may help you to do this if they want. Those people expect you to take care of your flowers after you have planted them and as they helped you to plant the flowers, they also expect you to help in return. If a group of people is not willing to follow the rules of the public garden and just want to plant flowers because they have to (e.g. because their boss put a ticket office near the south entrance of the garden and they want the public garden to be more attractive from there), the key keepers of the garden will just come and close the gates to those people.

Opensource is about sharing and collaborating. A company is about business and maximum profit. At first glance, it looks like they have opposite goals, but it is actually not true, otherwise the companies won’t be interested in the opensource.

I hope with this experience sharing, someone may understand and follow the opensource philosophy but keeping in mind its company objectives and make its upstreaming attempt a success.

I strongly recommend Thomas's Petazzonni presentation, "SoC mainlining, lessons learned" [7] and to read the “The submitting patches howto” [8].



[1] [http://technotalk.tumblr.com/post/7438486874/linux-is-evolution-not-intelligent-design-linus-torvalds](http://technotalk.tumblr.com/post/7438486874/linux-is-evolution-not-intelligent-design-linus-torvalds)

[2] [http://lwn.net/Articles/179345](http://lwn.net/Articles/179345)

[3] [https://lkml.org/lkml/2010/5/1/140](https://lkml.org/lkml/2010/5/1/140)

[4] [https://lkml.org/lkml/2010/5/1/186](https://lkml.org/lkml/2010/5/1/186)

[5] [http://lwn.net/Articles/414264](http://lwn.net/Articles/414264)

[6] [http://lwn.net/Articles/145135](http://lwn.net/Articles/145135)

[7] [http://free-electrons.com/pub/conferences/2014/elc/petazzoni-soc-mainlining-lessons-learned/petazzoni-soc-mainlining-lessons-learned.pdf](http://free-electrons.com/pub/conferences/2014/elc/petazzoni-soc-mainlining-lessons-learned/petazzoni-soc-mainlining-lessons-learned.pdf)

[8] [https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/Documentation/SubmittingPatches](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/Documentation/SubmittingPatches)

{% include image.html name="working-upstream.jpg" alt="working-upstream" %}