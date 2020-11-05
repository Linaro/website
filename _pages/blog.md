---
title: Blog
permalink: /blog/
description: >
  This is the official Linaro blog.
tags_enabled: true
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/post_search.html
        payload:
          name: url
          search_label: LinaroBlog
          category: blog
      - format: custom_include
        source: blog/display_latest_posts.html
        category: blog
        limit: 22
---
