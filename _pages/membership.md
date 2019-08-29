---
title: Membership
description: |-
    Linaro is consistently listed as one of the top five contributors worldwide to the Linux Kernel and works on more than 70 open source projects.
layout: jumbotron
permalink: /membership/
js-package: membership
css-package: membership
jumbotron:
    triangle-divider: true
    background-image: /assets/images/content/membership-bg.jpg
    title: Join Linaro to accelerate the deployment of your Arm-based solutions
    description-class: smaller
    description: >-
        Linaro is consistently listed as one of the top five contributors worldwide to the Linux Kernel and works on more than 70 open source projects.
    buttons:
        - title: contact@linaro.org
          url: mailto:contact@linaro.org?subject=Linaro.org - Membership
          class: btn btn-linaro-home
---
<div class="row padded-row testimonials" id="key-factors">
    <div class="container">
        <div class="col-xs-12">
            <h2 class="text-center  m-b-30">The value of Linaro and open source collaboration</h2>
        </div>
        <div class="col-xs-12">
            <div class="owl-carousel owl-theme" id="testimonial_slider">
                <div class="item testimonial_item">
                    <video controls="controls" class="lazyload img-responsive" poster="/assets/images/content/thomas-molgaard-screen.png" preload="none">
                        <source src="https://static.linaro.org/videos/ThomasMolgaardTestimonial.ogv" type="video/ogg">
                        <source src="https://static.linaro.org/videos/ThomasMolgaardTestimonial.webm" type="video/webm">
                        <source src="https://static.linaro.org/videos/ThomasMolgaardTestimonial.mp4" type="video/mp4">
                    </video>
                    <h4>Thomas Molgaard - Director of Product Management at Arm</h4>
                </div>
                <div class="item testimonial_item">
                    <video controls="controls" class="lazyload img-responsive" poster="/assets/images/content/jon-masters-screen.png" preload="none">
                        <source src="https://static.linaro.org/videos/JonMastersTestimonial.ogv" type="video/ogg">
                        <source src="https://static.linaro.org/videos/JonMastersTestimonial.webm" type="video/webm">
                        <source src="https://static.linaro.org/videos/JonMastersTestimonial.mp4" type="video/mp4">
                    </video>
                    <h4>Jon Masters - Computer Architect and Distinguished Engineer at Red Hat</h4>
                </div>
                <div class="item testimonial_item">
                    <video controls="controls" class="lazyload img-responsive" poster="/assets/images/content/larry-wikelius-screen.png" preload="none">
                        <source src="https://static.linaro.org/videos/LarryWikeliusTestimonial.ogv" type="video/ogg">
                        <source src="https://static.linaro.org/videos/LarryWikeliusTestimonial.webm" type="video/webm">
                        <source src="https://static.linaro.org/videos/LarryWikeliusTestimonial.mp4" type="video/mp4">
                    </video>
                    <h4>Larry Wikelius - Vice President, Ecosystem and Partner Enabling at Marvell</h4>
                </div>
                <div class="item testimonial_item">
                    <video controls="controls" class="lazyload img-responsive" poster="/assets/images/content/kouichi-hirai-fujitsu-testimonial-screen.png" preload="none">
                        <source src="https://static.linaro.org/videos/KouichiHiraiTestimonial.ogv" type="video/ogg">
                        <source src="https://static.linaro.org/videos/KouichiHiraiTestimonial.webm" type="video/webm">
                        <source src="https://static.linaro.org/videos/KouichiHiraiTestimonial.mp4" type="video/mp4">
                    </video>
                    <h4>Kouichi Hirai - VP of Software Development at Fujitsu</h4>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row" id="projects">
    <div class="container">
        <div class="col-xs-12 text-center">
            <h2>Projects Linaro <strong>contributes</strong> to:</h2>
        </div>
    </div>
    <div class="owl-carousel owl-theme" id="projects-slider">
        {% assign sorted-projects = site.data.projects | sort: 'name' %}
        {% for project in sorted-projects %}
        <a href="{{project.url}}" target="_blank">
            <div class="item project-item">
                <div class="project-image lazyload" style="background: url('/assets/images/projects/{{project.image}}') no-repeat center center;
                 background-size: contain; -webkit-background-size: contain; -moz-background-size: contain; -o-background-size: contain;"></div>
            </div>
        </a>
        {% endfor %}
    </div>
</div>
<div class="row padded-row" id="key-factors">
    <div class="container">
        <h2 class="text-center ">Membership Benefits</h2>
        <div class="col-xs-12 col-sm-4  key-factor text-center">
            <div class="key-factor-block " data-toggle="tooltip" data-container="body" data-placement="top" title="Regardless of the industry you operate in, there are common software foundations that you can use to deploy your products. By working with Linaro and its members on the core software, you can focus your attention on differentiation.">
                <span class="key-factor-title">
                    <span class="bold">Enable differentiation</span> with <span class="bold">open source</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4  key-factor text-center">
            <div class="key-factor-block " data-toggle="tooltip" data-container="body" data-placement="top" title="Developing and maintaining software for the life of your products is costly if you do it on your own. Working through Linaro's shared engineering resource together with other members enables you to share the workload, thereby reducing costs and time to market.">
                <span class="key-factor-title">
                    <span class="bold">Accelerate development</span> and <span class="bold">reduce costs</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4  key-factor text-center">
            <div class="key-factor-block " data-toggle="tooltip" data-container="body" data-placement="top" title="Many of Linaro's engineers are recognized world leaders. Linaro is consistently listed in the top five company contributors to the Linux kernel and a major contributor to over 70 other open source projects, including several maintained by Linaro engineers.">
                <span class="key-factor-title">
                    Boost your <span class="bold">engineering</span> with Linaro’s <span class="bold">software expertise</span>
                </span>
            </div>
        </div>
    </div>
</div>
<div class="row padded-row" id="members-and-partners">
    <div class="container">
        <h2 class="text-center ">Members & Partners</h2>
            {% assign linaro-members = "" | split: ',' %}
            {% assign boards-members = "" | split: ',' %}

            {% for each in site.data.members %}
                {% if each.id != "boards-ai" and each.id != "boards-partner" and each.id != "boards-mp" and each.id != "boards-sc" %}
                    {% for member in each.members %}
                        {% unless linaro-members contains member %}
                            {% assign linaro-members = linaro-members | push: member %}
                        {% endunless %}
                    {% endfor %}
                {% else %}
                    {% for member in each.members %}
                        {% unless boards-members contains member %}
                            {% assign boards-members = boards-members | push: member %}
                        {% endunless %}
                    {% endfor %}
                {% endif %}
            {% endfor %}

            {% assign sorted-linaro-members = linaro-members | sort: 'name' %}
            {% assign sorted-boards-members = boards-members | sort: 'name' %}
<div class="container linaro-members ">
<h2 class="text-center ">Linaro</h2>
{% for member in sorted-linaro-members %}
<div class="col-xs-6 col-sm-3 col-md-2 member-col ">
<a href="{{member.url}}">
<div class="member lazyload" style="background-image: url('{{member.image}}');"></div>
</a>
</div>
{% endfor %}
<div class="col-xs-12 text-center">
<p class="center-block">
To view Linaro members by level of engagement, click <a href="/members-by-group/">here</a>.
</p>
</div>
</div>

<div class="container boards-members ">
<h2 class="text-center">96Boards</h2>
{% for member in sorted-boards-members %}
<div class="col-xs-6 col-sm-3 col-md-2 member-col">
<a href="{{member.url}}">
<div class="member lazyload" style="background-image: url('{{member.image}}');"></div>
</a>
</div>
{% endfor %}
<div class="col-xs-12 text-center">
<p class="center-block">
To view 96Boards members by level of engagement, click <a href="/members-by-group/">here</a>.
</p>
</div>
</div>
</div>
</div>
<div class="row padded-row" id="membership-levels">
    <div class="container">
        <h2 class="text-center ">Levels of Engagement</h2>
<div markdown="1" class="">
There are multiple levels of membership and different ways to engage in projects that Linaro runs. Core and Club membership provide influence and participation across everything Linaro does, others levels provide a route into engagement on focused activities. Linaro has groups focused on the following segments: [Data Centre & Cloud](https://www.linaro.org/engineering/datacenter-and-cloud/), [IoT & Embedded](https://www.linaro.org/engineering/iot-and-embedded/), [Edge & Fog Computing](https://www.linaro.org/engineering/edge-and-fog-computing/), [Consumer (Android)](https://www.linaro.org/engineering/consumer/) and [HPC](https://www.linaro.org/engineering/high-performance-computing/). Current strategic initiatives are [Artificial Intelligence](https://www.linaro.org/engineering/artificial-intelligence/) and [Autonomous Vehicles](https://www.linaro.org/engineering/autonomous-vehicles/); and current projects include 96Boards, DeviceTree, LAVA, LKFT, OP-TEE and Trusted Firmware.
</div>
    </div>
</div>
<div class="row padded-row" id="apply-to-join">
    <div class="container">
        <h2 class="text-center ">Become a member</h2>
        <div class="col-xs-12 text-center">
            <a class="btn email" href="mailto:contact@linaro.org?subject=Linaro.org - Membership">
                contact@linaro.org
            </a>
        </div>
    </div>
</div>
<div class="row" id="related-news">
    <div class="container">
        <div class="col-xs-12 text-center">
            <h2>Related News</h2>
        </div>
    </div>
    <div class="owl-carousel owl-theme" id="related-news-slider">
        {% assign membership_posts = site.tags.Membership | sort: 'date' | reverse %}
        {% assign external_news = site.data.external_news | where: 'category', 'Membership' |  sort: 'date' | reverse %}
        {% assign all_news = "" | split: "" %}
        {% for item in external_news %}
            {% assign all_news = all_news | push: item %}
        {% endfor %}
        {% for item in membership_posts %}
            {% assign all_news = all_news | push: item %}
        {% endfor %}
        {% assign timeframe = 604800 %}
        {% for news in all_news limit: 10 %}
            {% assign post_in_seconds = news.date | date: "%s" | plus: 0 %}
            {% assign recent_posts = "now" | date: "%s" | minus: timeframe  %}
            <div class="item news-item">
                <h3>{{news.title}}</h3>
                <em class="date">{{news.date |  date: "%A, %B %-d, %Y" }}</em>
                {% if post_in_seconds > recent_posts %}
                   <span class="new-post" title="Post added in the last week.">New</span>
                {% endif %}
                <p>{% if news.description %}{{news.description}}{% else %}{{ news.content | strip_html | truncatewords: 50 }}{% endif %}</p>
                <a href="{{news.url}}" class="btn btn-primary">Read More</a>
            </div>
        {% endfor %}
    </div>
</div>
