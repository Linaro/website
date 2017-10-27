---
author: andy.doan
comments: false
date: 2015-04-01 21:33:26+00:00
layout: post
link: https://www.linaro.org/blog/ubuntu-rack-deployment-within-the-armv8-server-lab/
slug: ubuntu-rack-deployment-within-the-armv8-server-lab
title: Ubuntu Rack Deployment within the ARMv8 Server Lab
wordpress_id: 8419
categories:
- Linaro Blog
tags:
- arm
- ARMv8
- Linux on ARM
- Opensource
- ubuntu
---

[vc_row][vc_column width="1/1"][vc_column_text disable_pattern="true" align="left" margin_bottom="0"]**About
**[Part one of this series](https://www.linaro.org/blog/armv8-server-lab/) gave an overview of the ARMv8 Server Cluster. This article deals with some of the challenges we faced with our “rack 1” Ubuntu systems.

We wanted the Ubuntu rack to use Canonical technologies for handling server deployments. As a result we focused on using [MAAS](https://maas.ubuntu.com/) for bare-metal deployment and [Juju](https://juju.ubuntu.com/) for deploying [OpenStack](http://www.openstack.org/). This would allow us to loan out both bare-metal systems and virtual machines.

**Deploying MAAS
**MAAS has support for HP Moonshot which gave us “theoretical” support of the APM mustangs deployed in the lab. While deploying everything we did hit some interesting hiccups.[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/2"][mk_image src="https://www.linaro.org/wp-content/uploads/2015/03/Colo-image-11.jpg" image_width="449" image_height="515" crop="true" lightbox="false" frame_style="border_shadow" target="_self" caption_location="inside-image" align="center" margin_bottom="10"][/vc_column][vc_column width="1/2"][vc_column_text disable_pattern="true" align="left" margin_bottom="0"]**Power
**The first problem was that MAAS expects systems that can be powered on/off in some standard way (IPMI, etc). Our servers did not have such a mechanism and were controlled by the remote PDU’s provided by our ISP. To work around this we configured all our servers to use the “Digital Loggers” power type, and then overwrote its [template script](http://bazaar.launchpad.net/~maas-committers/maas/1.6/view/head:/etc/maas/templates/power/dli.template) with logic to talk to our ISP’s PDUs.**** ****

**Provision
**With power in place we started provisioning systems. MAAS essentially controls everything through powering on systems and supplying them with different PXE boot options. The first issue we hit was that our servers expected a device tree (.dtb) file and MAAS wasn’t configured  to do so. We fixed this by editing the MAAS [PXE template](http://bazaar.launchpad.net/~maas-committers/maas/1.6/view/head:/etc/maas/templates/pxe/config.install.armhf.template) to send the proper dtb.

The systems were then able to enlist. However, they would hang up during the boot sequence when we tried to kick of a net install. Early boot failures are hard to diagnose, but after some experimentation we discovered that the kernel arguments MAAS was sending to our systems was causing a buffer overflow in u-boot. The engineers at APM quickly provided us a u-boot patch.

With the u-boot patch in place, we just had to go from machine to machine to update u-boot and then we had MAAS working.[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text disable_pattern="true" align="left" margin_bottom="0"]**Permanent
**“x-gene” support in MAAS is currently only provided in [daily streams](http://maas.ubuntu.com/images/ephemeral-v2/daily/streams/v1/) that MAAS automatically pulls in. This caused two issues for us. First, while the daily image quality seemed excellent it gave us a moving target that could potentially break us. Second, because of the DTB issue we worked around, we had to copy our DTB file on top of the daily image that MAAS would download. The result was that every so often MAAS downloaded a new build, our DTB wouldn’t be in it, and we’d suddenly lose the ability to provision systems.

Yet again, the configurability built into MAAS rescued us. MAAS provides the ability configure where it grabs its “[stream](http://bazaar.launchpad.net/~maas-committers/maas/1.5/view/head:/etc/maas/bootresources.yaml)”. We mirrored the most recent stable build from Ubuntu locally and then pointed MAAS at our local server. This allows us to now control when we move to a newer build.**** ****

**Deploying OpenStack
**OpenStack can be very difficult to deploy and manage. Luckily Juju provides charms for deploying OpenStack. Even with charms some strategy is still involved with deploying. Ultimately we decided to dedicate one APM server to hosting OpenStack requirements MySQL and RabbitMQ and one APM server for all the OpenStack base services like keystone, glance, nova-cloud-controller, etc. The remainder of our OpenStack deployment would be nova-compute resources that are easily added with “juju add-unit nova-compute”

After the initial deployments of OpenStack we noticed networking issues when trying to reach instance we’d launched. After some network debugging and more help from Andrew McDermott and Michael Hudson-Doyle we discovered that somehow Juju/MAAS was setting up the nova-compute nodes with a bridged eth0. OpenStack needs its own bridged device for managing private networking, but couldn’t add it properly since eth0 was already bridged. The fix is simple, but manual: After deploying a new nova-compute node via Juju, we must edit its /etc/networks to remove the bridge created by Juju/MAAS.

**Summary
**This deployment was only possible because of 2 things: Open source software and the helpful people working on it. This was a first of its kind deployment and we had to work through odd issues. This included just about every aspect of the software stack from u-boot all the way up to Python web frameworks. Having access to the code allowed us to figure the right questions to ask and who to ask them of.

Within in Linaro Andrew McDermott and Michael Hudson-Doyle provided tons of technical guidance. Developers at Canonical including Andres Rodriguez and Dustin Kirkland were very responsive helping us figure out the best ways to get MAAS running.[/vc_column_text][/vc_column][/vc_row]
