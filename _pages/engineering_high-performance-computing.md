---
title: High Performance Computing
layout: flow
youtube_playlist: https://www.youtube.com/watch?v=nWJDlg_kpOQ
permalink: /engineering/high-performance-computing/
js-package: engineering
members:
  key: hpc-sig
image: /assets/images/content/HPCCol.svg
related_resources_tracks: https://connect.linaro.org/assets/json/hpc.json
jumbotron:
  title: High Performance Computing
  inner_class: dotted
  description: ""
  image: /assets/images/content/hpc-bg.jpg
flow:
  - row: container_row
    style: large_type introduction_row py-0
    sections:
      - format: text
        style: text-left no-padding
        text_content:
          text: >

            With its debut on the Top500, the 125,000-core Astra at New Mexico's Sandia Labs uses Cavium ThunderX2 chips to mark Arm's entry into the petascale world. In Japan, the Armv8-A 512bit SVE Post-K prototype CPU by Fujitsu and RIKEN has been optimized to achieve high-level, real-world application performance, anticipating up to one hundred times the application execution performance of the K computer. K was the first computer to top 10 petaflops in 2011.
      - format: text
        style: text-left no-padding
        text_content:
          text: >

            The world’s fastest 500 computers run Linux-based operating systems and thus, High Performance Computing (HPC) relies on Open Source. HPC has a large and growing open source component. Toolchains can be offered to those who want a choice and engineering can be focused on library optimisation that will benefit all micro architectures. Linaro provides a forum where SoCs, system vendors, integrators, users, distros, hyperscalers can co-develop the foundational software necessary for the ecosystem.
      - format: text
        style: text-left no-padding
        text_content:
          text: >

            Linaro and its members created the HPC Special Interest Group (SIG) in 2016 to drive the adoption of Arm in HPC through standardisation, interoperability, orchestration and use case development. The HPC SIG is currently working to leverage Arm hardware around server class infrastructure, multi-gigabit interconnect support, scalable vector extensions and software ecosystem support to build exascale HPC deployments. The engineering focus is on OpenHPC, compiler performance,SVE enablement and hardware deployment.

      - format: text
        style: text-left no-padding
        text_content:
          text: >

            - OpenHPC: Fully automating OpenHPC CI & releases and deploying dynamic clusters on varied vendors/hardware configurations/OS distros

            - Compiler performance: Running a variety of HPC benchmarks for CPU-bound issues and detecting common outliers for bottlenecks

            - SVE enablement: Improving SVE support in GCC for more vectorisation cases, enabling LLVM to generate SVE code, and finishing (and upstreaming) QEMU support

            - Hardware deployment: Work in Linaro's own HPC lab for best-in-class stability & repeatability, close-to-production ennironment, upstream technology, vendor isolation.

  - row: custom_include_row
    source: engineering_related_resources.html
---

### Linaro HPC Upcoming Events and Resources from Previous Events:

- Open Source HPC Collaboration on Arm Architecture - Guangzhou January 2019 - [Link to Resources](/events/arm-hpc-asia-2019/)
- Arm Architecture HPC Workshop - Santa Clara July 2018 - [Link to resources](/events/arm-hpc-santa-clara-2018/#resources)
- Arm HPC Workshop - Tokyo December 2017 - [Link to resources](/events/arm-hpc-japan-2017/#schedule)
