---
amazon_s3_presentation_url: None
amazon_s3_video_url: None
author: connect
categories:
- blog
comments: false
date: 2017-02-20 20:44:04
excerpt: Linaro Connect is a great time for all security engineers to get together
  to showcase to the open source community what they have been up to since the last
  Linaro Connect in September 2016.  Beginning Tuesday March 7 there will be sessions
  held daily dedicated to security topics as well as demos later in the week.   The
  team will also have daily hacking sessions taking place in the afternoon that all
  attendees at the event are welcome to come to.
image:
  featured: true
  path: /assets/images/blog/LinaroSecurityGroupsPlansforLinaroConnectBudapest2017.png
layout: post
link: http://connect.linaro.org/blog/linaro-security-groups-plans-linaro-connect-budapest-2017/
session_id: None
session_track: None
slideshare_presentation_url: None
slug: linaro-security-groups-plans-linaro-connect-budapest-2017
speakers: None
title: Linaro Security Group's Plans for Linaro Connect Budapest 2017
video_length: 00:00
video_thumbnail: None
wordpress_id: 4582
youtube_video_url: None
permalink: /blog/:title/
---

The Linaro Security Group will be presenting at four sessions during the upcoming Linaro Connect Budapest 2017 (BUD17), including sessions on Universal Keyring, Device Tree, Op-Tee and Power Management.

Linaro Connect is a great time for all security engineers to get together to showcase to the open source community what they have been up to since the last Linaro Connect in September 2016.  Beginning Tuesday March 7 there will be sessions held daily dedicated to security topics as well as demos later in the week.   The team will also have daily hacking sessions taking place in the afternoon that all attendees at the event are welcome to come to.

Linaro Security Group will have the following sessions:

**Tuesday:
**_Time:  10:00-10:25am __
_**_Title: _**B**UD17-203/207: Universal Keyring - The Time has Come**[**
**
**](https://docs.google.com/presentation/d/1fvk0uOvR5NXqi1WeqCT8Axnwendz2LePkSzA7x_wZw8/edit#slide=id.g15a3ac8302_0_69)_Abstract:_ The SKS/KeyGen2 project is about establishing an security architecture, provisioning and management scheme for cryptographic keys targeting a wide variety of applications including on-line banking, payments, e-government access, and enterprise login.  A TEE (possibly aided by a local security processor) is a core component of the envisioned architecture. In order to enable easy enrollment, a browser-based provisioning protocol is another core component.

Since a cryptographic key (unlike a file), usually represents a relationship to a remote party which also typically imply a policy for "their" keys, the system supports key ACLs which through an OS/TEE layer governs which applications a key may be used with.  

A consequence of this arrangement is that cryptographic keys become first-class OS objects like files. The protocol and basic key store is already running as an application which is used for testing and evaluation.  What's missing is the OS/TEE/Browser integration, something which requires a set of rather different competences.


**Wednesday:
**_Time:  11:30-11:55am __
_**_Title: _**BUD17-313: BoF - Device Tree and Secure Firmware**
**
**_Abstract:_ Device Tree is well established in the Linux kernel. But since there could be other bootloader(s) and firmware components involved that needs to configure the hardware and thereby also needs to update the Device Tree blobs before passing it to Linux kernel. Therefore we are looking for a well established way for firmware to also make use and modify the Device Tree blobs before handing them over to Linux kernel. With this BoF session we would like to get started a gather ideas etc.



**Thursday:
**_Time:  12:00-12:55pm __
_**_Title: _**BUD17-416/420: Benchmark and profiling in OP-TEE**
**
**_Abstract:_ Benchmarking in OP-TEE has for long been a missing feature. With the newly added support for benchmarking the user of OP-TEE has the ability to make measurements (CPU cycles) in all architectural layers, like normal world (kernel, user space) and on the secure side in the TEE core itself. By having the ability to do this you can learn how much time it will take when switching between the different architectural layers. 

For Trusted Applications we’ve also worked with adding gprof support.  In this session we will cover what’s been done, what’s left to do and the current limitations.


**Friday:
**_Time:  11:00-11:25am __
_**_Title: _**BUD17-510: Power management in Linux together with secure firmware**
**
**_Abstract:_ On a device it’s not uncommon to share power domains between secure and non-secure side, for example between a TEE and Linux kernel. With that comes some challenges that needs to be taken care of and that is the theme for this presentation.

Finally at the traditional Linaro Connect Demo­ Friday, Linaro Security Group together with LITE will be highlighting the following demo:  [Mcuboot](https://github.com/runtimeco/mcuboot), the bootloader project used by both Zephyr and Mynewt will be demoed.

Those attending Linaro Connect are welcome to come to any and all of the sessions on Security. To see the entire schedule of sessions taking place during the week please [click here](https://eu.eventscloud.com/ehome/bud17/200391688/). 

If you are not able to attend you can visit the Linaro Connect resources page after the event to view recorded sessions and get access to select materials - [http://connect.linaro.org/resources/](/resources/). 

To learn more about the Linaro Security team:  [https://www.linaro.org/core/security/](https://www.linaro.org/core/security/)