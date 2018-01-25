---
author: linaro
categories:
- blog
date: 2012-02-23 15:49:25
description: Dave Pigott, Linaro Validation Team, writes about the LAVA-lab's new
  hardware, configuration challenges and the ultimate success of deploying of their
  own cloud.
keywords: Linaro, Linux on ARM, LAVA, Validation, Hardware, Testing, LAVA-Lab, Cloud,  ARM,
  Fast Model, System 76, Canonical, Ubuntu Server 11.10, Linaro Connect Q1.12
layout: post
link: /blog/hardware-update/dave-pigott-and-the-lava-validation-team-head-to-the-cloud/
slug: dave-pigott-and-the-lava-validation-team-head-to-the-cloud
tags:
- Hardware
- LAVA
title: 'Dave Pigott and the LAVA Validation Team Head to the Cloud '
wordpress_id: 1253
---

**_Article contributed by Dave Pigott_**

A while back, we--[the LAVA Validation team](https://wiki.linaro.org/Platform/Validation)-- realised that our one little HP Quad core server with a paltry 32GB RAM and a mere 1TB of storage, was creaking at the seams trying to do too many things at once. Not only was it serving the web pages of [validation.linaro.org](http://validation.linaro.org/) (v.l.o), but it was also hosting the database, scheduler and a myriad other functions. For example, when it's preparing for tests to be run it could end up running multiple instances of [linaro-media-create](https://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation) (l-m-c), a CPU hungry application at the best of times. In fact, just to make LAVA responsive at all, we had to choke it down so that only one instance of l-m-c at a time.

And then we started looking at FastModels, the ARM software emulation of hardware platforms.

We decided we needed to offload as much as possible from v.l.o. We looked at adding a new high power server, and then we looked at the option of adding several slightly lower spec servers and spreading the load. It was at this point that the idea of implementing our own Cloud was first mentioned. After some investigation, we realised that this was really the best answer.

{% include image.html name="2012-02-02-11.00.211.jpg" alt="New Servers for the LAVA-Lab." clas="small-inline right" %}

We ordered 5 new servers from the excellent chaps we met at [UDS-P](http://summit.ubuntu.com/uds-p/) in Orlando--[System-76](http://www.system76.com/)--and they duly arrived. I then set about deploying them into LAVA Rack 3. Here they are, just after I'd connected them and got them powered up.

_(Yes, I know there are six there. One of them is a dedicated server for the toolchain group so that they can also offload some of their work.)_

Now we came to deploying the LAVA-Cloud. After looking around we selected [OpenStack](http://openstack.org/) as being the best implementation, since it gave us [EC2](http://aws.amazon.com/ec2/) compatibility that will benefit us mightily in the future, in that the same interfaces we use to talk to LAVA-Cloud will eventually enable us to use external Cloud computing for some of the less time-critical applications of LAVA.


Once the servers were racked, as you see above, I did a fresh install of [Ubuntu Server 11.10](http://www.ubuntu.com/download/server/download) onto each of the boxes and then started the process of installing OpenStack.


I had it mostly configured before I left for our [Linaro Connect Q1.12](http://connect.linaro.org/resources/) event in San Francisco, but something wasn't quite right. I couldn't get instances to talk to the outside world.

{% include image.html name="2012-02-02-10.59.151.jpg" alt="Dave Pigott configuring the new servers in the LAVA-Lab." class="small-inline right"%}

So, off I went to Connect and in the hacking sessions, I mostly spent my time trying to get the Cloud talking to the outside world. I could see that everything was configured according to the documentation, but still I could not get an instance that I created to talk to me, or indeed anybody.

Then disaster struck. I was in San Francisco, and hunting for solutions. The people on #openstack IRC channel on [irc.freenode.net](http://freenode.net/) were incredibly helpful, but at one point I restarted networking on the main cloud node and…. the whole stack of servers came down. Couldn't ping them, couldn't see them at all. And there was nobody in the UK office because we were all in SF. What to do?

As luck would have it, I have a friend who is an IT infrastructure contractor, and he happens to live about 3 minutes walk from the Linaro offices. I arranged for a key to be left for him at reception, spoke to him about what I needed and he went in, got all the servers back up, installed a couple of bits and pieces I'd determined I needed and then I was back in, but only for about 5 minutes before it all went down again. A quick call to my friend,  who by the way had just walked in through his front door, and he turned around and came back. In that time I got some news from one of the teams on #openstack. The server documentation contained an error. It was about referring to a bridge network in the nova configuration. It was wrong. Badly wrong. "Oh no, you don't want to do that. If you do that you'll take your servers down," was the helpful advice I got. Hmph. So, my IT friend, James, came back in, got it all back up and sat at my desk and waited while I made the changes and checked that it wasn't going to crash again.

It didn't. The servers stayed up. The utilities were all saying everything was working, and yet I still couldn't connect to an instance I had created._ (A short break now occurs in this narrative as I had some documentation to finish before leaving SF, and then some time off to spend with my family, who now meet me at airports with little signs saying "Mr. Pigott?")_

Back in on Monday it was catch up. A load of audio loop-back cables and USB Flash drives to install on Origens, [Pandas](http://pandaboard.org/), [i.mx53s](http://imxcommunity.org/group/imx53quickstartboard) and [Snowballs](http://www.igloocommunity.org/) and e-mails. Finally got back to it on Tuesday. Then I spoke to [James Page](https://launchpad.net/~james-page) at [Canonical](http://www.canonical.com/) about the problems. Finally, we figured it out. The servers were configured with [KVM](http://www.linux-kvm.org/page/Main_Page) disabled in the [BIOS](http://en.wikipedia.org/wiki/BIOS). Most servers are delivered this way. I rebooted and re-configured the servers, then crossed my fingers. I created an instance, assigned it an IP address and tried to ssh onto the instance.

Guess what? It only bloody worked!

So, now we have a real cloud. Zygmunt Krynicki and [I](https://launchpad.net/~dpigott) are now starting to exercise it. Our first goal is to get the [FastModels](http://www.arm.com/products/tools/models/fast-models.php) deployed there. Then we need to offload l-m-c instances. Anyone who accesses v.l.o in the near future will start to see a massive improvement in performance, and now we can consider doing things we would have held back on before.

But actually, you know what? However cool all of that is, it's not half as cool as having our own cloud!