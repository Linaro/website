---
id: 1
title: Testing & Continuous Integration
sub_theme: true
permalink: /core-technologies/testing-and-ci/
image: /assets/images/content/Banner_Testing_CI.jpg
icon: /assets/images/content/Icon_Testing_notext.svg
js-package: contactForm
description: >
  Linaro provides software tools to rapidly detect build & functional-test regressions in Linux, Android, Zephyr etc against variety of emulated & hardware targets.
# presentation_link: https://linaro.co/ai-slides
video_resources_link: https://resources.linaro.org/en/themes/b14ff507-8b3e-4ce4-856d-ef161e2d4214
jumbotron:
  class: header_2021_2 theme_banner
  title_row: true
  title: Testing & Continuous Integration
  description: |
    Linaro provides the software tools to rapidly detect build
    and functional-test regressions in Linux, Android, Zephyr,
    and other operating systems against a variety of emulated
    and hardware targets (IoT, embedded, and server).

    Linaro members are privileged to participate in a variety of activities that improve operating
    system software on their devices. They participate in the Linaro Linux Kernel Quality program,
    deploy landing teams that specialize in keeping their product Linux kernels current and
    upstream, work with Linaro to enable device automation in LAVA, and utilize Linaro’s scalable
    build and testing solutions to routinely test Linux on their devices.

    Linaro member companies even build their own communities around testing in Linaro through
    Linaro directed projects. Linaro members spend more time focusing on differentiating
    technology and are able to have testing teams that can focus on last-mile testing by working
    directly with Linaro.
  image: /assets/images/content/Banner_Testing_CI.jpg
flow:
  - row: container_row
    style: bg-light py-4
    sections:
      - format: title
        style: font-weight-bold mt-4 text-center
        title_content:
          style: font-weight-bold
          text: Linaro projects focused on Testing and CI
          size: h2
      - format: block
        style: pb-4
        item_width: "6"
        block_section_content:
          blocks:
            - title: Linaro Automation & Validation Architecture (LAVA)
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-start align-items-start
              description: |
                LAVA is the open source Linaro Automation and Validation
                Architecture. It is the industry standard software for embedded
                device and testing automation, but also works with IoT and
                server-grade devices. It can perform firmware, OS (boot and
                functional), application, and producer-consumer testing. Being
                the creators of LAVA, Linaro has over a decade of experience
                refining this automation software. Linaro’s members guide
                development of represents member interest.
              buttons:
                - title: LAVA
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://validation.linaro.org/
            - title: TuxSuite™
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-start align-items-start
              description: |
                TuxSuite™ by Linaro is the backbone of Linaro’s testing efforts. This is now available as a commercial service to help anyone interested in improving their Linux kernel testing to do so rapidly and at scale. Take your testing from limited and infrequent to constant and expansive with TuxSuite™.
              buttons:
                - title: TuxSuite™
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://tuxsuite.com/
            - title: Linux Kernel Functional Test (LKFT)
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-start align-items-start
              description: |
                Linaro’s Linux Kernel Quality program covers both Linux kernel
                testing and testing of the LTS-derived Android-Common Kernel.
                Linaro’s Linux Kernel Functional Testing framework (LKFT) is
                the most reliable Linux long-term-stable functional test
                framework in the industry. On a weekly basis, across the latest
                6 Linux LTS releases, the linux-next branch and linux-mainline
                branches, Linaro build-tests and reports on over 350
                release+architecture+target combinations on every git-branch
                push. We run functional-testing on nearly 40 of these
                combinations on real and emulated hardware and report back
                consistently with results in under 48 hours. We have run over
                156 Million Test runs of the Linux LTS trees to date against a
                variety of embedded, emulated, and server platforms. We work
                weekly with LTS maintainers to execute testing and report
                regressions on the latest release-candidates before the releases
                are made.

                We also build and functional test (Android CTS & VTS) Android
                Common Kernels weekly and report regressions in the Linux
                kernel and AOSP directly to Linux upstream maintainers and
                Google respectively. To date we’ve run over 530 Million Test
                runs against a variety of mobile chipsets, preventing regressions
                before they ever hit production mobile devices. Explore Linaro’s
                Linux kernel functional test project at:
              buttons:
                - title: LKFT
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://lkft.linaro.org/
            - title: Software Quality Dashboard Software (SQUAD)
              style: engagement_block_col h-100 text-left
              content_style: engagement_block text-dark h-100 mb-lg-0 engagement_block_content d-flex flex-column justify-content-start align-items-start
              description: |
                SQUAD is Linaro’s open source Software Quality Dashboard
                software. It is cloud-deployable and scalable software for
                scheduling, aggregating, the collection of software test-results,
                and presenting them directly via reporting front-end, or via the
                reporting API for customer results composition. SQUAD is also
                able to maintain software baselines, perform results
                comparisons, and generate email reports using project
                templates. It supports mixed-tenant results with a permission
                and access layer that can give granular access to public and
                private data separately.
              buttons:
                - title: SQUAD
                  textBtn: true
                  style: btn-lg text-btn
                  url: https://github.com/Linaro/squad
      - format: buttons
        style: text-center
        buttons_content:
          - title: All Projects
            url: /projects/
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: container_row
    style: bg-green
    sections:
      - format: custom_include
        source: themes/quick_link_blocks.html
  - row: container_row
    style: text-center
    background_image: /assets/images/content/Banner_Testing_CI.jpg
    sections:
      - format: title
        style: mt-4 text-white
        title_content:
          text: How to participate
          size: h2
      - format: text
        style: text-white
        text_content:
          text: |
            There are multiple ways to engage with Linaro.
      - format: block
        style: pb-4 text-left
        item_width: "6"
        block_section_content:
          blocks:
            - title: Join as a Linaro Club Member
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                If you want to collaborate with Linaro and other industry leaders on all verticals in the Arm Ecosystem, club membership is the right option for you.
              buttons:
                - title: Linaro Club Membership
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/
            - title: Join as a Linaro Core Member
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                If you want to participate in all the work Linaro does as well as have access to your own dedicated engineering team, then core membership is the right option for you.
              buttons:
                - title: Linaro Core Membership
                  style: btn-lg text-btn
                  textBtn: true
                  url: /membership/
            - title: Join our team!
              style: related_project_block h-100 text-dark
              content_style: related_project_block__content d-flex flex-column justify-content-between align-items-start
              description: |
                We frequently hire subject matter experts and maintainers - if you're interested in becoming part of our team, go to the Linaro careers page to find out more.
              buttons:
                - title: Linaro Vacancies
                  style: btn-lg text-btn
                  textBtn: true
                  url: /careers/
      - format: buttons
        buttons_content:
          - title: Contact us
            url: "#contact_form"
            style: btn-lg btn-primary my-2 border-white engagement_request_contact_btn
  - row: custom_include_row
    source: engagement_request_form.html
---
