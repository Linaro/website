---
author: linaro
date: 2017-04-28 15:26:08+00:00
layout: post
link: /blog/edgex-foundry-integration-linaros-zephyr-based-iot-demonstration-system/
slug: edgex-foundry-integration-linaros-zephyr-based-iot-demonstration-system
title: EdgeX Foundry Integration with Linaro’s Zephyr-based IoT demonstration system
wordpress_id: 12361
categories:
- blog
---

{% include image.html name="hannover-messe-logo.jpg" alt="Hannover Messe Logo" class="medium-inline"%}

"The creation of a standard, secure, open, and architecture- and vendor-neutral gateway framework is a critical component of IoT based solutions. Hosted by The Linux Foundation, EdgeX Foundry's impressive industry support and open governance model allows open collaboration on a common gateway architecture by industry leaders," said Matt Locke, Director of the Linaro IoT and Embedded (LITE) Group. "This much needed unifying project will allow vendors to define and build a common gateway platform; a platform upon which they can build unique and compelling solutions across a wide range of market segments. We look forward to welcoming new members into LITE to work closely on the engineering needed to accelerate adoption of EdgeX Foundry. Supporting this new project complements and builds on LITE's engineering and technical support of The Linux Foundation's Zephyr project, which is aimed at enabling embedded and IoT devices."

{% include image.html name="hawkbit-hannover-messe.png" alt="Hawkbit Hannover Messe" %}

**The challenge**: Integrate our end-to-end IoT device management platform running on 96Boards hardware and an all open source,and mostly upstream, software stack including key projects such as Hawkbit, Zephyr, Docker and the Linux Kernel with the new EdgeX Foundry?  It was a no brainer.  Do it in 2 days?  Hmmm, sure?



When we heard about the timing of the EdgeX platform, we knew we wanted to find an integration path that could leverage our standards based designs and get both of our platforms integrated showing the flexibility at Hannover Messe.  With limited time and resources, we knew we would need to ramp up quickly to get the systems integrated, and we knew that it would be a good measure of the readiness of EdgeX Foundry if we could integrate our solutions quickly without needing to write new code all the way across the software stack.  If we could do this on such a short timeline, we felt it would fully demonstrate the flexibility of our platforms.

The goal of EdgeX is to "Build a flexible, platform-independent, highly-scalable and industrial-grade open source edge software platform supported by a rich ecosystem of components that can quickly and easily deliver interoperability between things, applications and services, across a wide range of use cases.'.  It is "like Cloud Foundry for the IoT Edge."

In an earlier demonstration of the Linaro end-to-end IoT demo at Linaro Connect Budapest in March[1], we connected 96Board Nitrogens, running Zephyr, to a 96Board Hikey-based IoT gateway, supported by the open source Hawkbit device management platform while sending data to IBM’s Bluemix IoT platform.  In the EdgeX Demo for Hannover Messe, thermal data from the Nitrogens is being sent through the Hikey to the EdgeX Platform via MQTT.  With EdgeX Foundry and the Linaro end-to-end IoT demo systems both being standards-based and leveraging containerized microservices, it was fairly straightforward to integrate the two systems and produce the Messe demo. In the end, no engineers were harmed in the making of the demo and most of the integration was achieved by simply creating a new MQTT service to route the data.  Based on our short experience with the EdgeX project, we are excited to see it evolve as a community project.


{% include media.html media_url="https://youtu.be/8prRg5vkSHY" %}


[1] BUD -17 Keynote Demonstration, Demo overview ~ 44 minutes, [http://connect.linaro.org/resource/bud17/bud17-100k1/](http://connect.linaro.org/resource/bud17/bud17-100k1/)

* * *

{% include media.html media_url="https://youtu.be/BUikAFy21ZI" %}

* * *

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/k5hZdXOOQFjYSi" %}

* * *


_A small team within Linaro, the goal for Linaro Technologies is to accelerate the delivery of product-quality open source software, including Linaro output, into the ARM ecosystem. Currently, the Linaro Technologies team is responsible for the 96Boards program and also has assisted Linaro OCE with software builds and releases. Working with Zephyr, the team has built an IoT demonstration project that showcases an end-to-end IoT device to cloud system built on open source and running on ARM. We also participate with others in the community driving KernelCI, the open source community project that provides Linux kernel build/boot testing @_ [_http://kernelci.org_](http://kernelci.org).

The End-to-end IoT Demonstration system.

  * 9 96Boards Nitrogens running as Zephyr-based thermal sensors
  * 1 HiKey BLE/6LoWPAN gateway
  * 1 Dell 5100 Industrial IoT gateway running EdgeX Foundry integrating the Zephry MQTT datastream with EdgeX


