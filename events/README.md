---
title: Events
permalink: /events/
layout: container-breadcrumb
css-package: events
---
<ul class="nav nav-tabs" role="tablist" id="tabbed_nav">
 <li role="presentation">
    <a href="/latest/events/">
        Calendar
    </a>
  </li>
  <li role="presentation" class="active">
    <a href="/events/">
        Past Events
    </a>
  </li>
</ul>
{% assign events = site.pages | where: 'event', 'true' %}
{% for event-page in events %}
<div class="col-sm-4 no-padding">
    <a href="{{event-page.url}}">
        <div class="event-block">
            <div class="event-image" style="background-image: url('{{event-page.image.path}}')"></div>
            <div class="event-title">
                <h3>{{event-page.title}}</h3>
            </div>
        </div>
    </a>
</div>
{% endfor %}
{% assign connects = site.data.connects | sort: "start-date" | reverse %}
{% for event-page in connects %}
<div class="col-sm-4 no-padding">
    <a href="https://connect.linaro.org/resources/{{event-page.id | downcase }}/">
        <div class="event-block">
            <div class="event-image" style="background-image: url('https://connect.linaro.org/assets/images/content/{{event-page.placeholder}}')"></div>
            <div class="event-title">
                <h3>{{event-page.long-name}}</h3>
            </div>
        </div>
    </a>
</div>
{% endfor %}
