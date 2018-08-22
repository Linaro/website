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
<div class="row overlay padded-row" id="why-join">
    <div class="container text-center">
        <h1 class="fly center-block">Why Join?</h1>
        <p class="fly center-block">
            Linaro helps you work with the latest open source technology, building support in upstream projects and ensuring smooth product roll outs and secure software updates. Instead of duplicating effort, members share development costs to accelerate innovation and time to market.
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
        <div class="col-xs-12 col-sm-4 col-lg-2 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Regardless of the industry you operate in, there are common software foundations that you can use to deploy your products.

By working with Linaro and its members on the core software, you can focus your attention on differentiation.">
                <span class="key-factor-title">
                    <span class="bold">Enable differentiation</span> with <span class="bold">open source</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Rather than developing and maintaining all your software for the life of your products on your own, you and other members do the work together through the Linaro shared engineering resource. This reduces the cost for each member and minimizes fragmentation and redundant effort.">
                <span class="key-factor-title">
                    <span class="bold">Accelerate development</span> with <span class="bold">reduce costs</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro engineers combined with developers from member companies create a unique shared engineering resource to support members. This resource has a recognized record of delivering high value collaboration with Linaro consistently in the top five company contributors to the Linux kernel and a major contributor to over 70 other open source projects, including many maintained by Linaro engineers. All members have an opportunity to collaborate directly with Arm engineers in most of Linaro’s engineering groups and this, combined with the expertise from Linaro and other members is one of the key, unique features of Linaro membership.">
                <span class="key-factor-title">
                    Boost your <span class="bold">engineering</span> with Linaro’s <span class="bold">software expertise</span>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro aims to recruit the best open source engineers to work on our members’ projects. Normally, when an engineer works for a company, they only work for their employer, but Linaro’s model enables their expertise to be shared by all members. It also enables access to other company’s engineers through the assignees. Many of our engineers are recognized world leaders and are deeply involved in the projects they work on, in many case being maintainers or leading contributors. Linaro membership provides access to this unique resource.">
                <span class="key-factor-title">
                    Gain access to <span class="bold">maintainers</span> and <span class="bold">unique</span> engineering talent
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="As open source is by definition open to contributions from all, many companies end up working on the same problems with limited coordination. Linaro provides the forums in which engineering work can be coordinated and non-differentiating heavy lifting can be identified and shared. ">
                <span class="key-factor-title">
                   Reduce <span class="bold">fragmentation</span> and <span class="bold">redundant</span> effort
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-lg-2 fly key-factor text-center">
            <div class="key-factor-block fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro is member funded and delivers output to members, into open source projects, and into the community. Founded in 2010 with 6 members, Linaro now has over 20 with 140 staff and a total of over 300 OSS engineers distributed globally. Becoming a Linaro member not only enables you to develop your products, it also enables direct engineering collaboration with other members, such as Arm innovation to take place in the wider Open Source Community. Collaborating with engineers across a wide range of verticals and companies has the added benefit of a broader and longer term view of problem solving, with the potential to accelerate innovation and release better products to market sooner.">
                <span class="key-factor-title">
                   Be part of something bigger
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
</div>
</div>
</div>
<div class="row padded-row" id="membership-levels">
    <div class="container">
        <h2 class="text-center fly">Levels of Engagement</h2>
<div markdown="1" class="fly">
Membership of Linaro is open to all interested companies, including Arm licensees, device companies using Arm processors, software distributions and other companies who wish to influence the future of open source on Arm. Members all provide funding for Linaro and some levels provide engineering assignees. To learn more about our membership please see: [Membership Rules of Linaro](https://www.linaro.org/assets/pdf/Membership_Rules_of_Linaro_Limited_Effective_26th_July_20122.pdf) and the [Articles of Association](https://www.linaro.org/assets/pdf/Linaro-Articles-of-Association-New-June-2010.pdf).

There are multiple levels of membership and different ways to engage in projects that Linaro runs. The table below summarizes the options - please contact us to discuss what will best suit your company. Core and Club membership provide influence and participation across everything Linaro does, others levels provide a route into engagement on focused activities. The current groups include LDCG, LITE, LEDGE and LCG; current SIGs are ODP, HPC and LTNS; current incubators are AI/ML and Automotive; and current projects include 96Boards, DeviceTree, LAVA, LKFT, OP-TEE and Trusted Firmware.
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
