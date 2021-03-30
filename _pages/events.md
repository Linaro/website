---
title: Events
permalink: /events/
image: /assets/images/content/yvr18-group-photo.jpg
description: >
    Linaro attends, hosts and sponsors many events each year. See the events we are a part of below.
jumbotron:
  title: Events
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
