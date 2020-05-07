---
layout: post
title: Linaro Engineering Highlights for April 2020
date: '2020-05-04 03:50:19'
image:
  path: /assets/images/content/code-1-.jpg
tags:
  - Linaro
  - Engineering
  - News
  - Highlights
  - April
category: Blog
author: joakim.bech
---
![](/assets/images/content/CORE ENG.svg "Core Engineering")

### **April 2020**

Welcome to the April 2020 edition of the Linaro Engineering Highlights. This is a roundup of all of the latest news and developments from last month including:- 

* Linaro’s Contributions to the Linux v5.6 Kernel LTP (Linux Test Project) 
* PSA Level 1 Certification Showcase
* Linaro Consumer Group (LCG) News
* OTA article - Industrial Internet Consortium Journal of Innovation
* Protein Folding on Arm Devices - Helping with COVID-19 Research by Sahaj Sarup

### Linaro’s Contributions to the Linux v5.6 Kernel

###### **Mark Orvek, VP Engineering**

{% include image.html path="/assets/images/content/CORE ENG.svg" class="medium-inline" alt="CORE ENG.svg}

As reported by LWN, the latest stable Linux Kernel (version 5.6) was released on March 29th. I wanted to highlight five notable Linaro related statistics from the article; you can read the full LWN article at [Some 5.6 kernel development statistics](https://www.google.com/url?q=https://lwn.net/Articles/816162/&sa=D&ust=1588606655099000):

* Linaro is the #2 company by number of lines changed and the #6 (known) company by changesets. 
* Two Linaro employees (Arnd Bergmann and Srinivas Kandagatla) are #2 and #7 individual contributors by number of lines changed.
* Arnd Bergmann is the #6 individual contributor by changesets.
* Not mentioned in the article but two other key statistics  

  * Linus Walleij 7th 1.6% Reviewed-by in 5.6 
  * Naresh Kamboju ranked at #10 for reported-by

    \    **Most Active 5.6 Employers**

       **By Changesets                 By Lines Changed**

| Intel               | 1694 | 13.4% | Intel              | 78083 | 11.5% |
| ------------------- | ---- | ----- | ------------------ | ----- | ----- |
| (Unknown)           | 904  | 7.1%  | Code Aurora Forum  | 68538 | 10.1% |
| AMD                 | 781  | 6.2%  | Linaro             | 59492 | 8.8%  |
| (None)              | 778  | 6.1%  | AMD                | 44979 | 6.6%  |
| SUSE                | 713  | 5.6%  | Red Hat            | 40553 | 6.0%  |
| Red Hat             | 702  | 5.5%  | (Unknown)          | 28591 | 4.2%  |
| Google              | 558  | 4.4%  | (None)             | 27387 | 4.0%  |
| Linaro              | 503  | 4.0%  | (Consultant)       | 23271 | 3.4%  |
| Huawei Technologies | 483  | 3.8%  | Google             | 20038 | 3.0%  |
| Facebook            | 298  | 2.4%  | SUSE               | 19274 | 2.8%  |
| Mellanox            | 252  | 2.0%  | Facebook           | 17525 | 2.6%  |
| Renesas Electronics | 247  | 2.0%  | Texas Instruments  | 16561 | 2.4%  |
| IBM                 | 232  | 1.8%  | Mellanox           | 14977 | 2.2%  |
| Arm                 | 231  | 1.8%  | Linux Foundation   | 12289 | 1.8%  |
| Code Aurora Forum   | 222  | 1.8%  | Marvell            | 11678 | 1.7%  |
| (Consultant)        | 216  | 1.7%  | Realtek            | 10968 | 1.6%  |
| Texas Instruments   | 213  | 1.7%  | Collabora          | 9491  | 1.4%  |
| NXP Semiconductors  | 210  | 1.7%  | NXP Semiconductors | 8689  | 1.3%  |
| Oracle              | 147  | 1.2%  | Solarflare         | 8670  | 1.3%  |
| Broadcom            | 143  | 1.2%  | IBM communications | 8586  | 1.3%  |

 **\    Most Active 5.6 Developers**

\    **By Changesets                 By Lines Changed**

| Takashi Iwai        | 406 | 3.2% | Kalle Valo          | 48483 | 7.2% |
| ------------------- | --- | ---- | ------------------- | ----- | ---- |
| Chris Wilson        | 306 | 2.4% | Arnd Bergmann       | 29415 | 4.3% |
| Sean Christopherson | 143 | 1.1% | Jason A. Donenfeld  | 18664 | 2.8% |
| Jérôme Pouiller     | 125 | 1.0% | Ben Skeggs          | 13471 | 2.0% |
| Eric Biggers        | 122 | 1.0% | Greg Kroah-Hartman  | 11931 | 1.8% |
| Arnd Bergmann       | 114 | 0.9% | Chris Wilson        | 10615 | 1.6% |
| Zheng Bin           | 110 | 0.9% | Srinivas Kandagatla | 8739  | 1.3% |
| Geert Uytterhoeven  | 103 | 0.9% | Alex Maftei         | 8581  | 1.3% |
| Greg Kroah-Hartman  | 103 | 0.8% | Maxime Ripard       | 7521  | 1.1% |
| Masahiro Yamada     | 94  | 0.7% | Peter Ujfalusi      | 6970  | 1.0% |
| Colin Ian King      | 92  | 0.7% | Tony Lindgren       | 6320  | 0.9% |
| Ben Skeggs          | 91  | 0.7% | Helen Koike         | 5789  | 0.9% |
| Ville Syrjälä       | 90  | 0.7% | Takashi Iwai        | 5622  | 0.8% |
| Andy Shevchenko     | 88  | 0.7% | Shuming Fan         | 5604  | 0.8% |
| Russel King         | 88  | 0.7% | Michal Kalderon     | 5445  | 0.8% |
| Alex Deucher        | 86  | 0.7% | Sricharan R         | 5065  | 0.7% |
| Krzysztof Kozlowski | 82  | 0.6% | Andrii Nakryiko     | 4857  | 0.7% |
| Thomas Zimmermann   | 80  | 0.6% | Roman Li            | 4852  | 0.7% |
| Jens Axboe          | 77  | 0.6% | Thierry Reding      | 4845  | 0.7% |
| Jani Nikula         | 74  | 0.6% | Sunil Goutham       | 4762  | 0.7% |

Congratulations to Arnd, Srinivas, Linua and Naresh for being top contributors to the 5.6 kernel and a thank you to all those who keep Linaro in the top ten Linux Kernel contributors every release.

### LTP (Linux Test Project)

{% include image.html path="/assets/images/content/CORE ENG.svg" class="medium-inline" alt="CORE ENG.svg}

Linaro had been asked by the Members to work on the Linux Test Project (aka LTP) and enhance it to cover all the syscalls in the Linux Kernel. With best effort staffing, work had been progressing slowly. In January, Viresh Kumar (KWG) was able to take up this work and put in a sustained effort, quickly closing the gap and adding support for the following syscalls:

* pidfd_open Io_pgetevents
* Fsopen
* Fsconfig
* Fsmount
* Fspick
* Open_tree
* Move_mount
* Clone3
* Openat2

All of the above have been merged,  while work is in progress for three syscalls related to io_uring supported by an ARM member engineer. In addition, twenty new syscalls have been added to the task, all related to the time64 variants and these are now underway. Further information is available in [KWG-326.](https://projects.linaro.org/browse/LKQ-43)

### [PSA Level 1 Certification Showcase](https://www.psacertified.org/app/uploads/2020/04/PSA_Certified-Zephyr_Partner_Showcase.pdf)

Linaro IoT and Embedded (LITE)

Kevin Townsend, LITE Senior Engineer, completed certification of the TF-M integration with Zephyr. This effort was featured on the PSA Certified website in the Partner [showcase](https://www.psacertified.org/partner-showcase/).

![](/assets/images/content/LITE col.svg)

{% include image.html path="/assets/images/content/LITE col.svg ENG.svg" class="small-inline" alt="LITE col.svg}

With the latest updates in TF-M and PSA, Kevin is working on a recertification with a Linaro Member board. We will post the news when that recertification is completed. 

### **Linaro Consumer Group (LCG) News**

Tom Gall, Director LCG

This month the Linaro Consumer Group team released two blog posts highlighting work going on within the segment group and in coordination with our Member companies.

The first blog discusses the current state of HiKey and HiKey960 boards and their usefulness as Android Open Source Project (AOSP) development boards.  John Stultz talks about the current state of support and how these devices are useful, valued members of the Android development ecosystem.  

* [Update on HiKey/Hikey960 efforts in AOSP](https://www.linaro.org/blog/update-on-hikey-hikey960-efforts-in-aosp/)

The second blog post is about how the effort enabling the SDM845 on the Dragonboard 845 bloomed into making possible mainline linux kernel development on a consumer form factor Android devices like the Pixel 3 and Poco F1. The efforts also highlight the effectiveness of the Android-5.4 GKI kernel and its ability to boot multiple devices from the same binary. [](https://www.linaro.org/blog/aosp-on-pixel3-pocof1-running-aosp-with-mainline-kernel-on-form-factor-devices/)

**[AOSP on Pixel3/PocoF1 (Running AOSP with mainline kernels on form factor devices)](https://www.linaro.org/blog/aosp-on-pixel3-pocof1-running-aosp-with-mainline-kernel-on-form-factor-devices/)**