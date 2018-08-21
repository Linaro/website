---
title: Membership
description: |-
    Members currently working with Linaro and how to become a member of Linaro.
layout: empty
permalink: /membership/
js-package: membership
css-package: membership
---
<div class="container-fluid" id="why-join-container"  style="background-image: url('/assets/images/content/membership-bg.jpg');">
<div class="row overlay" id="why-join">
    <div class="container text-center">
        <h1 class="fly center-block">Join Linaro to accelerate the deployment of your Arm-based solutions</h1>
        <p class="fly center-block">
            Linaro helps you work with the latest open source technology, building support in upstream projects and ensuring smooth product roll outs and secure software updates. Instead of duplicating effort, members share engineering costs to accelerate innovation and time to market.
        </p>
    </div>
</div>
</div>
<div class="container-fluid">
<div class="row" id="projects">
    <div class="owl-carousel owl-theme" id="projects-slider">
        {% for project in site.data.projects %}
        <a href="{{project.url}}" target="_blank">
            <div class="item project-item">
                <div class="project-image" style="background: url('/assets/images/projects/{{project.image}}') no-repeat center center;
                 background-size: contain; -webkit-background-size: contain; -moz-background-size: contain; -o-background-size: contain;"></div>
            </div>
        </a>
        {% endfor %}
    </div>
</div>
<div class="row padded-row" id="key-factors">
    <div class="container">
        <h2 class="text-center">Membership Benefits</h2>
        <div class="col-xs-12 col-sm-4 col-lg-2 key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <span class="key-factor-title">
                    <span class="bold">Enable differentiation</span> with <span class="bold">open source</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <span class="key-factor-title">
                    <span class="bold">Accelerate development</span> with <span class="bold">reduce costs</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <span class="key-factor-title">
                    Boost your <span class="bold">engineering</span> with Linaro’s <span class="bold">software expertise</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <span class="key-factor-title">
                    Gain access to <span class="bold">maintainers</span> and <span class="bold">unique</span> engineering talent
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <span class="key-factor-title">
                   Reduce <span class="bold">fragmentation</span> and <span class="bold">redundant</span> effort
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <span class="key-factor-title">
                   Be part of something bigger: work with the <span class="bold">industry leaders</span>
                </span>
            </div>
        </div>
    </div>
</div>
</div>