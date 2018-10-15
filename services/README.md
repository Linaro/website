---
title: Linaro Developer Services
description: |-
    Members currently working with Linaro and how to become a member of Linaro.
layout: empty
permalink: /services/
js-package: membership
css-package: membership
---
<div class="container-fluid" id="why-join-container"  style="background-image: url('/assets/images/content/membership-bg.jpg');">
    <div class="row overlay padded-row" id="why-join">
        <div class="container text-center">
            <img data-src="/assets/images/content/LinaroDSVertical.ping" class="lazyload img-responsive services-img" alt="Linaro Developer Services Logo"/>
            <p class="fly center-block">
                Linaro helps you work with the latest open source technology, building support in upstream projects and ensuring smooth product roll outs and secure software updates. Instead of duplicating effort, members share engineering costs to accelerate innovation and time to market.
            </p>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row padded-row" id="key-factors">
        <div class="container">
            <h2 class="text-center fly">Services</h2>
            <div class="col-xs-12 col-sm-4 fly key-factor text-center">
                <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Regardless of the industry you operate in, there are common software foundations that you can use to deploy your products. By working with Linaro and its members on the core software, you can focus your attention on differentiation.">
                    <span class="key-factor-title">
                        Efficiently support the <span class="bold">latest technology</span> features upstream
                    </span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 fly key-factor text-center">
                <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Developing and maintaining software for the life of your products is costly if you do it on your own. Working through Linaro's shared engineering resource together with other members enables you to share the workload, thereby reducing costs and time to market.">
                    <span class="key-factor-title">
                    Reduce burden of <span class="bold">post-release software</span> updates and support
                    </span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 fly key-factor text-center">
                <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Many of Linaro's engineers are recognized world leaders. Linaro is consistently listed in the top five company contributors to the Linux kernel and a major contributor to over 70 other open source projects, including several maintained by Linaro engineers.">
                    <span class="key-factor-title">
                    Available to both <span class="bold">Linaro Member</span> and <span class="bold">non-member</span> companies
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row padded-row" id="members-and-partners">
        <div class="container">
            <h2 class="text-center fly">Members & Partners</h2>
                {% assign linaro-members = "" | split: ',' %}
                {% assign boards-members = "" | split: ',' %}
                {% for each in site.data.members %}
                    {% if each.id != "boards-ai" and each.id != "boards-mezzanine" and each.id != "boards-mp" and each.id != "boards-sc" %}
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
        </div>
    </div>
    <div class="row">
        <div class="container linaro-members ">
            <h2 class="text-center fly">Linaro</h2>
            {% for member in sorted-linaro-members %}
                <div class="col-xs-6 col-sm-3 col-md-2 member-col fly">
                    <a href="{{member.url}}">
                        <div class="member lazyload" style="background-image: url('/assets/images/members/{{member.image}}');"></div>
                    </a>
                </div>
            {% endfor %}
            <div class="col-xs-12 text-center">
                <p class="center-block">
                To view Linaro members by level of engagement, click <a href="/members-by-group/">here</a>.
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container boards-members fly">
            <h2 class="text-center">96Boards</h2>
            {% for member in sorted-boards-members %}
                <div class="col-xs-6 col-sm-3 col-md-2 member-col">
                    <a href="{{member.url}}">
                        <div class="member lazyload" style="background-image: url('/assets/images/members/{{member.image}}');"></div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <div class="container text-center">
            <p class="center-block">
            To view 96Boards members by level of engagement, click <a href="/members-by-group/">here</a>.
            </p>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row padded-row" id="membership-levels">
        <div class="container">
            <h2 class="text-center fly">About</h2>
<div markdown="1" class="fly">
We at Linaro Developer Services are Arm software engineering experts. We pride ourselves on the breadth of our hands-on experience and knowledge, depth of our capabilities, quality of our work and professionalism of the engagements with our customers.

Open Source software is our culture and we have helped many customers work with open source software communities. We also routinely work with customers under non-disclosure on confidential development projects.

Linaro plays an influential and key leadership role across the Arm ecosystem, developing optimized software for advanced Arm technologies in every
segment. Linaro Developer Services make that expertise available to you for use on your project.
</div>
        </div>
    </div>
    <div class="row padded-row" id="apply-to-join">
        <div class="container">
            <h2 class="text-center fly">Apply to Join</h2>
            <div class="cognito fly">
                <script src="https://services.cognitoforms.com/s/KvRQmIn2dku6k6gGP711jw"></script>
                <script>
                    Cognito.load("forms", {
                        id: "14", entry: {
                            "PageUrl": "{{site.url}}{{page.url}}",
                            "RedirectUrl": "{{site.url}}/thank-you/?ref={{page.url}}",
                            "ChoiceField": [{% for member in site.data.members %}"{{member.membership_group_name}}"{% unless forloop.last %}, {% endunless %}{% endfor %}]
                        }});
                </script>
            </div>
        </div>
    </div>
</div>