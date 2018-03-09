---
author: steve.taylor

date: 2010-10-25 18:52:00+00:00
layout: post
link: /blog/getting-ready-for-the-developer-summit-and-the-next-release-cycle/
slug: getting-ready-for-the-developer-summit-and-the-next-release-cycle
title: Getting Ready for the Developer Summit and the next Release Cycle
wordpress_id: 4108
categories:
- blog
tags:
- developer summit
- release cycle
- Technical Steering Committee
---

Linaro engineering operates in a six monthly engineering cycle.   Within that cycle, the working groups are very autonomous; basically, their role is to do engineering work upstream.   The aim is that, at the start of each engineering cycle, the working groups are given a set of engineering problems to solve in that cycle.    From the very beginning of Linaro we have focused on execution.

So, where do these engineering problems (actually requirements) come from?    This is where the Technical Steering Committee (TSC) comes in.    This council comprises the CTO, the VP Engineering and representatives from each of the member companies.    The role of the Technical Steering Council (TSC) is to create a set of requirements that steer the next cycle's engineering and then to monitor that engineering as it happens.

Right now then, the TSC is refining the requirements for the cycle that runs from November 2010 to May 2011.   The raw requirements were gathered during the Prague face to face meeting (July 22nd).   Since then, the technical leads, essentially the working group leads and Linaro's domain experts have been working with the TSC members to refine those requirements.

<!-- more -->

The consolidated requirements that we worked on in Prague were a  mixture of various high and low level requirements.   This led to the usual engineering discussion about what constituted a requirement.   Obviously engineering needs requirements to be precise and measurable, whereas some real life requirements can be somewhat vague.    We needed to be able to map the requirements onto blueprints, which is how we track and manage engineering work within Linaro.    Much work from the Linaro technical leads created a consolidated set of 50 - 60 high level technical topics ( [https://wiki.linaro.org/Releases/1105/TechnicalTopics](https://wiki.linaro.org/Releases/1105/TechnicalTopics)) and it was these that we took into the MIlan meeting (15th - 16th September).   You should note that the technical topics are a live document and will change until we start the next release cycle.    For convenience there are snapshots of them at various points in time, but this is mainly for tracking purposes.

As an example, a high level toolchain requirement is 'Improve the performance of typical code on current and near-term ARM Cortex-A architectures'.   Whilst this is a great aim and the right thing to work on, it is expressed as several technical requirements such as 'Continue to improve the time-based performance of GCC 4.5 for Thumb-2 on the Cortex-A9'.

We decided to structure the Milan meeting around these technical topics, refining them during the meetings.    The agenda was timed at between 1 and 2.5 hours per topic area, with appropriate technical leads dialing into the meeting, myself chairing the discussions and Kiko (frantically) taking notes and actions.   What worked well was to have the technical lead give an overview of the items before asking each TSC member for input.    This generated good technical discussions and, I think, ensured that we made sure that we hadn't missed topics.   Additionally, we assigned TSC 'sponsors' to each technical topic area.

By the end of the Milan face to face, we had a good set of beta high level requirements.   These requirements are being turning into blueprints by the TSC and the technical leads in the run up to the developer summit (October 25th - 29th).      Of course, not all requirements will make it into a cycle.   As engineering works out what effort fulfilling a requirement means there will be negotiating between engineering and the TSC so that the overall program of effort makes sense.  In addition, there were a number of topics that did not make it into the May cycle.   These will be worked on separately (by me and the TSC).   Some of these will be candidates for advanced development.

Along the way we agreed to create two new working groups - Graphics and Multimedia.   These are key areas for Linaro to expand into.    The member companies will all be assigning experts in these areas so that we have sufficient effort to make a difference.

In summary, whilst there's plenty of work to do in the run up the developer summit,  the TSC members and the Linaro technical leads have done a lot of great work getting the requirements and engineering for the next cycle into shape.   If you can make it to Linaro@UDS I look forward to seeing you there.  If you can't get to Orlando at the end of October, you can follow our engineering on the Wiki or listen in to the webinar that we will be giving at TechCon (Nov 10th).   See
[http://seminar2.techonline.com/registration/wcIndex.cgi?sessionID=linaro_nov1010]()
