---
layout: post
title: Linaro Engineering Highlights - September 2020
description: September's Engineering Highlights include....
date: 2020-10-12T12:29:25.000Z
image: /assets/images/content/binary-2910663_1920.jpg
tags:
  - To
  - Do
category: Blog
author: jon.burcham@linaro.org
---
# LVC20 Wrap Up

{% include image.html path="/assets/images/content/connect-2020-virtual-1-.jpg" class="small-inline left" alt="Linaro Virtual Connect 2020 logo" %}

In early 2020 we were looking forward to our twice annual Linaro Connect event and to welcoming the 400+ Linaro employees, assignees, members, partners and others in the open source community. Well, as you all know things in 2020 haven’t quite gone as planned but we are happy to be able to host Linaro Virtual Connect as a way to preserve some of the things we love most about Linaro Connect. 

The shift to a virtual event has been a learning experience for everyone - events team, speakers, and attendees and we thank you for your patience and willingness to try something new. One benefit of a virtual event is that attendees and speakers who have not been able to attend Linaro Connect in the past have had the chance to participate.  We are very happy to have so many of you invested in Linaro Connect and pleased that we are still able to deliver the important technical content.

With all the changes 2020 has brought, Linaro Connect continued to the tradition of quality sessions at the forefront of Arm ecosystem development. The three days were staggered at different start times to accommodate as many time zones as feasible. With a large percentage of sessions prerecorded, we were able to feature speakers from around the world.

There were an astounding 1,476 individual registrations, three times the in person Connect average. Live conversations started during the sessions and continued in the Slack channels afterwards. For a change of pace, Kassidy Holmes led participants through a 1 hour foundational yoga flow on Wednesday. On Thursday, Martin Jackson wrapped up the week with a lively acoustic set.   

The most popular sessions (by registration counts) were.

* [Arm64 Linux Kernel Architecture Update](https://lvc20.sched.com/event-goers/adfde6a151331482f8037ffcb2440e56)
* [Trusted Firmware Project Update](https://lvc20.sched.com/event-goers/06e61cea5736945a61870dbdae81512a)
* [Arm Architecture 2020 Extensions](https://lvc20.sched.com/event-goers/fcda9a5f34400338debca060c1dd2032)
* [PSA Secure Partitions in OP-TEE](https://lvc20.sched.com/event-goers/12ccff0741601ae997bf4057c56ccec3)
* [Enable UEFI Secure Boot Using OP-TEE as a Secure Partition](https://lvc20.sched.com/event-goers/ee38e4c30840e698eb7d34578f1d5633)

## Tuesday September 22 Highlights

[LVC20-100K1 Opening Keynote by Li Gong](https://connect.linaro.org/resources/lvc20/lvc20-100k1/)

Li noted that Linaro ranked #5 in patches committed in the Linux kernel between 2007-2019, even though Linaro is only 10 years old.  Li noted that new companies are starting up at a brisk pace. Companies are making their own chips, carrying differentiation from the system level to the chip level. The cost of chip design has significantly declined making custom chip design more affordable. This is a way to secure access to IP and supplies particularly in the face of on-going shortages and trade wars (see China/US). This of course has a direct impact on SoC vendors. In Li’s view, the Arm ecosystem is composed not only of hardware vendors but now major software vendors are playing a role. Linaro is enlarging its scope for these new companies and the software vendors with the idea of a franchise company. A franchise, in this context, is a sub ecosystem within the Arm ecosystem. An example is Google and Android. Linaro also has simplified its membership model to four tiers - Core, Club, Group and Project while continuing to focus on delivering value through its corps of maintainers and skilled developers. Finally, Linaro is opening up its projects and processing to a worldwide audience. 

[LVC20-100K2 Why Standardisation on the Edge is Critical for Success by Peter Robinson](https://connect.linaro.org/resources/lvc20/lvc20-100k2/) 

While “Edge” means many things to many people, in order for Edge solutions to be a success, the key is using the Open Standards Data Center model.. Edge platforms face several challenges including environmental, scale and cost. Which will vary depending on which Edge “tier” that platform plays in. Open standards,as with the IBM PC and various networking standards (TCP, HTTP), lower barriers to entry and protect investments in time, money and knowledge. Enterprise standards are useful. In addition to knowledge reuse, you are not locked into a single platform. You can use the right hardware with the same base software stack using the same or similar security models and processes. Provisioning and on-boarding end devices need to be deployed with general knowledge at large scale (10 of thousands) across geographic regions. Using OCI container solutions provides consistency and scalability. Standardisation in edge computing giving manufacturers and consumers more, not less, choice.

[LVC20-113 Trusted Firmware Project Update](https://connect.linaro.org/resources/lvc20/lvc20-113/) by Matteo Carlini and Shebu Varghese Kuriakose

The Trusted Firmware (TF) project’s mission is to collaboratively build a secure reference software implementation for Arm processors. Highlights from the past year include the addition of Mbed TLS (donated by Arm) and Hafnium (donated by Google) to TF. TF for Cortex-A (TF-A) v2.3 and TF- Cortex-M (TF-M) v1.1 were both released. Renesas and NXP joined as members. Also a new Security center was set up to provide consistency on handing security vulnerabilities and incidents. A new maintainer process was put in place including how code reviews and the patch lifecycle are managed. Half of the TF maintainers are now from outside of Arm. The project also announced that Don Harbin (Linaro) will be the TF Community manager and that the[TF website](https://www.trustedfirmware.org/)has been significantly updated. Looking ahead, TF is expanding CI/Testing efforts with more platforms, static analysis and updated user guides. The community project will also be sponsoring workshops on TF-M and Mbed TLS.

A don’t miss session is [LVC20-104 On the Edge of the Real World. An Introduction](https://connect.linaro.org/resources/lvc20/lvc20-104/) by Bruno Verachten. A lively talk from Bruno on how to build home IoT systems. The bottom line? There’s a lot of choice!