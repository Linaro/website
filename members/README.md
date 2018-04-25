---
title: Members
description: |-
    Members currently working with Linaro and how to become a member of Linaro
layout: container-breadcrumb
permalink: /members/new/
js-package: members
css-package: members
---
Membership of Linaro is open to all interested companies, including Arm licensees, device companies using Arm processors, Linux distributions and other companies who wish to influence the future of Linux on Arm. Core, Club and Group members all provide funding for Linaro and engineering assignees. To learn more about our membership please see: [Membership Rules of Linaro](/assets/pdf/Membership_Rules_of_Linaro_Limited_Effective_26th_July_20122.pdf) and the [Articles of Association](/assets/pdf/Linaro-Articles-of-Association-New-June-2010.pdf).

The current members are listed below. If you are interested in joining these industry leaders, please contact Joe Bates at [contactus@linaro.org](mailto:contactus@linaro.org).


# Core Members

Core membership is the highest level within Linaro. Core members have a seat on the Linaro board of directors, two votes on the Technical Steering Committee (TSC) and unlimited access to all of Linaro’s activities.

{% assign core_members = site.data.members["core_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Club Members

Club membership is the starting point for most of Arm’s licensees who produce chips in a range of segments. There is one voted representative of the Club members on the Linaro board of directors and each Club member has one vote on the TSC.

{% assign core_members = site.data.members["club_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Group Members

Group members have a vote on their group steering committee and an elected representative on the TSC. Group membership is a good way for companies with a focus in a particular segment to get involved and influence the direction of Linaro’s work in that segment. There are currently five segment groups at Linaro: [Linaro Enterprise Group (LEG)](#leg), [Linaro Home Group (LHG)](#lhg), [Linaro Mobile Group (LMG)](#lmg), [Linaro Networking Group (LNG)](#lng) and our newest group – [Linaro Community Board Group (LCG)](https://www.96boards.org). Below are the lists of the members of each respective group.

{% assign core_members = site.data.members["group_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Linaro Enterprise Group (LEG)

The purpose of the Linaro Enterprise Group (LEG) is to collaborate and accelerate the development of foundational software for Arm Server Linux. LEG benefits have broad industry implications, including time to market acceleration, lower development costs, and access to innovative and differentiated systems, fundamental to the Arm ecosystem.

{% assign core_members = site.data.members["leg_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Linaro Networking Group (LNG)

The Linaro Networking Group (LNG) is an autonomous segment focused group that is responsible for engineering development in the networking space. Some activities of this group may be of shared interest with other segments and conducted by another working group, e.g. much virtualization work is of interest to mobile, servers and networking and is conducted by the Virtualization working group. The LNG engineering team is divided into three groups: Foundational, Big Endian and OpenDataPlane.

{% assign core_members = site.data.members["lng_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Linaro Home Group (LHG)

Linaro Digital Home Group (LHG) purpose is to work on solutions common to its members, namely those related to open source software for Arm-based set top boxes, smart TVs, media boxes, TV dongles and home gateway products.

{% assign core_members = site.data.members["lhg_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Linaro Mobile Group (LMG)

Linaro Mobile Group (LMG) was formed to focus on the mobile segment. Linaro’s mobile efforts exist across it’s organization i.e. working groups, platforms etc.. LMG will focus on the Linaro mobile roadmap and strategy.

{% assign core_members = site.data.members["lmg_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Linaro IoT and Embedded (LITE) Group

The LITE Group works on common open source software foundations for IoT and embedded applications. LITE will focus on delivering end to end open source reference software for more secure connected products, ranging from sensors and connected controllers to smart devices and gateways, for the industrial and consumer markets.

{% assign core_members = site.data.members["lite_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# High Performance Computing (HPC)

The HPC SIG was officially launched at Linaro Connect Las Vegas in September 2016 to drive the adoption of ARM in HPC through the creation of a data center ecosystem. It is a collaborative project comprised of members and an advisory board. Current members include ARM, HiSilicon, Qualcomm, Fujitsu, Cavium, Red Hat and HPE. CERN and Riken are on the advisory board.

{% assign core_members = site.data.members["hpc_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# 96boards

96Boards is the first open hardware specification that provides a platform for the delivery of compatible low-cost, small footprint 32-bit and 64-bit Cortex-A boards. Corporate members of Linaro provide funding and engineers plus direction through various steering committees. Resources are split into semi-autonomous groups with their own members. LCG is one of these groups and its member companies contribute to the development of the 96Boards specification, the maintenance of the 96Boards website and support for the software builds for their compatible boards. LCG membership is required for 96Boards certification.

Because this group is all about ecosystem development and encouraging the production of add-on products, there are also opportunities for companies to participate as partners who engage in board manufacturing, board distribution and/or add-on product distribution and manufacturing.

## 96Boards Manufacturing Partners

{% assign sorted_manufacturing_partners = site.data.members.manufacturing_partners | sort: 'name' %}
{% for member in sorted_manufacturing_partners %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

## 96Boards Steering Committee

{% assign sorted_steering_committee = site.data.members.steering_committee | sort: 'name' %}
{% for member in sorted_steering_committee %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

## 96Boards Mezzanine Partners

{% assign sorted_mezzanine_partners = site.data.members.mezzanine_partners | sort: 'name' %}
{% for member in sorted_mezzanine_partners %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}' %}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Community Members

Community membership is a special level of membership granted to organizations that have contributed significantly to Linaro’s development and is by invitation of the Linaro board.

{% assign core_members = site.data.members["community_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# Community Initiatives

{% assign core_members = site.data.members["community_initiatives"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}

# DeviceTree Members

{% assign core_members = site.data.members["devicetree_members"] | sort: 'name' %}
{% for member in core_members %}
<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 vcenter-img">
<a href="{{member.url}}">
<img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}"
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
class="img-responsive members-img lazyload center-block"/>
</a>
</div>
{% endfor %}