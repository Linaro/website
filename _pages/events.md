---
title: Events
permalink: /events/
image: /assets/images/content/Tech_Background.jpg
description: >
  Linaro attends, hosts and sponsors many events each year. See the events we are a part of below.
jumbotron:
  title: Events
  class: text-center about_header
  title-class: font-weight-bold my-5
  image: /assets/images/content/Tech_Background.jpg
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
