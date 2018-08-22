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
<div class="tab-content" id="tabbed_nav_content"><!--Start Tab Content-->
<div role="tabpanel" class="tab-pane active" id="events">
{% assign events = site.pages | where: 'event', 'true' %}
{% for event-page in events %}
<div class="col-sm-4">
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
</div>
<div role="tabpanel" class="tab-pane" id="calendar">
{% include media.html media_url="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=linaro.org_57i79nkmucufvn4rpm2mldkkeo%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=Europe%2FLondon" %}
</div>
</div>