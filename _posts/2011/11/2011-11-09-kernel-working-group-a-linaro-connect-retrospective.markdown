---
author: deepak.saxena
date: 2011-11-09 03:32:14+00:00
layout: post
link: /blog/connect-update/kernel-working-group-a-linaro-connect-retrospective/
slug: kernel-working-group-a-linaro-connect-retrospective
title: Kernel Working Group - A Linaro Connect Retrospective
wordpress_id: 830
categories:
- blog
tags:
- community
- Connect Events
- connect
- kernel
- lava
- Linux
---

Linaro's Kernel Working Group had a productive week at[ Linaro Connect Q4.11](http://connect.linaro.org/resources/) in Orlando, co-located with the[ Ubuntu Developer's Summit](http://uds.ubuntu.com/).   The primary theme of the week was Upstreaming, focusing on next steps  to get new technologies upstream, assuring the quality of upstream  kernels on ARM platforms, developing new features, and continuing the  work of consolidating code across various SOCs.

## Kernel Process and Testing

For  myself, one of the most exciting results of the conversations at  Connect, was a cross-organizational agreement to focus our distribution  build efforts on the tip of Linus' kernel tree. Instead of backporting  patches into the prior stable kernel, Linaro will be following the  kernel tip from kernel.org, and adding select changes from the Working  Groups, Landing Teams, and upstream projects. The exact details of this  new process are yet to be determined, but this will enable Linaro to  deliver bleeding edge builds of Ubuntu and Android on our member  platforms.

Related  to delivering cutting edge builds, several KWG members participated in  an very productive conversation related to testing of hardware  enablement in upstream kernels via the LAVA continuous-integration loop.  One of the issues we often see is that patches that enable a feature or  fix a bug on one platform break the same feature on a different one.  The kernel will often compile and boot, but a key piece of functionality  (USB for example) will be broken.  There are many reasons for this  including maintainer overload, lack of access to hardware for testing,  lack of resources for build testing, etc. Linaro will be working on  solving this problem by developing platform-specific tests, integrating  them into LAVA, and making them available to the general ARM-Linux  community. One of the key points of discussion was how to describe the  devices on a platform that need to be validated and our current thought  is to use the Device Tree file that is being generated for each platform  as an input to a platform-specific test generation tool. For example,  if the Device Tree file for a platform listed several devices hanging  off the I2C bus at known locations, a test would be automatically  generated to validate that those devices show up in the kernels device  list (via manually traversing sysfs or using the 'i2cdetect' tool) and  that we can perform basic read/write access to the bus. Our long-term  goal is to pull in some of the trees that are lower in the upstream  chain such as the linux-omap tree and certain device driver trees, to  catch these issues long before they make it into linux-next or Linus  Torvalds' tree. Doing this will allow us to get to get to the goal of a  consolidated [kernel.org](http://kernel.org/) tree that works across all our member SOCs.

## Next Generation Storage

Another  great area of discussion at Linaro Connect was the future of embedded  flash storage. Ms. YeJin Moon, a Senior Technical Marketing Engineer at  Samsung. Ms. Moon presented a deeply technical overview of both[ eMMC4.5](https://www.jedec.org/standards-documents/technology-focus-areas/flash-memory-ssds-ufs-emmc/e-mmc) and[ UFS](http://www.jedec.org/standards-documents/focus/flash/universal-flash-storage-ufs) specifications and this led to much discussion about how to implement  support for these in Linux. eMMC4.5 is the next generation of version of  the eMMC specification that is used for on-board soldered managed flash  device, advancing the functionality of these devices with new  software-visible features such as power management commands, cache  management, data tagging, and deferred erasure of non-sensitive data.   eMMC hardware will not be available in the market for sometime but  Samsung has agreed to provide Linaro engineers early access to samples  when they are ready so that we can start enhancing the  Linux MMC stack  to support these new features. This is a great example of a member  company collaborating with Linaro to improve the ARM-Linux ecosystem and  we are very thankful to Samsung for access to their offer.

Ms.  Moon also presented a technical overview of the new Universal Flash  Storage (UFS) specification which is a follow-on to eMMC. UFS provides  the same set of commands as eMMC but instead of a simple parallel bus  protocol, UFS is an evolution to multi-lane serial bus design similar to  PCI Express. This new protocol allows for up to 300 MB/s operation with  first generation hardware with future expansion on the road map. UFS  uses the[ SCSI Architecture Model](http://en.wikipedia.org/wiki/SCSI_architectural_model) to allow for out-of-order command execution along with other more  advanced features. UFS also defines a standard host controller interface  (HCI) which allows for a standardized driver interface in the host OS.  Linaro will be actively participating in the development of UFS support  in the Linux kernel.

## Android Upstreaming

One  of the greatest challenges those of us involved with keeping Linux  running on the latest mobile devices is keeping the Android code base in  sync with the various SOC trees that are available. An exciting piece  of news that came out of the[ Linux Kernel Summit](https://events.linuxfoundation.org/events/linux-kernel-summit) in Prague two weeks ago was that key upstream developers such as Alan  Cox, Ingo Molnar, and Linux Torvalds himself thought that it may be time  to start merging some of the Android patches, specifically the[ wake lock/suspend blocker](http://elinux.org/Android_Power_Management) functionality, into the kernel. There are many reasons for this that are touched upon in Jon Corbet's excellent[ LWN writeup ](http://lwn.net/Articles/464298/).  This discussion is no guarantee that any of the Android features will  go upstream in their current form or a commitment by upstream developers   to any time line for wake locks to be merged. However, the openness of  the upstream maintainers will hopefully re-invigorate the discussion  and patches related to Android features.

The  KWG hosted a session on upstreaming of Android features and how Linaro  can help with this. One of the interesting pieces of information that I  learned is that the majority of Android user space only requires the  logger, binder, and ashmem features. These specific features are much  more modular than the wake lock infrastructure and might be much simpler  to initially push upstream. The discussion at Connect was focused on  various details and some of the key take away points were:

  * The  current Android patches provide custom character devices as part of the   user <-> kernel interface. Arnd Bergmann suggested that these  should be replaced with more modern interfaces such as netlink, sysfs,  debugfs, etc.

  * Any  changes made to the implementation of a given piece of functionality  will require multiple steps to fully validate to the point that it can  be shipped in devices. The application level APIs cannot be modified  easily as there are over 200,000 applications that depend on these APIs  so existing Android libraries that implement the developer APIs will  have to modified to use any new kernel <-> user interface that is  developed. These libraries are well tested and proven with millions of  devices shipped, so changes would have to be well validated before they  can be accepted as a replacement in new products. One possible solution  to mitigate the risk involved is to include the code as into the kernel,  focus on creating a new interface, and then provide a time period where  both interfaces co-exist.
  
  * Some  of the functionality provided by the Android patches is not new or  unique to just Android. Logger for example, provides a method to save  system messages to a known location in memory that can be accessed by  firmware or a kexec rescue kernel when a panic occurs. This  functionality has been in place in various forms in the Carrier Grade  world and Linux includes the[ pstore filesystem](http://permalink.gmane.org/gmane.linux.kernel.commits.head/289849) that is used to provide this functionality on X86 ACPI systems with  nvram set aside for this purpose.  In theory, pstore could be modified  to use a memory backing or any other platform-specific method.


In  this next cycle, Linaro engineering will look deeper into the ashmem,  logger and lowmemory-killer interfaces to better understand what is  needed to implement something that meets both upstream and Android  requirements and will also continue to research alternatives to the  existing wake lock implementation.

## KVM on ARM

ARM's new A15 CPU core that will be used in various next generation SOCs, including those following the[ big.LITTLE](http://www.arm.com/products/processors/technologies/biglittleprocessing.php) model, will support advanced virtualization features. [ Cristoffer Dall](http://www.cs.columbia.edu/%7Ecdall/) from Columbia University has started work on[ implementing support for the A15 CPU](http://wiki.ncl.cs.columbia.edu/wiki/KVMARM:MainPage) in KVM and Linaro will be working closely with him and the QEMU  community over the next year to provide an ARM virtualization stack that  can be included by distros. There are many interesting issues that need  to be resolved that various teams across Linaro will be focusing on.  The work done by the [Boot Architecture Group](https://wiki.linaro.org/OfficeofCTO) in Linaro’s [Office of the CTO](https://wiki.linaro.org/OfficeofCTO) is key to this effort as they will be defining what the boot  environment between the host and the virtual OS and defining a base line  machine model that will be used on server environments.

## A Great Week All-together

Linaro  Connect was a great opportunity for the KWG to discuss technical items  and also get some hacking done. Some team members worked along side the  Power Management Working group to start implementation of the common  clock structure on various platforms, various pull requests were sent to  Linus for the ARM-soc tree, and some more progress was made on Device  Tree transition.  There is a lot of interesting work to be done over the  next few months and I invite developers to subscribe to the[ linaro-dev mailing list](http://lists.linaro.org/mailman/listinfo/linaro-dev) to be involved in the conversations. I also hope to see many of you at[ Linaro Connect Q1.12](http://connect.linaro.org/) in February.
