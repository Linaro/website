---
layout: post
title: Security and the Zephyr Project
description: David Brown is currently the Security Architect for the Zephyr
  Project. In May of 2020, the project received a report from the NCC group
  outlining several dozen vulnerabilities found in the Zephyr codebase. This
  blog explains the process and measures taken to resolve these vulnerabilities
  and to ensure the codebase is secure.
date: 2020-11-26 04:21:45
image: /assets/images/content/cyber-security.jpg
tags:
  - Zephyr
  - Security
  - Lite
category: blog
author: david.brown@linaro.org
---
# Security

David Brown is the Security Architect for the Zephyr Project. He is also the security lead for the Linaro IoT and Embedded (LITE) working group. In addition to general security of IoT devices, David is a maintainer for the MCUboot secure bootloader project.

Part of the charter for the Zephyr Project specifies that there shall be a security subcommittee. This committee consists of an individual from each Platinum member company, along with two elected positions, a Security Architect (currently me), and a Chair. The Chair is responsible for running the regular security meetings (every two weeks), and the Architect is responsible for the overall security of the project.

In the past, this security subcommittee, often just called the security team, or sometimes the security working group, has produced a set of documentation describing the security goals and process for the project, as well as developed a preliminary threat model.

A more recent development has been on the process of managing discovered vulnerabilities, including the CVE system. External to our project, the CVE database (Common Vulnerabilities and Exploits) assigns a unique identifier to each vulnerability discovered across any participating project. On September 7, 2017, the Zephyr Project became a CNA, or CVE Numbering Authority. By producing certain documentation describing our processes, this allows us control over an allocation of CVEs so that we can manage these ourselves.

## Feeling vulnerable

The key idea behind this CVE system is the idea of a vulnerability. One way to think of a vulnerability is that it describes a characteristic of a system (typically a software bug) that can be exploited to cause unexpected or unintended behavior in that system. The consequences of these can vary from mildly annoying, to quite devastating, such as allowing remote privilege escalation, and even control over a device. The CVE system provides numerous rules and guidelines as far as how to allocate these numbers, and how to determine priorities.

In May of 2020, the project received a report from the NCC group outlining several dozen vulnerabilities found in the Zephyr codebase. We began the process of allocating CVEs for this, and improving and documenting the methods we use to track these issues.

Because, somewhat by definition, these vulnerabilities are exploitable, it is important to not disclose this information too early. Ideally, the fixes should be propagated to end devices before information on the vulnerability itself is released. In addition to the regular challenges of doing this, being an open source project makes this more difficult, because development itself is done in the open.

## Tracking issues

We address this in a few ways. First, we don’t use the regular Zephyr bug tracking system to track these vulnerabilities. We have a separate instance of JIRA that has been configured to support issues being embargoed, or hidden from the public, until an embargo date has been reached. Since development of patches continues the same as other changes, on Github, this adds a bit more complexity to these fixes. Generally, developers will try to describe what has been fixed in the commit text, and leave out details explaining that the issue is a vulnerability, or how it addresses this. This can make understanding these patches later more difficult, but the hope is that the rest of the system in place will allow this information to be found after the embargo has been lifted.

When each vulnerability is created, it will be allocated a CVE number. These numbers are allocated from MITRE, and currently assigned to us in blocks. They are working on an API that will allow us to allocate them in a more automated manner, on demand. If an issue is still under embargo when a Zephyr release is made, the release notes will simply contain a reference to the CVE, without a mention of the fix. We have a vulnerabilities page that shows all vulnerabilities found in the project. For CVEs that are still under embargo, there will just be a placeholder on this page.

Our embargo period has undergone a few revisions. Initially, it was fairly short (60 days). Although this is adequate for a project that produces end devices, it isn’t really enough time to propagate fixes to users of Zephyr that are themselves building devices. Therefore, we have extended this embargo period to 90 days, with a goal of having fixes in place within Zephyr within 30 days, giving 60 days for end users to be able to apply and deploy the fixes into their own devices.

In order for these product creators to know about the vulnerabilities before the embargo ends, we have created a vulnerability registry where individuals can register for a mailing list to receive alerts. Ideally, this will be restricted to those who are making products using Zephyr.

After the embargo ends on a particular vulnerability, several things will happen. First, the vulnerabilities page will be updated to include more details about the vulnerability. This information is kept separate from the release notes because the release notes are fixed with each release, and cannot be updated after the release. Second, the CVE database itself will be updated to also include the details of the release.

There are numerous sites that monitor the CVE database, and updating this information will generally result in reports being generated containing information about the issues, and their fixes.

## Doing the work

Per the project charter, this security team consists of an individual from each member. In the past, we set up a rotation to determine who would process vulnerabilities. Unfortunately, this also included additional work monitoring static analysis and became a bit overwhelming. Static analysis is important, but isn’t entirely about security, and needs to be addressed independently of just the security team. We are now beginning a rotation based on just vulnerabilities themselves.

Security process is something we are continually seeking to improve. As we work through the process, it is important to be aware of ways to improve the process, ultimately with the goal of making Zephyr itself secure, and allowing it to be used to create secure products themselves.

For more information about Zephyr’s security communication or vulnerability reporting, visit <https://www.zephyrproject.org/security/>.