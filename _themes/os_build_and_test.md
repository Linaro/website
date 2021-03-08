---
id: 5
title: OS Build & Test
sub_theme: false
permalink: /os-build-and-test/
image: /assets/images/content/OS_Build_test.png
icon: /assets/images/content/Icon_OS_Build_Test.svg
icon_dark: /assets/images/content/Black_OS_Build_Test.svg
description: >
  Linaro and member companies collaborate to improve the quality of Operating System kernels (Linux, Android, Zephyr) by providing the software tools and processes to allow continuous build,functional testing and regression detection. In addition, Linaro facilitates expanded testing coverage and higher software quality in various operating systems such as  Linux, Android, and RTOSs. Linaro has 10+ years experience working in the Arm embedded space and specialises in rapid deployment of automated testing.
jumbotron:
    class: theme_banner 
    title: Rapid Operating System Build and Test
    description: |
      Linaro and member companies collaborate to improve the quality of Operating System kernels (Linux, Android, Zephyr) by providing the software tools and processes to allow continuous build,functional testing and regression detection.
      
      In addition, Linaro facilitates expanded testing coverage and higher software quality in various operating systems such as  Linux, Android, and RTOSs.
      
      Linaro has 10+ years experience working in the Arm embedded space and specialises in rapid deployment of automated testing.
    image: /assets/images/content/OS_Build_test.png
    buttons:
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase theme_contact_btn
      - title: How can Linaro help?
        url: "#contact_form"
        style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase theme_contact_btn
flow:
    - row: container_row
      sections:
        - format: text
          text_content:
            text: |
              **Firmware, Kernel, File-System, System Libraries, and Toolchains. These are colloquially known as an operating system.**

              Linaro provides the software tools to rapidly detect build and functional-test regressions in Linux, Android, Zephyr, and
              other operating systems against a variety of emulated and hardware targets (IoT, embedded, and server).

              Linaro members are privileged to participate in a variety of activities that improve operating system software on their
              devices. They participate in the Linaro Linux Kernel Quality program, deploy landing teams that specialize in keeping their
              product Linux kernels current and upstream, work with Linaro to enable device automation in LAVA, and utilize Linaro’s
              scalable build and testing solutions to routinely test Linux on their devices.

              Linaro member companies even build their own communities around testing in Linaro through Linaro directed projects.
              Linaro members spend more time focusing on differentiating technology and are able to have testing teams that can focus
              on last-mile testing by working directly with Linaro.

        - format: tabs
          tabs:
            - title: Kernel Quality
              content: |
                Linaro maintains Linaro member-directed programs to improve the quality of the Zephyr, Linux, and Android
                operating-systems. We work with upstream developers and release maintainers to accelerate availability of security and
                bug fixes and improve the quality of stable releases (by detecting regressions before release), improve the frequency of
                product device updates through increasing quality confidence, and improve the breadth of testing available to developers
                and device manufacturers before they commit their code to releases.
                
                ![LKFT logo](/assets/images/content/LKFT.svg){:.small-inline.left}

                ![LKFT content 1](/assets/images/content/156m_tests.png){:.medium-inline.right}

                Linaro’s Linux Kernel Quality program covers both Linux
                kernel testing and testing of the LTS-derived
                Android-Common Kernel. Linaro’s Linux Kernel Functional
                Testing framework (LKFT) is the most reliable Linux long-term-stable functional test framework in the industry. On a weekly
                basis, across the latest 6 Linux LTS releases, the linux-next branch and
                linux-mainline branches, Linaro build-tests and reports on over 350
                release+architecture+target combinations on every git-branch push. We
                run functional-testing on nearly 40 of these combinations on real and
                emulated hardware and report back consistently with results in under 48 hours. We have run over 156 Million Test runs of
                the Linux LTS trees to date against a variety of embedded, emulated, and server platforms. We work weekly with LTS
                maintainers to execute testing and report regressions on the latest release-candidates before the releases are made.
              
                ![LKFT content 2](/assets/images/content/530m_tests.png){:.medium-inline.left}

                We also build and functional test (Android CTS & VTS) Android Common
                Kernels weekly and report regressions in the Linux kernel and AOSP
                directly to Linux upstream maintainers and Google respectively. To date
                we’ve run over 530 Million Test runs against a variety of mobile chipsets,
                preventing regressions before they ever hit production mobile devices.
                Explore Linaro’s Linux kernel functional test project at [https://lkft.linaro.org](https://lkft.linaro.org)
            - title: Testing Services
              content: |
                Linaro maintains a variety of open source project CI and testing frameworks. These include CI testing for the following

                ![Tuxsuite logo](/assets/images/content/tuxsuite.svg){:.square-inline.left}

                TuxSuite™ by Linaro is the backbone of our Linaro’s testing efforts. This is now available as a
                commercial service to help anyone interested in improving their Linux kernel testing to do so rapidly and
                at scale. Take your testing from limited and infrequent to constant and expansive with TuxSuite.
            - title: Toolchain
              content: |
                Linaro maintains a variety of open source project CI and testing frameworks. Centralising the testing in Linaro alleviates the
                members need to individually monitor the upstream community. Linaro toolchain testing helps ensure that Arm devices
                remain at the forefront of the performance envelope in terms of generated code size and the execution performance of the
                resulting code.

                To achieve this Linaro provides support to a number of CI artifacts:-

                ![GNU logo](/assets/images/content/GNU.svg){:.square-inline.left}

                #### GNU Toolchain build and integration testing

                Integration release testing builds

                - These builds are made from the master branches of GNU toolchain components at the moment the
                moment build, you can interrogate the included manifests for details.
                - These builds are for experimental environments only, providing support for system integrators to
                check an upcoming GNU official release.
                https://snapshots.linaro.org/gnu-toolchain/

                ![LLVM logo](/assets/images/content/LLVM.svg){:.square-inline.left}

                #### LLVM Toolchain build-bots

                Overall summary here https://llvm.validation.linaro.org

                Linaro maintain a number of the upstream buildnots for LLVM, with builds for Flang the fortran compiler,
                Windows on Arm, LLDB and LLD, pulls some libraries, e.g.

                **Flang**

                - http://lab.llvm.org:8011/#/builders/32
                - http://lab.llvm.org:8011/#/builders/33
                - http://lab.llvm.org:8011/#/builders/66

                **WoA**
                - http://lab.llvm.org:8011/#/builders/65
                - http://lab.llvm.org:8011/#/builders/120

                **LLDB**

                - http://lab.llvm.org:8011/#/builders/96
                - http://lab.llvm.org:8011/#/builders/17
            - title: Open Source Tools
              content: |
                Linaro develops and maintains open source software tools for device automation that enable continuous integration testing
                of firmware, OSes and workloads on a variety of device classes, from MCU/IoT devices, to embedded boards, to servers.

                ![LAVA logo](/assets/images/content/LAVA.svg){:.square-inline.left}

                **LAVA** is the open source Linaro Automation and Validation Architecture. It is the industry standard soft-
                ware for embedded device and testing automation, but also works with IoT and server-grade devices.
                It can perform firmware, OS (boot and functional), application, and producer-consumer testing. Being the
                creators of LAVA, Linaro has over a decade of experience refining this automation software. Linaro’s
                members guide development of represents member interest

                ![TuxMake logo](/assets/images/content/tuxmake.svg){:.square-inline.left}

                **TuxMake™** automates Linux builds across different architectures, configurations, targets, and toolchains.
                Specify your choices, and TuxMake drives the build for you, doing the same steps in the same way every
                time. TuxMake provides portable build environments using standard container images so that your team
                can perform the exact same build across different systems.

                ![Squad logo](/assets/images/content/squad.svg){:.square-inline.left}

                **SQUAD** is Linaro’s open source Software Quality Dashboard software. It is cloud-deployable and scala-
                ble software for scheduling, aggregating, the collection of software test-results, and presenting them 
                directly via reporting front-end, or via the reporting API for customer results composition. SQUAD is also 
                able to maintain software baselines, perform results comparisons, and generate email reports using project templates.
                It supports mixed-tenant results with a permission and access layer that can give granular access to public and private data separately.
    - row: container_row
      style: bg-green
      sections:
       - format: custom_include
         source: themes/quick_link_blocks.html
    - row: container_row
      style: related_projects bg-secondary text-white
      sections:
        - format: title
          title_content:
            size: h2
            text: >
                Related Projects
        - format: custom_include
          source: themes/related_projects.html
    - row: container_row
      style: associated_members
      sections:
        - format: title
          title_content:
            size: h2
            text: >
                Associated Members
    - row: custom_include_row
      source: themes/associated_members.html
    - row: custom_include_row
      source: themes/theme_contact_form.html
---