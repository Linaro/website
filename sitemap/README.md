---
layout: container-breadcrumb
title: Sitemap
description: |-
    Listing of all the sections and links of the Linaro website.
permalink: /sitemap/
---
<div class="row">
<div class="col-xs-12 col-sm-6" markdown="1">
# Authors
<ul class="list-unstyled">
{% for author in site.authors %}
<a href="{{author.url}}">
    <li>{{author.name}}</li>
</a>
{% endfor %}
</ul>
# Companies
<ul class="list-unstyled">
{% for company in site.company %}
<a href="{{company.url}}">
    <li>{{company.name}}</li>
</a>
{% endfor %}
</ul>
# Pages
{% assign pages = site.pages | sort:'title' %}
<ul class="list-unstyled">
{% for page in pages %}
{% if page.title %}
<a href="{{page.url}}">
    <li>{{page.title}}</li>
</a>
{% endif %}
{% endfor %}
</ul>
</div>
<div class="col-xs-12 col-sm-6" markdown="1">
# Posts
{% for category in site.categories %}
{% capture category_name %}{{ category | first }}{% endcapture %}
## {{category_name | capitalize }}
<ul class="list-unstyled">
{% for post in site.categories[category_name] %}
<a href="{{post.url}}">
    <li>{{post.title}}</li>
</a>
{% endfor %}
</ul>
{% endfor %}
</div>
</div>





