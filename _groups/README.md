---
title: Segment Groups
description: |-
    Linaro was established in 2010 to reduce fragmentation and redundant effort in open source software for mobile applications.
keywords: Linaro, mobile, toolchain, middleware, open source, Android, code, validation, testing, Boards
permalink: /groups/
---
<div class="col-xs-12 group_icon_col">
{% assign groups_list = site.groups | sort: 'group_id' %}
{% for group in groups_list %}
{% if group.icon %}
<div class="col-xs-6 col-sm-2">
<a href="{{group.permalink}}">
<picture>
<source srcset="{% if group.icon_hd %}{% asset_path '{{ group.icon_hd }}' %}{% endif %}" media="(max-width: 991px)" />
<source srcset="{% if group.icon %}{% asset_path '{{group.icon}}' %}{% endif %}" media="(min-width: 992px)" />
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path '{{group.icon}}'%}" class="lazyload img-responsive group_icon"/>
</picture>
</a>
</div>
{% endif %}
{% endfor %}
</div>


# Segment Groups

Linaro was established in 2010 to reduce fragmentation and redundant effort in open source software for mobile applications. The organization’s original scope covered kernel consolidation, toolchain evolution and mobile middleware. In Linaro’s first few years, this scope expanded to add work in mobile graphics, power management, Android and functions supporting the delivery of reliable and robust code - QA, continuous integration and validation testing, and build systems. Linaro’s engineering group during this period was made up of groups formed from member assignee engineers and Linaro employees that were focused on these areas.

Members have always been at the heart of Linaro - both in providing resources and determining what work Linaro should focus on. From very soon after the launch of Linaro, a few members identified the need for some member-specific work to be carried out confidentially and dedicated landing teams were formed within the Linaro member services organization. As Linaro has attracted more members, this organization has grown and many of it engineers are highly ranked kernel contributors with their output appearing in members’ shipping products.

In 2012, companies from outside the mobile industry began to approach Linaro and this resulted in the establishment of segment focused groups: the Linaro Enterprise Group (LEG) in November 2012, the Linaro Networking Group (LNG) in February 2013, The Linaro Digital Home Group (LHG) in May 2014, Linaro Mobile Group (LMG) in July 2014 and the Linaro Community Boards Group (LCG) in February 2015. The introduction of these groups has brought in more work to Linaro that is not only shared within an individual segment, but also between segments and this has resulted in the formation of new core engineering groups, most notably for Virtualization and Security.


***
<h2> Linaro Group Members</h2>

{% assign all_group_members = "" %}
{% assign groups_list = site.groups | sort: 'group_id' %}
{% for group in groups_list %}
{% if group.members_key %}
{% assign members = site.data.members[group.members_key] %}
<div class="col-xs-12 group_member_images">
<h5>{% if group.group_short_name %}{{group.group_short_name | upcase }} Members {% endif %}</h5>
{% for member in members %}
<div class="col-md-2 col-sm-3 col-xs-4">
<a href="{{member.url}}" title="{{member.name}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive group_members_img center-block lazyload">
</a>
</div>
{% endfor %}
</div>
{% endif %}
{% endfor %}

{% assign loop_members = all_group_members | split: ',' %}
{% capture unique_members %}{{ loop_members | uniq | join: "," }}{% endcapture %}

{% for each in unique_members %}
  {{each}}
{% endfor %}
