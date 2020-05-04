---
title: Resources
description: >-
    Find the latest that Linaro has to offer including blogs, press releases, presentations and videos.
layout: flow
permalink: /resources/
js-package: resources
css_bundle: resources
jumbotron:
    title: Resources
    inner_class: dotted
    description: ""
    image: /assets/images/content/resources-header.png
flow:
    - row: container_row
      style: block_row
      sections:
        - format: block
          style: text-center text-dark latest_resources_blocks
          block_section_content:
            item_width: 5ths
            blocks:
              - title: Linaro News
                url: /news/
                description: >
                        Click here for Linaro News & Press Releases
                buttons:
                    - title: View
                      url: /news/
                      style: btn-primary
              - title: The Blog
                url: /blog/
                description: >
                        Click here for the official Linaro blog
                buttons:
                    - title: View
                      url: /blog/
                      style: btn-primary
              - title: Planet Linaro
                url: /planet/
                description: >
                        Read the latest blogs from our world class engineers
                buttons:
                    - title: View
                      url: /planet/
                      style: btn-primary
              - title: Events
                url: /events/
                description: >
                        Find out about the events that we host and attend.
                buttons:
                    - title: View
                      url: /events/
                      style: btn-primary
              - title: Linaro Connect
                url: https://connect.linaro.org
                description: >
                        View our Connect Event website for resources and more.
                buttons:
                    - title: View
                      url: https://connect.linaro.org
                      style: btn-primary
    - row: custom_include_row
      source: resources/latest_resources.html
    - row: custom_include_row
      source: resources/social_media_feeds.html
---
