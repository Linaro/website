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


<div class="container">
<div class="row">
<div class="col-xs-12">
    <h2>Workshops</h2>
</div>
</div>
<div class="row">

</div>
</div>
{% assign connects = site.data.connects | sort: "start-date" | reverse %}
<div class="container">
<div class="row">
<div class="col-xs-12">
    <h2>Linaro Connect Events</h2>
</div>
</div>
<div class="row">
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
</div>
</div>