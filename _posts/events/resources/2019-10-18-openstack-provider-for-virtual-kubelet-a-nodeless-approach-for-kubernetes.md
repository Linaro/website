---
event: open-infrastructure-summit-2019
title: Is there an easy way to use Kubernetes inside OpenStack?
description: >
  Nowadays everyone talks about Kubernetes. There are also many useful tools for user to get Kubernetes services in OpenStack. However, for those who just focus their workloads and applications, launching and maintaining Kubernetes cluster is nightmare. Is there an easy way to use Kubernetes inside OpenStack?
date: "2019-10-18 03:00:00+00:00"
slot: 12:50pm - 1:15pm
image: /assets/images/content/open-infrastructure-summit-2019.png
tag: resource
speakers:
  - biography: >
      Francois-Frederic is an entrepreneur with over 35 years of experience in technical, sales and marketing positions. Prior to joining Linaro, Francois-Frederic was VP Business Development at 6WIND where he has been instrumental in creating success for SDN and NFV offerings. Prior to that, he has been CTO and co-founder of Vedicis where he led architecture and development teams, and previously he held several technical and marketing functions at Olivetti, Unisys, Access360, Tempoline, Versada Networks, NetSecureOne and Radware. Francois-Frederic holds a degree in computing science from Universite de Paris VII. He is the author of seven granted patents.
    company: Linaro
    job-title: Tech Lead
    name: Kevin Zhao
---

Nowadays everyone talks about Kubernetes. There are also many useful tools for user to get Kubernetes services in OpenStack. However, for those who just focus their workloads and applications, launching and maintaining Kubernetes cluster is nightmare. Is there an easy way to use Kubernetes inside OpenStack?

Using OpenStack Zun with Virtual Kubelet offers a vital alternative. Zun is the OpenStack Containers service which allows users to run containers on OpenStack without creating nodes or clusters. Virtual Kubelet is a CNCF project that provides an alternative Kubelet implementation, which allows Kubernetes nodes to be backed by Cloud providers, such as Azure ACI, AWS Fargate and OpenStack Zun.

In this presentation, we will talk about what we have done to make Zun as an official Virtual Kubelet provider, the best practice for user scenario, and the future development plan to make Kubernetes much better supported on OpenStack.

### What can I expect to learn?

In this presentation, the audience will have rich information as below:

- The mechanism of OpenStack container service Zun
- The backend details for making Zun as Virtual Kubelet Provider, the mechanism of the nodeless approach of virtual kubelet Zun provider.
- The best practice for user scenario
- The future development plan
