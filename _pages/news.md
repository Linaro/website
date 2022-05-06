---
title: News
description: Get the latest news from the Linaro team, including industry news,
  our latest projects and company news.
permalink: /news/
tags_enabled: true
jumbotron:
  class: text-center about_header
  title: News
  title-class: font-weight-bold my-5
  inner_class: py-5
  image: /assets/images/content/news_sm.jpg
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/post_search.html
        payload:
          name: url
          search_label: LinaroNews
          category: news
      - format: custom_include
        source: blog/display_latest_posts.html
        category: news
        limit: 22
---
