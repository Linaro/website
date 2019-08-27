---
title: Resources
description: >-
    Find the latest that Linaro has to offer including blogs, press releases, presentations and videos.
layout: flow
permalink: /resources/
js-package: resources
css-package: resources
jumbotron:
    triangle-divider: true
    background-image: /assets/images/content/resources-header.png
flow:
    - row: container_row
      style: block_row
      sections:
        - format: block
          style: text-center text-white latest_resources_blocks
          item_width: 5ths
          content:
              - title:
                    size: h3
                    content: Linaro News
                url: /news/
                text:
                    content: >
                         Click here for Linaro News & Press Releases
              - title:
                    size: h3
                    content: The Blog
                url: /blog/
                text:
                    content: >
                         Click here for the official Linaro blog
              - title:
                    size: h3
                    content: Planet Linaro
                url: /planet/
                text:
                    content: >
                         Read the latest blogs from our world class engineers
              - title:
                    size: h3
                    content: Events
                url: /events/
                text:
                    content: >
                        Find out about the events that we host and attend.
              - title:
                    size: h3
                    content: Linaro Connect
                url: https://connect.linaro.org
                text:
                    content: >
                        View our Connect Event website for resources and more.
    - row: custom_include_row
      source: resources/latest_resources.html
    - row: custom_include_row
      source: resources/social_media_feeds.html
---
