---
author: jennifer.castelino
categories:
- blog
date: 2012-03-01 20:53:43
description: Blog on how to make a positive difference in a FOSS project. Includes
  information on how to participate and contribute to a FOSS project.
layout: post
link: /blog/make-positive-difference-foss-project/
slug: make-positive-difference-foss-project
title: How to make a positive difference in a FOSS project
wordpress_id: 4544
---

By:  Paul McKenney, Linaro OCTO

Success in proprietary and personal projects in no way guarantees success in a FOSS project such as the Linux kernel. In fact, in my experience, only about 30% of people who try to join a FOSS project are successful, and the success rates for people attempting to start a FOSS project are even more dismal. This document lists some things you can do to improve your odds of successfully joining and contributing to a FOSS project: Information on starting your own FOSS project is left to those with actual experience.

This document covers this area with the following sections:

  * What is a FOSS project?


  * Do your homework


  * Do give them the benefit of the doubt


  * Prove yourself


  * Getting a bugfix accepted


  * Responding to "open and honest" feedback


  * Getting a new feature accepted


  * Coping with requests/demands for changes


  * Open-source licensing issues


  * Other material

This document is not a substitute for diving in and getting your hands dirty, but it should help you avoid some of the larger rocks on your first attempt to dive in.

### **What is a FOSS project?**

A major reason for failure is a misunderstanding of what a FOSS project really is. Let's start with what a FOSS project is not:


  * Not a strict hierarchy: Linus almost never commands anyone to do anything. Instead, he usually limits himself to rejecting submissions.


  * Not a technical version of the American 1960s hippie movement.


  * Not waiting anxiously for you to tell it what to do.


  * Not a group that cares what your manager wants.


  * Not a group that will worship your skills.


  * Not a group that will automatically trust you.


  * Not a group that cares what you want.


  * Not a group that knows who you are.

Instead, a FOSS project is a group that has come together to develop software to solve specific problems. If you think of a FOSS project as a standards committee that produces source code rather than English prose, you won't go too far wrong. In particular, working with a FOSS project is as much about working with people as it is about working with code.


The following sections discuss some strategies to help you work successfully with a FOSS project.

### **Do your homework**

Most FOSS projects conduct their business on public mailing lists. This means that you can easily review their discussions in order to determine what sorts of help they might be interested in, and most especially, how they have reacted to earlier proposals similar to yours. (After all, if you didn't have a proposal in mind, you probably would not be interested in the project, right?)

So do your homework, which includes reading the relevant portions of the project's source code and scanning the email archives for relevant discussions. If you are not sure whether a few emails are relevant or not, it is probably best to read them. (On the other hand, if you find yourself reading hundreds of irrelevant emails, you should think more carefully about what search terms you are using.) In the case of the Linux kernel, you should search lkml.org and lwn.net for keywords related to your proposal. There are quite a few additional mailing lists related to subsystems of the Linux kernel as well (Google for the keywords or see the MAINTAINERS file to determine what list to use). Read the discussions and learn why the community did not like the proposal. After all, if they did like it, they would likely have already implemented it, right? Use this information to refine and reformulate your proposal.

In addition, the mailing lists are a great source of information on coding-style guidelines, preferred techniques and algorithms, the overall goals of the project, and the personalities of key project members. Taking all of these things into account will help you produce an acceptable contribution. For example, if the group prefers hash tables to trees, you should of course make sure that your contributions avoid trees in favor of hash tables.

### **Do give them the benefit of the doubt**


All too often, when we see our proposal (or something like it) being rejected, our first reaction is to assume that those doing the rejecting are malicious, stupid, or both. This is unproductive behavior, to say the least. In fact, if they have been working on their project for some time, it is safe to assume that they understand it much better than you do. And even if you are the world's expert in your specific area, the upstream developers have a much better understanding of the project as a whole, and therefore understand implications of your changes that you may not have even considered. Furthermore, regardless of what -you- think, -they- think that they understand it fully and you don't understand anything. Just as you would do in their place.  You therefore must expect to prove yourself to them.


### **Prove yourself**

Although it is natural to expect that a new group of people will have a deep appreciation of your experience, skills, and worth, such expectations are usually wildly unrealistic. After all, how
would the members of the FOSS project know anything about you? Do you have a page in Wikipedia? Do you have published research in your area of expertise? Does your published
research have a history of being used in practice?

Even if you do have a page on Wikipedia or are a published researcher whose ideas are frequently used in practice, this is no guarantee that the members of the FOSS project have read about you. And even if they have read about you, this is no guarantee that they remember you. And even if they remember you, this is no guarantee that they have a positive view of you.

You will therefore need to prove yourself to them. One excellent way of doing this is to provide a solution to a problem that they are facing. Please note that this must be a problem that they realize they face, and that they are highly motivated to solve. In other words, you need to solve a problem they know they have rather than a problem that you think that they have. The most straightforward way to do this is to provide a fix to a bug that they already recognize as a bug.

Please note that I am not asking you to do anything that I have not done myself.  My being the world's expert on RCU in the early 2000s did not enable me to ignore the concerns of the Linux kernel community, despite the fact that they were not yet up to speed on SMP scalability in general, let alone RCU in particular. The version of RCU that Dipankar Sarma eventually got accepted into the Linux kernel did resemble my original design more than it did any of the competing proposals, but: (1) my original design was improved significantly by all the feedback, (2) the discussion helped Dipankar and I learn quite a bit about the Linux kernel, and (3) the discussion helped the Linux kernel maintainers learn quite a bit about RCU. For more details on this journey, see:

[http://web.cecs.pdx.edu/~walpole/papers/OSRepilog.pdf](http://web.cecs.pdx.edu/~walpole/papers/OSRepilog.pdf)  -- The next challenge is getting your fix accepted. This works quite a bit differently in FOSS projects than in proprietary projects.

### **Getting a bugfix accepted**

So you found a problem that all of the members of the project agreed constituted a critical bug, produced a fix, ensured that your fix adhered to the groups preferences on code style and algorithms, and you did appropriate testing. If you are lucky, your patch will be accepted directly. However, you will need to be prepared to update your patch based on feedback, for example, for the following reasons:

  * The bug had some non-obvious implications that your fix did not address.


  * Your fix was against an old version of the source, and needs to be forward-ported to be accepted. 


  * Your fix introduced a bug that your testing missed, so that your fix will need to itself be fixed. 


  * One of the participants is working on a feature that conflicts with your fix.


If your patch does get accepted immediately, well and good! But you should be prepared for a bit of back-and-forth before it is accepted. Either way, getting a series of bug fixes accepted is an excellent way to build trust with the members of the FOSS project.

### **Responding to "open and honest" feedback**

Sometimes the feedback to your patches will be helpful and polite. Sometimes it will be anything but. The feedback might well look a lot like an attack on you personally, and it might also appear to be an attack on your  employer. Regardless of how the feedback looks, you must interpret it and respond to it as feedback on your technical work not as an attack on your employer or on you personally.

Always remember that the irritation from angry feedback is momentary, but an ill-considered response on an open email list is archived forever. It is therefore critically important to respond only to the technical points raised in an angry feedback email. Respond in a calm and professional manner. This is harder than is sounds, but there are a number of things you can do to make it easier:


  * Sleep on it before replying. For whatever reason, lack of sleep makes us more likely to interpret honest feedback as an attack. Very often, things look better the next morning. 


  * Consider any extenuating circumstances: the project member might be under pressure, short on sleep, or simply unprepared to think about your patch at the present time. 


  * Partake of some leisure activity that is meaningful to you, whether that be running, cycling, swimming, knitting, spelunking, reading, yoga, or whatever.



Yes, people should avoid giving angry feedback. But to err is human, and FOSS community members are just as human as the next guy.

So why is the burden on you instead of on the existing project members? Simple. -You- are the outsider who is trying to get a patch in. Unfair, perhaps, but if you are only capable of winning fair contests, you will be losing  a very large number of contests.   All that aside, it is also important to react thoughtfully to the technical component of the feedback, instead of just reacting. The following list is a good general guide:


  * If the requested change is trivial or obviously correct, just make the change and resubmit the patch. 


  * If you don't completely understand what the reviewer was asking for, ask for more information or explain in your own words the portion of the feedback that you do understand, along with what you intend to do in response to that feedback. This approach will often save a round of review. 


  * If you believe that the reviewer was wrong, explain clearly why you think that it needs to be done the way you suggested initially. (That said, it can be useful to try the approach suggested by the reviewer, especially in the case where the reviewer is also the maintainer.  And who knows, you might learn something!) 


  * If the reviewer suggests a change that appears to be inappropriate, think carefully about the suggestion. The suggestion, though incorrect, will often be motivated by a specific concern that the reviewer has with your patch. You can then suggest a different solution that both is appropriate to the problem at hand and that addresses the reviewer's concern.  


  * If a lot of the comments focus on an unimportant part of your patch, offer to remove or postpone that part of your patch in order to speed up acceptance of the important parts.


### **Getting a new feature accepted**

New features are more difficult than bug fixes because while most people will agree on the necessity of a bug fix, many of them will resist a new feature unless that feature is something that they need or are interested in. In addition, accepting a new feature is an act of trust.  Accepting a new feature is like accepting a puppy: It is initially very cute, but it will grow up to be a dog, and just who is going to feed it, care for it, and clean up after it? Are you committing to maintain the feature indefinitely, or will you cut and run as soon as your feature is accepted? Sure, you can -say- that you are committing to maintain the feature indefinitely, but why should they believe you?



One answer to this last question is "trust". If you have built up trust with the members of the FOSS project, for example, by doing a good job fixing lots of bugs, reviewing others' patches, and contributing suggestions and ideas, you will have built up some trust. But the problem with trust is that it takes decades to build, and minutes to destroy. This means that while trust is important, it is often insufficient. In addition to trust, you need to understand who your allies are. What members of the project are interested in your feature, or at least in something close enough to your feature to serve your needs? Who are the stakeholders who need to be convinced that either (a) you will stick around to maintain the feature or (b) that the feature is so interesting and valuable that they should accept it anyway? If you did your homework, you will know the answer to these questions.



So how do you recognize potential allies? Usually because they are the ones initially resisting your feature, or the ones asking for changes in your feature. You therefore need to resist the temptation to fight your potential allies: Instead, figure out what they want and need, and work out a way to provide for both their needs and your needs. In some cases, it may be necessary to introduce your feature a bit at a time, in essence building a road from where the community currently is to where you need them to be. Just be prepared to redraw your roadmap as the project progresses! The -rt community used this approach to great effect in getting significant real-time functionality into the Linux kernel.There is one special case that is worth mentioning. Suppose that your new feature depends either on new hardware that is still secret or depends on extremely large and expensive hardware configurations. How do you gain the community's interest and trust in these cases? In some cases, it might be wise to brief selected community members under NDA, as AMD did when developing the x86_64 architecture. Perhaps your company should contract with a prominent developer (AMD did this as well). Perhaps you should donate a copy of your hardware to prominent developers (as many hardware vendors have done), or perhaps work out some way to give the developers access to larger, less wieldy and more expensive systems (as the OSDL consortium did in the early 2000s).

Finally, different types of changes require different levels of trust. For example, in the Linux kernel, the following types of changes are ordered by increasing levels of trust required:

  * Bug.

  * New device driver that uses existing interfaces.

  * Cleanup of existing isolated code

  * Consolidation of similar existing code into a common module. 

  * Global cleanup of identical code.

  * Introduction of new infrastructure to be used by other code. 

  * Additional copy of existing infrastructure to be used in a new way.

  * Addition of new user-visible interfaces (syscalls, ioctls, ...) 


New contributors might wish to start near the beginning of this list (for example, with simple bug fixes) and work their way up, building trust along the way. In addition, if you are working on a given problem, it is often very worthwhile to think hard about how you can solve that problem using a lower-numbered change on the above list. For example, it is usually better to extend existing infrastructure than it is to add new infrastructure, particularly if the new infrastructure partially or entirely duplicates the function of some existing infrastructure. The Linux kernel's many memory allocators are the exception that proves the rule.In addition, organizations must exercise some care in reassignments. Continually reassigning engineers will prevent them from gaining the trust of any given community, which in turn will prevent them from making any meaningful contributions. If your organization is serious about working with a given open-source community, it will need to think in terms of years rather than in terms of days, weeks, or months.

The worst thing that can happen to you is to be ignored. Again, this is why you should do your homework, because this will allow you to work out how to pique their interest.


### **Coping with requests/demands for changes**


Whatever your first patch, the maintainer will want some changes. After all, people usually want more, no matter how much they are given. However, it is also true that you will need some trial and error to learn what the maintainer really wants. So yes, do your homework beforehand, but also expect to learn more after submitting the patch. More importantly, send out a prototype patch sooner rather than later, and release updates frequently. This will be difficult if you are used to releasing software only after it is "done", but this advice has a number of benefits:

  * It reduces the amount of rework you will need to do. Getting feedback on your high-level design will prevent wasting time producing bad code from a bad design.  


  * Early releases reassures people that you are serious about being open, which will help you attract allies who want something similar. 


  * Multiple releases allows the community to become comfortable with your new feature. 


  * If you do a good job responding to community feedback, you will give the community a sense of ownership, which will in turn make it easier for the community to accept your feature.


This approach is called "release early, release often".

If you are producing a patch that is outside the community's experience base, you will probably be asked to do something suboptimal, or even something that makes no sense at all. Although you might be able to tactfully point out the problems with their requests, sometimes the most efficient way forward is to simply do what they ask and (politely!!!) demonstrate any problems you find.


### ** Fluency**


Taking this approach can feel extremely inefficient, but never forget that they might be right and you might be wrong. After all, it is their project, so they have more experience and a deeper understanding of what works. But this approach requires that code be cheap. You will need to be able to generate code quickly and easily, in other words, you must be fluent in the programming language at hand. For the very best results, you should be  able to write code as quickly and easily as you can speak your native language. However, if you have not yet achieved that level of fluency, do not despair: Less-fluent people can achieve good results with focus, persistence, hard work, and a willingness to listen to others and to learn. In my experience, this is especially true of people who are young, who have high energy levels, or who are extremely focused. For one thing, hard work overcomes many obstacles, and for another thing, people who set a moderate pace and produce finely crafted code are more than welcome in most communities.  And sometimes the "superprogrammer" is producing pure garbage: faster is not always better.



Still, regardless of your coding speed, if you cannot bear to throw away (say) 500 lines of your code, you have a problem.



Achieving full fluency seems to require about five years full-time work programming, although people vary. Either way, the five years does not include time spent attending meetings, reading about programming, talking about programming, or reading programs (though all of these activities can be extremely important learning experiences), but actually programming, including much introspection and learning from mistakes. That said, partial fluency can be quite valuable:  As a case in point, a number of valuable innovations in the Linux kernel's RCU implementation came from not-yet-fluent newbies. Sometimes asking the right question is more important how quickly you can code the answer.

For more on the concept of fluency and methods for attaining it, see the books "Outliers" and "Talent is Overrated".

### **Succeeding Without Fluency**


But maybe you cannot afford to to wait five years, or even the 2.5 years that would be required if you program 80 hours per week. Here are some things that can help:

  * Do your homework really really well, so that you only need to write the code from scratch 2-3 times rather than 10-20 times. 


  * Employ a "front man" (or woman, as the case may be) to allow a larger number of developers to interact with the community. 


  * Assign the people who are most passionate about programming to interact with open-source communities. 

### **Do Your Homework**


If your contribution will require 1,000 lines of code, and if you can produce 10 lines of code per day, then each rewrite will consume 100 days, or about 3-4 months. If you need to get your contribution accepted within a year, you can only afford three from-scratch implementations. This means that you will need to converge quickly on a version that is acceptable to the community, which in turn means that you will need to do an excellent job of doing your homework on the community's culture and code base. Of course, if you do your homework perfectly, your first attempt will be accepted, but this almost never happens. When it does, make sure to celebrate appropriately!

### **The Front Man (or Woman)**


Another approach is to have ten people each writing 100 lines of code, thus producing the required 1,000 lines in only ten days. However, you should first read the classic "The Mythical Man-Month" by Frederick Brooks. Besides, if all ten coders interact individually with the community, chaos will ensue. One way to avoid chaos is for your team of programmers to have a "front man" (or woman) interacting with the community. The "front man" job is intense, often consuming more than 80 hours per week due to the large amount of communication required. In addition, substantial experience with software is required, along with excellent inter-personal skills. That said, I have seen this model used successfully in a number of cases, at least for modest time periods (a few years). Longer term, you should slowly introduce the individual members of the team to the community. Of course, the person who is in the best position to work out who to introduce when is the front man. Given that this is also the person who might be most threatened by a successful relationship between team members and the community... Suffice it to say that the front-man approach is not without serious risks. However, sometimes it is the only viable approach.


### **Let the Passionate Lead**


The third approach is up to the individual developer: The developer takes on the open-source project as a hobby instead of merely as a job. This may sound strange, but the plain fact is that hobbyists have made many valuable contributions to the Linux kernel. In addition, people who have a passion for a given project are the ones who will invest the time required to become fluent. However, this is the individual developer's personal choice, and cannot be coerced or otherwise planned for. But you might choose the person with the most passion for programming for open-source assignments.


### **Coping With Requests/Demands for Changes: Summary**


The key point is that contributing to a community requires more than just a single prototype of the needed code. Although there are a number of approaches that will work, you will need to carefully map out your strategy based on the capabilities and passions of the available developers.


### **Open-source licensing issues**


Open-source licenses need to be complied with just as surely as do proprietary licenses, as a number of companies have learned to their cost in courts of law. A full exposition of open-source licensing issues fills a book, so the interested reader is referred to the following sources of information:




  * "Open Source Licensing: Software Freedom and Intellectual Property Law" by Lawrence Rosen. 


  * The Open Source Initiative (OSI) licenses web page: http://www.opensource.org/licenses 


  * The GNU project's licenses web page: http://www.gnu.org/licenses/license-list.html


All that aside, the most important thing that an organization needs with respect to open-source licenses is a clear policy allowing its developers to work closely with open-source projects.  Working closely with open-source projects requires responding to open-source developers in minutes or hours, not days or weeks, which means that any open-source policy requiring perpatch legal review is doomed to abject failure. Instead, organizations must put processes in place that offer appropriate training to individuals, and then authorize those individuals to work directly with the open-source project, with no further review required. (Of course, an annual refresh of training is not a bad thing, and there needs to be some provision for gross errors of judgment or malfeasance.)


### **Other material**


The following files in the Linux source tree should be read before submitting anything to the Linux kernel community:


  * Documentation/SubmitChecklist


  * Documentation/SubmittingPatches 


  * Documentation/SubmittingDrivers


The following presentations and articles are also quite helpful:

Greg Kroah-Hartman's “Write and Submit your first Linux kernel Patch” (2010)
[https://archive.fosdem.org/2010/](https://archive.fosdem.org/2010/)

Jonathan Corbet's “How to Participate in the Linux Community” (2008)
[http://ldn.linuxfoundation.org/how-participate-linux-community](http://ldn.linuxfoundation.org/how-participate-linux-community)

Randy Dunlap's “Linux Kernel Development: Getting Started” (2005)
[http://xenotime.net/](http://xenotime.net/)

Greg Kroah-Hartman's “HOWTO do Linux kernel development – take 2” (2005)
[http://lwn.net/Articles/160191/](http://lwn.net/Articles/160191/)

Wikipedia’s description of free and open source software:
[http://en.wikipedia.org/wiki/Free_and_open_source_software](http://en.wikipedia.org/wiki/Free_and_open_source_software)

Acknowledgements:
Thanks to Kiko Reis, Dave Rusling, Deepak Saxena, Grant Likely, Nicolas Pitre, Arnd Bergmann, Thomas Abraham, and Shawn Guo for stimulating conversations on this subject.