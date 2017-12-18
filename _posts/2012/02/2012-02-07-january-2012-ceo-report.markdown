---
author: george.grey
categories:
- blog
date: 2012-02-07 14:37:18
description: Linaro CEO gives an overview of the 2012 goals for Linaro.
keywords: Linaro, ARM, ARM v8 architecture, Linux on ARM, big.LITTLE, LAVA
layout: post
link: /blog/industry-blog/january-2012-ceo-report/
slug: january-2012-ceo-report
tags:
- Hardware
- Industry
title: January 2012 CEO Report
wordpress_id: 1233
---

There are three themes that run through our plans for 2012. These are in addition to continuing our work in consolidation and defragmentation of existing ARM open source code in the various relevant upstream projects, with most but not all of our output targeting kernel.org and the gcc toolchain upstream.

**Expanding Linaro Membership**
Linaro's work has attracted the attention of other ARM SoC vendors, and we are in discussions with several companies about joining Linaro. We expect some of these new members to expand our activities from primarily mobile into adding work and resources on appliances and future higher end segments, including ARM-based servers. Linaro's goal is to help the members firmly establish ARM as a leading architecture in open source.

This will enable each of our members to deliver differentiated products for their markets, while leveraging the shared engineering that Linaro provides for the core ARM architecture. I personally expect that expanding our activities into new segments will strengthen ARM's position in all markets, and that server-related open source activities will benefit our mobile-focused members and vice-versa. Having said that, we should ensure that our work is balanced according to our membership to ensure that each member receives significant return on investment for Linaro's output into the market segment(s) in which the member operates.

**Building on LAVA**
During 2011 we built the LAVA platform infrastructure for continuous integration, testing and final validation of Linaro output and distributions on member hardware. This project will continue, adding functionality as the use of the platform within Linaro and our members grows. However, with the platform in place we will now add resources to build out the actual test capability: the LAVA platform is the tool; now it is time to use it effectively by building a Linaro-hosted test suite that will be available to members.

We therefore plan to start a small (initially 2-3 engineers) test team within Linaro. This team will be responsible for developing a culture of testing within all of Linaro's engineering, and for building and maintaining a Linaro test suite that provides smoke testing, functional/regression testing and stress testing.

Our initial focus will be on growing a set of test cases that stress test the Linux kernel stability, that we will then apply to testing both upstream and Linaro trees on member boards using the LAVA software framework and the growing hardware farm situated in Cambridge, UK. We look forward to working with all of our members to make this as effective and useful as possible.

**Shared Investment in New Technology**
Our third theme is new technology. Linaro was formed as a shared engineering resource to work on Linux consolidation, optimization and upstreaming. Historically each ARM licensee has spent considerable resources engineering their own solution to the same problems (think of kernel memory management as an example).

In many cases this does not add competitive value, and actually adds to costs because of the requirements to maintain non-upstreamable code over many product generations. Linaro was founded as a shared engineering organization to address this problem. Therefore as new ARM technology becomes available Linaro's goal is to make sure that fully engineered software is ready for product integration as soon as new SoCs become available. Our first major project will be support for ARM's big.LITTLE architecture. We plan to deliver an upstreamable Release Candidate of Task Migration (switcher) software in May 2012 (with alpha and beta test versions earlier), and in parallel work with ARM, our SoC members and the community on the full multiprocessing (MP) big.LITTLE software during the year. We also plan to do advance work on ARM's new v8 architecture.

Our goal is to prevent fragmentation before it starts, and to offer our members a high quality, fully tested core solution for new ARM feature sets that will be upstreamed very early in the process. This will enable valuable member engineering resources to focus on their own differentiation rather than on the development and maintenance of core feature sets that will be common to all ARM technology licensees. Linaro's shared engineering model will enable this work in a cost effective way that delivers substantial return on member investment into Linaro, and accelerates time to market for products based on these new technologies.