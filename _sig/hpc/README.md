---
sig_id: 1
title: High Performance Computing (HPC)
permalink: /sig/hpc/
director: Kanta Vekaria
tech-lead: Renato Golin
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMFnRpO8jCzyXpH7J8IgCXv
members_key: hpc_members
group_long_name: High Performance Computing (HPC)
group_short_name: HPC
icon: hpc-icon.svg
---
The world’s fastest 500 computers run Linux-based operating systems and thus, High Performance Computing (HPC) relies on Open Source. 

The Mont Blanc project tackled the initial work of building test systems and porting software for Arm HPC test systems. Since then and from work involving the US Department of Energy’s FastForward-2 project has demonstrated that Aarch64 is competitive on a per core and per socket basis. Furthermore the HPC community were seeking multi vendor options. They wanted choice! They do not want fully proprietary systems which inhibit them to fix problems. The Arm ecosystem brings choice and better optimised solutions. It also brings the opportunity to co-design and co-develop from architecture design right through to software.

Linaro and its members created the HPC Special Interest Group (SIG), officially launching at Linaro Connect Las Vegas in September 2016 to drive the adoption of Arm in HPC through standardisation, interoperability, orchestration and use case development

HPC has a large and growing open src component. Toolchains can be offered to those who want a choice and engineering can be focused on library optimisation that will benefit all micro architectures. Linaro provides a forum where SoCs, system vendors, integrators, users, distros, hyperscalers can co-develop and root the foundational software to make choice easier for the desired application space.

The HPC SIG is currently working to leverage Arm hardware around server class infrastructure, multi-gigabit interconnect support, scalable vector extensions and software ecosystem support to build exascale HPC deployments. The focus is on three segments: hardware deployment, software ecosystem and optimised libraries. 

Hardware Deployment: Linaro works with hardware vendors to deploy Arm (AArch64) systems in an HPC configuration. This is done by following industry standards on boot architecture (UEFI), network technology (10GB/InfiniBand) and rack mounted systems. 

Software Ecosystem: All hardware needs a solid and optimised software ecosystem. Hence, Linaro is also heavily involved in efforts like [OpenHPC](http://www.openhpc.community/), optimisation and upstreaming of SVE implementations in [GCC](https://gcc.gnu.org/), [LLVM](http://llvm.org/) and [QEMU](http://www.qemu.org/). 

Optimised Libraries: In order to achieve optimal performance on Arm hardware, libraries and HPC workloads also need to be optimised. Part of this effort is in the software ecosystem (as described above) but part of it is in making sure the existing libraries can use Arm’s SIMD as well as the new scalable vector extension.
