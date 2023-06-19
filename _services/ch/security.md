---
lang: ch
title: 安全
description: >
  作为 Arm 安全和可信执行环境 (TEE) 方面的专家，我们利用开源确保您从最新的上游功能和安全修复中受益。
permalink: /services/security/
service_id: 8
keywords:
  - Security
  - Trustzone
  - OP-TEE
  - Secure Boot
  - GlobalPlatform
  - Bootloaders
jumbotron:
  title: 安全
  image: /assets/images/content/Banner_Security.png
  title-class: my-4
  class: dev_services text-center
  buttons:
    - title: 联系我们
      url: "#contact_form"
      style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block text-uppercase
        ds_contact_form_btn
    - title: 联系我们
      url: "#contact_form"
      style: btn btn-primary btn-sm my-2 d-inline-block d-md-none text-uppercase
        ds_contact_form_btn
flow:
  - row: container_row
    style: bg-white text-dark dotted-border-bottom
    sections:
      - format: text
        style: larger_type
        text_content:
          text: >
            Linaro 开发人员服务在安全启动、安全操作系统和 Arm 的 SystemReady 规范领域拥有深厚的实践专业知识。
  - row: container_row
    style: bg-white text-dark dotted-border-bottom
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: 安全启动
      - format: text
        style: null
        text_content:
          text: >-
            Linaro 开发人员服务帮助公司为他们的商业产品平台规划、实施和优化安全引导加载程序，使用：
      - format: text
        style: border rounded my-3 p-3
        text_content:
          text: |
            Trusted Firmware

            U-Boot

            EDK2

            OP-TEE
      - format: text
        style: null
        text_content:
          text: >
            Linaro 是其中每个项目的贡献者。 此外，Linaro 社区项目部主持了 [Trusted Firmware 项目](https://www.trustedfirmware.org/)。


            我们在使用这些项目为许多客户提供优化的可信引导解决方案方面拥有直接经验； 在 Arm 服务器、机顶盒、嵌入式/物联网系统和使用 OpenBMC 的服务器 BMC 环境中。


            我们与客户合作实施具有挑战性的产品启动性能要求。 此类工作通常涉及分析和表征系统启动性能、确定影响启动性能的区域、开发提高启动性能的解决方案以及解决方案的实施和验证，以确保性能满足系统要求。
  - row: container_row
    style: bg-white text-dark dotted-border-bottom
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: SystemReady
      - format: text
        style: null
        text_content:
          text: >
            Linaro 开发人员服务还能够自信地设计和交付符合 SystemReady 和 PSA 1 级认证的安全启动解决方案。 我们与 Arm 合作，扩展了 Linaro 的边缘和雾计算小组 (LEDGE) 在 [Trusted Substrate 项目](/projects/#automotive-iot-edge-devices_TS) 上的工作，以开发 SystemReady IR 安全启动解决方案并将其提交到上游 NXP 已采用 NXP 芯片组作为其产品 BSP 的一部分。


            We also maintain SystemReady IR, ES and SR solutions for the Socionext DeveloperBox.
  - row: container_row
    style: bg-white text-dark dotted-border-bottom
    sections:
      - format: title
        title_content:
          size: h3
          style: text-dark font-weight-bold my-4
          text: Trustzone, OP-TEE, Trusted Services
      - format: text
        style: null
        text_content:
          text: >
            OP-TEE 是一个安全的操作系统，易于移植，占用空间小，并利用 [Arm® TrustZone®](https://developer.arm.com/ip-products/security-ip/trustzone) 技术提供隔离 来自正常的世界。 OP-TEE 符合 GlobalPlatform TEE 系统架构规范。


            Linaro 在 Open Portable Trusted Execution Environment (OP-TEE) 方面拥有丰富的经验。 Linaro 雇佣了 OP-TEE 项目的核心维护者，以及 Linux 内核和 U-Boot 中的 TEE 框架的维护者。


            可信服务是一个可信固件项目，它实现了一个安全分区管理器，以及在 OP-TEE 内的安全分区中运行的许多可信服务。


            Linaro Developer Services 拥有在各种 SoC 上移植和增强 OP-TEE 的经验，以及使用 Arm 可信服务项目实施 PSA 信任根 (RoT) 以获得基于 NXP 平台的 PSA 1 级认证。
  - row: container_row
    style: bg-white text-dark
    sections:
      - format: text
        style: null
        text_content:
          text: >
            您可以通过 Linaro 开发人员服务获得在 Arm 上使用安全性的所有这些经验。 我们可以帮助您利用开源来确保您从最新的上游功能和安全修复中受益。
      - format: text
        style: larger_type
        text_content:
          text: >
            让 Linaro 开发人员服务帮助您的公司处理与 Arm 产品实施相关的所有安全方面。
  - row: container_row
    style: text-center dotted-border-bottom
    sections:
      - format: buttons
        buttons_content:
          - title: 联系我们
            url: "#ds_contact_form"
            style: btn btn-primary btn-lg my-md-3 d-none d-md-inline-block
              ds_contact_form_btn
          - title: 联系我们
            url: "#ds_contact_form"
            style: btn btn-primary btn-sm my-2 d-inline-block d-md-none ds_contact_form_btn
  - row: container_row
    style: text-center
    sections:
      - format: custom_include
        source: services/icon_links.html
  - row: custom_include_row
    source: services/developer_services_form.html
icon: /assets/images/content/Icon_Security.svg
image: /assets/images/content/Rocket_2.png
---
