---
title: Authors
permalink: /authors/
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
    - row: custom_include_row
      source: display_authors.html
    - row: custom_include_row
      source: author-pagination.html
---
