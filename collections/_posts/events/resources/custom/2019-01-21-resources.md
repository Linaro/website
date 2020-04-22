---
title: Arm Architecture HPC Workshop Asia 2019 Resources
layout: jumbotron
author: linaro
categories:
- event_resources
- workshop
- arm-hpc-asia-2019
date: '2018-11-01 09:00:00+00:00'
css_bundle: workshop
event: arm-hpc-asia-2019
permalink: /events/arm-hpc-asia-2019/resources/
image: /assets/images/content/hpc-asia-2019.png
event: true
jumbotron:
    background-image: /assets/images/content/hpc-asia-2019.png
    animation: fade
---

<div class="row arm-hpc-row main" id="content-container">
<div class="container">
    <ul class="nav nav-tabs" role="tablist" id="tabbed_nav">
      <li role="presentation">
        <a href="/events/arm-hpc-asia-2019/">
            Welcome
        </a>
      </li>
      <li role="presentation" class="">
        <a href="/events/arm-hpc-asia-2019/#speakers">
            Speakers
        </a>
      </li>
      <li role="presentation" class="">
        <a href="/events/arm-hpc-asia-2019/#schedule-tab">
            Schedule
        </a>
      </li>
      <li role="presentation" class="active">
        <a href="#" role="tab" data-toggle="tab">
            Resources
        </a>
      </li>
    </ul>
<div class="tab-content" id="tabbed_nav_content"><!--Start Tab Content-->

<!-- Start Resources Tab Panel -->
<div role="tabpanel" class="tab-pane tab-pane-legal active" id="resources">
<div class="row events-row">
    {% assign event_posts = site.categories["event_resources"] | where: 'event', 'arm-hpc-asia-2019' | sort: 'date' %}
    {% for post in event_posts %}
        <div class="col-xs-12 col-sm-4">
            <a href="{{post.url}}">
                <div class="event-block">
                    {% if post.image %}
                        <div class="event-image lazyload" style="background: linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('{{post.image.path}}')"></div>
                    {% else %}
                        <div class="event-image lazyload" style="background: linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('{{page.image.path}}')"></div>
                    {% endif %}
                    <div class="slot">{{post.slot}}</div>
                    <div class="event-title">
                        <h3>{{post.title}}</h3>
                    </div>
                </div>
            </a>
        </div>
    {% endfor %}
</div>
</div><!--End Tab panel-->

</div><!--End Tab content-->
</div><!--End Container-->
</div><!--End Row-->
<div class="row no-padding arm-hpc-row top">
    <div class="container" style="background: url(/assets/images/content/hpc-asia-2019.png);background-position: center center;">
        <h1>Open Source HPC Collaboration on Arm Architecture Linaro workshop</h1>
        <small>Monday 14th January 2019 - Guangzhou</small>
    </div>
</div>
