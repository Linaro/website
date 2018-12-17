---
title: Planet Linaro
description: |-
    Planet Linaro includes blog posts gathered from around the web about Linaro.
layout: jumbotron-container
jumbotron:
    background-image: /assets/images/content/downloads-bg.jpg
    title: Planet Linaro
    buttons:
      - title: Planet Feed
        url: https://feed.rssunify.com/5c17729b90d1c/rss.xml
        class: btn btn-primary
        icon: fa fa-rss
permalink: /planet/
js-package: rss
css-package: planet
---
<div class="col-sm-3 no-padding pr-sm-15">
    <h3 class="text-center-mob">Authors</h3>
    <div id="planet-list"></div>
</div>
<div class="col-sm-9 no-padding">
    <h3 class="text-center-mob">Planet Linaro Feed</h3>
    <img id="loader" class="img-responsive" alt="Loading Icon" src="/assets/images/loading.gif"/>
    <div id="feed">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>
    </div>
</div>