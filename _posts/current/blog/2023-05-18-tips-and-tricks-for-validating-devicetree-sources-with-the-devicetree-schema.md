---
layout: post
title: Tips and Tricks for Validating Devicetree sources with the Devicetree Schema
description: In this blog we share some useful commands you can use with the
  Devicetree Schema. Read more here!
date: 2023-05-18 01:09:31 +01:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - Devicetree
  - DT
  - DTS
  - Devicetree sources
  - Devicetree schema
  - Linux Kernel
category: blog
author: Krzysztof_Kozlowski
---
A devicetree is a data structure which describes hardware. The Devicetree (DT) schema in the Linux kernel can be used to validate and check your Devicetree sources (DTS). This allows the parser to spot mistakes in the DTS and to find properties not conforming to the Devicetree bindings. [Conformance with Devicetree bindings is one of the ARM SystemReady IR requirements](https://www.arm.com/architecture/system-architectures/systemready-certification-program/ir).

In this blog we share some useful commands for daily usage of DT schema, as of v6.3 Linux kernel.

All the commands below are meant to be run inside the Linux kernel repository.

## Test the Devicetree bindings

Test all bindings:

```
make dt_binding_check

```

The command might take some time, thus when working with specific bindings, one can test a subset of them:

```
make dt_binding_check DT_SCHEMA_FILES=trivial-devices.yaml
make dt_binding_check DT_SCHEMA_FILES=qcom
make dt_binding_check DT_SCHEMA_FILES=/gpio/
```

## Test the DTS files

Testing the DTS in this context means validating them against DT schema. Let’s start with a common environment setup like:

```
export CROSS_COMPILE=aarch64-linux-gnu- ARCH=arm64 KBUILD_OUTPUT=out/
make defconfig
```

Test all DTS files:

```
make dtbs_check
```

This might take a while and will report warnings for all platforms. It is therefore useful to narrow the tests to one DTS file through specifying DTB (Devicetree blob) target:

```
make CHECK_DTBS=y qcom/sm8450-hdk.dtb
```

Finally test one DTS file against chosen subset of the bindings:

```
make CHECK_DTBS=y DT_SCHEMA_FILES=trivial-devices.yaml qcom/sm8450-hdk.dtb
make CHECK_DTBS=y DT_SCHEMA_FILES=/gpio/ qcom/sm8450-hdk.dtb
make CHECK_DTBS=y DT_SCHEMA_FILES=qcom qcom/sm8450-hdk.dtb
```

That’s it! With these commands you can gradually improve your DTS files and bring them into shape.

## I﻿nterested in learning more?

More information is available in [Linux kernel documentation](https://www.kernel.org/doc/html/latest/devicetree/bindings/writing-schema.html). If you need help validating Devicetree sources, create a support ticket with our [Developer and Technical Support](https://www.linaro.org/support/) team who can provide more guidance. Alternatively [Linaro Developer Services](https://www.linaro.org/services/) is here to support you if you have a project where you need guidance or long-term support involving Devicetree.