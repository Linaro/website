---
layout: flow
image: /assets/images/content/LDCG col.svg
permalink: /engineering/datacenter-and-cloud/
js-package: engineering
related_resources_tracks: https://connect.linaro.org/assets/json/cloud.json
title: Datacenter & Cloud
description: |-
  The datacenter and cloud ecosystems continue to grow and evolve at breakneck speed, with new technologies being introduced at a high rate. On the software front, open source is the dominant driving force, due to the open and collaborative engineering.
keywords: Arm, Server, Linux, ecosystem, silicon, Power Management, Security, Big Data, Software Defined Infrastructure, Datacenter, Cloud
related_tags:
  - LDCG
  - ldcg
  - Cloud
  - Datacentre
  - Datacenter
  - LTNS
  - LTN
  - HPC
  - Developer Cloud
jumbotron:
  title: Datacenter & Cloud
  inner_class: dotted
  description: ""
  image: /assets/images/content/ldcg-bg.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: ldcg
        source: related_members.html
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The datacenter and cloud ecosystems continue to grow and evolve at breakneck speed, with new technologies being introduced at a high rate. Core technologies in the datacenter and cloud, such as containers or hadoop did not exist until relatively recently. With the introduction of ARM64, the datacenter and cloud ecosystem now have highly competitive options for their workloads. Not only competing with alternative architectures, due to a broad adoption by SoC vendors with ARM64, multiple options of SoC’s are offered, providing the ecosystem with choice.
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro’s Datacenter & Cloud Group aims to, together with its members, provide a common development center for the Arm enterprise ecosystem. Working together to resolve common issues and develop standards reduces fragmentation and helps all participating companies deliver their products to market faster.
  - row: container_row
    style: youtube_embed_row bg-light
    sections:
      - format: youtube
        style: #
        url: https://www.youtube.com/watch?v=WOQErwKoBxc
        #   poster_image: /assets/images/test/background-image1.jpg
        title: Arm on Arm Panel Discussion 2019
  - row: container_row
    style: large_type introduction_row py-0 info_row
    sections:
      - format: title
        style: text-left no-padding
        title_content:
          size: h2
          text: What is the group working on?
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro’s Datacenter & Cloud Group works on core open-source software for Arm servers.
            The group manages four projects:
      - format: title
        style: text-left no-padding
        title_content:
          size: h3
          text: Cloud Infrastructure
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Software Defined Infrastructure enables the cloud revolution, and is a fundamental building
            block for the next generation of the datacenter. Engineering activities include technologies
            such as hypervisors and container based virtualization (OpenStack, Kubernetes) and Software
            Defined Storage (Ceph).
      - format: title
        style: text-left no-padding
        title_content:
          size: h3
          text: Big Data
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            The aim of this project is to make AArch64 a first class citizen in the Big Data, Analytics and
            Data Science community (e.g., Hadoop, Spark, etc.). With 90% of all data having been
            created in the last two years, Big Data and Data Science technologies are vital and have
            become mature with various production implementations. Linaro drives engineering activities
            and ARMv8 builds for the following projects:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: Apache Ambari,Hadoop,Apache Spark,Apache Bigtop
        source: related_projects.html
  - row: container_row
    style: large_type introduction_row py-0 info_row
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            In addition to these activities, Linaro provides an Arm based production ready end-to-end
            use case deployment and is part of ODPi and the reference platform for ARMv8.
      - format: title
        style: text-left no-padding
        title_content:
          size: h3
          text: Server Architecture
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            For Arm servers to be successful in the data center, they need to have functionality
            comparable to other architecture based servers with similar capabilities. For the boot
            architecture, this mean the AArch64 boot process should use familiar tools already in
            common use and active development. Linaro’s Datacenter & Cloud Group is the upstream
            maintainer of various boot architecure projects, including EDKII, tianocore and linux kernel
            efi subsystem. In addition to the work being done on Arm UEFI, GRUB2 and related
            components, current engineering activities include RAS, StandaloneMM, QEMU enterprise
            machine (SBBR/SBSA) and related ARM-TF/EDK2 ports and ACPI advice/review.
      - format: title
        style: text-left no-padding
        title_content:
          size: h3
          text: HPC
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            Linaro aims to drive the adoption of Arm in HPC through standardisation, interoperability,
            orchestration and use case development. In order to achieve this, the project has set out the
            following goals:

            To drive datacenter-class, open-source HPC development on Arm. Identify and adopt
            standards to make HPC deployment on Arm a commercial imperative. Develop real-world
            use cases that reap the benefits of Arm while ensuring interoperability, modularization,
            orchestration.

            Lower deployment & management barriers. Leverage the Linaro Developer Cloud and other
            services to develop cost-effective Cloud-integrated HPC development frameworks and
            generate reference implementations to accelerate

            The HPC Project has an advisory board which works together with the Datacenter & Cloud
            Group members on this particular project. While the Linaro Datacenter & Cloud Group
            members determine what work should be completed by engineering resources, the advisory
            board provides subject matter expertise on HPC requirements and guidance and feedback
            on the ongoing HPC strategic direction and roadmap.

            For more information on the Linaro Datacenter & Cloud Group, download our slide deck.

            HPC Advisory board members
      - format: title
        style: text-left no-padding
        title_content:
          size: h3
          text: How do I get involved?
      - format: text
        style: text-left no-padding
        text_content:
          text: >
            There are multiple ways to join Linaro’s Datacenter & Cloud Group - you can either join at
            Group membership level which allows you to participate in all work and projects managed by
            the group. Or you can join at Club or Core level, both of which allow you to participate in the
            Datacenter & Cloud Group as well as other Linaro segment groups.

            To read more about membership and fill out the enquiry form, [click here](/membership/).
  - row: custom_include_row
    source: engineering_related_resources.html
---
