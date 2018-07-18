---
title: Hub
description: >-
  All the latest news including press releases, blogs and social media as well
  as Linaro events.
layout: container-breadcrumb
permalink: /latest/hub/
css-package: hub
---

<div class="row hub-row">
  <div class="col-sm-3 hub-block">
  <a href="/blog/"><div class="hub-block-inner light hub-green" markdown="1">

### News
Click here for Linaro News &amp; PR

</div></a>
</div>
  <div class="col-sm-3 hub-block">
  <a href="/blog/"><div class="hub-block-inner light hub-blue" markdown="1">

### Blog
Click here for Linaro Blog

</div></a>
</div>
  <div class="col-sm-3 hub-block">
  <a href="/planet/"><div class="hub-block-inner light hub-pink" markdown="1">
### Planet
Click here for Planet Linaro
</div></a>
</div>
  <div class="col-sm-3 hub-block">
  <a href="http://connect.linaro.org"><div class="hub-block-inner light hub-grey" markdown="1">
### Linaro Connect
Click here for latest connect
</div></a>
</div>
  <p>
</p>
</div>

<div class="row hub-row">
  <div class="col-sm-4 text-center" markdown="1">
## Latest News
<em></em> <em><ul class="nav nav-stacked">
{% for news in site.categories.News limit: 5 %}
<a href="{{news.url}}"><li>{{news.title}}</li></a><hr>
{% endfor %}
</ul><a href="/news/" class="btn btn-primary center-block">More News</a></em></div>
  <em>
</em>
  <div class="col-sm-4 text-center" markdown="1"><em>
## Latest Blogs
</em> <em></em><ul class="nav nav-stacked">
{% for blog in site.categories.blog limit: 5 %}
<a href="{{blog.url}}"><li>{{blog.title}}</li></a><hr>
{% endfor %}
</ul><a href="/blog/" class="btn btn-primary center-block">More Blogs</a></div>
  <div class="col-sm-4" markdown="1">
## Social Media
<em></em> *
<div class="row no-padding">
  <div class="col-xs-4 hub-social-media-icon text-center">
  <a href="https://wwww.facebook.com/{{site.data.company.facebook_username}}"><i class="icon-facebook"></i><br>
    Facebook
</a>
</div>
  <div class="col-xs-4 hub-social-media-icon text-center">
  <a href="https://www.twitter.com/{{site.data.company.twitter_username}}"><i class="icon-twitter"></i><br>
    Twitter
</a>
</div>
  <div class="col-xs-4 hub-social-media-icon text-center">
  <a href="https://www.linkedin.com/company/{{site.data.company.linkedin_username}}"><i class="icon-linkedin"></i><br>
    LinkedIn
</a>
</div>
  <div class="col-xs-4 hub-social-media-icon text-center">
  <a href="https://plus.google.com/{{site.data.company.google_plus_username}}"><i class="icon-gplus"></i><br>
    Google +
</a>
</div>
  <div class="col-xs-4 hub-social-media-icon text-center">
  <a href="https://www.youtube.com/user/{{site.data.company.youtube_username}}?sub_confirmation=1"><i class="icon-youtube"></i><br>
    Youtube
</a>
</div>
  <div class="col-xs-4 hub-social-media-icon text-center">
  <a href="https://www.youtube.com/user/linaroOnAir?sub_confirmation=1"><i class="icon-youtube-play"></i><br>
    On Air
</a>
</div>
</div><hr></div>
  <p>
</p>
</div>
