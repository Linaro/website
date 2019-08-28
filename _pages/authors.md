---
title: Authors
permalink: /authors/
description: >
    Here you can find an index of all our content authors.
layout: flow
pagination:
    title: "Authors - Page :num"
    enabled: true
    collection: authors
    sort_field: 'name'
    sort_reverse: false
    trail:
        before: 4
        after: 4
css-package: blog
redirect_from:
- /author/
flow:
    - row: main_content_row
    - row: custom_include_row
      source: author-pagination.html
---
This page displays all authors.
