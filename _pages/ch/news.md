---
lang: ch
title: 消息
permalink: /news/
description: >
  在这里您可以找到所有最新的 Linaro 新闻。
tags_enabled: true
jumbotron:
  title: 消息
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
