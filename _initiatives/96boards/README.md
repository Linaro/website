---
initiative_id: "1"
title: 96Boards
permalink: /initiatives/96boards/
icon: 96boards-logo.png
icon_hd: 96boards-logo-hd.png
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsPpuLXnSPpCxDUzwhMpGHVT&playnext=1
---
# 96Boards

96Boards is the first open hardware specification that provides a platform for the delivery of compatible low-cost, small footprint 32-bit and 64-bit Cortex-A boards. 96Boards member companies contribute to the development of the specification, the maintenance of the website and support for the software builds for their compatible boards. Membership is required for 96Boards certification.

In addition to membership, there are opportunities for companies to be a part of 96Boards as partners who engage in board manufacturing, board distribution and/or add-on product distribution and manufacturing.

To find out more, please visit [www.96boards.org](https://www.96boards.org)
<div class="col-xs-12 group_member_images 96boards">
<h5>96boards Manufacturing Partners</h5>
{% for member in site.data.members["manufacturing_partners"] %}
<div class="col-md-2 col-sm-3 col-xs-4">
  <a href="{{member.url}}" title="{{member.name}}">
    <img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
     class="img-responsive group_members_img center-block lazyload">
  </a>
</div>
{% endfor %}
</div>

<div class="col-xs-12 group_member_images 96boards">
<h5>96Board Steering Committee</h5>
{% for member in site.data.members["steering_committee"] %}
<div class="col-md-2 col-sm-3 col-xs-4">
<a href="{{member.url}}" title="{{member.name}}">
  <img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
   class="img-responsive group_members_img center-block lazyload">
</a>
</div>
{% endfor %}
</div>

<div class="col-xs-12 group_member_images 96boards">
<h5>96Board Mezzanine Partners</h5>
{% for member in site.data.members["mezzanine_partners"] %}
<div class="col-md-2 col-sm-3 col-xs-4">
<a href="{{member.url}}" title="{{member.name}}">
  <img data-src="{% asset_path '{{member.image}}'%}" alt="{{member.name}}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
   class="img-responsive group_members_img center-block lazyload">
</a>
</div>
{% endfor %}
</div>
