---
layout: post
title: "Installing Fedora with UEFI HTTP boot "
description: >
  With the addition of UEFI HTTP Boot support in U-Boot on a SystemReady-IR
  platform we can install and run Fedora on the fly instead of using a local
  media.  Let’s see how we can use the feature and install a standard Fedora
  distro on the fly, instead of installing it via local media.
date: 2024-01-19 10:00:49 +07:00
image: /assets/images/content/Auto_IoT_Edge_banner_pic.jpg
tags:
  - embedded
  - U-Boot
  - SystemReady
  - UEFI
  - Bootloaders
  - UEFI_HTTP
  - Fedora
category: blog
author: Masahisa.Kojima
---
# Introduction

U-Boot natively supports PXE boot which uses UDP and TFTP as file transfer protocols. The UEFI specification describes the UEFI HTTP/HTTPs Boot.  HTTP/HTTPs boot is a technology that allows devices to boot directly from the resources provided over the network and does not require preparing the physical installation media or setting up local tftp servers.  You can find more details about UEFI HTTP Boot [here](https://www.linaro.org/blog/ledge-blogs-uefi-http-and-https-boot-in-u-boot/).

Nowadays U-Boot supports downloading files via HTTP using ‘wget’, and mounting ISO images with the ‘blkmap’ command. Let’s see how combining those two UEFI HTTP Boot can be implemented using the UEFI BootManager.

# Turning on the feature

UEFI HTTP Boot needs DNS to resolve the http server IP address, WGET to download the file from http server, and ‘blkmap’ to mount the downloaded ISO image. This is achievable in U-Boot via existing commands, but this is cumbersome and can’t be added as part of the device bootflow. With [this series](https://lore.kernel.org/u-boot/20231025062845.3100964-1-masahisa.kojima@linaro.org/) applied, UEFI HTTP Boot becomes a standard functionality of the efibootmgr. 

After applying the parches Kconfig options CONFIG_CMD_DNS, CONFIG_CMD_WGET, CONFIG_BLKMAP and CONFIG_EFI_HTTP_BOOT need to be enabled.  With these in place U-Boot can:

* Add a boot option containing a URI device path with ‘efidebug’ command 
* Obtain the dns server ip address from ‘serverip’ environment variable
* Download an .iso image via WGET and store it in the destination address. It’s worth noting that the available memory starting from ‘loadaddr’ must be big enough to store the ISO image. We will be using the Fedora Server 38 ISO image in this blog which is approximately 657MB. 
* Mount the iso image 
* Boot it up and start the installation

We are using the Socionext Developerbox in this blog. A new “efidebug boot add -u” is added by [this patch](https://lore.kernel.org/u-boot/20231025062845.3100964-7-masahisa.kojima@linaro.org/) and allows us to add the URI device path boot option.

```
dhcp
setenv loadaddr 90000000
setenv serverip 192.168.1.1
efidebug boot add -u 3 fedora-netinst http://dl.fedoraproject.org/pub/fedora/linux/releases/38/Server/aarch64/iso/Fedora-Server-netinst-aarch64-38-1.6.iso
bootmenu
```

Note: U-Boot does not currently support HTTPS and HTTP redirection, so we need to specify an HTTP server without it. Closest mirror is also available.

# Run UEFI HTTP Boot

When the menu appears on the console we can start the UEFI HTTP Boot by selecting the boot option ‘fedora-netinst’ we just added.

{% include image.html path="/assets/images/content/uboot-bootmenu.png" alt="uboot bootmenu" %}

U-Boot will automatically start the download of the Fedora ISO installer.

{% include image.html path="/assets/images/content/uboot-wget-download.png" alt="uboot wget download" %}

After the download completes, the Fedora installer is launched. 

{% include image.html path="/assets/images/content/start-fedora-installation.png" alt="Start Fedora installation" %}

\
Since the ramdisk created by U-Boot is not passed to the OS and installer loses the access to it after ExitBootServices, in order to continue the Fedora installation, an extra parameter needs to be defined during boot.  Select the “Install Fedora 38” entry, then press ‘e’ to edit the commands (it’s worth noting that the procedure is identical for EDK2).

{% include image.html path="/assets/images/content/edit-inst.stage2.png" alt="edit inst.stage2" %}

\
Add ‘inst.stage2’ kernel parameter to point to the appropriate http server. The following http server must be used:

```
inst.stage2=https://dl.fedoraproject.org/pub/fedora/linux/releases/38/Server/aarch64/os/
```

Press F10 to start the installer. Since I am using the box in headless mode (the GPU support has [known issues](https://www.96boards.org/documentation/enterprise/developerbox/support/known-issues.html)), installing via VNC is a nice option.

{% include image.html path="/assets/images/content/vnc-fedora-installation.png" alt="VNC Fedora Installation" %}

It's worth noting that since U-Boot does not support SetVariable at runtime you'll get an error while the installer is trying to update the EFI Boot#### variables. This is not fatal, you can just continue the installation and fix up the boot options later.

{% include image.html path="/assets/images/content/fedora-installation-setvariable-error.png" alt="Fedora installation SetVariable error" %}

\
After the installation completes, reboot the board and manually add the boot option in U-Boot console.

```
efidebug boot add -b 5 fedora mmc 0:1 EFI/fedora/grubaa64.efi
efidebug boot order 5
```

# Future work

UEFI HTTP Boot provides a more reliable file transfer mechanism than UDP/TFTP of PXE, we can boot the system without preparing the physical installation media and install the system simultaneously among multiple devices with the official distro download URI without a local server.

We intend to upstream the aforementioned patches and try to further automate the installation procedure eliminating the need to add the special kernel command line in GRUB.