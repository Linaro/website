---
title: News
permalink: /news/
description: >
    Here you can find all of the latest Linaro news.
jumbotron:
    title: News
    inner_class: dotted
flow:
    - row: container_row
      sections:
        - format: custom_include
          source: blog/post_search.html
          payload:
              name: url
              data: /assets/json/news.json
          # category: News
        - format: custom_include
          source: blog/display_latest_posts.html
          category: News
---
