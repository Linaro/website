---
title: Membership
description: |-
    Linaro helps you work with the latest open source technology, building support in upstream projects and ensuring smooth product roll outs and secure software updates. Instead of duplicating effort, members share engineering costs to accelerate innovation and time to market.
layout: empty
permalink: /membership/
js-package: membership
css-package: membership
jumbotron:
    background-image: /assets/images/content/membership-bg.jpg
    title: Join Linaro to accelerate the deployment of your Arm-based solutions
    description: >-
        Linaro helps you work with the latest open source technology, building support in upstream projects and ensuring smooth product roll outs and secure software updates. Instead of duplicating effort, members share engineering costs to accelerate innovation and time to market.
---
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
        <h2 class="text-center fly">Membership Benefits</h2>
        <div class="col-xs-12 col-sm-4 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Regardless of the industry you operate in, there are common software foundations that you can use to deploy your products. By working with Linaro and its members on the core software, you can focus your attention on differentiation.">
                <span class="key-factor-title">
                    <span class="bold">Enable differentiation</span> with <span class="bold">open source</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Developing and maintaining software for the life of your products is costly if you do it on your own. Working through Linaro's shared engineering resource together with other members enables you to share the workload, thereby reducing costs and time to market.">
                <span class="key-factor-title">
                    <span class="bold">Accelerate development</span> and <span class="bold">reduce costs</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Many of Linaro's engineers are recognized world leaders. Linaro is consistently listed in the top five company contributors to the Linux kernel and a major contributor to over 70 other open source projects, including several maintained by Linaro engineers.">
                <span class="key-factor-title">
                    Boost your <span class="bold">engineering</span> with Linaro’s <span class="bold">software expertise</span>
                </span>
            </div>
        </div>
    </div>
</div>
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

<div class="container boards-members fly">
<h2 class="text-center">96Boards</h2>
{% for member in sorted-boards-members %}
<div class="col-xs-6 col-sm-3 col-md-2 member-col">
<a href="{{member.url}}">
<div class="member lazyload" style="background-image: url('/assets/images/members/{{member.image}}');"></div>
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
        <h2 class="text-center fly">Levels of Engagement</h2>
<div markdown="1" class="fly">
Membership of Linaro is open to all interested companies, including Arm licensees, device companies using Arm processors, software distributions and other companies who wish to influence the future of open source on Arm. Members all provide funding for Linaro and some levels provide engineering assignees. To learn more about our membership please see: [Membership Rules of Linaro](https://www.linaro.org/assets/pdf/Membership_Rules_of_Linaro_Limited_Effective_26th_July_20122.pdf) and the [Articles of Association](https://www.linaro.org/assets/pdf/Linaro-Articles-of-Association-New-June-2010.pdf).

There are multiple levels of membership and different ways to engage in projects that Linaro runs. Core and Club membership provide influence and participation across everything Linaro does, others levels provide a route into engagement on focused activities. The current groups include LDCG, LITE, LEDGE and LCG; current SIGs are ODP, HPC and LTNS; current incubators are AI/ML and Automotive; and current projects include 96Boards, DeviceTree, LAVA, LKFT, OP-TEE and Trusted Firmware.
</div>
    </div>
</div>
<div class="row padded-row" id="apply-to-join">
    <div class="container">
        <h2 class="text-center fly">Become a member</h2>
        <hr>
        <div class="col-xs-12 text-center">
            <a class="btn email" href="mailto:contact@linaro.org?subject=Linaro.org - Membership">
                Apply to Join
            </a>
        </div>
    </div>
</div>