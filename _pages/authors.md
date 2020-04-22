---
title: Authors
permalink: /authors/
layout: flow
jumbotron:
    title: Authors
    inner_class: dotted
    description: ""
pagination:
    title: "Authors - Page :num"
    enabled: true
    collection: authors
    sort_field: 'name'
    sort_reverse: false
    trail:
        before: 4
        after: 4
css_bundle: blog
redirect_from:
- /author/
flow:
    - row: custom_include_row
      source: display_authors.html
    - row: custom_include_row
      source: author-pagination.html
---
