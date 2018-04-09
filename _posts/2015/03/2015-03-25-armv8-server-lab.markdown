---
author: david.mandala
categories:
- blog
date: 2015-03-25 14:17:50
description: Overview of the process and challenges faced in setting up Linaro's ARMv8
  server lab in Austin, Texas
layout: post
link: /blog/armv8-server-lab/
slug: armv8-server-lab
tags:
- arm
- ARMv8
- ARMv8 server
- Linux on ARM
- server
title: "ARMv8 Server Lab\t"
wordpress_id: 8336
---

Last October was very busy for us (the Linaro System team), ­ we were tasked with the build out of the ARMv8 Server Cluster in Austin, TX.  Now this is an interesting situation, Linaro already has a LAVA (Linaro Automated Validation Architecture) lab in Cambridge UK so why would we build out a Collocation facility with ARMv8 servers?  Well it’s simple really, ARM server hardware is still pretty hard to find, and even though it is being built it is hard to get access to.  Unless you are a major ISV no one is going to just give you access, so smaller ISV’s and researchers had little to no options.  Well that was true until now.  With the Linaro ARMv8 Server Lab you can ask for and get free access to ARMv8 server hardware at no cost to you so you can recompile your X86 applications on ARM, port code if necessary, test them, tune them and be ready for when these servers ship in volume.

So if you sign up to use a system you can get access to one or more APM or AMD server running Ubuntu or Fedora or Red Hat(1) or AMD servers(2) running Fedora or Red Hat(1).  We believe other vendors will soon provide additional branded servers in the Lab.  Depending on demand and what you want to do with the servers they are loaned to you for a week to a month at a time.  For security purposes all of the servers are behind a firewall and require ssh access only via a bounce firewall machine.  Once the server is deployed and access is turned over to the ISV Linaro staff no longer have access to the contents of the server in any way except to redeploy it later which destroys all information on the machine.

{% include image.html name="Colo-image-11.jpg" alt="Colo Image"%}

In early October, we began the buildout of the ARMv8 Server Lab in Austin, Texas. We installed a small cluster of forty (40) 64­bit Applied Micro ARM servers into a co­location facility near the Austin International Airport. The cluster is composed of two racks; one rack targeted at Red Hat/Fedora OS deployed servers and one rack targeted at Ubuntu deployed servers (bare ­metal with MAAS and VM's with OpenStack). Later in November we received six AMD 64­bit ARM servers and they too have been deployed into the racks.

ISV’s and Community members may apply for access ([/leg/servercluster/](/leg/servercluster/)) to the cluster where they will be given a freshly provisioned system that is totally private to them. Linaro administrators don’t have access to deployed systems. The standard “lease” for use of the system is 1­ to 2 weeks so that an ISV can recompile their software on 64­bit ARM and validate it works the same as on a 64­bit Intel system. The lease time can be extended on a case by case basis. The systems are hidden behind an SSH proxy server and are safely isolated from one another.

In November we started a beta test to make sure we could actually deploy these systems in a safe and useful manner.  The test ran until February.  Some of the most interesting usages have been:

  * Debian using three servers for native ARM 64­bit compilation for jessie release and onward.
  * OpenStack testing
  * Ceph file system testing
  * Linaro Toolchain group using two servers to offset the time lost from the Linaro Lab move
  * Researchers testing and porting server applications
  * Application profiling with Score-P/Scalasca


At the beginning of March we completed the beta test and continue to provide systems for use to ISV’s and researchers.  We are generally running at 80% to 90% capacity and look forward to more ISV’s accessing and porting software to the ARM server platform.

In our next blog your will hear from Linaro’s Andy Doan where he will talk about the Ubuntu rack deployment and using Ubuntu’s MAAS and juju to deploy Open Stack on ARM.  Andy had a few challenges in deploying maas/openstack that he will present:

  * patching uboot
  * fix /etc/network problems with maas deployed juju nodes
  * using local mirrors rather than ubuntu mirrors of MAAS to pin things down to a known working version

* * *

_(1.) Requires executing an NDA with Red Hat and being part of their ARM early access program_
_(2.) Requires executing an NDA with AMD for access to the AMD server hardware at this time.  Only Red Hat and Fedora Linux is available on the AMD systems.._