---
layout: flow
description: >-
    You will see that there are several ways to become involved and that everything we do is open, not only software but also our wiki and our discussions (on IRC and on our mailing lists).
title: Developers
permalink: /developers/
jumbotron:
    background-image: /assets/images/content/downloads-bg.jpg
    title: Get Involved
flow:
    - row: main_content_row
---
**Whether you are an individual or an employee of a organization it is easy to get involved with Linaro**

You will see that there are several ways to become involved and that everything we do is open, not only software but also our [wiki](http://wiki-archive.linaro.org/FrontPage) and our discussions (on IRC and on our mailing lists).

<ul class="nav nav-tabs" role="tablist" id="tabbed_nav">
<li role="presentation" class="active">
<a href="#individuals" role="tab" data-toggle="tab">
<svg class="mk-svg-icon small" data-name="mk-moon-user" data-cacheid="icon-59a7eb5b217bb" style=" height:16px; width: 16px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M311.413 351.368c-11.055-1.759-11.307-32.157-11.307-32.157s32.484-32.158 39.564-75.401c19.045 0 30.809-45.973 11.761-62.148.795-17.027 24.48-133.662-95.431-133.662s-96.225 116.635-95.432 133.662c-19.047 16.175-7.285 62.148 11.761 62.148 7.079 43.243 39.564 75.401 39.564 75.401s-.252 30.398-11.307 32.157c-35.61 5.666-168.586 64.317-168.586 128.632h448c0-64.315-132.976-122.966-168.587-128.632z">
</path>
</svg> For Individuals
</a>
</li>
<li role="presentation">
<a href="#organizations" role="tab" data-toggle="tab">
<svg class="mk-svg-icon small" data-name="mk-moon-library-2" data-cacheid="icon-59a7eb5b21ebf"
style=" height:16px; width: 16px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path
d="M256 0l-256 160h512l-256-160zm144 192l16 32v192h64v-192l16-32h-96zm-128 0l16 32v192h64v-192l16-32h-96zm-128 0l16 32v192h64v-192l16-32h-96zm-128 0l16 32v192h64v-192l16-32h-96zm0 256l-16 64h512l-16-64h-480zm272-352c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32z">
</path>
</svg> For Organizations
</a>
</li>
<li role="presentation">
<a href="#support" role="tab" data-toggle="tab">
<svg class="mk-svg-icon small" data-name="mk-icon-comments" data-cacheid="icon-59a7eb5b222e2"
style=" height:16px; width: 16px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
<path
d="M1408 768q0 139-94 257t-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5 2-6l2.5-5 3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5 353.5 68.5 256.5 186.5 94 257zm384 256q0 120-71 224.5t-195 176.5q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5 2 6 .5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230z">
</path>
</svg> Discussion and Support
</a>
</li>
</ul>

<div class="tab-content" id="tabbed_nav_content">
<div role="tabpanel" class="tab-pane tab-pane-legal active" id="individuals" markdown="1">

## See how Linaro operates first-hand

Join us at the next [Linaro Connect](https://connect.linaro.org/) and subscribe to relevant [Linaro mailing
lists](http://lists.linaro.org/mailman/listinfo).

**New to free and open source software (FOSS)?**

* See this [introduction](/blog/make-positive-difference-foss-project/) on getting involved and maximizing your
contributions, written by Paul McKenney, [RCU](http://www.rdrop.com/users/paulmck/RCU/ "Introduction to RCU")
Maintainer and member of Linaro’s OCTO.

**Running Linaro on your hardware**

* There are two ways to get a Linaro build on your hardware. The fastest way is to grab a milestone image and
“dd” it to your SD card. If you’d like a little more customization of things like filesystem type, then you can
follow the instructions on the [boards page](https://wiki-archive.linaro.org/Boards) of the Wiki. They explain
how to pick a hardware pack, root filesystem, and then install them using Linaro Image Tools. The developer Wiki
includes an up-to-date list of what hardware is supported by our current builds. There is also a list of [low
cost development boards](http://wiki-archive.linaro.org/Boards), with links to retailers.

## Running Linaro without hardware

You can still experiment with Linaro builds even if you don’t have physical hardware. We have a quick guide to
[using Qemu with Linaro builds](https://wiki-archive.linaro.org/Resources/HowTo/Qemu).

## Using the Linaro Toolchain

If you are interested in building software using the Linaro toolchain, you can follow the what the Linaro
Toolchain group has been doing on their wiki page to more information. [Toolchain Wiki
page](https://wiki-archive.linaro.org/WorkingGroups/ToolChain)


## Using the Linaro Kernel

* If you are interested in doing some kernel hacking take a look at: [Linaro Kernel Tree
Policy](http://wiki-archive.linaro.org/Platform/DevPlatform/LinuxLinaroKernelTreeProcess). For more on building
and deploying try [Build and Deploy a Kernel](https://wiki-archive.linaro.org/Resources/HowTo/KernelDeploy) and
[Debian Build and Packaging of a Kernel](https://wiki-archive.linaro.org/Resources/HowTo/PackageYourOwnKernel).
</div>



<div role="tabpanel" class="tab-pane tab-pane-legal" id="organizations" markdown="1">

## Chip providers

If you are working for a silicon provider who needs help upstreaming code to the Linux kernel come to [Linaro
Connect](https://connect.linaro.org/ "Linaro Connect event") to meet our team and discuss where we can help and
to discuss membership.

**System enablers and developers (software integrators, related hardware developers and OEM/ODMs)**

* Almost everything we do is open and can provide many building blocks for systems. We have begun to put
together guides for using Linaro builds as the basis for real products: currently one for
[Android](https://wiki-archive.linaro.org/LinaroForProductBuilders/Android "Linaro for Android product
builders") and one for [Ubuntu](https://wiki-archive.linaro.org/LinaroForProductBuilders/Ubuntu "Linaro for
Ubuntu products builders"). If you have questions, please visit [Linaro
Support](https://servicedesk.linaro.org/servicedesk/customer/portal/6 "Linaro support") to see if we have
already answered them or post a new question and our community of experts will respond. We hope you will
consider joining us at [Linaro Connect](https://connect.linaro.org/ "Linaro Connect event") and will see that
including Linaro as a recommendation in RFQs could accelerate your product development, improve reliability and
reduce future maintenance costs. If you want to take an active role and get your engineers contributing directly
to Linaro, please contact Joe Bates at [contact@linaro.org](mailto:contact@linaro.org).

</div>



<div role="tabpanel" class="tab-pane tab-pane-legal" id="support" markdown="1">


## Finding Support in Linaro

**We are constantly working to improve our support channels in Linaro. In addition to our wiki documentation and
website we have the following:**

[Linaro Support](https://support.linaro.org/) is the Linaro support site where developers and users can ask and
answer questions.

**Additional Linaro Community Support can be found at:**
Mailing Lists – [/contact/mailing-list/](/contact/mailing-list/)
Downloads – [/downloads/](/downloads/)

Help on filing a bug using Launchpad can be found
[here](https://wiki-archive.linaro.org/Resources/HowTo/LoggingABug).

Internet Relay Chat (IRC) is a form of realtime Internet chat. It is mainly designed for group (many-to-many)
communication in discussion forums called channels, but also allows one-to-one communication via private
message. On IRC you can talk to many of the Linaro developers, about a range of topics. The [IRC
page](http://irclogs.linaro.org/ "Linaro IRC logs") on this site shows archived conversations from the Linaro
IRC channel.

Linaro’s IRC channels are hosted on [Freenode](http://freenode.net/). Users can join **#linaro** on
[irc.freenode.net](http://freenode.net/) to chat with Linaro developers.

A complete list of Linaro IRC channels can be found [here](https://wiki-archive.linaro.org/GettingInvolved/IRC).

</div>
</div>
