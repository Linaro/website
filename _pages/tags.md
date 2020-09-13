---
title: Tags
permalink: /blog/tags/
layout: flow
flow:
 - row: main_content_row
---
<!-- Create empty arrays -->
{% assign tags = '' | split: ',' %}
{% assign unique_tags = '' | split: ',' %}

<!-- Map and flatten -->
{% assign blog_tags =  site.categories["Blog"] | map: 'tags' | join: ',' | join: ',' | split: ',' %}
{% assign news_tags =  site.categories["News"] | map: 'tags' | join: ',' | join: ',' | split: ',' %}

<!-- Push to tags -->
{% for tag in blog_tags %}
  {% assign tags = tags | push: tag %}
{% endfor %}
{% for tag in news_tags %}
  {% assign tags = tags | push: tag %}
{% endfor %}

{% assign tags = tags | sort %}
{% for tag in tags %}
  {% unless tag == previous %}
    {% assign unique_tags = unique_tags | push: tag %}
  {% endunless %}
  {% assign previous = tag %}
{% endfor %}

{{unique_tags | jsonify }}

