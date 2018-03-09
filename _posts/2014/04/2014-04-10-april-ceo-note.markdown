---
author: george.grey
categories:
- blog
date: 2014-04-10 19:30:32
description: Linaro's CEO discusses activities from Q1 2014 including The announcement
  of five new members at Linaro Connect, Linaro's ARMv8 work, LSK work and the latest
  Linux Foundation report
layout: post
link: /blog/april-ceo-note/
slug: april-ceo-note
tags:
- ARMv8
- connect
- kernel
- Linux
- Linux on ARM
- LSK
title: Q1 2014 CEO Note
wordpress_id: 5667
---

> The announcement of five new members at Linaro Connect, including Club members Qualcomm, MediaTek and ZTE, is a significant endorsement of the value of Linaro’s business model, and further increases the ROI for every one of our members.

By coincidence the Linux Foundation recently published a report on collaborative engineering subtitled:  [“Companies increase collaborative development, view as essential to success”](http://www.linuxfoundation.org/publications/linux-foundation/collaborative-development-trends-report-2014).  The report points out that technology companies face enormous pressure to innovate faster and cut costs. A survey carried out for the Linux Foundation shows that professionals in a wide variety of leading technology companies recognize that collaborative software development is increasing in their organization and across industries, and indeed that it’s becoming central to their company’s mission.

**Key findings are that:**

  * Companies get involved in collaborative software development to advance business objectives and to be part of industry innovation
  * Investments in collaborative software development are on the rise
  * Individual developers and businesses both benefit from the trend toward collaboration
  * Business needs are driving increased adoption of collaborative development practices

This is a further strong validation of Linaro’s approach. Rather than each company itself developing non-value adding but key technology, duplicating effort and in many cases complicating and delaying the open source process, Linaro offers a different path. Instead, our members come together to engineer open source software to meet their common product needs once. The result is significantly lower costs for everyone and a higher quality deliverable given the shared effort and knowledge that has been utilized. Furthermore, using the same code base reduces maintenance costs and can accelerate time to market. Using this open source software as the basis of member’s products, coupled with the knowledge gained from being part of the development process, enables Linaro members to focus their own resources on their own value add and accelerates their ability to innovate in their chosen market segment(s). The Linux Foundation report supports the idea that members derive substantially more value from being inside Linaro than outside.

The current work on ARMv8 inside Linaro is a good example of the results that collaborative engineering can deliver. Many engineers in Linaro are working on ARMv8 projects, from boot architecture to virtualization, from kernel device drivers to Java, and the results speak for themselves. This effort is delivering code that all members with ARMv8 projects will be using.

While Linaro’s work is deliberately carried out as new work in the relevant open source projects (for example currently at the Linux 3.14 mainline Linux kernel tree) most members cannot easily leverage this new work directly into products. To address this challenge members asked Linaro to provide a stable kernel, based on the Linux Long Term Supported (LTS) kernel, but including backports of the latest stable Linaro technology.

The Linaro Stable Kernel (LSK) is based on the most recent LTS release (currently Linux 3.10). Today the LSK (base and Android versions) includes many of the latest ARMv8 patches from later kernels backported by both ARM into LTS (and therefore reflected into LSK) and by Linaro directly into the LSK. At present this functionality can only be tested on models, and in a limited manner on member hardware that we have in house under the terms of a restricted use license.

As additional member hardware becomes available to Linaro we are committed to having the LSK support the functionality, quality and stability that members need for their initial products. Of course a balance between stability and new features must always be made, but our goal is to enable our members to use the LSK as the basis of their products now. This will be a significant demonstration of the benefits of collaborative engineering that have been advocated by Linaro and the Linux Foundation.


[1 Linux Foundation Collaborative Development Trends Report 2014](http://www.linuxfoundation.org/publications/linux-foundation/collaborative-development-trends-report-2014)