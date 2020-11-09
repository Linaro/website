---
permalink: /engineering/core/toolchain/
description: |-
  The Linaro Toolchain works on all aspects of system-level tools - the core development toolchain (compiler, assembler, linker, debugger), core system libraries (dynamic linker, c-library), emulation, profiling and analysis (oprofile, performance events) and instrumentation (ftrace).
keywords: Toolchain, GCC, QEMU, glibc
layout: flow
related_resources_tracks: https://connect.linaro.org/assets/json/toolchain.json
js-package: engineering
image: /assets/images/content/engineering/png/core_engineering.png
jumbotron:
  title: Toolchain
  inner_class: dotted
  description: ""
  image: /assets/images/content/engineering/context/stewardship.jpg
flow:
  - row: container_row
    style: members_row bg-light
    sections:
      - format: custom_include
        params: core,club
        source: related_members.html
  - row: main_content_row
    style: large_type introduction_row py-0
  - row: custom_include_row
    source: engineering_related_resources.html
---

The Linaro Toolchain works on all aspects of system-level tools - the core development toolchain (compiler, assembler, linker, debugger), core system libraries (dynamic linker, c-library), emulation, profiling and analysis (oprofile, performance events) and instrumentation (ftrace). The team also provides Linaro toolchain binary releases and Linaro Toolchain package releases. Linaro Toolchain works directly with upstream communities: GCC, Binutils, GDB, glibc, LLVM, QEMU.
