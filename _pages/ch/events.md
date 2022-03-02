---
lang: ch
title: 活动
permalink: /events/
image: /assets/images/content/yvr18-group-photo.jpg
description: >
    Linaro 每年都会参加、主持和赞助许多活动。 请参阅下面我们参与的活动。
jumbotron:
  title: 活动
flow:
    - row: container_row
      sections:
        - format: custom_include
          source: blog/post_search.html
          payload:
              name: url
              data: /assets/json/events.json
              category: Events
        - format: custom_include
          source: blog/display_latest_events.html
---
