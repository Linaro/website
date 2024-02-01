---
layout: post
title: HTTP now supported in U-boot
description: In this blog, Paul Liu talks about how HTTP is now supported in
  U-boot and how you can enable this feature. Read more here!
date: 2023-01-24 01:39:16 +00:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - U-Boot
category: blog
author: paul_liu
---
## I﻿ntroduction

Previously to the work discussed in this blog post, U-boot only supported the User datagram protocol (UDP). That limitation meant that downloading images or files from the network could only use protocols that were based on UDP, for example Trivial File Transfer Protocol (TFTP) and Network File System (NFS). After 20 rounds of reviews we have now landed HTTP and TCP support in the U-boot mainline! This means that we can transfer files from an HTTP server. This feature simplifies the development of the embedded systems because HTTP servers are more popular than other servers. Currently it only supports downloading files from an HTTP server on port 80, and there is no support yet for HTTPS.

{% include image.html path="/assets/images/content/commits-http-now-supported-in-uboot.png" alt="Commits-HTTP now supported" %}

## Turning on this feature

To enable TCP and HTTP in U-boot, please enable the following config:

* CONFIG_PROT_TCP=y
* CONFIG_PROT_TCP_SACK=y
* CONFIG_CMD_WGET=y

The first config turns on the TCP stack. The third config enables a simple command wget that can download files from an HTTP server. The second config turns on a TCP option called Selective Acknowledgment (SACK). By default you should turn on all of the three config options. With SACK turned on, we can obtain the maximum performance of the TCP protocol. Nowadays almost all the HTTP servers support SACK by running on the Linux kernel. Even if the server doesn’t support SACK, it is still ok to turn this feature on because there is program logic to detect if the server supports SACK or not.

## Run wget to download files from HTTP server

Please set up a HTTP server first. For example, I install apache2 by “sudo apt install apache2” and then run “sudo a2enmod userdir” to be able to put files in the user directory. Then we put a file to \~/public_html. For example, I put vmlinuz in \~/public_html.

In the U-boot shell, first, we connect the board to the network.

* setenv autoload 0;dhcp

And then we can use wget command to download the files. There are two synopsis for the wget command. First, like all the other network commands, we set the serverip variable then run the command.

* setenv serverip 192.168.0.1
* wget $loadaddr /~paulliu/vmlinuz

Or we can directly get the file by

* wget $loadaddr 192.168.0.1:/~paulliu/vmlinuz

{% include image.html path="/assets/images/content/running-wget.png" alt="Running wget" %}

## Conclusion

All of the work done is part of the [Arm SystemReady](https://www.arm.com/architecture/system-architectures/systemready-certification-program) project, however  HTTP and TCP support in U-boot is just the start! We still need to implement HTTPS and then integrate it with UEFI HTTP boot. This will then allow U-boot to have a standardised way to download boot images from a web server.

Linaro Developer Services help companies leverage open source on Arm to ensure fast time to market, exceptional quality and security, and cost effective long term maintenance. For more information on the services we provide around testing and long term support, go to <https://www.linaro.org/services/testing-and-long-term-support/>.