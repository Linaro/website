---
project_id: "10"
title: SDI (Docker, Ceph, OpenStack, KVM, Xen)
permalink: /projects/sdi/
description: |-
    SDI is the enabler for the cloud revolution and the fundamental building block for richer services like Platform As A Service (PaaS), Software As A Service (SaaS), Data Base As A Service (DBaaS), etc.
keywords: openstack, performance, scaling, linaro, containers, service, aarch64, optimizations, storage, testing
related_groups:
  - "leg"
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsOUcnuLbqQzJsbeJe5wFQN0
---
# SDI

SDI is the enabler for the cloud revolution and the fundamental building block for richer services like Platform As A Service (PaaS), Software As A Service (SaaS), Data Base As A Service (DBaaS), etc. LEG Members have agreed to put together resources and focus on making Aarch64 a best in class citizen in the SDI communities and a well supported architecture from booting up to running a wide range of workloads at scale.


#### SDI relies on multiple key technologies:

- Hypervisors and containers, e.g. KVM, Xen, LXC, LXD, etc.
- Storage, e.g. Ceph, HDFS, Gluster, Swift
- Computing
- Networking


#### Key Deliverables: High Level Deliverables

- Enablement:  establish OpenStack foundation environment for continuous integration and performance profiling, using the upstream test suites and tooling.  Provide ongoing reporting of findings for members and SDI community.
   - CI testing with upstream releases of OpenStack (Core)
   - Performance testing with OpenStack Rally benchmark of OpenStack (Core)
- Benchmarking and Profiling: perform OpenStack compute, storage and networking testing for performance, scaling and capacity. Identify areas of optimization for the AArch64 platform.
   - Performance and scaling optimizations for Compute
   - Performance and scaling optimizations for Storage
   - Capacity and scaling optimizations for Networking
- Containers:  Provide Docker containers and registry, for use in a SDI (software defined Infrastructure) for the AArch64 platform.  Incorporation of kubernetes for management of containerized applications (such as murano+heat or magnum)
   - ARM architecture Docker Containers and registry
   - Management of containerized applications

#### Useful Information:

- [SDI Work Load](https://docs.google.com/spreadsheets/d/1adtQIzk9XzVkJqPz3CmWyq0PGmgYi_xjfyANPaEmUNg/edit#gid=1934890087)
- SDI Mailing List: linaro-sdi (linaro-sdi@lists.linaro.org)
- SDI irc channel: #linaro-openstack
- SDI Project Bugs
- SDI Project Patches
- [SDI Documentation](https://collaborate.linaro.org/display/SDI/)

#### Contacts:

- Governance: LEG-SC
- Mailing list: linaro-sdi@lists.linaro.org
