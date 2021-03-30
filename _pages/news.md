---
title: News
permalink: /news/
description: >
  Here you can find all of the latest Linaro news.
tags_enabled: true
jumbotron:
  title: News
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
