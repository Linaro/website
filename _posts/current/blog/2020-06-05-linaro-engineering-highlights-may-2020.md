---
layout: post
title: "Linaro Engineering Highlights: May 2020"
description: "Welcome to the May 2020 edition of the Linaro Engineering
  Highlights where you can find out all about the latest news and developments
  that Linaro has been working on during May. "
date: 2020-06-05 11:58:17
image: /assets/images/content/open_source_keyboard_under_2mbjpg.jpg
tags:
  - Linaro
  - Engineering
  - Highlights
  - KissCache
  - Tuxpub
  - Ledge
  - Raspberry Pi
  - Firmware
  - AI
  - Projects
category: Blog
author: jon.burcham@linaro.org
---
```

```

### **Linaro AI Project: uTVM**

By Tom Gall, Director, AI/ML Project Lead

{% include image.html path="/assets/images/content/ai.png" class="small-inline left" alt="AI icon" %}

TVM is an AI compiler for inferencing which can create highly optimized binaries for deploying on ARM systems. Micro TVM or uTVM is an effort to leverage the advanced technology in the compiler infrastructure as applied to microcontroller devices.

From the Members meeting in January you might remember the exercise to determine what activities would bring value to Linaro members involving AI on microcontrollers. The recommendation delivered to the LITE-SC was to approve a uTVM project as part of the AI efforts within Linaro. The LITE-SC vote is in progress as this is being written.

If any individual member would like a briefing we are happy to do so.

A product level specification, internal to Members and Linaro only, has been created which documents the various modifications / goals that need to be completed in order to evolve uTVM from its current PoC/Alpha state to a mature piece of software which can be utilized within Member products. The creation of this document is a group effort by those engaged in the project. The document will serve as our roadmap to success

Engineering related to the project has already begun:

[Arm Ethos-N integration RFC](https://discuss.tvm.ai/t/rfc-ethosn-arm-ethos-n-integration/6680) 

[First microTVM testcase (Merged)](https://github.com/tom-gall/incubator-tvm/commit/30e3ce99a7dc7aef9c388e0ebc05018b4c4ba721)

The project is open to club/core Members to join.  If a Member is not a club or core Member or part of the LITE-SC, they may also join by either joining LITE or by becoming a project member.

Email tom.gall@linaro.org for details or questions.

### **Firmware Framework for Arm (FFA) Specification \[[1.0 EAC release]](https://developer.arm.com/docs/den0077/a)**

By Mike Holmes, Director, Foundational Technologies

{% include image.html path="/assets/images/content/core-eng.jpg" class="small-inline left" alt="Core Engineering icon" %}

Arm and Linaro have been collaborating on prototypes with changes in the OP-TEE kernel driver, OP-TEE OS and Trusted Firmware based on the different versions of the FFA (formerly SPCI) specification. Having the OP-TEE regression suite xtest pass has improved confidence in the different versions of the specifications. Later versions of the prototypes have also included a secure world (S-EL2) hypervisor based on Hafnium. Linaro created the first prototype and after that it has been a shared effort.

### **KissCache: A New Caching Server**

By Ryan Arnold, Director, System Technologies

{% include image.html path="/assets/images/content/lkft.png" class="small-inline left" alt="LKFT icon" %}

[KissCache, the "simple and stupid caching serve](https://www.linaro.org/blog/the-kisscache-caching-server/)r", is a newly released open source project from Linaro that is now used in production by the Linux Kernel Functional Test (LKFT) project. KissCache is used to cache and serve binary artifacts to Linaro’s LKFT LAVA instance. These artifacts are held in Amazon S3. Using Kisscache both saves Linaro money by caching artifacts in the Linaro lab (reducing bandwidth usages from S3) as well as increases job execution time because artifacts are served much more quickly, and therefore systems are provisioned more quickly.

Unlike classical proxies like Squid that transparently intercept traffic, in order to use KissCache one must explicitly prefix the requested URL by the URL of the local KissCache instance. KissCache will download the requested resource in the background while streaming it to the client. Kisscache’s primary use case is for downloading and caching https (secure) content. It preserves the chain of trust, whereas Squid really only works properly with non-secure content.

If many clients are requesting the same resource, KissCache will download it only once and stream the content to every client. In the last month, Linaro’s KissCache deployment handled more than 160k requests, serving 32TB of data while only downloading 1TB from outside of the Linaro lab. This has a real cost savings of over $2000 per month.

### **Tuxpub - The Serverless Cloud-Based Artifact Server**

By Ryan Arnold, Director, System Technologies

{% include image.html path="/assets/images/content/lkft.png" class="small-inline left" alt="LKFT icon" %}

At Linaro, we have often hosted artifacts from Amazon S3 using a custom tool known as Linaro License Protection (LLP). LLP started life serving files from local disk storage, then later moved to use Amazon S3. Technically LLP provides an S3 browsing interface. However it was never designed to run under a serverless architecture. This coupled with other necessary Linaro/License features (such as authentication) means that LLP doesn’t fit a “simple serverless” model.

Linaro is presently working on a SaaS offering called [TuxBuild](https://gitlab.com/Linaro/tuxbuild) (and companion service called TuxBoot). These technologies are implemented using the new serverless model and have a need to provide artifacts from cloud storage using a lightweight application that provides a file browser as a web-based user front end.

The original implementation of Tuxpub used Javascript, but we quickly realised it wasn’t scalable, it wasn’t conformant with what web tools expect, and it lacked features which our users were demanding (such as the ability to pull the file contents in JSON) for browsing programmatically. After searching for existing solutions we discovered that there were no available light-weight tools to solve our problems!

We built a wishlist of the following features and requirements that we felt a proper file server would honour and set about building tuxpub:

* Serverless methodology for easy deployment and management
* Ability to block the index page so people cannot browse other folders
* Allow users to access a JSON output of the page for easy downloading

The following is a sample file browser front-end being served by tuxpub for the TuxBuild project:

 {% include image.html path="/assets/images/content/tuxpub_lrg.png" alt="sample file" %}

###### **How easy is it to deploy and manage?**

Linaro can deploy our tuxpub instances with two lines of code and a config file! This procedure is documented in the TuxPub [readme](https://gitlab.com/Linaro/tuxpub#run-with-zappa). To bring up a TuxPub instance a developer only needs to create an application shim with the following zappa code:

```
    "dev": {
        "app_function": "zappa_init.app",
        "aws_region": "us-east-1",
        "project_name": "lkft-tuxpub",
        "runtime": "python3.7",
        "s3_bucket": "zappa-tuxpub",
        "environment_variables": {
          "S3_BUCKET": "storage.dev.lkft.org",
          "S3_REGION": "us-east-1",
          "ROOT_INDEX_LISTING": "True",
        }
  }
```

With these files a developer needs to build up a [pipenv](https://realpython.com/pipenv-guide/) file with *“pipenv install --deploy”*, and then deploy it into AWS Lambda with *“zappa deploy dev”*.

One can even run the application locally with *“S3_BUCKET=storage.dev.lkft.org S3_REGION=us-east-1 ROOT_INDEX_LISTING=True FLASK_APP=tuxpub flask run”*.

###### What are the limitations?

Since tuxpub uses the AWS API, there are limitations set by the cloud provider. An index page with more than 1000 objects hits an API limit and generates a nasty error page. Because of this, we intend to implement ‘paging’ support. Tuxpub does not presently support user authentication and has no immediate plans to add it.

###### Can others use and contribute to tuxpub?

Linaro has made tuxpub available as open source software under the [MIT license](https://gitlab.com/Linaro/tuxpub/-/blob/master/LICENSE). This means that it’s free to deploy and modify. We’re very welcoming of pull requests! You can find the code [here](https://gitlab.com/Linaro/tuxpub).

###### What is the future of tuxpub?

Linaro’s objective is to keep this application simple! We are being selective and do not want to add too many features that would bloat the application. Desirable features additions (most notably paging support) are being collected in [tuxpub gitlab issues](https://gitlab.com/Linaro/tuxpub/-/issues) and addressed over time.

### **RDK and i.MX8**

By Tom Gall, Director, Linaro Consumer Group

{% include image.html path="/assets/images/content/multimedia-2x.png" class="small-inline left" alt="Multimedia icon" %} 

The RDK 3.0 port to iMX8M reached a new milestone where <https://rdkcentral.com/> now contains detailed information on how to [build](https://wiki.rdkcentral.com/display/RDK/Build+Procedure+for+64bit+RDK+Media+Client+using+Thud+Yocto+2.6) and also [run](https://wiki.rdkcentral.com/display/RDK/Run+RDK+3.0+Features+on+i.MX8MQ) the RDK 3.0 on MCIMX8M-EVK NXP board. In addition, work has already progressed rapidly on the migration to Yocto Dunfell LTS release which is documented [here](https://wiki.rdkcentral.com/display/RDK/Yocto+3.1+LTS+build+procedure+for+RDK-V+on+i.MX8MQ). The i.MX8M SoC has become the Linaro reference SoC for secure video path developments for the major ecosystems  Linaro is involved with for secure video (RDK, Linux  & AOSP) where a fully secure video pipeline is required.

Features showcased in the i.MX8M RDK port include the App Manager <https://www.sparkui.org/> framework. This is a cross platform application engine that allows STB applications to be written in JavaScript but access the native rendering functionality of the underlying platform. The other main showcased feature is the Thunder application framework (aka, WPEFramework) and the integration of DRM technologies from Linaro into the wpewebkit browser to facilitate the playback of protected content. Linaro has upstreamed many patches to [meta-wpe](https://github.com/WebPlatformForEmbedded/meta-wpe), [Thunder](https://github.com/rdkcentral/Thunder), [ThunderNanoServices](https://github.com/rdkcentral/ThunderNanoServices), [WPEWebKit](https://github.com/WebPlatformForEmbedded/WPEWebKit) and the ocdm-* plugins as part of this project. It has been an example of the productive collaboration that can happen inside Linaro between Comcast, NXP and Linaro engineers. 

### **Raspberry Pi Libcamera Initiative**

By Tom Gall, Director, Linaro Consumer Group

{% include image.html path="/assets/images/content/pi-lib-camera.png" class="small-inline left" alt="Raspberry Pi Libcamera icon" %}

The [libcamera](http://libcamera.org/) project reached a big new milestone with the joint announcement from RPi foundation and libcamera projects on the first fully open source camera stack including 3A (auto exposure, auto gain control, auto white balance) algorithms. This is the first SoC in libcamera to become fully enabled in terms of 3A, and as far as we are aware the first time 3A algorithms have been fully open sourced in any meaningful way.  More about the announcement can be found [here](https://www.raspberrypi.org/blog/an-open-source-camera-stack-for-raspberry-pi-using-libcamera/.). 

### **LEDGE Reference Platform Stage 3 available**

By Francois Ozog, Director, Linaro Edge and Fog Computing

{% include image.html path="/assets/images/content/ledge.jpg" class="small-inline left" alt="Ledge icon" %}

The LEDGE  Reference Platform builds on the Generic Kernel Image concept pioneered by Google for Android. The ultimate goal is that Linaro members and Linux distribution providers (commercial or not) can deliver a single binary image that can be booted on any Embedded Base Boot Requirement (EBBR) compliant platform. The LEDGE Reference Platform builds on the efforts of the Dependable Boot project which focuses on building an EBBR  compliant firmware environment.

In more technical terms, LEDGE Reference Platform is a lightweight highly secure and robust container runtime environment that has dependable boot and update capabilities. It comes with a full set of security policies with SELinux, Integrity Measurement Architecture enabled and other technologies that can be further adapted to specific markets. 

There are actually three images built: 64 bits, 32 bits, 32 bits with LPAE enabled. With Stage 3, the LEDGE Reference Platform can be booted with UEFI SecureBoot (U-Boot or EDK2) and it was verified that: 

* A single 64 bits image can be booted on QEMU, NXP LS21060ARDB, Socionext Synquacer( and expect to achieve this with kernel 5.8 on TI AM65XX)
* A single 32 bits image can be booted on TI AM572x and BEAGLEBOARD-X15,  ST STM32MP157C-DK2 and QEMU

Reference Platform stage 4 has started. It will come with an integrated standard and generalized firmware update features based on UEFI update capsules. We shall build on system-d defined boot-blessing capabilities to provide a robust boot orchestration scheme that will leverage hardware anti-bricking and anti-rollback features.

### **Linaro Tech Days Sessions from LITE team**

By Vicky Janicki, Linaro IoT and Embedded Group

{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="Lite icon" %}

The Linaro Embedded and IoT Team ran a 3 session series in April and May under the Linaro Tech Days Banner. Vincent Wan (TI) reviewed “[Power Management On Zephyr](https://connect.linaro.org/resources/ltd20/ltd20-402/)” to start. For the second session, Paul Sokolovskyy (Linaro) presented “[Update on LAVA Testing for Bare Metal Systems](https://connect.linaro.org/resources/ltd20/ltd20-403/)” which charted LITE’s effort to enhance LAVA to work more effectively with MCU’s. Manivannan Sadhasivam, a kernel engineer from Linaro Developer Services presented  “[LoRa Meets Zephyr](https://connect.linaro.org/resources/ltd20/ltd20-404/)” which included a brief history of LoRa, what is currently working and what remains. All three sessions can be found on the [Linaro Tech Days Resource Page](https://connect.linaro.org/linaro-tech-days/).

### Trusted-Firmware-M Integration with Zephyr 2.3

By Kevin Townsend, Senior Engineer, Linaro IoT and Embedded Group

{% include image.html path="/assets/images/content/lite.jpg" class="small-inline left" alt="Lite icon" %}

The upcoming 2.3 release of Zephyr now features out of the box support for Trusted-Firmware-M, including hardware emulation via QEMU, meaning you don’t require physical access to a supported development board.

Zephyr is configured to run in the non-secure processing environment, and TF-M is used in the secure processing environment, with communication between the two environments happening over  TF-M’s IPC mechanism. Both secure and non-secure images are signed, and validated by the secure BL2 bootloader at startup. Zephyr applications can make direct use of the PSA APIs for Cryptography, Initial Attestation, etc., and the IPC mechanism will be handled transparently from an application point of view. 

##### **General Requirements**

This post details some of the steps required to test TF-M integration in Zephyr using QEMU, with only minor changes required to run the samples on actual hardware.

**NOTE** : Zephyr currently supports TF-M integration with the MPS2 AN521 and Musca B1 board targets, with LPCXpresso55S69 support planned in the near future now that LPC55S69 support is available upstream in TF-M. The AN521 build target has been setup in Zephyr to optionally work with QEMU.

Zephyr 2.3 RC1 was used writing this, but 2.3 may be finalised by the time you read this. The instructions found here should remain consistent with anything from 2.3 RC1 and higher.

At present, the TF-M integration has been tested on the following platforms, and will not work on Windows out of the box:

* Ubuntu 18.04 using Zephyr SDK 0.11.3 
* macOS Mojave using QEMU 4.2.0 with gcc-arm-none-eabi-7-2018-q2-update

##### **Zephyr Setup**

Follow Zephyr’s Getting Started Guide available [here](https://docs.zephyrproject.org/latest/getting_started/index.html).

##### TF-M Setup

TF-M has a few additional requirements to enable building the secure-side firmware image. The following Python packages must be available on your system, since they are used by TF-M when signing binary images for secure bootloader verification at startup:

```
$ pip3 install --user cryptography pyasn1 pyyaml cbor>=1.0.0
```

Additionally, the **srec_cat** utility is required when merging signed application images at the end of the build process. This can be installed via the **srecord** package available on both Linux(-y) distributions and OS X via some variation of:

```
$ sudo apt-get install srecord
```

Or in the case of OS X:

```
$ brew install srecord
```

##### **QEMU Setup**

 If you are using the Zephyr SDK on Linux, QEMU 4.2.0 is already included in the SDK and no further action is required.

If you are using OS X, however, you will also need to install QEMU and make it available on your system path. QEMU 4.0.0 included support for the AN521 target, but we recommend using QEMU 4.2.0 or higher, which is the release used in the Zephyr SDK and during the TF-M/Zephyr integration work. This is generally as easy as running:

```
$ brew install qemu
```

You can test the installation and path access with the following command:

```
$ qemu-system-arm --version
QEMU emulator version 4.2.0
Copyright (c) 2003-2019 Fabrice Bellard and the QEMU Project developers
```
Building a TF-M application
 
At this point we can build a test application in Zephyr via the following command sequence:
