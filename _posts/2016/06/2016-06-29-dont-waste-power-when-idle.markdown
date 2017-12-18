---
author: ulf.hansson
categories:
- blog
date: 2016-06-29 17:17:39
description: How the CoreSight framework found in the Linux kernel has been integrated
  with the standard Perf core, both at the kernel and user space level.
excerpt: 'Learn how to prevent wasting power when CPUs become idle, and about idle
  management of platforms. '
keywords: Power Management
layout: post
link: /blog/core-dump/dont-waste-power-when-idle/
slug: dont-waste-power-when-idle
tags:
- Core Dump
- idle
- kernel
- Linux
- Linux on ARM
- power
- power management
title: Don't waste power when idle
wordpress_id: 10854
---

## **Don’t waste power when idle**


There are different views of what “idle” means. One may think about CPUs and how to prevent wasting power when CPUs become idle, but in fact, idle management of platforms reaches far beyond that.

On many platforms there is a huge amount of other resources besides the CPUs, which also are able to enter low power states. Often these resources could be idle even when the CPUs are not.

In this article I have chosen to focus on platform resources in general and describe some of the available generic methods of deploying idle management for them. With the goal to prevent wasting power of course.

**Runtime PM vs system PM**

The system PM framework enables platforms to enter a system wide low power state, which prevents power being wasted when the entire platform is idle. This happens for example when the lid is closed on a laptop computer or when the screen is turned off on an Android phone. Generally, under these circumstances, quite a long wake-up latency for the platform is accepted by the user, which allows the platform to select a deep low power state to consume as little power as possible.

However, in many scenarios it is not an option to enter a system wide low power state, as some parts of the platform are being used. By deploying the so called runtime PM support, the idle devices of the platform can enter lower power states independently of the other non-idle devices of the system, further preventing the platform from wasting power.

As system PM and runtime PM deals with different scenarios for idle management, deploying both is important to prevent wasting power for a platform.

Historically, system PM and runtime PM have been treated as two orthogonal PM frameworks, which has led to issues and unoptimized behaviors when combining them. Improvements have been made on this field and the more important ones are described below.




  * The Kconfig option CONFIG_PM_RUNTIME has been merged into the CONFIG_PM option. The important consequence of this change is that system PM support cannot be used without runtime PM support. In general, this enables simpler code, especially when optimizing behaviors in subsystem/drivers.


  * The introduction of the pm_runtime_force_suspend|resume() helper functions. These helpers takes care of common issues for subsystems/drivers when dealing with runtime PM during the system PM sequence.


**Deploy system PM via the runtime PM centric approach!**

It’s quite common that the operations carried out to put a device into low power state, which are performed during system PM suspend and runtime PM suspend, are very similar - sometimes even the same. Vice versa applies when powering on a device.

In these cases, a subsystem/driver can easily deploy system PM support by using the so called _runtime PM centric_ approach. Simply add runtime PM support and then assign a pair of the system PM callbacks to the pm_runtime_force_suspend|resume() helper functions - that’s it!

Below is the typical code needed for driver/subsystem to deploy system PM via the runtime PM centric approach:

```c
static const struct dev_pm_ops mydrv_dev_pm_ops = {
           SET_SYSTEM_SLEEP_PM_OPS(pm_runtime_force_suspend,
                                                 pm_runtime_force_resume)
           SET_RUNTIME_PM_OPS(mydrv runtime_suspend,
                                             mydrv_runtime_resume,
                                            NULL)
};

```

**As mentioned earlier, the pm_runtime_force_suspend|resume() helper functions take care of some common issues due to combining runtime PM and system PM, but they also re-use the runtime PM callbacks to power on/off a device, hence why this is called the _runtime PM centric_ approach.**

For devices where system PM and runtime PM slightly differs, perhaps because of different wake-up settings or a demand to suspend a request queue only in the system PM case, the subsystem/driver can still benefit from using the pm_runtime_force_suspend|resume() helper functions.

Instead of assigning the system PM callbacks to the helper functions, the subsystem/driver may assign its own implemented system PM callbacks to deal with the additional system PM operations. From within these callbacks it invokes the corresponding pm_runtime_force_suspend|resume() function to put its device into low power state.

To get some more examples of how the pm_runtime_force_suspend|resume() helpers are being used, run the following git command from within your local Linux kernel git tree, “git grep pm_runtime_force_”.

**PM domains**

It’s quite common that parts of a platform can be powered on/off separately from other parts. If each part would consist of only a single device, runtime PM and system PM of devices would be sufficient to deal with idle management. Although, there exists more complex topologies than this.

To not waste power on these platforms, we need to be able to put parts, which may involve a collection of devices, into low power states in a controlled manner. That is one of the reasons why the concept of a PM domain has been introduced to the Linux kernel. The PM domain allows devices to be managed not only by their subsystems/drivers, but also through the optionally associated PM domain structure.

**The generic PM domain**

To solve common issues regarding how to deal with PM domains, the so called generic PM domain (aka genpd) has been invented.

Through DT, the PM domain topology of a platform can be described as well as the connection of the devices. Genpd provides the APIs to allow users to dynamically build this topology in runtime. It also allows devices to be grouped into PM domains and it supports methods to manage sub-domains and master-domains. In combination with runtime PM, system PM and the device PM QoS frameworks, genpd provides a generic solution for idle management of devices and PM domains. _The goal is to prevent platforms from wasting power!_

_This is an example of a PM domain topology of a SoC._

{% include image.html name="PM-domain-topology-graphic-1.jpg" alt="PM domain topology - graphic 1" %}

To describe the topology from the picture above in DT, this is typically what needs to be encoded in the DTS.


```c

pm_domain: power-controller@12340000 {

    compatible = "foo,power-controller";

    reg = <0x12340000 0x1000>;

    #power-domain-cells = <1>;


};

pm_subdomain: power-controller@12341000 {

    compatible = "foo,power-controller";

    reg = <0x12341000 0x1000>;

    power-domains = <&pm_domain 0>;

    #power-domain-cells = <1>;


};

dev0@12350000 {

    compatible = "foo,i-leak-current";

    reg = <0x12350000 0x1000>;

    power-domains = <&pm_domain 0>;


};

dev1@12351000 {

    compatible = "foo,i-leak-current";

    reg = <0x12351000 0x1000>;

    power-domains = <&pm_domain 0>;


};

dev2@12356000 {

    compatible = "bar,i-leak-current";

    reg = <0x12356000 0x1000>;

    power-domains = <&pm_subdomain 0>;


};

dev3@12356100 {

    compatible = "bar,i-leak-current";

    reg = <0x12356100 0x1000>;

    power-domains = <&pm_subdomain 0>;


};

dev4@12356200 {

    compatible = "bar,i-leak-current";

    reg = <0x12356200 0x1000>;

    power-domains = <&pm_subdomain 0>;


};

dev5@12356300 {

    compatible = "bar,i-leak-current";

    reg = <0x12356300 0x1000>;

    power-domains = <&pm_subdomain 0>;

};
```

**Did you know this about genpd?**

_The genpd has been around in the Linux kernel for quite a while, as it was introduced in version 3.1. From version 3.18, Linaro actively started contributing to an evolution of its code and now the community is steadily growing as can be seen in the below picture._

{% include image.html name="Users-of-genpd-graphic-2.jpg" alt="Users of genpd - graphic 2" %}


Deploying support for genpd for a platform is often easy, although to take full advantage of genpd’s idle management through runtime PM, each device within the PM domain must have a corresponding subsystem/driver deploying runtime PM support. That’s because genpd monitors devices’ runtime PM status to understand when all devices within the same PM domain become idle. At that point, it tries to power off the PM domain to decrease the consumed power for the platform. On the opposite side, when a device is requested to be powered on via runtime PM, genpd makes sure to also restore power to the corresponding PM domain.

To enable platforms to execute specific operations while powering a PM domain on/off, genpd invokes the optional ->power_on|off() callbacks, if they have been assigned by the user.

Powering off a device and its PM domain prevents the platform from wasting power. However, doing this might in some cases introduce a request latency, as powering off/on a device and its PM domain, could consume a non-neglectable time. That means, when there’s a new request to handle and if the device and its PM domain needs to be powered on, the request could be affected by an initial latency.

To address scenarios where certain latency constraints must be guaranteed, genpd provides the option to use the genpd governor. The governor makes use of the per device PM QoS framework, which allows users to set so called wake-up latency constraints for devices. An attempt to power off a device or its PM domain may thus be aborted by genpd, unless the governor reports that the validation of the latency constraint is accepted.

**Ongoing work related to genpd and idle management**

_Optimize system PM suspend/resume support in genpd_

Genpd may power on idle devices during the system PM suspend sequence. If a device is already in its proper low power state, the power on operation obviously becomes unnecessary as the device needs to be put back into low power state shortly after. This behaviour wastes some power and increases the system PM suspend time.

Moreover, genpd unnecessarily powers on devices in the system PM resume sequence. Regardless of whether the device could have remained in a low power state, it becomes powered on. Even if it shortly after becomes powered off, this behaviour wastes some power and increases the system PM resume time.

To optimize this behaviour, the decision to power on a device during the system PM sequence  should be deferred to its subsystem/driver.

_A unified solution to manage idle across all kind of devices, including CPUs_

The linux kernel has two distinct ways of managing idle in runtime. The CPUIdle framework for CPUs and for other devices, runtime PM in combination with genpd. In addition, CPUIdle isn’t scaling well for multi-cluster SMP systems and heterogeneous systems like big.LITTLE.

To manage idle of CPUs for SoCs with this hierarchical structure, we are trying to extend runtime PM and genpd to also cover CPUs. Genpd already provides most of the needed building blocks to deploy this solution, but another important effect is that we get a unified solution to manage idle across all kind of devices.