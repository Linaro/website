---
sig_id: 1
title: High Performance Computing (HPC)
permalink: /sig/hpc/
director: Martin Stadtler
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMFnRpO8jCzyXpH7J8IgCXv
members_key: hpc_members
group_long_name: High Performance Computing (HPC)
group_short_name: HPC
icon: hpc-icon.svg
---
# High Performance Computing (HPC)

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/ztRPGcumfeBoru" %}

The HPC SIG was officially launched at Linaro Connect Las Vegas in September 2016 to drive the adoption of ARM in HPC through the creation of a data center ecosystem. It is a collaborative project comprised of members and an advisory board. Current members include ARM, HiSilicon, Qualcomm, Fujitsu, Cavium, Red Hat and HPE. CERN and Riken are on the advisory board.

## Key Deliverables

Building upon the foundations of Linaro’s Enterprise Group (LEG), which works on core open-source software for ARM servers, the HPC SIG aims to:

* Provide reference implementations and cloud based development frameworks
* Lower barriers to deployment and management through:
  * Standardisation
  * Interoperability
  * Modularisation
  * Orchestration
  * Use case development

We are currently working to leverage ARM hardware around server class infrastructure, multi-gigabit interconnect support, scalable vector extensions and software ecosystem support, to build exascale HPC deployments. Our focus is on three segments: hardware deployment, software ecosystem and optimised libraries.

## Hardware Deployment

Linaro works with hardware vendors to deploy ARM (AArch64) systems in HPC configuration. This is done by following industry standards on bootstrap process (UEFI), network technology (10GB/InfiniBand) and rack mounted systems.

An example of this is the ARM Architecture Developer Cloud, which Linaro created to allow developers to implement, port and test server, cloud and IoT applications without substantial upfront hardware investment. The Developer Cloud employs ARM server platforms from Linaro members AMD, Cavium, HPE, Huawei and Qualcomm and is hosted in the UK (Cambridge), the US (Austin) and China (Shanghai). Based on OpenStack, the Developer Cloud leverages both Debian and CentOS as the underlying cloud OS infrastructure. It will expand with demand, and as new server platforms come to market.

Access to the Developer Cloud is provided via the [Linaro Cloud](http://www.linaro.cloud/shop/) web portal. Through the portal developers can request cloud access and may report bugs and performance issues. The portal also provides a developer forum to share development and porting knowledge, as well as best practices for ARM servers.

As SVE (Scalable Vector Extension) becomes available in hardware, we will continue to work with members to deploy those systems in the already existing developer clouds, to further the reach and the bootstrap process.

## Software Ecosystem

All hardware needs a solid and optimised software ecosystem. Hence,  Linaro is also heavily involved in efforts like [OpenHPC](http://www.openhpc.community/), optimisation and upstreaming of SVE implementations in [GCC](https://gcc.gnu.org/), [LLVM](http://llvm.org/) and [QEMU](http://www.qemu.org/).

Working on QEMU ARM deployments running OpenHPC will give the community a way into ARM HPC without being dependant on ARM hardware accessibility, which when extended to an SVE implementation, will help developers bootstrap new applications in HPC environments much earlier.

Furthermore, having open source compilers like GCC and LLVM accept SVE code (intrinsics and inline assembly), vectorise loops and emit optimal SVE code will be essential to get the existing HPC code base to run efficiently and effortlessly on ARM hardware now and in the future.

## Optimised Libraries

In order to achieve optimal performance on ARM hardware, we also need to optimise libraries and HPC workloads. Part of this effort is in the software ecosystem (as described above) but part of it is in making sure the existing libraries can use ARM's SIMD as well as the new scalable vector extension.

This can be achieved either by changing the source code to adapt to better vectorisation techniques but also manually vectorising libraries to achieve the required performance while compilers still can't.

We are looking at both parallelism and math libraries like [OpenMP](http://www.openmp.org/), [BLAS](http://www.netlib.org/blas/), [FFTW](http://www.fftw.org/) and other commonly used backbone libraries for HPC applications.

## Useful Information

### How do I get involved?

You can get involved by either joining as a member or joining the advisory board. Becoming a member enables you to influence the strategic and operational engineering involved in driving the adoption of ARM in HPC. Joining the advisory board allows you to direct engineering by sharing real use cases and expertise. Once you have joined the HPC SIG, your role involves providing strategic direction, subject matter expertise on HPC requirements, guidance and feedback on the ongoing HPC SIG roadmap.

Alternatively, engage through the engineering community by helping drive standardization and interoperability.
