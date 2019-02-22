---
title: Engineering Groups
description: |-
    Linaro was established in 2010 to reduce fragmentation and redundant effort in open source software for mobile applications. The organization’s original scope covered kernel consolidation, toolchain evolution and mobile middleware.
keywords: Linaro, mobile, toolchain, middleware, open source, Android, code, validation, testing, Boards
permalink: /engineering/groups/
---
<div class="col-xs-12 group_icon_col">
{% assign groups_list = site.groups | sort: 'group_id' %}
{% for group in groups_list %}
{% if group.image %}
<div class="col-xs-6 col-sm-3">
    <a href="{{group.permalink}}">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{{group.image}}" class="lazyload img-responsive group_icon"/>
    </a>
</div>
{% endif %}
{% endfor %}
</div>

Linaro was established in 2010 to reduce fragmentation and redundant effort in open source software for mobile applications. The organization’s original scope covered kernel consolidation, toolchain evolution and mobile middleware. In Linaro’s first few years, this scope expanded to add work in mobile graphics, power management, Android and functions supporting the delivery of reliable and robust code - QA, continuous integration and validation testing, and build systems. Linaro’s engineering group during this period was made up of groups formed from member assignee engineers and Linaro employees that were focused on these areas.

Members have always been at the heart of Linaro - both in providing resources and determining what work Linaro should focus on. From very soon after the launch of Linaro, a few members identified the need for some member-specific work to be carried out confidentially and dedicated landing teams were formed within the Linaro member services organization. As Linaro has attracted more members, this organization has grown and many of it engineers are highly ranked kernel contributors with their output appearing in members’ shipping products.

In 2012, companies from outside the mobile industry began to approach Linaro and this resulted in the establishment of segment focused groups: the Linaro Enterprise Group (LEG) in November 2012, the Linaro Networking Group (LNG) in February 2013, The Linaro Digital Home Group (LHG) in May 2014, Linaro Mobile Group (LMG) in July 2014 and the Linaro Community Boards Group (LCG) in February 2015. In 2018, Linaro restructured the segment groups to better align with the evolving technology landscape. This has resulted in the following segment focused groups that exist today: Linaro Datacentre and Cloud Group (LDCG), Linaro Edge (LEDGE), Linaro Consumer Group (LCG) and LITE (Linaro IoT and Embedded).
