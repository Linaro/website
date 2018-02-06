---
author: zoran.markovic
categories:
- blog
date: 2013-08-26 13:33:07
description: "This article discusses the issues of suspend blockers originally implemented
  in the Android kernel and similar functionality merged upstream in the Linux kernel,
  termed \xE2\x80\x9Cwake locks\xE2\x80\x9D and \xE2\x80\x9Cwakeup sources\xE2\x80\x9D,
  respectively. The author points out the analogy between the two implementations
  and, in conclusion, proposes an approach for converting older code from using wake
  locks to use wakeup sources."
keywords: Linaro, Android, Linux, Opensource, Android Kernel, Linux kernel, wake locks,
  wakeup sources
layout: post
link: /blog/android-blog/converting-code-implementing-suspend-blockers/
slug: converting-code-implementing-suspend-blockers
tags:
- Android
- android
- android kernel
- Linaro
- Linux
- linux kernel
title: Converting Code Implementing Suspend Blockers
wordpress_id: 2883
---

## Abstract

This article discusses the issues of suspend blockers originally implemented in the Android kernel and similar functionality merged upstream in the Linux kernel, termed “wake locks” and “wakeup sources”, respectively. The author points out the analogy between the two implementations and, in conclusion, proposes an approach for converting older code from using wake locks to use wakeup sources.

## Background

In the past, the Android and Linux development communities had different (and sometimes opposing) viewpoints on power management. The fact that Linux community worked most of the time with devices that were connected to a power source while the Android community worked with battery-powered devices resulted in two strategies in the field of power management:

* Non-aggressive suspend strategy, where a hardware block can be put into low-power mode or completely powered off if it is not used, and

* Aggressive suspend strategy, where a hardware block should be powered on only when needed.

These different viewpoints were best summarized in the white paper by Rafael J. Wysocki [“Technical Background of the Android Suspend Blockers Controversy”](http://lwn.net/images/pdf/suspend_blockers.pdf).

Most of the issues between communities have now been laid to rest with the Linux community adopting functionality similar to what was used on Android devices, making it possible to support both strategies in the upstream kernel.

## Android Implementation

From the Android prospective, the system stays in suspend state most of the time and should only be awake if absolutely necessary, i.e. if there is at least one system component that remains active. This led to the introduction of wake locks in the Android kernel. Defined in simple terms, a wake lock is a binary kernel object that is acquired by a subsystem whenever it needs to keep the system awake. The kernel monitors all wake locks and executes a system suspend only when none of the wake locks are held. This behaviour is similar (or better said a “mirror image”) to a counting semaphore, where a semaphore count would correspond to the number of active wake locks: the suspend procedure would wait for the count to become zero before running. If - at any point during the suspend procedure - any of the subsystems requires the system to stay awake, it would acquire its wake lock which would immediately abort the suspend in progress. The latter mechanism is used in particular by wakeup interrupts to prevent racing with a suspend request currently in progress.

From the kernel side, wake locks were manipulated using the following kernel functions:


  * wake_lock_init() - create and initialize a wake lock

  * wake_lock_destroy() - delete a wake lock

  * wake_lock() - acquire the wake lock

  * wake_unlock() - release the wake lock
  
  * wake_lock_timeout() - acquire a wake lock and release it after timeout expires.

On Android systems, wake locks could also be manipulated from userland through the /sys/power interface using the following files:

  * /sys/power/wake_lock - writing a string to this file would create/acquire a wake lock with that name
  
  * /sys/power/wake_unlock - writing a string to this file would release a wake lock with that name

Although disputed, this userland interface to wake locks has now been merged into upstream kernel and is available with the CONFIG_PM_WAKELOCKS configuration option.

## Linux Implementation

Linux developers admitted that it is important to have system objects signaling the system to stay awake. They argued that device drivers - rather than userland - would need to have this signaling capability, so the Android approach was gradually adopted in small chunks.

First, a wakeup_source object was added to devices’ power management block (struct dev_pm_info) to avoid race conditions between wakeup and suspend events. To manipulate the device’s wakeup_source object, the following kernel functions were added:

  * device_init_wakeup() - when called with enable==1, initialize the device’s wakeup_source, when called with enable==0, disable the device’s wakeup_sorce

  * pm_stay_awake() - notify the system that a device is processing a wakeup event

  * pm_relax() - notify the system that a device is no longer processing a wakeup event
  
  * pm_wakeup_event() - notify the system that the device will be processing the wakeup event until timeout

All of these functions have an argument representing the device’s struct device object, indicating the device to which a wakeup_source and wakeup event are associated.

Next, the autosleep (a.k.a. opportunistic suspend) functionality was added to the kernel to automatically trigger a suspend whenever there are no wakeup sources held. The added functionality could be used in conjunction with driver suspend/resume hooks to implement power-saving modes for the system. Along with runtime suspend and auto-suspend features built into device drivers, this power management infrastructure was also meant to be a replacement for the much disputed early suspend/late resume functionality provided in earlier Android kernels.

In similarity with the original Android wake lock implementation, Linux developers also added kernel functions that manipulate the wakeup_source object directly:

  * wakeup_source_init() - initialize a wakeup source object
  * wakeup_source_trash() - de-initialize a wakeup source 
  * \_\_pm_stay_awake() - notify the system that a wakeup event is being processed
  * \_\_pm_relax() - notify the system that a wakeup event is no longer being processed
  * \_\_pm_wakeup_event() - notify the system that a wakeup event will be processed until timeout

Unlike their device counterparts, these functions have a pointer argument representing the associated wakeup_source object and could also be used to manipulate wakeup sources that are not associated with any device/driver.

One can easily notice the following analogy:

  * struct wake_lock <-> struct wakeup_source
  * wake_lock_init() <-> wakeup_source_init()
  * wake_lock_destroy() <-> wakeup_source_trash()
  * wake_lock() <-> \_\_pm_stay_awake()
  * wake_unlock() <-> \_\_pm_relax()
  * wake_lock_timeout() <-> \_\_pm_wakeup_event()

## Conclusion

The above analogy lends itself to a straightforward way of converting code using wake locks to use wakeup sources, in particular:

  1. Replace struct wake_lock with struct wakeup_source.
  2. Replace instances of wake_lock_init() with wakeup_source_init().
  3. Replace instances of wake_lock_destroy() with wakeup_source_trash().
  4. Replace instances of wake_lock() with \__pm_stay_awake().
  5. Replace instances of wake_unlock() with \__pm_relax().
  6. Replace instances of wake_lock_timeout() with \__pm_wakeup_event().

Android alarm-dev driver is one example of how this type of conversion was used in the upstream kernel, as seen in kernel commit [a180c0d659f604568637336a00c0c3ca2f7b094a](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/drivers/staging/android/alarm-dev.c?id=a180c0d659f604568637336a00c0c3ca2f7b094a).

In cases where a device driver is using a per-device wake lock, a better and more elegant way to convert the code is to use struct wakeup_source embedded in the device’s struct dev_pm_info field:

  1. Remove the instance of struct wake_lock associated with the device. Newly introduced functions will be using the device object (struct device)pointer argument instead of the pointer to the wake lock object.
  2. Replace instances of wake_lock_init() with device_init_wakeup() with argument enable set to 1.
  3. Replace instances of wake_lock_destroy() with device_init_wakeup() with argument enable set to 0.
  4. Replace instances of wake_lock() with pm_stay_awake().
  5. Replace instances of wake_unlock() with pm_relax().
  6. Replace instances of wake_lock_timeout() with pm_wakeup_event().
  
Android kernel still provides the wake lock interface for compatibility with older drivers. A quick look into header file include/linux/wakelock.h in Android kernel, however, reveals that this is now just a wrapper for the wakeup source interface in the upstream kernel. There is no indication of how long this compatibility layer will be maintained. To future-proof their code, driver authors are advised to migrate towards using the wakeup source interface directly.