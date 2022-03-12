---
lang: ch
title: 会员资格
description: Linaro 一直被列为 Linux 内核的全球前五位贡献者之一，并参与了 70 多个开源项目。
permalink: /membership/
keywords:
  - Arm
  - Open Source
js-package: membership
css_bundle: membership
layout: flow
jumbotron:
  class: text-center about_header header_2021
  title: 影响 Arm 软件的未来
  title-class: font-weight-bold my-5
  inner_class: py-5
  image: /assets/images/content/member__banner_image.jpg
flow:
  - row: container_row
    style: bg-light
    sections:
      - format: custom_include
        source: membership/members_section.html
  - row: container_row
    style: membership_text
    sections:
      - format: text
        text_content:
          text: >-
            ## Linaro会员

            成为 [Linaro](https://www.linaro.org/about/) 会员意味着在有助于开辟Arm新市场以及解决常见问题的项目上进行协作。 协作显著减少了许多 Arm 平台之间的软件碎片化，使参与的公司和社区能够降低基于Arm 软件上的开发和验证成本。


            **实际上，成为 Linaro 会员有两个部分。** 


            一部分是Linaro和其他行业领导者的技术讨论，建立路标和战略并一致通过。


            另一部分是协作工程是在Linaro、成员工程师和开源社区之间进行，来提供这些解决方案。


            从这个意义上说，我们提供是一个独一无二的论坛，在那里产生的实际软件工程，是由于成员公司与Linaro的Arm软件专家、其他行业领导者和开源社区合作的结果。


            除了 Linaro 会员资格之外，还有其他的参与Linaro的方式。 如果您需要在 Arm 上构建产品方面得到帮助并希望利用 Linaro的Arm和开源专业知识，那么与 [Linaro 开发人员服务](https://www.linaro.org/services/) 合作是您的正确选择。


            或者，如果您只是想访问 Linaro 的任何版本，您可以在我们的 [下载页面](https://www.linaro.org/downloads/) 上找到这些。 除了我们的会员和服务客户外，我们还为社区提供支持。 要提交支持查询，请转到 [Linaro 支持](https://www.linaro.org/support/) 页面。
  - row: container_row
    style: membership_panels bg-light
    sections:
      - format: text
        class: test
        text_content:
          text: >
            ## 成为 Linaro 会员的价值是什么？

            虽然取决于会员公司拥有的会员类型，他们的影响水平有所不同，但所有会员都受益于三个关键因素。
      - format: custom_include
        source: membership/members_collapse_panels.html
  - row: container_row
    background_image: /assets/images/content/member__banner_image.jpg
    style: membership_panels bg-light text-dark
    sections:
      - format: text
        class: test
        text_content:
          text: |
            ## Linaro 提供四种不同类型的会员资格
      - format: custom_include
        source: membership/membership_types_tabs.html
  - row: container_row
    sections:
      - format: title
        title_content:
          size: h2
          style: text-dark
          text: 要了解有关会员资格的更多信息，请填写此表格
      - format: custom_include
        source: membership/membership_form.html
    style: membership_form large_type bg-primary text-white
---
