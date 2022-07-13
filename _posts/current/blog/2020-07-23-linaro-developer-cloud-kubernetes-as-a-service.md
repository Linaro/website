---
layout: post
title: Linaro Developer Cloud Supports Kubernetes as a Service
description: Linaro Developer Cloud has supported Kubernetes as a Service, and
  we have finally passed all the conformance tests. Read more here.
date: 2020-07-24 12:55:00+00:00
image: /assets/images/content/code_highway_under_2mb.jpg
tags:
  - Linaro Developer Cloud Kubernetes
  - Linaro
  - Arm
  - Linaro Data Center Group
  - PAAS
  - OpenStack
  - Kubernetes
  - Linaro Developer Cloud
  - OpenStack Powered Cloud
related_projects:
  - CLOUD
category: blog
author: kevin.zhao@linaro.org
---
## **Linaro Data Center Group (LDCG)**

The Cloud Infrastructure team in Linaro sits inside a group known as the Linaro Data Center and Cloud Group (LDCG). The Cloud Infrastructure focuses on open-source cloud IAAS, PAAS, and storage projects such as OpenStack, Kubernetes, and Ceph. The rest of LDCG spend their time working with Arm Server Architecture, Big Data, and HPC (High-Performance Computing).

## About Linaro Developer Cloud

Linaro Developer Cloud is designed to broaden the availability of the latest hardware to developers globally and to enable commercial and private cloud providers to utilize the implementation to accelerate deployment of their own offerings.

Linaro Developer Cloud is based on OpenStack, Ceph and Kubernetes, leveraging both Debian and CentOS, as the underlying cloud OS infrastructure on top of ARM-based server platforms from Linaro members such as Huawei and Marvell, etc.

{% include image.html path="/assets/images/content/openstack.png" class="small-inline left" alt="Openstack icon" %}

Linaro Developer Cloud has been certified as OpenStack Powered Cloud (https://www.openstack.org/marketplace/public-clouds/linaro/linaro-developer-cloud) for more than three years, and we are engaged in OpenStack and Ceph upstream to make OpenStack and Ceph easy to run and deploy on Arm64 platforms.

Recently, Linaro Developer Cloud has supported Kubernetes as a Service, and we have finally passed all the conformance tests from CNCF as the “[Certified Kubernetes - Hosted](https://landscape.cncf.io/card-mode?selected=linaro-developer-cloud-kubernetes-service)”, together with a bunch of famous cloud providers, such as AWS EKS, Azure AKS, Huawei Cloud CCE and etc.

{% include image.html path="/assets/images/content/ldc-kubernetes-service.png" alt="LDC Kubernetes Service makes it easy for you to deploy, manage and scale Kubernetes clusters to run containerised applications on the Arm64 platform" %}

## Kubernetes Service in Linaro Developer Cloud

Kubernetes Service now is more and more popular by cloud providers, and it makes users flexible to have a Kubernetes cluster for their daily development and testing so that it is significant for us to support it on the open-source Arm64 platform.

The total architecture for adding Kubernetes is as below. There are changes both from the Infrastructure side - OpenStack and Kubernetes cluster side.

{% include image.html path="/assets/images/content/kubernetes-architecture.png" alt="Kubernetes Architecture" %}

We have leveraged three important OpenStack services:

**Magnum**, which is the provisioning and life cycle management service for Kubernetes. Octavia, which is offering network load balancing service for APPs that will run on the Kubernetes cluster

**Heat**, which is the orchestrated service for Magnum to configure the cert, network, security group, and provisioning the VM and storage for Kubernetes launching.

At Kubernetes’ side, the cluster also needs to utilize the volume, load balancer, and authentication support from OpenStack. Some important controllers have been integrated as below:

**K8s-keystone-auth:** This controller will provide the authorization and authentication abilities from OpenStack Keystone to the Kubernetes cluster.

**Cinder-CSI-driver:** The controller is to connect with Cinder to offer the volume support for Pod running inside the Kubernetes cluster.

**Octavia-ingress-controller:** The controller is to talk with Octavia load balancer service to expose the application to the outside world.

With those components support, users can easily launch a Kubernetes cluster with one simple API call or use the Web UI.

{% include image.html path="/assets/images/content/kubernetes-web-ui.png" alt="Kubernetes Web UI" %}

For more technical detailed information, we have a session “[Kubernetes as a Service - The Open Source Cloud on Arm64](https://ossna2020.sched.com/event/c3Yh/kubernetes-as-a-service-open-source-cloud-on-arm64-kevin-zhao-xinliang-liu-linaro)” that was presented at Open source Summit North America virtual summit 2020.

## CNCF Certified Kubernetes Service

CNCF has the Certified Kubernetes program for different vendors’ Kubernetes service to make sure their service consistency and confirmability. The software conformance test ensures that every vendor’s version of Kubernetes supports the required APIs, as do open source community versions. For organizations using Kubernetes, conformance enables interoperability from one Kubernetes installation to the next. It allows them the flexibility to choose between vendors.

Linaro Developer Cloud Kubernetes service now can offer the Kubernetes version 1.17 with OS Fedora-Coreos-Dev-Arm64. Now, it has passed the CNCF conformance test suites which includes more than 280 test cases and was [certified by CNCF](https://landscape.cncf.io/card-mode?selected=linaro-developer-cloud-kubernetes-service). We are the first Arm64 open source cloud to pass the CNCF conformance test and gain this certification. With this certification, Arm64 open-source platform

{% include image.html path="/assets/images/content/certified-kubernetes.png" class="small-inline left" alt="Certified Kubernetes logo" %}