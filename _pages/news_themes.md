---
title: New posts based on Themes
permalink: /news/themes/
exclude_from_sitemap: true
description: >
  Filter blog posts by theme.
jumbotron:
  title: New posts by Theme
  class: text-center about_header
  title-class: font-weight-bold my-5
  image: /assets/images/content/news_sm.jpg
  inner_class: py-5
  description: >
    Find theme tagged news posts here.
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/themes.html
        category: news
---
