---
title: Fosdem 24 is here, and Linaro is present at the event more than ever
event: fosdem-24
event_url: https://fosdem.org/2024/
description: The 2024 edition of Fosdem will take place on February 3rd-4th and
  this year’s program is bigger and better than ever. Linaro, thanks to its deep
  expertise and contribution to the open source ecosystem, has been accepted to
  present eight talks, setting a new record for their presence and acceptance
  ratio at the event.
visual_date: 3 & 4 February 2024
location: Brussels
date: 2024-02-02 08:49:28 +08:00
event_date: 2024-02-03 09:30:52 +08:00
event_end_date: 2024-02-04 05:50:28 +08:00
image: /assets/images/content/screenshot-2024-02-02-at-20.53.48.png
event_type: attend
---
\
The 2024 edition of [Fosdem](https://fosdem.org/2024/) is upon us. The [Université libre de Bruxelles](https://fosdem.org/2024/practical/transportation/) will host the event again on February 3rd and 4th, and the program is more prosperous than ever. Linaro will attend the event with eight talks (having submitted about a dozen): a record-breaking presence and acceptance ratio! Beer is constantly flowing at Fosdem, yet there is no indication that Belgian beer is much better this year to draw the attention of so many of the following Linaro open-source contributors. Neil Armstrong will open the dance by discussing Linux mainline kernel support for Qualcomm’s SoCs. Over the past years, Qualcomm’s supported platforms have significantly increased, and features such as power management and DSP, historically complex to support, have vastly improved. 

Yet, what use can you make of a Linux kernel without a proper EFI bootloader? Caleb Connolly will talk about the work they have been doing to improve Qualcomm support in upstream U-Boot and how such work can drastically lower the barrier of entry for distro support on Qualcomm-powered phones, IoT, IIoT, and auto devices.

Speaking of phones and consumer devices, what are they without a camera? And what good is a camera for without the decency of a fully open, libcamera-based MIPI stack? Bryan O'Donoghue has done some work in this area, and he’ll be introducing it at Fosdem.

At Linaro, we test multiple versions of the Linux kernel running on various ARM SoCs and reference boards. We track upstream closely and thus update the kernel running on such devices frequently, and we can’t afford to throw away artifacts that need no change. And being Linaro a distributed company, can we afford to buy hardware in excess for all engineers collaborating on the same projects? Remi Duraffort will explain in his two talks how he’s put Kisscache to good use to maximize artifact reuse for Linux Kernel Function Testing and how he’s designed LAVA so it can perform testing of software on real devices that are metaphysical (ghosts?!) in nature (spooky Remi!).

Remote attestation has historically been a headache for application developers, yet recent developments have made such technology crucial for establishing trust in confidential workloads accessible to most. Thomas Fossati will present this topic, while Dmitry Baryshkov will explain his work to leverage linux-yocto as the default kernel across Qualcomm SoCs enabled by meta-qcom, moving away from a kernel branch dedicated to Qualcomm.

Open-source is glorious, and working on open-source projects within the open-source community provides a sense of purpose to many developers worldwide. Yet it’s not easy, and conflicts arise more often than not. Conflicts and disagreements are a vital part of the peer-review process and contribute to the superb quality of open-source software. So long as they are managed! William Gray has readied a lightning talk to look into examples and best practices. I have heard him deliver this talk at Linaro many times, and there’s always something new to learn, even for seasoned open-source developers.

And with this, I conclude by wishing everyone a great Fosdem 2024. The Linaro team members look forward to seeing you at their talks and sharing one or two hundred beers with open-source friends coming to Brussels from around the world.