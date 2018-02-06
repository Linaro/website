---
author: dave.pigott
date: 2017-04-07 15:42:15+00:00
layout: post
link: /blog/lets-talk-usb-hubs/
slug: lets-talk-usb-hubs
title: So, let’s talk USB hubs.
wordpress_id: 12308
categories:
- blog
---

Back when Linaro and LAVA Lab started, there was very little need for USB device support connected to our LAVA dispatcher servers. However, as time went on, more and more devices started coming to us with USB serial, and more latterly with USB OTG, which we would use to flash test images onto fastboot based devices, particularly [96Boards](http://www.96boards.org). Initially, since there was very little USB, we could plug directly into the server, but when the number rose to more than a handful, we had to start using hubs.

Over the years, we have tried numerous hubs - from relatively low cost to fairly expensive ones. After a period of time, they would start failing, which prevented our kernels from recognising any device plugged into them. While there did seem to be a correlation between the cost and how quickly they broke, they all would eventually stop working, and we would have to reset the hub. Sometimes we’d even have to reboot the LAVA server the hub was connected to. Add to this that the ports of these hubs weren’t delivering the full potential current, which meant devices that needed to charge off them would slowly discharge and go offline. This is not good when you are trying to maintain a 24/7 service, and crucial devices are plugged into them.

Finally there was the issue of controlling the port power. More and more over the last two years, we’ve had devices that required us, for varying reasons, to be able to virtually disconnect them by cutting power. This could be because, on 96Boards for example, the OTG port needed to be powered off when the device was booted so we could use the on board USB for ethernet; or it could be because sometimes a commercial device would lock in fastboot, and that would require a disconnect/reconnect to get it to re-register properly. Initially we built a Heath Robinson type solution that involved surgery on USB cables, relays and a Raspberry PI. It worked, but also had it’s issues.

So for many years I have vainly tried to find a hub that would..
(a) Be reliable
(b) Allow me to control the port power
(c) Supply the specified 2.1A per port, even when every port is plugged in and in use

Oh yes, and there’s a (d) I haven’t mentioned!

(d) Give me a USB hub that plugs into the network, that uses USB over IP and allows any server on the same network to grab a device so that it looks like it’s plugged in directly. I searched high and low for such a device, but could not find anything that fitted the bill.

So, you can imagine my initial reaction when, in December 2015, I was told about a Cambridge based company, [Cambrionix](http://www.cambrionix.com/), who made a “really good hub" that provides 2.1A per port, guaranteed. On 15 ports. I was skeptical. Then I heard the price. I was even more skeptical. So I contacted these guys and they shipped me a loaner for the month of January.

I got back to the office after the Western New Year and thought I’d take a look at it. I unpacked it and took a look at the power supply. It was BIG. It was rated to comfortably supply the required current. I plugged it into my laptop, and was immediately surprised to find that it registered as a serial device, with nothing else plugged into it. So, a little ser2net config later, I decided to try telnet’ing onto it. Imagine my surprise when I got a command prompt. I typed “help” and got a list of things I could do. Guess what one of them was? Switch the mode of the port between sync, power only and….(drum roll) OFF!

I swallowed. My fingers trembling with excitement (yes, I really should get out more often) I plugged the OTG port of a HiKey board into the hub, along with the USB serial. I then noticed a command that allowed me to look at the status of all the ports in real time… I typed it in. Bingo. It showed that all the ports were in “sync” mode, with a realtime display of their current draw. This was getting better by the minute.

I used the command line interface to power the OTG port off. Sure enough, it disappeared as a fastboot device.

So I started scripting. I wrote a Python script that allows me to specify which port, and which state, I want it to be in. I put the hub in our staging server, and integrated my script into the config file for a HiKey.

Wow. This was good, I could now cleanly control the power on ports. Further testing proved it really was stable.

I looked on the Cambrionix web site. OMG. They had [EtherSync](http://www.cambrionix.com/products/) - an 8 port USB hub that connected to your network, and allowed servers to…. well, see point (d) above.

I phoned Cambrionix to tell them I was impressed, and suggested we have a meeting. Luca and I, the Lab team, went there and sat with them. They lent me an EtherSync. It was like they’d given me a brick of pure gold. I held it in my hands, not wanting to believe the holy grail was really in my hands at last.

We got the EtherSync back to the office and started testing. It’s impressive. It’s running a stripped down Linux on an ARM processor. They have a Linux daemon that Steve McIntyre suggested I should integrate as a systemd service. It seemed to work beautifully. Then we started noticing something. Over time, a server with a port connected to it would freeze. I emailed their software guy. Within a week I got an email from him. They’d found a bug in the USB/IP software stack that was causing the lock up. And, *gulp*, they’d upstreamed the fix. These guys are already in the light. Not too long after, I got an email from Andrew - the software guy - that it was now in the 4.6 kernel. In the meantime I’d created a new python script for controlling it, and was testing it in isolation.

The rest, as they say, is history. We bought a stack more of the 15 port hubs, and we are gradually replacing every hub in the lab. They really are that good.
