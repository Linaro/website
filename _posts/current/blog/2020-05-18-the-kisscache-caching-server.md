---
layout: post
title: The KissCache Caching Server
description: "In this blog, we take a look at the open-sourced KissCache, a
  simple server built on the KISS principle: Keep It Simple Stupid. Read more
  here."
date: 2020-05-18 05:56:56
image: /assets/images/content/technology-3389917_1920.jpg
tags:
  - Server
  - KissCache
category: blog
author: remi.duraffort@linaro.org
---
Linaro has recently developed and open-sourced [KissCache](https://git.lavasoftware.org/ivoire/kisscache/), a simple and stupid caching server built on the KISS principle: Keep It Simple Stupid.

Unlike classical proxies like [Squid](http://www.squid-cache.org/) that transparently intercept traffic, in order to use KissCache one must explicitly prefix the requested URL by the URL of the local KissCache instance. KissCache will download the requested resource in the background while streaming it to the client.

If many clients are requesting the same resource, KissCache will download it only once and stream the content to every client.

### **Use case**

At [](/)[Linaro](/) we use KissCache in our CI system to cache build artefacts (kernel, rootfs, ramdisk, dtb).

For instance, when [LKFT](https://lkft.linaro.org/) is validating a Linux kernel LTS release-candidate, it will submit many jobs to [LAVA](https://lavasoftware.org/) to be executed on a variety of hardware platforms. These jobs will run in parallel, using many of the same artefacts. Thanks to KissCache, our CI system will download each resource only once, saving network bandwidth.

{% include image.html path="/assets/images/content/kisscache2.png" alt="kisscache2.png" %}

In the last month, Linaro’s KissCache deployment handled more than 160k requests, serving 32TB of data while only downloading 1TB from outside of the Linaro lab. When artefacts are hosted on a system where network bandwidth is charged per unit (such as Amazon S3), this can amount to several thousands of dollars in savings per month (as is the case in Linaro.)

### **Alternatives**

Linaro has long used Squid in the Linaro embedded device Lab, but it has struggled to meet our requirements to:

* download each resource only once when requesting the same URL in parallel
* cache https resources

Configuring any proxy to handle https resources is fairly difficult and requires working around the security features of SSL certificates. When a client requests https://example.com while using a proxy, the proxy would need to provide a valid SSL certificate for 'example.com'. This will break usual assumptions about SSL certificates as only 'example.com' should be able to generate such certificates.

In order to generate a valid certificate for 'example.com', a site admin could:

* generate a root certificate
* install it on each client
* configure the proxy to sign every requested domain with this root certificate

The client would accept this fake certificate since it is signed by a known root certificate.

While this is a working solution, if the root certificate is stolen, an attacker would be able to set up a man-in-the-middle attack on every local SSL connection.

KissCache does not need to implement such an SSL hack since the client is directly connected to the KissCache instance that can return its own SSL certificate.

### **KissCache Usage**

To quickly create a local instance of KissCache do the following:

```
git clone https://git.lavasoftware.org/ivoire/KissCache cd KissCache
docker-compose build
docker-compose up
```

The instance will be available at http://localhost:8001.

You can now use this KissCache instance by prefixing the URL:

```
curl
"http://localhost:8001/api/v1/fetch/?url=https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.4.40.tar.xz"
```

KissCache workers will download the resource and stream it back to you.

## **Configuration**

### **TTL**

By default, KissCache will keep each URL for 10 days. The admin may update the default value while users can specify the duration in the request URL.

```
curl
"http://localhost:8001/api/v1/fetch/?ttl=1d&url=https://lkft.linaro.org"
```

Every hour, KissCache will automatically delete resources that are outdated.

### **Quota**

By default, KissCache will use 2 GB of disk space. When the quota is full, KissCache will return a 507 (Insufficient Storage) error for every new request.

If the quota usage is above 75%, KissCache will drop enough resources to lower the quota usage below 75%. KissCache will drop the least recently used resources first.

### **Access Restriction**

KissCache access can be restricted to a given network. Only IPs from a specific subnet would be able to fetch resources while the web interface will remain visible to anyone.

### **Contact**

KissCache is licenced under the MIT licence.

The source code is available on [GitLab](https://git.lavasoftware.org/ivoire/kisscache). Feel free to create an issue or to send a merge request.