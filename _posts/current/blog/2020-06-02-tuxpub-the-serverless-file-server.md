---
layout: post
title: tuxpub - The Serverless File Server
date: '2020-06-02 12:10:28'
image: /assets/images/content/code_highway.jpg
tags:
  - tuxpub
  - Server
  - File server
  - severless
  - Benjamin
  - Copeland
  - tux build
  - tuxboot
  - ''
category: Blog
author: jon.burcham@linaro.org
---
### **What problems has Linaro solved with tuxpub?**

At Linaro, we have previously hosted artifacts from Amazon S3 using a custom tool known as Linaro Licence Protection (LLP). LLP started life serving files from local disk storage, then later moved to Amazon S3. Technically LLP provides an S3 browsing interface, however it was never designed to run under a serverless architecture. This coupled with other necessary Linaro/License features (such as authentication) means that LLP doesn’t fit a “simple serverless” model. 

Linaro is presently working on a SaaS offering called [TuxBuild](https://gitlab.com/Linaro/tuxbuild) (and companion service called TuxBoot). These technologies are implemented using the new serverless model and have a need to provide artifacts from cloud storage using a lightweight application that provides a file browser as a web-based user front end.

The original implementation used Javascript, but we quickly realised it wasn’t scalable, it wasn’t conformant with what web tools expected, and it lacked features which our users were demanding (such as the ability to pull the file contents in JSON). After searching for existing solutions we discovered that there were no available light-weight tools to solve our problems!

We built a wishlist of the following features and requirements that we felt a proper file server would honour and set about building tuxpub:

* Serverless methodology for easy deployment and management
* Ability to block the index page so people cannot browse other folders 
* Allow users to access a JSON output of the page for easy downloading

The following is a sample file browser front-end being served by tuxpub for the TuxBuild project:

Tuxpub.png