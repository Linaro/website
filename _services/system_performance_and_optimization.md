---
title: Arm-based System Performance & Optimization
description: We can support deployment of your software on all Arm Platforms,
  doing initial ports & optimising performance. We help get your products to
  market faster.
permalink: /services/system-performance-and-optimization/
service_id: 10
keywords:
  - GCC
  - GDB
  - Binutils
  - glibc
  - LLVM
  - toolchain
  - compiler
  - optimization
  - microarchitecture
jumbotron:
  title: System Performance & Optimization
  image: /assets/images/content/Banner_System_Performance_Optimization.png
  title-class: my-4
  class: dev_services text-center
  buttons:
    - title: Contact Us
      url: "#contact_form"
      style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase
        ds_contact_form_btn
    - title: Contact Us
      url: "#contact_form"
      style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase
        ds_contact_form_btn
flow:
  - row: container_row
    style: bg-white text-dark text-center dotted-border-bottom
    sections:
      - format: text
        style: larger_type reduced_larger_type bg-light-gray p-3 rounded down_triangle
          mt-4
        text_content:
          text: >
            Porting your software to run efficiently on Arm-based systems is
            more than just recompiling

            your code. Code will need optimising to be performant - both the high-level software and

            underlying systems libraries and tools.
      - format: text
        style: larger_type reduced_larger_type bg-green p-3 rounded font-weight-bold
        text_content:
          text: >
            Together we can work to ensure that your software & workloads have
            exceptional performance on Arm.
      - format: text
        style: larger_type reduced_larger_type bg-light-gray p-3 rounded up_triangle
          mb-4
        text_content:
          text: >
            Linaro Developer Services has the expertise and experience in
            systems libraries and tools to

            make them work well for you on Arm-based systems.
  - row: container_row
    style: bg-white text-dark dotted-border-bottom
    sections:
      - format: two_column
        style: mb-4
        breakpoint: md
        left_column:
          style: p-3
          text: |
            **Combine our Arm system knowledge and your
            application expertise to deliver your product
            requirements**
          include: services/expertise_image.html
        right_column:
          style: p-3 coloured_bullet_list
          text: |
            **Our areas of expertise include:**

            * Machine Learning: e.g. Tensorflow
            * Computer Vision: e.g. OpenCV
            * Linear Algebra: e.g. OpenBLAS, Eigen
            * System C Libraries: e.g. glibc
            * Linux Kernel
            * Compilers: e.g. GCC, LLVM, go
            * Language Expertise includes: C/C++/
            Fortran/go
            * Arm Architecture: Armv8, SVE, HPC,
            Memory Models.
  - row: container_row
    style: bg-white text-dark
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: Toolchain Optimization Services
      - format: text
        style: null
        text_content:
          text: >
            Linaro has world class engineers with a deep understanding of all
            profiles and

            versions of the Arm Architecture. This ranges from deeply embedded

            microcontrollers to large HPC-scale machines running in the cloud.
      - format: text
        style: null
        text_content:
          text: >
            Linaro Developer Services has specific teams focused on ensuring
            toolchains (including GCC and LLVM) target Arm-based

            systems effectively. We have significant experience and knowledge of:


            * Tuning toolchains to produce performant code for specific CPU micro-architectures and systems. For the compiler this

            includes optimizations to improve instruction selection, layout, and scheduling. C libraries (e.g. Glibc, Musl-libc, or bionic)

            can be tuned with hand-written assembly routines where appropriate.

            * Tuning toolchains to produce code meeting code-size requirements - in particular for microcontroller environments. This

            includes improving a compiler’s heuristics for instruction selection, function inlining and outlining.

            * Optimizing system libraries for customer workflows. Linaro has worked on system C libraries and other support libraries

            including auto-parallelisation (e.g. OpenMP), Linear Algebra (e.g. OpenBLAS), Machine Learning (e.g. TensorFlow). Work

            includes tuning for the Arm memory model; ensuring that code uses Neon or SVE where appropriate.


            Our strong relationship with toolchain upstream communities facilitates rapid upstreaming and problem resolutions. We

            know how to organise a project and will work with you to ensure your project successfully upstreams code rapidly. We also

            have experience with development in this area for Arm Architecture licensees.


            Linaro Developer Services is able to provide pre-packaged toolchains for your systems that you can ship to your customers

            and partners. In addition to our toolchain packaging services, we can provide you with rapid response to toolchain issues and

            train your developers on how to write developer performant code for the Arm architecture
  - row: container_row
    style: bg-white text-dark
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: Power Management Tuning Services
      - format: text
        style: null
        text_content:
          text: >
            Linaro has a world class team with a deep understanding of the Arm
            architecture

            and Linux power management framework. As a result, we have experience in the

            following areas:
      - format: text
        style: null
        text_content:
          text: >
            * Hands on experience tuning the Energy Aware Scheduler in the Linux
            kernel for several SoCs

            * Experience maintaining long term EAS branches in the Linaro Stable Kernel (LSK) for use by Linaro members

            * A strong working relationship with upstream kernel developers; our team is recognized for its world class work

            * Deep understanding of whole system power state management technologies like PSCI

            * Dynamic Voltage and Frequency Scaling (DVFS), Energy Aware Scheduling (EAS)

            * Power management skills in a variety of commercial niches (mobile, set top box, embedded devices)
      - format: text
        style: larger_type
        text_content:
          text: >
            Contact Linaro Developer Services today for help on toolchain
            optimization,

            application performance and porting or power management tuning services!
  - row: container_row
    style: text-center dotted-border-bottom
    sections:
      - format: buttons
        buttons_content:
          - title: Contact Us
            url: "#ds_contact_form"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block
              ds_contact_form_btn
          - title: Contact Us
            url: "#ds_contact_form"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_contact_form_btn
  - row: container_row
    style: text-center
    sections:
      - format: custom_include
        source: services/icon_links.html
  - row: custom_include_row
    source: services/developer_services_form.html
icon: /assets/images/content/Icon_Toolchain_Optimization.svg
image: /assets/images/content/Rocket_6.png
---
