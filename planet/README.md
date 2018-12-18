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
        url: https://feed.rssunify.com/5c18cca471bd0/rss.xml
        class: btn btn-primary
        icon: fa fa-rss
permalink: /planet/
js-package: rss
css-package: planet
---
<div class="col-sm-3 no-padding pr-sm-15">
    <div class="panel-group" id="author-accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title text-center">
                <a role="button" data-toggle="collapse" data-parent="#author-accordion" href="#authorsCollapse" aria-expanded="true" aria-controls="authorsCollapse">
                Authors
                </a>
            </h4>
            </div>
            <div id="authorsCollapse" class="panel-collapse collapse dont-collapse-sm" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                    <div id="planet-list"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-sm-9 no-padding feed">
    <h3 class="text-center">Feed <a href="https://feed.rssunify.com/5c18cca471bd0/rss.xml"><i class="fa fa-rss"></i></a></h3>
    <img id="loader" class="img-responsive" alt="Loading Icon" src="/assets/images/loading.gif"/>
    <div id="feed">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>
    </div>
</div>